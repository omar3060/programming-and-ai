'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { ringData } from '@/data/interactiveData';
import { Layers } from 'lucide-react';

export function AIConcentricRings() {
  const { lang, playSfx } = useApp();
  const [selectedRing, setSelectedRing] = useState<string>('ai');

  const rings = [
    { key: 'ai', name: { ar: 'الذكاء الاصطناعي (AI)', en: 'AI Domain' }, color: 'bg-blue-500/15 border-blue-500 text-blue-500' },
    { key: 'ml', name: { ar: 'التعلم الآلي (ML)', en: 'Machine Learning' }, color: 'bg-purple-500/15 border-purple-500 text-purple-500' },
    { key: 'dl', name: { ar: 'التعلم العميق (DL)', en: 'Deep Learning' }, color: 'bg-emerald-500/15 border-emerald-500 text-emerald-500' },
    { key: 'genai', name: { ar: 'الذكاء التوليدي (GenAI)', en: 'Generative AI' }, color: 'bg-amber-500/15 border-amber-500 text-amber-500' },
  ];

  const handlePick = (key: string) => {
    playSfx('click');
    setSelectedRing(key);
  };

  const currentInfo = ringData[selectedRing];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-xs text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4" />
          <span>
            {lang === 'ar'
              ? 'المخطط التفاعلي للدوائر المتداخلة (اضغط على المفاهيم):'
              : 'Interactive Concentric Hierarchy Rings (Click to inspect):'}
          </span>
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        {rings.map((r) => {
          const isSelected = selectedRing === r.key;
          return (
            <button
              key={r.key}
              onClick={() => handlePick(r.key)}
              className={`p-3 rounded-2xl border text-center font-bold transition cursor-pointer ${r.color} ${
                isSelected ? 'ring-2 ring-sky-500 font-black shadow-md' : 'opacity-80 hover:opacity-100'
              }`}
            >
              {r.name[lang]}
            </button>
          );
        })}
      </div>

      <div
        className="p-5 rounded-2xl theme-subpanel border text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-200 shadow-md"
        dangerouslySetInnerHTML={{ __html: currentInfo[lang] }}
      />
    </div>
  );
}
