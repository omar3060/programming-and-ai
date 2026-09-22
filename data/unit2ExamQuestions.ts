import { Question } from '../types';

export const unit2ExamQuestions: Question[] = [
  // Lesson 2-1: Cryptographic Technologies and Authentication (5 questions)
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "في اتصالات HTTPS، ما التقنية المستخدمة أولاً لتبادل المفتاح المشترك بأمان بين المتصفح والخادم؟", en: "In HTTPS communication, which cryptographic method is used first to safely share a common key between the browser and server?" },
    opts: { ar: ["التشفر المتماثل", "التشفير بالمفتاح العام (Public-key cryptography)", "جدار الحماية", "التأمين اللاسلكي"], en: ["Common-key cryptography", "Public-key cryptography", "Firewall", "Wireless Security"] },
    a: 1,
    exp: { ar: "يستخدم التشفير بالمفتاح العام في البداية لتبادل المفتاح المشترك بآمان أثناء مصافحة TLS.", en: "Public-key cryptography is used initially to safely exchange the shared key during TLS handshake." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "لماذا تُستخدم تقنية التشفير المتماثل (Common-key cryptography) في تبادل البيانات الحجمية بعد مشاركة المفتاح؟", en: "Why is common-key cryptography used for exchanging large amounts of data after the key is shared?" },
    opts: { ar: ["لأنها أبطأ", "لأنها توفر السرعة العالية والأداء السريع في تشفير البيانات ضخمة الحجم", "لأنها لا تحتاج مفاتيح", "لأنها مجانية"], en: ["Because it is slower", "Because it achieves high speed and performance for encrypting large amounts of data", "Because it requires no keys", "Because it is free"] },
    a: 1,
    exp: { ar: "التشفير بالمفتاح المشترك (المتماثل) أسرع بكثير في نقل البيانات الكبيرة.", en: "Common-key (symmetric) cryptography provides fast encryption speed for large data payloads." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "المصادقة الثنائية أو متعددة العوامل (MFA) هي الجمع بين عاملتين أو أكثر من العوامل الثلاثة وهي:", en: "Multi-factor authentication (MFA) combines two or more of which three factor categories?" },
    opts: { ar: ["اسم المستخد وكلمة المرور فقط", "المعرفة (Knowledge)، الملكية (Possession)، والسمات البيومترية (Biometric)", "الرقم السري والبريد", "الاسم والجهة"], en: ["Username and password only", "Knowledge, Possession, and Biometric factors", "PIN and email", "Name and organization"] },
    a: 1,
    exp: { ar: "تتكون العوامل الثلاثة للمصادقة من المعرفة (كلمة سر)، الملكية (هاتف/بطاقة)، والبيومترية (بصمة/وجه).", en: "MFA factors comprise Knowledge (password), Possession (phone/smartcard), and Biometric (fingerprint/face)." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "ما التقنية الأمنية التي تمكن من كشف أي تلاعب بالبيانات وتمنع المرسل من إنكار إرسالها (عدم التنصل Non-repudiation)؟", en: "Which security technology detects data tampering and provides non-repudiation (preventing sender denial)?" },
    opts: { ar: ["التوقيع الرقمي (Digital Signature)", "جدار الحماية", "مضاد الفيروسات", "اسم المستخدم"], en: ["Digital Signature", "Firewall", "Antivirus", "Username"] },
    a: 0,
    exp: { ar: "التوقيع الرقمي يكشف التلاعب بالبيانات ويضمن عدم التنصل من المسؤولية.", en: "Digital signatures detect tampering and enforce non-repudiation." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "ما التقنية التي توفرها جهة تصديق (CA) للتحقق من هوية وأصالة الموقع أو الطرف المقابل في الاتصال؟", en: "What technology issued by a Certificate Authority (CA) verifies that the communication partner is authentic?" },
    opts: { ar: ["الشهادة الرقمية (Digital Certificate)", "كلمة السر", "رمز QR", "الملف المؤقت"], en: ["Digital Certificate", "Password", "QR Code", "Temporary File"] },
    a: 0,
    exp: { ar: "تثبت الشهادة الرقمية الصادرة من جهة موثوقة (CA) أصالة موقع الويب والجهة المتصلة.", en: "Digital certificates from trusted CAs confirm web server identity and authenticity." }
  },

  // Lesson 2-2: Network Security Design (5 questions)
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "النظام المقام عند نقطة دخول/خروج الشبكة للتحكم في مرور البيانات بناءً على قواعد محددة مسبقاً يسمى:", en: "System installed at a network entry/exit point that allows or denies communication based on preset rules is:" },
    opts: { ar: ["الشبكة الافتراضية VPN", "جدار الحماية (Firewall)", "المنطقة منزوعة السلاح DMZ", "المتصفح"], en: ["Virtual Private Network (VPN)", "Firewall", "Demilitarized Zone (DMZ)", "Browser"] },
    a: 1,
    exp: { ar: "جدار الحماية يفحص الاتصالات ويسمح بها أو يمنعها بناءً على قواعد محددة.", en: "Firewalls filter network traffic against preconfigured security rule sets." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "التقنية التي تنشئ خطاً خاصاً افتراضياً مشفراً عبر الإنترنت لتوصيل الموظفين بالشبكة بأمان أثناء العمل عن بعد هي:", en: "Technology creating an encrypted virtual private line over the Internet for safe remote connections:" },
    opts: { ar: ["الشبكة الافتراضية الخاصة (VPN)", "جدار الحماية", "الذاكرة العشوائية", "البريد الإلكتروني"], en: ["Virtual Private Network (VPN)", "Firewall", "RAM", "Email"] },
    a: 0,
    exp: { ar: "الـ VPN تُنشئ نفقاً مشفراً يحمي البيانات أثناء نقلها عبر الشبكات المفتوحة كـ Wi-Fi العام.", en: "VPNs create an encrypted tunnel protecting telemetry across public networks." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "المنطقة التي تُوضع فيها الخوادم الموجهة للجمهور (مثل خادم الويب) بمعزل عن الشبكة الداخلية تسمى:", en: "Network zone where public-facing servers (web, mail) are placed separately from internal networks:" },
    opts: { ar: ["المنطقة منزوعة السلاح (DMZ)", "جدار الحماية", "المعالجة الطرفية", "البوابة المحلية"], en: ["Demilitarized Zone (DMZ)", "Firewall", "Edge Processing", "Local Gateway"] },
    a: 0,
    exp: { ar: "تضم الـ DMZ الخوادم العامة لحماية الشبكة الداخلية وقواعد البيانات من الاختراق المباشر.", en: "DMZs isolate public web servers so an attack there does not compromise internal databases." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "مفهوم بناء الأمان عبر تطبيق تدابير أمنية متعددة الطبقات بحيث إذا اخترقت طبقة تحمي الطبقة التالية النظام هو:", en: "Concept of layering multiple security measures so that if one fails, the next still protects the system:" },
    opts: { ar: ["الدفاع العميق (Defense in Depth)", "الجدار التكعيبي", "قانون مور", "التشفير المتماثل"], en: ["Defense in Depth", "Cubic Wall", "Moore's Law", "Symmetric Encryption"] },
    a: 0,
    exp: { ar: "الدفاع العميق يعتمد على توزيع الأمان على طبقات متتالية (الشبكة، المسار، الخوادم، والأجهزة).", en: "Defense in depth layers security across entry points, communication paths, servers, and endpoints." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "ما المفهوم الأمني الحديث الذي ينص على 'عدم الوثوق بأي اتصال بشكل آلي حتى داخل الشبكة والتحقق الدائم من كل طلب'؟", en: "Modern security concept stating 'Never trust any communication, even from inside the network, and always verify':" },
    opts: { ar: ["عدم الثقة (Zero Trust)", "المحيط المفتوح", "الثقة التلقائية", "التشفير فقط"], en: ["Zero Trust", "Open Perimeter", "Automatic Trust", "Encryption Only"] },
    a: 0,
    exp: { ar: "نموذج Zero Trust يفترض أن التهديدات قد تأتي من داخل أو خارج الشبكة ويطلب التحقق باستمرار.", en: "Zero Trust eliminates implicit trust and mandates identity verification for every access request." }
  },

  // Lesson 2-3: Incident Response and Risk Management (5 questions)
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "الموقف الذي ينجم عنه حدوث ضرر فعلي أو تهديد جدي لسرية أو سلامة أو توافر المعلومات يسمى:", en: "A situation where actual damage occurs or serious threat compromises confidentiality, integrity, or availability:" },
    opts: { ar: ["حادث أمني (Security Incident)", "تحديث برمجيات", "إطفاء عادي", "نسخ احتياطي"], en: ["Security Incident", "Software Update", "Normal Shutdown", "Backup"] },
    a: 0,
    exp: { ar: "الحادث الأمني هو أي خرق أو هجوم يسبب ضرراً مادياً أو رقمياً لحماية المعلومات.", en: "A security incident represents actual realized harm or critical risk to information systems." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "في التسلسل العام لمراحل الاستجابة للحوادث الست، أي مرحلة تُنفذ فوراً للحد من انتشار الضرر قبل إزالة التهديد؟", en: "In the 6 incident response phases, which phase is executed immediately to limit damage spread before eradication?" },
    opts: { ar: ["الاحتواء (Containment)", "الاستعادة", "التحضير", "الدروس المستفادة"], en: ["Containment", "Recovery", "Preparation", "Lessons Learned"] },
    a: 0,
    exp: { ar: "الاحتواء (مثل فصل الجهاز المصاب عن الشبكة) يمنع انتشار الفيروس أو الضرر لباقي المنظومة.", en: "Containment isolates compromised assets to freeze damage progression across the enterprise." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "أي مرحلة تهدف إلى إزالة السبب الجذري للحادث الأمني (مثل حذف البرمجيات الخبيثة وسد الثغرات)؟", en: "Which phase removes the root cause of the incident (e.g., removing malware and patching flaws)?" },
    opts: { ar: ["الاستئصال وإزالة التهديد (Eradication)", "الاستعادة", "الكشف", "التحضير"], en: ["Eradication", "Recovery", "Detection", "Preparation"] },
    a: 0,
    exp: { ar: "الاستئصال هو تنظيف النظام وإزالة الفيروسات قبل البدء في استعادة الخدمة للعمل.", en: "Eradication purges malware and remedies vulnerabilities before bringing systems back." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "حسب مفهوم تقييم المخاطر، كيف يُحسب حجم الخطر (Risk Size) للتطبيقات؟", en: "According to risk assessment methodology, how is Risk Size calculated?" },
    opts: { ar: ["حجم الخطر = التأثير + التكلفة", "حجم الخطر = التأثير × الاحتمالية (Impact × Likelihood)", "حجم الخطر = عدد المستخدمين", "حجم الخطر = سرعة المعالج"], en: ["Risk Size = Impact + Cost", "Risk Size = Impact × Likelihood", "Risk Size = User Count", "Risk Size = CPU Speed"] },
    a: 1,
    exp: { ar: "حجم الخطر هو حاصل ضرب حجم الضرر (التأثير) في نسبة فرصة وقوعه (الاحتمالية).", en: "Risk magnitude is determined mathematically by Impact multiplied by Likelihood." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "عند تحديد أولويات المعالجة للمخاطر الأجهزة، أي المخاطر يجب إعطاؤها الأولوية القصوى والبدء بمعالجتها فوراً؟", en: "When setting remediation priorities, which risks must receive immediate top priority?" },
    opts: { ar: ["المخاطر ذات التأثير المنخفض والاحتمالية المنخفضة", "المخاطر ذات التأثير العالي والاحتمالية العالية (High Impact × High Likelihood)", "المخاطر رخيصة التكلفة", "المخاطر القديمة فقط"], en: ["Low Impact × Low Likelihood", "High Impact × High Likelihood", "Inexpensive risks", "Old risks only"] },
    a: 1,
    exp: { ar: "المخاطر ذات التأثير المرتفع والاحتمالية العالية هي الأشد خطورة وتستوجب المعالجة الفورية.", en: "High Impact × High Likelihood risks present extreme threats and demand top priority." }
  },

  // Synthesis & Textbook Practice Questions (10 questions)
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "ما المشكلة الأمنية التي تنتج إذا قمنا باستعادة النظام (Recovery) قبل استئصال التهديد (Eradication)؟", en: "What severe security problem occurs if Recovery is executed before Eradication?" },
    opts: { ar: ["يتسارع النظام", "قد تظل البرمجية الخبيثة موجودة ويتكرر الحادث الأمني فوراً", "تتضاعف سعة التخزين", "يقل استهلاك الكهرباء"], en: ["System speeds up", "Malware persists causing immediate incident recurrence", "Storage doubles", "Power use drops"] },
    a: 1,
    exp: { ar: "الاستعادة قبل إزالة الفيروس تعني بقاء التهديد وتكرار الهجوم الأمني فور تشغيل النظام.", en: "Restoring services while malware remains active triggers immediate re-infection." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "إذا كان لدى شخص كلمة سر فقط، وتم تسريبها، استطاع المخترق الدخول. ما الذي يمنعه إذا استخدمت المؤسسة MFA؟", en: "If a leaked password allows login, what stops an attacker when the system uses MFA?" },
    opts: { ar: ["الحاسوب سينطفئ", "حاجة المخترق لجهاز الهاتف أو البصمة المسجلة في ملكية/سمات المستخدم", "السرعة البطيئة", "اسم المستخدم"], en: ["Computer shuts down", "Attacker lacks physical possession factor (phone/token) or biometric", "Slow connection", "Username"] },
    a: 1,
    exp: { ar: "المصادقة متعددة العوامل تمنع الاختراق لأن المهاجم لا يملك عامل الملكية (الهاتف) أو البصمة.", en: "MFA blocks unauthorized logins because attackers lack physical possession tokens or biometrics." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "ما الخادم الذي يُنصح دائماً بوضعه في المنطقة منزوعة السلاح DMZ؟", en: "Which server type is standardly deployed within the DMZ zone?" },
    opts: { ar: ["خادم قاعدة بيانات العملاء السرية", "خادم الويب الموجه للجمهور (Public Web Server)", "خادم المرتبات الداخلي", "جهاز الكمبيوتر الشخصي للموظف"], en: ["Confidential Database Server", "Public Web Server", "Internal Payroll Server", "Employee PC"] },
    a: 1,
    exp: { ar: "توضع خوادم الويب العامة في الـ DMZ لمنع وصول المهاجمين لقواعد البيانات الداخلية.", en: "Public web servers reside in DMZs to buffer and isolate internal database networks." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "في بروتوكول HTTPS، أين تُستخدم تقنية التشفير بالمفتاح العام (Public-Key Cryptography)؟", en: "In HTTPS, where is Public-Key Cryptography specifically applied?" },
    opts: { ar: ["في تشفير مقاطع الفيديو الضخمة", "في مصافحة TLS وتأمين تبادل مفتاح الجلسة المشترك", "في تحديد سرعة النت", "في طباعة المستندات"], en: ["Encrypting video streams", "In TLS handshake for secure session key exchange", "Setting internet speed", "Document printing"] },
    a: 1,
    exp: { ar: "التشفير بالمفتاح العام يُستخدم في المصافحة لحماية المفتاح المشترك دون تسريبه.", en: "Public-key cryptography secures key exchange during the TLS handshake." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "تتضمن طبقات الدفاع العميق (Defense in Depth) تثبيت مضاد الفيروسات وتحديث OS في أي طبقة؟", en: "In Defense in Depth, installing antivirus software and updating the OS belongs to which layer?" },
    opts: { ar: ["مدخل الشبكة (Network Entry)", "مسار الاتصال (Communication Path)", "وضع الخوادم (Server Placement)", "الأجهزة الطرفية (Endpoints)"], en: ["Network Entry", "Communication Path", "Server Placement", "Endpoints"] },
    a: 3,
    exp: { ar: "حماية الأجهزة الفردية للموظفين والمستخدمين تقع ضمن طبقة الأجهزة الطرفية (Endpoints).", en: "Antivirus software and patch management safeguard the Endpoint device layer." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "ما العامل الذي يمثله استخدام البصمة الذكية أو التعرف على الوجه في المصادقة؟", en: "Which authentication factor category is represented by fingerprint or face recognition?" },
    opts: { ar: ["عامل المعرفة (Knowledge)", "عامل الملكية (Possession)", "عامل السمات البيومترية (Biometric)", "عامل الموقع"], en: ["Knowledge Factor", "Possession Factor", "Biometric Factor", "Location Factor"] },
    a: 2,
    exp: { ar: "البصمة والوجه هي سمات حيوية بيومترية (Biometrics) خاصة بجسم الإنسان.", en: "Fingerprints and facial recognition constitute physical Biometric factors." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "ما المرحلة الأخيرة المكملة لدورة الاستجابة للحوادث الست والتي تمنع تكرار نفس الحادث مستقبلاً؟", en: "What is the final 6th phase of incident response that prevents future recurrence?" },
    opts: { ar: ["التحضير", "الدروس المستفادة والتحسين (Prevention of Recurrence)", "الكشف", "الاحتواء"], en: ["Preparation", "Prevention of Recurrence", "Detection", "Containment"] },
    a: 1,
    exp: { ar: "الدروس المستفادة وتحليل الأسباب تسد الثغرات لمنع وقوع نفس الحادث مجدداً.", en: "Prevention of recurrence analyzes root causes to harden systems against repeat breaches." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "أي التهديدات التالية يُعد حادثاً أمنياً من نوع 'تعديل وتغيير البيانات دون تصريح'؟", en: "Which incident scenario represents an unauthorized 'Data Tampering' security incident?" },
    opts: { ar: ["تعديل درجات الطلاب أو أرصدة البنوك دون إذن", "تشفير الملفات ببرنامج فدية", "تعطل الموقع بسبب ضغط الزوار", "تسريب كشف الحساب"], en: ["Unauthorized editing of student grades or bank balances", "Ransomware encryption", "Website crash from heavy traffic", "Statement leak"] },
    a: 0,
    exp: { ar: "التعديل غير المصرح به على البيانات يُصنف كحادث تلاعب وسالمة البيانات (Data Tampering).", en: "Unauthorized modification of records constitutes a Data Tampering security incident." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "لماذا لم يعد نموذج أمان 'المحيط التقليدي' (الداخل آمن والخارج خطر) كافياً في العصر الحديث؟", en: "Why is the traditional 'Perimeter Defense' model no longer sufficient today?" },
    opts: { ar: ["بسبب انتشار الخدمات السحابية والعمل عن بعد وتلاشي الحدود الصلبة للشبكة", "لأن الشبكات أصبحت بطيئة", "لأن الحواسيب صغيرة", "لأن الفيروسات اختفت"], en: ["Cloud services and remote work blurred network borders", "Networks became slow", "Computers became small", "Viruses disappeared"] },
    a: 0,
    exp: { ar: "السحابة والعمل عن بعد جعلا الأجهزة تتصل من خارج المؤسسة مما استدعى تطبيق Zero Trust.", en: "Cloud adoption and remote teleworking dissolved perimeter boundaries, requiring Zero Trust." }
  },
  {
    lesson: { ar: "شامل الوحدة 2", en: "Unit 2 Synthesis" },
    q: { ar: "عند شراء منتج عبر الإنترنت، أي التقنيات تُستخدم معاً لتوفير السرية، وتأكيد الهوية، ومنع الاختراق؟", en: "When making an online purchase, which integrated technologies deliver privacy, authentication, and login protection?" },
    opts: { ar: ["تشفير HTTPS + الشهادة الرقمية + المصادقة متعددة العوامل MFA", "البريد الإلكتروني فقط", "طباعة الفاتورة فقط", "مكالمة هاتفية"], en: ["HTTPS Encryption + Digital Certificate + MFA", "Email only", "Paper invoice only", "Phone call"] },
    a: 0,
    exp: { ar: "دمج تشفير HTTPS والشهادات الرقمية و MFA يؤمن المعاملة المالية الإلكترونية من كافة الجوانب.", en: "Combining HTTPS encryption, digital certificates, and MFA comprehensively protects e-commerce." }
  }
];
