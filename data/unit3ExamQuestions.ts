export type LocalizedText = { ar: string; en: string };
export type Question = { lesson: LocalizedText; q: LocalizedText; opts: { ar: string[]; en: string[] }; a: number; exp: LocalizedText; ref?: LocalizedText };

export const lesson31Questions: Question[] = [
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على البرنامج أو التطبيق الذي يُستخدم من خلال متصفح الويب دون الحاجة لتثبيت برمجيات مخصصة؟ (كتاب الوزارة ص 54 / تدريب 1-1)",
      "en": "What is the term for an application used through a web browser with zero local software installation? (Textbook p. 58 / Try 1.1)"
    },
    "opts": {
      "ar": [
        "تطبيق الويب (Web Application)",
        "نظام التشغيل (Operating System)",
        "الذاكرة العشوائية (RAM)",
        "جدار الحماية المادي (Hardware Firewall)"
      ],
      "en": [
        "Web Application",
        "Operating System",
        "Random Access Memory (RAM)",
        "Hardware Firewall"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تطبيق الويب (Web Application) هو برنامج يعمل عبر متصفح الويب مباشرة دون الحاجة لتثبيت برامج خاصة على جهاز المستخدم.",
      "en": "A web application runs through a web browser directly without requiring dedicated client software installation."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 51 / p. 56",
      "en": "كتاب المدرسة ص 51 / p. 56"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على مكون الشاشة الذي يراه المستخدم ويتعامل معه مباشرة داخل المتصفح؟ (كتاب الوزارة ص 54 / تدريب 1-2)",
      "en": "What is the term for the screen component that users see and interact with directly in the browser? (Textbook p. 58 / Try 1.2)"
    },
    "opts": {
      "ar": [
        "الواجهة الأمامية (Frontend)",
        "الواجهة الخلفية (Backend)",
        "محرك قاعدة البيانات (Database Engine)",
        "مترجم لغة الآلة (Compiler)"
      ],
      "en": [
        "Frontend",
        "Backend",
        "Database Engine",
        "Machine Compiler"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الواجهة الأمامية (Frontend) هي الطبقة التفاعلية التي تعمل في المتصفح، تعرض شاشات التطبيق وتستقبل مدخلات ونقرات المستخدم.",
      "en": "The frontend is the presentation tier running in the browser, displaying UI components and capturing user events."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 51 / p. 56",
      "en": "كتاب المدرسة ص 51 / p. 56"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على الجزء المسؤول عن معالجة البيانات واتخاذ القرارات على جانب الخادم بعيداً عن رؤية المستخدم؟ (كتاب الوزارة ص 54 / تدريب 1-3)",
      "en": "What is the term for the part responsible for server-side processing that users do not see? (Textbook p. 58 / Try 1.3)"
    },
    "opts": {
      "ar": [
        "الواجهة الخلفية (Backend)",
        "الواجهة الأمامية (Frontend)",
        "ملف التنسيق الانسيابي (CSS)",
        "شاشة اللمس (Touchscreen)"
      ],
      "en": [
        "Backend",
        "Frontend",
        "CSS Stylesheet",
        "Touchscreen Display"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الواجهة الخلفية (Backend) تعمل على خادم الويب لمعالجة طلبات المستخدم وتطبيق قواعد العمل ومنطق التطبيق.",
      "en": "The backend runs on the web server to execute application business logic and make algorithmic decisions."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 51 / p. 56",
      "en": "كتاب المدرسة ص 51 / p. 56"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على النظام المخصص لتنظيم وتخزين وإدارة البيانات واسترجاعها وتسجيل البيانات الجديدة؟ (كتاب الوزارة ص 54 / تدريب 1-4)",
      "en": "What is the term for a system that organizes, stores, and manages persistent data? (Textbook p. 58 / Try 1.4)"
    },
    "opts": {
      "ar": [
        "قاعدة البيانات (Database)",
        "الواجهة الأمامية (Frontend)",
        "بروتوكول النقل (HTTP)",
        "كارت الشاشة (GPU)"
      ],
      "en": [
        "Database",
        "Frontend",
        "Transfer Protocol (HTTP)",
        "Graphics Card (GPU)"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "قاعدة البيانات (Database) هي الطبقة الثالثة المسؤولة عن حفظ السجلات وتنظيمها واسترجاعها بأمان ودقة.",
      "en": "A database organizes, stores, and retrieves application records and transaction history."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 52 / p. 57",
      "en": "كتاب المدرسة ص 52 / p. 57"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "عند البحث عن منتج على موقع تسوق إلكتروني، أي طبقة مسؤولة عن البحث في السجلات عن المنتجات المطابقة لكلمات البحث؟ (كتاب الوزارة ص 54 / تدريب 2-1)",
      "en": "When searching for a product on an e-commerce site, which tier is responsible for searching data for matching products? (Textbook p. 58 / Try 2.1)"
    },
    "opts": {
      "ar": [
        "الواجهة الخلفية (Backend) بالاستعلام من قاعدة البيانات",
        "الواجهة الأمامية (Frontend) فقط",
        "لوحة مفاتيح العميل",
        "شاشة المتصفح"
      ],
      "en": [
        "Backend querying the Database",
        "Frontend alone",
        "User Keyboard",
        "Browser Display"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الواجهة الخلفية هي التي تستقبل كلمة البحث من الواجهة الأمامية وتستعلم قاعدة البيانات لاستخراج السجلات المطابقة.",
      "en": "The backend receives search keywords from the frontend and queries the database for matching products."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 52 / p. 57",
      "en": "كتاب المدرسة ص 52 / p. 57"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "حدد صواب أو خطأ: 'الواجهة الخلفية (Backend) هي الجزء الذي يعمل داخل متصفح الويب أمام المستخدم مباشرة.' (كتاب الوزارة ص 53 / مثال محلول 1-B)",
      "en": "Mark True or False: 'The backend is the part that runs on the browser directly in front of the user.' (Textbook p. 58 / Worked Example 1.B)"
    },
    "opts": {
      "ar": [
        "عبارة خاطئة (خطأ — تعمل على الخادم Server)",
        "عبارة صحيحة تماماً",
        "صحيحة في الهواتف فقط",
        "صحيحة إذا كان الاتصال مقطوعاً"
      ],
      "en": [
        "False (Runs on the remote Server)",
        "Completely True",
        "True on phones only",
        "True when offline"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطأ؛ لأن الجزء الذي يعمل على المتصفح ويراه المستخدم هو الواجهة الأمامية (Frontend)، بينما الواجهة الخلفية تعمل على خادم الويب البعيد.",
      "en": "False: The frontend runs in the browser, while the backend operates remotely on the server."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 53 / p. 58",
      "en": "كتاب المدرسة ص 53 / p. 58"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "حدد صواب أو خطأ: 'يعمل تطبيق الويب بالواجهة الأمامية وحدها دون حاجة لأي طبقات أخرى.' (كتاب الوزارة ص 53 / مثال محلول 1-D)",
      "en": "Mark True or False: 'A web application operates with the frontend alone without other tiers.' (Textbook p. 58 / Worked Example 1.D)"
    },
    "opts": {
      "ar": [
        "عبارة خاطئة (خطأ — يحتاج لتعاون الطبقات الثلاث)",
        "عبارة صحيحة تماماً",
        "صحيحة لمواقع التواصل فقط",
        "صحيحة إذا كان الموقع مجانياً"
      ],
      "en": [
        "False (Requires all three cooperating tiers)",
        "Completely True",
        "True for social apps only",
        "True if the site is free"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطأ؛ يعمل تطبيق الويب من خلال تعاون ثلاث طبقات: الواجهة الأمامية، والواجهة الخلفية، وقاعدة البيانات.",
      "en": "False: A web application functions through the synergy of all three tiers: frontend, backend, and database."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 53 / p. 58",
      "en": "كتاب المدرسة ص 53 / p. 58"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "أي من الخيارات التالية يصف بدقة المعمارية ثلاثية الطبقات لتطبيقات الويب؟ (كتاب الوزارة ص 55 / تمرين 3-2)",
      "en": "Which option most appropriately describes the three-tier architecture of a web application? (Textbook p. 61 / Exercise 3.2)"
    },
    "opts": {
      "ar": [
        "استجابةً لإجراءات المستخدم، تتعاون الواجهة الأمامية والخلفية وقاعدة البيانات لتنفيذ المعالجة",
        "الواجهة الأمامية مسؤولة عن تخزين البيانات وتشفيرها في أقراص الخادم",
        "قاعدة البيانات مسؤولة عن رسم عناصر الواجهة والأزرار للمستخدم",
        "الواجهة الخلفية هي الشاشة التي ينقر عليها المستخدم في المتصفح"
      ],
      "en": [
        "In response to user actions, frontend, backend, and database cooperate to perform processing",
        "Frontend is responsible for server disk storage and encryption",
        "Database is responsible for rendering UI buttons to the user",
        "Backend is the screen that users click on inside the browser"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الخيار النموذجي بكتاب الوزارة: تتعاون الطبقات الثلاث معاً لمعالجة طلبات المستخدم وتوفير الخدمة المطلوبة.",
      "en": "Textbook definition: The three tiers cooperate harmoniously in response to user events."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 55 / p. 61",
      "en": "كتاب المدرسة ص 55 / p. 61"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "في شبكة التواصل الاجتماعي (SNS)، إلى أي طبقة ينتمي 'تحديد الجمهور المستهدف للمنشور والتحكم في الإشعارات'؟ (كتاب الوزارة ص 55 / تمرين 3-1-b,e)",
      "en": "In a social network (SNS), which tier handles 'determining post audience and push notification control'? (Textbook p. 60 / Exercise 3.1.b,e)"
    },
    "opts": {
      "ar": [
        "الواجهة الخلفية (Backend)",
        "الواجهة الأمامية (Frontend)",
        "قاعدة البيانات (Database)",
        "كارت الشبكة (NIC)"
      ],
      "en": [
        "Backend",
        "Frontend",
        "Database",
        "Network Card (NIC)"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تحديد الجمهور المستهدف للمنشور وإدارة الإشعارات الفورية هو منطق برمجي ومعالجة تنفذها الواجهة الخلفية على الخادم.",
      "en": "Determining post audience and managing push alerts are core backend processing rules."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 54 جدول 4 / p. 59",
      "en": "كتاب المدرسة ص 54 جدول 4 / p. 59"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  },
  {
    "q": {
      "ar": "في شبكة التواصل الاجتماعي (SNS)، إلى أي طبقة ينتمي 'تخزين بيانات المنشورات، وعلاقات المتابعة، والرسائل'؟ (كتاب الوزارة ص 55 / تمرين 3-1-c,f)",
      "en": "In a social network (SNS), which tier handles 'storage of post data, follow relationships, and messages'? (Textbook p. 60 / Exercise 3.1.c,f)"
    },
    "opts": {
      "ar": [
        "قاعدة البيانات (Database)",
        "الواجهة الأمامية (Frontend)",
        "الواجهة الخلفية (Backend)",
        "شريط التمرير بالمتصفح"
      ],
      "en": [
        "Database",
        "Frontend",
        "Backend",
        "Browser Scrollbar"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تخزين المنشورات وبيانات المتابعين والرسائل الدائمة هو المهمة الأساسية لطبقة قاعدة البيانات.",
      "en": "Persisting post records, user followers, and private messages is the database tier's designated job."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 54 جدول 4 / p. 59",
      "en": "كتاب المدرسة ص 54 جدول 4 / p. 59"
    },
    "lesson": {
      "ar": "Lesson 3-1",
      "en": "Lesson 3-1"
    }
  }
];

export const lesson32Questions: Question[] = [
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على الجانب الذي يطلب البيانات أو المعالجة من الخادم (مثل متصفح الويب)؟ (كتاب الوزارة ص 60 / تدريب 1-1)",
      "en": "What is the term for the side that requests data or processing from the server (e.g., a web browser)? (Textbook p. 65 / Try 1.1)"
    },
    "opts": {
      "ar": [
        "العميل (Client)",
        "الخادم (Server)",
        "المحول (Switch)",
        "المودم (Modem)"
      ],
      "en": [
        "Client",
        "Server",
        "Network Switch",
        "Modem"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "العميل (Client) هو البرنامج أو الجهاز (مثل المتصفح أو تطبيق الهاتف) الذي يبدأ بطلب مورد أو معالجة من الخادم.",
      "en": "The client (e.g., browser or mobile app) is the entity initiating requests for resources or services."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 57 / p. 63",
      "en": "كتاب المدرسة ص 57 / p. 63"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على الجانب الذي يستقبل طلبات العملاء، ويعالجها برمجياً، ثم يرجع الاستجابات المناسبة؟ (كتاب الوزارة ص 60 / تدريب 1-2)",
      "en": "What is the term for the side that receives requests from clients, processes them, and returns responses? (Textbook p. 65 / Try 1.2)"
    },
    "opts": {
      "ar": [
        "الخادم (Server)",
        "العميل (Client)",
        "كابل الإنترنت (Fiber Cable)",
        "محرك البحث (Search Engine)"
      ],
      "en": [
        "Server",
        "Client",
        "Fiber Cable",
        "Search Engine"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الخادم (Server) هو الحاسوب أو النظام الذي يستمع لطلبات العملاء، وينفذ منطق العمل البرمجي، ويرجع نتائج الاستجابة.",
      "en": "The server listens to client requests, runs business logic, and returns formatted HTTP responses."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 57 / p. 63",
      "en": "كتاب المدرسة ص 57 / p. 63"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على بروتوكول الاتصال الذي يضيف تشفير TLS إلى بروتوكول HTTP لحماية سرية البيانات ومنع التنصت؟ (كتاب الوزارة ص 60 / تدريب 1-3)",
      "en": "What is the term for the communication protocol that adds TLS encryption to HTTP? (Textbook p. 65 / Try 1.3)"
    },
    "opts": {
      "ar": [
        "بروتوكول HTTPS",
        "بروتوكول FTP",
        "بروتوكول SMTP",
        "بروتوكول IP"
      ],
      "en": [
        "HTTPS Protocol",
        "FTP Protocol",
        "SMTP Protocol",
        "IP Protocol"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "بروتوكول HTTPS يضيف تشفير TLS (أو SSL) إلى HTTP، لحماية سرية الاتصال ومنع المتطفلين من قراءة أو تعديل البيانات المنقولة.",
      "en": "HTTPS adds TLS encryption to HTTP, safeguarding transmission confidentiality and validating server identity."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 58 / p. 63",
      "en": "كتاب المدرسة ص 58 / p. 63"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما هي طريقة طلب HTTP المخصصة لطلب واسترجاع بيانات أو عرض صفحة ويب من الخادم دون تعديلها؟ (كتاب الوزارة ص 60 / تدريب 1-4)",
      "en": "What is the term for the HTTP method used for retrieving data or displaying a web page from the server? (Textbook p. 65 / Try 1.4)"
    },
    "opts": {
      "ar": [
        "طريقة GET",
        "طريقة POST",
        "طريقة DELETE",
        "طريقة UPDATE"
      ],
      "en": [
        "GET Method",
        "POST Method",
        "DELETE Method",
        "UPDATE Method"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "طريقة GET تُستخدم عادة لطلب الموارد والبيانات وعرض الصفحات دون إرسال حمولة تعديلية في جسم الطلب.",
      "en": "The GET method retrieves resources and search results without modifying server state."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 58 / p. 64",
      "en": "كتاب المدرسة ص 58 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على النظام أو القواعد المحددة لتبادل البيانات والوظائف بين البرمجيات المختلفة؟ (كتاب الوزارة ص 60 / تدريب 1-5)",
      "en": "What is the term for the system for exchanging data between different pieces of software? (Textbook p. 65 / Try 1.5)"
    },
    "opts": {
      "ar": [
        "واجهة برمجة التطبيقات (API)",
        "جدار الحماية (Firewall)",
        "نظام الملفات (File System)",
        "لوحة التحكم (Control Panel)"
      ],
      "en": [
        "API (Application Programming Interface)",
        "Firewall",
        "File System",
        "Control Panel"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "واجهة برمجة التطبيقات (API) هي مجموعة معايير تسمح للواجهة الأمامية بطلب بيانات منظمة من الواجهة الخلفية أو بين تطبيقات مستقلة.",
      "en": "An API defines programmatic contracts and endpoints enabling applications to request and exchange data."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 59 / p. 64",
      "en": "كتاب المدرسة ص 59 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "حدد صواب أو خطأ: 'تُستخدم طريقة GET لإرسال البيانات الحساسة مثل كلمات المرور إلى الخادم لمعالجتها.' (كتاب الوزارة ص 59 / مثال محلول 1-C)",
      "en": "Mark True or False: 'The GET method is used for sending sensitive data like passwords to the server.' (Textbook p. 64 / Worked Example 1.C)"
    },
    "opts": {
      "ar": [
        "عبارة خاطئة (خطأ — GET لاسترجاع البيانات و POST لإرسالها)",
        "عبارة صحيحة تماماً",
        "صحيحة في شبكات Wi-Fi فقط",
        "صحيحة إذا كان المتصفح حديثاً"
      ],
      "en": [
        "False (GET retrieves data; POST sends form payloads)",
        "Completely True",
        "True on Wi-Fi only",
        "True on modern browsers"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطأ؛ لأن طريقة GET مخصصة لاسترجاع البيانات، بينما طريقة POST هي المخصصة لإرسال البيانات ونماذج تسجيل الدخول بأمان في جسم الطلب.",
      "en": "False: GET is designed to retrieve data, whereas POST sends payloads and form inputs inside the request body."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 59 / p. 64",
      "en": "كتاب المدرسة ص 59 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "من الخيارات التالية، اختر التركيبة غير الصحيحة بين رمز حالة HTTP ومعناه: (كتاب الوزارة ص 60 / تدريب 2-1)",
      "en": "From the options below, choose the combination of status code and meaning that is NOT appropriate: (Textbook p. 65 / Try 2.1)"
    },
    "opts": {
      "ar": [
        "500 — تمت معالجة الطلب بنجاح تام",
        "200 — تمت معالجة الطلب بنجاح",
        "404 — الصفحة أو المورد غير موجود",
        "500 — حدث خطأ في جانب الخادم"
      ],
      "en": [
        "500 — The request was processed successfully",
        "200 — Success (OK)",
        "404 — Page not found",
        "500 — Server error"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الرمز 500 يعني حدوث خطأ داخلي في الخادم (Server Error) وليس نجاح الطلب؛ الرمز الدال على النجاح هو 200.",
      "en": "Status code 500 indicates an internal server error, not success; success is represented by 200."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 59 جدول 2 / p. 64",
      "en": "كتاب المدرسة ص 59 جدول 2 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "أي طريقة من طرق طلب HTTP تُستخدم عند إدخال اسم المستخدم وكلمة المرور في نموذج تسجيل الدخول وإرسالهما؟ (كتاب الوزارة ص 61 / تمرين 3-1-b)",
      "en": "Which HTTP method is used when entering a username and password into a login form and submitting them? (Textbook p. 67 / Exercise 3.1.b)"
    },
    "opts": {
      "ar": [
        "طريقة POST",
        "طريقة GET",
        "طريقة HEAD",
        "طريقة TRACE"
      ],
      "en": [
        "POST Method",
        "GET Method",
        "HEAD Method",
        "TRACE Method"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "طريقة POST تُستخدم لإرسال البيانات الحساسة وتفاصيل النماذج في جسم الطلب لمعالجتها وتوثيقها على الخادم.",
      "en": "The POST method transmits form credentials securely inside the HTTP request body."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 61 / p. 67",
      "en": "كتاب المدرسة ص 61 / p. 67"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما المعنى البرمجي الدقيق لرمز الحالة (404 Not Found) الذي يرجعه الخادم للمتصفح؟ (كتاب الوزارة ص 59 / مثال محلول 1-D)",
      "en": "What is the exact technical meaning of status code 404 returned by the server? (Textbook p. 64 / Worked Example 1.D)"
    },
    "opts": {
      "ar": [
        "الصفحة أو المورد المطلوب غير موجود بهذا العنوان المحدد (URL)",
        "تمت معالجة الطلب بنجاح تام وتم إرجاع البيانات",
        "تعطلت ذاكرة الخادم RAM بالكامل",
        "تم قطع الاتصال بالإنترنت من مزود الخدمة"
      ],
      "en": [
        "The requested page or resource does not exist at the specified URL",
        "The request was processed successfully and returned",
        "Server RAM hardware completely burned out",
        "ISP terminated internet connectivity"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "رمز 404 يعني أن الرابط المطلوب غير موجود على الخادم (خطأ في جانب العميل بسبب كتابة رابط خاطئ أو صفحة محذوفة).",
      "en": "Code 404 indicates that the specified URL or endpoint could not be found on the host server."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 59 / p. 64",
      "en": "كتاب المدرسة ص 59 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  },
  {
    "q": {
      "ar": "ما هي الميزة الجوهرية لصيغة البيانات JSON المستخدمة في تبادل البيانات عبر واجهات API؟ (كتاب الوزارة ص 59 / بند 4-3)",
      "en": "What is the primary characteristic of JSON data format exchanged through APIs? (Textbook p. 64 / Point 4.3)"
    },
    "opts": {
      "ar": [
        "صيغة نصية قياسية خفيفة سهلة القراءة للبشر وسهلة المعالجة والتحليل للحواسيب",
        "لغة لتشفير بطاقات الذاكرة ولا يمكن قراءتها إلا بأجهزة ليزر",
        "برنامج تشغيل مخصص للشاشات التي تعمل باللمس",
        "نوع كابل كهربائي لتوصيل الخوادم"
      ],
      "en": [
        "A lightweight text format easy for humans to read and for computers to parse",
        "An encrypted optical media format unreadable without lasers",
        "Device driver designed for touchscreen displays",
        "High-voltage electrical power cable for server racks"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "صيغة JSON (JavaScript Object Notation) تتميز بأنها خفيفة الوزن ومنظمة وسهلة القراءة للبشر وسريعة الفك والتحليل برمجياً.",
      "en": "JSON is universally adopted for APIs because it is lightweight, human-readable, and quickly parsed by computers."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 59 / p. 64",
      "en": "كتاب المدرسة ص 59 / p. 64"
    },
    "lesson": {
      "ar": "Lesson 3-2",
      "en": "Lesson 3-2"
    }
  }
];

export const lesson33Questions: Question[] = [
  {
    "q": {
      "ar": "ما هو الاختصار المكون من 4 أحرف للتقنية التي تحدد بنية وهيكل (Skeleton) صفحة الويب؟ (كتاب الوزارة ص 66 / تدريب 1-1)",
      "en": "What is the four-letter abbreviation for the technology that defines the structure (skeleton) of a web page? (Textbook p. 72 / Try 1.1)"
    },
    "opts": {
      "ar": [
        "لغة HTML",
        "لغة HTTP",
        "لغة JSON",
        "لغة SMTP"
      ],
      "en": [
        "HTML",
        "HTTP",
        "JSON",
        "SMTP"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة HTML (HyperText Markup Language) هي المسؤولة عن بناء هيكل وبنية عناصر صفحة الويب (العناوين والفقرات والصور والروابط).",
      "en": "HTML defines the structural elements and layout skeleton of a webpage."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 63 / p. 69",
      "en": "كتاب المدرسة ص 63 / p. 69"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "ما هو الاختصار المكون من 3 أحرف للتقنية التي تحدد مظهر وشكل وتنسيق صفحة الويب كالألوان والخطوط والأبعاد؟ (كتاب الوزارة ص 66 / تدريب 1-2)",
      "en": "What is the three-letter abbreviation for the technology that specifies the appearance (colors, fonts, styling) of a web page? (Textbook p. 72 / Try 1.2)"
    },
    "opts": {
      "ar": [
        "لغة CSS",
        "لغة API",
        "لغة URL",
        "لغة DOM"
      ],
      "en": [
        "CSS",
        "API",
        "URL",
        "DOM"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة CSS (Cascading Style Sheets) هي المسؤولة عن تحديد المظهر البصري والألوان والخطوط والمسافات الهامشية وتنسيق العناصر.",
      "en": "CSS specifies the visual presentation, color schemes, typography, and spacing of web documents."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 63 / p. 69",
      "en": "كتاب المدرسة ص 63 / p. 69"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على التقنية التي تضيف السلوك والتفاعل والاستجابة لإجراءات المستخدم وتحديث أجزاء من الشاشة؟ (كتاب الوزارة ص 66 / تدريب 1-3)",
      "en": "What is the term for the technology that adds dynamic behavior and interactivity to a web page? (Textbook p. 72 / Try 1.3)"
    },
    "opts": {
      "ar": [
        "لغة JavaScript",
        "لغة HTML",
        "لغة SQL",
        "بروتوكول TCP"
      ],
      "en": [
        "JavaScript",
        "HTML",
        "SQL",
        "TCP Protocol"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة JavaScript هي لغة البرمجة التي تضيف التفاعل والسلوك الحركي والاستجابة للضغطات وتحديث الصفحة ديناميكياً.",
      "en": "JavaScript activates dynamic client-side runtime behavior, event listeners, and live DOM mutations."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 63 / p. 69",
      "en": "كتاب المدرسة ص 63 / p. 69"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "ما هو المصطلح الذي يُطلق على المفهوم التصميمي الذي يضبط تخطيط الصفحة وعرضها تلقائياً لتناسب مختلف مقاسات الشاشات؟ (كتاب الوزارة ص 66 / تدريب 1-4)",
      "en": "What is the term for the design concept in which the layout automatically adjusts according to different screen sizes? (Textbook p. 72 / Try 1.4)"
    },
    "opts": {
      "ar": [
        "التصميم المتجاوب (Responsive Design)",
        "الترميز الثنائي (Binary Encoding)",
        "الأرشفة اليدوية (Manual Archiving)",
        "التصميم أحادي الاتجاه (One-Way UI)"
      ],
      "en": [
        "Responsive Design",
        "Binary Encoding",
        "Manual Archiving",
        "One-Way UI"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "التصميم المتجاوب (Responsive Design) يضمن ظهور الموقع بشكل مريح ومنسق على الحواسيب والهواتف والأجهزة اللوحية دون تشويه.",
      "en": "Responsive design dynamically reflows layout grids to deliver seamless experiences across desktop and mobile screens."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 64 / p. 70",
      "en": "كتاب المدرسة ص 64 / p. 70"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "أي من الخيارات التالية لا يُعد فائدة مناسبة لاستخدام لغة HTML الدلالية (Semantic HTML)؟ (كتاب الوزارة ص 66 / تدريب 2-1)",
      "en": "From the following options, choose the one that is NOT an appropriate benefit of using Semantic HTML: (Textbook p. 72 / Try 2.1)"
    },
    "opts": {
      "ar": [
        "تصبح سرعة عرض صفحة الويب أسرع بالضرورة",
        "تستطيع برامج قراءة الشاشة لضعاف البصر فهم بنية الصفحة بدقة",
        "تستطيع محركات البحث (SEO) فهم محتوى الصفحة وأرشفته بسهولة",
        "يصبح هيكل الصفحة أكثر وضوحاً وتنظيماً للمطورين"
      ],
      "en": [
        "The display speed of a web page necessarily becomes faster",
        "Screen readers can correctly understand page landmarks",
        "Search engines (SEO) can parse and index page content accurately",
        "Page markup becomes clearer and more maintainable for developers"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الخيار غير الصحيح هو أن سرعة العرض تصبح أسرع بالضرورة؛ ففائدة HTML الدلالية تكمن في إمكانية الوصول وفهم المعنى وتحسين SEO وليس تسريع معالجة المتصفح.",
      "en": "Semantic HTML enhances accessibility and search engine semantics, but does not inherently boost browser rendering execution speed."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 66 / p. 72",
      "en": "كتاب المدرسة ص 66 / p. 72"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "أي من الخيارات التالية يصف بدقة أطر عمل الواجهة الأمامية مثل React و Vue و Next.js؟ (كتاب الوزارة ص 66 / تدريب 2-2)",
      "en": "Which option most appropriately describes frontend frameworks like React, Vue, and Next.js? (Textbook p. 72 / Try 2.2)"
    },
    "opts": {
      "ar": [
        "بنية توفر مكونات ووظائف برمجية جاهزة للاستخدام ترفع كفاءة وسرعة تطوير التطبيقات",
        "لغة برمجة جديدة تحل محل لغة HTML تماماً وتلغيها",
        "برنامج لتشفير رسائل البريد الإلكتروني عبر الأقمار الصناعية",
        "مفهوم تصميمي لإجبار المستخدمين على شراء هواتف جديدة"
      ],
      "en": [
        "A structure providing pre-built components and utilities making development faster and more efficient",
        "A proprietary language completely replacing and eliminating HTML",
        "Satellite email encryption program",
        "Design concept forcing users to purchase new smartphones"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "أطر العمل توفر هياكل ومكونات قابلة لإعادة الاستخدام، مما يغني المطور عن كتابة كل سطر من الصفر ويسرع بناء الواجهات التفاعلية الضخمة.",
      "en": "Frameworks provide reusable pre-built UI components and state management, accelerating application delivery."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 65 / p. 71",
      "en": "كتاب المدرسة ص 65 / p. 71"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "حدد صواب أو خطأ: 'لغة CSS هي التقنية المسؤولة عن إضافة السلوك والتفاعل الحركي لصفحة الويب.' (كتاب الوزارة ص 65 / مثال محلول 1-B)",
      "en": "Mark True or False: 'CSS is the technology responsible for adding dynamic behavior to a web page.' (Textbook p. 71 / Worked Example 1.B)"
    },
    "opts": {
      "ar": [
        "عبارة خاطئة (خطأ — CSS للمظهر وإضافة السلوك وظيفة JavaScript)",
        "عبارة صحيحة تماماً",
        "صحيحة في صفحات الويب الملونة فقط",
        "صحيحة في نظام أندرويد فقط"
      ],
      "en": [
        "False (CSS styles appearance; adding behavior is JavaScript)",
        "Completely True",
        "True on colored pages only",
        "True on Android only"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطأ؛ لأن لغة CSS مخصصة لتحديد المظهر والتنسيق والألوان، بينما التقنية المسؤولة عن إضافة السلوك والتفاعل هي لغة JavaScript.",
      "en": "False: CSS governs styling and layout, whereas JavaScript adds interactive behavior and responds to events."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 65 / p. 71",
      "en": "كتاب المدرسة ص 65 / p. 71"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "أي تقنية من ثلاثية الويب تُستخدم لتحديث جزء من الشاشة عند الضغط على زر دون إعادة تحميل الصفحة؟ (كتاب الوزارة ص 67 / تمرين 3-1-c)",
      "en": "Which technology from the web triad is used to update part of the screen when a button is pressed without reloading? (Textbook p. 74 / Exercise 3.1.c)"
    },
    "opts": {
      "ar": [
        "لغة JavaScript",
        "لغة HTML",
        "لغة CSS",
        "بروتوكول FTP"
      ],
      "en": [
        "JavaScript",
        "HTML",
        "CSS",
        "FTP Protocol"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تحديث أجزاء من الشاشة ديناميكياً والتفاعل مع نقرات الأزرار هو الوظيفة الحصرية للغة JavaScript.",
      "en": "Dynamic partial DOM updating upon user clicks is performed by JavaScript."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 67 / p. 74",
      "en": "كتاب المدرسة ص 67 / p. 74"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "ما هو السبب الأساسي الذي يفرض ضرورة تطبيق التصميم المتجاوب (Responsive Design)؟ (كتاب الوزارة ص 67 / تمرين 3-2)",
      "en": "What is the primary reason why responsive design is essential in modern web engineering? (Textbook p. 74 / Exercise 3.2)"
    },
    "opts": {
      "ar": [
        "لأن مواقع الويب يتم الوصول إليها من أجهزة متنوعة كالحواسيب المكتبية والهواتف الذكية والأجهزة اللوحية",
        "لتقليل حجم استهلاك الكهرباء في الشاشة فقط",
        "لمنع المستخدمين من نسخ النصوص بالماوس",
        "لجعل موقع الويب يطبع على الورق تلقائياً"
      ],
      "en": [
        "Because websites are accessed from diverse devices such as PCs, smartphones, and tablets",
        "To reduce display electricity consumption only",
        "To prevent mouse cursor text selection",
        "To automatically print web pages onto physical paper"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "السبب الجوهري هو تنوع أحجام شاشات الأجهزة المستخدمة لتصفح الويب اليوم، مما يتطلب تخطيطاً مرناً يتكيف تلقائياً لتفادي التمرير الأفقي المشوه.",
      "en": "Websites are browsed across PCs, tablets, and smartphones, demanding adaptive layouts that prevent horizontal scrolling."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 67 / p. 74",
      "en": "كتاب المدرسة ص 67 / p. 74"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  },
  {
    "q": {
      "ar": "ماذا يُقصد بنهج 'الأولوية للجوال' (Mobile-First) في تصميم وتطوير واجهات الويب؟ (كتاب الوزارة ص 64 / بند 3-3)",
      "en": "What is meant by the 'Mobile-First' approach in modern web design? (Textbook p. 70 / Point 3.3)"
    },
    "opts": {
      "ar": [
        "البدء بتصميم وتخطيط واجهة الشاشات الصغيرة للهواتف أولاً من البداية ثم التوسع للشاشات الكبيرة",
        "قصر فتح الموقع على الهواتف الذكية وحظر فتحه من الحواسيب تماماً",
        "إرسال رسالة نصية قصيرة SMS للمستخدم عند كل عملية نقر",
        "إغلاق الموقع نهائياً في حال استخدام شاشة عريضة"
      ],
      "en": [
        "Designing the layout for small smartphone screens first from the initial stage before scaling up",
        "Restricting site access strictly to phones and banning desktop access",
        "Sending an SMS text message on every button click",
        "Permanently closing the website if opened on a desktop monitor"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "نهج الأولوية للجوال (Mobile-First) يركز على تصميم تجربة الشاشات الصغيرة للهواتف أولاً ثم التوسع للشاشات الأكبر تدريجياً لضمان البساطة والسرعة.",
      "en": "Mobile-first prioritizes core constraints of mobile screens from the start before progressively enhancing layout for desktop displays."
    },
    "ref": {
      "ar": "كتاب المدرسة ص 64 / p. 70",
      "en": "كتاب المدرسة ص 64 / p. 70"
    },
    "lesson": {
      "ar": "Lesson 3-3",
      "en": "Lesson 3-3"
    }
  }
];

export const comprehensiveExamQuestions: Question[] = [
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "ما التعريف الدقيق لتطبيق الويب (Web Application) كما ورد في كتاب الوزارة؟",
      "en": "What is the exact definition of a Web Application according to the textbook?"
    },
    "opts": {
      "ar": [
        "برنامج يُستخدم عبر متصفح الويب دون الحاجة لتثبيت برمجيات مخصصة",
        "برنامج يحتاج لتثبيت ملف تنفيذي (.exe) على القرص الصلب أولاً",
        "لعبة فيديو تعمل على الهاتف فقط دون أي اتصال بالإنترنت",
        "مكون عتادي داخل المعالج المركزي للكمبيوتر"
      ],
      "en": [
        "An application used through a web browser with no dedicated software to install",
        "A program requiring local .exe file installation before running",
        "An offline mobile game operating without network access",
        "A hardware component inside the central processing unit"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تطبيق الويب يعمل عبر متصفح الويب مباشرة دون الحاجة لتثبيت برامج مخصصة.",
      "en": "A web application runs directly in the browser with zero installation."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "تتكون البنية العامة لتطبيق الويب من ثلاث طبقات رئيسية هي:",
      "en": "The three tiers composing a web application architecture are:"
    },
    "opts": {
      "ar": [
        "الواجهة الأمامية، الواجهة الخلفية، وقاعدة البيانات",
        "المعالج، الذاكرة العشوائية، والقرص الصلب",
        "لوحة المفاتيح، الشاشة، والطابعة",
        "المتصفح، نظام التشغيل، وكرت الشاشة"
      ],
      "en": [
        "Frontend, Backend, and Database",
        "CPU, RAM, and Hard Disk",
        "Keyboard, Screen, and Printer",
        "Browser, OS, and GPU"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الطبقات الثلاث المعمارية هي: الواجهة الأمامية، الواجهة الخلفية، وقاعدة البيانات.",
      "en": "The three tiers are Frontend, Backend, and Database."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "أي طبقة من طبقات تطبيق الويب يراها المستخدم مباشرة وتعمل داخل المتصفح؟",
      "en": "Which web application tier does the user see directly that runs inside the browser?"
    },
    "opts": {
      "ar": [
        "الواجهة الأمامية (Frontend)",
        "الواجهة الخلفية (Backend)",
        "قاعدة البيانات (Database)",
        "خادم الاستعلامات"
      ],
      "en": [
        "Frontend Tier",
        "Backend Tier",
        "Database Tier",
        "Query Server"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الواجهة الأمامية هي الشاشة التي يراها المستخدم وتتفاعل معه في المتصفح.",
      "en": "The frontend is the presentation layer users directly interact with in the browser."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "ما الدور الأساسي للواجهة الخلفية (Backend) في تطبيق الويب؟",
      "en": "What is the primary role of the Backend tier in a web application?"
    },
    "opts": {
      "ar": [
        "معالجة البيانات واتخاذ القرارات وتطبيق قواعد التطبيق على الخادم",
        "تنسيق ألوان الخطوط وخلفيات الأزرار في المتصفح",
        "حفظ النسخ المطبوعة على أوراق في الأرشيف",
        "إيقاف تشغيل شاشة المستخدم عند حدوث عطل"
      ],
      "en": [
        "Server-side data processing, business logic, and decision making",
        "Styling button colors and font sizes in the browser",
        "Filing physical printed papers in office archives",
        "Shutting down the user display upon errors"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الواجهة الخلفية تعمل على جانب الخادم لمعالجة الطلبات وتطبيق قواعد العمل.",
      "en": "The backend executes business rules and processes requests on the server."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "عند البحث عن منتج في متجر إلكتروني، ما الخطوة التي تلي إرسال الواجهة الأمامية للكلمات إلى الواجهة الخلفية؟",
      "en": "In e-commerce search, what happens right after the frontend sends keywords to the backend?"
    },
    "opts": {
      "ar": [
        "تبحث الواجهة الخلفية في قاعدة البيانات عن المنتجات المطابقة للمعايير",
        "يقوم المتصفح بإغلاق الموقع فوراً",
        "يتم حذف حساب المستخدم من المتجر تلقائياً",
        "تقوم قاعدة البيانات بطباعة فاتورة ورقية"
      ],
      "en": [
        "Backend queries the database for products matching the criteria",
        "Browser terminates the session immediately",
        "User account is purged from system",
        "Database prints a paper invoice"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تستعلم الواجهة الخلفية قاعدة البيانات لاستخراج المنتجات المطابقة.",
      "en": "The backend searches the database for matching product records."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "في موقع مشاركة الفيديو (YouTube)، أين يتم تخزين ملفات الفيديو وسجلات المشاهدة؟",
      "en": "On a video sharing site like YouTube, where are video files and watch history stored?"
    },
    "opts": {
      "ar": [
        "في طبقة قاعدة البيانات (Database Tier)",
        "في الواجهة الأمامية للمستخدم",
        "داخل شاشة المتصفح",
        "على لوحة المفاتيح"
      ],
      "en": [
        "In the Database tier",
        "In the client frontend",
        "Inside the browser viewport",
        "On the physical keyboard"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تخزين وإدارة سجلات المشاهدة وبيانات الفيديو هو وظيفة قاعدة البيانات.",
      "en": "Storing video metadata and viewing history is the database role."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-1",
      "en": "Lesson 3-1"
    },
    "q": {
      "ar": "إذا فتحت صفحة حجز المواعيد في عيادة طبية بنجاح ولكن لم تظهر أي أوقات شاغرة، فأي جزء يعمل بشكل سليم؟",
      "en": "If a clinic booking page opens normally but shows no free slots, which tier is clearly working?"
    },
    "opts": {
      "ar": [
        "الواجهة الأمامية (Frontend) لأنها عرضت الصفحة بنجاح",
        "قاعدة البيانات لأنها لا تحتوي على أي سجلات",
        "الخادم لأنه رفض الاتصال",
        "شبكة الإنترنت مقطوعة بالكامل"
      ],
      "en": [
        "The Frontend tier because it rendered the booking page normally",
        "The Database tier because it has no records",
        "The Server because it refused requests",
        "Internet connection is dead"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "بما أن الصفحة فتحت، فالواجهة الأمامية تعمل سليمة والمشكلة في الخادم أو قاعدة البيانات.",
      "en": "The frontend works since the page opened; the fault is in the backend or database."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "في نموذج الاتصال عبر الويب، ما هو دور العميل (Client)؟",
      "en": "In the web communication model, what is the role of the Client?"
    },
    "opts": {
      "ar": [
        "الجانب الذي يطلب البيانات أو المعالجة من الخادم (مثل المتصفح)",
        "الجانب الذي يخزن جميع ملفات الموقع في العالم",
        "الكيبل البحري الذي ينقل الكهرباء بين القارات",
        "نظام التبريد في مراكز البيانات"
      ],
      "en": [
        "The side that requests data or processing from the server (e.g., browser)",
        "The host storing all global website files",
        "Subsea cable powering data centers",
        "Air conditioning system in servers"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "العميل هو الذي يطلب الموارد أو المعالجة من الخادم البعيد.",
      "en": "The client initiates requests for data or processing from the server."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "ما الفارق الأمني الجوهري بين بروتوكول HTTP وبروتوكول HTTPS؟",
      "en": "What is the critical security difference between HTTP and HTTPS?"
    },
    "opts": {
      "ar": [
        "بروتوكول HTTPS يضيف تشفير TLS لحماية سرية البيانات ومنع التنصت",
        "بروتوكول HTTP أسرع بألف مرة ولا يستخدم الإنترنت",
        "بروتوكول HTTPS مخصص للهواتف فقط دون الحواسيب",
        "لا يوجد أي فرق بينهما وهما اسمان لشيء واحد"
      ],
      "en": [
        "HTTPS adds TLS encryption protecting confidentiality and blocking eavesdropping",
        "HTTP is 1000x faster and does not use internet",
        "HTTPS only works on phones, not PCs",
        "They are identical synonyms"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "HTTPS يضيف تشفير TLS لحماية البيانات أثناء النقل ومنع اعتراضها.",
      "en": "HTTPS incorporates TLS encryption to protect payload privacy in transit."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "أي طريقة من طرق طلب HTTP تُستخدم عادة لطلب واسترجاع صفحة ويب أو نتائج بحث؟",
      "en": "Which HTTP request method is typically used to retrieve a web page or search results?"
    },
    "opts": {
      "ar": [
        "أسلوب GET",
        "أسلوب POST",
        "أسلوب DELETE",
        "أسلوب EXIT"
      ],
      "en": [
        "GET Method",
        "POST Method",
        "DELETE Method",
        "EXIT Method"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "أسلوب GET مخصص لجلب واسترجاع البيانات من الخادم.",
      "en": "GET method is designated for retrieving resources from the server."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "لماذا يُستخدم أسلوب POST عند إرسال بيانات تسجيل الدخول إلى الخادم؟",
      "en": "Why is the POST method used when submitting login credentials to the server?"
    },
    "opts": {
      "ar": [
        "لأنه يرسل البيانات الحساسة داخل جسم الطلب (Body) دون إظهارها في شريط العنوان",
        "لأنه يحذف كلمة المرور من قاعدة البيانات نهائياً",
        "لأنه يعمل بدون اتصال بالإنترنت",
        "لأن أسلوب GET محظور دولياً"
      ],
      "en": [
        "Because it packages sensitive payloads in the request body, not in the URL bar",
        "Because it deletes the password permanently",
        "Because it works offline",
        "Because GET is banned internationally"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "أسلوب POST يرسل البيانات في جسم الطلب لتأمينها ومعالجتها على الخادم.",
      "en": "POST encapsulates payloads inside the HTTP body rather than the query string."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "ماذا يعني رمز حالة HTTP رقم (200) في استجابة الخادم؟",
      "en": "What does HTTP status code 200 signify in a server response?"
    },
    "opts": {
      "ar": [
        "نجاح (Success) — تمت معالجة الطلب بنجاح تام",
        "الصفحة غير موجودة (Page Not Found)",
        "خطأ داخلي في الخادم (Server Error)",
        "انقطاع التيار الكهربائي عن الحاسوب"
      ],
      "en": [
        "Success (200 OK) — The request was processed successfully",
        "Page Not Found",
        "Server Error",
        "Power cut in data center"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "رمز الحالة 200 يعني نجاح معالجة الطلب وإرجاع البيانات المطلوبة.",
      "en": "200 indicates that the request completed successfully."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "عند كتابة عنوان خاطئ وتلقي رمز الحالة (404 Page Not Found)، فما سبب الخطأ؟",
      "en": "When receiving status code 404 Page Not Found, what caused the error?"
    },
    "opts": {
      "ar": [
        "المورد المطلوب غير موجود بهذا العنوان (خطأ في جانب العميل/الرابط)",
        "تعطل قاعدة البيانات بالكامل وتلف الأقراص",
        "نجاح معالجة الطلب وعرض البيانات",
        "امتلاء ذاكرة الهاتف الذكي بالصور"
      ],
      "en": [
        "The specified resource does not exist at this URL (Client-side URL mistake)",
        "Total database server hardware failure",
        "Successful request completion",
        "Smartphone storage is full"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "404 يعني أن الرابط المطلوب غير موجود على الخادم.",
      "en": "404 means the requested URL/resource was not found on the server."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-2",
      "en": "Lesson 3-2"
    },
    "q": {
      "ar": "ما هي صيغة JSON المستخدمة بكثرة في واجهات برمجة التطبيقات (API)؟",
      "en": "What is JSON format extensively utilized across web APIs?"
    },
    "opts": {
      "ar": [
        "صيغة نصية قياسية خفيفة وسهلة القراءة لتبادل البيانات بين الحواسيب",
        "لغة لتصميم الرسوم المتحركة ثلاثية الأبعاد",
        "برنامج لمكافحة الفيروسات والاختراقات",
        "نظام تشغيل مخصص للخوادم العملاقة"
      ],
      "en": [
        "Lightweight human-readable structured data format for computer exchange",
        "3D cartoon animation language",
        "Antivirus software application",
        "Operating system for mainframes"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "JSON هي صيغة نصية قياسية لتبادل البيانات المنظمة باستخدام المفاتيح والقيم.",
      "en": "JSON is a lightweight text standard for exchanging structured key-value data."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "في ثلاثية بناء الويب، ما هو الدور المميز للغة HTML وتشبيهها في كتاب الوزارة؟",
      "en": "In the web triad, what is the role and textbook analogy for HTML?"
    },
    "opts": {
      "ar": [
        "تحدد بنية وهيكل صفحة الويب (مثل هيكل المبنى الخرساني)",
        "تحدد ألوان الديكور والطلاء فقط",
        "تضيف الكهرباء والحركة والأنظمة التفاعلية",
        "تخزن كلمات المرور في قاعدة البيانات"
      ],
      "en": [
        "Defines the structure and skeleton of the web page (The frame of a building)",
        "Defines interior decoration colors only",
        "Adds electrical wiring and dynamic movement",
        "Stores passwords in the database"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة HTML تبني هيكل وبنية الصفحة وتشبّه بهيكل وأعمدة المبنى.",
      "en": "HTML specifies the page skeleton and is likened to a building's frame."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما التقنية المسؤولة عن تحديد مظهر صفحة الويب كالألوان والخطوط وهوامش العناصر؟",
      "en": "Which technology specifies the appearance of a web page like colors, fonts, and layout?"
    },
    "opts": {
      "ar": [
        "لغة CSS",
        "لغة HTML",
        "لغة SQL",
        "بروتوكول HTTP"
      ],
      "en": [
        "CSS Language",
        "HTML Language",
        "SQL Language",
        "HTTP Protocol"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة CSS هي المسؤولة عن المظهر والتنسيق والألوان والديكور.",
      "en": "CSS governs styling, layouts, fonts, and visual presentation."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما الدور الحيوي للغة JavaScript في صفحات الويب التفاعلية؟",
      "en": "What is the vital role of JavaScript in interactive web pages?"
    },
    "opts": {
      "ar": [
        "تضيف السلوك والتفاعل والاستجابة للنقرات وتحديث أجزاء من الشاشة",
        "تحدد نوع ورق الطباعة في المكتبات",
        "تحمي الكيابل من حرارة الشمس",
        "تقوم برسم الإطارات الخرسانية للموقع"
      ],
      "en": [
        "Adds dynamic behavior, interactivity, button event responses, and live DOM updates",
        "Selects paper quality for printing",
        "Protects cables from sunlight",
        "Draws concrete architectural blueprints"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لغة JavaScript تفعل السلوك التفاعلي وتستجيب لإجراءات المستخدم لحظياً.",
      "en": "JavaScript activates dynamic runtime interactions and reacts to user input."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما المقصود بـ HTML الدلالية (Semantic HTML)؟",
      "en": "What is meant by Semantic HTML according to the textbook?"
    },
    "opts": {
      "ar": [
        "استخدام وسوم توضح المعنى والوظيفة البنائية للعناصر مثل <header> و <nav> و <main>",
        "كتابة نصوص الشعر والقصائد الأدبية على الويب",
        "استخدام ألوان فسفورية مشعة لجذب الانتباه",
        "حذف جميع النصوص من الموقع وجعله صوراً فقط"
      ],
      "en": [
        "Using descriptive tags indicating meaning and structural role like <header>, <nav>, <main>",
        "Writing poetic literature on websites",
        "Using neon glowing colors for text",
        "Removing all text and using images only"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "HTML الدلالية تستخدم وسوماً تدل على وظيفة كل جزء من الصفحة.",
      "en": "Semantic HTML utilizes meaningful tags describing structural purpose."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما الفائدتان الأساسيتان لاعتماد لغة HTML الدلالية في الواجهة الأمامية؟",
      "en": "What are the two major advantages of adopting Semantic HTML?"
    },
    "opts": {
      "ar": [
        "تحسين إمكانية الوصول لقارئات الشاشة وتحسين ترتيب محركات البحث (SEO)",
        "مضاعفة استهلاك باقة الإنترنت وزيادة الإعلانات",
        "منع المستخدم من النقر على الروابط",
        "تسريع طباعة الأوراق على الطابعة الورقية"
      ],
      "en": [
        "Improved Accessibility for screen readers and Improved SEO for search engines",
        "Doubling cellular data consumption and ads",
        "Preventing users from clicking links",
        "Speeding up paper printing"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "HTML الدلالية تفيد قارئات الشاشة لضعاف البصر وتساعد محركات البحث على فهم المحتوى.",
      "en": "Semantic tags enhance accessibility for screen readers and SEO indexing."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما هو مفهوم التصميم المتجاوب (Responsive Design)؟",
      "en": "What is the concept of Responsive Design?"
    },
    "opts": {
      "ar": [
        "ضبط تخطيط الصفحة وأبعادها تلقائياً لتناسب شاشات الحواسيب والهواتف واللوحيات",
        "إرسال إشعارات صوتية للمستخدم عند كل ضغطة زر",
        "تغيير محتوى الموقع إلى لغة أجنبية تلقائياً",
        "إغلاق الموقع تلقائياً في أوقات الليل"
      ],
      "en": [
        "Automatically adjusting page layout to view gracefully on PCs, tablets, and phones",
        "Beeping loud audio notifications on every click",
        "Translating page content automatically into foreign languages",
        "Shutting down the site during nighttime"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "التصميم المتجاوب يتكيف تلقائياً مع مختلف مقاسات الشاشات دون تشويه.",
      "en": "Responsive design dynamically reflows layout across varying screen sizes."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 3-3",
      "en": "Lesson 3-3"
    },
    "q": {
      "ar": "ما هي الميزة الرئيسية التي يوفرها إطار عمل مثل React أو Next.js للمطورين؟",
      "en": "What is the main advantage of frontend frameworks like React or Next.js?"
    },
    "opts": {
      "ar": [
        "توفير مكونات برمجية ووظائف جاهزة ترفع كفاءة وسرعة بناء التطبيقات الضخمة",
        "إلغاء الحاجة لتعلم البرمجة تماماً",
        "تشغيل المواقع بدون أي خوادم أو إنترنت",
        "جعل شاشة الكمبيوتر تضيء بألوان قوس قزح"
      ],
      "en": [
        "Providing pre-built components and structures accelerating complex app development",
        "Eliminating the need to understand coding completely",
        "Running web applications with zero servers and zero internet",
        "Making monitors glow in rainbow colors"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "أطر العمل تتيح بناء الواجهات من مكونات جاهزة قابلة لإعادة الاستخدام بكفاءة عالية.",
      "en": "Frameworks provide reusable pre-built UI components and state logic."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 3",
      "en": "Unit 3 Synthesis"
    },
    "q": {
      "ar": "ماذا يقصد بنهج 'الأولوية للجوال' (Mobile-First) في هندسة الويب الحديثة؟",
      "en": "What is the 'Mobile-First' approach in modern web engineering?"
    },
    "opts": {
      "ar": [
        "البدء بتصميم واجهة الشاشات الصغيرة للهواتف من مرحلة التخطيط الأولى ثم التوسع للحواسيب",
        "حظر فتح المواقع من الحواسيب المكتبية نهائياً",
        "بيع الهواتف الذكية بنصف السعر للطلاب",
        "تخزين قواعد البيانات على شرائح الاتصال SIM"
      ],
      "en": [
        "Prioritizing small smartphone screen layouts from initial design before scaling to desktops",
        "Banning desktop access completely",
        "Discounting smartphone purchases for students",
        "Storing relational databases on SIM cards"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "نهج Mobile-First يبدأ بتصميم الهاتف أولاً لأن أغلب الزيارات تأتي منه اليوم.",
      "en": "Mobile-first prioritizes mobile screen constraints before expanding to desktop widths."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 3",
      "en": "Unit 3 Synthesis"
    },
    "q": {
      "ar": "إذا حدث خطأ من نوع (500 Internal Server Error) عند محاولة إتمام الشراء، فأين يقع العطل؟",
      "en": "If a user gets '500 Internal Server Error' during checkout, where did the failure occur?"
    },
    "opts": {
      "ar": [
        "في الخادم أو قاعدة البيانات (الواجهة الخلفية عجزت عن إكمال المعالجة)",
        "في فأرة أو لوحة مفاتيح المستخدم",
        "لأن المتصفح لا يدعم الألوان",
        "لأن الشاشة متسخة"
      ],
      "en": [
        "On the server or database (Backend failed to complete request processing)",
        "In the user's physical mouse or keyboard",
        "Because the browser does not support colors",
        "Because the monitor screen is dirty"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الرمز 500 يمثل عطلاً برمجياً داخلياً في خادم الويب أو قاعدة البيانات.",
      "en": "Code 500 indicates an unexpected server-side execution failure."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 3",
      "en": "Unit 3 Synthesis"
    },
    "q": {
      "ar": "لماذا تتبادل تطبيقات الويب الحديثة البيانات عبر واجهات API بصيغة JSON بدلاً من تحميل صفحات كاملة؟",
      "en": "Why do modern web apps exchange data via APIs in JSON format rather than reloading full pages?"
    },
    "opts": {
      "ar": [
        "لتحديث البيانات المطلوبة فقط بسرعة وخفة دون إعادة تحميل وتنزيل كامل الصفحة",
        "لأن صفحات الويب القديمة أصبحت ممنوعة دولياً",
        "لتوفير الحبر المستخدم في الشاشة",
        "لإجبار المستخدم على شراء بطاقة شحن جديدة"
      ],
      "en": [
        "To dynamically update requested data quickly without full-page refreshes",
        "Because older HTML pages are illegal",
        "To save monitor ink",
        "To force cellular recharge cards"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تبادل JSON عبر API يحدث أجزاء الشاشة بسرعة فائقة ويوفر استهلاك البيانات.",
      "en": "JSON API exchanges enable partial asynchronous DOM updates with minimal bandwidth."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 3",
      "en": "Unit 3 Synthesis"
    },
    "q": {
      "ar": "كيف تتعاون الطبقات الثلاث والبروتوكولات عند قيام طالب بتسجيل الدخول إلى منصة المدرسة؟",
      "en": "How do tiers and protocols cooperate when a student logs into the school platform?"
    },
    "opts": {
      "ar": [
        "تستقبل الواجهة الأمامية البيانات وترسلها بـ POST مشفر عبر HTTPS للخادم الخلفي، فيطابقها الخادم مع قاعدة البيانات ويرجع استجابة 200 بنجاح الدخول",
        "تقوم قاعدة البيانات بالاتصال بهاتف الطالب هاتفياً لإخباره بكلمة المرور",
        "تقوم لغة CSS بالتأكد من صحة الحساب دون تدخل الخادم",
        "يتم حفظ كلمة المرور على ورقة داخل كيبورد الحاسب"
      ],
      "en": [
        "Frontend collects input, sends POST encrypted via HTTPS to backend, which verifies against database and returns 200 OK",
        "Database makes a phone call to the student reading the password aloud",
        "CSS authenticates users without server interaction",
        "Password is typed on paper inside keyboard"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تتكامل الواجهة الأمامية مع الخادم وقاعدة البيانات بتشفير HTTPS لضمان الأمان والسرعة.",
      "en": "Frontend, encrypted HTTPS POST, backend auth logic, and database work in synergy."
    }
  }
];
export const unit3ExamQuestions = comprehensiveExamQuestions;
