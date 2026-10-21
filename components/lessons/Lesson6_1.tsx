'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit6LessonQuiz';
import { InferenceLabSimulator } from '@/components/simulators/InferenceLabSimulator';

export function Lesson6_1() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(current => ({ ...current, [id]: !current[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-6-1" className="lesson-view space-y-8 animate-fadeIn">


                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <span className="lang-ar">الدرس 6-1 (كتاب الوزارة ص 26 - ص 33)</span>
                                    <span className="lang-en">Lesson 6-1 (Textbook pp. 29 - 38)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">التحليل والتواصل</span>
                                    <span className="lang-en">Analysis and Communication</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">الاستدلال الإحصائي (Statistical Inference)</span>
                                <span className="lang-en">Statistical Inference</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح تفصيلي شامل للدرس الأول من الوحدة السادسة: الاستنتاج من العينة إلى المجتمع الكامل مع قياس عدم اليقين، الفرق بين التقدير النقطي (Point Estimation) والتقدير الفاصل (Interval Estimation) ومفهوم فترة الثقة ومستوى الثقة (95% و 99%)، خطوات اختبار الفرضيات الأربع (فرضية العدم H0 والبديلة H1، مستوى الدلالة α، والقيمة الاحتمالية p-value)، اختبار t واختبار مربع كاي، وأخطاء النوع الأول والثاني والفرق بين الدلالة الإحصائية والأهمية العملية.</span>
                                <span className="lang-en">Comprehensive breakdown of Lesson 6-1: Reasoning from a sample to a whole population while measuring uncertainty, point estimation vs interval estimation (confidence intervals and 95%/99% confidence levels), the 4-step hypothesis testing procedure (H0, H1, significance level α, p-value), t-test vs Chi-squared test, Type I & Type II error trade-offs, and statistical significance vs practical importance.</span>
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
                            <strong className="text-emerald-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 26):</span>
                                <span className="lang-en">Official Learning Objectives (p. 29):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">شرح الفرق بين التقدير بنقطة (Point estimation) والتقدير بفترة (Interval estimation)، بما في ذلك معنى مستوى الثقة (Confidence level).</span><span className="lang-en">Explain the difference between point estimation and interval estimation, including the meaning of a confidence level.</span></li>
                                <li>• <span className="lang-ar">وصف إجراءات اختبار الفرضيات (Hypothesis testing)، موضحاً المحاذير الواجب مراعاتها عند تفسير نتائجه.</span><span className="lang-en">Describe the procedure of hypothesis testing, and explain the cautions needed when interpreting its results.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 27):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 30):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف يمكننا الاستنتاج من عينة إلى مجتمع كامل، وكيف نقيس عدم اليقين في هذا الاستنتاج؟&quot;</span>
                                <span className="lang-en">&quot;How can we reason from a sample to a whole population, and how do we measure the uncertainty in that reasoning?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">مرحلة الاستدلال الإحصائي والتقدير النقطي مقابل التقدير الفاصل (ص 27 - 28)</span>
                            <span className="lang-en">1. Statistical Inference Stage & 2. Point vs. Interval Estimation (pp. 30 - 31)</span>
                        </h3>
                        <span className="text-xs font-mono text-emerald-400 font-bold">Sample &rarr; Population</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <strong className="text-white block font-bold">
                                <span className="lang-ar">📌 مفهوم الاستدلال الإحصائي (Statistical Inference):</span>
                                <span className="lang-en">📌 Statistical Inference Concept:</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar">تُسحب عينة (Sample) من المجموعة الكاملة المستهدفة بالتحليل (المجتمع الإحصائي Population) وتُفحص، ثم تُستنتج خصائص المجتمع أو تُختبر ادعاءات عنه من نتائج العينة. وبما أن العينة ليست سوى جزء من المجتمع، فإن الاستدلال <strong>يتضمن دائماً درجة من عدم اليقين (Uncertainty)</strong> ينبغي قياسها ومراعاتها عند إصدار الحكم.</span>
                                <span className="lang-en">A sample is drawn from the entire target group (the population) and surveyed, and the properties of the population are inferred from the sample. Because the sample is only part of the population, inference always involves uncertainty.</span>
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                            <strong className="text-amber-400 block font-bold flex items-center gap-2">
                                <i className="fa-solid fa-key"></i>
                                <span className="lang-ar">الفكرة الأساسية (خريطة الدرس — ص 27):</span>
                                <span className="lang-en">Key Fact (Textbook p. 30):</span>
                            </strong>
                            <p className="text-sub text-[11px] leading-relaxed">
                                <span className="lang-ar">ينقسم الاستدلال الإحصائي إلى نهجين رئيسيين: <strong>التقدير (Estimation)</strong> الذي يجيب عن سؤال &quot;ما القيمة التقريبية؟&quot; (بقيمة نقطية واحدة أو بفاصل ثقة)، و<strong>اختبار الفرضيات (Hypothesis Testing)</strong> الذي يجيب عن سؤال &quot;هل هذا الفرق حقيقي أم مجرد صدفة؟&quot; (بموازنة فرضية العدم مع الفرضية البديلة).</span>
                                <span className="lang-en">Statistical inference answers two main questions: &quot;about how big?&quot; via <strong>Estimation</strong> (point or interval with a confidence level) and &quot;is this real, or just chance?&quot; via <strong>Hypothesis Testing</strong> (weighing H0 against H1 using p-value and α).</span>
                            </p>
                        </div>
                    </div>

                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[600px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">النهج (Approach)</span><span className="lang-en">Approach</span></th>
                                    <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الوصف (Description)</span><span className="lang-en">Description</span></th>
                                    <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال تطبيقي (كتاب الوزارة ص 27)</span><span className="lang-en">Textbook Example (p. 30)</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">1. التقدير (Estimation)</span><span className="lang-en">1. Estimation</span></td>
                                    <td className="p-3"><span className="lang-ar">استخدام بيانات العينة لاستنتاج خصائص المجتمع بالأرقام (بقيمة واحدة أو بنطاق من القيم).</span><span className="lang-en">Infer the properties of the population in numerical terms.</span></td>
                                    <td className="p-3"><span className="lang-ar">استنتاج متوسط طول المجتمع الكلي من متوسط طول العينة.</span><span className="lang-en">Infer the population mean height from the sample mean height.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">2. اختبار الفرضيات (Hypothesis Testing)</span><span className="lang-en">2. Hypothesis Testing</span></td>
                                    <td className="p-3"><span className="lang-ar">تقييم مدى تعارض البيانات المتاحة مع فرضية العدم للحكم على صحة ادعاء بخصوص المجتمع.</span><span className="lang-en">Determine whether a hypothesis about the population is acceptable based on data.</span></td>
                                    <td className="p-3"><span className="lang-ar">اختبار ما إذا كانت طريقة تعلم جديدة أكثر فعالية من الطريقة التقليدية.</span><span className="lang-en">Determine whether a new learning method is more effective than the conventional one.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                            <strong className="text-cyan-400 text-sm font-black flex items-center gap-2">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">(1) التقدير النقطي (Point Estimation):</span>
                                <span className="lang-en">(1) Point Estimation:</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar">تقدير خاصية المجتمع <strong>بقيمة واحدة فقط</strong> تُحسب من العينة. مثال: إذا كان متوسط طول العينة <code className="text-cyan-300">168 سم</code>، نستخدم <code className="text-cyan-300">168 سم</code> تقديراً نقطياً لمتوسط طول المجتمع.</span>
                                <span className="lang-en">Estimating the properties of the population as a <strong>single value</strong> calculated from the sample (e.g., sample mean = <code className="text-cyan-300">168 cm</code> &rarr; population mean estimated as <code className="text-cyan-300">168 cm</code>).</span>
                            </p>
                            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                                <span className="lang-ar">⚖️ <strong>الميزة والعيب:</strong> سهل الفهم لأنه يُعرض كقيمة واحدة، لكن <strong>عدم يقين التقدير يكون غير مرئي (Invisible uncertainty)</strong>.</span>
                                <span className="lang-en">⚖️ <strong>Pros & Cons:</strong> Easy to understand as a single number, but the degree of uncertainty is completely invisible.</span>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                            <strong className="text-emerald-400 text-sm font-black flex items-center gap-2">
                                <i className="fa-solid fa-arrows-left-right-to-line"></i>
                                <span className="lang-ar">(2) التقدير الفاصل وفترة الثقة (Interval Estimation):</span>
                                <span className="lang-en">(2) Interval Estimation & Confidence Interval:</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar">تقدير أن خصائص المجتمع تقع <strong>ضمن مدى معين (فاصل)</strong> يُسمى <strong>فترة الثقة (Confidence Interval)</strong>، مثل تقدير متوسط طول المجتمع في المدى من <code className="text-emerald-300">166 سم إلى 170 سم</code> عند <strong>مستوى ثقة (Confidence Level)</strong> شائع مثل <code className="text-amber-300">95%</code> أو <code className="text-amber-300">99%</code>.</span>
                                <span className="lang-en">Estimating that population properties fall within a range called the <strong>confidence interval</strong> (e.g., <code className="text-emerald-300">166 cm to 170 cm</code>) with a <strong>confidence level</strong> (commonly <code className="text-amber-300">95%</code> or <code className="text-amber-300">99%</code>).</span>
                            </p>
                            <div className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-[11px] text-slate-300">
                                <span className="lang-ar">⚠️ <strong>المعنى الدقيق لمستوى الثقة 95% (هام جداً للامتحان ص 27 و 33):</strong> يصف أداء طريقة بناء الفترات عند تكرار المسح؛ أي لو كررنا نفس طريقة المسح 100 مرة، فإن <strong>نحو 95 من فترات الثقة الناتجة ستحتوي على القيمة الحقيقية للمجتمع</strong> (وليس احتمالاً لاحقاً لفترة واحدة بعينها!). كما أن التقدير الفاصل يتميز بإظهار درجة عدم اليقين من خلال عرض الفترة.</span>
                                <span className="lang-en">⚠️ <strong>Exact Meaning of 95% Confidence Level (Exam Alert p. 31 & 38):</strong> If the same survey method is repeated 100 times, about 95 of the resulting confidence intervals will contain the true population value. Interval estimation shows the degree of uncertainty via its width.</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">٢</span>
                            <span className="lang-ar">فكرة وإجراءات اختبار الفرضيات، الاختبارات الرئيسية، وتنبيهات التفسير (ص 28 - 30)</span>
                            <span className="lang-en">3–6. Hypothesis Testing Procedure, Major Tests, and Cautions (pp. 31 - 33)</span>
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 font-bold">H0 vs H1 • p-value vs α</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs leading-relaxed">
                        
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2.5">
                            <strong className="text-cyan-400 text-sm font-black block">
                                <span className="lang-ar">3. فكرة اختبار الفرضيات (لماذا نبدأ بافتراض فرضية العدم H0؟):</span>
                                <span className="lang-en">3. The Idea of Hypothesis Testing (Why Assume H0 First?):</span>
                            </strong>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">فرضية العدم (Null Hypothesis — H0):</span><span className="lang-en">Null Hypothesis (H0):</span></strong>
                                <span className="lang-ar"> فرضية تُستخدم كنقطة بداية للاختبار وتنص على &quot;لا يوجد فرق&quot; أو &quot;لا توجد علاقة&quot; (وهي الفرضية التي يأمل الباحث في دحضها).</span>
                                <span className="lang-en"> The starting point of the test stating &quot;no difference&quot; or &quot;no relationship&quot; (the hypothesis one hopes to reject).</span>
                            </p>
                            <p className="text-sub">
                                • <strong><span className="lang-ar">الفرضية البديلة (Alternative Hypothesis — H1):</span><span className="lang-en">Alternative Hypothesis (H1):</span></strong>
                                <span className="lang-ar"> الفرضية التي يتم تبنيها إذا رُفضت فرضية العدم H0، وتنص على &quot;يوجد فرق&quot; أو &quot;توجد علاقة&quot;.</span>
                                <span className="lang-en"> The hypothesis adopted when H0 is rejected (&quot;there is a difference&quot; or &quot;there is a relationship&quot;).</span>
                            </p>
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-[11px]">
                                <span className="lang-ar">💡 <strong>التعليل المنطقي (سؤال امتحان ص 28 و 31):</strong> بدلاً من محاولة إثبات وجود التأثير مباشرة، نفترض أولاً أنه &quot;لا يوجد فرق (H0)&quot; ثم نحسب مدى ندرة وصغر احتمال الحصول على بيانات متطرفة كهذه بالصدفة (القيمة الاحتمالية p-value). فإذا كان هذا الاحتمال صغيراً بما يكفي، نحكم بأن فرضية &quot;عدم وجود أثر&quot; غير مرجحة ونرفض H0!</span>
                                <span className="lang-en">💡 <strong>Logical Rationale (p. 31 & 34):</strong> Rather than directly proving an effect, it is logically easier to assume &quot;no effect (H0)&quot; and check how unlikely the observed data would be by chance (p-value). A sufficiently small p-value shows H0 is unlikely, so H0 is rejected.</span>
                            </div>
                        </div>

                        
                        <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2.5">
                            <strong className="text-emerald-400 text-sm font-black block">
                                <span className="lang-ar">4. خطوات إجراء اختبار الفرضيات الأربع ومعيار الحكم (ص 28 - 29):</span>
                                <span className="lang-en">4. The 4-Step Procedure & Judgment Criteria (pp. 31 - 32):</span>
                            </strong>
                            <ol className="space-y-1.5 text-slate-300 list-decimal rtl:pr-4 ltr:pl-4 text-[11px]">
                                <li><span className="lang-ar"><strong>وضع الفرضيات:</strong> حدّد فرضية العدم (H0) والفرضية البديلة (H1) قبل النظر إلى النتيجة.</span><span className="lang-en"><strong>Set hypotheses:</strong> Set the null hypothesis H0 and alternative hypothesis H1.</span></li>
                                <li><span className="lang-ar"><strong>تحديد مستوى الدلالة (Significance Level — α):</strong> القيمة الحدية المحددة مسبقاً لقرار رفض H0 (الشائع <code className="text-amber-300">5% = 0.05</code> أو <code className="text-amber-300">1% = 0.01</code>).</span><span className="lang-en"><strong>Decide significance level (α):</strong> The threshold value set in advance (commonly <code className="text-amber-300">0.05</code> or <code className="text-amber-300">0.01</code>).</span></li>
                                <li><span className="lang-ar"><strong>حساب القيمة الاحتمالية (p-value):</strong> احتمال الحصول على نتيجة مساوية في التطرف للنتيجة المرصودة أو أشد منها، <strong>بافتراض صحة H0</strong>.</span><span className="lang-en"><strong>Compute p-value:</strong> Probability of obtaining a result at least as extreme as the data at hand, <strong>assuming H0 is correct</strong>.</span></li>
                                <li><span className="lang-ar"><strong>المقارنة وإصدار الحكم:</strong></span><span className="lang-en"><strong>Compare & Decide:</strong></span>
                                    <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300">
                                            <strong>p-value &lt; α (أو p &le; α)</strong><br />
                                            <span className="lang-ar">نرفض H0 ونتبنى H1 (ذو دلالة إحصائية Statistically significant).</span>
                                            <span className="lang-en">Reject H0 & adopt H1 (statistically significant).</span>
                                        </div>
                                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
                                            <strong>p-value &ge; α (أو p &gt; α)</strong><br />
                                            <span className="lang-ar">عدم رفض H0 (لا يمكن القول بوجود دلالة إحصائية).</span>
                                            <span className="lang-en">Do not reject H0 (not statistically significant).</span>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">الاختبار (Test)</span><span className="lang-en">Test Method</span></th>
                                        <th className="p-3 text-start text-cyan-400"><span className="lang-ar">الاستخدام الرئيسي والمثال (ص 29 / p. 32)</span><span className="lang-en">Main Use & Example (p. 32)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white font-mono">t-test<br /><span className="text-[11px] font-sans text-emerald-400"><span className="lang-ar">اختبار t</span><span className="lang-en">t-test</span></span></td>
                                        <td className="p-3"><span className="lang-ar"><strong>مقارنة متوسطي مجموعتين (كمي):</strong> فحص ما إذا كان متوسط درجات الاختبار يختلف بين طريقة تعلم معينة والطريقة التقليدية.</span><span className="lang-en"><strong>Compare means of two groups:</strong> Examine whether average test scores differ between two teaching methods.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white font-mono">Chi-squared<br /><span className="text-[11px] font-sans text-amber-400"><span className="lang-ar">اختبار مربع كاي</span><span className="lang-en">Chi-squared test</span></span></td>
                                        <td className="p-3"><span className="lang-ar"><strong>فحص علاقة بين متغيرين فئويين (Categorical):</strong> فحص ما إذا كانت هناك علاقة بين الجنس وتفضيل المادة الدراسية (أو فئة المنتجات المشتراة).</span><span className="lang-en"><strong>Relationship between two categorical variables:</strong> Examine whether gender is related to subject preference or product category.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">نوع الخطأ (Error)</span><span className="lang-en">Type of Error</span></th>
                                        <th className="p-3 text-start text-rose-400"><span className="lang-ar">الوصف وعلاقة المفاضلة (ص 29 - 30 / pp. 32 - 33)</span><span className="lang-en">Description & Trade-off (pp. 32 - 33)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-rose-400"><span className="lang-ar">خطأ النوع الأول</span><span className="lang-en">Type I Error</span></td>
                                        <td className="p-3"><span className="lang-ar"><strong>إنذار كاذب (False Alarm):</strong> رفض فرضية العدم (H0) بينما تكون في الواقع صحيحة!</span><span className="lang-en"><strong>False Alarm:</strong> Rejecting the null hypothesis (H0) when it is actually correct.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-amber-400"><span className="lang-ar">خطأ النوع الثاني</span><span className="lang-en">Type II Error</span></td>
                                        <td className="p-3"><span className="lang-ar"><strong>تفويت للاكتشاف (Miss):</strong> عدم رفض فرضية العدم (H0) بينما تكون في الواقع خاطئة!</span><span className="lang-en"><strong>Miss:</strong> Not rejecting the null hypothesis (H0) when it is actually incorrect.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/40 space-y-2 text-xs leading-relaxed">
                        <strong className="text-rose-400 text-sm font-black flex items-center gap-2">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <span className="lang-ar">6. تنبيهات جوهرية عند تفسير الاستدلال الإحصائي والـ p-value (ص 29 - 30 / pp. 32 - 33):</span>
                            <span className="lang-en">6. Essential Cautions When Interpreting p-values & Statistical Significance (pp. 32 - 33):</span>
                        </strong>
                        <ul className="space-y-1.5 text-sub">
                            <li>• <span className="lang-ar"><strong>علاقة المفاضلة (Trade-off relationship):</strong> خفض مستوى الدلالة α (مثلاً من 0.05 إلى 0.01) يقلل خطأ النوع الأول، لكنه <strong>يميل إلى زيادة خطأ النوع الثاني</strong> (لا يمكن خفضهما معاً بمجرد خفض α!).</span><span className="lang-en"><strong>Trade-off relationship:</strong> Lowering significance level α reduces Type I error, but tends to increase Type II error.</span></li>
                            <li>• <span className="lang-ar"><strong>ثلاثة مفاهيم خاطئة شائعة عن p-value يجب تجنبها:</strong> ① الـ p-value <strong>ليست</strong> &quot;احتمال صحة فرضية العدم H0&quot;. ② صغر الـ p-value <strong>لا يعني</strong> &quot;أن التأثير كبير&quot;. ③ نزول p-value تحت 0.05 هو دليل إرشادي للحكم وليس معياراً مطلقاً للصحة الحتمية.</span><span className="lang-en"><strong>3 Misunderstandings to Avoid:</strong> ① p-value is NOT the probability that H0 is true. ② A small p-value does NOT mean the effect is large. ③ p &lt; 0.05 is a guide for judgment, not absolute proof of correctness.</span></li>
                            <li>• <span className="lang-ar"><strong>الدلالة الإحصائية ≠ الأهمية العملية (Statistical Significance vs. Practical Importance):</strong> مع عينة ضخمة جداً (مثل 100,000 زائر لموقع)، حتى الفرق الضئيل جداً في النقر (من <code className="text-amber-300">0.4%</code> إلى <code className="text-amber-300">0.5%</code> أي <code className="text-amber-300">0.1</code> نقطة مئوية فقط) يصبح <strong>ذا دلالة إحصائية</strong>، لكن هل يستحق هذا الفرق الضئيل تكلفة التغيير عملياً وتجارياً؟ هذا يُحكم عليه من منظور عملي منفصل!</span><span className="lang-en"><strong>Statistical Significance ≠ Practical Importance:</strong> With a huge sample (e.g., 100,000 visitors), even a tiny 0.1 percentage-point difference (0.4% vs 0.5%) becomes statistically significant, yet may not matter practically or financially.</span></li>
                        </ul>
                    </div>
                </div>

                <InferenceLabSimulator />

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 6-1</span>
                                <span className="lang-en">Official Lesson 6-1 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 27 - ص 33</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 6-1 (ص 27 - 31)</span>
                                <span className="lang-en">💡 All 5 Pause & Think Questions — Lesson 6-1 (pp. 30 - 35)</span>
                            </span>
                            <button onClick={() => toggleCard('pt-6-1')} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 27): &quot;قيمة واحدة أم مدى — أي تقدير يُظهر لك مدى عدم اليقين؟&quot;</span><span className="lang-en">1. (p. 30): &quot;A single value or a range — which estimate shows you how uncertain it is?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 28 و 31): &quot;إذا كانت القيمة الاحتمالية 0.02 (أو 0.03) ومستوى الدلالة 0.05، هل ترفض فرضية العدم أم لا؟&quot;</span><span className="lang-en">2. (pp. 32 & 35): &quot;If the p-value is 0.02 (or 0.03) and the significance level is 0.05, do you reject the null or not?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 29): &quot;أي اختبار يقارن متوسطي مجموعتين، وأيهما يفحص علاقة بين فئات؟&quot;</span><span className="lang-en">3. (p. 32): &quot;Which test compares two group means, and which checks a relationship between categories?&quot;</span></p>
                            <p><span className="lang-ar">4. (ص 30): &quot;مع 100,000 شخص، يمكن أن يكون فرق ضئيل &apos;ذا دلالة&apos;. هل هذا يجعله مهماً؟&quot;</span><span className="lang-en">4. (p. 33): &quot;With 100,000 people, a tiny difference can be &apos;significant.&apos; Does that make it important?&quot;</span></p>
                        </div>
                        <div id="pt-6-1" className={expandedCards['pt-6-1'] ? 'p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>1. إظهار عدم اليقين:</strong> <strong>المدى (التقدير الفاصل / فترة الثقة Interval estimation)</strong> هو الذي يُظهر درجة عدم اليقين من خلال عرض الفترة، بينما التقدير النقطي يخفي عدم اليقين.<br />💡 <strong>2. مقارنة p-value مع 0.05:</strong> بما أن <code className="text-emerald-300">0.02 &lt; 0.05</code> (وكذلك <code className="text-emerald-300">0.03 &lt; 0.05</code>)، فإن القيمة الاحتمالية أقل من مستوى الدلالة، لذا <strong>نرفض فرضية العدم (H0) ونتبنى الفرضية البديلة (H1)</strong>.<br />💡 <strong>3. اختيار الاختبار:</strong> <strong>اختبار t (t-test)</strong> يقارن متوسطي مجموعتين، بينما <strong>اختبار مربع كاي (Chi-squared test)</strong> يفحص وجود علاقة بين متغيرين فئويين.<br />💡 <strong>4. الدلالة مقابل الأهمية:</strong> <strong>كلا!</strong> الدلالة الإحصائية تعني فقط أن الفرق لا يُفسر بالصدفة وحدها، لكن مع العينة الضخمة يصبح الفرق الضئيل جداً ذا دلالة إحصائية دون أن يكون مهماً عملياً في الواقع.</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. <strong>Range (Interval estimation / Confidence interval)</strong> shows the degree of uncertainty via its width.<br />2. Since <code className="text-emerald-300">0.02 &lt; 0.05</code> (and <code className="text-emerald-300">0.03 &lt; 0.05</code>), <strong>reject the null hypothesis (H0) and adopt the alternative hypothesis (H1)</strong>.<br />3. The <strong>t-test</strong> compares the means of two groups; the <strong>Chi-squared test</strong> checks relationships between two categorical variables.<br />4. <strong>No!</strong> Statistical significance is not the same as practical importance; huge samples make tiny, practically trivial differences statistically significant.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: أداة الاختبارات الإلكترونية للنادي المدرسي — كتاب الوزارة ص 32</span>
                                <span className="lang-en">⚙️ Think as an Engineer (School Club Online Quiz Tool) — Textbook pp. 35 - 36</span>
                            </span>
                            <button onClick={() => toggleCard('eng-6-1')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يدّعي نادٍ مدرسي أن أداة اختباراته الإلكترونية الجديدة ترفع متوسط درجات الطلاب (متوسط مجموعة الأداة 74 مقابل 70 للمجموعة الضابطة): 1. صِغ فرضية العدم والبديلة واذكر ما البيانات الإضافية اللازمة لإجراء الاختبار ومستوى الدلالة α. 2. حلل مخاطر خطأ النوع الأول والثاني. 3. إذا أعطى الاختبار p-value = 0.04، فما قرارك عند 0.05 مقابل 0.01؟ ولماذا قد لا تبرر النتيجة تحويل جميع الفصول للأداة؟&quot;</span>
                            <span className="lang-en">&quot;A school club claims its new online quiz tool raises average scores (tool group averaged 74 vs 70 for control): 1. Frame H0 and H1, state what extra data is needed beyond the two means, and pick α (0.05 or 0.01). 2. Analyze Type I and Type II error risks. 3. Interpret p = 0.04 at α = 0.05 vs 0.01, and explain why even a significant result might not justify switching every class.&quot;</span>
                        </p>
                        <div id="eng-6-1" className={expandedCards['eng-6-1'] ? 'p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. صياغة الفرضيات والبيانات اللازمة:</strong><br />— <strong>فرضية العدم (H0):</strong> &quot;لا يوجد فرق في متوسط الدرجات بين مجموعة الأداة الجديدة والمجموعة الضابطة في المجتمع الطلابي&quot;.<br />— <strong>الفرضية البديلة (H1):</strong> &quot;أداة الاختبارات الإلكترونية الجديدة تحقق متوسط درجات أعلى من الطريقة المعتادة&quot;.<br />— <strong>البيانات اللازمة بخلاف المتوسطين (74 و 70):</strong> نحتاج إلى <strong>حجم العينة (عدد الطلاب في كل مجموعة)</strong> و<strong>تباين أو الانحراف المعياري للدرجات الفردية</strong> وكيف تم اختيار وتوزيع الطلاب لإجراء اختبار t.<br />• <strong>2. تحليل مخاطر الأخطاء:</strong><br />— <strong>خطأ النوع الأول (Type I):</strong> الحكم بأن الأداة ترفع الدرجات واعتمادها بينما هي في الحقيقة بلا أثر (إهدار وقت وتكلفة المدرسة في إنذار كاذب).<br />— <strong>خطأ النوع الثاني (Type II):</strong> الحكم بعدم وجود أثر وتفويت أداة مفيدة فعلاً للطلاب.<br />• <strong>3. القرار عند p = 0.04 والتفسير العملي:</strong><br />— عند <code className="text-emerald-300">α = 0.05</code>: بما أن <code className="text-emerald-300">0.04 &lt; 0.05</code> نرفض H0 (النتيجة ذات دلالة إحصائية). أما عند <code className="text-amber-300">α = 0.01</code>: بما أن <code className="text-amber-300">0.04 &ge; 0.01</code> فلا نرفض H0!<br />— <strong>لماذا لا يكفي ذلك لتحويل كل الفصول فوراً؟</strong> لأن الدلالة الإحصائية لا تثبت الأهمية العملية؛ فنحن بحاجة لمعرفة فترة الثقة لحجم الأثر (4 درجات)، وتكلفة تعميم الأداة وتدريب المعلمين، والتأكد من عدم وجود تحيز في اختيار طلاب النادي.</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Hypotheses & Required Data:</strong> <strong>H0:</strong> No difference in population mean scores between the tool and control groups. <strong>H1:</strong> The new quiz tool yields a higher average score. Beyond the two means (74 vs 70), we need <strong>sample sizes (n)</strong>, <strong>individual score spread/standard deviation</strong>, and random assignment details to run a <strong>t-test</strong>.<br />• <strong>2. Error Risks:</strong> <strong>Type I Error:</strong> Falsely concluding the tool works and wasting school resources adopting an ineffective tool. <strong>Type II Error:</strong> Missing out on a genuinely helpful learning tool.<br />• <strong>3. Decision at p = 0.04:</strong> At <code className="text-emerald-300">α = 0.05</code>, reject H0 (<code className="text-emerald-300">0.04 &lt; 0.05</code>, significant). At <code className="text-amber-300">α = 0.01</code>, do not reject H0 (<code className="text-amber-300">0.04 &ge; 0.01</code>). Even if significant, switching all classes requires checking practical importance: cost, teacher workload, confidence interval width, and whether the sample was unbiased.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (لون زر الدفع مع 200,000 زائر) — كتاب الوزارة ص 32</span>
                                <span className="lang-en">🌍 In a New Context (Checkout Button with 200,000 Visitors) — Textbook p. 36</span>
                            </span>
                            <button onClick={() => toggleCard('ctx-6-1')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يختبر متجر لونين لزر الدفع باستخدام بيانات من 200,000 زائر ويجد أن معدل النقر للون الجديد أعلى بمقدار 0.05 نقطة مئوية، بقيمة احتمالية p-value = 0.01 عند مستوى دلالة 5% (0.05). حدد ما إذا كانت النتيجة ذات دلالة إحصائية، واشرح لماذا قد يقرر المتجر مع ذلك عدم تغيير الزر.&quot;</span>
                            <span className="lang-en">&quot;A shop tests two checkout-button colors with data from 200,000 visitors and finds the new color&apos;s click rate is 0.05 percentage points higher, with a p-value of 0.01 at the 5% significance level. State whether the result is statistically significant, and explain why the shop might still decide not to change the button.&quot;</span>
                        </p>
                        <div id="ctx-6-1" className={expandedCards['ctx-6-1'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>هل النتيجة ذات دلالة إحصائية؟</strong> <strong>نعم، ذات دلالة إحصائية (Statistically significant)</strong> لأن القيمة الاحتمالية (<code className="text-emerald-300">p = 0.01</code>) أصغر من مستوى الدلالة المحدد (<code className="text-emerald-300">α = 0.05</code>)، فنرفض فرضية العدم.<br />• <strong>لماذا قد يقرر المتجر عدم تغيير الزر؟</strong> لأن <strong>الدلالة الإحصائية لا تعني بالضرورة الأهمية العملية (Practical importance)</strong>؛ فبسبب حجم العينة الضخم جداً (200,000 زائر)، أصبح فرق ضئيل للغاية (<code className="text-amber-300">0.05</code> نقطة مئوية فقط) ذا دلالة إحصائية، لكن هذا الأثر الضئيل قد لا يحقق أي ربح فعلي يغطي تكلفة تعديل النظام أو تغيير الهوية البصرية للمتجر.</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Statistical Significance:</strong> <strong>Yes, it is statistically significant</strong> because <code className="text-emerald-300">p-value (0.01) &lt; significance level (0.05)</code>.<br />• <strong>Why Not Change the Button:</strong> Because <strong>statistical significance is different from practical importance</strong>. With a massive sample of 200,000 visitors, a tiny 0.05 percentage-point increase becomes statistically significant, but in practice the gain is too small to justify development costs or altering the brand design.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] + فكر وتحدَّ نفسك — كتاب الوزارة ص 31 و 33</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] & Reflect & Challenge — Textbook pp. 34 & 37</span>
                            </span>
                            <button onClick={() => toggleCard('exam-6-1')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح سبب اختبار الباحثين فرضية العدم التي يأملون في دحضها، بدلاً من إثبات التأثير مباشرة. [6 درجات] استعن بـ: ما تُظهره قيمة احتمالية صغيرة.&quot;</span>
                            <span className="lang-en">&quot;Explain why researchers test a null hypothesis they hope to disprove, rather than proving the effect directly. [6 marks] Refer to: what a small p-value shows.&quot;</span>
                        </p>
                        <div id="exam-6-1" className={expandedCards['exam-6-1'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>صعوبة الإثبات المباشر من عينة [درجتان]:</strong> نظراً لأننا نفحص عينة فقط وليس المجتمع بأكمله، يصعب منطقياً إثبات صحة ادعاء وجود التأثير (الفرضية البديلة H1) بشكل مباشر، لذا نبدأ بنقطة مرجعية محددة هي <strong>فرضية العدم (H0: لا يوجد فرق أو علاقة)</strong>.</span><span className="lang-en"><strong>Difficulty of direct proof [2 marks]:</strong> Because we only observe a sample, directly proving an effect (H1) is logically difficult; setting a clear baseline of &quot;no difference&quot; (H0) provides a testable starting point.</span></li>
                                <li><span className="lang-ar"><strong>ما تُظهره القيمة الاحتمالية الصغيرة (Small p-value) [درجتان]:</strong> تحت افتراض صحة فرضية العدم (H0)، تقيس القيمة الاحتمالية (p-value) احتمال الحصول على نتيجة مساوية في التطرف للبيانات المتاحة أو أشد منها بالصدفة. وكلما كانت الـ p-value صغيرة جداً، دلّ ذلك على أنه من غير المرجح للغاية حدوث هذه البيانات لو كانت H0 صحيحة.</span><span className="lang-en"><strong>What a small p-value shows [2 marks]:</strong> Assuming H0 is true, the p-value measures the probability of observing data at least this extreme by chance. A very small p-value shows that such extreme data would be highly unlikely if &quot;no effect&quot; were true.</span></li>
                                <li><span className="lang-ar"><strong>قرار الدحض وتبني البديلة [درجتان]:</strong> عندما تكون القيمة الاحتمالية أصغر من مستوى الدلالة المحدد مسبقاً (<code className="text-emerald-300">p-value &lt; α</code>)، نرفض (ندحض) فرضية العدم H0 ونتبنى الفرضية البديلة H1 بوصفها مدعومة إحصائياً.</span><span className="lang-en"><strong>Rejecting H0 to support H1 [2 marks]:</strong> When <code className="text-emerald-300">p-value &lt; α</code>, we reject the null hypothesis H0 as implausible and adopt the alternative hypothesis H1.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-emerald-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 6-1 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 6-1 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">🎯</span>
                                    <strong className="text-sm block"><span className="lang-ar">التقدير النقطي والفاصل</span><span className="lang-en">Point vs Interval</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">النقطي يقدر المجتمع بقيمة واحدة (يخفي عدم اليقين)، والفاصل يقدره بمدى (فترة ثقة) يُظهر درجة عدم اليقين.</p>
                                    <p className="lang-en">Point gives one value (hides uncertainty); Interval gives a range (confidence interval) showing uncertainty.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">⚖️</span>
                                    <strong className="text-sm block"><span className="lang-ar">فرضية العدم H0 والبديلة H1</span><span className="lang-en">H0 vs H1 Hypotheses</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">H0 نقطة البداية (لا فرق / لا علاقة)، و H1 الفرضية المتبناة عند رفض H0 (يوجد فرق أو علاقة).</p>
                                    <p className="lang-en">H0 is the &quot;no difference&quot; starting point; H1 is adopted when H0 is rejected (&quot;there is a difference&quot;).</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-amber-500/30">
                                    <span className="text-2xl mb-1 block">📉</span>
                                    <strong className="text-sm block"><span className="lang-ar">القيمة الاحتمالية p-value</span><span className="lang-en">p-value & Alpha (α)</span></strong>
                                    <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                    <p className="lang-ar">احتمال الحصول على بيانات بهذا التطرف أو أشد بافتراض صحة H0. إذا كانت p &lt; α نرفض H0.</p>
                                    <p className="lang-en">Chance of data at least this extreme if H0 holds. If p &lt; α, reject H0 (statistically significant).</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-rose-500/30">
                                    <span className="text-2xl mb-1 block">⚠️</span>
                                    <strong className="text-sm block"><span className="lang-ar">أخطاء النوع الأول والثاني</span><span className="lang-en">Type I & Type II Errors</span></strong>
                                    <span className="text-[10px] text-rose-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-rose-950/90 border border-rose-500 text-slate-200">
                                    <p className="lang-ar">النوع الأول: رفض H0 وهي صحيحة (إنذار كاذب). النوع الثاني: عدم رفض H0 وهي خاطئة (تفويت). بينهما مفاضلة!</p>
                                    <p className="lang-en">Type I: rejecting a true H0 (false alarm). Type II: keeping a false H0 (miss). They have a trade-off.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LessonQuiz lessonId="61" />

                
                <div className="flex justify-end pt-2 text-xs">
                    <button onClick={() => navigate('lesson-6-2')}
                        className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">الدرس التالي: 6-2 استخدام وتقييم تحليل الانحدار</span>
                        <span className="lang-en">Next: 6-2 Use and Evaluation of Regression Analysis</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            
    </div>
  );
}
