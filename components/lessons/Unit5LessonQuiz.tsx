'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import {
  lesson51Questions,
  lesson52Questions,
  lesson53Questions,
} from '@/data/unit5ExamQuestions';

const questionsByLesson = {
  '51': lesson51Questions,
  '52': lesson52Questions,
  '53': lesson53Questions,
} as const;

interface LessonQuizProps {
  lessonId: keyof typeof questionsByLesson;
}

export function LessonQuiz({ lessonId }: LessonQuizProps) {
  const { playSfx } = useApp();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const questions = questionsByLesson[lessonId];

  const answerQuestion = (questionIndex: number, optionIndex: number) => {
    if (answers[questionIndex] !== undefined) return;
    const question = questions[questionIndex];
    playSfx(optionIndex === question.a ? 'success' : 'error');
    setAnswers(current => ({ ...current, [questionIndex]: optionIndex }));
  };

  return (
    <div className="theme-panel border p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
          <i className="fa-solid fa-circle-question text-emerald-400"></i>
          <span className="lang-ar">اختبار تدريبي على الدرس 5-{lessonId.slice(-1)} (10 أسئلة منهجية من كتاب الوزارة)</span>
          <span className="lang-en">Lesson 5-{lessonId.slice(-1)} Practice Quiz (10 Ministry Textbook Questions)</span>
        </h4>
        <span className="text-xs text-amber-400 font-bold">
          <span className="lang-ar">إشراف: م/ عمر محمود</span>
          <span className="lang-en">Eng. Omar Mahmoud</span>
        </span>
      </div>

      <div className="space-y-4 text-xs">
        {questions.map((question, questionIndex) => {
          const selected = answers[questionIndex];
          const answered = selected !== undefined;
          const correct = selected === question.a;

          return (
            <div key={questionIndex} className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-slate-800/80 space-y-3.5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5 flex-1">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {questionIndex + 1}
                  </span>
                  <p className="font-bold text-xs sm:text-sm leading-relaxed text-slate-200">
                    <span className="lang-ar">{question.q.ar}</span>
                    <span className="lang-en">{question.q.en}</span>
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700/60 text-amber-400 text-[10px] font-mono shrink-0 whitespace-nowrap">
                  {questionIndex + 1} / 10
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {question.opts.ar.map((optionAr, optionIndex) => {
                  const optionEn = question.opts.en[optionIndex];
                  let className = 'p-3 rounded-xl theme-panel border text-start flex items-start gap-2.5 text-xs sm:text-sm transition';
                  if (answered) {
                    if (optionIndex === question.a) {
                      className = 'p-3 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 text-start font-bold flex items-start gap-2.5 text-xs sm:text-sm shadow-sm';
                    } else if (optionIndex === selected) {
                      className = 'p-3 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-rose-200 text-start font-bold flex items-start gap-2.5 text-xs sm:text-sm shadow-sm';
                    } else {
                      className = 'p-3 rounded-xl theme-panel border opacity-40 text-start flex items-start gap-2.5 text-xs sm:text-sm';
                    }
                  } else {
                    className += ' hover:border-emerald-500 cursor-pointer';
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      disabled={answered}
                      onClick={() => answerQuestion(questionIndex, optionIndex)}
                      className={className}
                    >
                      <span className="flex-1">
                        <span className="lang-ar">{optionAr}</span>
                        <span className="lang-en">{optionEn}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`p-3.5 rounded-xl text-xs leading-relaxed space-y-1.5 shadow-md ${correct ? 'bg-emerald-950/70 border border-emerald-500/60 text-emerald-200' : 'bg-rose-950/70 border border-rose-500/60 text-rose-200'}`}>
                  <div className={`font-black flex items-center gap-1.5 text-xs sm:text-sm ${correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                    <i className={`fa-solid ${correct ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
                    <span className="lang-ar">{correct ? 'إجابة صحيحة نموذجية! أحسنت.' : 'إجابة غير صحيحة! راجع التفسير أدناه:'}</span>
                    <span className="lang-en">{correct ? 'Correct Model Answer! Well done.' : 'Incorrect Answer! Review explanation:'}</span>
                  </div>
                  {!correct && (
                    <div className="text-slate-200 text-xs">
                      <strong className="text-amber-400 font-bold">
                        <span className="lang-ar">الإجابة الصحيحة هي: </span>
                        <span className="lang-en">Correct option is: </span>
                      </strong>
                      ({['أ', 'ب', 'جـ', 'د'][question.a]}){' '}
                      <span className="lang-ar">{question.opts.ar[question.a]}</span>
                      <span className="lang-en">{question.opts.en[question.a]}</span>
                    </div>
                  )}
                  <div className="text-slate-300 text-xs">
                    <span className="lang-ar">{question.exp.ar}</span>
                    <span className="lang-en">{question.exp.en}</span>
                  </div>
                  {question.ref && (
                    <div className="text-[11px] text-amber-400 font-mono font-bold pt-1.5 border-t border-slate-700 flex items-center gap-1.5">
                      <i className="fa-solid fa-book-open text-xs"></i>
                      <span className="lang-ar">{question.ref}</span>
                      <span className="lang-en">{question.ref}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
