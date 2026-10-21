'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function TextbookSolutionsUnit6() {
  const { playSfx, setActiveLesson } = useApp();
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-unit-6-solutions" className="lesson-view space-y-8 animate-fadeIn">


                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-book-bookmark"></i>
                                <span className="lang-ar">حلول كتاب الوزارة الرسمية (الوحدة السادسة كاملة)</span>
                                <span className="lang-en">Official Ministry Textbook Solutions (Unit 6)</span>
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">حلول تدريبات وتمارين نهاية دروس الوحدة السادسة</span>
                                <span className="lang-en">Unit 6 Comprehensive Textbook Review Solutions</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">كافة الأسئلة والتدريبات والتمارين والأمثلة المحلولة الواردة في كتاب المدرسة للدروس الثلاثة (ص 26 إلى ص 49 عربي / pp. 29 - 56 إنجليزي) محلولة حلاً نموذجياً مفصلاً مع التفسير العلمي، ليضمن الطالب الدرجة النهائية.</span>
                                <span className="lang-en">All review questions, worked examples, Try sections, fill-in-the-blank passages, and end-of-lesson exercises from the official textbook (pp. 29 - 56) solved with complete scientific rationale.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 text-xs space-y-1 shrink-0 w-full md:w-64 shadow-md">
                            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <span className="lang-ar">إعداد وتدقيق الإجابات:</span>
                                <span className="lang-en">Verified Solutions:</span>
                            </div>
                            <div className="font-bold text-sm">
                                <span className="lang-ar">المهندس عمر محمود</span>
                                <span className="lang-en">Eng. Omar Mahmoud</span>
                            </div>
                            <div className="text-[11px] text-amber-400 font-mono">01012306019</div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">أ</span>
                            <span className="lang-ar">حلول فقرات إكمال الفراغات (تمارين 2) وأسئلة المصطلحات (تدرّب 1) للدروس الثلاثة</span>
                            <span className="lang-en">Fill-in-the-Blank Passages (Exercise 2) & Term Questions (Try 1)</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                            <strong className="text-emerald-400 block font-bold"><span className="lang-ar">1. الدرس 6-1 (كتاب الوزارة ص 31 و 33 / pp. 34 & 37):</span><span className="lang-en">1. Lesson 6-1 (Textbook pp. 34 & 37):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 33):</strong><br />(1/a) <strong>التقدير النقطي (Point estimation)</strong>، (2/b) <strong>التقدير الفاصل (Interval estimation)</strong>، (3/c) <strong>اختبار الفرضيات (Hypothesis testing)</strong>، (4/d) <strong>فرضية العدم (Null hypothesis H0)</strong>، (5/e) <strong>الفرضية البديلة (Alternative hypothesis H1)</strong>، (6/f) <strong>القيمة الاحتمالية (p-value)</strong>، (7/g) <strong>مستوى الدلالة (Significance level α)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (p. 37):</strong> (a) point estimation, (b) interval estimation, (c) hypothesis testing, (d) null hypothesis, (e) alternative hypothesis, (f) p-value, (g) significance level.</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 31):</strong><br />1. الاستدلال الإحصائي (Statistical inference)<br />2. التقدير الفاصل (Interval estimation)<br />3. فترة الثقة (Confidence interval)<br />4. اختبار مربع كاي (Chi-squared test)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 34):</strong> 1. Statistical inference, 2. Interval estimation, 3. Confidence interval, 4. Chi-squared test.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                            <strong className="text-cyan-400 block font-bold"><span className="lang-ar">2. الدرس 6-2 (كتاب الوزارة ص 38 و 41 / pp. 43 & 46):</span><span className="lang-en">2. Lesson 6-2 (Textbook pp. 43 & 46):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 41):</strong><br />(1/a) <strong>متغير الاستجابة (Response variable)</strong>، (2/b) <strong>المتغير التفسيري (Explanatory variable)</strong>، (3/c) <strong>الانحدار البسيط (Simple regression)</strong>، (4/d) <strong>الانحدار المتعدد (Multiple regression)</strong>، (5/e) <strong>معامل التحديد (R²)</strong>، (6/f) <strong>RMSE</strong>، (7/g) <strong>MAE</strong>، (8/h) <strong>علاقة سببية (Causation)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (p. 46):</strong> (a) response variable, (b) explanatory variable, (c) simple regression analysis, (d) multiple regression analysis, (e) R² (coefficient of determination), (f) RMSE, (g) MAE, (h) causation.</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 38):</strong><br />1. تحليل الانحدار المتعدد (Multiple regression)<br />2. معامل التحديد (R²)<br />3. متغير الاستجابة (Response) والمتغير التفسيري (Explanatory)<br />4. المتبقي (Residual)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 43):</strong> 1. Multiple regression analysis, 2. R², 3. Response variable & Explanatory variable, 4. Residual.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
                            <strong className="text-purple-400 block font-bold"><span className="lang-ar">3. الدرس 6-3 (كتاب الوزارة ص 46 و 49 / pp. 53 & 56):</span><span className="lang-en">3. Lesson 6-3 (Textbook pp. 53 & 56):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 49):</strong><br />(1/a) <strong>توصيل / نقل (Communicating)</strong>، (2/b) <strong>الخريطة الحرارية (Heatmap)</strong>، (3/c) <strong>مخطط المستطيلات / الفسيفساء (Mosaic plot)</strong>، (4/d) <strong>سرد قصص البيانات (Data storytelling)</strong>، (5/e) <strong>معلومات داعمة (Supporting information)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (p. 56):</strong> (a) communicating, (b) heatmap, (c) mosaic plot, (d) data storytelling, (e) supporting information.</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 46):</strong><br />1. الخريطة الحرارية (Heatmap)<br />2. مخطط المستطيلات (Mosaic plot)<br />3. عرض نتائج التحليل أو الادعاءات للآخرين بطريقة سهلة الفهم<br />4. سرد قصص البيانات (Data storytelling)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 53):</strong> 1. Heatmap, 2. Mosaic plot, 3. To convey analysis results/claims to others in an easy-to-understand way, 4. Data storytelling.</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">ب</span>
                            <span className="lang-ar">حلول جميع أسئلة الاختيار من متعدد والمطابقة (تدرّب 2 + تمارين 3) مع التعليل</span>
                            <span className="lang-en">All Textbook Multiple Choice & Matching Solutions (Try 2 & Exercise 3)</span>
                        </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">1. حلول تدرّب 2 وتمارين 3 للدرس 6-1 (الاستدلال الإحصائي — ص 31 و 33 / pp. 35 & 38)</span><span className="lang-en">1. Lesson 6-1 Try 2 & Exercise 3 Solutions (pp. 35 & 38)</span></span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">الدرس 6-1</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 31):</strong> (1) إجراءات اختبار الفرضيات: <strong>(أ / A)</strong> ضع فرضية العدم والبديلة &larr; حدد مستوى الدلالة &larr; احسب القيمة الاحتمالية &larr; اتخذ حكماً. • (2) عند α=0.05 و p=0.03: <strong>(أ / A)</strong> رفض فرضية العدم وتبني الفرضية البديلة (لأن 0.03 &lt; 0.05). • (3) مطابقة الاختبار: (1) مقارنة متوسط درجات طريقتي تدريس = <strong>(ب / B) اختبار t</strong>؛ (2) علاقة الجنس بفئة المنتجات = <strong>(أ / A) اختبار مربع كاي</strong>. • (4) وصف القيمة الاحتمالية: <strong>(جـ / C)</strong> احتمال الحصول على نتيجة تساوي في تطرفها البيانات المتاحة أو أكثر تطرفاً منها بافتراض صحة فرضية العدم.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 33):</strong> (1) وصف فترات ومستويات الثقة: <strong>(جـ / C)</strong> لو تكررت طريقة المسح نفسها، فإن نحو 95% من فترات الثقة الناتجة ستحتوي على القيمة الحقيقية للمجتمع. • (2) العبارة غير المناسبة عن الأخطاء: <strong>(جـ / C)</strong> خفض مستوى الدلالة يمكن أن يقلل من خطأ النوع الأول وخطأ النوع الثاني في آن واحد (خطأ، لأن بينهما علاقة مفاضلة). • (3) تفسير الاستدلال الإحصائي: <strong>(ب / B)</strong> مع كمية كبيرة من البيانات، حتى الفرق الضئيل يمكن أن يصبح ذا دلالة إحصائية.</p>
                                <p className="lang-en">✅ <strong>Try 2 (p. 35):</strong> (1) <strong>A</strong> (Set H0/H1 &rarr; decide α &rarr; compute p-value &rarr; judge). (2) <strong>A</strong> (Reject H0 and adopt H1 since 0.03 &lt; 0.05). (3) a: <strong>B (t-test)</strong>, b: <strong>A (Chi-squared test)</strong>. (4) <strong>C</strong>.<br />✅ <strong>Exercise 3 (p. 38):</strong> (1) <strong>C</strong> (95% of intervals over repeated surveys capture true value). (2) <strong>C</strong> (Lowering α cannot reduce both Type I and Type II errors simultaneously). (3) <strong>B</strong> (With large data, even a tiny difference can become statistically significant).</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">2. حلول تدرّب 2 وتمارين 3 للدرس 6-2 (تحليل الانحدار — ص 38 - 41 / pp. 43 - 46)</span><span className="lang-en">2. Lesson 6-2 Try 2 & Exercise 3 Solutions (pp. 43 - 46)</span></span>
                                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold text-[10px]">الدرس 6-2</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 38 - 39):</strong> (1) الفرق بين البسيط والمتعدد: <strong>(جـ / C)</strong> يستخدم الانحدار البسيط متغيراً تفسيرياً واحداً، والمتعدد عدة متغيرات تفسيرية. • (2) مطابقة النوع: (1) الآيس كريم من الحرارة = <strong>(أ / A) الانحدار البسيط</strong>؛ (2) أسعار المنازل من المساحة والعمر والمسافة = <strong>(ب / B) الانحدار المتعدد</strong>. • (3) تفسير النتائج: <strong>(ب / B)</strong> التعامل مع النتائج كمنظور واحد تقدمه البيانات وتقييم السببية بعناية. • (4) الوصف غير المناسب للمؤشرات: <strong>(د / D)</strong> إذا كانت قيمة R² قريبة من 1 فإن النموذج جيد بالضرورة دون فحص مؤشرات أخرى.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 41):</strong> (1) الارتباط والسببية: <strong>(ب / B)</strong> لادعاء السببية يلزم أسبقية زمنية، واستبعاد تأثير عوامل أخرى، ودعم نظري. • (2) تفسير مؤشرات التقييم: <strong>(أ / A)</strong> يأخذ R² قيماً بين 0 و 1 وكلما اقترب من 1 كان تفسير التباين أفضل. • (3) ما لا يُعد نقطة حذر مناسبة: <strong>(جـ / C)</strong> الحكم على جودة النموذج من R² وحده دون فحص مؤشرات أخرى.</p>
                                <p className="lang-en">✅ <strong>Try 2 (pp. 43 - 44):</strong> (1) <strong>C</strong>. (2) a: <strong>A (Simple regression)</strong>, b: <strong>B (Multiple regression)</strong>. (3) <strong>B</strong>. (4) <strong>D</strong> (Never judge by R² alone).<br />✅ <strong>Exercise 3 (p. 46):</strong> (1) <strong>B</strong> (Causation requires temporal precedence, ruling out other factors, and theory). (2) <strong>A</strong>. (3) <strong>C</strong>.</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">3. حلول تدرّب 2 وتمارين 3 للدرس 6-3 (تصور البيانات والتواصل — ص 47 و 49 / pp. 53 - 56)</span><span className="lang-en">3. Lesson 6-3 Try 2 & Exercise 3 Solutions (pp. 53 - 56)</span></span>
                                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-bold text-[10px]">الدرس 6-3</span>
                            </div>
                            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/40 text-purple-200 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 47):</strong> (1) مطابقة الرسم: (1/a) زيارات العملاء حسب يوم الأسبوع × الفترة الزمنية = <strong>(أ / A) خريطة حرارية (Heatmap)</strong>؛ (2/b) نسب الذكور والإناث × تفضيل المادة بالمساحات = <strong>(ب / B) مخطط مستطيلات (Mosaic plot)</strong>. • (2) موقف استخدام الخريطة الحرارية: <strong>(جـ / C)</strong> إدراك توزيع البيانات العددية وأنماطها عبر توليفات على محورين من نظرة واحدة. • (3) موقف استخدام مخطط المستطيلات: <strong>(ب / B)</strong> إدراك نسب التكرارات لتوليفات متغيرين فئويين بشكل حدسي باستخدام المساحات. • (4) سرد قصص البيانات: <strong>(ب / B)</strong> توضيح الرسالة، واختيار العناصر، وتوفير معلومات داعمة هي العناصر الأساسية.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 49):</strong> (1) وصف الخريطة الحرارية: <strong>(ب / B)</strong> رسم يمثل حجم قيمة ثالثة مقابلة للتوليفات على محورين بتدرج اللون أو الصبغة. • (2) ما ليس عنصراً مناسباً لسرد القصص: <strong>(د / D)</strong> تضمين أكبر عدد ممكن من العناصر غير المرتبطة بالرسالة. • (3) مطابقة الرسم: (1/a) متوسطات الحرارة الشهرية لعدة مدن = <strong>(ب / B) خريطة حرارية</strong>؛ (2/b) نسب الشراء لفئة العمر × فئة المنتج بالمساحات = <strong>(جـ / C) مخطط مستطيلات</strong>؛ (3/c) علاقة متغيرين كميين بعدد نقاط قليل = <strong>(أ / A) مخطط مبعثر (Scatter plot)</strong>.</p>
                                <p className="lang-en">✅ <strong>Try 2 (pp. 53 - 54):</strong> (1) a: <strong>A (Heatmap)</strong>, b: <strong>B (Mosaic plot)</strong>. (2) <strong>C</strong>. (3) <strong>B</strong>. (4) <strong>B</strong>.<br />✅ <strong>Exercise 3 (p. 56):</strong> (1) <strong>B</strong>. (2) <strong>D</strong>. (3) a: <strong>B (Heatmap)</strong>, b: <strong>C (Mosaic plot)</strong>, c: <strong>A (Scatter plot)</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">جـ</span>
                            <span className="lang-ar">أسئلة الصواب والخطأ (الأمثلة المحلولة بالكتاب) مع تصويب الخطأ</span>
                            <span className="lang-en">Worked Examples True/False Questions with Scientific Corrections</span>
                        </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">1. الدرس 6-1 (ص 30 / p. 33): (ب) &quot;التقدير النقطي طريقة تقدر خصائص المجتمع ضمن مدى معين.&quot; و(د) &quot;إذا كانت نتيجة ما ذات دلالة إحصائية، فإن الفرق يكون بالضرورة مهماً عملياً أيضاً.&quot;</span><span className="lang-en">1. Lesson 6-1 (p. 33): (B) &quot;Point estimation estimates within a range&quot; & (D) &quot;A statistically significant result is necessarily practically important.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: التقدير ضمن مدى هو التقدير الفاصل (Interval estimation) بينما النقطي يقدر قيمة واحدة. والدلالة الإحصائية تختلف عن الأهمية العملية (مع عينة كبيرة يصبح الفرق الضئيل ذا دلالة إحصائية). (العبارتان أ و جـ صحيحتان ○).</span>
                                <span className="lang-en">❌ Both False — Estimating within a range is interval estimation; and statistical significance ≠ practical importance (Statements A and C are True ○).</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">2. الدرس 6-2 (ص 37 - 38 / p. 42): (أ) &quot;تحليل الانحدار المتعدد يتنبأ بمتغير الاستجابة باستخدام متغير تفسيري واحد.&quot; و(د) &quot;إذا لاءمت معادلة التنبؤ البيانات، يمكن القول بوجود علاقة سببية.&quot;</span><span className="lang-en">2. Lesson 6-2 (p. 42): (A) &quot;Multiple regression uses one explanatory variable&quot; & (D) &quot;If the prediction equation fits, there is a causal relationship.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: التنبؤ بمتغير تفسيري واحد هو الانحدار البسيط (Simple regression)، وملاءمة المعادلة وحدها تعكس ارتباطاً ولا تثبت السببية. (العبارتان ب و جـ صحيحتان ○).</span>
                                <span className="lang-en">❌ Both False — One explanatory variable is simple regression; and a good fit alone does not establish causation (Statements B and C are True ○).</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">3. الدرس 6-3 (ص 46 / p. 52): (د) &quot;في سرد قصص البيانات، من المهم تضمين أكبر عدد ممكن من العناصر المرتبطة بالرسم البياني.&quot;</span><span className="lang-en">3. Lesson 6-3 (p. 52): (D) &quot;In data storytelling, it is important to include as many elements related to the graph as possible.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارة خاطئة) — التصويب: في سرد قصص البيانات (اختيار العناصر)، من المهم إزالة العناصر غير المرتبطة بالرسالة والتركيز فقط على إبراز الأجزاء المهمة. (العبارات أ و ب و جـ صحيحة ○).</span>
                                <span className="lang-en">❌ False — In data storytelling, remove elements unrelated to the message so the key insight stands out (Statements A, B, and C are True ○).</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-6-3')}
                        className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 6-3</span>
                        <span className="lang-en">Previous 6-3</span>
                    </button>
                    <button onClick={() => navigate('unit-6-exam')}
                        className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 text-white flex items-center gap-2 shadow-xl shadow-emerald-500/25">
                        <span className="lang-ar">🏆 خوض اختبار الوحدة السادسة الشامل (25 سؤالاً)</span>
                        <span className="lang-en">🏆 Take Unit 6 Comprehensive Exam (25 Qs)</span>
                        <i className="fa-solid fa-trophy"></i>
                    </button>
                </div>
            
    </div>
  );
}
