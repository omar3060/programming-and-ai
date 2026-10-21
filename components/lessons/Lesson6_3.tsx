'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit6LessonQuiz';
import { VisualizationStorytellingSimulator } from '@/components/simulators/VisualizationStorytellingSimulator';

export function Lesson6_3() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(current => ({ ...current, [id]: !current[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-6-3" className="lesson-view space-y-8 animate-fadeIn">


                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-chart-pie"></i>
                                    <span className="lang-ar">الدرس 6-3 (كتاب الوزارة ص 42 - ص 49)</span>
                                    <span className="lang-en">Lesson 6-3 (Textbook pp. 48 - 56)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">تصور البيانات وسرد القصص</span>
                                    <span className="lang-en">Data Visualization & Storytelling</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">تصور البيانات والتواصل (Data Visualization and Communication)</span>
                                <span className="lang-en">Data Visualization and Communication</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح تفصيلي شامل للدرس الثالث والأخير في الوحدة السادسة: الدور المزدوج لتصور البيانات (تعميق فهم المحلل نفسه وتوصيل البيانات للآخرين)، الرسوم المتقدمة للتعامل مع متغيرات متعددة (الخريطة الحرارية Heatmap لقيمة ثالثة بتدرج اللون عبر محورين وحل مشكلة التراكب الزائد للنقاط Overplotting، ومخطط المستطيلات/الفسيفساء Mosaic Plot لتمثيل متغيرين فئويين بالمساحات)، والعناصر الأساسية الثلاثة لسرد قصص البيانات (Data Storytelling: توضيح الرسالة، اختيار العناصر، وتوفير معلومات داعمة صادقة).</span>
                                <span className="lang-en">Comprehensive breakdown of Lesson 6-3: The dual role of data visualization (deepening the analyst&apos;s own understanding & communicating data to others), advanced multivariate visualizations (Heatmaps encoding a 3rd value by color across two axes & resolving scatter plot overplotting; Mosaic plots representing two categorical variables via rectangular areas), and the 3 core elements of Data Storytelling (Clarification of the message, Selection of elements, Provision of supporting information).</span>
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
                            <strong className="text-purple-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 42):</span>
                                <span className="lang-en">Official Learning Objectives (p. 48):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">شرح دور تصور البيانات (Data visualization) واختيار الرسوم البيانية المناسبة، بما في ذلك المخصصة للبيانات متعددة المتغيرات (Heatmap و Mosaic plot).</span><span className="lang-en">Explain the role of data visualization and select suitable graphs, including for multiple variables.</span></li>
                                <li>• <span className="lang-ar">توظيف أسلوب سرد القصص المستندة إلى البيانات (Data storytelling) لنقل رسالة واضحة وصادقة من واقع البيانات.</span><span className="lang-en">Apply data storytelling to communicate a clear and honest message from data.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 43):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 49):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف نختار تصوراً يكشف نمطاً بصدق، وكيف نحوّل رسماً بيانياً إلى رسالة يفهمها الآخرون؟&quot;</span>
                                <span className="lang-en">&quot;How do we choose a visualization that reveals a pattern honestly, and how do we turn a chart into a message others understand?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">دور تصور البيانات والرسوم المتقدمة متعددة المتغيرات (ص 43 - 45)</span>
                            <span className="lang-en">1. Role of Visualization & 2. Multivariate Graphs: Heatmap & Mosaic Plot (pp. 49 - 51)</span>
                        </h3>
                        <span className="text-xs font-mono text-purple-400 font-bold">Heatmap • Mosaic Plot • Overplotting</span>
                    </div>

                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[600px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">الدور (Role)</span><span className="lang-en">Role of Data Visualization</span></th>
                                    <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الوصف (Description)</span><span className="lang-en">Description</span></th>
                                    <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال من كتاب الوزارة (ص 43 / p. 49)</span><span className="lang-en">Textbook Example (p. 49)</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">1. تعميق فهم المحلل نفسه</span><span className="lang-en">1. Deepen the analyst&apos;s own understanding</span></td>
                                    <td className="p-3"><span className="lang-ar">إدراك توزيع البيانات واتجاهاتها والقيم الشاذة بصرياً واكتساب رؤى يصعب ملاحظتها من جدول أرقام.</span><span className="lang-en">Visually grasp the distribution, trends, and outliers of data and gain insight.</span></td>
                                    <td className="p-3"><span className="lang-ar">عرض سجلات التدريب أو وقت الدراسة كرسم بياني خطي لملاحظة التغيرات والاتجاهات بسهولة.</span><span className="lang-en">Showing training records or study time as a line graph to spot trends easily.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">2. توصيل البيانات للآخرين</span><span className="lang-en">2. Communicate data to others</span></td>
                                    <td className="p-3"><span className="lang-ar">عرض نتائج التحليل أو الادعاءات للجمهور بطريقة سهلة الفهم من نظرة واحدة.</span><span className="lang-en">Convey analysis results or claims to others in an easy-to-understand way.</span></td>
                                    <td className="p-3"><span className="lang-ar">عرض متوسط درجة الاختبار لكل فصل كرسم بياني بالأعمدة (Bar graph) ليتمكن أي شخص من مقارنة الفصول فوراً.</span><span className="lang-en">Showing average test score of each class as a bar graph for instant comparison.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                        <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-2.5">
                            <strong className="text-amber-400 text-sm font-black flex items-center gap-2">
                                <i className="fa-solid fa-table-cells"></i>
                                <span className="lang-ar">(1) الخريطة الحرارية (Heatmap) والتراكب الزائد (Overplotting):</span>
                                <span className="lang-en">(1) Heatmap & Resolving Scatter Overplotting:</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar"><strong>الخريطة الحرارية (Heatmap):</strong> رسم بياني تُرتب فيه العناصر على محورين (صفوف × أعمدة)، ويُمثَّل حجم <strong>قيمة ثالثة عددية (Third numerical value)</strong> مقابلة لكل توليفة بواسطة <strong>تدرج اللون أو اختلافات الصبغة (Gradation of color / hue)</strong> مع مفتاح يوضح معنى الألوان.</span>
                                <span className="lang-en"><strong>Heatmap:</strong> A graph in which items are arranged on two axes, and the size of a <strong>third numerical value</strong> for each combination is represented by <strong>color gradation or hue</strong>.</span>
                            </p>
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-[11px] space-y-1">
                                <p>🔥 <strong><span className="lang-ar">أمثلة الكتاب (ص 44):</span><span className="lang-en">Textbook Examples (p. 50):</span></strong> <span className="lang-ar">إدراك عدد العملاء الزائرين من نظرة واحدة حسب (يوم الأسبوع × الفترة الزمنية)، أو مقارنة متوسط درجة الحرارة أو هطول الأمطار حسب (المدينة × الشهر).</span><span className="lang-en">Customer visits by (day of week × time slot), or average temperature/rainfall by (city × month).</span></p>
                                <p>⚫ <strong><span className="lang-ar">علاج التراكب الزائد للنقاط (Overplotting):</span><span className="lang-en">Fixing Overplotting:</span></strong> <span className="lang-ar">في المخطط المبعثر (Scatter plot)، عندما يكون عدد النقاط كبيراً جداً، تتداخل النقاط في كتلة صلبة وتختفي الكثافة (Overplotting)؛ هنا تتميز الخريطة الحرارية بإظهار كثافة البيانات وأنماطها من نظرة واحدة!</span><span className="lang-en">When a scatter plot has too many points, they overlap and hide density (overplotting); a heatmap clearly reveals data density at a glance.</span></p>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2.5">
                            <strong className="text-cyan-400 text-sm font-black flex items-center gap-2">
                                <i className="fa-solid fa-vector-square"></i>
                                <span className="lang-ar">(2) مخطط المستطيلات / الفسيفساء (Mosaic Plot):</span>
                                <span className="lang-en">(2) Mosaic Plot (Proportional Area Chart):</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar"><strong>مخطط المستطيلات (Mosaic Plot):</strong> رسم بياني يمثل العلاقة وتوزيع التكرارات أو النسب بين <strong>متغيرين فئويين (Two categorical variables)</strong> بواسطة <strong>حجم المساحات المستطيلة (Size of rectangular areas)</strong>.</span>
                                <span className="lang-en"><strong>Mosaic Plot:</strong> A graph that represents the relationship between <strong>two categorical variables</strong> by the <strong>size of rectangular areas</strong>.</span>
                            </p>
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-[11px] space-y-1">
                                <p>🧩 <strong><span className="lang-ar">آلية العمل وأمثلة الكتاب (ص 44 - 45):</span><span className="lang-en">How It Works & Examples (pp. 50 - 51):</span></strong> <span className="lang-ar">يتناسب عرض وارتفاع التقسيمات مع نسب التكرارات، فتمثل مساحة كل مستطيل نسبة تلك التوليفة من الفئات بصرياً وبشكل حدسي أوضح من جدول الأرقام المتقاطع (Cross-tabulation).</span><span className="lang-en">Column widths and row heights correspond to category proportions, so each rectangle&apos;s area visually shows the proportion of that category combination.</span></p>
                                <p>📌 <strong><span className="lang-ar">أمثلة:</span><span className="lang-en">Examples:</span></strong> <span className="lang-ar">مقارنة التوزيع حسب (الجنس × تفضيل المادة الدراسية)، أو إدراك الفروق في نسب الشراء حسب (الفئة العمرية × فئة المنتج)، أو (المحافظة × الرياضة المفضلة).</span><span className="lang-en">Comparing (gender × subject preference), (age group × product category), or (governorate × favorite sport).</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">٢</span>
                            <span className="lang-ar">سرد قصص البيانات (Data Storytelling) وعناصره الأساسية الثلاثة (ص 45)</span>
                            <span className="lang-en">3. Data Storytelling & Its Three Basic Elements (p. 51)</span>
                        </h3>
                        <span className="text-xs font-mono text-emerald-400 font-bold">Message • Elements • Supporting Info</span>
                    </div>

                    <p className="text-xs text-sub leading-relaxed">
                        <span className="lang-ar"><strong>سرد قصص البيانات (Data Storytelling):</strong> هو استخدام البيانات والتصور لنقل الرسالة التي تريد إيصالها، منظمة ومهيكلة كقصة واضحة حول سؤال أو نتيجة، مع إبقاء السياق والمعلومات الداعمة الصادقة ودون إخفاء ما قد يغير التفسير.</span>
                        <span className="lang-en"><strong>Data Storytelling:</strong> Using data and visualization to convey the message you want to convey, structured like a story around a clear insight with honest context.</span>
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[650px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">العنصر الأساسي (Element)</span><span className="lang-en">Basic Element</span></th>
                                    <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الوصف والغرض (Description)</span><span className="lang-en">Description</span></th>
                                    <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال تطبيقي من كتاب الوزارة (ص 45 / p. 51)</span><span className="lang-en">Textbook Example (p. 51)</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">1. توضيح الرسالة</span><span className="lang-en">1. Clarification of the message</span></td>
                                    <td className="p-3"><span className="lang-ar">جعل من الممكن التعبير في <strong>جملة واحدة</strong> عما تريد نقله من خلال الرسم البياني.</span><span className="lang-en">Make it possible to express in <strong>one sentence</strong> what you want to convey through the graph.</span></td>
                                    <td className="p-3"><span className="lang-ar">جعل عنوان الرسم البياني يحتوي على الادعاء، مثل: &quot;حقق الفصل درجات عالية بشكل عام في اختبار الرياضيات&quot;.</span><span className="lang-en">Make the graph title contain the claim, e.g., &quot;The class scored highly overall on the math test.&quot;</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">2. اختيار العناصر</span><span className="lang-en">2. Selection of elements</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>إزالة العناصر غير المرتبطة بالرسالة</strong> والتركيز على إبراز الأجزاء التي تريد لفت الانتباه إليها.</span><span className="lang-en"><strong>Remove elements unrelated to the message</strong> and emphasize the parts you want to draw attention to.</span></td>
                                    <td className="p-3"><span className="lang-ar">جعل العناصر المراد إبرازها وحدها بارزة بالألوان، مع إبقاء بقية العناصر بألوان باهتة تظل واضحة ودون إخفاء السياق.</span><span className="lang-en">Make only the target elements stand out in color, while keeping other elements in faded colors.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">3. توفير معلومات داعمة</span><span className="lang-en">3. Provision of supporting information</span></td>
                                    <td className="p-3"><span className="lang-ar">ترتيب <strong>العنوان وتسميات المحاور والوحدات والمصدر والملاحظات</strong> بشكل صحيح وصادق.</span><span className="lang-en">Properly arrange the <strong>title, axis labels, units, source, and notes</strong>.</span></td>
                                    <td className="p-3"><span className="lang-ar">كتابة عنوان واضح مثل &quot;متوسط درجات اختبار الرياضيات حسب الفصل&quot;، وتحديد &quot;درجة (points)&quot; على المحور الرأسي و&quot;الفصل (class)&quot; على المحور الأفقي.</span><span className="lang-en">Clearly indicate title (&quot;Average math test scores by class&quot;) and axis units (&quot;points&quot; on vertical axis, &quot;class&quot; on horizontal axis).</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <VisualizationStorytellingSimulator />

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 6-3</span>
                                <span className="lang-en">Official Lesson 6-3 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 44 - ص 49</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 6-3 (ص 44 - 47)</span>
                                <span className="lang-en">💡 All 4 Pause & Think Questions — Lesson 6-3 (pp. 50 - 53)</span>
                            </span>
                            <button onClick={() => toggleCard('pt-6-3')} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 44 و 47): &quot;فئتان تُقارَنان بالمساحة، أم قيمة ثالثة باللون على محورين — أي رسم بياني هو أيهما؟&quot;</span><span className="lang-en">1. (pp. 50 & 53): &quot;Two categories compared by area, or a third value by color on two axes — which graph is which?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 46): &quot;هل إضافة المزيد من العناصر إلى رسم بياني يجعل الرسالة أوضح، أم يخفيها؟&quot;</span><span className="lang-en">2. (p. 52): &quot;Does adding more elements to a graph make the message clearer, or bury it?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 47): &quot;سلسلة زمنية لقيمة واحدة، أم نسب فئتين — أيهما يناسب مخطط المستطيلات (Mosaic plot)؟&quot;</span><span className="lang-en">3. (p. 53): &quot;Time-series of one value, or proportions of two categories — which suits a mosaic plot?&quot;</span></p>
                        </div>
                        <div id="pt-6-3" className={expandedCards['pt-6-3'] ? 'p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>1. مقارنة الفئتين بالمساحة مقابل القيمة الثالثة باللون:</strong> مقارنة فئتين بالمساحات المستطيلة هو <strong>مخطط المستطيلات / الفسيفساء (Mosaic plot)</strong>، بينما تمثيل قيمة ثالثة بتدرج اللون على محورين هو <strong>الخريطة الحرارية (Heatmap)</strong>.<br />💡 <strong>2. إضافة عناصر زائدة للرسم:</strong> <strong>تخفي الرسالة وتطمسها (Buries it)!</strong> في سرد قصص البيانات يجب إزالة العناصر غير المرتبطة بالرسالة والتركيز فقط على إبراز الجزء المهم.<br />💡 <strong>3. ما يناسب مخطط المستطيلات:</strong> <strong>نسب تكرارات فئتين (Proportions of two categories)</strong> هو ما يناسب مخطط المستطيلات، بينما السلسلة الزمنية لقيمة واحدة يناسبها الرسم البياني الخطي (Line graph).</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. Two categories by area = <strong>Mosaic plot</strong>; a third value by color across two axes = <strong>Heatmap</strong>.<br />2. Adding extra unrelated elements <strong>buries the message</strong>; data storytelling strips away non-essential clutter.<br />3. <strong>Proportions of two categories</strong> suits a mosaic plot (time-series of one value suits a line graph).</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: رياضة الطلاب حسب المحافظة وهطول الأمطار الشهري — كتاب الوزارة ص 48</span>
                                <span className="lang-en">⚙️ Think as an Engineer (Governorate × Sport & Monthly Rainfall) — Textbook p. 54</span>
                            </span>
                            <button onClick={() => toggleCard('eng-6-3')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;جمع فصلك بيانات عن (محافظة سكن الطلاب × رياضتهم المفضلة)، وكذلك (هطول الأمطار الشهري لعدة مدن مصرية على مدار العام): 1. اختر رسماً بيانياً لكل حالة وبرر اختيارك. 2. احترس من التضليل: سمِّ خيار تصميم واحداً قد يضلل القارئ وكيف تمنعه. 3. نظّم العرض (سرد القصة) في جملة واحدة.&quot;</span>
                            <span className="lang-en">&quot;Your class collected data on (home governorate × favorite sport) and (monthly rainfall for several Egyptian cities across the year): 1. Choose a graph for each and justify. 2. Name one misleading design choice and how to prevent it. 3. Write a one-sentence takeaway message and which element to emphasize.&quot;</span>
                        </p>
                        <div id="eng-6-3" className={expandedCards['eng-6-3'] ? 'p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. اختيار الرسم البياني لكل مجموعة بيانات:</strong><br />— لبيانات <strong>(المحافظة × الرياضة المفضلة):</strong> نختار <strong>مخطط المستطيلات (Mosaic Plot)</strong> لأنهما متغيران فئويان (Categorical) ونريد إظهار نسب التوليفات بالمساحات المستطيلة.<br />— لبيانات <strong>(المدينة × الشهر × كمية هطول الأمطار):</strong> نختار <strong>الخريطة الحرارية (Heatmap)</strong> لأن لدينا محورين (المدينة × الشهر) وقيمة ثالثة عددية (كمية المطر بالمليمتر) تُعرض بتدرج اللون من نظرة واحدة.<br />• <strong>2. الحذر من التضليل (Guard against misleading):</strong> استخدام مقياس لوني بدون مفتاح (Legend) أو مقياس لا يبدأ من الصفر بحيث تبدو الفروق الطفيفة ضخمة؛ ونمنع ذلك بوضع مفتاح تدرج لوني صريح يبدأ من الصفر مع كتابة الوحدات (مم).<br />• <strong>3. سرد القصة (Tell the story):</strong> عنوان يحمل الرسالة في جملة واحدة: &quot;تتركز أمطار المدن الساحلية المصرية في فصل الشتاء (ديسمبر ويناير)&quot;، مع إبراز خلايا أشهر الشتاء بلون أزرق داكن واضح وتسمية المحاور والوحدات والمصدر.</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Graph Selection:</strong> For <strong>Governorate × Favorite Sport</strong> (two categorical variables), use a <strong>Mosaic Plot</strong> to show proportions by area. For <strong>City × Month Rainfall</strong> (two axes + a third numerical value), use a <strong>Heatmap</strong>.<br />• <strong>2. Guard Against Misleading:</strong> Omitting the color scale legend or starting the scale above zero distorts differences; prevent this by starting the scale at 0 mm and displaying a clear legend and units.<br />• <strong>3. Data Story:</strong> Title claim: &quot;Northern coastal cities receive peak rainfall during winter months (Dec–Feb),&quot; highlighting winter cells while keeping clear axis labels and units.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (تداخل نقاط وقت الدراسة ودرجة الاختبار) — كتاب الوزارة ص 48</span>
                                <span className="lang-en">🌍 In a New Context (Study Time vs. Test Score Overplotting) — Textbook p. 55</span>
                            </span>
                            <button onClick={() => toggleCard('ctx-6-3')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يرسم باحث وقت الدراسة مقابل درجة الاختبار لكل طالب في مدرسة كبيرة كمخطط مبعثر (Scatter plot)، لكن تتداخل النقاط الكثيرة جداً في كتلة صلبة بحيث لا يمكن قراءة الكثافة. سمِّ تصوراً يمكن أن يكشف أين يقع معظم الطلاب فعلياً، واشرح لماذا يعمل بشكل أفضل هنا من المخطط المبعثر المزدحم.&quot;</span>
                            <span className="lang-en">&quot;A researcher plots study time against test score for every student in a large school as a scatter plot, but so many points overlap into a solid blob that the density cannot be read. Name a visualization that would reveal where most students actually fall, and explain why it works better here than the crowded scatter plot.&quot;</span>
                        </p>
                        <div id="ctx-6-3" className={expandedCards['ctx-6-3'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>التصور المناسب:</strong> <strong>الخريطة الحرارية (Heatmap / خريطة الكثافة ثنائية الأبعاد)</strong>.<br />• <strong>لماذا تعمل بشكل أفضل هنا؟</strong> لأن المخطط المبعثر يعاني هنا من مشكلة <strong>التراكب الزائد للنقاط (Overplotting)</strong> حيث تتراكم النقاط فوق بعضها فتختفي الكثافة الفعلية، بينما تقسم الخريطة الحرارية المحورين إلى خلايا وتستخدم <strong>تدرج اللون (Color intensity)</strong> لتمثيل عدد الطلاب في كل خلية، فيظهر فوراً أين يتركز معظم الطلاب!</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Recommended Visualization:</strong> <strong>A Heatmap (2D density heatmap)</strong>.<br />• <strong>Why It Works Better:</strong> The scatter plot suffers from <strong>overplotting</strong> (overlapping points hide true density), whereas a heatmap encodes the count/density of students in each study-time × score cell using color gradation, making high-density clusters visible at a glance.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] + تحدي المقياس اللوني — كتاب الوزارة ص 46 و 49</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] & Color Scale Challenge — Textbook pp. 53 & 56</span>
                            </span>
                            <button onClick={() => toggleCard('exam-6-3')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className="fa-solid fa-chevron-down text-[10px]"></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح لماذا يمكن أن يؤدي اختيار الرسم البياني الخطأ، أو إخفاء تسميات الرسم البياني، إلى تضليل الجمهور حتى عندما تكون البيانات صحيحة. [6 درجات] راجع: مطابقة الرسم البياني مع البيانات والمعلومات الداعمة الصادقة.&quot;</span>
                            <span className="lang-en">&quot;Explain why choosing the wrong graph, or hiding a chart&apos;s labels, can mislead an audience even when the data is correct. [6 marks] Refer to: matching the graph to the data and honest supporting information.&quot;</span>
                        </p>
                        <div id="exam-6-3" className={expandedCards['exam-6-3'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>أثر اختيار الرسم البياني الخطأ (Mismatching graph to data) [3 درجات]:</strong> كل نوع من الرسوم البيانية مصمم لبنية بيانات محددة؛ فاستخدام رسم غير مناسب (مثل مخطط مبعثر مزدحم يعاني من التراكب الزائد Overplotting بدلاً من خريطة حرارية، أو رسم خطي لفئات غير مرتبة زمنياً) يخفي الأنماط الحقيقية أو يوحي باتجاهات وهمية غير موجودة في البيانات.</span><span className="lang-en"><strong>Choosing the wrong graph [3 marks]:</strong> Different graphs suit different variable types and counts; using an ill-suited chart (e.g., an overplotted scatter plot instead of a heatmap, or a line chart for unordered categories) hides real patterns or suggests false trends.</span></li>
                                <li><span className="lang-ar"><strong>أثر غياب المعلومات الداعمة الصادقة (Missing/dishonest supporting information) [3 درجات]:</strong> في سرد قصص البيانات، بدون <strong>العنوان الواضح، وتسميات المحاور، والوحدات، ومفتاح المقياس الذي يبدأ من الصفر</strong>، لا يستطيع الجمهور معرفة ما تمثله الأرقام أو قد يظن الفروق الصغيرة جداً فروقاً هائلة، مما يخلق انطباعاً مضللاً رغم صحة الأرقام الخام.</span><span className="lang-en"><strong>Hiding labels & supporting information [3 marks]:</strong> Without honest supporting information (clear title, axis labels, units, and a zero-based scale/legend), readers cannot interpret magnitudes accurately and small differences can look deceptively dramatic.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-purple-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 6-3 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 6-3 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-purple-500/30">
                                    <span className="text-2xl mb-1 block">👁️</span>
                                    <strong className="text-sm block"><span className="lang-ar">دور تصور البيانات</span><span className="lang-en">Visualization Roles</span></strong>
                                    <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                    <p className="lang-ar">يؤدي دورين: (1) تعميق فهم المحلل نفسه للاتجاهات والشواذ، و(2) توصيل النتائج للآخرين بوضوح.</p>
                                    <p className="lang-en">Two roles: (1) Deepen the analyst&apos;s own understanding, and (2) Communicate results clearly to others.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-amber-500/30">
                                    <span className="text-2xl mb-1 block">🔥</span>
                                    <strong className="text-sm block"><span className="lang-ar">الخريطة الحرارية</span><span className="lang-en">Heatmap</span></strong>
                                    <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                    <p className="lang-ar">رسم يرتب العناصر على محورين ويمثل حجم قيمة ثالثة عددية بتدرج اللون أو الصبغة، ويعالج التراكب الزائد.</p>
                                    <p className="lang-en">Encodes a 3rd numerical value across two axes using color gradation; resolves scatter overplotting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">🧩</span>
                                    <strong className="text-sm block"><span className="lang-ar">مخطط المستطيلات</span><span className="lang-en">Mosaic Plot</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">رسم يمثل العلاقة ونسب التكرارات بين متغيرين فئويين بواسطة حجم المساحات المستطيلة.</p>
                                    <p className="lang-en">Represents the relationship and proportions between two categorical variables using rectangular areas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">📖</span>
                                    <strong className="text-sm block"><span className="lang-ar">سرد قصص البيانات</span><span className="lang-en">Data Storytelling</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">عناصره الثلاثة: (1) توضيح الرسالة في جملة، (2) اختيار العناصر وإزالة الزوائد، (3) توفير معلومات داعمة صادقة.</p>
                                    <p className="lang-en">3 Elements: (1) Clarify 1-sentence message, (2) Select/highlight key elements, (3) Provide honest labels & units.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LessonQuiz lessonId="63" />

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-6-2')}
                        className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 6-2</span>
                        <span className="lang-en">Previous 6-2</span>
                    </button>
                    <button onClick={() => navigate('unit-6-solutions')}
                        className="px-5 py-2.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">حلول تدريبات كتاب الوزارة كاملة</span>
                        <span className="lang-en">Textbook Exercises Solutions</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            
    </div>
  );
}
