'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { RuleBasedVsMLSimulator } from '@/components/simulators/RuleBasedVsMLSimulator';

const ringDetails = {
  ai: {
    title: { ar: "1. الذكاء الاصطناعي (AI)", en: "1. Artificial Intelligence (AI)" },
    desc: { ar: "مصطلح عام للتقنيات التي تعيد إنتاج أو تؤدي السلوك البشري الذكي (التعلم، الاستنتاج، التقييم، إلخ) على الحاسوب. (مثل: التعرف على الكلام، التعرف على الصور، الترجمة).", en: "A general term for technologies that reproduce or perform intelligent human behavior (learning, reasoning, judgment, etc.) on a computer. (e.g., speech recognition, image recognition, translation)." }
  },
  ml: {
    title: { ar: "2. التعلم الآلي (Machine Learning)", en: "2. Machine Learning" },
    desc: { ar: "إحدى تقنيات التعلم التي تجعل الذكاء الاصطناعي يعمل. يتعلم الأنماط من البيانات لإجراء التوقعات والأحكام. (مثل: تصفية البريد العشوائي، توصيات المنتجات).", en: "One of the learning technologies that makes AI work. It learns patterns from data to make predictions and judgments. (e.g., spam filters, product recommendations)." }
  },
  dl: {
    title: { ar: "3. التعلم العميق (Deep Learning)", en: "3. Deep Learning" },
    desc: { ar: "تقنية متقدمة داخل التعلم الآلي تستخدم الشبكات العصبية. تتعلم الأنماط المعقدة باستخدام بيانات واسعة النطاق. (مثل: تحليل الصور للقيادة الذاتية، تركيب الكلام).", en: "An advanced technology within machine learning that uses neural networks. It learns complex patterns using large-scale data. (e.g., image analysis for autonomous driving, speech synthesis)." }
  },
  genai: {
    title: { ar: "4. الذكاء الاصطناعي التوليدي (Generative AI)", en: "4. Generative AI" },
    desc: { ar: "تقنية ذكاء اصطناعي تستخدم التعلم العميق لتوليد بيانات جديدة (نصوص، صور، صوت، برامج، إلخ). (مثل: ChatGPT، الذكاء الاصطناعي لتوليد الصور).", en: "AI technology that uses deep learning to generate new data (text, images, audio, programs, etc.). (e.g., ChatGPT, image generation AIs)." }
  }
};

export function Lesson1_2() {
  const { playSfx } = useApp();
  const quizQuestions = allExamQuestions.slice(5, 10);

  const [ringKey, setRingKey] = useState<'ai' | 'ml' | 'dl' | 'genai'>('ai');
  const [spamSelectedMsg, setSpamSelectedMsg] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  // Canvas ANN Simulator State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [annFeedType, setAnnFeedType] = useState<string | null>(null);
  const [annStatus, setAnnStatus] = useState<string>("جاهز للتغذية");
  const [annConf, setAnnConf] = useState<string>("---");

  // GenAI Hallucination Lab State
  const genTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [genTestIdx, setGenTestIdx] = useState<number | null>(null);
  const [genText, setGenText] = useState<string>("اضغط على أحد الاختبارين بالأعلى لمشاهدة توليد النص...");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [truthRevealed, setTruthRevealed] = useState<boolean>(false);

  const handleToggleCard = (id: string) => {
    playSfx('click');
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFlip = (id: string) => {
    playSfx('click');
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuizAnswer = (qIdx: number, oIdx: number, correctAns: number) => {
    if (quizAnswers[qIdx] !== undefined) return;
    if (oIdx === correctAns) playSfx('success');
    else playSfx('error');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  // ANN Canvas Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const layers = [
      { count: 3, x: 75, color: '#60a5fa', label: 'Input' },
      { count: 4, x: 225, color: '#c084fc', label: 'Hidden 1' },
      { count: 4, x: 375, color: '#c084fc', label: 'Hidden 2' },
      { count: 2, x: 525, color: '#34d399', label: 'Output' }
    ];

    // Draw synapses connections
    for (let l = 0; l < layers.length - 1; l++) {
      const srcLayer = layers[l];
      const dstLayer = layers[l + 1];

      for (let i = 0; i < srcLayer.count; i++) {
        const sy = (canvas.height / (srcLayer.count + 1)) * (i + 1);
        for (let j = 0; j < dstLayer.count; j++) {
          const dy = (canvas.height / (dstLayer.count + 1)) * (j + 1);
          ctx.beginPath();
          ctx.moveTo(srcLayer.x, sy);
          ctx.lineTo(dstLayer.x, dy);
          ctx.strokeStyle = annFeedType ? 'rgba(56, 189, 248, 0.4)' : 'rgba(51, 65, 85, 0.4)';
          ctx.lineWidth = annFeedType ? 1.5 : 1;
          ctx.stroke();
        }
      }
    }

    // Draw layer nodes
    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        const y = (canvas.height / (layer.count + 1)) * (i + 1);
        ctx.beginPath();
        ctx.arc(layer.x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = annFeedType ? layer.color : '#1e293b';
        ctx.fill();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = annFeedType ? '#ffffff' : '#94a3b8';
        ctx.font = 'bold 10px Fira Code, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`N${i + 1}`, layer.x, y);
      }
    });
  }, [annFeedType]);

  const handleFeedNet = (type: string) => {
    playSfx('click');
    setAnnFeedType(type);
    if (type === 'cat') {
      setAnnStatus("تم التصنيف: قطة أليفة (Cat 🐱)");
      setAnnConf("98.4%");
    } else if (type === 'dog') {
      setAnnStatus("تم التصنيف: كلب (Dog 🐶)");
      setAnnConf("96.7%");
    } else if (type === 'crop') {
      setAnnStatus("فحص نسيج: محصول تمور سليم (Grade A 🌾)");
      setAnnConf("99.1%");
    }
  };

  const handleSpamTest = (id: number) => {
    playSfx('click');
    setSpamSelectedMsg(id);
  };

  const handleRunGenTest = (idx: number) => {
    playSfx('click');
    setGenTestIdx(idx);
    setIsTyping(true);
    setTruthRevealed(false);

    if (genTimerRef.current) clearInterval(genTimerRef.current);

    let sampleText = "";
    if (idx === 1) {
      sampleText = "تأسست محطة القطار الفضائي بالأهرامات عام 1920م بنظام التبريد الفضائي برعاية المهندس أحمد البدراني، حيث كانت تنقل 100 ألف مسافر يومياً إلى مدار القمر عبر مقطورات ذهبية مسيرة بالبخار الفضائي...";
    } else {
      sampleText = "تعتبر الوصفة الذهبية لعلاج الحساسية المزمنة هي تناول 10 ليمونات كاملة بقشرها في أقل من دقيقة واحدة على الريق، حيث ثبت علمياً أن حمض الستريك يهاجم خلايا الهيستامين فوراً في الدم ويقضي على الحساسية تماماً خلال 60 ثانية...";
    }

    setGenText("");
    let charIdx = 0;
    genTimerRef.current = setInterval(() => {
      charIdx++;
      if (charIdx <= sampleText.length) {
        setGenText(sampleText.slice(0, charIdx));
      } else {
        if (genTimerRef.current) clearInterval(genTimerRef.current);
        setIsTyping(false);
      }
    }, 18);
  };

  const handleRevealTruth = () => {
    playSfx('error');
    setTruthRevealed(true);
  };

  return (
    <div id="view-lesson-1-2" className="lesson-view space-y-8 animate-fadeIn">
      {/* Instructor Bio Section */}
      <InstructorBioCard />

      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-microchip"></i>
                <span className="lang-ar">الدرس 1-2 (كتاب الوزارة ص 11 - ص 17)</span>
                <span className="lang-en">Lesson 1-2 (Textbook pp. 11 - 17)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                <span className="lang-ar">آليات عمل الذكاء الاصطناعي</span>
                <span className="lang-en">AI Mechanics</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">كيف يعمل الذكاء الاصطناعي؟</span>
              <span className="lang-en">How Artificial Intelligence Works</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">شرح دقيق وتفصيلي لمنهج الوزارة: الفئات المتداخلة (AI, ML, DL, GenAI)، مقارنة القواعد بتعلم الآلة، التشريح التفصيلي للشبكات العصبية (طبقة الإدخال، الطبقات المخفية، طبقة الإخراج)، وظاهرة الهلوسة.</span>
              <span className="lang-en">Thorough breakdown of Lesson 1-2: The nested hierarchy (AI &gt; ML &gt; DL &gt; GenAI), rule-based vs ML, detailed neural network anatomy (Input, Hidden, Output), and GenAI hallucination lab.</span>
            </p>
          </div>

          {/* Teacher Card Badge */}
          <div className="p-3.5 rounded-2xl theme-subpanel border border-amber-500/30 text-xs shrink-0 w-full md:w-64 shadow-md flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                className="w-11 h-11 rounded-xl object-cover border border-amber-500/50 shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1.5 text-[11px]">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span className="lang-ar">إشراف وتدريس:</span>
                <span className="lang-en">Course Instructor:</span>
              </div>
              <div className="font-bold text-sm truncate">
                <span className="lang-ar">المهندس عمر محمود</span>
                <span className="lang-en">Eng. Omar Mahmoud</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px]">
                <a href="tel:01012306019" className="text-amber-500 dark:text-amber-400 font-mono hover:underline">01012306019</a>
                <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-500 font-bold hover:underline flex items-center gap-1">
                  <i className="fa-brands fa-youtube text-xs"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Official Learning Objectives & Guiding Question */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-purple-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bullseye"></i>
              <span className="lang-ar">أهداف التعلم الرسمية للدرس:</span>
              <span className="lang-en">Official Learning Objectives:</span>
            </strong>
            <ul className="space-y-1 text-sub">
              <li>• <span className="lang-ar">اشرح ما هو الذكاء الاصطناعي.</span><span className="lang-en">Explain what AI is.</span></li>
              <li>• <span className="lang-ar">اشرح موقع الذكاء الاصطناعي التوليدي ضمن تقنيات الذكاء الاصطناعي.</span><span className="lang-en">Explain how generative AI is positioned within AI technologies.</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-question"></i>
              <span className="lang-ar">السؤال التوجيهي للدرس (كتاب الوزارة ص 12):</span>
              <span className="lang-en">Guiding Question (Textbook p. 12):</span>
            </strong>
            <p className="text-slate-200 font-medium leading-relaxed">
              <span className="lang-ar">"ما هو الذكاء الاصطناعي، وكيف ترتبط تقنيات التعلم الآلي، والتعلم العميق، والذكاء الاصطناعي التوليدي ببعضها البعض؟"</span>
              <span className="lang-en">"What is AI, and how are machine learning, deep learning, and generative AI related?"</span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: The Nested Hierarchy (ص 11 - 12) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
            <span className="lang-ar">الفئات المتداخلة للذكاء الاصطناعي (كتاب الوزارة ص 11 - ص 12)</span>
            <span className="lang-en">The Nested Hierarchy of AI (pp. 11 - 12)</span>
          </h3>
          <span className="text-xs font-mono text-purple-400 font-bold">AI ⊃ ML ⊃ DL ⊃ GenAI</span>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">لا تستخدم هذه المصطلحات كمرادفات لشيء واحد؛ بل ترتبط ببعضها كدوائر متداخلة من الأعم إلى الأخص:</span>
          <span className="lang-en">These concepts are not synonyms; they represent concentric subsets from the broadest to the most specialized:</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {[
            { key: 'ai' as const, numAr: '١', numEn: '1', titleAr: 'الذكاء الاصطناعي (AI)', titleEn: 'Artificial Intelligence', descAr: 'المظلة الكبرى الشاملة لمحاكاة السلوك الذكي.', descEn: 'The broad umbrella mimicking human intelligence.', border: 'hover:border-blue-500', badgeBg: 'bg-blue-500/20', badgeText: 'text-blue-600 dark:text-blue-400' },
            { key: 'ml' as const, numAr: '٢', numEn: '2', titleAr: 'التعلّم الآلي (ML)', titleEn: 'Machine Learning', descAr: 'خوارزميات تستنتج الأنماط من البيانات دون برمجة صريحة.', descEn: 'Algorithms inferring patterns without hand-coded rules.', border: 'hover:border-purple-500', badgeBg: 'bg-purple-500/20', badgeText: 'text-purple-600 dark:text-purple-400' },
            { key: 'dl' as const, numAr: '٣', numEn: '3', titleAr: 'التعلم العميق (DL)', titleEn: 'Deep Learning', descAr: 'شبكات عصبية اصطناعية عميقة متعددة الطبقات.', descEn: 'Multi-layered artificial neural networks on big data.', border: 'hover:border-emerald-500', badgeBg: 'bg-emerald-500/20', badgeText: 'text-emerald-600 dark:text-emerald-400' },
            { key: 'genai' as const, numAr: '٤', numEn: '4', titleAr: 'الذكاء التوليدي (GenAI)', titleEn: 'Generative AI', descAr: 'أنظمة تبتكر محتوى جديداً بالكامل (نصوص، صور، أكواد).', descEn: 'Models synthesizing brand new text, images, or code.', border: 'hover:border-amber-500', badgeBg: 'bg-amber-500/20', badgeText: 'text-amber-600 dark:text-amber-400' }
          ].map((ring) => (
            <button
              key={ring.key}
              onClick={() => { playSfx('click'); setRingKey(ring.key); }}
              className={`p-4 rounded-2xl theme-subpanel border ${ring.border} text-start space-y-1.5 transition ${
                ringKey === ring.key ? 'border-purple-500 bg-purple-500/10' : ''
              }`}
            >
              <span className={`w-6 h-6 rounded-lg ${ring.badgeBg} ${ring.badgeText} font-bold flex items-center justify-center text-xs`}>
                <span className="lang-ar">{ring.numAr}</span>
                <span className="lang-en">{ring.numEn}</span>
              </span>
              <strong className="text-slate-100 dark:text-white block text-xs sm:text-sm">
                <span className="lang-ar">{ring.titleAr}</span>
                <span className="lang-en">{ring.titleEn}</span>
              </strong>
              <p className="text-sub text-[11px]">
                <span className="lang-ar">{ring.descAr}</span>
                <span className="lang-en">{ring.descEn}</span>
              </p>
            </button>
          ))}
        </div>

        {/* Ring Detail Box */}
        <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/40 text-xs sm:text-sm leading-relaxed space-y-2">
          <strong className="text-purple-500 dark:text-purple-500 block text-base font-bold">
            <span className="lang-ar">{ringDetails[ringKey].title.ar}</span>
            <span className="lang-en">{ringDetails[ringKey].title.en}</span>
          </strong>
          <p className="text-sub">
            <span className="lang-ar">{ringDetails[ringKey].desc.ar}</span>
            <span className="lang-en">{ringDetails[ringKey].desc.en}</span>
          </p>
        </div>
      </div>

      {/* SECTION 2: Rule-Based vs Machine Learning (ص 12 - 13) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs"><span className="lang-ar">٢</span><span className="lang-en">2</span></span>
            <span className="lang-ar">البرمجة التقليدية القائمة على القواعد مقابل التعلّم الآلي (ص 12 - ص 13)</span>
            <span className="lang-en">Rule-Based Programming vs Machine Learning (pp. 12 - 13)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-2xl theme-subpanel border border-slate-700 space-y-2">
            <strong className="text-amber-400 text-sm block font-bold">
              1. البرمجة التقليدية المبنية على القواعد (Rule-Based):
            </strong>
            <p className="text-sub">
              يكتب المبرمج البشري يدوياً كل قاعدة وشرط بصيغة (If / Then). مثلاً: "إذا احتوى البريد على كلمة 'مجاناً'، صَنفه كبريد مزعج (Spam)".
            </p>
            <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-rose-300 text-[11px]">
              ⚠️ <strong>العيب القاتل:</strong> التحايل سهل للغاية! يكتب المحتال "مـ جـ ا نـ اً" أو يستبدل الحروف برموز فتفشل القواعد الصلبة فوراً!
            </div>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border border-brand-500/40 space-y-2">
            <strong className="text-brand-400 text-sm block font-bold">
              2. نظام التعلّم الآلي (Machine Learning):
            </strong>
            <p className="text-sub">
              لا نكتب قواعد يدوية، بل نغذي النموذج بآلاف الرسائل السابقة (المزعجة والسليمة). يتعلم النموذج تلقائياً الأنماط الخفية (توزيع الكلمات، العناوين المشبوهة، تباعد الحروف).
            </p>
            <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px]">
              ✅ <strong>الميزة الكبرى:</strong> القدرة الفائقة على التعميم والتكيف مع أساليب المحتالين الجديدة دون كتابة كود يدوي جديد!
            </div>
          </div>
        </div>

        {/* Interactive Spam Testing Playground */}
        <div className="p-5 rounded-2xl theme-subpanel border space-y-3">
          <strong className="text-xs font-bold text-white block">
            🧪 تجربة عملية حية: اختبر فلتر البريد القديم ضد فلتر التعلم الآلي:
          </strong>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <button onClick={() => handleSpamTest(1)} className="p-3 rounded-xl theme-panel border hover:border-brand-500 text-start">
              ✉️ <strong>رسالة صريحة:</strong> "مبروك فزت بجائزة مجاناً"
            </button>
            <button onClick={() => handleSpamTest(2)} className="p-3 rounded-xl theme-panel border hover:border-brand-500 text-start">
              🕵️ <strong>رسالة محتالة:</strong> "مـ ـجـ ـا نـ ـا احصل على هديتك"
            </button>
            <button onClick={() => handleSpamTest(3)} className="p-3 rounded-xl theme-panel border hover:border-brand-500 text-start">
              📚 <strong>رسالة عادية:</strong> "واجب مادة البرمجة والذكاء الاصطناعي"
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 rounded-xl bg-slate-900 border space-y-1">
              <span className="text-sub text-[11px] block">فلتر القواعد القديم (Rule-based):</span>
              <div className="font-bold text-slate-300">
                {spamSelectedMsg === 1 && <span className="text-rose-400">🚫 تم كشفها كـ Spam (مطابقة كلمة 'مجاناً')</span>}
                {spamSelectedMsg === 2 && <span className="text-emerald-400">❌ فشل في كشفها! عبرت للبريد الوارد (تجاوزت الشرط الحرفي)</span>}
                {spamSelectedMsg === 3 && <span className="text-emerald-400">✅ سليم (Inbox)</span>}
                {spamSelectedMsg === null && "اضغط على رسالة لاختبارها"}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-brand-500/40 space-y-1">
              <span className="text-brand-400 text-[11px] block font-bold">فلتر التعلم الآلي (ML Filter):</span>
              <div className="font-bold text-slate-200">
                {spamSelectedMsg === 1 && <span className="text-rose-400">🚫 رصد Spam بنسبة ثقة 99.8%</span>}
                {spamSelectedMsg === 2 && <span className="text-rose-400">🚫 رصد Spam بنسبة ثقة 97.2%! (اكتشف نمط التباعد المشبوه)</span>}
                {spamSelectedMsg === 3 && <span className="text-emerald-400">✅ بريد دراسي سليم بنسبة 99.9%</span>}
                {spamSelectedMsg === null && "اضغط على رسالة لاختبارها"}
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Rule-Based vs Machine Learning Simulator */}
        <RuleBasedVsMLSimulator />
      </div>

      {/* SECTION 3: Detailed Neural Network Anatomy (ANN) (ص 13 - 14) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-brand-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">التشريح التفصيلي للشبكات العصبية الاصطناعية (ANN)</span>
              <span className="lang-en">Deep Neural Network Anatomy</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs"><span className="lang-ar">٣</span><span className="lang-en">3</span></span>
              <span className="lang-ar">طبقة الإدخال، الطبقات المخفية، طبقة الإخراج، والأوزان (ص 13 - ص 14)</span>
              <span className="lang-en">Input Layer, Hidden Layers, Output Layer, & Weights</span>
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-400 font-mono">01012306019</span>
        </div>

        {/* The 3 Anatomy Layers Explained in Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border border-blue-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-blue-400 text-sm font-black"><span className="lang-ar">1. طبقة الإدخال</span><span className="lang-en">1. Input Layer</span></strong>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] font-bold">Input Layer</span>
            </div>
            <p className="text-sub leading-relaxed">
              <span className="lang-ar">تستقبل البيانات الخام من العالم الخارجي وتحولها لأرقام. تمثل كل خلية ميزة واحدة (Feature) مثل: بكسل في صورة، درجة حرارة، أو سعر شقة، <strong>ولا تُجري هذه الطبقة أي حسابات رياضية</strong>، بل تمرر القيم للطبقة التالية.</span>
              <span className="lang-en">Receives raw features (pixels, sensory values, price). Nodes perform no mathematical operations; they simply standardize inputs and transmit forward.</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-purple-400 text-sm font-black"><span className="lang-ar">2. الطبقات المخفية</span><span className="lang-en">2. Hidden Layers</span></strong>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-bold">Hidden Layers</span>
            </div>
            <p className="text-sub leading-relaxed">
              <span className="lang-ar">قلب المعالجة الذكية وعمودها الفقري! تتكون من طبقة أو عدة طبقات (لذلك يسمى تعلماً عميقاً). تحتوي على خلايا تقوم بضرب المدخل في <strong>الوزن (Weight)</strong> وإضافة <strong>الانحياز (Bias)</strong> وتطبيق <strong>دالة التنشيط (Activation Function)</strong> لاستخراج الأنماط المعقدة.</span>
              <span className="lang-en">The computational engine! Features are transformed via synaptical weights, biases, and non-linear activation functions (ReLU/Sigmoid) across multiple layers.</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-400 text-sm font-black"><span className="lang-ar">3. طبقة الإخراج</span><span className="lang-en">3. Output Layer</span></strong>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-bold">Output Layer</span>
            </div>
            <p className="text-sub leading-relaxed">
              <span className="lang-ar">تنتج القرار أو التنبؤ النهائي للشبكة. تمثل كل خلية احتمالية تصنيف معين، مثلاً: الخلية الأولى = (احتمال صورة قطة 96%)، والخلية الثانية = (احتمال صورة كلب 4%)، أو فحص نسيج زراعي (سليم / مصاب).</span>
              <span className="lang-en">Delivers the final inferential outcome or probability distribution across candidate categories (e.g., Cat: 96%, Dog: 4%).</span>
            </p>
          </div>
        </div>

        {/* Canvas Neural Network Simulator */}
        <div className="p-5 rounded-2xl theme-subpanel border space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <strong className="text-xs sm:text-sm text-white flex items-center gap-2">
                <i className="fa-solid fa-network-wired text-brand-400"></i>
                <span className="lang-ar">محاكي تدفق الإشارات داخل الشبكة العصبية (Canvas Neural Net):</span>
                <span className="lang-en">Interactive Forward Propagation Simulator:</span>
              </strong>
              <span className="text-[11px] text-sub block">
                <span className="lang-ar">لاحظ انتقال النبضات من طبقة الإدخال، عبر الطبقات المخفية وتعديل الأوزان، وصولاً لطبقة الإخراج:</span>
                <span className="lang-en">Observe signal activations flowing across the explicitly labeled network layers:</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleFeedNet('cat')} className="px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition">
                🐱 <span className="lang-ar">تغذية بصورة قطة</span><span className="lang-en">Feed Cat</span>
              </button>
              <button onClick={() => handleFeedNet('dog')} className="px-3 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-xs font-bold transition">
                🐶 <span className="lang-ar">تغذية بصورة كلب</span><span className="lang-en">Feed Dog</span>
              </button>
              <button onClick={() => handleFeedNet('crop')} className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition">
                🌾 <span className="lang-ar">فحص محصول</span><span className="lang-en">Feed Crop</span>
              </button>
            </div>
          </div>

          {/* Layer Headers Over Canvas */}
          <div className="grid grid-cols-4 text-center text-[11px] font-bold pb-1 border-b border-slate-800">
            <div className="text-blue-400">
              <div><span className="lang-ar">طبقة الإدخال</span><span className="lang-en">Input Layer</span></div>
              <div className="text-[9px] text-sub font-mono font-normal">(3 ميزات/بيكسلات)</div>
            </div>
            <div className="text-purple-400">
              <div><span className="lang-ar">طبقة مخفية ١</span><span className="lang-en">Hidden Layer 1</span></div>
              <div className="text-[9px] text-sub font-mono font-normal">(أوزان w1)</div>
            </div>
            <div className="text-purple-400">
              <div><span className="lang-ar">طبقة مخفية ٢</span><span className="lang-en">Hidden Layer 2</span></div>
              <div className="text-[9px] text-sub font-mono font-normal">(أوزان w2)</div>
            </div>
            <div className="text-emerald-400">
              <div><span className="lang-ar">طبقة الإخراج</span><span className="lang-en">Output Layer</span></div>
              <div className="text-[9px] text-sub font-mono font-normal">(القرار النهائي)</div>
            </div>
          </div>

          {/* Canvas Box */}
          <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-2 overflow-hidden flex justify-center">
            <canvas ref={canvasRef} width={600} height={220} className="max-w-full"></canvas>
          </div>

          {/* Live Feed Result Bar */}
          <div className="p-3 rounded-xl bg-slate-900 border flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-sub"><span className="lang-ar">حالة المعالجة:</span><span className="lang-en">Status:</span></span>
              <span className="font-bold text-slate-200">{annStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sub"><span className="lang-ar">نسبة الثقة:</span><span className="lang-en">Confidence:</span></span>
              <span className="font-mono text-emerald-400 font-bold">{annConf}</span>
            </div>
          </div>

          {/* How Neural Networks Learn Note */}
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-sub space-y-1">
            <strong className="text-blue-300 block font-bold">
              <span className="lang-ar">🧠 كيف تتعلم الشبكة العصبية وتتحسن؟ (التدريب والانتشار العكسي Backpropagation):</span>
              <span className="lang-en">🧠 How Neural Networks Learn (Backpropagation):</span>
            </strong>
            <p className="leading-relaxed">
              <span className="lang-ar">في بداية التدريب، تبدأ الشبكة بأوزان عشوائية فتخطئ في القرار. يقارن النظام الناتج مع النتيجة الحقيقية باستخدام <strong>دالة الخسارة (Loss Function)</strong>، ثم تُرجع الخوارزمية الخطأ للخلف وتعدل قيم الأوزان بنسبة طفيفة عبر آلاف التكرارات حتى تصبح دقة التصنيف فائقة.</span>
              <span className="lang-en">The network initializes with random weights. Outputs are evaluated against ground truth via a Loss Function, and gradients propagate backward (Backpropagation) iteratively refining weights for optimal accuracy.</span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: GenAI Hallucination Lab & Verification (ص 15 - 16) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs"><span className="lang-ar">٤</span><span className="lang-en">4</span></span>
            <span className="lang-ar">معمل كشف هلوسة الذكاء الاصطناعي (AI Hallucination) والتحقق المزدوج (ص 15 - ص 16)</span>
            <span className="lang-en">Generative AI Hallucination Lab & Verification (pp. 15 - 16)</span>
          </h3>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">الذكاء الاصطناعي التوليدي لا "يفكر" أو "يفهم" الحقائق كما يفهمها الإنسان، بل يتنبأ بالكلمة التالية الأكثر احتمالاً إحصائياً (Next-token prediction). لذلك قد يُنشئ نصوصاً فصيحة ومقنعة للغاية لغوياً، ولكنها كاذبة ومختلقة تماماً في الواقع! جرب بنفسك:</span>
          <span className="lang-en">Generative LLMs do not possess human cognition; they statistically predict the most probable subsequent word. Hence, they often author eloquent, confident statements that are totally false in reality. Test below:</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <button onClick={() => handleRunGenTest(1)} className="p-3.5 rounded-xl theme-subpanel border hover:border-rose-500 text-start space-y-1 transition">
            <strong className="text-slate-100 dark:text-white block"><span className="lang-ar">اختبار 1: تاريخ قطار أهرامات الجيزة الفضائي 🚀</span><span className="lang-en">Prompt 1: Giza Pyramids Space Train 🚀</span></strong>
            <span className="text-[11px] text-sub block"><span className="lang-ar">سؤال الذكاء الاصطناعي عن محطة قطار فضائي في الأهرامات.</span><span className="lang-en">Asking GenAI about a mythical pyramid space terminal.</span></span>
          </button>
          <button onClick={() => handleRunGenTest(2)} className="p-3.5 rounded-xl theme-subpanel border hover:border-rose-500 text-start space-y-1 transition">
            <strong className="text-slate-100 dark:text-white block"><span className="lang-ar">اختبار 2: علاج الحساسية بعشر ليمونات في دقيقة 🍋</span><span className="lang-en">Prompt 2: Curing allergies with 10 lemons 🍋</span></strong>
            <span className="text-[11px] text-sub block"><span className="lang-ar">سؤال الذكاء الاصطناعي عن وصفة طبية غريبة ومزعومة.</span><span className="lang-en">Querying medical advice regarding extreme acid intake.</span></span>
          </button>
        </div>

        {/* Hallucination Terminal */}
        <div className="p-4 rounded-2xl theme-subpanel border space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-sub border-b border-slate-700/50 pb-2">
            <span>TERMINAL: GenAI Response Inspector</span>
            {isTyping && <span className="text-brand-600 dark:text-brand-400 animate-pulse text-[11px]">جارِ توليد النص...</span>}
          </div>
          <div className="text-slate-100 dark:text-slate-200 min-h-[40px] leading-relaxed font-sans">
            {genText}
          </div>
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleRevealTruth}
              disabled={!genTestIdx || isTyping}
              className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40 text-xs font-bold disabled:opacity-40 transition cursor-pointer"
            >
              🔍 كشف الحقيقة واختبار الهلوسة
            </button>
            <span className="text-[10px] text-sub font-sans">إشراف: م/ عمر محمود</span>
          </div>

          {truthRevealed && (
            <div className="p-3.5 rounded-xl bg-rose-100 dark:bg-rose-950/70 border border-rose-500 text-rose-900 dark:text-rose-200 text-xs font-sans leading-relaxed animate-fadeIn">
              {genTestIdx === 1 ? (
                <>
                  🚨 <strong>هلوسة كاملة 100%!</strong> لا توجد أي محطة قطار فضائي في أهرامات الجيزة! اخترع النموذج أسماء وتواريخ خيالية بثقة عالية لمجرد أن التنبؤ اللغوي يركب الكلمات المنسقة معاً.
                </>
              ) : (
                <>
                  🚨 <strong>هلوسة طبية خطيرة!</strong> تناول 10 ليمونات دفعة واحدة يسبب قرحة وحرقاناً شديداً في المعدة ولا يعالج الحساسية بتاتاً! الاعتماد على الذكاء الاصطناعي بدون مراجع طبية خطر جداً!
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* TEXTBOOK ENRICHMENT FEATURES (كتاب الوزارة ص 11 - 17) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">ميزات وأنشطة كتاب الوزارة الرسمية للدرس 1-2</span>
              <span className="lang-en">Official Lesson 1-2 Textbook Enrichment Features</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: توقف وفكر • استقصِ كمهندس • فكر كمهندس • نمط الامتحان</span>
              <span className="lang-en">Activities: Pause & Think • Investigate • Exam Style</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 13 - ص 17</span>
        </div>

        {/* 1. Pause & Think (1) */}
        <div onClick={() => handleToggleCard('pause-think-1-2-1')} className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-3 cursor-pointer select-none group hover:border-brand-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-brain"></i>
              <span className="lang-ar">🧠 توقف وفكر (1) (كتاب الوزارة ص 13)</span>
              <span className="lang-en">🧠 Pause & Think (1) (Textbook p. 13)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-2-1'); }} className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-2-1'] ? 'إخفاء الإجابة' : 'عرض الإجابة والتحليل النموذجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-2-1'] ? 'Hide Answer' : 'Reveal Model Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-2-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"ما الفرق الجوهري بين البرمجة التقليدية القائمة على القواعد (Rule-Based) والتعلم الآلي (Machine Learning) في أسلوب حل المشكلات؟ ومتى نفضل كل منهما هندسياً؟"</span>
            <span className="lang-en">"What is the fundamental difference between rule-based programming and machine learning, and when is each preferred?"</span>
          </p>
          {expandedCards['pause-think-1-2-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 التحليل الهندسي المعتمد (م/ عمر محمود):</span>
                <span className="lang-en">💡 Engineering Analysis:</span>
              </strong>
              <p>
                <span className="lang-ar">في <strong>البرمجة التقليدية</strong>، يدخل المبرمج (البيانات + القواعد الصريحة) لينتج الحاسوب (الإجابة). هذه الطريقة مثالية للمسائل الحتمية الثابتة كحساب الضرائب أو كشوف المرتبات. أما في <strong>التعلّم الآلي</strong>، نغذي الحاسوب بـ (البيانات + الإجابات السابقة) ليقوم هو باستنتاج (القواعد والأنماط). وهذا هو الأسلوب الوحيد الممكن للمسائل المعقدة كالتعرف على الوجوه أو فهم اللغات لأن كتابة ملايين القواعد البشرية يدويًا أمر مستحيل.</span>
                <span className="lang-en">Traditional coding takes (Data + Explicit Rules) to compute (Answers) for deterministic logic. Machine Learning takes (Data + Historical Answers) to infer (Rules and Patterns) for complex tasks like vision and translation.</span>
              </p>
            </div>
          )}
        </div>

        {/* 2. Pause & Think (2) */}
        <div onClick={() => handleToggleCard('pause-think-1-2-2')} className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none group hover:border-purple-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-robot"></i>
              <span className="lang-ar">🧠 توقف وفكر (2) (كتاب الوزارة ص 16)</span>
              <span className="lang-en">🧠 Pause & Think (2) (Textbook p. 16)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-2-2'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-2-2'] ? 'إخفاء الإجابة' : 'عرض الشرح المنهجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-2-2'] ? 'Hide Answer' : 'Reveal Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-2-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"لماذا لا يُعد توليد النصوص الفصيحة والمنسقة من نماذج كـ ChatGPT دليلاً على امتلاكه وعياً أو فهماً حقيقياً للمعاني؟"</span>
            <span className="lang-en">"Why does fluent text synthesis by ChatGPT not indicate actual cognitive consciousness or semantic comprehension?"</span>
          </p>
          {expandedCards['pause-think-1-2-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-purple-300 block font-bold">
                <span className="lang-ar">💡 التفسير العلمي (منهج ثانية ثانوي):</span>
                <span className="lang-en">💡 Scientific Explanation:</span>
              </strong>
              <p>
                <span className="lang-ar">لأن نماذج اللغة الكبيرة هي محركات رياضية إحصائية للتنبؤ اللفظي (Stochastic Text Predictors)؛ هي تحسب فقط الاحتمال الرياضي لظهور الكلمة التالية بناءً على ملايين النصوص التي تدربت عليها دون أن تمتلك إدراكاً حقيقياً للعالم المادي أو إحساساً بمعنى الكلمات (مثل الببغاء الذكي الذي يقلد فصاحة البشر دون فهم المعنى الواقعي).</span>
                <span className="lang-en">Large language models are probabilistic mathematical predictors calculating the next token statistically without conscious awareness or grounded physical semantic comprehension.</span>
              </p>
            </div>
          )}
        </div>

        {/* 3. Investigate Like an Engineer */}
        <div onClick={() => handleToggleCard('investigate-1-2')} className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none group hover:border-emerald-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-filter-circle-dollar"></i>
              <span className="lang-ar">🔍 استقصِ كمهندس (كتاب الوزارة ص 14)</span>
              <span className="lang-en">🔍 Investigate Like an Engineer (p. 14)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('investigate-1-2'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['investigate-1-2'] ? 'إخفاء الإجابة' : 'عرض التصميم البرمجي المقترح'}</span>
              <span className="lang-en">{expandedCards['investigate-1-2'] ? 'Hide Answer' : 'Reveal Pipeline Design'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['investigate-1-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"تخيل أنك مهندس برمجيات مسؤول عن نظام ذكاء اصطناعي يقدم استشارات برمجية وطبية للمستخدمين: كيف تصمم خط أنابيب (Pipeline) برمجي تلقائي يكتشف هلوسة الذكاء الاصطناعي ويمنع وصول المعلومات الخاطئة للمستخدمين؟"</span>
            <span className="lang-en">"Design an automated software pipeline that intercepts and flags AI hallucinations before reaching end-users."</span>
          </p>
          {expandedCards['investigate-1-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">خطوات خط الأنابيب البرمجي الخمس (م/ عمر محمود):</span>
                <span className="lang-en">5-Step Engineering Pipeline:</span>
              </strong>
              <ol className="space-y-1 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>تطبيق تقنية الاسترجاع المعزز (RAG):</strong> ربط النموذج بقاعدة بيانات طبية موثوقة ومفهرسة بحيث لا يولد إجابة إلا من نصوص ومراجع رسمية.</li>
                <li><strong>فاحص الحقائق التلقائي (Fact-Checking Filter):</strong> تمرير الإجابة على خوارزمية تحقق مستقلة تقارن كل ادعاء بمراجع موثوقة.</li>
                <li><strong>حساب درجة الثقة (Confidence Scoring):</strong> إذا كانت نسبة احتمالية النص أقل من 90%، يرفض النظام الإجابة تلقائياً.</li>
                <li><strong>إرفاق المصادر الإلزامية:</strong> إجبار النموذج على وضع رابط ورقم المرجع الطبي المؤكد لكل سطر يكتبه.</li>
                <li><strong>التأكيد البشري الإلزامي (Human Review):</strong> في الحالات الصحية الحرجة، لا تخرج النتيجة للمريض إلا بعد مراجعة طبيب معتمد.</li>
              </ol>
            </div>
          )}
        </div>

        {/* 4. Think Like an Engineer */}
        <div onClick={() => handleToggleCard('think-eng-1-2')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-network-wired"></i>
              <span className="lang-ar">💡 فكر كمهندس (كتاب الوزارة ص 17)</span>
              <span className="lang-en">💡 Think Like an Engineer (p. 17)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-2'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-2'] ? 'إخفاء الإجابة' : 'عرض التصميم التشريحي للشبكة'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-2'] ? 'Hide Answer' : 'Reveal Architecture Design'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"طلب منك مصنع تمور مصري تصميم شبكة عصبية اصطناعية (ANN) لفرز التمور آلياً على سير متحرك: حدد ما هي المدخلات في طبقة الإدخال، وما دور الطبقات المخفية، وما المخرجات في طبقة الإخراج؟"</span>
            <span className="lang-en">"Design an ANN sorting dates on a factory conveyor: Define Input features, Hidden layer tasks, and Output classifications."</span>
          </p>
          {expandedCards['think-eng-1-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">التصميم المعماري الهندسي للشبكة العصبية:</span>
                <span className="lang-en">ANN Architecture Breakdown:</span>
              </strong>
              <div className="space-y-1.5 text-[11px] text-sub">
                <p>• <strong>طبقة الإدخال (Input Layer):</strong> تستقبل ميزات كل تمرة من الكاميرا والميزان (الحجم، الطول، درجة اللون، نسبة الرطوبة، وجود بقع داكنة أو شقوق).</p>
                <p>• <strong>الطبقات المخفية (Hidden Layers):</strong> تعالج العلاقات بين هذه الخصائص؛ فالطبقة الأولى تكشف الحواف واللون، والطبقة الثانية تدمج نسبة الرطوبة مع اللون لتمييز النضج والعيوب عبر الأوزان ودوال التنشيط.</p>
                <p>• <strong>طبقة الإخراج (Output Layer):</strong> تحتوي على 3 خلايا إخراج تمثل جودة التمرة: 1) درجة أولى للتصدير، 2) درجة ثانية للاستهلاك المحلي، 3) تالف للاستبعاد.</p>
              </div>
            </div>
          )}
        </div>

        {/* 5. Exam Style Question */}
        <div onClick={() => handleToggleCard('exam-style-1-2')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة</span>
              <span className="lang-en">📝 Exam-Style Question (6 Marks)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-2'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-2'] ? 'إخفاء الإجابة' : 'عرض جدول المقارنة وتوزيع الدرجات'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-2'] ? 'Hide Answer' : 'Model Answer Table'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"قارن في جدول منظم بين التعلّم الآلي التقليدي (Machine Learning) والتعلم العميق (Deep Learning) من حيث: بنية الخوارزمية، الاعتماد على البيانات الضخمة، والقدرة على استخراج الميزات (Feature Extraction)."</span>
            <span className="lang-en">"Compare traditional ML and DL across: Algorithm structure, Big data dependency, and Feature extraction capability."</span>
          </p>
          {expandedCards['exam-style-1-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">جدول المقارنة النموذجي للحصول على الدرجة الكاملة (6/6):</span>
                <span className="lang-en">Comparison Table for Full Marks (6/6):</span>
              </strong>
              <div className="overflow-x-auto">
                <table className="w-full text-start text-[11px] border border-slate-700">
                  <thead className="bg-slate-950 text-slate-200">
                    <tr>
                      <th className="p-2 border border-slate-700">وجه المقارنة</th>
                      <th className="p-2 border border-slate-700 text-purple-400">التعلّم الآلي التقليدي (ML)</th>
                      <th className="p-2 border border-slate-700 text-emerald-400">التعلم العميق (DL)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sub">
                    <tr>
                      <td className="p-2 border border-slate-700 font-bold text-white">بنية الخوارزمية [درجتان]</td>
                      <td className="p-2 border border-slate-700">خوارزميات إحصائية أبسط (أشجار القرار، الانحدار الخطي)</td>
                      <td className="p-2 border border-slate-700">شبكات عصبية اصطناعية عميقة متعددة الطبقات (ANNs)</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-700 font-bold text-white">حجم البيانات [درجتان]</td>
                      <td className="p-2 border border-slate-700">يعمل جيداً مع كميات بيانات متوسطة وصغيرة</td>
                      <td className="p-2 border border-slate-700">يتطلب بيانات ضخمة (Big Data) لتدريبه بدقة</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-700 font-bold text-white">استخراج الميزات [درجتان]</td>
                      <td className="p-2 border border-slate-700">يدوي؛ يجب أن يحدد الخبير البشري الميزات المهمة</td>
                      <td className="p-2 border border-slate-700">تلقائي؛ تكتشف الطبقات المخفية الميزات بنفسها</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3D Flashcards 1-2 */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-sm flex items-center gap-2">
          <i className="fa-solid fa-clone text-purple-400"></i>
          <span className="lang-ar">بطاقات المراجعة السريعة (المس لقلب البطاقة):</span>
          <span className="lang-en">Lesson 1-2 Flashcards (Tap to flip):</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            { id: "fc12-1", icon: "🤖", titleAr: "الذكاء الاصطناعي (AI)", titleEn: "Artificial Intelligence", color: "blue", descAr: "المجال الأوسع الشامل للأنظمة الحاسوبية التي تحاكي السلوك البشري الذكي.", descEn: "Broad domain for computer systems simulating intelligent cognitive behaviors." },
            { id: "fc12-2", icon: "📊", titleAr: "التعلّم الآلي (ML)", titleEn: "Machine Learning", color: "purple", descAr: "فرع رئيسي تتعلم فيه النماذج أنماطاً من البيانات دون برمجة صريحة لكل قاعدة.", descEn: "AI branch extracting predictive patterns directly from data without explicit manual rules." },
            { id: "fc12-3", icon: "🕸️", titleAr: "التعلم العميق (DL)", titleEn: "Deep Learning", color: "emerald", descAr: "أسلوب متطور يعتمد على شبكات عصبية اصطناعية عميقة متعددة الطبقات (ANN).", descEn: "Advanced approach utilizing deep multi-layered artificial neural networks on big data." },
            { id: "fc12-4", icon: "🎭", titleAr: "الهلوسة (Hallucination)", titleEn: "AI Hallucination", color: "rose", descAr: "توليد نصوص تبدو فصيحة ومقنعة لغوياً ولكنها كاذبة ومختلقة تماماً في الواقع.", descEn: "Synthesizing fluent, convincing language that is factually false and fabricated." }
          ].map((fc) => (
            <div key={fc.id} className={`flip-card ${flippedCards[fc.id] ? 'flipped' : ''}`} onClick={() => handleFlip(fc.id)}>
              <div className="flip-card-inner">
                <div className={`flip-card-front theme-panel border border-${fc.color}-500/30`}>
                  <span className="text-2xl mb-1 block">{fc.icon}</span>
                  <strong className="text-sm block">
                    <span className="lang-ar">{fc.titleAr}</span>
                    <span className="lang-en">{fc.titleEn}</span>
                  </strong>
                  <span className={`text-[10px] text-${fc.color}-400 mt-2 font-bold`}>
                    <span className="lang-ar">🔄 انقر للتعريف</span>
                    <span className="lang-en">Tap to flip</span>
                  </span>
                </div>
                <div className={`flip-card-back bg-slate-900 border border-${fc.color}-500 text-slate-200`}>
                  <p className="lang-ar">{fc.descAr}</p>
                  <p className="lang-en">{fc.descEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUIZ 1-2 */}
      <div className="theme-panel border p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <i className="fa-solid fa-circle-question text-purple-400"></i>
            <span className="lang-ar">اختبار تدريبي على الدرس 1-2 (5 أسئلة منهجية)</span>
            <span className="lang-en">Lesson 1-2 Practice Quiz (5 Questions)</span>
          </h4>
          <span className="text-xs text-amber-400 font-bold">
            <span className="lang-ar">إشراف: م/ عمر محمود</span>
            <span className="lang-en">Eng. Omar Mahmoud</span>
          </span>
        </div>

        <div className="space-y-4 text-xs">
          {quizQuestions.map((q, qIdx) => {
            const selectedOpt = quizAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.a;

            return (
              <div key={qIdx} className="p-4 rounded-2xl theme-subpanel border space-y-3">
                <div className="flex items-start gap-2 font-bold text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {qIdx + 1}
                  </span>
                  <p className="leading-relaxed">
                    <span className="lang-ar">{q.q.ar}</span>
                    <span className="lang-en">{q.q.en}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.opts.ar.map((optAr, oIdx) => {
                    const optEn = q.opts.en[oIdx];
                    let btnStyle = "theme-panel border hover:border-purple-500 text-slate-300";

                    if (isAnswered) {
                      if (oIdx === q.a) {
                        btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                      } else if (selectedOpt === oIdx) {
                        btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 font-bold";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswered}
                        onClick={() => handleQuizAnswer(qIdx, oIdx, q.a)}
                        className={`p-2.5 rounded-xl text-start transition text-xs flex items-center justify-between ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sub font-mono font-bold">{['أ', 'ب', 'جـ', 'د'][oIdx]})</span>
                          <div>
                            <span className="lang-ar">{optAr}</span>
                            <span className="lang-en">{optEn}</span>
                          </div>
                        </div>
                        {isAnswered && oIdx === q.a && <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>}
                        {isAnswered && selectedOpt === oIdx && !isCorrect && <i className="fa-solid fa-circle-xmark text-rose-400 text-sm"></i>}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`p-3 rounded-xl text-[11px] leading-relaxed border animate-fadeIn ${
                    isCorrect ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200' : 'bg-rose-950/50 border-rose-500/50 text-rose-200'
                  }`}>
                    <strong>
                      <span className="lang-ar">{isCorrect ? '✅ إجابة صحيحة!' : '❌ إجابة غير دقيقة!'}</span>
                      <span className="lang-en">{isCorrect ? '✅ Correct!' : '❌ Incorrect!'}</span>
                    </strong>{' '}
                    <span>
                      <span className="lang-ar">{q.exp.ar}</span>
                      <span className="lang-en">{q.exp.en}</span>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
