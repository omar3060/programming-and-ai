'use client';

import React, { useMemo, useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit3ExamQuestions } from '@/data/unit3ExamQuestions';
import { InstructorBioCard } from '@/components/ui/InstructorBioCard';

type LessonNumber = '3-1' | '3-2' | '3-3';
type Bilingual = { ar: string; en: string };
type Tone = 'violet' | 'cyan' | 'emerald';

const t = (ar: string, en: string): Bilingual => ({ ar, en });

const lessonData: Record<LessonNumber, {
  title: Bilingual;
  shortTitle: Bilingual;
  pages: string;
  tone: Tone;
  icon: string;
  intro: Bilingual;
  objectives: Bilingual[];
  guidingQuestion: Bilingual;
  keyFact: Bilingual;
  sections: Array<{ title: Bilingual; body: Bilingual; points: Bilingual[] }>;
  terms: Array<{ term: Bilingual; definition: Bilingual; icon: string }>;
  activity: { prompt: Bilingual; answer: Bilingual; label: Bilingual };
  cards: Array<{ front: Bilingual; back: Bilingual; icon: string }>;
  takeaway: Bilingual;
}> = {
  '3-1': {
    title: t('البنية العامة لتطبيقات الويب', 'The Overall Structure of Web Applications'),
    shortTitle: t('بنية التطبيق', 'Application architecture'), pages: '50–55', tone: 'violet', icon: 'fa-diagram-project',
    intro: t('من ضغطة زر واحدة إلى نتيجة تظهر على الشاشة: تعرّف كيف تتعاون الواجهة الأمامية والخلفية وقاعدة البيانات داخل تطبيق الويب.', 'From one click to a result on screen: learn how the frontend, backend, and database cooperate inside a web application.'),
    objectives: [
      t('تعرّف تطبيق الويب ومكوّناته الأساسية.', 'Identify a web application and its main components.'),
      t('تتبع رحلة طلب المستخدم عبر الطبقات الثلاث.', 'Trace a user request through the three tiers.'),
      t('توزّع مسؤوليات التطبيق بطريقة تسهّل الصيانة.', 'Assign responsibilities in a maintainable way.')
    ],
    guidingQuestion: t('عندما تضغط «بحث»، كيف تتحول الضغطة إلى بيانات مفيدة تعود إلى الشاشة؟', 'When you press “Search”, how does that click become useful data on the screen?'),
    keyFact: t('تطبيق الويب ليس صفحة فقط؛ إنه نظام متكامل يفصل العرض عن المعالجة عن تخزين البيانات.', 'A web application is not just a page; it separates presentation, processing, and data storage into a complete system.'),
    sections: [
      { title: t('ما تطبيق الويب؟', 'What is a web application?'), body: t('هو تطبيق يصل إليه المستخدم من خلال متصفح الويب. يرسل المتصفح طلبًا إلى الخادم، ثم يستقبل النتيجة ويعرضها دون الحاجة إلى تثبيت برنامج مستقل لكل جهاز.', 'A web application is accessed through a web browser. The browser sends a request to a server, receives a response, and displays it without installing a separate program on every device.'), points: [t('المتصفح هو نقطة التفاعل مع المستخدم.', 'The browser is the user interaction point.'), t('الخادم ينفذ المنطق ويعالج الطلب.', 'The server executes logic and processes the request.'), t('البيانات تبقى منظمة وقابلة للاسترجاع.', 'Data remains organized and retrievable.')] },
      { title: t('الطبقات الثلاث', 'The three tiers'), body: t('تقسيم التطبيق إلى طبقات يجعل لكل جزء مسؤولية واضحة. إذا تغير التصميم لا نضطر إلى إعادة بناء قاعدة البيانات، وإذا تغيرت طريقة التخزين لا تتغير شاشة المستخدم.', 'Dividing an application into tiers gives each part a clear responsibility. A design change does not require rebuilding the database, and a storage change does not have to change the user screen.'), points: [t('Frontend: العرض والإدخال.', 'Frontend: display and input.'), t('Backend: التحقق والمعالجة والقرارات.', 'Backend: validation, processing, and decisions.'), t('Database: التخزين والاسترجاع.', 'Database: storage and retrieval.')] }
    ],
    terms: [
      { term: t('الواجهة الأمامية', 'Frontend'), definition: t('الجزء الذي يراه المستخدم ويتفاعل معه في المتصفح.', 'The part users see and interact with in the browser.'), icon: '🖥️' },
      { term: t('الواجهة الخلفية', 'Backend'), definition: t('الجزء الذي يعمل على الخادم ويطبق قواعد التطبيق.', 'The server-side part that applies application rules.'), icon: '⚙️' },
      { term: t('قاعدة البيانات', 'Database'), definition: t('نظام منظم لتخزين البيانات وإدارتها واسترجاعها.', 'An organized system for storing, managing, and retrieving data.'), icon: '🗄️' }
    ],
    activity: { label: t('فكر كمهندس', 'Think as an Engineer'), prompt: t('صمّم توزيعًا أوليًا لتطبيق حجز عيادة: أين تضع نموذج الحجز؟ وأين تتحقق من الموعد؟ وأين تحفظ الزيارة؟', 'Design a first allocation for a clinic booking app: where does the booking form go, where is the appointment checked, and where is the visit stored?'), answer: t('نموذج الحجز في الواجهة الأمامية، التحقق من توافر الموعد في الواجهة الخلفية، وسجل الزيارة في قاعدة البيانات. هذا الفصل يمنع خلط العرض بالقرارات والبيانات.', 'The booking form belongs to the frontend, availability checking to the backend, and the visit record to the database. This separation prevents presentation, decisions, and data from being mixed.') },
    cards: [
      { icon: '🖥️', front: t('ماذا تفعل الواجهة الأمامية؟', 'What does the frontend do?'), back: t('تعرض المحتوى وتجمع إدخال المستخدم.', 'It displays content and collects user input.') },
      { icon: '⚙️', front: t('ماذا تفعل الواجهة الخلفية؟', 'What does the backend do?'), back: t('تتحقق وتعالج الطلبات وتتخذ القرارات.', 'It validates, processes requests, and makes decisions.') },
      { icon: '🗄️', front: t('ماذا تفعل قاعدة البيانات؟', 'What does the database do?'), back: t('تخزن السجلات وتسترجعها عند الحاجة.', 'It stores records and retrieves them when needed.') },
      { icon: '🔁', front: t('ما اتجاه رحلة الطلب؟', 'What is the request journey?'), back: t('طلب إلى الخادم، ثم بيانات تعود إلى المتصفح.', 'A request goes to the server, then data returns to the browser.') }
    ],
    takeaway: t('الواجهة الأمامية تعرض وتجمع، والخلفية تتحقق وتعالج، وقاعدة البيانات تخزن وتسترجع.', 'The frontend displays and collects, the backend validates and processes, and the database stores and retrieves.')
  },
  '3-2': {
    title: t('طرق الاتصال في تطبيقات الويب', 'Web Application Communication Methods'),
    shortTitle: t('الاتصال والطلبات', 'Communication & requests'), pages: '56–61', tone: 'cyan', icon: 'fa-right-left',
    intro: t('افهم لغة الحوار بين العميل والخادم: الطلب، الاستجابة، HTTP، طرق GET وPOST، ورموز الحالة التي تخبرك بما حدث.', 'Understand the conversation between client and server: requests, responses, HTTP, GET and POST, and status codes that explain what happened.'),
    objectives: [t('تشرح نموذج Client/Server.', 'Explain the Client/Server model.'), t('تفرق بين GET وPOST وتختار المناسب.', 'Differentiate GET and POST and choose appropriately.'), t('تفسر رموز HTTP الأساسية.', 'Interpret basic HTTP status codes.')],
    guidingQuestion: t('كيف يعرف المتصفح أن الطلب نجح، أو أن الصفحة غير موجودة، أو أن الخادم واجه مشكلة؟', 'How does a browser know whether a request succeeded, a page is missing, or the server has a problem?'),
    keyFact: t('الاتصال الناجح ليس إرسالًا فقط؛ إنه دورة طلب واستجابة تحمل بيانات ورمز حالة.', 'Successful communication is not only sending; it is a request–response cycle carrying data and a status code.'),
    sections: [
      { title: t('نموذج العميل والخادم', 'The Client/Server model'), body: t('يرسل العميل (غالبًا المتصفح) طلبًا إلى الخادم. يقرأ الخادم الطلب، ينفذ المعالجة المطلوبة، ثم يعيد استجابة تحتوي على بيانات أو رسالة خطأ.', 'The client, usually a browser, sends a request to a server. The server reads it, performs the required processing, and returns a response containing data or an error message.'), points: [t('Request: الطريقة والعنوان والبيانات.', 'Request: method, address, and data.'), t('Response: النتيجة ورمز الحالة.', 'Response: result and status code.'), t('HTTP: القواعد المنظمة للحوار.', 'HTTP: rules that organize the conversation.')] },
      { title: t('اختيار طريقة الطلب', 'Choosing a request method'), body: t('تستخدم GET عادة لجلب البيانات، بينما تستخدم POST لإرسال بيانات إلى الخادم لإنشاء أو تنفيذ عملية. الاختيار الصحيح يجعل التطبيق أوضح وأكثر أمانًا.', 'GET is usually used to retrieve data, while POST sends data to the server to create or perform an operation. The right choice makes an application clearer and safer.'), points: [t('GET لقراءة مورد.', 'GET to read a resource.'), t('POST لإرسال بيانات أو إنشاء مورد.', 'POST to send data or create a resource.'), t('HTTPS لحماية البيانات أثناء النقل.', 'HTTPS to protect data in transit.')] }
    ],
    terms: [
      { term: t('HTTP', 'HTTP'), definition: t('بروتوكول ينظم تبادل الطلبات والاستجابات على الويب.', 'A protocol that organizes web requests and responses.'), icon: '↔️' },
      { term: t('GET / POST', 'GET / POST'), definition: t('طريقتان شائعتان لجلب البيانات أو إرسالها.', 'Two common methods for retrieving or sending data.'), icon: '📨' },
      { term: t('رمز الحالة', 'Status code'), definition: t('رقم مختصر يوضح نتيجة الطلب مثل 200 أو 404.', 'A short number describing the result, such as 200 or 404.'), icon: '🔢' }
    ],
    activity: { label: t('حلّل الاستجابة', 'Analyse the response'), prompt: t('طلبت صفحة منتج فعاد الرمز 404. ماذا يعني؟ وما الفرق بينه وبين 500؟', 'You requested a product page and received 404. What does it mean, and how is it different from 500?'), answer: t('404 يعني أن المورد المطلوب غير موجود. أما 500 فيشير إلى مشكلة داخل الخادم أثناء معالجة طلب صحيح.', '404 means the requested resource was not found. 500 indicates a server-side problem while processing a valid request.') },
    cards: [
      { icon: '📤', front: t('ما هو Request؟', 'What is a request?'), back: t('رسالة يرسلها العميل طالبًا موردًا أو عملية.', 'A message the client sends asking for a resource or operation.') },
      { icon: '📥', front: t('ما هو Response؟', 'What is a response?'), back: t('رسالة الخادم التي تحمل النتيجة ورمز الحالة.', 'The server message carrying the result and status code.') },
      { icon: '✅', front: t('ماذا يعني 200؟', 'What does 200 mean?'), back: t('نجح الطلب وأعيدت النتيجة.', 'The request succeeded and a result was returned.') },
      { icon: '🔒', front: t('لماذا HTTPS؟', 'Why HTTPS?'), back: t('لتشفير البيانات وحمايتها أثناء النقل.', 'To encrypt and protect data in transit.') }
    ],
    takeaway: t('افهم الطريقة والبيانات ورمز الحالة، وستستطيع قراءة حوار العميل والخادم بدل تخمينه.', 'Understand the method, data, and status code to read the client–server conversation instead of guessing.')
  },
  '3-3': {
    title: t('أساسيات تكنولوجيا الواجهة الأمامية', 'Frontend Technology Fundamentals'),
    shortTitle: t('الواجهة الأمامية', 'Frontend technology'), pages: '62–67', tone: 'emerald', icon: 'fa-code',
    intro: t('ابنِ واجهة مفهومة وقابلة للاستخدام: HTML للهيكل، CSS للمظهر، JavaScript للسلوك، مع الدلالية والاستجابة لمختلف الشاشات.', 'Build a clear, usable interface: HTML for structure, CSS for appearance, JavaScript for behaviour, plus semantics and responsive design.'),
    objectives: [t('توضح أدوار HTML وCSS وJavaScript.', 'Explain the roles of HTML, CSS, and JavaScript.'), t('تستخدم العناصر الدلالية لتنظيم الصفحة.', 'Use semantic elements to organize a page.'), t('تربط التصميم المتجاوب بتجربة المستخدم.', 'Relate responsive design to user experience.')],
    guidingQuestion: t('كيف تتحول صفحة ثابتة إلى تجربة واضحة ومتجاوبة تتفاعل مع المستخدم؟', 'How does a static page become a clear, responsive experience that reacts to its user?'),
    keyFact: t('HTML تبني المعنى، CSS تنظم الشكل، وJavaScript تضيف السلوك؛ فصل الأدوار يجعل التطوير أسهل.', 'HTML builds meaning, CSS shapes appearance, and JavaScript adds behaviour; separating roles makes development easier.'),
    sections: [
      { title: t('ثلاثية الواجهة', 'The frontend trio'), body: t('تحدد HTML محتوى الصفحة وهيكلها، وتتحكم CSS في الألوان والمسافات والتخطيط، وتستجيب JavaScript للأحداث مثل الضغط والكتابة وتحديث المحتوى.', 'HTML defines page content and structure, CSS controls colour, spacing, and layout, and JavaScript responds to events such as clicks and typing to update content.'), points: [t('HTML = Structure', 'HTML = Structure'), t('CSS = Presentation', 'CSS = Presentation'), t('JavaScript = Behaviour', 'JavaScript = Behaviour')] },
      { title: t('واجهة جيدة لكل مستخدم', 'An interface for every user'), body: t('تستخدم العناصر الدلالية مثل header وnav وmain وfooter لتوضيح المعنى، ويجعل التصميم المتجاوب التخطيط مناسبًا للهاتف والحاسوب.', 'Semantic elements such as header, nav, main, and footer clarify meaning, while responsive design adapts the layout to phones and computers.'), points: [t('دلالية أفضل لقارئات الشاشة.', 'Better semantics for screen readers.'), t('تخطيط مرن للأحجام المختلفة.', 'Flexible layout for different sizes.'), t('تفاعل واضح لا يعتمد على اللون وحده.', 'Clear interaction not relying on colour alone.')] }
    ],
    terms: [
      { term: t('HTML', 'HTML'), definition: t('لغة ترميز تبني هيكل ومحتوى الصفحة.', 'A markup language that builds page structure and content.'), icon: '🧱' },
      { term: t('CSS', 'CSS'), definition: t('لغة تنسيق تتحكم في مظهر وتخطيط العناصر.', 'A styling language controlling appearance and layout.'), icon: '🎨' },
      { term: t('JavaScript', 'JavaScript'), definition: t('لغة برمجة تضيف السلوك والتفاعل للصفحة.', 'A programming language adding behaviour and interaction.'), icon: '⚡' }
    ],
    activity: { label: t('صمّم كمهندس', 'Design as an Engineer'), prompt: t('صفحة نادي طلابي تحتاج عنوانًا وقائمة فعاليات وزرًا يزيد عدد المشتركين. كيف تفصل HTML وCSS وJavaScript؟', 'A student club page needs a heading, an event list, and a button that increments subscribers. How do you separate HTML, CSS, and JavaScript?'), answer: t('تنظم HTML العنوان والقائمة والزر، تنسق CSS الألوان والتخطيط والاستجابة، وتلتقط JavaScript الضغط وتزيد العداد وتحدّث النص.', 'HTML structures the heading, list, and button; CSS styles colours, layout, and responsiveness; JavaScript handles the click, increments the counter, and updates the text.') },
    cards: [
      { icon: '🧱', front: t('HTML مسؤولة عن ماذا؟', 'What is HTML responsible for?'), back: t('الهيكل والمحتوى والمعنى.', 'Structure, content, and meaning.') },
      { icon: '🎨', front: t('CSS مسؤولة عن ماذا؟', 'What is CSS responsible for?'), back: t('المظهر والتخطيط والاستجابة.', 'Appearance, layout, and responsiveness.') },
      { icon: '⚡', front: t('JavaScript مسؤولة عن ماذا؟', 'What is JavaScript responsible for?'), back: t('الأحداث والسلوك والتحديث التفاعلي.', 'Events, behaviour, and interactive updates.') },
      { icon: '📱', front: t('ما التصميم المتجاوب؟', 'What is responsive design?'), back: t('تخطيط يتكيف مع حجم الجهاز وطريقة الاستخدام.', 'A layout that adapts to device size and use.') }
    ],
    takeaway: t('افصل الهيكل عن المظهر عن السلوك، وأضف الدلالية والاستجابة لتصنع واجهة أفضل.', 'Separate structure, appearance, and behaviour, then add semantics and responsiveness for a better interface.')
  }
};

function Bilingual({ value }: { value: Bilingual }) {
  return <><span className="lang-ar">{value.ar}</span><span className="lang-en">{value.en}</span></>;
}

const toneStyles: Record<Tone, { text: string; border: string; soft: string; strong: string; icon: string }> = {
  violet: { text: 'text-violet-400', border: 'border-violet-500/30', soft: 'bg-violet-500/10', strong: 'bg-violet-600 hover:bg-violet-500', icon: 'bg-violet-500/20' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/30', soft: 'bg-cyan-500/10', strong: 'bg-cyan-600 hover:bg-cyan-500', icon: 'bg-cyan-500/20' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30', soft: 'bg-emerald-500/10', strong: 'bg-emerald-600 hover:bg-emerald-500', icon: 'bg-emerald-500/20' }
};

function ArchitectureLab({ tone, playSfx }: { tone: Tone; playSfx: (sound: 'click' | 'success' | 'error') => void }) {
  const [step, setStep] = useState(0);
  const style = toneStyles[tone];
  const nodes = [t('المتصفح', 'Browser'), t('الواجهة الأمامية', 'Frontend'), t('الواجهة الخلفية', 'Backend'), t('قاعدة البيانات', 'Database')];
  const explanations = [
    t('يكتب المستخدم كلمة البحث ويضغط الزر.', 'The user types a search term and presses the button.'),
    t('تجمع الواجهة الأمامية الإدخال وترسل طلبًا.', 'The frontend collects the input and sends a request.'),
    t('يتحقق الخادم من الطلب ويحدد البيانات المطلوبة.', 'The server validates the request and determines the needed data.'),
    t('تُسترجع النتائج ثم تعود الاستجابة إلى المتصفح.', 'Results are retrieved and the response returns to the browser.')
  ];
  return <section className={`theme-panel border ${style.border} rounded-3xl p-5 sm:p-7 shadow-xl space-y-5`}>
    <div className="flex items-start justify-between gap-3"><div><p className={`${style.text} text-[11px] font-bold uppercase tracking-wider`}><span className="lang-ar">محاكاة رحلة الطلب</span><span className="lang-en">Request journey simulator</span></p><h3 className="text-lg sm:text-xl font-black mt-1"><span className="lang-ar">اتبع البحث خطوة بخطوة</span><span className="lang-en">Follow a search step by step</span></h3></div><span className={`w-10 h-10 rounded-2xl ${style.icon} ${style.text} grid place-items-center`}><i className="fa-solid fa-route" /></span></div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{nodes.map((node, index) => <button key={node.en} onClick={() => { playSfx('click'); setStep(index); }} className={`relative p-3 rounded-2xl border text-center transition ${index === step ? `${style.soft} ${style.border} ${style.text}` : 'theme-subpanel border-slate-700 text-sub hover:border-slate-500'}`}><span className="block text-xl mb-1">{['👤', '🖥️', '⚙️', '🗄️'][index]}</span><span className="text-[11px] font-bold"><Bilingual value={node} /></span>{index < nodes.length - 1 && <span className="hidden md:block absolute -right-3 top-1/2 text-slate-500 z-10">→</span>}</button>)}</div>
    <div className={`${style.soft} border ${style.border} rounded-2xl p-4 flex gap-3 items-start`}><span className={`${style.text} text-lg`}>0{step + 1}</span><p className="text-sm leading-relaxed"><Bilingual value={explanations[step]} /></p></div>
    <button onClick={() => { playSfx(step === 3 ? 'success' : 'click'); setStep(current => current === 3 ? 0 : current + 1); }} className={`${style.strong} text-white rounded-xl px-4 py-2.5 text-xs font-bold transition`}><i className="fa-solid fa-forward-step me-2" /><span className="lang-ar">{step === 3 ? 'أعد الرحلة' : 'الخطوة التالية'}</span><span className="lang-en">{step === 3 ? 'Restart journey' : 'Next step'}</span></button>
  </section>;
}

function CommunicationLab({ playSfx }: { playSfx: (sound: 'click' | 'success' | 'error') => void }) {
  const [method, setMethod] = useState<'GET' | 'POST'>('GET');
  const [status, setStatus] = useState<200 | 404 | 500>(200);
  const statuses = { 200: t('نجح الطلب: أعاد الخادم البيانات.', 'Success: the server returned data.'), 404: t('المورد غير موجود في هذا العنوان.', 'The resource was not found at this address.'), 500: t('حدث خطأ داخل الخادم أثناء المعالجة.', 'A server error occurred during processing.') };
  return <section className="theme-panel border border-cyan-500/30 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"><div className="flex items-start justify-between gap-3"><div><p className="text-cyan-400 text-[11px] font-bold uppercase tracking-wider"><span className="lang-ar">محاكي الاتصال</span><span className="lang-en">Communication simulator</span></p><h3 className="text-lg sm:text-xl font-black mt-1"><span className="lang-ar">كوّن طلبًا واقرأ الاستجابة</span><span className="lang-en">Build a request and read the response</span></h3></div><span className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 grid place-items-center"><i className="fa-solid fa-arrow-right-arrow-left" /></span></div><div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-stretch"><div className="theme-subpanel border rounded-2xl p-4 space-y-3"><p className="text-xs font-bold text-cyan-400"><span className="lang-ar">الطلب Request</span><span className="lang-en">Request</span></p><div className="flex gap-2">{(['GET', 'POST'] as const).map(item => <button key={item} onClick={() => { playSfx('click'); setMethod(item); }} className={`px-4 py-2 rounded-lg border font-mono text-xs font-bold transition ${method === item ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300' : 'border-slate-700 text-sub'}`}>{item}</button>)}</div><code className="block rounded-xl bg-slate-950/70 p-3 text-[11px] text-emerald-300">{method} /api/lessons/3</code></div><div className="grid place-items-center text-cyan-400 text-xl"><i className="fa-solid fa-arrow-right-arrow-left" /></div><div className="theme-subpanel border rounded-2xl p-4 space-y-3"><p className="text-xs font-bold text-cyan-400"><span className="lang-ar">الاستجابة Response</span><span className="lang-en">Response</span></p><div className="flex gap-2 flex-wrap">{([200, 404, 500] as const).map(item => <button key={item} onClick={() => { playSfx('click'); setStatus(item); }} className={`px-3 py-2 rounded-lg border font-mono text-xs font-bold transition ${status === item ? (item === 200 ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300' : 'border-rose-400 bg-rose-500/20 text-rose-300') : 'border-slate-700 text-sub'}`}>{item}</button>)}</div><p className="text-xs leading-relaxed text-sub"><Bilingual value={statuses[status]} /></p></div></div><div className={`rounded-2xl p-3 border text-xs ${status === 200 ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-rose-500/30 bg-rose-500/10 text-rose-300'}`}><i className={`fa-solid ${status === 200 ? 'fa-circle-check' : 'fa-triangle-exclamation'} me-2`} /><span className="lang-ar">{method === 'GET' ? 'GET مناسب لجلب بيانات الدرس.' : 'POST مناسب لإرسال بيانات جديدة.'}</span><span className="lang-en">{method === 'GET' ? 'GET is suitable for retrieving lesson data.' : 'POST is suitable for sending new data.'}</span></div></section>;
}

function FrontendLab({ playSfx }: { playSfx: (sound: 'click' | 'success' | 'error') => void }) {
  const [query, setQuery] = useState('');
  const [subscribers, setSubscribers] = useState(12);
  const books = [t('HTML: هيكل الصفحة', 'HTML: page structure'), t('CSS: تنسيق التصميم', 'CSS: visual styling'), t('JavaScript: سلوك الصفحة', 'JavaScript: page behaviour')];
  const visibleBooks = books.filter(book => `${book.ar} ${book.en}`.toLowerCase().includes(query.toLowerCase()));
  return <section className="theme-panel border border-emerald-500/30 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"><div className="flex items-start justify-between gap-3"><div><p className="text-emerald-400 text-[11px] font-bold uppercase tracking-wider"><span className="lang-ar">مختبر الواجهة الأمامية</span><span className="lang-en">Frontend lab</span></p><h3 className="text-lg sm:text-xl font-black mt-1"><span className="lang-ar">غيّر الهيكل والمظهر والسلوك</span><span className="lang-en">Change structure, style, and behaviour</span></h3></div><span className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 grid place-items-center"><i className="fa-solid fa-code" /></span></div><div className="grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-4"><div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 font-mono text-xs leading-7"><div className="text-rose-300">&lt;main&gt;</div><div className="text-emerald-300 ps-4">&lt;h1&gt;Events&lt;/h1&gt;</div><div className="text-cyan-300 ps-4">&lt;button&gt;Join&lt;/button&gt;</div><div className="text-amber-300">&lt;/main&gt;</div><div className="border-t border-slate-800 mt-3 pt-3 font-sans text-sub text-[11px] leading-relaxed"><span className="lang-ar">HTML يبني. CSS يجمّل. JavaScript يتفاعل.</span><span className="lang-en">HTML builds. CSS styles. JavaScript reacts.</span></div></div><div className="rounded-2xl bg-white text-slate-900 border border-emerald-300 p-4 space-y-3"><div className="flex items-center justify-between"><strong className="text-sm"><span className="lang-ar">معاينة تفاعلية</span><span className="lang-en">Interactive preview</span></strong><span className="text-[10px] rounded-full bg-emerald-100 text-emerald-700 px-2 py-1">RESPONSIVE</span></div><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Filter technologies..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-400" /><div className="space-y-1.5 min-h-[80px]">{visibleBooks.length ? visibleBooks.map(book => <div key={book.en} className="rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 text-xs"><Bilingual value={book} /></div>) : <p className="text-xs text-slate-500 py-3"><span className="lang-ar">لا توجد نتائج.</span><span className="lang-en">No results.</span></p>}</div><button onClick={() => { playSfx('success'); setSubscribers(value => value + 1); }} className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-2 text-xs font-bold transition"><i className="fa-solid fa-user-plus me-2" /><span className="lang-ar">اشترك الآن ({subscribers})</span><span className="lang-en">Join now ({subscribers})</span></button></div></div></section>;
}

export function Lesson3({ lesson }: { lesson: LessonNumber }) {
  const { playSfx } = useApp();
  const data = lessonData[lesson];
  const style = toneStyles[data.tone];
  const [openActivity, setOpenActivity] = useState(false);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const questions = useMemo(() => unit3ExamQuestions.filter(question => question.lesson.en === `Lesson ${lesson}`).slice(0, 10), [lesson]);
  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce((total, question, index) => total + (answers[index] === question.a ? 1 : 0), 0);
  const selectAnswer = (index: number, option: number, correct: number) => {
    if (answers[index] !== undefined) return;
    playSfx(option === correct ? 'success' : 'error');
    setAnswers(current => ({ ...current, [index]: option }));
  };

  return <div id={`view-lesson-${lesson}`} className="lesson-view space-y-7 animate-fadeIn pb-14">
    <InstructorBioCard />
    <header className={`theme-panel border ${style.border} rounded-[2rem] overflow-hidden shadow-xl`}>
      <div className={`h-1.5 ${style.strong}`} />
      <div className="p-5 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="max-w-3xl space-y-3"><div className="flex flex-wrap items-center gap-2"><span className={`${style.soft} ${style.text} border ${style.border} rounded-full px-3 py-1.5 text-[11px] font-bold`}><i className={`fa-solid ${data.icon} me-2`} /><span className="lang-ar">الوحدة 3 • الدرس {lesson} • ص {data.pages}</span><span className="lang-en">Unit 3 • Lesson {lesson} • pp. {data.pages}</span></span><span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-3 py-1.5 text-[11px] font-bold"><Bilingual value={data.shortTitle} /></span></div><h1 className="text-2xl sm:text-4xl font-black tracking-tight"><Bilingual value={data.title} /></h1><p className="text-sub text-sm sm:text-base leading-8"><Bilingual value={data.intro} /></p></div><div className={`hidden lg:grid place-items-center w-28 h-28 rounded-[2rem] ${style.soft} ${style.text} border ${style.border} shrink-0`}><i className={`fa-solid ${data.icon} text-4xl`} /></div></div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-4">
          <div className="theme-subpanel border rounded-2xl p-4"><p className={`${style.text} text-xs font-black mb-3`}><i className="fa-solid fa-bullseye me-2" /><span className="lang-ar">ناتج التعلم في هذا الدرس</span><span className="lang-en">Learning outcomes</span></p><div className="grid sm:grid-cols-3 gap-2">{data.objectives.map((objective, index) => <div key={objective.en} className="flex gap-2 text-xs text-sub leading-relaxed"><span className={`${style.text} font-black`}>0{index + 1}</span><Bilingual value={objective} /></div>)}</div></div>
          <div className="rounded-2xl p-4 bg-amber-500/10 border border-amber-500/30"><p className="text-amber-400 text-xs font-black mb-2"><i className="fa-solid fa-circle-question me-2" /><span className="lang-ar">السؤال التوجيهي</span><span className="lang-en">Guiding question</span></p><p className="text-sm leading-relaxed"><Bilingual value={data.guidingQuestion} /></p></div>
        </div>
      </div>
    </header>

    <nav className="theme-panel border rounded-2xl p-3 shadow-lg" aria-label="Lesson sections"><div className="flex flex-wrap items-center gap-2 text-[11px] font-bold"><span className={`${style.text} px-2`}><i className="fa-solid fa-map me-1" /><span className="lang-ar">خريطة الدرس</span><span className="lang-en">Lesson map</span></span>{[t('المفهوم', 'Concept'), t('المحاكاة', 'Lab'), t('النشاط', 'Activity'), t('المراجعة', 'Review'), t('التقييم', 'Quiz')].map((item, index) => <span key={item.en} className="text-sub flex items-center gap-2"><span className={`${style.soft} ${style.text} rounded-full w-5 h-5 grid place-items-center`}>{index + 1}</span><Bilingual value={item} />{index < 4 && <i className="fa-solid fa-chevron-left text-[8px] opacity-40" />}</span>)}</div></nav>

    <section className={`rounded-3xl border ${style.border} ${style.soft} p-5 sm:p-7 shadow-lg`}><div className="flex gap-4 items-start"><span className={`w-11 h-11 rounded-2xl ${style.icon} ${style.text} grid place-items-center text-lg shrink-0`}><i className="fa-solid fa-lightbulb" /></span><div><p className={`${style.text} text-xs font-black uppercase tracking-wider mb-1`}><span className="lang-ar">الفكرة التي يجب أن تخرج بها</span><span className="lang-en">The idea to take away</span></p><p className="text-base sm:text-lg font-bold leading-relaxed"><Bilingual value={data.keyFact} /></p></div></div></section>

    <section className="theme-panel border rounded-3xl p-5 sm:p-7 shadow-xl space-y-6"><div className="flex items-end justify-between gap-3 border-b border-slate-800 pb-4"><div><p className={`${style.text} text-[11px] font-bold uppercase tracking-wider`}><span className="lang-ar">أولًا · من الكتاب</span><span className="lang-en">First · From the textbook</span></p><h2 className="text-xl sm:text-2xl font-black mt-1"><span className="lang-ar">افهم الفكرة قبل أن تحفظ المصطلح</span><span className="lang-en">Understand the idea before memorising the term</span></h2></div><i className={`fa-solid fa-book-open ${style.text} text-2xl`} /></div>{data.sections.map((section, index) => <article key={section.title.en} className="grid grid-cols-1 lg:grid-cols-[11rem_1fr] gap-4"><div><span className={`${style.soft} ${style.text} rounded-xl px-3 py-2 inline-flex text-xs font-black`}>0{index + 1} · <Bilingual value={section.title} /></span></div><div className="space-y-3"><p className="text-sm text-sub leading-8">{<Bilingual value={section.body} />}</p><div className="grid sm:grid-cols-3 gap-2">{section.points.map(point => <div key={point.en} className="theme-subpanel border rounded-xl p-3 text-xs leading-relaxed"><i className={`fa-solid fa-check ${style.text} me-2`} /><Bilingual value={point} /></div>)}</div></div></article>)}</section>

    <section className="theme-panel border rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"><div className="flex items-center justify-between"><div><p className={`${style.text} text-[11px] font-bold uppercase tracking-wider`}><span className="lang-ar">قاموس الدرس</span><span className="lang-en">Lesson glossary</span></p><h2 className="text-xl font-black mt-1"><span className="lang-ar">مصطلحات لا تختلط عليك</span><span className="lang-en">Terms you should not confuse</span></h2></div><i className={`fa-solid fa-tags ${style.text} text-2xl`} /></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3">{data.terms.map(term => <div key={term.term.en} className="theme-subpanel border rounded-2xl p-4 hover:-translate-y-0.5 transition"><span className="text-2xl">{term.icon}</span><h3 className={`${style.text} font-black text-sm mt-2`}><Bilingual value={term.term} /></h3><p className="text-xs text-sub leading-relaxed mt-2"><Bilingual value={term.definition} /></p></div>)}</div></section>

    {lesson === '3-1' && <ArchitectureLab tone={data.tone} playSfx={playSfx} />}
    {lesson === '3-2' && <CommunicationLab playSfx={playSfx} />}
    {lesson === '3-3' && <FrontendLab playSfx={playSfx} />}

    <section className="theme-panel border border-amber-500/30 rounded-3xl p-5 sm:p-7 shadow-xl"><button onClick={() => { playSfx('click'); setOpenActivity(value => !value); }} className="w-full flex items-center justify-between gap-3 text-start"><span className="flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 grid place-items-center"><i className="fa-solid fa-pen-ruler" /></span><span><span className="block text-amber-400 text-[11px] font-bold uppercase tracking-wider"><Bilingual value={data.activity.label} /></span><strong className="block text-base mt-1"><span className="lang-ar">نشاط كتابي بإجابة نموذجية</span><span className="lang-en">Textbook-style activity with model answer</span></strong></span></span><i className={`fa-solid fa-chevron-down text-sub transition-transform ${openActivity ? 'rotate-180' : ''}`} /></button>{openActivity && <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-3 items-stretch animate-fadeIn"><div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 text-sm leading-7"><p className="text-amber-400 text-xs font-black mb-2"><span className="lang-ar">المطلوب</span><span className="lang-en">Challenge</span></p><Bilingual value={data.activity.prompt} /></div><div className="grid place-items-center text-amber-400"><i className="fa-solid fa-arrow-right-arrow-left" /></div><div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm leading-7"><p className="text-emerald-400 text-xs font-black mb-2"><span className="lang-ar">الإجابة النموذجية</span><span className="lang-en">Model answer</span></p><Bilingual value={data.activity.answer} /></div></div>}</section>

    <section className="theme-panel border rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"><div className="flex items-center justify-between"><div><p className={`${style.text} text-[11px] font-bold uppercase tracking-wider`}><span className="lang-ar">مراجعة نشطة</span><span className="lang-en">Active review</span></p><h2 className="text-xl font-black mt-1"><span className="lang-ar">اقلب البطاقة واختبر ذاكرتك</span><span className="lang-en">Flip a card and test your memory</span></h2></div><i className={`fa-solid fa-clone ${style.text} text-2xl`} /></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{data.cards.map((card, index) => <button key={card.front.en} onClick={() => { playSfx('click'); setFlipped(current => ({ ...current, [index]: !current[index] })); }} className={`min-h-[155px] rounded-2xl border p-4 text-start transition-all hover:-translate-y-1 ${flipped[index] ? `${style.soft} ${style.border}` : 'theme-subpanel border-slate-700 hover:border-slate-500'}`}><span className="text-3xl block mb-4">{card.icon}</span>{flipped[index] ? <p className="text-xs leading-6"><Bilingual value={card.back} /></p> : <><strong className="block text-sm leading-6"><Bilingual value={card.front} /></strong><span className="block text-[10px] text-sub mt-3"><span className="lang-ar">اضغط للقلب ↻</span><span className="lang-en">Tap to flip ↻</span></span></>}</button>)}</div></section>

    <section className="theme-panel border rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"><div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3"><div><p className="text-rose-400 text-[11px] font-bold uppercase tracking-wider"><span className="lang-ar">تحقق من فهمك</span><span className="lang-en">Check your understanding</span></p><h2 className="text-xl font-black mt-1"><span className="lang-ar">اختبار قصير · 10 أسئلة</span><span className="lang-en">Quick quiz · 10 questions</span></h2></div><div className="text-xs text-sub">{answeredCount}/10 <span className="lang-ar">تمت الإجابة</span><span className="lang-en">answered</span></div></div><div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className="h-full bg-gradient-to-r from-rose-500 to-violet-500 transition-all" style={{ width: `${answeredCount * 10}%` }} /></div><div className="space-y-3">{questions.map((question, index) => { const selected = answers[index]; const done = selected !== undefined; return <div key={`${question.q.en}-${index}`} className={`rounded-2xl border p-4 transition ${done ? (selected === question.a ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-rose-500/30 bg-rose-500/5') : 'theme-subpanel border-slate-700'}`}><div className="flex gap-3"><span className="w-7 h-7 rounded-lg bg-slate-800 text-xs grid place-items-center font-black shrink-0">{index + 1}</span><div className="flex-1"><p className="text-sm font-bold leading-6"><Bilingual value={question.q} /></p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">{question.opts.ar.map((option, optionIndex) => <button key={`${option}-${optionIndex}`} disabled={done} onClick={() => selectAnswer(index, optionIndex, question.a)} className={`text-start rounded-xl border px-3 py-2.5 text-xs transition ${selected === optionIndex ? (selected === question.a ? 'border-emerald-400 bg-emerald-500/15 text-emerald-300' : 'border-rose-400 bg-rose-500/15 text-rose-300') : 'border-slate-700 hover:border-slate-500'} ${done && optionIndex === question.a ? 'border-emerald-400/70 bg-emerald-500/10' : ''}`}><span className="lang-ar">{option}</span><span className="lang-en">{question.opts.en[optionIndex]}</span></button>)}</div>{done && <p className={`mt-3 text-xs leading-relaxed ${selected === question.a ? 'text-emerald-400' : 'text-rose-400'}`}><i className={`fa-solid ${selected === question.a ? 'fa-circle-check' : 'fa-circle-xmark'} me-2`} /><Bilingual value={question.exp} /></p>}</div></div></div>; })}</div>{answeredCount === 10 && <div className="rounded-2xl bg-violet-500/10 border border-violet-500/30 p-5 text-center animate-fadeIn"><p className="text-2xl font-black text-violet-300">{score}/10</p><p className="text-sm mt-1"><span className="lang-ar">أحسنت! راجع الإجابات الخاطئة قبل الانتقال للاختبار الشامل.</span><span className="lang-en">Well done! Review incorrect answers before taking the unit exam.</span></p></div>}<button disabled={answeredCount < 10} onClick={() => setShowQuizResult(value => !value)} className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${answeredCount === 10 ? 'bg-violet-600 hover:bg-violet-500 text-white' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}><span className="lang-ar">{showQuizResult ? 'إخفاء النتيجة' : 'عرض تقييم المحاولة'}</span><span className="lang-en">{showQuizResult ? 'Hide attempt review' : 'Show attempt review'}</span></button>{showQuizResult && <p className="text-xs text-sub"><span className="lang-ar">الدرجة تقيس فهمك الحالي، وليست بديلًا عن قراءة التفسير.</span><span className="lang-en">This score measures your current understanding; it is not a replacement for reading the explanations.</span></p>}</section>

    <section className={`rounded-3xl border ${style.border} ${style.soft} p-5 sm:p-7`}><div className="flex gap-4 items-start"><span className={`text-2xl ${style.text}`}>★</span><div><p className={`${style.text} text-xs font-black uppercase tracking-wider mb-2`}><span className="lang-ar">الخلاصة والتحدي</span><span className="lang-en">Takeaway & challenge</span></p><p className="font-bold leading-7"><Bilingual value={data.takeaway} /></p><p className="text-sub text-xs leading-6 mt-3"><span className="lang-ar">تحدَّ نفسك: اشرح الفكرة لشخص آخر باستخدام مثال من تطبيق تستخدمه يوميًا.</span><span className="lang-en">Challenge yourself: explain the idea to someone else using an example from an app you use every day.</span></p></div></div></section>
  </div>;
}
