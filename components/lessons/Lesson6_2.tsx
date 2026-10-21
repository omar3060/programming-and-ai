'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit6LessonQuiz';
import { RegressionStudioSimulator } from '@/components/simulators/RegressionStudioSimulator';

export function Lesson6_2() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(current => ({ ...current, [id]: !current[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-6-2" className="lesson-view space-y-8 animate-fadeIn">


                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-chart-scatter"></i>
                                    <span className="lang-ar">الدرس 6-2 (كتاب الوزارة ص 34 - ص 41)</span>
                                    <span className="lang-en">Lesson 6-2 (Textbook pp. 39 - 47)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">تحليل الانحدار وتقييم النماذج</span>
                                    <span className="lang-en">Regression Analysis & Model Evaluation</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">استخدام وتقييم تحليل الانحدار (Use & Evaluation of Regression Analysis)</span>
                                <span className="lang-en">Use and Evaluation of Regression Analysis</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح دقيق ومفصل للدرس الثاني: تحويل العلاقة بين المتغير التفسيري (Explanatory Variable) ومتغير الاستجابة (Response Variable) إلى معادلة رياضية (النموذج Model)، الفرق بين الانحدار البسيط (y = ax + b بطريقة المربعات الصغرى لتقليل مجموع مربعات المتبقيات Residuals) والانحدار المتعدد (y = a1x1 + a2x2 + b)، مؤشرات تقييم النماذج الثلاثة (معامل التحديد R²، الجذر التربيعي لمتوسط مربع الخطأ RMSE، ومتوسط الخطأ المطلق MAE)، ولماذا لا تُثبت الملاءمة الجيدة وجود علاقة سببية (الارتباط مقابل السببية والعامل المربك Confounder).</span>
                                <span className="lang-en">Comprehensive breakdown of Lesson 6-2: Turning relationships between explanatory variables (inputs) and response variables (results) into prediction equations (models), Simple Regression (y = ax + b via least-squares minimizing squared residuals) vs Multiple Regression (y = a1x1 + a2x2 + b), the three model evaluation indicators (R², RMSE, MAE), and why a good fit does not prove causation (correlation vs causation & confounders).</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 text-xs space-y-1 shrink-0 w-full md:w-64 shadow-md">
                            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <span className="lang-ar">إشراف وتدريس:</span>
                                <span className="lang-en">Course Instructor:</span>
                            </div>
                            <div className="font-bold text-sm">
                                <span className="lang-ar">المهندس عمر محمود</span>
                                <span className="lang-en">Eng. Omar Mahmoud</span>
                            </div>
                            <div className="text-[11px] text-amber-400 font-mono">01012306019</div>
                        </div>
                    </div>

                    
                    <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-cyan-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 34):</span>
                                <span className="lang-en">Official Learning Objectives (p. 39):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">توضيح الفرق بين الانحدار البسيط (Simple regression) والانحدار المتعدد (Multiple regression)، وما يمثله نموذج الانحدار.</span><span className="lang-en">Explain the difference between simple and multiple regression, and what a regression model represents.</span></li>
                                <li>• <span className="lang-ar">تقييم نموذج الانحدار باستخدام مقاييس R² و RMSE و MAE، موضحاً سبب عدم إثبات &quot;الملاءمة الجيدة&quot; لوجود علاقة سببية.</span><span className="lang-en">Evaluate a regression model using R², RMSE, and MAE, and explain why a good fit does not prove causation.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 35):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 40):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف يحوّل الانحدار البيانات إلى تنبؤ، وكيف نحكم على مدى إمكانية الوثوق بذلك التنبؤ؟&quot;</span>
                                <span className="lang-en">&quot;How does regression turn data into a prediction, and how do we judge whether that prediction can be trusted?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">مرحلة تحليل الانحدار والانحدار البسيط مقابل المتعدد (ص 35 - 36)</span>
                            <span className="lang-en">1. Regression Analysis Stage & 2. Simple vs. Multiple Regression (pp. 40 - 41)</span>
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 font-bold">y = ax + b • Least-Squares</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2.5">
                            <strong className="text-cyan-400 text-sm font-black block">
                                <span className="lang-ar">1. المفاهيم الأساسية لتحليل الانحدار (ص 35 / p. 40):</span>
                                <span className="lang-en">1. Core Concepts of Regression Analysis (p. 40):</span>
                            </strong>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">تحليل الانحدار (Regression Analysis):</span><span className="lang-en">Regression Analysis:</span></strong>
                                <span className="lang-ar"> طريقة تعبّر عن العلاقة بين المتغيرات في البيانات كمعادلة رياضية، وتستخدمها للتنبؤ (Prediction) والمحاكاة.</span>
                                <span className="lang-en"> A method that expresses the relationship between variables in data as an equation, and uses it for prediction and simulation.</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">متغير الاستجابة (Response Variable / التابع y):</span><span className="lang-en">Response Variable (Dependent y):</span></strong>
                                <span className="lang-ar"> المتغير الذي يمثل <strong>النتيجة</strong> التي نريد تفسيرها أو التنبؤ بها (مثل: مبيعات الآيس كريم، أو سعر المنزل).</span>
                                <span className="lang-en"> The variable that is the <strong>result</strong> we want to predict (e.g., ice cream sales, housing price).</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">المتغير التفسيري (Explanatory Variable / المدخل x):</span><span className="lang-en">Explanatory Variable (Input x):</span></strong>
                                <span className="lang-ar"> المتغير المستخدم للتفسير أو التنبؤ بالنتيجة (مثل: درجة الحرارة)، ولا يمثل سبباً مثبتاً بمجرد دخوله النموذج.</span>
                                <span className="lang-en"> The variable used as input to explain or predict the response variable (e.g., temperature).</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">النموذج (Model):</span><span className="lang-en">The Model:</span></strong>
                                <span className="lang-ar"> المعادلة التي يتم الحصول عليها من البيانات، وهي تمثيل مبسط لعلاقة حقيقية في صيغة قابلة للحساب.</span>
                                <span className="lang-en"> The equation obtained from data—a simplified representation of a real relationship.</span>
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2.5">
                            <strong className="text-emerald-400 text-sm font-black block">
                                <span className="lang-ar">2. الانحدار البسيط والمتعدد وطريقة المربعات الصغرى (ص 36 / p. 41):</span>
                                <span className="lang-en">2. Simple vs. Multiple Regression & Least-Squares (pp. 40 - 41):</span>
                            </strong>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">الانحدار البسيط (Simple Regression):</span><span className="lang-en">Simple Regression:</span></strong>
                                <span className="lang-ar"> يتنبأ بمتغير الاستجابة (<code className="text-emerald-300">y</code>) باستخدام <strong>متغير تفسيري واحد فقط (<code className="text-emerald-300">x</code>)</strong> عبر خط مستقيم يُسمى <strong>خط الانحدار (Regression line)</strong> بالمعادلة: <code className="text-amber-300 font-mono">y = ax + b</code>.</span>
                                <span className="lang-en"> Predicts response variable (<code className="text-emerald-300">y</code>) using <strong>one explanatory variable (<code className="text-emerald-300">x</code>)</strong> as a straight <strong>regression line</strong>: <code className="text-amber-300 font-mono">y = ax + b</code>.</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">المتبقي (Residual) وطريقة المربعات الصغرى (Least-Squares Method):</span><span className="lang-en">Residual & Least-Squares Method:</span></strong>
                                <span className="lang-ar"> الفرق بين القيمة الفعلية وخط الانحدار يُسمى <strong>المتبقي (Residual)</strong>. وتُحدد معاملات الخط (<code className="text-cyan-300">a</code> الميل/المعامل و <code className="text-cyan-300">b</code> نقطة التقاطع) بطريقة <strong>المربعات الصغرى</strong> التي تصغّر مجموع مربعات المتبقيات إلى أدنى حد.</span>
                                <span className="lang-en"> Each discrepancy between actual values and the regression line is a <strong>residual</strong>. The <strong>least-squares method</strong> finds <code className="text-cyan-300">a</code> and <code className="text-cyan-300">b</code> to minimize the sum of squared residuals.</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">الانحدار المتعدد (Multiple Regression):</span><span className="lang-en">Multiple Regression:</span></strong>
                                <span className="lang-ar"> يتنبأ بمتغير الاستجابة باستخدام <strong>متغيرين تفسيريين أو أكثر</strong> بالمعادلة: <code className="text-amber-300 font-mono">y = a1x1 + a2x2 + b</code> (مثل التنبؤ بسعر المنزل من مساحته، وعمره، والمسافة من محطة النقل).</span>
                                <span className="lang-en"> Predicts the response variable using <strong>two or more explanatory variables</strong> (<code className="text-amber-300 font-mono">y = a1x1 + a2x2 + b</code>), e.g., housing price from size, age, and distance to station.</span>
                            </p>
                        </div>
                    </div>

                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[600px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">الجانب (Aspect)</span><span className="lang-en">Aspect</span></th>
                                    <th className="p-3 text-start text-cyan-400"><span className="lang-ar">الانحدار البسيط (Simple Regression)</span><span className="lang-en">Simple Regression</span></th>
                                    <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الانحدار المتعدد (Multiple Regression)</span><span className="lang-en">Multiple Regression</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">عدد المتغيرات التفسيرية</span><span className="lang-en">Number of explanatory variables</span></td>
                                    <td className="p-3 font-bold text-cyan-300"><span className="lang-ar">واحد فقط (One)</span><span className="lang-en">One (y = ax + b)</span></td>
                                    <td className="p-3 font-bold text-emerald-300"><span className="lang-ar">اثنان أو أكثر (Two or more)</span><span className="lang-en">Two or more (y = a1x1 + a2x2 + b)</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">خصائص النموذج</span><span className="lang-en">Characteristics of the model</span></td>
                                    <td className="p-3"><span className="lang-ar">بسيط وسهل التفسير.</span><span className="lang-en">Simple and easy to interpret.</span></td>
                                    <td className="p-3"><span className="lang-ar">يمكنه التعبير عن علاقات معقدة وأكثر واقعية.</span><span className="lang-en">Can express complex, realistic relationships.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">الحالات المناسبة</span><span className="lang-en">Suitable situations</span></td>
                                    <td className="p-3"><span className="lang-ar">عندما تريد نمذجة العلاقة بين متغيرين بإيجاز (مثل مبيعات الآيس كريم من الحرارة).</span><span className="lang-en">Capturing the relationship between two variables concisely (e.g., ice cream sales from temperature).</span></td>
                                    <td className="p-3"><span className="lang-ar">عندما يتأثر متغير الاستجابة بعدة عوامل معاً (مثل أسعار المنازل من المساحة والعمر والمسافة).</span><span className="lang-en">When the response variable is influenced by multiple factors simultaneously (e.g., housing prices).</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">٢</span>
                            <span className="lang-ar">مؤشرات تقييم النماذج (R²، RMSE، MAE) وتنبيهات السببية (ص 36 - 37)</span>
                            <span className="lang-en">3. Model Evaluation Indicators (R², RMSE, MAE) & 4. Cautions (pp. 41 - 42)</span>
                        </h3>
                        <span className="text-xs font-mono text-amber-400 font-bold">R² • RMSE • MAE • Causation</span>
                    </div>

                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[650px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">المؤشر (Indicator)</span><span className="lang-en">Indicator</span></th>
                                    <th className="p-3 text-start text-cyan-400"><span className="lang-ar">الوصف (مفهوم الحساب)</span><span className="lang-en">Description (Concept of Calculation)</span></th>
                                    <th className="p-3 text-start text-amber-400"><span className="lang-ar">التفسير والحساسية للقيم الشاذة (ص 37 / p. 41)</span><span className="lang-en">Interpretation & Outlier Sensitivity (p. 41)</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white font-mono">R²<br /><span className="text-[11px] font-sans text-emerald-400"><span className="lang-ar">معامل التحديد</span><span className="lang-en">Coefficient of Determination</span></span></td>
                                    <td className="p-3 font-semibold text-slate-200"><span className="lang-ar">يوضح على مقياس من <code className="text-emerald-300">0 إلى 1</code> مدى قدرة النموذج على تفسير التباين (Variability) في البيانات.</span><span className="lang-en">Expresses, on a <code className="text-emerald-300">0–1</code> scale, how well the model explains the variability in the data.</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>كلما اقتربت القيمة من 1</strong> كان تفسير النموذج للتباين أفضل؛ لكنه لا يكفي وحده للحكم على النموذج دون فحص مؤشرات الخطأ!</span><span className="lang-en"><strong>The closer to 1</strong>, the better the variation is explained (but never judge a model by R² alone!).</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white font-mono">RMSE<br /><span className="text-[11px] font-sans text-cyan-400"><span className="lang-ar">الجذر التربيعي لمتوسط مربع الخطأ</span><span className="lang-en">Root Mean Square Error</span></span></td>
                                    <td className="p-3 font-semibold text-slate-200"><span className="lang-ar">الجذر التربيعي لمتوسط مربعات الفروق بين القيم المتوقعة والفعلية.</span><span className="lang-en">The square root of the mean of the squared discrepancies between predicted and actual values.</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>كلما صغرت القيمة زادت دقة التنبؤ</strong>؛ يُقاس بنفس وحدات متغير الاستجابة، و<strong>يعطي وزناً أكبر للأخطاء الكبيرة (يتأثر بشدة بالقيم الشاذة)</strong>.</span><span className="lang-en"><strong>Smaller value = higher accuracy</strong>; expressed in same units as response variable; <strong>weights large discrepancies more heavily</strong>.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white font-mono">MAE<br /><span className="text-[11px] font-sans text-purple-400"><span className="lang-ar">متوسط الخطأ المطلق</span><span className="lang-en">Mean Absolute Error</span></span></td>
                                    <td className="p-3 font-semibold text-slate-200"><span className="lang-ar">متوسط القيم المطلقة للفروق بين القيم المتوقعة والفعلية.</span><span className="lang-en">The mean of the absolute values of the discrepancies between predicted and actual values.</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>كلما انخفضت القيمة زادت دقة التنبؤ</strong>؛ يقيّم الفروق في المتوسط، لذا فهو <strong>أقل تأثراً بالقيم المتطرفة الشاذة من RMSE</strong>.</span><span className="lang-en"><strong>Smaller value = higher accuracy</strong>; evaluates discrepancies on average, so <strong>less affected by outliers than RMSE</strong>.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/40 space-y-2.5 text-xs leading-relaxed">
                        <strong className="text-amber-400 text-sm font-black flex items-center gap-2">
                            <i className="fa-solid fa-shield-halved"></i>
                            <span className="lang-ar">4. التنبيهات الأربعة عند استخدام نماذج الانحدار (كتاب الوزارة ص 37 / pp. 41 - 42):</span>
                            <span className="lang-en">4. Four Key Cautions When Using Regression Models (pp. 41 - 42):</span>
                        </strong>
                        <ol className="space-y-1.5 text-sub list-decimal rtl:pr-4 ltr:pl-4">
                            <li><span className="lang-ar"><strong>لا تخلط بين الارتباط والسببية (Correlation vs. Causation):</strong> ملاءمة معادلة التنبؤ للبيانات تعكس ارتباطاً فقط ولا تثبت السببية! لإثبات السببية يلزم: <strong>الأسبقية الزمنية (Temporal precedence)</strong>، و<strong>استبعاد تأثير العوامل الأخرى (كالعامل المربك Confounder)</strong>، و<strong>وجود دعم نظري (Theoretical support)</strong>.</span><span className="lang-en"><strong>Do not confuse correlation with causation:</strong> A fitting equation does not prove cause. Causation requires <strong>temporal precedence</strong>, <strong>exclusion of other factors (confounders)</strong>, and <strong>theoretical support</strong>.</span></li>
                            <li><span className="lang-ar"><strong>النموذج لا يكتمل بمجرد إنشائه:</strong> تأكد من دقته بمؤشرات التقييم، وتحقق من صلاحيته في ضوء الغرض، و<strong>لا تطبقه خارج نطاق البيانات (Data range)</strong> الذي بُني منه.</span><span className="lang-en"><strong>A model is not finished once created:</strong> Verify accuracy and validity, and do not apply it outside the range of data it was fitted to.</span></li>
                            <li><span className="lang-ar"><strong>لا تحكم على النموذج من R² وحده:</strong> احكم عليه مع مؤشرات حجم الخطأ (RMSE و MAE) معاً.</span><span className="lang-en"><strong>Do not judge a model by R² alone:</strong> Always evaluate R² together with RMSE and MAE.</span></li>
                            <li><span className="lang-ar"><strong>إضافة المزيد من المتغيرات التفسيرية لا يحسّن النموذج بالضرورة:</strong> قد يؤدي الإفراط في الملاءمة (Overfitting) إلى مطاردة التشويش بدلاً من الاتجاه العام؛ اختر المتغيرات المناسبة للغرض فقط.</span><span className="lang-en"><strong>Adding more explanatory variables does not necessarily improve a model:</strong> Avoid overfitting noise; select variables suited to the purpose.</span></li>
                        </ol>
                    </div>
                </div>

                <RegressionStudioSimulator />

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 6-2</span>
                                <span className="lang-en">Official Lesson 6-2 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 35 - ص 41</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 6-2 (ص 35 - 39)</span>
                                <span className="lang-en">💡 All 5 Pause & Think Questions — Lesson 6-2 (pp. 41 - 44)</span>
                            </span>
                            <button onClick={() => toggleCard('pt-6-2')} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 35 و 38): &quot;سبب واحد أم عدة أسباب؟ أي نوع من الانحدار ستحتاجه أسعار المنازل؟ متغير واحد أم عدة متغيرات؟&quot;</span><span className="lang-en">1. (pp. 41 & 43): &quot;One cause or several? Which kind of regression would house prices need?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 37): &quot;خط تنبؤ يلائم البيانات جيداً — هل يثبت ذلك أن أحد المتغيرين يسبب الآخر؟&quot;</span><span className="lang-en">2. (p. 41): &quot;A prediction line fits the data well — does that prove one variable causes the other?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 37): &quot;أي مقياس خطأ ستثق به أكثر عند وجود عدد قليل من القيم المتطرفة الكبيرة جداً؟&quot;</span><span className="lang-en">3. (p. 42): &quot;Which error measure would you trust more when a few huge outliers exist?&quot;</span></p>
                            <p><span className="lang-ar">4. (ص 39): &quot;R² مرتفع وحده — هل يكفي للثقة بنموذج، أم تحتاج إلى RMSE و MAE أيضاً؟&quot;</span><span className="lang-en">4. (p. 44): &quot;A high R² alone — enough to trust a model, or do you need RMSE and MAE too?&quot;</span></p>
                        </div>
                        <div id="pt-6-2" className={expandedCards['pt-6-2'] ? 'p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>1. أسعار المنازل:</strong> تتأثر بعدة عوامل معاً (المساحة، العمر، المسافة من المحطة)، لذا تحتاج إلى <strong>تحليل الانحدار المتعدد (Multiple regression analysis)</strong>.<br />💡 <strong>2. ملاءمة الخط والسببية:</strong> <strong>كلا!</strong> ملاءمة معادلة التنبؤ تثبت وجود ارتباط (Correlation) فقط ولا تثبت السببية (Causation).<br />💡 <strong>3. المقياس الأوثق مع القيم الشاذة الكبيرة:</strong> نثق بـ <strong>متوسط الخطأ المطلق (MAE)</strong> أكثر، لأنه يقيّم الفروق في المتوسط ويكون أقل تأثراً بالقيم المتطرفة الشاذة من RMSE الذي يربّع الأخطاء الكبيرة.<br />💡 <strong>4. عدم كفاية R² وحده:</strong> لا يكفي R² وحده؛ بل <strong>يجب فحص RMSE و MAE أيضاً</strong> لمعرفة حجم أخطاء التنبؤ الفعلي بوحدات متغير الاستجابة.</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. <strong>Multiple regression analysis</strong>, because house prices depend on several explanatory variables (size, age, distance).<br />2. <strong>No!</strong> A good fit shows correlation only, not causation.<br />3. <strong>MAE (Mean Absolute Error)</strong>, because it averages absolute discrepancies and is much less swayed by extreme outliers than RMSE.<br />4. <strong>You need RMSE and MAE too</strong> to check the actual size of prediction errors alongside R².</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: مبيعات مقصف المدرسة من المشروبات الباردة — كتاب الوزارة ص 39</span>
                                <span className="lang-en">⚙️ Think as an Engineer (School Canteen Cold-Drink Sales) — Textbook p. 44</span>
                            </span>
                            <button onClick={() => toggleCard('eng-6-2')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يريد مقصف مدرستك التنبؤ بمبيعاته اليومية من المشروبات الباردة لطلب الكمية المناسبة: 1. أنشئ النموذج: سمِّ متغير الاستجابة والمتغيرات التفسيرية، وحدد هل هو انحدار بسيط أم متعدد. 2. احكم على النموذج: اختر مؤشر التقييم وبرره، واذكر متغيراً مربكاً (Confounder). 3. هل يسمح R² المرتفع وحده بادعاء السببية؟&quot;</span>
                            <span className="lang-en">&quot;Your school canteen wants to predict daily cold-drink sales: 1. Name the response variable, explanatory variables (temperature, attendance, exam day), and whether it is simple or multiple regression. 2. Choose an evaluation indicator and name a confounder. 3. Does a high R² alone prove &apos;hot days cause higher sales&apos;?&quot;</span>
                        </p>
                        <div id="eng-6-2" className={expandedCards['eng-6-2'] ? 'p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. إعداد النموذج:</strong> <strong>متغير الاستجابة (y):</strong> عدد زجاجات المشروبات الباردة المباعة يومياً. <strong>المتغيرات التفسيرية (x1, x2, x3):</strong> درجة حرارة اليوم، عدد الطلاب الحاضرين، وما إذا كان هناك يوم رياضي أو يوم امتحان. وبما أننا نستخدم عدة متغيرات تفسيرية معاً فهو <strong>انحدار متعدد (Multiple regression)</strong>.<br />• <strong>2. مؤشر التقييم والعامل المربك:</strong> نستخدم <strong>R²</strong> لمعرفة نسبة التباين المفسرة، ومعه <strong>MAE أو RMSE</strong> لمعرفة متوسط خطأ التنبؤ بعدد الزجاجات الفعلي لتجنب العجز أو الهدر. ومثال <strong>العامل المربك (Confounder):</strong> &quot;إقامة بطولة رياضية مدرسية في الأيام المشمسة المعتدلة&quot; أو &quot;موسم نهاية العام&quot; الذي يدفع كلاً من حضور الطلاب ومبيعات المشروبات للارتفاع معاً.<br />• <strong>3. تفسير R² والسببية:</strong> ارتفاع R² وحده لا يثبت السببية؛ نحتاج إلى التحقق من الأسبقية الزمنية، واستبعاد العوامل المربكة (كالأنشطة الرياضية)، ووجود تفسير علمي منطقي، مع فحص RMSE/MAE قبل اعتماد النموذج.</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Model Setup:</strong> <strong>Response variable:</strong> Daily cold-drink sales. <strong>Explanatory variables:</strong> Day&apos;s temperature, number of students present, and exam/sports day indicator &rarr; <strong>Multiple regression</strong>.<br />• <strong>2. Evaluation & Confounder:</strong> Report <strong>MAE / RMSE</strong> (to know the error in actual bottle units for ordering inventory) alongside <strong>R²</strong>. <strong>Confounder example:</strong> Outdoor sports events held on warm days driving both crowd activity and drink sales.<br />• <strong>3. Causation Check:</strong> High R² alone only shows correlation; claiming causation requires temporal precedence, ruling out confounders, and theoretical support.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (مبيعات الآيس كريم وحوادث السباحة) — كتاب الوزارة ص 40</span>
                                <span className="lang-en">🌍 In a New Context (Ice Cream Sales & Swimming Accidents) — Textbook p. 45</span>
                            </span>
                            <button onClick={() => toggleCard('ctx-6-2')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;تلاحظ إحدى المدن أن الأشهر التي تشهد مبيعات أعلى للآيس كريم تشهد أيضاً عدداً أكبر من حوادث السباحة، وأن خط الانحدار يظهر ارتباطاً وثيقاً بينهما. اشرح لماذا لا يعني هذا أن الآيس كريم هو سبب الحوادث، واذكر العامل الخفي الذي يُرجَّح أن يكون وراء كليهما.&quot;</span>
                            <span className="lang-en">&quot;A city finds that months with more ice cream sales also have more swimming accidents, and a regression line fits the two closely. Explain why this does not mean ice cream causes accidents, and name the hidden factor most likely behind both.&quot;</span>
                        </p>
                        <div id="ctx-6-2" className={expandedCards['ctx-6-2'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>لماذا لا يعني ذلك السببية؟</strong> لأن ملاءمة خط الانحدار تثبت وجود <strong>ارتباط إحصائي (Correlation)</strong> فقط، ولا تثبت أن أكل الآيس كريم يسبب الغرق أو حوادث السباحة.<br />• <strong>العامل الخفي المربك (Confounding variable / Hidden factor):</strong> هو <strong>ارتفاع درجة الحرارة في فصل الصيف (High summer temperature)</strong>؛ فالحرارة المرتفعة تدفع الناس لشراء المزيد من الآيس كريم، وتدفعهم في الوقت نفسه للذهاب للسباحة بكثرة مما يزيد من حوادث السباحة!</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Why it is not causation:</strong> A closely fitting regression line only shows <strong>correlation</strong>, not causation.<br />• <strong>Hidden Confounder:</strong> <strong>High summer temperature (hot weather)</strong> independently drives more people to buy ice cream AND more people to go swimming, which increases swimming accidents.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] — كتاب الوزارة ص 38</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] — Textbook p. 43</span>
                            </span>
                            <button onClick={() => toggleCard('exam-6-2')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح لماذا يمكن لنموذج انحدار ذي قيمة عالية لـ R² أن يظل أساساً غير كافٍ للادعاء بأن متغيراً ما يسبب متغيراً آخر. [6 درجات] استعن بمفهوم: الارتباط مقابل السببية.&quot;</span>
                            <span className="lang-en">&quot;Explain why a regression model with a high R² can still be a poor basis for claiming that one variable causes another. [6 marks] Refer to: correlation versus causation.&quot;</span>
                        </p>
                        <div id="exam-6-2" className={expandedCards['exam-6-2'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>ما يقيسه R² فعلياً (الارتباط فقط) [درجتان]:</strong> يقيس معامل التحديد (R²) مدى ملاءمة خط الانحدار للبيانات وقدرته على تفسير التباين المشترك (أي قوة <strong>الارتباط Correlation</strong> بين المتغير التفسيري ومتغير الاستجابة)، لكن الارتباط لا يعني السببية.</span><span className="lang-en"><strong>What R² actually measures (Correlation) [2 marks]:</strong> A high R² only indicates that the equation fits the observed data well and captures a strong statistical correlation, which does not establish causation.</span></li>
                                <li><span className="lang-ar"><strong>احتمال وجود عوامل مربكة خفية (Confounders) [درجتان]:</strong> قد يتحرك المتغيران معاً بقوة بسبب عامل ثالث خفي (Confounding variable) يؤثر فيهما معاً (مثل تأثير حرارة الصيف على كل من مبيعات الآيس كريم وحوادث السباحة) أو بسبب مصادفة.</span><span className="lang-en"><strong>Confounding third factors [2 marks]:</strong> Two variables may move closely together because a hidden third variable (confounder) drives both simultaneously.</span></li>
                                <li><span className="lang-ar"><strong>الشروط الثلاثة اللازمة لإثبات السببية [درجتان]:</strong> لإثبات وجود علاقة سببية حقيقية (Causation)، لا يكفي R²، بل يلزم إثبات: <strong>الأسبقية الزمنية (Temporal precedence)</strong>، و<strong>استبعاد تأثير العوامل الأخرى</strong>، و<strong>وجود دعم وإطار نظري (Theoretical support)</strong>.</span><span className="lang-en"><strong>Requirements for Causation [2 marks]:</strong> Demonstrating true causation requires temporal precedence, exclusion of other factors&apos; influence, and theoretical support.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-cyan-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 6-2 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 6-2 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">📈</span>
                                    <strong className="text-sm block"><span className="lang-ar">الانحدار البسيط والمتعدد</span><span className="lang-en">Simple vs Multiple</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">البسيط يتنبأ بمتغير الاستجابة من متغير تفسيري واحد (y=ax+b)، والمتعدد من متغيرين أو أكثر.</p>
                                    <p className="lang-en">Simple uses 1 explanatory variable (y=ax+b); Multiple uses 2 or more explanatory variables.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">📐</span>
                                    <strong className="text-sm block"><span className="lang-ar">المتبقي والمربعات الصغرى</span><span className="lang-en">Residual & Least-Squares</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">المتبقي هو الفرق بين القيمة الفعلية وخط الانحدار؛ والمربعات الصغرى تصغّر مجموع مربعات المتبقيات.</p>
                                    <p className="lang-en">Residual = discrepancy between actual value & line; Least-squares minimizes sum of squared residuals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-amber-500/30">
                                    <span className="text-2xl mb-1 block">📊</span>
                                    <strong className="text-sm block"><span className="lang-ar">مقاييس R² و RMSE و MAE</span><span className="lang-en">R², RMSE, & MAE</span></strong>
                                    <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                    <p className="lang-ar">R² (0-1) لتفسير التباين؛ RMSE يزِن الأخطاء الكبيرة بقوة؛ MAE متوسط الخطأ المطلق والأقل تأثراً بالشواذ.</p>
                                    <p className="lang-en">R² (0–1) explains variance; RMSE weights big misses heavily; MAE is average error, less swayed by outliers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-purple-500/30">
                                    <span className="text-2xl mb-1 block">🔗</span>
                                    <strong className="text-sm block"><span className="lang-ar">الارتباط مقابل السببية</span><span className="lang-en">Correlation vs Causation</span></strong>
                                    <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                    <p className="lang-ar">الملاءمة الجيدة لا تثبت السببية؛ يلزم الأسبقية الزمنية واستبعاد العوامل المربكة والدعم النظري.</p>
                                    <p className="lang-en">Good fit ≠ causation; causation requires temporal precedence, ruling out confounders, and theory.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LessonQuiz lessonId="62" />

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-6-1')}
                        className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 6-1</span>
                        <span className="lang-en">Previous 6-1</span>
                    </button>
                    <button onClick={() => navigate('lesson-6-3')}
                        className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">الدرس التالي: 6-3 تصور البيانات والتواصل</span>
                        <span className="lang-en">Next: 6-3 Data Visualization and Communication</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            
    </div>
  );
}
