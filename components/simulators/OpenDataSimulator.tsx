'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

const providers = {
  worldbank: {
    endpoint: 'https://api.worldbank.org/v2/country/EGY/indicator/IT.NET.USER.ZS?format=json',
    purposeTitleAr: '🌍 بيانات البنك الدولي المفتوحة (World Bank Open Data):',
    purposeTextAr: ' أنسب مصدر للمقارنات الدولية في الاقتصاد (GDP) والسكان والتعليم ونسب استخدام الإنترنت حسب الدولة والسنة.',
    purposeTitleEn: '🌍 World Bank Open Data:',
    purposeTextEn: ' Best provider for international comparisons of economy (GDP), population, education, and Internet access by country and year.',
    citation: 'World Bank Open Data, "Individuals using the Internet (% of population) - Egypt", acquired 2026-10-21, https://data.worldbank.org/indicator/IT.NET.USER.ZS',
    data: {
      provider: 'World Bank Open Data',
      indicator: 'IT.NET.USER.ZS (Internet Users %)',
      country: 'Egypt, Arab Rep. (EGY)',
      data: [{ year: 2023, value: 72.2 }, { year: 2024, value: 75.8 }, { year: 2025, value: 79.4 }],
    },
  },
  undata: {
    endpoint: 'https://data.un.org/ws/rest/data/UNSD,DF_UNData_Pop/EGY?format=json',
    purposeTitleAr: '🇺🇳 بيانات الأمم المتحدة (UN Data):',
    purposeTextAr: ' تنشرها الأمم المتحدة ووكالاتها المتخصصة لتحليل القضايا العالمية مثل السكان والتنمية المستدامة والبيئة.',
    purposeTitleEn: '🇺🇳 UN Data:',
    purposeTextEn: ' International statistics published by the United Nations and its agencies for global population, development, and environment analysis.',
    citation: 'UN Data (United Nations), "World Population & Sustainable Development Indicators", acquired 2026-10-21, https://data.un.org/',
    data: {
      provider: 'UN Data (United Nations)',
      series: 'Population & Environment',
      country: 'Egypt',
      records: [{ metric: 'Renewable Energy Share (%)', year: 2025, value: 14.8 }, { metric: 'Urban Population (%)', year: 2025, value: 43.1 }],
    },
  },
  kaggle: {
    endpoint: 'https://www.kaggle.com/api/v1/datasets/download/ml-housing-prices-dataset',
    purposeTitleAr: '🏆 منصة كاجل (Kaggle):',
    purposeTextAr: ' منصة مسابقات تحليل البيانات؛ تُتاح فيها مجموعات بيانات في مجالات متنوعة لاكتساب البيانات لدراسة وبحوث التعلّم الآلي (يجب فحص جودة وترخيص كل مجموعة).',
    purposeTitleEn: '🏆 Kaggle:',
    purposeTextEn: " Platform running data analysis competitions with public datasets across fields—ideal for machine learning study and research (verify each dataset's license).",
    citation: 'Kaggle Public Datasets, "Housing Prices Competition Dataset for ML Study", acquired 2026-10-21, https://www.kaggle.com/datasets',
    data: {
      platform: 'Kaggle',
      use_case: 'Machine Learning Study & Regression',
      license: 'CC BY-SA 4.0 (Check Terms of Use)',
      sample_features: [{ area_sqm: 140, rooms: 3, dist_metro_m: 350, price_egp: 2850000 }, { area_sqm: 185, rooms: 4, dist_metro_m: 150, price_egp: 3900000 }],
    },
  },
} as const;

type ProviderId = keyof typeof providers;

const providerButtons: { id: ProviderId; icon: string; ar: string; en: string }[] = [
  { id: 'worldbank', icon: '🌍', ar: 'World Bank (الإنترنت في مصر والـ GDP)', en: 'World Bank API' },
  { id: 'undata', icon: '🇺🇳', ar: 'UN Data (السكان والبيئة)', en: 'UN Data API' },
  { id: 'kaggle', icon: '🏆', ar: 'Kaggle (بيانات تعلّم آلي)', en: 'Kaggle Dataset' },
];

export function OpenDataSimulator() {
  const { playSfx } = useApp();
  const [providerId, setProviderId] = useState<ProviderId>('worldbank');
  const provider = providers[providerId];

  const selectProvider = (id: ProviderId) => {
    playSfx('click');
    setProviderId(id);
  };

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-teal-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 5-3 (كتاب الوزارة ص 21 - 24)</span>
            <span className="lang-en">Interactive Open Data API &amp; Citation Builder</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-cloud-arrow-down text-teal-400"></i>
            <span className="lang-ar">محاكي البيانات المفتوحة وواجهة برمجة التطبيقات (API) والإشارة للمصدر</span>
            <span className="lang-en">Open Data API &amp; Source Citation Simulator</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {providerButtons.map(button => (
            <button
              key={button.id}
              type="button"
              onClick={() => selectProvider(button.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${providerId === button.id ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}
            >
              {button.icon}{' '}
              <span className="lang-ar">{button.ar}</span>
              <span className="lang-en">{button.en}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <strong className="text-cyan-400 flex items-center gap-1.5">
                <i className="fa-solid fa-paper-plane"></i>
                <span className="lang-ar">طلب العميل ونقطة النهاية (API Endpoint Request):</span>
                <span className="lang-en">Client Request &amp; API Endpoint:</span>
              </strong>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">GET JSON</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-amber-300 break-all">
              {provider.endpoint}
            </div>
            <p className="text-sub leading-relaxed">
              <span className="lang-ar"><strong>{provider.purposeTitleAr}</strong>{provider.purposeTextAr}</span>
              <span className="lang-en"><strong>{provider.purposeTitleEn}</strong>{provider.purposeTextEn}</span>
            </p>
            <div className="p-3 rounded-lg bg-slate-950 border border-amber-500/30 space-y-1">
              <strong className="text-amber-400 block text-[11px]">
                📜 <span className="lang-ar">التوثيق القياسي للمصدر (Source Citation):</span>
                <span className="lang-en">Required Source Citation Line:</span>
              </strong>
              <div className="font-mono text-[11px] text-slate-200 break-words">{provider.citation}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <strong className="text-emerald-400 flex items-center gap-1.5">
                <i className="fa-solid fa-server"></i>
                <span className="lang-ar">استجابة الخادم بصيغة JSON (Server Response):</span>
                <span className="lang-en">Server JSON Response (Name/Value Pairs):</span>
              </strong>
              <span className="font-mono text-[10px] text-slate-400">200 OK • application/json</span>
            </div>
            <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed max-h-56">
              {JSON.stringify(provider.data, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
