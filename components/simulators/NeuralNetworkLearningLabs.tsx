'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type Lab = 'neuron' | 'hierarchy';
type Stage = 'before' | 'during' | 'after';
type Task = 'face' | 'digits';

const faceLayers = [
  { ar: '🖼️ <strong>1. طبقة الإدخال (Input Layer — ص 60):</strong> تستقبل مصفوفة قيم البكسلات الخام للصورة (درجات السطوع والألوان RGB) وتمررها للطبقات المخفية.', en: '🖼️ <strong>1. Input Layer (p. 69):</strong> Receives the raw grid of image pixel values (brightness and RGB intensities) from outside.' },
  { ar: '📏 <strong>2. الطبقات المخفية الضحلة (Shallow Hidden Layers — ص 62):</strong> تستخرج تلقائياً <strong>السمات البسيطة (Simple features)</strong> مثل الخطوط المستقيمة، والحواف المائلة، وتغيرات اللون والظل.', en: '📏 <strong>2. Shallow Hidden Layers (p. 71):</strong> Automatically extracts <strong>simple features</strong> such as lines, edges, and changes in color.' },
  { ar: '👁️ <strong>3. الطبقات المخفية الوسطى (Middle Hidden Layers — ص 62):</strong> تجمع الخطوط والحواف معاً لتمثيل <strong>أشكال الأجزاء (Shapes of parts)</strong> مثل العيون، والأنف، والأذنين، والفم.', en: '👁️ <strong>3. Middle Hidden Layers (p. 71):</strong> Combines simple lines to capture <strong>shapes of parts</strong> such as eyes, nose, and ears.' },
  { ar: '🧠 <strong>4. الطبقات المخفية العميقة (Deep Hidden Layers — ص 62):</strong> تدمج الأجزاء الفرعية لتمثيل <strong>بنية الوجه بأكمله (Structure of the whole face)</strong> وتمييز هويته.', en: '🧠 <strong>4. Deep Hidden Layers (p. 71):</strong> Combines facial parts to capture the <strong>structure of the whole face</strong>.' },
  { ar: '✅ <strong>5. طبقة الإخراج (Output Layer — ص 60):</strong> تُخرج القرار النهائي للتصنيف أو التعرف على صاحب الوجه بدقة عالية!', en: '✅ <strong>5. Output Layer (p. 69):</strong> Outputs the final recognition or classification answer!' },
];

const digitLayers = [
  { ar: '🖼️ <strong>1. طبقة الإدخال (نشاط فكر كمهندس ص 65):</strong> تستقبل قيم سطوع البكسلات لصورة الرقم المكتوب بخط اليد (0–9) الممسوحة ضوئياً من السجل المدرسي.', en: '🖼️ <strong>1. Input Layer (Think as an Engineer p. 74):</strong> Receives pixel intensity values of the scanned handwritten digit (0–9).' },
  { ar: '📏 <strong>2. الطبقات الضحلة (Shallow Layers):</strong> تلتقط الشرطات القصيرة، والخطوط الرأسية والأفقية، والحواف الأولية لحبر القلم.', en: '📏 <strong>2. Shallow Layers:</strong> Detects short pen strokes, vertical/horizontal lines, and basic edges.' },
  { ar: '🔄 <strong>3. الطبقات الوسطى (Middle Layers):</strong> تدمج الشرطات في <strong>حلقات دائرية (Loops)</strong> كما في الأرقام (0، 6، 8، 9) أو <strong>زوايا وتقاطعات حادة</strong> كما في (4، 7).', en: '🔄 <strong>3. Middle Layers:</strong> Combines strokes into <strong>loops and curves</strong> (as in 0, 6, 8, 9) or <strong>sharp intersections/angles</strong> (as in 4, 7).' },
  { ar: '🔢 <strong>4. الطبقات العميقة (Deep Layers):</strong> تجمع الحلقات والزوايا في <strong>البنية الكاملة للرقم (Whole digit structure)</strong>.', en: '🔢 <strong>4. Deep Layers:</strong> Assembles loops and angles into the <strong>complete digit configuration</strong>.' },
  { ar: "✅ <strong>5. طبقة الإخراج (Output Layer):</strong> تحتوي على 10 عُقد وتُخرج الرقم المصنف النهائي من <code class='text-emerald-300'>0 إلى 9</code>!", en: "✅ <strong>5. Output Layer:</strong> 10 output nodes returning the final recognized digit from <code class='text-emerald-300'>0 to 9</code>!" },
];

const featureColors = {
  cyan: { text: 'text-cyan-400', accent: 'accent-cyan-500' },
  emerald: { text: 'text-emerald-400', accent: 'accent-emerald-500' },
  rose: { text: 'text-rose-400', accent: 'accent-rose-500' },
} as const;

const verdictColors = {
  emerald: { border: 'border-emerald-500', text: 'text-emerald-400' },
  amber: { border: 'border-amber-500', text: 'text-amber-400' },
  rose: { border: 'border-rose-500', text: 'text-rose-400' },
} as const;

function renderDescription(source: string) {
  let strong = false;
  let code = false;
  return source.split(/(<\/?strong>|<\/?code(?: class='text-emerald-300')?>)/g).map((part, index) => {
    if (part === '<strong>') { strong = true; return null; }
    if (part === '</strong>') { strong = false; return null; }
    if (part.startsWith('<code')) { code = true; return null; }
    if (part === '</code>') { code = false; return null; }
    return strong ? <strong key={index}>{part}</strong> : code ? <code key={index} className="text-emerald-300">{part}</code> : <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function NeuralNetworkLearningLabs() {
  const { playSfx } = useApp();
  const [lab, setLab] = useState<Lab>('neuron');
  const [stage, setStage] = useState<Stage>('after');
  const [weights, setWeights] = useState({ w1: 1.8, w2: 1.5, w3: -1.5 });
  const [task, setTask] = useState<Task>('face');
  const [layer, setLayer] = useState(0);
  const z = weights.w1 + weights.w2 + 0.2 * weights.w3;
  const probability = 1 / (1 + Math.exp(-z));
  const loss = Math.max(0.01, 1 - probability).toFixed(2);
  const layers = task === 'face' ? faceLayers : digitLayers;
  const playClick = () => playSfx('click');
  const setTrainingStage = (next: Stage) => {
    playClick();
    setStage(next);
    setWeights({
      before: { w1: -1.2, w2: -0.8, w3: 1.5 },
      during: { w1: 0.6, w2: 0.5, w3: -0.4 },
      after: { w1: 1.8, w2: 1.5, w3: -1.5 },
    }[next]);
  };

  const verdict = probability >= 0.75
    ? {
      color: 'emerald' as const,
      titleAr: '✅ تنبؤ صحيح: قطة (Cat) — مرحلة ما بعد التدريب',
      titleEn: '✅ Correct Prediction: Cat (After Training)',
      subAr: 'الأوزان مضبوطة بدقة لتعزيز سمات القطة وتقليل الخطأ.',
      subEn: 'Weights are properly tuned to emphasize cat features and minimize loss.',
    }
    : probability >= 0.45
      ? {
        color: 'amber' as const,
        titleAr: '⏳ جاري التعديل: أثناء التدريب (During Training)',
        titleEn: '⏳ Adjusting Weights: During Training',
        subAr: 'الشبكة في منتصف التدريب وتحتاج لمزيد من تعديل الأوزان.',
        subEn: 'Weights are partially adjusted; training is still reducing loss.',
      }
      : {
        color: 'rose' as const,
        titleAr: '❌ تنبؤ خاطئ: كلب (Dog) — مرحلة ما قبل التدريب!',
        titleEn: '❌ Wrong Prediction: Dog (Before Training!)',
        subAr: 'الأوزان عشوائية غير مضبوطة، لذا تفشل الشبكة في التنبؤ الصحيح.',
        subEn: 'Arbitrary initial weights cause high loss and wrong classification.',
      };
  const verdictColor = verdictColors[verdict.color];

  return (
    <section className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعامل التفاعلية المزدوجة للدرس 7-2 (كتاب الوزارة ص 60 - 65)</span>
            <span className="lang-en">Lesson 7-2 Dual Interactive Neural Network &amp; Deep Learning Labs</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-microchip text-cyan-400"></i>
            <span className="lang-ar">المعمل (أ): محاكي الخلية العصبية وتدريب الأوزان • المعمل (ب): مستكشف الطبقات العميقة والأرقام المكتوبة يدوياً</span>
            <span className="lang-en">Lab A: Live Neuron &amp; Weight Training Simulator • Lab B: Deep Hierarchical Feature Explorer</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => { playClick(); setLab('neuron'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'neuron' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">معمل أ: الخلية العصبية والأوزان</span><span className="lang-en">Lab A: Neuron &amp; Weights</span></button>
          <button onClick={() => { playClick(); setLab('hierarchy'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'hierarchy' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">معمل ب: الطبقات العميقة</span><span className="lang-en">Lab B: Deep Layers</span></button>
        </div>
      </div>

      {lab === 'neuron' ? (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <strong className="text-cyan-300"><span className="lang-ar">محاكي الخلية العصبية وتدريب الأوزان (ص 61)</span><span className="lang-en">Neuron &amp; Weight Training Simulator (p. 70)</span></strong>
            <div className="flex flex-wrap gap-2">
              {(['before', 'during', 'after'] as const).map(value => <button key={value} onClick={() => setTrainingStage(value)} className={`px-3 py-1 rounded-lg font-bold text-xs ${stage === value ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">{value === 'before' ? 'قبل التدريب' : value === 'during' ? 'أثناء التدريب' : 'بعد التدريب'}</span><span className="lang-en">{value === 'before' ? 'Before Training' : value === 'during' ? 'During Training' : 'After Training'}</span></button>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {([
              ['w1', 'x₁', 'أذنان مثلثتان حادتان', 'Pointed Ears', 'cyan'],
              ['w2', 'x₂', 'شوارب طويلة', 'Long Whiskers', 'emerald'],
              ['w3', 'x₃', 'خطم طويل كالكلب', 'Long Snout', 'rose'],
            ] as const).map(([key, input, ar, en, color]) => (
              <label key={key} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="flex justify-between gap-2 font-bold">
                  <span><span className="lang-ar">المدخل {input} ({ar} = {key === 'w3' ? '0.2' : '1.0'}) × الوزن {key}:</span><span className="lang-en">Input {input} ({en} = {key === 'w3' ? '0.2' : '1.0'}) × Weight {key}:</span></span>
                  <span className={`font-mono ${featureColors[color].text}`}>{weights[key] >= 0 ? '+' : ''}{weights[key].toFixed(1)}</span>
                </span>
                <input aria-label={`Weight ${key}`} type="range" min={key === 'w3' ? -2.5 : -2.0} max={key === 'w3' ? 2.0 : 2.5} step="0.1" value={weights[key]} onChange={event => { setStage('during'); setWeights(current => ({ ...current, [key]: Number(event.target.value) })); }} className={`w-full ${featureColors[color].accent}`} />
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">المجموع الموزون (z = ∑ xᵢwᵢ + b):</span><span className="lang-en">Weighted Sum (z = ∑ xᵢwᵢ + b):</span></span>
              <div className="text-lg font-black text-cyan-400 font-mono">z = {z >= 0 ? '+' : ''}{z.toFixed(2)}</div>
              <div className="text-[11px] text-sub"><span className="lang-ar">الأوزان الموجبة تعزز الدليل والسالبة تثبطه</span><span className="lang-en">Positive weights boost; negative weights suppress</span></div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">دالة التنشيط (Sigmoid Probability):</span><span className="lang-en">Activation Output (Cat Probability):</span></span>
              <div className="text-lg font-black text-emerald-400 font-mono">{(probability * 100).toFixed(1)}% <span className="lang-ar">قطة (Cat)</span><span className="lang-en">Cat Probability</span></div>
              <div className="text-[11px] text-amber-400 font-mono">Loss (الخطأ) = {loss} <span className="lang-ar">({probability >= 0.75 ? 'منخفض جداً' : 'مرتفع'})</span><span className="lang-en">({probability >= 0.75 ? 'very low' : 'high'})</span></div>
            </div>
            <div className={`p-4 rounded-xl bg-slate-900 border-2 ${verdictColor.border} space-y-1`}>
              <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">قرار طبقة الإخراج (Output Layer):</span><span className="lang-en">Output Layer Verdict:</span></span>
              <div className={`text-sm font-black ${verdictColor.text}`}><span className="lang-ar">{verdict.titleAr}</span><span className="lang-en">{verdict.titleEn}</span></div>
              <div className="text-[11px] text-slate-300"><span className="lang-ar">{verdict.subAr}</span><span className="lang-en">{verdict.subEn}</span></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <strong className="text-purple-300"><span className="lang-ar">مستكشف السمات الهرمية في التعلم العميق (ص 62)</span><span className="lang-en">Deep Learning Hierarchical Feature Explorer (p. 71)</span></strong>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => { playClick(); setTask('face'); setLayer(0); }} className={`px-3 py-1 rounded-lg font-bold ${task === 'face' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">🧑 التعرف على الوجوه (الشكل 7.2.4 ص 62)</span><span className="lang-en">Face Recognition (Fig 7.2.4)</span></button>
              <button onClick={() => { playClick(); setTask('digits'); setLayer(0); }} className={`px-3 py-1 rounded-lg font-bold ${task === 'digits' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}><span className="lang-ar">🔢 الأرقام المكتوبة يدوياً 0-9 (فكر كمهندس ص 65)</span><span className="lang-en">Handwritten Digits 0–9 (p. 74)</span></button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            {([
              ['🖼️', '1. طبقة الإدخال', '1. Input Layer', 'قيم البكسلات الخام', 'Raw Pixel Values'],
              ['📏', '2. الطبقات الضحلة', '2. Shallow Layers', 'الحواف والسمات البسيطة', 'Edges and simple features'],
              ['👁️', '3. الطبقات الوسطى', '3. Middle Layers', 'أشكال الأجزاء', 'Shapes of parts'],
              ['🧠', '4. الطبقات العميقة', '4. Deep Layers', 'البنية الكاملة', 'Whole structure'],
              ['✅', '5. طبقة الإخراج', '5. Output Layer', 'القرار النهائي', 'Final Decision'],
            ] as const).map(([icon, ar, en, subAr, subEn], index) => (
              <button key={index} onClick={() => { playClick(); setLayer(index); }} className={`p-3 rounded-xl text-center space-y-1 transition ${layer === index ? 'bg-purple-900/50 border-2 border-purple-400' : 'bg-slate-900 border border-slate-700'} ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="text-lg">{icon}</div><div className="font-bold"><span className="lang-ar">{ar}</span><span className="lang-en">{en}</span></div>
                <div className="text-[10px] text-sub"><span className="lang-ar">{subAr}</span><span className="lang-en">{subEn}</span></div>
              </button>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-200">
            <p className="lang-ar">{renderDescription(layers[layer].ar)}</p>
            <p className="lang-en">{renderDescription(layers[layer].en)}</p>
          </div>
        </div>
      )}
    </section>
  );
}
