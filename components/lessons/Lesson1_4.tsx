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

        {/* 1. Explore (استكشف في ثنائيات ص 25) */}
        <div onClick={() => handleToggleCard('explore-1-4')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-people-arrows"></i>
              <span className="lang-ar">✎ استكشف في ثنائيات (كتاب الوزارة ص 25)</span>
              <span className="lang-en">✎ Explore in Pairs (Textbook p. 25)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('explore-1-4'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['explore-1-4'] ? 'إخفاء الإجابة' : 'عرض التوقع والتحليل المنهجي'}</span>
              <span className="lang-en">{expandedCards['explore-1-4'] ? 'Hide Answer' : 'Reveal Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['explore-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"مع زميل، انظرا إلى هذا الموقف: ذكاء اصطناعي للتعرف على الوجه أكثر عرضة لإساءة التعرف على أشخاص من بعض المجموعات العرقية مقارنة بغيرها. توقعا من قد يتضرر من هذا وكيف؟ واذكرا سبباً."</span>
            <span className="lang-en">"Consider this scenario: A facial recognition AI is more prone to misidentifying individuals from certain ethnic groups compared to others. Predict who might be harmed and how, stating one reason."</span>
          </p>
          {expandedCards['explore-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">💡 التحليل والسبب المنهجي (كتاب الوزارة ص 25):</span>
                <span className="lang-en">💡 Methodological Analysis & Reason (Textbook p. 25):</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>من يتضرر:</strong> أفراد المجموعات الأقل تمثيلاً في بيانات التدريب والأبرياء الذين قد يتعرضون للتوقيف الخاطئ في المعابر الأمنية أو المطارات. <br /><strong>السبب:</strong> لأن بيانات تدريب النظام كانت تحتوي على عدد غير كافٍ من صور تلك الفئات العرقية (بيانات تدريب غير ممثلة)، مما خفض دقة النظام معهم وأدى إلى نتائج تمييزية غير عادلة.</span>
                <span className="lang-en"><strong>Who is harmed:</strong> Underrepresented demographic groups and innocent individuals facing false security flagging. <br /><strong>Reason:</strong> Imbalanced training datasets lacking sufficient representation of those facial features, reducing model accuracy.</span>
              </p>
            </div>
          )}
        </div>

        {/* 2. Pause & Think (1) - ص 26 */}
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
            <span className="lang-ar">"عند استخدام تقنية التعرف على الوجه في الأماكن العامة، قد تتحسن السلامة والراحة، لكن تنشأ أيضاً مخاوف بشأن الخصوصية. اشرح كيف ينبغي الموازنة بين الراحة والسلامة وحماية الخصوصية، واذكر أي مبدأ أساسي من مبادئ أخلاقيات الذكاء الاصطناعي يرتبط ارتباطاً وثيقاً برأيك؟"</span>
            <span className="lang-en">"When using facial recognition in public spaces, safety and convenience improve, but privacy concerns arise. How should convenience, safety, and privacy be balanced, and which core AI ethics principle connects most closely to your view?"</span>
          </p>
          {expandedCards['pause-think-1-4-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 الموازنة والمبدأ الأخلاقي المرتبط (كتاب الوزارة ص 26):</span>
                <span className="lang-en">💡 Balance & Related Core Principle (Textbook p. 26):</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>كيفية الموازنة:</strong> باقتصار استخدام التقنية على المراقبة الضرورية للسلامة العامة في الأماكن عالية الخطورة فقط، مع تشفير البيانات وتحديد مدة الاحتفاظ بها وعدم استخدامها في التتبع الشخصي التجاري دون موافقة. <br /><strong>المبدأ الأخلاقي المرتبط:</strong> مبدأ <strong>"حماية الخصوصية (Privacy Protection)"</strong> ومبدأ <strong>"الشفافية (Transparency)"</strong> بإعلام المواطنين بوجود الكاميرات وآلية التعامل مع بياناتهم.</span>
                <span className="lang-en"><strong>Balancing Approach:</strong> Restricting facial recognition strictly to high-risk safety zones, encrypting biometric features, limiting data retention, and prohibiting commercial tracking. <br /><strong>Core Principles:</strong> <strong>Privacy Protection</strong> and <strong>Transparency</strong>.</span>
              </p>
            </div>
          )}
        </div>

        {/* 3. Pause & Think (2) - ص 28 */}
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
            <span className="lang-ar">"إذا لم يستطع أحد شرح سبب رفض الذكاء الاصطناعي لطلب توظيف شخص ما، فهل هذا عادل؟ أي مبدأ من مبادئ أخلاقيات الذكاء الاصطناعي مفقود؟"</span>
            <span className="lang-en">"If no one can explain why AI rejected someone's job application, is that fair? Which AI ethics principle is missing?"</span>
          </p>
          {expandedCards['pause-think-1-4-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-purple-300 block font-bold">
                <span className="lang-ar">💡 الشرح والتحليل المنهجي (كتاب الوزارة ص 28):</span>
                <span className="lang-en">💡 Methodological Analysis (Textbook p. 28):</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>هل هذا عادل؟</strong> لا، ليس عادلاً؛ لأن عدم القدرة على التفسير تمنع المتقدم من معرفة سبب الرفض أو الاعتراض عليه أو تعديل نقاط ضعفه، وتخفي أي تحيز خوارزمي محتمل داخل النظام (مشكلة الصندوق الأسود). <br /><strong>المبدأ المفقود:</strong> مبدأ <strong>"الشفافية (Transparency)"</strong> ومفهوم <strong>"الذكاء الاصطناعي القابل للتفسير (XAI)"</strong>، بالإضافة لمبدأ <strong>"العدالة (Fairness)"</strong>.</span>
                <span className="lang-en"><strong>Is it fair?</strong> No, because opacity hides potential bias (Black Box) and deprives candidates of their right to understand or appeal decisions. <br /><strong>Missing Principles:</strong> <strong>Transparency</strong>, <strong>Explainable AI (XAI)</strong>, and <strong>Fairness</strong>.</span>
              </p>
            </div>
          )}
        </div>

        {/* 4. Think Like an Engineer (فكر كمهندس: ابحث ثم قرر - ص 29) */}
        <div onClick={() => handleToggleCard('think-eng-1-4')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-user-shield"></i>
              <span className="lang-ar">⚙️ فكر كمهندس: ابحث ثم قرر (كتاب الوزارة ص 29)</span>
              <span className="lang-en">⚙️ Think Like an Engineer: Investigate & Decide (p. 29)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-4'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-4'] ? 'إخفاء الإجابة' : 'عرض بروتوكول التوظيف المسؤول'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-4'] ? 'Hide Answer' : 'Reveal Responsible Hiring Protocol'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"بناءً على حالة الذكاء الاصطناعي للتوظيف في ملاحظة 'توقف وفكر': 1. استقصِ عن حالة موثقة اتُهم فيها نظام ذكاء اصطناعي بإنتاج نتائج غير عادلة. 2. اعتبر المسؤولية: عندما يتخذ الذكاء الاصطناعي قراراً غير عادل، من المسؤول — المطور أم الشركة أم المشغل؟ 3. قرر: ما القاعدة الواحدة التي ينبغي إتباعها لجعل النظام أكثر عدالة؟"</span>
            <span className="lang-en">"Based on the AI recruitment hiring bias scenario: 1. Investigate a documented case of unfair AI. 2. Assign responsibility (developer vs company vs operator). 3. Decide 1 rule a company must follow to make the system fair."</span>
          </p>
          {expandedCards['think-eng-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">إجابة نشاط "فكر كمهندس" المعتمدة (كتاب الوزارة ص 29):</span>
                <span className="lang-en">Official Engineering Protocol (Textbook p. 29):</span>
              </strong>
              <div className="space-y-1.5 text-sub">
                <p>1. <strong>الحالة الموثقة:</strong> أداة التوظيف الآلية لشركة Amazon عام 2018 التي ظهر أنها تميز ضد النساء لأنها دُرّبت على سير ذاتية لـ 10 سنوات سابقة كانت أغلبها لذكور.</p>
                <p>2. <strong>توزيع المسؤولية (Responsibility):</strong> <br />• <strong>المطور:</strong> مسؤول عن جودة الخوارزمية وتوازن بيانات التدريب. <br />• <strong>الشركة والجهة المشغلة:</strong> مسؤولة عن القرار النهائي وتطبيق الفحص البشري ومنع الاعتماد الأعمى على النظام.</p>
                <p>3. <strong>القاعدة الواحدة المقترحة:</strong> <em>"حظر اتخاذ قرار الرفض أو القبول التلقائي النهائي بالكامل دون مراجعة وإقرار من لجنة توظيف بشرية، مع التدقيق الدوري الأسبوعي لنسب القبول بين الفئات (Human-in-the-loop)."</em></p>
              </div>
            </div>
          )}
        </div>

        {/* 5. Apply What You Learned (طبق ما تعلمته - ص 29) */}
        <div onClick={() => handleToggleCard('apply-1-4')} className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3 cursor-pointer select-none group hover:border-cyan-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-earth-americas"></i>
              <span className="lang-ar">🌍 طبق ما تعلمته (كتاب الوزارة ص 29)</span>
              <span className="lang-en">🌍 Apply What You Learned (Textbook p. 29)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('apply-1-4'); }} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['apply-1-4'] ? 'إخفاء الإجابة' : 'عرض الشرح والموقف العملي'}</span>
              <span className="lang-en">{expandedCards['apply-1-4'] ? 'Hide Answer' : 'Reveal Solution'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['apply-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"ترغب مدرسة في استخدام كاميرات التعرف على الوجه عند بوابتها لتسجيل الحضور تلقائياً: 1. حدد فائدة عملية ومصدر قلق يتعلق بالخصوصية. 2. إذا أخطأت الكاميرا في التعرف على طالب، من ينبغي أن يكون مسؤولاً — المدرسة أم الشركة المصنعة؟ اذكر سبباً."</span>
            <span className="lang-en">"A school considers gate facial recognition for automated attendance: 1. Identify 1 practical benefit & 1 privacy concern. 2. If a student is misidentified, who is responsible — school or manufacturer? State 1 reason."</span>
          </p>
          {expandedCards['apply-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-cyan-300 block font-bold">
                <span className="lang-ar">إجابة النشاط المنهجية (كتاب الوزارة ص 29):</span>
                <span className="lang-en">Model School Attendance Analysis (Textbook p. 29):</span>
              </strong>
              <div className="space-y-1.5 text-sub">
                <p>1. <strong>الفائدة العملية:</strong> سرعة ودقة تسجيل الحضور وتوفير وقت الحصة وفقدان الكروت. <br /><strong>مصدر القلق بالخصوصية:</strong> تخزين البصمات البيومترية للطلاب في قاعدة بيانات واحتتمال تسريبها أو تتبع حركتهم دون إذن الوالدين.</p>
                <p>2. <strong>من المسؤول عند الخطأ:</strong> <br />• <strong>المدرسة:</strong> هي المسؤولة عن النتيجة الإدارية (كخصم درجات أو تسجيل غياب خاطئ)؛ لأن المراجعة البشرية واجبة قبل رصد العقوبة. <br />• <strong>الشركة المصنعة:</strong> مسؤولة عن إرسال تحديث فني ومعالجة الخلل إذا ثبت أن خوارزمية التعرف تعاني من عيب تصنيعي في النموذج.</p>
              </div>
            </div>
          )}
        </div>

        {/* 6. Exam Style Question (سؤال على نمط الامتحان - ص 29) */}
        <div onClick={() => handleToggleCard('exam-style-1-4')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة ص 29</span>
              <span className="lang-en">📝 Exam-Style Question (6 Marks) — Textbook p. 29</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-4'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-4'] ? 'إخفاء الإجابة' : 'عرض نموذج الإجابة وتوزيع الدرجات'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-4'] ? 'Hide Answer' : 'Model Answer & Mark Scheme'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-4'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"حلل كيف يمكن أن ينشأ التحيز الخوارزمي في نظام ذكاء اصطناعي، وكيف يمكن تقليله. (في إجابتك: أشر إلى سبب التحيز (بيانات تدريب متحيزة أو غير كافية) وإلى كيفية مساعدة مبدأي 'العدالة' و'الشفافية' في معالجته) [6 درجات]"</span>
            <span className="lang-en">"Analyze how algorithmic bias can arise in an AI system and how it can be reduced. (In your answer: refer to causes (biased or insufficient training data) and how Fairness & Transparency help address it) [6 Marks]"</span>
          </p>
          {expandedCards['exam-style-1-4'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">نموذج الإجابة الرسمي للحصول على الدرجة النهائية (6/6):</span>
                <span className="lang-en">Official Mark Scheme (6/6 Marks):</span>
              </strong>
              <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>كيفية نشأة التحيز [درجتان]:</strong> ينشأ التحيز الخوارزمي عندما تكون <strong>بيانات التدريب متحيزة أو غير كافية</strong> (مثل احتواؤها على ندرة في تمثيل بعض الفئات، أو انعكاس نزعات تمييزية سابقة في المجتمع)، أو نتيجة طريقة بناء النموذج واختيار متغيرات بديلة غير مناسبة.</li>
                <li><strong>دور مبدأ العدالة (Fairness) [درجتان]:</strong> يضمن مبدأ العدالة عدم التمييز ظلماً ضد أي شخص أو مجموعة، ويحث المهندسين على <strong>إعادة موازنة بيانات التدريب</strong> وتضمين كفاءات متنوعة ليكون التقييم متكافئاً.</li>
                <li><strong>دور مبدأ الشفافية (Transparency) [درجتان]:</strong> يضمن مبدأ الشفافية <strong>إتاحة معلومات واضحة عن عمل النظام</strong> ومصادر البيانات وحدوده، مما يسهل على البشر وخبراء XAI فحص الخوارزمية واكتشاف التحيز الخفي وتصحيحه قبل النشر.</li>
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
