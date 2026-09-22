'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';
import confetti from 'canvas-confetti';

export function Unit2Exam() {
  const { playSfx, openPrintModal, lang } = useApp();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = unit2ExamQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / unit2ExamQuestions.length) * 100;

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
    if (currentIndex < unit2ExamQuestions.length - 1) {
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
    <div id="view-unit-2-exam" className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="theme-panel border border-rose-500/20 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-bold inline-flex items-center gap-1.5">
              <span>{lang === 'ar' ? 'الاختبار الشامل المعتمد (الوحدة الثانية)' : 'Certified Comprehensive Exam (Unit 2)'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {lang === 'ar' ? 'اختبار تقييم الوحدة الثانية: الأمن السيبراني' : 'Unit 2 Comprehensive Certification Assessment: Cybersecurity'}
            </h2>
            <p className="text-xs sm:text-sm text-sub leading-relaxed">
              {lang === 'ar'
                ? '25 سؤالاً اختيارياً شاملاً لجميع مفاهيم دروس الوحدة الثانية (التشفير، المصادقة، التوقيعات والشهادات الرقمية، أمن الشبكات، الدفاع العميق، Zero Trust، الاستجابة للحوادث، وحساب المخاطر).'
                : '25 authentic exam questions covering all Unit 2 concepts (Cryptography, Auth, DMZ, VPN, Zero Trust, Incident Response, Risk Size formula).'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl theme-subpanel border border-rose-500/30 text-xs shrink-0 w-full md:w-64 shadow-md flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                className="w-11 h-11 rounded-xl object-cover border border-rose-500/50 shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 text-[11px]">
                {lang === 'ar' ? 'إشراف وتدقيق:' : 'Supervised By:'}
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white truncate">
                {lang === 'ar' ? 'المهندس عمر محمود' : 'Eng. Omar Mahmoud'}
              </div>
              <div className="flex items-center gap-2.5 text-[11px]">
                <a href="tel:01012306019" className="text-rose-600 dark:text-rose-400 font-mono hover:underline">01012306019</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="theme-panel border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-sub">
              <span>{lang === 'ar' ? `السؤال ${currentIndex + 1} من ${unit2ExamQuestions.length}` : `Question ${currentIndex + 1} of ${unit2ExamQuestions.length}`}</span>
              <span className="text-rose-600 dark:text-rose-400 font-mono">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4 pt-2">
            <div className="inline-block px-3 py-1 theme-subpanel text-rose-600 dark:text-rose-300 rounded-lg text-xs font-semibold border">
              {currentQ.lesson[lang]}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.q[lang]}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentQ.opts[lang].map((opt, idx) => {
              let optStyle = "theme-subpanel text-slate-900 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-rose-500";
              if (isAnswered) {
                if (idx === currentQ.a) {
                  optStyle = "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500 font-bold";
                } else if (selectedAns === idx) {
                  optStyle = "bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl border text-right text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${optStyle}`}
                >
                  <span className="flex-1">{opt}</span>
                  {isAnswered && idx === currentQ.a && (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className="p-4 theme-subpanel border rounded-xl space-y-1 animate-fadeIn">
              <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                {lang === 'ar' ? 'التفسير العلمي المعياري:' : 'Verbatim Scientific Rationale:'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {currentQ.exp[lang]}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-4">
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>
                  {currentIndex < unit2ExamQuestions.length - 1
                    ? (lang === 'ar' ? 'السؤال التالي' : 'Next Question')
                    : (lang === 'ar' ? 'عرض النتيجة النهائية' : 'View Final Score')}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result Screen */
        <div className="theme-panel border rounded-2xl p-8 shadow-xl text-center space-y-6">
          <div className="inline-flex p-4 bg-rose-500/10 rounded-full border border-rose-500/30 text-rose-600 dark:text-rose-400 mb-2 text-3xl">
            🏆
          </div>

          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            {lang === 'ar' ? 'نتيجة الاختبار الشامل للوحدة الثانية' : 'Unit 2 Comprehensive Exam Results'}
          </h2>

          <div className="max-w-md mx-auto p-6 theme-subpanel rounded-2xl border space-y-3">
            <div className="text-5xl font-black text-rose-600 dark:text-rose-400">
              {score} / 100
            </div>
            <p className="text-sm text-sub">
              {score >= 85
                ? (lang === 'ar' ? '🎉 ممتاز جداً! لقد اجتزت اختبار الوحدة الثانية بنجاح واقتدار!' : '🎉 Outstanding! You passed the Unit 2 Certification Exam with Excellence!')
                : (lang === 'ar' ? 'أداء جيد! يمكنك مراجعة دروس الوحدة وإعادة الاختبار لتحقيق الدرجة النهائية.' : 'Good effort! Review the lessons and try again to achieve 100%.')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 theme-subpanel text-slate-900 dark:text-slate-200 font-bold rounded-xl border transition"
            >
              {lang === 'ar' ? 'إعادة الاختبار' : 'Retake Exam'}
            </button>
            <button
              onClick={() => openPrintModal()}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg transition"
            >
              {lang === 'ar' ? 'طباعة تقرير النتيجة والتطبيقات' : 'Print Certificate Report'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
