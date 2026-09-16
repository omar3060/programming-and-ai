'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function TextbookSolutions() {
  const { setActiveLesson } = useApp();

  return (
    <div id="view-unit-1-solutions" className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold inline-flex items-center gap-1.5">
              <i className="fa-solid fa-book-bookmark"></i>
              <span className="lang-ar">حلول كتاب الوزارة الرسمية (الوحدة الأولى كاملة)</span>
              <span className="lang-en">Official Ministry Textbook Solutions (Unit 1)</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              <span className="lang-ar">حلول تدريبات وتمارين نهاية الوحدة الأولى</span>
              <span className="lang-en">Unit 1 Comprehensive Review Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              <span className="lang-ar">كافة الأسئلة والتدريبات الواردة في كتاب المدرسة (ص 31 - ص 35) محلولة حلاً نموذجياً مفصلاً مع التفسير العلمي والخطوات البرمجية، بحيث لا تحتاج للرجوع لكتاب المدرسة مطلقاً.</span>
              <span className="lang-en">All review questions and end-of-unit exercises from the official textbook fully solved with detailed explanations and scientific rationale.</span>
            </p>
          </div>
          
          {/* Teacher Card Badge */}
          <div className="p-3.5 rounded-2xl theme-subpanel border border-amber-500/30 text-xs shrink-0 w-full md:w-64 shadow-md flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                className="w-11 h-11 rounded-xl object-cover border border-amber-500/50 shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1.5 text-[11px]">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span className="lang-ar">إعداد وتدقيق الإجابات:</span>
                <span className="lang-en">Verified Solutions:</span>
              </div>
              <div className="font-bold text-sm truncate">
                <span className="lang-ar">المهندس عمر محمود</span>
                <span className="lang-en">Eng. Omar Mahmoud</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px]">
                <a href="tel:01012306019" className="text-amber-500 dark:text-amber-400 font-mono hover:underline">01012306019</a>
                <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-500 font-bold hover:underline flex items-center gap-1">
                  <i className="fa-brands fa-youtube text-xs"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Multiple Choice Questions (اختر الإجابة الصحيحة) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">أ</span>
            <span className="lang-ar">أسئلة الاختيار من متعدد مع التعليل والتفسير</span>
            <span className="lang-en">Multiple Choice Questions with Rationale</span>
          </h3>
        </div>

        <div className="space-y-3 text-xs">
          {/* Q1 */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">1. في أي مرحلة تاريخية تحولت تكنولوجيا المعلومات إلى تقديم الخدمات عبر السحابة (IT as a Service)؟</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">كتاب المدرسة ص 5</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-between">
              <span>✅ الإجابة الصحيحة: (جـ) من العقد الثاني من الألفية فصاعداً (2010s Onward).</span>
              <span className="text-sub font-normal text-[11px]">التفسير: تميزت هذه الحقبة بانتشار الحوسبة السحابية ومعالجة البيانات الضخمة ونماذج الـ AI.</span>
            </div>
          </div>

          {/* Q2 */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">2. الوحدة الأساسية لمعالجة وتخزين البيانات في الحواسب الكمومية هي:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">كتاب المدرسة ص 9</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-between">
              <span>✅ الإجابة الصحيحة: (ب) الكيوبت (Qubit).</span>
              <span className="text-sub font-normal text-[11px]">التفسير: يستفيد من التراكب الكمي لتمثيل 0 و 1 معاً، بينما البت الكلاسيكي يمثل حالة واحدة فقط.</span>
            </div>
          </div>

          {/* Q3 */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">3. أسلوب متطور ضمن التعلم الآلي يعتمد على شبكات عصبية متعددة الطبقات وبيانات ضخمة:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">كتاب المدرسة ص 12</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-between">
              <span>✅ الإجابة الصحيحة: (أ) التعلم العميق (Deep Learning).</span>
              <span className="text-sub font-normal text-[11px]">التفسير: التعلم العميق هو جزء متخصص من التعلم الآلي يعتمد على الشبكات العصبية العميقة.</span>
            </div>
          </div>

          {/* Q4 */}
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">4. المبدأ الأخلاقي الذي يلزم بتحديد الجهة المسؤولة قانونياً عن قرارات النظام الذكي هو:</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">كتاب المدرسة ص 27</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-between">
              <span>✅ الإجابة الصحيحة: (د) المساءلة (Accountability).</span>
              <span className="text-sub font-normal text-[11px]">التفسير: المساءلة تعني تحديد من يُحاسب عند حدوث أخطاء أو أضرار.</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: True/False Questions with Corrections (صواب وخطأ مع التصويب) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">ب</span>
            <span className="lang-ar">أسئلة الصواب والخطأ مع تصويب العبارات غير الصحيحة</span>
            <span className="lang-en">True/False Questions with Direct Corrections</span>
          </h3>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <span className="font-bold text-slate-200">1. &quot;قانون مور هو قانون فيزيائي طبيعي ملزم وثابت للكون مثل قانون الجاذبية.&quot;</span>
            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
              ❌ (عبارة خاطئة) — التصويب العلمي: قانون مور هو &quot;ملاحظة تجريبية&quot; (Empirical Observation) واستقراء اقتصادي وصناعي لصناع الرقائق، وليس قانوناً فيزيائياً ثابتاً، وهو يواجه بالفعل حدوداً فيزيائية حقيقية عند مقياس النانومتر.
            </div>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <span className="font-bold text-slate-200">2. &quot;الواقع الافتراضي (VR) يضيف معلومات وبيانات رقمية فوق مشهد من العالم الحقيقي.&quot;</span>
            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
              ❌ (عبارة خاطئة) — التصويب العلمي: هذا هو &quot;الواقع المعزز&quot; (Augmented Reality - AR). أما الواقع الافتراضي (VR) فيعزل المستخدم بالكامل عن الواقع المادي ويغمره داخل بيئة رقمية ثلاثية الأبعاد مولدة حاسوبياً.
            </div>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <span className="font-bold text-slate-200">3. &quot;في الشبكات العصبية، لا تُجري طبقة الإدخال (Input Layer) أي حسابات رياضية.&quot;</span>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-bold">
              ✅ (عبارة صحيحة) — التعليل العلمي: طبقة الإدخال تقتصر فقط على استقبال الميزات والبيانات الخام (كالأرقام والبيكسلات) وتمريرها كما هي للطبقة المخفية الأولى حيث تبدأ الحسابات وضرب الأوزان.
            </div>
          </div>

          <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
            <span className="font-bold text-slate-200">4. &quot;ظاهرة الهلوسة في الذكاء التوليدي تعني توقف الحاسوب فجأة عن العمل بسبب عطل كهربائي.&quot;</span>
            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
              ❌ (عبارة خاطئة) — التصويب العلمي: الهلوسة هي قيام نموذج الذكاء الاصطناعي التوليدي بتوليد نصوص تبدو فصيحة ومقنعة لغوياً ولكنها كاذبة ومختلقة تماماً في الواقع.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Scientific Terms (المفاهيم والمصطلحات العلمية) */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">جـ</span>
            <span className="lang-ar">المصطلحات والمفاهيم العلمية المقررة بالوحدة الأولى</span>
            <span className="lang-en">Key Scientific Terms Defined</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl theme-subpanel border space-y-1">
            <strong className="text-brand-400 block font-bold">1. الحوسبة الطرفية (Edge Computing):</strong>
            <p className="text-sub">معالجة البيانات فورياً على الجهاز المحلي نفسه بدلاً من إرسالها إلى خوادم السحابة، لتقليل زمن الاستجابة في الأنظمة الحساسة كفرامل السيارات ذاتية القيادة.</p>
          </div>
          <div className="p-3.5 rounded-xl theme-subpanel border space-y-1">
            <strong className="text-purple-400 block font-bold">2. الصيانة التنبؤية (Predictive Maintenance):</strong>
            <p className="text-sub">استخدام حساسات الاهتزاز والحرارة لتحليل حالة الآلات والتنبؤ بأعطالها قبل وقوعها، لتوفير تكاليف الصيانة وتفادي التوقف المفاجئ للإنتاج.</p>
          </div>
          <div className="p-3.5 rounded-xl theme-subpanel border space-y-1">
            <strong className="text-rose-400 block font-bold">3. التحيز الخوارزمي (Algorithmic Bias):</strong>
            <p className="text-sub">نمط في مخرجات نظام الذكاء الاصطناعي يؤدي إلى نتائج أو أحكام غير عادلة تميز ضد فئة معينة، ناتج عن بيانات تدريب غير متوازنة أو تحيزات تاريخية.</p>
          </div>
          <div className="p-3.5 rounded-xl theme-subpanel border space-y-1">
            <strong className="text-cyan-400 block font-bold">4. الذكاء القابل للتفسير (Explainable AI - XAI):</strong>
            <p className="text-sub">أساليب وتقنيات حاسوبية تمكن البشر من فهم وتفسير الأسباب والعوامل التي دفعت نموذج الذكاء الاصطناعي المعقد إلى اتخاذ قراره، لفك غموض الصندوق الأسود.</p>
          </div>
        </div>
      </div>

      {/* Navigation to Unit Exam */}
      <div className="flex items-center justify-between pt-2 text-xs">
        <button onClick={() => setActiveLesson('lesson-1-4')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
          <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
          <span className="lang-ar">الدرس السابق 1-4</span>
          <span className="lang-en">Previous 1-4</span>
        </button>
        <button onClick={() => setActiveLesson('unit-1-exam')} className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center gap-2 shadow-xl shadow-amber-500/25">
          <span className="lang-ar">🏆 خوض اختبار الوحدة الأولى الشامل (25 سؤالاً)</span>
          <span className="lang-en">🏆 Take Unit 1 Comprehensive Exam (25 Qs)</span>
          <i className="fa-solid fa-trophy"></i>
        </button>
      </div>
    </div>
  );
}

