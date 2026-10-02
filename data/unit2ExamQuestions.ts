import { Question } from '../types';

export const unit2ExamQuestions: Question[] = [
  // Lesson 2-1: Cryptographic Technologies and Authentication (10 questions)
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "في اتصالات HTTPS، ما التقنية المستخدمة أولاً لتبادل المفتاح المشترك بأمان بين المتصفح والخادم؟", en: "In HTTPS communication, which cryptographic method is used first to safely share a common key between browser and server?" },
    opts: { ar: ["التشفير المتماثل", "التشفير بالمفتاح العام (Public-key cryptography)", "جدار الحماية", "التأمين اللاسلكي"], en: ["Symmetric encryption", "Public-key cryptography", "Firewall", "Wireless Security"] },
    a: 1,
    exp: { ar: "يُستخدم التشفير بالمفتاح العام في البداية لتبادل المفتاح المشترك بأمان أثناء مصافحة TLS.", en: "Public-key cryptography is used initially to safely exchange the shared key during TLS handshake." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "لماذا تُستخدم تقنية التشفير المتماثل (Symmetric Key) في نقل البيانات بعد مشاركة المفتاح في TLS؟", en: "Why is symmetric key cryptography used for data transfer after sharing the key in TLS?" },
    opts: { ar: ["لأنها أبطأ", "لأنها توفر السرعة العالية والأداء السريع في تشفير البيانات ضخمة الحجم", "لأنها لا تحتاج مفاتيح", "لأنها مجانية"], en: ["Because it is slower", "Because it achieves high speed and performance for encrypting large amounts of data", "Because it requires no keys", "Because it is free"] },
    a: 1,
    exp: { ar: "التشفير بالمفتاح المشترك (المتماثل) أسرع بكثير في نقل البيانات الكبيرة بعد الاتفاق عليه.", en: "Symmetric cryptography provides high speed and efficiency for bulk data encryption once shared." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "المصادقة متعددة العوامل (MFA) هي دمج عاملتين أو أكثر من ثلاث فئات مستقلة وهي:", en: "Multi-factor authentication (MFA) combines two or more factors from which three independent categories?" },
    opts: { ar: ["اسم المستخدم وكلمة المرور فقط", "المعرفة (Knowledge)، الملكية (Possession)، والسمات البيومترية (Biometrics)", "الرقم السري والبريد", "الاسم والجهة"], en: ["Username and password only", "Knowledge, Possession, and Biometric factors", "PIN and email", "Name and organization"] },
    a: 1,
    exp: { ar: "تتكون عوامل MFA من المعرفة (مثل كلمة المرور)، الملكية (مثل الهاتف)، والسمات البيومترية (مثل البصمة).", en: "MFA factors comprise Knowledge (password), Possession (phone/card), and Biometrics (fingerprint/face)." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "ما التقنية الأمنية التي تمكن من كشف أي تلاعب بالبيانات وتضمن عدم التنصل (Non-repudiation)؟", en: "Which security technology detects data tampering and provides non-repudiation (preventing sender denial)?" },
    opts: { ar: ["التوقيع الرقمي (Digital Signature)", "جدار الحماية", "مضاد الفيروسات", "اسم المستخدم"], en: ["Digital Signature", "Firewall", "Antivirus", "Username"] },
    a: 0,
    exp: { ar: "التوقيع الرقمي يكشف التلاعب بالبيانات ويضمن عدم تنصل المرسل من توقيعه.", en: "Digital signatures detect tampering and enforce non-repudiation of transactions." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "ما الوثيقة الرقمية الصادرة من جهة تصديق موثوقة (CA) للتحقق من هوية وأصالة موقع الويب؟", en: "What digital record issued by a Certificate Authority (CA) verifies the identity and authenticity of a web server?" },
    opts: { ar: ["الشهادة الرقمية (Digital Certificate)", "كلمة السر", "رمز QR", "الملف المؤقت"], en: ["Digital Certificate", "Password", "QR Code", "Temporary File"] },
    a: 0,
    exp: { ar: "تثبت الشهادة الرقمية الصادرة من CA أصالة موقع الويب ورابطه الرسمي.", en: "Digital certificates issued by trusted CAs confirm web server authenticity." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "إذا أدخل المستخدم كلمتي مرور متتاليتين من نفس الفئة، فهل يُعد ذلك مصادقة ثنائية (2FA)؟", en: "If a user enters two consecutive passwords from the same category, does it qualify as 2FA?" },
    opts: { ar: ["نعم، لأنها خطوتان", "لا، لأن 2FA تتطلب عامل ينتميان لفئتين مستقلتين مختلفين (مثل معرفة + ملكية)", "نعم، إذا كانتا طويلتين", "لا، إلا إذا تم استخدام البريد"], en: ["Yes, because it has two steps", "No, because 2FA requires two factors from different independent categories (e.g. Knowledge + Possession)", "Yes, if passwords are long", "No, unless email is used"] },
    a: 1,
    exp: { ar: "يشترط في المصادقة الثنائية 2FA استخدام عاملين من فئتين مختلفتين (وليس إدخال كلمتي سر من فئة المعرفة).", en: "2FA strictly requires two independent factor categories, not multi-step single-factor inputs." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "ما دور مفاتيح الجلسة (Session Keys) في اتصالات TLS بعد اكتمال المصافحة؟", en: "What is the role of Session Keys in TLS communications after the handshake completes?" },
    opts: { ar: ["فحص الفيروسات", "تشفير وفك تشفير بيانات الجلسة بسرعة عالية باستخدام التشفير المتماثل", "حظر الإعلانات", "حفظ كلمة السر"], en: ["Virus scanning", "Fast encryption and decryption of payload data using symmetric encryption", "Ad blocking", "Saving password"] },
    a: 1,
    exp: { ar: "مفاتيح الجلسة هي مفاتيح متماثلة تُستخدم لتشفير حركة البيانات الفعلية بسرعة وسلاسة.", en: "Session keys enable high-speed symmetric payload encryption during active connections." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "إذا تم تسريب كلمة مرور حساب معزز بنظام MFA، فما الذي يمنع المخترق من الدخول؟", en: "If an MFA-protected account password leaks, what prevents an attacker from logging in?" },
    opts: { ar: ["الحاسوب سينطفئ تلقائياً", "عدم امتلاك المخترق لعامل الملكية (مثل رمز الهاتف) أو العامل البيومتري", "بطء شبكة الإنترنت", "تغيير اسم المستخدم"], en: ["Computer auto shut down", "Attacker lacks the Possession factor (e.g., OTP on phone) or Biometric factor", "Slow network", "Changing username"] },
    a: 1,
    exp: { ar: "تمنع مصادقة MFA الاختراق لأن المهاجم يفتقر إلى العامل الثاني كالهاتف الشخصي أو البصمة.", en: "MFA thwarts breaches because attackers lack physical possession tokens or biometrics." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "في تحليل تمرين 'فكر كمهندس'، ما العيب الرئيسي لاشتراط هاتف ذكي كعامل ثانٍ لإنجاز الخدمات المدرسية؟", en: "In the 'Think as an Engineer' exercise, what is the main drawback of requiring a smartphone as a 2nd authentication factor for students?" },
    opts: { ar: ["الخدمة صعبة الاستخدام", "عدم قدرة الطلاب الذين لا يمتلكون هواتف ذكية على الوصول للخدمة المدرسية", "زيادة تكلفة السيرفر", "الرسائل سريعة جداً"], en: ["Service is hard to use", "Students without smartphones cannot access the school portal", "Increases server cost", "SMS is too fast"] },
    a: 1,
    exp: { ar: "يشكل الاعتماد الحصري على الهواتف الذكية عائقاً أمام الطلاب الذين لا يملكون أجهزة خاصة.", en: "Requiring smartphones creates accessibility issues for students who do not own personal mobile devices." }
  },
  {
    lesson: { ar: "الدرس 2-1", en: "Lesson 2-1" },
    q: { ar: "عند إجراء شراء إلكتروني عبر متجر، ما التقنيات المكتملة التي توفر السرية، وتأكيد الهوية، ومنع الاختراق؟", en: "When purchasing online, which integrated suite delivers encryption privacy, site authentication, and access control?" },
    opts: { ar: ["تشفير HTTPS + الشهادة الرقمية + المصادقة الثنائية 2FA", "البريد الإلكتروني فقط", "طباعة الفاتورة ورقية", "المكالمة الهاتفية"], en: ["HTTPS Encryption + Digital Certificate + 2FA Authentication", "Email only", "Paper invoice printing", "Phone call"] },
    a: 0,
    exp: { ar: "تتكامل هذه التقنيات معاً لحماية الاتصال (HTTPS)، وإثبات هوية الخادم (CA)، وتأمين الحساب (2FA).", en: "Integrating HTTPS, digital certificates, and 2FA holistically secures online transactions." }
  },

  // Lesson 2-2: Network Security Design (10 questions)
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "النظام المقيم عند نقطة حدود الشبكة للتحكم في مرور حركة البيانات بناءً على قواعد محددة هو:", en: "System installed at network borders to control traffic flow according to predefined rules is:" },
    opts: { ar: ["الشبكة الافتراضية VPN", "جدار الحماية (Firewall)", "المنطقة منزوعة السلاح DMZ", "المتصفح"], en: ["Virtual Private Network (VPN)", "Firewall", "Demilitarized Zone (DMZ)", "Browser"] },
    a: 1,
    exp: { ar: "يفحص جدار الحماية الاتصالات ويسمح بها أو يمنعها بناءً على قواعد أمان مسبقة.", en: "Firewalls filter network packets against preconfigured security rules." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "التقنية التي تنشئ خطاً خاصاً مشفراً عبر الإنترنت لتوصيل الموظفين عن بعد بشبكة المؤسسة بأمان هي:", en: "Technology creating an encrypted private tunnel over the internet for safe remote employee access:" },
    opts: { ar: ["الشبكة الافتراضية الخاصة (VPN)", "جدار الحماية", "الذاكرة العشوائية", "موزع الشبكة"], en: ["Virtual Private Network (VPN)", "Firewall", "RAM", "Network Switch"] },
    a: 0,
    exp: { ar: "تنشئ الـ VPN نفقاً مشفراً لحماية الاتصال من التجسس والاختراق عبر الشبكات المفتوحة.", en: "VPNs establish encrypted tunnels safeguarding data transit across public networks." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "المنطقة التشييدية التي تُوضع فيها الخوادم الموجهة للجمهور (كخادم الويب) بمعزل عن الشبكة الداخلية هي:", en: "Network segment where public-facing servers (web/mail) are placed isolated from internal networks:" },
    opts: { ar: ["المنطقة منزوعة السلاح (DMZ)", "جدار الحماية", "المعالجة الطرفية", "البوابة المحلية"], en: ["Demilitarized Zone (DMZ)", "Firewall", "Edge Processing", "Local Gateway"] },
    a: 0,
    exp: { ar: "تُعزل الخوادم العامة في DMZ لمنع المهاجم من الوصول للشبكة الداخلية وقواعد البيانات في حال اختراق الخادم.", en: "DMZs isolate public servers so an attack there does not compromise internal enterprise databases." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "مفهوم الأمان القائم على تطبيق تدابير أمنية متعددة الطبقات بحيث إذا فشلت طبقة تحمي الطبقة التالية النظام هو:", en: "Security architecture layering multiple controls so that if one layer fails, subsequent layers protect the system:" },
    opts: { ar: ["الدفاع العميق (Defense in Depth)", "الجدار التكعيبي", "قانون مور", "التشفير المتماثل"], en: ["Defense in Depth", "Cubic Wall", "Moore's Law", "Symmetric Encryption"] },
    a: 0,
    exp: { ar: "يعتمد الدفاع العميق على توزيع الأمان على 4 طبقات (الشبكة، المسار، الخوادم، الأجهزة).", en: "Defense in depth layers security across network entry, communication paths, servers, and endpoints." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "ما المفهوم الحديث الذي ينص على 'عدم الوثوق بأي اتصال آلياً حتى داخل الشبكة والتحقق الدائم من كل طلب'؟", en: "Modern security model stating 'Never trust, always verify' for every access request inside or outside the network:" },
    opts: { ar: ["عدم الثقة (Zero Trust)", "المحيط المفتوح", "الثقة التلقائية", "التشفير فقط"], en: ["Zero Trust", "Open Perimeter", "Automatic Trust", "Encryption Only"] },
    a: 0,
    exp: { ar: "يلغي نموذج Zero Trust الثقة التلقائية ويشترط التحقق المستمر من الهوية والصلاحيات.", en: "Zero Trust eliminates implicit trust, requiring continuous authentication for all requests." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "في طبقات الدفاع العميق الاربع، تثبيت برنامج مضاد الفيروسات وتحديث نظام التشغيل يمثل حماية أي طبقة؟", en: "In Defense in Depth 4 layers, installing antivirus and patch management belongs to which layer?" },
    opts: { ar: ["مدخل الشبكة (Network Entry)", "مسار الاتصال (Communication Path)", "وضع الخوادم (Server Placement)", "الأجهزة الطرفية (Endpoints)"], en: ["Network Entry", "Communication Path", "Server Placement", "Endpoints"] },
    a: 3,
    exp: { ar: "تقع حماية حواسيب الموظفين وأجهزتهم الشخصية ضمن طبقة الأجهزة الطرفية (Endpoints).", en: "Antivirus and OS updates safeguard the individual Endpoint device layer." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "ما الهدف الرئيسي من تكوين المنطقة منزوعة السلاح DMZ؟", en: "What is the primary architectural goal of configuring a DMZ?" },
    opts: { ar: ["تسريع التحميل", "منع انتشار الاختراق من الخوادم العامة المفتوحة للنت إلى قواعد البيانات والشبكة الداخلية", "إغلاق المتجر", "إلغاء التشفير"], en: ["Speed up downloading", "Prevent external breaches on public servers from penetrating internal database networks", "Close store", "Disable encryption"] },
    a: 1,
    exp: { ar: "فصل خوادم الويب في DMZ يضمن أنه حتى لو تم اختراق خادم الويب، تظل البيانات الداخلية محمية.", en: "DMZ isolation ensures that compromised web servers cannot directly access internal backend storage." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "لماذا يُعد استخدام الـ VPN ضرورياً جداً عند الاتصال بشبكة Wi-Fi عامة في مقهى أو مطار؟", en: "Why is using a VPN essential when connecting to public Wi-Fi networks in airports or cafes?" },
    opts: { ar: ["لأنه يمنع شحن البطارية", "لأنه يشفر البيانات المتبادلة فيمنع المتنصتين على الشبكة المفتوحة من قراءتها", "لأنه يزيد مساحة الهارد", "لأنه يلغي كلمات السر"], en: ["Prevents battery charging", "Encrypts data traffic to prevent packet sniffing and eavesdropping on open networks", "Increases disk space", "Removes passwords"] },
    a: 1,
    exp: { ar: "تمنع تقنية التشفير في الـ VPN المهاجمين الموجودين على نفس شبكة Wi-Fi العامة من التنصت على البيانات.", en: "VPN encryption shields telemetry from malicious packet sniffers sharing open Wi-Fi networks." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "لماذا لم يعد نموذج أمان 'المحيط التقليدي' (الداخل آمن والخارج خطر) كافياً للمؤسسات؟", en: "Why is traditional perimeter defense ('Inside safe, outside dangerous') no longer sufficient?" },
    opts: { ar: ["بسبب انتشار الخدمات السحابية والعمل عن بعد وتلاشي الحدود الصلبة للشبكة", "لأن الشبكات أصبحت بطيئة", "لأن الحاسوب لا يعمل", "لأن التهديدات اختفت"], en: ["Cloud services and remote telework dissolved physical network borders", "Networks became slow", "Computers stopped working", "Threats disappeared"] },
    a: 0,
    exp: { ar: "أدى العمل عن بعد والسحابة لتلاشي حدود الشبكة الفيزيائية، مما تطلب تطبيق نموذج Zero Trust.", en: "Cloud adoption and teleworking dissolved traditional network boundaries, necessitating Zero Trust." }
  },
  {
    lesson: { ar: "الدرس 2-2", en: "Lesson 2-2" },
    q: { ar: "ما التسلسل الصحيح لطبقات الدفاع العميق الأربع (Defense in Depth Layers)؟", en: "What is the correct 4-layer order of Defense in Depth Architecture?" },
    opts: { ar: ["1-مدخل الشبكة، 2-مسار الاتصال، 3-وضع الخوادم (DMZ)، 4-الأجهزة الطرفية", "1-الأجهزة فقط", "1-كلمة السر فقط", "1-الذاكرة فقط"], en: ["1-Network Entry, 2-Communication Path, 3-Server Placement (DMZ), 4-Endpoints", "1-Endpoints only", "1-Password only", "1-Memory only"] },
    a: 0,
    exp: { ar: "يتدرج الأمان من مدخل الشبكة (جدار الحماية)، لمسار الاتصال (VPN)، لوضع الخوادم (DMZ)، للأجهزة الطرفية.", en: "Defense in depth cascades from entry firewall to path VPN, server DMZ, and device endpoint security." }
  },

  // Lesson 2-3: Incident Response and Risk Management (10 questions)
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "الموقف الذي ينجم عنه حدوث ضرر فعلي أو تهديد جدي لسرية أو سلامة أو توافر المعلومات يسمى:", en: "A situation causing actual damage or serious threat compromising confidentiality, integrity, or availability:" },
    opts: { ar: ["حادث أمني (Security Incident)", "تحديث برمجيات", "إيقاف التشغيل العادي", "نسخ احتياطي"], en: ["Security Incident", "Software Update", "Normal Shutdown", "Backup"] },
    a: 0,
    exp: { ar: "الحادث الأمني هو أي خرق أو تهديد يضر بخصائص أمان المعلومات الرئيسية.", en: "A security incident represents realized damage or critical threat to information assets." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "ما المرحلة الأولى في الدورة العامة الست للاستجابة للحوادثSecurity Incident Response؟", en: "What is the first phase in the 6-stage Incident Response lifecycle?" },
    opts: { ar: ["التحضير والاستعداد (Preparation)", "الاستئصال", "الاستعادة", "الدروس المستفادة"], en: ["Preparation", "Eradication", "Recovery", "Lessons Learned"] },
    a: 0,
    exp: { ar: "التحضير ينشئ إجراءات وفريق الاستجابة وتدابير الأمان مسبقاً قبل وقوع أي حادث.", en: "Preparation establishes policies, response teams, and tools prior to any security event." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "في مراحل الاستجابة للحوادث الست، أي مرحلة تُنفذ فوراً لعزل الأجهزة المصابة ومنع انتشار الضرر؟", en: "In incident response, which phase is executed immediately to isolate affected systems and contain damage?" },
    opts: { ar: ["الاحتواء (Containment)", "الاستعادة", "التحضير", "الدروس المستفادة"], en: ["Containment", "Recovery", "Preparation", "Lessons Learned"] },
    a: 0,
    exp: { ar: "الاحتواء (مثل فصل الجهاز المصاب عن الشبكة) يمنع انتشار الفيروس أو الضرر لباقي الأنظمة.", en: "Containment isolates compromised assets to freeze damage progression across the enterprise." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "أي مرحلة تهدف إلى إزالة السبب الجذري للحادث الأمني (كحذف البرمجيات الخبيثة وسد الثغرات)؟", en: "Which phase removes the root cause of the incident (e.g., purging malware and patching vulnerabilities)?" },
    opts: { ar: ["الاستئصال وإزالة التهديد (Eradication)", "الاستعادة", "الكشف", "التحضير"], en: ["Eradication", "Recovery", "Detection", "Preparation"] },
    a: 0,
    exp: { ar: "تستأصل هذه المرحلة التهديد وتنظف النظام تماماً قبل البدء في إعادة الخدمة للعمل.", en: "Eradication purges malware and remedies vulnerabilities before restoring services." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "ما الكارثة الأمنية التي تحدث إذا قمنا بمرحلة الاستعادة (Recovery) قبل مرحلة الاستئصال (Eradication)؟", en: "What severe flaw occurs if Recovery is executed before Eradication?" },
    opts: { ar: ["يتسارع النظام", "قد تظل البرمجية الخبيثة نشطة مما يسبب تكرار الحادث الأمني فوراً", "تتضاعف الشاشة", "تزيد السرعة"], en: ["System speeds up", "Malware remains active causing immediate incident recurrence", "Screen doubles", "Speed increases"] },
    a: 1,
    exp: { ar: "إعادة التشغيل أو الاستعادة قبل حذف التهديد تعني بقاء الفيروس وتكرار الهجوم الأمني فوراً.", en: "Restoring operations while malware persists triggers immediate re-infection." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "حسب نموذج تقييم المخاطر المدرسي، كيف يُحسب حجم الخطر (Risk Size)؟", en: "According to the textbook risk assessment model, how is Risk Size calculated?" },
    opts: { ar: ["حجم الخطر = التأثير + التكلفة", "حجم الخطر = التأثير × الاحتمالية (Impact × Likelihood)", "حجم الخطر = عدد الحواسيب", "حجم الخطر = التكلفة مقسومة على 2"], en: ["Risk Size = Impact + Cost", "Risk Size = Impact × Likelihood", "Risk Size = Computer count", "Risk Size = Cost / 2"] },
    a: 1,
    exp: { ar: "حجم الخطر هو حاصل ضرب حجم الضرر (التأثير) في نسبة فرصة وقوعه (الاحتمالية).", en: "Risk magnitude is mathematically computed as Impact multiplied by Likelihood." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "عند ترتيب أولويات معالجة المخاطر، أي نوع من المخاطر يجب البدء بمعالجته فوراً وله الأولوية القصوى؟", en: "When prioritizing risk remediation, which risk profile demands top priority and immediate action?" },
    opts: { ar: ["المخاطر ذات التأثير المنخفض والاحتمالية المنخفضة", "المخاطر ذات التأثير العالي والاحتمالية العالية (High Impact × High Likelihood)", "المخاطر رخيصة التكلفة", "المخاطر القديمة"], en: ["Low Impact × Low Likelihood", "High Impact × High Likelihood", "Inexpensive risks", "Old risks"] },
    a: 1,
    exp: { ar: "تُمثل المخاطر عالية التأثير وعالية الاحتمالية التهديد الأكبر وتستوجب التدخل الفوري.", en: "High Impact × High Likelihood risks present extreme threats and demand top priority." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "ما الهدف الرئيسي من المرحلة السادسة والأخيرة (الدروس المستفادة والتحسين)؟", en: "What is the primary goal of the 6th final phase (Lessons Learned & Improvement)?" },
    opts: { ar: ["تنسيق الخطوط", "توثيق الحادث وتحسين الضوابط الأمنية لمنع تكرار نفس الحادث مستقبلاً", "إطفاء السيرفرات", "حذف قاعدة البيانات"], en: ["Formatting fonts", "Documenting the event and hardening security controls to prevent future recurrence", "Powering down servers", "Deleting databases"] },
    a: 1,
    exp: { ar: "تُحلل هذه المرحلة الأسباب الجذرية وتطور تدابير الأمان لضمان عدم تكرار الخرق.", en: "Lessons learned analyzes root causes to harden posture against repeat breaches." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "أي التهديدات التالية يُصنف كحادث أمني من نوع 'التلاعب بالبيانات Data Tampering'؟", en: "Which scenario exemplifies an unauthorized 'Data Tampering' security incident?" },
    opts: { ar: ["تعديل درجات الطلاب أو سجلات الحضور دون إذن رسمي", "تشفير الملفات ببرنامج فدية", "تعطل الموقع بسبب كثرة الزوار", "تسريب الفاتورة"], en: ["Unauthorized modification of student grades or attendance records", "Ransomware encryption", "Server crash from high traffic", "Invoice leak"] },
    a: 0,
    exp: { ar: "تعديل البيانات غير المصرح به يمس سلامة المعلومات ويُعد حادث تلاعب (Tampering).", en: "Unauthorized alteration of records violates data integrity, constituting data tampering." }
  },
  {
    lesson: { ar: "الدرس 2-3", en: "Lesson 2-3" },
    q: { ar: "عند تعرض المدرسة لهجوم برمجيات الفدية (Ransomware)، ما ترتيب الإجراءات الصحيحة الموصى بها؟", en: "When a school suffers a Ransomware attack, what is the mandatory sequence of actions?" },
    opts: { ar: ["1-الاحتواء (فصل الأجهزة)، 2-الاستئصال (إزالة الفدية والسد)، 3-الاستعادة (إرجاع النسخة الاحتياطية)", "1-الاستعادة أولاً", "1-الفرار", "1-إعادة التشغيل فوراً"], en: ["1-Containment (isolate PCs), 2-Eradication (purge malware), 3-Recovery (restore clean backup)", "1-Recovery first", "1-Fleeing", "1-Rebooting immediately"] },
    a: 0,
    exp: { ar: "يجب أولاً احتواء الإصابة لمنع انتشارها، ثم استئصال الفيروس، ثم استعادة البيانات من النسخ الاحتياطية.", en: "Proper response mandates Containment first, followed by Eradication, and then clean Recovery." }
  }
];
