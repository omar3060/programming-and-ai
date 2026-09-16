'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function XAIDecisionVisualizer() {
  const { lang, playSfx } = useApp();
  const [viewMode, setViewMode] = useState<'blackbox' | 'xai'>('xai');
  const [income, setIncome] = useState<number>(45000);
  const [creditScore, setCreditScore] = useState<number>(680);
  const [debtRatio, setDebtRatio] = useState<number>(35);

  // Simple explainable AI scoring logic for loan approval
  const isApproved = income >= 40000 && creditScore >= 650 && debtRatio <= 40;

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/40 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-eye"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">محاكي الذكاء الاصطناعي القابل للتفسير (XAI) مقابل الصندوق الأسود (Black Box)</span>
              <span className="lang-en">Explainable AI (XAI) vs Black-Box Decision Visualizer</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">شاهد الفرق بين نموذج يقدم قراراً غامضاً ونموذج XAI يوضح أوزان العوامل وأسباب القرار</span>
              <span className="lang-en">Compare opaque black-box verdicts against transparent Explainable AI (XAI) feature weight maps</span>
            </p>
          </div>
        </div>

        {/* View Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => { playSfx('click'); setViewMode('blackbox'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'blackbox' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-box text-xs"></i>
            <span className="lang-ar">الصندوق الأسود (Black Box)</span>
            <span className="lang-en">Black Box</span>
          </button>
          <button
            onClick={() => { playSfx('click'); setViewMode('xai'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'xai' ? 'bg-rose-600 text-white shadow-md shadow-rose-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-brain text-xs"></i>
            <span className="lang-ar">الذكاء القابل للتفسير (XAI)</span>
            <span className="lang-en">Explainable AI (XAI)</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls & Loan Parameters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1">
          <label className="text-sub text-[11px] font-bold flex justify-between">
            <span><span className="lang-ar">الدخل السنوي:</span><span className="lang-en">Annual Income:</span></span>
            <span className="font-mono text-emerald-400">${income.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="20000"
            max="100000"
            step="5000"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sub text-[11px] font-bold flex justify-between">
            <span><span className="lang-ar">الدرجة الائتمانية:</span><span className="lang-en">Credit Score:</span></span>
            <span className="font-mono text-blue-400">{creditScore}</span>
          </label>
          <input
            type="range"
            min="500"
            max="850"
            step="10"
            value={creditScore}
            onChange={(e) => setCreditScore(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sub text-[11px] font-bold flex justify-between">
            <span><span className="lang-ar">نسبة الديون للدخل:</span><span className="lang-en">Debt-to-Income:</span></span>
            <span className="font-mono text-amber-400">{debtRatio}%</span>
          </label>
          <input
            type="range"
            min="10"
            max="60"
            step="5"
            value={debtRatio}
            onChange={(e) => setDebtRatio(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Live Output Visualization Screen */}
      {viewMode === 'blackbox' ? (
        /* BLACK BOX MODE: Opaque, No Explanation */
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-sub font-mono">MODEL TYPE: DEEP BLACK-BOX NEURAL NET</span>
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px]">OPAQUE DECISION</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
            <div className="text-sub text-[11px]"><span className="lang-ar">نتيجة طلب القرض البنكي:</span><span className="lang-en">Bank Loan Application Verdict:</span></div>
            <div className={`text-xl font-black ${isApproved ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isApproved ? (lang === 'ar' ? '✅ مقبول (APPROVED)' : '✅ APPROVED') : (lang === 'ar' ? '❌ مرفوض (REJECTED)' : '❌ REJECTED')}
            </div>
            <p className="text-[11px] text-slate-500 italic">
              <span className="lang-ar">⚠️ لا تتوفر أي معلومات أو تفاصيل مبررة حول سبب هذا القرار داخل نظام الصندوق الأسود!</span>
              <span className="lang-en">⚠️ Zero explanation provided. The internal weight logic remains an opaque black box!</span>
            </p>
          </div>
        </div>
      ) : (
        /* XAI MODE: Transparent Heatmap Feature Importance */
        <div className="p-5 rounded-xl bg-slate-900 border border-rose-500/30 text-xs space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-sub font-mono">MODEL TYPE: EXPLAINABLE AI (XAI SHAP/LIME)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">TRANSPARENT HEATMAP</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-slate-200 font-bold text-xs sm:text-sm">
              <span className="lang-ar">قرار النظام المفسَّر:</span>
              <span className="lang-en">Explained System Verdict:</span>{' '}
              <span className={isApproved ? 'text-emerald-400 font-black' : 'text-rose-400 font-black'}>
                {isApproved ? (lang === 'ar' ? '✅ مقبول (APPROVED)' : '✅ APPROVED') : (lang === 'ar' ? '❌ مرفوض (REJECTED)' : '❌ REJECTED')}
              </span>
            </div>
          </div>

          {/* Feature Importance Heatmap Bars */}
          <div className="space-y-2.5 pt-1">
            <div className="text-[11px] font-bold text-sub">
              <span className="lang-ar">مخطط أهمية وتأثير العوامل (Feature Importance Heatmap):</span>
              <span className="lang-en">Feature Importance Heatmap Breakdown:</span>
            </div>

            {/* Income Weight */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span><span className="lang-ar">الدخل السنوي ($)</span><span className="lang-en">Annual Income ($)</span></span>
                <span className={income >= 40000 ? 'text-emerald-400 font-mono font-bold' : 'text-rose-400 font-mono font-bold'}>
                  {income >= 40000 ? '+35% Positive Impact' : '-25% Negative Impact'}
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${income >= 40000 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                  style={{ width: `${Math.min(100, (income / 100000) * 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Credit Score Weight */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span><span className="lang-ar">الدرجة الائتمانية (Credit Score)</span><span className="lang-en">Credit Score Rating</span></span>
                <span className={creditScore >= 650 ? 'text-emerald-400 font-mono font-bold' : 'text-rose-400 font-mono font-bold'}>
                  {creditScore >= 650 ? '+45% Positive Impact' : '-40% Negative Impact'}
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${creditScore >= 650 ? 'bg-blue-500' : 'bg-rose-500'}`}
                  style={{ width: `${Math.min(100, ((creditScore - 500) / 350) * 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Debt Ratio Weight */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span><span className="lang-ar">نسبة الديون الحالية (Debt Ratio)</span><span className="lang-en">Current Debt-to-Income</span></span>
                <span className={debtRatio <= 40 ? 'text-emerald-400 font-mono font-bold' : 'text-rose-400 font-mono font-bold'}>
                  {debtRatio <= 40 ? '+20% Safe Ratio' : '-35% Excessive Debt'}
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${debtRatio <= 40 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${Math.min(100, (debtRatio / 60) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Official Pedagogical Note */}
      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-sub leading-relaxed">
        <strong className="text-rose-300 block font-bold">
          <span className="lang-ar">💡 خلاصة الدرس الرسمية (كتاب الوزارة ص 28):</span>
          <span className="lang-en">💡 Official Pedagogical Takeaway (p. 28):</span>
        </strong>
        <p className="text-[11px] pt-0.5">
          <span className="lang-ar">
            الذكاء الاصطناعي القابل للتفسير <strong>(XAI - Explainable AI)</strong> هو أدوات وتقنيات تهدف لجعل قرارات الشبكات العصبية العميقة شفافة ومفهومة للبشر، لمنع التمييز وإيقاف "مشكلة الصندوق الأسود" وبناء الثقة والمساءلة القانونية!
          </span>
          <span className="lang-en">
            Explainable AI <strong>(XAI)</strong> comprises techniques engineered to open the opaque deep learning "Black Box", allowing humans to comprehend decision logic, audit bias, and uphold ethical accountability!
          </span>
        </p>
      </div>
    </div>
  );
}
