'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit6ExamQuestions } from '@/data/unit6ExamQuestions';

export function Unit6Exam() {
  const { playSfx, openPrintModal } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const question = unit6ExamQuestions[currentIndex];
  const answered = selectedAnswer !== null;
  const progress = ((currentIndex + 1) / unit6ExamQuestions.length) * 100;

  const answerQuestion = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === question.a) {
      playSfx('success');
      setScore(current => current + 4);
    } else playSfx('error');
  };

  const nextQuestion = () => {
    playSfx('click');
    if (currentIndex === unit6ExamQuestions.length - 1) {
      playSfx('success');
      setIsFinished(true);
      return;
    }
    setCurrentIndex(index => index + 1);
    setSelectedAnswer(null);
  };

  const restartExam = () => {
    playSfx('click');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  return (
    <div id="view-unit-6-exam" className="lesson-view space-y-8 animate-fadeIn max-w-4xl mx-auto">
      <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
              <span className="lang-ar">التقييم الشامل المعتمد للوحدة السادسة</span><span className="lang-en">Unit 6 Official Assessment</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2">
              <span className="lang-ar">🏆 اختبار الوحدة السادسة الشامل (25 سؤالاً منهجياً)</span><span className="lang-en">🏆 Unit 6 Comprehensive Examination (25 Qs)</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub mt-1">
              <span className="lang-ar">يغطي الدروس 6-1، 6-2، 6-3 وتدريبات كتاب الوزارة بالكامل • إشراف م/ عمر محمود</span>
              <span className="lang-en">Covers Lessons 6-1 to 6-3 &amp; Textbook Review • Instructed by Eng. Omar Mahmoud</span>
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-center font-mono shrink-0">
            <span className="text-[10px] text-sub block"><span className="lang-ar">الدرجة الكلية:</span><span className="lang-en">Total Points:</span></span>
            <span className="text-2xl font-black text-emerald-400">100 / 100</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-sub"><span className="lang-ar">السؤال:</span><span className="lang-en">Question:</span></span>
              <span className="font-bold text-emerald-400 text-base">{currentIndex + 1}</span><span className="text-slate-600">/</span><span className="text-sub">{unit6ExamQuestions.length}</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <i className="fa-solid fa-star text-xs"></i><span>{score}</span><span className="text-[10px] font-normal"><span className="lang-ar">نقطة</span><span className="lang-en">pts</span></span>
            </div>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-2.5">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                <span className="lang-ar">{question.lesson?.ar ?? ''}</span><span className="lang-en">{question.lesson?.en ?? ''}</span>
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-relaxed"><span className="lang-ar">{question.q.ar}</span><span className="lang-en">{question.q.en}</span></h3>
            </div>

            <div className="space-y-2.5">
              {question.opts.ar.map((optionAr, optionIndex) => {
                const isCorrect = optionIndex === question.a;
                const isSelected = selectedAnswer === optionIndex;
                const style = answered
                  ? isCorrect ? 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 font-bold'
                    : isSelected ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-200 font-bold'
                      : 'theme-panel border opacity-40'
                  : 'theme-subpanel border border-slate-700 hover:border-emerald-500';
                return (
                  <button key={optionIndex} type="button" disabled={answered} onClick={() => answerQuestion(optionIndex)} className={`w-full p-3.5 rounded-xl text-start text-xs sm:text-sm transition flex items-center justify-between gap-3 ${style}`}>
                    <span className="flex-1">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-slate-600 text-[10px] font-bold text-sub me-2">{['أ', 'ب', 'جـ', 'د'][optionIndex]}</span>
                      <span className="lang-ar">{optionAr}</span><span className="lang-en">{question.opts.en[optionIndex]}</span>
                    </span>
                    {answered && isCorrect && <i className="fa-solid fa-circle-check text-emerald-400"></i>}
                    {answered && isSelected && !isCorrect && <i className="fa-solid fa-circle-xmark text-rose-400"></i>}
                  </button>
                );
              })}
            </div>
          </div>

          {answered && (
            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed animate-fadeIn ${selectedAnswer === question.a ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200' : 'border-rose-500/50 bg-rose-950/40 text-rose-200'}`}>
              <strong><span className="lang-ar">{selectedAnswer === question.a ? '✅ إجابة صحيحة!' : '❌ إجابة غير دقيقة!'}</span><span className="lang-en">{selectedAnswer === question.a ? '✅ Correct!' : '❌ Incorrect!'}</span></strong>{' '}
              <span className="lang-ar">{question.exp.ar}</span><span className="lang-en">{question.exp.en}</span>
            </div>
          )}

          {answered && (
            <div className="flex justify-end pt-2">
              <button type="button" onClick={nextQuestion} className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center gap-2 shadow-md">
                <span className="lang-ar">{currentIndex < unit6ExamQuestions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة والشهادة'}</span>
                <span className="lang-en">{currentIndex < unit6ExamQuestions.length - 1 ? 'Next Question' : 'View Certificate'}</span>
                <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right text-xs"></i>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="theme-panel border p-6 sm:p-8 rounded-3xl text-center space-y-5 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-3xl shadow-xl shadow-emerald-500/20"><i className="fa-solid fa-trophy"></i></div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black"><span className="lang-ar">تهانينا! أتممت اختبار الوحدة السادسة بنجاح</span><span className="lang-en">Congratulations! Unit 6 Exam Complete</span></h3>
            <p className="text-sm text-sub font-medium">
              <span className="lang-ar">{score >= 85 ? '🌟 ممتاز وبراعة فائقة! لقد أتقنت مفاهيم التحليل والتواصل (الاستدلال الإحصائي، الانحدار، وتصور البيانات) بالكامل وأنت جاهز للدرجة النهائية.' : score >= 65 ? '👏 أداء طيب جداً! راجع الأسئلة التي تعثرت فيها في مذكرة المراجعة لتضمن الدرجة النهائية.' : '💪 محاولة طيبة، افتح مذكرة المراجعة الشاملة واسترجع المفاهيم ثم أعد الاختبار مجدداً.'}</span>
              <span className="lang-en">{score >= 85 ? 'Outstanding Mastery! You have completely mastered Unit 6 Analysis and Communication.' : score >= 65 ? 'Very Good! Review specific nuances in the summary guide.' : 'Good try! Check the revision guide and retake the test.'}</span>
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/40 text-center space-y-3 max-w-md mx-auto shadow-2xl">
            <div className="text-[11px] text-amber-400 uppercase tracking-wider font-bold"><span className="lang-ar">شهادة إتقان المنهج الوزاري</span><span className="lang-en">Official Mastery Certificate</span></div>
            <div className="text-3xl font-black text-emerald-400 font-mono">{score} / 100</div>
            <div className="text-xs text-slate-300"><span className="lang-ar">تم تقييم واجتياز اختبار الوحدة السادسة: التحليل والتواصل (ص 26 إلى ص 49)</span><span className="lang-en">Unit 6 Assessment Certified: Analysis and Communication (pp. 29 - 56)</span></div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-bold space-y-0.5">
              <div><span className="lang-ar">اعتماد مدرس المادة: المهندس عمر محمود</span><span className="lang-en">Certified by: Eng. Omar Mahmoud</span></div>
              <div className="font-mono">01012306019</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button type="button" onClick={restartExam} className="px-5 py-2.5 rounded-xl text-xs font-bold theme-panel border transition"><i className="fa-solid fa-rotate-right"></i><span className="lang-ar"> إعادة الاختبار</span><span className="lang-en"> Restart Exam</span></button>
            <button type="button" onClick={openPrintModal} className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition"><i className="fa-solid fa-file-pdf"></i><span className="lang-ar"> مذكرة المراجعة PDF</span><span className="lang-en"> Print Summary</span></button>
          </div>
        </div>
      )}
    </div>
  );
}
