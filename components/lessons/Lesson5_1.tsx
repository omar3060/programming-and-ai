'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonQuiz } from '@/components/lessons/Unit5LessonQuiz';
import { SamplingBiasSimulator } from '@/components/simulators/SamplingBiasSimulator';

export function Lesson5_1() {
  const { playSfx, setActiveLesson } = useApp();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const toggleCard = (id: string) => { playSfx('click'); setExpandedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const toggleFlip = (id: string) => { playSfx('click'); setFlippedCards(prev => ({ ...prev, [id]: !prev[id] })); };
  const navigate = (view: Parameters<typeof setActiveLesson>[0]) => { playSfx('click'); setActiveLesson(view); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div id="view-lesson-5-1" className="lesson-view space-y-8 animate-fadeIn">
    
                    {/* Hero Banner */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-2 max-w-3xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
                                        <i className="fa-solid fa-clipboard-list"></i>
                                        <span className="lang-ar">الدرس 5-1 (كتاب الوزارة ج2 ص 4 - ص 10)</span>
                                        <span className="lang-en">Lesson 5-1 (Textbook Part 2 pp. 4 - 11)</span>
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                        <span className="lang-ar">جمع البيانات وتنقيتها</span>
                                        <span className="lang-en">Data Collection and Cleaning</span>
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black">
                                    <span className="lang-ar">طرق جمع البيانات (Methods of Data Collection)</span>
                                    <span className="lang-en">Methods of Data Collection</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                    <span className="lang-ar">شرح تفصيلي شامل للدرس الأول من الوحدة الخامسة: تسلسل تحليل البيانات (الجمع &larr; التنظيم &larr; التحليل)، مقارنة البيانات الأولية (Primary Data) والبيانات الثانوية (Secondary Data)، المجتمع الإحصائي (Population) والعينة (Sample)، أخذ العينات العشوائية البسيطة والطبقية (Simple Random vs Stratified Sampling)، وأنواع تحيز أخذ العينات الثلاثة (الاختيار الذاتي، الاستجابة، والوقت/الموقع).</span>
                                    <span className="lang-en">Comprehensive breakdown of Lesson 5-1: The data analysis pipeline (collection &rarr; organization &rarr; analysis), Primary vs Secondary data, Population vs Sample (complete survey/census vs sample survey), Simple Random vs Stratified sampling, and the 3 types of survey bias (Self-selection, Response, and Time/Location bias).</span>
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
    
                        {/* Pedagogical Objectives & Guiding Question */}
                        <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <strong className="text-emerald-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-bullseye"></i>
                                    <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 4):</span>
                                    <span className="lang-en">Official Learning Objectives (p. 4):</span>
                                </strong>
                                <ul className="space-y-1 text-sub">
                                    <li>• <span className="lang-ar">التمييز بين البيانات الأولية والبيانات الثانوية، وتوضيح الحالات التي تكون فيها كلٌّ منها مناسبة.</span><span className="lang-en">Distinguish primary from secondary data and explain when each is appropriate.</span></li>
                                    <li>• <span className="lang-ar">شرح آلية أخذ العينات (العشوائية البسيطة والطبقية)، ووصف كيف يمكن أن يؤدي التحيز في العينة إلى استنتاجات خاطئة رغم أنها تبدو واثقة.</span><span className="lang-en">Explain how sampling works, and describe how sampling bias can lead to confident but wrong conclusions.</span></li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                                <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-circle-question"></i>
                                    <span className="lang-ar">السؤال الرئيسي للدرس (كتاب الوزارة ص 5):</span>
                                    <span className="lang-en">Guiding Question (Textbook p. 5):</span>
                                </strong>
                                <p className="text-slate-200 font-medium leading-relaxed">
                                    <span className="lang-ar">&quot;كيف تجمع بيانات يمكنك الوثوق بها، وكيف يمكن لعينة صغيرة أن تمثل مجتمعاً إحصائياً كاملاً بعدالة؟&quot;</span>
                                    <span className="lang-en">&quot;How do you collect data you can trust, and how can a small sample fairly represent a whole population?&quot;</span>
                                </p>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 1: Data Collection Stage & Primary vs Secondary Data (ص 5 / p. 5) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">١</span>
                                <span className="lang-ar">مرحلة جمع البيانات: البيانات الأولية مقابل الثانوية (ص 5)</span>
                                <span className="lang-en">1. The Data Collection Stage & 2. Primary vs Secondary Data (p. 5)</span>
                            </h3>
                            <span className="text-xs font-mono text-emerald-400 font-bold">Collection &rarr; Organization &rarr; Analysis</span>
                        </div>
    
                        <p className="text-xs text-sub leading-relaxed">
                            <span className="lang-ar">يتقدم تحليل البيانات عبر تسلسل <strong>&quot;الجمع (Collection) &larr; التنظيم (Organization) &larr; التحليل (Analysis)&quot;</strong> بعد توضيح الغرض. وإذا جُمعت بيانات غير مناسبة للغرض، فمن المستحيل استخلاص استنتاجات صحيحة مهما كان التنظيم والتحليل دقيقين لاحقاً!</span>
                            <span className="lang-en">Data analysis progresses through <strong>&quot;collection &rarr; organization &rarr; analysis&quot;</strong> after clarifying the purpose. If data that does not match the purpose is collected, no careful work later can rescue the conclusions.</span>
                        </p>
    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            {/* Primary Data Card */}
                            <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/40 space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <strong className="text-emerald-400 text-sm font-black">
                                        <span className="lang-ar">١. البيانات الأولية (Primary Data)</span>
                                        <span className="lang-en">1. Primary Data</span>
                                    </strong>
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]"><span className="lang-ar">تُجمع حديثاً</span><span className="lang-en">Newly Collected</span></span>
                                </div>
                                <p className="text-sub">
                                    <span className="lang-ar">بيانات <strong>تُجمع حديثاً ومباشرة لتناسب غرضاً محدداً</strong> للدراسة الحالية (مثل: الاستبيانات Surveys، المقابلات Interviews، الملاحظات Observations، والتجارب Experiments).</span>
                                    <span className="lang-en">Data newly collected by the researcher to fit a specific purpose (e.g., surveys, interviews, observations, experiments).</span>
                                </p>
                                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-[11px]">
                                    <p className="text-emerald-300">✅ <strong><span className="lang-ar">نقطة القوة (Strength):</span><span className="lang-en">Strength:</span></strong> <span className="lang-ar">يمكن تصميم العناصر لتطابق الغرض بدقة، مما يوفر أصالة وموثوقية ممتازة.</span><span className="lang-en">Designed to match the exact purpose, providing high originality and reliability.</span></p>
                                    <p className="text-rose-300">⚠️ <strong><span className="lang-ar">القيد (Constraint):</span><span className="lang-en">Constraint:</span></strong> <span className="lang-ar">يتطلب جمعها وقتاً وجهداً وتكلفة مالية.</span><span className="lang-en">Collection takes significant time, effort, and cost.</span></p>
                                </div>
                            </div>
    
                            {/* Secondary Data Card */}
                            <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/40 space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <strong className="text-cyan-400 text-sm font-black">
                                        <span className="lang-ar">٢. البيانات الثانوية (Secondary Data)</span>
                                        <span className="lang-en">2. Secondary Data</span>
                                    </strong>
                                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]"><span className="lang-ar">موجودة مسبقاً</span><span className="lang-en">Already Exists</span></span>
                                </div>
                                <p className="text-sub">
                                    <span className="lang-ar">بيانات <strong>تم جمعها ونشرها مسبقاً من قِبل آخرين</strong> ويُعاد استخدامها في التحليل (مثل: مجموعات البيانات المفتوحة، الإحصاءات الحكومية المنشورة، وتقارير الصناعة).</span>
                                    <span className="lang-en">Data that has already been collected and made public by others, reused in analysis (e.g., open datasets, government statistics, industry reports).</span>
                                </p>
                                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-[11px]">
                                    <p className="text-emerald-300">✅ <strong><span className="lang-ar">نقطة القوة (Strength):</span><span className="lang-en">Strength:</span></strong> <span className="lang-ar">يمكن الحصول على كميات ضخمة من البيانات في وقت قصير وبتكلفة منخفضة.</span><span className="lang-en">Large amounts of data can be obtained in a short time.</span></p>
                                    <p className="text-rose-300">⚠️ <strong><span className="lang-ar">القيود (Constraints):</span><span className="lang-en">Constraints:</span></strong> <span className="lang-ar">قد لا تطابق غرضك تماماً، وقد ينشأ تحيز أو حذف أثناء تحريرها أو تلخيصها.</span><span className="lang-en">May not perfectly match your purpose; bias or omissions may have arisen during editing.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* SECTION 2: Sampling & Survey Bias (ص 6 - 7 / pp. 6 - 7) */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 className="text-lg font-black flex items-center gap-2">
                                <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">٢</span>
                                <span className="lang-ar">أخذ العينات (Sampling) وتحيز الاستطلاعات (Bias in Surveys) — ص 6 - 7</span>
                                <span className="lang-en">3. Sampling & 4. Bias in Surveys (Textbook pp. 6 - 7)</span>
                            </h3>
                        </div>
    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                                <strong className="text-white block font-bold">
                                    <span className="lang-ar">📌 المجتمع الإحصائي مقابل العينة (Population vs Sample):</span>
                                    <span className="lang-en">📌 Population vs Sample Key Terms:</span>
                                </strong>
                                <p className="text-sub">• <strong><span className="lang-ar">المجتمع الإحصائي (Population):</span><span className="lang-en">Population:</span></strong> <span className="lang-ar">المجموعة الكاملة المستهدفة بالتحليل. وتسمى دراسة المجتمع بأكمله <strong>مسحاً شاملاً أو تعداداً (Complete survey / Census)</strong>.</span><span className="lang-en">The entire group targeted for analysis. Surveying all of it is a <strong>complete survey (census)</strong>.</span></p>
                                <p className="text-sub">• <strong><span className="lang-ar">العينة (Sample) وأخذ العينات (Sampling):</span><span className="lang-en">Sample & Sampling:</span></strong> <span className="lang-ar">العينة هي الجزء الذي يُمسح فعلياً من المجتمع لتقدير الكل (وتسمى <strong>مسح عينة Sample survey</strong>)، واختيارها يُسمى <strong>أخذ العينات (Sampling)</strong>. ويجب أن تكون العينة <strong>نموذجاً مصغراً عادلاً (Miniature)</strong> للمجتمع الإحصائي.</span><span className="lang-en">The part actually surveyed is the <strong>sample</strong> (sample survey). Selecting it is <strong>sampling</strong>—it must be an unbiased miniature of the population.</span></p>
                            </div>
    
                            <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                                <strong className="text-emerald-400 block font-bold">
                                    <span className="lang-ar">🎲 طرق أخذ العينات العشوائية (Random Sampling Methods):</span>
                                    <span className="lang-en">🎲 Random Sampling Methods:</span>
                                </strong>
                                <p className="text-sub">1. <strong><span className="lang-ar">المعاينة العشوائية البسيطة (Simple Random Sampling):</span><span className="lang-en">Simple Random Sampling:</span></strong> <span className="lang-ar">اختيار عينة من المجتمع الإحصائي بمحض الصدفة (بالقرعة مثلاً) دون تحيز، بحيث تكون لكل وحدة فرصة متساوية.</span><span className="lang-en">Choosing a sample purely by chance without bias (e.g., drawing lots).</span></p>
                                <p className="text-sub">2. <strong><span className="lang-ar">المعاينة الطبقية (Stratified Sampling):</span><span className="lang-en">Stratified Sampling:</span></strong> <span className="lang-ar">تقسيم المجتمع الإحصائي إلى طبقات أو فئات (Strata) مثل الجنس أو الفئة العمرية أو الصف الدراسي، ثم الاختيار عشوائياً من كل طبقة لعكس تركيبة المجتمع وتقليل التحيز.</span><span className="lang-en">Dividing the population into strata (gender, age group, grade) and randomly choosing from each stratum.</span></p>
                            </div>
                        </div>
    
                        {/* Official Table: Types of Bias in Surveys (ص 7 / p. 7) */}
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[650px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start text-rose-400"><span className="lang-ar">نوع التحيز (Type of Bias)</span><span className="lang-en">Type of Bias</span></th>
                                        <th className="p-3 text-start text-emerald-400"><span className="lang-ar">الوصف الدقيق (Description)</span><span className="lang-en">Description</span></th>
                                        <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال كتاب الوزارة ( ص 7 / p. 7)</span><span className="lang-en">Textbook Example (p. 7)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">1. تحيز الاختيار الذاتي (Self-selection bias)</span><span className="lang-en">Self-selection bias</span></td>
                                        <td className="p-3"><span className="lang-ar">تحيز ناتج عن استجابة من يرغبون في الاستجابة فقط (تحيز في اختيار العينة).</span><span className="lang-en">Bias caused by only those who want to respond actually responding.</span></td>
                                        <td className="p-3"><span className="lang-ar">في استطلاع عبر الويب (Online poll)، يستجيب فقط الأشخاص الذين لديهم اهتمام عالٍ بالموضوع.</span><span className="lang-en">In a web survey, only people with high interest respond.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">2. تحيز الاستجابة (Response bias)</span><span className="lang-en">Response bias</span></td>
                                        <td className="p-3"><span className="lang-ar">ليس مشكلة اختيار، بل إعطاء المستجيبين إجابات تبدو مرغوبة اجتماعياً بدلاً من إجابة دقيقة (خطأ قياس).</span><span className="lang-en">Not a selection problem: respondents give answers that look desirable rather than accurate.</span></td>
                                        <td className="p-3"><span className="lang-ar">الإبلاغ عن &quot;وقت دراسة&quot; أطول مما كان عليه فعلياً للتظاهر بالاجتهاد.</span><span className="lang-en">Reporting a &quot;study time&quot; longer than it really was.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">3. تحيز الوقت/الموقع (Time/location bias)</span><span className="lang-en">Time/location bias</span></td>
                                        <td className="p-3"><span className="lang-ar">تحيز ناتج عن تقييد توقيت أو مكان إجراء الاستطلاع على فئات معينة.</span><span className="lang-en">Bias caused by the timing or location of the survey being limited.</span></td>
                                        <td className="p-3"><span className="lang-ar">إجراء الاستطلاع أمام محطة قطار في بعد ظهيرة أيام الأسبوع، مما يستبعد الموظفين والطلاب!</span><span className="lang-en">Surveying in front of a station on weekday afternoons, missing office workers and students.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                    {/* SECTION 3: Interactive Sampling & Bias Simulator */}
                    <SamplingBiasSimulator></SamplingBiasSimulator>
    
                    {/* SECTION 4: Official Textbook Activities for Lesson 5-1 */}
                    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div>
                                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                    <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 5-1</span>
                                    <span className="lang-en">Official Lesson 5-1 Textbook Activities</span>
                                </span>
                                <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                    <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                    <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان</span>
                                    <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style</span>
                                </h3>
                            </div>
                            <span className="text-xs text-sub font-mono">ص 6 - ص 10</span>
                        </div>
    
                        {/* Pause & Think 1 & 2 */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-brain"></i>
                                    <span className="lang-ar">💡 توقف وفكر (1 و 2) — كتاب الوزارة ص 6 - 7</span>
                                    <span className="lang-en">💡 Pause & Think (1 & 2) — Textbook pp. 6 - 7</span>
                                </span>
                                <button onClick={() => toggleCard('pt-5-1')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابة والتحليل</span><span className="lang-en">Reveal Analysis</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;1. التعداد السكاني الحكومي الذي تُنزّله من الإنترنت — هل هو بيانات أولية أم ثانوية بالنسبة لك؟ 2. استطلاع عبر الويب يمكن لأي شخص المشاركة فيه — أصوات من تغيب، وأي نوع من التحيز هذا؟&quot;</span>
                                <span className="lang-en">&quot;1. A government census you download — is that primary or secondary data for you? 2. A web poll anyone can enter — whose voices are missing, and which bias is that?&quot;</span>
                            </p>
                            <div id="pt-5-1" className={expandedCards['pt-5-1'] ? 'p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5' : 'hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5'}>
                                <p className="lang-ar">💡 <strong>1. التعداد الحكومي المنزّل:</strong> هو <strong>بيانات ثانوية (Secondary Data)</strong> بالنسبة لك؛ لأن جهة حكومية جمعته ونشرته مسبقاً وأنت تعيد استخدامه.<br />💡 <strong>2. استطلاع الويب المفتوح:</strong> تغيب عنه أصوات الأشخاص غير المهتمين بالموضوع أو الذين لا يستخدمون الإنترنت بانتظام؛ وهذا يُسمى <strong>تحيز الاختيار الذاتي (Self-selection bias)</strong> لأن من يرغبون بقوة في الرد هم فقط من يشاركون.</p>
                                <p className="lang-en">💡 <strong>1. Downloaded Census:</strong> <strong>Secondary data</strong> for you, because it was collected and published by others.<br />💡 <strong>2. Open Web Poll:</strong> Misses people with low interest or no Internet access; this is <strong>self-selection bias</strong>.</p>
                            </div>
                        </div>
    
                        {/* Think as an Engineer (School Commute Survey) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-gears"></i>
                                    <span className="lang-ar">⚙️ فكر كمهندس: استطلاع مدة التنقل للمدرسة — كتاب الوزارة ص 9</span>
                                    <span className="lang-en">⚙️ Think as an Engineer (School Commute) — Textbook p. 9</span>
                                </span>
                                <button onClick={() => toggleCard('eng-5-1')} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض خطة المعاينة والقرار</span><span className="lang-en">Reveal Sampling Plan</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;تريد مدرستك معرفة المدة التي يقضيها الطلاب عادةً في التنقل إلى المدرسة يومياً، لكن لا يمكنك مسح الجميع: هل تسأل من يسهل الوصول إليه، أم تخطط لعينة عادلة وممثلة؟ وما نوع المعاينة الأنسب؟&quot;</span>
                                <span className="lang-en">&quot;Your school wants to know how long students spend commuting each day: Ask whoever is easiest to reach, or plan a fair, representative sample?&quot;</span>
                            </p>
                            <div id="eng-5-1" className={expandedCards['eng-5-1'] ? 'p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5' : 'hidden p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5'}>
                                <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>المجتمع الإحصائي والعينة:</strong> المجتمع هو جميع طلاب المدرسة (مثلاً 800 طالب)، والعينة هي 40 إلى 80 طالباً يتم اختيارهم بعدالة.<br />• <strong>تحليل خطر التحيز:</strong> إذا سألنا فقط الطلاب الموجودين مبكراً في الفناء أو أرسلنا رابطاً اختيارياً، سنستبعد الطلاب الذين يسكنون بعيداً ويتأخرون (تحيز الوقت/الموقع أو الاختيار الذاتي)، مما يجعل متوسط مدة التنقل يبدو أقصر من الحقيقة!<br />• <strong>القرار:</strong> نختار <strong>المعاينة الطبقية (Stratified Sampling)</strong> بتقسيم المدرسة حسب الصفوف الدراسية أو مناطق السكن، ثم سحب عينة عشوائية بالقرعة من قوائم كل صف لضمان تمثيل الجميع بعدالة.</p>
                                <p className="lang-en">💡 <strong>Engineering Decision:</strong> Plan a fair, representative sample using <strong>Stratified Sampling</strong> across grades/residential zones so distant commuters and all grades are proportionally represented, avoiding time/location and self-selection bias.</p>
                            </div>
                        </div>
    
                        {/* In a New Context (Shopping Mall Saturday Survey) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-flask"></i>
                                    <span className="lang-ar">🌍 طبق ما تعلمته (استطلاع مركز التسوق) — كتاب الوزارة ص 9</span>
                                    <span className="lang-en">🌍 In a New Context (Shopping Mall Survey) — Textbook p. 10</span>
                                </span>
                                <button onClick={() => toggleCard('ctx-5-1')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;مركز تسوق يستطلع فقط زوار بعد ظهر يوم السبت ويُبلغ عن النتائج باعتبارها &apos;ما يفكر فيه جميع عملائنا.&apos; اذكر نوع التحيز، واشرح من يُستبعد، وصف تغييراً واحداً يجعل العينة أكثر عدالة.&quot;</span>
                                <span className="lang-en">&quot;A shopping mall surveys only visitors on Saturday afternoon and reports results as &apos;what all our customers think.&apos; Name the bias, explain who is missed, and describe one change to make it fairer.&quot;</span>
                            </p>
                            <div id="ctx-5-1" className={expandedCards['ctx-5-1'] ? 'p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300' : 'hidden p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300'}>
                                <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>نوع التحيز:</strong> <strong>تحيز الوقت/الموقع (Time/location bias)</strong>.<br />• <strong>من يُستبعد:</strong> المتسوقون في أيام الأسبوع العادية (كالموظفين أو كبار السن الذين يتسوقون صباحاً أو مساءً في غير عطلة نهاية الأسبوع).<br />• <strong>التغيير لجعل العينة عادلة:</strong> توزيع أوقات الاستطلاع لتشمل أيام الأسبوع وعطلة نهاية الأسبوع وفي فترات صباحية ومسائية متنوعة وعند مداخل مختلفة للمركز.</span>
                                <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Bias Type:</strong> <strong>Time/location bias</strong>.<br />• <strong>Who is missed:</strong> Weekday shoppers, morning shoppers, and evening commuters.<br />• <strong>Fairness Fix:</strong> Conduct random sampling across both weekdays and weekends at varied times of day (morning, afternoon, evening).</span>
                            </div>
                        </div>
    
                        {/* Exam Style Question (6 Marks) */}
                        <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-file-pen"></i>
                                    <span className="lang-ar">📝 سؤال على نمط الامتحان (6 درجات) — كتاب الوزارة ص 8</span>
                                    <span className="lang-en">📝 Exam-Style Question (6 Marks) — Textbook p. 8</span>
                                </span>
                                <button onClick={() => toggleCard('exam-5-1')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                    <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                                </button>
                            </div>
                            <p className="text-xs font-bold text-slate-200">
                                <span className="lang-ar">&quot;اشرح لماذا يمكن لعينة متحيزة أن تجعل التحليل عديم القيمة حتى عندما تكون الحسابات صحيحة. [6 درجات] راجع: العينة بوصفها نموذجاً مصغراً للمجتمع الإحصائي.&quot;</span>
                                <span className="lang-en">&quot;Explain why a biased sample can make an analysis worthless even when the calculations are correct. [6 marks] Refer to: the sample as a miniature of the population.&quot;</span>
                            </p>
                            <div id="exam-5-1" className={expandedCards['exam-5-1'] ? 'p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5' : 'hidden p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-1.5'}>
                                <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                                <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                    <li><span className="lang-ar"><strong>العينة كنموذج مصغر للمجتمع [درجتان]:</strong> الهدف من أخذ العينات هو دراسة جزء صغير لتقدير خصائص المجتمع الإحصائي الكلي؛ وهذا يفترض أن تكون العينة <strong>نموذجاً مصغراً عادلاً (Miniature)</strong> يعكس تركيبة المجتمع بدقة.</span><span className="lang-en"><strong>Sample as a miniature of the population [2 marks]:</strong> Sampling studies a subset to estimate the whole population, which requires the sample to be an accurate miniature of that population.</span></li>
                                    <li><span className="lang-ar"><strong>أثر تحيز أخذ العينات [درجتان]:</strong> عندما تكون طريقة الاختيار متحيزة (تفضل فئات وتستبعد أخرى)، فإن العينة تشوّه الحالة الفعلية للمجتمع الإحصائي ولا تمثله.</span><span className="lang-en"><strong>Effect of sampling bias [2 marks]:</strong> When selection is biased, certain groups are over- or under-represented, distorting the true state of the population.</span></li>
                                    <li><span className="lang-ar"><strong>عدم قابلية تعميم الحسابات [درجتان]:</strong> حتى لو أُجريت الحسابات الإحصائية اللاحقة بدقة تامة على هذه العينة المنحرفة، فإن الاستنتاجات الناتجة ستكون مضللة ولا يمكن تعميمها أو تطبيقها على المجتمع الإحصائي ككل.</span><span className="lang-en"><strong>Inapplicability of conclusions [2 marks]:</strong> Even flawless calculations on a skewed sample yield misleading conclusions that cannot be generalized to the population as a whole.</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
    
                    {/* 3D Flashcards 5-1 */}
                    <div className="space-y-3 pt-2">
                        <h4 className="font-bold text-sm flex items-center gap-2">
                            <i className="fa-solid fa-clone text-emerald-400"></i>
                            <span className="lang-ar">بطاقات المراجعة السريعة للدرس 5-1 (المس لقلب البطاقة):</span>
                            <span className="lang-en">Lesson 5-1 Flashcards (Tap to flip):</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                            <div className={`flip-card ${flippedCards['51-fc-0'] ? 'flipped' : ''}`} onClick={() => toggleFlip('51-fc-0')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-emerald-500/30">
                                        <span className="text-2xl mb-1 block">📝</span>
                                        <strong className="text-sm block"><span className="lang-ar">البيانات الأولية</span><span className="lang-en">Primary Data</span></strong>
                                        <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                        <p className="lang-ar">بيانات تُجمع حديثاً ومباشرة لتناسب غرضاً محدداً (استبيانات، مقابلات، تجارب).</p>
                                        <p className="lang-en">Data newly collected fresh to fit a specific purpose (surveys, interviews, experiments).</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['51-fc-1'] ? 'flipped' : ''}`} onClick={() => toggleFlip('51-fc-1')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-cyan-500/30">
                                        <span className="text-2xl mb-1 block">📚</span>
                                        <strong className="text-sm block"><span className="lang-ar">البيانات الثانوية</span><span className="lang-en">Secondary Data</span></strong>
                                        <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                        <p className="lang-ar">بيانات موجودة مسبقاً جمعها ونشرها آخرون ويُعاد استخدامها (الإحصاءات الحكومية والبيانات المفتوحة).</p>
                                        <p className="lang-en">Data already collected and published by others and reused in analysis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['51-fc-2'] ? 'flipped' : ''}`} onClick={() => toggleFlip('51-fc-2')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-purple-500/30">
                                        <span className="text-2xl mb-1 block">🗂️</span>
                                        <strong className="text-sm block"><span className="lang-ar">المعاينة الطبقية</span><span className="lang-en">Stratified Sampling</span></strong>
                                        <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                        <p className="lang-ar">تقسيم المجتمع الإحصائي إلى طبقات (كالجنس أو العمر) ثم الاختيار عشوائياً من كل طبقة.</p>
                                        <p className="lang-en">Dividing the population into strata and randomly selecting from each stratum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flip-card ${flippedCards['51-fc-3'] ? 'flipped' : ''}`} onClick={() => toggleFlip('51-fc-3')}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front theme-panel border border-rose-500/30">
                                        <span className="text-2xl mb-1 block">⚖️</span>
                                        <strong className="text-sm block"><span className="lang-ar">تحيز أخذ العينات</span><span className="lang-en">Sampling Bias</span></strong>
                                        <span className="text-[10px] text-rose-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                    </div>
                                    <div className="flip-card-back bg-rose-950/90 border border-rose-500 text-slate-200">
                                        <p className="lang-ar">انحراف في طريقة اختيار العينة يجعلها لا تعكس المجتمع الإحصائي، فيبطل تعميم النتائج.</p>
                                        <p className="lang-en">Unfair sample selection that misrepresents the population, invalidating generalization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Quiz 5-1 */}
                    <LessonQuiz lessonId="51"></LessonQuiz>
    
                    {/* Navigation Button to Next Lesson */}
                    <div className="flex justify-end pt-2 text-xs">
                        <button onClick={() => navigate('lesson-5-2')} className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                            <span className="lang-ar">الدرس التالي: 5-2 تنظيف البيانات وتحويلها</span>
                            <span className="lang-en">Next: 5-2 Data Cleaning & Transformation</span>
                            <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
  );
}
