'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type Lab = 'token' | 'rlhf';
type PromptKey = 'weather' | 'history';
type Modality = 'text' | 'image' | 'audio' | 'video';

const llmPrompts = {
  weather: {
    baseAr: 'طقس اليوم',
    baseEn: "Today's weather is",
    stepsAr: ['مشمس', 'و', 'دافئ'],
    stepsEn: ['sunny', 'and', 'warm'],
    candsAr: [
      [{ w: 'مشمس (72%)', p: true }, { w: 'غائم (19%)', p: false }, { w: 'ممطر (9%)', p: false }],
      [{ w: 'و (81%)', p: true }, { w: 'جداً (14%)', p: false }, { w: 'لكن (5%)', p: false }],
      [{ w: 'دافئ (68%)', p: true }, { w: 'معتدل (24%)', p: false }, { w: 'جميل (8%)', p: false }],
    ],
    candsEn: [
      [{ w: 'sunny (72%)', p: true }, { w: 'cloudy (19%)', p: false }, { w: 'rainy (9%)', p: false }],
      [{ w: 'and (81%)', p: true }, { w: 'very (14%)', p: false }, { w: 'but (5%)', p: false }],
      [{ w: 'warm (68%)', p: true }, { w: 'mild (24%)', p: false }, { w: 'clear (8%)', p: false }],
    ],
    noteAr: '✅ مثال كتاب الوزارة (ص 68 / p. 78): يولد نموذج اللغة الجملة بتكرار التنبؤ بالكلمة التالية ذات الاحتمال الإحصائي الأعلى بناءً على أنماط النصوص التي تدرب عليها.',
    noteEn: '✅ Textbook Example (p. 78): The language model generates text by repeatedly predicting the next word/token with the highest statistical probability.',
  },
  history: {
    baseAr: 'تأسست مدرسة المدينة التاريخية في عام',
    baseEn: 'The historic town school was founded in',
    stepsAr: ['1894', 'على يد', 'المهندس حسن باشا (هلوسة! ⚠️)'],
    stepsEn: ['1894', 'by', 'Mayor Arthur Pendelton (Hallucination! ⚠️)'],
    candsAr: [
      [{ w: '1894 (64% — معقول إحصائياً لكنه مخترع!)', p: true }, { w: '1920 (22%)', p: false }, { w: '1952 (14%)', p: false }],
      [{ w: 'على يد (79%)', p: true }, { w: 'بواسطة (15%)', p: false }, { w: 'خلال (6%)', p: false }],
      [{ w: 'المهندس حسن باشا (61% — اسم مخترع بثقة!)', p: true }, { w: 'أهالي المدينة (29%)', p: false }, { w: 'وزارة المعارف (10%)', p: false }],
    ],
    candsEn: [
      [{ w: '1894 (64% — Plausible but invented!)', p: true }, { w: '1920 (22%)', p: false }, { w: '1952 (14%)', p: false }],
      [{ w: 'by (79%)', p: true }, { w: 'under (15%)', p: false }, { w: 'during (6%)', p: false }],
      [{ w: 'Mayor Arthur Pendelton (61% — Confident Hallucination!)', p: true }, { w: 'town citizens (29%)', p: false }, { w: 'the council (10%)', p: false }],
    ],
    noteAr: '🚨 كاشف الهلوسة (نشاط فكر كمهندس ص 73 / p. 83): لاحظ كيف اختار النموذج تاريخاً واسماً يبدوان معقولين إحصائياً ولغوياً في سياق الجملة، لكنهما غير صحيحين تاريخياً (Hallucination)! इसलिए يجب التحقق من الحقائق (Fact-checking) قبل النشر.',
    noteEn: '🚨 Hallucination Alert (Think as an Engineer p. 83): The model picked a date and founder name that sound statistically plausible in context, even though they are factually invented! Always fact-check primary sources.',
  },
} as const;

const modalityDescriptions: Record<Modality, { ar: string; en: string; vector: string }> = {
  text: {
    ar: 'وسيط النص (Text Modality): تُقسَّم الجمل إلى رموز نصية (Tokens) وتُحوَّل إلى متجهات عددية في الفضاء المشترك.',
    en: 'Text Modality: Sentences are tokenized and mapped into the shared numerical vector space.',
    vector: '[0.24, -0.81, 0.55, ...]',
  },
  image: {
    ar: 'وسيط الصورة (Image Modality): تُحوَّل بكسلات الصورة (مثل صورة الملاحظة المكتوبة بخط اليد ص 73) إلى نفس التمثيل العددي المشترك ليفهمها النموذج مع النص!',
    en: 'Image Modality: Image pixels (like the handwritten note photo on p. 84) are encoded into the exact same numerical representation!',
    vector: '[0.26, -0.79, 0.52, ...]',
  },
  audio: {
    ar: 'وسيط الصوت (Audio Modality): تُحوَّل الموجات الصوتية إلى متجهات عددية مشتركة، مما يتيح قراءة الملاحظة بصوت عالٍ أو فهم الأوامر المنطوقة.',
    en: 'Audio Modality: Sound waves are mapped into shared numerical vectors, enabling speech input and read-aloud output.',
    vector: '[0.25, -0.80, 0.54, ...]',
  },
  video: {
    ar: 'وسيط الفيديو (Video Modality): تُدمج الإطارات المتتابعة والصوت في تمثيل عددي مشترك لمعالجة الفيديو والنص معاً.',
    en: 'Video Modality: Sequential frames and audio map into the shared numerical representation.',
    vector: '[0.23, -0.82, 0.56, ...]',
  },
};

const modalityColors: Record<Modality, string> = {
  text: 'text-cyan-300',
  image: 'text-emerald-300',
  audio: 'text-amber-300',
  video: 'text-purple-300',
};

export function GenerativeAiLabs() {
  const { playSfx } = useApp();
  const [lab, setLab] = useState<Lab>('token');
  const [promptKey, setPromptKey] = useState<PromptKey>('weather');
  const [tokenStep, setTokenStep] = useState(0);
  const [response, setResponse] = useState<'A' | 'B' | null>(null);
  const [modality, setModality] = useState<Modality>('text');
  const prompt = llmPrompts[promptKey];
  const modalityColor = modalityColors[modality];
  const candidates = prompt.candsAr[tokenStep === 3 ? 2 : tokenStep];
  const candidatesEn = prompt.candsEn[tokenStep === 3 ? 2 : tokenStep];
  const playClick = () => playSfx('click');

  const choosePrompt = (next: PromptKey) => {
    playClick();
    setPromptKey(next);
    setTokenStep(0);
  };

  const chooseResponse = (next: 'A' | 'B') => {
    playSfx(next === 'B' ? 'success' : 'error');
    setResponse(next);
  };

  return (
    <section className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-purple-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعامل التفاعلية المزدوجة للدرس 7-3 (كتاب الوزارة ص 68 - 74)</span>
            <span className="lang-en">Lesson 7-3 Dual Interactive LLM, RLHF &amp; Multimodality Labs</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-robot text-purple-400"></i>
            <span className="lang-ar">المعمل (أ): محاكي التنبؤ بالرمز التالي وكاشف الهلوسة • المعمل (ب): استوديو الضبط البشري RLHF وتعدد الوسائط</span>
            <span className="lang-en">Lab A: Next-Token Predictor &amp; Hallucination Detector • Lab B: RLHF Tuner &amp; Multimodal Studio</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => { playClick(); setLab('token'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'token' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">🎲 معمل أ: التنبؤ بالكلمة التالية والهلوسة</span><span className="lang-en">Lab A: Next-Token &amp; Hallucination</span></button>
          <button onClick={() => { playClick(); setLab('rlhf'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'rlhf' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">🤝 معمل ب: ضبط RLHF وتعدد الوسائط</span><span className="lang-en">Lab B: RLHF &amp; Multimodality</span></button>
        </div>
      </div>

      {lab === 'token' ? (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <strong className="text-purple-300"><span className="lang-ar">محاكي التنبؤ بالكلمة التالية وكاشف الهلوسة (ص 68 و 73)</span><span className="lang-en">Next-Token Prediction &amp; Hallucination Detector (pp. 78 &amp; 83)</span></strong>
            <div className="flex gap-2">
              <button onClick={() => choosePrompt('weather')} className={`px-3 py-1 rounded-lg font-bold ${promptKey === 'weather' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">طقس اليوم</span><span className="lang-en">Weather</span></button>
              <button onClick={() => choosePrompt('history')} className={`px-3 py-1 rounded-lg font-bold ${promptKey === 'history' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">مدرسة المدينة التاريخية</span><span className="lang-en">History</span></button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sub font-bold"><span className="lang-ar">النص المتولد خطوة بخطوة:</span><span className="lang-en">Generated Text Stream:</span></span>
              <button onClick={() => { playSfx('success'); setTokenStep(step => step < 3 ? step + 1 : 0); }} className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition">
                <i className="fa-solid fa-forward-step"></i><span className="lang-ar">تنبأ بالكلمة التالية (Next Token)</span><span className="lang-en">Predict Next Token</span>
              </button>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/40 font-mono text-sm sm:text-base text-emerald-300 font-bold" aria-live="polite">
              <span className="lang-ar">{prompt.baseAr} <span className="text-amber-400 underline decoration-wavy">{prompt.stepsAr.slice(0, tokenStep).join(' ')}</span></span>
              <span className="lang-en">{prompt.baseEn} <span className="text-amber-400 underline decoration-wavy">{prompt.stepsEn.slice(0, tokenStep).join(' ')}</span></span>
              {tokenStep < 3 ? <span className="animate-pulse text-purple-400">▋</span> : '✅'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {candidates.map((candidate, index) => (
                <div key={index} className={`p-2 rounded-lg border text-[11px] ${candidate.p ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-bold' : 'bg-slate-950 border-slate-800 text-sub'}`}>
                  <span className="lang-ar">{candidate.p ? '🎯 ' : '• '}{candidate.w}</span>
                  <span className="lang-en">{candidatesEn[index].p ? '🎯 ' : '• '}{candidatesEn[index].w}</span>
                </div>
              ))}
            </div>
            <div className={`p-4 rounded-xl text-xs leading-relaxed text-slate-200 ${promptKey === 'history' ? 'bg-amber-950/40 border border-amber-500/40' : 'bg-slate-900 border border-emerald-500/40'}`}>
              <span className="lang-ar">{prompt.noteAr}</span><span className="lang-en">{prompt.noteEn}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-amber-400"><span className="lang-ar">محاكي الضبط البشري RLHF (ص 69):</span><span className="lang-en">RLHF Human Feedback Tuner (p. 79):</span></strong>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                  <span className="lang-ar">{response === 'B' ? 'المرحلة 3: تطبيق المكافأة ✅' : response === 'A' ? 'المرحلة 2: إشارة العقوبة ⚠️' : 'المرحلة 2: التقييم البشري'}</span>
                  <span className="lang-en">{response === 'B' ? 'Stage 3: RL Reward Applied ✅' : response === 'A' ? 'Stage 2: Penalty Signal ⚠️' : 'Stage 2: Human Eval'}</span>
                </span>
              </div>
              <p className="text-sub text-[11px]"><span className="lang-ar">سأل طالب النموذج: &quot;كيف أستعد لامتحان البرمجة غداً؟&quot;. قيّم الإجابتين لتدريب النموذج بالمكافأة:</span><span className="lang-en">A student asks: &quot;How should I prepare for tomorrow&apos;s programming exam?&quot; Rank the responses to tune via RLHF:</span></p>
              <div className="space-y-2">
                <button onClick={() => chooseResponse('A')} className={`w-full p-3 rounded-xl border text-start space-y-1 transition ${response === 'A' ? 'bg-rose-950/60 border-rose-500' : 'bg-slate-950 border-slate-800 hover:border-rose-500'}`}>
                  <div className="font-bold text-rose-400"><span className="lang-ar">الإجابة (أ) — قبل ضبط RLHF (فظة وغير مطابقة للقصد):</span><span className="lang-en">Response A — Pre-RLHF (Rude / Off-intent):</span></div>
                  <p className="text-sub text-[11px]"><span className="lang-ar">&quot;البرمجة صعبة جداً وكان عليك المذاكرة منذ شهر، اقرأ أي كتاب عشوائي!&quot;</span><span className="lang-en">&quot;Programming is hard and you should have studied a month ago. Just read random pages!&quot;</span></p>
                </button>
                <button onClick={() => chooseResponse('B')} className={`w-full p-3 rounded-xl border text-start space-y-1 transition ${response === 'B' ? 'bg-emerald-950/50 border-emerald-400' : 'bg-slate-950 border-emerald-500/50 hover:border-emerald-400'}`}>
                  <div className="font-bold text-emerald-400"><span className="lang-ar">الإجابة (ب) — مهذبة ومنظمة ومطابقة لقصد المستخدم 👍:</span><span className="lang-en">Response B — Polite, Structured &amp; On-Intent 👍:</span></div>
                  <p className="text-sub text-[11px]"><span className="lang-ar">&quot;راجع المفاهيم الأساسية لكل درس، وحل أسئلة كتاب الوزارة والاختبارات التدريبية، وخذ قسطاً كافياً من النوم.&quot;</span><span className="lang-en">&quot;Review core concepts per lesson, practice textbook questions, and get good sleep.&quot;</span></p>
                </button>
              </div>
              {response && <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300"><span className="lang-ar">{response === 'B' ? '✅ أحسنت! (المرحلة 2 و 3 من RLHF — ص 69): بتقييمك للإجابة (ب) كإجابة مرغوبة، يمنح التعلم المعزز مكافأة موجبة للنموذج ليضبط أوزانه ويعطي إجابات مهذبة ومنظمة ومطابقة لقصد المستخدم دائماً.' : '⚠️ إجابة غير مرغوبة: في التقييم البشري (Human evaluation)، يتم استبعاد الإجابات الفظة أو الخارجة عن القصد وتفضيل الإجابة (ب) لضبط سلوك النموذج.'}</span><span className="lang-en">{response === 'B' ? '✅ Spot On! (RLHF Stages 2 &amp; 3 — p. 79): By ranking Response B higher, reinforcement learning rewards the model to produce polite, helpful, on-intent answers.' : '⚠️ Undesirable Response: During human evaluation, rude or off-intent outputs are ranked low so RLHF tunes the model toward Response B instead.'}</span></div>}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-3">
              <strong className="text-cyan-400"><span className="lang-ar">استوديو تعدد الوسائط والتمثيل المشترك (ص 72 - 73):</span><span className="lang-en">Multimodality &amp; Shared Representation Studio (pp. 82 - 84):</span></strong>
              <p className="text-sub text-[11px]"><span className="lang-ar">اختر نوع البيانات لترى كيف يحولها النموذج إلى تمثيلات عددية في الفضاء المشترك:</span><span className="lang-en">Choose a data type to see how the model maps it into a shared numerical representation:</span></p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['text', 'image', 'audio', 'video'] as const).map(value => (
                  <button key={value} onClick={() => { playClick(); setModality(value); }} className={`p-2.5 rounded-xl font-bold text-center ${modality === value ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                    <span className="lang-ar">{({ text: '📝 نص', image: '🖼️ صورة', audio: '🎙️ صوت', video: '🎬 فيديو' })[value]}</span>
                    <span className="lang-en">{({ text: '📝 Text', image: '🖼️ Image', audio: '🎙️ Audio', video: '🎬 Video' })[value]}</span>
                  </button>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/30 text-[11px] text-slate-200 leading-relaxed">
                <strong className={modalityColor}>{modality === 'text' ? '📝 ' : modality === 'image' ? '🖼️ ' : modality === 'audio' ? '🎙️ ' : '🎬 '}</strong>
                <span className="lang-ar"><strong>{modalityDescriptions[modality].ar.split(':')[0]}</strong> → <code className={modalityColor}>{modalityDescriptions[modality].vector}</code>: {modalityDescriptions[modality].ar.split(':').slice(1).join(':')}</span>
                <span className="lang-en"><strong>{modalityDescriptions[modality].en.split(':')[0]}</strong> → <code className={modalityColor}>{modalityDescriptions[modality].vector}</code>: {modalityDescriptions[modality].en.split(':').slice(1).join(':')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
