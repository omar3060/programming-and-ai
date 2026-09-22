import { Question } from '../types';
import { unit2ExamQuestions } from './unit2ExamQuestions';

export { unit2ExamQuestions };

export const allExamQuestions: Question[] = [
  // Lesson 1-1 (5 questions)
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "الملاحظة التجريبية القائلة إن عدد الترانزستورات يتضاعف كل عامين تقريباً تسمى:", en: "The empirical observation stating that transistor density doubles roughly every two years is:" },
    opts: { ar: ["قانون نيوتن", "قانون مور", "مبدأ تورينج", "النفق الكمومي"], en: ["Newton's Law", "Moore's Law", "Turing Principle", "Quantum Tunneling"] },
    a: 1,
    exp: { ar: "قانون مور هو ملاحظة تجريبية صاغها جوردون مور لصناعة أشباه الموصلات.", en: "Moore's Law is Gordon Moore's empirical observation for semiconductors." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "التقنية التي انتشرت من العقد الثاني وتتيح تقديم موارد الحوسبة كخدمات مؤجرة عبر الإنترنت هي:", en: "Technology delivering scalable computing infrastructure as a utility since the 2010s is:" },
    opts: { ar: ["الحواسب الشخصية", "الصمامات المفرغة", "الحوسبة السحابية (Cloud)", "الأقراص المرنة"], en: ["PCs", "Vacuum Tubes", "Cloud Computing", "Floppy Disks"] },
    a: 2,
    exp: { ar: "الحوسبة السحابية تتيح تقديم تكنولوجيا المعلومات كخدمة (ITaaS).", en: "Cloud computing delivers computing resources as an on-demand service (ITaaS)." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "تقنية تضيف عناصر أو معلومات ورسومات رقمية فوق مشهد من العالم الحقيقي هي:", en: "Technology overlaying digital graphics onto real-world physical scenes is:" },
    opts: { ar: ["الواقع الافتراضي (VR)", "الواقع المعزز (AR)", "الحوسبة الطرفية", "التشفير"], en: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Edge Computing", "Cryptography"] },
    a: 1,
    exp: { ar: "الواقع المعزز (AR) يدمج الرقمي بالواقع الحقيقي دون عزل المستخدم.", en: "Augmented Reality (AR) superimposes digital data onto physical environments." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "في الحوسبة الكمومية، ما ميزة الكيوبت (Qubit) بفضل خاصية التراكب الكمي؟", en: "What capability does quantum superposition grant to a qubit?" },
    opts: { ar: ["تخزين نصوص فقط", "تمثيل مزيج من 0 و 1 معاً في نفس الوقت", "العمل دون كهرباء", "ثبات القيمة في حالة واحدة"], en: ["Text only", "Representing a mixture of 0 and 1 simultaneously", "Operates without power", "Static state"] },
    a: 1,
    exp: { ar: "التراكب الكمي يتيح للكيوبت تمثيل حالات متعددة متزامنة.", en: "Superposition allows a qubit to hold 0 and 1 simultaneously." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "لماذا تعالج السيارة ذاتية القيادة بيانات الكاميرا بالحوسبة الطرفية فوراً بدلاً من السحابة؟", en: "Why do autonomous vehicles process vision telemetry onboard via Edge Computing?" },
    opts: { ar: ["لأن السحابة ممتلئة", "لتقليل زمن الاستجابة لأن أي تأخير يهدد سلامة الأرواح", "لأن الاتصال بالإنترنت ممنوع قانونياً", "لتوفير بطارية الهاتف"], en: ["Cloud is full", "To minimize latency because delay risks human lives", "Internet is banned", "To save phone battery"] },
    a: 1,
    exp: { ar: "الحوسبة الطرفية تعالج فورياً في ملي ثوانٍ لتفادي تأخير نقل البيانات للسحابة.", en: "Edge computing processes locally in milliseconds, avoiding latency accidents." }
  },

  // Lesson 1-2 (5 questions)
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "المصطلح العام للأنظمة القادرة على محاكاة السلوك الذكي كالتنبؤ والتعرف وتوليد المحتوى هو:", en: "Broad term for systems reproducing intelligent human behaviors:" },
    opts: { ar: ["التعلم العميق", "التعلّم الآلي", "الذكاء الاصطناعي (AI)", "الشبكة العصبية"], en: ["Deep Learning", "Machine Learning", "Artificial Intelligence (AI)", "Neural Network"] },
    a: 2,
    exp: { ar: "الذكاء الاصطناعي هو المظلة الشاملة لجميع هذه الفروع.", en: "AI is the broad umbrella discipline." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "فرع من الذكاء الاصطناعي تتعلم فيه النماذج أنماطاً من البيانات دون برمجة صريحة لكل قاعدة:", en: "AI branch where models learn patterns from data without hand-coded rules:" },
    opts: { ar: ["التعلّم الآلي (ML)", "البرمجة التقليدية", "الحوسبة الطرفية", "نظام التشغيل"], en: ["Machine Learning (ML)", "Traditional Coding", "Edge Computing", "Operating System"] },
    a: 0,
    exp: { ar: "التعلّم الآلي يستنتج الأنماط الإحصائية مباشرة من البيانات.", en: "Machine learning extracts rules directly from historical data." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "أي طبقة في الشبكة العصبية تستقبل الميزات الخام دون أن تُجري أي حسابات رياضية؟", en: "Which neural network layer receives raw inputs without computing mathematical operations?" },
    opts: { ar: ["طبقة الإدخال (Input Layer)", "الطبقة المخفية الأولى", "طبقة الإخراج (Output Layer)", "دالة التنشيط"], en: ["Input Layer", "First Hidden Layer", "Output Layer", "Activation Function"] },
    a: 0,
    exp: { ar: "طبقة الإدخال تستقبل القيم الخام فقط وتمررها للطبقة المخفية.", en: "The Input Layer only ingests and forwards raw values without computation." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "أي من التطبيقات التالية لا يُعد مثالاً مناسباً على الذكاء الاصطناعي التوليدي؟", en: "Which of the following is NOT an example of Generative AI?" },
    opts: { ar: ["ChatGPT", "توليد الصور Midjourney", "مرشح الرسائل المزعجة (Spam)", "توليد الأكواد البرمجية"], en: ["ChatGPT", "Midjourney Image Generator", "Spam Email Filter", "Code Synthesis"] },
    a: 2,
    exp: { ar: "مرشح الرسائل المزعجة هو نظام تصنيف (Classification) وليس توليداً لمحتوى جديد.", en: "Spam filtering classifies; it does not synthesize new original content." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "ما الإجراء الإلزامي عند استخدام مخرجات الذكاء التوليدي للوقاية من الهلوسة؟", en: "What mandatory protocol prevents errors from GenAI hallucination?" },
    opts: { ar: ["تصديق النص فوراً إذا كان فصيحاً", "التحقق المزدوج المستقل من مصادر موثوقة (Cross-checking)", "إعادة تشغيل الجهاز", "تقليل سطوع الشاشة"], en: ["Trusting fluent text blindly", "Independent cross-checking with verified sources", "Restarting computer", "Lowering screen brightness"] },
    a: 1,
    exp: { ar: "التحقق المزدوج المستقلضرورة حتمية لكشف الادعاءات المختلقة.", en: "Independent cross-checking is mandatory to catch plausible hallucinations." }
  },

  // Lesson 1-3 (5 questions)
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "نظام يحلل السلوك السابق للمستخدم على منصات الفيديو لاقتراح مقاطع تلائمه يسمى:", en: "System analyzing past interaction logs on video platforms to propose items is:" },
    opts: { ar: ["نظام التوصية", "الترجمة الآلية", "الصيانة التنبؤية", "الحوسبة الطرفية"], en: ["Recommendation System", "Machine Translation", "Predictive Maintenance", "Edge Computing"] },
    a: 0,
    exp: { ar: "نظام التوصية يتنبأ بالتفضيلات بناءً على سجل النشاط السابق.", en: "Recommendation systems predict preferences from historical logs." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "في المصانع، ما المصطلح الذي يصف استخدام الحساسات للتنبؤ بأعطال الآلات قبل حدوثها؟", en: "Term describing predicting factory machine failures before they occur via sensors:" },
    opts: { ar: ["التشخيص بالأشعة", "الصيانة التنبؤية (Predictive Maintenance)", "الواقع المعزز", "المساعد الصوتي"], en: ["Radiological Diagnosis", "Predictive Maintenance", "Augmented Reality", "Voice Assistant"] },
    a: 1,
    exp: { ar: "الصيانة التنبؤية تحلل الاهتزاز والحرارة لمنع التوقف المفاجئ.", en: "Predictive maintenance analyzes telemetry to service machinery before breakdown." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "في أي قطاع تُستخدم خوارزميات الرؤية الحاسوبية لفحص صور الأشعة السينية والمقطعية؟", en: "In which industry are computer vision algorithms used to screen X-rays and CT scans?" },
    opts: { ar: ["الخدمات اللوجستية", "التصنيع", "الرعاية الصحية (Healthcare)", "التجارة الإلكترونية"], en: ["Logistics", "Manufacturing", "Healthcare", "E-commerce"] },
    a: 2,
    exp: { ar: "تساعد الرعاية الصحية في فحص الأشعة السينية لكشف الأورام والكسور.", en: "Healthcare AI assists radiologists in screening imaging scans." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "لماذا ينبغي أن يؤكد التشخيص الطبي النهائي طبيب بشري بدلاً من الـ AI منفرداً؟", en: "Why must human doctors confirm the final diagnosis rather than AI alone?" },
    opts: { ar: ["لأن الآلة ترفض الفحص", "لأن الخطأ يمس حياة المريض وتحديد المسؤولية الأخلاقية والقانونية حتمي", "لأن الطبيب أرخص تكلفة", "لأن الذكاء الاصطناعي بطيء جداً"], en: ["AI refuses tests", "Because errors touch lives and moral/legal accountability is mandatory", "Doctors are cheaper", "AI is too slow"] },
    a: 1,
    exp: { ar: "القرارات عالية الأثر تتطلب تحملاً للمسؤولية القانونية والحدس السريري الإنساني.", en: "High-stakes life-critical outcomes require human moral and legal accountability." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "فقدان الوضوح حول كيفية وصول الشبكة العصبية العميقة لقرارها النهائي يسمى:", en: "The opacity regarding how a deep neural network arrived at its decision is called:" },
    opts: { ar: ["مشكلة الصندوق الأسود (Black-Box)", "انقطاع الإنترنت", "القرصنة", "الذاكرة العشوائية"], en: ["The Black-Box Problem", "Disconnection", "Cyberattack", "RAM Error"] },
    a: 0,
    exp: { ar: "مشكلة الصندوق الأسود تعني صعوبة تتبع وتفسير الحسابات الداخلية المعقدة.", en: "The black-box problem refers to internal computational opacity in deep networks." }
  },

  // Lesson 1-4 (5 questions)
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "نمط في مخرجات الذكاء الاصطناعي يؤدي لنتائج غير عادلة بسبب بيانات التدريب يسمى:", en: "Systematic bias in AI outputs causing unfair discrimination due to data is:" },
    opts: { ar: ["التحيز الخوارزمي (Algorithmic Bias)", "قانون مور", "التراكب الكمي", "الترجمة الآلية"], en: ["Algorithmic Bias", "Moore's Law", "Quantum Superposition", "Machine Translation"] },
    a: 0,
    exp: { ar: "التحيز الخوارزمي يكرر النزعات التمييزية الواردة في بيانات التدريب التاريخية.", en: "Algorithmic bias reflects unrepresentative historical training datasets." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "ما المبدأ الأخلاقي الذي يقتضي عدم التمييز ظلماً ضد أي شخص أو فئة في الفرص؟", en: "Ethics principle requiring no unjust discrimination against any group:" },
    opts: { ar: ["المساءلة", "الشفافية", "العدالة (Fairness)", "السرعة"], en: ["Accountability", "Transparency", "Fairness", "Execution Speed"] },
    a: 2,
    exp: { ar: "العدالة تعني تكافؤ الفرص وعدم التمييز غير العادل في النتائج.", en: "Fairness ensures impartial, non-discriminatory evaluation across groups." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "إتاحة معلومات واضحة عن كيفية عمل النظام وعملية اتخاذ قراره وحدوده ومصادر بياناته هي:", en: "Disclosing how an AI works, its decision procedures, limits, and data sources is:" },
    opts: { ar: ["حماية الخصوصية", "الشفافية (Transparency)", "المساءلة", "التحيز"], en: ["Privacy Protection", "Transparency", "Accountability", "Bias"] },
    a: 1,
    exp: { ar: "الشفافية تعني كشف طريقة العمل ومصادر البيانات وحدود النظام للمستخدمين.", en: "Transparency demands open disclosure of decision procedures and constraints." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "المصطلح الخاص بالتقنيات التي تساعد البشر على فهم وتفسير أسباب قرار الذكاء الاصطناعي:", en: "Technology enabling humans to trace and understand reasons behind AI verdicts:" },
    opts: { ar: ["الذكاء القابل للتفسير (XAI)", "الصندوق المغلق", "النفق الكمومي", "الذاكرة المخبأة"], en: ["Explainable AI (XAI)", "Sealed Box", "Quantum Tunneling", "Cache Memory"] },
    a: 0,
    exp: { ar: "Explainable AI (XAI) هو الذكاء القابل للتفسير لفك غموض الصندوق الأسود.", en: "Explainable AI (XAI) renders complex model decisions human-interpretable." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "ما الفرق الجوهري بين المساءلة (Accountability) والذكاء القابل للتفسير (XAI)؟", en: "Difference between Accountability and Explainable AI (XAI):" },
    opts: { ar: ["هما نفس المعنى تماماً", "XAI لشرح القرار تقنياً، والمساءلة لتحديد من يُحاسب قانونياً وأخلاقياً", "المساءلة للمبرمج فقط", "XAI للمستخدم فقط"], en: ["They are identical", "XAI explains the decision; Accountability determines who is legally/morally answerable", "Accountability for coders only", "XAI for users only"] },
    a: 1,
    exp: { ar: "المساءلة تحدد من يتحمل المسؤولية، بينما XAI يشرح كيفية استنتاج النتيجة.", en: "Accountability assigns moral/legal liability; XAI provides technical interpretability." }
  },

  // Final Unit Synthesis (5 questions)
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما المشكلة الفيزيائية التي تحدث عندما تقفز الإلكترونات عبر الحواجز الذرية في الترانزستورات؟", en: "Physical issue where electrons tunnel across atomic barriers in nanometer transistors:" },
    opts: { ar: ["النفق الكمومي (Quantum Tunneling)", "قانون مور", "الحوسبة الطرفية", "التراكب الكمي"], en: ["Quantum Tunneling", "Moore's Law", "Edge Computing", "Quantum Superposition"] },
    a: 0,
    exp: { ar: "النفق الكمومي ظاهرة كمية تسبب تسرب الإلكترونات عند أبعاد النانومتر.", en: "Quantum tunneling occurs when electrons spontaneously breach ultra-thin physical gates." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "في نظام الدفع غير النقدي، أي من الوسائل التالية تعتمد على الاتصال قريب المدى دون تلامس؟", en: "Which cashless payment method operates via contactless near-field communications?" },
    opts: { ar: ["الشيكات الورقية", "تقنية (NFC)", "الصمامات المفرغة", "الفاكس"], en: ["Paper checks", "NFC Technology", "Vacuum tubes", "Fax"] },
    a: 1,
    exp: { ar: "NFC (Near Field Communication) تتيح الدفع بلمسة واحدة بالهاتف أو البطاقة.", en: "NFC enables contactless tap-to-pay via cards and smartphones." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "تتعدل قيم الأوزان (Weights) داخل الطبقات المخفية في الشبكة العصبية أثناء التدريب بهدف:", en: "Weights are adjusted in neural network hidden layers during training to:" },
    opts: { ar: ["زيادة استهلاك الكهرباء", "تقليل دالة الخسارة والخطأ إلى أدنى حد ممكن", "مسح ذاكرة الحاسب", "إيقاف المعالج"], en: ["Increase electrical consumption", "Minimize the loss function and error", "Erase system memory", "Halt the processor"] },
    a: 1,
    exp: { ar: "تعديل الأوزان عبر الانتشار العكسي (Backpropagation) يقلل نسبة الخطأ ويزيد الدقة.", en: "Weight optimization via backpropagation minimizes loss to maximize inference accuracy." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "عند استخدام الرمز البريدي كبديل للعرق في خوارزمية بنكية، يُسمى هذا المتغير في الذكاء الاصطناعي بـ:", en: "When a ZIP code acts as an indirect substitute for race in banking AI, it is called:" },
    opts: { ar: ["متغير بديل (Proxy Variable)", "كيوبت كمي", "دالة خسارة", "صمام مفرغ"], en: ["Proxy Variable", "Quantum Qubit", "Loss Function", "Vacuum Tube"] },
    a: 0,
    exp: { ar: "المتغير البديل (Proxy Variable) ينقل التحيز غير العادل بطريقة غير مباشرة.", en: "A Proxy Variable carries discriminatory bias implicitly." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "تطبيق مبدأ 'الإنسان في حلقة القرار' (Human-in-the-loop) يُعد إلزامياً في:", en: "Applying the 'Human-in-the-loop' governance paradigm is mandatory in:" },
    opts: { ar: ["حذف ملفات المهملات", "القرارات عالية الأثر التي تمس حياة الإنسان والعدالة كالجراحة والقضاء", "تشغيل منبه الهاتف", "فرز الرسائل المزعجة"], en: ["Emptying trash folder", "High-impact life-critical verdicts such as surgery and judiciary", "Setting phone alarm", "Sorting spam emails"] },
    a: 1,
    exp: { ar: "القرارات عالية الأثر تتطلب تحملاً للمسؤولية الأخلاقية والقانونية وإشرافاً بشرياً حتمياً.", en: "High-stakes life-and-death decisions legally mandate responsible human oversight." }
  }
];
