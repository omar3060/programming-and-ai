'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit5LessonQuiz';
import { DataCleaningSimulator } from '@/components/simulators/DataCleaningSimulator';

export function Lesson5_2() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const toggleFlip = (id: string) => { playSfx('click'); setFlippedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-5-2" className="lesson-view space-y-8 animate-fadeIn">
    
                    {/* Hero Banner */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-2 max-w-3xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold flex items-center gap-1.5">
                                        <i className="fa-solid fa-broom"></i>
                                        <span className="lang-ar">الدرس 5-2 (كتاب الوزارة ص 11 - ص 18)</span>
                                        <span className="lang-en">Lesson 5-2 (Textbook pp. 12 - 20)</span>
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                        <span className="lang-ar">مدخلات خاطئة — مخرجات خاطئة</span>
                                        <span className="lang-en">Garbage In, Garbage Out</span>
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black">
                                    <span className="lang-ar">تنظيف البيانات وتحويلها (Data Cleaning and Transformation)</span>
                                    <span className="lang-en">Data Cleaning and Transformation</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                    <span className="lang-ar">شرح تفصيلي شامل للدرس الثاني من الوحدة الخامسة: قاعدة &quot;مدخلات خاطئة — مخرجات خاطئة&quot;، التعامل مع القيم المفقودة (الحذف، التعويض، وضع علامة)، القيم الشاذة والبيانات المكررة، تحويل أنواع البيانات وتوحيد الصيغ، التحويل الكمي (Normalization 0-1) والتوحيد القياسي (Standardization)، وإعادة تشكيل البيانات (Pivot، الربط Join، التجميع Aggregation).</span>
                                    <span className="lang-en">Comprehensive breakdown of Lesson 5-2: &quot;Garbage in, garbage out&quot;, handling missing values (Deletion, Imputation, Flagging), outliers and duplicates, data type conversion, Normalization (0 to 1) vs Standardization (mean 0, SD 1), and data reshaping (Pivot, Join, Aggregation).</span>
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
                                <strong className="text-cyan-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-bullseye"></i>
                                    <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 11):</span>
                                    <span className="lang-en">Official Learning Objectives (p. 12):</span>
                                </strong>
                                <ul className="space-y-1 text-sub">
                                    <li>• <span className="lang-ar">شرح كيفية التعامل مع القيم المفقودة، والقيم الشاذة (المتطرفة)، والبيانات المكررة عند تنظيف مجموعة البيانات.</span><span className="lang-en">Explain how missing values, outliers, and duplicate data are handled when cleaning a dataset.</span></li>
                                    <li>• <span className="lang-ar">وصف عمليات تحويل أنواع البيانات، والتحويل الكمي والتوحيد القياسي، وإعادة تشكيل البيانات (المحور، الربط، والتجميع) لتناسب الغرض.</span><span className="lang-en">Describe data type conversion, normalization and standardization, and the reshaping of data to fit a purpose.</span></li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-circle-question"></i>
                                    <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 12):</span>
                                    <span className="lang-en">Guiding Question (Textbook p. 13):</span>
                                </strong>
                                <p className="text-slate-200 font-medium leading-relaxed">
                                    <span className="lang-ar">&quot;لماذا يجب تنظيف البيانات وتحويلها قبل التحليل، وما الخيارات التي ينطوي عليها كل إصلاح؟&quot;</span>
                                    <span className="lang-en">&quot;Why must data be cleaned and transformed before analysis, and what choices does each fix involve?&quot;</span>
                                </p>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 1: Data Cleaning Stage, Missing Values, Outliers & Duplicates (ص 12 - 13 / pp. 13 - 14) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">١</span>
                                <span className="lang-ar">مرحلة تنظيف البيانات: القيم المفقودة، القيم الشاذة، والتكرارات (ص 12 - 13)</span>
                                <span className="lang-en">1. Data Cleaning: Missing Values, Outliers & Duplicates (pp. 13 - 14)</span>
                            </h3>
                            <span className="text-xs font-mono text-cyan-400 font-bold">Collect &rarr; Clean &rarr; Transform &rarr; Analyze</span>
                        </div>
    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-white block font-bold">
                                    <span className="lang-ar">📌 تنظيف البيانات مقابل تحويل البيانات (ص 12):</span>
                                    <span className="lang-en">📌 Data Cleaning vs Data Transformation:</span>
                                </strong>
                                <p className="text-sub">
                                    • <strong><span className="lang-ar">تنظيف البيانات (Data Cleaning):</span><span className="lang-en">Data Cleaning:</span></strong>
                                    <span className="lang-ar"> يُجرى <strong>بعد جمع البيانات</strong> لاكتشاف مشكلاتها وتصحيحها، مثل إصلاح القيم المفقودة، والقيم الشاذة، والبيانات المكررة.</span>
                                    <span className="lang-en"> Performed <strong>after data collection</strong> to fix missing values, outliers, and duplicate records.</span>
                                </p>
                                <p className="text-sub">
                                    • <strong><span className="lang-ar">تحويل البيانات (Data Transformation):</span><span className="lang-en">Data Transformation:</span></strong>
                                    <span className="lang-ar"> تعديل الصيغ أو البنية وضبط المقياس وإعادة الهيكلة لتناسب سؤال وطريقة التحليل.</span>
                                    <span className="lang-en"> Formatting types, rescaling (normalization/standardization), and reshaping data to fit the purpose of analysis.</span>
                                </p>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 space-y-2">
                                <strong className="text-amber-400 block font-bold flex items-center gap-2">
                                    <i className="fa-solid fa-triangle-exclamation"></i>
                                    <span className="lang-ar">قاعدة: &quot;مدخلات خاطئة — مخرجات خاطئة&quot; (Garbage In, Garbage Out):</span>
                                    <span className="lang-en">Rule: &quot;Garbage In, Garbage Out&quot; (p. 13):</span>
                                </strong>
                                <p className="text-sub text-[11px] leading-relaxed">
                                    <span className="lang-ar">تعني أن الحساب الدقيق على بيانات معيبة لا يزال يعطي إجابة معيبة واستنتاجات خاطئة! لذلك تعتمد دقة وموثوقية أي تحليل على جودة إعداد وتنظيف وتحويل البيانات أولاً.</span>
                                    <span className="lang-en">Careful calculation on flawed raw data still produces flawed conclusions. Cleaning and transformation support the accuracy and reliability of the entire analysis.</span>
                                </p>
                            </div>
                        </div>
    
                        {/* Official Table: Handling Missing Values */}
                        <div className="space-y-2">
                            <h4 className="font-bold text-xs text-emerald-400 flex items-center gap-2">
                                <i className="fa-solid fa-table"></i>
                                <span className="lang-ar">2. الطرق الثلاث للتعامل مع القيم المفقودة (Missing Values — ص 13 / p. 14):</span>
                                <span className="lang-en">2. Three Responses for Handling Missing Values (p. 14):</span>
                            </h4>
                            <div className="overflow-x-auto rounded-2xl border border-slate-800">
                                <table className="w-full text-xs min-w-[650px] border-collapse">
                                    <thead>
                                        <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                            <th className="p-3 text-start"><span className="lang-ar">الاستجابة (Response)</span><span className="lang-en">Response</span></th>
                                            <th className="p-3 text-start text-cyan-400"><span className="lang-ar">الوصف (Description)</span><span className="lang-en">Description</span></th>
                                            <th className="p-3 text-start text-amber-400"><span className="lang-ar">متى تُطبَّق؟ (When to Apply — كتاب الوزارة ص 13)</span><span className="lang-en">When to Apply (Textbook p. 14)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                        <tr>
                                            <td className="p-3 font-bold text-rose-400"><span className="lang-ar">1. الحذف (Deletion)</span><span className="lang-en">1. Deletion</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">إزالة الصفوف أو الأعمدة التي تحتوي على قيم مفقودة من البيانات.</span><span className="lang-en">Remove rows or columns containing missing values from the data.</span></td>
                                            <td className="p-3"><span className="lang-ar">عندما تكون القيم المفقودة قليلة والتأثير على الكل صغيراً ولا يسبب تحيزاً أو خسارة مهمة.</span><span className="lang-en">When there are few missing values and the impact on the whole is small.</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">2. التعويض (Imputation)</span><span className="lang-en">2. Imputation</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">ملء الأجزاء المفقودة بقيم تمثيلية بديلة مثل المتوسط (Mean) أو الوسيط (Median).</span><span className="lang-en">Fill in missing parts with values such as the mean, median, or surrounding values.</span></td>
                                            <td className="p-3"><span className="lang-ar">عندما تكون القيم المفقودة مبعثرة عشوائياً دون تحيز، واستبدالها لا يغير الاتجاه العام (تحذير: التعويض بالمتوسط عندما يكون معظم العمود مفقوداً يُنتج قيماً بعيدة عن الواقع!).</span><span className="lang-en">When missing values are scattered without bias. (Warning: Imputing the mean when most of a column is missing distorts reality!).</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-amber-400"><span className="lang-ar">3. وضع علامة (Flagging)</span><span className="lang-en">3. Flagging</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">ترك مؤشر يوضح أن القيمة كانت مفقودة وتحليل البيانات كما هي.</span><span className="lang-en">Leave a marker indicating that the value was missing, and analyze the data as is.</span></td>
                                            <td className="p-3"><span className="lang-ar">عندما يكون للغياب نفسه معنى (مثل حقيقة أن شخصاً ما رفض الإجابة عن سؤال حساس).</span><span className="lang-en">When the missingness itself has meaning (e.g., the fact that someone refused to answer).</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        {/* Outliers & Duplicate Data Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-2">
                                <strong className="text-rose-400 text-sm font-black flex items-center gap-2">
                                    <i className="fa-solid fa-chart-scatter"></i>
                                    <span className="lang-ar">3. التعامل مع القيم الشاذة / المتطرفة (Outliers):</span>
                                    <span className="lang-en">3. Handling Outliers (Not Always Errors!):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar"><strong>القيمة الشاذة (Outlier):</strong> قيمة تبتعد كثيراً عن باقي القيم، لكنها <strong>ليست خطأً بالضرورة</strong>! تبدأ معالجتها بـ <strong>تحديد السبب أولاً</strong>:</span>
                                    <span className="lang-en"><strong>Outliers</strong> deviate significantly from other data, but are NOT necessarily errors. Handling begins with <strong>identifying the cause</strong>:</span>
                                </p>
                                <ul className="space-y-1 text-slate-300 text-[11px]">
                                    <li>① <span className="lang-ar"><strong>إذا كان السبب خطأ إدخال أو قياس (قيمة غير طبيعية Abnormal value):</strong> صحّح القيمة أو احذفها.</span><span className="lang-en"><strong>Input/measurement error (Abnormal value):</strong> Correct or delete the value.</span></li>
                                    <li>② <span className="lang-ar"><strong>إذا كانت تعكس الواقع الحقيقي (مثل يوم تخفيضات ضخم في متجر):</strong> احتفظ بها من حيث المبدأ وقرر كيفية التعامل معها وفق غرض التحليل.</span><span className="lang-en"><strong>Reflects reality (e.g., store sale event):</strong> In principle, keep it and handle based on analysis purpose.</span></li>
                                </ul>
                            </div>
    
                            <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
                                <strong className="text-purple-400 text-sm font-black flex items-center gap-2">
                                    <i className="fa-solid fa-clone"></i>
                                    <span className="lang-ar">4. التعامل مع البيانات المكررة (Duplicate Data):</span>
                                    <span className="lang-en">4. Handling Duplicate Data:</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar"><strong>البيانات المكررة:</strong> وجود نفس المحتوى في سجلات متعددة مما يفسد نتائج التجميع (Aggregation)، وتُحذف من حيث المبدأ.</span>
                                    <span className="lang-en"><strong>Duplicate data</strong> distorts aggregation results and is, in principle, removed.</span>
                                </p>
                                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-[11px]">
                                    <strong><span className="lang-ar">⚠️ تنبيه هام قبل الحذف (ص 13):</span><span className="lang-en">⚠️ Crucial Check Before Deleting (p. 14):</span></strong>
                                    <span className="lang-ar"> يجب التأكد أولاً أن التكرار غير مقصود لنفس الحدث! فإذا اشترى نفس العميل نفس المنتج مرتين في نفس اليوم، فهما <strong>معاملتان منفصلتان حقيقيتان</strong> ودمجهما يجعل إجمالي المبيعات خاطئاً.</span>
                                    <span className="lang-en"> Confirm records are genuinely duplicated! If a customer buys the same product twice on the same day, those are separate valid transactions.</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 2: Data Transformation: Type Conversion, Normalization/Standardization & Reshaping (ص 13 - 15 / pp. 14 - 16) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">٢</span>
                                <span className="lang-ar">تحويل البيانات: تحويل الأنواع، التحجيم القياسي، وإعادة التشكيل (ص 13 - 15)</span>
                                <span className="lang-en">2. Data Transformation: Types, Scaling & Reshaping (pp. 14 - 16)</span>
                            </h3>
                        </div>
    
                        {/* Type Conversion & Scaling Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                            {/* Data Type Conversion Table */}
                            <div className="space-y-2">
                                <h4 className="font-bold text-cyan-400 flex items-center gap-2">
                                    <i className="fa-solid fa-code-commit"></i>
                                    <span className="lang-ar">أ) تحويل نوع البيانات وتوحيد الصيغ (Data Type Conversion — ص 13):</span>
                                    <span className="lang-en">A) Data Type Conversion & Format Unification (p. 15):</span>
                                </h4>
                                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                                    <table className="w-full text-xs border-collapse">
                                        <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                            <tr>
                                                <th className="p-2.5 text-start"><span className="lang-ar">نوع التحويل</span><span className="lang-en">Conversion Type</span></th>
                                                <th className="p-2.5 text-start text-emerald-400"><span className="lang-ar">مثال (كتاب الوزارة)</span><span className="lang-en">Textbook Example</span></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                            <tr>
                                                <td className="p-2.5 font-bold text-white"><span className="lang-ar">من نص إلى رقم (String to Numeric)</span><span className="lang-en">String to Numeric</span></td>
                                                <td className="p-2.5 font-mono text-emerald-300">&quot;123&quot; &rarr; 123</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2.5 font-bold text-white"><span className="lang-ar">توحيد صيغة التاريخ (Date Format)</span><span className="lang-en">Unification of Date Format</span></td>
                                                <td className="p-2.5 font-mono text-cyan-300">&quot;2026/4/1&quot;, &quot;01 Apr 2026&quot; &rarr; 2026-04-01</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2.5 font-bold text-white"><span className="lang-ar">توحيد طريقة الكتابة / الترميز (Notation)</span><span className="lang-en">Unification of Notation</span></td>
                                                <td className="p-2.5 font-mono text-amber-300">&quot;Male/Female&quot; &amp; &quot;M/F&quot; &rarr; &quot;Male/Female&quot;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
    
                            {/* Normalization vs Standardization Table */}
                            <div className="space-y-2">
                                <h4 className="font-bold text-amber-400 flex items-center gap-2">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <span className="lang-ar">ب) التحويل الكمي (Normalization) مقابل التوحيد القياسي (Standardization — ص 14):</span>
                                    <span className="lang-en">B) Normalization vs Standardization (p. 15):</span>
                                </h4>
                                <div className="overflow-x-auto rounded-2xl border border-slate-800">
                                    <table className="w-full text-xs border-collapse">
                                        <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                            <tr>
                                                <th className="p-2.5 text-start"><span className="lang-ar">الطريقة</span><span className="lang-en">Method</span></th>
                                                <th className="p-2.5 text-start text-cyan-400"><span className="lang-ar">الوصف</span><span className="lang-en">Description</span></th>
                                                <th className="p-2.5 text-start text-amber-400"><span className="lang-ar">الغرض والمثال</span><span className="lang-en">Main Purpose & Example</span></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                            <tr>
                                                <td className="p-2.5 font-bold text-emerald-400"><span className="lang-ar">التحويل الكمي / تحجيم Min-Max (Normalization)</span><span className="lang-en">Normalization (Min-Max)</span></td>
                                                <td className="p-2.5 text-slate-200"><span className="lang-ar">تحويل البيانات إلى نطاق من <strong>0 إلى 1</strong>.</span><span className="lang-en">Convert data to a range from <strong>0 to 1</strong>.</span></td>
                                                <td className="p-2.5"><span className="lang-ar">مواءمة متغيرات بوحدات مختلفة (كالطول سم والوزن كجم). مثال: طول 160&larr;0، 170&larr;0.5، 180&larr;1.</span><span className="lang-en">Align different units (height cm & weight kg): 160cm&rarr;0, 170cm&rarr;0.5, 180cm&rarr;1.</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-2.5 font-bold text-purple-400"><span className="lang-ar">التوحيد القياسي (Standardization)</span><span className="lang-en">Standardization (Z-Score)</span></td>
                                                <td className="p-2.5 text-slate-200"><span className="lang-ar">تحويل البيانات إلى صيغة <strong>متوسطها 0 وانحرافها المعياري 1</strong>.</span><span className="lang-en">Convert data to <strong>mean 0 and standard deviation 1</strong>.</span></td>
                                                <td className="p-2.5"><span className="lang-ar">تحديد موقع كل قيمة بالنسبة لانتشار البيانات (مثل مقارنة درجات طالب في عدة مواد مختلفة المتوسط).</span><span className="lang-en">Position values relative to spread (e.g., comparing test scores across subjects).</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    
                        {/* Reshaping Data Table (Pivot, Join, Aggregation) */}
                        <div className="space-y-2">
                            <h4 className="font-bold text-xs text-purple-400 flex items-center gap-2">
                                <i className="fa-solid fa-table-pivot"></i>
                                <span className="lang-ar">جـ) عمليات إعادة تشكيل البيانات الثلاث حسب الغرض (Data Reshaping — ص 14 / p. 16):</span>
                                <span className="lang-en">C) Three Operations for Reshaping Data According to Purpose (p. 16):</span>
                            </h4>
                            <div className="overflow-x-auto rounded-2xl border border-slate-800">
                                <table className="w-full text-xs min-w-[650px] border-collapse">
                                    <thead>
                                        <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                            <th className="p-3 text-start"><span className="lang-ar">العملية (Operation)</span><span className="lang-en">Operation</span></th>
                                            <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الوصف (Description)</span><span className="lang-en">Description</span></th>
                                            <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال تطبيقي (كتاب الوزارة ص 14 / p. 16)</span><span className="lang-en">Textbook Example (p. 16)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                        <tr>
                                            <td className="p-3 font-bold text-cyan-400"><span className="lang-ar">1. التحويل المحوري / المحور (Pivot)</span><span className="lang-en">1. Pivot</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">إعادة تشكيل البيانات المرتبة عمودياً (طولياً) إلى جدول متقاطع من تركيبة (صف &times; عمود).</span><span className="lang-en">Reshape vertically arranged long-format data into a cross-tabulated row &times; column table.</span></td>
                                            <td className="p-3"><span className="lang-ar">تحويل بيانات (التاريخ، المنتج، المبيعات) المرتبة عمودياً إلى جدول متقاطع &quot;التاريخ &times; المنتج&quot;.</span><span className="lang-en">Reshape vertical date, product, and sales rows into a &quot;date &times; product&quot; table.</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">2. الربط (Join)</span><span className="lang-en">2. Join</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">دمج وربط مجموعات بيانات متعددة عبر عنصر أو مفتاح مشترك.</span><span className="lang-en">Connect multiple datasets via a common item/key.</span></td>
                                            <td className="p-3"><span className="lang-ar">ربط سجل الطلاب وورقة الدرجات عبر &quot;رقم الطالب&quot; (Student ID) في جدول واحد.</span><span className="lang-en">Connect a student roster and a grade sheet by &quot;student ID&quot; into a single table.</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-amber-400"><span className="lang-ar">3. التجميع (Aggregation)</span><span className="lang-en">3. Aggregation</span></td>
                                            <td className="p-3 text-slate-200"><span className="lang-ar">حساب المجاميع والمتوسطات وما إلى ذلك لكل مجموعة وتلخيصها.</span><span className="lang-en">Calculate sums, means, etc. for each group and summarize.</span></td>
                                            <td className="p-3"><span className="lang-ar">حساب الإجمالي الشهري من بيانات المبيعات اليومية لمعرفة اتجاهات المبيعات الشهرية.</span><span className="lang-en">Compute monthly totals from daily sales data.</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 3: Interactive Data Cleaning & Transformation Pipeline Lab */}
                    <DataCleaningSimulator></DataCleaningSimulator>
    
                    {/* SECTION 4: Official Textbook Activities for Lesson 5-2 */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div>
                                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                    <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 5-2</span>
                                    <span className="lang-en">Official Lesson 5-2 Textbook Activities</span>
                                </span>
                                <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                    <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                    <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان</span>
                                    <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style</span>
                                </h3>
                            </div>
                            <span className="text-xs text-sub font-mono">ص 12 - ص 18</span>
                        </div>
    
                        {/* Pause & Think (1, 2, 3, 4) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-brain"></i>
                                    <span className="lang-ar">💡 توقف وفكر (1 و 2 و 3 و 4) — كتاب الوزارة ص 12 - 16</span>
                                    <span className="lang-en">💡 Pause & Think (1 to 4) — Textbook pp. 13 - 18</span>
                                </span>
                                <button onClick={() => toggleCard('pt-5-2')} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Reveal Answers</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;1. خلية فارغة في استبيان — هل نحذف الصف أم نملؤها أم نضع علامة؟ ما الذي يحدد ذلك؟ 2. الطول بالسم والوزن بالكجم — لماذا قد تهيمن الأرقام الأكبر؟ 3. هل يوم مبيعات ضخم في متجر دائماً خطأ؟ 4. إذا كان معظم العمود فارغاً، فهل ملؤه بالمتوسط يساعد أم يخترع بيانات؟&quot;</span>
                                <span className="lang-en">&quot;1. Blank cell in a survey: delete, impute, or flag? What decides? 2. Height (cm) vs weight (kg): why might bigger numbers dominate? 3. Is a huge sales day always an error? 4. If most of a column is blank, does imputing the mean help or invent data?&quot;</span>
                            </p>
                            <div id="pt-5-2" className={expandedCards['pt-5-2'] ? 'p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                                <p className="lang-ar">💡 <strong>1. ما يحدد التعامل مع الخلية الفارغة:</strong> نسبة القيم المفقودة ونمطها وغرض التحليل (قليلة وعشوائية &larr; حذف أو تعويض؛ الغياب له معنى كرفض الإجابة &larr; وضع علامة Flagging).<br />💡 <strong>2. هيمنة الأرقام الأكبر:</strong> لأن الطول بالسم (مثلاً 170) أكبر عددياً من الوزن بالكجم (مثلاً 65)، مما يجعله يطغى على الحسابات الحساسة للمقياس؛ فنستخدم <strong>التحويل الكمي (Normalization 0-1)</strong>.<br />💡 <strong>3. يوم مبيعات ضخم:</strong> ليس خطأً بالضرورة؛ قد يعكس الواقع (يوم تخفيضات أو مناسبة)، لذا نفحص السبب أولاً.<br />💡 <strong>4. عمود معظمه فارغ:</strong> ملؤه بالمتوسط <strong>يخترع بيانات زائفة ويشوه الواقع</strong> ويقلل التباين بشكل مضلل!</p>
                                <p className="lang-en">💡 <strong>Model Answers:</strong> 1. Decided by the proportion, pattern of missingness, and purpose of analysis. 2. Larger numerical scales dominate scale-sensitive calculations unless normalized (0 to 1). 3. Not always an error; it could be a real sale event. 4. Imputing the mean when most data is missing invents fake data and severely distorts reality.</p>
                            </div>
                        </div>
    
                        {/* Think as an Engineer (Screen Time Survey) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-gears"></i>
                                    <span className="lang-ar">⚙️ فكر كمهندس: تنظيف جدول استبيان وقت الشاشة — كتاب الوزارة ص 17</span>
                                    <span className="lang-en">⚙️ Think as an Engineer (Screen Time Table) — Textbook p. 18</span>
                                </span>
                                <button onClick={() => toggleCard('eng-5-2')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض خطة التنظيف والتحويل</span><span className="lang-en">Reveal Cleaning Plan</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;جمع صفك استبياناً عن وقت الشاشة اليومي، لكن الجدول الخام فوضوي: بعض الخلايا فارغة، وإدخال واحد يقرأ &apos;9999&apos; ساعة، والتواريخ مكتوبة بثلاث طرق مختلفة، وصفان يبدوان متطابقين. صمّم خطة التنظيف والتحويل بالترتيب الصحيح.&quot;</span>
                                <span className="lang-en">&quot;Your class collected a screen-time survey, but the raw table has blank cells, one &apos;9999&apos; hours entry, dates written three ways, and two identical rows. Plan the cleaning and transformation.&quot;</span>
                            </p>
                            <div id="eng-5-2" className={expandedCards['eng-5-2'] ? 'p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2' : 'hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2'}>
                                <p className="lang-ar">💡 <strong>خطة المهندس المعتمدة بالترتيب:</strong><br />1. <strong>توحيد الصيغ أولاً (Data Type Conversion):</strong> توحيد التواريخ الثلاثة إلى صيغة قياسية واحدة (<code>YYYY-MM-DD</code>) حتى لا يعاملها البرنامج كأيام مختلفة عند التجميع.<br />2. <strong>فحص سبب القيمة الشاذة (9999 ساعة):</strong> التحقق هل هي خطأ مطبعي، أم أُدخلت بالدقائق بدلاً من الساعات، أم هي رمز لرفض الإجابة (مثل 9999)، ثم تصحيحها أو حذفها لأنها قيمة غير طبيعية مستحيلة (اليوم 24 ساعة فقط!).<br />3. <strong>معالجة الخلايا الفارغة (Missing Values):</strong> إذا كانت قليلة ومبعثرة نعوض بالمتوسط/الوسيط أو نحذفها، وإذا كانت تمثل رفض الإجابة نضع علامة (Flagging).<br />4. <strong>حذف التكرار الحقيقي فقط (Duplicates):</strong> التأكد من رقم الطالب أن الصفين المتطابقين هما إدخال مكرر لنفس الطالب في نفس اليوم قبل حذف أحدهما.</p>
                                <p className="lang-en">💡 <strong>Engineering Plan:</strong> 1. Unify date formats to <code>YYYY-MM-DD</code> first so daily aggregation works. 2. Check the cause of &quot;9999&quot; (typo or missingness code) and fix/remove it since 9999 hours/day is physically impossible. 3. Handle blank cells based on their proportion and meaning. 4. Remove duplicate rows only after verifying they are true duplicate submissions.</p>
                            </div>
                        </div>
    
                        {/* In a New Context (Shop Sales Reshaping) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-flask"></i>
                                    <span className="lang-ar">🌍 طبق ما تعلمته (جدول مبيعات المتجر) — كتاب الوزارة ص 17</span>
                                    <span className="lang-en">🌍 In a New Context (Shop Sales Table) — Textbook p. 19</span>
                                </span>
                                <button onClick={() => toggleCard('ctx-5-2')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;يسرد جدول مبيعات متجر مبيعات كل يوم للمنتجات A و B و C في صفوف منفصلة، لكن المدير يريد صفاً واحداً لكل يوم مع عمود لكل منتج. سمِّ عملية إعادة التشكيل المطلوبة، وسمِّ العملية الأخرى المطلوبة للحصول على الإجمالي الشهري لكل منتج.&quot;</span>
                                <span className="lang-en">&quot;A shop&apos;s sales table lists each day&apos;s sales for products A, B, and C on separate rows, but the manager wants one row per day with a column per product. Name the reshaping operation needed, and name the operation required to get each product&apos;s monthly total.&quot;</span>
                            </p>
                            <div id="ctx-5-2" className={expandedCards['ctx-5-2'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                                <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• لتحويل الصفوف الطولية المنفصلة إلى جدول متقاطع (صف لكل يوم &times; عمود لكل منتج A, B, C): نستخدم عملية <strong>التحويل المحوري / المحور (Pivot)</strong>.<br />• للحصول على الإجمالي الشهري لمبيعات كل منتج من المبيعات اليومية: نستخدم عملية <strong>التجميع (Aggregation)</strong>.</span>
                                <span className="lang-en">💡 <strong>Model Answer:</strong><br />• To reshape separate vertical rows into one row per day with a column per product (&quot;date &times; product&quot;): <strong>Pivot</strong>.<br />• To calculate each product&apos;s monthly total from daily sales: <strong>Aggregation</strong>.</span>
                            </div>
                        </div>
    
                        {/* Exam Style Question (6 Marks) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-file-pen"></i>
                                    <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة ص 16</span>
                                    <span className="lang-en">📝 Exam-Style Question (6 Marks) — Textbook p. 17</span>
                                </span>
                                <button onClick={() => toggleCard('exam-5-2')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;اشرح، باستخدام مفهوم &apos;مدخلات خاطئة — مخرجات خاطئة&apos; (Garbage in, garbage out)، لماذا يهم تحضير البيانات بقدر أهمية التحليل نفسه. [6 درجات] استعن بـ: إصلاح واحد للتنظيف وتحويل واحد.&quot;</span>
                                <span className="lang-en">&quot;Explain, using &apos;garbage in, garbage out,&apos; why data preparation matters as much as the analysis itself. [6 marks] Refer to: one cleaning fix and one transformation.&quot;</span>
                            </p>
                            <div id="exam-5-2" className={expandedCards['exam-5-2'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5'}>
                                <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                                <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                    <li><span className="lang-ar"><strong>مفهوم &quot;مدخلات خاطئة — مخرجات خاطئة&quot; [درجتان]:</strong> البيانات الخام غالباً ما تصل فوضوية ومعيبة؛ وإذا أُدخلت بيانات معيبة مباشرة في التحليل، فإن أي عمليات حسابية أو إحصائية لاحقة — مهما كانت دقيقة — ستُخرج استنتاجات خاطئة ومضللة.</span><span className="lang-en"><strong>&quot;Garbage in, garbage out&quot; [2 marks]:</strong> Raw data is rarely ready to use; feeding flawed data into even the most careful statistical calculation inevitably produces flawed conclusions.</span></li>
                                    <li><span className="lang-ar"><strong>مثال على إصلاح تنظيف (Data Cleaning Fix) [درجتان]:</strong> معالجة القيم المفقودة (بالحذف أو التعويض أو وضع علامة) أو تصحيح القيم الشاذة الناتجة عن أخطاء الإدخال وحذف السجلات المكررة، مما يمنع تشوه المتوسطات والمجاميع.</span><span className="lang-en"><strong>One Cleaning Fix [2 marks]:</strong> Handling missing values (deletion/imputation/flagging) or fixing input-error outliers and duplicates prevents skewed averages and inaccurate totals.</span></li>
                                    <li><span className="lang-ar"><strong>مثال على عملية تحويل (Data Transformation) [درجتان]:</strong> توحيد صيغ التواريخ وتحويل النصوص الرقمية إلى أرقام لتمكين الحساب، أو تطبيق التحويل الكمي (Normalization 0-1) لمنع هيمنة المتغيرات ذات الوحدات الأكبر، أو إعادة التشكيل (Pivot/Join/Aggregation) لتناسب سؤال التحليل.</span><span className="lang-en"><strong>One Transformation [2 marks]:</strong> Unifying date formats/converting strings to numbers so calculations work, or normalizing scales (0 to 1) so large-unit variables do not dominate the analysis.</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
    
                    {/* 3D Flashcards 5-2 */}
                    <div className="space-y-3 pt-2">
                        <h4 className="font-bold text-sm flex items-center gap-2">
                            <i className="fa-solid fa-clone text-cyan-400"></i>
                            <span className="lang-ar">بطاقات المراجعة السريعة للدرس 5-2 (المس لقلب البطاقة):</span>
                            <span className="lang-en">Lesson 5-2 Flashcards (Tap to flip):</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                            <div className={`flip-card ${flippedCards['52-fc-0'] ? 'flipped' : ''}`} onClick={() => toggleFlip('52-fc-0')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-cyan-500/30">
                                        <span className="text-2xl mb-1 block">🧩</span>
                                        <strong className="text-sm block"><span className="lang-ar">التعويض (Imputation)</span><span className="lang-en">Imputation</span></strong>
                                        <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                        <p className="lang-ar">ملء الأجزاء المفقودة من البيانات بقيم بديلة مثل المتوسط أو الوسيط عندما تكون مبعثرة دون تحيز.</p>
                                        <p className="lang-en">Filling in missing data parts with representative values like the mean or median.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['52-fc-1'] ? 'flipped' : ''}`} onClick={() => toggleFlip('52-fc-1')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-emerald-500/30">
                                        <span className="text-2xl mb-1 block">📏</span>
                                        <strong className="text-sm block"><span className="lang-ar">التحويل الكمي (0 إلى 1)</span><span className="lang-en">Normalization (0-1)</span></strong>
                                        <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                        <p className="lang-ar">تحويل البيانات إلى نطاق من 0 إلى 1 (Min-Max) لمواءمة المتغيرات ذات الوحدات المختلفة كالطول والوزن.</p>
                                        <p className="lang-en">Rescaling data to a 0 to 1 range so variables with different units can be compared fairly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['52-fc-2'] ? 'flipped' : ''}`} onClick={() => toggleFlip('52-fc-2')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-purple-500/30">
                                        <span className="text-2xl mb-1 block">🔔</span>
                                        <strong className="text-sm block"><span className="lang-ar">التوحيد القياسي</span><span className="lang-en">Standardization</span></strong>
                                        <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                        <p className="lang-ar">تحويل البيانات إلى صيغة متوسطها 0 وانحرافها المعياري 1 لبيان موقع كل قيمة بالنسبة للانتشار.</p>
                                        <p className="lang-en">Converting data to mean 0 and standard deviation 1 relative to data spread.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['52-fc-3'] ? 'flipped' : ''}`} onClick={() => toggleFlip('52-fc-3')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-amber-500/30">
                                        <span className="text-2xl mb-1 block">🔄</span>
                                        <strong className="text-sm block"><span className="lang-ar">المحور والربط والتجميع</span><span className="lang-en">Pivot, Join &amp; Aggregate</span></strong>
                                        <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                        <p className="lang-ar">Pivot: صفوف طويلة لجدول (صف&times;عمود)؛ Join: ربط جدولين بمفتاح؛ Aggregation: تلخيص المجاميع.</p>
                                        <p className="lang-en">Pivot: long to cross-tab; Join: link tables by common key; Aggregation: group totals/means.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Quiz 5-2 */}
                    <LessonQuiz lessonId="52"></LessonQuiz>
    
                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-2 text-xs">
                        <button onClick={() => navigate('lesson-5-1')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                            <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                            <span className="lang-ar">الدرس السابق 5-1</span>
                            <span className="lang-en">Previous 5-1</span>
                        </button>
                        <button onClick={() => navigate('lesson-5-3')} className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                            <span className="lang-ar">الدرس التالي: 5-3 البيانات المفتوحة وواجهات APIs</span>
                            <span className="lang-en">Next: 5-3 Open Data and APIs</span>
                            <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
  );
}
