import { Question } from '../types';

export const unit3ExamQuestions: Question[] = [
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'ما الطبقة التي يراها المستخدم ويتفاعل معها مباشرة؟', en: 'Which tier is seen and directly used by the user?' },
    opts: { ar: ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات', 'الخادم فقط'], en: ['Frontend', 'Backend', 'Database', 'Server only'] },
    a: 0,
    exp: { ar: 'الواجهة الأمامية هي مكوّن الشاشة الذي يراه المستخدم ويتفاعل معه مباشرة.', en: 'The frontend is the screen component users see and interact with directly.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'أين تتم معالجة الطلبات واتخاذ القرارات؟', en: 'Where are requests processed and decisions made?' },
    opts: { ar: ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات', 'صفحة العرض'], en: ['Frontend', 'Backend', 'Database', 'Display page'] },
    a: 1,
    exp: { ar: 'الواجهة الخلفية تنفذ المعالجة من جانب الخادم وتتخذ القرارات.', en: 'The backend performs server-side processing and makes decisions.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'ما وظيفة قاعدة البيانات؟', en: 'What is the role of a database?' },
    opts: { ar: ['عرض الشاشات', 'تنظيم البيانات وتخزينها وإدارتها', 'تلوين الصفحة', 'استقبال لوحة المفاتيح'], en: ['Displaying screens', 'Organizing, storing, and managing data', 'Coloring the page', 'Receiving keyboard input'] },
    a: 1,
    exp: { ar: 'قاعدة البيانات تنظم البيانات وتخزنها وتديرها وتسترجعها عند الحاجة.', en: 'A database organizes, stores, manages, and retrieves data when needed.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'ما المقصود بالبنية ثلاثية الطبقات؟', en: 'What does three-tier architecture mean?' },
    opts: { ar: ['HTML وCSS فقط', 'تعاون الواجهة الأمامية والخلفية وقاعدة البيانات', 'ثلاثة متصفحات', 'ثلاثة خوادم بريد'], en: ['HTML and CSS only', 'Frontend, backend, and database cooperating', 'Three browsers', 'Three mail servers'] },
    a: 1,
    exp: { ar: 'تتعاون الطبقات الثلاث: الواجهة الأمامية، والواجهة الخلفية، وقاعدة البيانات.', en: 'The three tiers are the frontend, backend, and database working together.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'أي طبقة تبحث في البيانات عن المنتجات المطابقة؟', en: 'Which tier searches data for matching products?' },
    opts: { ar: ['الواجهة الأمامية', 'الواجهة الخلفية', 'الشاشة', 'CSS'], en: ['Frontend', 'Backend', 'Screen', 'CSS'] },
    a: 1,
    exp: { ar: 'الواجهة الخلفية تعالج البحث وتطلب البيانات المناسبة من قاعدة البيانات.', en: 'The backend processes the search and requests matching data from the database.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ما الطرف الذي يطلب البيانات أو المعالجة من الخادم؟', en: 'Which side requests data or processing from a server?' },
    opts: { ar: ['العميل', 'الخادم', 'قاعدة البيانات', 'واجهة برمجة التطبيقات'], en: ['Client', 'Server', 'Database', 'API'] },
    a: 0,
    exp: { ar: 'العميل، مثل المتصفح، يرسل الطلب إلى الخادم.', en: 'The client, such as a browser, sends the request to the server.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'أي بروتوكول يضيف تشفير TLS إلى HTTP؟', en: 'Which protocol adds TLS encryption to HTTP?' },
    opts: { ar: ['HTTP', 'HTTPS', 'JSON', 'GET'], en: ['HTTP', 'HTTPS', 'JSON', 'GET'] },
    a: 1,
    exp: { ar: 'HTTPS هو HTTP مضافاً إليه تشفير TLS.', en: 'HTTPS is HTTP with TLS encryption added.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ما وظيفة GET؟', en: 'What is the role of GET?' },
    opts: { ar: ['استرجاع البيانات من الخادم', 'إرسال بيانات تسجيل الدخول', 'تشفير الصفحة', 'تغيير حجم الشاشة'], en: ['Retrieve data from the server', 'Send login data', 'Encrypt the page', 'Resize the screen'] },
    a: 0,
    exp: { ar: 'يستخدم GET عادة لطلب البيانات أو عرض صفحة ونتائج بحث.', en: 'GET is generally used to retrieve data or display a page and search results.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ماذا يعني رمز الحالة 404؟', en: 'What does status code 404 mean?' },
    opts: { ar: ['نجاح الطلب', 'الصفحة غير موجودة', 'خطأ في الخادم', 'طلب POST'], en: ['Request succeeded', 'Page not found', 'Server error', 'A POST request'] },
    a: 1,
    exp: { ar: '404 يعني أن المورد أو الصفحة المطلوبة غير موجودة.', en: '404 means the requested page or resource was not found.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ما النظام الذي يتيح تبادل البيانات بين برامج مختلفة؟', en: 'What enables data exchange between different software?' },
    opts: { ar: ['API', 'CSS', 'HTML', '500'], en: ['API', 'CSS', 'HTML', '500'] },
    a: 0,
    exp: { ar: 'واجهة برمجة التطبيقات API تضع قواعد لتبادل البيانات بين البرامج.', en: 'An API provides rules for exchanging data between software.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما التقنية التي تحدد هيكل صفحة الويب؟', en: 'Which technology defines a web page structure?' },
    opts: { ar: ['HTML', 'CSS', 'JavaScript', 'JSON'], en: ['HTML', 'CSS', 'JavaScript', 'JSON'] },
    a: 0,
    exp: { ar: 'HTML تبني هيكل الصفحة مثل العناوين والفقرات والروابط.', en: 'HTML builds the page structure, such as headings, paragraphs, and links.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما التقنية التي تحدد مظهر الصفحة؟', en: 'Which technology specifies page appearance?' },
    opts: { ar: ['HTML', 'CSS', 'JavaScript', 'API'], en: ['HTML', 'CSS', 'JavaScript', 'API'] },
    a: 1,
    exp: { ar: 'CSS تحدد الألوان والتخطيط والأحجام والخطوط.', en: 'CSS specifies colors, layout, sizes, and fonts.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما التقنية التي تضيف السلوك والتفاعل؟', en: 'Which technology adds behavior and interactivity?' },
    opts: { ar: ['HTML', 'CSS', 'JavaScript', 'SQL'], en: ['HTML', 'CSS', 'JavaScript', 'SQL'] },
    a: 2,
    exp: { ar: 'JavaScript تستجيب للضغط وتحدّث أجزاء من الشاشة.', en: 'JavaScript responds to actions and updates parts of the screen.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما فائدة HTML الدلالية؟', en: 'What is a benefit of semantic HTML?' },
    opts: { ar: ['تحسين فهم قارئات الشاشة ومحركات البحث', 'تشفير كلمات المرور', 'استرجاع البيانات', 'زيادة حجم الصور'], en: ['Improving screen-reader and search-engine understanding', 'Encrypting passwords', 'Retrieving data', 'Increasing image size'] },
    a: 0,
    exp: { ar: 'توضح العناصر الدلالية معنى أجزاء الصفحة، فتحسن إمكانية الوصول وSEO.', en: 'Semantic elements clarify page meaning, improving accessibility and SEO.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما المقصود بالتصميم المتجاوب؟', en: 'What is responsive design?' },
    opts: { ar: ['تعديل التخطيط تلقائياً حسب حجم الشاشة', 'استخدام قاعدة بيانات', 'إرسال POST', 'بناء خادم جديد'], en: ['Automatically adjusting layout to screen size', 'Using a database', 'Sending POST', 'Building a new server'] },
    a: 0,
    exp: { ar: 'التصميم المتجاوب يجعل التخطيط مناسباً للحاسوب والهاتف واللوحي.', en: 'Responsive design adapts the layout for computers, phones, and tablets.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'ما المصطلح الذي يصف تطبيقًا يستخدم من خلال متصفح دون تثبيت برنامج مخصص؟', en: 'What describes an application used through a browser without dedicated installation?' },
    opts: { ar: ['تطبيق ويب', 'قاعدة بيانات', 'نظام تشغيل', 'محرر نصوص'], en: ['Web application', 'Database', 'Operating system', 'Text editor'] },
    a: 0,
    exp: { ar: 'تطبيق الويب يعمل من خلال متصفح الويب.', en: 'A web application is used through a web browser.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'أي طبقة تعرض شاشة السلة وتستقبل عملية الطلب؟', en: 'Which tier displays the cart and receives an order action?' },
    opts: { ar: ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات', 'الخادم فقط'], en: ['Frontend', 'Backend', 'Database', 'Server only'] },
    a: 0,
    exp: { ar: 'العرض والتفاعل المباشر من مسؤولية الواجهة الأمامية.', en: 'Direct display and interaction belong to the frontend.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'أين تُخزَّن معلومات العملاء وسجل الطلبات؟', en: 'Where are customer information and order history stored?' },
    opts: { ar: ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات', 'المتصفح'], en: ['Frontend', 'Backend', 'Database', 'Browser'] },
    a: 2,
    exp: { ar: 'قاعدة البيانات مسؤولة عن تخزين السجلات وإدارتها.', en: 'The database stores and manages records.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'إذا ظهرت صفحة الحجز لكن لم تظهر الأوقات المتاحة، فما الجزء الذي يعمل غالبًا؟', en: 'If a booking page appears but free slots do not, which part is likely working?' },
    opts: { ar: ['الواجهة الأمامية تعمل، وهناك مشكلة في الخلفية أو البيانات', 'قاعدة البيانات فقط', 'لا شيء يعمل', 'CSS فقط'], en: ['The frontend works; the backend or data has a problem', 'Only the database', 'Nothing works', 'Only CSS'] },
    a: 0,
    exp: { ar: 'ظهور الصفحة يدل على عمل الواجهة الأمامية، بينما فشل الأوقات يشير إلى المعالجة أو البيانات.', en: 'The visible page suggests the frontend works; missing slots point to processing or data.' }
  },
  {
    lesson: { ar: 'الدرس 3-1', en: 'Lesson 3-1' },
    q: { ar: 'ما الفكرة الأساسية للبنية ثلاثية الطبقات؟', en: 'What is the core idea of three-tier architecture?' },
    opts: { ar: ['توزيع العرض والمعالجة والبيانات مع تعاونها', 'وضع كل شيء في الشاشة', 'استخدام ثلاثة متصفحات', 'تخزين البيانات في CSS'], en: ['Separate presentation, processing, and data while cooperating', 'Put everything in the screen', 'Use three browsers', 'Store data in CSS'] },
    a: 0,
    exp: { ar: 'توزيع المسؤوليات يجعل كل طبقة واضحة وتتعاون مع الطبقات الأخرى.', en: 'Separating responsibilities makes each tier clear while allowing cooperation.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ما العملية المناسبة لإرسال نموذج تسجيل الدخول؟', en: 'Which operation is suitable for submitting a login form?' },
    opts: { ar: ['GET', 'POST', '404', 'JSON فقط'], en: ['GET', 'POST', '404', 'JSON only'] },
    a: 1,
    exp: { ar: 'يستخدم POST لإرسال البيانات إلى الخادم.', en: 'POST is used to send data to the server.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'أي رمز يدل على نجاح معالجة الطلب؟', en: 'Which code indicates successful request processing?' },
    opts: { ar: ['200', '404', '500', 'POST'], en: ['200', '404', '500', 'POST'] },
    a: 0,
    exp: { ar: 'رمز 200 يعني أن الطلب عولج بنجاح.', en: 'Status code 200 means the request was processed successfully.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ماذا يحدث عند استقبال المتصفح للرمز 404؟', en: 'What should a browser report for status code 404?' },
    opts: { ar: ['الصفحة غير موجودة', 'نجاح كامل', 'خطأ داخلي في الخادم', 'تشفير TLS'], en: ['Page not found', 'Complete success', 'Internal server error', 'TLS encryption'] },
    a: 0,
    exp: { ar: '404 يوضح أن عنوان المورد المطلوب غير موجود.', en: '404 indicates that the requested resource URL does not exist.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'ما الصيغة الشائعة للبيانات المتبادلة عبر API؟', en: 'Which format is commonly used for data exchanged through an API?' },
    opts: { ar: ['JSON', 'CSS', 'HTML فقط', '500'], en: ['JSON', 'CSS', 'HTML only', '500'] },
    a: 0,
    exp: { ar: 'JSON صيغة منظمة وسهلة القراءة للإنسان والحاسوب.', en: 'JSON is structured and readable by people and computers.' }
  },
  {
    lesson: { ar: 'الدرس 3-2', en: 'Lesson 3-2' },
    q: { ar: 'لماذا لا ينبغي إرسال كلمة المرور عبر HTTP العادي؟', en: 'Why should a password not be sent over plain HTTP?' },
    opts: { ar: ['لأن المحتوى غير مشفر وقد يُقرأ', 'لأن GET لا يعمل', 'لأن الخادم لا يملك قاعدة بيانات', 'لأن JSON ممنوع'], en: ['The content is unencrypted and may be read', 'Because GET does not work', 'Because the server has no database', 'Because JSON is forbidden'] },
    a: 0,
    exp: { ar: 'HTTPS يضيف تشفير TLS ويقلل خطر التنصت.', en: 'HTTPS adds TLS encryption and reduces eavesdropping risk.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'أي مهمة تخص JavaScript؟', en: 'Which task belongs to JavaScript?' },
    opts: { ar: ['تحديث العداد عند الضغط', 'تحديد لون الخلفية فقط', 'كتابة عنوان الصفحة', 'تخزين سجل الطلبات'], en: ['Updating a counter on click', 'Only setting background color', 'Writing a page heading', 'Storing order history'] },
    a: 0,
    exp: { ar: 'JavaScript تضيف السلوك وتستجيب للأحداث.', en: 'JavaScript adds behavior and responds to events.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما فائدة التصميم المتجاوب؟', en: 'What is the benefit of responsive design?' },
    opts: { ar: ['جعل التخطيط مناسبًا لأحجام شاشات متعددة', 'تشفير البيانات', 'تخزين المعلومات', 'استبدال JavaScript'], en: ['Making the layout fit multiple screen sizes', 'Encrypting data', 'Storing information', 'Replacing JavaScript'] },
    a: 0,
    exp: { ar: 'التصميم المتجاوب يتكيف مع الحاسوب والهاتف واللوحي.', en: 'Responsive design adapts to computers, phones, and tablets.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما أثر HTML الدلالية على إمكانية الوصول؟', en: 'How does semantic HTML affect accessibility?' },
    opts: { ar: ['تساعد قارئ الشاشة على فهم بنية الصفحة', 'تزيد سرعة الإنترنت دائمًا', 'تمنع كل الأخطاء', 'تستبدل CSS'], en: ['It helps screen readers understand page structure', 'It always increases internet speed', 'It prevents all errors', 'It replaces CSS'] },
    a: 0,
    exp: { ar: 'الوسوم ذات المعنى تنقل بنية الصفحة بوضوح للمستخدمين وقارئات الشاشة.', en: 'Meaningful tags communicate page structure clearly to users and screen readers.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'أي تقنية تحدد حجم الخط ولونه؟', en: 'Which technology controls font size and color?' },
    opts: { ar: ['HTML', 'CSS', 'JavaScript', 'API'], en: ['HTML', 'CSS', 'JavaScript', 'API'] },
    a: 1,
    exp: { ar: 'CSS مسؤولة عن المظهر مثل اللون والحجم والخط.', en: 'CSS controls appearance such as color, size, and font.' }
  },
  {
    lesson: { ar: 'الدرس 3-3', en: 'Lesson 3-3' },
    q: { ar: 'ما فائدة إطار العمل مثل React أو Vue؟', en: 'What is a benefit of a framework such as React or Vue?' },
    opts: { ar: ['توفير وظائف ومكونات جاهزة لتطوير أكثر كفاءة', 'تخزين كلمات المرور', 'استبدال الخادم', 'تحديد رمز 404'], en: ['Providing ready-made functions and components for efficient development', 'Storing passwords', 'Replacing the server', 'Defining status code 404'] },
    a: 0,
    exp: { ar: 'إطار العمل يقلل الحاجة لكتابة كل شيء من الصفر.', en: 'A framework reduces the need to write everything from scratch.' }
  }
];
