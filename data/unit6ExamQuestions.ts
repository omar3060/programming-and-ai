import type { LocalizedText, Question } from '@/types';

export type { LocalizedText, Question } from '@/types';

export type Unit6Question = Omit<Question, 'lesson' | 'ref'> & {
  lesson?: LocalizedText;
  ref?: LocalizedText | string;
};

export const lesson61Questions: Unit6Question[] = [{
  q: {
    ar: "ما المصطلح الخاص باستنتاج خصائص المجتمع الإحصائي من نتائج فحص عينة مأخوذة منه؟ (كتاب الوزارة ص 31 / تدريب 1-1)",
    en: "What is the term for inferring the properties of the population from the sample? (Textbook p. 34 / Try 1.1)"
  },
  opts: {
    ar: ["الاستدلال الإحصائي (Statistical Inference)", "تنظيف البيانات (Data Cleaning)", "التحويل الكمي (Normalization)", "الارتباط (Correlation)"],
    en: ["Statistical Inference", "Data Cleaning", "Normalization", "Correlation"]
  },
  a: 0,
  exp: {
    ar: "الاستدلال الإحصائي هو استخدام بيانات العينة لتقدير خصائص المجتمع أو اختبار ادعاءات عنه مع مراعاة عدم اليقين.",
    en: "Statistical inference infers the properties of the population from the results of the sample."
  },
  ref: "كتاب المدرسة ص 27 و 31 / p. 30 & 34"
}, {
  q: {
    ar: "ما المصطلح الخاص بطريقة تقدير أن خصائص المجتمع تقع ضمن مدى معين، وما اسم الفاصل المستخدم فيها؟ (كتاب الوزارة ص 31 / تدريب 1-2,3)",
    en: "What is the term for estimating that population properties fall within a range, and what is the interval called? (Textbook p. 34 / Try 1.2,3)"
  },
  opts: {
    ar: ["الطريقة: التقدير الفاصل (Interval estimation) — والفاصل: فترة الثقة (Confidence interval)", "الطريقة: التقدير النقطي — والفاصل: مستوى الدلالة", "الطريقة: اختبار الفرضيات — والفاصل: القيمة الاحتمالية", "الطريقة: الانحدار البسيط — والفاصل: المتبقي"],
    en: ["Method: Interval estimation — Interval: Confidence interval", "Method: Point estimation — Interval: Significance level", "Method: Hypothesis testing — Interval: p-value", "Method: Simple regression — Interval: Residual"]
  },
  a: 0,
  exp: {
    ar: "التقدير الفاصل يقدر خاصية المجتمع ضمن مدى يُسمى فترة الثقة (Confidence interval) ويتميز بإظهار درجة عدم اليقين.",
    en: "Interval estimation estimates population properties within a range called the confidence interval."
  },
  ref: "كتاب المدرسة ص 27 و 31 / p. 30 & 34"
}, {
  q: {
    ar: "ما المصطلح الخاص بطريقة اختبار فرضيات نموذجية تفحص ما إذا كانت هناك علاقة بين متغيرين فئويين؟ (كتاب الوزارة ص 31 / تدريب 1-4)",
    en: "What is the term for a typical hypothesis testing method that examines whether there is a relationship between two categorical variables? (Textbook p. 34 / Try 1.4)"
  },
  opts: {
    ar: ["اختبار مربع كاي (Chi-squared test)", "اختبار t (t-test)", "التقدير النقطي (Point estimation)", "معامل التحديد (R²)"],
    en: ["Chi-squared test", "t-test", "Point estimation", "Coefficient of determination (R²)"]
  },
  a: 0,
  exp: {
    ar: "اختبار مربع كاي (Chi-squared test) يفحص وجود علاقة أو ارتباط بين متغيرين فئويين (مثل الجنس وتفضيل المادة الدراسية).",
    en: "The Chi-squared test examines whether there is a relationship between two categorical variables."
  },
  ref: "كتاب المدرسة ص 29 و 31 / p. 32 & 34"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب إجراءات اختبار الفرضيات بالترتيب الصحيح؟ (كتاب الوزارة ص 31 / تدريب 2-1)",
    en: "Which option most appropriately describes the procedure of hypothesis testing? (Textbook p. 35 / Try 2.1)"
  },
  opts: {
    ar: ["ضع فرضية العدم والفرضية البديلة ← حدد مستوى الدلالة ← احسب القيمة الاحتمالية ← اتخذ حكماً", "احسب القيمة الاحتمالية ← ضع فرضية العدم ← حدد مستوى الدلالة ← اتخذ حكماً", "حدد مستوى الدلالة ← تبنَّ الفرضية البديلة ← احسب القيمة الاحتمالية ← ضع فرضية العدم", "اتخذ حكماً ← ضع فرضية العدم ← حدد مستوى الدلالة ← احسب القيمة الاحتمالية"],
    en: ["Set null and alternative hypotheses → decide significance level → compute p-value → make a judgment", "Compute p-value → set null hypothesis → decide significance level → make a judgment", "Decide significance level → adopt alternative hypothesis → compute p-value → set null hypothesis", "Make a judgment → set null hypothesis → decide significance level → compute p-value"]
  },
  a: 0,
  exp: {
    ar: "الترتيب القياسي لاختبار الفرضيات: (1) وضع H0 و H1، (2) تحديد α مسبقاً، (3) حساب p-value، (4) المقارنة وإصدار الحكم.",
    en: "Standard flow: ① Set H0 & H1 → ② Decide significance level → ③ Compute p-value → ④ Compare and judge."
  },
  ref: "كتاب المدرسة ص 28 و 31 / p. 31 & 35"
}, {
  q: {
    ar: "لنفترض أنه في اختبار فرضيات تم فيه تحديد مستوى الدلالة عند 0.05 (5%)، كانت القيمة الاحتمالية 0.03. ما الحكم الأنسب؟ (كتاب الوزارة ص 31 / تدريب 2-2)",
    en: "Suppose that in a hypothesis test with significance level 0.05 (5%), the p-value is 0.03. Which option describes the judgment? (Textbook p. 35 / Try 2.2)"
  },
  opts: {
    ar: ["رفض فرضية العدم (H0) وتبني الفرضية البديلة (H1)", "عدم رفض فرضية العدم (H0)", "رفض الفرضية البديلة (H1)", "تغيير مستوى الدلالة إلى 0.01 وإعادة الحساب"],
    en: ["Reject the null hypothesis and adopt the alternative hypothesis", "Do not reject the null hypothesis", "Reject the alternative hypothesis", "Change the significance level to 0.01 and recalculate"]
  },
  a: 0,
  exp: {
    ar: "بما أن القيمة الاحتمالية (0.03) أصغر من مستوى الدلالة (0.05)، نرفض فرضية العدم H0 ونتبنى الفرضية البديلة H1.",
    en: "Since p-value (0.03) < significance level (0.05), we reject the null hypothesis and adopt the alternative hypothesis."
  },
  ref: "كتاب المدرسة ص 29 و 31 / p. 32 & 35"
}, {
  q: {
    ar: "ما الاختبار الأنسب لكل من: (1) فحص هل يختلف متوسط درجات الطلاب بين طريقتي تدريس، و(2) فحص هل توجد علاقة بين الجنس وفئة المنتجات المشتراة؟ (كتاب الوزارة ص 31 / تدريب 2-3)",
    en: "Choose the appropriate test for: (a) whether average scores differ between two teaching methods, and (b) whether gender relates to product category: (Textbook p. 35 / Try 2.3)"
  },
  opts: {
    ar: ["(1) اختبار t (t-test) — و(2) اختبار مربع كاي (Chi-squared test)", "(1) اختبار مربع كاي — و(2) اختبار t", "كلاهما باختبار t فقط", "كلاهما باختبار مربع كاي فقط"],
    en: ["(a) t-test — and (b) Chi-squared test", "(a) Chi-squared test — and (b) t-test", "Both use t-test only", "Both use Chi-squared test only"]
  },
  a: 0,
  exp: {
    ar: "مقارنة متوسطي مجموعتين يتم باختبار t، وفحص علاقة متغيرين فئويين يتم باختبار مربع كاي.",
    en: "Comparing two group means uses the t-test; checking two categorical variables uses the Chi-squared test."
  },
  ref: "كتاب المدرسة ص 29 و 31 / p. 32 & 35"
}, {
  q: {
    ar: "أي من الخيارات التالية يصف بشكل أنسب القيمة الاحتمالية (p-value)؟ (كتاب الوزارة ص 31 / تدريب 2-4)",
    en: "Which option most appropriately describes the p-value? (Textbook p. 35 / Try 2.4)"
  },
  opts: {
    ar: ["احتمال الحصول على نتيجة تساوي في تطرفها البيانات المتاحة أو أكثر تطرفاً منها، بافتراض صحة فرضية العدم", "القيمة الاحتمالية هي احتمال صحة فرضية العدم", "كلما صغرت القيمة الاحتمالية، كان التأثير أكبر بالضرورة", "القيمة الاحتمالية < 0.05 معيار مطلق للصحة"],
    en: ["The probability of obtaining a result as extreme as, or more extreme than, the data at hand, assuming the null hypothesis is correct", "The p-value is the probability that the null hypothesis is correct", "The smaller the p-value, the larger the effect is", "p-value < 0.05 is an absolute criterion of correctness"]
  },
  a: 0,
  exp: {
    ar: "الـ p-value تحسب احتمال الحصول على بيانات بهذا التطرف أو أشد تحت افتراض صحة فرضية العدم H0.",
    en: "The p-value is the probability of obtaining data at least this extreme assuming H0 is true."
  },
  ref: "كتاب المدرسة ص 28 و 31 / p. 31 & 35"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب فترات الثقة ومستويات الثقة؟ (كتاب الوزارة ص 33 / تمرين 3-1)",
    en: "Which option most appropriately describes confidence intervals and confidence levels? (Textbook p. 38 / Exercise 3.1)"
  },
  opts: {
    ar: ["فترة ثقة بمستوى ثقة 95% تعني أنه، لو تكررت طريقة المسح نفسها، فإن نحو 95% من فترات الثقة الناتجة ستحتوي على القيمة الحقيقية للمجتمع", "كلما ارتفع مستوى الثقة، ضاقت فترة الثقة", "مستوى الثقة قيمة تُستخدم كمعيار للحكم في اختبار الفرضيات", "فترة الثقة تخفي عدم اليقين تماماً"],
    en: ["A confidence interval with a 95% confidence level means that, if the same survey method is repeated, about 95% of the resulting confidence intervals will contain the true population value", "The higher the confidence level, the narrower the confidence interval", "The confidence level is used as the criterion for judgment in hypothesis testing", "A confidence interval hides uncertainty completely"]
  },
  a: 0,
  exp: {
    ar: "مستوى الثقة 95% هو بيان عن أداء الطريقة عند تكرار المسح (نحو 95% من الفترات الناتجة تلتقط القيمة الحقيقية للمجتمع).",
    en: "95% confidence level means ~95% of intervals over repeated surveys contain the true population value."
  },
  ref: "كتاب المدرسة ص 27 و 33 / p. 31 & 38"
}, {
  q: {
    ar: "أي خيار لا يُعد وصفاً مناسباً للأخطاء في اختبار الفرضيات؟ (كتاب الوزارة ص 33 / تمرين 3-2)",
    en: "Which option is NOT an appropriate description of errors in hypothesis testing? (Textbook p. 38 / Exercise 3.2)"
  },
  opts: {
    ar: ["خفض مستوى الدلالة يمكن أن يقلل من خطأ النوع الأول وخطأ النوع الثاني في آنٍ واحد", "خطأ النوع الأول هو رفض فرضية العدم بينما تكون في الواقع صحيحة", "خطأ النوع الثاني هو عدم رفض فرضية العدم بينما تكون في الواقع خاطئة", "لخطأي النوع الأول والثاني علاقة مفاضلة (Trade-off)"],
    en: ["Lowering the significance level can simultaneously reduce both Type I and Type II errors", "A Type I error is rejecting the null hypothesis when it is actually correct", "A Type II error is not rejecting the null hypothesis when it is actually incorrect", "Type I and Type II errors have a trade-off relationship"]
  },
  a: 0,
  exp: {
    ar: "بسبب علاقة المفاضلة، خفض مستوى الدلالة α يقلل خطأ النوع الأول لكنه يميل إلى رفع خطأ النوع الثاني.",
    en: "Due to the trade-off relationship, lowering α reduces Type I error but increases Type II error."
  },
  ref: "كتاب المدرسة ص 29 و 33 / p. 33 & 38"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب تفسير الاستدلال الإحصائي؟ (كتاب الوزارة ص 33 / تمرين 3-3)",
    en: "Which option most appropriately describes the interpretation of statistical inference? (Textbook p. 38 / Exercise 3.3)"
  },
  opts: {
    ar: ["مع كمية كبيرة من البيانات، حتى الفرق الضئيل يمكن أن يصبح ذا دلالة إحصائية", "الفرق ذو الدلالة الإحصائية هو بالضرورة فرق مهم عملياً", "إذا انخفضت القيمة الاحتمالية عن 0.05 فإن الاستنتاج صحيح بالتأكيد", "يمكن للاستدلال الإحصائي أن يزيل عدم اليقين تماماً"],
    en: ["With a large amount of data, even a tiny difference can become statistically significant", "A statistically significant difference is necessarily an important difference in practice", "If the p-value falls below 0.05, the conclusion is certainly correct", "Statistical inference can completely remove uncertainty"]
  },
  a: 0,
  exp: {
    ar: "مع العينات الكبيرة جداً، يصبح الفرق الضئيل ذا دلالة إحصائية، لذا يجب عدم الخلط بين الدلالة الإحصائية والأهمية العملية.",
    en: "With large datasets, even a tiny difference can become statistically significant."
  },
  ref: "كتاب المدرسة ص 30 و 33 / p. 33 & 38"
}];

export const lesson62Questions: Unit6Question[] = [{
  q: {
    ar: "ما المصطلح الخاص بتحليل الانحدار الذي يتنبأ بمتغير الاستجابة باستخدام عدة متغيرات تفسيرية؟ (كتاب الوزارة ص 38 / تدريب 1-1)",
    en: "What is the term for regression analysis that predicts the response variable using multiple explanatory variables? (Textbook p. 43 / Try 1.1)"
  },
  opts: {
    ar: ["تحليل الانحدار المتعدد (Multiple regression analysis)", "تحليل الانحدار البسيط (Simple regression analysis)", "التقدير النقطي (Point estimation)", "اختبار مربع كاي (Chi-squared test)"],
    en: ["Multiple regression analysis", "Simple regression analysis", "Point estimation", "Chi-squared test"]
  },
  a: 0,
  exp: {
    ar: "تحليل الانحدار المتعدد يتنبأ بمتغير الاستجابة باستخدام متغيرين تفسيريين أو أكثر (y = a1x1 + a2x2 + b).",
    en: "Multiple regression analysis predicts the response variable using two or more explanatory variables."
  },
  ref: "كتاب المدرسة ص 36 و 38 / p. 40 & 43"
}, {
  q: {
    ar: "ما المصطلح الخاص بـ 'الفرق بين القيم الفعلية وخط الانحدار' المستخدم في تحليل الانحدار البسيط؟ (كتاب الوزارة ص 38 / تدريب 1-4)",
    en: "What is the term for 'the discrepancy between actual values and the regression line' used in simple regression analysis? (Textbook p. 43 / Try 1.4)"
  },
  opts: {
    ar: ["المتبقي (Residual)", "نقطة التقاطع (Intercept)", "العامل المربك (Confounder)", "مستوى الثقة (Confidence level)"],
    en: ["Residual", "Intercept", "Confounder", "Confidence level"]
  },
  a: 0,
  exp: {
    ar: "المتبقي (Residual) هو الفرق بين القيمة الفعلية والقيمة المتوقعة على خط الانحدار، وتصغّر طريقة المربعات الصغرى مجموع مربعات المتبقيات.",
    en: "Each discrepancy between actual values and the regression line is called a residual."
  },
  ref: "كتاب المدرسة ص 36 و 38 / p. 40 & 43"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب الفرق بين الانحدار البسيط والمتعدد؟ (كتاب الوزارة ص 38 / تدريب 2-1)",
    en: "Which option most appropriately describes the difference between simple and multiple regression? (Textbook p. 43 / Try 2.1)"
  },
  opts: {
    ar: ["يستخدم الانحدار البسيط متغيراً تفسيرياً واحداً، ويستخدم الانحدار المتعدد عدة متغيرات تفسيرية", "يمكن للانحدار البسيط أن يعبر عن علاقات معقدة، بينما الانحدار المتعدد بسيط", "يستخدم الانحدار البسيط عدة متغيرات تفسيرية، والمتعدد متغيراً واحداً", "لا يوجد فرق بينهما في عدد المتغيرات التفسيرية"],
    en: ["Simple regression uses one explanatory variable, and multiple regression uses multiple explanatory variables", "Simple regression expresses complex relationships, while multiple is simple", "Simple regression uses multiple explanatory variables, and multiple uses one", "There is no difference in the number of explanatory variables"]
  },
  a: 0,
  exp: {
    ar: "الانحدار البسيط يعتمد على متغير تفسيري واحد فقط، بينما المتعدد يعتمد على متغيرين أو أكثر.",
    en: "Simple regression uses 1 explanatory variable; multiple regression uses 2 or more."
  },
  ref: "كتاب المدرسة ص 36 و 38 / p. 41 & 43"
}, {
  q: {
    ar: "اختر طريقة الانحدار الأنسب لكل من: (1) التنبؤ بمبيعات الآيس كريم من درجة الحرارة فقط، و(2) التنبؤ بأسعار المنازل من حجم المنزل وعمره والمسافة من المحطة: (كتاب الوزارة ص 38 / تدريب 2-2)",
    en: "Choose the appropriate regression method for: (a) predicting ice cream sales from temperature alone, and (b) predicting house prices from size, age, and distance: (Textbook p. 43 / Try 2.2)"
  },
  opts: {
    ar: ["(1) تحليل الانحدار البسيط — و(2) تحليل الانحدار المتعدد", "(1) تحليل الانحدار المتعدد — و(2) تحليل الانحدار البسيط", "كلاهما بالانحدار البسيط فقط", "كلاهما بالانحدار المتعدد فقط"],
    en: ["(a) Simple regression analysis — and (b) Multiple regression analysis", "(a) Multiple regression analysis — and (b) Simple regression analysis", "Both use Simple regression only", "Both use Multiple regression only"]
  },
  a: 0,
  exp: {
    ar: "متغير واحد (الحرارة) = انحدار بسيط؛ عدة متغيرات (الحجم والعمر والمسافة) = انحدار متعدد.",
    en: "One explanatory variable = simple regression; multiple explanatory variables = multiple regression."
  },
  ref: "كتاب المدرسة ص 38 / p. 43"
}, {
  q: {
    ar: "طابق كل وصف مع المؤشر الأنسب: (1) متوسط القيم المطلقة للفروق، (2) الجذر التربيعي لمتوسط مربعات الفروق، (3) مدى قدرة النموذج على تفسير التباين: (كتاب الوزارة ص 38 / مثال محلول 2)",
    en: "Match: (a) Mean of absolute discrepancies, (b) Square root of mean of squared discrepancies, (c) How well the model explains variability: (Textbook p. 42 / Worked Example 2)"
  },
  opts: {
    ar: ["(1) هو MAE — و(2) هو RMSE — و(3) هو R²", "(1) هو R² — و(2) هو MAE — و(3) هو RMSE", "(1) هو RMSE — و(2) هو MAE — و(3) هو R²", "جميعها تشير إلى R² فقط"],
    en: ["(a) MAE — (b) RMSE — (c) R²", "(a) R² — (b) MAE — (c) RMSE", "(a) RMSE — (b) MAE — (c) R²", "All refer to R² only"]
  },
  a: 0,
  exp: {
    ar: "متوسط الفروق المطلقة هو MAE، والجذر التربيعي لمتوسط مربعات الفروق هو RMSE، ومؤشر تفسير التباين هو R².",
    en: "Mean absolute error is MAE; root mean square error is RMSE; explained variability is R²."
  },
  ref: "كتاب المدرسة ص 38 / p. 42 & 43"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب تفسير نتائج تحليل الانحدار؟ (كتاب الوزارة ص 39 / تدريب 2-3)",
    en: "Which option most appropriately describes the interpretation of regression analysis results? (Textbook p. 44 / Try 2.3)"
  },
  opts: {
    ar: ["يجب التعامل مع نتائج تحليل الانحدار كمنظور واحد تقدمه البيانات، ويجب تقييم ما إذا كانت السببية قد أُثبتت بعناية", "إذا تم الحصول على معادلة تنبؤ من الانحدار، فإنها تشير بالضرورة إلى علاقة سببية", "إذا كان R² مرتفعاً، فإن النموذج يكون بالضرورة نموذجاً جيداً في كل الحالات", "إذا لاءمت معادلة التنبؤ البيانات، يمكن استنتاج أن المتغير التفسيري هو سبب متغير الاستجابة"],
    en: ["The results of regression analysis should be treated as one perspective that the data offers, and whether causation has been demonstrated must be carefully evaluated", "A prediction equation necessarily indicates a causal relationship", "If R² is high, the model is necessarily a good model", "If the equation fits, the explanatory variable is proven to be the cause"]
  },
  a: 0,
  exp: {
    ar: "الانحدار يقدم منظوراً واحداً من البيانات، ولا يجوز الخلط بين ملاءمة الخط (الارتباط) وبين السببية.",
    en: "Regression offers one perspective from data; causation must be evaluated separately from correlation."
  },
  ref: "كتاب المدرسة ص 37 و 39 / p. 42 & 44"
}, {
  q: {
    ar: "أي خيار لا يُعد وصفاً مناسباً لمؤشرات تقييم نماذج الانحدار؟ (كتاب الوزارة ص 39 / تدريب 2-4)",
    en: "Which option is NOT an appropriate description of evaluation indicators for regression models? (Textbook p. 44 / Try 2.4)"
  },
  opts: {
    ar: ["إذا كانت قيمة R² قريبة من 1، فإن النموذج يكون بالضرورة نموذجاً جيداً دون الحاجة إلى فحص مؤشرات أخرى", "يأخذ R² قيماً بين 0 و 1؛ وكلما اقترب من 1 كان تفسير التباين في البيانات أفضل", "RMSE هو الجذر التربيعي لمتوسط مربعات الفروق ويُعبَّر عنه بنفس وحدات متغير الاستجابة", "MAE هو متوسط القيم المطلقة للفروق وهو أقل تأثراً بالفروق الكبيرة جداً"],
    en: ["If the value of R² is close to 1, the model is necessarily a good model without needing to check other indicators", "R² takes values between 0 and 1; the closer to 1, the better the variation is explained", "RMSE is expressed in the same units as the response variable", "MAE is less affected by extremely large discrepancies"]
  },
  a: 0,
  exp: {
    ar: "لا يجوز الاعتماد على R² وحده للحكم على جودة النموذج؛ يجب فحص مؤشرات الخطأ RMSE و MAE معه.",
    en: "Do not judge a model by R² alone; always check RMSE and MAE as well."
  },
  ref: "كتاب المدرسة ص 37 و 39 / p. 42 & 44"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب العلاقة بين الارتباط والسببية؟ (كتاب الوزارة ص 41 / تمرين 3-1)",
    en: "Which option most appropriately describes correlation and causation? (Textbook p. 46 / Exercise 3.1)"
  },
  opts: {
    ar: ["لادعاء السببية، يلزم أسبقية زمنية، واستبعاد تأثير عوامل أخرى، ودعم نظري، وما إلى ذلك", "إذا وُجد ارتباط، فإن السببية تتحقق بالضرورة", "إذا تم الحصول على معادلة تنبؤ من الانحدار، فإن المعادلة تثبت السببية إثباتاً تاماً", "إذا لم يكن هناك ارتباط خطي، فلا توجد أي علاقة على الإطلاق"],
    en: ["To claim causation, temporal precedence, exclusion of other factors' influence, theoretical support, and so on are necessary", "If there is correlation, causation necessarily holds", "A prediction equation completely demonstrates causation", "If there is no correlation, there is no relationship at all"]
  },
  a: 0,
  exp: {
    ar: "إثبات السببية يتطلب شروطاً صارمة تتجاوز الارتباط: الأسبقية الزمنية، واستبعاد العوامل المربكة، والدعم النظري.",
    en: "Claiming causation requires temporal precedence, ruling out other factors, and theoretical support."
  },
  ref: "كتاب المدرسة ص 37 و 41 / p. 42 & 46"
}, {
  q: {
    ar: "أي خيار يصف بشكل أنسب تفسير مؤشرات التقييم R² و RMSE و MAE؟ (كتاب الوزارة ص 41 / تمرين 3-2)",
    en: "Which option most appropriately describes the interpretation of evaluation indicators? (Textbook p. 46 / Exercise 3.2)"
  },
  opts: {
    ar: ["يأخذ R² (معامل التحديد) قيماً بين 0 و 1؛ وكلما اقترب من 1، كان تفسير التباين في البيانات أفضل", "يستخدم RMSE و MAE طريقة الحساب نفسها وتتطابق قيمتاهما دائماً", "النموذج ذو R² المرتفع هو دائماً نموذج جيد في أي حالة", "MAE مؤشر يعطي وزناً أكبر للفروق الكبيرة"],
    en: ["R² takes values between 0 and 1; the closer to 1, the better the variation in the data is explained", "RMSE and MAE use the same calculation method and always coincide", "A model with a high R² is always a good model in any situation", "MAE is an indicator that weights large discrepancies more heavily"]
  },
  a: 0,
  exp: {
    ar: "R² يتراوح بين 0 و 1 ويقيس نسبة التباين المفسرة، بينما RMSE هو الذي يعطي وزناً أكبر للأخطاء الكبيرة وليس MAE.",
    en: "R² ranges from 0 to 1; RMSE (not MAE) weights large discrepancies more heavily."
  },
  ref: "كتاب المدرسة ص 37 و 41 / p. 41 & 46"
}, {
  q: {
    ar: "ماذا يحدث إذا أضفنا متغيرات تفسيرية كثيرة غير ضرورية إلى نموذج الانحدار؟ (كتاب الوزارة ص 37)",
    en: "What happens if we add many unnecessary explanatory variables to a regression model? (Textbook p. 42)"
  },
  opts: {
    ar: ["إضافة المزيد من المتغيرات التفسيرية لا يحسّن النموذج بالضرورة؛ فقد يطارد النموذج التشويش (إفراط في الملاءمة Overfitting) بدلاً من الاتجاه العام", "تزداد دقة التنبؤ على البيانات الجديدة بنسبة 100% دائماً", "يتحول النموذج إلى تقدير نقطي", "تصبح العلاقة سببية تلقائياً"],
    en: ["Adding more explanatory variables does not necessarily improve the model; an overfit model chases noise rather than the trend", "Prediction accuracy on new data always reaches 100%", "The model turns into a point estimate", "The relationship automatically becomes causal"]
  },
  a: 0,
  exp: {
    ar: "يجب اختيار المتغيرات التفسيرية المناسبة للغرض فقط، لأن إضافة متغيرات زائدة قد يسبب الإفراط في الملاءمة (Overfitting).",
    en: "Appropriate variables must be chosen according to the purpose; adding variables blindly risks overfitting noise."
  },
  ref: "كتاب المدرسة ص 37 / p. 42"
}];

export const lesson63Questions: Unit6Question[] = [{
  q: {
    ar: "ما مصطلح الرسم البياني الذي يمثل حجم قيمة ثالثة مقابلة للتوليفات على محورين بتدرج اللون أو اختلافات الصبغة؟ (كتاب الوزارة ص 46 / تدريب 1-1)",
    en: "What is the term for the graph that represents the size of a third value across combinations on two axes by color gradation or hue? (Textbook p. 53 / Try 1.1)"
  },
  opts: {
    ar: ["الخريطة الحرارية (Heatmap)", "مخطط المستطيلات (Mosaic Plot)", "المخطط المبعثر (Scatter Plot)", "الرسم الخطي (Line Graph)"],
    en: ["Heatmap", "Mosaic Plot", "Scatter Plot", "Line Graph"]
  },
  a: 0,
  exp: {
    ar: "الخريطة الحرارية (Heatmap) ترتب العناصر على محورين وتمثل القيمة العددية الثالثة بتدرج اللون.",
    en: "A heatmap arranges items on two axes and encodes a third numerical value via color gradation."
  },
  ref: "كتاب المدرسة ص 44 و 46 / p. 50 & 53"
}, {
  q: {
    ar: "ما مصطلح الرسم البياني الذي يمثل العلاقة بين متغيرين فئويين بحجم المساحات المستطيلة؟ (كتاب الوزارة ص 46 / تدريب 1-2)",
    en: "What is the term for the graph that represents the relationship between two categorical variables by the size of rectangular areas? (Textbook p. 53 / Try 1.2)"
  },
  opts: {
    ar: ["مخطط المستطيلات / الفسيفساء (Mosaic Plot)", "الخريطة الحرارية (Heatmap)", "المدرج التكراري", "المخطط المبعثر (Scatter Plot)"],
    en: ["Mosaic Plot", "Heatmap", "Histogram", "Scatter Plot"]
  },
  a: 0,
  exp: {
    ar: "مخطط المستطيلات (Mosaic plot) يعرض تكرارات أو نسب توليفات متغيرين فئويين باستخدام مساحات المستطيلات.",
    en: "A mosaic plot shows proportions of two categorical variables using rectangular areas."
  },
  ref: "كتاب المدرسة ص 44 و 46 / p. 50 & 53"
}, {
  q: {
    ar: "في تصور البيانات، من بين 'تعميق فهم المحلل نفسه' و'توصيل البيانات للآخرين'، لأي غرض يُؤدَّى الأخير؟ (كتاب الوزارة ص 46 / تدريب 1-3)",
    en: "In data visualization, of 'deepening the analyst's own understanding' and 'communicating data to others,' for what purpose is the latter performed? (Textbook p. 53 / Try 1.3)"
  },
  opts: {
    ar: ["عرض نتائج التحليل أو الادعاءات للآخرين (الجمهور) بطريقة واضحة وسهلة الفهم", "إخفاء البيانات الأصلية عن الجمهور", "تشفير الأرقام بكلمات مرور", "حذف المحاور والوحدات من التقرير"],
    en: ["Convey the analysis results or claims to others in an easy-to-understand way", "Hide the original data from the audience", "Encrypt numbers with passwords", "Remove axis labels and units from the report"]
  },
  a: 0,
  exp: {
    ar: "توصيل البيانات للآخرين يهدف إلى نقل نتائج التحليل أو الادعاءات للجمهور بطريقة واضحة من نظرة واحدة.",
    en: "Communicating data to others conveys analysis results or claims in an easy-to-understand way."
  },
  ref: "كتاب المدرسة ص 43 و 46 / p. 49 & 53"
}, {
  q: {
    ar: "ما مصطلح استخدام البيانات والتصور لنقل الرسالة التي تريد إيصالها، منظمة كقصة؟ (كتاب الوزارة ص 46 / تدريب 1-4)",
    en: "What is the term for using data and visualization to convey the message you want to convey, structured like a story? (Textbook p. 53 / Try 1.4)"
  },
  opts: {
    ar: ["سرد قصص البيانات (Data Storytelling)", "التراكب الزائد للنقاط (Overplotting)", "الجدولة المتقاطعة (Cross-tabulation)", "التقدير الفاصل (Interval Estimation)"],
    en: ["Data Storytelling", "Overplotting", "Cross-tabulation", "Interval Estimation"]
  },
  a: 0,
  exp: {
    ar: "سرد قصص البيانات (Data storytelling) هو تنظيم عرض البيانات والتصور حول رسالة واضحة مهيكلة كقصة.",
    en: "Data storytelling structures data and visualization like a story to convey a clear message."
  },
  ref: "كتاب المدرسة ص 45 و 46 / p. 51 & 53"
}, {
  q: {
    ar: "اختر أنسب رسم بياني لكل من: (1) إدراك نمط زيارات العملاء حسب يوم الأسبوع × الفترة الزمنية، و(2) إظهار الفروق في النسب بين الذكور والإناث × تفضيل المادة الدراسية بالمساحات: (كتاب الوزارة ص 47 / تدريب 2-1)",
    en: "Choose the appropriate graph for: (a) customer visits by day of week × time slot, and (b) differences in proportions for gender × subject preference using areas: (Textbook p. 53 / Try 2.1)"
  },
  opts: {
    ar: ["(1) خريطة حرارية (Heatmap) — و(2) مخطط مستطيلات (Mosaic Plot)", "(1) مخطط مستطيلات — و(2) خريطة حرارية", "كلاهما بخريطة حرارية فقط", "كلاهما بمخطط مستطيلات فقط"],
    en: ["(a) Heatmap — and (b) Mosaic plot", "(a) Mosaic plot — and (b) Heatmap", "Both use Heatmap only", "Both use Mosaic plot only"]
  },
  a: 0,
  exp: {
    ar: "اليوم × الفترة الزمنية مع عدد الزوار = خريطة حرارية؛ الجنس × تفضيل المادة بالمساحات = مخطط مستطيلات.",
    en: "Day × time slot customer counts = Heatmap; Gender × subject proportions by area = Mosaic plot."
  },
  ref: "كتاب المدرسة ص 47 / p. 53"
}, {
  q: {
    ar: "أي خيار يصف بأنسب طريقة موقفاً تُستخدم فيه الخريطة الحرارية (Heatmap)؟ (كتاب الوزارة ص 47 / تدريب 2-2)",
    en: "Which option most appropriately describes a situation in which a heatmap is used? (Textbook p. 53 / Try 2.2)"
  },
  opts: {
    ar: ["موقف يريد فيه المرء إدراك توزيع البيانات العددية وأنماطها عبر توليفات على محورين من نظرة واحدة", "موقف يريد فيه المرء ببساطة مقارنة قيمة تمثيلية لمتغير واحد", "موقف يمكن فيه إدراك العلاقة بين متغيرين كميين بشكل كافٍ بمخطط مبعثر لأن عدد النقاط قليل", "موقف يريد فيه المرء إظهار نسبة تركيب واحدة فقط لمتغير فئوي"],
    en: ["A situation in which one wants to grasp the distribution and patterns of numerical data over combinations on two axes at a glance", "A situation comparing a single representative value for one variable", "A situation where a scatter plot suffices because the number of points is small", "A situation showing only one composition ratio of a categorical variable"]
  },
  a: 0,
  exp: {
    ar: "تُستخدم الخريطة الحرارية لإدراك توزيع وأنماط قيم عددية عبر توليفات على محورين (أو عند حدوث تراكب زائد في المخطط المبعثر).",
    en: "Heatmaps show numerical patterns across combinations on two axes at a glance."
  },
  ref: "كتاب المدرسة ص 47 / p. 53"
}, {
  q: {
    ar: "أي خيار يصف بأنسب طريقة موقفاً يُستخدم فيه مخطط المستطيلات (Mosaic Plot)؟ (كتاب الوزارة ص 47 / تدريب 2-3)",
    en: "Which option most appropriately describes a situation in which a mosaic plot is used? (Textbook p. 54 / Try 2.3)"
  },
  opts: {
    ar: ["موقف يريد فيه المرء إدراك نسب التكرارات لتوليفات متغيرين فئويين بشكل حدسي باستخدام المساحات", "موقف يريد فيه المرء متابعة التغيرات الزمنية لمتغير كمي واحد", "موقف يريد فيه المرء تمثيل الارتباط بين متغيرين كميين بالنقاط", "موقف يريد فيه المرء إظهار نسبة تركيب الفئات باستخدام قطاعات دائرية"],
    en: ["A situation in which one wants to intuitively grasp the proportions of frequencies for combinations of two categorical variables using areas", "Following time-series changes of one quantitative variable", "Representing correlation between two quantitative variables by points", "Showing composition ratio at a single time using pie sectors"]
  },
  a: 0,
  exp: {
    ar: "مخطط المستطيلات مخصص لإدراك نسب التكرارات لتوليفات متغيرين فئويين باستخدام المساحات المستطيلة.",
    en: "Mosaic plots intuitively show frequency proportions for combinations of two categorical variables using areas."
  },
  ref: "كتاب المدرسة ص 47 / p. 54"
}, {
  q: {
    ar: "أي خيار يصف بأنسب طريقة سرد قصص البيانات (Data Storytelling)؟ (كتاب الوزارة ص 47 / تدريب 2-4)",
    en: "Which option most appropriately describes data storytelling? (Textbook p. 54 / Try 2.4)"
  },
  opts: {
    ar: ["توضيح الرسالة، واختيار العناصر، وتوفير معلومات داعمة هي العناصر الأساسية", "حتى لو كانت الرسالة غير واضحة، فستصل إلى الجمهور طالما أن الرسم البياني جميل", "من الأفضل تضمين أكبر عدد ممكن من العناصر ذات الصلة في الرسم البياني", "العناوين وتسميات المحاور تنتقص من مظهر الرسم البياني ويُفضَّل حذفها"],
    en: ["Clarification of the message, selection of elements, and provision of supporting information are the basic elements", "Even if the message is unclear, it will be communicated as long as the graph is beautiful", "It is better to include as many related elements as possible in a graph", "Titles and axis labels detract from appearance and should be omitted"]
  },
  a: 0,
  exp: {
    ar: "العناصر الأساسية الثلاثة لسرد قصص البيانات هي: توضيح الرسالة، واختيار العناصر، وتوفير معلومات داعمة.",
    en: "The three basic elements of data storytelling are clarification of the message, selection of elements, and provision of supporting information."
  },
  ref: "كتاب المدرسة ص 45 و 47 / p. 51 & 54"
}, {
  q: {
    ar: "اختر أنسب رسم بياني لكل من: (1) متوسطات درجات الحرارة الشهرية لعدة مدن معاً، (2) الفروق في نسب الشراء لفئة العمر × فئة المنتج بالمساحات، (3) العلاقة بين متغيرين كميين بعدد نقاط قليل: (كتاب الوزارة ص 49 / تمرين 3-3)",
    en: "Match: (a) monthly average temperatures of multiple cities, (b) purchase ratios for age group × product category using areas, (c) relationship between two quantitative variables with few points: (Textbook p. 56 / Exercise 3.3)"
  },
  opts: {
    ar: ["(1) خريطة حرارية (Heatmap) — (2) مخطط مستطيلات (Mosaic Plot) — (3) مخطط مبعثر (Scatter Plot)", "(1) مخطط مبعثر — (2) خريطة حرارية — (3) مخطط مستطيلات", "(1) مخطط مستطيلات — (2) مخطط مبعثر — (3) خريطة حرارية", "جميعها تُرسم بالمخطط المبعثر فقط"],
    en: ["(a) Heatmap — (b) Mosaic plot — (c) Scatter plot", "(a) Scatter plot — (b) Heatmap — (c) Mosaic plot", "(a) Mosaic plot — (b) Scatter plot — (c) Heatmap", "All use Scatter plot only"]
  },
  a: 0,
  exp: {
    ar: "المدن × الأشهر مع الحرارة = خريطة حرارية؛ العمر × المنتج بالمساحات = مخطط مستطيلات؛ متغيران كميان بعدد نقاط قليل = مخطط مبعثر.",
    en: "(a) Heatmap, (b) Mosaic plot, (c) Scatter plot."
  },
  ref: "كتاب المدرسة ص 49 / p. 56"
}, {
  q: {
    ar: "ماذا يحدث عندما يُعطى القارئ خريطة حرارية لا يبدأ مقياسها اللوني من الصفر، وما التغيير الوحيد الذي يجعلها صادقة دون تغيير البيانات؟ (كتاب الوزارة ص 49 / تحدٍّ)",
    en: "What happens when a heatmap's color scale does not start at zero, and what single change makes it honest without changing the data? (Textbook p. 56 / Challenge)"
  },
  opts: {
    ar: ["تخلق انطباعاً زائفاً بأن الفروق الصغيرة كبيرة ومثيرة؛ والتغيير الصادق هو ضبط المقياس اللوني ليبدأ من الصفر مع توضيح المفتاح", "تختفي جميع الألوان؛ والحل هو حذف العنوان", "تتحول الخريطة الحرارية إلى اختبار فرضيات", "لا يتأثر انطباع القارئ إطلاقاً"],
    en: ["It creates a false impression that small differences are dramatic; the honest fix is setting the color scale to start at zero with a clear legend", "All colors disappear; the fix is deleting the title", "The heatmap turns into a hypothesis test", "The reader's impression is unaffected"]
  },
  a: 0,
  exp: {
    ar: "عدم بدء المقياس من الصفر يضخم الفروق الطفيفة بصرياً؛ وضبط المقياس ليبدأ من الصفر يعيد الأمانة العلمية للرسم دون المساس بالبيانات.",
    en: "A non-zero baseline exaggerates tiny differences; starting the color scale at zero restores honesty without altering the data."
  },
  ref: "كتاب المدرسة ص 49 / p. 56"
}];

export const unit6ExamQuestions: Unit6Question[] = [
// LESSON 6-1 (Questions 1 to 9)
{
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "ما المصطلح الذي يُطلق على استنتاج خصائص المجتمع الإحصائي أو الحكم على ادعاءات عنه انطلاقاً من نتائج فحص عينة مأخوذة منه؟",
    en: "What is the term for inferring the properties of a population from the results of surveying a sample?"
  },
  opts: {
    ar: ["الاستدلال الإحصائي (Statistical Inference)", "تنظيف البيانات (Data Cleaning)", "التحويل المحوري (Pivoting)", "واجهة برمجة التطبيقات (API)"],
    en: ["Statistical Inference", "Data Cleaning", "Pivoting", "Application Programming Interface (API)"]
  },
  a: 0,
  exp: {
    ar: "الاستدلال الإحصائي (Statistical inference) هو الاستنتاج من العينة إلى المجتمع الكلي مع مراعاة درجة عدم اليقين.",
    en: "Statistical inference reasons from a sample back to the population while accounting for uncertainty."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "ما الفرق بين التقدير النقطي (Point Estimation) والتقدير الفاصل (Interval Estimation)؟",
    en: "What is the difference between Point Estimation and Interval Estimation?"
  },
  opts: {
    ar: ["التقدير النقطي يقدر خاصية المجتمع بقيمة واحدة (ويكون عدم اليقين غير مرئي)، بينما التقدير الفاصل يقدرها ضمن مدى يُسمى فترة الثقة ويُظهر درجة عدم اليقين", "التقدير النقطي يعطي مدى من القيم، والتقدير الفاصل يعطي رقماً واحداً فقط", "التقدير النقطي يزيل عدم اليقين تماماً من العينة", "لا يوجد أي فرق بينهما في طريقة العرض"],
    en: ["Point estimation gives a single value (with invisible uncertainty), whereas interval estimation gives a range (confidence interval) that shows the degree of uncertainty", "Point estimation gives a range, while interval estimation gives a single number", "Point estimation completely eliminates sampling uncertainty", "There is no difference between the two methods"]
  },
  a: 0,
  exp: {
    ar: "التقدير النقطي قيمة واحدة سهلة الفهم لكنها تخفي عدم اليقين، أما التقدير الفاصل فله عرض (فترة ثقة) يُظهر درجة عدم اليقين.",
    en: "Point estimation reports a single value; interval estimation reports a confidence interval whose width shows uncertainty."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "أي من الخيارات التالية يصف معنى 'فترة ثقة بمستوى ثقة 95%' بشكل أنسب وفق كتاب الوزارة؟",
    en: "Which option most appropriately describes a confidence interval with a 95% confidence level?"
  },
  opts: {
    ar: ["تعني أنه لو تكررت طريقة المسح نفسها مرات كثيرة (مثلاً 100 مرة)، فإن نحو 95% من فترات الثقة الناتجة ستحتوي على القيمة الحقيقية للمجتمع", "تعني أنه كلما ارتفع مستوى الثقة، ضاقت فترة الثقة دائماً", "تعني أن مستوى الثقة هو المعيار الحدي لرفض فرضية العدم في اختبار الفرضيات", "تعني أن 95% من أفراد العينة لهم نفس الطول تماماً"],
    en: ["It means that if the same survey method is repeated many times, about 95% of the resulting confidence intervals will contain the true population value", "The higher the confidence level, the narrower the confidence interval", "The confidence level is the threshold criterion used to reject H0", "95% of individuals in the sample have the exact same value"]
  },
  a: 0,
  exp: {
    ar: "مستوى الثقة 95% يصف أداء طريقة بناء الفترات عند تكرار أخذ العينات (نحو 95 فترة من كل 100 تحتوي على القيمة الحقيقية).",
    en: "A 95% confidence level means ~95% of intervals constructed over repeated sampling will capture the true population parameter."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "في اختبار الفرضيات، ماذا نسمي الفرضية التي تُستخدم كنقطة بداية للاختبار وتنص على 'لا يوجد فرق' أو 'لا توجد علاقة'؟",
    en: "In hypothesis testing, what is the hypothesis serving as the starting point of the test, such as 'no difference' or 'no relationship'?"
  },
  opts: {
    ar: ["فرضية العدم / الفرضية الصفرية (Null Hypothesis — H0)", "الفرضية البديلة (Alternative Hypothesis — H1)", "مستوى الثقة (Confidence Level)", "معامل التحديد (R²)"],
    en: ["Null Hypothesis (H0)", "Alternative Hypothesis (H1)", "Confidence Level", "Coefficient of Determination (R²)"]
  },
  a: 0,
  exp: {
    ar: "فرضية العدم (H0) هي نقطة البداية التي تفترض 'لا فرق أو لا علاقة' ويختبر الباحث مدى تعارض البيانات معها.",
    en: "The null hypothesis (H0) is the 'no difference / no relationship' starting point of a hypothesis test."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "ما الترتيب الصحيح لإجراءات اختبار الفرضيات الأربع كما ورد في كتاب الوزارة؟",
    en: "What is the correct 4-step sequence of the hypothesis testing procedure?"
  },
  opts: {
    ar: ["ضع فرضية العدم والفرضية البديلة ← حدد مستوى الدلالة (α) ← احسب القيمة الاحتمالية (p-value) ← قارن واتخذ حكماً", "احسب القيمة الاحتمالية ← ضع فرضية العدم ← حدد مستوى الدلالة ← اتخذ حكماً", "اتخذ حكماً أولاً ← ضع فرضية العدم ← احسب القيمة الاحتمالية", "حدد مستوى الدلالة ← تبنَّ الفرضية البديلة ← ضع فرضية العدم"],
    en: ["Set null and alternative hypotheses → decide significance level → compute p-value → compare and make a judgment", "Compute p-value → set null hypothesis → decide significance level → make a judgment", "Make a judgment → set null hypothesis → compute p-value", "Decide significance level → adopt alternative hypothesis → set null hypothesis"]
  },
  a: 0,
  exp: {
    ar: "يسير اختبار الفرضيات بالترتيب: (1) وضع H0 و H1، (2) تحديد α مسبقاً، (3) حساب p-value، (4) المقارنة وإصدار الحكم.",
    en: "Procedure: ① Set H0 & H1 → ② Decide significance level α → ③ Compute p-value → ④ Compare p-value with α and judge."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "لنفترض أنه في اختبار فرضيات تم تحديد مستوى الدلالة عند 0.05 (5%)، وكانت القيمة الاحتمالية المحسوبة p-value = 0.03. ما الحكم الصحيح؟",
    en: "In a hypothesis test with significance level 0.05 (5%), suppose the p-value is 0.03. What is the appropriate judgment?"
  },
  opts: {
    ar: ["رفض فرضية العدم (H0) وتبني الفرضية البديلة (H1) لأن النتيجة ذات دلالة إحصائية", "عدم رفض فرضية العدم (H0)", "رفض الفرضية البديلة (H1)", "تغيير مستوى الدلالة بعد رؤية النتيجة إلى 0.01"],
    en: ["Reject the null hypothesis (H0) and adopt the alternative hypothesis (H1)", "Do not reject the null hypothesis", "Reject the alternative hypothesis", "Change the significance level to 0.01 after seeing the result"]
  },
  a: 0,
  exp: {
    ar: "بما أن p-value (0.03) < مستوى الدلالة (0.05)، نرفض فرضية العدم H0 ونتبنى الفرضية البديلة H1.",
    en: "Because p-value (0.03) < significance level (0.05), we reject H0 and adopt H1."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "أي اختبار يُستخدم لمقارنة متوسطي مجموعتين (مثل درجات طريقتي تدريس)، وأي اختبار يفحص العلاقة بين متغيرين فئويين (مثل الجنس وتفضيل المادة)؟",
    en: "Which test examines a difference in the means of two groups, and which examines a relationship between two categorical variables?"
  },
  opts: {
    ar: ["مقارنة المتوسطين: اختبار t (t-test) — وعلاقة المتغيرين الفئويين: اختبار مربع كاي (Chi-squared test)", "مقارنة المتوسطين: اختبار مربع كاي — وعلاقة المتغيرين الفئويين: اختبار t", "كلاهما يُفحص باختبار مربع كاي فقط", "كلاهما يُفحص بالتقدير النقطي فقط"],
    en: ["Two group means: t-test — Two categorical variables: Chi-squared test", "Two group means: Chi-squared test — Two categorical variables: t-test", "Both use only the Chi-squared test", "Both use only point estimation"]
  },
  a: 0,
  exp: {
    ar: "اختبار t يقارن متوسطي مجموعتين كميتين، واختبار مربع كاي يفحص الاستقلال/الارتباط بين متغيرين فئويين.",
    en: "The t-test compares means of two groups; the Chi-squared test checks relationships between two categorical variables."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "أي من الخيارات التالية لا يُعد وصفاً مناسباً للأخطاء في اختبار الفرضيات؟",
    en: "Which option is NOT an appropriate description of errors in hypothesis testing?"
  },
  opts: {
    ar: ["خفض مستوى الدلالة (α) يمكن أن يقلل من خطأ النوع الأول وخطأ النوع الثاني في آنٍ واحد", "خطأ النوع الأول هو رفض فرضية العدم بينما تكون في الواقع صحيحة", "خطأ النوع الثاني هو عدم رفض فرضية العدم بينما تكون في الواقع خاطئة", "لخطأي النوع الأول والثاني علاقة مفاضلة (Trade-off relationship)"],
    en: ["Lowering the significance level can simultaneously reduce both Type I and Type II errors", "A Type I error is rejecting the null hypothesis when it is actually correct", "A Type II error is not rejecting the null hypothesis when it is actually incorrect", "Type I and Type II errors have a trade-off relationship"]
  },
  a: 0,
  exp: {
    ar: "خفض مستوى الدلالة يقلل خطأ النوع الأول لكنه يزيد احتمال خطأ النوع الثاني (علاقة مفاضلة).",
    en: "Lowering α reduces Type I error but tends to increase Type II error; they cannot both be reduced simply by lowering α."
  }
}, {
  lesson: {
    ar: "الدرس 6-1",
    en: "Lesson 6-1"
  },
  q: {
    ar: "أي من الخيارات التالية يصف تفسير القيمة الاحتمالية (p-value) والاستدلال الإحصائي بشكل صحيح؟",
    en: "Which option most appropriately describes the interpretation of p-values and statistical inference?"
  },
  opts: {
    ar: ["مع كمية كبيرة من البيانات، حتى الفرق الضئيل جداً يمكن أن يصبح ذا دلالة إحصائية (لذا فالدلالة الإحصائية تختلف عن الأهمية العملية)", "القيمة الاحتمالية هي احتمال صحة فرضية العدم", "إذا انخفضت القيمة الاحتمالية عن 0.05 فإن الاستنتاج صحيح بالتأكيد المطلق", "يمكن للاستدلال الإحصائي أن يزيل عدم اليقين تماماً"],
    en: ["With a large amount of data, even a tiny difference can become statistically significant (statistical significance ≠ practical importance)", "The p-value is the probability that the null hypothesis is correct", "If the p-value falls below 0.05, the conclusion is certainly correct", "Statistical inference can completely remove uncertainty"]
  },
  a: 0,
  exp: {
    ar: "مع العينات الكبيرة جداً، يصبح الفرق الضئيل ذا دلالة إحصائية، لذا يجب التمييز دائماً بين الدلالة الإحصائية والأهمية العملية.",
    en: "Large datasets can make tiny differences statistically significant; practical importance must be judged separately."
  }
},
// LESSON 6-2 (Questions 10 to 17)
{
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "في تحليل الانحدار، ماذا نسمي المتغير الذي يمثل 'النتيجة' المراد التنبؤ بها، والمتغير المستخدم 'كمدخل' للتنبؤ بها على الترتيب؟",
    en: "In regression analysis, what are the variables called that are the result and the input used to predict it, respectively?"
  },
  opts: {
    ar: ["النتيجة: متغير الاستجابة / التابع (Response variable) — والمدخل: المتغير التفسيري (Explanatory variable)", "النتيجة: المتغير التفسيري — والمدخل: متغير الاستجابة", "كلاهما يُسمى المتبقي (Residual)", "كلاهما يُسمى نقطة التقاطع (Intercept)"],
    en: ["Result: Response variable (dependent) — Input: Explanatory variable", "Result: Explanatory variable — Input: Response variable", "Both are called Residuals", "Both are called Intercepts"]
  },
  a: 0,
  exp: {
    ar: "متغير الاستجابة (Response variable) هو النتيجة التابعة (مثل المبيعات)، والمتغير التفسيري (Explanatory variable) هو المدخل المستخدم للتنبؤ.",
    en: "The result is the response (dependent) variable, and the input used to predict it is the explanatory variable."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "ما المصطلح الخاص بـ 'الفرق بين القيم الفعلية وخط الانحدار'، وما الطريقة التي تصغّر مجموع مربعات هذه الفروق؟",
    en: "What is the term for the discrepancy between actual values and the regression line, and which method minimizes the sum of their squares?"
  },
  opts: {
    ar: ["الفرق يُسمى المتبقي (Residual) — والطريقة تُسمى طريقة المربعات الصغرى (Least-squares method)", "الفرق يُسمى مستوى الثقة — والطريقة تُسمى التقييم الإرشادي", "الفرق يُسمى العامل المربك — والطريقة تُسمى المعاينة الطبقية", "الفرق يُسمى p-value — والطريقة تُسمى اختبار مربع كاي"],
    en: ["Discrepancy: Residual — Method: Least-squares method", "Discrepancy: Confidence level — Method: Heuristic evaluation", "Discrepancy: Confounder — Method: Stratified sampling", "Discrepancy: p-value — Method: Chi-squared test"]
  },
  a: 0,
  exp: {
    ar: "الفرق بين القيمة الفعلية والقيمة المتوقعة على خط الانحدار هو المتبقي (Residual)، وتُضبط المعاملات بطريقة المربعات الصغرى.",
    en: "Each discrepancy is a residual, and the regression line is fitted by the least-squares method."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "ما الفرق الأساسي بين تحليل الانحدار البسيط (Simple Regression) وتحليل الانحدار المتعدد (Multiple Regression)؟",
    en: "What is the main difference between Simple Regression and Multiple Regression?"
  },
  opts: {
    ar: ["يستخدم الانحدار البسيط متغيراً تفسيرياً واحداً (y = ax + b)، ويستخدم الانحدار المتعدد متغيرين تفسيريين أو أكثر (y = a1x1 + a2x2 + b)", "يستخدم الانحدار البسيط عدة متغيرات تفسيرية، والمتعدد متغيراً واحداً", "لا يوجد فرق بينهما في عدد المتغيرات التفسيرية", "الانحدار البسيط يستخدم للصور فقط"],
    en: ["Simple regression uses one explanatory variable (y = ax + b), and multiple regression uses multiple explanatory variables", "Simple regression uses multiple explanatory variables, and multiple uses one", "There is no difference in the number of explanatory variables", "Simple regression is used only for images"]
  },
  a: 0,
  exp: {
    ar: "الانحدار البسيط يتنبأ من متغير تفسيري واحد، जबकि الانحدار المتعدد يدمج عدة متغيرات تفسيرية (مثل مساحة المنزل وعمره والمسافة).",
    en: "Simple regression uses 1 explanatory variable; multiple regression uses 2 or more explanatory variables."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "أي مؤشر تقييم يأخذ قيماً بين 0 و 1 ويُظهر مدى قدرة النموذج على تفسير التباين (Variability) في البيانات؟",
    en: "Which evaluation indicator takes values between 0 and 1 and shows how well the model explains the variability in the data?"
  },
  opts: {
    ar: ["معامل التحديد — R² (Coefficient of determination)", "متوسط الخطأ المطلق — MAE", "الجذر التربيعي لمتوسط مربع الخطأ — RMSE", "مستوى الدلالة — α"],
    en: ["R² (Coefficient of determination)", "MAE (Mean Absolute Error)", "RMSE (Root Mean Square Error)", "Significance level (α)"]
  },
  a: 0,
  exp: {
    ar: "معامل التحديد (R²) يعبر على مقياس 0 إلى 1 عن مدى تفسير النموذج للتباين في البيانات، وكلما اقترب من 1 كان أفضل.",
    en: "R² expresses on a 0–1 scale how well the model explains data variability; closer to 1 is better."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "ما الفرق بين مؤشري الخطأ RMSE و MAE عند تقييم نموذج انحدار؟",
    en: "What is the key difference between RMSE and MAE when evaluating prediction errors?"
  },
  opts: {
    ar: ["كلاهما يقيس حجم خطأ التنبؤ (الأصغر أفضل)، لكن RMSE يربّع الفروق فيعطي وزناً أكبر للأخطاء الكبيرة، بينما MAE يحسب متوسط الفروق المطلقة فهو أقل تأثراً بالقيم المتطرفة الشاذة", "RMSE و MAE يستخدمان نفس معادلة الحساب وتتطابق قيمتاهما دائماً", "MAE يعطي وزناً أكبر للأخطاء الكبيرة من RMSE", "كلما كبرت قيمة RMSE و MAE زادت دقة التنبؤ"],
    en: ["Both measure error size (smaller is better), but RMSE squares discrepancies so it weights large errors more heavily, while MAE averages absolute errors so it is less affected by outliers", "RMSE and MAE use the exact same formula and always coincide", "MAE weights large discrepancies more heavily than RMSE", "Larger RMSE and MAE values mean higher accuracy"]
  },
  a: 0,
  exp: {
    ar: "لأن RMSE يربع المتبقيات فإنه يتأثر بشدة بالأخطاء الكبيرة، بينما MAE يأخذ القيمة المطلقة فيكون أقل تأثراً بالقيم الشاذة.",
    en: "RMSE weights large misses heavily by squaring them, whereas MAE is less swayed by extreme outliers."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "أي من الخيارات التالية يصف العلاقة بين الارتباط (Correlation) والسببية (Causation) بشكل أنسب؟",
    en: "Which option most appropriately describes correlation and causation in regression analysis?"
  },
  opts: {
    ar: ["ملاءمة معادلة التنبؤ لا تثبت السببية؛ ولادعاء السببية يلزم الأسبقية الزمنية، واستبعاد تأثير العوامل الأخرى (كالعامل المربك)، ووجود دعم نظري", "إذا وُجد ارتباط أو R² مرتفع، فإن السببية تتحقق بالضرورة", "بمجرد الحصول على معادلة تنبؤ من الانحدار، فإنها تثبت السببية إثباتاً تاماً", "لا فرق إطلاقاً بين الارتباط والسببية"],
    en: ["A fitting equation does not prove causation; claiming causation requires temporal precedence, exclusion of other factors' influence, and theoretical support", "If correlation or a high R² exists, causation necessarily holds", "Obtaining a regression equation completely proves causation", "Correlation and causation are identical"]
  },
  a: 0,
  exp: {
    ar: "الملاءمة الجيدة تعكس ارتباطاً إحصائياً فقط؛ وإثبات السببية يتطلب الأسبقية الزمنية واستبعاد العوامل المربكة والدعم النظري.",
    en: "A good fit shows correlation only; causation requires temporal precedence, ruling out confounders, and theory."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "ماذا نسمي العامل الثالث الخفي الذي يجعل متغيرين يتحركان معاً (مثل ارتفاع درجة الحرارة الذي يزيد مبيعات الآيس كريم وحوادث السباحة معاً) دون أن يسبب أحدهما الآخر؟",
    en: "What is the term for a hidden third factor that makes two variables move together without one causing the other?"
  },
  opts: {
    ar: ["العامل المربك (Confounder / Confounding variable)", "نقطة التقاطع (Intercept)", "المتبقي (Residual)", "التقدير النقطي (Point estimate)"],
    en: ["Confounder (Confounding variable)", "Intercept", "Residual", "Point estimate"]
  },
  a: 0,
  exp: {
    ar: "العامل المربك (Confounder) هو سبب ثالث خفي يقف وراء ارتباط ظاهري بين متغيرين.",
    en: "A confounder is a hidden third cause behind an observed correlation."
  }
}, {
  lesson: {
    ar: "الدرس 6-2",
    en: "Lesson 6-2"
  },
  q: {
    ar: "أي من الخيارات التالية لا يُعد نقطة حذر مناسبة عند استخدام نماذج الانحدار؟ (كتاب الوزارة ص 41)",
    en: "Which option is NOT an appropriate point of caution when using regression models? (Textbook p. 46)"
  },
  opts: {
    ar: ["إذا كان R² قريباً من 1، يمكن الحكم على جودة النموذج دون الحاجة إلى فحص مؤشرات أخرى", "لا تستنتج وجود سببية لمجرد أن معادلة التنبؤ تلائم البيانات", "تأكد من الدقة باستخدام مؤشرات التقييم وتحقق من صلاحية النموذج في ضوء الغرض", "إضافة المزيد من المتغيرات التفسيرية لا يحسّن الدقة بالضرورة"],
    en: ["If R² is close to 1, one may judge the goodness of the model without checking other indicators", "Do not conclude causation just because the prediction equation fits", "Confirm accuracy with evaluation indicators and verify validity in light of the purpose", "Adding more explanatory variables does not necessarily improve accuracy"]
  },
  a: 0,
  exp: {
    ar: "من التنبيهات الأساسية في الكتاب: لا تحكم على النموذج من R² وحده أبداً، بل افحص معه RMSE و MAE وصلاحية النطاق.",
    en: "Never judge a regression model by R² alone; always inspect error indicators (RMSE, MAE) and data range."
  }
},
// LESSON 6-3 (Questions 18 to 25)
{
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "ما الدوران الرئيسيان اللذان يؤديهما تصور البيانات (Data Visualization) وفق كتاب الوزارة؟",
    en: "What are the two broad roles of Data Visualization according to the textbook?"
  },
  opts: {
    ar: ["(1) تعميق فهم المحلل نفسه (لإدراك التوزيع والاتجاهات والشواذ)، و(2) توصيل البيانات للآخرين بطريقة واضحة وسهلة الفهم", "إخفاء القيم الشاذة وتشفير قواعد البيانات", "حذف العناوين وتقليل حجم ذاكرة الحاسوب", "استبدال جمع البيانات وتنظيفها تماماً"],
    en: ["(1) Deepen the analyst's own understanding, and (2) Communicate data to others in an easy-to-understand way", "Hide outliers and encrypt databases", "Remove titles and shrink computer memory", "Replace data collection and cleaning entirely"]
  },
  a: 0,
  exp: {
    ar: "تصور البيانات يساعد المحلل على الفهم واكتساب الرؤى، ويساعده على توصيل النتائج للجمهور بوضوح.",
    en: "Data visualization serves both to deepen the analyst's own understanding and to communicate findings to others."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "ما الرسم البياني الذي تُرتب فيه العناصر على محورين، ويُمثَّل فيه حجم قيمة ثالثة عددية بواسطة تدرج اللون أو اختلافات الصبغة؟",
    en: "What is the graph in which items are arranged on two axes, and the size of a third numerical value is represented by color gradation or hue?"
  },
  opts: {
    ar: ["الخريطة الحرارية (Heatmap)", "مخطط المستطيلات / الفسيفساء (Mosaic Plot)", "المخطط المبعثر (Scatter Plot)", "المدرج التكراري البسيط"],
    en: ["Heatmap", "Mosaic Plot", "Scatter Plot", "Simple Histogram"]
  },
  a: 0,
  exp: {
    ar: "الخريطة الحرارية (Heatmap) تستخدم تدرج اللون لتمثيل قيمة عددية ثالثة عبر شبكة من محورين (مثل اليوم × الساعة).",
    en: "A heatmap represents a third numerical value across two axes using color gradation."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "ما الرسم البياني الذي يمثل العلاقة ونسب التكرارات بين متغيرين فئويين (Two categorical variables) باستخدام حجم المساحات المستطيلة؟",
    en: "What is the graph that represents the relationship between two categorical variables by the size of rectangular areas?"
  },
  opts: {
    ar: ["مخطط المستطيلات / الفسيفساء (Mosaic Plot)", "الخريطة الحرارية (Heatmap)", "الرسم البياني الخطي (Line Graph)", "المخطط المبعثر (Scatter Plot)"],
    en: ["Mosaic Plot", "Heatmap", "Line Graph", "Scatter Plot"]
  },
  a: 0,
  exp: {
    ar: "مخطط المستطيلات (Mosaic plot) يوضح نسب توليفات متغيرين فئويين (كالجنس × المادة المفضلة) كمساحات مستطيلة.",
    en: "A mosaic plot visually represents proportions of two categorical variables using rectangular areas."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "ماذا نسمي المشكلة التي تحدث في المخطط المبعثر (Scatter plot) عندما يكون عدد النقاط كبيراً جداً فتتداخل النقاط وتختفي الكثافة، وما الرسم الذي يعالجها؟",
    en: "What is the problem where many points in a scatter plot overlap so density is hidden, and which visualization resolves it?"
  },
  opts: {
    ar: ["المشكلة: التراكب الزائد للنقاط (Overplotting) — ويعالجها استخدام الخريطة الحرارية (Heatmap) لإظهار الكثافة", "المشكلة: خطأ النوع الأول — ويعالجها حذف المحاور", "المشكلة: الانحدار البسيط — ويعالجها التقدير النقطي", "المشكلة: الهلوسة — ويعالجها RLHF"],
    en: ["Problem: Overplotting — Resolved by using a Heatmap to show density at a glance", "Problem: Type I error — Resolved by deleting axis labels", "Problem: Simple regression — Resolved by point estimation", "Problem: Hallucination — Resolved by RLHF"]
  },
  a: 0,
  exp: {
    ar: "عند تداخل آلاف النقاط في المخطط المبعثر يحدث التراكب الزائد (Overplotting)، وتكشف الخريطة الحرارية كثافة النقاط بوضوح.",
    en: "When scatter plot points overlap into a blob (overplotting), a heatmap clearly reveals where data density lies."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "ما المصطلح الذي يُطلق على 'استخدام البيانات والتصور لنقل الرسالة التي تريد إيصالها منظمة كقصة'، وما عناصره الأساسية الثلاثة؟",
    en: "What is the term for using data and visualization to convey a message structured like a story, and what are its three basic elements?"
  },
  opts: {
    ar: ["سرد قصص البيانات (Data Storytelling) — وعناصره: (1) توضيح الرسالة، (2) اختيار العناصر، (3) توفير معلومات داعمة", "التقييم الإرشادي — وعناصره: الاتساق، منع الأخطاء، وضوح حالة النظام", "اختبار الفرضيات — وعناصره: H0 و H1 و p-value", "الانحدار المتعدد — وعناصره: R² و RMSE و MAE"],
    en: ["Data Storytelling — Elements: (1) Clarification of the message, (2) Selection of elements, (3) Provision of supporting information", "Heuristic Evaluation — Elements: Consistency, error prevention, status visibility", "Hypothesis Testing — Elements: H0, H1, p-value", "Multiple Regression — Elements: R², RMSE, MAE"]
  },
  a: 0,
  exp: {
    ar: "سرد قصص البيانات (Data storytelling) يقوم على توضيح الرسالة في جملة، واختيار العناصر وإزالة الزوائد، وتوفير معلومات داعمة صادقة.",
    en: "Data storytelling is built on clarification of the message, selection of elements, and provision of supporting information."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "أي من الخيارات التالية لا يُعد عنصراً أساسياً مناسباً في سرد قصص البيانات (Data Storytelling)؟ (كتاب الوزارة ص 49)",
    en: "Which of the following is NOT an appropriate basic element of data storytelling? (Textbook p. 56)"
  },
  opts: {
    ar: ["تضمين أكبر عدد ممكن من العناصر غير المرتبطة بالرسالة لزيادة كمية المعلومات", "جعل من الممكن التعبير في جملة واحدة عما تريد نقله من خلال الرسم البياني (توضيح الرسالة)", "إزالة العناصر غير المرتبطة بالرسالة والتركيز على إبراز الأجزاء المهمة (اختيار العناصر)", "ترتيب العنوان وتسميات المحاور والوحدات والملاحظات بشكل صحيح (توفير معلومات داعمة)"],
    en: ["Include as many elements unrelated to the message as possible to increase the amount of information", "Make it possible to express in one sentence what you want to convey (clarification of the message)", "Remove elements unrelated to the message and emphasize key parts (selection of elements)", "Properly arrange title, axis labels, units, and notes (provision of supporting information)"]
  },
  a: 0,
  exp: {
    ar: "إضافة عناصر غير مرتبطة بالرسالة يربك القارئ ويخفي الرسالة؛ الصواب هو إزالة العناصر غير المرتبطة بالرسالة.",
    en: "Adding unrelated elements buries the message; selection of elements requires removing non-essential clutter."
  }
}, {
  lesson: {
    ar: "الدرس 6-3",
    en: "Lesson 6-3"
  },
  q: {
    ar: "إذا أردت إظهار الفروق في نسب الشراء حسب (الفئة العمرية × فئة المنتج) باستخدام المساحات، وإدراك متوسطات الحرارة الشهرية لعدة مدن معاً من نظرة واحدة، فما الرسم الأنسب لكل منهما؟",
    en: "Which graphs best suit: (1) purchase ratios for (age group × product category) using areas, and (2) monthly average temperatures of multiple cities at a glance?"
  },
  opts: {
    ar: ["(1) مخطط مستطيلات (Mosaic Plot) — و(2) خريطة حرارية (Heatmap)", "(1) خريطة حرارية — و(2) مخطط مستطيلات", "كلاهما بالمخطط المبعثر فقط", "كلاهما بالقطاعات الدائرية فقط"],
    en: ["(1) Mosaic Plot — and (2) Heatmap", "(1) Heatmap — and (2) Mosaic Plot", "Both using Scatter Plots only", "Both using Pie Charts only"]
  },
  a: 0,
  exp: {
    ar: "نسب فئتين (العمر × المنتج) بالمساحات يناسبها مخطط المستطيلات، بينما قيمة عددية (الحرارة) عبر محورين (المدينة × الشهر) يناسبها الخريطة الحرارية.",
    en: "Two categories by area = Mosaic plot; a numerical value across two axes (city × month) = Heatmap."
  }
}, {
  lesson: {
    ar: "شامل الوحدة 6",
    en: "Unit 6 Synthesis"
  },
  q: {
    ar: "كيف تتكامل دروس الوحدة السادسة الثلاثة في رحلة تحليل البيانات والتواصل؟",
    en: "How do the three lessons of Unit 6 integrate into a complete analysis and communication workflow?"
  },
  opts: {
    ar: ["الاستدلال من العينة للمجتمع مع قياس عدم اليقين بفترات الثقة واختبار الفرضيات (6-1) ← نمذجة العلاقات والتنبؤ بالانحدار وتقييمه بـ R² و RMSE و MAE دون خلط الارتباط بالسببية (6-2) ← تصور الأنماط بصدق وسرد قصة بيانات واضحة للجمهور (6-3)", "حذف جميع التسميات والاعتماد على التقدير النقطي وحده واعتبار كل ارتباط سببية حتمية", "إضافة أكبر عدد ممكن من المتغيرات والألوان العشوائية دون فحص الأخطاء", "تجاهل القيمة الاحتمالية واستخدام المخطط المبعثر دائماً حتى مع التراكب الزائد"],
    en: ["Infer from sample to population while measuring uncertainty (6-1) → Model & evaluate predictions via regression without confusing correlation with causation (6-2) → Visualize patterns honestly & tell a clear data story (6-3)", "Hide chart labels, rely only on point estimates, and treat every correlation as causation", "Add random variables and clutter without checking error indicators", "Ignore p-values and always use overplotted scatter plots"]
  },
  a: 0,
  exp: {
    ar: "الوحدة السادسة تبني محلل بيانات متكاملاً: يستدل بحذر إحصائي (6-1)، ويتنبأ ويقيّم النماذج بدقة (6-2)، ويتواصل بوضوح وأمانة علمية (6-3).",
    en: "Unit 6 forms a cohesive pillar: rigorous statistical inference (6-1), careful regression modeling & evaluation (6-2), and honest visual communication (6-3)."
  }
}];
