'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { comprehensiveExamQuestions } from '@/data/unit3ExamQuestions';

const examHero = (
  <div className="space-y-8 animate-fadeIn">
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
            <span className="lang-ar">??????? ?????? ??????? ?????? ???????</span>
            <span className="lang-en">Unit 3 Official Assessment</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-2">
            <span className="lang-ar">?? ?????? ?????? ??????? ?????? (25 ?????? ???????)</span>
            <span className="lang-en">?? Unit 3 Comprehensive Examination (25 Qs)</span>
          </h2>
          <p className="text-xs sm:text-sm text-sub mt-1">
            <span className="lang-ar">???? ?????? 3-1? 3-2? 3-3 ???????? ???? ??????? ??????? ? ????? ?/ ??? ?????</span>
            <span className="lang-en">Covers Lessons 3-1 to 3-3 & Textbook Review ? Instructed by Eng. Omar Mahmoud</span>
          </p>
        </div>
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-center font-mono shrink-0">
          <span className="text-[10px] text-sub block"><span className="lang-ar">?????? ??????:</span><span className="lang-en">Total Points:</span></span>
          <span className="text-2xl font-black text-emerald-400">100 / 100</span>
        </div>
      </div>
    </div>
  </div>
);

export function Unit3Exam() {
  const { playSfx } = useApp();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const question = comprehensiveExamQuestions[index];

  const choose = (option: number) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === question.a) {
      setScore(value => value + 4);
      playSfx('success');
    } else {
      playSfx('error');
    }
  };

  return (
    <div id="view-unit-3-exam" className="lesson-view max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {examHero}
      <section className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
          <span className="text-sub"><span className="lang-ar">السؤال:</span><span className="lang-en">Question:</span> <strong className="text-emerald-400 text-base">{index + 1}</strong> / 25</span>
          <strong className="text-amber-400">{score} <span className="lang-ar">نقطة</span><span className="lang-en">pts</span></strong>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500 h-full transition-all" style={{ width: `${((index + 1) / 25) * 100}%` }} /></div>
        {!finished ? (
          <>
            <h2 className="text-sm sm:text-base font-bold leading-relaxed"><span className="lang-ar">{question.q.ar}</span><span className="lang-en">{question.q.en}</span></h2>
            <div className="space-y-2.5">{question.opts.ar.map((option, optionIndex) => <button key={optionIndex} disabled={selected !== null} onClick={() => choose(optionIndex)} className={`w-full p-3 rounded-xl border text-start text-xs sm:text-sm ${selected === null ? 'border-slate-800 hover:border-emerald-400' : optionIndex === question.a ? 'border-emerald-500 bg-emerald-950/80 text-emerald-200' : selected === optionIndex ? 'border-rose-500 bg-rose-950/80 text-rose-200' : 'border-slate-800 opacity-40'}`}><span className="lang-ar">{option}</span><span className="lang-en">{question.opts.en[optionIndex]}</span></button>)}</div>
            {selected !== null && <><p className="text-xs text-sub"><span className="lang-ar">{question.exp.ar}</span><span className="lang-en">{question.exp.en}</span></p><button onClick={() => { if (index === 24) setFinished(true); else { setIndex(value => value + 1); setSelected(null); } }} className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 text-white">{index === 24 ? <><span className="lang-ar">عرض النتيجة والشهادة</span><span className="lang-en">Show Result and Certificate</span></> : <><span className="lang-ar">السؤال التالي</span><span className="lang-en">Next Question</span></>}</button></>}
          </>
        ) : (
          <div className="text-center py-6 space-y-5"><h2 className="text-2xl font-black"><span className="lang-ar">تهانينا! أتممت اختبار الوحدة الثالثة بنجاح</span><span className="lang-en">Congratulations! Unit 3 Exam Complete</span></h2><div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/40 max-w-md mx-auto"><div className="text-3xl font-black text-emerald-400 font-mono">{score} / 100</div><p className="text-xs text-slate-300 mt-3"><span className="lang-ar">اعتماد مدرس المادة: المهندس عمر محمود — 01012306019</span><span className="lang-en">Certified by: Eng. Omar Mahmoud — 01012306019</span></p></div></div>
        )}
      </section>
    </div>
  );
}

export default Unit3Exam;
