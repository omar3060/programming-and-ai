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

      {/* TEXTBOOK ACTIVITIES (كتاب الوزارة ص 21 - ص 24) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">أنشطة كتاب الوزارة الرسمية — الدرس 1-3</span>
              <span className="lang-en">Official Textbook Activities — Lesson 1-3</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: استقصِ بالأزواج • توقف وفكر • فكر كمهندس • نمط الامتحان</span>
              <span className="lang-en">Activities: Explore · In Pairs • Think It Through • Think as an Engineer • Exam Style</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 21 - ص 24</span>
        </div>

        {/* 1. Explore · In Pairs — p. 21 */}
        <div onClick={() => handleToggleCard('explore-pairs-1-3')} className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3 cursor-pointer select-none group hover:border-cyan-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-people-group"></i>
              <span className="lang-ar">✎ استقصِ بالأزواج — كتاب الوزارة ص 21</span>
              <span className="lang-en">✎ Explore · In Pairs — Textbook p. 21</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('explore-pairs-1-3'); }} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['explore-pairs-1-3'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['explore-pairs-1-3'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['explore-pairs-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">مع شريك، اذكر ثلاث خدمات استخدمتها هذا الأسبوع وتعتقد أن الذكاء الاصطناعي يُستخدم فيها (مثال: توصية فيديو، مساعد صوتي، أو ترجمة). لكل منها، توقّع ما هي البيانات التي يحتاجها الذكاء الاصطناعي للقيام بمهمته. ثم اقرّرا معاً: أيها ستكون أكثر أهمية لو أخطأ؟</span>
            <span className="lang-en">With a partner, list three services you used this week that you think used AI (for example, a video recommendation, a voice assistant, or a translation). For each, predict what data the AI needed to do its job. Then decide together: which one would matter most if it made a mistake?</span>
          </p>
          {expandedCards['explore-pairs-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-cyan-400 block font-bold">
                <span className="lang-ar">💡 إجابة نموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <div className="space-y-2">
                <p>
                  <span className="lang-ar"><strong>الخدمات الثلاث والبيانات المطلوبة:</strong><br/>① توصية فيديو (YouTube) — تحتاج: سجل المشاهدة، مدة المشاهدة، البحث السابق.<br/>② المساعد الصوتي (Siri/Google) — تحتاج: تسجيل الصوت، الموقع الجغرافي، التقويم.<br/>③ الترجمة التلقائية — تحتاج: النص المُدخَل، اللغة المصدر، بيانات الجمل المترجمة سابقاً.</span>
                  <span className="lang-en"><strong>Three services and data needed:</strong><br/>① Video recommendation (YouTube) — needs: watch history, watch duration, previous searches.<br/>② Voice assistant (Siri/Google) — needs: voice recording, location, calendar data.<br/>③ Automatic translation — needs: input text, source language, previously translated sentences.</span>
                </p>
                <p>
                  <span className="lang-ar"><strong>الأكثر أهمية عند الخطأ:</strong> المساعد الصوتي — لأن خطأه في فهم أمر مثل "اتصل بالإسعاف" قد يسبب ضرراً فورياً وحقيقياً.</span>
                  <span className="lang-en"><strong>Which would matter most if wrong:</strong> The voice assistant — because a misunderstood command like "call an ambulance" could cause immediate real-world harm.</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 2. Think It Through — Hospital AI — p. 22 */}
        <div onClick={() => handleToggleCard('think-tt-1-3-1')} className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-3 cursor-pointer select-none group hover:border-brand-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-lightbulb"></i>
              <span className="lang-ar">💡 توقف وفكر (1) — كتاب الوزارة ص 22</span>
              <span className="lang-en">💡 Think It Through (1) — Textbook p. 22</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-tt-1-3-1'); }} className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-tt-1-3-1'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['think-tt-1-3-1'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-tt-1-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">تفكر مستشفى في استخدام الذكاء الاصطناعي لتشخيص الصور للكشف عن الأمراض من صور الأشعة السينية. اشرح لماذا يجب أن يُؤكَّد التشخيص النهائي من قِبَل طبيب بشري بدلاً من تركه للذكاء الاصطناعي وحده.</span>
            <span className="lang-en">A hospital is considering using image-diagnosis AI to detect diseases from X-ray images. Explain why the final diagnosis should be confirmed by a human doctor rather than left to AI alone.</span>
          </p>
          {expandedCards['think-tt-1-3-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <p>
                <span className="lang-ar">يجب تأكيد التشخيص النهائي من طبيب بشري لأن:<br/>① <strong>الذكاء الاصطناعي غير معصوم من الخطأ:</strong> قد يخطئ في تصنيف مرض نادر لم يكن ممثلاً بما يكفي في بيانات التدريب.<br/>② <strong>المسؤولية القانونية والأخلاقية:</strong> لا يمكن مساءلة الخوارزمية قانونياً في حال الخطأ — الطبيب هو من يتحمل المسؤولية.<br/>③ <strong>التقييم السريري الشامل:</strong> الطبيب يأخذ في الاعتبار أعراض المريض وتاريخه المرضي والسياق الإنساني الذي لا يستطيع AI إدراكه.</span>
                <span className="lang-en">The final diagnosis must be confirmed by a human doctor because:<br/>① <strong>AI is not infallible:</strong> It may misclassify a rare disease underrepresented in training data.<br/>② <strong>Legal and ethical accountability:</strong> An algorithm cannot be held legally responsible — the human doctor bears full accountability.<br/>③ <strong>Holistic clinical assessment:</strong> The doctor considers symptoms, medical history, and human context that AI cannot fully grasp.</span>
              </p>
            </div>
          )}
        </div>

        {/* 3. Pause & Think — Privacy — p. 22 */}
        <div onClick={() => handleToggleCard('pause-think-1-3-priv')} className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none group hover:border-purple-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-brain"></i>
              <span className="lang-ar">🧠 توقف وفكر — الخصوصية — كتاب الوزارة ص 22</span>
              <span className="lang-en">🧠 Pause & Think — Privacy — Textbook p. 22</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-3-priv'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-3-priv'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-3-priv'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-3-priv'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">خدمات الذكاء الاصطناعي غالباً ما تستخدم بياناتك الشخصية — ما تشاهده وما تشتريه وما تقوله. لماذا يُثير هذا مخاوف تتعلق بالخصوصية؟ ومن ينبغي أن يقرر كيفية استخدام بياناتك؟</span>
            <span className="lang-en">AI services often use your personal data — what you watch, buy, or say. Why does this raise privacy concerns, and who should decide how your data is used?</span>
          </p>
          {expandedCards['pause-think-1-3-priv'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-purple-300 block font-bold">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>لماذا تثير مخاوف؟</strong> لأن جمع البيانات الشخصية دون علم المستخدم أو موافقته يعني أن الشركات تستطيع تتبع سلوكه وتحليله لأغراض تجارية، وقد تبيعها لأطراف ثالثة. كما أن تخزين البيانات يعرضها لخطر الاختراق والسرقة.<br/><strong>من ينبغي أن يقرر؟</strong> يجب أن يقرر <strong>المستخدم نفسه</strong> من خلال موافقة واضحة وصريحة (Informed Consent)، مع وجود قوانين حكومية تحمي حقوق الخصوصية وتُلزم الشركات بالشفافية.</span>
                <span className="lang-en"><strong>Why does it raise concerns?</strong> Collecting personal data without knowledge allows companies to track and analyse behaviour for commercial purposes, potentially selling it. Stored data is also vulnerable to breaches.<br/><strong>Who should decide?</strong> <strong>The user themselves</strong> through clear informed consent, supported by government regulations that protect privacy rights and require transparency.</span>
              </p>
            </div>
          )}
        </div>

        {/* 4. Think It Through — Agriculture — p. 24 */}
        <div onClick={() => handleToggleCard('think-tt-1-3-agri')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-lightbulb"></i>
              <span className="lang-ar">💡 توقف وفكر — الزراعة — كتاب الوزارة ص 24</span>
              <span className="lang-en">💡 Think It Through — Agriculture — Textbook p. 24</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-tt-1-3-agri'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-tt-1-3-agri'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['think-tt-1-3-agri'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-tt-1-3-agri'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">في الزراعة، اذكر ميزة واقعية واحدة لاستخدام الذكاء الاصطناعي وقلقاً واحداً يجب مراعاته قبل تطبيقه، مع شرح موجز لسبب كل منهما.</span>
            <span className="lang-en">In agriculture, give one realistic advantage of introducing AI and one concern that should be considered before introduction, and briefly explain the reason for each.</span>
          </p>
          {expandedCards['think-tt-1-3-agri'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-300 block font-bold">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <strong className="text-emerald-300 block"><span className="lang-ar">الميزة:</span><span className="lang-en">Advantage:</span></strong>
                  <span className="lang-ar text-sub">الكشف المبكر عن الآفات والأمراض من صور المحاصيل — يقلل استخدام المبيدات ويرفع الإنتاج. السبب: AI يكتشف أنماطاً دقيقة يصعب على الإنسان رؤيتها مبكراً.</span>
                  <span className="lang-en text-sub">Early detection of pests and diseases from crop images — reduces pesticide use and increases yield. Reason: AI detects subtle patterns hard for humans to spot early.</span>
                </div>
                <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20">
                  <strong className="text-rose-300 block"><span className="lang-ar">القلق:</span><span className="lang-en">Concern:</span></strong>
                  <span className="lang-ar text-sub">دقة الأحكام عند انحياز بيانات التدريب — إذا دُرّب النظام على محاصيل منطقة بعينها فقد يعطي نتائج خاطئة في مناطق أخرى. السبب: التحيز في البيانات يؤثر على دقة أحكام AI.</span>
                  <span className="lang-en text-sub">Accuracy when training data is biased — if trained only on one region's crops it may give wrong results elsewhere. Reason: bias in data affects AI judgment accuracy.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. Exam-Style Question — p. 23 [6 marks] */}
        <div onClick={() => handleToggleCard('exam-style-1-3')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال نمط الامتحان — كتاب الوزارة ص 23 (6 درجات)</span>
              <span className="lang-en">📝 Exam-Style Question — Textbook p. 23 [6 marks]</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-3'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-3'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-3'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">حلّل لماذا يكون الذكاء الاصطناعي مناسبًا لبعض المهام لكنه يستوجب الحذر في مهام أخرى. [6 درجات] في إجابتك: أشر إلى ما يبرع فيه AI (إيجاد الأنماط، التعرف، التنبؤ)، وما يستوجب الحذر (الأحكام الأخلاقية، الخصوصية، اتخاذ القرار النهائي).</span>
            <span className="lang-en">Analyze why AI is well suited to some tasks but requires caution in others. [6 marks] In your answer: refer to what AI is good at (finding patterns, recognition, prediction) and to what needs caution (ethical judgments, privacy, final decision-making).</span>
          </p>
          {expandedCards['exam-style-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-3 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">💡 الإجابة النموذجية الكاملة (توزيع الدرجات):</span>
                <span className="lang-en">💡 Full Model Answer (Mark Scheme):</span>
              </strong>
              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <strong className="text-emerald-300"><span className="lang-ar">ما يبرع فيه AI — [3 درجات]</span><span className="lang-en">What AI is good at — [3 marks]</span></strong>
                  <ul className="mt-1 space-y-0.5 text-sub list-disc rtl:pr-4 ltr:pl-4">
                    <li><span className="lang-ar">إيجاد الأنماط وتصنيفها في البيانات المعقدة كالصور والنصوص.</span><span className="lang-en">Finding and classifying patterns in complex data like images and text.</span></li>
                    <li><span className="lang-ar">التعرف على الصور والأصوات والنصوص وتوليدها.</span><span className="lang-en">Recognition and generation of images, audio, and text.</span></li>
                    <li><span className="lang-ar">الاستنتاج الاحتمالي والتنبؤ بناءً على البيانات.</span><span className="lang-en">Probabilistic reasoning and prediction based on data.</span></li>
                  </ul>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <strong className="text-rose-300"><span className="lang-ar">ما يستوجب الحذر — [3 درجات]</span><span className="lang-en">What needs caution — [3 marks]</span></strong>
                  <ul className="mt-1 space-y-0.5 text-sub list-disc rtl:pr-4 ltr:pl-4">
                    <li><span className="lang-ar">الأحكام الأخلاقية — قد تؤدي إلى تمييز أو تحيز.</span><span className="lang-en">Ethical judgments — may lead to discrimination or prejudice.</span></li>
                    <li><span className="lang-ar">القرارات التي تشمل المعلومات الشخصية والخصوصية.</span><span className="lang-en">Judgments involving personal data and privacy.</span></li>
                    <li><span className="lang-ar">اتخاذ القرار النهائي — يجب أن يظل الإنسان مسؤولاً عن النتيجة.</span><span className="lang-en">Final decision-making — humans must remain responsible for outcomes.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 6. Think as an Engineer — Investigate & Decide — p. 24 */}
        <div onClick={() => handleToggleCard('think-eng-1-3')} className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none group hover:border-emerald-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-gears"></i>
              <span className="lang-ar">⚙ فكر كمهندس — استقصِ وقرر (كتاب الوزارة ص 24)</span>
              <span className="lang-en">⚙ Think as an Engineer — Investigate & Decide (Textbook p. 24)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-3'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-3'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-3'] ? 'Hide Answer' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-3'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <div className="text-xs font-bold text-slate-200 space-y-1.5">
            <p>
              <span className="lang-ar">ناقشت للتو موضوع الزراعة في ملاحظة "توقف وفكر". الآن استقصِ صناعة مختلفة وقرر:</span>
              <span className="lang-en">You have just discussed agriculture in the Think It Through note. Now investigate a different industry and decide:</span>
            </p>
            <ol className="space-y-1 list-decimal rtl:pr-4 ltr:pl-4 text-sub font-medium">
              <li>
                <span className="lang-ar"><strong>استقصِ:</strong> اختر صناعة واحدة من الدرس غير الزراعة — الرعاية الصحية أو التصنيع أو اللوجستيات. ابحث عن مثال واحد موثّق حقيقي لاستخدام AI فيها وسجّل المصدر.</span>
                <span className="lang-en"><strong>Investigate.</strong> Choose one industry from the lesson other than agriculture — healthcare, manufacturing, or logistics. Find one real, documented example of AI being used in it, and record the source.</span>
              </li>
              <li>
                <span className="lang-ar"><strong>وازن:</strong> اذكر ميزة واحدة وقلقاً واحداً من استخدام AI في تلك الصناعة، مستخدماً أفكار ما يبرع فيه AI وما يستوجب الحذر.</span>
                <span className="lang-en"><strong>Weigh it up.</strong> Note one benefit and one caution of using AI in that industry, using the ideas of what AI is good at and what needs caution.</span>
              </li>
              <li>
                <span className="lang-ar"><strong>قرر:</strong> هل ينبغي لهذه الصناعة استخدام AI لهذه المهمة بمفرده أم مع إنسان يراجع النتيجة؟ اقترح نهجاً واحداً وأعطِ سببين.</span>
                <span className="lang-en"><strong>Decide.</strong> Should this industry use AI for this task on its own, or with a human checking the result? Recommend one approach and give two reasons.</span>
              </li>
            </ol>
          </div>
          {expandedCards['think-eng-1-3'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-3 animate-fadeIn cursor-auto select-text">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">💡 الإجابة النموذجية (اختيار: الرعاية الصحية):</span>
                <span className="lang-en">💡 Model Answer (choice: Healthcare):</span>
              </strong>
              <div className="space-y-2.5">
                <div>
                  <strong className="text-emerald-300"><span className="lang-ar">1. المثال الموثّق:</span><span className="lang-en">1. Documented example:</span></strong>
                  <p className="mt-1 text-sub">
                    <span className="lang-ar">نظام Google DeepMind "AlphaFold" الذي يتنبأ ببنية البروتين لدعم اكتشاف الأدوية. المصدر: مجلة Nature 2021.</span>
                    <span className="lang-en">Google DeepMind's "AlphaFold" protein structure prediction for drug discovery. Source: Nature journal 2021.</span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <strong className="text-emerald-300 block"><span className="lang-ar">الميزة:</span><span className="lang-en">Benefit:</span></strong>
                    <span className="lang-ar text-sub">سرعة تحليل الصور الطبية بدقة عالية — يساعد الأطباء في الكشف المبكر عن الأمراض.</span>
                    <span className="lang-en text-sub">Fast, accurate medical image analysis — helps doctors detect diseases early.</span>
                  </div>
                  <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20">
                    <strong className="text-rose-300 block"><span className="lang-ar">القلق:</span><span className="lang-en">Caution:</span></strong>
                    <span className="lang-ar text-sub">اتخاذ القرار النهائي — خطأ AI في تشخيص مريض قد تكون عواقبه خطيرة على حياته.</span>
                    <span className="lang-en text-sub">Final decision-making — AI misdiagnosis could have life-threatening consequences.</span>
                  </div>
                </div>
                <div>
                  <strong className="text-emerald-300"><span className="lang-ar">3. القرار:</span><span className="lang-en">3. Decision:</span></strong>
                  <p className="mt-1 text-sub">
                    <span className="lang-ar"><strong>مع إنسان يراجع النتيجة دائماً.</strong><br/><strong>السبب الأول:</strong> AI جيد في إيجاد الأنماط لكن قد يخطئ في الحالات النادرة — الطبيب يوفر التقييم السريري الشامل.<br/><strong>السبب الثاني:</strong> القرار الطبي يحمل مسؤولية قانونية وأخلاقية لا يمكن لـ AI تحملها.</span>
                    <span className="lang-en"><strong>With a human always checking the result.</strong><br/><strong>Reason 1:</strong> AI finds patterns well but may fail on rare cases — the doctor provides holistic clinical judgment.<br/><strong>Reason 2:</strong> Medical decisions carry legal and ethical accountability that AI cannot bear.</span>
                  </p>
                </div>
              </div>
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
