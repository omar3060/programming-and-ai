'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
import { MultiCoreSimulator } from '@/components/simulators/MultiCoreSimulator';
import { EdgeVsCloudInteractiveLab } from '@/components/simulators/EdgeVsCloudInteractiveLab';

const erasData = [
  {
    title: { ar: "1940s-60s: ظهور الحاسوب (ENIAC، الصمامات المفرغة)", en: "1940s-60s: Birth of the computer (ENIAC, vacuum tubes)" },
    desc: { ar: "استُخدم بشكل رئيسي للحسابات العسكرية والعلمية.", en: "Mainly used for military and scientific computation." }
  },
  {
    title: { ar: "1970s-80s: انتشار الحواسيب الشخصية (PCs)", en: "1970s-80s: Spread of personal computers (PCs)" },
    desc: { ar: "بداية استخدام الحواسيب الشخصية.", en: "Beginning of personal computer use." }
  },
  {
    title: { ar: "1990s: تسويق الإنترنت تجارياً؛ الشبكة العالمية (الويب)", en: "1990s: Commercialization of the Internet; the Web" },
    desc: { ar: "عولمة المعلومات؛ انتشار البريد الإلكتروني.", en: "Globalization of information; spread of email." }
  },
  {
    title: { ar: "2000s: صعود الهواتف الذكية (مثل iPhone)", en: "2000s: Rise of smartphones (iPhone, etc.)" },
    desc: { ar: "انتشار هائل لإنترنت الهاتف المحمول.", en: "Explosive spread of mobile Internet." }
  },
  {
    title: { ar: "2010s فصاعداً: انتشار الحوسبة السحابية", en: "2010s onward: Spread of cloud computing" },
    desc: { ar: "تحليل البيانات ضخمة الحجم والذكاء الاصطناعي؛ انتشار \"تكنولوجيا المعلومات كخدمة\" (IT as a service).", en: "Large-scale data analysis and AI; \"IT as a service\" becomes widespread." }
  }
];

const mooreData = [
  { year: 1971, chip: "Intel 4004", trans: "2,300" },
  { year: 1989, chip: "Intel 486", trans: "1,200,000" },
  { year: 2000, chip: "Pentium 4", trans: "42,000,000" },
  { year: 2010, chip: "Intel Core i7", trans: "1,170,000,000" },
  { year: 2020, chip: "Apple A14 Bionic", trans: "11,800,000,000" },
  { year: 2024, chip: "Nvidia Blackwell B200", trans: "208,000,000,000" }
];

export function Lesson1_1() {
  const { playSfx } = useApp();
  const quizQuestions = allExamQuestions.slice(0, 5);

  const [eraIdx, setEraIdx] = useState(0);
  const [mooreIdx, setMooreIdx] = useState(0);
  const [edgeResult, setEdgeResult] = useState<{ show: boolean; isEdge: boolean }>({ show: false, isEdge: true });
  const [bitVal, setBitVal] = useState(0);
  const [qubitSpun, setQubitSpun] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const handlePickEra = (idx: number) => {
    playSfx('click');
    setEraIdx(idx);
  };

  const handleMooreSlide = (val: number) => {
    setMooreIdx(val);
  };

  const handleTestEdge = (isEdge: boolean) => {
    playSfx(isEdge ? 'success' : 'error');
    setEdgeResult({ show: true, isEdge });
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
    <div id="view-lesson-1-1" className="lesson-view space-y-8 animate-fadeIn">
      {/* Instructor Bio Section */}
      <InstructorBioCard />

      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold flex items-center gap-1.5">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span className="lang-ar">الدرس 1-1 (كتاب الوزارة ص 4 - ص 10)</span>
                <span className="lang-en">Lesson 1-1 (Textbook pp. 4 - 10)</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                <span className="lang-ar">تكنولوجيا المعلومات والمجتمع</span>
                <span className="lang-en">IT and Society</span>
              </span>
              <DownloadEvaluationButton
                pdfUrl="/evaluations/unit1/lesson1_1_eval.pdf"
                fileName="حل_تقييمات_الدرس_الأول_تطور_تكنولوجيا_المعلومات.pdf"
                lessonTitle="الدرس الأول"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">تطور تكنولوجيا المعلومات والتحول الاجتماعي</span>
              <span className="lang-en">IT Development and Social Transformation</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">شرح تفصيلي شامل لكافة محتويات الدرس الأول من كتاب الوزارة: العصور الخمسة، قانون مور والحدود الفيزيائية للسيليكون، التغيرات الاجتماعية الكبرى، والتقنيات الناشئة.</span>
              <span className="lang-en">Comprehensive breakdown of Lesson 1-1: The 5 IT eras, Moore's Law & silicon physical limits, the 5 societal shifts, and cutting-edge emerging technologies.</span>
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

        {/* Official Pedagogical Objectives & Guiding Question */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-blue-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bullseye"></i>
              <span className="lang-ar">أهداف التعلم الرسمية للدرس:</span>
              <span className="lang-en">Official Learning Objectives:</span>
            </strong>
            <ul className="space-y-1 text-sub">
              <li>• <span className="lang-ar">شرح المراحل الرئيسية في تطور تكنولوجيا المعلومات وأثرها في المجتمع.</span><span className="lang-en">Explain the major stages in the development of information technology and their impact on society.</span></li>
              <li>• <span className="lang-ar">اذكر أمثلة على التغيرات الاجتماعية والتقنيات الناشئة التي أحدثتها تكنولوجيا المعلومات، واشرح خصائصها.</span><span className="lang-en">Give examples of social changes and emerging technologies brought about by information technology, and explain their characteristics.</span></li>
              <li>• <span className="lang-ar">حلل أثر إحدى تقنيات المعلومات في فئات مختلفة من المجتمع، وبرر قراراً مستنداً إلى الأدلة.</span><span className="lang-en">Analyze the impact of an information technology on different groups in society, and justify a decision based on evidence.</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-circle-question"></i>
              <span className="lang-ar">السؤال التوجيهي للدرس (كتاب الوزارة ص 4):</span>
              <span className="lang-en">Guiding Question (Textbook p. 4):</span>
            </strong>
            <p className="text-slate-200 font-medium leading-relaxed">
              <span className="lang-ar">"كيف تطورت تكنولوجيا المعلومات عبر مراحلها الرئيسية، وكيف غيرت كل مرحلة المجتمع؟"</span>
              <span className="lang-en">"How has information technology developed through its major stages, and how has each stage changed society?"</span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: The 5 Eras of IT (ص 4 - 5) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
            <span className="lang-ar">تاريخ تكنولوجيا المعلومات — العصور الخمسة الكبرى (ص 4 - ص 5)</span>
            <span className="lang-en">History of IT — The Five Evolutionary Eras (pp. 4 - 5)</span>
          </h3>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">على مدى أكثر من ثمانين عاماً، مرت تكنولوجيا المعلومات بخمس مراحل تطورية كبرى، مثلت كل مرحلة منها نقلة نوعية كاملة في شكل الأجهزة وحجمها وطريقة استخدامها وتأثيرها على المجتمع البشري:</span>
          <span className="lang-en">Over more than eight decades, IT transitioned across five major eras, each marking a complete paradigm shift in hardware size, functionality, and societal adoption:</span>
        </p>

        {/* Interactive Eras Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          {[
            { icon: "💡", range: "1940s-1960s", ar: "الحواسيب الأولى", en: "First Computers" },
            { icon: "🖥️", range: "1970s-1980s", ar: "الحواسب الشخصية", en: "Personal PCs" },
            { icon: "🌐", range: "1990s", ar: "تسويق الإنترنت", en: "Web Era" },
            { icon: "📱", range: "2000s", ar: "الهواتف الذكية", en: "Smartphones" },
            { icon: "☁️", range: "2010s Onward", ar: "السحابة والذكاء", en: "Cloud & AI" }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => handlePickEra(i)}
              className={`p-3 rounded-2xl theme-subpanel border text-center space-y-1 transition group ${
                eraIdx === i ? 'border-blue-500 bg-blue-500/10 font-bold' : 'hover:border-blue-500'
              } ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className="text-xl block group-hover:scale-110 transition">{item.icon}</span>
              <strong className="block text-slate-200 text-[11px]">{item.range}</strong>
              <span className="text-[10px] text-sub block">
                <span className="lang-ar">{item.ar}</span>
                <span className="lang-en">{item.en}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Era Details Dynamic Card */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-blue-500/40 text-xs sm:text-sm leading-relaxed text-slate-200 space-y-2">
          <strong className="text-brand-400 block text-base font-bold">
            <span className="lang-ar">{erasData[eraIdx].title.ar}</span>
            <span className="lang-en">{erasData[eraIdx].title.en}</span>
          </strong>
          <p className="text-sub">
            <span className="lang-ar">{erasData[eraIdx].desc.ar}</span>
            <span className="lang-en">{erasData[eraIdx].desc.en}</span>
          </p>
        </div>

        {/* Vacuum Tubes vs Transistor Deep Dive */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
          <div className="font-bold text-amber-400 flex items-center gap-2">
            <i className="fa-solid fa-lightbulb"></i>
            <span className="lang-ar">إضاءة هندسية من كتاب الوزارة (ص 5): الصمامات المفرغة وحاسوب ENIAC</span>
            <span className="lang-en">Engineering Deep Dive (p. 5): Vacuum Tubes & ENIAC</span>
          </div>
          <p className="text-sub leading-relaxed">
            <span className="lang-ar">الصمام المفرغ (Vacuum Tube) هو لمبة زجاجية كبيرة تُمرر الكهرباء أو تمنعها لتمثيل الصفر (0) والواحد (1). كان حاسوب <strong>ENIAC</strong> يزن حوالي <strong>30 طناً</strong>، ويشغل مساحة غرفة ضخمة كاملة، ويحتوي على أكثر من 18 ألف صمام تستهلك طاقة كهربائية هائلة وتنبعث منها حرارة شديدة وتتعرض للتلف المستمر. وبظهور الترانزستور المصنوع من السيليكون تقلصت الأحجام لمليارات المرات.</span>
            <span className="lang-en">The Vacuum Tube was an incandescent glass bulb acting as an electronic switch (0 or 1). The <strong>ENIAC</strong> computer weighed <strong>30 tons</strong>, occupied an entire room, and consumed massive electrical power for 18,000 tubes that constantly burned out. Silicon transistors revolutionized this by microscopic scaling.</span>
          </p>
        </div>
      </div>

      {/* SECTION 2: Moore's Law & Physical Limits (ص 5 - 6) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs"><span className="lang-ar">٢</span><span className="lang-en">2</span></span>
            <span className="lang-ar">قانون مور والحدود الفيزيائية للسيليكون (ص 5 - ص 6)</span>
            <span className="lang-en">Moore's Law & Silicon Physical Limitations (pp. 5 - 6)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="space-y-2 text-sub">
            <p>
              <strong className="text-white block"><span className="lang-ar">📌 تعريف قانون مور (Moore&apos;s Law):</span><span className="lang-en">📌 Moore&apos;s Law Definition:</span></strong>
              <span className="lang-ar">هو ملاحظة تجريبية صاغها "جوردون مور" (أحد مؤسسي إنتل) عام 1965 تفيد بأن: <em>"عدد الترانزستورات على شريحة الدائرة المتكاملة يتضاعف كل عامين تقريباً مع انخفاض التكلفة وزيادة السرعة"</em>. هو ليس قانوناً فيزيائياً ثابتاً بل استقراء صناعي واقتصادي.</span>
              <span className="lang-en">An empirical observation formulated by Gordon Moore (Intel co-founder) stating: <em>"The number of transistors on a microchip doubles roughly every two years while cost halves and processing power surges."</em></span>
            </p>
            <p>
              <strong className="text-rose-400 block"><span className="lang-ar">⚠️ التحديات والحدود الفيزيائية:</span><span className="lang-en">⚠️ Physical Limitations:</span></strong>
              <span className="lang-ar">عندما اقتربت أحجام بوابات الترانزستور من مقياس النانومتر (أبعاد الذرات)، ظهرت ظاهرتان خطيرتان:</span>
              <span className="lang-en">At nanometer thresholds approaching atomic limits, two quantum hurdles emerged:</span>
            </p>
            <ul className="space-y-1">
              <li>• <strong><span className="lang-ar">تيار التسرب (Leakage Current):</span><span className="lang-en">Leakage Current:</span></strong> <span className="lang-ar">تسرب الشحنات الكهربائية حتى في وضع إيقاف التشغيل مما يولد حرارة هائلة.</span><span className="lang-en">Parasitic charge leakage even in off-state generating heat.</span></li>
              <li>• <strong><span className="lang-ar">النفق الكمومي (Quantum Tunneling):</span><span className="lang-en">Quantum Tunneling:</span></strong> <span className="lang-ar">قفز الإلكترونات عشوائياً عبر الحواجز الذرية فائقة الرقة مما يفقد الترانزستور قدرته على التحكم.</span><span className="lang-en">Electrons tunneling across ultrathin gate barriers disrupting control.</span></li>
            </ul>
          </div>

          {/* Interactive Transistor Scaling Simulator */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-400"><span className="lang-ar">محاكي تضاعف الترانزستورات عبر التاريخ:</span><span className="lang-en">Transistor Density Timeline:</span></span>
              <span className="font-mono px-2 py-0.5 rounded bg-slate-800 text-brand-400 font-bold">{mooreData[mooreIdx].year}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              value={mooreIdx}
              onChange={(e) => handleMooreSlide(Number(e.target.value))}
              className="w-full accent-brand-500 cursor-pointer"
            />
            <div className="p-3 rounded-xl bg-slate-900 border text-xs space-y-1">
              <div className="text-sub text-[11px]"><span className="lang-ar">المعالج النموذجي:</span><span className="lang-en">Chip Sample:</span> <span className="font-bold text-white">{mooreData[mooreIdx].chip} ({mooreData[mooreIdx].year})</span></div>
              <div className="text-sub text-[11px]"><span className="lang-ar">عدد الترانزستورات:</span><span className="lang-en">Transistors:</span> <span className="font-mono text-emerald-400 font-bold">{mooreData[mooreIdx].trans}</span></div>
            </div>
            <div className="text-[11px] text-sub">
              <strong className="text-white block"><span className="lang-ar">💡 الحلول الهندسية للالتفاف على حدود مور:</span><span className="lang-en">💡 Engineering Solutions:</span></strong>
              <span><span className="lang-ar">الاتجاه نحو المعالجات متعددة الأنوية (Multi-core)، والمعالجة المتوازية، وتسريع الذكاء الاصطناعي (NPUs/GPUs)، والحوسبة الكمومية.</span><span className="lang-en">Shift to Multi-core architectures, specialized AI accelerators (NPUs/GPUs), and Quantum computing.</span></span>
            </div>
          </div>
        </div>

        {/* Live Interactive Multi-Core Processor Benchmark Simulator */}
        <MultiCoreSimulator />
      </div>

      {/* SECTION 3: The 5 Major Social Transformations (ص 6 - 7) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs"><span className="lang-ar">٣</span><span className="lang-en">3</span></span>
            <span className="lang-ar">التغيرات الاجتماعية الخمسة الكبرى (ص 6 - ص 7)</span>
            <span className="lang-en">The Five Major Societal Transformations (pp. 6 - 7)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border hover:border-brand-500 transition space-y-2">
            <span className="text-2xl block">💬</span>
            <strong className="text-white block"><span className="lang-ar">1. شبكات التواصل الاجتماعي (SNS)</span><span className="lang-en">1. SNS (Social Networking Service)</span></strong>
            <p className="text-sub leading-relaxed"><span className="lang-ar">خدمات تتيح للمستخدمين الاتصال ببعضهم البعض ونشر وتشارك المعلومات. وهي فعالة للغاية في نشر المعلومات بسرعة.</span><span className="lang-en">Services that allow users to connect with each other and post and share information. They are highly effective at spreading information rapidly.</span></p>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border hover:border-brand-500 transition space-y-2">
            <span className="text-2xl block">🛍️</span>
            <strong className="text-white block"><span className="lang-ar">2. التجارة الإلكترونية (EC)</span><span className="lang-en">2. E-commerce (EC)</span></strong>
            <p className="text-sub leading-relaxed"><span className="lang-ar">شراء وبيع البضائع والخدمات عبر الإنترنت. (مثل المتاجر عبر الإنترنت مثل Amazon و eBay).</span><span className="lang-en">Buying and selling goods and services through the Internet. (e.g., online shops such as Amazon and eBay).</span></p>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border hover:border-brand-500 transition space-y-2">
            <span className="text-2xl block">🏡</span>
            <strong className="text-white block"><span className="lang-ar">3. العمل عن بعد</span><span className="lang-en">3. Remote work</span></strong>
            <p className="text-sub leading-relaxed"><span className="lang-ar">نمط عمل يتم فيه أداء العمل من المنزل أو مواقع بعيدة أخرى باستخدام الإنترنت.</span><span className="lang-en">A working style in which work is performed from home or other remote locations using the Internet.</span></p>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border hover:border-brand-500 transition space-y-2">
            <span className="text-2xl block">🎓</span>
            <strong className="text-white block"><span className="lang-ar">4. التعليم عبر الإنترنت</span><span className="lang-en">4. Online learning</span></strong>
            <p className="text-sub leading-relaxed"><span className="lang-ar">نمط تعلم يتم فيه تقديم الدروس والمواد الدراسية باستخدام الإنترنت.</span><span className="lang-en">A learning style in which classes and study materials are delivered using the Internet.</span></p>
          </div>
          <div className="p-4 rounded-2xl theme-subpanel border hover:border-brand-500 transition space-y-2">
            <span className="text-2xl block">💳</span>
            <strong className="text-white block"><span className="lang-ar">5. الدفع غير النقدي</span><span className="lang-en">5. Cashless payment</span></strong>
            <p className="text-sub leading-relaxed"><span className="lang-ar">نظام لإجراء المدفوعات باستخدام النقود الإلكترونية ورموز QR وغيرها دون استخدام النقد الورقي.</span><span className="lang-en">A system for making payments using electronic money, QR codes, etc., without using cash.</span></p>
          </div>
        </div>
      </div>

      {/* SECTION 4: Emerging Technologies (ص 8 - 9) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs"><span className="lang-ar">٤</span><span className="lang-en">4</span></span>
            <span className="lang-ar">التقنيات الناشئة البارزة (ص 8 - ص 9)</span>
            <span className="lang-en">Prominent Emerging Technologies (pp. 8 - 9)</span>
          </h3>
        </div>

        {/* Edge vs Cloud Simulation */}
        <div className="p-5 rounded-2xl theme-subpanel border space-y-4">
          <div className="flex items-center justify-between">
            <strong className="text-xs sm:text-sm text-white flex items-center gap-2">
              <i className="fa-solid fa-car-on text-amber-400"></i>
              <span className="lang-ar">القيادة الذاتية والحوسبة الطرفية (Edge Computing) مقابل السحابية:</span>
              <span className="lang-en">Autonomous Driving: Edge vs Cloud Processing:</span>
            </strong>
          </div>
          <p className="text-xs text-sub leading-relaxed">
            <span className="lang-ar">في سيارة القيادة الذاتية، تتدفق ملايين البيانات من الكاميرات وحساسات LiDAR. لماذا يجب أن تعالج السيارة الفرملة محلياً بالحوسبة الطرفية بدلاً من السحابة؟ جرب بنفسك:</span>
            <span className="lang-en">In self-driving vehicles, cameras and LiDAR feed high-bandwidth telemetry. Why must emergency braking be processed on-device (Edge)? Test below:</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button onClick={() => handleTestEdge(true)} className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 hover:bg-emerald-900/40 text-start space-y-1 transition">
              <strong className="text-emerald-400 block"><span className="lang-ar">1. معالجة طرفية داخل السيارة (Edge Computing) ✅</span><span className="lang-en">1. On-board Edge Computing ✅</span></strong>
              <span className="text-[11px] text-sub block"><span className="lang-ar">معالجة فورية في 2ms دون حاجة لاتصال إنترنت.</span><span className="lang-en">Instant local computation in 2ms without internet lag.</span></span>
            </button>
            <button onClick={() => handleTestEdge(false)} className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/50 hover:bg-rose-900/40 text-start space-y-1 transition">
              <strong className="text-rose-400 block"><span className="lang-ar">2. إرسال الفيديو لخادم سحابي بعيد (Cloud Latency) ⚠️</span><span className="lang-en">2. Remote Cloud Round-trip ⚠️</span></strong>
              <span className="text-[11px] text-sub block"><span className="lang-ar">زمن نقل واستجابة 400ms قد يتسبب في حادث كارثي!</span><span className="lang-en">Round-trip lag of 400ms risks fatal high-speed impact!</span></span>
            </button>
          </div>

          {edgeResult.show && (
            <div className={`p-3 rounded-xl text-xs leading-relaxed border animate-fadeIn ${
              edgeResult.isEdge ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-rose-950/60 border-rose-500 text-rose-200'
            }`}>
              {edgeResult.isEdge ? (
                <>
                  <span className="lang-ar">⚡ <strong>استجابة فورية ناجحة (2ms):</strong> رصد المعالج الطرفي العائق وفرملت السيارة فوراً على مسافة أمان كاملة!</span>
                  <span className="lang-en">⚡ <strong>Instant 2ms Response:</strong> Edge AI detected obstacle & stopped safely!</span>
                </>
              ) : (
                <>
                  <span className="lang-ar">💥 <strong>تأخير كارثي (400ms):</strong> استغرقت الإشارة 200ms للوصول للسحابة و200ms للعودة، ففرملت السيارة بعد الاصطدام بـ 11 متراً!</span>
                  <span className="lang-en">💥 <strong>Catastrophic Latency (400ms):</strong> Round-trip delay caused impact before brakes engaged!</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* AR vs VR & Quantum Qubit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          {/* AR vs VR */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <strong className="text-brand-400 block text-sm font-bold flex items-center gap-2">
              <i className="fa-solid fa-vr-cardboard"></i>
              <span className="lang-ar">الواقع المعزز (AR) مقابل الواقع الافتراضي (VR):</span>
              <span className="lang-en">Augmented Reality (AR) vs Virtual Reality (VR):</span>
            </strong>
            <div className="space-y-1 text-sub">
              <p>• <strong><span className="lang-ar">الواقع المعزز (AR):</span><span className="lang-en">AR:</span></strong> <span className="lang-ar">يضيف عناصر ومعلومات رقمية فوق مشهد من العالم الحقيقي (مثل فلاتر الكاميرا أو تطبيقات قياس الغرفة).</span><span className="lang-en">Overlays interactive digital artifacts onto real-world scenes.</span></p>
              <p>• <strong><span className="lang-ar">الواقع الافتراضي (VR):</span><span className="lang-en">VR:</span></strong> <span className="lang-ar">يستبدل الواقع المادي بالكامل ويعزل المستخدم داخل بيئة رقمية ثلاثية الأبعاد مولدة حاسوبياً.</span><span className="lang-en">Completely immerses user into synthetic 3D virtual environment.</span></p>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <strong className="text-purple-400 block text-sm font-bold flex items-center gap-2">
              <i className="fa-solid fa-atom"></i>
              <span className="lang-ar">الحوسبة الكمومية والكيوبت (Qubit):</span>
              <span className="lang-en">Quantum Computing & The Qubit:</span>
            </strong>
            <p className="text-sub">
              <span className="lang-ar">بينما يعتمد الحاسب الكلاسيكي على <strong>البت (Bit)</strong> الذي يكون إما 0 أو 1 فقط، يعتمد الحاسب الكمي على <strong>الكيوبت (Qubit)</strong> القادر بفضل ظاهرة <strong>التراكب الكمي (Quantum Superposition)</strong> على تمثيل 0 و 1 معاً في نفس الوقت، مما يمكنه من حل معادلات رياضية معقدة (كتصميم الأدوية والتشفير) في ثوانٍ.</span>
              <span className="lang-en">Classical computers use binary Bits (0 or 1). Quantum computers leverage Qubits utilizing <strong>Quantum Superposition</strong> to represent 0 and 1 simultaneously, solving specialized complex calculations in seconds.</span>
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button onClick={() => { playSfx('click'); setBitVal(prev => (prev === 0 ? 1 : 0)); }} className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 font-mono text-[11px] font-bold">
                بت كلاسيكي: <span>{bitVal}</span>
              </button>
              <button onClick={() => { playSfx('click'); setQubitSpun(prev => !prev); }} className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-400 font-mono text-[11px] font-bold">
                كيوبت كمي: <span>{qubitSpun ? '∣Ψ⟩ = α∣0⟩ + β∣1⟩' : '0 و 1 معاً'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Interactive Autonomous Driving Edge vs Cloud Braking Simulator */}
        <EdgeVsCloudInteractiveLab />
      </div>

      {/* TEXTBOOK ENRICHMENT FEATURES (كتاب الوزارة ص 7 - 10) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
              <span className="lang-ar">ميزات وأنشطة كتاب الوزارة الرسمية</span>
              <span className="lang-en">Textbook Official Enrichment Features</span>
            </span>
            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-amber-400"></i>
              <span className="lang-ar">أنشطة: توقف وفكر • استقصِ كمهندس • فكر كمهندس • نمط الامتحان</span>
              <span className="lang-en">Activities: Pause & Think • Investigate • Exam Style</span>
            </h3>
          </div>
          <span className="text-xs text-sub font-mono">ص 7 - ص 10</span>
        </div>

        {/* 1. Pause & Think (1) */}
        <div onClick={() => handleToggleCard('pause-think-1-1')} className="p-5 rounded-2xl theme-subpanel border border-brand-500/30 space-y-3 cursor-pointer select-none group hover:border-brand-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-brain"></i>
              <span className="lang-ar">🧠 توقف وفكر (1) (كتاب الوزارة ص 7)</span>
              <span className="lang-en">🧠 Pause & Think (1) (Textbook p. 7)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-1'); }} className="text-xs font-bold text-brand-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-1'] ? 'إخفاء الإجابة' : 'عرض الإجابة والتحليل النموذجي'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-1'] ? 'Hide Answer' : 'Reveal Model Analysis'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"من بين التغيرات الاجتماعية الخمسة (التواصل، التجارة الإلكترونية، العمل عن بعد، التعلم عبر الإنترنت، الدفع غير النقدي)، أيها سيكون الأصعب في التخلي عنه بالنسبة للمجتمع الحديث، ولماذا؟"</span>
            <span className="lang-en">"Among the five social changes, which one would be the most difficult for modern society to abandon, and why?"</span>
          </p>
          {expandedCards['pause-think-1-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-brand-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-brand-400 block font-bold">
                <span className="lang-ar">💡 التحليل الهندسي المعتمد (إعداد م/ عمر محمود):</span>
                <span className="lang-en">💡 Certified Engineering Analysis (Eng. Omar Mahmoud):</span>
              </strong>
              <p>
                <span className="lang-ar"><strong>الدفع غير النقدي (Cashless Payment):</strong> هو الأصعب في التخلي عنه؛ لأنه أصبح البنية التحتية المحركة لكافة الخدمات الأخرى (التجارة الإلكترونية لا تعمل بدونه، والعمل عن بعد يتطلب تحويل المستحقات رقمياً، والمواصلات ودفع الفواتير أصبحت رقمية بالكامل). الرجوع للنقد الورقي التقليدي يعني شللاً في حركة التجارة العالمية وفقدان السرعة والأمان وتتبع المعاملات.</span>
                <span className="lang-en"><strong>Cashless Payment:</strong> It is the hardest to abandon because it constitutes the core operating backbone for all other services (E-commerce, remote salaries, and automated billing depend on it). Reverting to cash causes paralysis across global digital commerce.</span>
              </p>
            </div>
          )}
        </div>

        {/* 2. Pause & Think (2) */}
        <div onClick={() => handleToggleCard('pause-think-1-2')} className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3 cursor-pointer select-none group hover:border-purple-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-list-check"></i>
              <span className="lang-ar">🧠 توقف وفكر (2) (كتاب الوزارة ص 9) — 3 أسئلة محلولة</span>
              <span className="lang-en">🧠 Pause & Think (2) (Textbook p. 9) — 3 Solved Problems</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('pause-think-1-2'); }} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['pause-think-1-2'] ? 'إخفاء الإجابة' : 'عرض خطوات الحل الكاملة'}</span>
              <span className="lang-en">{expandedCards['pause-think-1-2'] ? 'Hide Answer' : 'Reveal Solutions'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pause-think-1-2'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs text-sub">
            <span className="lang-ar">يحتوي هذا النشاط على ثلاثة تدريبات نموذجية مباشرة من كتاب الوزارة: ترتيب زمني، صواب وخطأ مع التصويب، ومطابقة مصطلحات.</span>
            <span className="lang-en">This section features three classic exercises from the textbook: chronological order, true/false with correction, and matching.</span>
          </p>
          {expandedCards['pause-think-1-2'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-3 animate-fadeIn cursor-auto select-text">
              <div className="space-y-1">
                <strong className="text-purple-300 block">1. الترتيب الزمني الصحيح للمراحل:</strong>
                <p className="text-sub">ظهور الحواسيب الإلكترونية الأولى (الصمامات) ➔ ظهور وانتشار الحواسب الشخصية (PCs) ➔ تسويق الإنترنت تجارياً وظهور الويب ➔ ظهور الهواتف الذكية ➔ انتشار الحوسبة السحابية والـ AI.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-purple-300 block">2. صواب أو خطأ مع التصويب:</strong>
                <ul className="space-y-1 text-sub">
                  <li>• "قانون مور هو قانون فيزيائي ثابت لا يتغير" ➔ <strong>(خطأ ✗)</strong> التصويب: ملاحظة تجريبية لصناعة أشباه الموصلات تواجه حدوداً فيزيائية.</li>
                  <li>• "الحوسبة الطرفية تعالج البيانات على الجهاز المحلي لتقليل التأخير" ➔ <strong>(صواب ✓)</strong>.</li>
                  <li>• "الواقع الافتراضي VR يضيف عناصر للواقع الحقيقي دون عزلك" ➔ <strong>(خطأ ✗)</strong> التصويب: هذا هو الواقع المعزز AR، أما VR فيعزل المستخدم بالكامل.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <strong className="text-purple-300 block">3. مطابقة المصطلحات:</strong>
                <p className="text-sub">الكيوبت ➔ تراكب كمي لحالتي 0 و 1 معاً | الحوسبة الطرفية ➔ فرملة فورية بدون سحابة | الواقع المعزز ➔ دمج الرقمي بالبيئة الحقيقية.</p>
              </div>
            </div>
          )}
        </div>

        {/* 3. Investigate Like an Engineer */}
        <div onClick={() => handleToggleCard('investigate-1-1')} className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 cursor-pointer select-none group hover:border-emerald-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-microchip"></i>
              <span className="lang-ar">🔍 استقصِ كمهندس (كتاب الوزارة ص 8)</span>
              <span className="lang-en">🔍 Investigate Like an Engineer (p. 8)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('investigate-1-1'); }} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['investigate-1-1'] ? 'إخفاء الإجابة' : 'عرض التحليل الهندسي ودراسة الحالة'}</span>
              <span className="lang-en">{expandedCards['investigate-1-1'] ? 'Hide Answer' : 'Reveal Case Study'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['investigate-1-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"في نظام القيادة الذاتية، لماذا يكون من الضروري معالجة البيانات فوراً على متن المركبة نفسها بالحوسبة الطرفية (Edge Computing) بدلاً من إرسالها إلى السحابة لاتخاذ القرار؟ وما السيناريو الأسوأ إذا اعتمدنا على السحابة؟"</span>
            <span className="lang-en">"Why is on-board Edge Computing mandatory in autonomous driving systems rather than sending telemetry to the cloud for decisions?"</span>
          </p>
          {expandedCards['investigate-1-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">تحليل المهندس عمر محمود — عامل زمن الاستجابة (Latency):</span>
                <span className="lang-en">Latency Engineering Analysis:</span>
              </strong>
              <p>
                <span className="lang-ar">إذا ظهر عائق أو طفل فجأة أمام سيارة تسير بسرعة 100 كم/ساعة، تقطع السيارة نحو 28 متراً في الثانية الواحدة! إرسال بث الفيديو بدقة عالية إلى مركز بيانات سحابي، ثم انتظار معالجة الخادم وإرجاع أمر الفرامل يستغرق في أحسن الأحوال بين 200 إلى 500 ملي ثانية (نصف ثانية = 14 متراً إضافياً)، ناهيك عن احتمالية انقطاع الشبكة في الأنفاق أو المناطق النائية! لذلك توجب هندسياً تزويد السيارة بمعالج طرفي (Edge AI) يفرمل في أقل من 5 ملي ثانية محلياً دون أي اعتماد على شبكة خارجية.</span>
                <span className="lang-en">At 100 km/h, a vehicle traverses 28 meters per second. Sending video to cloud data centers takes 200-500ms round-trip latency, plus risks signal dropouts in tunnels. Edge Computing processes on-board in under 5ms, preventing catastrophic accidents.</span>
              </p>
            </div>
          )}
        </div>

        {/* 4. Think Like an Engineer */}
        <div onClick={() => handleToggleCard('think-eng-1-1')} className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3 cursor-pointer select-none group hover:border-amber-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-compass-drafting"></i>
              <span className="lang-ar">💡 فكر كمهندس (كتاب الوزارة ص 10)</span>
              <span className="lang-en">💡 Think Like an Engineer (p. 10)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('think-eng-1-1'); }} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['think-eng-1-1'] ? 'إخفاء الإجابة' : 'عرض مصفوفة اتخاذ القرار الهندسي'}</span>
              <span className="lang-en">{expandedCards['think-eng-1-1'] ? 'Hide Answer' : 'Decision Matrix'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['think-eng-1-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"قيم الدفع غير النقدي (Cashless Payment): اذكر لكل فئة (العملاء، أصحاب المتاجر الصغيرة، كبار السن، البنوك) ميزة واحدة وعيباً واحد، ثم اتخذ قراراً هندسياً مبرراً بالأدلة: هل يمكن لمجتمعنا التحول الكامل للدفع غير النقدي بخطوة واحدة فورية؟"</span>
            <span className="lang-en">"Evaluate Cashless Payment: For customers, merchants, elderly, and banks, list 1 pro and 1 con, then justify whether society can transition in a single step."</span>
          </p>
          {expandedCards['think-eng-1-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-amber-400 block font-bold">
                <span className="lang-ar">مصفوفة تقييم الفئات والقرار الهندسي:</span>
                <span className="lang-en">Engineering Decision Evaluation:</span>
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-brand-400 block">1. العميل:</strong>
                  <span>ميزة: السرعة والأمان وعدم حمل نقود | عيب: الاعتماد التام على شحن الهاتف والإنترنت.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-brand-400 block">2. صاحب المتجر الصغير:</strong>
                  <span>ميزة: منع سرقة الكاش وزيادة المبيعات | عيب: رسوم التحصيل المصرفية وصيانة الأجهزة.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-brand-400 block">3. كبار السن:</strong>
                  <span>ميزة: تجنب الذهاب للزحام | عيب: صعوبة التعامل مع الواجهات الرقمية وخوف الاحتيال.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-brand-400 block">4. البنوك والدولة:</strong>
                  <span>ميزة: تقليل تكلفة طباعة النقد والشمول المالي | عيب: الحاجة لبنية سيبرانية ضخمة لحماية البيانات.</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold mt-2">
                ⚖️ <strong>القرار الهندسي السليم:</strong> لا يمكن التحول بخطوة واحدة فورية لتجنب تهميش فئات غير ممتلكة للتقنية، بل يجب أن يكون التحول تدريجياً عبر مراحل متوازية وتوفير خيارات هجينة (Hybrid) وتثقيف المستخدمين.
              </div>
            </div>
          )}
        </div>

        {/* 5. Exam Style Question */}
        <div onClick={() => handleToggleCard('exam-style-1-1')} className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3 cursor-pointer select-none group hover:border-rose-500 transition">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-file-pen"></i>
              <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة</span>
              <span className="lang-en">📝 Exam-Style Question (6 Marks)</span>
            </span>
            <button onClick={(e) => { e.stopPropagation(); handleToggleCard('exam-style-1-1'); }} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1 cursor-pointer">
              <span className="lang-ar">{expandedCards['exam-style-1-1'] ? 'إخفاء الإجابة' : 'عرض نموذج الإجابة وتوزيع الدرجات'}</span>
              <span className="lang-en">{expandedCards['exam-style-1-1'] ? 'Hide Answer' : 'Model Answer & Mark Scheme'}</span>
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-style-1-1'] ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <p className="text-xs font-bold text-slate-200">
            <span className="lang-ar">"حلل كيف غير انتشار الحوسبة السحابية (من العقد الثاني من الألفية فصاعداً) طريقة استخدام تكنولوجيا المعلومات؟ أشر في إجابتك إلى: تكنولوجيا المعلومات كخدمة (ITaaS)، تحليل البيانات الضخمة (Big Data)، وتدريب نماذج الذكاء الاصطناعي (AI)."</span>
            <span className="lang-en">"Analyze how cloud computing transformed IT adoption since the 2010s. Refer to ITaaS, Big Data, and AI training."</span>
          </p>
          {expandedCards['exam-style-1-1'] && (
            <div onClick={(e) => e.stopPropagation()} className="p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
              <strong className="text-rose-400 block font-bold">
                <span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span>
                <span className="lang-en">Model Answer for Full Marks (6/6):</span>
              </strong>
              <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                <li><strong>تحول IT إلى خدمة (ITaaS) [درجتان]:</strong> لم يعد الأفراد أو الشركات بحاجة لشراء خوادم باهظة وصيانتها، بل استئجار القدرة الحسابية والتخزينية حسب الحاجة عبر الإنترنت (Pay-as-you-go).</li>
                <li><strong>تحليل البيانات الضخمة (Big Data) [درجتان]:</strong> وفرت السحابة مساحات تخزين غير محدودة وقدرات معالجة موزعة لتحليل ملايين السجلات والبيانات اللحظية في ثوانٍ.</li>
                <li><strong>تمكين وتدريب نماذج الذكاء الاصطناعي [درجتان]:</strong> أتاحت السحابة تدريب شبكات التعلم العميق والذكاء التوليدي التي تحتاج آلاف بطاقات معالجة الرسومات (GPUs) في مراكز بيانات عملاقة.</li>
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* 3D Flashcards 1-1 */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-sm flex items-center gap-2">
          <i className="fa-solid fa-clone text-brand-400"></i>
          <span className="lang-ar">بطاقات المراجعة السريعة (المس لقلب البطاقة):</span>
          <span className="lang-en">Lesson 1-1 Flashcards (Tap to flip):</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {[
            { id: "fc1", icon: "💡", titleAr: "قانون مور", titleEn: "Moore's Law", color: "brand", descAr: "ملاحظة تجريبية بأن عدد الترانزستورات يتضاعف كل عامين تقريباً مع انخفاض التكلفة.", descEn: "Empirical observation that transistor density doubles every ~2 years while costs plummet." },
            { id: "fc2", icon: "⚡", titleAr: "الحوسبة الطرفية", titleEn: "Edge Computing", color: "emerald", descAr: "معالجة البيانات فوراً على الجهاز المحلي بدلاً من السحابة لتقليل زمن الاستجابة وحماية الأرواح.", descEn: "Processing data locally on-device rather than cloud to minimize latency and ensure safety." },
            { id: "fc3", icon: "⚛️", titleAr: "الكيوبت (Qubit)", titleEn: "Qubit", color: "purple", descAr: "وحدة المعلومات في الحوسبة الكمية، قادرة على تمثيل 0 و 1 معاً بفضل التراكب الكمي.", descEn: "Quantum computing unit representing 0 and 1 simultaneously via quantum superposition." },
            { id: "fc4", icon: "🕶️", titleAr: "الواقع المعزز (AR)", titleEn: "Augmented Reality", color: "amber", descAr: "دمج عناصر ورسومات وبيانات رقمية فوق مشهد العالم الحقيقي دون عزل المستخدم.", descEn: "Superimposing digital graphical elements onto the real-world physical environment." }
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

      {/* QUIZ 1-1 */}
      <div className="theme-panel border p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <i className="fa-solid fa-circle-question text-brand-400"></i>
            <span className="lang-ar">اختبار تدريبي على الدرس 1-1 (5 أسئلة منهجية)</span>
            <span className="lang-en">Lesson 1-1 Practice Quiz (5 Questions)</span>
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
                  <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
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
                    let btnStyle = "theme-panel border hover:border-brand-500 text-slate-300";

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
