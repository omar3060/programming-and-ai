'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

const scenarios = {
  learning: {
    titleAr: 'سيناريو 1 (كتاب الوزارة ص 29): مقارنة طريقة التعلم الجديدة بالطريقة التقليدية',
    titleEn: 'Scenario 1 (Textbook p. 32): New Learning Method vs. Conventional Method',
    hypAr: 'H0: لا يوجد فرق في متوسط الدرجات • H1: طريقة التعلم الجديدة تحقق متوسط درجات أعلى',
    hypEn: 'H0: No difference in average scores • H1: New learning method yields a higher average score',
    badgeAr: 'اختبار t (t-test)',
    badgeEn: 't-test (Two Group Means)',
    defaultP: 0.02,
    ciAr: 'التقدير النقطي لفرق المتوسط: +5.2 درجة • فترة الثقة (95%): من +1.8 إلى +8.6 درجة (تُظهر درجة عدم اليقين).',
    ciEn: 'Point Estimate: +5.2 pts • 95% Confidence Interval: [+1.8 to +8.6 pts] (shows degree of uncertainty).',
  },
  club: {
    titleAr: 'سيناريو 2 (فكر كمهندس ص 32): أداة الاختبارات الإلكترونية للنادي المدرسي (74 مقابل 70)',
    titleEn: 'Scenario 2 (Think as an Engineer p. 36): School Club Online Quiz Tool (74 vs 70)',
    hypAr: 'H0: متوسط مجموعة الأداة لا يختلف عن الضابطة • H1: أداة النادي ترفع متوسط الدرجات',
    hypEn: 'H0: Tool group mean equals control group • H1: Quiz tool raises students’ average score',
    badgeAr: 'اختبار t (حالة p = 0.04)',
    badgeEn: 't-test (p = 0.04 Case)',
    defaultP: 0.04,
    ciAr: 'التقدير النقطي للفرق: +4.0 درجات (74 مقابل 70) • فترة الثقة (95%): من +0.3 إلى +7.7 درجة.',
    ciEn: 'Point Estimate: +4.0 pts (74 vs 70) • 95% Confidence Interval: [+0.3 to +7.7 pts].',
  },
  button: {
    titleAr: 'سيناريو 3 (طبق ما تعلمته ص 32): لون زر الدفع مع 200,000 زائر (فرق +0.05% فقط!)',
    titleEn: 'Scenario 3 (In a New Context p. 36): Checkout Button Color with 200,000 Visitors (+0.05%!)',
    hypAr: 'H0: لا يوجد فرق في معدل النقر بين اللونين • H1: اللون الجديد يرفع معدل النقر',
    hypEn: 'H0: No difference in click rate • H1: New button color increases click rate',
    badgeAr: 'عينة ضخمة (n = 200,000)',
    badgeEn: 'Huge Sample (n = 200,000)',
    defaultP: 0.01,
    ciAr: 'التقدير النقطي للفرق: +0.05 نقطة مئوية فقط • فترة الثقة (95%): من +0.02% إلى +0.08%.',
    ciEn: 'Point Estimate: +0.05 percentage points • 95% CI: [+0.02% to +0.08%].',
  },
} as const;

type ScenarioKey = keyof typeof scenarios;

export function InferenceLabSimulator() {
  const { playSfx } = useApp();
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>('learning');
  const [alpha, setAlpha] = useState(0.05);
  const [pValue, setPValue] = useState<number>(scenarios.learning.defaultP);
  const scenario = scenarios[scenarioKey];
  const significant = pValue < alpha;

  const chooseScenario = (key: ScenarioKey) => {
    playSfx('click');
    setScenarioKey(key);
    setPValue(scenarios[key].defaultP);
  };

  const chooseAlpha = (value: number) => {
    playSfx('click');
    setAlpha(value);
  };

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 6-1 (كتاب الوزارة ص 27 - 32)</span>
            <span className="lang-en">Interactive Statistical Inference & Hypothesis Lab</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-flask-vial text-emerald-400"></i>
            <span className="lang-ar">محاكي اختبار الفرضيات (p-value مقابل α) وفترات الثقة والأهمية العملية</span>
            <span className="lang-en">Hypothesis Testing (p-value vs α), Confidence Intervals & Practical Significance Lab</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => chooseScenario('learning')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${scenarioKey === 'learning' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            📚 <span className="lang-ar">طريقة التعلم (t-test ص 29)</span><span className="lang-en">Learning Method (t-test)</span>
          </button>
          <button type="button" onClick={() => chooseScenario('club')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${scenarioKey === 'club' ? 'bg-cyan-600 text-white' : 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30'}`}>
            🧩 <span className="lang-ar">أداة النادي المدرسي (p=0.04 ص 32)</span><span className="lang-en">School Club Tool (p=0.04)</span>
          </button>
          <button type="button" onClick={() => chooseScenario('button')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${scenarioKey === 'button' ? 'bg-amber-600 text-white' : 'bg-amber-600/20 text-amber-300 border border-amber-500/30'}`}>
            🛒 <span className="lang-ar">زر الدفع مع 200,000 زائر (ص 32)</span><span className="lang-en">200k Visitors Button (p. 36)</span>
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="font-bold text-amber-400"><span className="lang-ar">{scenario.titleAr}</span><span className="lang-en">{scenario.titleEn}</span></div>
            <div className="text-sub text-[11px]"><span className="lang-ar">{scenario.hypAr}</span><span className="lang-en">{scenario.hypEn}</span></div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold shrink-0"><span className="lang-ar">{scenario.badgeAr}</span><span className="lang-en">{scenario.badgeEn}</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
            <div className="flex justify-between items-center font-bold">
              <span className="text-slate-200"><span className="lang-ar">القيمة الاحتمالية المحسوبة (p-value):</span><span className="lang-en">Computed p-value:</span></span>
              <span className="font-mono text-base text-cyan-400 font-black">{pValue.toFixed(3)}</span>
            </div>
            <input aria-label="p-value" type="range" min="0.005" max="0.1" step="0.005" value={pValue} onChange={event => setPValue(Number(event.target.value))} className="w-full accent-cyan-500" />
            <div className="flex justify-between text-[10px] text-sub font-mono">
              <span><span className="lang-ar">0.005 (نادر جداً تحت H0)</span><span className="lang-en">0.005 (Rare under H0)</span></span>
              <span>0.050</span>
              <span><span className="lang-ar">0.100 (شائع بالصدفة)</span><span className="lang-en">0.100 (Common by chance)</span></span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
            <div className="flex justify-between items-center font-bold">
              <span className="text-slate-200"><span className="lang-ar">مستوى الدلالة المحدد مسبقاً (α):</span><span className="lang-en">Preset Significance Level (α):</span></span>
              <span className="font-mono text-base text-amber-400 font-black">{alpha.toFixed(2)} ({alpha === 0.05 ? '5%' : '1%'})</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {[0.05, 0.01].map(value => <button key={value} type="button" onClick={() => chooseAlpha(value)} className={`py-2 px-3 rounded-xl font-bold text-xs transition ${alpha === value ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'}`}>
                <span className="lang-ar">α = {value.toFixed(2)} ({value === 0.05 ? '5% — قياسي' : '1% — صارم'})</span>
                <span className="lang-en">α = {value.toFixed(2)} ({value === 0.05 ? '5% — Standard' : '1% — Strict'})</span>
              </button>)}
            </div>
            <div className="text-[10px] text-sub">
              <span className="lang-ar">💡 جرب التبديل بين <code className="text-amber-300">0.05</code> و <code className="text-amber-300">0.01</code> عندما تكون <code className="text-cyan-300">p = 0.04</code> (نشاط فكر كمهندس ص 32)!</span>
              <span className="lang-en">💡 Switch between <code className="text-amber-300">0.05</code> and <code className="text-amber-300">0.01</code> when <code className="text-cyan-300">p = 0.04</code> (Think as an Engineer p. 36)!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className={`p-4 rounded-2xl bg-slate-900 border-2 space-y-1 ${significant ? 'border-emerald-500' : 'border-amber-500'}`}>
            <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">قرار اختبار الفرضيات (الخطوة 4):</span><span className="lang-en">Step 4 Judgment:</span></span>
            <div className={`text-sm font-black ${significant ? 'text-emerald-400' : 'text-amber-400'}`}>
              <span className="lang-ar">{significant ? '✅ نرفض فرضية العدم H0 (ذو دلالة إحصائية)' : '⏸️ عدم رفض فرضية العدم H0 (غير ذي دلالة)'}</span>
              <span className="lang-en">{significant ? '✅ Reject H0 (Statistically Significant)' : '⏸️ Do Not Reject H0 (Not Significant)'}</span>
            </div>
            <div className="text-[11px] text-slate-300">
              <span className="lang-ar">لأن p-value ({pValue.toFixed(3)}) {significant ? '<' : '≥'} مستوى الدلالة α ({alpha})، {significant ? 'نتبنى الفرضية البديلة H1.' : 'لا يمكن القول بوجود دلالة إحصائية.'}</span>
              <span className="lang-en">Since p-value ({pValue.toFixed(3)}) {significant ? '<' : '≥'} α ({alpha}), {significant ? 'we reject H0 and adopt H1.' : 'the result is not statistically significant.'}</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-rose-500/30 space-y-1">
            <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">مفاضلة خطأ النوع الأول والثاني:</span><span className="lang-en">Type I vs Type II Trade-off:</span></span>
            <div className="text-[11px] text-slate-200">
              {alpha === 0.01 ? <>
                <span className="lang-ar">🔒 <strong>عند خفض α إلى 0.01:</strong> يقل خطر <strong>خطأ النوع الأول</strong> (الإنذار الكاذب)، لكن <strong>يزداد خطر خطأ النوع الثاني</strong> (تفويت تأثير حقيقي) بسبب علاقة المفاضلة!</span>
                <span className="lang-en">🔒 <strong>At α = 0.01:</strong> Lowering α reduces <strong>Type I Error</strong> (false alarm) risk, but increases <strong>Type II Error</strong> (missing a real effect) due to the trade-off relationship!</span>
              </> : <>
                <span className="lang-ar">⚖️ <strong>عند α = 0.05:</strong> توازن قياسي بين <strong>خطأ النوع الأول</strong> (رفض H0 وهي صحيحة) و<strong>خطأ النوع الثاني</strong> (عدم رفض H0 وهي خاطئة).</span>
                <span className="lang-en">⚖️ <strong>At α = 0.05:</strong> Standard balance between <strong>Type I Error</strong> (rejecting a true H0) and <strong>Type II Error</strong> (keeping a false H0).</span>
              </>}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-1">
            <span className="text-[10px] text-sub uppercase font-bold"><span className="lang-ar">التقدير النقطي مقابل فترة الثقة 95%:</span><span className="lang-en">Point vs 95% Confidence Interval:</span></span>
            <div className="text-[11px] text-slate-200"><span className="lang-ar">{scenario.ciAr}</span><span className="lang-en">{scenario.ciEn}</span></div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs leading-relaxed text-slate-200">
          {scenarioKey === 'button' ? <>
            <span className="lang-ar">🚨 <strong>تنبيه الأهمية العملية (ص 30 و 32):</strong> رغم أن النتيجة <strong>{significant ? 'ذات دلالة إحصائية' : 'غير ذات دلالة إحصائية'}</strong> ({pValue.toFixed(3)} {significant ? '<' : '≥'} {alpha}) بسبب ضخامة العينة (200,000 زائر)، فإن زيادة النقر بمقدار <strong>0.05 نقطة مئوية فقط</strong> ضئيلة جداً عملياً، وقد يقرر المتجر عدم تغيير الزر لعدم جدواه الاقتصادية!</span>
            <span className="lang-en">🚨 <strong>Practical Importance Alert (pp. 33 & 36):</strong> Even with the huge 200,000 sample, a tiny <strong>0.05 percentage-point</strong> gain may not be practically important enough to justify changing the checkout button.</span>
          </> : scenarioKey === 'club' && pValue === 0.04 ? <>
            <span className="lang-ar">💡 <strong>ملاحظة نشاط فكر كمهندس (ص 32):</strong> لاحظ أن القيمة <code className="text-cyan-300">p = 0.04</code> تُعد ذات دلالة عند <code className="text-emerald-300">α = 0.05</code> ولكنها <strong>غير ذات دلالة عند <code className="text-amber-300">α = 0.01</code></strong>! وهذا يثبت أن مقارنة p مع α هي دليل للحكم وليست حقيقة مطلقة.</span>
            <span className="lang-en">💡 <strong>Think as an Engineer Insight (p. 36):</strong> Notice that <code className="text-cyan-300">p = 0.04</code> is significant at <code className="text-emerald-300">α = 0.05</code>, but <strong>NOT significant at <code className="text-amber-300">α = 0.01</code></strong>! Comparing p with α is a guide for judgment, not an absolute truth.</span>
          </> : <>
            <span className="lang-ar">📌 <strong>تذكير منهجي (ص 29 - 30):</strong> القيمة الاحتمالية ({pValue.toFixed(3)}) ليست &quot;احتمال صحة فرضية العدم H0&quot;، وصغرها لا يعني بالضرورة أن حجم التأثير كبير؛ راجع دائماً حجم الأثر وفترة الثقة!</span>
            <span className="lang-en">📌 <strong>Textbook Reminder (pp. 32 - 33):</strong> The p-value ({pValue.toFixed(3)}) is NOT the probability that H0 is true, and a small p-value does not mean the effect is large. Always inspect effect size and confidence intervals!</span>
          </>}
        </div>
      </div>
    </div>
  );
}
