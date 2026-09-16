'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';
import confetti from 'canvas-confetti';

export function Unit1Exam() {
  const { playSfx, openPrintModal } = useApp();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = allExamQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / allExamQuestions.length) * 100;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedAns(optionIndex);

    const isCorrect = optionIndex === currentQ.a;
    if (isCorrect) {
      playSfx('success');
      setScore(prev => prev + 4);
    } else {
      playSfx('error');
    }
  };

  const handleNext = () => {
    playSfx('click');
    if (currentIndex < allExamQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      playSfx('success');
      if (score >= 85) {
        try {
          confetti({ particleCount: 130, spread: 90, origin: { y: 0.6 } });
        } catch {
          // Fallback if confetti fails
        }
      }
    }
  };

  const handleRestart = () => {
    playSfx('click');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAns(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <div id="view-unit-1-exam" className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Hero Banner */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase">
              <span className="lang-ar">التقييم الشامل المعتمد للوحدة الأولى</span>
              <span className="lang-en">Unit 1 Official Assessment</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2">
              <span className="lang-ar">🏆 اختبار الوحدة الأولى الشامل (25 سؤالاً منهجياً)</span>
              <span className="lang-en">🏆 Unit 1 Comprehensive Examination (25 Qs)</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub mt-1">
              <span className="lang-ar">يغطي الدروس 1-1، 1-2، 1-3، 1-4 وتدريبات كتاب الوزارة بالكامل • إشراف م/ عمر محمود</span>
              <span className="lang-en">Covers Lessons 1-1 to 1-4 & Textbook Review • Instructed by Eng. Omar Mahmoud</span>
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-amber-500/40 text-center font-mono shrink-0">
            <span className="text-[10px] text-sub block"><span className="lang-ar">الدرجة الكلية:</span><span className="lang-en">Total Points:</span></span>
            <span className="text-2xl font-black text-amber-400">100 / 100</span>
          </div>
        </div>
      </div>

      {/* Exam Interactive Box */}
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-sub"><span className="lang-ar">السؤال:</span><span className="lang-en">Question:</span></span>
            <span className="font-bold text-brand-400 text-base">{currentIndex + 1}</span>
            <span className="text-slate-600">/</span>
            <span className="text-sub">25</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <i className="fa-solid fa-star text-xs"></i>
            <span>{score}</span>
            <span className="text-[10px] font-normal"><span className="lang-ar">نقطة</span><span className="lang-en">pts</span></span>
          </div>
        </div>

        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-brand-500 via-purple-500 to-amber-500 h-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>

        {/* Question Screen */}
        {!isFinished ? (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-start gap-2.5">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0 mt-0.5">
                <span className="lang-ar">{currentQ.lesson.ar}</span>
                <span className="lang-en">{currentQ.lesson.en}</span>
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-relaxed">
                <span className="lang-ar">{currentQ.q.ar}</span>
                <span className="lang-en">{currentQ.q.en}</span>
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.opts.ar.map((optAr, oIdx) => {
                const optEn = currentQ.opts.en[oIdx];
                const isSelected = selectedAns === oIdx;
                const isCorrect = oIdx === currentQ.a;

                let btnClass = "w-full p-3 rounded-xl theme-panel border hover:border-brand-400 text-start text-xs sm:text-sm text-slate-200 transition flex items-center justify-between";
                let iconClass = "fa-regular fa-circle text-sub";

                if (isAnswered) {
                  if (isCorrect) {
                    btnClass = "w-full p-3 rounded-xl border border-emerald-500 bg-emerald-950/80 text-start text-xs sm:text-sm text-emerald-200 transition flex items-center justify-between font-bold";
                    iconClass = "fa-solid fa-circle-check text-emerald-400";
                  } else if (isSelected && !isCorrect) {
                    btnClass = "w-full p-3 rounded-xl border border-rose-500 bg-rose-950/80 text-start text-xs sm:text-sm text-rose-200 transition flex items-center justify-between font-bold";
                    iconClass = "fa-solid fa-circle-xmark text-rose-400";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(oIdx)}
                    className={btnClass}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-bold text-sub">
                        {['أ', 'ب', 'جـ', 'د'][oIdx]}
                      </span>
                      <span className="lang-ar">{optAr}</span>
                      <span className="lang-en">{optEn}</span>
                    </div>
                    <i className={`uex-ic ${iconClass}`}></i>
                  </button>
                );
              })}
            </div>

            {/* Feedback Box */}
            {isAnswered && (
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                  selectedAns === currentQ.a
                    ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200'
                    : 'border-rose-500/50 bg-rose-950/40 text-rose-200'
                }`}
              >
                <strong>
                  {selectedAns === currentQ.a ? (
                    <>
                      <span className="lang-ar">✅ إجابة صحيحة!</span>
                      <span className="lang-en">✅ Correct!</span>
                    </>
                  ) : (
                    <>
                      <span className="lang-ar">❌ إجابة غير دقيقة!</span>
                      <span className="lang-en">❌ Incorrect!</span>
                    </>
                  )}
                </strong>{' '}
                <span className="lang-ar">{currentQ.exp.ar}</span>
                <span className="lang-en">{currentQ.exp.en}</span>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-brand-500 to-purple-600 text-white flex items-center gap-2 shadow-md hover:brightness-110 transition cursor-pointer"
                >
                  {currentIndex < allExamQuestions.length - 1 ? (
                    <>
                      <span className="lang-ar">السؤال التالي</span>
                      <span className="lang-en">Next Question</span>
                      <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right text-xs"></i>
                    </>
                  ) : (
                    <>
                      <span className="lang-ar">عرض النتيجة والشهادة</span>
                      <span className="lang-en">View Certificate</span>
                      <i className="fa-solid fa-trophy text-xs"></i>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Completion Screen */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 text-3xl shadow-xl shadow-amber-500/20">
              <i className="fa-solid fa-trophy"></i>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black">
                <span className="lang-ar">تهانينا! أتممت اختبار الوحدة الأولى بنجاح</span>
                <span className="lang-en">Congratulations! Unit 1 Exam Complete</span>
              </h3>
              <p className="text-sm text-sub font-medium">
                {score >= 85 ? (
                  <>
                    <span className="lang-ar">🌟 ممتاز وبراعة فائقة! لقد أتقنت مفاهيم الوحدة الأولى بالكامل وأنت جاهز للدرجة النهائية.</span>
                    <span className="lang-en">Outstanding Mastery! You have completely mastered Unit 1 concepts.</span>
                  </>
                ) : score >= 65 ? (
                  <>
                    <span className="lang-ar">👏 أداء طيب جداً! راجع الأسئلة التي تعثرت فيها في مذكرة المراجعة لتضمن الدرجة النهائية.</span>
                    <span className="lang-en">Very Good! Review specific technical nuances in the summary guide.</span>
                  </>
                ) : (
                  <>
                    <span className="lang-ar">💪 محاولة طيبة، افتح مذكرة المراجعة الشاملة واسترجع المفاهيم ثم أعد الاختبار مجدداً.</span>
                    <span className="lang-en">Good try! Check the revision guide and retake the test.</span>
                  </>
                )}
              </p>
            </div>

            {/* Certificate Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-500/40 text-center space-y-3 max-w-md mx-auto shadow-2xl">
              <div className="text-[11px] text-amber-400 uppercase tracking-wider font-bold">
                <span className="lang-ar">شهادة إتقان المنهج الوزاري</span>
                <span className="lang-en">Official Mastery Certificate</span>
              </div>
              <div className="text-3xl font-black text-brand-400 font-mono">{score} / 100</div>
              <div className="text-xs text-slate-300">
                <span className="lang-ar">تم تقييم واجتياز اختبار الوحدة الأولى: تكنولوجيا المعلومات والمجتمع (ص 4 إلى ص 30)</span>
                <span className="lang-en">Unit 1 Assessment Certified: Information Technology and Society</span>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-bold space-y-0.5">
                <div><span className="lang-ar">اعتماد مدرس المادة: المهندس عمر محمود</span><span className="lang-en">Certified by: Eng. Omar Mahmoud</span></div>
                <div className="flex items-center justify-center gap-3 font-mono text-xs pt-1">
                  <a href="tel:01012306019" className="hover:underline">01012306019</a>
                  <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-400 font-bold hover:underline font-sans flex items-center gap-1">
                    <i className="fa-brands fa-youtube"></i> YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button onClick={handleRestart} className="px-5 py-2.5 rounded-xl text-xs font-bold theme-panel border transition hover:border-slate-500 flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-rotate-right"></i>
                <span className="lang-ar">إعادة الاختبار</span>
                <span className="lang-en">Restart Exam</span>
              </button>
              <button onClick={openPrintModal} className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white transition flex items-center gap-2 cursor-pointer">
                <i className="fa-solid fa-file-pdf"></i>
                <span className="lang-ar">مذكرة المراجعة PDF</span>
                <span className="lang-en">Print Summary</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

