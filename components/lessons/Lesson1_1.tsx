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
    period: "1940s-1960s",
    icon: "💡",
    badge: { ar: "ظهور الحاسوب والأنبوب المفرغ", en: "First Computers & Vacuum Tubes" },
    title: { 
      ar: "العصر الأول (1940s-1960s): ظهور الحواسيب الأولى (الصمامات المفرغة وحاسوب ENIAC)", 
      en: "Era 1 (1940s-1960s): Birth of First Computers (Vacuum Tubes & ENIAC)" 
    },
    summary: { 
      ar: "شهدت هذه الفترة ولادة الحوسبة الإلكترونية باستخدام الصمامات المفرغة. كانت الحواسيب في هذه الحقبة عبارة عن آلات ضخمة يزن بعضها عشرات الأطنان وتعمل كأجهزة مفردة للمؤسسات الكبرى والدفاع.", 
      en: "This period witnessed the birth of electronic computing powered by vacuum tubes. Computers were colossal machines weighing tens of tons, operated as standalone units by military and research institutions." 
    },
    hardware: { 
      ar: "الصمامات المفرغة (Vacuum Tubes) كعناصر مفاتيح إلكترونية لتمثيل 0 و 1. حاسوب ENIAC كان يزن 30 طناً، ويشغل مساحة غرفة كاملة، ويحتوي على 18,000 صمام مفرغ تستهلك حرارة وطاقة هائلة وتتعرض للتلف المستمر.", 
      en: "Vacuum tubes used as electronic switches (0 and 1). The ENIAC computer weighed 30 tons, occupied a full room, and contained 18,000 vacuum tubes that generated immense heat, consumed high wattage, and frequently burned out." 
    },
    impact: { 
      ar: "اقتصر استخدام الحواسيب على الأغراض العسكرية، والتشفير في الحرب العالمية، والحسابات المعقدة في مراكز البحوث والمؤسسات الحكومية الكبرى دون وجود أي استخدام شخصي أو مدني عام.", 
      en: "Computer usage was restricted to military ballistics, wartime cryptography, and complex calculations in large scientific research centers with zero individual or civilian home usage." 
    },
    keyInnovations: {
      ar: [
        "حاسوب ENIAC (أول حاسوب إلكتروني رقمي عام).",
        "الصمامات المفرغة (Vacuum Tubes) كمفاتيح إلكترونية.",
        "البطاقات المثقوبة (Punched Cards) لإدخال البيانات والمعادلات العسكرية."
      ],
      en: [
        "ENIAC computer (the first general-purpose digital electronic computer).",
        "Vacuum Tubes serving as electronic logic switches.",
        "Punched Cards for data input and ballistics computation."
      ]
    }
  },
  {
    period: "1970s-1980s",
    icon: "🖥️",
    badge: { ar: "انتشار الحواسب الشخصية والسيليكون", en: "Personal PCs & Microprocessors" },
    title: { 
      ar: "العصر الثاني (1970s-1980s): انتشار الحواسيب الشخصية (PCs) والمعالجات الدقيقة", 
      en: "Era 2 (1970s-1980s): Spread of Personal Computers (PCs) & Microprocessors" 
    },
    summary: { 
      ar: "شهدت هذه الحقبة الثورة الإلكترونية الحقيقية بفضل استبدال الصمامات بالترانزستورات والدوائر المتكاملة من السيليكون، مما سمح بإنشاء المعالج الدقيق (Microprocessor) وتصغير الحواسيب لتوضع على المكاتب.", 
      en: "This era marked a true silicon revolution as vacuum tubes were replaced by transistors and integrated circuits, enabling microprocessors and scaling computers down to fit desktop tables." 
    },
    hardware: { 
      ar: "الترانزستورات المدمجة على شرائح السيليكون (Microprocessors)، وشاشات CRT، وأقراص التخزين المرنة (Floppy Disks). تقلص الحجم من مساحة غرفة كاملة إلى جهاز مكتبي محمول.", 
      en: "Microprocessors built on silicon integrated chips, CRT monitors, and floppy disks. Hardware scaled down from room-sized mainframes to desktop units." 
    },
    impact: { 
      ar: "بداية استخدام الحواسيب الشخصية من قبل الأفراد والمكاتب والشركات الصغيرة. تغيرت طبيعة العمل المكتبي، والحسابات المالية، وكتابة المستندات والبيانات محلية التخزين.", 
      en: "The inception of personal computing for home users and small businesses. Workplaces were transformed with digital spreadsheets, word processing, and localized data management." 
    },
    keyInnovations: {
      ar: [
        "المعالج الدقيق Intel 4004 وإنتل 8086.",
        "أجهزة الحاسوب الشخصي (IBM PC, Apple II).",
        "أنظمة التشغيل المعتمدة على النصوص (MS-DOS) ثم الواجهات الرسمية الأولى (GUI)."
      ],
      en: [
        "Intel 4004 & 8086 microprocessors.",
        "Personal computers (IBM PC, Apple II).",
        "Command-line operating systems (MS-DOS) followed by early Graphical User Interfaces (GUI)."
      ]
    }
  },
  {
    period: "1990s",
    icon: "🌐",
    badge: { ar: "تسويق الإنترنت ونشأة الويب", en: "Commercial Internet & WWW" },
    title: { 
      ar: "العصر الثالث (1990s): تسويق الإنترنت تجارياً والشبكة العالمية (الويب WWW)", 
      en: "Era 3 (1990s): Commercialization of the Internet & the World Wide Web" 
    },
    summary: { 
      ar: "انتقلت الحواسيب من أجهزة معزولة تعمل بشكل منفرد إلى شبكة عالمية مترابطة، مع افتتاح شبكة الإنترنت للاستخدام التجاري العام واختراع الشبكة العنكبوتية العالمية (WWW).", 
      en: "Computers transitioned from isolated standalone desktop devices into an interconnected global network, powered by the commercialization of the Internet and the invention of the World Wide Web (WWW)." 
    },
    hardware: { 
      ar: "شبكات الاتصال السلكية (Dial-up Modems)، أجهزة السيرفر الأولى، المتصفحات الإلكترونية (Internet Explorer, Netscape)، وبروتوكولات الويب (HTTP, HTML).", 
      en: "Dial-up modems, early web servers, graphical web browsers (Internet Explorer, Netscape), and foundational web protocols (HTTP, HTML)." 
    },
    impact: { 
      ar: "عولمة المعلومات بشكل غير مسبوق، انتشار البريد الإلكتروني (Email) كوسيلة اتصل سريعة، نشأة المتاجر الإلكترونية التجريبية (بداية E-Commerce)، وإمكانية تبادل الأخبار والبيانات بين القارات في ثوانٍ.", 
      en: "Unprecedented globalization of information, widespread email adoption replacing physical mail, the origin of electronic commerce (E-Commerce), and instantaneous cross-continental data sharing." 
    },
    keyInnovations: {
      ar: [
        "اختراع الشبكة العنكبوتية العالمية (World Wide Web) بواسطة تيم بيرنرز لي.",
        "انتشار البريد الإلكتروني (E-mail) ومتصفحات الويب.",
        "بداية المتاجر الإلكترونية الأولى مثل Amazon و eBay."
      ],
      en: [
        "Invention of the World Wide Web (WWW) by Tim Berners-Lee.",
        "Widespread usage of email and graphical web browsers.",
        "Emergence of early e-commerce platforms such as Amazon and eBay."
      ]
    }
  },
  {
    period: "2000s",
    icon: "📱",
    badge: { ar: "صعود الهواتف الذكية وإنترنت المحمول", en: "Smartphones & Mobile Web" },
    title: { 
      ar: "العصر الرابع (2000s): صعود الهواتف الذكية وشبكات المحمول عالية السرعة", 
      en: "Era 4 (2000s): Rise of Smartphones & Mobile High-Speed Internet" 
    },
    summary: { 
      ar: "تحولت القدرة الحوسبية والاتصال بالإنترنت من المكاتب والشاشات الثابتة إلى أجهزة الجيب المحمولة بشاشات اللمس، مما أحدث انفجاراً في استخدام إنترنت المحمول على مدار 24 ساعة.", 
      en: "Computing power and Internet access shifted from stationary office desks into pocket-sized touch devices, triggering an explosive growth of 24/7 mobile Internet connectivity." 
    },
    hardware: { 
      ar: "الهواتف الذكية (مثل iPhone)، شاشات اللمس التكثيفية، شبكات المحمول (3G / 4G)، المعالجات المدمجة عالية الكفاءة (System on Chip - SoC)، ومتاجر التطبيقات (App Store / Google Play).", 
      en: "Smartphones (e.g., iPhone), capacitive touchscreens, mobile 3G/4G cellular networks, efficient System-on-Chip (SoC) processors, and mobile application stores." 
    },
    impact: { 
      ar: "أصبح الاتصال بالإنترنت متواصلاً في كل مكان؛ ظهرت شبكات التواصل الاجتماعي (SNS)، والتواصل الفوري، وتغيّرت أساليب التصوير وتشارك الوسائط والترفيه اليومي للأفراد.", 
      en: "Internet connection became ubiquitous; social networking services (SNS) exploded, instant messaging flourished, and everyday personal communication, media capture, and entertainment were revolutionized." 
    },
    keyInnovations: {
      ar: [
        "إطلاق أول هاتف iPhone عام 2007 ونظام Android.",
        "انتشار منصات شبكات التواصل الاجتماعي (SNS مثل Facebook و Twitter).",
        "شبكات الجيل الثالث والرابع (3G/4G) والملاحة عبر GPS."
      ],
      en: [
        "Launch of the first iPhone in 2007 and Android ecosystem.",
        "Booming Social Networking Services (SNS like Facebook & Twitter).",
        "3G/4G cellular connectivity and mobile GPS navigation."
      ]
    }
  },
  {
    period: "2010s Onward",
    icon: "☁️",
    badge: { ar: "الحوسبة السحابية والذكاء الاصطناعي", en: "Cloud Computing & AI Era" },
    title: { 
      ar: "العصر الخامس (2010s فصاعداً): انتشار الحوسبة السحابية، البيانات الضخمة، والذكاء الاصطناعي", 
      en: "Era 5 (2010s Onward): Cloud Computing, Big Data & Artificial Intelligence" 
    },
    summary: { 
      ar: "تحولت تكنولوجيا المعلومات إلى قدرة خدمة مشغلة عبر الشبكة (IT as a Service). لم يعد الفرد أو الشركة بحاجة لشراء سيرفرات ضخمة، بل يتم استئجار القدرة الحوسبية والذكاء الاصطناعي من مراكز سحابية عملاقة.", 
      en: "IT transformed into a service delivered on demand over the Internet ('IT as a Service'). Neither individuals nor companies need to buy local server hardware; processing and AI are leased from cloud datacenters." 
    },
    hardware: { 
      ar: "مراكز البيانات السحابية العملاقة (Cloud Datacenters)، المعالجات الفائقة وتسريعات الذكاء الاصطناعي (GPUs / NPUs)، الحوسبة الطرفية (Edge Computing)، وشبكات الجيل الخامس (5G).", 
      en: "Global cloud data centers (real hardware in real locations), specialized AI accelerators (GPUs/NPUs), Edge Computing nodes, and 5G ultra-fast networks." 
    },
    impact: { 
      ar: "تمكين تحليل البيانات ضخمة الحجم (Big Data)، تشغيل نماذج الذكاء الاصطناعي والتوليدي، انتشار العمل عن بعد، التعليم الإلكتروني الكامل، والدفع غير النقدي (Cashless Payment) في المعاملات اليومية.", 
      en: "Empowered large-scale data analysis (Big Data), enabled Generative AI and deep learning models, popularized seamless remote work, full online learning platforms, and cashless payment infrastructure." 
    },
    keyInnovations: {
      ar: [
        "مراكز الحوسبة السحابية (AWS, Azure, Google Cloud) ومفهوم 'تكنولوجيا المعلومات كخدمة' (IT as a Service).",
        "نماذج الذكاء الاصطناعي التوليدي (Generative AI) مثل ChatGPT ومحركات التعلم العميق.",
        "المنظومات المتكاملة للدفع غير النقدي (Cashless Payment)، والقيادة الذاتية، والحوسبة الطرفية (Edge Computing)."
      ],
      en: [
        "Cloud platforms (AWS, Azure, Google Cloud) offering 'IT as a Service'.",
        "Generative AI models (e.g. ChatGPT, LLMs) and deep learning frameworks.",
        "Cashless payment systems, autonomous driving platforms, and edge computing architectures."
      ]
    }
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
  const quizQuestions = allExamQuestions.slice(0, 10);

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
                pdfUrl="/evaluations/unit1/lesson1_1_eval.pdf?v=20261002"
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
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg sm:text-xl font-black flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
            <span className="lang-ar">تاريخ تكنولوجيا المعلومات — العصور الخمسة الكبرى (ص 4 - ص 5)</span>
            <span className="lang-en">History of IT — The Five Evolutionary Eras (pp. 4 - 5)</span>
          </h3>
        </div>

        {/* Introductory Real-Life Scenario Box (كتاب الوزارة ص 4 / p. 6) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-purple-900/30 border border-blue-500/30 text-xs sm:text-sm leading-relaxed space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs sm:text-sm">
            <i className="fa-solid fa-sun text-amber-400 text-base"></i>
            <span className="lang-ar">سيناريو الحياة اليومية (كتاب الوزارة ص 4): يوم في حياة طالب مصري</span>
            <span className="lang-en">Daily Life Scenario (Textbook p. 6): A Day in the Life of an Egyptian Student</span>
          </div>
          <p className="text-sub">
            <span className="lang-ar">
              في يوم عادي، يقرأ طالب في مصر رسائل على أحد تطبيقات التواصل الاجتماعي (SNS)، ويدفع ثمن إفطاره إلكترونياً باستخدام تطبيق للدفع غير النقدي، وينضم إلى درس عبر الإنترنت، ويطلب كتاباً من متجر إلكتروني. 
              قبل 20 عاماً، لم تكن معظم هذه الخدمات متاحة أو منتشرة بالصورة التي نعرفها اليوم. 
              لقد مرت تكنولوجيا المعلومات بسلسلة من المراحل المتتابعة — من الحواسيب الأولى الضخمة إلى الحوسبة السحابية — وفي كل مرحلة غيرت طريقة تواصل الناس، وعملهم، وتعلمهم، ودفعهم للأموال.
            </span>
            <span className="lang-en">
              On an ordinary day, a student in Egypt checks messages on an SNS app, pays for breakfast with a cashless app, joins a lesson through online learning, and orders a book from an e-commerce (EC) shop. 
              Twenty years ago, most of this was not possible. Information technology has developed through a series of stages — from the first room-sized computers to cloud computing — and at each stage it has changed the way people communicate, work, learn, and pay.
            </span>
          </p>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">على مدى أكثر من ثمانين عاماً، مرت تكنولوجيا المعلومات بخمس مراحل تطورية كبرى، مثلت كل مرحلة منها نقلة نوعية كاملة في حجم الأجهزة وطريقة عملها وتأثيرها المباشر على المجتمع البشري:</span>
          <span className="lang-en">Over more than eight decades, IT transitioned across five major eras, each marking a complete paradigm shift in hardware size, functionality, and societal adoption:</span>
        </p>

        {/* Interactive Eras Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          {erasData.map((item, i) => (
            <button
              key={i}
              onClick={() => handlePickEra(i)}
              className={`p-3 rounded-2xl theme-subpanel border text-center space-y-1 transition group ${
                eraIdx === i ? 'border-blue-500 bg-blue-500/10 font-bold shadow-md ring-1 ring-blue-500/30' : 'hover:border-blue-500/50 opacity-80 hover:opacity-100'
              } ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className="text-2xl block group-hover:scale-110 transition">{item.icon}</span>
              <strong className="block text-slate-200 text-[11px] font-mono">{item.period}</strong>
              <span className="text-[10px] text-sub block line-clamp-1">
                <span className="lang-ar">{item.badge.ar}</span>
                <span className="lang-en">{item.badge.en}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Era Details Dynamic Detailed Card */}
        <div className="p-5 sm:p-6 rounded-2xl theme-subpanel border border-blue-500/40 text-xs sm:text-sm leading-relaxed space-y-4 shadow-md animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{erasData[eraIdx].icon}</span>
              <h4 className="text-base font-black text-blue-400">
                <span className="lang-ar">{erasData[eraIdx].title.ar}</span>
                <span className="lang-en">{erasData[eraIdx].title.en}</span>
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
              {erasData[eraIdx].period}
            </span>
          </div>

          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
            <span className="lang-ar">{erasData[eraIdx].summary.ar}</span>
            <span className="lang-en">{erasData[eraIdx].summary.en}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            {/* Hardware & Infrastructure */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <i className="fa-solid fa-microchip"></i>
                <span className="lang-ar">البنية التحتية والأجهزة (Hardware):</span>
                <span className="lang-en">Hardware & Infrastructure:</span>
              </div>
              <p className="text-sub leading-relaxed">
                <span className="lang-ar">{erasData[eraIdx].hardware.ar}</span>
                <span className="lang-en">{erasData[eraIdx].hardware.en}</span>
              </p>
            </div>

            {/* Societal Impact */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <i className="fa-solid fa-users text-xs"></i>
                <span className="lang-ar">التأثير على المجتمع والأعمال:</span>
                <span className="lang-en">Impact on Society & Business:</span>
              </div>
              <p className="text-sub leading-relaxed">
                <span className="lang-ar">{erasData[eraIdx].impact.ar}</span>
                <span className="lang-en">{erasData[eraIdx].impact.en}</span>
              </p>
            </div>
          </div>

          {/* Key Innovations Bullets */}
          <div className="pt-2 border-t border-slate-800/60">
            <span className="font-bold text-slate-300 block text-xs mb-2">
              <span className="lang-ar">💡 أبرز ابتُكارات وتقنيات هذه الحقبة:</span>
              <span className="lang-en">💡 Key Innovations & Breakthroughs:</span>
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-sub">
              {erasData[eraIdx].keyInnovations.ar.map((inn, idx) => (
                <li key={idx} className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold shrink-0">•</span>
                  <span>
                    <span className="lang-ar">{inn}</span>
                    <span className="lang-en">{erasData[eraIdx].keyInnovations.en[idx]}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full 5-Era Comparison Table (جدول الوزارة ص 5 / p. 6) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-xs sm:text-sm text-amber-400 flex items-center gap-2">
              <i className="fa-solid fa-table-list"></i>
              <span className="lang-ar">جدول المقارنة الشامل للعصور الخمسة (كتاب الوزارة ص 5)</span>
              <span className="lang-en">Comprehensive 5-Era Comparison Table (Textbook p. 6)</span>
            </h4>
            <span className="text-[11px] text-sub">
              <span className="lang-ar">جدول تلخيصي لكتاب الوزارة</span>
              <span className="lang-en">Official Summary Table</span>
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-sm">
            <table className="w-full text-xs text-right dir-rtl min-w-[650px] border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-blue-400 font-bold">
                  <th className="p-3 text-center w-28">
                    <span className="lang-ar">الحقبة الزمنية</span>
                    <span className="lang-en">Time Period</span>
                  </th>
                  <th className="p-3 text-right">
                    <span className="lang-ar">العصر والتقنية الرئيسية</span>
                    <span className="lang-en">Era & Major Technologies</span>
                  </th>
                  <th className="p-3 text-right">
                    <span className="lang-ar">التأثير الأبرز على المجتمع والأعمال</span>
                    <span className="lang-en">Impact on Society & Business</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                {erasData.map((era, i) => (
                  <tr 
                    key={i} 
                    onClick={() => handlePickEra(i)}
                    className={`hover:bg-blue-500/5 transition cursor-pointer ${eraIdx === i ? 'bg-blue-500/10 font-medium' : ''}`}
                  >
                    <td className="p-3 text-center font-mono font-bold text-amber-400 whitespace-nowrap">
                      {era.period}
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-slate-200">
                        <span className="lang-ar">{era.badge.ar}</span>
                        <span className="lang-en">{era.badge.en}</span>
                      </div>
                      <div className="text-[11px] text-sub mt-0.5">
                        <span className="lang-ar">{era.hardware.ar}</span>
                        <span className="lang-en">{era.hardware.en}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sub leading-relaxed">
                      <span className="lang-ar">{era.impact.ar}</span>
                      <span className="lang-en">{era.impact.en}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vacuum Tubes vs Transistor Deep Dive (إضاءة هندسية ص 5 / p. 6) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm space-y-3 shadow-sm">
          <div className="font-bold text-amber-400 flex items-center gap-2 text-sm">
            <i className="fa-solid fa-lightbulb text-amber-400 text-base"></i>
            <span className="lang-ar">إضاءة هندسية من كتاب الوزارة (ص 5): الصمامات المفرغة وحاسوب ENIAC والسيليكون</span>
            <span className="lang-en">Engineering Deep Dive (p. 5): Vacuum Tubes, ENIAC & Silicon Microprocessors</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed text-sub">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5">
              <strong className="text-amber-300 block font-bold">
                <span className="lang-ar">💡 الصمام المفرغ (Vacuum Tube) وحاسوب ENIAC:</span>
                <span className="lang-en">💡 Vacuum Tubes & ENIAC Computer:</span>
              </strong>
              <p>
                <span className="lang-ar">
                  الصمام المفرغ هو لمبة زجاجية مفرغة تُمرر أو تمنع الشحنة الكهربائية لتمثيل <strong>(0)</strong> و <strong>(1)</strong>. 
                  كان حاسوب <strong>ENIAC</strong> أول حاسوب إلكتروني رقمي عام، وكان يزن حوالي <strong>30 طناً</strong>، ويحتل مساحة غرفة كاملة، ويحتوي على أكثر من <strong>18,000 صمام مفرغ</strong> تستهلك طاقة كهربائية هائلة وتنبعث منها حرارة مرتفعة جداً وتتلف باستمرار مما يتطلب استبدالها طوال اليوم.
                </span>
                <span className="lang-en">
                  The Vacuum Tube was an incandescent glass bulb acting as an electronic switch (0 or 1). 
                  The <strong>ENIAC</strong> computer weighed <strong>30 tons</strong>, filled an entire room, and consumed massive electricity to power <strong>18,000 vacuum tubes</strong> that continuously emitted intense heat and frequently burned out.
                </span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5">
              <strong className="text-emerald-400 block font-bold">
                <span className="lang-ar">🔬 ثورة الترانزستور وشريحة السيليكون:</span>
                <span className="lang-en">🔬 Transistor & Silicon Microchip Revolution:</span>
              </strong>
              <p>
                <span className="lang-ar">
                  مع اختراع الترانزستور المصنوع من السيليكون في سبعينيات القرن الماضي، استُبدلت اللمبات الزجاجية الضخمة بمكونات مجهرية متناهية الصغر. 
                  سمح ذلك بدمج الملايين ثم المليارات من الترانزستورات على شريحة دائرة متكاملة واحدة لا تتعدى مساحة ظفر الإبهام، مما أتاح نقل القدرة الحوسبية من السيرفرات العسكرية لغرفة المعيشة وجيب كل إنسان.
                </span>
                <span className="lang-en">
                  With the invention of the silicon transistor in the 1970s, bulky glass bulbs were replaced by microscopic solid-state components. 
                  This enabled embedding millions and billions of transistors onto a single microchip the size of a fingernail, democratizing computing power from military bunkers to everyday home desks and pockets.
                </span>
              </p>
            </div>
          </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                {/* 1. Customer */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-brand-400 block text-xs">
                    <span className="lang-ar">1. العميل الذي يدفع (A customer paying):</span>
                    <span className="lang-en">1. A customer paying:</span>
                  </strong>
                  <div className="text-emerald-400 font-medium">
                    <span className="lang-ar">✓ <strong>ميزة:</strong> السرعة والأمان والراحة وتجنب مخاطر سرقة الكاش.</span>
                    <span className="lang-en">✓ <strong>Benefit:</strong> Speed, convenience, and zero risk of physical cash theft.</span>
                  </div>
                  <div className="text-rose-400 font-medium">
                    <span className="lang-ar">⚠️ <strong>عيب:</strong> الاعتماد التام على شحن الهاتف وشبكات الإنترنت، ومخاطر انقطاع الخدمة.</span>
                    <span className="lang-en">⚠️ <strong>Drawback:</strong> Total dependency on battery power and mobile network connectivity.</span>
                  </div>
                </div>

                {/* 2. Small Shop Owner */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-brand-400 block text-xs">
                    <span className="lang-ar">2. صاحب المتجر الصغير (A small shop owner):</span>
                    <span className="lang-en">2. A small shop owner:</span>
                  </strong>
                  <div className="text-emerald-400 font-medium">
                    <span className="lang-ar">✓ <strong>ميزة:</strong> تسريع الطوابير، جذب الزبائن الجدد، وتقليل خطأ إرجاع الفكة.</span>
                    <span className="lang-en">✓ <strong>Benefit:</strong> Faster checkout queues, attracting tech-savvy users, and zero change errors.</span>
                  </div>
                  <div className="text-rose-400 font-medium">
                    <span className="lang-ar">⚠️ <strong>عيب:</strong> التكلفة المالية لرسوم المعاملات المصرفية وأجهزة ماكينات POS.</span>
                    <span className="lang-en">⚠️ <strong>Drawback:</strong> Transaction fee percentages and hardware POS maintenance costs.</span>
                  </div>
                </div>

                {/* 3. Person without Smartphone/Card */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-brand-400 block text-xs">
                    <span className="lang-ar">3. من لا يملك بطاقة أو هاتفاً ذكياً (No card/phone person):</span>
                    <span className="lang-en">3. A person with no bank card or smartphone:</span>
                  </strong>
                  <div className="text-emerald-400 font-medium">
                    <span className="lang-ar">✓ <strong>ميزة:</strong> التحفيز على الانضمام للشمول المالي والحصول على خدمات رقمية حديثة.</span>
                    <span className="lang-en">✓ <strong>Benefit:</strong> Encourages financial inclusion and access to modern digital banking.</span>
                  </div>
                  <div className="text-rose-400 font-medium">
                    <span className="lang-ar">⚠️ <strong>عيب:</strong> صعوبة الشراء والتهميش الفوري عند غياب أي بديل نقدي ورقي.</span>
                    <span className="lang-en">⚠️ <strong>Drawback:</strong> Severe purchasing friction and digital exclusion if cash is completely banned.</span>
                  </div>
                </div>

                {/* 4. Banks & Government */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-brand-400 block text-xs">
                    <span className="lang-ar">4. البنوك والمؤسسات المالية (Banks & Institutions):</span>
                    <span className="lang-en">4. Banks & Financial Institutions:</span>
                  </strong>
                  <div className="text-emerald-400 font-medium">
                    <span className="lang-ar">✓ <strong>ميزة:</strong> توفير مليارات الجنيهات لتأمين ونقل وطباعة العملات الورقية.</span>
                    <span className="lang-en">✓ <strong>Benefit:</strong> Saves billions in physical currency printing, transport, and vault storage.</span>
                  </div>
                  <div className="text-rose-400 font-medium">
                    <span className="lang-ar">⚠️ <strong>عيب:</strong> تكلفة البنية السيبرانية الضخمة لحماية السيرفرات من الاختراق والإهداء.</span>
                    <span className="lang-en">⚠️ <strong>Drawback:</strong> High cyber-defense expenditure to secure servers against attacks.</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold mt-2 leading-relaxed">
                <span className="lang-ar">⚖️ <strong>القرار الهندسي السليم (كتاب الوزارة ص 10):</strong> لا يمكن لمجتمعنا التحول الكامل بخطوة واحدة فورية لتجنب تهميش الفئات غير الممتلكة للتقنية، بل يجب تقديم مرحلة انتقالية وتوفير خيارات هجينة (Hybrid) مع تخفيض رسوم التجار ودعم كبار السن.</span>
                <span className="lang-en">⚖️ <strong>Engineered Decision (Textbook p. 10):</strong> Society should NOT transition in a single immediate step to prevent digital exclusion. A phased hybrid model with merchant fee subsidies and accessible onboarding is recommended.</span>
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
