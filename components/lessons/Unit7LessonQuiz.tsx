'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import {
  lesson71Questions,
  lesson72Questions,
  lesson73Questions,
  type Unit7Question,
} from '@/data/unit7ExamQuestions';

const questionsByLesson = {
  lesson71Questions,
  lesson72Questions,
  lesson73Questions,
};

type LessonKey = keyof typeof questionsByLesson;

export function Unit7LessonQuiz({ lessonKey }: { lessonKey: LessonKey }) {
  const { playSfx } = useApp();
  const questions: Unit7Question[] = questionsByLesson[lessonKey];
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const answerQuestion = (questionIndex: number, optionIndex: number, correctAnswer: number) => {
    if (answers[questionIndex] !== undefined) return;
    playSfx(optionIndex === correctAnswer ? 'success' : 'error');
    setAnswers(current => ({ ...current, [questionIndex]: optionIndex }));
  };

  return (
    <div className="space-y-4 text-xs">
      {questions.map((question, questionIndex) => {
        const selected = answers[questionIndex];
        const answered = selected !== undefined;
        return (
          <div key={questionIndex} className="p-4 rounded-2xl theme-subpanel border space-y-3">
            <p className="text-sm font-bold leading-relaxed">
              <span className="text-brand-400 font-mono me-2">{questionIndex + 1}.</span>
              <span className="lang-ar">{question.q.ar}</span>
              <span className="lang-en">{question.q.en}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {question.opts.ar.map((optionAr, optionIndex) => {
                const correct = optionIndex === question.a;
                const chosen = selected === optionIndex;
                const style = answered
                  ? correct
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : chosen
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 line-through'
                      : 'border-slate-800 opacity-50'
                  : 'border-slate-800 hover:border-brand-500 hover:bg-brand-500/5 cursor-pointer';
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    disabled={answered}
                    onClick={() => answerQuestion(questionIndex, optionIndex, question.a)}
                    className={`p-3 rounded-xl text-start transition border ${style}`}
                  >
                    <span className="lang-ar">{optionAr}</span>
                    <span className="lang-en">{question.opts.en[optionIndex]}</span>
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className={`rounded-xl border p-3 leading-relaxed animate-fadeIn ${selected === question.a ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-rose-500/40 bg-rose-500/10'}`}>
                <strong className="block mb-1">
                  <span className="lang-ar">{selected === question.a ? '✓ إجابة صحيحة' : '✗ إجابة غير صحيحة'}</span>
                  <span className="lang-en">{selected === question.a ? '✓ Correct answer' : '✗ Incorrect answer'}</span>
                </strong>
                <span className="lang-ar">{question.exp.ar}</span>
                <span className="lang-en">{question.exp.en}</span>
                {question.ref && (
                  <p className="mt-2 text-[10px] text-sub">
                    <span className="lang-ar">المرجع: {typeof question.ref === 'string' ? question.ref : question.ref.ar}</span>
                    <span className="lang-en">Reference: {typeof question.ref === 'string' ? question.ref : question.ref.en}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
