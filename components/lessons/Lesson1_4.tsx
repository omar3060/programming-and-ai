'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { XAIDecisionVisualizer } from '@/components/simulators/XAIDecisionVisualizer';

export function Lesson1_4() {
  const { playSfx } = useApp();
  const quizQuestions = allExamQuestions.slice(15, 20);

  const [biasResult, setBiasResult] = useState<{ show: boolean; isUnbalanced: boolean }>({ show: false, isUnbalanced: true });
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const handleTestBiasModel = (isUnbalanced: boolean) => {
    playSfx(isUnbalanced ? 'error' : 'success');
    setBiasResult({ show: true, isUnbalanced });
  };

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

  return (
    <div id="view-lesson-1-4" className="lesson-view space-y-8 animate-fadeIn">
      {/* Instructor Bio Section */}
      <InstructorBioCard />

      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-scale-balanced"></i>
                <span className="lang-ar">الدرس 1-4 (كتاب الوزارة ص 24 - ص 30)</span>
                <span className="lang-en">Lesson 1-4 (Textbook pp. 24 - 30)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                <span className="lang-ar">أخلاقيات الذكاء الاصطناعي</span>
                <span className="lang-en">AI Ethics & Governance</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي</span>
              <span className="lang-en">Ethical Issues with Artificial Intelligence</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">إذا كانت بيانات التدريب متحيزة، يمكن للذكاء الاصطناعي أن يكرر هذا التحيز ويضخمه في أحكامه. الاستخدام المسؤول يتطلب مراجعة التحيز، وفهم القرارات، وتطبيق المبادئ الأخلاقية الأربعة.</span>
              <span className="lang-en">If training data is skewed, AI replicates and amplifies that bias. Responsible AI requires debiasing, explainability (XAI), and adherence to the four fundamental ethical principles.</span>
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

        {/* Objectives & Guiding Question */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-rose-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bullseye"></i>
              <span className="lang-ar">🎯 أهداف التعلم الرسمية للدرس:</span>
              <span className="lang-en">🎯 Official Learning Objectives:</span>
            </strong>
            <ul className="space-y-1 text-sub">
              <li>• <span className="lang-ar">شرح التحيز الخوارزمي وأسبابه وكيفية الوقاية منه هندسياً.</span><span className="lang-en">Explain algorithmic bias causes, risks, and engineering mitigation strategies.</span></li>
              <li>• <span className="lang-ar">ربط المبادئ الأربعة لأخلاقيات الذكاء الاصطناعي بمواقف وتطبيقات واقعية.</span><span className="lang-en">Connect the four basic ethical principles to realistic societal scenarios.</span></li>
              <li>• <span className="lang-ar">توضيح مفهوم الذكاء القابل للتفسير (XAI) ودوره في فك غموض الصندوق الأسود.</span><span className="lang-en">Explain XAI and its role in resolving black-box decision opacity.</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-question"></i>
              <span className="lang-ar">❓ السؤال التوجيهي للدرس (كتاب الوزارة ص 24):</span>
              <span className="lang-en">❓ Guiding Question (Textbook p. 24):</span>
            </strong>
            <p className="text-slate-200 font-medium leading-relaxed">
              <span className="lang-ar">"ما القضايا الأخلاقية التي تنشأ مع انتشار الذكاء الاصطناعي، وما المبادئ التي ينبغي أن توجه استخدامه المسؤول؟"</span>
              <span className="lang-en">"What ethical issues emerge as AI expands, and what principles must guide its responsible governance?"</span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: Algorithmic Bias Simulator (ص 25) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
            <span className="lang-ar">محاكي التحيز الخوارزمي (Algorithmic Bias) في فرز التوظيف (ص 25)</span>
            <span className="lang-en">Algorithmic Bias Hiring Simulator (p. 25)</span>
          </h3>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">نظام فرز سير ذاتية آلي دُرّب على بيانات شركة كانت 85% من التعيينات السابقة فيها لذكور فقط:</span>
          <span className="lang-en">A resume screening AI trained on historical company records where 85% of previous hires were male:</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <button onClick={() => handleTestBiasModel(true)} className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/50 hover:bg-rose-900/40 text-start space-y-1.5 transition">
            <strong className="text-rose-300 block">
              1. <span className="lang-ar">تشغيل النموذج ببيانات تاريخية غير متوازنة ❌</span>
              <span className="lang-en">Unbalanced Historical Data Model ❌</span>
            </strong>
            <p className="text-sub"><span className="lang-ar">يستنتج النموذج أن الذكر هو الموظف الأفضل إحصائياً، فيستبعد الكفاءات النسائية تلقائياً!</span><span className="lang-en">The model infers male preference, systematically penalizing qualified female applicants.</span></p>
          </button>
          <button onClick={() => handleTestBiasModel(false)} className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/50 hover:bg-emerald-900/40 text-start space-y-1.5 transition">
            <strong className="text-emerald-300 block">
              2. <span className="lang-ar">تشغيل النموذج بعد تنقية البيانات وتحقيق العدالة ✅</span>
              <span className="lang-en">Debiased & Balanced Fair Model ✅</span>
            </strong>
            <p className="text-sub"><span className="lang-ar">إلغاء المتغيرات البديلة وتمثيل الفئات بعدالة، ليركز النظام فقط على الكفاءة والمهارات.</span><span className="lang-en">Proxy variables removed; evaluation is conducted purely on skills and verifiable merits.</span></p>
          </button>
        </div>

        {biasResult.show && (
          <div className={`p-3.5 rounded-xl text-xs leading-relaxed border animate-fadeIn ${
            biasResult.isUnbalanced ? 'bg-rose-950/60 border-rose-500 text-rose-200' : 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
          }`}>
            {biasResult.isUnbalanced ? (
              <>
                ⚠️ <strong>رصد تحيز خوارزمي صارخ (Algorithmic Bias):</strong> النموذج رفض تلقائياً 92% من السير الذاتية للإناث بغض النظر عن خبراتهن ورتبهن الأكاديمية! هذا يثبت أن الـ AI يكرر تحيزات البشر التاريخية إذا لم يُدقق بوعي.
              </>
            ) : (
              <>
                ✅ <strong>نظام عادل ومحايد (Fairness-Aware AI):</strong> بعد إزالة المؤشرات الضمنية وإعادة موازنة البيانات، أصبحت نسبة القبول تعتمد 100% على الدرجات الأكاديمية والمهارات العملية دون النظر للنوع!
              </>
            )}
          </div>
        )}
      </div>

      {/* SECTION 2: The 4 Principles of AI Ethics (ص 27) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs"><span className="lang-ar">٢</span><span className="lang-en">2</span></span>
            <span className="lang-ar">المبادئ الأربعة الأساسية لأخلاقيات الذكاء الاصطناعي (ص 27)</span>
            <span className="lang-en">The Four Core Principles of AI Ethics (p. 27)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm"><span className="lang-ar">١</span><span className="lang-en">1</span></div>
            <h4 className="font-bold text-sm text-emerald-300"><span className="lang-ar">العدالة (Fairness)</span><span className="lang-en">Fairness</span></h4>
            <p className="text-sub leading-relaxed"><span className="lang-ar">عدم التمييز ظلماً ضد أي شخص أو مجموعة في المخرجات والفرص وتكافؤ التقييم.</span><span className="lang-en">No unjust discrimination against any individual or demographic group.</span></p>
          </div>
          <div className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center text-sm"><span className="lang-ar">٢</span><span className="lang-en">2</span></div>
            <h4 className="font-bold text-sm text-brand-400"><span className="lang-ar">الشفافية (Transparency)</span><span className="lang-en">Transparency</span></h4>
            <p className="text-sub leading-relaxed"><span className="lang-ar">إتاحة معلومات واضحة عن عمل النظام وعملية اتخاذ قراره ومصادر بياناته وحدوده.</span><span className="lang-en">Disclosing how systems operate, how decisions are made, and their limits.</span></p>
          </div>
          <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-sm"><span className="lang-ar">٣</span><span className="lang-en">3</span></div>
            <h4 className="font-bold text-sm text-purple-300"><span className="lang-ar">حماية الخصوصية</span><span className="lang-en">Privacy Protection</span></h4>
            <p className="text-sub leading-relaxed"><span className="lang-ar">التعامل الآمن مع المعلومات الشخصية الحساسة ومنع التتبع أو المشاركة دون إذن صريح.</span><span className="lang-en">Appropriate handling of personal data without unauthorized tracking.</span></p>
          </div>
          <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm"><span className="lang-ar">٤</span><span className="lang-en">4</span></div>
            <h4 className="font-bold text-sm text-amber-300"><span className="lang-ar">المساءلة (Accountability)</span><span className="lang-en">Accountability</span></h4>
            <p className="text-sub leading-relaxed"><span className="lang-ar">تحديد من يتحمل المسؤولية القانونية والأخلاقية عن قرارات النظام وإمكان محاسبتهم.</span><span className="lang-en">Designating who answers for AI outcomes (developer, operator, user).</span></p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Explainable AI (XAI) vs Black Box (ص 28) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-3xl theme-panel border space-y-2">
          <span className="text-2xl block">📦</span>
          <strong className="text-white text-sm block"><span className="lang-ar">مشكلة الصندوق الأسود (Black Box)</span><span className="lang-en">Black-Box Problem</span></strong>
          <p className="text-sub leading-relaxed"><span className="lang-ar">غموض العلاقات الحسابية الداخلية في الشبكات العصبية العميقة يجعل من المستحيل على البشر فهم سبب القرار أو كشف التحيز الداخلي في الخوارزمية.</span><span className="lang-en">Opaque decision logic prevents human stakeholders from auditing or catching hidden biases.</span></p>
        </div>
        <div className="p-5 rounded-3xl theme-panel border border-cyan-500/40 space-y-2">
          <span className="text-2xl block">💡</span>
          <strong className="text-cyan-300 text-sm block"><span className="lang-ar">الذكاء القابل للتفسير (XAI)</span><span className="lang-en">Explainable AI (XAI)</span></strong>
          <p className="text-sub leading-relaxed"><span className="lang-ar">تقنيات وأدوات برمجية تتيح للبشر فهم العوامل والأسباب التي قادت النموذج لحكمه، مما يمكننا من مراجعة الخطأ وتحقيق الشفافية والمساءلة.</span><span className="lang-en">Methods enabling humans to trace why an AI reached a verdict, ensuring auditability and compliance.</span></p>
        </div>
      </div>

      {/* Live Interactive Explainable AI (XAI) vs Black-Box Simulator */}
      <XAIDecisionVisualizer />

      {/* TEXTBOOK SIDEBAR FEATURES (كتاب الوزارة ص 24 - 30) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">ميزات وأنشطة كتاب الوزارة الرسمية للدرس 1-4</span>
              <span className="lang-en">Official Lesson 1-4 Textbook Enrichment Features</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: توقف وفكر • استقصِ كمهندس • فكر كمهندس • نمط الامتحان</span>
              <span className="lang-en">Activities: Pause & Think • Investigate • Exam Style</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 26 - ص 30</span>
        </div>

        {/* 1. Pause & Think (1) */}
        <div onClick={() => handleToggleCard('pause-think-1-4-1')} className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-3 cursor-pointer select-none group hover:border-brand-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-brain"></i>
              <span className="lang-ar">🧠 توقف وفكر (1) (كتاب الوزارة ص 26)</span>
              <span className="lang-en">🧠 Pause & Think (1) (Textbook p. 26)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-4-1'); }} className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-4-1'] ? 'إخفاء الإجابة' : 'عرض الإجابة والتحليل النموذجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-4-1'] ? 'Hide Answer' : 'Reveal Model Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-4-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"إذا تسببت سيارة ذاتية القيادة في حادث سير أودى بحياة شخص، فمن يتحمل المسؤولية قانونياً وأخلاقياً وفق مبدأ المساءلة (Accountability): مالك السيارة، أم الشركة المصنعة للسيارة، أم المبرمج الذي كتب الخوارزمية؟"</span>
            <span className="lang-en">"Who bears legal and moral responsibility in a fatal autonomous car collision: owner, automaker, or algorithm programmer?"</span>
          </p>
          {expandedCards['pause-think-1-4-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 التحليل القانوني والأخلاقي المعتمد (م/ عمر محمود):</span>
                <span className="lang-en">💡 Legal & Ethical Engineering Analysis:</span>
              </strong>
              <p>
                <span className="lang-ar">تُوزع المسؤولية بناءً على <strong>مستوى التحكم والسبب الجذري</strong>؛ فإذا كان الحادث ناتجاً عن خلل برمجي في التعرف على العوائق أثناء التشغيل التلقائي المعتمد، تقع المسؤولية القانونية على <strong>الشركة المصنعة والمطورة للنظام</strong> (مسؤولية عيوب المنتج Product Liability). أما إذا كان المالك قد عطل أنظمة الأمان أو تجاهل تنبيهات استلام المقود يدوياً، تقع المسؤولية على <strong>السائق المالك</strong>. ولا يُحاسب المبرمج كفرد بشكل شخصي ما دام التزم بالمعايير المهنية للمؤسسة.</span>
                <span className="lang-en">Liability depends on control hierarchy: Manufacturer bears product liability for algorithmic perception defects, while the driver/owner answers if safety overrides or manual intervention warnings were ignored.</span>
              </p>
            </div>
          )}
        </div>

        {/* 2. Pause & Think (2) */}
        <div onClick={() => handleToggleCard('pause-think-1-4-2')} className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none group hover:border-purple-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-scale-unbalanced-flip"></i>
              <span className="lang-ar">🧠 توقف وفكر (2) (كتاب الوزارة ص 28)</span>
              <span className="lang-en">🧠 Pause & Think (2) (Textbook p. 28)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-4-2'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-4-2'] ? 'إخفاء الإجابة' : 'عرض الشرح المنهجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-4-2'] ? 'Hide Answer' : 'Reveal Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-4-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"كيف يمكن لنظام ذكاء اصطناعي لتقييم الائتمان ومنح القروض في البنوك أن يكون غير عادل ومتحيزاً ضد فئات معينة، حتى لو تم حذف بيانات العرق والنوع من قاعدة البيانات عمداً؟"</span>
            <span className="lang-en">"How can bank credit scoring AI exhibit bias even when gender and race variables are deliberately omitted?"</span>
          </p>
          {expandedCards['pause-think-1-4-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-purple-300 block font-bold">
                <span className="lang-ar">💡 ظاهرة المتغيرات البديلة (Proxy Variables):</span>
                <span className="lang-en">💡 Proxy Variables Phenomenon:</span>
              </strong>
              <p>
                <span className="lang-ar">حتى لو تم حذف خانة "النوع" أو "العرق"، يستطيع الذكاء الاصطناعي استنتاجها بشكل غير مباشر من <strong>متغيرات بديلة (Proxy Variables)</strong> مرتبطة بها إحصائياً، مثل: <em>الرمز البريدي للحي السكني، أو مسمى الوظيفة، أو نوع المشتريات السابقة</em>. إذا كانت أحياء سكنية معينة تقطنها فئات أقل دخلاً تاريخياً، فإن النموذج يرفض إقراضهم تلقائياً بناءً على محل سكنهم، مكرراً التمييز غير العادل!</span>
                <span className="lang-en">Even if protected attributes are removed, AI infers them via correlated "Proxy Variables" such as ZIP codes, job titles, or spending histories, perpetuating historical socio-economic discrimination.</span>
              </p>
            </div>
          )}
        </div>

        {/* 3. Investigate Like an Engineer */}
        <div onClick={() => handleToggleCard('investigate-1-4')} className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none group hover:border-emerald-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-code-compare"></i>
              <span className="lang-ar">🔍 استقصِ كمهندس (كتاب الوزارة ص 25)</span>
              <span className="lang-en">🔍 Investigate Like an Engineer (p. 25)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('investigate-1-4'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['investigate-1-4'] ? 'إخفاء الإجابة' : 'عرض بروتوكول تدقيق وإزالة التحيز'}</span>
              <span className="lang-en">{expandedCards['investigate-1-4'] ? 'Hide Answer' : 'Reveal Debiasing Protocol'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['investigate-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"كُلفت كمهندس برمجيات بفحص نظام آلي لفرز السير الذاتية، واكتشفت أنه يرفض طلبات المتقدمات من الإناث بمعدل ضعف الذكور: ما الخطوات البرمجية الخمس الواجب اتخاذها لعلاج هذا التحيز؟"</span>
            <span className="lang-en">"You audit a recruitment AI rejecting female candidates at twice the male rate: What 5 engineering steps rectify this bias?"</span>
          </p>
          {expandedCards['investigate-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">بروتوكول إزالة التحيز الخوارزمي (Debiasing Roadmap):</span>
                <span className="lang-en">5-Step Debiasing Roadmap:</span>
              </strong>
              <ol className="space-y-1 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>تدقيق بيانات التدريب (Data Auditing):</strong> فحص توازن العينات السابقة وتحديد نسب التمثيل التاريخية.</li>
                <li><strong>إعادة موازنة البيانات (Data Re-balancing):</strong> إضافة عينات متساوية وكفاءات متنوعة لمنع تفضيل أي فئة إحصائياً.</li>
                <li><strong>حذف المتغيرات البديلة والمؤشرات الجندرية:</strong> إخفاء الأسماء، والأنشطة الرياضية، والمدارس أحادية الجنس من السير الذاتية.</li>
                <li><strong>تعديل دالة الخسارة (Fairness-aware Loss Function):</strong> إضافة شرط جزائي في خوارزمية التعلم يعاقب النموذج إذا أظهر أي تباين في نسب القبول بين الفئات المؤهلة.</li>
                <li><strong>التدقيق المستمر واختبار A/B:</strong> إجراء اختبارات دورية أسبوعية للتأكد من ثبات معيار الكفاءة والمهارات دون انحياز.</li>
              </ol>
            </div>
          )}
        </div>

        {/* 4. Think Like an Engineer */}
        <div onClick={() => handleToggleCard('think-eng-1-4')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-user-shield"></i>
              <span className="lang-ar">💡 فكر كمهندس (كتاب الوزارة ص 29)</span>
              <span className="lang-en">💡 Think Like an Engineer (p. 29)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-4'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-4'] ? 'إخفاء الإجابة' : 'عرض بروتوكول حماية الخصوصية'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-4'] ? 'Hide Answer' : 'Reveal Privacy Architecture'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"التوفيق بين حماية الخصوصية وتدريب نماذج الذكاء الاصطناعي الطبية: كيف تصمم كمهندس نظاماً يجمع ملايين السجلات الطبية لتدريب نموذج ينقذ المرضى دون أي مساس بخصوصية المرضى وسرية بياناتهم؟"</span>
            <span className="lang-en">"Reconcile privacy protection with training life-saving healthcare AI: How do you architect data pipelines preserving anonymity?"</span>
          </p>
          {expandedCards['think-eng-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">المعمارية الهندسية للخصوصية (Privacy-Preserving AI):</span>
                <span className="lang-en">Privacy-Preserving Architecture:</span>
              </strong>
              <div className="space-y-1 text-sub">
                <p>• <strong>نزع الهوية وتجريد البيانات (Data Anonymization):</strong> حذف الأسماء والأرقام القومية واستبدالها بمعرفات رقمية عشوائية غير قابلة للعكس.</p>
                <p>• <strong>التعلّم الموحد (Federated Learning):</strong> لا تجمع بيانات المستشفيات في خادم مركزي واحد، بل يُدرب النموذج داخل كل مستشفى محلياً، وتُرسل التحديثات الرياضية للأوزان فقط دون خروج أي سجل مريض.</p>
                <p>• <strong>التشويش والخصوصية التفاضلية (Differential Privacy):</strong> إضافة تشويش رياضي ضئيل يمنع أي متسلل من استنتاج هوية أي مريض من مخرجات النموذج.</p>
              </div>
            </div>
          )}
        </div>

        {/* 5. Exam Style Question */}
        <div onClick={() => handleToggleCard('exam-style-1-4')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة</span>
              <span className="lang-en">📝 Exam-Style Question (6 Marks)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-4'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-4'] ? 'إخفاء الإجابة' : 'عرض نموذج الإجابة وتوزيع الدرجات'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-4'] ? 'Hide Answer' : 'Model Answer & Mark Scheme'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"اذكر المبادئ الأربعة الأساسية لأخلاقيات الذكاء الاصطناعي كما وردت في كتاب الوزارة، ثم وضح بالتفصيل كيف يرتبط مبدأ 'الشفافية' بمفهوم 'الذكاء القابل للتفسير (XAI)'؟"</span>
            <span className="lang-en">"State the four core AI ethics principles from the textbook, then elaborate on how Transparency relates to Explainable AI (XAI)."</span>
          </p>
          {expandedCards['exam-style-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span>
                <span className="lang-en">Model Answer for Full Marks (6/6):</span>
              </strong>
              <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>المبادئ الأربعة [4 درجات]:</strong>
                  <br />1) <strong>العدالة (Fairness):</strong> عدم التمييز وتكافؤ الفرص في النتائج.
                  <br />2) <strong>الشفافية (Transparency):</strong> وضوح طريقة اتخاذ القرار ومصادر البيانات والحدود.
                  <br />3) <strong>حماية الخصوصية (Privacy Protection):</strong> صون البيانات الشخصية ومنع التتبع غير المصرح به.
                  <br />4) <strong>المساءلة (Accountability):</strong> تحديد المسؤولين عن قرارات النظام وأخطائه وإمكان محاسبتهم.
                </li>
                <li><strong>العلاقة بين الشفافية و XAI [درجتان]:</strong> مبدأ الشفافية يفرض حق المستخدم في معرفة "لماذا" اتخذ النظام هذا القرار. وبما أن الشبكات العصبية العميقة تعاني من غموض "الصندوق الأسود"، فإن تقنيات <strong>الذكاء القابل للتفسير (Explainable AI - XAI)</strong> هي الأداة الهندسية الوحيدة التي تفك هذا الغموض وتترجم المعادلات الحسابية المعقدة إلى مبررات واضحة يفهمها البشر، مما يحقق مبدأ الشفافية عملياً.</li>
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* 3D Flashcards 1-4 */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-sm flex items-center gap-2">
          <i className="fa-solid fa-clone text-rose-400"></i>
          <span className="lang-ar">بطاقات المراجعة السريعة (المس لقلب البطاقة):</span>
          <span className="lang-en">Lesson 1-4 Flashcards (Tap to flip):</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            { id: "fc14-1", icon: "⚖️", titleAr: "التحيز الخوارزمي", titleEn: "Algorithmic Bias", color: "rose", descAr: "انحراف في أحكام الذكاء الاصطناعي ناتج عن بيانات تدريب غير متوازنة أو تحيزات تاريخية.", descEn: "Systematic bias in AI outcomes originating from skewed or unrepresentative training data." },
            { id: "fc14-2", icon: "💡", titleAr: "XAI القابل للتفسير", titleEn: "Explainable AI", color: "cyan", descAr: "أساليب تساعد البشر على فهم العوامل التي جعلت الذكاء الاصطناعي يتخذ قراره.", descEn: "Technologies providing human-interpretable rationale for complex neural predictions." },
            { id: "fc14-3", icon: "🛡️", titleAr: "العدالة", titleEn: "Fairness", color: "emerald", descAr: "مبدأ عدم التمييز ظلماً ضد أي شخص أو مجموعة في نتائج وتقييمات الذكاء الاصطناعي.", descEn: "Prohibits unjust discrimination against any individual or demographic group in AI results." },
            { id: "fc14-4", icon: "📋", titleAr: "المساءلة", titleEn: "Accountability", color: "amber", descAr: "تحديد الجهات المسؤولة عن النظام وقراراته وإمكان محاسبتهم قانونياً وأخلاقياً.", descEn: "Designating who answers for AI outcomes and ensuring legal/moral answerability." }
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

      {/* QUIZ 1-4 */}
      <div className="theme-panel border p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <i className="fa-solid fa-circle-question text-rose-400"></i>
            <span className="lang-ar">اختبار تدريبي على الدرس 1-4 (5 أسئلة منهجية)</span>
            <span className="lang-en">Lesson 1-4 Practice Quiz (5 Questions)</span>
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
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
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
                    let btnStyle = "theme-panel border hover:border-rose-500 text-slate-300";

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
