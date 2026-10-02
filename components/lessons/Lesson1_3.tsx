'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
import { AIApplicationsInteractiveGrid } from '@/components/simulators/AIApplicationsInteractiveGrid';

export function Lesson1_3() {
  const { playSfx } = useApp();
  const quizQuestions = allExamQuestions.slice(20, 30);

  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

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
    <div id="view-lesson-1-3" className="lesson-view space-y-8 animate-fadeIn">
      {/* Instructor Bio Section */}
      <InstructorBioCard />

      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-industry"></i>
                <span className="lang-ar">الدرس 1-3 (كتاب الوزارة ص 18 - ص 23)</span>
                <span className="lang-en">Lesson 1-3 (Textbook pp. 18 - 23)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                <span className="lang-ar">تطبيقات الذكاء الاصطناعي</span>
                <span className="lang-en">AI Applications</span>
              </span>
              <DownloadEvaluationButton
                pdfUrl="/evaluations/unit1/lesson1_3_eval.pdf?v=20261002"
                fileName="حل_تقييمات_الدرس_الثالث_الذكاء_الاصطناعي_في_الحياة_اليومية.pdf"
                lessonTitle="الدرس الثالث"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">الذكاء الاصطناعي في الحياة اليومية والصناعة</span>
              <span className="lang-en">AI in Daily Life and Industry</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">يبرع الذكاء الاصطناعي في تصنيف الأنماط في البيانات الضخمة، لكن التدخل البشري والمسؤولية القانونية يظلان واجباً حتمياً في القرارات الحساسة وعالية الأثر كالصحة والقضاء.</span>
              <span className="lang-en">AI excels at recognizing patterns across complex datasets, but human supervision is mandatory in high-impact decisions affecting lives and accountability.</span>
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
            <strong className="text-emerald-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bullseye"></i>
              <span className="lang-ar">أهداف التعلم الرسمية للدرس:</span>
              <span className="lang-en">Official Learning Objectives:</span>
            </strong>
            <ul className="space-y-1 text-sub">
              <li>• <span className="lang-ar">إعطاء أمثلة على كيفية استخدام الذكاء الاصطناعي في الحياة اليومية ومختلف الصناعات.</span><span className="lang-en">Give examples of how AI is used in daily life and various industries.</span></li>
              <li>• <span className="lang-ar">شرح ما يبرع فيه الذكاء الاصطناعي وما يتطلب الحذر عند استخدامه.</span><span className="lang-en">Explain what AI is good at and what requires caution when using AI.</span></li>
              <li>• <span className="lang-ar">قيم استخداماً للذكاء الاصطناعي في سياق محدد، وبرر الحاجة إلى الإشراف البشري عندما يكون أثر الخطأ أو القرار مرتفعاً.</span><span className="lang-en">Evaluate an AI application in a specific context, and justify the need for human oversight when error impact or decision sensitivity is high.</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-question"></i>
              <span className="lang-ar">السؤال التوجيهي للدرس (كتاب الوزارة ص 18):</span>
              <span className="lang-en">Guiding Question (Textbook p. 18):</span>
            </strong>
            <p className="text-slate-200 font-medium leading-relaxed">
              <span className="lang-ar">"أين يُستخدم الذكاء الاصطناعي في الحياة اليومية والصناعة، وما الذي يبرع فيه، وما الذي يتطلب الحذر؟"</span>
              <span className="lang-en">"Where is AI used in daily life and industry, what is AI good at, and what needs caution?"</span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: Everyday & Industrial Applications (ص 19 - 20) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
            <span className="lang-ar">تطبيقات الذكاء الاصطناعي اليومية والصناعية (ص 19 - ص 20)</span>
            <span className="lang-en">Everyday & Industrial AI Applications (pp. 19 - 20)</span>
          </h3>
        </div>

        {/* Everyday */}
        <div className="space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-brand-400 flex items-center gap-2">
            <i className="fa-solid fa-house-laptop"></i>
            <span className="lang-ar">أ) في الحياة اليومية للمستهلك:</span>
            <span className="lang-en">A) Everyday Consumer AI:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
              <span className="text-2xl block">🎯</span>
              <strong className="text-white block text-sm"><span className="lang-ar">أنظمة التوصية</span><span className="lang-en">Recommendation systems</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">التنبؤ بالتفضيلات من بيانات السلوك السابق وعرض التوصيات (مثل: يوتيوب، أمازون، سبوتيفاي وغيرها).</span><span className="lang-en">Predict preferences from past behavior data and display recommendations (e.g., YouTube, Amazon, Spotify, etc.).</span></p>
            </div>
            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
              <span className="text-2xl block">🎙️</span>
              <strong className="text-white block text-sm"><span className="lang-ar">المساعدات الصوتية</span><span className="lang-en">Voice assistants</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">التعرف على الصوت، وفهم الأوامر، وتنفيذها (مثل: سيري Siri، مساعد جوجل وغيرها).</span><span className="lang-en">Recognize a voice, understand commands, and execute them (e.g., Siri, Google Assistant, etc.).</span></p>
            </div>
            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
              <span className="text-2xl block">🌐</span>
              <strong className="text-white block text-sm"><span className="lang-ar">الترجمة الآلية</span><span className="lang-en">Machine translation</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">ترجمة النص تلقائياً إلى لغات مختلفة (مثل: ترجمة جوجل، DeepL وغيرها).</span><span className="lang-en">Automatically translate text into different languages (e.g., Google Translate, DeepL, etc.).</span></p>
            </div>
            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
              <span className="text-2xl block">👤</span>
              <strong className="text-white block text-sm"><span className="lang-ar">التعرف على الوجه</span><span className="lang-en">Face recognition</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">الكشف عن وجوه الأشخاص في الصور والتعرف عليها تلقائياً (مثل: فتح الهاتف الذكي وغيرها).</span><span className="lang-en">Automatically detect and identify human faces in photographs (e.g., Smartphone unlocking, etc.).</span></p>
            </div>
          </div>
        </div>

        {/* Industrial */}
        <div className="space-y-3 pt-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <i className="fa-solid fa-industry"></i>
            <span className="lang-ar">ب) في القطاعات والمنشآت الصناعية:</span>
            <span className="lang-en">B) Industrial Sector Deployments:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
              <span className="text-2xl block">🩺</span>
              <strong className="text-cyan-300 block text-sm"><span className="lang-ar">الرعاية الصحية</span><span className="lang-en">Healthcare</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">الذكاء الاصطناعي للتشخيص بالصور (الكشف عن الأمراض من صور الأشعة السينية والتصوير المقطعي)، ودعم اكتشاف الأدوية.</span><span className="lang-en">Image-diagnosis AI (detecting diseases from X-ray and CT images), drug-discovery support.</span></p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
              <span className="text-2xl block">🌾</span>
              <strong className="text-emerald-300 block text-sm"><span className="lang-ar">الزراعة</span><span className="lang-en">Agriculture</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">التنبؤ بموعد الحصاد، والكشف عن الآفات والأمراض.</span><span className="lang-en">Predicting harvest timing, detecting pests and diseases.</span></p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
              <span className="text-2xl block">🏭</span>
              <strong className="text-purple-300 block text-sm"><span className="lang-ar">التصنيع</span><span className="lang-en">Manufacturing</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">أتمتة فحص جودة المنتج، والصيانة التنبؤية.</span><span className="lang-en">Automation of product quality inspection, predictive maintenance.</span></p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
              <span className="text-2xl block">🚚</span>
              <strong className="text-amber-300 block text-sm"><span className="lang-ar">الخدمات اللوجستية</span><span className="lang-en">Logistics</span></strong>
              <p className="text-sub leading-relaxed"><span className="lang-ar">تحسين مسارات التوصيل.</span><span className="lang-en">Optimization of delivery routes.</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Excels At vs Requires Caution (ص 20 - 21) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-3xl theme-panel border border-emerald-500/30 space-y-3">
          <strong className="text-emerald-400 text-sm flex items-center gap-2 font-bold">
            <i className="fa-solid fa-circle-check"></i>
            <span className="lang-ar">ما يبرع فيه الذكاء الاصطناعي:</span>
            <span className="lang-en">What AI is good at:</span>
          </strong>
          <ul className="space-y-2 text-sub leading-relaxed">
            <li>• <span className="lang-ar">إيجاد وتصنيف الأنماط في البيانات المعقدة مثل الصور والنصوص.</span><span className="lang-en">Finding and classifying patterns in complex data such as images and text.</span></li>
            <li>• <span className="lang-ar">التعرف على الصور والصوت والنصوص وتوليدها.</span><span className="lang-en">Recognition and generation of images, audio, and text.</span></li>
            <li>• <span className="lang-ar">الاستنتاج الاحتمالي والتنبؤ بناءً على البيانات.</span><span className="lang-en">Probabilistic reasoning and prediction based on data.</span></li>
          </ul>
        </div>

        <div className="p-5 rounded-3xl theme-panel border border-rose-500/30 space-y-3">
          <strong className="text-rose-400 text-sm flex items-center gap-2 font-bold">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span className="lang-ar">ما يتطلب الحذر عند استخدام الذكاء الاصطناعي:</span>
            <span className="lang-en">What requires caution when using AI:</span>
          </strong>
          <ul className="space-y-1.5 text-sub leading-relaxed">
            <li>• <span className="lang-ar">الأحكام الأخلاقية (قد تؤدي إلى التمييز أو التحيز).</span><span className="lang-en">Ethical judgments (may lead to discrimination or prejudice).</span></li>
            <li>• <span className="lang-ar">الأحكام التي تتضمن معلومات شخصية أو خصوصية.</span><span className="lang-en">Judgments involving personal information or privacy.</span></li>
            <li>• <span className="lang-ar">اتخاذ القرار النهائي (من المسؤول عن النتيجة).</span><span className="lang-en">Final decision-making (who is responsible for the result).</span></li>
            <li>• <span className="lang-ar">دقة الأحكام عندما تكون بيانات التدريب متحيزة.</span><span className="lang-en">Accuracy of judgments when training data is biased.</span></li>
            <li>• <span className="lang-ar">توليد محتوى يختلف عن الحقائق (الهلوسة).</span><span className="lang-en">Generating content that differs from the facts (hallucination).</span></li>
            <li>• <span className="lang-ar">قضايا الحقوق عند استخدام الأعمال المحمية بحقوق الطبع والنشر كبيانات تدريب.</span><span className="lang-en">Issues of rights when using copyrighted works as training data.</span></li>
            <li>• <span className="lang-ar">فقدان الوضوح حول كيفية التوصل إلى الحكم (مشكلة الصندوق الأسود).</span><span className="lang-en">Loss of clarity about how a judgment was made (the black-box problem).</span></li>
          </ul>
        </div>
      </div>

      {/* Live Interactive Industry AI Applications Grid Simulator */}
      <AIApplicationsInteractiveGrid />

      {/* SECTION 3: Case Study: Doctor Confirmation (ص 21) */}
      <div className="p-5 rounded-3xl theme-panel border border-cyan-500/40 space-y-3 text-xs">
        <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm">
          <i className="fa-solid fa-user-doctor"></i>
          <span className="lang-ar">دراسة حالة مؤكدة (كتاب الوزارة ص 21): لماذا يظل الطبيب البشري لا غنى عنه؟</span>
          <span className="lang-en">Case Study (p. 21): Why Human Doctors Remain Irreplaceable</span>
        </div>
        <p className="text-sub leading-relaxed">
          <span className="lang-ar">حتى عندما تتجاوز دقة خوارزميات الذكاء الاصطناعي في فحص صور الأشعة السينية دقة الأطباء في رصد بعض الأورام، <strong>يظل الاعتماد على الذكاء الاصطناعي كـ "أداة مساعدة للقرار" (Decision-support tool) فقط</strong>. فالطبيب البشري هو الوحيد القادر على مطابقة الأشعة مع تاريخ المريض، وأعراضه السريرية، وحالته النفسية، وهو الجهة القانونية والأخلاقية الوحيدة المؤهلة لتحمل المسؤولية في حال حدوث أي خطأ تشخيصي.</span>
          <span className="lang-en">Even when AI matches or exceeds human precision in detecting pulmonary nodules on X-rays, it operates solely as a "decision-support tool". Human doctors integrate radiological findings with clinical history and bear the ultimate ethical and legal liability.</span>
        </p>
      </div>

      {/* TEXTBOOK ENRICHMENT FEATURES (كتاب الوزارة ص 18 - 23) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">ميزات وأنشطة كتاب الوزارة الرسمية للدرس 1-3</span>
              <span className="lang-en">Official Lesson 1-3 Textbook Enrichment Features</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: توقف وفكر • استقصِ كمهندس • فكر كمهندس • نمط الامتحان</span>
              <span className="lang-en">Activities: Pause & Think • Investigate • Exam Style</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 20 - ص 23</span>
        </div>

        {/* 1. Pause & Think (1) */}
        <div onClick={() => handleToggleCard('pause-think-1-3-1')} className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-3 cursor-pointer select-none group hover:border-brand-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-brain"></i>
              <span className="lang-ar">🧠 توقف وفكر (1) (كتاب الوزارة ص 21)</span>
              <span className="lang-en">🧠 Pause & Think (1) (Textbook p. 21)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-3-1'); }} className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-3-1'] ? 'إخفاء الإجابة' : 'عرض الإجابة والتحليل النموذجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-3-1'] ? 'Hide Answer' : 'Reveal Model Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"لو عُرض عليك الاعتماد على نظام ذكاء اصطناعي بنسبة 100% لإجراء عملية جراحية دقيقة لأحد أقاربك أو إصدار حكم قضائي بالسجن في محكمة دون أي تدخل بشري، فهل توافق؟ ولماذا؟"</span>
            <span className="lang-en">"Would you authorize an AI system to perform surgery or issue court sentences 100% autonomously without human oversight? Why?"</span>
          </p>
          {expandedCards['pause-think-1-3-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 الرد الهندسي والمنهجي المعتمد (م/ عمر محمود):</span>
                <span className="lang-en">💡 Certified Engineering Response:</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>أرفض ذلك تماماً وبشكل قاطع:</strong> لأن الذكاء الاصطناعي أداة احتمالية غير معصومة من الخطأ وتفتقر إلى الإدراك الأخلاقي والمسؤولية القانونية. في حال ارتكاب الآلة خطأً قاتلاً في غرفة العمليات أو سجن شخص بريء، لا يمكن معاقبة الخوارزمية أو محاسبتها! لذلك يجب أن تظل القرارات عالية الأثر تحت مبدأ <strong>"الإنسان في حلقة القرار" (Human-in-the-loop)</strong> حيث يقتصر دور الـ AI على المعاونة وتقديم التوصيات، بينما يتحمل الإنسان القرار النهائي.</span>
                <span className="lang-en"><strong>Strictly unacceptable:</strong> AI is probabilistic, lacks moral accountability, and cannot be held legally liable. High-impact decisions demand a "Human-in-the-loop" paradigm.</span>
              </p>
            </div>
          )}
        </div>

        {/* 2. Pause & Think (2) */}
        <div onClick={() => handleToggleCard('pause-think-1-3-2')} className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none group hover:border-purple-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-gears"></i>
              <span className="lang-ar">🧠 توقف وفكر (2) (كتاب الوزارة ص 22)</span>
              <span className="lang-en">🧠 Pause & Think (2) (Textbook p. 22)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-3-2'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-3-2'] ? 'إخفاء الإجابة' : 'عرض الشرح المنهجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-3-2'] ? 'Hide Answer' : 'Reveal Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-3-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"كيف تساهم تقنية الصيانة التنبؤية (Predictive Maintenance) في توفير ملايين الجنيهات للمصانع وشركات الطيران مقارنة بالصيانة الدورية التقليدية؟"</span>
            <span className="lang-en">"How does predictive maintenance save millions compared to conventional scheduled maintenance in manufacturing and aviation?"</span>
          </p>
          {expandedCards['pause-think-1-3-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-purple-300 block font-bold">
                <span className="lang-ar">💡 التحليل الاقتصادي والهندسي:</span>
                <span className="lang-en">💡 Economic & Engineering Analysis:</span>
              </strong>
              <p>
                <span className="lang-ar">الصيانة الدورية التقليدية إما أن تستبدل قطع غيار سليمة لم تنتهِ صلاحيتها بعد (إهدار للمال)، أو تنتظر حتى يتعطل الجهاز فجأة (مما يوقف خط الإنتاج بالكامل ويكبد المصنع خسائر بالملايين). أما <strong>الصيانة التنبؤية</strong> فتستخدم حساسات الاهتزاز والحرارة لتحليل تآكل التروس بدقة عبر خوارزميات الـ AI، وتحدد موعد الصيانة الدقيق قبل حدوث العطل بوقت وجيز أثناء فترات التوقف المجدولة، مما يمنع الحوادث ويوفر تكلفة قطع الغيار واستمرار الإنتاج.</span>
                <span className="lang-en">Conventional maintenance either replaces functional parts prematurely or incurs catastrophic unplanned downtime. Predictive maintenance analyzes sensor vibration telemetry to service machinery right before failure without interrupting operations.</span>
              </p>
            </div>
          )}
        </div>

        {/* 3. Investigate Like an Engineer */}
        <div onClick={() => handleToggleCard('investigate-1-3')} className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none group hover:border-emerald-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-seedling"></i>
              <span className="lang-ar">🔍 استقصِ كمهندس (كتاب الوزارة ص 20)</span>
              <span className="lang-en">🔍 Investigate Like an Engineer (p. 20)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('investigate-1-3'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['investigate-1-3'] ? 'إخفاء الإجابة' : 'عرض دراسة الحالة الزراعية في مصر'}</span>
              <span className="lang-en">{expandedCards['investigate-1-3'] ? 'Hide Answer' : 'Reveal Agri-AI Case Study'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['investigate-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"تصميم نظام ذكاء اصطناعي زراعي لمزارعي مصر لمكافحة سوسة النخيل الحمراء أو آفات القمح: ما هي المدخلات والحساسات المطلوبة، وما المخاطر التي يجب تجنبها عند نشر النظام؟"</span>
            <span className="lang-en">"Design an Agri-AI system combating palm weevils and crop pests: What sensors are required and what risks must be mitigated?"</span>
          </p>
          {expandedCards['investigate-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">التصميم الهندسي الميداني (م/ عمر محمود):</span>
                <span className="lang-en">Field Engineering Specifications:</span>
              </strong>
              <div className="space-y-1 text-sub">
                <p>1. <strong>المدخلات والحساسات:</strong> طائرات بدون طيار (Drones) مجهزة بكاميرات متعددة الأطياف (Multispectral) ترصد انعكاس الكلوروفيل في أوراق الشجر + حساسات صوتية تلتقط أصوات نخر يرقات سوسة النخيل داخل الجذوع.</p>
                <p>2. <strong>المعالجة:</strong> نموذج شبكة عصبية التفافية (CNN) يقارن الصور بقاعدة بيانات الآفات الزراعية لتحديد بؤرة الإصابة بدقة متر مربع واحد.</p>
                <p>3. <strong>المخاطر الواجب تجنبها:</strong> رش المبيدات الزائد عن الحد بسبب خطأ التصنيف الإيجابي الكاذب (False Positive)، أو تجاهل بؤرة حقيقية بسبب نقص جودة الكاميرات في ظروف الغبار والشمس الشديدة.</p>
              </div>
            </div>
          )}
        </div>

        {/* 4. Think Like an Engineer */}
        <div onClick={() => handleToggleCard('think-eng-1-3')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-sliders"></i>
              <span className="lang-ar">💡 فكر كمهندس (كتاب الوزارة ص 23)</span>
              <span className="lang-en">💡 Think Like an Engineer (p. 23)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-3'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-3'] ? 'إخفاء الإجابة' : 'عرض مصفوفة التوازن الهندسي'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-3'] ? 'Hide Answer' : 'Reveal Balance Matrix'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"في خوارزميات التوصية على وسائل التواصل الاجتماعي (كـ YouTube و TikTok): كيف تحقق توازناً هندسياً بين زيادة تفاعل المستخدم (Engagement) وبين منع حبسه داخل 'فقاعة تصفية' (Filter Bubble) أو الترويج لمحتوى مضلل وصادم؟"</span>
            <span className="lang-en">"In social recommender engines: How do you balance user engagement while preventing filter bubbles and sensationalized misinforming content?"</span>
          </p>
          {expandedCards['think-eng-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">استراتيجية الضبط الهندسي لخوارزميات التوصية:</span>
                <span className="lang-en">Recommender Governance Strategy:</span>
              </strong>
              <p>
                <span className="lang-ar">يتم ذلك عبر تقنية <strong>"حقن الاستكشاف والتنوع" (Exploration Injection)</strong>؛ بحيث لا تخصص الخوارزمية 100% من الاقتراحات للموضوعات السابقة نفسها للمستخدم، بل تخصص نسبة (مثلاً 20%) لموضوعات ووجهات نظر جديدة وموثوقة، مع تطبيق فلتر رقابي استباقي يُسقط النقاط التقييمية للمحتوى الصادم أو المضلل لمنعه من الانتشار الفيروسي حتى لو كان يجلب تفاعلاً سريعاً.</span>
                <span className="lang-en">Enforce Exploration Injection where 20% of recommendations introduce diversified, verified content outside the user's echo chamber, while penalizing sensationalist toxic content regardless of engagement metrics.</span>
              </p>
            </div>
          )}
        </div>

        {/* 5. Exam Style Question */}
        <div onClick={() => handleToggleCard('exam-style-1-3')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة</span>
              <span className="lang-en">📝 Exam-Style Question (6 Marks)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-3'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-3'] ? 'إخفاء الإجابة' : 'عرض نموذج الإجابة وتوزيع الدرجات'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-3'] ? 'Hide Answer' : 'Model Answer & Mark Scheme'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"وضح بمثالين واقعيين الفرق بين استخدام الذكاء الاصطناعي كـ 'أداة مساعدة' (Augmentative Tool) واستخدامه كـ 'بديل كامل' (Autonomous Replacement)، ولماذا يُحظر الاستبدال الكامل في قطاع الرعاية الصحية؟"</span>
            <span className="lang-en">"Explain with two examples the difference between AI as an Augmentative Tool vs Autonomous Replacement, and why full replacement is prohibited in healthcare."</span>
          </p>
          {expandedCards['exam-style-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span>
                <span className="lang-en">Model Answer for Full Marks (6/6):</span>
              </strong>
              <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>الذكاء الاصطناعي كأداة مساعدة [درجتان]:</strong> مثل نظام فحص الأشعة السينية الذي يضع دائرة حمراء حول ورم محتمل وينبه الطبيب، لكن الطبيب هو من يقرر ويكتب التقرير.</li>
                <li><strong>الذكاء الاصطناعي كبديل كامل [درجتان]:</strong> مثل روبوت التنظيف في المطار أو مرشح الرسائل المزعجة (Spam) الذي يتخذ القرار ويحذف الرسالة تلقائياً دون تدخل إنسان.</li>
                <li><strong>سبب حظر الاستبدال في الرعاية الصحية [درجتان]:</strong> لأن الأخطاء الطبية تمس حياة الإنسان، والآلة لا يمكن مساءلتها قانونياً أو أخلاقياً، بالإضافة إلى حاجة المريض للتعاطف الإنساني والتقييم السريري الشامل الذي تعجز عنه الحواسيب.</li>
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* 3D Flashcards 1-3 */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-sm flex items-center gap-2">
          <i className="fa-solid fa-clone text-emerald-400"></i>
          <span className="lang-ar">بطاقات المراجعة السريعة (المس لقلب البطاقة):</span>
          <span className="lang-en">Lesson 1-3 Flashcards (Tap to flip):</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            { id: "fc13-1", icon: "🎯", titleAr: "أنظمة التوصية", titleEn: "Recommenders", color: "brand", descAr: "نظام يحلل السلوك السابق للمستخدم لاقتراح محتوى أو سلع تلائم اهتماماته بدقة.", descEn: "Analyzes past user interaction history to propose relevant items." },
            { id: "fc13-2", icon: "🛠️", titleAr: "الصيانة التنبؤية", titleEn: "Predictive Maintenance", color: "emerald", descAr: "استخدام بيانات حساسات الاهتزاز والحرارة للتنبؤ بأعطال الآلات قبل وقوعها.", descEn: "Leveraging sensor telemetry to service machinery right before breakdown." },
            { id: "fc13-3", icon: "📦", titleAr: "الصندوق الأسود", titleEn: "Black-Box Problem", color: "rose", descAr: "عدم وضوح كيفية وصول نموذج الذكاء الاصطناعي إلى حكمه وقراره النهائي.", descEn: "Lack of interpretability regarding how an AI arrived at its internal output." },
            { id: "fc13-4", icon: "🩺", titleAr: "تشخيص الأشعة", titleEn: "Image Diagnosis", color: "purple", descAr: "أداة مساعدة للطبيب في فحص الأشعة السينية، والقرار النهائي للطبيب البشري.", descEn: "AI assists radiologists with screening; final diagnosis rests with human doctor." }
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

      {/* QUIZ 1-3 */}
      <div className="theme-panel border p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <i className="fa-solid fa-circle-question text-emerald-400"></i>
            <span className="lang-ar">اختبار تدريبي على الدرس 1-3 (5 أسئلة منهجية)</span>
            <span className="lang-en">Lesson 1-3 Practice Quiz (5 Questions)</span>
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
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
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
                    let btnStyle = "theme-panel border hover:border-emerald-500 text-slate-300";

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
