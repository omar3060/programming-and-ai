'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function TextbookSolutionsUnit5() {
  const { playSfx, setActiveLesson } = useApp();
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-unit-5-solutions" className="lesson-view space-y-8 animate-fadeIn">
    
                    {/* Hero Banner */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-2 max-w-3xl">
                                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-book-bookmark"></i>
                                    <span className="lang-ar">حلول كتاب الوزارة الرسمية (الوحدة الخامسة كاملة)</span>
                                    <span className="lang-en">Official Ministry Textbook Solutions (Unit 5)</span>
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black">
                                    <span className="lang-ar">حلول تدريبات وتمارين نهاية دروس الوحدة الخامسة</span>
                                    <span className="lang-en">Unit 5 Comprehensive Textbook Review Solutions</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                    <span className="lang-ar">كافة الأسئلة والتدريبات والتمارين الواردة في كتاب المدرسة للدروس الثلاثة (ص 4 إلى ص 25 عربي / pp. 4 - 28 إنجليزي) محلولة حلاً نموذجياً مفصلاً مع التفسير العلمي، بحيث يضمن الطالب الدرجة النهائية دون الحاجة لأي مصدر خارجي.</span>
                                    <span className="lang-en">All review questions, worked examples, Try sections, and end-of-lesson exercises from the official textbook (pp. 4 - 28) solved with complete scientific rationale.</span>
                                </p>
                            </div>
    
                            {/* Teacher Card Badge */}
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
    
                    {/* SECTION 1: Fill-in-the-Blank Passages & Try Exercises (فقرات أكمل وتدرب) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">أ</span>
                                <span className="lang-ar">حلول فقرات إكمال الفراغات وأسئلة (تدرّب / Try) للدروس الثلاثة</span>
                                <span className="lang-en">Fill-in-the-Blank Passages &amp; &quot;Try&quot; Section Solutions</span>
                            </h3>
                        </div>
    
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                            {/* Lesson 5-1 Passage */}
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-emerald-400 block font-bold"><span className="lang-ar">1. فقرة الدرس 5-1 (كتاب الوزارة ص 10 / p. 10):</span><span className="lang-en">1. Lesson 5-1 Fill-in-the-Blanks (p. 10):</span></strong>
                                <p className="text-sub leading-relaxed"><span className="lang-ar">&quot;يمكن تصنيف البيانات إلى نوعين: <strong>(1) البيانات الأولية (Primary data)</strong> التي تُجمع حديثاً، و<strong>(2) البيانات الثانوية (Secondary data)</strong> الموجودة مسبقاً. وعندما يصعب دراسة المجتمع كله تُستخدم <strong>(3) أخذ العينات (Sampling)</strong> لاختيار جزء منه. وإذا حدث انحراف في طريقة الاختيار يحدث <strong>(4) تحيز أخذ العينات (Sampling bias)</strong>.&quot;</span><span className="lang-en">(a) primary data, (b) secondary data, (c) sampling, (d) sampling bias.</span></p>
                            </div>
    
                            {/* Lesson 5-2 Passage */}
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-cyan-400 block font-bold"><span className="lang-ar">2. فقرة الدرس 5-2 (كتاب الوزارة ص 18 / p. 19):</span><span className="lang-en">2. Lesson 5-2 Fill-in-the-Blanks (pp. 19 - 20):</span></strong>
                                <p className="text-sub leading-relaxed"><span className="lang-ar">&quot;تحتاج البيانات إلى <strong>(1) تنظيف البيانات (Data cleaning)</strong> لمعالجة مشكلاتها، و<strong>(2) تحويل البيانات (Data transformation)</strong> لتنسيق البنية. ومن طرق التعامل مع الفقد الحذف و<strong>(3) التعويض (Imputation)</strong> ووضع علامة. ولمواءمة المقياس نستخدم <strong>(4) التحويل الكمي / تحجيم Min-Max (Normalization)</strong> للنطاق 0–1، أو <strong>(5) التوحيد القياسي (Standardization)</strong> لمتوسط 0 وانحراف معياري 1.&quot;</span><span className="lang-en">(a) data cleaning, (b) data transformation, (c) imputation, (d) normalization, (e) standardization.</span></p>
                            </div>
    
                            {/* Lesson 5-3 Passage */}
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-teal-400 block font-bold"><span className="lang-ar">3. فقرة الدرس 5-3 (كتاب الوزارة ص 25 / p. 27):</span><span className="lang-en">3. Lesson 5-3 Fill-in-the-Blanks (p. 27):</span></strong>
                                <p className="text-sub leading-relaxed"><span className="lang-ar">&quot;يمكن الحصول على إحصاءات الدول من بوابات مثل <strong>(1) World Bank Open Data</strong>. وبالإضافة للتنزيل من متصفح، يمكن باستخدام <strong>(2) واجهة برمجة التطبيقات (API)</strong> جلب البيانات مباشرة بصيغ مثل <strong>(3) JSON</strong>. ويجب دائماً فحص <strong>(4) شروط الاستخدام (Terms of use)</strong>، وتقديم <strong>(5) الإشارة إلى المصدر (Source citation)</strong>.&quot;</span><span className="lang-en">(a) World Bank Open Data, (b) an API, (c) JSON, (d) terms of use, (e) source (source citation).</span></p>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 2: Multiple Choice Questions with Rationale */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">ب</span>
                                <span className="lang-ar">حلول أسئلة الاختيار من متعدد لتمارين كتاب الوزارة مع التعليل</span>
                                <span className="lang-en">Multiple Choice Textbook Exercises with Rationale</span>
                            </h3>
                        </div>
    
                        <div className="space-y-3 text-xs">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200"><span className="lang-ar">1. أي خيار يمثل طريقة لجمع بيانات أولية؟ وأي خيار يمثل مثالاً على بيانات ثانوية؟ (ص 8 و ص 10)</span><span className="lang-en">1. Primary data collection method vs Secondary data example (pp. 8 &amp; 11)</span></span>
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">الدرس 5-1</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
                                    <span className="lang-ar">✅ الإجابة الصحيحة: جمع بيانات أولية = (ب) إنشاء استبيان يناسب غرض المرء الخاص وجمع الردود. ومثال البيانات الثانوية = (ب) إحصاءات سكانية نشرتها الحكومة.</span>
                                    <span className="lang-en">✅ Answer: Primary = (B) Create a survey to fit one&apos;s own purpose. Secondary = (B) Population statistics published by the government.</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200"><span className="lang-ar">2. أي خيار يمثل حالة حدث فيها تحيز في أخذ العينات؟ وأي خيار لا يُعد طريقة مناسبة لتقليل التحيز؟ (ص 8 و ص 10)</span><span className="lang-en">2. Example of sampling bias vs Inappropriate way to reduce bias (pp. 9 &amp; 11)</span></span>
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">الدرس 5-1</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
                                    <span className="lang-ar">✅ الإجابة الصحيحة: مثال التحيز = (جـ) مقابلة المارة أمام المحطة في بعد ظهيرة أيام الأسبوع والإبلاغ عنها كآراء جميع المواطنين. وغير المناسب لتقليل التحيز = (ب) تقييد توقيت وموقع الاستطلاع بظروف محددة.</span>
                                    <span className="lang-en">✅ Answer: Bias example = (C) Surveying passers-by in front of the station on weekday afternoons. NOT appropriate to reduce bias = (B) Limiting timing and location of the survey.</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200"><span className="lang-ar">3. ما الاستجابة غير المناسبة للقيم المفقودة؟ وكيف نتعامل مع القيم الشاذة؟ (ص 16)</span><span className="lang-en">3. Inappropriate response to missing values &amp; Handling outliers (pp. 17 - 18)</span></span>
                                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold text-[10px]">الدرس 5-2</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
                                    <span className="lang-ar">✅ الإجابة الصحيحة: غير المناسب للمفقود = (د) التعويض بالمتوسط في العناصر التي يكون معظم بياناتها مفقوداً. والتعامل مع القيم الشاذة = (ب) حدّد السبب أولاً؛ صحّحها أو احذفها إذا كانت خطأ إدخال، واحتفظ بها إذا كانت تعكس الواقع.</span>
                                    <span className="lang-en">✅ Answer: Inappropriate missing response = (D) Impute the mean where most data is missing. Outliers = (B) Identify cause first; fix/delete input errors, keep real values.</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200"><span className="lang-ar">4. ما الفرق بين التحويل الكمي (Normalization) والتوحيد القياسي (Standardization) وعمليات إعادة التشكيل؟ (ص 18)</span><span className="lang-en">4. Normalization vs Standardization &amp; Reshaping operations (p. 20)</span></span>
                                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold text-[10px]">الدرس 5-2</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
                                    <span className="lang-ar">✅ الإجابة الصحيحة: (جـ) يُستخدم التحويل الكمي (0 إلى 1) لمواءمة البيانات ذات الوحدات المختلفة في صورة قابلة للمقارنة. وربط الجداول برقم الطالب = Join (ب)، وحساب الإجماليات الشهرية = Aggregation (جـ)، وجدول &quot;التاريخ &times; المنتج&quot; = Pivot (أ).</span>
                                    <span className="lang-en">✅ Answer: (C) Normalization aligns different units into a comparable 0–1 form. Student ID link = Join (B), Monthly totals = Aggregation (C), &quot;date &times; product&quot; table = Pivot (A).</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200"><span className="lang-ar">5. ما الوصف الدقيق لمنصة Kaggle؟ وما الخيار الخاطئ حول توثيق المصدر واستخدام API؟ (ص 23 و ص 25)</span><span className="lang-en">5. Kaggle description, Source citation &amp; API cautions (pp. 25 &amp; 28)</span></span>
                                    <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-bold text-[10px]">الدرس 5-3</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
                                    <span className="lang-ar">✅ الإجابة الصحيحة: Kaggle = (جـ) منصة تُجري مسابقات تحليل البيانات وتُتاح فيها مجموعات بيانات للعموم. والخاطئ حول المصدر = (د) &quot;عند استخدام البيانات المفتوحة لا حاجة للإشارة للمصدر&quot;. والخاطئ حول API = (د) &quot;يمكن استخدامها دون التحقق من شروط الاستخدام&quot;.</span>
                                    <span className="lang-en">✅ Answer: Kaggle = (C) Platform running data analysis competitions with public datasets. False citation statement = (D) No need to cite open data. False API statement = (D) Can be used without checking terms of use.</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 3: True/False Questions with Direct Corrections */}
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
                                <span className="font-bold text-slate-200"><span className="lang-ar">1. &quot;تشير البيانات الأولية (Primary data) إلى بيانات سبق جمعها ونشرها من قِبل آخرين.&quot; (ص 7)</span><span className="lang-en">1. &quot;Primary data refers to data that has already been collected and made public by others.&quot; (p. 7)</span></span>
                                <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                    <span className="lang-ar">❌ (عبارة خاطئة) — التصويب: البيانات الأولية تُجمع حديثاً لتناسب غرضاً محدداً؛ أما البيانات التي سبق جمعها ونشرها من قِبل آخرين فهي بيانات ثانوية (Secondary data).</span>
                                    <span className="lang-en">❌ False — Primary data is newly collected for a specific purpose; data already collected and published by others is secondary data.</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <span className="font-bold text-slate-200"><span className="lang-ar">2. &quot;تنظيف البيانات هو عمل يُجرى قبل جمع البيانات، وجميع القيم الشاذة ناتجة عن أخطاء لذا يجب حذفها دائماً.&quot; (ص 15)</span><span className="lang-en">2. &quot;Data cleaning is performed before data collection, and all outliers are caused by errors so they must always be deleted.&quot; (p. 16)</span></span>
                                <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                    <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: تنظيف البيانات يُجرى بعد جمع البيانات، وتشمل القيم الشاذة قيماً تعكس الواقع الحقيقي فلا تُحذف دائماً.</span>
                                    <span className="lang-en">❌ False — Data cleaning is performed after collection, and outliers include real values that reflect reality, so they are not always deleted.</span>
                                </div>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <span className="font-bold text-slate-200"><span className="lang-ar">3. &quot;طالما أن البيانات مفتوحة (Open data)، يمكن استخدامها بحرية دون التحقق من شروط الاستخدام.&quot; (ص 22)</span><span className="lang-en">3. &quot;As long as data is open data, it can be used freely without checking the terms of use.&quot; (p. 24)</span></span>
                                <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                    <span className="lang-ar">❌ (عبارة خاطئة) — التصويب: حتى مع البيانات المفتوحة، تختلف شروط الاستخدام والترخيص لكل مجموعة بيانات، لذا يجب دائماً التحقق منها قبل الاستخدام.</span>
                                    <span className="lang-en">❌ False — Even for open data, terms of use differ for each dataset and must always be checked before use.</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Navigation to Unit 5 Comprehensive Exam */}
                    <div className="flex items-center justify-between pt-2 text-xs">
                        <button onClick={() => navigate('lesson-5-3')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                            <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                            <span className="lang-ar">الدرس السابق 5-3</span>
                            <span className="lang-en">Previous 5-3</span>
                        </button>
                        <button onClick={() => navigate('unit-5-exam')} className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 text-white flex items-center gap-2 shadow-xl shadow-emerald-500/25">
                            <span className="lang-ar">🏆 خوض اختبار الوحدة الخامسة الشامل (25 سؤالاً)</span>
                            <span className="lang-en">🏆 Take Unit 5 Comprehensive Exam (25 Qs)</span>
                            <i className="fa-solid fa-trophy"></i>
                        </button>
                    </div>
                </div>
  );
}
