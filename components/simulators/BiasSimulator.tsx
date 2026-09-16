'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

export function BiasSimulator() {
  const { lang, playSfx } = useApp();
  const [result, setResult] = useState<'biased' | 'fair' | null>(null);

  const testBias = (isBiased: boolean) => {
    if (isBiased) {
      playSfx('error');
      setResult('biased');
    } else {
      playSfx('success');
      setResult('fair');
    }
  };

  return (
    <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
      <div className="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 text-xs">
        <Scale className="w-4 h-4 text-sky-500" />
        <span>
          {lang === 'ar'
            ? 'تجرية عملي تفاعلية: التحيز الخوارزمي في خوارزميات الفرز والتوظيف'
            : 'Interactive Test: Algorithmic Bias vs Fairness Mitigation'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <button
          onClick={() => testBias(true)}
          className="p-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-600 dark:text-rose-300 font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <AlertCircle className="w-4 h-4 text-rose-500" />
          <span>{lang === 'ar' ? '1. نموذج ببيانات متحيزة تاريخياً' : '1. Historically Skewed Model'}</span>
        </button>
        <button
          onClick={() => testBias(false)}
          className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-600 dark:text-emerald-300 font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{lang === 'ar' ? '2. نموذج منقى ومُعالج بالعدالة' : '2. Balanced Fair Model'}</span>
        </button>
      </div>

      {result === 'biased' && (
        <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong>{lang === 'ar' ? '❌ تحيز خوارزمي (Algorithmic Bias):' : '❌ Algorithmic Bias Detected:'}</strong>{' '}
            {lang === 'ar'
              ? 'بما أن سجلات التدريب كانت 85% ذكور، استنتج النموذج نمطاً تمييزياً واستبعد كفاءات نسائية متميزة، خارقاً مبدأ العدالة.'
              : 'Historical 85% male training data caused the AI to systematically penalize and reject qualified female applicants.'}
          </div>
        </div>
      )}

      {result === 'fair' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>{lang === 'ar' ? '✅ تحقيق مبدأ العدالة (Fairness):' : '✅ Fairness Enforced:'}</strong>{' '}
            {lang === 'ar'
              ? 'بعد تنقية البيانات وإزالة المتغيرات البديلة المتحيزة، أصبح الفرز حصرياً وفق المعايير والمهارات دون أي تمييز.'
              : 'With balanced training data and removed proxy variables, hiring candidates are scored purely on merits.'}
          </div>
        </div>
      )}
    </div>
  );
}
