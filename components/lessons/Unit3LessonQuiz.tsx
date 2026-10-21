'use client';

import { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import type { Question } from '@/types';

export function Unit3LessonQuiz({ questions }: { questions: Question[] }) {
  const { playSfx } = useApp();
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="space-y-4 text-xs">
      {questions.map((question, index) => {
        const selected = answers[index];
        return (
          <div key={index} className="p-4 rounded-2xl theme-subpanel border border-slate-800 space-y-3">
            <p className="font-bold text-slate-200">
              <span className="text-emerald-400 mr-1.5">{index + 1}.</span>
              <span className="lang-ar">{question.q.ar}</span>
              <span className="lang-en">{question.q.en}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {question.opts.ar.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  disabled={selected !== undefined}
                  onClick={() => {
                    if (selected !== undefined) return;
                    setAnswers(previous => ({ ...previous, [index]: optionIndex }));
                    playSfx(optionIndex === question.a ? 'success' : 'error');
                  }}
                  className={`p-3 rounded-xl border text-start transition ${
                    selected === undefined
                      ? 'border-slate-800 hover:border-emerald-500'
                      : optionIndex === question.a
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold'
                        : selected === optionIndex
                          ? 'bg-rose-950/80 border-rose-500 text-rose-200'
                          : 'border-slate-800 opacity-40'
                  }`}
                >
                  <span className="lang-ar">{option}</span>
                  <span className="lang-en">{question.opts.en[optionIndex]}</span>
                </button>
              ))}
            </div>
            {selected !== undefined && (
              <p className="text-sub leading-relaxed">
                <span className="lang-ar">{question.exp.ar}</span>
                <span className="lang-en">{question.exp.en}</span>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
