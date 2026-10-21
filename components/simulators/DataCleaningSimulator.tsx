'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type CleaningStep = 'format' | 'outlier' | 'missing' | 'dedup';

interface CleaningRow {
  id: string;
  date: string;
  gender: string;
  hours: string | number;
  numericHours: number | null;
  statusAr: string;
  statusEn: string;
}

const steps: { id: CleaningStep; icon: string; ar: string; en: string; accent: string }[] = [
  { id: 'format', icon: '📅', ar: '1. توحيد التاريخ والأرقام', en: '1. Unify Formats', accent: 'cyan' },
  { id: 'outlier', icon: '🚨', ar: '2. معالجة الشاذة (9999)', en: '2. Fix Outlier (9999)', accent: 'rose' },
  { id: 'missing', icon: '🧩', ar: '3. تعويض المفقود (Impute)', en: '3. Impute Missing', accent: 'emerald' },
  { id: 'dedup', icon: '👯', ar: '4. حذف التكرار + تحجيم 0-1', en: '4. Deduplicate & Scale', accent: 'purple' },
];

const emptySteps: Record<CleaningStep, boolean> = {
  format: false,
  outlier: false,
  missing: false,
  dedup: false,
};

export function DataCleaningSimulator() {
  const { playSfx } = useApp();
  const [cleanSteps, setCleanSteps] = useState(emptySteps);

  const toggleStep = (step: CleaningStep) => {
    playSfx('click');
    setCleanSteps(current => ({ ...current, [step]: !current[step] }));
  };

  const reset = () => {
    playSfx('click');
    setCleanSteps(emptySteps);
  };

  const rows: CleaningRow[] = [
    {
      id: 'S-101',
      date: cleanSteps.format ? '2026-04-01' : '2026/4/1',
      gender: cleanSteps.format ? 'Male' : 'M',
      hours: cleanSteps.format ? 2.0 : '"2.0" (نص)',
      numericHours: 2.0,
      statusAr: cleanSteps.format ? '✅ صيغة موحدة ورقمية' : '⚠️ تاريخ غير موحد + نص رقمي',
      statusEn: cleanSteps.format ? '✅ Unified & Numeric' : '⚠️ Mixed Date & String Number',
    },
    {
      id: 'S-102',
      date: cleanSteps.format ? '2026-04-01' : '01 Apr 2026',
      gender: 'Female',
      hours: cleanSteps.missing ? 4.0 : 'N/A (فارغ)',
      numericHours: cleanSteps.missing ? 4.0 : null,
      statusAr: cleanSteps.missing ? '✅ تم التعويض بالوسيط (4.0)' : '🚨 قيمة مفقودة (Missing Value)',
      statusEn: cleanSteps.missing ? '✅ Imputed with Median (4.0)' : '🚨 Missing Value (Blank)',
    },
    {
      id: 'S-103',
      date: '2026-04-01',
      gender: cleanSteps.format ? 'Female' : 'F',
      hours: cleanSteps.outlier ? 6.0 : 9999,
      numericHours: cleanSteps.outlier ? 6.0 : 9999,
      statusAr: cleanSteps.outlier ? '✅ تم تصحيح خطأ الإدخال (6.0)' : '🚨 قيمة شاذة غير طبيعية (9999 ساعة!)',
      statusEn: cleanSteps.outlier ? '✅ Fixed Input Error (6.0)' : '🚨 Abnormal Outlier (9999 hrs!)',
    },
    {
      id: 'S-104',
      date: '2026-04-01',
      gender: 'Male',
      hours: 4.0,
      numericHours: 4.0,
      statusAr: '✅ سجل سليم',
      statusEn: '✅ Valid Record',
    },
  ];

  if (!cleanSteps.dedup) {
    rows.push({
      id: 'S-104 (مكرر)',
      date: '2026-04-01',
      gender: 'Male',
      hours: 4.0,
      numericHours: 4.0,
      statusAr: '🚨 سجل مكرر لنفس الطالب واليوم!',
      statusEn: '🚨 Duplicate Record!',
    });
  }

  const validValues = rows.flatMap(row => row.numericHours === null ? [] : [row.numericHours]);
  const minValue = Math.min(...validValues);
  const maxValue = Math.max(...validValues);
  const mean = (validValues.reduce((sum, value) => sum + value, 0) / validValues.length).toFixed(1);
  const allClean = Object.values(cleanSteps).every(Boolean);

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 5-2 (نشاط استبيان وقت الشاشة ص 17)</span>
            <span className="lang-en">Interactive Data Cleaning &amp; Transformation Lab (p. 18)</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-sliders text-cyan-400"></i>
            <span className="lang-ar">مختبر تنظيف جدول بيانات وقت الشاشة وتحجيم Min-Max</span>
            <span className="lang-en">Live Messy Dataset Cleaner &amp; Normalization Pipeline</span>
          </h3>
        </div>
        <button type="button" onClick={reset} className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition">
          <i className="fa-solid fa-rotate-left"></i>{' '}
          <span className="lang-ar">إعادة الجدول الخام الفوضوي</span>
          <span className="lang-en">Reset Raw Messy Table</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-bold">
        {steps.map(step => {
          const fixed = cleanSteps[step.id];
          const activeStyle = {
            format: 'bg-emerald-950/60 border-2 border-emerald-500',
            outlier: 'bg-emerald-950/60 border-2 border-emerald-500',
            missing: 'bg-emerald-950/60 border-2 border-emerald-500',
            dedup: 'bg-emerald-950/60 border-2 border-emerald-500',
          }[step.id];

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => toggleStep(step.id)}
              className={`p-3 rounded-xl transition flex items-center justify-between gap-2 ${fixed ? `${activeStyle} text-white` : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-cyan-500'}`}
            >
              <span>{step.icon}{' '}
                <span className="lang-ar">{step.ar}</span>
                <span className="lang-en">{step.en}</span>
              </span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${fixed ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                <span className="lang-ar">{fixed ? 'تم الإصلاح ✅' : 'خام'}</span>
                <span className="lang-en">{fixed ? 'Fixed ✅' : 'Raw'}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-xs min-w-[700px] border-collapse">
            <thead className="bg-slate-900 text-slate-200 border-b border-slate-800 font-bold">
              <tr>
                <th className="p-2.5 text-start"><span className="lang-ar">رقم الطالب</span><span className="lang-en">Student ID</span></th>
                <th className="p-2.5 text-start"><span className="lang-ar">التاريخ (Date)</span><span className="lang-en">Date</span></th>
                <th className="p-2.5 text-start"><span className="lang-ar">النوع (Gender)</span><span className="lang-en">Gender</span></th>
                <th className="p-2.5 text-start"><span className="lang-ar">وقت الشاشة (ساعة)</span><span className="lang-en">Screen Time (hrs)</span></th>
                <th className="p-2.5 text-start"><span className="lang-ar">تطبيع 0 - 1</span><span className="lang-en">Normalized 0 - 1</span></th>
                <th className="p-2.5 text-start"><span className="lang-ar">حالة التنظيف</span><span className="lang-en">Cleaning Status</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
              {rows.map(row => {
                const hasError = row.statusAr.includes('🚨') || row.statusAr.includes('⚠️');
                const normalized = cleanSteps.dedup && row.numericHours !== null && maxValue > minValue
                  ? ((row.numericHours - minValue) / (maxValue - minValue)).toFixed(2)
                  : '—';

                return (
                  <tr key={row.id} className={hasError ? 'bg-rose-950/20' : ''}>
                    <td className="p-2.5 font-bold text-white">{row.id}</td>
                    <td className="p-2.5 text-cyan-300">{row.date}</td>
                    <td className="p-2.5 text-slate-300">{row.gender}</td>
                    <td className={`p-2.5 font-bold ${row.numericHours === 9999 ? 'text-rose-400' : 'text-emerald-300'}`}>{row.hours}</td>
                    <td className="p-2.5 text-emerald-400 font-bold">{normalized}</td>
                    <td className={`p-2.5 font-sans text-[11px] ${hasError ? 'text-amber-300' : 'text-emerald-400'}`}>
                      <span className="lang-ar">{row.statusAr}</span>
                      <span className="lang-en">{row.statusEn}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${allClean ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' : 'bg-amber-950/40 border-amber-500/40 text-amber-200'}`}>
          {allClean ? (
            <>
              <span className="lang-ar">✅ <strong>البيانات الآن نظيفة ومحوّلة وجاهزة للتحليل!</strong> المتوسط الحقيقي لوقت الشاشة هو <strong>{mean} ساعة/يوم</strong>، وتم تحجيم القيم (Normalization) بين <code>0.00</code> (أقل قيمة 2.0 س) و <code>1.00</code> (أعلى قيمة 6.0 س).</span>
              <span className="lang-en">✅ <strong>Dataset Cleaned &amp; Transformed!</strong> True mean screen time is <strong>{mean} hrs/day</strong>, and values are normalized to the <code>0.00 – 1.00</code> scale.</span>
            </>
          ) : (
            <>
              <span className="lang-ar">⚠️ <strong>تحذير (Garbage In, Garbage Out):</strong> المتوسط المحسوب حالياً هو <strong className="text-rose-400">{mean} ساعة/يوم</strong> (مضلل تماماً بسبب القيمة الشاذة 9999 أو السجلات المكررة والناقصة). فعّل خطوات التنظيف الأربع أعلاه!</span>
              <span className="lang-en">⚠️ <strong>Warning (Garbage In, Garbage Out):</strong> Current calculated average is <strong className="text-rose-400">{mean} hrs/day</strong> (severely distorted!). Click the 4 pipeline buttons above to clean and transform the table.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
