import type { LocalizedText, Question } from '@/types';

export type { LocalizedText, Question } from '@/types';
export type Unit7Question = Omit<Question, 'lesson' | 'ref'> & { lesson?: LocalizedText; ref?: LocalizedText | string };

export const lesson71Questions: Unit7Question[] = [{
  q: {
    ar: "ما المصطلح الخاص بطريقة التعلّم الآلي التي تُعطى فيها بيانات الإدخال والإجابات الصحيحة (الوسوم) معاً لتعلّم العلاقة بينهما؟ (كتاب الوزارة ص 56 / تدريب 1-1)",
    en: "What is the term for the ML method in which input data and correct answers are given together? (Textbook p. 63 / Try 1.1)"
  },
  opts: {
    ar: ["التعلّم الخاضع للإشراف (Supervised learning)", "التعلّم غير الخاضع للإشراف (Unsupervised learning)", "التعلّم المعزز (Reinforcement learning)", "مشكلة الصندوق الأسود (Black-box problem)"],
    en: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Black-box problem"]
  },
  a: 0,
  exp: {
    ar: "التعلم الخاضع للإشراف يتعلم من أزواج المدخلات والإجابات الصحيحة (Labels) مثل التصنيف والانحدار.",
    en: "Supervised learning learns from pairs of input data and correct answers (labels)."
  },
  ref: "كتاب المدرسة ص 52 و 56 / p. 59 & 63"
}, {
  q: {
    ar: "ما المصطلح الخاص بطريقة التعلّم غير الخاضع للإشراف التي تجمع البيانات المتشابهة معاً بدون إعطاء إجابات صحيحة؟ (كتاب الوزارة ص 56 / تدريب 1-2)",
    en: "What is the term for the unsupervised learning method that groups similar data together without correct answers? (Textbook p. 63 / Try 1.2)"
  },
  opts: {
    ar: ["التجميع (Clustering)", "التصنيف (Classification)", "الانحدار (Regression)", "التعلم المعزز (Reinforcement learning)"],
    en: ["Clustering", "Classification", "Regression", "Reinforcement learning"]
  },
  a: 0,
  exp: {
    ar: "التجميع (Clustering) هو الطريقة النمطية للتعلم غير الخاضع للإشراف لتجميع العناصر المتشابهة تلقائياً.",
    en: "Clustering is the representative unsupervised learning method that groups similar items without labels."
  },
  ref: "كتاب المدرسة ص 54 و 56 / p. 60 & 63"
}, {
  q: {
    ar: "ما المصطلح الخاص بقطعة من المعلومات في بيانات الإدخال تكون مفيدة كدليل للتنبؤ؟ (كتاب الوزارة ص 56 / تدريب 1-3)",
    en: "What is the term for a piece of information in the input data that is useful as a clue for prediction? (Textbook p. 63 / Try 1.3)"
  },
  opts: {
    ar: ["السمة (Feature)", "المكافأة (Reward)", "العقدة (Node)", "الهلوسة (Hallucination)"],
    en: ["Feature", "Reward", "Node", "Hallucination"]
  },
  a: 0,
  exp: {
    ar: "السمة (Feature) هي المعلومة أو الدليل في بيانات الإدخال الذي يستند إليه النموذج في التنبؤ.",
    en: "A feature is a clue in the input data useful for prediction."
  },
  ref: "كتاب المدرسة ص 53 و 56 / p. 60 & 63"
}, {
  q: {
    ar: "ما المصطلح الخاص بطريقة التعلّم من خلال التجربة والخطأ عن طريق تلقي تقييمات (مكافآت) كنتيجة للإجراءات؟ (كتاب الوزارة ص 56 / تدريب 1-4)",
    en: "What is the term for learning through trial and error by receiving evaluations (rewards) as a result of actions? (Textbook p. 63 / Try 1.4)"
  },
  opts: {
    ar: ["التعلّم المعزز (Reinforcement learning)", "التعلّم الخاضع للإشراف (Supervised learning)", "التعلّم غير الخاضع للإشراف (Unsupervised learning)", "الانحدار البسيط (Simple regression)"],
    en: ["Reinforcement learning", "Supervised learning", "Unsupervised learning", "Simple regression"]
  },
  a: 0,
  exp: {
    ar: "التعلم المعزز يتعلم اختيار الإجراءات الأفضل بالتجربة والخطأ اعتماداً على المكافآت (Rewards).",
    en: "Reinforcement learning learns optimal actions through trial and error using rewards."
  },
  ref: "كتاب المدرسة ص 54 و 56 / p. 61 & 63"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب الفرق بين البرمجة التقليدية والتعلّم الآلي؟ (كتاب الوزارة ص 56 / تدريب 2-1)",
    en: "Which option most appropriately describes the difference between conventional programming and machine learning? (Textbook p. 63 / Try 2.1)"
  },
  opts: {
    ar: ["في البرمجة التقليدية يكتب البشر القواعد، بينما في التعلّم الآلي يكتشف الحاسوب القواعد من البيانات", "في البرمجة التقليدية يكتشف الحاسوب القواعد، وفي التعلّم الآلي يكتب البشر القواعد", "تتطلب البرمجة التقليدية كميات هائلة من البيانات، والتعلّم الآلي لا يستخدم البيانات", "لا فرق بين البرمجة التقليدية والتعلّم الآلي"],
    en: ["In conventional programming humans write the rules, whereas in machine learning the computer finds rules from data", "In conventional programming the computer finds rules, and in ML humans write rules", "Conventional programming requires massive data, while ML uses no data", "There is no difference between them"]
  },
  a: 0,
  exp: {
    ar: "في البرمجة التقليدية يصيغ المبرمج القواعد يدوياً، أما في التعلم الآلي فيستنتج الحاسوب القواعد من البيانات.",
    en: "Humans write rules in conventional programming; the computer learns rules from data in ML."
  },
  ref: "كتاب المدرسة ص 51 و 56 / p. 58 & 63"
}, {
  q: {
    ar: "اختر طريقة التعلّم الآلي الأنسب لكل من: (1) تحديد البريد المزعج من رسائل سابقة موسومة، (2) تجميع عملاء متجر إلكتروني بدون وسوم، (3) تعلم روبوت المشي بالتجربة والخطأ: (كتاب الوزارة ص 56 / تدريب 2-2)",
    en: "Match: (a) spam detection from labeled past emails, (b) grouping online shop customers without labels, (c) robot learning to walk by trial and error: (Textbook p. 64 / Try 2.2)"
  },
  opts: {
    ar: ["(1) تعلّم خاضع للإشراف — (2) تعلّم غير خاضع للإشراف — (3) تعلّم معزز", "(1) تعلّم غير خاضع للإشراف — (2) تعلّم خاضع للإشراف — (3) تعلّم معزز", "(1) تعلّم معزز — (2) تعلّم خاضع للإشراف — (3) تعلّم غير خاضع للإشراف", "جميعها تعلّم خاضع للإشراف فقط"],
    en: ["(a) Supervised learning — (b) Unsupervised learning — (c) Reinforcement learning", "(a) Unsupervised learning — (b) Supervised learning — (c) Reinforcement learning", "(a) Reinforcement learning — (b) Supervised learning — (c) Unsupervised learning", "All three are Supervised learning"]
  },
  a: 0,
  exp: {
    ar: "البريد الموسوم = خاضع للإشراف؛ تجميع العملاء بدون وسوم = غير خاضع للإشراف؛ مشي الروبوت بالمكافآت = تعلم معزز.",
    en: "(a) Supervised learning, (b) Unsupervised learning, (c) Reinforcement learning."
  },
  ref: "كتاب المدرسة ص 56 / p. 64"
}, {
  q: {
    ar: "أي خيار يصف موقفاً لا يكون فيه التعلّم الآلي مناسباً؟ (كتاب الوزارة ص 56 / تدريب 2-3)",
    en: "Which option most appropriately describes a situation in which machine learning is NOT suited? (Textbook p. 64 / Try 2.3)"
  },
  opts: {
    ar: ["حساب مجموع عددين صحيحين (Calculating the sum of two integers)", "التمييز بين صور الكلاب والقطط", "اكتشاف رسائل البريد الإلكتروني المزعجة تلقائياً", "تجميع عملاء متجر إلكتروني حسب أنماط الشراء"],
    en: ["Calculating the sum of two integers", "Distinguishing photos of dogs and cats", "Automatically detecting spam emails", "Grouping online store customers by purchase patterns"]
  },
  a: 0,
  exp: {
    ar: "حساب مجموع عددين صحيحين له قاعدة رياضية واضحة وثابتة لا تحتاج إلى تعلم آلي.",
    en: "Calculating the sum of two integers follows an exact rule and needs no machine learning."
  },
  ref: "كتاب المدرسة ص 56 / p. 64"
}, {
  q: {
    ar: "أي خيار لا يُعد نقطة حذر مناسبة عند استخدام التعلّم الآلي؟ (كتاب الوزارة ص 57 / تدريب 2-4)",
    en: "Which option is NOT an appropriate point of caution when using machine learning? (Textbook p. 64 / Try 2.4)"
  },
  opts: {
    ar: ["يمكن للتعلّم الآلي دائماً تقديم أحكام عادلة بغض النظر عن جودة بيانات التدريب", "إذا كان هناك تحيز في بيانات التدريب، فقد تصبح نتائج الحكم متحيزة أيضاً", "في التعلّم الآلي، قد يكون من الصعب أحياناً رؤية سبب الحكم (مشكلة الصندوق الأسود)", "مخرجات التعلّم الآلي ليست مطلقة، ومن المهم أن يتحمل البشر مسؤولية القرار النهائي"],
    en: ["Machine learning can always make fair judgments regardless of the quality of the training data", "If there is bias in the training data, the judgment results may also be biased", "In machine learning, it can sometimes be hard to see the reason for a judgment (black-box problem)", "The output of ML is not absolute, and humans must take responsibility for the final judgment"]
  },
  a: 0,
  exp: {
    ar: "جودة وعدالة أحكام التعلم الآلي تعتمد كلياً على جودة بيانات التدريب وخلوها من التحيز.",
    en: "ML cannot make fair judgments if its training data is biased or poor in quality."
  },
  ref: "كتاب المدرسة ص 55 و 57 / p. 62 & 64"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب الفرق بين التصنيف والتجميع؟ (كتاب الوزارة ص 58 / تمرين 3-1)",
    en: "Which option most appropriately describes the difference between classification and clustering? (Textbook p. 66 / Exercise 3.1)"
  },
  opts: {
    ar: ["يعتمد التصنيف على إجابات صحيحة مُعطاة، بينما يجمع التجميع البيانات المتشابهة بدون إجابات صحيحة", "كلاهما من طرق التعلّم الخاضع للإشراف", "التصنيف يجمع البيانات بدون وسوم، والتجميع يستخدم وسوماً معطاة", "يُستخدم التصنيف للأرقام فقط، والتجميع للنصوص فقط"],
    en: ["Classification is based on given correct answers, whereas clustering groups similar data without correct answers", "Both are methods of supervised learning", "Classification groups without labels, while clustering uses given labels", "Classification is only for numbers, and clustering is only for text"]
  },
  a: 0,
  exp: {
    ar: "التصنيف خاضع للإشراف (بإجابات صحيحة معطاة)، بينما التجميع غير خاضع للإشراف (بدون إجابات صحيحة).",
    en: "Classification uses given correct answers (labels); clustering groups similar data without labels."
  },
  ref: "كتاب المدرسة ص 54 و 58 / p. 61 & 66"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب التعلّم المعزز؟ (كتاب الوزارة ص 58 / تمرين 3-2)",
    en: "Which option most appropriately describes reinforcement learning? (Textbook p. 66 / Exercise 3.2)"
  },
  opts: {
    ar: ["طريقة لتعلّم الإجراءات التي تحقق نتائج أفضل من خلال التجربة والخطأ اعتماداً على المكافآت", "طريقة تتعلم من أزواج بيانات الإدخال والإجابات الصحيحة", "طريقة تجمع البيانات المتشابهة بدون إجابات صحيحة", "طريقة يكتب فيها البشر جميع قواعد التصرف يدوياً"],
    en: ["A method of learning actions that yield better results through trial and error based on rewards", "A method that learns from pairs of input data and correct answers", "A method that groups similar data without correct answers", "A method in which humans write all rules of action by hand"]
  },
  a: 0,
  exp: {
    ar: "التعلم المعزز يعتمد على التجربة والخطأ وتلقي المكافآت لتحسين اختيار الإجراءات.",
    en: "Reinforcement learning learns better actions through trial and error guided by rewards."
  },
  ref: "كتاب المدرسة ص 54 و 58 / p. 61 & 66"
}];

export const lesson72Questions: Unit7Question[] = [{
  q: {
    ar: "ما المصطلح الخاص بالنموذج الرياضي المستوحى من آلية معالجة المعلومات في الخلايا العصبية بالدماغ؟ (كتاب الوزارة ص 63 / تدريب 1-1)",
    en: "What is the term for the mathematical model modeled on the information processing mechanism of nerve cells in the brain? (Textbook p. 72 / Try 1.1)"
  },
  opts: {
    ar: ["الشبكة العصبية (Neural network)", "مخطط المستطيلات (Mosaic plot)", "الانحدار البسيط (Simple regression)", "الجدولة المتقاطعة (Cross-tabulation)"],
    en: ["Neural network", "Mosaic plot", "Simple regression", "Cross-tabulation"]
  },
  a: 0,
  exp: {
    ar: "الشبكة العصبية (Neural network) هي نموذج رياضي يحاكي عمل الخلايا العصبية في الدماغ البشري.",
    en: "A neural network is a mathematical model inspired by nerve cells in the human brain."
  },
  ref: "كتاب المدرسة ص 60 و 63 / p. 69 & 72"
}, {
  q: {
    ar: "ما اسما الطبقة التي تستقبل البيانات من الخارج، والطبقة التي تُخرج النتيجة النهائية في الشبكة العصبية على الترتيب؟ (كتاب الوزارة ص 63 / تدريب 1-2)",
    en: "What are the names of the layer that receives data from outside and the layer that outputs the final result, respectively? (Textbook p. 72 / Try 1.2)"
  },
  opts: {
    ar: ["طبقة الإدخال (Input layer) — وطبقة الإخراج (Output layer)", "طبقة الإخراج — وطبقة الإدخال", "الطبقة المخفية — وطبقة الانحدار", "طبقة الأوزان — وطبقة المكافأة"],
    en: ["Input layer — and Output layer", "Output layer — and Input layer", "Hidden layer — and Regression layer", "Weight layer — and Reward layer"]
  },
  a: 0,
  exp: {
    ar: "طبقة الإدخال تستقبل البيانات من الخارج، وطبقة الإخراج تُخرج النتيجة النهائية بعد معالجتها في الطبقات المخفية.",
    en: "The input layer receives external data, and the output layer produces the final answer."
  },
  ref: "كتاب المدرسة ص 60 و 63 / p. 69 & 72"
}, {
  q: {
    ar: "ما المصطلح الخاص بالقيمة العددية التي تشير إلى مدى التركيز على كل مدخل في الشبكة العصبية؟ (كتاب الوزارة ص 63 / تدريب 1-3)",
    en: "What is the term for the numerical value that indicates how much each input is emphasized in a neural network? (Textbook p. 72 / Try 1.3)"
  },
  opts: {
    ar: ["الوزن (Weight)", "المكافأة (Reward)", "المتبقي (Residual)", "مستوى الثقة (Confidence level)"],
    en: ["Weight", "Reward", "Residual", "Confidence level"]
  },
  a: 0,
  exp: {
    ar: "الوزن (Weight) يحدد درجة أهمية كل مدخل عند حساب مجموع المدخلات داخل العقدة العصبية.",
    en: "A weight indicates how much each input is emphasized in a neuron."
  },
  ref: "كتاب المدرسة ص 60 و 63 / p. 69 & 72"
}, {
  q: {
    ar: "ما المصطلح الخاص بالتعلّم الآلي الذي يستخدم شبكة عصبية ذات طبقات مخفية عديدة مكدسة بعمق؟ (كتاب الوزارة ص 63 / تدريب 1-4)",
    en: "What is the term for machine learning using a neural network with many deeply stacked hidden layers? (Textbook p. 72 / Try 1.4)"
  },
  opts: {
    ar: ["التعلم العميق (Deep learning)", "الانحدار البسيط (Simple regression)", "التقدير النقطي (Point estimation)", "التقييم الإرشادي (Heuristic evaluation)"],
    en: ["Deep learning", "Simple regression", "Point estimation", "Heuristic evaluation"]
  },
  a: 0,
  exp: {
    ar: "التعلم العميق (Deep learning) يعتمد على شبكة عصبية متعددة الطبقات المخفية لتعلم السمات بشكل هرمي.",
    en: "Deep learning uses a neural network with many stacked hidden layers."
  },
  ref: "كتاب المدرسة ص 61 و 63 / p. 70 & 72"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب آلية تدريب الشبكة العصبية؟ (كتاب الوزارة ص 64 / تدريب 2-2)",
    en: "Which option most appropriately describes the mechanism of training a neural network? (Textbook p. 72 / Try 2.2)"
  },
  opts: {
    ar: ["عن طريق تعديل الأوزان تدريجياً لتقليل الفرق بين التنبؤ والإجابة الصحيحة، تصبح الشبكة قادرة على التنبؤ الصحيح", "تكون الأوزان ثابتة منذ البداية ولا تتغير أثناء التدريب", "يقوم البشر بحساب وضبط جميع الأوزان يدوياً واحدة تلو الأخرى", "يتم التدريب عن طريق تقليل عدد الطبقات واحدة تلو الأخرى"],
    en: ["By gradually adjusting weights to reduce the discrepancy between prediction and correct answer, the network becomes able to make correct predictions", "Weights are fixed from the beginning and do not change during training", "Humans calculate and set all weights by hand one by one", "Training proceeds by reducing the number of layers one by one"]
  },
  a: 0,
  exp: {
    ar: "تُعدَّل الأوزان تلقائياً وتدريجياً أثناء التدريب لتقليل الفرق (دالة الخسارة) بين التنبؤ والإجابة الصحيحة.",
    en: "Training gradually adjusts weights to minimize the discrepancy between predicted and true answers."
  },
  ref: "كتاب المدرسة ص 61 و 64 / p. 70 & 72"
}, {
  q: {
    ar: "طابق كل طبقة في التعرف على الوجوه بالتعلم العميق مع ما تتعلمه: (1) الطبقات الضحلة، (2) الطبقات الوسطى، (3) الطبقات العميقة: (كتاب الوزارة ص 64 / تدريب 2-3)",
    en: "Match the layers in deep learning face recognition: (a) Shallow layers, (b) Middle layers, (c) Deep layers: (Textbook p. 72 / Try 2.3)"
  },
  opts: {
    ar: ["(1) سمات بسيطة كالخطوط وتغيرات اللون — (2) أشكال الأجزاء كالعيون والأنف — (3) بنية الوجه بأكمله", "(1) بنية الوجه بأكمله — (2) أشكال الأجزاء — (3) سمات بسيطة كالخطوط", "(1) أشكال الأجزاء — (2) سمات بسيطة — (3) بنية الوجه بأكمله", "جميع الطبقات تتعلم نفس السمات البسيطة"],
    en: ["(a) Simple features like lines & color changes — (b) Shapes of parts like eyes & nose — (c) Structure of the whole face", "(a) Whole face — (b) Shapes of parts — (c) Simple lines", "(a) Shapes of parts — (b) Simple lines — (c) Whole face", "All layers learn the exact same simple features"]
  },
  a: 0,
  exp: {
    ar: "البناء الهرمي يبدأ بالخطوط والحواف في الطبقات الضحلة، ثم أجزاء الوجه في الوسطى، ثم الوجه الكامل في العميقة.",
    en: "(a) Simple lines/color changes, (b) Shapes of parts (eyes/nose), (c) Structure of the whole face."
  },
  ref: "كتاب المدرسة ص 62 و 64 / p. 71 & 72"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب الخلفية التي أدت إلى تطور التعلم العميق ونجاحه العملي؟ (كتاب الوزارة ص 64 / تدريب 2-4)",
    en: "Which option most appropriately describes the background to the development of deep learning? (Textbook p. 73 / Try 2.4)"
  },
  opts: {
    ar: ["توفر كميات كبيرة من البيانات وتحسن القدرة الحاسوبية مثل وحدات معالجة الرسوميات (GPUs)", "أصبح من الممكن التعلم بكميات صغيرة جداً من البيانات وبدون حواسيب سريعة", "لم تعد الخوارزميات تستخدم الرياضيات إطلاقاً", "أصبح البشر يصممون جميع السمات يدوياً"],
    en: ["Large amounts of data became available and computational power such as GPUs improved", "It became possible to learn with very small data and slow computers", "Algorithms no longer use mathematics at all", "Humans began designing all features manually"]
  },
  a: 0,
  exp: {
    ar: "نجح التعلم العميق بفضل وفرة البيانات الضخمة والقدرة الحسابية العالية لمعالجات GPUs و TPUs.",
    en: "Deep learning flourished thanks to big data availability and high GPU/TPU computing power."
  },
  ref: "كتاب المدرسة ص 62 و 64 / p. 71 & 73"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب عمل العقدة (الخلية العصبية) في الشبكة العصبية؟ (كتاب الوزارة ص 66 / تمرين 3-1)",
    en: "Which option most appropriately describes the operation of a node in a neural network? (Textbook p. 75 / Exercise 3.1)"
  },
  opts: {
    ar: ["تضرب عدة مدخلات في أوزان، وتجمعها، وتمرر النتيجة إلى الطبقة التالية", "تستقبل مدخلاً واحداً فقط وتمرره كما هو دون تغيير", "تختار مدخلاً واحداً عشوائياً وتخرج قيمته", "تحول المدخلات إلى نص وتخزنها فقط"],
    en: ["It multiplies multiple inputs by weights, sums them, and passes the result to the next layer", "It receives only one input and passes it unchanged", "It randomly selects one input and outputs it", "It converts inputs into text and stores them"]
  },
  a: 0,
  exp: {
    ar: "كل عقدة تضرب مدخلاتها في أوزانها المقابلة، وتجمعها، وتمرر الناتج عبر دالة تنشيط إلى الطبقة التالية.",
    en: "A node multiplies its inputs by weights, sums them, and passes the activated result to the next layer."
  },
  ref: "كتاب المدرسة ص 60 و 66 / p. 69 & 75"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب خصائص التعلم العميق؟ (كتاب الوزارة ص 66 / تمرين 3-2)",
    en: "Which option most appropriately describes the characteristics of deep learning? (Textbook p. 75 / Exercise 3.2)"
  },
  opts: {
    ar: ["من خلال تكديس العديد من الطبقات المخفية، يتعلم السمات تلقائياً من البسيطة إلى المعقدة خطوة بخطوة", "لأنه يحتوي على طبقة مخفية واحدة، فإن بنيته بسيطة دائماً", "يجب على البشر تصميم جميع السمات مسبقاً يدوياً", "يمكنه التعلم بدقة عالية حتى بكمية صغيرة جداً من البيانات دائماً"],
    en: ["By stacking many hidden layers, it automatically learns features from simple to complex step by step", "Because it has one hidden layer, its structure is simple", "Humans must design all features in advance", "It can always learn with high accuracy from tiny datasets"]
  },
  a: 0,
  exp: {
    ar: "يتعلم التعلم العميق السمات تلقائياً وبشكل هرمي متدرج عبر طبقاته المخفية المتعددة.",
    en: "Deep learning stacks many hidden layers to automatically learn hierarchical features step by step."
  },
  ref: "كتاب المدرسة ص 62 و 66 / p. 71 & 75"
}, {
  q: {
    ar: "ماذا يحدث إذا جعل فريق هندسي الشبكة العصبية أعمق فأعمق لكن دقة الاختبار توقفت عن التحسن وأصبح التدريب بطيئاً جداً؟ (كتاب الوزارة ص 66 / تحدٍّ)",
    en: "What happens when a team makes a network deeper and deeper, but accuracy stops improving and training becomes very slow? (Textbook p. 75 / Challenge)"
  },
  opts: {
    ar: ["تتطلب الطبقات الإضافية بيانات تدريب أكثر وقدرة حاسوبية أكبر وقد تسبب فرط التخصيص (Overfitting)؛ لذا يجب فحص جودة وتنوع بيانات التدريب وضبط المعلمات بدلاً من زيادة العمق فقط", "تزداد سرعة التدريب تلقائياً كلما أضفنا مئة طبقة جديدة", "يجب حذف طبقة الإدخال وطبقة الإخراج", "لا علاقة بين عدد الطبقات وحجم البيانات أو وقت التدريب"],
    en: ["Extra depth demands more data and compute and risks overfitting; the team should check data quality/diversity and hyperparameters before adding more layers", "Training automatically gets faster as more layers are added", "The input and output layers should be deleted", "Layer depth has no relation to data size or training time"]
  },
  a: 0,
  exp: {
    ar: "العمق الزائد يستهلك موارد حاسوبية ضخمة وقد يؤدي إلى حفظ بيانات التدريب (Overfitting) دون تحسن على بيانات الاختبار.",
    en: "Excessive depth increases compute cost and overfitting risk; data quality and architecture fit must be checked first."
  },
  ref: "كتاب المدرسة ص 66 / p. 75"
}];

export const lesson73Questions: Unit7Question[] = [{
  q: {
    ar: "ما المصطلح الخاص بالنموذج الذي يتعلم أنماط اللغة من بيانات نصية ويولد جملًا طبيعية بتكرار التنبؤ بالكلمة التالية؟ (كتاب الوزارة ص 71 / تدريب 1-1)",
    en: "What is the term for a model that learns patterns of language from text data and generates natural sentences? (Textbook p. 81 / Try 1.1)"
  },
  opts: {
    ar: ["نموذج اللغة (Language model)", "المخطط المبعثر (Scatter plot)", "اختبار مربع كاي (Chi-squared test)", "المدرج التكراري (Histogram)"],
    en: ["Language model", "Scatter plot", "Chi-squared test", "Histogram"]
  },
  a: 0,
  exp: {
    ar: "نموذج اللغة (Language model) يتعلم التوزيع الاحتمالي للكلمات لتوليد النصوص بتكرار التنبؤ بالكلمة التالية.",
    en: "A language model learns language patterns from text data to predict subsequent words/tokens."
  },
  ref: "كتاب المدرسة ص 68 و 71 / p. 78 & 81"
}, {
  q: {
    ar: "ما المصطلح الخاص بنموذج اللغة المبني على شبكة عصبية ضخمة والمدرَّب على كميات هائلة من النصوص؟ (كتاب الوزارة ص 71 / تدريب 1-2)",
    en: "What is the term for a language model built on a huge neural network and trained on vast amounts of text? (Textbook p. 81 / Try 1.2)"
  },
  opts: {
    ar: ["نموذج اللغة الكبير (Large language model — LLM)", "الانحدار الخطي البسيط", "التقدير النقطي", "الجدول المتقاطع"],
    en: ["Large language model (LLM)", "Simple linear regression", "Point estimation", "Cross-tabulation"]
  },
  a: 0,
  exp: {
    ar: "نموذج اللغة الكبير (LLM) هو نموذج لغة ضخم في كمية بيانات تدريبه وفي عدد معلماته (Parameters).",
    en: "A Large Language Model (LLM) is built on a massive neural network trained on vast text."
  },
  ref: "كتاب المدرسة ص 69 و 71 / p. 79 & 81"
}, {
  q: {
    ar: "ما المصطلح الخاص بالظاهرة التي يولد فيها الذكاء الاصطناعي معلومات لا تتطابق مع الحقائق بطريقة تبدو مقنعة؟ (كتاب الوزارة ص 71 / تدريب 1-4)",
    en: "What is the term for the phenomenon in which AI generates information that does not match the facts in a convincing way? (Textbook p. 81 / Try 1.4)"
  },
  opts: {
    ar: ["الهلوسة (Hallucination)", "تعدد الوسائط (Multimodality)", "التجميع (Clustering)", "المربعات الصغرى (Least-squares)"],
    en: ["Hallucination", "Multimodality", "Clustering", "Least-squares"]
  },
  a: 0,
  exp: {
    ar: "الهلوسة (Hallucination) هي توليد معلومات زائفة أو مخترعة بأسلوب لغوي واثق ومقنع.",
    en: "Hallucination is generating factually incorrect information in a fluent, convincing manner."
  },
  ref: "كتاب المدرسة ص 68 و 71 / p. 78 & 81"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب المبدأ الأساسي لنموذج اللغة؟ (كتاب الوزارة ص 72 / تدريب 2-1)",
    en: "Which option most appropriately describes the basic principle of a language model? (Textbook p. 82 / Try 2.1)"
  },
  opts: {
    ar: ["يولد الجمل عن طريق تكرار التنبؤ بالكلمة التالية التي يُرجَّح ظهورها", "يفهم المعنى تماماً بنفس طريقة الإنسان ويؤلف الجمل من الوعي الذاتي", "يحفظ جميع الجمل مسبقاً ويسترجعها كما هي حرفياً", "يترجم الكلمات واحدة تلو الأخرى باستخدام قاموس ورقي ثابت فقط"],
    en: ["It generates sentences by repeatedly predicting the next word likely to appear", "It understands meaning in the exact same way as a human", "It memorizes all sentences in advance and retrieves them verbatim", "It translates words one by one using only a static dictionary"]
  },
  a: 0,
  exp: {
    ar: "يعمل نموذج اللغة عن طريق حساب الاحتمالات الإحصائية وتكرار التنبؤ بالكلمة أو الرمز النصي التالي.",
    en: "A language model generates sentences by repeatedly predicting the next statistically likely word/token."
  },
  ref: "كتاب المدرسة ص 68 و 72 / p. 78 & 82"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب ظاهرة الهلوسة (Hallucination)؟ (كتاب الوزارة ص 72 / تدريب 2-2)",
    en: "Which option most appropriately describes hallucination? (Textbook p. 82 / Try 2.2)"
  },
  opts: {
    ar: ["ظاهرة يولد فيها الذكاء الاصطناعي معلومات لا تتطابق مع الحقائق بطريقة تبدو مقنعة لأن النموذج يختار الكلمات المعقولة إحصائياً", "ظاهرة يتعطل فيها الحاسوب ويتوقف أثناء التدريب", "ظاهرة يرفض فيها الذكاء الاصطناعي الإجابة عمداً", "ظاهرة تتشوه فيها بيانات الصور بسبب ضوضاء الكاميرا"],
    en: ["A phenomenon in which AI generates information that does not match facts in a convincing way because it selects statistically plausible words", "A phenomenon where the computer crashes during training", "A phenomenon where AI intentionally refuses to answer", "A phenomenon where image data is distorted by camera noise"]
  },
  a: 0,
  exp: {
    ar: "لأن النموذج يختار الكلمات المعقولة إحصائياً، فقد يصوغ معلومات غير صحيحة واقعياً بطريقة مقنعة (الهلوسة).",
    en: "Hallucination occurs because the model selects statistically plausible words rather than verified truth."
  },
  ref: "كتاب المدرسة ص 68 و 72 / p. 78 & 82"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب طريقة RLHF (التعلّم المعزز من خلال التغذية الراجعة البشرية)؟ (كتاب الوزارة ص 72 / تدريب 2-3)",
    en: "Which option most appropriately describes RLHF (Reinforcement Learning from Human Feedback)? (Textbook p. 82 / Try 2.3)"
  },
  opts: {
    ar: ["طريقة تستخدم تقييمات البشر كمكافآت لضبط النموذج بالتعلم المعزز حتى يعطي إجابات مرغوبة", "طريقة يكتب فيها البشر جميع نصوص الإجابات يدوياً", "طريقة تقلل حجم بيانات التدريب لتسريع التعلم", "طريقة تحول الصور إلى نص فقط"],
    en: ["A method that uses human evaluations as rewards to tune the model by reinforcement learning so it gives desirable responses", "A method in which humans write all response texts by hand", "A method that reduces training data size to speed up learning", "A method that converts images into text only"]
  },
  a: 0,
  exp: {
    ar: "يستخدم RLHF تقييمات البشر للإجابات كمكافآت في التعلم المعزز لتهذيب استجابات النموذج ومطابقتها لقصد المستخدم.",
    en: "RLHF uses human evaluations as rewards to tune the model toward helpful, polite, on-intent responses."
  },
  ref: "كتاب المدرسة ص 69 و 72 / p. 79 & 82"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب خاصية تعدد الوسائط (Multimodality)؟ (كتاب الوزارة ص 72 / تدريب 2-4)",
    en: "Which option most appropriately describes multimodality? (Textbook p. 82 / Try 2.4)"
  },
  opts: {
    ar: ["خاصية القدرة على التعامل مع أنواع متعددة من البيانات مثل النص والصور والصوت والفيديو", "خاصية القدرة على الترجمة بين لغات متعددة في النص فقط", "خاصية تشغيل عدة حواسيب في وقت واحد", "خاصية الجمع بين عدة طرق تعلم آلي قديمة فقط"],
    en: ["The property of being able to handle multiple kinds of data such as text, images, audio, and video", "The property of translating between multiple languages in text only", "The property of running multiple computers simultaneously", "The property of combining multiple old ML methods only"]
  },
  a: 0,
  exp: {
    ar: "تعدد الوسائط (Multimodality) يعني التعامل مع وسائط بيانات متنوعة (نص، صورة، صوت، فيديو) في نموذج واحد.",
    en: "Multimodality is the ability to process multiple data types (text, images, audio, video) in a single model."
  },
  ref: "كتاب المدرسة ص 70 و 72 / p. 80 & 82"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب لماذا تحدث الهلوسة؟ (كتاب الوزارة ص 74 / تمرين 3-1)",
    en: "Which option most appropriately describes why hallucination occurs? (Textbook p. 85 / Exercise 3.1)"
  },
  opts: {
    ar: ["لأن نموذج اللغة يختار 'الكلمة المعقولة إحصائياً' وليس 'الكلمة الصحيحة واقعياً'", "لأن معلمات النموذج قليلة جداً", "لأن الذكاء الاصطناعي يكذب عمداً لخداع البشر", "لأن بيانات التدريب لا تحتوي على أي جمل صحيحة على الإطلاق"],
    en: ["Because the language model selects the 'statistically plausible word,' not the 'factually correct word'", "Because the model has too few parameters", "Because the AI intentionally lies to deceive humans", "Because the training data contains zero correct sentences"]
  },
  a: 0,
  exp: {
    ar: "السبب العلمي للهلوسة هو أن النموذج يحسّن اختيار الكلمة المحتملة/المعقولة إحصائياً دون وعي بالحقيقة الواقعية.",
    en: "Hallucination stems from optimizing for statistically plausible words rather than verified factual truth."
  },
  ref: "كتاب المدرسة ص 68 و 74 / p. 78 & 85"
}, {
  q: {
    ar: "أي خيار يعطي الترتيب الصحيح للمراحل الثلاث للضبط بطريقة RLHF؟ (كتاب الوزارة ص 74 / تمرين 3-2)",
    en: "Which option gives the correct order of the three stages of tuning by RLHF? (Textbook p. 85 / Exercise 3.2)"
  },
  opts: {
    ar: ["التدريب الأولي (Initial training) ← التقييم البشري (Human evaluation) ← الضبط عبر التعلم المعزز (Tuning by reinforcement learning)", "التقييم البشري ← التدريب الأولي ← الضبط عبر التعلم المعزز", "الضبط عبر التعلم المعزز ← التدريب الأولي ← التقييم البشري", "التدريب الأولي ← الضبط عبر التعلم المعزز ← التقييم البشري"],
    en: ["Initial training → Human evaluation → Tuning by reinforcement learning", "Human evaluation → Initial training → Tuning by reinforcement learning", "Tuning by reinforcement learning → Initial training → Human evaluation", "Initial training → Tuning by reinforcement learning → Human evaluation"]
  },
  a: 0,
  exp: {
    ar: "المراحل الثلاث بالترتيب: التدريب الأولي لنموذج اللغة، ثم التقييم البشري للإجابات، ثم الضبط بالتعلم المعزز.",
    en: "Order: Initial training → Human evaluation → Tuning by reinforcement learning."
  },
  ref: "كتاب المدرسة ص 69 و 74 / p. 79 & 85"
}, {
  q: {
    ar: "يقول زميلك: 'ضبط RLHF يجعل الذكاء الاصطناعي يقول الحقيقة دائماً'. لماذا هذا غير صحيح؟ (كتاب الوزارة ص 74 / تحدٍّ)",
    en: "A classmate says: 'RLHF makes the AI always tell the truth.' Why is that incorrect? (Textbook p. 84 / Challenge)"
  },
  opts: {
    ar: ["لأن RLHF يحسّن مدى ملاءمة الإجابة وتهذيبها ومطابقتها لقصد المستخدم، لكن النموذج يظل يتنبأ بالكلمات المعقولة إحصائياً فقد يهلوس؛ لذا يظل التحقق من الحقائق (Fact-checking) ضرورياً", "لأن RLHF يحذف جميع المعلومات الصحيحة من النموذج", "لأن RLHF يُستخدم للصور فقط ولا يعمل مع النصوص", "مقولة الزميل صحيحة 100% ولا تحتاج لأي تعديل"],
    en: ["Because RLHF improves helpfulness, politeness, and alignment with user intent, but the model still predicts statistically plausible tokens and can hallucinate; fact-checking remains necessary", "Because RLHF deletes all factual knowledge from the model", "Because RLHF only works on images and not text", "The classmate's statement is 100% correct"]
  },
  a: 0,
  exp: {
    ar: "RLHF يضبط أسلوب الإجابة وملاءمتها لتفضيلات البشر، لكنه لا يلغي آلية التنبؤ الإحصائي التي تسبب الهلوسة.",
    en: "RLHF aligns responses with human preferences (politeness, helpfulness), but does not guarantee factual truth."
  },
  ref: "كتاب المدرسة ص 69 و 74 / p. 79 & 84"
}];

export const unit7ExamQuestions: Unit7Question[] = [
// LESSON 7-1 (Questions 1 to 9)
{
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ما الفرق الجوهري بين البرمجة التقليدية (Conventional Programming) والتعلّم الآلي (Machine Learning)؟",
    en: "What is the fundamental difference between Conventional Programming and Machine Learning?"
  },
  opts: {
    ar: ["في البرمجة التقليدية يكتب البشر القواعد؛ بينما في التعلم الآلي يكتشف الحاسوب القواعد والأنماط بنفسه من البيانات", "في البرمجة التقليدية يكتشف الحاسوب القواعد بنفسه، وفي التعلم الآلي يكتب البشر كل قاعدة يدوياً", "التعلم الآلي لا يحتاج إلى أي بيانات على الإطلاق", "لا يوجد أي فرق بينهما"],
    en: ["In conventional programming humans write the rules; in machine learning the computer discovers rules and patterns from data", "In conventional programming the computer discovers rules, and in ML humans write every rule", "Machine learning does not use data at all", "There is no difference between them"]
  },
  a: 0,
  exp: {
    ar: "في البرمجة التقليدية يعطي الإنسان القواعد والبيانات للحاسوب، أما في التعلم الآلي فيستنتج الحاسوب القواعد (النموذج) من البيانات.",
    en: "Conventional programming relies on human-written rules; machine learning learns rules automatically from data."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ما طريقة التعلّم الآلي التي تُعطى فيها أزواج من بيانات الإدخال والإجابات الصحيحة (الوسوم Labels) لتعلّم العلاقة بينهما؟",
    en: "What is the ML method in which pairs of input data and correct answers (labels) are given to learn the relationship between them?"
  },
  opts: {
    ar: ["التعلّم الخاضع للإشراف (Supervised Learning)", "التعلّم غير الخاضع للإشراف (Unsupervised Learning)", "التعلّم المعزز (Reinforcement Learning)", "التحويل المحوري (Pivoting)"],
    en: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Pivoting"]
  },
  a: 0,
  exp: {
    ar: "التعلم الخاضع للإشراف (Supervised learning) يتعلم من بيانات موسومة بإجابات صحيحة مسبقاً (مثل التصنيف والانحدار).",
    en: "Supervised learning trains on input data paired with correct answers (labels)."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "في التعلم الخاضع للإشراف، ما الفرق بين التصنيف (Classification) والانحدار (Regression)؟",
    en: "Within supervised learning, what is the difference between Classification and Regression?"
  },
  opts: {
    ar: ["التصنيف يتنبأ بالفئة التي تنتمي إليها البيانات (مثل بريد مزعج / عادي)، بينما الانحدار يتنبأ بقيمة عددية متصلة (مثل درجة الحرارة أو السعر)", "التصنيف يتنبأ بقيمة عددية متصلة، والانحدار يتنبأ بالفئات", "التصنيف غير خاضع للإشراف، والانحدار خاضع للإشراف", "كلاهما يعمل بدون إجابات صحيحة (بدون وسوم)"],
    en: ["Classification predicts which category data belongs to (e.g., spam vs normal), whereas regression predicts a continuous numerical value (e.g., price or temperature)", "Classification predicts continuous numbers, while regression predicts categories", "Classification is unsupervised, while regression is supervised", "Both operate without labels"]
  },
  a: 0,
  exp: {
    ar: "التصنيف يحدد الفئة (Category/Class)، بينما الانحدار يتنبأ بقيمة عددية متصلة (Continuous number).",
    en: "Classification predicts discrete categories; regression predicts continuous numerical values."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ماذا نسمي المعلومة الموجودة في بيانات الإدخال والتي تكون مفيدة كدليل (Clue) للتنبؤ في التعلم الآلي؟",
    en: "What is the term for a piece of information in the input data that is useful as a clue for prediction?"
  },
  opts: {
    ar: ["السمة (Feature)", "المكافأة (Reward)", "الصندوق الأسود (Black-box)", "الهلوسة (Hallucination)"],
    en: ["Feature", "Reward", "Black-box", "Hallucination"]
  },
  a: 0,
  exp: {
    ar: "السمة (Feature) هي خاصية أو معلومة في المدخلات تساعد النموذج على التنبؤ (مثل عدد الكلمات المشبوهة في البريد).",
    en: "A feature is an input variable or clue used by the model to make predictions."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ما الفرق الجوهري بين التصنيف (Classification) والتجميع (Clustering)؟",
    en: "What is the key difference between Classification and Clustering?"
  },
  opts: {
    ar: ["التصنيف طريقة تعلم خاضع للإشراف تُعطى فيها الإجابات الصحيحة (الوسوم) مسبقاً، بينما التجميع طريقة تعلم غير خاضع للإشراف يجمع البيانات المتشابهة بدون وسوم مسبقة", "التصنيف غير خاضع للإشراف والتجميع خاضع للإشراف", "التجميع يعتمد على المكافآت والعقوبات في الألعاب", "لا يوجد أي فرق بين التصنيف والتجميع"],
    en: ["Classification is supervised learning with labels given in advance, whereas clustering is unsupervised learning that groups similar data without labels", "Classification is unsupervised and clustering is supervised", "Clustering relies on game rewards and penalties", "There is no difference between classification and clustering"]
  },
  a: 0,
  exp: {
    ar: "الفرق الحاسم هو وجود الوسوم (Labels): التصنيف يستخدم وسوماً معطاة، والتجميع يكتشف المجموعات بدون وسوم.",
    en: "Classification uses predefined labels; clustering discovers natural groups without labels."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ما العناصر الأساسية الثلاثة في التعلّم المعزز (Reinforcement Learning)؟",
    en: "What are the three core elements of Reinforcement Learning?"
  },
  opts: {
    ar: ["الحالة (State)، والإجراء (Action)، والمكافأة (Reward)", "طبقة الإدخال، والطبقة المخفية، وطبقة الإخراج", "المتوسط، والوسيط، والمنوال", "فرضية العدم، والفرضية البديلة، ومستوى الدلالة"],
    en: ["State, Action, and Reward", "Input layer, Hidden layer, and Output layer", "Mean, Median, and Mode", "Null hypothesis, Alternative hypothesis, and Significance level"]
  },
  a: 0,
  exp: {
    ar: "في التعلم المعزز يراقب الوكيل الحالة (State)، ويتخذ إجراءً (Action)، ويتلقى مكافأة (Reward) ليتعلم بالتجربة والخطأ.",
    en: "In reinforcement learning, an agent observes a State, takes an Action, and receives a numerical Reward."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "أي من المهام التالية لا يناسبها التعلّم الآلي لأن لديها قاعدة بسيطة وثابتة يكتبها الإنسان مباشرة؟ (كتاب الوزارة ص 56)",
    en: "Which of the following tasks is LEAST suited to machine learning because a simple human-written rule already solves it? (Textbook p. 63)"
  },
  opts: {
    ar: ["حساب مجموع عددين صحيحين (Calculating the sum of two integers)", "التمييز بين صور الكلاب والقطط", "اكتشاف رسائل البريد الإلكتروني المزعجة (Spam)", "تجميع عملاء متجر إلكتروني حسب أنماط الشراء"],
    en: ["Calculating the sum of two integers", "Distinguishing photos of dogs and cats", "Detecting spam emails", "Grouping online store customers by purchase patterns"]
  },
  a: 0,
  exp: {
    ar: "جمع عددين صحيحين له قاعدة رياضية صريحة وبسيطة، لذا يُبرمج بالبرمجة التقليدية ولا يحتاج لتعلم آلي.",
    en: "Adding two integers follows an exact arithmetic rule and does not require machine learning."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "ماذا نسمي المشكلة التي يصعب فيها على البشر رؤية أو تفسير السبب الداخلي الذي استند إليه نموذج التعلم الآلي في إصدار حكمه؟",
    en: "What is the problem where it is difficult for humans to see the internal reason why a machine learning model made a particular judgment?"
  },
  opts: {
    ar: ["مشكلة الصندوق الأسود (Black-box problem)", "تعدد الوسائط (Multimodality)", "التقدير الفاصل (Interval estimation)", "التجميع (Clustering)"],
    en: ["Black-box problem", "Multimodality", "Interval estimation", "Clustering"]
  },
  a: 0,
  exp: {
    ar: "مشكلة الصندوق الأسود (Black-box problem) تعني صعوبة معرفة الأساس الذي بُني عليه حكم النموذج من الداخل.",
    en: "The black-box problem refers to the opacity of how a complex model arrives at its judgment."
  }
}, {
  lesson: {
    ar: "الدرس 7-1",
    en: "Lesson 7-1"
  },
  q: {
    ar: "أي من العبارات التالية غير مناسبة بشأن مزايا وقيود التعلّم الآلي؟ (كتاب الوزارة ص 58)",
    en: "Which statement is NOT appropriate regarding the advantages and limitations of machine learning? (Textbook p. 67)"
  },
  opts: {
    ar: ["يمكن للتعلّم الآلي أن يحل تماماً محل الحكم البشري في جميع المجالات دون مراجعة", "إذا كان هناك تحيز في بيانات التدريب، فقد تصبح نتائج الحكم متحيزة أيضاً", "التعلّم الآلي بارع في اكتشاف الأنماط في كميات ضخمة من البيانات", "يجب أن يدعم التعلّم الآلي الحكم البشري بدلاً من استبداله"],
    en: ["Machine learning can completely replace human judgment in all fields", "If there is bias in the training data, the judgment results may also be biased", "Machine learning excels at finding patterns in large amounts of data", "Machine learning should support human judgment rather than replace it"]
  },
  a: 0,
  exp: {
    ar: "التعلم الآلي لا يستبدل الحكم البشري بالكامل، بل يجب بقاء الإنسان في الحلقة (Human-in-the-loop) لتحمل المسؤولية ومراجعة التحيز.",
    en: "ML cannot replace human judgment in all fields; humans must remain in the loop."
  }
},
// LESSON 7-2 (Questions 10 to 17)
{
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "ما الترتيب الصحيح للطبقات التي تمر عبرها المعلومات داخل الشبكة العصبية؟",
    en: "What is the correct order of layers through which information flows in a neural network?"
  },
  opts: {
    ar: ["طبقة الإدخال (Input layer) ← الطبقة المخفية / الوسطى (Hidden layer) ← طبقة الإخراج (Output layer)", "طبقة الإخراج ← الطبقة المخفية ← طبقة الإدخال", "الطبقة المخفية ← طبقة الإدخال ← طبقة الإخراج", "طبقة الإدخال ← طبقة الإخراج ← الطبقة المخفية"],
    en: ["Input layer → Hidden layer → Output layer", "Output layer → Hidden layer → Input layer", "Hidden layer → Input layer → Output layer", "Input layer → Output layer → Hidden layer"]
  },
  a: 0,
  exp: {
    ar: "تستقبل طبقة الإدخال البيانات، وتعالجها الطبقة المخفية، وتُخرج طبقة الإخراج النتيجة النهائية.",
    en: "Data enters the Input layer, is processed by the Hidden layer(s), and exits via the Output layer."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "ماذا نسمي القيمة العددية في الشبكة العصبية التي تشير إلى مدى التركيز على كل مدخل (أهميته) عند انتقال الإشارة بين العُقد؟",
    en: "What is the numerical value in a neural network that indicates how much each input is emphasized?"
  },
  opts: {
    ar: ["الوزن (Weight)", "المكافأة (Reward)", "القيمة الاحتمالية (p-value)", "المخطط المبعثر (Scatter)"],
    en: ["Weight", "Reward", "p-value", "Scatter"]
  },
  a: 0,
  exp: {
    ar: "الوزن (Weight) يحدد مدى أهمية أو تأثير كل مدخل في الخلية العصبية، ويُعدَّل تدريجياً أثناء التدريب.",
    en: "Weights determine how strongly each input influences a neuron and are adjusted during training."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "كيف تعمل الخلية العصبية الواحدة (العقدة Node) داخل الشبكة العصبية؟ (كتاب الوزارة ص 66)",
    en: "How does a single node (neuron) operate in a neural network? (Textbook p. 75)"
  },
  opts: {
    ar: ["تضرب عدة مدخلات في أوزان (Weights)، وتجمعها (مع الانحياز)، وتمرر النتيجة عبر دالة تنشيط إلى الطبقة التالية", "تحذف جميع المدخلات وتختار رقماً عشوائياً دائماً", "ترتب البيانات أبجدياً فقط دون أي عمليات حسابية", "تعمل فقط بدون أوزان أو طبقات"],
    en: ["It multiplies multiple inputs by weights, sums them, and passes the result through an activation function to the next layer", "It deletes all inputs and outputs a random number", "It sorts data alphabetically without math", "It operates without weights or layers"]
  },
  a: 0,
  exp: {
    ar: "تضرب العقدة كل مدخل في وزنه، وتجمع الحواصل، وتطبق دالة تنشيط غير خطية لترسل الناتج للطبقة التالية.",
    en: "A node multiplies inputs by weights, sums them, applies an activation function, and forwards the output."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "ما حالة الأوزان في الشبكة العصبية 'قبل التدريب'، وكيف تتغير 'أثناء التدريب'؟",
    en: "What is the state of weights 'before training,' and how do they change 'during training'?"
  },
  opts: {
    ar: ["قبل التدريب تكون الأوزان مضبوطة على قيم عشوائية فلا تتنبأ بشكل صحيح؛ وأثناء التدريب تُعدَّل تدريجياً لتقليل الفرق بين التنبؤ والإجابة الصحيحة", "قبل التدريب تكون الأوزان مثالية وصحيحة 100%", "أثناء التدريب تظل الأوزان ثابتة لا تتغير أبداً", "بعد التدريب تُمسح جميع الأوزان"],
    en: ["Before training weights are set to arbitrary values; during training they are gradually adjusted to reduce the discrepancy between prediction and correct answer", "Before training weights are already 100% optimal", "During training weights remain fixed and never change", "After training all weights are erased"]
  },
  a: 0,
  exp: {
    ar: "تبدأ الأوزان بقيم عشوائية أولية، ثم يعدلها التدريب تدريجياً لتقليل الخطأ (Loss) حتى تتمكن من التعميم على بيانات جديدة.",
    en: "Weights start at arbitrary values and are iteratively adjusted during training to minimize prediction error."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "ما المقصود بالتعلم العميق (Deep Learning)، وكيف يتعلم السمات؟",
    en: "What is Deep Learning, and how does it learn features?"
  },
  opts: {
    ar: ["تعلّم آلي يستخدم شبكة عصبية ذات طبقات مخفية عديدة مكدسة بعمق، ويتعلم السمات تلقائياً من البسيطة إلى المعقدة خطوة بخطوة (بشكل هرمي)", "شبكة عصبية بدون أي طبقات مخفية، ويصمم فيها الإنسان كل سمة يدوياً", "برنامج جداول بيانات تقليدي لحساب المتوسط فقط", "طريقة لا تحتاج إلى بيانات أو حواسيب سريعة"],
    en: ["Machine learning using a neural network with many stacked hidden layers, automatically learning features from simple to complex step by step", "A network with zero hidden layers where humans design every feature by hand", "A basic spreadsheet calculating averages", "A method requiring neither data nor fast computers"]
  },
  a: 0,
  exp: {
    ar: "التعلم العميق يكدس العديد من الطبقات المخفية ليبني السمات تلقائياً بشكل هرمي من البسيط إلى المعقد.",
    en: "Deep learning stacks many hidden layers to automatically build hierarchical features from simple to complex."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "في التعرف على الوجوه بالتعلم العميق، ماذا تتعلم الطبقات الضحلة، والطبقات الوسطى، والطبقات العميقة على الترتيب؟ (كتاب الوزارة ص 62 و 64)",
    en: "In deep learning face recognition, what do the shallow, middle, and deep layers learn respectively? (Textbook pp. 71 & 72)"
  },
  opts: {
    ar: ["الضحلة: سمات بسيطة كالخطوط وتغيرات اللون — الوسطى: أشكال الأجزاء كالعيون والأنف — العميقة: بنية الوجه بأكمله", "الضحلة: بنية الوجه الكامل — الوسطى: الخطوط — العميقة: البكسلات الخام", "جميع الطبقات تتعلم نفس الخطوط البسيطة فقط", "الضحلة: الصوت — الوسطى: النص — العميقة: الأرقام"],
    en: ["Shallow: simple features like lines and color changes — Middle: shapes of parts like eyes and nose — Deep: structure of the whole face", "Shallow: whole face — Middle: simple lines — Deep: raw pixels", "All layers learn only simple lines", "Shallow: audio — Middle: text — Deep: numbers"]
  },
  a: 0,
  exp: {
    ar: "يتدرج البناء الهرمي من الخطوط والحواف (الضحلة) إلى أجزاء الوجه كالعيون والأنف (الوسطى) ثم الوجه الكامل (العميقة).",
    en: "Hierarchical progression: shallow layers capture lines/edges, middle layers capture facial parts, and deep layers capture the whole face."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "ما العاملان الرئيسيان اللذان مكّنا التعلم العميق من النجاح عملياً وإحداث طفرة في الذكاء الاصطناعي الحديث؟",
    en: "What two main factors enabled deep learning to become practical and achieve a breakthrough in AI?"
  },
  opts: {
    ar: ["توفر كميات ضخمة من البيانات (Large amounts of data) وتحسن القدرة الحاسوبية الفائقة مثل GPUs و TPUs", "تقليل حجم البيانات وإلغاء المعالجات الرسومية", "كتابة جميع القواعد يدوياً بدون تدريب", "استخدام طبقة مخفية واحدة فقط"],
    en: ["Availability of large amounts of data and advances in high computational power such as GPUs and TPUs", "Shrinking datasets and removing graphics processors", "Writing all rules manually without training", "Using only a single hidden layer"]
  },
  a: 0,
  exp: {
    ar: "أصبح التعلم العميق عملياً بفضل تراكم البيانات الضخمة عبر الإنترنت وتطور المعالجات المتوازية السريعة (GPUs/TPUs).",
    en: "Big data and high-speed parallel computing (GPUs/TPUs) made training deep neural networks practical."
  }
}, {
  lesson: {
    ar: "الدرس 7-2",
    en: "Lesson 7-2"
  },
  q: {
    ar: "أي من الخيارات التالية لا يُعد مجال تطبيق رئيسياً للتعلم العميق؟ (كتاب الوزارة ص 66)",
    en: "Which of the following is NOT a major application field of deep learning? (Textbook p. 76)"
  },
  opts: {
    ar: ["العمليات الحسابية البسيطة على الأعداد الصحيحة (Simple arithmetic on integers)", "التعرف على الصور (Image recognition)", "التعرف على الصوت / الكلام (Speech recognition)", "معالجة اللغة الطبيعية (Natural language processing)"],
    en: ["Simple arithmetic operations on integers", "Image recognition", "Speech recognition", "Natural language processing"]
  },
  a: 0,
  exp: {
    ar: "المجالات الثلاثة الكبرى للتعلم العميق هي الصور والصوت ومعالجة اللغة الطبيعية، أما الحساب البسيط فيتم بالبرمجة التقليدية.",
    en: "Image recognition, speech recognition, and NLP are the three major deep learning fields; simple arithmetic is not."
  }
},
// LESSON 7-3 (Questions 18 to 25)
{
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "كيف يولد نموذج اللغة (Language Model) الجمل والنصوص؟",
    en: "How does a Language Model generate sentences and text?"
  },
  opts: {
    ar: ["عن طريق تعلم أنماط اللغة من نصوص ضخمة وتكرار التنبؤ بالكلمة التالية (أو الرمز النصي التالي Next word/token) التي يُرجَّح ظهورها", "عن طريق نسخ ولصق فقرات كاملة من كتاب واحد فقط دون حساب احتمالات", "عن طريق التحقق المعملي من كل حقيقة علمية قبل نطق أي حرف", "عن طريق استخدام مخطط المستطيلات فقط"],
    en: ["By learning patterns from vast text and repeatedly predicting the next word (or token) that is statistically likely to follow", "By copying and pasting whole paragraphs from a single book without probabilities", "By laboratory-verifying every scientific fact before outputting a word", "By using only mosaic plots"]
  },
  a: 0,
  exp: {
    ar: "المبدأ الأساسي لنموذج اللغة هو التنبؤ المتكرر بالكلمة أو الرمز النصي التالي (Next word/token) الأكثر احتمالاً في السياق.",
    en: "A language model generates text step by step by repeatedly predicting the next statistically likely word/token."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "ما المقصود بظاهرة 'الهلوسة (Hallucination)' في الذكاء الاصطناعي التوليدي، ولماذا تحدث؟",
    en: "What is 'Hallucination' in generative AI, and why does it occur?"
  },
  opts: {
    ar: ["توليد معلومات لا تتطابق مع الحقائق بطريقة تبدو سلسة ومقنعة؛ وتحدث لأن النموذج يختار 'الكلمة المعقولة إحصائياً' وليس 'الكلمة الصحيحة واقعياً'", "توقف الحاسوب عن العمل بسبب ارتفاع حرارة المعالج", "رفض النموذج الإجابة عن الأسئلة السهلة", "تحويل الصور إلى أرقام"],
    en: ["Generating information that does not match facts in a fluent, convincing way; it occurs because the model selects the 'statistically plausible word' rather than the 'factually correct word'", "Computer shutdown due to overheating", "Model refusal to answer simple questions", "Converting images into numbers"]
  },
  a: 0,
  exp: {
    ar: "تحدث الهلوسة لأن النموذج يبحث عن الكلمة المعقولة إحصائياً في السياق اللغوي ولا يتحقق من الحقيقة الواقعية.",
    en: "Hallucination happens because the language model optimizes for statistical plausibility rather than factual truth."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "إلى أي عنصرين رئيسيين تشير كلمة 'كبير (Large)' في مصطلح 'نموذج اللغة الكبير (LLM)'؟ (كتاب الوزارة ص 69 و 71)",
    en: "What two main things does 'Large' refer to in 'Large Language Model (LLM)'? (Textbook pp. 79 & 81)"
  },
  opts: {
    ar: ["كمية بيانات التدريب الهائلة (Amount of training data) وعدد معلمات النموذج / الأوزان الضخم (Number of parameters)", "حجم شاشة الحاسوب ووزن لوحة المفاتيح", "طول السؤال الذي يكتبه المستخدم فقط", "عدد فصول المدرسة"],
    en: ["The vast amount of training data and the massive number of model parameters (weights)", "The physical size of the monitor and keyboard weight", "The length of the user's question only", "The number of school classrooms"]
  },
  a: 0,
  exp: {
    ar: "تشير كلمة 'كبير' في LLM إلى ضخامة كمية بيانات التدريب (مليارات/تريليونات الكلمات) وضخامة عدد المعلمات (مليارات/تريليونات الأوزان).",
    en: "'Large' in LLM refers to the massive amount of training data and the billions/trillions of parameters."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "ما الترتيب الصحيح للمراحل الثلاث في عملية الضبط بطريقة RLHF (التعلم المعزز من التغذية الراجعة البشرية)؟ (كتاب الوزارة ص 69 و 74)",
    en: "What is the correct 3-stage order of RLHF (Reinforcement Learning from Human Feedback)? (Textbook pp. 79 & 85)"
  },
  opts: {
    ar: ["التدريب الأولي (Initial training) ← التقييم البشري (Human evaluation) ← الضبط عبر التعلم المعزز (Tuning by reinforcement learning)", "التقييم البشري ← التدريب الأولي ← حذف الأوزان", "الضبط عبر التعلم المعزز ← التدريب الأولي ← التقييم البشري", "التجميع ← الانحدار ← اختبار مربع كاي"],
    en: ["Initial training → Human evaluation → Tuning by reinforcement learning", "Human evaluation → Initial training → Deleting weights", "Tuning by reinforcement learning → Initial training → Human evaluation", "Clustering → Regression → Chi-squared test"]
  },
  a: 0,
  exp: {
    ar: "يمر RLHF بـ 3 مراحل بالترتيب: (1) التدريب الأولي لبناء نموذج اللغة، (2) التقييم البشري للإجابات، (3) الضبط بالتعلم المعزز.",
    en: "RLHF stages: ① Initial training → ② Human evaluation → ③ Tuning by reinforcement learning."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "ما الهدف الرئيسي من ضبط نماذج اللغة الكبيرة بطريقة RLHF، وهل يقضي ذلك تماماً على الهلوسة؟",
    en: "What is the primary role of RLHF tuning in LLMs, and does it completely eliminate hallucination?"
  },
  opts: {
    ar: ["يجعل إجابات النموذج طبيعية ومهذبة ومطابقة لقصد المستخدم وأكثر أماناً، لكنه لا يقضي تماماً على الهلوسة لذا يظل التحقق من الحقائق ضرورياً", "يجعل النموذج يقول الحقيقة بنسبة 100% دائماً ويلغي الحاجة للتحقق من المصادر", "يحول النموذج إلى برنامج جداول بيانات", "يقلل عدد معلمات النموذج إلى الصفر"],
    en: ["It makes responses polite, natural, safe, and aligned with user intent, but it does NOT completely eliminate hallucination so fact-checking remains essential", "It guarantees 100% factual truth and removes the need for fact-checking", "It turns the LLM into a spreadsheet", "It reduces parameter count to zero"]
  },
  a: 0,
  exp: {
    ar: "RLHF يحسن ملاءمة الأسلوب والأمان ومطابقة قصد المستخدم، لكن النموذج يظل يتنبأ إحصائياً بالكلمات فقد يهلوس.",
    en: "RLHF aligns tone, helpfulness, and safety with human preferences, but statistical token prediction can still hallucinate."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "ما المصطلح الذي يصف قدرة نموذج ذكاء اصطناعي واحد على التعامل مع أنواع متعددة من البيانات (النص، الصور، الصوت، والفيديو)، وكيف يتم ذلك؟",
    en: "What term describes a single AI model handling multiple data types (text, images, audio, video), and how is it achieved?"
  },
  opts: {
    ar: ["تعدد الوسائط (Multimodality) — ويتم عن طريق تحويل كل نوع من البيانات إلى تمثيل عددي مشترك (Common numerical representation)", "الانحدار البسيط — ويتم عن طريق حذف الصور والصوت", "مشكلة الصندوق الأسود — ويتم عن طريق إخفاء المحاور", "التقدير النقطي — ويتم عن طريق حساب المتوسط فقط"],
    en: ["Multimodality — achieved by converting each type of data into a common numerical representation", "Simple regression — achieved by deleting images and audio", "Black-box problem — achieved by hiding axis labels", "Point estimation — achieved by averaging only"]
  },
  a: 0,
  exp: {
    ar: "تعدد الوسائط (Multimodality) يحول النص والصور والصوت والفيديو إلى تمثيل عددي مشترك يعالجه نموذج واحد.",
    en: "Multimodality maps text, images, audio, and video into a common numerical representation within one system."
  }
}, {
  lesson: {
    ar: "الدرس 7-3",
    en: "Lesson 7-3"
  },
  q: {
    ar: "أي من الخيارات التالية لا يُعد وصفاً مناسباً عند استخدام الذكاء الاصطناعي التوليدي؟ (كتاب الوزارة ص 74)",
    en: "Which option is NOT an appropriate description when using generative AI? (Textbook p. 85)"
  },
  opts: {
    ar: ["إذا كانت الجملة المتولدة طبيعية وسلسة، فيمكن الوثوق بمحتواها بوصفه صحيحاً دون مراجعة", "المعلومات المهمة التي يولدها الذكاء الاصطناعي يجب التحقق منها بمصادر موثوقة (Fact-checking)", "حتى مع الضبط بطريقة RLHF، لا تصبح الهلوسة صفراً", "نماذج الذكاء التوليدي الحديثة قادرة على التعامل مع وسائط متعددة"],
    en: ["If a generated sentence is natural and fluent, its content can be trusted as correct without verification", "Important information generated by AI must be fact-checked against reliable sources", "Even with RLHF tuning, hallucination does not become zero", "Modern generative AI models can handle multiple modalities"]
  },
  a: 0,
  exp: {
    ar: "الطلاقة اللغوية لا تضمن صحة المعلومات أبداً؛ يجب دائماً التحقق من الحقائق (Fact-checking) بمصادر موثوقة.",
    en: "Fluency never guarantees factual accuracy; always fact-check important claims with reliable sources."
  }
}, {
  lesson: {
    ar: "شامل الوحدة 7",
    en: "Unit 7 Synthesis"
  },
  q: {
    ar: "كيف تتكامل دروس الوحدة السابعة الثلاثة في بناء فهم شامل للتعلّم الآلي والذكاء الاصطناعي الحديث؟",
    en: "How do the three lessons of Unit 7 connect to form a complete understanding of modern ML and AI?"
  },
  opts: {
    ar: ["فهم أساسيات التعلم الآلي وأنواعه الثلاثة وقيود التحيز والصندوق الأسود (7-1) ← فهم كيف تبني الشبكات العصبية والتعلم العميق السمات هرمياً بتعديل الأوزان (7-2) ← فهم كيف تولد نماذج اللغة الكبيرة النصوص وتُضبط بـ RLHF وتعالج وسائط متعددة مع ضرورة التحقق من الهلوسة (7-3)", "الاعتماد الكلي على الذكاء الاصطناعي دون أي مراجعة بشرية أو تحقق من الحقائق", "استخدام التعلم العميق في جمع عددين صحيحين فقط", "إلغاء بيانات التدريب والأوزان تماماً"],
    en: ["Master ML basics, its 3 types, and human-in-the-loop cautions (7-1) → Understand how neural networks & deep learning train weights and build hierarchical features (7-2) → Understand LLM next-token generation, RLHF, multimodality, and fact-checking against hallucination (7-3)", "Rely blindly on AI outputs without human oversight or fact-checking", "Use deep learning exclusively for adding two integers", "Eliminate training data and weights completely"]
  },
  a: 0,
  exp: {
    ar: "تنتقل الوحدة السابعة من المبادئ الأساسية للتعلم الآلي (7-1) إلى محركه الأقوى في الشبكات العصبية والتعلم العميق (7-2) وصولاً إلى قمة تطبيقاته المعاصرة في نماذج اللغة الكبيرة والذكاء التوليدي (7-3).",
    en: "Unit 7 progresses from core ML paradigms (7-1) to neural networks & deep learning (7-2) and modern LLMs & multimodal generative AI (7-3)."
  }
}];
