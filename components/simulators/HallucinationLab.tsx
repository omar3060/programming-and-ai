'use client';

import React, { useState, useRef } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { halData } from '@/data/interactiveData';
import { Bot, AlertTriangle, CheckCircle, Search } from 'lucide-react';

export function HallucinationLab() {
  const { lang, playSfx } = useApp();
  const [curHalId, setCurHalId] = useState<number | null>(null);
  const [typedText, setTypedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showTruth, setShowTruth] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const runTest = (id: number) => {
    playSfx('click');
    setCurHalId(id);
    setShowTruth(false);
    setTypedText('');
    setIsTyping(true);

    if (timerRef.current) clearInterval(timerRef.current);

    const fullText = halData[id][lang].gen;
    let idx = 0;

    timerRef.current = setInterval(() => {
      idx++;
      if (idx <= fullText.length) {
        setTypedText(fullText.slice(0, idx));
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsTyping(false);
      }
    }, 18);
  };

  const handleRevealTruth = () => {
    playSfx('error');
    setShowTruth(true);
  };

  return (
    <div className="p-4 sm:p-6 rounded-3xl theme-subpanel border space-y-4">
      <div className="flex items-center justify-between border-b border-slate-700/40 dark:border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-500" />
          <h4 className="font-bold text-sm text-purple-600 dark:text-purple-400">
            {lang === 'ar'
              ? 'معمل كشف هلوسة الذكاء الاصطناعي التوليدي (AI Hallucination Lab)'
              : 'GenAI Hallucination Verification Lab'}
          </h4>
        </div>
      </div>

      <p className="text-sub text-xs leading-relaxed">
        {lang === 'ar'
          ? 'اختر ادعاءً توليدياً أدناه لمشاهدة كيف يصوغ الذكاء التوليدي خرافات وافتراءات بأسلوب واثق وفصيح جداً، واكتشف كيفية كشفها:'
          : 'Select a generative prompt test case below to observe how GenAI synthesizes eloquent falsehoods with plausible confidence:'}
      </p>

      {/* Test Buttons */}
      <div className="flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => runTest(1)}
          className="px-3 py-2 rounded-xl theme-panel border hover:border-purple-500 text-slate-900 dark:text-white text-start transition cursor-pointer font-bold"
        >
          {lang === 'ar' ? '🧪 تجربة 1: قطار الأهرامات الفضائي' : '🧪 Case 1: Giza Space Train'}
        </button>
        <button
          onClick={() => runTest(2)}
          className="px-3 py-2 rounded-xl theme-panel border hover:border-purple-500 text-slate-900 dark:text-white text-start transition cursor-pointer font-bold"
        >
          {lang === 'ar' ? '🧪 تجربة 2: علاج الحساسية بالليمون المركز' : '🧪 Case 2: Citric Allergy Cure'}
        </button>
      </div>

      {/* Output Screen */}
      {curHalId && (
        <div className="space-y-3 pt-2 animate-fadeIn">
          <div className="p-4 rounded-2xl theme-panel border text-slate-900 dark:text-slate-200 text-xs sm:text-sm font-sans leading-relaxed relative min-h-[80px]">
            {isTyping && (
              <span className="absolute top-2 rtl:left-3 ltr:right-3 px-2 py-0.5 rounded bg-purple-600/30 text-purple-700 dark:text-purple-300 text-[10px] font-bold animate-pulse">
                {lang === 'ar' ? 'جاري التوليد...' : 'Generating...'}
              </span>
            )}
            <p className="leading-relaxed font-bold">{typedText}</p>
          </div>

          {!isTyping && !showTruth && (
            <button
              onClick={handleRevealTruth}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-md"
            >
              <Search className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar'
                  ? 'كشف الحقيقة والتحقق المزدوج (Cross-Checking)'
                  : 'Reveal Truth via Independent Cross-Checking'}
              </span>
            </button>
          )}

          {showTruth && (
            <div className="p-4 rounded-2xl bg-rose-100 dark:bg-rose-950/80 border border-rose-500 text-rose-900 dark:text-rose-200 text-xs leading-relaxed flex items-start gap-2.5 animate-fadeIn">
              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong>{lang === 'ar' ? 'نتائج الفحص والتحقق المستقل:' : 'Verification Verdict:'}</strong>{' '}
                {halData[curHalId][lang].truth}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
