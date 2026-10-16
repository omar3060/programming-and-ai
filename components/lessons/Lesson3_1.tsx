'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit3ExamQuestions } from '@/data/unit3ExamQuestions';
import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';

export function Lesson3_1() {
  const { playSfx } = useApp();
  const quizQuestions = unit3ExamQuestions.filter(q => q.lesson.en === 'Lesson 3-1').slice(0, 10);

  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [activeLayer, setActiveLayer] = useState<'frontend' | 'backend' | 'db' | null>(null);
  const [journeyStep, setJourneyStep] = useState(0);

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
    playSfx(oIdx === correctAns ? 'success' : 'error');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const journeySteps = [
    {
      icon: '👤', labelAr: 'المستخدم', labelEn: 'User',
      descAr: 'يكتب المستخدم كلمة البحث في نموذج بالمتصفح ويضغط "ابحث".',
      descEn: 'The user types a search term in a browser form and clicks "Search".'
    },
    {
      icon: '🖥️', labelAr: 'الواجهة الأمامية', labelEn: 'Frontend',
      descAr: 'تجمع الواجهة الأمامية الإدخال وترسل طلب HTTP إلى الواجهة الخلفية.',
      descEn: 'The frontend collects the input and sends an HTTP request to the backend.'
    },
    {
      icon: '⚙️', labelAr: 'الواجهة الخلفية', labelEn: 'Backend',
      descAr: 'تتحقق الواجهة الخلفية من الطلب وتستعلم قاعدة البيانات عن نتائج البحث.',
      descEn: 'The backend validates the request and queries the database for search results.'
    },
    {
      icon: '🗄️', labelAr: 'قاعدة البيانات', labelEn: 'Database',
      descAr: 'تسترجع قاعدة البيانات السجلات المطابقة وتعيدها إلى الواجهة الخلفية.',
      descEn: 'The database retrieves matching records and returns them to the backend.'
    },
    {
      icon: '🖥️', labelAr: 'العرض النهائي', labelEn: 'Display',
      descAr: 'تعرض الواجهة الأمامية النتائج للمستخدم على الشاشة.',
      descEn: 'The frontend displays the results to the user on screen.'
    }
  ];

  const layerDetails = {
    frontend: {
      icon: '🖥️',
      titleAr: 'الواجهة الأمامية (Frontend)',
      titleEn: 'Frontend',
      colorClass: 'violet',
      descAr: 'الجزء الذي يراه المستخدم ويتفاعل معه في المتصفح. يجمع المدخلات ويعرض النتائج.',
      descEn: 'The part users see and interact with in the browser. Collects input and displays results.',
      examplesAr: ['نموذج البحث وحقل الإدخال', 'صفحة المنتجات وقائمة العناصر', 'أزرار الإجراء (أضف للسلة، ادفع الآن)'],
      examplesEn: ['Search form and input field', 'Products page and item list', 'Action buttons (Add to cart, Pay now)']
    },
    backend: {
      icon: '⚙️',
      titleAr: 'الواجهة الخلفية (Backend)',
      titleEn: 'Backend',
      colorClass: 'amber',
      descAr: 'الجزء الذي يعمل على الخادم ويطبق قواعد التطبيق. يتحقق ويعالج ويتخذ القرارات.',
      descEn: 'The server-side part that applies application rules. Validates, processes, and decides.',
      examplesAr: ['التحقق من بيانات تسجيل الدخول', 'حساب إجمالي الفاتورة والخصومات', 'تحديد نتائج البحث المناسبة'],
      examplesEn: ['Verifying login credentials', 'Calculating total bill and discounts', 'Determining relevant search results']
    },
    db: {
      icon: '🗄️',
      titleAr: 'قاعدة البيانات (Database)',
      titleEn: 'Database',
      colorClass: 'emerald',
      descAr: 'نظام منظم لتخزين البيانات وإدارتها واسترجاعها. تبقى البيانات هنا بشكل دائم.',
      descEn: 'An organized system for storing, managing, and retrieving data. Data persists here permanently.',
      examplesAr: ['سجلات المنتجات وأسعارها ومخزونها', 'بيانات العملاء وسجل الطلبات', 'معلومات المستخدمين وكلمات المرور المشفرة'],
      examplesEn: ['Product records, prices, and inventory', 'Customer data and order history', 'User accounts and hashed passwords']
    }
  };

  return (
    <div id="view-lesson-3-1" className="lesson-view space-y-8 animate-fadeIn">
      <InstructorBioCard />

      {/* ── Hero Banner ── */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-diagram-project"></i>
                <span className="lang-ar">الدرس 3-1 (كتاب الوزارة ص 50 - ص 55)</span>
                <span className="lang-en">Lesson 3-1 (Textbook pp. 50–55)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                <span className="lang-ar">بنية تطبيقات الويب</span>
                <span className="lang-en">Web App Architecture</span>
              </span>
              <DownloadEvaluationButton
                pdfUrl="/evaluations/unit3/lesson3_1_eval.pdf"
                fileName="حل_تقييمات_الدرس_3_1_بنية_تطبيقات_الويب.pdf"
                lessonTitle="الدرس 3-1"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">البنية العامة لتطبيقات الويب</span>
              <span className="lang-en">The Overall Structure of Web Applications</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">من ضغطة زر واحدة إلى نتيجة تظهر على الشاشة — كيف تتعاون الواجهة الأمامية والخلفية وقاعدة البيانات داخل تطبيق الويب؟</span>
              <span className="lang-en">From one click to a result on screen — how do the frontend, backend, and database cooperate inside a web application?</span>
            </p>
          </div>

          {/* Teacher Card Badge */}
          <div className="p-3.5 rounded-2xl theme-subpanel border border-amber-500/30 text-xs shrink-0 w-full md:w-64 shadow-md flex items-center gap-3">
            <div className="relative shrink-0">
              <img src="/my%20image.JPG" alt="المهندس عمر محمود" className="w-11 h-11 rounded-xl object-cover border border-amber-500/50 shadow-sm" />
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

        {/* Objectives & Guiding Question — side by side inside hero */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-violet-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bullseye"></i>
              <span className="lang-ar">أهداف التعلم الرسمية للدرس:</span>
              <span className="lang-en">Official Learning Objectives:</span>
            </strong>
            <ul className="space-y-1 text-sub">
              <li>• <span className="lang-ar">تتعرف على تطبيق الويب ومكوّناته الأساسية الثلاثة.</span><span className="lang-en">Identify a web application and its three main components.</span></li>
              <li>• <span className="lang-ar">تتبع رحلة طلب المستخدم عبر الطبقات الثلاث.</span><span className="lang-en">Trace a user request through the three tiers.</span></li>
              <li>• <span className="lang-ar">توزّع مسؤوليات التطبيق بين الطبقات بطريقة تسهّل الصيانة.</span><span className="lang-en">Assign responsibilities across tiers in a maintainable way.</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-question"></i>
              <span className="lang-ar">السؤال التوجيهي للدرس (كتاب الوزارة ص 50):</span>
              <span className="lang-en">Guiding Question (Textbook p. 50):</span>
            </strong>
            <p className="text-slate-200 font-medium leading-relaxed">
              <span className="lang-ar">"عندما تضغط «بحث»، كيف تتحول الضغطة إلى بيانات مفيدة تعود إلى الشاشة؟"</span>
              <span className="lang-en">"When you press 'Search', how does that click become useful data returning to the screen?"</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Key Fact Callout ── */}
      <div className="p-5 rounded-3xl bg-violet-500/10 border border-violet-500/30 flex items-start gap-4">
        <span className="w-10 h-10 rounded-2xl bg-violet-500/20 text-violet-400 grid place-items-center shrink-0 text-lg">
          <i className="fa-solid fa-star"></i>
        </span>
        <div>
          <p className="text-violet-400 text-xs font-black uppercase tracking-wider mb-1">
            <span className="lang-ar">⭐ الفكرة الأساسية — يجب أن تخرج بها</span>
            <span className="lang-en">⭐ Key Idea — Take This Away</span>
          </p>
          <p className="text-sm sm:text-base font-bold leading-relaxed">
            <span className="lang-ar">تطبيق الويب ليس صفحة فقط؛ إنه نظام متكامل يفصل العرض عن المعالجة عن تخزين البيانات. هذا الفصل يجعل التطوير والصيانة أسهل.</span>
            <span className="lang-en">A web application is not just a page — it is an integrated system that separates presentation from processing from data storage. This separation makes development and maintenance easier.</span>
          </p>
        </div>
      </div>

      {/* ── Key Concept: What is a Web App ── */}
      <div className="theme-panel border p-6 sm:p-7 rounded-3xl space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <span className="w-10 h-10 rounded-2xl bg-violet-500/15 text-violet-400 grid place-items-center shrink-0">
            <i className="fa-solid fa-book-open text-base"></i>
          </span>
          <div>
            <p className="text-[11px] text-violet-400 font-bold uppercase tracking-wider">
              <span className="lang-ar">من كتاب الوزارة • ص 50</span>
              <span className="lang-en">From the Textbook • p. 50</span>
            </p>
            <h3 className="text-lg font-black">
              <span className="lang-ar">ما تطبيق الويب؟</span>
              <span className="lang-en">What Is a Web Application?</span>
            </h3>
          </div>
        </div>

        <p className="text-sm text-sub leading-relaxed">
          <span className="lang-ar">
            تطبيق الويب هو تطبيق يصل إليه المستخدم من خلال متصفح الويب. يرسل المتصفح طلبًا إلى الخادم، ثم يستقبل النتيجة ويعرضها <strong className="text-slate-200">دون الحاجة إلى تثبيت برنامج مستقل</strong> على كل جهاز. مثال: موقع التسوق الإلكتروني، وتطبيق البريد الإلكتروني، ومنصة التعلم الإلكتروني.
          </span>
          <span className="lang-en">
            A web application is accessed through a web browser. The browser sends a request to a server, receives a response, and displays it <strong className="text-slate-200">without installing a separate program</strong> on every device. Examples: e-commerce site, email client, e-learning platform.
          </span>
        </p>

        {/* Three-tier overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {[
            { key: 'frontend' as const, icon: '🖥️', color: 'violet', titleAr: 'الواجهة الأمامية', titleEn: 'Frontend', roleAr: 'يراها المستخدم ويتفاعل معها', roleEn: 'User sees & interacts with it' },
            { key: 'backend' as const, icon: '⚙️', color: 'amber', titleAr: 'الواجهة الخلفية', titleEn: 'Backend', roleAr: 'تعالج الطلبات وتتخذ القرارات', roleEn: 'Processes requests & makes decisions' },
            { key: 'db' as const, icon: '🗄️', color: 'emerald', titleAr: 'قاعدة البيانات', titleEn: 'Database', roleAr: 'تخزن البيانات وتسترجعها', roleEn: 'Stores & retrieves data' }
          ].map(layer => (
            <button
              key={layer.key}
              onClick={() => { playSfx('click'); setActiveLayer(activeLayer === layer.key ? null : layer.key); }}
              className={`p-4 rounded-2xl border text-left space-y-2 transition group ${
                activeLayer === layer.key
                  ? `border-${layer.color}-500 bg-${layer.color}-500/10`
                  : `theme-subpanel border-slate-700 hover:border-${layer.color}-500/50`
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{layer.icon}</span>
                <i className={`fa-solid fa-chevron-down text-xs text-${layer.color}-400 transition-transform ${activeLayer === layer.key ? 'rotate-180' : ''}`}></i>
              </div>
              <strong className={`block text-sm text-${layer.color}-400`}>
                <span className="lang-ar">{layer.titleAr}</span>
                <span className="lang-en">{layer.titleEn}</span>
              </strong>
              <p className="text-xs text-sub">
                <span className="lang-ar">{layer.roleAr}</span>
                <span className="lang-en">{layer.roleEn}</span>
              </p>
            </button>
          ))}
        </div>

        {/* Expanded layer detail */}
        {activeLayer && (
          <div className={`p-4 rounded-2xl border border-${layerDetails[activeLayer].colorClass}-500/40 bg-${layerDetails[activeLayer].colorClass}-500/10 animate-fadeIn space-y-3`}>
            <p className="text-sm leading-relaxed">
              <span className="lang-ar">{layerDetails[activeLayer].descAr}</span>
              <span className="lang-en">{layerDetails[activeLayer].descEn}</span>
            </p>
            <div>
              <p className="text-xs font-bold text-slate-300 mb-2">
                <span className="lang-ar">أمثلة:</span>
                <span className="lang-en">Examples:</span>
              </p>
              <ul className="space-y-1">
                {layerDetails[activeLayer].examplesAr.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-sub">
                    <i className={`fa-solid fa-circle-dot text-${layerDetails[activeLayer].colorClass}-400 text-[10px] mt-0.5 shrink-0`}></i>
                    <span>
                      <span className="lang-ar">{ex}</span>
                      <span className="lang-en">{layerDetails[activeLayer].examplesEn[i]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* ── Interactive: Request Journey Simulator ── */}
      <div className="theme-panel border border-violet-500/30 p-6 sm:p-7 rounded-3xl space-y-5 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] text-violet-400 font-bold uppercase tracking-wider mb-1">
              <span className="lang-ar">🔬 محاكاة تفاعلية</span>
              <span className="lang-en">🔬 Interactive Simulator</span>
            </p>
            <h3 className="text-lg font-black">
              <span className="lang-ar">رحلة طلب البحث خطوة بخطوة</span>
              <span className="lang-en">Step-by-Step Request Journey</span>
            </h3>
            <p className="text-xs text-sub mt-1">
              <span className="lang-ar">اضغط "التالي" لمتابعة رحلة طلب المستخدم عبر طبقات التطبيق</span>
              <span className="lang-en">Press "Next" to follow the user request across application layers</span>
            </p>
          </div>
          <span className="w-10 h-10 rounded-2xl bg-violet-500/15 text-violet-400 grid place-items-center shrink-0">
            <i className="fa-solid fa-route"></i>
          </span>
        </div>

        {/* Step indicators */}
        <div className="grid grid-cols-5 gap-2">
          {journeySteps.map((step, i) => (
            <button
              key={i}
              onClick={() => { playSfx('click'); setJourneyStep(i); }}
              className={`p-3 rounded-2xl border text-center space-y-1.5 transition ${
                journeyStep === i
                  ? 'border-violet-500 bg-violet-500/15 text-violet-300'
                  : i < journeyStep
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                  : 'theme-subpanel border-slate-700 text-sub'
              }`}
            >
              <span className="block text-xl">{step.icon}</span>
              <span className="text-[10px] font-bold block">
                <span className="lang-ar">{step.labelAr}</span>
                <span className="lang-en">{step.labelEn}</span>
              </span>
              {i < journeyStep && <i className="fa-solid fa-check text-emerald-400 text-[10px] block"></i>}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${(journeyStep / 4) * 100}%` }}
          />
        </div>

        {/* Step description */}
        <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-start gap-3 animate-fadeIn">
          <span className="text-2xl">{journeySteps[journeyStep].icon}</span>
          <div>
            <strong className="block text-violet-400 text-sm mb-1">
              <span className="lang-ar">{journeyStep + 1}. {journeySteps[journeyStep].labelAr}</span>
              <span className="lang-en">Step {journeyStep + 1}: {journeySteps[journeyStep].labelEn}</span>
            </strong>
            <p className="text-sm text-sub leading-relaxed">
              <span className="lang-ar">{journeySteps[journeyStep].descAr}</span>
              <span className="lang-en">{journeySteps[journeyStep].descEn}</span>
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => { playSfx('click'); setJourneyStep(s => Math.max(0, s - 1)); }}
            disabled={journeyStep === 0}
            className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-700 text-sub hover:border-slate-500 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-backward-step me-2"></i>
            <span className="lang-ar">السابق</span>
            <span className="lang-en">Previous</span>
          </button>
          <button
            onClick={() => {
              if (journeyStep < 4) { playSfx('click'); setJourneyStep(s => s + 1); }
              else { playSfx('success'); setJourneyStep(0); }
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white transition"
          >
            {journeyStep < 4 ? (
              <><i className="fa-solid fa-forward-step me-2"></i><span className="lang-ar">التالي</span><span className="lang-en">Next</span></>
            ) : (
              <><i className="fa-solid fa-rotate-left me-2"></i><span className="lang-ar">أعد الرحلة</span><span className="lang-en">Restart</span></>
            )}
          </button>
        </div>
      </div>

      {/* ── Three-tier Comparison Table ── */}
      <div className="theme-panel border p-6 sm:p-7 rounded-3xl space-y-4">
        <h3 className="text-base font-black flex items-center gap-2">
          <i className="fa-solid fa-table-list text-amber-400"></i>
          <span className="lang-ar">جدول مقارنة الطبقات الثلاث (كتاب الوزارة ص 52)</span>
          <span className="lang-en">Three-Tier Comparison Table (Textbook p. 52)</span>
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-xs min-w-[520px] border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-blue-400 font-bold">
                <th className="p-3 text-right"><span className="lang-ar">الطبقة</span><span className="lang-en">Tier</span></th>
                <th className="p-3 text-right"><span className="lang-ar">المهمة الرئيسية</span><span className="lang-en">Main Responsibility</span></th>
                <th className="p-3 text-right"><span className="lang-ar">أمثلة تطبيقية</span><span className="lang-en">Application Examples</span></th>
                <th className="p-3 text-right"><span className="lang-ar">تقنيات شائعة</span><span className="lang-en">Common Technologies</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
              <tr className="hover:bg-violet-500/5 transition">
                <td className="p-3 font-bold text-violet-400">
                  <span className="flex items-center gap-1.5"><span>🖥️</span><span className="lang-ar">الواجهة الأمامية</span><span className="lang-en">Frontend</span></span>
                </td>
                <td className="p-3 text-sub"><span className="lang-ar">عرض المحتوى وجمع إدخال المستخدم</span><span className="lang-en">Display content & collect user input</span></td>
                <td className="p-3 text-sub"><span className="lang-ar">نماذج البحث، الأزرار، صفحات العرض</span><span className="lang-en">Search forms, buttons, display pages</span></td>
                <td className="p-3 text-sub font-mono">HTML · CSS · JavaScript</td>
              </tr>
              <tr className="hover:bg-amber-500/5 transition">
                <td className="p-3 font-bold text-amber-400">
                  <span className="flex items-center gap-1.5"><span>⚙️</span><span className="lang-ar">الواجهة الخلفية</span><span className="lang-en">Backend</span></span>
                </td>
                <td className="p-3 text-sub"><span className="lang-ar">التحقق، المعالجة، اتخاذ القرارات</span><span className="lang-en">Validation, processing, decisions</span></td>
                <td className="p-3 text-sub"><span className="lang-ar">التحقق من الهوية، حساب الفواتير</span><span className="lang-en">Authentication, billing calculation</span></td>
                <td className="p-3 text-sub font-mono">Python · Node.js · Java</td>
              </tr>
              <tr className="hover:bg-emerald-500/5 transition">
                <td className="p-3 font-bold text-emerald-400">
                  <span className="flex items-center gap-1.5"><span>🗄️</span><span className="lang-ar">قاعدة البيانات</span><span className="lang-en">Database</span></span>
                </td>
                <td className="p-3 text-sub"><span className="lang-ar">تخزين البيانات واسترجاعها</span><span className="lang-en">Store & retrieve data</span></td>
                <td className="p-3 text-sub"><span className="lang-ar">سجلات العملاء، الطلبات، المنتجات</span><span className="lang-en">Customer records, orders, products</span></td>
                <td className="p-3 text-sub font-mono">SQL · MongoDB · Firebase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Textbook Activities ── */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">أنشطة كتاب الوزارة الرسمية — الدرس 3-1</span>
              <span className="lang-en">Official Textbook Activities — Lesson 3-1</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: استكشف بالأزواج • توقف وفكر • نمط الامتحان • فكر كمهندس</span>
              <span className="lang-en">Activities: Explore · In Pairs • Pause & Think • Exam Style • Think as an Engineer</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 51 – ص 55</span>
        </div>

        {/* Activity 1: Explore In Pairs */}
        <div
          onClick={() => handleToggleCard('explore-3-1')}
          className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3 cursor-pointer select-none hover:border-cyan-500/60 transition"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-people-group"></i>
              <span className="lang-ar">✎ استكشف بالأزواج — كتاب الوزارة ص 51</span>
              <span className="lang-en">✎ Explore · In Pairs — Textbook p. 51</span>
            </span>
            <button onClick={e => { e.stopPropagation(); handleToggleCard('explore-3-1'); }} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['explore-3-1'] ? 'إخفاء' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['explore-3-1'] ? 'Hide' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['explore-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">عندما تستخدم تطبيق تسوق إلكتروني وتضغط «اشتر الآن»، ما الذي يحدث في رأيك وراء الكواليس في كل طبقة من الطبقات الثلاث؟</span>
            <span className="lang-en">When you use an e-commerce app and press "Buy Now", what do you think happens behind the scenes in each of the three tiers?</span>
          </p>
          {expandedCards['explore-3-1'] && (
            <div onClick={e => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto">
              <strong className="text-cyan-400 block">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <ul className="space-y-1.5">
                <li className="flex gap-2"><span className="text-violet-400 font-bold shrink-0">🖥️ Frontend:</span><span className="lang-ar">تعرض الواجهة الأمامية زر "اشتر الآن" وترسل طلب الشراء عند الضغط عليه.</span><span className="lang-en">The frontend displays the "Buy Now" button and sends a purchase request when clicked.</span></li>
                <li className="flex gap-2"><span className="text-amber-400 font-bold shrink-0">⚙️ Backend:</span><span className="lang-ar">تتحقق الواجهة الخلفية من توفر المنتج وتحسب الإجمالي وتتحقق من بيانات الدفع.</span><span className="lang-en">The backend checks product availability, calculates the total, and verifies payment details.</span></li>
                <li className="flex gap-2"><span className="text-emerald-400 font-bold shrink-0">🗄️ Database:</span><span className="lang-ar">تحفظ قاعدة البيانات سجل الطلب الجديد وتحدث المخزون.</span><span className="lang-en">The database saves the new order record and updates inventory.</span></li>
              </ul>
            </div>
          )}
        </div>

        {/* Activity 2: Pause & Think */}
        <div
          onClick={() => handleToggleCard('think-3-1')}
          className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none hover:border-purple-500/60 transition"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-lightbulb"></i>
              <span className="lang-ar">💡 توقف وفكر — كتاب الوزارة ص 52</span>
              <span className="lang-en">💡 Pause & Think — Textbook p. 52</span>
            </span>
            <button onClick={e => { e.stopPropagation(); handleToggleCard('think-3-1'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-3-1'] ? 'إخفاء' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['think-3-1'] ? 'Hide' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">لماذا يُعدّ فصل مسؤوليات الطبقات الثلاث مفيدًا عند تطوير التطبيق وصيانته؟ أعطِ مثالًا عمليًا.</span>
            <span className="lang-en">Why is separating the three tiers useful when developing and maintaining an application? Give a practical example.</span>
          </p>
          {expandedCards['think-3-1'] && (
            <div onClick={e => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto">
              <strong className="text-purple-400 block">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <p>
                <span className="lang-ar">الفصل يجعل لكل جزء مسؤولية واضحة، فإذا تغيّر تصميم الشاشة (Frontend) لا نضطر إلى إعادة كتابة منطق المعالجة (Backend) أو تعديل قاعدة البيانات.</span>
                <span className="lang-en">Separation gives each part a clear responsibility. If the screen design (Frontend) changes, we don't need to rewrite the processing logic (Backend) or modify the database.</span>
              </p>
              <p className="text-sub">
                <span className="lang-ar">مثال: لو قرر متجر إلكتروني تغيير شكل صفحة المنتجات كاملًا، يعدّل المطور الواجهة الأمامية فقط، وتبقى قواعد التسعير وقاعدة البيانات كما هي.</span>
                <span className="lang-en">Example: If an online store decides to completely redesign its product page, the developer only modifies the frontend — pricing rules and the database remain unchanged.</span>
              </p>
            </div>
          )}
        </div>

        {/* Activity 3: Exam-Style */}
        <div
          onClick={() => handleToggleCard('exam-3-1')}
          className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none hover:border-amber-500/60 transition"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان — ص 54 [6 درجات]</span>
              <span className="lang-en">📝 Exam-Style Question — p. 54 [6 marks]</span>
            </span>
            <button onClick={e => { e.stopPropagation(); handleToggleCard('exam-3-1'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-3-1'] ? 'إخفاء' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['exam-3-1'] ? 'Hide' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">صمّم توزيعًا للمسؤوليات في تطبيق حجز عيادة طبية: (أ) أين يظهر نموذج الحجز؟ (ب) أين يتم التحقق من توافر الموعد؟ (جـ) أين يُحفظ سجل الزيارة؟ اشرح اختيارك لكل طبقة.</span>
            <span className="lang-en">Design a responsibility allocation for a medical clinic booking app: (a) Where does the booking form appear? (b) Where is appointment availability checked? (c) Where is the visit record saved? Explain your choice for each tier.</span>
          </p>
          {expandedCards['exam-3-1'] && (
            <div onClick={e => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 text-xs leading-relaxed text-slate-300 space-y-3 animate-fadeIn cursor-auto">
              <strong className="text-amber-400 block">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <div className="space-y-2">
                {[
                  { q: 'أ', qEn: 'a', layer: 'Frontend 🖥️', layerColorClass: 'violet', ar: 'نموذج الحجز في الواجهة الأمامية — لأنه يظهر للمستخدم ويجمع بياناته (الاسم، التاريخ، الطبيب).', en: 'The booking form belongs to the frontend — it appears to the user and collects their data (name, date, doctor).' },
                  { q: 'ب', qEn: 'b', layer: 'Backend ⚙️', layerColorClass: 'amber', ar: 'التحقق من توافر الموعد في الواجهة الخلفية — تطبّق قواعد العمل مثل "لا يمكن حجز موعدين في نفس الوقت".', en: 'Availability checking belongs to the backend — it applies business rules like "no double-booking at the same time".' },
                  { q: 'جـ', qEn: 'c', layer: 'Database 🗄️', layerColorClass: 'emerald', ar: 'سجل الزيارة يُحفظ في قاعدة البيانات — لأنها مسؤولة عن التخزين الدائم والاسترجاع المنظم لاحقًا.', en: 'The visit record is saved in the database — it is responsible for permanent storage and organized future retrieval.' }
                ].map(item => (
                  <div key={item.q} className={`p-3 rounded-lg bg-${item.layerColorClass}-500/10 border border-${item.layerColorClass}-500/30`}>
                    <strong className={`text-${item.layerColorClass}-400`}>{item.q}) {item.layer}: </strong>
                    <span className="lang-ar">{item.ar}</span>
                    <span className="lang-en">{item.en}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Activity 4: Think as Engineer */}
        <div
          onClick={() => handleToggleCard('engineer-3-1')}
          className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none hover:border-emerald-500/60 transition"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-gears"></i>
              <span className="lang-ar">⚙ فكر كمهندس — كتاب الوزارة ص 55</span>
              <span className="lang-en">⚙ Think as an Engineer — Textbook p. 55</span>
            </span>
            <button onClick={e => { e.stopPropagation(); handleToggleCard('engineer-3-1'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['engineer-3-1'] ? 'إخفاء' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['engineer-3-1'] ? 'Hide' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['engineer-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <div className="text-xs font-bold text-slate-200 space-y-1.5">
            <p><span className="lang-ar">ظهرت صفحة متجر إلكتروني بشكل صحيح، لكن قائمة المنتجات لم تظهر. استخدم تفكير المهندس:</span><span className="lang-en">An online store page appeared correctly, but the product list did not show. Use engineering thinking:</span></p>
            <ul className="list-decimal rtl:pr-4 ltr:pl-4 space-y-0.5 text-sub font-normal">
              <li><span className="lang-ar">استقصِ: أي طبقة تعمل وأيها توقفت؟</span><span className="lang-en">Investigate: which tier is working and which stopped?</span></li>
              <li><span className="lang-ar">زِن: ما الاحتمالات المختلفة للمشكلة؟</span><span className="lang-en">Weigh: what are the different possible causes?</span></li>
              <li><span className="lang-ar">قرّر: ما الخطوة الأولى للتشخيص؟</span><span className="lang-en">Decide: what is the first diagnostic step?</span></li>
            </ul>
          </div>
          {expandedCards['engineer-3-1'] && (
            <div onClick={e => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs leading-relaxed text-slate-300 space-y-3 animate-fadeIn cursor-auto">
              <strong className="text-emerald-400 block">
                <span className="lang-ar">💡 الإجابة النموذجية:</span>
                <span className="lang-en">💡 Model Answer:</span>
              </strong>
              <div className="space-y-2">
                <div className="flex gap-2"><span className="text-blue-400 font-bold">①</span><div><strong className="text-slate-200 block"><span className="lang-ar">استقصِ:</span><span className="lang-en">Investigate:</span></strong><span className="lang-ar text-sub">الواجهة الأمامية تعمل (الصفحة ظهرت). المشكلة في الواجهة الخلفية أو قاعدة البيانات (المنتجات لم تُحمَّل).</span><span className="lang-en text-sub">The frontend works (page appeared). The issue is in the backend or database (products didn't load).</span></div></div>
                <div className="flex gap-2"><span className="text-amber-400 font-bold">②</span><div><strong className="text-slate-200 block"><span className="lang-ar">زِن:</span><span className="lang-en">Weigh:</span></strong><span className="lang-ar text-sub">إما أن الواجهة الخلفية واجهت خطأً في الكود، أو أن الاتصال بقاعدة البيانات انقطع، أو البيانات غير متاحة.</span><span className="lang-en text-sub">Either the backend has a code error, the database connection is broken, or the data is unavailable.</span></div></div>
                <div className="flex gap-2"><span className="text-emerald-400 font-bold">③</span><div><strong className="text-slate-200 block"><span className="lang-ar">قرّر:</span><span className="lang-en">Decide:</span></strong><span className="lang-ar text-sub">فحص سجلات الأخطاء في الواجهة الخلفية أولًا، ثم اختبار الاتصال بقاعدة البيانات.</span><span className="lang-en text-sub">Check backend error logs first, then test the database connection.</span></div></div>
              </div>
            </div>
          )}
        </div>

        {/* Activity 5: Apply What You Learned */}
        <div
          onClick={() => handleToggleCard('apply-3-1')}
          className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none hover:border-rose-500/60 transition"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-flask"></i>
              <span className="lang-ar">🌍 طبّق ما تعلمته — كتاب الوزارة ص 55</span>
              <span className="lang-en">🌍 Apply What You Learned — Textbook p. 55</span>
            </span>
            <button onClick={e => { e.stopPropagation(); handleToggleCard('apply-3-1'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['apply-3-1'] ? 'إخفاء' : 'عرض الإجابة النموذجية'}</span>
              <span className="lang-en">{expandedCards['apply-3-1'] ? 'Hide' : 'Show Model Answer'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['apply-3-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">اختر تطبيقًا تستخدمه يوميًا (مثل منصة تعليمية أو تطبيق دفع إلكتروني). حدّد مثالًا واحدًا لكل طبقة من الطبقات الثلاث في هذا التطبيق.</span>
            <span className="lang-en">Choose an app you use daily (e.g., an e-learning platform or payment app). Identify one example for each of the three tiers in that app.</span>
          </p>
          {expandedCards['apply-3-1'] && (
            <div onClick={e => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/30 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto">
              <strong className="text-rose-400 block">
                <span className="lang-ar">💡 مثال نموذجي (منصة تعليمية):</span>
                <span className="lang-en">💡 Sample Answer (e-learning platform):</span>
              </strong>
              <ul className="space-y-1.5">
                <li><span className="text-violet-400 font-bold">Frontend: </span><span className="lang-ar">صفحة الدرس التي يشاهدها الطالب ونموذج الإجابة على الأسئلة.</span><span className="lang-en">The lesson page the student sees and the answer submission form.</span></li>
                <li><span className="text-amber-400 font-bold">Backend: </span><span className="lang-ar">منطق تصحيح الإجابات وحساب درجة الطالب وتسجيل التقدم.</span><span className="lang-en">The answer grading logic, score calculation, and progress tracking.</span></li>
                <li><span className="text-emerald-400 font-bold">Database: </span><span className="lang-ar">قاعدة بيانات تحفظ درجات الطالب وسجل إتمام الدروس.</span><span className="lang-en">A database storing the student's scores and lesson completion history.</span></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ── Flashcards ── */}
      <div className="theme-panel border p-6 sm:p-7 rounded-3xl space-y-4">
        <h3 className="text-base font-black flex items-center gap-2">
          <i className="fa-solid fa-clone text-emerald-400"></i>
          <span className="lang-ar">بطاقات المراجعة السريعة (اضغط للقلب)</span>
          <span className="lang-en">Quick Review Flashcards (Tap to flip)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            { id: 'fc-3-1-1', icon: '🖥️', color: 'violet', titleAr: 'الواجهة الأمامية', titleEn: 'Frontend', descAr: 'الجزء الذي يراه المستخدم ويتفاعل معه في المتصفح. تعرض المحتوى وتجمع المدخلات.', descEn: 'The part users see and interact with in the browser. Displays content and collects input.' },
            { id: 'fc-3-1-2', icon: '⚙️', color: 'amber', titleAr: 'الواجهة الخلفية', titleEn: 'Backend', descAr: 'تعمل على الخادم. تتحقق من الطلبات، تطبق قواعد التطبيق، وتتخذ القرارات.', descEn: 'Runs on the server. Validates requests, applies application rules, and makes decisions.' },
            { id: 'fc-3-1-3', icon: '🗄️', color: 'emerald', titleAr: 'قاعدة البيانات', titleEn: 'Database', descAr: 'نظام منظم لتخزين البيانات وإدارتها وإعادة استرجاعها عند الحاجة.', descEn: 'Organized system for storing, managing, and retrieving data when needed.' },
            { id: 'fc-3-1-4', icon: '🔁', color: 'cyan', titleAr: 'رحلة الطلب', titleEn: 'Request Journey', descAr: 'المستخدم يضغط → Frontend يرسل طلبًا → Backend يعالجه → Database تُعيد البيانات → Frontend يعرض النتائج.', descEn: 'User clicks → Frontend sends request → Backend processes → Database returns data → Frontend displays results.' }
          ].map(fc => (
            <div
              key={fc.id}
              className={`flip-card ${flippedCards[fc.id] ? 'flipped' : ''}`}
              onClick={() => handleFlip(fc.id)}
            >
              <div className="flip-card-inner">
                <div className={`flip-card-front rounded-2xl p-4 bg-${fc.color}-500/10 border border-${fc.color}-500/30 flex flex-col items-center justify-center text-center gap-2 cursor-pointer min-h-[120px]`}>
                  <span className="text-3xl">{fc.icon}</span>
                  <strong className="text-slate-200">
                    <span className="lang-ar">{fc.titleAr}</span>
                    <span className="lang-en">{fc.titleEn}</span>
                  </strong>
                  <span className="text-[10px] text-sub">
                    <span className="lang-ar">اضغط للقلب ↻</span>
                    <span className="lang-en">Tap to flip ↻</span>
                  </span>
                </div>
                <div className={`flip-card-back rounded-2xl p-4 bg-${fc.color}-500/15 border border-${fc.color}-500/40 flex items-center justify-center text-center cursor-pointer min-h-[120px]`}>
                  <p className="text-sub text-xs leading-relaxed">
                    <span className="lang-ar">{fc.descAr}</span>
                    <span className="lang-en">{fc.descEn}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MCQ Quiz ── */}
      <div className="theme-panel border p-6 sm:p-7 rounded-3xl space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black flex items-center gap-2">
            <i className="fa-solid fa-clipboard-check text-violet-400"></i>
            <span className="lang-ar">اختبر فهمك — 10 أسئلة</span>
            <span className="lang-en">Check Your Understanding — 10 Questions</span>
          </h3>
          <span className="text-xs text-sub">{Object.keys(quizAnswers).length}/10</span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all" style={{ width: `${Object.keys(quizAnswers).length * 10}%` }} />
        </div>
        <div className="space-y-4">
          {quizQuestions.map((q, qIdx) => (
            <div key={qIdx} className={`p-4 rounded-2xl theme-subpanel border space-y-3 transition ${quizAnswers[qIdx] !== undefined ? (quizAnswers[qIdx] === q.a ? 'border-emerald-500/30' : 'border-rose-500/30') : 'border-slate-700'}`}>
              <p className="text-sm font-bold text-slate-200">
                <span className="text-violet-400 font-mono">{qIdx + 1}. </span>
                <span className="lang-ar">{q.q.ar}</span>
                <span className="lang-en">{q.q.en}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.opts.ar.map((opt, oIdx) => {
                  const answered = quizAnswers[qIdx] !== undefined;
                  const isSelected = quizAnswers[qIdx] === oIdx;
                  const isCorrect = oIdx === q.a;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleQuizAnswer(qIdx, oIdx, q.a)}
                      disabled={answered}
                      className={`p-3 rounded-xl text-xs text-left rtl:text-right transition border ${
                        answered
                          ? isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : isSelected ? 'bg-rose-500/20 border-rose-500 text-rose-300 line-through'
                          : 'border-slate-800 opacity-50'
                          : 'border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/5 cursor-pointer'
                      }`}
                    >
                      <span className="lang-ar">{opt}</span>
                      <span className="lang-en">{q.opts.en[oIdx]}</span>
                    </button>
                  );
                })}
              </div>
              {quizAnswers[qIdx] !== undefined && (
                <p className={`text-xs flex items-center gap-1.5 ${quizAnswers[qIdx] === q.a ? 'text-emerald-400' : 'text-rose-400'}`}>
                  <i className={`fa-solid ${quizAnswers[qIdx] === q.a ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
                  <span className="lang-ar">{q.exp.ar}</span>
                  <span className="lang-en">{q.exp.en}</span>
                </p>
              )}
            </div>
          ))}
        </div>
        {Object.keys(quizAnswers).length === 10 && (
          <div className="p-5 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-center animate-fadeIn">
            <p className="text-2xl font-black text-violet-300">
              {quizQuestions.filter((q, i) => quizAnswers[i] === q.a).length}/10
            </p>
            <p className="text-sm text-sub mt-1">
              <span className="lang-ar">أحسنت! راجع الإجابات الخاطئة ثم انتقل للدرس التالي.</span>
              <span className="lang-en">Well done! Review incorrect answers then move to the next lesson.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
