export interface LocalizedText { ar: string; en: string; }

export interface Question {
  q: LocalizedText;
  opts: { ar: string[]; en: string[] };
  a: number;
  exp: LocalizedText;
  ref?: string;
  lesson?: LocalizedText;
}

export const lesson51Questions: Question[] = [{
  q: {
    ar: "ما اسم البيانات التي تُجمع حديثاً ومباشرة لتناسب غرضاً محدداً؟ (كتاب الوزارة ص 8 / تدرّب 1-1)",
    en: "What is the term for data that is newly collected to fit a specific purpose? (Textbook p. 8 / Try 1.1)"
  },
  opts: {
    ar: ["البيانات الأولية (Primary data)", "البيانات الثانوية (Secondary data)", "البيانات المكررة (Duplicate data)", "تحيز الاستجابة"],
    en: ["Primary data", "Secondary data", "Duplicate data", "Response bias"]
  },
  a: 0,
  exp: {
    ar: "البيانات الأولية (Primary data) هي البيانات التي يجمعها الباحث حديثاً ومباشرة لغرض التحليل الحالي مثل الاستبيانات والمقابلات والتجارب.",
    en: "Primary data is newly collected fresh to fit a specific purpose (surveys, interviews, observations, experiments)."
  },
  ref: "كتاب المدرسة ص 5 و 8 / p. 5"
}, {
  q: {
    ar: "ما اسم البيانات الموجودة مسبقاً والتي جُمعت ونُشرت من قِبل آخرين ويعاد استخدامها في التحليل؟ (كتاب الوزارة ص 8 / تدرّب 1-2)",
    en: "What is the term for data that has already been collected and made public by others, and is used in analysis? (Textbook p. 8 / Try 1.2)"
  },
  opts: {
    ar: ["البيانات الثانوية (Secondary data)", "البيانات الأولية (Primary data)", "القيم الشاذة (Outliers)", "المسح الشامل"],
    en: ["Secondary data", "Primary data", "Outliers", "Complete survey"]
  },
  a: 0,
  exp: {
    ar: "البيانات الثانوية (Secondary data) هي بيانات موجودة مسبقاً جُمعت لغرض سابق أو من قِبل جهات أخرى (مثل الإحصاءات الحكومية والبيانات المفتوحة).",
    en: "Secondary data has already been collected and published by others (government statistics, open datasets, industry reports)."
  },
  ref: "كتاب المدرسة ص 5 و 8 / p. 5"
}, {
  q: {
    ar: "ما مصطلح اختيار عينة من مجتمع إحصائي؟ وماذا نسمي دراسة المجتمع الإحصائي بأكمله؟ (كتاب الوزارة ص 6 و 8)",
    en: "What is the term for selecting a sample from a population, and what is surveying the entire population called? (Textbook pp. 6 & 8)"
  },
  opts: {
    ar: ["أخذ العينات (Sampling) — ودراسة الكل تسمى المسح الشامل أو التعداد (Complete survey / Census)", "التحويل المحوري — ودراسة الكل تسمى عينة", "التعويض — ودراسة الكل تسمى تحيزاً", "التوحيد القياسي"],
    en: ["Sampling — and surveying the entire population is a Complete survey (Census)", "Pivoting — and surveying the whole is a sample", "Imputation", "Standardization"]
  },
  a: 0,
  exp: {
    ar: "استخراج جزء من المجتمع الإحصائي لتحليله يُسمى أخذ العينات (Sampling)، وفحص المجتمع كله يُسمى المسح الشامل أو التعداد (Census).",
    en: "Selecting a sample from the population is sampling; surveying the entire population is a complete survey (census)."
  },
  ref: "كتاب المدرسة ص 6 و 8 / p. 6"
}, {
  q: {
    ar: "ما مصطلح كون طريقة اختيار العينة متحيزة ولا تعكس بشكل صحيح الحالة الفعلية للمجتمع الإحصائي؟ (كتاب الوزارة ص 8 / تدرّب 1-4)",
    en: "What is the term for when the method of selecting a sample is biased and does not correctly reflect the population? (Textbook p. 8 / Try 1.4)"
  },
  opts: {
    ar: ["تحيز أخذ العينات / تحيز المعاينة (Sampling bias)", "المعاينة الطبقية (Stratified sampling)", "المعاينة العشوائية البسيطة", "التحويل الكمي"],
    en: ["Sampling bias", "Stratified sampling", "Simple random sampling", "Normalization"]
  },
  a: 0,
  exp: {
    ar: "تحيز أخذ العينات (Sampling bias) يحدث عندما تكون طريقة اختيار العينة منحازة، مما يجعل النتائج غير قابلة للتعميم على المجتمع ككل.",
    en: "Sampling bias occurs when the sample selection method is skewed, making conclusions inapplicable to the whole population."
  },
  ref: "كتاب المدرسة ص 6 و 8 / p. 6"
}, {
  q: {
    ar: "من الخيارات التالية، اختر الأنسب كطريقة لجمع بيانات أولية (Primary data): (كتاب الوزارة ص 8 / تدرّب 2-1)",
    en: "Choose the option that is most appropriate as a method of collecting primary data: (Textbook p. 8 / Try 2.1)"
  },
  opts: {
    ar: ["إنشاء استبيان يناسب غرض المرء الخاص وجمع الردود", "استخدام بيانات إحصائية نشرتها جهة حكومية", "الاستشهاد بأرقام من تقرير صادر عن جمعية صناعية", "استخدام بيانات استطلاع من دراسة أجراها شخص آخر سابقاً كما هي"],
    en: ["Create a survey to fit one's own purpose and collect responses", "Use statistical data published by a government agency", "Cite figures from a report issued by an industry association", "Use survey data from an earlier study conducted by someone else"]
  },
  a: 0,
  exp: {
    ar: "تصميم استبيان خاص وجمع الردود مباشرة هو جمع لبيانات أولية، بينما الخيارات الثلاثة الأخرى هي إعادة استخدام لبيانات ثانوية.",
    en: "Creating your own survey and collecting fresh responses gathers primary data; the other three reuse secondary data."
  },
  ref: "كتاب المدرسة ص 8 / p. 8"
}, {
  q: {
    ar: "عند دراسة وقت الدراسة لدى جميع طلاب مدرسة مع مراعاة الفروق في الاتجاهات بين الصفوف الدراسية، ما طريقة أخذ العينات الأنسب؟ (كتاب الوزارة ص 8 / تدرّب 2-2)",
    en: "When investigating study time across a school while accounting for differences between grades, which sampling method fits best? (Textbook p. 8 / Try 2.2.a)"
  },
  opts: {
    ar: ["المعاينة الطبقية (Stratified sampling)", "المعاينة العشوائية البسيطة (Simple random sampling)", "تحيز الاختيار الذاتي", "تحيز الوقت والموقع"],
    en: ["Stratified sampling", "Simple random sampling", "Self-selection bias", "Time/location bias"]
  },
  a: 0,
  exp: {
    ar: "المعاينة الطبقية تقسم المجتمع إلى طبقات (مثل الصفوف الدراسية أو العمر أو الجنس) وتختار عشوائياً من كل طبقة لضمان تمثيل الفروق.",
    en: "Stratified sampling divides the population into strata (such as grades) and randomly selects from each stratum."
  },
  ref: "كتاب المدرسة ص 6 و 8 / p. 8"
}, {
  q: {
    ar: "أي من الخيارات التالية يمثل حالة حدث فيها تحيز في أخذ العينات (Sampling bias)؟ (كتاب الوزارة ص 8 / تدرّب 2-3)",
    en: "Choose the option that is most appropriate as an example in which sampling bias has occurred: (Textbook p. 9 / Try 2.3)"
  },
  opts: {
    ar: ["مقابلة المارة أمام المحطة في بعد ظهيرة أيام الأسبوع والإبلاغ عن النتائج باعتبارها 'آراء جميع المواطنين'", "مسح 100 طالب اختيروا عشوائياً من جميع طلاب المدرسة بالقرعة", "تقسيم جميع السكان إلى طبقات عمرية ومسح عينة عشوائية من كل طبقة", "تصميم صياغة سؤال الاستطلاع بعناية بحيث يجيب المستجيبون بصدق"],
    en: ["Approaching passers-by in front of the station on weekday afternoons and reporting results as 'opinions of all citizens'", "Surveying 100 students randomly chosen by drawing lots", "Dividing residents into age strata and randomly sampling each", "Designing question wording carefully for truthful answers"]
  },
  a: 0,
  exp: {
    ar: "إجراء الاستطلاع أمام محطة في ظهيرة يوم عمل يسبب تحيز الوقت/الموقع لأنه يستبعد الموظفين والطلاب الموجودين في أعمالهم ومدارسهم.",
    en: "Surveying at a station on weekday afternoons causes time/location bias by missing office workers and students."
  },
  ref: "كتاب المدرسة ص 7 و 8 / p. 9"
}, {
  q: {
    ar: "في استطلاع عبر الويب يستجيب فيه فقط من لديهم اهتمام عالٍ بالموضوع، ماذا يُسمى هذا النوع من التحيز؟ (كتاب الوزارة ص 7)",
    en: "In a web survey where only people with high interest respond, what type of bias is this? (Textbook p. 7)"
  },
  opts: {
    ar: ["تحيز الاختيار الذاتي (Self-selection bias)", "تحيز الاستجابة (Response bias)", "المعاينة الطبقية", "المسح الشامل"],
    en: ["Self-selection bias", "Response bias", "Stratified sampling", "Complete survey"]
  },
  a: 0,
  exp: {
    ar: "تحيز الاختيار الذاتي (Self-selection bias) ينتج عن استجابة من يرغبون في الاستجابة فقط مثل استطلاعات الإنترنت المفتوحة.",
    en: "Self-selection bias is caused by only those who want to respond actually responding."
  },
  ref: "كتاب المدرسة ص 7 / p. 7"
}, {
  q: {
    ar: "عندما يبلغ الطلاب في استبيان عن 'وقت دراسة' أطول مما كان عليه فعلياً ليبدو الأمر مرغوباً، ماذا يُسمى هذا الانحراف؟ (كتاب الوزارة ص 7)",
    en: "When surveyed students report a 'study time' longer than it really was to look desirable, what is this called? (Textbook p. 7)"
  },
  opts: {
    ar: ["تحيز الاستجابة (Response bias — خطأ في القياس وطريقة الإجابة)", "تحيز الوقت والموقع", "المعاينة العشوائية البسيطة", "بيانات ثانوية"],
    en: ["Response bias (measurement error in how respondents answer)", "Time/location bias", "Simple random sampling", "Secondary data"]
  },
  a: 0,
  exp: {
    ar: "تحيز الاستجابة (Response bias) لا يتعلق بمن تم اختيارهم، بل بكيفية إجابتهم عندما يختارون إجابات تبدو مرغوبة بدلاً من دقيقة.",
    en: "Response bias concerns how those surveyed answer—giving socially desirable answers rather than accurate ones."
  },
  ref: "كتاب المدرسة ص 7 / p. 7"
}, {
  q: {
    ar: "أي من الخيارات التالية لا يُعد طريقة مناسبة لتقليل تحيز أخذ العينات؟ (كتاب الوزارة ص 10 / تمرين 3-3)",
    en: "Which option is NOT appropriate as a way to reduce sampling bias? (Textbook p. 11 / Exercise 3.3)"
  },
  opts: {
    ar: ["تقييد توقيت وموقع الاستطلاع، وجمع الردود فقط من أشخاص في ظروف محددة", "اختيار المشاركين دون تحيز من المجتمع الإحصائي بأكمله", "اختيار العينة مع مراعاة طبقات المجتمع الإحصائي (الفئة العمرية، الجنس، إلخ)", "تصميم صياغة أسئلة الاستطلاع بحيث يستطيع المستجيبون الإجابة بصدق"],
    en: ["Limit the timing and location of the survey, and gather responses only from people in specific conditions", "Choose subjects without bias from the entire population", "Choose the sample taking into account population strata", "Design question wording so respondents can answer truthfully"]
  },
  a: 0,
  exp: {
    ar: "تقييد توقيت وموقع الاستطلاع يزيد من تحيز الوقت/الموقع ولا يقلله!",
    en: "Limiting the timing and location of a survey causes time/location bias rather than reducing it."
  },
  ref: "كتاب المدرسة ص 10 / p. 11"
}];

export const lesson52Questions: Question[] = [{
  q: {
    ar: "ما المصطلح الذي يشير إلى المعالجة التي تملأ الأجزاء المفقودة من البيانات بقيم مثل المتوسط أو الوسيط؟ (كتاب الوزارة ص 16 / تدرّب 1-1)",
    en: "What is the term for filling in missing parts of data with values such as the mean or median? (Textbook p. 17 / Try 1.1)"
  },
  opts: {
    ar: ["التعويض (Imputation)", "الحذف (Deletion)", "وضع علامة (Flagging)", "التحويل المحوري (Pivot)"],
    en: ["Imputation", "Deletion", "Flagging", "Pivot"]
  },
  a: 0,
  exp: {
    ar: "التعويض (Imputation) هو تقدير قيمة بديلة لملء الخلايا الفارغة مثل المتوسط الحسابي أو الوسيط.",
    en: "Imputation fills in missing values with representative figures such as the mean or median."
  },
  ref: "كتاب المدرسة ص 13 و 16 / p. 14"
}, {
  q: {
    ar: "ما المصطلح الذي يشير إلى المعالجة التي تحوّل البيانات إلى نطاق من 0 إلى 1 لمواءمة الوحدات المختلفة؟ (كتاب الوزارة ص 16 / تدرّب 1-2)",
    en: "What is the term for processing that converts data to a range from 0 to 1? (Textbook p. 17 / Try 1.2)"
  },
  opts: {
    ar: ["التحويل الكمي / تحجيم Min-Max (Normalization)", "التوحيد القياسي (Standardization)", "الربط (Join)", "الحذف (Deletion)"],
    en: ["Normalization (Min-Max scaling)", "Standardization", "Join", "Deletion"]
  },
  a: 0,
  exp: {
    ar: "التحويل الكمي (Normalization / Min-Max) يعيد ضبط مقياس المتغيرات لتقع جميعها في النطاق من 0 إلى 1.",
    en: "Normalization rescales data into a 0 to 1 range so variables with different units can be compared."
  },
  ref: "كتاب المدرسة ص 14 و 16 / p. 15"
}, {
  q: {
    ar: "ما المصطلح الذي يشير إلى المعالجة التي تحوّل البيانات إلى صيغة متوسطها 0 وانحرافها المعياري 1؟ (كتاب الوزارة ص 16 / تدرّب 1-3)",
    en: "What is the term for processing that converts data to a form with mean 0 and standard deviation 1? (Textbook p. 17 / Try 1.3)"
  },
  opts: {
    ar: ["التوحيد القياسي (Standardization)", "التحويل الكمي (Normalization)", "التجميع (Aggregation)", "توحيد التاريخ"],
    en: ["Standardization", "Normalization", "Aggregation", "Date unification"]
  },
  a: 0,
  exp: {
    ar: "التوحيد القياسي (Standardization) يطرح المتوسط ويقسم على الانحراف المعياري ليصبح المتوسط 0 والانحراف المعياري 1.",
    en: "Standardization converts data to have mean 0 and standard deviation 1."
  },
  ref: "كتاب المدرسة ص 14 و 16 / p. 15"
}, {
  q: {
    ar: "ما المصطلح الذي يشير إلى العملية التي تربط مجموعات بيانات متعددة عبر عنصر أو مفتاح مشترك؟ (كتاب الوزارة ص 16 / تدرّب 1-4)",
    en: "What is the term for the operation that connects multiple datasets via a common item? (Textbook p. 17 / Try 1.4)"
  },
  opts: {
    ar: ["الربط (Join)", "التحويل المحوري (Pivot)", "التجميع (Aggregation)", "وضع علامة (Flagging)"],
    en: ["Join", "Pivot", "Aggregation", "Flagging"]
  },
  a: 0,
  exp: {
    ar: "عملية الربط (Join) تدمج بيانات من جداول متعددة باستخدام مفتاح مشترك مثل 'رقم الطالب'.",
    en: "Join connects multiple datasets into one table via a common key such as student ID."
  },
  ref: "كتاب المدرسة ص 14 و 16 / p. 16"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي لا يُعد استجابة مناسبة للقيم المفقودة: (كتاب الوزارة ص 16 / تدرّب 2-1)",
    en: "Choose the option that is NOT an appropriate response to missing values: (Textbook p. 17 / Try 2.1)"
  },
  opts: {
    ar: ["التعويض بالمتوسط وتحليل البيانات في العناصر التي يكون معظم بياناتها مفقوداً", "حذف الصفوف عندما تكون القيم المفقودة قليلة والتأثير صغيراً", "ملء الأجزاء المفقودة بالمتوسط عندما تكون مبعثرة عشوائياً دون تحيز", "ترك علامة تشير إلى أن القيمة كانت مفقودة عندما يكون للغياب نفسه معنى"],
    en: ["Impute the mean and analyze data on items where most of the data is missing", "Delete rows when missing values are few and impact is small", "Impute the mean when missing values are scattered randomly", "Leave a marker (flag) when missingness itself has meaning"]
  },
  a: 0,
  exp: {
    ar: "تعويض المتوسط في عمود معظم بياناته مفقودة ينتج قيماً مصطنعة بعيدة عن الواقع ويشوه التحليل.",
    en: "Imputing the mean when most of a column is missing invents unrealistic data and distorts trends."
  },
  ref: "كتاب المدرسة ص 13 و 16 / p. 17"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي يصف التعامل مع القيم الشاذة (Outliers) بأكبر قدر من الدقة: (كتاب الوزارة ص 16 / تدرّب 2-3)",
    en: "Choose the option that most appropriately describes the handling of outliers: (Textbook p. 18 / Try 2.3)"
  },
  opts: {
    ar: ["بالنسبة للقيم الشاذة، حدّد السبب أولاً؛ صحّحها أو احذفها إذا كانت ناتجة عن أخطاء إدخال، واحتفظ بها من حيث المبدأ إذا كانت تعكس الواقع", "جميع القيم الشاذة أخطاء في البيانات، لذا احذفها كلها فور اكتشافها", "القيم الشاذة لا تؤثر على التحليل، لذا لا حاجة لمعالجة خاصة", "يمكن دائماً حل القيم الشاذة عن طريق استبدالها بالمتوسط"],
    en: ["For outliers, identify the cause first; correct or delete them if due to input errors, and in principle keep them if they reflect reality", "Outliers are all errors, so delete all of them immediately", "Outliers do not affect analysis, so no handling is needed", "Outliers can always be resolved by replacing them with the mean"]
  },
  a: 0,
  exp: {
    ar: "القيم الشاذة ليست كلها أخطاء؛ يجب فحص سببها أولاً، فنحذف أو نصحح أخطاء الإدخال ونحتفظ بالقيم الحقيقية.",
    en: "Outliers may be input errors (abnormal values) or genuine events; always check the cause first."
  },
  ref: "كتاب المدرسة ص 13 و 16 / p. 18"
}, {
  q: {
    ar: "ما الذي يمثل 'تحويل نوع البيانات (Data type conversion)' من بين الخيارات التالية؟ (كتاب الوزارة ص 18 / تمرين 3-1)",
    en: "Which option corresponds to data type conversion? (Textbook p. 20 / Exercise 3.1)"
  },
  opts: {
    ar: ["توحيد صيغ التاريخ مثل '2026/4/1' و '01 Apr 2026' إلى '2026-04-01'", "ملء القيم المفقودة بالمتوسط", "مواءمة مقاييس الطول والوزن إلى نطاق بين 0 و 1", "تجميع المبيعات اليومية في إجماليات شهرية"],
    en: ["Standardizing notations such as '2026/4/1' and '01 Apr 2026' into '2026-04-01'", "Filling in missing values with the mean", "Aligning the scales of height and weight to between 0 and 1", "Aggregating daily sales into monthly totals"]
  },
  a: 0,
  exp: {
    ar: "توحيد صيغ التاريخ وتحويل النصوص الرقمية إلى أرقام وتوحيد الترميز كلها أمثلة على تحويل نوع البيانات.",
    en: "Unifying date notations, converting strings to numbers, and unifying notation are data type conversions."
  },
  ref: "كتاب المدرسة ص 13 و 18 / p. 20"
}, {
  q: {
    ar: "أي خيار يصف التحويل الكمي (Normalization) والتوحيد القياسي (Standardization) بأكبر قدر من الدقة؟ (كتاب الوزارة ص 18 / تمرين 3-2)",
    en: "Which option most appropriately describes normalization and standardization? (Textbook p. 20 / Exercise 3.2)"
  },
  opts: {
    ar: ["يُستخدم التحويل الكمي (Normalization) لمواءمة البيانات ذات الوحدات المختلفة في صورة قابلة للمقارنة (من 0 إلى 1)", "التحويل الكمي يحوّل البيانات إلى متوسط 0 وانحراف معياري 1", "التوحيد القياسي يحوّل البيانات إلى نطاق من 0 إلى 1", "يُستخدم التوحيد القياسي لتكبير مقياس المتغيرات"],
    en: ["Normalization is used to align data with different units into a comparable form (0 to 1)", "Normalization converts data to mean 0 and SD 1", "Standardization converts data to a range from 0 to 1", "Standardization is used to enlarge the scale of variables"]
  },
  a: 0,
  exp: {
    ar: "التحويل الكمي (Normalization) يضبط القيم بين 0 و 1 لمقارنة المتغيرات ذات الوحدات المختلفة، بينما التوحيد القياسي يجعل المتوسط 0 والانحراف 1.",
    en: "Normalization rescales to 0–1 to align different units; Standardization rescales to mean 0 and SD 1."
  },
  ref: "كتاب المدرسة ص 14 و 18 / p. 20"
}, {
  q: {
    ar: "ما اسم عملية إعادة التشكيل التي تحوّل مبيعات المنتجات اليومية المرتبة عمودياً إلى صورة جدول متقاطع 'التاريخ × المنتج'؟ (كتاب الوزارة ص 18 / تمرين 3-3)",
    en: "Which reshaping operation turns vertical daily product sales into a 'date × product' cross-tabulated table? (Textbook p. 20 / Exercise 3.3.c)"
  },
  opts: {
    ar: ["التحويل المحوري / المحور (Pivot)", "الربط (Join)", "التجميع (Aggregation)", "التعويض (Imputation)"],
    en: ["Pivot", "Join", "Aggregation", "Imputation"]
  },
  a: 0,
  exp: {
    ar: "التحويل المحوري (Pivot) يعيد تشكيل البيانات الطولية إلى جدول متقاطع من صفوف وأعمدة (التاريخ × المنتج).",
    en: "Pivoting reshapes vertically arranged long-format data into a row × column cross-tabulation."
  },
  ref: "كتاب المدرسة ص 14 و 18 / p. 20"
}, {
  q: {
    ar: "إذا كانت بيانات الطول تتراوح من 160 سم (الحد الأدنى) إلى 180 سم (الحد الأقصى)، فكم تصبح قيمة الطول 170 سم بعد التحويل الكمي (Normalization 0-1)؟ (كتاب الوزارة ص 14 / p. 15)",
    en: "If height data ranges from 160 cm to 180 cm, what does 170 cm become after Normalization (0 to 1)? (Textbook p. 15)"
  },
  opts: {
    ar: ["0.5 (لأن 160 تصبح 0، و170 في المنتصف تصبح 0.5، و180 تصبح 1)", "0.0", "1.0", "170 كما هي"],
    en: ["0.5 (since 160 → 0, 170 → 0.5, and 180 → 1)", "0.0", "1.0", "170 unchanged"]
  },
  a: 0,
  exp: {
    ar: "في تحجيم Min-Max: القيمة الصغرى 160 تصبح 0، والقيمة العظمى 180 تصبح 1، والقيمة 170 تقع في المنتصف تماماً فتصبح 0.5.",
    en: "With min=160 and max=180, (170 - 160) / (180 - 160) = 10 / 20 = 0.5."
  },
  ref: "كتاب المدرسة ص 14 / p. 15"
}];

export const lesson53Questions: Question[] = [{
  q: {
    ar: "ما اسم بوابة البيانات المفتوحة التابعة للبنك الدولي التي تنشر إحصاءات عن الاقتصاد والسكان والتعليم والصحة لدول العالم؟ (كتاب الوزارة ص 23 / تدرّب 1-1)",
    en: "What is the name of the World Bank's open data portal publishing country statistics on economy, population, and education? (Textbook p. 25 / Try 1.1)"
  },
  opts: {
    ar: ["World Bank Open Data", "Kaggle", "JSON", "Endpoint"],
    en: ["World Bank Open Data", "Kaggle", "JSON", "Endpoint"]
  },
  a: 0,
  exp: {
    ar: "بوابة World Bank Open Data تنشر إحصاءات الدول حول الاقتصاد والسكان والتعليم والصحة للمقارنات الدولية.",
    en: "World Bank Open Data provides global country statistics on economy, population, education, and health."
  },
  ref: "كتاب المدرسة ص 20 و 23 / p. 22"
}, {
  q: {
    ar: "ما المصطلح الذي يشير إلى قواعد تفاعل أجزاء البرمجيات مع بعضها، والذي يُستخدم في خدمات الويب للحصول على البيانات مباشرة؟ (كتاب الوزارة ص 23 / تدرّب 1-2)",
    en: "What is the term for the rules for how pieces of software interact, widely used in web services for obtaining data? (Textbook p. 25 / Try 1.2)"
  },
  opts: {
    ar: ["واجهة برمجة التطبيقات (API — Application Programming Interface)", "المخطط الهيكلي (Wireframe)", "تحيز المعاينة", "التحويل المحوري"],
    en: ["API (Application Programming Interface)", "Wireframe", "Sampling bias", "Pivot"]
  },
  a: 0,
  exp: {
    ar: "واجهة برمجة التطبيقات (API) تتيح لبرنامج المستخدم جلب البيانات مباشرة من الخادم دون المرور عبر متصفح.",
    en: "An API defines rules for software interaction, enabling programs to fetch data directly without a browser."
  },
  ref: "كتاب المدرسة ص 21 و 23 / p. 22"
}, {
  q: {
    ar: "ما اسم صيغة البيانات النصية الشائعة التي تُعاد بها البيانات من واجهة برمجة التطبيقات (API) في صورة أزواج الاسم/القيمة؟ (كتاب الوزارة ص 23 / تدرّب 1-3)",
    en: "What is the name of the data format widely used when data is returned from an API as name/value pairs? (Textbook p. 25 / Try 1.3)"
  },
  opts: {
    ar: ["JSON (JavaScript Object Notation)", "MP3", "PNG", "EXE"],
    en: ["JSON (JavaScript Object Notation)", "MP3", "PNG", "EXE"]
  },
  a: 0,
  exp: {
    ar: "صيغة JSON هي الصيغة النصية الأكثر استخداماً لتمثيل البيانات المهيكلة المُعادة عبر واجهات API.",
    en: "JSON (JavaScript Object Notation) is the most widely used format for data returned via APIs."
  },
  ref: "كتاب المدرسة ص 21 و 23 / p. 23"
}, {
  q: {
    ar: "ما المصطلح الذي يعني ذكر معلومات المصدر (المزوّد، اسم البيانات، تاريخ الحصول عليها، والرابط URL) لبيان الموثوقية والسماح بالتحقق؟ (كتاب الوزارة ص 23 / تدرّب 1-4)",
    en: "What is the term for what should be cited when using data, both to indicate reliability and allow verification? (Textbook p. 25 / Try 1.4)"
  },
  opts: {
    ar: ["الإشارة إلى المصدر / توثيق المصدر (Source citation / Source)", "نقطة النهاية (Endpoint)", "التعويض (Imputation)", "تحجيم Min-Max"],
    en: ["Source (Source citation)", "Endpoint", "Imputation", "Min-Max scaling"]
  },
  a: 0,
  exp: {
    ar: "الإشارة إلى المصدر (Source citation) واجبة عند استخدام البيانات لإثبات موثوقيتها وتمكين الآخرين من التحقق من التحليل.",
    en: "Citing the source indicates data reliability and allows others to verify the analysis."
  },
  ref: "كتاب المدرسة ص 22 و 23 / p. 23"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي يصف تسلسل الحصول على البيانات عبر واجهة برمجة التطبيقات (API) بأكبر قدر من الدقة: (كتاب الوزارة ص 23 / تدرّب 2-1)",
    en: "Choose the option that most appropriately describes the flow of obtaining data via an API: (Textbook p. 25 / Try 2.1)"
  },
  opts: {
    ar: ["يرسل العميل طلباً إلى الخادم (نقطة النهاية)، ويُعيد الخادم البيانات بصيغة مثل JSON", "يستمر الخادم من جانب واحد في إرسال البيانات إلى العميل دون طلب", "يتبادل العملاء البيانات مباشرة مع بعضهم البعض دون خادم", "الخادم يخزّن البيانات فقط؛ ولا يمكن للعملاء استرجاعها"],
    en: ["The client sends a request to the server, and the server returns the data in a format such as JSON", "The server one-sidedly continues to send data to the client", "Clients exchange data directly with each other", "The server only stores data; clients cannot retrieve it"]
  },
  a: 0,
  exp: {
    ar: "في استدعاء API، يرسل العميل (برنامج المستخدم) طلباً إلى نقطة النهاية في الخادم، ويعيد الخادم الاستجابة بصيغة مثل JSON.",
    en: "In an API call, the client sends a request to the server endpoint, and the server returns data in a format such as JSON."
  },
  ref: "كتاب المدرسة ص 21 و 23 / p. 25"
}, {
  q: {
    ar: "ما مزوّد البيانات المفتوحة الأنسب لكل غرض: (1) مقارنة الناتج المحلي الإجمالي GDP بين الدول، و(2) العثور على مجموعات بيانات لدراسة التعلّم الآلي؟ (كتاب الوزارة ص 23 / تدرّب 2-2)",
    en: "Choose the best provider for: (a) comparing GDP across countries, and (b) finding datasets for machine learning study: (Textbook p. 25 / Try 2.2)"
  },
  opts: {
    ar: ["(1) World Bank Open Data — و(2) Kaggle", "(1) Kaggle — و(2) UN Data", "كلاهما Kaggle فقط", "كلاهما UN Data فقط"],
    en: ["(a) World Bank Open Data — and (b) Kaggle", "(a) Kaggle — and (b) UN Data", "Both Kaggle", "Both UN Data"]
  },
  a: 0,
  exp: {
    ar: "مقارنة المؤشرات الاقتصادية كالناتج المحلي GDP بين الدول في World Bank Open Data، ومجموعات بيانات التعلّم الآلي في Kaggle.",
    en: "GDP across countries is in World Bank Open Data; datasets for ML study are on Kaggle."
  },
  ref: "كتاب المدرسة ص 20 و 23 / p. 25"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي يصف استخدام البيانات المفتوحة بأكبر قدر من الدقة: (كتاب الوزارة ص 23 / تدرّب 2-3)",
    en: "Choose the option that most appropriately describes the use of open data: (Textbook p. 25 / Try 2.3)"
  },
  opts: {
    ar: ["حتى عند استخدام البيانات المفتوحة، يُطلب الإشارة إلى المزوّد، واسم البيانات، وتاريخ الحصول عليها، وعنوان URL كمصدر", "يمكن استخدام البيانات المفتوحة بحرية، لذا لا حاجة للتحقق من شروط الاستخدام", "الإشارة إلى المصدر مطلوبة فقط للبيانات المنشورة مقابل رسوم", "بالنسبة للبيانات التي يتم الحصول عليها عبر API، لا حاجة لاتباع شروط الاستخدام"],
    en: ["Even when using open data, it is required to cite the provider, data name, date of acquisition, and URL as the source", "Open data can be used freely without checking terms of use", "Source citation is required only for paid data", "For data obtained via an API, there is no need to follow terms of use"]
  },
  a: 0,
  exp: {
    ar: "حتى مع البيانات المفتوحة، يجب التحقق من شروط الاستخدام وتوثيق المصدر كاملاً (المزوّد، الاسم، التاريخ، الرابط).",
    en: "Even with open data, checking terms of use and citing the full source is mandatory."
  },
  ref: "كتاب المدرسة ص 22 و 23 / p. 25"
}, {
  q: {
    ar: "ما المصطلح الذي يُطلق على عنوان URL المحدد الذي يُرسَل إليه الطلب في واجهة برمجة التطبيقات (API)؟ (كتاب الوزارة ص 21)",
    en: "What is the term for the destination URL to which an API request is sent? (Textbook p. 23)"
  },
  opts: {
    ar: ["نقطة النهاية (Endpoint)", "القيمة الشاذة (Outlier)", "المعاينة الطبقية", "التحويل المحوري"],
    en: ["Endpoint", "Outlier", "Stratified sample", "Pivot"]
  },
  a: 0,
  exp: {
    ar: "نقطة النهاية (Endpoint) هي عنوان URL أو المسار المحدد في الـ API الذي يرسل إليه العميل طلبه.",
    en: "An endpoint is the specific destination URL to which the client sends an API request."
  },
  ref: "كتاب المدرسة ص 20 و 21 / p. 23"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي يصف منصة Kaggle بأكبر قدر من الدقة: (كتاب الوزارة ص 25 / تمرين 3-1)",
    en: "Choose the option that most appropriately describes Kaggle: (Textbook p. 28 / Exercise 3.1)"
  },
  opts: {
    ar: ["منصة تُجري مسابقات تحليل البيانات، وتُتاح فيها مجموعات بيانات في مجالات متنوعة للعموم", "بوابة يديرها البنك الدولي تنشر إحصاءات لدول العالم", "موقع للإحصاءات الدولية تديره الأمم المتحدة", "نظام يسجّل تلقائياً سجلات تصفح المواقع الإلكترونية"],
    en: ["A platform that runs data analysis competitions, on which datasets in various fields are made public", "A portal operated by the World Bank", "A site for international statistics operated by the UN", "A system that automatically records web browsing history"]
  },
  a: 0,
  exp: {
    ar: "Kaggle هي منصة شهيرة لمسابقات تحليل البيانات والتعلّم الآلي وتوفر مجموعات بيانات عامة في مجالات متنوعة.",
    en: "Kaggle runs data analysis competitions and hosts public datasets used for ML study and research."
  },
  ref: "كتاب المدرسة ص 20 و 25 / p. 28"
}, {
  q: {
    ar: "من بين الخيارات التالية، اختر الخيار الذي لا يُعد نقطة تنبيه مناسبة عند استخدام واجهة برمجة تطبيقات (API): (كتاب الوزارة ص 25 / تمرين 3-3)",
    en: "Choose the option that is NOT an appropriate point of caution when using an API: (Textbook p. 28 / Exercise 3.3)"
  },
  opts: {
    ar: ["بسبب طريقة عمل واجهات برمجة التطبيقات، يمكن استخدامها دون التحقق من شروط الاستخدام", "استخدم واجهة برمجة التطبيقات وفقاً لشروط الاستخدام التي يحددها المزوّد", "تجنّب إرسال طلبات مفرطة في وقت قصير", "تحقق مسبقاً من نطاق الاستخدام المسموح به للبيانات التي تم الحصول عليها"],
    en: ["Because of how APIs work, they may be used without checking the terms of use", "Use the API in accordance with the provider's terms of use", "Avoid sending excessive requests in a short time", "Confirm the scope of allowed use of the obtained data in advance"]
  },
  a: 0,
  exp: {
    ar: "الوصول عبر API لا يلغي أبداً شروط الاستخدام؛ بل يجب دائماً فحص الشروط وعدم إرسال طلبات مفرطة في وقت قصير.",
    en: "Using an API never exempts you from checking and following the provider's terms of use."
  },
  ref: "كتاب المدرسة ص 21 و 25 / p. 28"
}];

export const unit5ExamQuestions: Question[] = [
// Lesson 5-1 (8 Questions)
{
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "ما التسلسل الصحيح للمراحل الثلاث التي يتقدم عبرها تحليل البيانات بعد توضيح الغرض؟",
    en: "What is the correct three-stage flow through which data analysis progresses after clarifying the purpose?"
  },
  opts: {
    ar: ["الجمع (Collection) ← التنظيم (Organization) ← التحليل (Analysis)", "التحليل ← الحذف ← الجمع", "العرض ← الطباعة ← الجمع", "التنظيم ← الجمع ← الإغلاق"],
    en: ["Collection → Organization → Analysis", "Analysis → Deletion → Collection", "Display → Print → Collection", "Organization → Collection → Close"]
  },
  a: 0,
  exp: {
    ar: "يتقدم تحليل البيانات عبر تسلسل: الجمع ← التنظيم ← التحليل، وتحدد مرحلة الجمع جودة التحليل بأكمله.",
    en: "Data analysis progresses through collection → organization → analysis."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "أي مما يلي يُعد نقطة قوة للبيانات الأولية (Primary data) مقارنة بالبيانات الثانوية؟",
    en: "Which of the following is a key strength of Primary Data compared to Secondary Data?"
  },
  opts: {
    ar: ["يمكن تصميم العناصر المجمعة لتناسب الغرض بدقة، مما يوفر أصالة وموثوقية عالية", "يمكن الحصول على كميات ضخمة منها في وقت قصير جداً دون أي جهد أو تكلفة", "تكون منشورة مسبقاً من قِبل جهات حكومية", "لا تحتاج إلى أي تخطيط قبل جمعها"],
    en: ["Items collected can be designed to match the purpose, providing high originality and reliability", "Large amounts can be obtained in a short time with zero cost", "It is already published by government agencies", "It requires no planning before collection"]
  },
  a: 0,
  exp: {
    ar: "البيانات الأولية تُصمم وتُجمع خصيصاً لغرض الدراسة، لكن قيدها أنها تتطلب وقتاً وجهداً وتكلفة.",
    en: "Primary data is designed specifically for your purpose, offering high originality and reliability, though it takes time and cost."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "التعداد السكاني الحكومي الذي تقوم بتنزيله من موقع رسمي لاستخدامه في بحثك يُعد بالنسبة لك:",
    en: "A government census dataset that you download for your research is considered:"
  },
  opts: {
    ar: ["بيانات ثانوية (Secondary data)", "بيانات أولية (Primary data)", "تحيز استجابة (Response bias)", "قيمة شاذة (Outlier)"],
    en: ["Secondary data", "Primary data", "Response bias", "Outlier"]
  },
  a: 0,
  exp: {
    ar: "بما أن الحكومة جمعته ونشرته مسبقاً وأنت تعيد استخدامه، فهو بيانات ثانوية بالنسبة لك.",
    en: "Because it was already collected and published by others and reused by you, it is secondary data."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "ماذا نسمي المجموعة الكاملة التي تستهدفها الدراسة، وماذا نسمي الجزء الذي يتم مسحه فعلياً منها؟",
    en: "What do we call the entire target group of analysis, and the part actually surveyed?"
  },
  opts: {
    ar: ["المجتمع الإحصائي (Population) — والعينة (Sample)", "الطبقة — والوسيط", "النموذج — والمفتاح", "العميل — والخادم"],
    en: ["Population — and Sample", "Stratum — and Median", "Model — and Key", "Client — and Server"]
  },
  a: 0,
  exp: {
    ar: "المجموعة الكاملة هي المجتمع الإحصائي (Population)، والجزء المستخرج منها للدراسة هو العينة (Sample).",
    en: "The whole group analyzed is the population; the part actually surveyed is the sample."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "ما طريقة أخذ العينات التي يتم فيها اختيار عينة من المجتمع الإحصائي بالصدفة البحتة (مثل القرعة) دون تحيز؟",
    en: "Which sampling method chooses a sample from the population purely by chance without bias?"
  },
  opts: {
    ar: ["المعاينة العشوائية البسيطة (Simple random sampling)", "المعاينة الطبقية (Stratified sampling)", "تحيز الاختيار الذاتي", "المسح الشامل"],
    en: ["Simple random sampling", "Stratified sampling", "Self-selection bias", "Complete survey"]
  },
  a: 0,
  exp: {
    ar: "المعاينة العشوائية البسيطة تختار الوحدات بالصدفة البحتة بحيث تكون لكل وحدة فرصة متساوية.",
    en: "Simple random sampling selects units purely by chance without bias."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "متى تكون المعاينة الطبقية (Stratified sampling) أكثر فاعلية في تقليل التحيز من المعاينة العشوائية البسيطة؟",
    en: "When is Stratified Sampling particularly effective at reducing bias?"
  },
  opts: {
    ar: ["عندما تؤثر الفروق بين الطبقات (مثل العمر أو الجنس أو الصف الدراسي) في نتائج التحليل ونريد عكس نسبها في العينة", "عندما نريد استبعاد فئات معينة من المجتمع عمداً", "عندما نجري المسح على شخص واحد فقط", "عندما لا نستخدم العشوائية مطلقاً"],
    en: ["When differences between strata (gender, age, grade) affect the analysis and we want the sample to reflect population ratios", "When we want to deliberately exclude certain groups", "When surveying only a single person", "When avoiding randomness"]
  },
  a: 0,
  exp: {
    ar: "المعاينة الطبقية تضمن تمثيل كل طبقة فرعية مهمة بنسبة تعكس تركيب المجتمع الأصلي.",
    en: "Stratified sampling reflects the composition of population strata in the sample."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "مركز تسوق يستطلع فقط زوار بعد ظهر يوم السبت ويُبلغ عن النتائج باعتبارها 'ما يفكر فيه جميع عملائنا'. ما نوع التحيز هنا؟",
    en: "A shopping mall surveys only visitors on Saturday afternoon and reports results as 'what all our customers think.' Which bias is this?"
  },
  opts: {
    ar: ["تحيز الوقت/الموقع (Time/location bias)", "تحيز الاستجابة (Response bias)", "معاينة طبقية عادلة", "مسح شامل"],
    en: ["Time/location bias", "Response bias", "Fair stratified sampling", "Complete census"]
  },
  a: 0,
  exp: {
    ar: "قصر الاستطلاع على ظهيرة يوم السبت فقط يسبب تحيز الوقت/الموقع لأنه يغفل المتسوقين في أيام الأسبوع أو الفترات المسائية.",
    en: "Surveying only on Saturday afternoon causes time/location bias, missing weekday and evening shoppers."
  }
}, {
  lesson: {
    ar: "الدرس 5-1",
    en: "Lesson 5-1"
  },
  q: {
    ar: "ما الفرق بين (تحيز الاختيار الذاتي وتحيز الوقت/الموقع) من جهة، و(تحيز الاستجابة) من جهة أخرى؟",
    en: "What distinguishes self-selection and time/location bias from response bias?"
  },
  opts: {
    ar: ["الأولان يتعلقان بمن يتم مسحهم (تحيز الاختيار)، بينما تحيز الاستجابة يتعلق بكيفية إجابة من تم مسحهم (خطأ القياس)", "جميعها تتعلق بأخطاء برمجة الخادم", "تحيز الاستجابة يحدث قبل اختيار العينة", "لا يوجد أي فرق بينها"],
    en: ["Self-selection and time/location concern WHO is surveyed (selection bias); response bias concerns HOW they answer (measurement error)", "All three are server coding errors", "Response bias happens before choosing subjects", "There is no difference"]
  },
  a: 0,
  exp: {
    ar: "تحيز الاختيار الذاتي والوقت/الموقع هما تحيز في اختيار العينة، أما تحيز الاستجابة فهو خطأ قياس ناتج عن إعطاء إجابات مرغوبة غير دقيقة.",
    en: "Selection biases affect who enters the sample; response bias affects the accuracy of answers given."
  }
},
// Lesson 5-2 (9 Questions)
{
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "ماذا تعني قاعدة 'مدخلات خاطئة — مخرجات خاطئة' (Garbage in, garbage out) في تحليل البيانات؟",
    en: "What does the rule 'garbage in, garbage out' mean in data analysis?"
  },
  opts: {
    ar: ["استخدام بيانات معيبة كما هي دون تنظيف أو تحويل يؤدي حتماً إلى استنتاجات خاطئة مهما كان التحليل دقيقاً", "حذف جميع البيانات بعد انتهاء التحليل", "البيانات الخام تكون دائماً جاهزة للتحليل المباشر", "سرعة الإنترنت تحدد دقة المتوسط الحسابي"],
    en: ["Using flawed raw data as is leads to incorrect conclusions no matter how carefully calculations are performed", "Deleting all data after analysis finishes", "Raw data is always ready for direct analysis", "Internet speed determines mean accuracy"]
  },
  a: 0,
  exp: {
    ar: "جودة أي تحليل تعتمد على تحضير البيانات (تنظيفها وتحويلها)؛ فالبيانات الفاسدة تنتج نتائج فاسدة.",
    en: "Analysis quality depends on data preparation; flawed input data yields flawed output conclusions."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "متى يكون 'وضع علامة (Flagging)' هو الاستجابة الأنسب للتعامل مع القيم المفقودة؟",
    en: "When is 'Flagging' the most appropriate response to missing values?"
  },
  opts: {
    ar: ["عندما يكون لغياب القيمة نفسه معنى مهم (مثل حقيقة أن شخصاً ما رفض الإجابة)", "عندما نريد اختراع أرقام عشوائية", "عندما لا توجد أي قيم مفقودة في الجدول", "عندما نريد تحويل التاريخ إلى نص"],
    en: ["When the missingness itself has meaning (e.g., the fact that someone refused to answer)", "When we want to invent random numbers", "When there are no missing values", "When converting dates to strings"]
  },
  a: 0,
  exp: {
    ar: "وضع علامة (Flagging) يحتفظ بمؤشر يدل على أن القيمة كانت مفقودة عندما يحمل الغياب نفسه دلالة تحليلية.",
    en: "Flagging leaves a marker indicating missingness when the fact that a value is absent carries meaning."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "ماذا نسمي القيمة الشاذة (Outlier) عندما تنتج عن خطأ في الإدخال أو القياس، وكيف نتعامل معها؟",
    en: "What do we call an outlier caused by an input or measurement error, and how do we handle it?"
  },
  opts: {
    ar: ["تُسمى قيمة غير طبيعية (Abnormal value) — ويتم تصحيحها أو حذفها بعد التحقق من السبب", "تُسمى قيمة معيارية — ويجب مضاعفتها", "تُسمى مفتاح ربط — وتُترك دون فحص", "تُسمى نقطة نهاية Endpoint"],
    en: ["Abnormal value — correct or delete it after identifying the cause", "Standardized value — double it", "Primary key — leave it unchecked", "Endpoint"]
  },
  a: 0,
  exp: {
    ar: "القيمة الشاذة الناتجة عن خطأ إدخال أو قياس تُسمى قيمة غير طبيعية (Abnormal value) وتُصحح أو تُحذف.",
    en: "An outlier caused by an input or measurement error is an abnormal value and should be corrected or deleted."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "لماذا لا يجوز حذف كل سجلين يبدوان متطابقين ظاهرياً قبل التحقق منهما؟",
    en: "Why must we confirm that data is genuinely duplicated before removing identical-looking records?"
  },
  opts: {
    ar: ["لأنهما قد يمثلان حدثين حقيقيين منفصلين (مثل شراء نفس العميل لنفس المنتج مرتين في نفس اليوم)", "لأن البيانات المكررة لا تؤثر أبداً على حساب المجاميع", "لأن حذف التكرار ممنوع في جميع البرامج", "لأن السجلات المكررة تحسن دقة المتوسط"],
    en: ["Because they may represent separate real transactions (e.g., same customer buying the same product twice on the same day)", "Because duplicates never affect aggregation totals", "Because deleting duplicates is impossible", "Because duplicates improve mean accuracy"]
  },
  a: 0,
  exp: {
    ar: "دمج معاملتين حقيقيتين منفصلتين لنفس العميل في يوم واحد يجعل إجمالي المبيعات (Aggregation) غير صحيح.",
    en: "Combining separate valid transactions into one would make sales aggregation incorrect."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "ماذا يحدث إذا تُركت الأرقام مخزّنة كنصوص (Strings) أو تُركت التواريخ بصيغ مختلطة قبل التحليل؟",
    en: "What happens if numbers are left stored as strings or date notations are not unified before analysis?"
  },
  opts: {
    ar: ["لا يمكن حساب المجاميع والمتوسطات للأرقام النصية، وستُعامل بيانات نفس اليوم على أنها تنتمي لأيام مختلفة", "سيقوم الحاسوب بتحسين الدقة تلقائياً", "ستتحول البيانات إلى صور", "لن يتأثر التجميع نهائياً"],
    en: ["Sums and means cannot be calculated for strings, and data from the same day will be treated as different days", "The computer will automatically boost accuracy", "Data will turn into images", "Aggregation will be unaffected"]
  },
  a: 0,
  exp: {
    ar: "توحيد الصيغ وتحويل النص الرقمي إلى رقم خطوة أساسية قبل أي عملية تجميع أو حساب.",
    en: "Without data type conversion and format unification, data cannot be aggregated or calculated correctly."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "عند مقارنة متغيرين بوحدات ومقاييس مختلفة تماماً (مثل الطول بالسم والوزن بالكجم)، ما المعالجة الأنسب؟",
    en: "When analyzing variables with different units and scales together (height in cm and weight in kg), which processing fits best?"
  },
  opts: {
    ar: ["التحويل الكمي / تحجيم Min-Max (Normalization) لتحويلهما إلى نطاق مشترك من 0 إلى 1", "حذف عمود الوزن بالكامل", "تحويل الأرقام إلى نصوص", "استخدام تحيز الاستجابة"],
    en: ["Normalization (converting both to a common range from 0 to 1)", "Deleting the weight column", "Converting numbers to strings", "Using response bias"]
  },
  a: 0,
  exp: {
    ar: "التحويل الكمي (Normalization) يضع المتغيرات ذات الوحدات المختلفة في نطاق موحد من 0 إلى 1 لمنع هيمنة الأرقام الأكبر.",
    en: "Normalization aligns variables with different units onto a common 0 to 1 scale."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "عندما نريد مقارنة موقع طالب في اختبارات مواد متعددة يختلف فيها المتوسط والانتشار بين مادة وأخرى، نستخدم:",
    en: "When comparing a student's relative position across test scores from multiple subjects with different means and spreads, we use:"
  },
  opts: {
    ar: ["التوحيد القياسي (Standardization — متوسط 0 وانحراف معياري 1)", "الحذف (Deletion)", "توحيد صيغة التاريخ", "الربط (Join)"],
    en: ["Standardization (mean 0 and standard deviation 1)", "Deletion", "Date format unification", "Join"]
  },
  a: 0,
  exp: {
    ar: "التوحيد القياسي يعبر عن بُعد كل قيمة عن المتوسط بوحدات من الانحراف المعياري.",
    en: "Standardization aligns data based on how far each value is from the mean in standard deviation units."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "ما العملية المناسبة لدمج جدول 'قائمة الطلاب' وجدول 'كشف الدرجات' عبر عمود 'رقم الطالب' المشترك؟",
    en: "Which operation connects a student roster and a grade sheet via the common item 'student ID'?"
  },
  opts: {
    ar: ["الربط (Join)", "التحويل المحوري (Pivot)", "التجميع (Aggregation)", "التعويض (Imputation)"],
    en: ["Join", "Pivot", "Aggregation", "Imputation"]
  },
  a: 0,
  exp: {
    ar: "الربط (Join) يدمج مجموعات بيانات متعددة في جدول واحد عبر مفتاح مشترك.",
    en: "Join connects multiple datasets into a single table via a common key."
  }
}, {
  lesson: {
    ar: "الدرس 5-2",
    en: "Lesson 5-2"
  },
  q: {
    ar: "ما العملية المناسبة لحساب الإجماليات الشهرية من بيانات المبيعات اليومية لمعرفة اتجاه المبيعات الشهري؟",
    en: "Which operation calculates monthly totals from daily sales data to see monthly sales trends?"
  },
  opts: {
    ar: ["التجميع (Aggregation)", "الربط (Join)", "تحويل النص إلى رقم", "وضع علامة (Flagging)"],
    en: ["Aggregation", "Join", "String to numeric conversion", "Flagging"]
  },
  a: 0,
  exp: {
    ar: "التجميع (Aggregation) يحسب المجاميع أو المتوسطات لكل مجموعة (مثل كل شهر) ويلخصها.",
    en: "Aggregation calculates sums, means, etc. for each group and summarizes the data."
  }
},
// Lesson 5-3 (8 Questions)
{
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "أي مزوّد للبيانات المفتوحة ينشر إحصاءات دولية صادرة عن الأمم المتحدة ووكالاتها حول السكان والتنمية والبيئة؟",
    en: "Which open data provider publishes international statistics from the United Nations and its related agencies?"
  },
  opts: {
    ar: ["UN Data", "Kaggle", "JSON", "Localhost"],
    en: ["UN Data", "Kaggle", "JSON", "Localhost"]
  },
  a: 0,
  exp: {
    ar: "بوابة UN Data توفر الإحصاءات الدولية التي تنشرها الأمم المتحدة ووكالاتها لتحليل القضايا العالمية.",
    en: "UN Data provides international statistics published by the United Nations and its agencies."
  }
}, {
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "ما الميزة الرئيسية للحصول على البيانات عبر واجهة برمجة التطبيقات (API) مقارنة بالتنزيل اليدوي من المتصفح؟",
    en: "What is the main advantage of obtaining data via an API compared to manual browser downloads?"
  },
  opts: {
    ar: ["يمكن للبرنامج جلب البيانات اللازمة مباشرة ومعالجة كميات كبيرة منها بكفاءة دون المرور عبر متصفح", "إلغاء الحاجة للالتزام بشروط الاستخدام", "إلغاء الحاجة لذكر مصدر البيانات", "العمل بدون اتصال بالخادم نهائياً"],
    en: ["Programs can fetch necessary data directly without going through a browser, handling large amounts efficiently", "Eliminates the need to follow terms of use", "Eliminates source citation requirements", "Works without any server connection"]
  },
  a: 0,
  exp: {
    ar: "تتيح واجهات API للبرامج جلب البيانات مباشرة وآلياً بصيغ مهيكلة مثل JSON دون تدخل يدوي في المتصفح.",
    en: "APIs let programs fetch data directly without a browser, enabling efficient automated handling."
  }
}, {
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "في استرجاع البيانات عبر API، ماذا نسمي برنامج المستخدم الذي يرسل الطلب، وماذا نسمي عنوان URL الذي يُرسل إليه الطلب؟",
    en: "In API data retrieval, what do we call the user's program sending the request, and the destination URL?"
  },
  opts: {
    ar: ["العميل (Client) — ونقطة النهاية (API Endpoint)", "الخادم (Server) — والوسيط (Median)", "الطبقة (Stratum) — والمحور (Pivot)", "المتغير — والمعامل"],
    en: ["The Client — and the API Endpoint", "The Server — and the Median", "Stratum — and Pivot", "Variable — and Coefficient"]
  },
  a: 0,
  exp: {
    ar: "يرسل العميل (Client) طلباً إلى نقطة نهاية API (Endpoint URL)، ويعيد الخادم (Server) الاستجابة.",
    en: "The client sends a request to the API endpoint (destination URL)."
  }
}, {
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "كيف تمثّل صيغة JSON (JavaScript Object Notation) البيانات؟",
    en: "How does JSON (JavaScript Object Notation) represent data?"
  },
  opts: {
    ar: ["كمجموعات من أزواج الأسماء والقيم (Name/Value pairs) يسهل قراءتها للبشر ومعالجتها برمجياً", "كملفات صوتية مشفرة فقط", "كصور نقطية غير قابلة للبحث", "كجداول ورقية مطبوعة"],
    en: ["As combinations of names and values (key/value pairs) that are easy for humans to read and programs to handle", "As encrypted audio files only", "As unsearchable bitmap images", "As printed paper tables"]
  },
  a: 0,
  exp: {
    ar: "تمثل JSON البيانات في صورة نصية مهيكلة من أزواج (الاسم/القيمة) مثل {'year': 2026, 'value': 100}.",
    en: "JSON represents data as name/value pairs, making it human-readable and easy to parse in code."
  }
}, {
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "ما العناصر الأربعة التي يتضمنها توثيق المصدر (Source Citation) عادةً عند استخدام البيانات المفتوحة؟",
    en: "What four elements does a source citation generally include when using open data?"
  },
  opts: {
    ar: ["مزوّد البيانات (Provider)، واسم البيانات، وتاريخ الحصول عليها، وعنوان الرابط (URL)", "اسم المعالج، وحجم الشاشة، ونوع المتصفح، وسرعة الشبكة", "اسم الطالب فقط دون ذكر المزوّد", "لون الرسم البياني وحجم الخط فقط"],
    en: ["Data provider, name of the data, date of acquisition, and URL", "CPU name, screen size, browser type, and network speed", "Student name only without provider", "Chart color and font size only"]
  },
  a: 0,
  exp: {
    ar: "توثيق المصدر يشمل: الجهة المزوّدة للبيانات، اسم مجموعة البيانات، تاريخ الحصول عليها، والرابط URL.",
    en: "A standard source citation includes provider, dataset name, date of acquisition, and URL."
  }
}, {
  lesson: {
    ar: "الدرس 5-3",
    en: "Lesson 5-3"
  },
  q: {
    ar: "لماذا تُعد الإشارة إلى المصدر (Source Citation) مهمة عند عرض نتائج تحليل البيانات؟",
    en: "Why is citing the source important when presenting data analysis results?"
  },
  opts: {
    ar: ["لأنها تعد مؤشراً على موثوقية البيانات، وتسمح للآخرين بالتحقق من صحة التحليل ومراجعته", "لأنها تزيد من سرعة تحميل الصفحة فقط", "لأنها تخفي أخطاء الحسابات", "لأنها تغني عن تنظيف البيانات"],
    en: ["Both as an indication of the reliability of the data and to allow others to verify the analysis", "It only increases page loading speed", "It hides calculation errors", "It replaces data cleaning"]
  },
  a: 0,
  exp: {
    ar: "الإشارة للمصدر تعزز الثقة في مصدر البيانات وتتيح للآخرين الرجوع للبيانات الأصلية للتحقق من التحليل.",
    en: "Citing the source signals reliability and allows independent verification of the analysis."
  }
}, {
  lesson: {
    ar: "شامل الوحدة 5",
    en: "Unit 5 Synthesis"
  },
  q: {
    ar: "ما السلوك الصحيح الواجب اتباعه عند جلب البيانات برمجياً عبر واجهة برمجة التطبيقات (API)؟",
    en: "What is the proper practice when fetching data programmatically via an API?"
  },
  opts: {
    ar: ["اتباع شروط الاستخدام، وتجنب إرسال طلبات مفرطة في وقت قصير، والتأكد من نطاق الاستخدام المسموح", "إرسال ملايين الطلبات في الثانية الواحدة لتعطيل الخادم", "تجاهل شروط الترخيص لأن البيانات تُجلب برمجياً", "حذف اسم المزوّد ونسب البيانات لنفسك"],
    en: ["Follow the terms of use, avoid sending excessive requests in a short time, and confirm allowed use scope", "Send millions of requests per second to overload the server", "Ignore license terms because it is fetched via code", "Remove provider credit and claim ownership"]
  },
  a: 0,
  exp: {
    ar: "يجب احترام شروط استخدام الـ API وعدم إرهاق الخادم بطلبات مفرطة في وقت قصير.",
    en: "Always follow API terms of use, respect rate limits, and confirm allowed usage scope."
  }
}, {
  lesson: {
    ar: "شامل الوحدة 5",
    en: "Unit 5 Synthesis"
  },
  q: {
    ar: "كيف تتكامل دروس الوحدة الخامسة الثلاثة لإعداد بيانات موثوقة جاهزة للتحليل؟",
    en: "How do the three lessons of Unit 5 work together to prepare trustworthy data for analysis?"
  },
  opts: {
    ar: ["جمع البيانات المناسبة (أولية أو ثانوية/مفتوحة عبر المتصفح أو API مع توثيق المصدر) وأخذ عينة عشوائية غير متحيزة ← ثم تنظيف البيانات (المفقود والشاذ والمكرر) ← ثم تحويلها (توحيد الصيغ، التحجيم، وإعادة التشكيل)", "تحليل البيانات الخام الفوضوية مباشرة دون جمع أو تنظيف", "الاكتفاء بعينة متحيزة وحذف جميع الأرقام الصحيحة", "استخدام بيانات مجهولة المصدر دون فحص شروطها"],
    en: ["Collect right data (primary or open secondary via browser/API with citation) & unbiased random sampling → Clean (missing, outliers, duplicates) → Transform (types, scaling, reshaping)", "Analyze raw messy data directly without cleaning", "Use biased samples and delete valid records", "Use unverified data with no source citation"]
  },
  a: 0,
  exp: {
    ar: "رحلة إعداد البيانات تبدأ بالجمع السليم الخالي من التحيز وتوثيق المصادر المفتوحة، تليها مرحلة التنظيف ثم التحويل لتناسب غرض التحليل.",
    en: "Trustworthy analysis starts with sound collection/sampling and open-data citation, followed by cleaning and transformation."
  }
}];
