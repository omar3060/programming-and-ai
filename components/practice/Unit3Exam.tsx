'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit3ExamQuestions } from '@/data/unit3ExamQuestions';

export function Unit3Exam() {
  const { lang, playSfx } = useApp();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = unit3ExamQuestions[index];

  const select = (option: number) => {
    if (selected !== null) return;
    setSelected(option);
    playSfx(option === question.a ? 'success' : 'error');
    if (option === question.a) setScore(value => value + 100 / unit3ExamQuestions.length);
  };

  const next = () => {
    playSfx('click');
    if (index === unit3ExamQuestions.length - 1) setFinished(true);
    else {
      setIndex(value => value + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    playSfx('click');
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <div id="view-unit-3-exam" className="space-y-8 animate-fadeIn pb-12">
      <header className="theme-panel border border-violet-500/20 p-6 sm:p-8 rounded-3xl shadow-xl bg-gradient-to-r from-violet-500/10 to-transparent">
        <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold">
          <span className="lang-ar">الاختبار الشامل المعتمد (الوحدة الثالثة)</span><span className="lang-en">Certified Comprehensive Exam (Unit 3)</span>
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mt-3"><span className="lang-ar">اختبار تطبيقات الويب</span><span className="lang-en">Web Applications Comprehensive Exam</span></h1>
        <p className="text-sub text-xs sm:text-sm mt-2"><span className="lang-ar">30 سؤالاً في بنية تطبيقات الويب والاتصال وتقنيات الواجهة الأمامية.</span><span className="lang-en">30 questions covering web application structure, communication, and frontend technology.</span></p>
      </header>
      {!finished ? (
        <section className="theme-panel border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex justify-between text-xs font-bold text-sub">
            <span>{lang === 'ar' ? `السؤال ${index + 1} من ${unit3ExamQuestions.length}` : `Question ${index + 1} of ${unit3ExamQuestions.length}`}</span>
            <span className="text-violet-400">{Math.round(((index + 1) / unit3ExamQuestions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-violet-500 transition-all" style={{ width: `${((index + 1) / unit3ExamQuestions.length) * 100}%` }} /></div>
          <div className="p-4 theme-subpanel rounded-xl border">
            <div className="text-xs text-violet-400 font-bold mb-2">{question.lesson[lang]}</div>
            <h2 className="text-lg font-bold">{question.q[lang]}</h2>
          </div>
          <div className="grid gap-3">
            {question.opts[lang].map((option, optionIndex) => {
              const answered = selected !== null;
              const style = answered && optionIndex === question.a
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : answered && optionIndex === selected
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'theme-subpanel border-slate-700 hover:border-violet-500';
              return <button key={option} disabled={answered} onClick={() => select(optionIndex)} className={`p-4 rounded-xl border text-start text-sm transition ${style}`}>{option}</button>;
            })}
          </div>
          {selected !== null && <div className="p-4 theme-subpanel border rounded-xl text-xs leading-relaxed"><span className="lang-ar">{question.exp.ar}</span><span className="lang-en">{question.exp.en}</span></div>}
          {selected !== null && <button onClick={next} className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold">{index === unit3ExamQuestions.length - 1 ? (lang === 'ar' ? 'عرض النتيجة' : 'View Result') : (lang === 'ar' ? 'السؤال التالي' : 'Next Question')}</button>}
        </section>
      ) : (
        <section className="theme-panel border rounded-2xl p-8 text-center space-y-5">
          <div className="text-5xl">🏆</div>
          <h2 className="text-2xl font-black"><span className="lang-ar">نتيجة اختبار الوحدة الثالثة</span><span className="lang-en">Unit 3 Exam Result</span></h2>
          <div className="text-5xl font-black text-violet-400">{Math.round(score)} / 100</div>
          <p className="text-sub text-sm"><span className="lang-ar">راجع دروس الوحدة وأعد الاختبار لتحسين نتيجتك.</span><span className="lang-en">Review the unit lessons and retake the exam to improve your score.</span></p>
          <button onClick={restart} className="px-6 py-3 theme-subpanel border rounded-xl font-bold"><span className="lang-ar">إعادة الاختبار</span><span className="lang-en">Retake Exam</span></button>
        </section>
      )}
    </div>
  );
}
