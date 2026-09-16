import { EraItem, MooreItem, RingItem, HallucinationItem } from '../types';

export const eraTexts: EraItem[] = [
  {
    ar: "<strong>1940s – 1960s: الحواسيب الأولى واللمبات الزجاجية (ENIAC)</strong><br>• <strong>التقنية:</strong> الصمامات المفرغة (Vacuum Tubes).<br>• <strong>الأبعاد:</strong> كان حاسوب ENIAC يزن 30 طناً ويشغل غرفة بمساحة 167 متراً مربعاً.<br>• <strong>الاستخدام:</strong> عسكري بحت وحسابات شفرات وتتبع مقذوفات مدفعية للجيش الأمريكي.",
    en: "<strong>1940s – 1960s: First Electronic Computers (ENIAC)</strong><br>• <strong>Core Tech:</strong> Vacuum Tubes.<br>• <strong>Scale:</strong> ENIAC weighed 30 tons, occupying a 167m² room.<br>• <strong>Application:</strong> Military computation, artillery trajectories, and wartime codebreaking."
  },
  {
    ar: "<strong>1970s – 1980s: ثورة الحواسب الشخصية (PCs) والمعالجات الدقيقة</strong><br>• <strong>التقنية:</strong> المعالجات الدقيقة والشرائح الإلكترونية (Intel 4004, Apple II, IBM PC).<br>• <strong>التحول:</strong> انتقال الحاسب من المؤسسات العسكرية إلى غرف المعيشة والمكاتب والمدارس.<br>• <strong>الأثر:</strong> ولادة صناعة البرمجيات وتطبيقات معالجة الكلمات وجداول البيانات.",
    en: "<strong>1970s – 1980s: Personal Computers (PCs) & Microprocessors</strong><br>• <strong>Core Tech:</strong> Microprocessors (Intel 4004, Apple II, IBM PC).<br>• <strong>Impact:</strong> Bringing computing from military labs into homes, classrooms, and offices."
  },
  {
    ar: "<strong>1990s: تسويق الإنترنت والشبكة العنكبوتية العالمية (WWW)</strong><br>• <strong>التقنية:</strong> إتاحة الإنترنت تجارياً، وظهور المتصفحات والبريد الإلكتروني ومحركات البحث الأولى.<br>• <strong>التحول:</strong> عولمة المعلومات وسرعة تبادل الأخبار وكسر الحدود الجغرافية بين الدول.<br>• <strong>الأثر:</strong> تأسيس التجارة الإلكترونية ومواقع الشركات الدولية.",
    en: "<strong>1990s: Commercialization of the Internet & World Wide Web</strong><br>• <strong>Core Tech:</strong> Commercial ISPs, Web Browsers, HTTP, Email.<br>• <strong>Impact:</strong> Globalization of information, cross-border digital communication, early e-commerce."
  },
  {
    ar: "<strong>2000s: ثورة الهواتف الذكية والإنترنت النقال الدائم</strong><br>• <strong>التقنية:</strong> الهواتف الذكية بشاشات اللمس والمتاجر الرقمية (App Store, Google Play).<br>• <strong>التحول:</strong> تحول الإنترنت إلى رفيق دائم في جيب كل إنسان طوال 24 ساعة.<br>• <strong>الأثر:</strong> نشأة شبكات التواصل الاجتماعي الكبرى والتصوير الفوري ومشاركة اللحظات.",
    en: "<strong>2000s: Smartphone & Mobile Internet Revolution</strong><br>• <strong>Core Tech:</strong> Touchscreen smartphones and digital app stores.<br>• <strong>Impact:</strong> Persistent 24/7 internet connectivity in pockets, birth of mobile social networks."
  },
  {
    ar: "<strong>2010s Onward: الحوسبة السحابية وتحليل البيانات والذكاء الاصطناعي</strong><br>• <strong>التقنية:</strong> الخوادم السحابية الضخمة (Cloud Hyperscalers)، البيانات الضخمة (Big Data)، وتدريب نماذج التعلم العميق.<br>• <strong>التحول:</strong> تحول تكنولوجيا المعلومات إلى خدمة (IT as a Service) تُستأجر حسب الطلب.<br>• <strong>الأثر:</strong> تشغيل تطبيقات الذكاء التوليدي والسيارات ذاتية القيادة والمساعدات الذكية.",
    en: "<strong>2010s Onward: Cloud Computing, Big Data & Generative AI</strong><br>• <strong>Core Tech:</strong> Hyperscale cloud, distributed Big Data pipelines, Deep Neural Networks.<br>• <strong>Impact:</strong> IT as an on-demand utility (ITaaS), fueling modern foundation models and autonomous systems."
  }
];

export const mooreTable: MooreItem[] = [
  { y: "1971", c: "Intel 4004 (1971)", t: "2,300" },
  { y: "1978", c: "Intel 8086 (1978)", t: "29,000" },
  { y: "1989", c: "Intel 80486 (1989)", t: "1,200,000" },
  { y: "2000", c: "Pentium 4 (2000)", t: "42,000,000" },
  { y: "2010", c: "Intel Core i7 (2010)", t: "1,170,000,000" },
  { y: "2024", c: "Apple M3 Max / Nvidia H100 (2024)", t: "92,000,000,000+" }
];

export const ringData: Record<string, RingItem> = {
  ai: {
    ar: "<strong>1. الذكاء الاصطناعي (AI):</strong><br>المجال الأوسع الشامل للأنظمة الحاسوبية التي تحاكي السلوك البشري الذكي (التعلم، التنبؤ، التعرف، اتخاذ القرار، وتوليد المحتوى). معظمه اليوم ضيق النطاق (Narrow AI).<br><em>أمثلة: التعرف على الكلام والصور، والترجمة الآلية.</em>",
    en: "<strong>1. Artificial Intelligence (AI):</strong><br>The broad umbrella domain reproducing human cognitive capabilities on computers. Most modern models are Narrow AI.<br><em>Examples: Speech recognition, image perception, machine translation.</em>"
  },
  ml: {
    ar: "<strong>2. التعلّم الآلي (ML):</strong><br>فرع رئيسي تتعلم فيه النماذج أنماطاً من البيانات للتنبؤ والتصنيف، بدلاً من برمجة كل قاعدة يدوياً.<br><em>أمثلة: فلترة الرسائل المزعجة (Spam filters) وتوصيات المنتجات.</em>",
    en: "<strong>2. Machine Learning (ML):</strong><br>Core paradigm where algorithms extract underlying statistical patterns from datasets without hand-written rule trees.<br><em>Examples: Email spam filtering, e-commerce recommenders.</em>"
  },
  dl: {
    ar: "<strong>3. التعلم العميق (DL):</strong><br>أسلوب متطور ضمن التعلم الآلي يعتمد على شبكات عصبية اصطناعية متعددة الطبقات (ANN) وبيانات ضخمة لتعلم تمثيلات معقدة.<br><em>أمثلة: تحليل صور الأشعة الطبية، وكشف المشاة في القيادة الذاتية.</em>",
    en: "<strong>3. Deep Learning (DL):</strong><br>Uses multi-layered artificial neural networks (ANN) on big data to learn hierarchical representations.<br><em>Examples: Medical image diagnosis, autonomous driving vision.</em>"
  },
  genai: {
    ar: "<strong>4. الذكاء التوليدي (GenAI):</strong><br>أنظمة حديثة لا تكتفي بتصنيف البيانات، بل تُنشئ محتوى جديداً بالكامل (نصوص، صور، صوت، كود) اعتماداً على التعلم العميق.<br><em>أمثلة: ChatGPT، وأدوات توليد الصور (Midjourney/DALL-E).</em>",
    en: "<strong>4. Generative AI (GenAI):</strong><br>Models creating novel, original content (text, images, audio, code) by leveraging deep learning.<br><em>Examples: ChatGPT, text-to-image synthesis (Midjourney).</em>"
  }
};

export const halData: Record<number, HallucinationItem> = {
  1: {
    ar: {
      gen: "محطة 'أهرامات الجيزة الفضائية' شيدت في مارس 2021 لربط هضبة الهرم بمحطة الفضاء عبر خط سكك حديد كهرومغناطيسي رأسي!",
      truth: "🚨 هلوسة واختلاق كلي! لا يوجد قطار فضائي في الأهرامات؛ صاغ الذكاء التوليدي خرافة بأسلوب واثق وفصيح جداً نتيجة التنبؤ الإحصائي اللفظي."
    },
    en: {
      gen: "The 'Giza Pyramids Space Train Central' station opened in March 2021 linking Giza to low Earth orbit with an electromagnetic vertical elevator!",
      truth: "🚨 Pure Hallucination! No space train exists; GenAI authored an eloquent, confident falsehood based on statistical token prediction."
    }
  },
  2: {
    ar: {
      gen: "أكدت دراسة طبية بمعهد فيينا عام 2019 أن تناول حمض الستريك المركز في 10 ليمونات في دقيقة يشفي الحساسية فورياً.",
      truth: "🚨 هلوسة طبية مضللة وخطيرة! شرب حمض مركز بهذه الكمية يسبب تقرحات والتهابات حادة، ولا توجد دراسة بهذا الشأن."
    },
    en: {
      gen: "A 2019 Vienna study proved that consuming concentrated citric acid in 10 lemons within 1 minute immediately cures respiratory allergies.",
      truth: "🚨 Dangerous Medical Hallucination! No such study exists; consuming high acidity causes acute stomach ulceration."
    }
  }
};
