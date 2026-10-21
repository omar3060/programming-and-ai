'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit5LessonQuiz';
import { OpenDataSimulator } from '@/components/simulators/OpenDataSimulator';

export function Lesson5_3() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const toggleFlip = (id: string) => { playSfx('click'); setFlippedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-5-3" className="lesson-view space-y-8 animate-fadeIn">
    
                    {/* Hero Banner */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-2 max-w-3xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold flex items-center gap-1.5">
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                        <span className="lang-ar">الدرس 5-3 (كتاب الوزارة ص 19 - ص 25)</span>
                                        <span className="lang-en">Lesson 5-3 (Textbook pp. 21 - 28)</span>
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                        <span className="lang-ar">البيانات المفتوحة وواجهات API</span>
                                        <span className="lang-en">Open Data, APIs &amp; JSON</span>
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black">
                                    <span className="lang-ar">البيانات المفتوحة وواجهات برمجة التطبيقات (Open Data and APIs)</span>
                                    <span className="lang-en">Open Data and APIs</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                    <span className="lang-ar">شرح تفصيلي شامل للدرس الثالث والأخير في الوحدة الخامسة: مفهوم البيانات المفتوحة (Open Data) ومصادرها الدولية الموثوقة (World Bank Open Data، و UN Data، ومنصة Kaggle)، آلية جلب البيانات برمجياً عبر واجهات برمجة التطبيقات (API) ونقطة النهاية (Endpoint) بصيغة JSON، وأهمية الالتزام بشروط الاستخدام (Terms of Use) والإشارة إلى المصدر (Source Citation).</span>
                                    <span className="lang-en">Comprehensive breakdown of Lesson 5-3: Open data concepts and major reliable providers (World Bank Open Data, UN Data, Kaggle), programmatic data retrieval via APIs (Client &rarr; Endpoint URL &rarr; Server &rarr; JSON), and the necessity of checking Terms of Use and citing the source.</span>
                                </p>
                            </div>
    
                            {/* Teacher Card Badge */}
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
    
                        {/* Learning Objectives & Guiding Question */}
                        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <strong className="text-teal-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-bullseye"></i>
                                    <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 19):</span>
                                    <span className="lang-en">Official Learning Objectives (p. 21):</span>
                                </strong>
                                <ul className="space-y-1 text-sub">
                                    <li>• <span className="lang-ar">شرح مفهوم البيانات المفتوحة، مع تحديد أهم المصادر الموثوقة لها (World Bank Open Data, UN Data, Kaggle).</span><span className="lang-en">Explain what open data is and identify major reliable sources of it.</span></li>
                                    <li>• <span className="lang-ar">وصف كيفية الحصول على البيانات عبر واجهة برمجة التطبيقات (API)، وشرح أهمية شروط الاستخدام وذكر المصدر.</span><span className="lang-en">Describe how data is obtained through an API, and explain the importance of terms of use and source citation.</span></li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-circle-question"></i>
                                    <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 20):</span>
                                    <span className="lang-en">Guiding Question (Textbook p. 22):</span>
                                </strong>
                                <p className="text-slate-200 font-medium leading-relaxed">
                                    <span className="lang-ar">&quot;من أين تأتي البيانات المفتوحة الموثوقة، وكيف تجلبها البرامج، وما القواعد التي تحكم استخدامها؟&quot;</span>
                                    <span className="lang-en">&quot;Where does reliable open data come from, how do programs fetch it, and what rules govern its use?&quot;</span>
                                </p>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 1: Using Open Data & Major Open Data Sources (ص 20 / p. 22) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">١</span>
                                <span className="lang-ar">البيانات المفتوحة ومصادرها الدولية الرئيسية (كتاب الوزارة ص 20)</span>
                                <span className="lang-en">1. Using Open Data &amp; 2. Major Open Data Sources (p. 22)</span>
                            </h3>
                            <span className="text-xs font-mono text-teal-400 font-bold">World Bank • UN Data • Kaggle</span>
                        </div>
    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-white block font-bold">
                                    <span className="lang-ar">📌 مفهوم البيانات المفتوحة (Open Data — ص 20):</span>
                                    <span className="lang-en">📌 What is Open Data? (p. 22):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">هي بيانات متاحة للعموم بشروط أو تراخيص واضحة تسمح لأي شخص بالوصول إليها وإعادة استخدامها وإعادة توزيعها. (ملاحظة هامة: <strong>الإتاحة العامة أو المجانية وحدها لا تعني &quot;بلا قواعد&quot;!</strong> بل يجب دائماً التحقق من المصدر وجودته وشروط الاستخدام).</span>
                                    <span className="lang-en">Data made public for anyone to access, reuse, and redistribute. Important: <strong>&quot;Free&quot; is NOT the same as &quot;no rules&quot;</strong>—you must always check source reliability and terms of use.</span>
                                </p>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border border-teal-500/30 space-y-2">
                                <strong className="text-amber-400 block font-bold flex items-center gap-2">
                                    <i className="fa-solid fa-check-double"></i>
                                    <span className="lang-ar">الأمور الأربعة الواجب فحصها عند استخدام بيانات مفتوحة (ص 20):</span>
                                    <span className="lang-en">Four Checks When Using Open Data:</span>
                                </strong>
                                <p className="text-sub text-[11px] leading-relaxed">
                                    <span className="lang-ar">1) <strong>المصدر وجودته</strong> (الجهة الناشرة وتاريخ التحديث)، 2) <strong>طريقة الوصول</strong> (تنزيل مباشر من متصفح أو عبر API)، 3) <strong>الترخيص أو شروط الاستخدام (Terms of Use)</strong>، و4) <strong>مدى مناسبة البيانات وتعريفاتها لسؤال التحليل</strong>.</span>
                                    <span className="lang-en">1) Source reliability &amp; currency, 2) How to obtain it (browser download vs API), 3) Terms of use / license, and 4) Fit to the purpose of analysis.</span>
                                </p>
                            </div>
                        </div>
    
                        {/* Official Table: Major Open Data Sources */}
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[650px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">المزوّد (Provider)</span><span className="lang-en">Provider</span></th>
                                        <th className="p-3 text-start text-teal-400"><span className="lang-ar">الوصف (Description)</span><span className="lang-en">Description</span></th>
                                        <th className="p-3 text-start text-amber-400"><span className="lang-ar">الاستخدامات الرئيسية (Main Uses — ص 20 / p. 22)</span><span className="lang-en">Main Uses (Textbook p. 22)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white font-mono">World Bank Open Data<br /><span className="text-[11px] font-sans text-emerald-400"><span className="lang-ar">بيانات البنك الدولي المفتوحة</span><span className="lang-en">World Bank Portal</span></span></td>
                                        <td className="p-3 text-slate-200"><span className="lang-ar">إحصاءات عن الاقتصاد (مثل الناتج المحلي GDP) والسكان والتعليم والصحة لدول مختلف أنحاء العالم.</span><span className="lang-en">Statistics on economy (GDP), population, education, and health for countries around the world.</span></td>
                                        <td className="p-3"><span className="lang-ar">المقارنات الدولية وتحليل الاتجاهات الاجتماعية والاقتصادية في كل دولة.</span><span className="lang-en">International comparisons and analysis of social/economic trends in each country.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white font-mono">UN Data<br /><span className="text-[11px] font-sans text-cyan-400"><span className="lang-ar">بيانات الأمم المتحدة</span><span className="lang-en">United Nations Data</span></span></td>
                                        <td className="p-3 text-slate-200"><span className="lang-ar">إحصاءات دولية تنشرها الأمم المتحدة والوكالات التابعة لها.</span><span className="lang-en">International statistics published by the United Nations and its related agencies.</span></td>
                                        <td className="p-3"><span className="lang-ar">تحليل القضايا العالمية مثل السكان والتنمية والبيئة.</span><span className="lang-en">Analysis of global issues such as population, development, and environment.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white font-mono">Kaggle<br /><span className="text-[11px] font-sans text-purple-400"><span className="lang-ar">منصة كاجل للمسابقات</span><span className="lang-en">Data Science Platform</span></span></td>
                                        <td className="p-3 text-slate-200"><span className="lang-ar">منصة تُنظَّم عليها مسابقات لتحليل البيانات، وتُتاح فيها مجموعات بيانات متنوعة للعامة (تتفاوت موثوقيتها لذا يجب تقييم كل مجموعة وترخيصها).</span><span className="lang-en">A platform that runs data analysis competitions; datasets in various fields are made public.</span></td>
                                        <td className="p-3"><span className="lang-ar">الحصول على مجموعات بيانات لدراسة وبحوث التعلّم الآلي (Machine Learning).</span><span className="lang-en">Acquisition of datasets for machine learning study and research.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                    {/* SECTION 2: Obtaining Data via APIs, JSON & Source Citation (ص 21 - 22 / pp. 22 - 23) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">٢</span>
                                <span className="lang-ar">الحصول على البيانات عبر واجهات API، صيغة JSON، والإشارة للمصدر (ص 21 - 22)</span>
                                <span className="lang-en">3. Obtaining Data via APIs, JSON &amp; 4. Source Citation (pp. 22 - 23)</span>
                            </h3>
                        </div>
    
                        {/* API 3-Step Flow Cards */}
                        <div className="space-y-2">
                            <h4 className="font-bold text-xs text-cyan-400 flex items-center gap-2">
                                <i className="fa-solid fa-network-wired"></i>
                                <span className="lang-ar">تسلسل استرجاع البيانات عبر واجهة برمجة التطبيقات (API Flow — ص 21 / p. 23):</span>
                                <span className="lang-en">Flow of Obtaining Data via an API (Client &rarr; Endpoint &rarr; Server &rarr; JSON):</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-1.5">
                                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]">الخطوة ① Request</span>
                                    <strong className="block text-white text-sm"><span className="lang-ar">إرسال الطلب لنقطة النهاية</span><span className="lang-en">1. Client Sends Request</span></strong>
                                    <p className="text-sub text-[11px] leading-relaxed">
                                        <span className="lang-ar">يرسل <strong>العميل (Client — برنامج المستخدم)</strong> طلباً إلى <strong>نقطة نهاية API (Endpoint)</strong> وهي عنوان URL المحدد الذي يُرسَل إليه الطلب (مثل <code>https://api.../data</code>).</span>
                                        <span className="lang-en">The <strong>client (user&apos;s program)</strong> sends a request to the <strong>API endpoint</strong> (the destination URL of the request).</span>
                                    </p>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-1.5">
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">الخطوة ② Response</span>
                                    <strong className="block text-white text-sm"><span className="lang-ar">معالجة الخادم وإرجاع JSON</span><span className="lang-en">2. Server Returns JSON</span></strong>
                                    <p className="text-sub text-[11px] leading-relaxed">
                                        <span className="lang-ar">يعالج <strong>الخادم (Server)</strong> الطلب، ثم يُعيد البيانات المطلوبة بصيغة محددة مسبقاً، وأكثرها شيوعاً اليوم صيغة <strong>JSON</strong> (<code>{'{'}&quot;value&quot;: 100, &quot;year&quot;: 2026{'}'}</code>).</span>
                                        <span className="lang-en">The <strong>server</strong> processes the request and returns the requested data in a predetermined format, most commonly <strong>JSON</strong>.</span>
                                    </p>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-1.5">
                                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold text-[10px]">الخطوة ③ Extract &amp; Use</span>
                                    <strong className="block text-white text-sm"><span className="lang-ar">استخراج البيانات واستخدامها</span><span className="lang-en">3. Client Extracts &amp; Uses Data</span></strong>
                                    <p className="text-sub text-[11px] leading-relaxed">
                                        <span className="lang-ar">يستقبل العميل الاستجابة، ويستخرج الأجزاء اللازمة منها برمجياً ويستخدمها في التحليل أو التطبيق <strong>مباشرة دون الحاجة للمرور عبر متصفح ويب</strong>.</span>
                                        <span className="lang-en">The client receives the response, extracts the necessary parts, and uses them directly without going through a browser.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        {/* JSON, Terms of Use & Source Citation Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                                <strong className="text-emerald-400 text-sm font-black flex items-center gap-2">
                                    <i className="fa-solid fa-code"></i>
                                    <span className="lang-ar">صيغة JSON وضوابط استخدام الـ API (ص 21):</span>
                                    <span className="lang-en">JSON Format &amp; API Cautions (p. 23):</span>
                                </strong>
                                <p className="text-sub">
                                    • <strong><span className="lang-ar">صيغة JSON (JavaScript Object Notation):</span><span className="lang-en">JSON:</span></strong>
                                    <span className="lang-ar"> صيغة نصية شائعة تمثل البيانات كأزواج من الأسماء والقيم (Name/Value)؛ سهلة القراءة للبشر وسهلة المعالجة في مختلف لغات البرمجة.</span>
                                    <span className="lang-en"> Represents data as combinations of names and values; easy for humans to read and programming languages to handle.</span>
                                </p>
                                <p className="text-sub">
                                    • <strong><span className="lang-ar">ضوابط استخدام الـ API:</span><span className="lang-en">API Cautions:</span></strong>
                                    <span className="lang-ar"> يجب <strong>اتباع شروط الاستخدام (Terms of Use)</strong>، و<strong>تجنب إرسال طلبات مفرطة في وقت قصير</strong> (عدم إرهاق الخادم)، والتحقق من نطاق الاستخدام وإعادة النشر المسموح به.</span>
                                    <span className="lang-en"> Always follow the <strong>terms of use</strong>, avoid sending excessive requests in a short time, and confirm allowed use scope.</span>
                                </p>
                            </div>
    
                            <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-2">
                                <strong className="text-amber-400 text-sm font-black flex items-center gap-2">
                                    <i className="fa-solid fa-quote-right"></i>
                                    <span className="lang-ar">4. شروط الاستخدام والإشارة إلى المصدر (Source Citation — ص 22):</span>
                                    <span className="lang-en">4. Terms of Use &amp; Source Citation (p. 23):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">حتى مع البيانات المفتوحة والمجانية، يُطلب دائماً <strong>الإشارة إلى المصدر (Cite the source)</strong> لسببين جوهريين: 1) <strong>بيان موثوقية البيانات</strong>، و2) <strong>السماح للآخرين بالتحقق من صحة التحليل</strong>.</span>
                                    <span className="lang-en">Even with free open data, citing the source is required both as an <strong>indication of reliability</strong> and to <strong>allow others to verify the analysis</strong>.</span>
                                </p>
                                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-[11px] font-mono">
                                    <strong className="text-amber-300 font-sans block mb-1"><span className="lang-ar">العناصر الأربعة الأساسية لتوثيق المصدر:</span><span className="lang-en">Four Required Elements of Source Citation:</span></strong>
                                    1. <span className="lang-ar">مزوّد البيانات (Provider)</span><span className="lang-en">Data Provider</span> • 2. <span className="lang-ar">اسم مجموعة البيانات (Data Name)</span><span className="lang-en">Dataset Name</span> • 3. <span className="lang-ar">تاريخ الحصول عليها (Date of Acquisition)</span><span className="lang-en">Acquisition Date</span> • 4. <span className="lang-ar">عنوان الرابط (URL)</span><span className="lang-en">URL</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 3: Interactive Open Data API & Citation Builder Simulator */}
                    <OpenDataSimulator></OpenDataSimulator>
    
                    {/* SECTION 4: Official Textbook Activities for Lesson 5-3 */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div>
                                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                    <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 5-3</span>
                                    <span className="lang-en">Official Lesson 5-3 Textbook Activities</span>
                                </span>
                                <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                    <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                    <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان</span>
                                    <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style</span>
                                </h3>
                            </div>
                            <span className="text-xs text-sub font-mono">ص 21 - ص 25</span>
                        </div>
    
                        {/* Pause & Think (1, 2, 3) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-teal-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-brain"></i>
                                    <span className="lang-ar">💡 توقف وفكر (1 و 2 و 3) — كتاب الوزارة ص 21 - 23</span>
                                    <span className="lang-en">💡 Pause & Think (1, 2 &amp; 3) — Textbook pp. 23 - 25</span>
                                </span>
                                <button onClick={() => toggleCard('pt-5-3')} className="text-xs font-bold text-teal-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Reveal Answers</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;1. البيانات &apos;المفتوحة&apos; لا تزال لها قواعد — ما الأمران اللذان يجب عليك التحقق منهما قبل استخدامها؟ 2. في استدعاء واجهة برمجة التطبيقات (API)، من الذي يرسل الطلب ومن الذي يُعيد البيانات؟ 3. أي مزوّد يناسب مقارنة الناتج المحلي GDP، وأيهما يناسب دراسة التعلّم الآلي؟&quot;</span>
                                <span className="lang-en">&quot;1. &apos;Open&apos; data still has rules — what two things must you check? 2. In an API call, who sends the request and who returns the data? 3. Which provider fits GDP comparison vs ML study?&quot;</span>
                            </p>
                            <div id="pt-5-3" className={expandedCards['pt-5-3'] ? 'p-4 rounded-xl bg-slate-900 border border-teal-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-teal-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                                <p className="lang-ar">💡 <strong>1. الأمران الواجب فحصهما ومراعاتهما:</strong> التحقق من <strong>شروط الاستخدام / الترخيص (Terms of Use)</strong> لمعرفة نطاق الاستخدام المسموح، والالتزام بـ <strong>الإشارة إلى المصدر (Source Citation)</strong>.<br />💡 <strong>2. أطراف استدعاء API:</strong> <strong>العميل (Client — برنامج المستخدم)</strong> هو الذي يرسل الطلب إلى نقطة النهاية (Endpoint)، و<strong>الخادم (Server)</strong> هو الذي يعالج الطلب ويُعيد البيانات (غالباً بصيغة JSON).<br />💡 <strong>3. اختيار المزوّد:</strong> لمقارنة الناتج المحلي الإجمالي (GDP) بين الدول نختار <strong>World Bank Open Data</strong>؛ وللعثور على مجموعات بيانات لدراسة التعلّم الآلي نختار <strong>Kaggle</strong>.</p>
                                <p className="lang-en">💡 <strong>Model Answers:</strong> 1. Check the <strong>Terms of Use</strong> and <strong>cite the source</strong>. 2. The <strong>client (user&apos;s program)</strong> sends the request to the endpoint; the <strong>server</strong> returns the data. 3. <strong>World Bank Open Data</strong> for GDP across countries; <strong>Kaggle</strong> for machine learning datasets.</p>
                            </div>
                        </div>
    
                        {/* Think as an Engineer (Internet Access in Egypt) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-gears"></i>
                                    <span className="lang-ar">⚙️ فكر كمهندس: تغيّر الوصول إلى الإنترنت في مصر خلال 10 سنوات — ص 24</span>
                                    <span className="lang-en">⚙️ Think as an Engineer (Internet Access in Egypt) — Textbook p. 26</span>
                                </span>
                                <button onClick={() => toggleCard('eng-5-3')} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض القرار والتوثيق القياسي</span><span className="lang-en">Reveal Decision &amp; Citation</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;من أجل مشروع مدرسي، تريد إظهار كيف تغيّر الوصول إلى الإنترنت في مصر خلال السنوات العشر الماضية مقارنة بدولتين مجاورتين: كيف تختار مصدر البيانات المفتوحة وطريقة الحصول عليها وتكتب توثيق المصدر؟&quot;</span>
                                <span className="lang-en">&quot;For a school project showing how Internet access in Egypt changed over the past ten years compared with two neighboring countries: choose a provider, fetch method, and write the source citation.&quot;</span>
                            </p>
                            <div id="eng-5-3" className={expandedCards['eng-5-3'] ? 'p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                                <p className="lang-ar">💡 <strong>القرار الهندسي المعتمد:</strong><br />• <strong>المصدر المختار:</strong> <strong>بيانات البنك الدولي المفتوحة (World Bank Open Data)</strong>؛ لأنها تنشر مؤشر &quot;الأفراد الذين يستخدمون الإنترنت (% من السكان)&quot; موحداً حسب الدولة والسنة لعقود طويلة وبترخيص مفتوح يسمح بإعادة النشر مع الإسناد.<br />• <strong>طريقة الجلب:</strong> <strong>التنزيل المباشر من المتصفح (CSV/Excel)</strong> إذا كان المشروع المدرسي لمرة واحدة لـ 3 دول فقط، أو عبر <strong>واجهة برمجة التطبيقات (API)</strong> إذا كنا نبرمج لوحة تفاعلية تتحدث تلقائياً.<br />• <strong>سطر الإشارة إلى المصدر (Source Citation):</strong><br /><code>World Bank Open Data, &quot;Individuals using the Internet (% of population) - Egypt&quot;, acquired 2026-10-21, https://data.worldbank.org/indicator/IT.NET.USER.ZS</code></p>
                                <p className="lang-en">💡 <strong>Engineering Decision:</strong> Choose <strong>World Bank Open Data</strong> (carries standardized country &times; year Internet-use percentage indicators under an open attribution license). Use browser download for a one-off 3-country chart or API for automated scripts. Citation: <code>World Bank Open Data, &quot;Individuals using the Internet (% of population)&quot;, acquired 2026-10-21, https://data.worldbank.org/</code>.</p>
                            </div>
                        </div>
    
                        {/* In a New Context (Weather App API) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-flask"></i>
                                    <span className="lang-ar">🌍 طبق ما تعلمته (تطبيق الطقس على الهاتف) — كتاب الوزارة ص 24</span>
                                    <span className="lang-en">🌍 In a New Context (Phone Weather App) — Textbook p. 26</span>
                                </span>
                                <button onClick={() => toggleCard('ctx-5-3')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;يعرض تطبيق طقس على الهاتف توقعات اليوم عن طريق جلبها من خدمة طقس عامة. صف خطوات الطلب والاستجابة بين التطبيق والخادم، واذكر صيغة البيانات التي يُرجح أن يُعيدها الخادم.&quot;</span>
                                <span className="lang-en">&quot;A weather app on a phone shows today&apos;s forecast by fetching it from a public weather service. Describe the request-and-response steps between the app and the server, and name the data format the server most likely returns.&quot;</span>
                            </p>
                            <div id="ctx-5-3" className={expandedCards['ctx-5-3'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                                <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />1. يرسل <strong>العميل (تطبيق الطقس على الهاتف)</strong> طلباً (Request) إلى <strong>نقطة نهاية API (Endpoint URL)</strong> الخاصة بخدمة الطقس العامة.<br />2. يعالج <strong>الخادم (Server)</strong> الطلب ويُعيد بيانات التوقعات المطلوبة في استجابة (Response) بصيغة <strong>JSON (JavaScript Object Notation)</strong>.<br />3. يستقبل التطبيق استجابة JSON، ويستخرج منها درجة الحرارة وحالة الطقس ويعرضها على شاشة الهاتف.</span>
                                <span className="lang-en">💡 <strong>Model Answer:</strong> 1. The client (phone weather app) sends a request to the weather service&apos;s API endpoint URL. 2. The server processes the request and returns the forecast data in a predetermined format—most likely <strong>JSON</strong>. 3. The app receives the JSON response, extracts the temperature/forecast fields, and displays them.</span>
                            </div>
                        </div>
    
                        {/* Exam Style Question (6 Marks) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-file-pen"></i>
                                    <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة ص 23</span>
                                    <span className="lang-en">📝 Exam-Style Question (6 Marks) — Textbook p. 24</span>
                                </span>
                                <button onClick={() => toggleCard('exam-5-3')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;اشرح لماذا يجب على المحلل التحقق من شروط الاستخدام والإشارة إلى المصدر حتى عندما تكون البيانات مجانية ومفتوحة. [6 درجات] استعن بـ: حقك في استخدام البيانات، والموثوقية، والسماح للآخرين بالتحقق.&quot;</span>
                                <span className="lang-en">&quot;Explain why an analyst must check the terms of use and cite the source even when the data is free and open. [6 marks] Refer to: your right to use the data, reliability, and letting others verify.&quot;</span>
                            </p>
                            <div id="exam-5-3" className={expandedCards['exam-5-3'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5'}>
                                <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                                <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                    <li><span className="lang-ar"><strong>تأكيد الحق في استخدام البيانات (Right to use the data) [درجتان]:</strong> تختلف شروط الاستخدام والترخيص (Terms of Use) من مجموعة بيانات مفتوحة إلى أخرى؛ لذا يجب فحصها مسبقاً للتأكد من أن نطاق الاستخدام المسموح (مثل الاستخدام التجاري أو إعادة النشر) وحدود طلبات API لا تنتهك القواعد.</span><span className="lang-en"><strong>Right to use the data [2 marks]:</strong> Each open dataset sets its own terms of use/license; checking them confirms the scope of allowed reuse, redistribution, and API request limits.</span></li>
                                    <li><span className="lang-ar"><strong>إثبات موثوقية البيانات (Reliability) [درجتان]:</strong> الإشارة إلى المصدر (ذكر المزوّد، اسم البيانات، تاريخ الحصول عليها، والرابط URL) توضح للقارئ أن التحليل مبني على بيانات حقيقية من جهة موثوقة وليست أرقاماً مختلقة.</span><span className="lang-en"><strong>Indication of Reliability [2 marks]:</strong> Citing the provider, dataset name, acquisition date, and URL demonstrates that the analysis rests on credible, authoritative data.</span></li>
                                    <li><span className="lang-ar"><strong>السماح للآخرين بالتحقق (Letting others verify) [درجتان]:</strong> يتيح توثيق المصدر للباحثين والقراء الآخرين الرجوع إلى مجموعة البيانات الأصلية بأنفسهم ومراجعة التحليل والتأكد من صحة النتائج.</span><span className="lang-en"><strong>Allowing Verification [2 marks]:</strong> Full source citation enables others to locate the exact original dataset and independently verify the analysis and conclusions.</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
    
                    {/* 3D Flashcards 5-3 */}
                    <div className="space-y-3 pt-2">
                        <h4 className="font-bold text-sm flex items-center gap-2">
                            <i className="fa-solid fa-clone text-teal-400"></i>
                            <span className="lang-ar">بطاقات المراجعة السريعة للدرس 5-3 (المس لقلب البطاقة):</span>
                            <span className="lang-en">Lesson 5-3 Flashcards (Tap to flip):</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                            <div className={`flip-card ${flippedCards['53-fc-0'] ? 'flipped' : ''}`} onClick={() => toggleFlip('53-fc-0')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-teal-500/30">
                                        <span className="text-2xl mb-1 block">🌍</span>
                                        <strong className="text-sm block"><span className="lang-ar">البيانات المفتوحة</span><span className="lang-en">Open Data</span></strong>
                                        <span className="text-[10px] text-teal-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-teal-950/90 border border-teal-500 text-slate-200">
                                        <p className="lang-ar">بيانات متاحة للعموم بشروط تسمح لأي شخص بالوصول إليها وإعادة استخدامها (مثل World Bank و UN Data).</p>
                                        <p className="lang-en">Data made public for anyone to access and reuse under specified terms of use.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['53-fc-1'] ? 'flipped' : ''}`} onClick={() => toggleFlip('53-fc-1')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-cyan-500/30">
                                        <span className="text-2xl mb-1 block">🔌</span>
                                        <strong className="text-sm block"><span className="lang-ar">واجهة API ونقطة النهاية</span><span className="lang-en">API &amp; Endpoint</span></strong>
                                        <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                        <p className="lang-ar">API: قواعد تفاعل البرمجيات لجلب البيانات مباشرة؛ Endpoint: عنوان URL الذي يُرسل إليه الطلب.</p>
                                        <p className="lang-en">API: rules for software interaction to fetch data; Endpoint: destination URL for requests.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['53-fc-2'] ? 'flipped' : ''}`} onClick={() => toggleFlip('53-fc-2')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-emerald-500/30">
                                        <span className="text-2xl mb-1 block">📄</span>
                                        <strong className="text-sm block"><span className="lang-ar">صيغة JSON</span><span className="lang-en">JSON Format</span></strong>
                                        <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                        <p className="lang-ar">JavaScript Object Notation: صيغة نصية شائعة تمثل البيانات كأزواج (الاسم/القيمة) وتُعاد عبر API.</p>
                                        <p className="lang-en">Common text data format representing data as name/value pairs returned by APIs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['53-fc-3'] ? 'flipped' : ''}`} onClick={() => toggleFlip('53-fc-3')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-amber-500/30">
                                        <span className="text-2xl mb-1 block">🔖</span>
                                        <strong className="text-sm block"><span className="lang-ar">الإشارة إلى المصدر</span><span className="lang-en">Source Citation</span></strong>
                                        <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                        <p className="lang-ar">توثيق المزوّد، واسم البيانات، وتاريخ الحصول عليها، وعنوان URL لبيان الموثوقية والسماح بالتحقق.</p>
                                        <p className="lang-en">Citing provider, data name, acquisition date, and URL to show reliability and allow verification.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Quiz 5-3 */}
                    <LessonQuiz lessonId="53"></LessonQuiz>
    
                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-2 text-xs">
                        <button onClick={() => navigate('lesson-5-2')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                            <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                            <span className="lang-ar">الدرس السابق 5-2</span>
                            <span className="lang-en">Previous 5-2</span>
                        </button>
                        <button onClick={() => navigate('unit-5-solutions')} className="px-5 py-2.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 shadow-md">
                            <span className="lang-ar">حلول تدريبات كتاب الوزارة كاملة</span>
                            <span className="lang-en">Textbook Exercises Solutions</span>
                            <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
  );
}
