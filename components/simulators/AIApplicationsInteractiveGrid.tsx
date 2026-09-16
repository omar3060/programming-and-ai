'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function AIApplicationsInteractiveGrid() {
  const { lang, playSfx } = useApp();
  const [activeTab, setActiveTab] = useState<'health' | 'agri' | 'maint'>('health');
  const [sensitivity, setSensitivity] = useState<number>(85);
  const [humanApproved, setHumanApproved] = useState<boolean>(true);
  const [turbineTemp, setTurbineTemp] = useState<number>(72); // Celsius
  const [pestLevel, setPestLevel] = useState<'low' | 'med' | 'high'>('med');

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/40 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-industry"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">معمل تطبيقات الذكاء الاصطناعي في الطب، الزراعة، والصيانة التنبؤية</span>
              <span className="lang-en">Interactive AI Deployments: Healthcare, Agriculture & Maintenance</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">جرب بنفسك كيف يعمل الذكاء الاصطناعي في القطاعات الحقيقية وكيف يتكامل مع الإشراف البشري</span>
              <span className="lang-en">Test how AI drives real-world industries with mandatory Human-in-the-Loop oversight</span>
            </p>
          </div>
        </div>

        {/* Industry Tabs Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => { playSfx('click'); setActiveTab('health'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'health' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-hospital"></i>
            <span className="lang-ar">الطب والأشعة</span>
            <span className="lang-en">Healthcare</span>
          </button>
          <button
            onClick={() => { playSfx('click'); setActiveTab('agri'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'agri' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-seedling"></i>
            <span className="lang-ar">الزراعة الذكية</span>
            <span className="lang-en">Agriculture</span>
          </button>
          <button
            onClick={() => { playSfx('click'); setActiveTab('maint'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'maint' ? 'bg-amber-600 text-white shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <span className="lang-ar">الصيانة التنبؤية</span>
            <span className="lang-en">Maintenance</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Healthcare X-Ray Diagnostic AI */}
      {activeTab === 'health' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-blue-400 flex items-center gap-1.5">
              <i className="fa-solid fa-notes-medical"></i>
              <span className="lang-ar">تشخيص الأشعة السينية (X-Ray Radiography AI) + الإشراف البشري:</span>
              <span className="lang-en">X-Ray AI Diagnostic Detection + Human Oversight:</span>
            </span>
            <span className="font-mono text-[11px] text-amber-400 font-bold">Sensitivity: {sensitivity}%</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Control Slider */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sub text-[11px] block font-bold">
                  <span className="lang-ar">حساسية الخوارزمية لتبئير التغيرات النسيجية:</span>
                  <span className="lang-en">AI Computer Vision Sensitivity Threshold:</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="99"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Human-in-the-loop Toggle */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">
                    <span className="lang-ar">مبدأ الإشراف البشري (Human-in-the-Loop):</span>
                    <span className="lang-en">Human Doctor Verification:</span>
                  </span>
                  <button
                    onClick={() => { playSfx('click'); setHumanApproved((prev) => !prev); }}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition ${
                      humanApproved ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}
                  >
                    {humanApproved ? (lang === 'ar' ? 'مستوفى ✓' : 'Approved ✓') : (lang === 'ar' ? 'معطل ✗' : 'Bypassed ✗')}
                  </button>
                </div>
                <p className="text-[10px] text-sub">
                  <span className="lang-ar">الذكاء الاصطناعي يرصد النمط، لكن الطبيب البشري يلزم بمراجعة التشخيص النهائي.</span>
                  <span className="lang-en">AI detects scan anomalies, but human doctor holds final verdict responsibility.</span>
                </p>
              </div>
            </div>

            {/* Diagnostic Output Screen */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/40 space-y-2 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-sub font-mono text-[11px]">SCAN ID: #XR-84920</span>
                <span className="text-emerald-400 font-bold font-mono">CONFIDENCE: {sensitivity + 1}%</span>
              </div>
              <div className="text-[11px] space-y-1">
                <div className="text-slate-200 font-bold">
                  <span className="lang-ar">نتيجة فحص الخوارزمية:</span>
                  <span className="lang-en">AI Visual Verdict:</span>
                </div>
                <div className="text-blue-300 font-bold">
                  {sensitivity > 80
                    ? (lang === 'ar' ? '⚠️ تم رصد بؤرة نسيجية غير طبيعية في الرئة اليمنى' : '⚠️ Anomaly Detected in Right Lung Region')
                    : (lang === 'ar' ? '✅ النسيج سليم ضمن حدود الحساسية' : '✅ Scan Normal within Threshold')}
                </div>
              </div>

              <div className={`p-2 rounded text-[11px] font-bold ${humanApproved ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40' : 'bg-rose-950/60 text-rose-300 border border-rose-500/40'}`}>
                {humanApproved
                  ? (lang === 'ar' ? '✅ تم تأكيد التشخيص من استشاري الأشعة وتحديد خطة العلاج.' : '✅ Confirmed by Senior Radiologist with zero legal risk.')
                  : (lang === 'ar' ? '⚠️ تحذير: خطورة قانونية وأخلاقية بسبب غياب المراجعة البشرية!' : '⚠️ Warning: High legal & ethical liability due to missing human review!')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Smart Agriculture Computer Vision */}
      {activeTab === 'agri' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <i className="fa-solid fa-leaf"></i>
              <span className="lang-ar">الرؤية الحاسوبية لاكتشاف الآفات الزراعية والري الذكي:</span>
              <span className="lang-en">Smart Agriculture Crop Disease & Dron Detection:</span>
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <label className="text-sub text-[11px] block font-bold">
                <span className="lang-ar">اختر مستوى الآفة التي التقطتها طائرة الدرون (Drone):</span>
                <span className="lang-en">Select Crop Pest Severity Captured by Drone:</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['low', 'med', 'high'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => { playSfx('click'); setPestLevel(lvl); }}
                    className={`py-1.5 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                      pestLevel === lvl ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-sub leading-relaxed">
                <span className="lang-ar">تقوم طائرات الدرون المزودة بالـ Computer Vision بمسح آلاف الأفدنة ورش المبيدات فقط على النباتات المصابة دون إهدار.</span>
                <span className="lang-en">AI Drones equipped with Computer Vision scan massive acreage, targeting pesticide application strictly to infected crops.</span>
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-2">
              <div className="font-bold text-emerald-400 border-b border-slate-800 pb-1 flex justify-between">
                <span>DRONE CROP SCAN</span>
                <span className="font-mono text-white">FIELD #04</span>
              </div>
              <div className="text-[11px] space-y-1">
                <div><span className="lang-ar">حالة المحصول:</span><span className="lang-en">Crop Status:</span> <strong className="text-white">{pestLevel === 'high' ? 'آفة خطيرة' : pestLevel === 'med' ? 'إصابة متوسطة' : 'محصول سليم'}</strong></div>
                <div><span className="lang-ar">الإجراء الذكي الموصى به:</span><span className="lang-en">AI Action Plan:</span></div>
                <div className="p-2 rounded bg-slate-950 text-emerald-300 font-bold border border-emerald-500/30">
                  {pestLevel === 'high'
                    ? (lang === 'ar' ? '🎯 الرش الموجه لـ 12% من القطاع 4 وزيادة الري بنسبة 15%' : '🎯 Precision Spraying on Sector 4 + 15% Smart Irrigation')
                    : (lang === 'ar' ? '💧 ري متوازن تلقائي وتوفير 40% من المياه والمبيدات' : '💧 Balanced Automated Irrigation saving 40% Water')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Predictive Maintenance */}
      {activeTab === 'maint' && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <i className="fa-solid fa-gears"></i>
              <span className="lang-ar">الصيانة التنبؤية في المصانع (Predictive Maintenance):</span>
              <span className="lang-en">Factory Industrial Predictive Maintenance:</span>
            </span>
            <span className="font-mono text-[11px] text-amber-400 font-bold">{turbineTemp}°C Turbine Temp</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sub text-[11px] block font-bold">
                  <span className="lang-ar">حرارة واهتزاز توربين المصنع (IoT Sensor):</span>
                  <span className="lang-en">Turbine Heat & Vibration Sensor Telemetry:</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="110"
                  value={turbineTemp}
                  onChange={(e) => setTurbineTemp(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
              <p className="text-[11px] text-sub leading-relaxed">
                <span className="lang-ar">بدلاً من الانتظار حتى يتعطل المحرك وتتوقف خطوط الإنتاج، يتنبأ الـ AI بالأعطال قبل وقوعها بـ 48 ساعة!</span>
                <span className="lang-en">Instead of waiting for catastrophic failure, predictive AI analyzes vibrations to alert engineering 48 hours prior.</span>
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 space-y-2">
              <div className="font-bold text-amber-400 border-b border-slate-800 pb-1 flex justify-between">
                <span>IoT PREDICTIVE MODEL</span>
                <span className="font-mono text-slate-300">{turbineTemp > 90 ? 'CRITICAL' : 'NORMAL'}</span>
              </div>
              <div className="text-[11px] space-y-1">
                <div><span className="lang-ar">التنبؤ التلقائي بالأعطال:</span><span className="lang-en">Failure Risk Forecast:</span></div>
                <div className={`p-2 rounded font-bold border ${turbineTemp > 90 ? 'bg-rose-950 text-rose-300 border-rose-500' : 'bg-emerald-950 text-emerald-300 border-emerald-500'}`}>
                  {turbineTemp > 90
                    ? (lang === 'ar' ? '⚠️ خطورة تآكل المحامل! يوصى باستبدال الجزء خلال 24 ساعة لتفادي عطل بقيمة $50,000' : '⚠️ High Bearing Wear Risk! Replace within 24h to avoid $50k breakdown')
                    : (lang === 'ar' ? '✅ التوربين يعمل بكفاءة عالية، موعد الصيانة الدورية بعد 140 ساعة' : '✅ Turbine Operating Nominally. Next routine check in 140h')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
