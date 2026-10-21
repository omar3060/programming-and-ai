'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type RegressionScenario = 'icecream' | 'canteen';

export function RegressionStudioSimulator() {
  const { playSfx } = useApp();
  const [scenario, setScenario] = useState<RegressionScenario>('icecream');
  const [outlier, setOutlier] = useState(false);
  const [temperature, setTemperature] = useState(30);
  const prediction = scenario === 'icecream' ? 12 * temperature - 100 : 10 * temperature + 0.25 * 400 - 80;
  const x = 30 + ((temperature - 18) / 22) * 240;
  const y = 115 - ((temperature - 18) / 22) * 85;

  const chooseScenario = (value: RegressionScenario) => {
    playSfx('click');
    setScenario(value);
  };

  const toggleOutlier = () => {
    playSfx('click');
    setOutlier(current => !current);
  };

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 6-2 (كتاب الوزارة ص 35 - 40)</span>
            <span className="lang-en">Interactive Regression & Evaluation Studio</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-sliders text-cyan-400"></i>
            <span className="lang-ar">مختبر معادلة الانحدار والمربعات الصغرى ومقارنة حساسية RMSE مقابل MAE</span>
            <span className="lang-en">Live Regression Line, Outlier Sensitivity (RMSE vs MAE) & Confounder Lab</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => chooseScenario('icecream')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${scenario === 'icecream' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            🍦 <span className="lang-ar">مبيعات الآيس كريم والحرارة (بسيط ص 35)</span><span className="lang-en">Ice Cream & Temp (Simple)</span>
          </button>
          <button type="button" onClick={() => chooseScenario('canteen')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${scenario === 'canteen' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            🥤 <span className="lang-ar">مقصف المدرسة (متعدد ص 39)</span><span className="lang-en">School Canteen (Multiple)</span>
          </button>
          <button type="button" onClick={toggleOutlier} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${outlier ? 'bg-rose-600 text-white' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`}>
            ⚡ <span className="lang-ar">إدخال قيمة متطرفة شاذة (Outlier): {outlier ? 'مفعّل 🔥' : 'معطل'}</span>
            <span className="lang-en">Inject Huge Outlier: {outlier ? 'ON 🔥' : 'OFF'}</span>
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
            <div className="flex justify-between items-center gap-2">
              <strong className="text-cyan-400"><span className="lang-ar">معادلة النموذج (Model Equation):</span><span className="lang-en">Fitted Regression Model:</span></strong>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                {scenario === 'icecream' ? <><span className="lang-ar">y = 12x - 100 (بسيط)</span><span className="lang-en">y = 12x - 100 (Simple)</span></> : <><span className="lang-ar">y = 10x₁ + 0.25x₂ - 80 (متعدد)</span><span className="lang-en">y = 10x₁ + 0.25x₂ - 80 (Multiple)</span></>}
              </span>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between font-bold gap-2">
                <span className="text-slate-300"><span className="lang-ar">أدخل درجة الحرارة المتوقعة غداً (x):</span><span className="lang-en">Forecast Temperature Tomorrow (x):</span></span>
                <span className="font-mono text-amber-400 text-sm">{temperature}°C</span>
              </div>
              <input aria-label="Forecast temperature" type="range" min="18" max="40" step="1" value={temperature} onChange={event => setTemperature(Number(event.target.value))} className="w-full accent-cyan-500" />
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/30 flex items-center justify-between gap-2">
              <span className="text-sub"><span className="lang-ar">التنبؤ بمبيعات الغد (Response y):</span><span className="lang-en">Predicted Sales (Response y):</span></span>
              <strong className="text-base font-black text-emerald-400 font-mono"><span className="lang-ar">{Math.round(prediction)} وحدة مبيعات</span><span className="lang-en">{Math.round(prediction)} units</span></strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-sub mb-1 gap-2">
              <span>📈 <strong className="text-white"><span className="lang-ar">تمثيل خط الانحدار والمتبقيات (Residuals)</span><span className="lang-en">Regression Line & Residuals Plot</span></strong></span>
              <span className="font-mono text-emerald-400"><span className="lang-ar">ملاءمة المربعات الصغرى</span><span className="lang-en">Least-Squares Fit</span></span>
            </div>
            <div className="w-full h-36 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 300 130" className="w-full h-full" role="img" aria-label="Regression line scatter plot">
                <line x1="25" y1="115" x2="285" y2="115" stroke="#334155" strokeWidth="1.5" />
                <line x1="25" y1="10" x2="25" y2="115" stroke="#334155" strokeWidth="1.5" />
                <line x1="30" y1="112" x2="275" y2="28" stroke="#10b981" strokeWidth="2.5" />
                <circle cx="55" cy="100" r="3.5" fill="#38bdf8" />
                <circle cx="90" cy="95" r="3.5" fill="#38bdf8" />
                <circle cx="125" cy="76" r="3.5" fill="#38bdf8" />
                <circle cx="160" cy="72" r="3.5" fill="#38bdf8" />
                <circle cx="215" cy="46" r="3.5" fill="#38bdf8" />
                <circle cx="255" cy="36" r="3.5" fill="#38bdf8" />
                {outlier && <>
                  <circle cx="190" cy="18" r="6" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
                  <line x1="190" y1="18" x2="190" y2="68" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,2" />
                  <text x="145" y="15" fill="#fb7185" fontSize="9" fontWeight="bold"><tspan className="lang-ar">قيمة متطرفة (متبقي² كبير!)</tspan><tspan className="lang-en">Outlier (Residual² huge!)</tspan></text>
                </>}
                <circle cx={x} cy={y} r="5.5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30">
            <span className="text-[11px] text-sub block"><span className="lang-ar">معامل التحديد (R²)</span><span className="lang-en">R² (Explained Variability)</span></span>
            <strong className="text-2xl font-black text-emerald-400 font-mono">{outlier ? '0.64' : '0.91'}</strong>
            <span className="text-[10px] text-slate-400 block mt-1"><span className="lang-ar">مقياس 0 إلى 1 (الأقرب لـ 1 أفضل)</span><span className="lang-en">0–1 Scale (Closer to 1 is better)</span></span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30">
            <span className="text-[11px] text-sub block"><span className="lang-ar">الجذر التربيعي لمتوسط مربع الخطأ (RMSE)</span><span className="lang-en">RMSE (Weights Big Errors Heavily)</span></span>
            <strong className="text-2xl font-black text-cyan-400 font-mono">{outlier ? '48.6' : '14.2'}</strong>
            <span className="text-[10px] text-slate-400 block mt-1"><span className="lang-ar">بنفس وحدات المبيعات (حساس للشواذ)</span><span className="lang-en">Same units as y (sensitive to outliers)</span></span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30">
            <span className="text-[11px] text-sub block"><span className="lang-ar">متوسط الخطأ المطلق (MAE)</span><span className="lang-en">MAE (Less Swayed by Outliers)</span></span>
            <strong className="text-2xl font-black text-purple-400 font-mono">{outlier ? '19.4' : '11.5'}</strong>
            <span className="text-[10px] text-slate-400 block mt-1"><span className="lang-ar">متوسط الفروق المطلقة (أكثر استقراراً)</span><span className="lang-en">Mean absolute error (more robust)</span></span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-200">
          {outlier ? <>
            <span className="lang-ar">⚡ <strong>تحليل أثر القيمة المتطرفة الشاذة (كتاب الوزارة ص 37 / p. 41):</strong><br />عند إدخال قيمة شاذة كبيرة، قفز مؤشر <strong>RMSE من 14.2 إلى 48.6</strong> لأنه يربّع الفروق فيعطي وزناً أكبر للأخطاء الكبيرة! بينما ارتفع <strong>MAE باعتدال (من 11.5 إلى 19.4)</strong> لأنه يحسب متوسط الفروق المطلقة فهو أقل تأثراً بالقيم المتطرفة.</span>
            <span className="lang-en">⚡ <strong>Outlier Impact Analysis (Textbook p. 41):</strong><br />With a huge outlier, <strong>RMSE jumped sharply from 14.2 to 48.6</strong> because squaring residuals weights large misses heavily! Meanwhile, <strong>MAE rose modestly (11.5 to 19.4)</strong> because it averages absolute errors and is less swayed by outliers.</span>
          </> : scenario === 'icecream' ? <>
            <span className="lang-ar">🍦 <strong>تحذير الارتباط مقابل السببية (ص 37 و 40):</strong> رغم أن <code className="text-emerald-300">R² = 0.91</code> مرتفع جداً بين مبيعات الآيس كريم وحوادث السباحة، فإن الآيس كريم لا يسبب الغرق! <strong>العامل المربك الخفي (Confounder)</strong> هو ارتفاع درجة الحرارة في الصيف الذي يقود كليهما.</span>
            <span className="lang-en">🍦 <strong>Correlation vs. Causation Warning (pp. 42 & 45):</strong> Even with a high <code className="text-emerald-300">R² = 0.91</code>, a fitting line is only correlation, not proof of causation. Summer heat is the hidden <strong>confounder</strong> driving both ice cream sales and swimming accidents.</span>
          </> : <>
            <span className="lang-ar">🥤 <strong>نموذج الانحدار المتعدد لمقصف المدرسة (ص 36 و 39):</strong> يدمج عدة متغيرات تفسيرية (درجة الحرارة <code className="text-cyan-300">x₁</code> + عدد الطلاب الحاضرين <code className="text-cyan-300">x₂</code>). تذكر: لا تضف متغيرات غير ضرورية حتى لا يقع النموذج في الإفراط في الملاءمة (Overfitting)!</span>
            <span className="lang-en">🥤 <strong>Multiple Regression for School Canteen (pp. 41 & 44):</strong> Combines multiple explanatory variables (temperature <code className="text-cyan-300">x₁</code> + student attendance <code className="text-cyan-300">x₂</code>). Remember: only include meaningful variables and evaluate R², RMSE, and MAE together!</span>
          </>}
        </div>
      </div>
    </div>
  );
}
