'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

const samplingModes = {
  stratified: {
    titleAr: 'المعاينة الطبقية (Stratified Sampling): تقسيم الـ 800 طالب حسب الصف الدراسي واختيار 15 طالباً عشوائياً من كل صف',
    titleEn: 'Stratified Sampling: Split 800 students into 4 grade strata and randomly pick 15 from each grade (n = 60)',
    badgeAr: '✅ عينة عادلة وممثلة (بدون تحيز)',
    badgeEn: '✅ Fair Representative Sample (Unbiased)',
    groups: ['15 / 15 (25%)', '15 / 15 (25%)', '15 / 15 (25%)', '15 / 15 (25%)'],
    meanAr: '31.2 دقيقة (دقيق جداً!)',
    meanEn: '31.2 min (Highly Accurate!)',
    verdictAr: '✅ <strong>تحليل هندسي سليم (المعاينة الطبقية Stratified Sampling):</strong> بما أن وقت التنقل أو الدراسة يختلف بين الصفوف، فإن تقسيم المجتمع إلى طبقات واختيار عينة عشوائية بنفس النسبة (25% لكل صف) جعل العينة نموذجاً مصغراً عادلاً للمدرسة كلها (31.2 دقيقة مقابل الحقيقي 31.0 دقيقة)!',
    verdictEn: '✅ <strong>Valid Stratified Sampling:</strong> Because commute/study habits differ by grade, sampling 25% randomly from each grade stratum mirrors the true population composition (31.2 min vs true 31.0 min)!',
  },
  simple: {
    titleAr: 'المعاينة العشوائية البسيطة (Simple Random Sampling): اختيار 60 طالباً بالقرعة العشوائية من قائمة كل المدرسة',
    titleEn: 'Simple Random Sampling: Pick 60 students purely by chance (drawing lots) from the entire school roster',
    badgeAr: '✅ عينة عشوائية غير متحيزة',
    badgeEn: '✅ Unbiased Random Sample',
    groups: ['17 طالباً (28%)', '13 طالباً (22%)', '16 طالباً (27%)', '14 طالباً (23%)'],
    meanAr: '30.4 دقيقة (قريب من الحقيقي)',
    meanEn: '30.4 min (Close to True Mean)',
    verdictAr: '✅ <strong>المعاينة العشوائية البسيطة (Simple Random Sampling):</strong> تم الاختيار بالصدفة البحتة دون تحيز، فجاءت النتيجة قريبة من الواقع (30.4 دقيقة)، لكن نسب الصفوف قد تتفاوت قليلاً بالصدفة مقارنة بالمعاينة الطبقية.',
    verdictEn: '✅ <strong>Simple Random Sampling:</strong> Everyone had an equal chance of selection without bias, yielding a reliable estimate (30.4 min), though exact grade ratios fluctuate slightly by chance.',
  },
  location_bias: {
    titleAr: 'تحيز الوقت/الموقع (Time/Location Bias): سؤال 60 طالباً أمام بوابة المدرسة الساعة 7:00 صباحاً فقط!',
    titleEn: 'Time/Location Bias: Surveying 60 students at the school gate at 7:00 AM only!',
    badgeAr: '🚨 تحيز الوقت/الموقع (عينة مضللة!)',
    badgeEn: '🚨 Time/Location Bias (Skewed Sample!)',
    groups: ['32 طالباً (يسكنون قريباً)', '18 طالباً', '7 طلاب', '3 طلاب فقط!'],
    meanAr: '14.5 دقيقة (خاطئ ومضلل!)',
    meanEn: '14.5 min (Severely Skewed!)',
    verdictAr: '🚨 <strong>تحذير: وقع تحيز الوقت/الموقع (Time/Location Bias)!</strong> الطلاب الذين يصلون مبكراً جداً هم غالباً من يسكنون بجوار المدرسة، بينما استُبعد الطلاب القادمون من مناطق بعيدة؛ فخرجت النتيجة (14.5 دقيقة) واثقة في الحساب لكنها خاطئة تماماً ولا تمثل المدرسة!',
    verdictEn: '🚨 <strong>Time/Location Bias Detected!</strong> Surveying only early arrivals at 7:00 AM systematically excludes long-distance commuters, producing a confident but completely wrong average (14.5 min vs true 31.0 min)!',
  },
  self_bias: {
    titleAr: 'تحيز الاختيار الذاتي (Self-Selection Bias): نشر رابط استطلاع اختياري على الإنترنت ليجيب من يرغب فقط',
    titleEn: 'Self-Selection Bias: Posting an optional online poll link where only interested students respond',
    badgeAr: '⚠️ تحيز الاختيار الذاتي (عينة غير متوازنة!)',
    badgeEn: '⚠️ Self-Selection Bias (Unbalanced!)',
    groups: ['4 طلاب', '6 طلاب', '12 طالباً', '38 طالباً (المشتكون من بُعد المسافة!)'],
    meanAr: '52.8 دقيقة (مبالغ فيه جداً!)',
    meanEn: '52.8 min (Heavily Overestimated!)',
    verdictAr: '⚠️ <strong>تحذير: وقع تحيز الاختيار الذاتي (Self-Selection Bias)!</strong> لم يستجب للرابط الاختياري سوى الطلاب الذين يعانون من مشكلة تنقل طويلة ويريدون الشكوى، بينما غابت أصوات الأغلبية المعتدلة، فارتفع المتوسط خطأً إلى 52.8 دقيقة!',
    verdictEn: '⚠️ <strong>Self-Selection Bias Detected!</strong> Only students with extreme commutes who felt strongly bothered to click the online poll, skewing the estimated commute up to 52.8 minutes!',
  },
} as const;

type SamplingMode = keyof typeof samplingModes;

function renderVerdict(text: string) {
  const [before, emphasized, after] = text.split(/<strong>|<\/strong>/);
  return emphasized === undefined
    ? text
    : <>{before}<strong>{emphasized}</strong>{after}</>;
}

const modeButtons: { mode: SamplingMode; icon: string; ar: string; en: string }[] = [
  { mode: 'stratified', icon: '✅', ar: 'معاينة طبقية عادلة (Stratified)', en: 'Stratified Sampling' },
  { mode: 'simple', icon: '🎲', ar: 'عشوائية بسيطة (Simple Random)', en: 'Simple Random' },
  { mode: 'location_bias', icon: '❌', ar: 'تحيز الوقت/الموقع (أمام المحطة ظهراً)', en: 'Time/Location Bias' },
  { mode: 'self_bias', icon: '⚠️', ar: 'تحيز الاختيار الذاتي (رابط ويب)', en: 'Self-Selection Bias' },
];

export function SamplingBiasSimulator() {
  const { playSfx } = useApp();
  const [mode, setMode] = useState<SamplingMode>('stratified');
  const result = samplingModes[mode];
  const resultStyle = {
    stratified: { text: 'text-emerald-400', border: 'border-emerald-500/30' },
    simple: { text: 'text-cyan-400', border: 'border-cyan-500/30' },
    location_bias: { text: 'text-rose-400', border: 'border-rose-500/30' },
    self_bias: { text: 'text-amber-400', border: 'border-amber-500/30' },
  }[mode];

  const selectMode = (nextMode: SamplingMode) => {
    playSfx('click');
    setMode(nextMode);
  };

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 5-1 (كتاب الوزارة ص 6 - 9)</span>
            <span className="lang-en">Interactive Sampling &amp; Survey Bias Lab</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-users-viewfinder text-emerald-400"></i>
            <span className="lang-ar">محاكي أخذ العينات (العشوائية البسيطة والطبقية) وكشف التحيز</span>
            <span className="lang-en">Population Sampling &amp; Bias Detection Simulator</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {modeButtons.map(button => (
            <button
              key={button.mode}
              type="button"
              onClick={() => selectMode(button.mode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${mode === button.mode ? button.mode === 'stratified' ? 'bg-emerald-600 text-white shadow-md' : button.mode === 'simple' ? 'bg-cyan-600 text-white shadow-md' : button.mode === 'location_bias' ? 'bg-rose-600 text-white shadow-md' : 'bg-amber-600 text-white shadow-md' : button.mode === 'stratified' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : button.mode === 'simple' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : button.mode === 'location_bias' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}`}
            >
              {button.icon}{' '}
              <span className="lang-ar">{button.ar}</span>
              <span className="lang-en">{button.en}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <strong className="text-white">
                <span className="lang-ar">👥 المجتمع الإحصائي الكلي للمدرسة (800 طالب)</span>
                <span className="lang-en">👥 School Population (800 Students)</span>
              </strong>
              <span className="font-mono text-[11px] text-emerald-400">
                <span className="lang-ar">الحقيقة: متوسط التنقل = 25 دقيقة</span>
                <span className="lang-en">True commute mean = 25 minutes</span>
              </span>
            </div>
            <div className="space-y-2 text-[11px]">
              {[
                ['• الصف الأول الثانوي (50% = 400 طالب):', 'Grade 10 (50% = 400 students):', 'متوسط 20 دقيقة', 'Mean 20 minutes'],
                ['• الصف الثاني الثانوي (30% = 240 طالباً):', 'Grade 11 (30% = 240 students):', 'متوسط 25 دقيقة', 'Mean 25 minutes'],
                ['• الصف الثالث الثانوي (20% = 160 طالباً):', 'Grade 12 (20% = 160 students):', 'متوسط 37.5 دقيقة', 'Mean 37.5 minutes'],
              ].map(([ar, en, meanAr, meanEn]) => (
                <div key={ar} className="flex justify-between gap-2">
                  <span><span className="lang-ar">{ar}</span><span className="lang-en">{en}</span></span>
                  <span className="font-mono text-slate-300"><span className="lang-ar">{meanAr}</span><span className="lang-en">{meanEn}</span></span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <strong className={resultStyle.text}>
                <span className="lang-ar">{mode === 'stratified' ? 'المعاينة الطبقية' : mode === 'simple' ? 'المعاينة العشوائية البسيطة' : mode === 'location_bias' ? 'تحيز الوقت/الموقع' : 'تحيز الاختيار الذاتي'}</span>
                <span className="lang-en">{mode === 'stratified' ? 'Stratified Sampling' : mode === 'simple' ? 'Simple Random Sampling' : mode === 'location_bias' ? 'Time/Location Bias' : 'Self-Selection Bias'}</span>
              </strong>
              <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${mode === 'stratified' ? 'bg-emerald-500/20 text-emerald-300' : mode === 'simple' ? 'bg-cyan-500/20 text-cyan-300' : mode === 'location_bias' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'}`}>
                <span className="lang-ar">{result.badgeAr}</span>
                <span className="lang-en">{result.badgeEn}</span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-sub pt-1">
              {['الصف الأول:', 'الصف الثاني:', 'الصف الثالث:', 'طلاب غائبون:'].map((label, index) => (
                <div key={label}>
                  <span className="lang-ar">{label}</span>
                  <span className="lang-en">{['Grade 10:', 'Grade 11:', 'Grade 12:', 'Absent students:'][index]}</span>{' '}
                  <strong className="text-white font-mono">{result.groups[index]}</strong>
                </div>
              ))}
            </div>
            <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-sub"><span className="lang-ar">متوسط العينة المحسوب:</span><span className="lang-en">Calculated sample mean:</span></span>
              <strong className={`text-sm font-black font-mono ${resultStyle.text}`}>
                <span className="lang-ar">{result.meanAr}</span>
                <span className="lang-en">{result.meanEn}</span>
              </strong>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl bg-slate-900 border ${resultStyle.border} text-xs leading-relaxed text-slate-200`}>
          <span className="lang-ar">{renderVerdict(result.verdictAr)}</span>
          <span className="lang-en">{renderVerdict(result.verdictEn)}</span>
        </div>
      </div>
    </div>
  );
}
