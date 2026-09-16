'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrintModal({ isOpen, onClose }: PrintModalProps) {
  const { playSfx } = useApp();

  if (!isOpen) return null;

  const handlePrint = () => {
    playSfx('click');
    window.print();
  };

  return (
    <div
      id="print-modal"
      onClick={() => {
        playSfx('click');
        onClose();
      }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="theme-panel border w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl cursor-default"
      >
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 no-print">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
            <i className="fa-solid fa-book-open text-brand-400"></i>
            <span className="lang-ar">مذكرة مراجعة الوحدة الأولى • إعداد م/ عمر محمود (01012306019)</span>
            <span className="lang-en">Unit 1 Revision Guide • Eng. Omar Mahmoud (01012306019)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs bg-brand-500 hover:bg-brand-600 text-white font-bold flex items-center gap-1.5 shadow-md transition cursor-pointer"
            >
              <i className="fa-solid fa-print"></i>
              <span className="lang-ar">طباعة / PDF</span>
              <span className="lang-en">Print / PDF</span>
            </button>
            <button
              onClick={() => {
                playSfx('click');
                onClose();
              }}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed" id="printable-summary-content">
          <div className="text-center border-b border-slate-800 pb-3">
            <h2 className="text-xl font-black">
              <span className="lang-ar">البرمجة والذكاء الاصطناعي — الصف الثاني الثانوي (الجزء الأول)</span>
              <span className="lang-en">Programming &amp; Artificial Intelligence — 2nd Year Baccalaureate</span>
            </h2>
            <p className="text-brand-400 font-bold text-xs mt-1">
              <span className="lang-ar">الوحدة الأولى: تكنولوجيا المعلومات والمجتمع (ص 4 إلى ص 30)</span>
              <span className="lang-en">Unit 1: Information Technology and Society (pp. 4 - 30)</span>
            </p>
            <p className="text-amber-400 font-bold text-xs mt-0.5 font-mono flex items-center justify-center gap-3">
              <span><span className="lang-ar">إعداد وتدريس: المهندس عمر محمود — 01012306019</span><span className="lang-en">Prepared &amp; Instructed by: Eng. Omar Mahmoud — 01012306019</span></span>
              <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-400 hover:underline font-sans font-bold flex items-center gap-1">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {/* Lesson 1-1 */}
            <div className="p-4 theme-subpanel rounded-2xl border space-y-1.5">
              <strong className="text-blue-400 block text-sm">
                <span className="lang-ar">الدرس 1-1: تطور تكنولوجيا المعلومات والتحول الاجتماعي</span>
                <span className="lang-en">Lesson 1-1: Development of IT &amp; Social Transformation</span>
              </strong>
              <p>• <strong><span className="lang-ar">العصور الخمسة:</span><span className="lang-en">5 Eras:</span></strong> <span className="lang-ar">الصمامات الأولى (ENIAC) ➔ الحواسب الشخصية (PCs) ➔ تسويق الإنترنت والويب ➔ الهواتف الذكية ➔ الحوسبة السحابية والـ AI.</span><span className="lang-en">Vacuum tube ENIAC ➔ Desktop PCs ➔ Web commercialization ➔ Smartphones ➔ Cloud computing.</span></p>
              <p>• <strong><span className="lang-ar">قانون مور:</span><span className="lang-en">Moore&apos;s Law:</span></strong> <span className="lang-ar">ملاحظة تجريبية بأن الترانزستورات تتضاعف كل عامين تقريباً. يواجه حدوداً فيزيائية (تيارات التسرب والنفق الكمومي)، والحل هو تعدد الأنوية والكم.</span><span className="lang-en">Empirical doubling of transistors roughly every 2 years; limited by leakage current &amp; quantum tunneling; mitigated via multi-core &amp; quantum.</span></p>
              <p>• <strong><span className="lang-ar">الحوسبة الطرفية (Edge Computing):</span><span className="lang-en">Edge Computing:</span></strong> <span className="lang-ar">معالجة فورية بالجهاز دون سحابة لتقليل زمن الاستجابة في أنظمة السلامة كالسيارات ذاتية القيادة.</span><span className="lang-en">On-device real-time processing eliminating cloud latency in autonomous vehicle safety.</span></p>
              <p>• <strong><span className="lang-ar">الكيوبت (Qubit):</span><span className="lang-en">Quantum Qubit:</span></strong> <span className="lang-ar">تراكب كمي لحالتي 0 و 1 معاً في نفس اللحظة.</span><span className="lang-en">Quantum superposition of states 0 and 1 simultaneously.</span></p>
            </div>

            {/* Lesson 1-2 */}
            <div className="p-4 theme-subpanel rounded-2xl border space-y-1.5">
              <strong className="text-purple-400 block text-sm">
                <span className="lang-ar">الدرس 1-2: كيف يعمل الذكاء الاصطناعي؟</span>
                <span className="lang-en">Lesson 1-2: How AI Works</span>
              </strong>
              <p>• <strong><span className="lang-ar">الفئات المتداخلة:</span><span className="lang-en">Hierarchy:</span></strong> AI ⊃ ML ⊃ DL ⊃ GenAI.</p>
              <p>• <strong><span className="lang-ar">التعلّم الآلي:</span><span className="lang-en">Machine Learning:</span></strong> <span className="lang-ar">تتعلم النماذج أنماطاً من البيانات للتنبؤ والتصنيف دون برمجة كل قاعدة صراحة (مرشح السبام).</span><span className="lang-en">Models learn patterns from training data without manual rule coding (spam filters).</span></p>
              <p>• <strong><span className="lang-ar">الشبكات العصبية (ANN):</span><span className="lang-en">ANN Anatomy:</span></strong> <span className="lang-ar">طبقة إدخال (تستقبل الميزات فقط دون حسابات) ➔ طبقات مخفية (تضرب الأوزان وتضيف الانحياز وتطبق دوال التنشيط) ➔ طبقة إخراج (تنتج الاحتمالات والقرارات).</span><span className="lang-en">Input Layer (feature receiving) ➔ Hidden Layers (weights, biases &amp; activations) ➔ Output Layer (class probabilities).</span></p>
              <p>• <strong><span className="lang-ar">الهلوسة (Hallucination):</span><span className="lang-en">Hallucination:</span></strong> <span className="lang-ar">إنتاج نصوص فصيحة ومعقولة لغوياً لكنها كاذبة ومختلقة في الواقع. الإجراء الإلزامي: التحقق المستقل من مصادر موثوقة.</span><span className="lang-en">Generating fluent text that is factually false. Mandatory rule: independent dual-source verification.</span></p>
            </div>

            {/* Lesson 1-3 */}
            <div className="p-4 theme-subpanel rounded-2xl border space-y-1.5">
              <strong className="text-emerald-400 block text-sm">
                <span className="lang-ar">الدرس 1-3: الذكاء الاصطناعي في الحياة اليومية والصناعة</span>
                <span className="lang-en">Lesson 1-3: AI in Daily Life &amp; Industry</span>
              </strong>
              <p>• <strong><span className="lang-ar">في الحياة والصناعة:</span><span className="lang-en">Applications:</span></strong> <span className="lang-ar">أنظمة التوصية، المساعدات الصوتية، تشخيص الأشعة السينية، رصد آفات الزراعة، الصيانة التنبؤية، وتحسين المسارات.</span><span className="lang-en">Recommenders, voice assistants, X-ray diagnosis, crop monitoring, predictive maintenance, route optimization.</span></p>
              <p>• <strong><span className="lang-ar">الإشراف البشري:</span><span className="lang-en">Human-in-the-loop:</span></strong> <span className="lang-ar">يبرع الـ AI في اكتشاف الأنماط، لكن القرارات عالية الأثر (كالصحة) تتطلب حتماً إشرافاً ومسؤولية بشرية.</span><span className="lang-en">AI excels at patterns, but high-stakes life-and-death verdicts strictly require human confirmation.</span></p>
            </div>

            {/* Lesson 1-4 */}
            <div className="p-4 theme-subpanel rounded-2xl border space-y-1.5">
              <strong className="text-rose-400 block text-sm">
                <span className="lang-ar">الدرس 1-4: القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي</span>
                <span className="lang-en">Lesson 1-4: Ethical Issues with AI</span>
              </strong>
              <p>• <strong><span className="lang-ar">التحيز الخوارزمي:</span><span className="lang-en">Algorithmic Bias:</span></strong> <span className="lang-ar">نمط في المخرجات يؤدي لنتائج غير عادلة ناتج عن بيانات تدريب غير متوازنة.</span><span className="lang-en">Unfair outcomes caused by unrepresentative training datasets and proxy bias.</span></p>
              <p>• <strong><span className="lang-ar">المبادئ الأربعة:</span><span className="lang-en">4 Ethical Principles:</span></strong> <span className="lang-ar">1) العدالة (عدم التمييز)، 2) الشفافية (إيضاح آليات القرار)، 3) حماية الخصوصية (صون البيانات الشخصية)، 4) المساءلة (تحديد من يُحاسب على النتيجة).</span><span className="lang-en">1) Fairness, 2) Transparency, 3) Privacy Protection, 4) Accountability.</span></p>
              <p>• <strong><span className="lang-ar">XAI:</span><span className="lang-en">XAI:</span></strong> <span className="lang-ar">الذكاء القابل للتفسير لفك غموض الصندوق الأسود (Black-box problem).</span><span className="lang-en">Explainable AI tools to unpack opaque black-box deep decision logic.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


