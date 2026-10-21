import type { LocalizedText } from '@/types';

export interface Unit4Question {
  lesson?: LocalizedText;
  q: LocalizedText;
  opts: { ar: string[]; en: string[] };
  a: number;
  exp: LocalizedText;
  ref?: LocalizedText | string;
}

export const lessonQuizData: Record<'41' | '42' | '43' | '44', Unit4Question[]> = {
  "41": [
    {
      "q": {
        "ar": "ما نوع المعلومات التي ينقلها الراديو (Radio) وما اتجاه الاتصال فيه؟ (كتاب الوزارة ص 69)",
        "en": "What type of information does Radio convey, and what is its communication direction? (Textbook p. 76)"
      },
      "opts": {
        "ar": [
          "صوت فقط — اتصال أحادي الاتجاه (One-way) من المرسل للمتلقي",
          "فيديو وصوت — اتصال ثنائي الاتجاه",
          "نص وصور مطبوعة على ورق",
          "نماذج تفاعلية وتعليقات حية"
        ],
        "en": [
          "Audio only — One-way communication from sender to receiver",
          "Video and audio — Two-way interaction",
          "Printed text and images on paper",
          "Interactive forms and live comments"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "الراديو يعتمد على الصوت فقط (يخاطب السمع)، ويمكن الاستماع إليه أثناء التنقل، وهو وسيلة أحادية الاتجاه.",
        "en": "Radio conveys audio only, appeals to hearing while multitasking, and is one-way."
      },
      "ref": "كتاب المدرسة ص 69 جدول 1 / p. 76"
    },
    {
      "q": {
        "ar": "ما الخاصية التي تميز الصحيفة الورقية (Newspaper) عن الموقع الإلكتروني؟ (كتاب الوزارة ص 69)",
        "en": "Which characteristic distinguishes a Newspaper from a Website? (Textbook p. 76)"
      },
      "opts": {
        "ar": [
          "تبقى موجودة مادياً كوسيلة مطبوعة ويمكن قراءتها دون اتصال بالإنترنت",
          "تجمع بين النص والصورة والفيديو والصوت معاً",
          "تتيح تفاعلاً ثنائي الاتجاه عبر النماذج",
          "يمكن تحديث محتواها في أي لحظة بعد الطباعة"
        ],
        "en": [
          "Remains physically as a printed medium and can be read without an Internet connection",
          "Combines text, images, video, and audio",
          "Allows two-way interaction via forms",
          "Can be updated anytime after printing"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "الصحيفة وسيلة ورقية مطبوعة تبقى مادياً وتُقرأ دون الحاجة لاتصال بالإنترنت.",
        "en": "Newspapers remain physically on paper and can be read offline."
      },
      "ref": "كتاب المدرسة ص 69 / p. 76"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يُعد من نقاط قوة المواقع الإلكترونية (Strengths of websites)؟ (كتاب الوزارة ص 70)",
        "en": "Which of the following is a strength of websites? (Textbook p. 76)"
      },
      "opts": {
        "ar": [
          "الجمع بين معلومات متنوعة (نص، صور، فيديو) وتحديثها في أي وقت والوصول العالمي والتفاعل عبر النماذج",
          "وصول المعلومات تلقائياً للمستخدم دون أن يفتح الموقع",
          "العمل الكامل دائماً بدون أي شبكة أو متصفح",
          "ثبات سرعة التحميل بغض النظر عن جهاز المستخدم"
        ],
        "en": [
          "Combining diverse info (text, images, video), updating anytime, global access, and two-way forms",
          "Automatic delivery without users opening the site",
          "Operating completely without a browser",
          "Identical loading speed regardless of device"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "نقاط قوة الموقع الخمس: تنوع الوسائط، التحديث بأي وقت، الوصول العالمي، التفاعل ثنائي الاتجاه بالنماذج، واستخدامه بالمتصفح.",
        "en": "Website strengths: diverse media, anytime updates, global access, two-way interaction, and browser access."
      },
      "ref": "كتاب المدرسة ص 70 / p. 76"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية لا يمثل خاصية مناسبة للمواقع الإلكترونية؟ (كتاب الوزارة ص 71 / تدريب 2-1)",
        "en": "From the options below, choose the one that is NOT an appropriate characteristic of websites: (Textbook p. 78 / Try 2.1)"
      },
      "opts": {
        "ar": [
          "تصل المعلومات تلقائياً إلى المستخدمين دون أن يصلوا إليها بأنفسهم",
          "يمكن تحديث المعلومات في أي وقت",
          "يمكن الجمع بين النص والصور والفيديو وعرضها معاً",
          "التفاعل ثنائي الاتجاه ممكن من خلال النماذج والتعليقات"
        ],
        "en": [
          "Information automatically reaches users without them actively accessing it",
          "Information can be updated at any time",
          "Text, images, and video can be combined and presented",
          "Two-way interaction is possible through forms and comments"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "من قيود المواقع الإلكترونية أن المعلومات لا تصل للمستخدم إلا إذا بادر بفتح الموقع والوصول إليه بنفسه.",
        "en": "Information on a website does not reach users unless they actively access it."
      },
      "ref": "كتاب المدرسة ص 71 / p. 78"
    },
    {
      "q": {
        "ar": "حدد صواب أو خطأ: 'التلفزيون وسيلة تتيح التفاعل ثنائي الاتجاه مع المستخدمين.' (كتاب الوزارة ص 71 / مثال محلول 1-ب)",
        "en": "Mark True or False: 'TV is a medium that allows two-way interaction with users.' (Textbook p. 77 / Worked Example 1.B)"
      },
      "opts": {
        "ar": [
          "عبارة خاطئة (خطأ — التلفزيون وسيلة أحادية الاتجاه من المرسل للمتلقي)",
          "عبارة صحيحة تماماً",
          "صحيحة في البث الأرضي فقط",
          "صحيحة بدون كهرباء"
        ],
        "en": [
          "False (TV is a one-way medium from sender to receiver)",
          "Completely True",
          "True on analog TV only",
          "True without electricity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "خطأ؛ التلفزيون وسيلة أحادية الاتجاه (One-way) تنتقل فيها المعلومات من المرسل إلى المتلقي فقط.",
        "en": "False: TV is a one-way medium from sender to receiver."
      },
      "ref": "كتاب المدرسة ص 71 / p. 77"
    },
    {
      "q": {
        "ar": "ما الوسيلة الأنسب لـ 'جعل المستخدمين ينشرون معلومات عن منتج جديد عن طريق التناقل الشفهي (Word of mouth)'؟ (كتاب الوزارة ص 72 / تدريب 2-2)",
        "en": "Which medium is most suitable to 'have users spread information about a new product by word of mouth'? (Textbook p. 78 / Try 2.2)"
      },
      "opts": {
        "ar": [
          "وسائل التواصل الاجتماعي (SNS)",
          "التلفزيون (TV)",
          "البريد الإلكتروني الفردي",
          "الصحيفة الورقية"
        ],
        "en": [
          "SNS (Social Networking Services)",
          "TV",
          "Individual Email",
          "Newspaper"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "وسائل التواصل الاجتماعي (SNS) تتيح للمستخدمين مشاركة المنشورات ونشرها طوعاً بسرعة فائقة.",
        "en": "SNS enables users to voluntarily share and spread information by word of mouth."
      },
      "ref": "كتاب المدرسة ص 72 / p. 78"
    },
    {
      "q": {
        "ar": "ما الوسيلة الأنسب لـ 'إرسال معلومات حملة ترويجية مباشرة إلى العملاء الحاليين بشكل فردي'؟ (كتاب الوزارة ص 72 / تدريب 2-2)",
        "en": "Which medium is most suitable to 'send campaign information directly to existing customers'? (Textbook p. 78 / Try 2.2)"
      },
      "opts": {
        "ar": [
          "البريد الإلكتروني (Email) أو الرسائل المباشرة",
          "الراديو العام",
          "التلفزيون",
          "ملصق في الشارع"
        ],
        "en": [
          "Email / Direct Messages",
          "Public Radio",
          "TV Broadcast",
          "Street Poster"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "البريد الإلكتروني والرسائل المباشرة مثالية لإيصال المعلومات مباشرة وبشكل فردي لأشخاص محددين.",
        "en": "Email and direct messages deliver information individually to specific people."
      },
      "ref": "كتاب المدرسة ص 70 و 72 / p. 77"
    },
    {
      "q": {
        "ar": "ما الوسيلة الأنسب لـ 'توصيل فيديو عن منتج جديد إلى عدد كبير من الناس في آنٍ واحد'؟ (كتاب الوزارة ص 72 / تدريب 2-2)",
        "en": "Which medium is most suitable to 'deliver video of a new product to many people at once'? (Textbook p. 78 / Try 2.2)"
      },
      "opts": {
        "ar": [
          "التلفزيون (TV)",
          "الراديو (Radio)",
          "الصحيفة الورقية",
          "الرسائل النصية القصيرة"
        ],
        "en": [
          "TV",
          "Radio",
          "Printed Newspaper",
          "SMS Text"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التلفزيون يصل إلى عدد كبير من الناس في وقت واحد بالصوت والصورة (الفيديو).",
        "en": "TV reaches many people simultaneously with video and audio."
      },
      "ref": "كتاب المدرسة ص 71 و 72 / p. 78"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يصف خصائص الوسائط بأنسب شكل؟ (كتاب الوزارة ص 73 / تمرين 3-1)",
        "en": "Which option most appropriately describes the characteristics of media? (Textbook p. 80 / Exercise 3.1)"
      },
      "opts": {
        "ar": [
          "وسائل التواصل الاجتماعي (SNS) وسيلة تتيح للمستخدمين نشر المعلومات ومشاركتها",
          "الراديو وسيلة تنقل المعلومات من خلال الفيديو والصوت",
          "الصحف وسائل فعالة للغاية في نشر المعلومات التفاعلية ثنائية الاتجاه لحظياً",
          "التلفزيون وسيلة تتيح التفاعل ثنائي الاتجاه مع المستخدمين"
        ],
        "en": [
          "SNS is a medium that allows users to post and share information",
          "Radio conveys information through video and audio",
          "Newspapers spread interactive two-way info instantaneously",
          "TV allows two-way interaction with users"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "وسائل التواصل الاجتماعي (SNS) ثنائية الاتجاه وتسمح للمستخدمين بالنشر والمشاركة.",
        "en": "SNS is a two-way medium allowing users to post and share information."
      },
      "ref": "كتاب المدرسة ص 73 / p. 80"
    },
    {
      "q": {
        "ar": "لماذا تجمع المؤسسات في الواقع العملي بين التلفزيون والموقع الإلكتروني ووسائل التواصل معاً؟ (كتاب الوزارة ص 70 - 71)",
        "en": "Why do organizations combine TV, a Website, and SNS in practice? (Textbook pp. 77 - 78)"
      },
      "opts": {
        "ar": [
          "لأن التلفزيون يحقق الانتشار الواسع، والموقع يوفر العمق والتفاصيل، و SNS يحقق الانتشار بالتناقل الشفهي",
          "لأن استخدام وسيلة واحدة ممنوع قانونياً",
          "لأن الموقع الإلكتروني لا يمكنه عرض النصوص",
          "لأن التلفزيون يعمل بدون كهرباء"
        ],
        "en": [
          "TV provides wide reach, the Website provides detailed depth, and SNS drives word-of-mouth spreading",
          "Using a single medium is legally prohibited",
          "Websites cannot display text",
          "TV operates without electricity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "الجمع بين الوسائط يوظف نقطة قوة كل وسيلة: الانتشار (TV)، العمق (Website)، والتناقل الشفهي (SNS).",
        "en": "Combining media leverages each channel's strength: reach (TV), depth (Website), and word-of-mouth (SNS)."
      },
      "ref": "كتاب المدرسة ص 71 / p. 78"
    }
  ],
  "42": [
    {
      "q": {
        "ar": "ما المصطلح الذي يُطلق على الصورة النموذجية لمن سيستخدم الموقع الإلكتروني، والتي تُعد كشخص ملموس؟ (كتاب الوزارة ص 78 / تدريب 1-1)",
        "en": "What is the term for a typical user image of those who will use the website, set up as a concrete person? (Textbook p. 85 / Try 1.1)"
      },
      "opts": {
        "ar": [
          "شخصية المستخدم (Persona)",
          "المخطط الهيكلي (Wireframe)",
          "خادم الويب (Web Server)",
          "معدل التحويل (CVR)"
        ],
        "en": [
          "Persona",
          "Wireframe",
          "Web Server",
          "Conversion Rate (CVR)"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "شخصية المستخدم (Persona) هي تمثيل لمستخدم نموذجي كشخص ملموس لتوضيح احتياجاته وأهدافه.",
        "en": "A persona represents a typical target user as a concrete person to clarify what they need."
      },
      "ref": "كتاب المدرسة ص 75 / p. 82"
    },
    {
      "q": {
        "ar": "ما المصطلح المستخدم لمخطط أولي يوضح مكان وأولوية المعلومات في صفحة الويب دون ألوان أو زخارف؟ (كتاب الوزارة ص 78 / تدريب 1-2)",
        "en": "What is the term for a blueprint that shows the placement and priority of information on a web page? (Textbook p. 85 / Try 1.2)"
      },
      "opts": {
        "ar": [
          "المخطط الهيكلي (Wireframe)",
          "شخصية المستخدم (Persona)",
          "قاعدة البيانات (Database)",
          "ملف التنسيق (CSS)"
        ],
        "en": [
          "Wireframe",
          "Persona",
          "Database",
          "CSS Stylesheet"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "المخطط الهيكلي (Wireframe) يحدد أماكن العناصر وأولوياتها قبل التصميم البصري النهائي.",
        "en": "A wireframe is a rough layout blueprint determining placement and priority of information."
      },
      "ref": "كتاب المدرسة ص 75 / p. 82"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية لا يُعد معلومة مناسبة لإدراجها عند إعداد شخصية مستخدم نموذجية (Persona)؟ (كتاب الوزارة ص 78 / تدريب 2-1)",
        "en": "Which option is NOT an appropriate piece of information to include in setting up a persona? (Textbook p. 85 / Try 2.1)"
      },
      "opts": {
        "ar": [
          "أداء خادم الموقع الإلكتروني (Server performance)",
          "عمر المستخدم ومهنته",
          "غرض المستخدم من استخدام الموقع الإلكتروني",
          "التحديات التي يواجهها المستخدم"
        ],
        "en": [
          "The performance of the website's server",
          "The user's age and occupation",
          "The user's purpose for using the website",
          "The challenges the user faces"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "أداء خادم الموقع معلومة تقنية لا علاقة لها بوصف شخصية المستخدم واحتياجاته.",
        "en": "Server performance is a backend metric, not part of a user persona."
      },
      "ref": "كتاب المدرسة ص 78 / p. 85"
    },
    {
      "q": {
        "ar": "إلى أي مبدأ من مبادئ CRAP الأربعة ينتمي 'جعل العناوين كبيرة وغامقة لتمييزها عن نص المحتوى'؟ (كتاب الوزارة ص 78 / تدريب 2-2-1)",
        "en": "Which CRAP principle corresponds to 'making headings large and bold to distinguish them from body text'? (Textbook p. 85 / Try 2.2.a)"
      },
      "opts": {
        "ar": [
          "التباين (Contrast)",
          "التكرار (Repetition)",
          "المحاذاة (Alignment)",
          "التقارب (Proximity)"
        ],
        "en": [
          "Contrast",
          "Repetition",
          "Alignment",
          "Proximity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التباين (Contrast) يبرز العناصر الأهم بصرياً ويوضح أولوية المعلومات.",
        "en": "Contrast highlights important elements and visually indicates priority."
      },
      "ref": "كتاب المدرسة ص 76 و 78 / p. 83"
    },
    {
      "q": {
        "ar": "إلى أي مبدأ من مبادئ CRAP الأربعة ينتمي 'تجميع أسماء المنتجات وأسعارها وصورها قريبة من بعضها'؟ (كتاب الوزارة ص 78 / تدريب 2-2-2)",
        "en": "Which CRAP principle corresponds to 'grouping product names, prices, and photos close together'? (Textbook p. 85 / Try 2.2.b)"
      },
      "opts": {
        "ar": [
          "التقارب (Proximity)",
          "التباين (Contrast)",
          "التكرار (Repetition)",
          "المحاذاة (Alignment)"
        ],
        "en": [
          "Proximity",
          "Contrast",
          "Repetition",
          "Alignment"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التقارب (Proximity) يضع المعلومات المرتبطة قريبة من بعضها لتُدرك كمجموعة واحدة.",
        "en": "Proximity places related information close together so it is seen as a single group."
      },
      "ref": "كتاب المدرسة ص 76 و 78 / p. 83"
    },
    {
      "q": {
        "ar": "إلى أي مبدأ من مبادئ CRAP ينتمي 'محاذاة الحواف للنص والصور وفق خط أساس مشترك'؟ (كتاب الوزارة ص 78 / تدريب 2-2-3)",
        "en": "Which CRAP principle corresponds to 'aligning the edges of text and images to a common baseline'? (Textbook p. 85 / Try 2.2.c)"
      },
      "opts": {
        "ar": [
          "المحاذاة (Alignment)",
          "التباين (Contrast)",
          "التكرار (Repetition)",
          "التقارب (Proximity)"
        ],
        "en": [
          "Alignment",
          "Contrast",
          "Repetition",
          "Proximity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "المحاذاة (Alignment) تضبط مواضع العناصر على خط أساس مشترك لمنح الشاشة نظاماً وترتيباً.",
        "en": "Alignment lines up elements along a common baseline to give order to the screen."
      },
      "ref": "كتاب المدرسة ص 76 و 78 / p. 83"
    },
    {
      "q": {
        "ar": "إلى أي مبدأ من مبادئ CRAP ينتمي 'توحيد خط ولون العناوين في جميع الصفحات'؟ (كتاب الوزارة ص 78 / تدريب 2-2-4)",
        "en": "Which CRAP principle corresponds to 'standardizing the font and color of headings across all pages'? (Textbook p. 85 / Try 2.2.d)"
      },
      "opts": {
        "ar": [
          "التكرار (Repetition)",
          "التباين (Contrast)",
          "المحاذاة (Alignment)",
          "التقارب (Proximity)"
        ],
        "en": [
          "Repetition",
          "Contrast",
          "Alignment",
          "Proximity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التكرار (Repetition) يكرر نفس النمط والألوان عبر الصفحات لمنح الموقع اتساقاً ومظهراً موحداً.",
        "en": "Repetition repeats visual characteristics across pages to maintain consistency."
      },
      "ref": "كتاب المدرسة ص 76 و 78 / p. 83"
    },
    {
      "q": {
        "ar": "حدد صواب أو خطأ: 'المخطط الهيكلي (Wireframe) هو تصميم بنسخته النهائية يتضمن الألوان والزخارف التصميمية.' (كتاب الوزارة ص 77 / مثال محلول 1-ب)",
        "en": "Mark True or False: 'A wireframe is a final-version design that includes color and design decoration.' (Textbook p. 84 / Worked Example 1.B)"
      },
      "opts": {
        "ar": [
          "عبارة خاطئة (خطأ — مخطط أولي بدون ألوان لتحديد مكان وأولوية المعلومات)",
          "عبارة صحيحة تماماً",
          "صحيحة في مواقع الألعاب فقط",
          "صحيحة بعد نشر الموقع"
        ],
        "en": [
          "False (It is a rough blueprint without color/decoration to fix placement and priority)",
          "Completely True",
          "True for gaming sites only",
          "True after launch"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "خطأ؛ المخطط الهيكلي لا يتضمن ألواناً أو زخارف، بل يحدد مكان وأولوية المعلومات أولاً.",
        "en": "False: A wireframe excludes color and decoration to focus on placement and priority."
      },
      "ref": "كتاب المدرسة ص 77 / p. 84"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية غير مدرج ضمن المبادئ الأربعة للتصميم (مبادئ CRAP)؟ (كتاب الوزارة ص 80 / تمرين 3-1)",
        "en": "Which of the following is NOT included in the four principles of design (CRAP principles)? (Textbook p. 87 / Exercise 3.1)"
      },
      "opts": {
        "ar": [
          "التشفير (Encryption)",
          "التباين (Contrast)",
          "المحاذاة (Alignment)",
          "التقارب (Proximity)"
        ],
        "en": [
          "Encryption",
          "Contrast",
          "Alignment",
          "Proximity"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التشفير (Encryption) تقنية أمن سيبراني وليس من مبادئ التصميم البصري CRAP.",
        "en": "Encryption is a security technology, not one of the CRAP design principles."
      },
      "ref": "كتاب المدرسة ص 80 / p. 87"
    },
    {
      "q": {
        "ar": "أي خيار يصف مفهوم التصميم المتمحور حول المستخدم (UCD) بأنسب شكل؟ (كتاب الوزارة ص 80 / تمرين 3-2)",
        "en": "Which option most appropriately describes User-Centered Design (UCD)? (Textbook p. 87 / Exercise 3.2)"
      },
      "opts": {
        "ar": [
          "بدء التصميم انطلاقاً مما يحتاجه المستخدم",
          "إعطاء الأولوية للتصميم الذي يجده المطوّر سهل الاستخدام",
          "إعطاء الأهمية القصوى للتصميم البصري فقط",
          "استخدام أكبر عدد ممكن من أحدث التقنيات"
        ],
        "en": [
          "Begin the design from what the user needs",
          "Prioritize the design that the developer finds easy to use",
          "Place highest importance on visual decoration alone",
          "Use as many of the latest technologies as possible"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التصميم المتمحور حول المستخدم (UCD) يبدأ دائماً من فهم احتياجات المستخدم وسياق استخدامه.",
        "en": "UCD always begins design from what the user needs and their perspective."
      },
      "ref": "كتاب المدرسة ص 80 / p. 87"
    }
  ],
  "43": [
    {
      "q": {
        "ar": "ما المصطلح الخاص بالطريقة التي تُقيّم الموقع نوعياً من خلال مراقبة آراء المستخدمين وسلوكهم لاستكشاف الأسباب؟ (كتاب الوزارة ص 84 / تدريب 1-1)",
        "en": "What is the term for the method that evaluates qualitatively by observing user voices and behavior? (Textbook p. 91 / Try 1.1)"
      },
      "opts": {
        "ar": [
          "التقييم النوعي (Qualitative Evaluation)",
          "التقييم الكمي (Quantitative Evaluation)",
          "ضغط الملفات (Compression)",
          "التخزين المؤقت (Caching)"
        ],
        "en": [
          "Qualitative Evaluation",
          "Quantitative Evaluation",
          "File Compression",
          "Browser Caching"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التقييم النوعي (Qualitative Evaluation) يستكشف 'لماذا' يتصرف المستخدمون هكذا عبر الملاحظة والمقابلات.",
        "en": "Qualitative evaluation explores the 'why' behind user behavior through observation and interviews."
      },
      "ref": "كتاب المدرسة ص 82 و 84 / p. 89"
    },
    {
      "q": {
        "ar": "ما المصطلح الخاص بالطريقة التي تُقيّم الموقع كمياً وإحصائياً باستخدام بيانات عددية؟ (كتاب الوزارة ص 84 / تدريب 1-2)",
        "en": "What is the term for the method that evaluates quantitatively using numerical data? (Textbook p. 91 / Try 1.2)"
      },
      "opts": {
        "ar": [
          "التقييم الكمي (Quantitative Evaluation)",
          "التقييم النوعي (Qualitative Evaluation)",
          "المخطط الهيكلي (Wireframe)",
          "التفكير التصميمي"
        ],
        "en": [
          "Quantitative Evaluation",
          "Qualitative Evaluation",
          "Wireframe",
          "Design Thinking"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التقييم الكمي (Quantitative Evaluation) يقيس السلوك والنتائج بالأرقام مثل أعداد الوصول والوقت.",
        "en": "Quantitative evaluation uses numerical metrics to objectively measure usage."
      },
      "ref": "كتاب المدرسة ص 82 و 84 / p. 89"
    },
    {
      "q": {
        "ar": "ما الاختصار المكوّن من حرفين للمؤشر الذي يُظهر العدد الإجمالي لمرات مشاهدة صفحة ما؟ (كتاب الوزارة ص 84 / تدريب 1-3)",
        "en": "What is the two-letter abbreviation for the indicator showing the number of times a page has been viewed? (Textbook p. 91 / Try 1.3)"
      },
      "opts": {
        "ar": [
          "PV (Page View — مشاهدات الصفحة)",
          "CVR (معدل التحويل)",
          "UI (واجهة المستخدم)",
          "IP (عنوان الشبكة)"
        ],
        "en": [
          "PV (Page View)",
          "CVR (Conversion Rate)",
          "UI (User Interface)",
          "IP (Internet Protocol)"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "PV (اختصار Page View) هو المؤشر الأساسي لإجمالي عدد مرات مشاهدة الصفحة.",
        "en": "PV (Page View) indicates the total number of times a page has been viewed."
      },
      "ref": "كتاب المدرسة ص 83 و 84 / p. 90"
    },
    {
      "q": {
        "ar": "ما المؤشر الذي يوضح 'نسبة الزيارات التي انتهت بعد مشاهدة الصفحة الأولى فقط'؟ (كتاب الوزارة ص 84 / مثال محلول 2-2)",
        "en": "Which indicator shows the proportion of visits that ended after viewing only the first page? (Textbook p. 90 / Worked Example 2.b)"
      },
      "opts": {
        "ar": [
          "معدل الارتداد (Bounce Rate)",
          "معدل التحويل (CVR)",
          "مشاهدات الصفحة (PV)",
          "سرعة التحميل"
        ],
        "en": [
          "Bounce Rate",
          "Conversion Rate (CVR)",
          "Page View (PV)",
          "Loading Speed"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "معدل الارتداد (Bounce Rate) يقيس نسبة الزيارات التي غادر أصحابها الموقع بعد الصفحة الأولى فقط.",
        "en": "Bounce rate is the proportion of visits ending after viewing only the first page."
      },
      "ref": "كتاب المدرسة ص 83 و 84 / p. 90"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يصف معدل التحويل (Conversion Rate — CVR) بأفضل شكل؟ (كتاب الوزارة ص 84 / تدريب 2-2)",
        "en": "Which option most appropriately describes the Conversion Rate (CVR)? (Textbook p. 92 / Try 2.2)"
      },
      "opts": {
        "ar": [
          "نسبة الزيارات التي حققت إجراءً مستهدفاً (شراء منتج، تسجيل عضوية، إلخ)",
          "نسبة مرات مشاهدة صفحة ما",
          "نسبة الزيارات التي انتهت بعد مشاهدة الصفحة الأولى فقط",
          "نسبة الصفحات المشاهدة إلى إجمالي عدد صفحات الموقع"
        ],
        "en": [
          "The proportion of visits that achieved a target action (product purchase, member registration, etc.)",
          "The proportion of times a page has been viewed",
          "The proportion of visits that ended after viewing only the first page",
          "The proportion of viewed pages relative to total site pages"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "معدل التحويل (CVR) يقيس نسبة الجلسات أو الزيارات التي أنجزت الهدف المرجو كالشراء أو التسجيل.",
        "en": "CVR measures the share of visits achieving the target action."
      },
      "ref": "كتاب المدرسة ص 84 و 85 / p. 92"
    },
    {
      "q": {
        "ar": "حدد صواب أو خطأ: 'التقييم النوعي طريقة تستخدم بيانات عددية للتقييم كمياً.' (كتاب الوزارة ص 84 / مثال محلول 1-أ)",
        "en": "Mark True or False: 'Qualitative evaluation is a method that uses numerical data to evaluate quantitatively.' (Textbook p. 90 / Worked Example 1.A)"
      },
      "opts": {
        "ar": [
          "عبارة خاطئة (خطأ — استخدام البيانات العددية هو التقييم الكمي)",
          "عبارة صحيحة تماماً",
          "صحيحة في المتاجر فقط",
          "صحيحة بدون مستخدمين"
        ],
        "en": [
          "False (Using numerical data is Quantitative Evaluation)",
          "Completely True",
          "True for e-commerce only",
          "True without users"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "خطأ؛ التقييم النوعي يراقب آراء وسلوك المستخدمين، بينما استخدام البيانات العددية هو التقييم الكمي.",
        "en": "False: Qualitative evaluation observes user voices and behavior; numerical data is quantitative."
      },
      "ref": "كتاب المدرسة ص 84 / p. 91"
    },
    {
      "q": {
        "ar": "إلى أي فئة ينتمي كل من: (1) جعل المستخدمين يستكشفون الموقع ومراقبة قابلية استخدامه، و(2) إحصاء عدد مرات الوصول ومشاهدات الصفحة؟ (كتاب الوزارة ص 86 / تمرين 3-1)",
        "en": "Classify: (a) Have users explore the site and observe usability, and (b) Tally access counts and page views: (Textbook p. 93 / Exercise 3.1)"
      },
      "opts": {
        "ar": [
          "(1) تقييم نوعي (Qualitative) — و(2) تقييم كمي (Quantitative)",
          "(1) تقييم كمي — و(2) تقييم نوعي",
          "كلاهما تقييم كمي فقط",
          "كلاهما تقييم نوعي فقط"
        ],
        "en": [
          "(a) Qualitative evaluation — and (b) Quantitative evaluation",
          "(a) Quantitative — and (b) Qualitative",
          "Both are Quantitative only",
          "Both are Qualitative only"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "مراقبة قابلية الاستخدام والمقابلات هي تقييم نوعي، بينما إحصاء المشاهدات والوصول هو تقييم كمي.",
        "en": "Observing usability and interviews are qualitative; tallying access counts and PVs is quantitative."
      },
      "ref": "كتاب المدرسة ص 86 / p. 93"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يصف التقييم الإرشادي (Heuristic Evaluation) بأفضل شكل؟ (كتاب الوزارة ص 86 / تمرين 3-2)",
        "en": "Which option most appropriately describes Heuristic Evaluation? (Textbook p. 94 / Exercise 3.2)"
      },
      "opts": {
        "ar": [
          "طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم استناداً إلى قواعد عملية (Rules of thumb)",
          "طريقة يستكشف فيها المستخدمون العاديون الموقع وتُراقب قابلية الاستخدام",
          "طريقة يتم فيها إحصاء بيانات عددية وتحليل استخدام الموقع",
          "طريقة يتم فيها إعداد نمطين ومقارنتهما بالبيانات"
        ],
        "en": [
          "A method in which experts identify UI problems based on rules of thumb",
          "A method where general users explore the site while observed",
          "A method tallying numerical data to analyze site usage",
          "A method comparing two patterns with data"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التقييم الإرشادي هو مراجعة يجريها الخبراء لواجهة المستخدم استناداً إلى قواعد إرشادية عملية.",
        "en": "In heuristic evaluation, experts inspect the UI against established rules of thumb."
      },
      "ref": "كتاب المدرسة ص 86 / p. 94"
    },
    {
      "q": {
        "ar": "ما المنظورات الثلاثة الرئيسية للتقييم الإرشادي المذكورة في كتاب الوزارة؟ (كتاب الوزارة ص 83)",
        "en": "What are the three major evaluation perspectives in Heuristic Evaluation listed in the textbook? (Textbook p. 90)"
      },
      "opts": {
        "ar": [
          "الاتساق (Consistency)، منع الأخطاء (Error prevention)، ووضوح حالة النظام (Visibility of system status)",
          "السعر، حجم الشاشة، ونوع الكيبل",
          "السرعة، التشفير، والنسخ الاحتياطي",
          "الراديو، التلفزيون، والصحف"
        ],
        "en": [
          "Consistency, Error prevention, and Visibility of system status",
          "Price, screen size, and cable type",
          "Speed, encryption, and backup",
          "Radio, TV, and newspapers"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "منظورات التقييم الإرشادي الثلاثة بالكتاب هي: الاتساق، منع الأخطاء، ووضوح حالة النظام.",
        "en": "The three heuristic perspectives are Consistency, Error prevention, and Visibility of system status."
      },
      "ref": "كتاب المدرسة ص 83 / p. 90"
    },
    {
      "q": {
        "ar": "لماذا يوصى بالجمع بين التقييم الكمي والتقييم النوعي عند تقييم موقع إلكتروني؟ (كتاب الوزارة ص 82 و 84)",
        "en": "Why is combining quantitative and qualitative evaluation recommended? (Textbook pp. 89 & 91)"
      },
      "opts": {
        "ar": [
          "لأن التقييم الكمي يُظهر 'كم' يحدث بالأرقام، والتقييم النوعي يكشف 'لماذا' يحدث ذلك من المستخدمين",
          "لإلغاء الحاجة لتحديث الموقع",
          "لأن التقييم الكمي لا يستخدم الأرقام",
          "لتقليل عدد زوار الموقع"
        ],
        "en": [
          "Because quantitative shows 'how much' is happening in numbers, while qualitative reveals 'why' from users",
          "To avoid updating the website",
          "Because quantitative does not use numbers",
          "To reduce website traffic"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "الأرقام تكشف ماذا وكم يحدث، وآراء وملاحظة المستخدمين تكشف الأسباب الكامنة وراء ذلك.",
        "en": "Numbers show how much is happening; qualitative methods explain why."
      },
      "ref": "كتاب المدرسة ص 82 و 85 / p. 93"
    }
  ],
  "44": [
    {
      "q": {
        "ar": "ما مصطلح طريقة التحسين المستمر التي تكرر الخطوات الأربع: خطّط (Plan) ← نفّذ (Do) ← تحقّق (Check) ← تصرّف (Act)؟ (كتاب الوزارة ص 91 / تدريب 1-1)",
        "en": "What is the term for the improvement method that repeats Plan → Do → Check → Act? (Textbook p. 99 / Try 1.1)"
      },
      "opts": {
        "ar": [
          "دورة PDCA (PDCA Cycle)",
          "مبادئ CRAP",
          "بروتوكول HTTPS",
          "المخطط الهيكلي"
        ],
        "en": [
          "PDCA Cycle",
          "CRAP Principles",
          "HTTPS Protocol",
          "Wireframe"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "دورة PDCA هي حلقة التحسين المستمر التي تكرر خطوات Plan ثم Do ثم Check ثم Act.",
        "en": "The PDCA cycle continuously advances improvement through Plan, Do, Check, and Act."
      },
      "ref": "كتاب المدرسة ص 88 و 91 / p. 96"
    },
    {
      "q": {
        "ar": "ما مصطلح طريقة التفكير لاكتشاف المشكلات وتوليد الحلول من منظور المستخدم عبر 5 خطوات؟ (كتاب الوزارة ص 91 / تدريب 1-2)",
        "en": "What is the term for the way of thinking for discovering problems and generating solutions from the user's perspective? (Textbook p. 99 / Try 1.2)"
      },
      "opts": {
        "ar": [
          "التفكير التصميمي (Design Thinking)",
          "تحليلات الويب الرقمية",
          "التقييم الكمي",
          "برمجة الخادم"
        ],
        "en": [
          "Design Thinking",
          "Web Analytics",
          "Quantitative Evaluation",
          "Backend Coding"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التفكير التصميمي (Design Thinking) يكتشف المشكلات ويولد الحلول من منظور المستخدم.",
        "en": "Design thinking discovers problems and generates solutions from the user's perspective."
      },
      "ref": "كتاب المدرسة ص 89 و 91 / p. 97"
    },
    {
      "q": {
        "ar": "ما مصطلح الطريقة التي يُعدّ فيها نمطان (A و B) ويُقارنان بالبيانات الفعلية لمعرفة أيهما أكثر فعالية؟ (كتاب الوزارة ص 91 / تدريب 1-3)",
        "en": "What is the term for the method in which two patterns are prepared and compared with data to see which is more effective? (Textbook p. 99 / Try 1.3)"
      },
      "opts": {
        "ar": [
          "اختبار A/B (A/B Testing)",
          "التقييم الإرشادي",
          "المقابلات الشخصية",
          "المخطط الهيكلي"
        ],
        "en": [
          "A/B Testing",
          "Heuristic Evaluation",
          "User Interviews",
          "Wireframing"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "اختبار A/B يقارن بين نسختين (A و B) على مستخدمين فعليين لحسم الخيار الأفضل بالبيانات.",
        "en": "A/B testing compares Option A and Option B with real user data."
      },
      "ref": "كتاب المدرسة ص 90 و 91 / p. 97"
    },
    {
      "q": {
        "ar": "من الخيارات التالية، اختر ما يقابل خطوة 'تحقّق (Check)' في دورة PDCA: (كتاب الوزارة ص 91 / تدريب 2-1)",
        "en": "From the options below, choose the one that corresponds to 'Check' in the PDCA cycle: (Textbook p. 99 / Try 2.1)"
      },
      "opts": {
        "ar": [
          "قِس معدل الارتداد بعد التغيير",
          "حدّد هدف خفض معدل الارتداد بنسبة 10%",
          "غيّر تصميم الصفحة الرئيسية",
          "فكّر في إجراء تحسين آخر"
        ],
        "en": [
          "Measure the bounce rate after the change",
          "Set the goal of reducing the bounce rate by 10%",
          "Change the design of the homepage",
          "Consider another improvement measure"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "تحديد الهدف هو Plan، وتغيير التصميم هو Do، وقياس معدل الارتداد بعد التغيير هو Check، والتفكير في الإجراء التالي هو Act.",
        "en": "Setting the goal is Plan, changing design is Do, measuring results is Check, and considering next measures is Act."
      },
      "ref": "كتاب المدرسة ص 88 و 91 / p. 99"
    },
    {
      "q": {
        "ar": "من الخيارات التالية، اختر ما لا يُعد طريقة مناسبة لإجراء اختبار A/B: (كتاب الوزارة ص 91 / تدريب 2-2)",
        "en": "From the options below, choose the one that is NOT an appropriate way of conducting A/B testing: (Textbook p. 99 / Try 2.2)"
      },
      "opts": {
        "ar": [
          "تغيير عدة عناصر في الوقت نفسه",
          "إعداد نمطين ومقارنتهما",
          "اتخاذ القرارات فقط بعد جمع كمية كافية من البيانات",
          "عرض كل نمط على مستخدمين فعليين"
        ],
        "en": [
          "Change multiple elements at the same time",
          "Prepare two patterns and compare them",
          "Make decisions only after collecting a sufficient amount of data",
          "Show each pattern to actual users"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "في اختبار A/B يجب تغيير عنصر واحد فقط في كل مرة؛ لأن تغيير عدة عناصر معاً يمنع معرفة أي عنصر أحدث الأثر.",
        "en": "In A/B testing, change only one element at a time so you know exactly which change caused the effect."
      },
      "ref": "كتاب المدرسة ص 90 و 91 / p. 99"
    },
    {
      "q": {
        "ar": "ما الخطوة الرابعة في التفكير التصميمي التي تعني 'إنشاء مسودة أو نموذج أولي سريع قابل للتجربة بناءً على الأفكار'؟ (كتاب الوزارة ص 89 - 90)",
        "en": "Which step of Design Thinking means 'quickly creating a testable draft based on ideas'? (Textbook pp. 97 - 98)"
      },
      "opts": {
        "ar": [
          "النموذج الأولي (Prototype)",
          "التعاطف (Empathize)",
          "التعريف (Define)",
          "توليد الأفكار (Ideate)"
        ],
        "en": [
          "Prototype",
          "Empathize",
          "Define",
          "Ideate"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "خطوة النموذج الأولي (Prototype) هي بناء نموذج سريع قابل للتجربة قبل خطوة الاختبار (Test).",
        "en": "Prototype is the fourth step where a quick, testable model is built."
      },
      "ref": "كتاب المدرسة ص 89 و 90 / p. 97"
    },
    {
      "q": {
        "ar": "حدد صواب أو خطأ: 'التفكير التصميمي طريقة تفكير تحل المشكلات من منظور المطوّر، ودورة PDCA تكتمل بعد تنفيذ واحد.' (كتاب الوزارة ص 90 / مثال محلول 1-ب,د)",
        "en": "Mark True or False: 'Design thinking solves problems from the developer's perspective, and PDCA is complete after one execution.' (Textbook p. 98 / Worked Example 1.B,D)"
      },
      "opts": {
        "ar": [
          "عبارة خاطئة (خطأ — التفكير التصميمي من منظور المستخدم، و PDCA تتكرر باستمرار)",
          "عبارة صحيحة تماماً",
          "صحيحة للشركات الكبرى فقط",
          "صحيحة في الجولة الأولى فقط"
        ],
        "en": [
          "False (Design thinking is from the user's perspective, and PDCA is repeated continuously)",
          "Completely True",
          "True for large corporations only",
          "True in round one only"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "خطأ؛ التفكير التصميمي يعمل من منظور المستخدم، ودورة PDCA تكتسب معناها من التكرار المستمر.",
        "en": "False: Design thinking works from the user's perspective, and PDCA is repeated in continuous loops."
      },
      "ref": "كتاب المدرسة ص 90 / p. 98"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يصف التفكير التصميمي (Design Thinking) بأفضل شكل؟ (كتاب الوزارة ص 92 / تمرين 3-1)",
        "en": "Which option most appropriately describes Design Thinking? (Textbook p. 101 / Exercise 3.1)"
      },
      "opts": {
        "ar": [
          "طريقة تفكير تؤدي إلى اكتشاف المشكلات وتوليد الحلول من منظور المستخدم",
          "طريقة تستخدم بيانات عددية لتحليل استخدام الموقع الإلكتروني",
          "طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم استناداً إلى قواعد عملية",
          "طريقة لإنشاء مخطط أولي يوضح تقريباً تخطيط صفحة ويب"
        ],
        "en": [
          "A way of thinking that leads to discovering problems and generating solutions from the perspective of the user",
          "A method using numerical data to analyze website usage",
          "A method where experts identify UI problems based on rules of thumb",
          "A method of creating a rough layout blueprint of a web page"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التفكير التصميمي يركز على اكتشاف المشكلات وتوليد الحلول من منظور المستخدم عبر خطواته الخمس.",
        "en": "Design thinking discovers problems and generates solutions from the user's perspective."
      },
      "ref": "كتاب المدرسة ص 92 / p. 101"
    },
    {
      "q": {
        "ar": "أي من الخيارات التالية يصف مفهوم عملية تحسين المواقع الإلكترونية بأفضل شكل؟ (كتاب الوزارة ص 92 / تمرين 3-2)",
        "en": "Which option most appropriately describes the concept of the website improvement process? (Textbook p. 101 / Exercise 3.2)"
      },
      "opts": {
        "ar": [
          "من المهم التحسن تدريجياً من خلال تكرار التقييم والتحسين",
          "إذا بُني موقع إلكتروني مثالي في البداية، فلا حاجة لأي تحسين",
          "يكفي تحسين التصميم البصري فقط",
          "ينبغي أن تتم جميع التحسينات باختبار A/B وحده"
        ],
        "en": [
          "It is important to gradually improve by repeating evaluation and improvement",
          "If a perfect website is built initially, no improvement is needed",
          "It is enough to improve only the visual design",
          "All improvements should be done with A/B testing alone"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "تحسين المواقع عملية مستمرة تتدرج عبر تكرار حلقات التقييم والتحسين (PDCA).",
        "en": "Website improvement is an iterative process of repeating evaluation and improvement."
      },
      "ref": "كتاب المدرسة ص 92 / p. 101"
    },
    {
      "q": {
        "ar": "هل خطوات التفكير التصميمي الخمس تسير في اتجاه واحد صارم فقط، أم يمكن الرجوع بينها؟ (كتاب الوزارة ص 89)",
        "en": "Do the five steps of Design Thinking proceed strictly one-way, or can teams move back and forth? (Textbook p. 97)"
      },
      "opts": {
        "ar": [
          "يسير التحسين ذهاباً وإياباً (Back and forth)؛ فبناءً على نتائج الاختبار قد نعود إلى مرحلة التعاطف أو التعريف",
          "تسير في اتجاه واحد صارم ويُمنع الرجوع لأي خطوة سابقة",
          "تُنفذ خطوة واحدة فقط ويُلغى الباقي",
          "تبدأ دائماً بخطوة الاختبار النهائي فقط"
        ],
        "en": [
          "It proceeds back and forth; based on test results, one may return to the Empathize or Define stage",
          "It is strictly one-way and returning is forbidden",
          "Only one step is executed",
          "It only runs the final test step"
        ]
      },
      "a": 0,
      "exp": {
        "ar": "التفكير التصميمي عملية مرنة تسير ذهاباً وإياباً؛ فنتائج الاختبار قد تقودنا للعودة إلى التعاطف أو إعادة تعريف المشكلة.",
        "en": "Design thinking is flexible and iterative, moving back and forth based on user test feedback."
      },
      "ref": "كتاب المدرسة ص 89 / p. 97"
    }
  ]
};

export const lesson41Questions = lessonQuizData['41'];
export const lesson42Questions = lessonQuizData['42'];
export const lesson43Questions = lessonQuizData['43'];
export const lesson44Questions = lessonQuizData['44'];

export const unit4ExamQuestions: Unit4Question[] = [
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "أي من الوسائط التالية يُعد وسيلة اتصال أحادية الاتجاه (One-way) تخاطب حاسة السمع فقط ويمكن استقبالها أثناء التنقل؟",
      "en": "Which medium is a one-way communication channel that appeals only to hearing and can be received while on the move?"
    },
    "opts": {
      "ar": [
        "الراديو (Radio)",
        "وسائل التواصل الاجتماعي (SNS)",
        "التلفزيون (TV)",
        "الصحيفة الورقية (Newspaper)"
      ],
      "en": [
        "Radio",
        "Social Networking Services (SNS)",
        "Television (TV)",
        "Printed Newspaper"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الراديو ينقل الصوت فقط (يخاطب السمع) في اتجاه واحد من المرسل للمتلقي ويمكن الاستماع إليه أثناء أداء مهام أخرى.",
      "en": "Radio conveys audio only in one direction and can be listened to while commuting or multitasking."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "ما الميزة التي تنفرد بها الصحيفة الورقية (Newspaper) مقارنة بالمواقع الإلكترونية ووسائل التواصل الاجتماعي؟",
      "en": "What characteristic distinguishes a printed newspaper from websites and social media?"
    },
    "opts": {
      "ar": [
        "تبقى موجودة مادياً كوسيلة مطبوعة ويمكن قراءتها دون اتصال بالإنترنت",
        "تتيح تفاعلاً ثنائي الاتجاه عبر النماذج والتعليقات الفورية",
        "تنقل المعلومات من خلال الفيديو والصوت المتزامن",
        "يمكن تحديث أخبارها لحظياً بعد طباعتها وتوزيعها"
      ],
      "en": [
        "It remains physically as a printed medium and can be read without an Internet connection",
        "It enables two-way interaction via live forms and comments",
        "It conveys information through synchronized video and audio",
        "Its printed text updates automatically in real time"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الصحيفة تبقى مادياً على الورق وتُقرأ دون الحاجة إلى إنترنت أو أجهزة إلكترونية.",
      "en": "A newspaper persists physically on paper and requires no Internet connection."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "أي من الخيارات التالية لا يُعد خاصية مناسبة للمواقع الإلكترونية (Websites)؟",
      "en": "Which of the following is NOT an appropriate characteristic of websites?"
    },
    "opts": {
      "ar": [
        "تصل المعلومات تلقائياً إلى المستخدمين دون أن يبادروا بالوصول إليها بأنفسهم",
        "يمكن تحديث المعلومات في أي وقت",
        "يمكن الجمع بين النص والصور والفيديو وعرضها معاً",
        "التفاعل ثنائي الاتجاه ممكن من خلال النماذج والتعليقات"
      ],
      "en": [
        "Information automatically reaches users without them actively accessing it",
        "Information can be updated at any time",
        "Text, images, and video can be combined and presented",
        "Two-way interaction is possible through forms and comments"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "من قيود المواقع الإلكترونية أن المعلومات لا تصل للمستخدمين إلا إذا قاموا بفتح الموقع والوصول إليه بأنفسهم.",
      "en": "A key constraint of websites is that information does not reach users unless they actively access it."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "ما الوسيلة الأنسب عندما يكون الغرض هو 'نشر المعلومات بسرعة عبر التناقل الشفهي (Word of mouth)'؟",
      "en": "Which medium is most suitable when the purpose is having users spread information rapidly by word of mouth?"
    },
    "opts": {
      "ar": [
        "وسائل التواصل الاجتماعي (SNS)",
        "الصحيفة الورقية",
        "الراديو المحلي",
        "الفاكس الورقي"
      ],
      "en": [
        "SNS (Social Networking Services)",
        "Printed Newspaper",
        "Local Radio",
        "Paper Fax"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "وسائل التواصل الاجتماعي (SNS) تتيح للمستخدمين مشاركة المعلومات طوعاً ونشرها بسرعة فائقة.",
      "en": "SNS allows users to voluntarily post and share information, driving rapid word-of-mouth spread."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "إذا أرادت شركة إتاحة المواصفات التفصيلية الكاملة لمنتج جديد ليطلع عليها العملاء في أي وقت، فما الوسيلة الأنسب؟",
      "en": "If a company wants to make full detailed specifications of a new product viewable at any time, which medium fits best?"
    },
    "opts": {
      "ar": [
        "الموقع الإلكتروني (Website)",
        "إعلان راديو مدته 10 ثوانٍ",
        "اللافتات الطرقية",
        "التلفزيون فقط"
      ],
      "en": [
        "Website",
        "10-second Radio Spot",
        "Highway Billboard",
        "TV Only"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الموقع الإلكتروني لا يفرض حداً على حجم المعلومات ويمكن تنظيمه وتصفحه في أي وقت.",
      "en": "A website has no limit on information volume and can be viewed at any time."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-1",
      "en": "Lesson 4-1"
    },
    "q": {
      "ar": "أي من الخيارات التالية يصف قاعدة اختيار الوسائط الإعلامية بأنسب شكل وفق كتاب الوزارة؟",
      "en": "Which option most appropriately describes the rule for choosing media according to the textbook?"
    },
    "opts": {
      "ar": [
        "من المهم اختيار الوسيلة الأنسب وفقاً للغرض والجمهور المستهدف، وغالباً الجمع بين عدة وسائط",
        "يجب دائماً استخدام وسيلة إعلامية واحدة فقط في جميع الحالات",
        "بغض النظر عن الغرض أو الجمهور، يكفي الموقع الإلكتروني وحده دائماً",
        "مع وجود وسائل التواصل الاجتماعي، لا حاجة للتلفزيون أو المواقع الإلكترونية مطلقاً"
      ],
      "en": [
        "Choose the most suitable medium according to purpose and target audience, often combining multiple media",
        "Always use only one medium for any dissemination",
        "Regardless of purpose or audience, a website alone is always sufficient",
        "With SNS, TV and websites are completely obsolete"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "لا توجد وسيلة واحدة هي الأفضل لكل شيء؛ الاختيار يعتمد على الغرض والجمهور مع الجمع بين الوسائط.",
      "en": "No single medium is best for everything; match the medium to purpose and audience, combining channels effectively."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "ما المصطلح الذي يُطلق على الصورة النموذجية لمستخدم الموقع والتي تُعد كشخص ملموس (عمره، مهنته، غرضه، تحدياته)؟",
      "en": "What is the term for a typical user image of those who will use the website, set up as a concrete person?"
    },
    "opts": {
      "ar": [
        "شخصية المستخدم (Persona)",
        "المخطط الهيكلي (Wireframe)",
        "معدل الارتداد (Bounce Rate)",
        "التقييم الإرشادي (Heuristic)"
      ],
      "en": [
        "Persona",
        "Wireframe",
        "Bounce Rate",
        "Heuristic Evaluation"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "شخصية المستخدم (Persona) تجسد مستخدماً نموذجياً كشخص محدد لتوجيه التصميم نحو احتياجاته.",
      "en": "A persona pictures a typical target user as a concrete person to keep design aligned with user needs."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "أي مما يلي لا يُعد معلومة مناسبة لإدراجها عند إعداد شخصية مستخدم نموذجية (Persona)؟",
      "en": "Which of the following is NOT an appropriate piece of information to include when setting up a persona?"
    },
    "opts": {
      "ar": [
        "أداء خادم الموقع الإلكتروني (Server performance)",
        "عمر المستخدم ومهنته",
        "غرض المستخدم من استخدام الموقع الإلكتروني",
        "التحديات التي يواجهها المستخدم"
      ],
      "en": [
        "The performance of the website's server",
        "The user's age and occupation",
        "The user's purpose for using the website",
        "The challenges the user faces"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "أداء الخادم معلومة تقنية خاصة بالبنية التحتية وليست من خصائص شخصية المستخدم.",
      "en": "Server performance is a technical infrastructure metric, not an attribute of the user persona."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "لماذا يُنشئ المصمم مخططاً هيكلياً (Wireframe) خالياً من الألوان والزخارف قبل التصميم النهائي؟",
      "en": "Why does a designer create a wireframe without colors or decorations before final visual design?"
    },
    "opts": {
      "ar": [
        "لتحديد مكان وأولوية المعلومات أولاً وتسهيل اتفاق أصحاب المصلحة دون الانجراف نحو الأذواق الشخصية في الألوان",
        "لأن المتصفحات الحديثة لا تدعم عرض الألوان والخطوط",
        "لإخفاء محتوى الموقع عن المستخدمين",
        "لتقليل سرعة تحميل الموقع على الهواتف"
      ],
      "en": [
        "To fix placement and priority of information first and help stakeholders agree without drifting into personal color tastes",
        "Because modern browsers cannot render colors",
        "To hide website content from visitors",
        "To slow down page loading on phones"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "المخطط الهيكلي يفصل تخطيط المعلومات وأولوياتها عن النقاشات الذوقية حول الألوان.",
      "en": "Wireframes separate information structure and priority from subjective visual preferences."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "في مبادئ التصميم الأربعة (CRAP)، ما المبدأ الذي يعني 'وضع المعلومات المرتبطة قريبة من بعضها حتى تُدرك كمجموعة واحدة'؟",
      "en": "In the four principles of design (CRAP), which principle means placing related information close together as a single group?"
    },
    "opts": {
      "ar": [
        "التقارب (Proximity)",
        "التباين (Contrast)",
        "التكرار (Repetition)",
        "المحاذاة (Alignment)"
      ],
      "en": [
        "Proximity",
        "Contrast",
        "Repetition",
        "Alignment"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "مبدأ التقارب (Proximity) يجمّع العناصر المرتبطة معاً (كصورة المنتج واسمه وسعره).",
      "en": "Proximity groups related items together so they are perceived as a cohesive unit at a glance."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "أي من الخيارات التالية غير مدرج ضمن المبادئ الأربعة للتصميم البصري (مبادئ CRAP)؟",
      "en": "Which of the following options is NOT included in the four principles of design (CRAP principles)?"
    },
    "opts": {
      "ar": [
        "التشفير (Encryption)",
        "التباين (Contrast)",
        "المحاذاة (Alignment)",
        "التقارب (Proximity)"
      ],
      "en": [
        "Encryption",
        "Contrast",
        "Alignment",
        "Proximity"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "مبادئ CRAP هي: Contrast (التباين)، Repetition (التكرار)، Alignment (المحاذاة)، و Proximity (التقارب). التشفير مفهوم أمني.",
      "en": "CRAP stands for Contrast, Repetition, Alignment, and Proximity; Encryption is a cybersecurity concept."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-2",
      "en": "Lesson 4-2"
    },
    "q": {
      "ar": "ما الذي يصف مفهوم التصميم المتمحور حول المستخدم (User-Centered Design — UCD) بأنسب شكل؟",
      "en": "Which option most appropriately describes the concept of User-Centered Design (UCD)?"
    },
    "opts": {
      "ar": [
        "بدء التصميم انطلاقاً مما يحتاجه المستخدم وسياق استخدامه لتحسين قابلية الاستخدام وإمكانية الوصول",
        "إعطاء الأولوية للتصميم الذي يجده المطوّر سهل البرمجة",
        "التركيز على الزخارف البصرية فقط بغض النظر عن سهولة الاستخدام",
        "استخدام أكبر عدد ممكن من التقنيات المعقدة"
      ],
      "en": [
        "Beginning the design from what the user needs and their context to improve usability and accessibility",
        "Prioritizing what the developer finds easiest to code",
        "Focusing solely on visual decoration regardless of usability",
        "Using as many complex technologies as possible"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "التصميم المتمحور حول المستخدم (UCD) يبدأ دائماً من احتياجات المستخدم وظروف استخدامه.",
      "en": "UCD designs from the user's perspective, starting from what the user needs."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "ما الفرق الجوهري بين التقييم النوعي (Qualitative) والتقييم الكمي (Quantitative) للمواقع الإلكترونية؟",
      "en": "What is the core difference between Qualitative and Quantitative website evaluation?"
    },
    "opts": {
      "ar": [
        "التقييم النوعي يستكشف 'لماذا' عبر مراقبة سلوك وآراء المستخدمين، بينما الكمي يقيس 'كم' باستخدام البيانات العددية",
        "التقييم النوعي يعتمد على الأرقام فقط، بينما الكمي يعتمد على المقابلات الشخصية",
        "كلاهما يعتمد على رأي مالك الموقع الشخصي دون بيانات",
        "التقييم الكمي لا يستخدم الحواسيب إطلاقاً"
      ],
      "en": [
        "Qualitative explores 'why' via user behavior and voices, whereas Quantitative measures 'how much' using numerical data",
        "Qualitative uses only numbers, while Quantitative uses only interviews",
        "Both rely solely on the website owner's personal opinion",
        "Quantitative evaluation never uses computers"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "الكمي يوضح 'كم' بالأرقام، والنوعي يكشف 'لماذا' من خلال الملاحظة والمقابلات.",
      "en": "Quantitative shows 'how much' with numbers; Qualitative reveals 'why' from users' behavior and voices."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "أي من الطرق التالية يندرج تحت طرق التقييم الكمي (Quantitative Evaluation)؟",
      "en": "Which of the following methods belong to Quantitative Evaluation?"
    },
    "opts": {
      "ar": [
        "تحليلات الويب (Web Analytics) واختبار A/B (A/B Testing)",
        "المقابلات الشخصية (Interviews) فقط",
        "اختبار قابلية الاستخدام (Usability Testing) بالملاحظة فقط",
        "التقييم الإرشادي (Heuristic Evaluation) فقط"
      ],
      "en": [
        "Web Analytics and A/B Testing",
        "User Interviews only",
        "Observational Usability Testing only",
        "Heuristic Evaluation only"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تحليلات الويب واختبار A/B يستخدمان البيانات العددية والإحصائية لتقييم الموقع كمياً.",
      "en": "Web analytics and A/B testing rely on numerical metrics for quantitative evaluation."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "في تحليلات الويب، ماذا يقيس مؤشر معدل الارتداد (Bounce Rate)؟",
      "en": "In web analytics, what does the Bounce Rate indicator measure?"
    },
    "opts": {
      "ar": [
        "نسبة الزيارات التي انتهت بعد مشاهدة الصفحة الأولى فقط دون متابعة التصفح",
        "العدد الإجمالي لمرات مشاهدة جميع صفحات الموقع",
        "نسبة الزيارات التي حققت إجراءً مستهدفاً كالشراء أو التسجيل",
        "سرعة معالج خادم قاعدة البيانات"
      ],
      "en": [
        "The proportion of visits that ended after viewing only the first page",
        "The total number of times all pages have been viewed",
        "The proportion of visits that achieved a target action like purchase",
        "The CPU clock speed of the database server"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "معدل الارتداد يقيس نسبة الزيارات التي غادرت بعد الصفحة الأولى فقط.",
      "en": "Bounce rate measures the share of visits that end after viewing only the first page."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "ما المؤشر الذي يوضح 'نسبة الزيارات التي حققت إجراءً مستهدفاً (مثل شراء منتج أو تسجيل عضوية)'؟",
      "en": "Which indicator shows the proportion of visits that achieved a target action (such as product purchase or registration)?"
    },
    "opts": {
      "ar": [
        "معدل التحويل (Conversion Rate — CVR)",
        "مشاهدات الصفحة (Page View — PV)",
        "معدل الارتداد (Bounce Rate)",
        "مؤشر الألوان (RGB)"
      ],
      "en": [
        "Conversion Rate (CVR)",
        "Page View (PV)",
        "Bounce Rate",
        "RGB Color Index"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "معدل التحويل (CVR) يقيس نسبة تحقيق الهدف النهائي للموقع كالشراء أو التسجيل.",
      "en": "Conversion Rate (CVR) measures the proportion of visits reaching the target action."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "ما المقصود بالتقييم الإرشادي (Heuristic Evaluation) في تقييم واجهات المواقع؟",
      "en": "What is meant by Heuristic Evaluation in website UI evaluation?"
    },
    "opts": {
      "ar": [
        "طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم (UI) استناداً إلى قواعد إرشادية عملية (كالاتساق ومنع الأخطاء ووضوح حالة النظام)",
        "طريقة يتم فيها إحصاء عدد الزيارات الرقمية تلقائياً",
        "طريقة لإرسال رسائل بريد إلكتروني إعلانية للعملاء",
        "طريقة لتشفير قواعد البيانات بكلمات مرور"
      ],
      "en": [
        "A method in which experts identify UI problems based on rules of thumb (consistency, error prevention, visibility of system status)",
        "A method tallying numerical page views automatically",
        "A method for sending promotional emails",
        "A method for encrypting database passwords"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "التقييم الإرشادي هو تقييم نوعي يفحص فيه الخبراء الواجهة مقابل قواعد عملية.",
      "en": "Heuristic evaluation is a qualitative method where experts inspect the UI against established rules of thumb."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-3",
      "en": "Lesson 4-3"
    },
    "q": {
      "ar": "إذا كان إجمالي مشاهدات الصفحة (PV) في متجر إلكتروني مرتفعاً جداً ولكن معدل التحويل (CVR) منخفضاً، فماذا يعني ذلك؟",
      "en": "If an online store has a very high PV count but a very low CVR, what does this indicate?"
    },
    "opts": {
      "ar": [
        "الناس يصلون للموقع ويتصفحونه، لكن هناك عائقاً يمنعهم من إتمام الشراء؛ ونحتاج لتقييم نوعي لمعرفة السبب",
        "لا أحد يزور الموقع على الإطلاق",
        "جميع الزوار يقومون بالشراء بنجاح تام",
        "الموقع لا يحتاج إلى أي تحسين"
      ],
      "en": [
        "Visitors arrive and browse, but an obstacle prevents them from completing checkout; qualitative testing is needed to find why",
        "Nobody is visiting the website at all",
        "Every visitor is purchasing successfully",
        "The website needs zero improvement"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "ارتفاع PV مع انخفاض CVR يشير لوصول الزوار وعدم إتمامهم للإجراء المستهدف، مما يستدعي اختباراً نوعياً لكشف السبب.",
      "en": "High PV with low CVR means traffic arrives but doesn't convert; qualitative evaluation uncovers the cause."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-4",
      "en": "Lesson 4-4"
    },
    "q": {
      "ar": "ما الترتيب الصحيح للخطوات الأربع في دورة التحسين المستمر (PDCA Cycle)؟",
      "en": "What is the correct sequence of the four steps in the PDCA continuous improvement cycle?"
    },
    "opts": {
      "ar": [
        "خطّط (Plan) ← نفّذ (Do) ← تحقّق (Check) ← تصرّف (Act)",
        "نفّذ (Do) ← خطّط (Plan) ← تصرّف (Act) ← تحقّق (Check)",
        "تحقّق (Check) ← احذف (Delete) ← أغلق (Close) ← أعد (Repeat)",
        "اشترِ (Purchase) ← صمّم (Design) ← لوّن (Color) ← انشر (Publish)"
      ],
      "en": [
        "Plan → Do → Check → Act",
        "Do → Plan → Act → Check",
        "Check → Delete → Close → Repeat",
        "Purchase → Design → Color → Publish"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "دورة PDCA تكرر أربع خطوات متسلسلة: Plan (خطّط)، Do (نفّذ)، Check (تحقّق)، Act (تصرّف).",
      "en": "The PDCA cycle repeats Plan → Do → Check → Act continuously."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-4",
      "en": "Lesson 4-4"
    },
    "q": {
      "ar": "أي من الإجراءات التالية يقابل خطوة 'تحقّق (Check)' في دورة PDCA لتحسين موقع إلكتروني؟",
      "en": "Which of the following actions corresponds to the 'Check' step in the PDCA cycle?"
    },
    "opts": {
      "ar": [
        "قياس معدل الارتداد بعد التغيير وتقييم مدى تحقيق الهدف (مثل خفض الارتداد 10%)",
        "وضع هدف خفض معدل الارتداد بنسبة 10% قبل البدء",
        "تغيير تصميم الصفحة الرئيسية فعلياً",
        "التفكير في إجراء تحسين جديد للدورة القادمة"
      ],
      "en": [
        "Measuring the bounce rate after the change and evaluating whether the goal was achieved",
        "Setting the goal of reducing bounce rate by 10%",
        "Changing the design of the homepage",
        "Considering the next improvement measure"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطوة Check (تحقّق) تُعنى بقياس النتائج بعد التغيير وتقييم مستوى تحقيق الهدف.",
      "en": "Check measures actual post-change results against the planned target."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-4",
      "en": "Lesson 4-4"
    },
    "q": {
      "ar": "ما الترتيب القياسي للخطوات الخمس في منهجية التفكير التصميمي (Design Thinking)؟",
      "en": "What are the five steps of Design Thinking in their standard order?"
    },
    "opts": {
      "ar": [
        "التعاطف (Empathize) ← التعريف (Define) ← توليد الأفكار (Ideate) ← النموذج الأولي (Prototype) ← الاختبار (Test)",
        "البرمجة ← التلوين ← البيع ← الإغلاق ← الأرشفة",
        "الاختبار ← التعاطف ← الحذف ← الطباعة ← النشر",
        "التخطيط ← الشراء ← التخزين ← التشفير ← النسخ"
      ],
      "en": [
        "Empathize → Define → Ideate → Prototype → Test",
        "Code → Color → Sell → Close → Archive",
        "Test → Empathize → Delete → Print → Publish",
        "Plan → Buy → Store → Encrypt → Copy"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "خطوات التفكير التصميمي الخمس هي: التعاطف، التعريف، توليد الأفكار، النموذج الأولي، والاختبار (مع إمكانية العودة بينها).",
      "en": "Design thinking proceeds through Empathize, Define, Ideate, Prototype, and Test."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-4",
      "en": "Lesson 4-4"
    },
    "q": {
      "ar": "في خطوات التفكير التصميمي، ماذا نقصد بخطوة 'التعاطف (Empathize)'؟",
      "en": "In Design Thinking, what does the 'Empathize' step entail?"
    },
    "opts": {
      "ar": [
        "وضع نفسك مكان المستخدم وفهم تحدياته واحتياجاته وسياق استخدامه عبر الملاحظة والبحث",
        "كتابة الكود البرمجي النهائي للخادم",
        "شراء خوادم سحابية جديدة للموقع",
        "تغيير ألوان الشعار حسب ذوق المدير"
      ],
      "en": [
        "Putting yourself in the user's position to understand their challenges and needs",
        "Writing final production backend code",
        "Purchasing new cloud servers",
        "Changing logo colors based on manager taste"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "التعاطف (Empathize) هو فهم تجربة المستخدم وتحدياته واحتياجاته من منظوره هو.",
      "en": "Empathize means understanding the user's challenges and needs from their perspective."
    }
  },
  {
    "lesson": {
      "ar": "الدرس 4-4",
      "en": "Lesson 4-4"
    },
    "q": {
      "ar": "أي مما يلي يُعد طريقة غير مناسبة (خاطئة) عند إجراء اختبار A/B (A/B Testing)؟",
      "en": "Which of the following is NOT an appropriate way of conducting A/B testing?"
    },
    "opts": {
      "ar": [
        "تغيير عدة عناصر في الوقت نفسه بين النسختين A و B",
        "إعداد نمطين (A و B) ومقارنتهما",
        "اتخاذ القرارات فقط بعد جمع كمية كافية من البيانات",
        "عرض كل نمط على مستخدمين فعليين"
      ],
      "en": [
        "Changing multiple elements at the same time between pattern A and pattern B",
        "Preparing two patterns and comparing them",
        "Making decisions only after collecting a sufficient amount of data",
        "Showing each pattern to actual users"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "تغيير عدة عناصر معاً يمنعنا من معرفة أي تغيير أحدث الأثر؛ يجب تغيير عنصر واحد فقط في كل مرة.",
      "en": "Changing multiple elements simultaneously makes it impossible to know which change caused the effect."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 4",
      "en": "Unit 4 Synthesis"
    },
    "q": {
      "ar": "أي من الخيارات التالية يصف المفهوم الصحيح لعملية تحسين المواقع الإلكترونية؟",
      "en": "Which option most appropriately describes the concept of the website improvement process?"
    },
    "opts": {
      "ar": [
        "من المهم التحسن تدريجياً من خلال تكرار التقييم والتحسين في حلقات مستمرة",
        "إذا بُني موقع إلكتروني مثالي في البداية، فلا حاجة لأي تحسين مستقبلاً",
        "يكفي تحسين التصميم البصري والألوان فقط دون قياس النتائج",
        "ينبغي أن تتم جميع التحسينات باختبار A/B وحده دون فهم المستخدم"
      ],
      "en": [
        "It is important to gradually improve by repeating evaluation and improvement in continuous loops",
        "If a perfect website is built initially, no future improvement is needed",
        "It is enough to improve only the visual design without measuring results",
        "All improvements should be done with A/B testing alone"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "المواقع لا تكتمل من جولة واحدة، بل تتحسن تدريجياً بتكرار التقييم والتحسين (PDCA).",
      "en": "Websites improve gradually by repeating evaluation and improvement cycles continuously."
    }
  },
  {
    "lesson": {
      "ar": "شامل الوحدة 4",
      "en": "Unit 4 Synthesis"
    },
    "q": {
      "ar": "كيف تتكامل دروس الوحدة الرابعة لبناء وتحسين موقع إلكتروني ناجح؟",
      "en": "How do all four lessons of Unit 4 integrate to build and improve a successful website?"
    },
    "opts": {
      "ar": [
        "اختيار الوسائط المناسبة للغرض (4-1) ← تخطيط الموقع حول المستخدم بـ Persona و Wireframe ومبادئ CRAP (4-2) ← تقييمه كمياً ونوعياً (4-3) ← تحسينه تكرارياً بدورة PDCA والتفكير التصميمي واختبار A/B (4-4)",
        "اختيار الألوان أولاً ثم حذف قاعدة البيانات وإغلاق الموقع بعد أسبوع",
        "الاعتماد على التلفزيون فقط وإلغاء جميع صفحات الويب",
        "تغيير جميع عناصر الموقع عشوائياً كل ساعة دون قياس أي مؤشرات"
      ],
      "en": [
        "Choose suitable media (4-1) → Plan around the user via Persona, Wireframe & CRAP (4-2) → Evaluate quantitatively & qualitatively (4-3) → Improve iteratively via PDCA, Design Thinking & A/B testing (4-4)",
        "Pick colors first, delete the database, and shut down after one week",
        "Rely exclusively on TV commercials and abandon websites",
        "Randomly change all page elements hourly without measuring analytics"
      ]
    },
    "a": 0,
    "exp": {
      "ar": "رحلة هندسة الويب والوسائط تبدأ باختيار الوسيلة، ثم التصميم المتمحور حول المستخدم، ثم التقييم الشامل، فالتحسين التكراري المستمر.",
      "en": "Unit 4 forms a complete lifecycle: Media choice → User-centered design → Quantitative/Qualitative evaluation → Iterative PDCA improvement."
    }
  }
];
