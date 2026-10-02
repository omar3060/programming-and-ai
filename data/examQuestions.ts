import { Question } from '../types';
import { unit2ExamQuestions } from './unit2ExamQuestions';

export { unit2ExamQuestions };

export const allExamQuestions: Question[] = [
  // ==========================================
  // LESSON 1-1: 10 Questions (Indices 0 - 9)
  // ==========================================
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "الملاحظة التجريبية القائلة إن عدد الترانزستورات على شريحة الدائرة المتكاملة يتضاعف كل عامين تقريباً تسمى:", en: "The empirical observation stating that transistor density doubles roughly every two years is:" },
    opts: { ar: ["قانون نيوتن", "قانون مور", "مبدأ تورينج", "النفق الكمومي"], en: ["Newton's Law", "Moore's Law", "Turing Principle", "Quantum Tunneling"] },
    a: 1,
    exp: { ar: "قانون مور هو ملاحظة تجريبية صاغها جوردون مور لقطاع أشباه الموصلات وتصف تضاعف كفاءة الترانزستورات.", en: "Moore's Law is Gordon Moore's empirical observation for semiconductor transistor scaling." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "ما الترتيب الزمني الصحيح لمراحل تطور تكنولوجيا المعلومات من البداية حتى اليوم وفقاً لكتاب الوزارة؟", en: "What is the correct chronological order of IT development stages from inception to today?" },
    opts: { 
      ar: ["ظهور الحاسوب ← تسويق الإنترنت ← صعود الهواتف الذكية ← انتشار الحوسبة السحابية", "تسويق الإنترنت ← ظهور الحاسوب ← الحوسبة السحابية ← الهواتف الذكية", "صعود الهواتف الذكية ← ظهور الحاسوب ← تسويق الإنترنت ← الحوسبة السحابية", "الحوسبة السحابية ← صعود الهواتف الذكية ← ظهور الحاسوب ← تسويق الإنترنت"], 
      en: ["Birth of computer → Commercialization of Internet → Rise of smartphones → Spread of cloud computing", "Commercialization of Internet → Birth of computer → Cloud computing → Rise of smartphones", "Rise of smartphones → Birth of computer → Commercialization of Internet → Cloud computing", "Cloud computing → Rise of smartphones → Birth of computer → Commercialization of Internet"] 
    },
    a: 0,
    exp: { ar: "بدأت المراحل بالحواسيب الأولى (ENIAC)، ثم تسويق الويب في التسعينيات، ثم الهواتف الذكية في الألفينيات، ثم السحابة والذكاء الاصطناعي.", en: "IT evolved from ENIAC mainframes to 1990s Web, 2000s smartphones, and 2010s cloud & AI computing." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "التقنية التي انتشرت من العقد الثاني (2010s) وتتيح تقديم موارد الحوسبة والذكاء الاصطناعي كخدمة مؤجرة عبر الإنترنت (ITaaS) هي:", en: "Technology delivering scalable computing resources and AI as an on-demand service (ITaaS) since the 2010s is:" },
    opts: { ar: ["الحواسب الشخصية", "الصمامات المفرغة", "الحوسبة السحابية (Cloud Computing)", "الأقراص المرنة"], en: ["PCs", "Vacuum Tubes", "Cloud Computing", "Floppy Disks"] },
    a: 2,
    exp: { ar: "الحوسبة السحابية تتيح تقديم تكنولوجيا المعلومات كخدمة مؤجرة (IT as a Service).", en: "Cloud computing delivers computing infrastructure as an on-demand leased utility (ITaaS)." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "في أي حقبة زمنية ظهرت الحواسيب الأولى مثل ENIAC الذي كان يزن 30 طناً ويحتوي على 18,000 صمام مفرغ؟", en: "In which period did the first computers appear, such as ENIAC weighing 30 tons with 18,000 vacuum tubes?" },
    opts: { ar: ["الأربعينيات إلى الستينيات (1940s-1960s)", "السبعينيات إلى الثمانينيات (1970s-1980s)", "التسعينيات (1990s)", "العقد الأول من الألفية (2000s)"], en: ["1940s-1960s", "1970s-1980s", "1990s", "2000s"] },
    a: 0,
    exp: { ar: "ظهرت الحواسيب الأولى الضخمة التي تعتمد على الصمامات المفرغة في الفترة من الأربعينيات حتى الستينيات.", en: "First room-sized vacuum tube computers emerged during the 1940s-1960s era." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "تقنية تضيف عناصر أو معلومات ورسومات رقمية تراكبية فوق مشاهد من العالم الحقيقي دون عزل المستخدم هي:", en: "Technology overlaying digital elements and graphics onto real-world scenes without isolating the user is:" },
    opts: { ar: ["الواقع الافتراضي (VR)", "الواقع المعزز (AR)", "الحوسبة الطرفية", "التشفير"], en: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Edge Computing", "Cryptography"] },
    a: 1,
    exp: { ar: "الواقع المعزز (AR) يدمج العناصر الرقمية بالواقع الفعلي المباشر.", en: "Augmented Reality (AR) superimposes digital information onto physical environments." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "تقنية تسمح للمستخدم بالانغماس التام داخل بيئة افتراضية كاملة مولدة بوساطة الحاسوب تُسمى:", en: "Technology allowing users to fully immerse themselves in a computer-generated virtual environment is:" },
    opts: { ar: ["الواقع المعزز (AR)", "الواقع الافتراضي (VR)", "الدفع غير النقدي", "العمل عن بعد"], en: ["Augmented Reality (AR)", "Virtual Reality (VR)", "Cashless Payment", "Remote Work"] },
    a: 1,
    exp: { ar: "الواقع الافتراضي (VR) يستبدل العالم الواقعي ببيئة رقمية افتراضية غاطسة بالكامل.", en: "Virtual Reality (VR) immerses users completely inside a computer-simulated space." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "لماذا تُعالج السيارة ذاتية القيادة بيانات الكاميرا بالحوسبة الطرفية (Edge Computing) فوراً على متنها بدلاً من إرسالها للسحابة؟", en: "Why do autonomous vehicles process camera data onboard via Edge Computing instead of sending it to the cloud?" },
    opts: { ar: ["لأن السحابة ممتلئة", "لتقليل زمن الاستجابة إلى ملي ثوانٍ لأن أي تأخير بـ 0.1 ثانية يهدد سلامة الأرواح", "لأن الاتصال بالإنترنت ممنوع قانونياً", "لتوفير بطارية الهاتف"], en: ["Cloud is full", "To minimize response latency to milliseconds because a 0.1s delay risks lives", "Internet is illegal", "To save phone battery"] },
    a: 1,
    exp: { ar: "الحوسبة الطرفية تعالج البيانات فورياً على السيارة لتجنب تأخير نقل البيانات للسحابة ومخاطر الحوادث.", en: "Edge computing runs onboard in milliseconds, eliminating cloud network latency risks." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "ما الظاهرتان الفيزيائيتان اللتان ظهرتا عند اقتراب بوابات الترانزستور من مقياس النانومتر واقترب بسببهما قانون مور من حدوده؟", en: "Which two quantum physical obstacles emerged near nanometer thresholds, signaling physical limits to Moore's Law?" },
    opts: { ar: ["الانكسار الضوئي والجاذبية", "تيار التسرب والنفق الكمومي (Leakage Current & Quantum Tunneling)", "الموجات اللاسلكية والحرارة", "الضغط الهيدروليكي والكهرباء"], en: ["Refractive Optics & Gravity", "Leakage Current & Quantum Tunneling", "Radio Waves & Thermal Noise", "Hydraulic Pressure & Static Shock"] },
    a: 1,
    exp: { ar: "تيار التسرب والنفق الكمومي يسببان تسرب الإلكترونات وتولد حرارة شديدة عند الأبعاد النانوية.", en: "Parasitic leakage current and quantum electron tunneling constrain microscopic transistor scaling." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "نمط عمل يتم فيه أداء المهام المكتبية من المنزل أو مواقع بعيدة باستخدام شبكة الإنترنت يُسمى:", en: "A working style in which work is performed from home or remote locations using the Internet is:" },
    opts: { ar: ["التجارة الإلكترونية", "العمل عن بعد (Remote Work)", "الحوسبة الطرفية", "التشخيص الطبي"], en: ["E-commerce", "Remote Work", "Edge Computing", "Medical Diagnosis"] },
    a: 1,
    exp: { ar: "العمل عن بعد يتيح أداء الوظائف المكتبية من أي مكان عبر الاتصال الرقمي بالإنترنت.", en: "Remote work allows professionals to execute duties outside traditional physical offices via the web." }
  },
  {
    lesson: { ar: "الدرس 1-1", en: "Lesson 1-1" },
    q: { ar: "نظام لإجراء المدفوعات باستخدام النقود الإلكترونية ورموز QR والبطاقات دون استخدام النقد الورقي يُسمى:", en: "A system for making payments using electronic money, QR codes, and cards without physical cash is:" },
    opts: { ar: ["الدفع غير النقدي (Cashless Payment)", "التجارة التقليدية", "البريد الإلكتروني", "الحوسبة السحابية"], en: ["Cashless Payment", "Traditional Commerce", "Email", "Cloud Computing"] },
    a: 0,
    exp: { ar: "الدفع غير النقدي يتيح تسوية المعاملات المالية بالبطاقات والتطبيقات دون الحاجة للورق النقدي.", en: "Cashless payment settles transactions via electronic wallets and banking cards without physical notes." }
  },

  // ==========================================
  // LESSON 1-2: 10 Questions (Indices 10 - 19)
  // ==========================================
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "المصطلح العام للتقنيات التي تحاكي وتؤدي السلوكيات الذكية للبشر (كالتعلم والاستنتاج والتحليل) على الحاسوب هو:", en: "General term for technologies reproducing intelligent human behaviors (learning, reasoning, judgment) on a computer:" },
    opts: { ar: ["التعلم العميق", "التعلم الآلي", "الذكاء الاصطناعي (AI)", "الشبكة العصبية"], en: ["Deep Learning", "Machine Learning", "Artificial Intelligence (AI)", "Neural Network"] },
    a: 2,
    exp: { ar: "الذكاء الاصطناعي (AI) هو المظلة العريضة والشاملة لجميع هذه التقنيات المتخصصة.", en: "Artificial Intelligence (AI) is the broad umbrella discipline for human cognitive simulation." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "ما العلاقة الهيكلية الصحيحة بين مفاهيم الذكاء الاصطناعي المتداخلة من الفئة الأعم إلى الأخص؟", en: "What is the correct nested hierarchical relationship between AI concepts from broadest to most specialized?" },
    opts: { 
      ar: ["الذكاء الاصطناعي ← التعلم الآلي ← التعلم العميق ← الذكاء الاصطناعي التوليدي", "التعلم العميق ← الذكاء الاصطناعي ← التعلم الآلي ← الذكاء التوليدي", "الذكاء التوليدي ← التعلم العميق ← التعلم الآلي ← الذكاء الاصطناعي", "التعلم الآلي ← الذكاء الاصطناعي ← الذكاء التوليدي ← التعلم العميق"], 
      en: ["AI > Machine Learning > Deep Learning > Generative AI", "Deep Learning > AI > Machine Learning > Generative AI", "Generative AI > Deep Learning > Machine Learning > AI", "Machine Learning > AI > Generative AI > Deep Learning"] 
    },
    a: 0,
    exp: { ar: "تأتي التقنيات كفئات متداخلة: الذكاء الاصطناعي يشمل التعلم الآلي، وبداخله التعلم العميق، وبداخله الذكاء التوليدي.", en: "AI encompasses Machine Learning, which contains Deep Learning, which powers Generative AI." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "إحدى تقنيات التعلم التي تجعل الذكاء الاصطناعي يعمل عن طريق تعلم الأنماط من البيانات لاتخاذ التنبؤات والأحكام هي:", en: "A learning technology making AI work by recognizing patterns in data to make predictions and judgments:" },
    opts: { ar: ["التعلم الآلي (Machine Learning)", "البرمجة الثابتة اليدوية", "الحوسبة الطرفية", "أنظمة التشغيل"], en: ["Machine Learning", "Hand-coded Fixed Rules", "Edge Computing", "Operating Systems"] },
    a: 0,
    exp: { ar: "التعلم الآلي (ML) يستخلص الأنماط والقواعد إحصائياً مباشرة من بيانات التدريب.", en: "Machine learning extracts statistical rules and patterns directly from input data." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "تقنية متقدمة ضمن التعلم الآلي تستخدم الشبكات العصبية لتعلم الأنماط المعقدة باستخدام بيانات ضخمة الحجم هي:", en: "Advanced technology within machine learning using neural networks to learn complex patterns from large data:" },
    opts: { ar: ["التعلم العميق (Deep Learning)", "التشفير التقليدي", "الذاكرة العشوائية", "البريد الإلكتروني"], en: ["Deep Learning", "Traditional Cryptography", "RAM Memory", "Email"] },
    a: 0,
    exp: { ar: "التعلم العميق يمثل فرعاً متقدماً يستند للشبكات العصبية لمعالجة الصور والصوت والبيانات الضخمة.", en: "Deep learning is a specialized branch leveraging multi-layer neural networks." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "نظام محسوب مستوحى من طريقة عمل الخلايا العصبية في دماغ الإنسان يتعلم من البيانات ويتخذ قرارات معقدة هو:", en: "A computational system modeled after the nerve cells (neurons) of the human brain to learn from data:" },
    opts: { ar: ["الشبكة العصبية (Neural Network)", "الصمام المفرغ", "النفق الكمومي", "الرمز البريدي"], en: ["Neural Network", "Vacuum Tube", "Quantum Tunneling", "Postal Code"] },
    a: 0,
    exp: { ar: "الشبكات العصبية تُحاكي الخلايا العصبية البيولوجية وتتكون من طبقات إدخال ومخفية وإخراج.", en: "Neural networks model biological neurons with interconnected node layers." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "تقنية ذكاء اصطناعي تستخدم التعلم العميق لإنشاء وتوليد محتوى جديد مثل النصوص والصور والصوت والبرامج هي:", en: "AI technology using deep learning to generate new original data such as text, images, audio, and code:" },
    opts: { ar: ["الذكاء الاصطناعي التوليدي (Generative AI)", "مرشح الرسائل المزعجة", "قانون مور", "الحوسبة الطرفية"], en: ["Generative AI", "Spam Filter", "Moore's Law", "Edge Computing"] },
    a: 0,
    exp: { ar: "الذكاء الاصطناعي التوليدي ينشئ بيانات ومحتوى جديد كلياً يعتمد على النماذج المدربة.", en: "Generative AI produces new synthetic data artifacts like text, images, and audio." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "أي من التطبيقات التالية يُعد مثالاً على التصنيف في التعلم الآلي التقليدي وليس ذكاءً اصطناعياً توليدياً؟", en: "Which application is an example of traditional machine learning classification rather than Generative AI?" },
    opts: { ar: ["مرشح البريد المزعج (Spam Filter)", "ChatGPT", "مولد الصور Midjourney", "مولد مقاطع الصوت"], en: ["Spam Email Filter", "ChatGPT", "Midjourney Image Generator", "Audio Generator"] },
    a: 0,
    exp: { ar: "مرشح البريد المزعج يُصنف الرسائل المترددة إلى مزعجة أو سليمة دون أن يولد نصوصاً جديدة.", en: "Spam filtering classifies incoming emails; it does not synthesize new text data." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "ما الظاهرة التي ينتج فيها الذكاء الاصطناعي التوليدي نصوصاً تبدو مقنعة وفصيحة لكنها غير صحيحة من حيث الحقائق؟", en: "What is the phenomenon where Generative AI produces plausible-sounding but factually incorrect text?" },
    opts: { ar: ["الهلوسة (Hallucination)", "التراكب الكمي", "التحيز الخوارزمي", "تسرب الشحنة"], en: ["Hallucination", "Quantum Superposition", "Algorithmic Bias", "Charge Leakage"] },
    a: 0,
    exp: { ar: "الهلوسة تعني اختلاق الخوارزمية لمعلومات تبدو سليمة صياغياً لكنها خاطئة واقعياً.", en: "Hallucination refers to LLMs generating false statements framed with high linguistic fluency." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "ما الإجراء الواجب على الطالب اتخاذه عند الاستعانة بنماذج الذكاء التوليدي لضمان صحة المعلومات؟", en: "What action must learners take when utilizing Generative AI for academic research to ensure accuracy?" },
    opts: { ar: ["اعتماد الإجابة فوراً دون مراجعة", "التحقق المزدوج المستقل من المصادر الموثوقة (Cross-checking)", "إعادة تشغيل المتصفح", "حفظ الملف ببرنامج Word"], en: ["Accept output blindly", "Independent cross-checking with verified sources", "Restart browser", "Save as Word file"] },
    a: 1,
    exp: { ar: "التحقق المزدوج المستقل ضرورة حتمية للتأكد من عدم الاعتماد على مخرجات مهلوسة.", en: "Learners must independently verify AI claims against authoritative textbook sources." }
  },
  {
    lesson: { ar: "الدرس 1-2", en: "Lesson 1-2" },
    q: { ar: "أي طبقة في الشبكة العصبية الاصطناعية تستقبل البيانات الخام فقط دون إجراء أي حسابات رياضية عليها؟", en: "Which layer in an artificial neural network ingests raw input data without performing mathematical operations?" },
    opts: { ar: ["طبقة الإدخال (Input Layer)", "الطبقة المخفية الأولى", "طبقة الإخراج (Output Layer)", "دالة التنشيط"], en: ["Input Layer", "First Hidden Layer", "Output Layer", "Activation Function"] },
    a: 0,
    exp: { ar: "طبقة الإدخال فقط تستقبل القيم الخام وتمررها دون تطبيق أوزان أو حسابات.", en: "The Input Layer strictly receives and passes raw feature values down the pipeline." }
  },

  // ==========================================
  // LESSON 1-3: 10 Questions (Indices 20 - 29)
  // ==========================================
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "نظام يحلل سلوك المستخدم السلوك في الماضي ويتنبأ بتفضيلاته ليستعرض له مقاطع فيديو أو منتجات تلائمه يُسمى:", en: "A system predicting user preferences from past behavioral logs to display tailored recommendations is:" },
    opts: { ar: ["نظام التوصية (Recommendation System)", "الترجمة الآلية", "الصيانة التنبؤية", "الواقع المعزز"], en: ["Recommendation System", "Machine Translation", "Predictive Maintenance", "Augmented Reality"] },
    a: 0,
    exp: { ar: "أنظمة التوصية تستعرض مقاطع أو منتجات بناءً على تحليل سجل التفاعلات السابقة.", en: "Recommender engines predict upcoming interests based on historical user action telemetry." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "تطبيق صناعي للذكاء الاصطناعي يحلل بيانات الحساسات في المصانع للتنبؤ بموعد تعطل الآلات قبل حدوثه يُسمى:", en: "Industrial AI application analyzing sensor telemetry in factories to forecast machine failure before it occurs:" },
    opts: { ar: ["الصيانة التنبؤية (Predictive Maintenance)", "التعرف على الوجوه", "الواقع الافتراضي", "المساعد الصوتي"], en: ["Predictive Maintenance", "Face Recognition", "Virtual Reality", "Voice Assistant"] },
    a: 0,
    exp: { ar: "الصيانة التنبؤية تدرس اهتزازات وحرارة الآلات لتفادي الأعطال المفاجئة والتوقف.", en: "Predictive maintenance analyzes equipment telemetry to fix issues prior to line stoppage." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "في أي قطاع تُستخدم خوارزميات الرؤية الحاسوبية والتعلم العميق لمساعدة الخبراء في فحص صور الأشعة السينية والمقطعية؟", en: "In which industry are computer vision algorithms used to assist experts in screening X-rays and CT scans?" },
    opts: { ar: ["الرعاية الصحية (Healthcare)", "الخدمات اللوجستية", "التجارة الإلكترونية", "العمل عن بعد"], en: ["Healthcare", "Logistics", "E-commerce", "Remote Work"] },
    a: 0,
    exp: { ar: "تُستخدم تقنيات الرؤية الحاسوبية في الرعاية الصحية لكشف الأورام والكسور بالأشعة.", en: "Computer vision assists radiologists in healthcare to detect anomalies in medical imaging." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "لماذا ينبغي أن يؤكد الطبيب البشري التشخيص الطبي الصادر من الذكاء الاصطناعي قبل اتخاذ العلاج؟", en: "Why must human doctors confirm medical diagnoses generated by AI before administering treatment?" },
    opts: { ar: ["لأن الآلة ترفض إخراج التقرير", "لأن القرارات الطبية تمس حياة المريض وتحديد المسؤولية الأخلاقية والقانونية حتمي", "لأن الطبيب أقل تكلفة", "لأن الحاسوب بطيء جداً"], en: ["Machine refuses reports", "Medical choices impact human lives, mandating moral and legal accountability", "Doctors are cheaper", "Computers are too slow"] },
    a: 1,
    exp: { ar: "القرارات الطبية عالية الأثر تتطلب تحملاً للمسؤولية القانونية وإشرافاً من العنصر البشري.", en: "High-stakes life-critical outcomes require human moral judgment and legal liability." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "صعوبة تتبع وتفسير الحسابات الداخلية والمسارات المعقدة التي اتخذتها الشبكة العصبية للوصول لنشيجتها تُعرف بـ:", en: "The opacity in tracing and interpreting internal calculations of deep neural networks to arrive at verdicts is:" },
    opts: { ar: ["مشكلة الصندوق الأسود (Black-Box Problem)", "تسرب تيار السيليكون", "انقطاع الشبكة", "الهلوسة التوليدية"], en: ["Black-Box Problem", "Silicon Leakage", "Network Disconnection", "Generative Hallucination"] },
    a: 0,
    exp: { ar: "مشكلة الصندوق الأسود تصف صعوبة معرفة كيفية حساب النتيجة داخل الطبقات العملاقة.", en: "The black-box problem describes computational opacity in multi-layered deep neural networks." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "تطبيق يحول النص أو الكلام من لغة إلى أخرى باستخدام نماذج الذكاء الاصطناعي مثل خيار ترجمة القوائم الأجنبية يُسمى:", en: "An application converting written or spoken text between languages using AI models is:" },
    opts: { ar: ["الترجمة الآلية (Machine Translation)", "نظام التوصية", "الصيانة التنبؤية", "الواقع المعزز"], en: ["Machine Translation", "Recommendation System", "Predictive Maintenance", "Augmented Reality"] },
    a: 0,
    exp: { ar: "الترجمة الآلية تتيح التواصل والتفاهم بين اللغات المختلفة بدقة عالية.", en: "Machine translation uses NLP models to bridge cross-linguistic communication barriers." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "تقنية في الهواتف والمنظومات الأمنية تكتشف وتتعرف على ملامح وجه المستخدم لفتح الأقفال وتأكيد الهوية تُسمى:", en: "Technology recognizing user facial landmarks for biometric unlocking and authentication is:" },
    opts: { ar: ["التعرف على الوجوه (Face Recognition)", "الواقع الافتراضي", "قانون مور", "الحوسبة السحابية"], en: ["Face Recognition", "Virtual Reality", "Moore's Law", "Cloud Computing"] },
    a: 0,
    exp: { ar: "تقنية التعرف على الوجوه تستخلص ملامح الوجه للتحقق من هوية صاحب الجهاز.", en: "Face recognition extracts facial keypoints for secure biometric identity verification." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "تطبيق يتعرف على الأوامر الصوتية المنطوقة ويدير الاستفسارات المهام اليومية كـ Siri و Google Assistant يُسمى:", en: "An application processing spoken audio prompts to assist daily tasks like Siri or Google Assistant is:" },
    opts: { ar: ["المساعد الصوتي (Voice Assistant)", "الصمامات المفرغة", "التشفير المتماثل", "الشبكة العنكبوتية"], en: ["Voice Assistant", "Vacuum Tubes", "Symmetric Encryption", "World Wide Web"] },
    a: 0,
    exp: { ar: "المساعدات الصوتية تفهم وتستجيب للأوامر الصوتية المنطوقة لتسهيل الأنشطة.", en: "Voice assistants process conversational acoustic input to execute everyday device tasks." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "ما الفائدة الرئيسية لاستخدام الذكاء الاصطناعي في شركات الشحن والخدمات اللوجستية؟", en: "What is the primary benefit of deploying AI in logistics and delivery dispatching?" },
    opts: { ar: ["تخطيط أفضل مسارات التوصيل وتقليل زَمَن ومصاريف النقل", "استبدال السائقين بشرائح سيليكون", "إلغاء الحاجة لشبكة الإنترنت", "طباعة النقود الورقية"], en: ["Optimizing delivery routes to minimize latency and transport costs", "Replacing drivers with chips", "Eliminating internet needs", "Printing paper currency"] },
    a: 0,
    exp: { ar: "تساعد تطبيقات الذكاء الاصطناعي اللوجستية في جدولة وتوجيه حركة المركبات بأعلى كفاءة.", en: "Logistics AI optimizes multi-stop delivery routes, lowering fuel costs and transit times." }
  },
  {
    lesson: { ar: "الدرس 1-3", en: "Lesson 1-3" },
    q: { ar: "في أي من المجالات التالية يتفوق العنصر البشري دائماً بشكل حاسم مقارنة بأنظمة الذكاء الاصطناعي الحالية؟", en: "In which area do humans conclusively outperform current AI systems?" },
    opts: { ar: ["إصدار الأحكام الأخلاقية والتعاطف الإنساني وتحمل المسؤولية", "مسح ملايين السجلات في نانو ثانية", "حفظ الأرقام الفلكية دون نسيان", "الحسابات الرياضية المتكررة"], en: ["Moral reasoning, human empathy, and personal accountability", "Scanning millions of records per nanosecond", "Memorizing astronomical numbers", "Repetitive mathematical calculations"] },
    a: 0,
    exp: { ar: "يتفوق البشر في التعاطف وتطبيق الأخلاق والحدس وتحمل المسئولية التي تعجز عنها الآلات.", en: "Humans excel in moral discernment, empathy, intuition, and responsible ethics." }
  },

  // ==========================================
  // LESSON 1-4: 10 Questions (Indices 30 - 39)
  // ==========================================
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "الانحراف أو النمط في مخرجات الذكاء الاصطناعي الذي يؤدي لنتائج غير عادلة بسبب تحيز بيانات التدريب يُسمى:", en: "Systematic bias in AI outputs causing unfair or discriminatory results due to training data is:" },
    opts: { ar: ["التحيز الخوارزمي (Algorithmic Bias)", "قانون مور", "التراكب الكمي", "الترجمة الآلية"], en: ["Algorithmic Bias", "Moore's Law", "Quantum Superposition", "Machine Translation"] },
    a: 0,
    exp: { ar: "التحيز الخوارزمي يعكس النزعات غير العادلة الواردة في بيانات التدريب التي لُمحت بها الآلة.", en: "Algorithmic bias reflects unrepresentative or discriminatory patterns present in training data." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "المبدأ الأخلاقي الذي يقتضي عدم التمييز ظلماً ضد أي شخص أو فئة بعينها في الفرص والتقييم يُسمى:", en: "Ethical principle requiring not unjustly discriminating against any particular person or group:" },
    opts: { ar: ["العدالة (Fairness)", "السرعة", "التشفير", "التسرب"], en: ["Fairness", "Speed", "Encryption", "Leakage"] },
    a: 0,
    exp: { ar: "مبدأ العدالة يضمن منح فرص متكافئة دون تمييز عرقي أو جنسي أو فئوي.", en: "Fairness ensures impartial evaluation without unjust demographic discrimination." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "إتاحة معلومات واضحة عن عملية اتخاذ القرار وآلية العمل الداخلية للذكاء الاصطناعي ومصادر بياناته تُسمى:", en: "Disclosing clearly how an AI works, its data sources, and decision-making procedures:" },
    opts: { ar: ["الشفافية (Transparency)", "الخصوصية", "التحيز", "الصندوق الأسود"], en: ["Transparency", "Privacy", "Bias", "Black Box"] },
    a: 0,
    exp: { ar: "الشفافية تتطلب توضيح حدود النظام ومصادر بياناته وكيفية خروج الأحكام.", en: "Transparency demands open disclosure regarding how AI systems operate and decide." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "تحديد الجهات والأفراد المسؤولين أخلاقياً وقانونياً والخضوع للمساءلة عن نتائج قرارات الذكاء الاصطناعي تُسمى:", en: "Being answerable for AI decisions and designating morally/legally responsible entities:" },
    opts: { ar: ["المساءلة (Accountability)", "التعلم العميق", "الواقع الافتراضي", "قانون مور"], en: ["Accountability", "Deep Learning", "Virtual Reality", "Moore's Law"] },
    a: 0,
    exp: { ar: "المساءلة تشير لتحديد من يتحمل المسئولية القانونية والأخلاقية عن القرارات.", en: "Accountability designates legal and ethical answerability for automated system actions." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "المصطلح الخاص بالتقنيات التي تتيح للبشر فهم وتفسير أسباب اتخاذ الذكاء الاصطناعي لحكم معين هو:", en: "Technologies making it possible for humans to trace and interpret why an AI made a specific judgment:" },
    opts: { ar: ["الذكاء الاصطناعي القابل للتفسير (XAI)", "الصندوق الأسود", "النفق الكمومي", "الذاكرة المخبأة"], en: ["Explainable AI (XAI)", "Black Box", "Quantum Tunneling", "Cache Memory"] },
    a: 0,
    exp: { ar: "الذكاء القابل للتفسير (XAI) يهدف لفك غموض وتعقيدات الصندوق الأسود.", en: "Explainable AI (XAI) makes opaque deep neural network decisions interpretable to humans." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "عندما تستخدم خوارزمية البنك الرمز البريدي بدلاً من السمة المحمية كالعرق وتحدث تمييزاً ضمنياً، يُسمى هذا المتغير بـ:", en: "When a banking algorithm uses postal ZIP code as an indirect substitute for race, creating implicit bias, it is a:" },
    opts: { ar: ["المتغير البديل (Proxy Variable)", "كيوبت كمي", "دالة خسارة", "صمام مفرغ"], en: ["Proxy Variable", "Quantum Qubit", "Loss Function", "Vacuum Tube"] },
    a: 0,
    exp: { ar: "المتغير البديل ينقل السمة التمييزية بطريقة غير مباشرة داخل الخوارزمية.", en: "A proxy variable acts as an indirect substitute for protected demographics, perpetuating bias." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "تطبيق مبدأ 'الإنسان في حلقة القرار' (Human-in-the-loop) يُعتبر إلزامياً وضرورياً في أي نوع من القرارات؟", en: "Applying the 'Human-in-the-loop' paradigm is mandatory and essential for which type of decisions?" },
    opts: { ar: ["القرارات عالية الأثر التي تمس حياة الإنسان والعدالة كالقضاء والطب والتوظيف", "تنظيف ملفات ذاكرة التخزين المؤقت", "ضبط نغمة رنين الهاتف", "ترتيب الأقراص"], en: ["High-impact life-critical verdicts such as healthcare, justice, and hiring", "Clearing cache files", "Setting ringtones", "Disk defragmentation"] },
    a: 0,
    exp: { ar: "القرارات عالية الأثر تتطلب تحملاً للمسؤولية الأخلاقية والقانونية وإشرافاً بشرياً مباشراً.", en: "High-stakes decisions impacting human life and fairness legally require human oversight." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "التعامل مع المعلومات الشخصية للمستخدمين بشكل مناسب وحمايتها من التجميع غير المصرح به يُعرف بمبدأ:", en: "Handling users' personal information appropriately and safeguarding it from unauthorized tracking is:" },
    opts: { ar: ["حماية الخصوصية (Privacy protection)", "التحيز الخوارزمي", "التعلم الآلي", "التراكب الكمي"], en: ["Privacy protection", "Algorithmic Bias", "Machine Learning", "Quantum Superposition"] },
    a: 0,
    exp: { ar: "حماية الخصوصية تعني التزام المطورين بالتعامل الآمن مع البيانات الشخصية وعدم استغلالها.", en: "Privacy protection secures personal metrics against unauthorized collection and tracking." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "ما الخطورة الناتجة عن تدريب خوارزميات التوظيف على بيانات تاريخية لشركة كانت تمنح تفضيلاً غير عادل لفئة معينة؟", en: "What is the danger of training hiring algorithms on historical corporate records that favored a specific demographic?" },
    opts: { ar: ["ستقوم الخوارزمية بتكرار التحيز التاريخي وتضخيمه باستبعاد باقي الفئات الكفؤة", "سيتوقف الحاسوب عن العمل فوراً", "ستتضاعف سرعة الترانزستورات", "ستحذف بيانات الشركة"], en: ["The algorithm will replicate and amplify historical bias, excluding qualified candidates", "Computer halts instantly", "Transistors double speed", "Company data is erased"] },
    a: 0,
    exp: { ar: "تستنتج الخوارزميات التحيزات التاريخية الضمنية وتضخمها إذا لم تُنقّ البيانات بحذر.", en: "Machine learning models mirror and magnify discriminatory historical biases embedded in dataset logs." }
  },
  {
    lesson: { ar: "الدرس 1-4", en: "Lesson 1-4" },
    q: { ar: "ما الفرق الجوهري بين المساءلة (Accountability) والذكاء الاصطناعي القابل للتفسير (XAI) وفقاً لكتاب الوزارة؟", en: "What is the fundamental difference between Accountability and Explainable AI (XAI) according to the textbook?" },
    opts: { ar: ["XAI يشرح كيفية وصول النظام للقرار تقنياً، بينما المساءلة تحدد من الخاضع للمسؤولية القانونية والأخلاقية", "هما نفس المعنى تماماً دون أي اختلاف", "المساءلة للمستخدم بينما XAI للمصنع فقط", "XAI لمنع الهلوسة والمساءلة لحفظ البيانات"], en: ["XAI provides technical decision explanations; Accountability determines who is legally and morally answerable", "They are identical terms", "Accountability is for users; XAI for manufacturers only", "XAI prevents hallucination; Accountability saves files"] },
    a: 0,
    exp: { ar: "XAI يشرح الأسباب التقنية للحكم، بينما المساءلة تحدد الشخص أو الجهة المسؤولة عن النتيجة.", en: "XAI clarifies technical reasoning; Accountability attributes human legal and moral liability." }
  },

  // ==========================================
  // UNIT 1 SYNTHESIS: 10 Questions (Indices 40 - 49)
  // ==========================================
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما المشكلة الفيزيائية التي تظهر في الترانزستورات متناهية الصغر عندما تقفز الإلكترونات عبر الحواجز الذرية؟", en: "What physical issue arises in nanoscale transistors when electrons tunnel across atomic gate barriers?" },
    opts: { ar: ["النفق الكمومي (Quantum Tunneling)", "قانون مور", "الحوسبة الطرفية", "التراكب الكمي"], en: ["Quantum Tunneling", "Moore's Law", "Edge Computing", "Quantum Superposition"] },
    a: 0,
    exp: { ar: "النفق الكمومي يحدث عند مقياس الذرات تسبب قفز الإلكترونات وتوقف التحكم بالترانزستور.", en: "Quantum tunneling occurs when subatomic particles breach physical barriers at microscopic dimensions." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "في منظومات الدفع غير النقدي، ما التقنية اللاسلكية قريبة المدى التي تتيح الدفع بمجرد ملامسة الهاتف أو البطاقات لماكينات البيع؟", en: "In cashless payment systems, which near-field wireless technology enables tap-to-pay using phones or cards?" },
    opts: { ar: ["تقنية NFC (التواصل قريب المدى)", "الصمامات المفرغة", "البريد السريع", "الفاكس"], en: ["NFC (Near Field Communication)", "Vacuum Tubes", "Express Mail", "Fax"] },
    a: 0,
    exp: { ar: "NFC (Near Field Communication) تتيح نقل بيانات الدفع بلمسة واحدة قصيرة المدى.", en: "NFC allows contactless data exchange between payment terminals and smartphones/cards." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "تتم تعديل قيم الأوزان (Weights) داخل الطبقات المخفية للشبكة العصبية أثناء عملية التدريب بهدف:", en: "Internal weight values within neural network hidden layers are adjusted during training in order to:" },
    opts: { ar: ["تقليل دالة الخسارة (Loss function) وتخفيض نسبة الخطأ لأدنى حد", "زيادة استهلاك الطاقة الكهربائية", "حذف بيانات الإدخال", "إيقاف المروحة"], en: ["Minimize the loss function and lower error rates to the minimum", "Increase power draw", "Delete input data", "Stop cooling fans"] },
    a: 0,
    exp: { ar: "تعديل الأوزان باستمرار يهدف إلى تقليص الفارق بين التنبؤ والنتيجة الفعلية (تخفيض Loss).", en: "Weight optimization minimizes prediction error during backpropagation iterations." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما الخاصية الفيزيائية في الحوسبة الكمومية التي تتيح للكيوبت (Qubit) تمثيل مزيج من حالتي 0 و 1 في الوقت نفسه؟", en: "What quantum physics property allows a qubit to represent a mixture of states 0 and 1 simultaneously?" },
    opts: { ar: ["التراكب الكمي (Quantum Superposition)", "تيار التسرب", "التحيز الخوارزمي", "الصندوق الأسود"], en: ["Quantum Superposition", "Leakage Current", "Algorithmic Bias", "Black Box"] },
    a: 0,
    exp: { ar: "التراكب الكمي يتيح للكيوبت الجمع بين الصفر والواحد متزامناً لتسريع الحسابات الفائقة.", en: "Superposition allows quantum qubits to hold probabilistic combinations of 0 and 1 concurrently." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "أي من الخيارات التالية لا يُعتبر من التغيرات الاجتماعية الخمسة الكبرى الناجمة عن تكنولوجيا المعلومات في كتاب الوزارة؟", en: "Which of the following is NOT one of the five major societal transformations listed in the textbook?" },
    opts: { ar: ["تصنيع الصمامات المفرغة يدوياً", "شبكات التواصل الاجتماعي (SNS)", "التجارة الإلكترونية (E-commerce)", "الدفع غير النقدي (Cashless payment)"], en: ["Hand-blown Vacuum Tube Crafting", "Social Networking Services (SNS)", "E-commerce", "Cashless payment"] },
    a: 0,
    exp: { ar: "التغيرات الكبرى الخمسة هي: SNS، التجارة الإلكترونية، العمل عن بعد، التعليم الإلكتروني، والدفع غير النقدي.", en: "The 5 major societal shifts are SNS, E-commerce, Remote Work, Online Learning, and Cashless Payment." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما معنى مفهوم 'تكنولوجيا المعلومات كخدمة' (IT as a Service) الذي انتشر مع صعود الحوسبة السحابية؟", en: "What does 'IT as a Service' (ITaaS), popularized by cloud computing, signify?" },
    opts: { ar: ["استئجار الموارد الحوسبية والبرمجيات عبر الشبكة حسب الطلب دون الحاجة لشراء خوادم بملكيتها", "شراء أجهزة حاسوب لكل موظف", "استبدال السحابة ببطاقات مثقوبة", "منع استخدام الإنترنت في الشركات"], en: ["Leasing computing infrastructure and software on-demand via the web without owning servers", "Buying desktop PCs for all staff", "Replacing cloud with punch cards", "Banning internet at work"] },
    a: 0,
    exp: { ar: "ITaaS تعني توفير القدرة الحوسبية والذكاء الاصطناعي كخدمة مرنة ومؤجرة عبر الشبكة السحابية.", en: "ITaaS supplies computing capacity as a flexible, subscription-based on-demand internet service." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما الفائدة الهندسة الرئيسية من التحول نحو المعالجات متعددة الأنوية (Multi-Core Processors) والمعالجة المتوازية؟", en: "What is the primary engineering benefit of shifting to Multi-Core Processors and parallel computing?" },
    opts: { ar: ["زيادة سرعة معالجة المهام وتجاوز التحديات الحرارية للأنوية المنفردة", "زيادة تيار التسرب", "تقليل عدد الترانزستورات لصفر", "الاستغناء عن الذاكرة العشوائية"], en: ["Surging task execution speed while overcoming single-core thermal physical hurdles", "Increasing leakage current", "Reducing transistor counts to zero", "Eliminating RAM"] },
    a: 0,
    exp: { ar: "المعالجة المتوازية عبر أنوية متعددة تزيد الأداء مع كبح توليد الحرارة الزائدة بالنواة الوحيدة.", en: "Multi-core parallel processing scales throughput without exceeding thermal envelope bounds." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "أي مما يلي يُعد مثالاً على استخدام الواقع المعزز (Augmented Reality - AR) في مجال التعليم؟", en: "Which scenario represents an application of Augmented Reality (AR) in education?" },
    opts: { ar: ["تراكب نموذج ثلاثي الأبعاد وتفاعلي للقلب البشري فوق صفحة كتاب الأحياء عبر كاميرا الهاتف", "إغلاق العينين والاستماع لشريط صوتي", "طباعة ورقة اختبار عادية", "حساب الميزانية بجدول بيانات"], en: ["Superimposing an interactive 3D heart model onto a biology textbook page via smartphone camera", "Closing eyes to listen to audio tape", "Printing a test paper", "Calculating budgets on a spreadsheet"] },
    a: 0,
    exp: { ar: "الواقع المعزز (AR) يضيف مجسمات وبيانات رقمية ثلاثية الأبعاد فوق الصفحات والأجسام الحقيقية.", en: "Augmented Reality (AR) projects interactive 3D models over physical educational print pages." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما الخاصية المميزة للذكاء الاصطناعي الضيق (Narrow AI) المطبق حالياً في شتى المنظومات اليومية والصناعية؟", en: "What is the defining characteristic of Narrow AI deployed in modern daily and industrial systems?" },
    opts: { ar: ["براعته الكبيرة في التخصص في أداء مهمة محددة واحدة فقط كالتشخيص أو التوصية", "امتلاكه وعياً بشرياً عاماً وشاملاً", "قدرته على المشاعر والتعاطف الإنساني", "عمله دون الحاجة لبيانات تدريب"], en: ["High proficiency in executing a single specialized task such as diagnosis or recommendation", "Possessing general human consciousness", "Capable of human emotion and empathy", "Functioning without training data"] },
    a: 0,
    exp: { ar: "الذكاء الاصطناعي الحالي ذكاء ضيق (Narrow AI) يبرع جداً في مهمة واحدة محددة يكتسبها بالتدريب.", en: "Modern AI is Narrow AI, engineered to master a specific specialized domain task." }
  },
  {
    lesson: { ar: "شامل الوحدة 1", en: "Unit 1 Synthesis" },
    q: { ar: "ما الاستراتيجية الشاملة لضمان بناء وتطوير أنظمة ذكاء اصطناعي آمنة وعادلة ومفيدة للمجتمع؟", en: "What is the comprehensive strategy for building and deploying safe, fair, and beneficial AI systems for society?" },
    opts: { ar: ["الالتزام بمبادئ الشفافية والعدالة والمساءلة والخصوصية والتدقيق المستمر لبيانات التدريب", "تجاهل التحيز والاعتماد التام على الآلة دون مراجعة", "إخفاء مصادر البيانات عن المستخدمين", "حظر التطوير التقني بالكامل"], en: ["Adhering strictly to Transparency, Fairness, Accountability, Privacy, and debiased data audits", "Ignoring bias and blindly trusting machines", "Concealing data sources from users", "Banning all technological innovation"] },
    a: 0,
    exp: { ar: "التطوير المسؤول يتطلب تطبيق المبادئ الأخلاقية الأربعة وتدقيق البيانات لضمان مصلحة المجتمع.", en: "Responsible AI mandates embedding core ethical guidelines and auditing training datasets." }
  }
];
