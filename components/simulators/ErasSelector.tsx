'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { eraTexts } from '@/data/interactiveData';
import { Lightbulb } from 'lucide-react';

export function ErasSelector() {
  const { lang, playSfx } = useApp();
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const eras = [
    { year: '1940s-1960s', label: { ar: 'الحواسيب الأولى', en: 'First Computers' }, icon: '💡' },
    { year: '1970s-1980s', label: { ar: 'الحواسب الشخصية', en: 'Personal PCs' }, icon: '🖥️' },
    { year: '1990s', label: { ar: 'تسويق الإنترنت', en: 'Web Era' }, icon: '🌐' },
    { year: '2000s', label: { ar: 'الهواتف الذكية', en: 'Smartphones' }, icon: '📱' },
    { year: '2010s Onward', label: { ar: 'السحابة والذكاء', en: 'Cloud & AI' }, icon: '☁️' },
  ];

  const handlePick = (idx: number) => {
    playSfx('click');
    setSelectedIdx(idx);
  };

  const currentEra = eraTexts[selectedIdx];

  return (
    <div className="space-y-4">
      {/* Interactive Buttons Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
        {eras.map((era, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={era.year}
              onClick={() => handlePick(idx)}
              className={`p-3 rounded-2xl theme-subpanel border hover:border-sky-500 text-center space-y-1 transition group cursor-pointer ${
                isSelected ? 'border-sky-500 bg-sky-500/10 font-bold shadow-sm' : ''
              } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className="text-xl block group-hover:scale-110 transition">{era.icon}</span>
              <strong className="block text-slate-900 dark:text-slate-200 text-[11px]">{era.year}</strong>
              <span className="text-[10px] text-sub block">{era.label[lang]}</span>
            </button>
          );
        })}
      </div>

      {/* Era Details Card */}
      <div 
        className="p-5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/60 border border-sky-500/40 text-xs sm:text-sm leading-relaxed text-slate-100 dark:text-slate-200 shadow-md"
        dangerouslySetInnerHTML={{ __html: currentEra[lang] }}
      />

      {/* Vacuum Tubes vs Transistor Deep Dive */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
        <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>
            {lang === 'ar'
              ? 'إضاءة هندسية من كتاب الوزارة (ص 5): الصمامات المفرغة وحاسوب ENIAC'
              : 'Engineering Deep Dive (p. 5): Vacuum Tubes & ENIAC'}
          </span>
        </div>
        <p className="text-sub leading-relaxed">
          {lang === 'ar' ? (
            <>
              الصمام المفرغ (Vacuum Tube) هو لمبة زجاجية كبيرة تُمرر الكهرباء أو تمنعها لتمثيل الصفر (0) والواحد (1). كان حاسوب <strong>ENIAC</strong> يزن حوالي <strong>30 طناً</strong>، ويشغل مساحة غرفة ضخمة كاملة، ويحتوي على أكثر من 18 ألف صمام تستهلك طاقة كهربائية هائلة وتنبعث منها حرارة شديدة وتتعرض للتلف المستمر. وبظهور الترانزستور المصنوع من السيليكون تقلصت الأحجام لمليارات المرات.
            </>
          ) : (
            <>
              The Vacuum Tube was an incandescent glass bulb acting as an electronic switch (0 or 1). The <strong>ENIAC</strong> computer weighed <strong>30 tons</strong>, occupied an entire room, and consumed massive electrical power for 18,000 tubes that constantly burned out. Silicon transistors revolutionized this by microscopic scaling.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
