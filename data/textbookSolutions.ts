import { SolutionItem } from '../types';

export const textbookSolutions: SolutionItem[] = [
  {
    id: "sol-1",
    num: "س1",
    page: "ص 31",
    title: {
      ar: "سؤال قانون مور وأهميته في صناعة الحاسبات",
      en: "Moore's Law & Semiconductor Industry"
    },
    question: {
      ar: "عرف قانون مور ووضح السبب الهندسي وراء تباطؤ نموه في السنوات الأخيرة والتحديات الفيزيائية المعاصرة.",
      en: "Define Moore's Law, explain the engineering reason behind its recent deceleration, and outline modern physical limits."
    },
    solution: {
      ar: "قانون مور هو ملاحظة تجريبية صاغها جوردون مور عام 1965 مفادها أن عدد الترانزستورات على شريحة الدائرة المتكاملة يتضاعف كل عامين تقريباً. يرجع تباطؤ النمو إلى الاقتراب من الحجم الذري للبوابات وشيوع ظاهرتي تيار التسرب والنفق الكمومي.",
      en: "Moore's Law is an empirical observation stating that transistor density doubles roughly every two years. Its deceleration stems from approaching sub-nanometer atomic dimensions, triggering severe leakage current and quantum tunneling."
    },
    rationale: {
      ar: "تعد أشباه الموصلات المعتمدة على السيليكون محدودة بذرات السيليكون نفسها، مما أجبر الصناعة على التوجه نحو الأنوية المتعددة ومسرعات الذكاء الاصطناعي.",
      en: "Silicon-based architectures reach physical limits at atomic resolution, forcing architectural pivots toward heterogeneous multi-core and AI acceleration."
    }
  },
  {
    id: "sol-2",
    num: "س2",
    page: "ص 32",
    title: {
      ar: "الفرق بين الذكاء الاصطناعي، التعلم الآلي، والتعلم العميق",
      en: "AI vs ML vs Deep Learning Hierarchy"
    },
    question: {
      ar: "قارن بين المصطلحات الثلاثة (AI, ML, DL) موضحاً العلاقة الهرمية والتضمنية بينها مع إعطاء مثال لكل مفهوم.",
      en: "Compare AI, Machine Learning, and Deep Learning, specifying their structural hierarchy and providing real-world examples for each."
    },
    solution: {
      ar: "1. الذكاء الاصطناعي (AI): المظلة الشاملة لكل النظم الذكية (مثل الترجمة الآلية).\n2. التعلم الآلي (ML): فرع داخل AI يستنتج الأنماط من البيانات دون برمجة صريحة (مثل فلترة Spam).\n3. التعلم العميق (DL): فرع متطور داخل ML يربط شبكات عصبية اصطناعية متعددة الطبقات (مثل التعرف على الوجوه بالأشعة).",
      en: "1. Artificial Intelligence (AI): Broad umbrella covering all smart systems (e.g., machine translation).\n2. Machine Learning (ML): Subset extracting statistical patterns from data (e.g., email spam filtering).\n3. Deep Learning (DL): Advanced ML subset using multi-layer artificial neural networks (e.g., face & medical vision)."
    },
    rationale: {
      ar: "توضح العلاقة احتواء المظلة الكبرى (AI) على التعلم الآلي، والذي بدوره يحتوي على التعلم العميق.",
      en: "Visualizing nested concentric boundaries clarifies how specialized DL techniques power modern foundation models."
    }
  },
  {
    id: "sol-3",
    num: "س3",
    page: "ص 33",
    title: {
      ar: "تشريح الشبكات العصبية الاصطناعية (ANN)",
      en: "Artificial Neural Network Anatomy"
    },
    question: {
      ar: "اذكر الطبقات الثلاث الأساسية للشبكة العصبية الاصطناعية ووضح وظيفة الأوزان (Weights) ودالة التنشيط (Activation Function).",
      en: "Identify the three structural layers of an ANN and detail the explicit roles of Weights and Activation Functions."
    },
    solution: {
      ar: "• طبقة الإدخال (Input Layer): تستقبل البيانات الخام دون حسابات.\n• الطبقات المخفية (Hidden Layers): تحسب الميزات وتعدل الأوزان.\n• طبقة الإخراج (Output Layer): تقدم النتيجة النهائية.\n• الأوزان: تحدد قوة تأثير الإشارة بين العصبونات، وتتعدل بالتدريب لتقليل الخطأ.",
      en: "• Input Layer: Ingests raw data values.\n• Hidden Layers: Process spatial/temporal features and refine weight matrices.\n• Output Layer: Produces probability distributions.\n• Weights: Scale signal propagation strength between neurons, optimized during training to minimize loss."
    },
    rationale: {
      ar: "التسمية الصريحة للطبقات ضرورية للفهم الهندسي لكيفية تحويل البيانات من ميزات خام إلى قرارات دقيقة.",
      en: "Explicit naming of input, hidden, and output components clarifies how raw signals convert to accurate predictions."
    }
  },
  {
    id: "sol-4",
    num: "س4",
    page: "ص 34",
    title: {
      ar: "القضايا الأخلاقية ومبادئ الذكاء الاصطناعي الأربعة",
      en: "AI Ethics & 4 Core Principles"
    },
    question: {
      ar: "اشرح المبادئ الأخلاقية الأربعة (العدالة، الشفافية، المساءلة، الخصوصية) وبيّن أسباب خطورة التحيز الخوارزمي.",
      en: "Explain the four ethical principles (Fairness, Transparency, Accountability, Privacy) and articulate risks of algorithmic bias."
    },
    solution: {
      ar: "1. العدالة: منع التمييز وتوفير فرص متكافئة.\n2. الشفافية: توضيح طريقة عمل النظام ومصادر بياناته.\n3. المساءلة: تحديد من يتحمل المسؤولية القانونية والأخلاقية عن القرارات.\n4. الخصوصية: حماية بيانات المستخدمين.\n• خطورة التحيز الخوارزمي: يرجع لبيانات التدريب المتحيزة ويؤدي لقرارات تمييزية غير عادلة.",
      en: "1. Fairness: Prevents unjust discrimination.\n2. Transparency: Discloses operational mechanisms and datasets.\n3. Accountability: Establishes moral/legal answerability.\n4. Privacy: Protects personal data integrity.\n• Algorithmic Bias Risks: Replicates historic human prejudices when trained on skewed data."
    },
    rationale: {
      ar: "الالتزام بهذه المبادئ يحمي فئات المجتمع ويضمن أمان واعتماد التطبيقات الذكية في الحياة اليومية.",
      en: "Enforcing rigorous ethical governance builds public trust and mitigates high-stakes harms."
    }
  },
  {
    id: "sol-5",
    num: "س5",
    page: "ص 35",
    title: {
      ar: "الذكاء الاصطناعي القابل للتفسير (XAI) والهلوسة",
      en: "Explainable AI (XAI) & GenAI Hallucination"
    },
    question: {
      ar: "ما المقصود بـ XAI وكيف يسهم في حل مشكلة الصندوق الأسود؟ وكيف نتعامل مع هلوسة الذكاء التوليدي؟",
      en: "Define Explainable AI (XAI), explain how it addresses the Black-Box problem, and specify mitigations against GenAI hallucination."
    },
    solution: {
      ar: "• XAI: هو الذكاء الاصطناعي القابل للتفسير، والذي يقدم تبريرات واضحة ومفهومة للبشر لكيفية اتخاذ القرار، مكسراً غموض الصندوق الأسود.\n• الوقاية من الهلوسة: التحقق المزدوج المستقل (Cross-checking) من مصادر موثوقة وعدم اعتماد الإجابات التوليدية دون مراجعة إنسانية.",
      en: "• XAI: Techniques offering transparent human-interpretable rationale behind model outputs, opening up black-box models.\n• Hallucination Mitigation: Mandatory independent cross-verification against authoritative documents and human-in-the-loop oversight."
    },
    rationale: {
      ar: "التحقق البشري المستقل خط دفاع جوهري لحماية القرارات في القطاعات الحساسة مثل الطب والقضاء.",
      en: "Human verification remains essential for high-stakes decisions in medicine, finance, and law."
    }
  }
];
