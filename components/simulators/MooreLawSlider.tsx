'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { mooreTable } from '@/data/interactiveData';
import { Cpu, AlertTriangle, Zap } from 'lucide-react';

export function MooreLawSlider() {
  const { lang, playSfx } = useApp();
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    playSfx('click');
    setSliderIndex(parseInt(e.target.value, 10));
  };

  const currentItem = mooreTable[sliderIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
      <div className="space-y-2 text-sub">
        <p>
          <strong className="text-slate-900 dark:text-white block font-bold">
            {lang === 'ar' ? '📌 تعريف قانون مور (Moore\'s Law):' : '📌 Moore\'s Law Definition:'}
          </strong>
          {lang === 'ar' ? (
            <>
              هو ملاحظة تجريبية صاغها &quot;جوردون مور&quot; (أحد مؤسسي إنتل) عام 1965 تفيد بأن: <em>&quot;عدد الترانزستورات على شريحة الدائرة المتكاملة يتضاعف كل عامين تقريباً مع انخفاض التكلفة وزيادة السرعة&quot;</em>. هو ليس قانوناً فيزيائياً ثابتاً بل استقراء صناعي واقتصادي.
            </>
          ) : (
            <>
              An empirical observation formulated by Gordon Moore (Intel co-founder) stating: <em>&quot;The number of transistors on a microchip doubles roughly every two years while cost halves and processing power surges.&quot;</em>
            </>
          )}
        </p>

        <p>
          <strong className="text-rose-500 dark:text-rose-400 block font-bold flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? '⚠️ التحديات والحدود الفيزيائية:' : '⚠️ Physical Limitations:'}</span>
          </strong>
          {lang === 'ar'
            ? 'عندما اقتربت أحجام بوابات الترانزستور من مقياس النانومتر (أبعاد الذرات)، ظهرت ظاهرتان خطيرتان:'
            : 'At nanometer thresholds approaching atomic limits, two quantum hurdles emerged:'}
        </p>
        <ul className="space-y-1 list-disc rtl:pr-4 ltr:pl-4">
          <li>
            <strong>{lang === 'ar' ? 'تيار التسرب (Leakage Current):' : 'Leakage Current:'}</strong>{' '}
            {lang === 'ar' ? 'تسرب الشحنات الكهربائية حتى في وضع إيقاف التشغيل مما يولد حرارة هائلة.' : 'Parasitic charge leakage even in off-state generating heat.'}
          </li>
          <li>
            <strong>{lang === 'ar' ? 'النفق الكمومي (Quantum Tunneling):' : 'Quantum Tunneling:'}</strong>{' '}
            {lang === 'ar' ? 'قفز الإلكترونات عشوائياً عبر الحواجز الذرية فائقة الرقة مما يفقد الترانزستور قدرته على التحكم.' : 'Electrons tunneling across ultrathin gate barriers disrupting control.'}
          </li>
        </ul>
      </div>

      {/* Interactive Transistor Scaling Simulator */}
      <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'محاكي تضاعف الترانزستورات عبر التاريخ:' : 'Transistor Density Timeline:'}</span>
          </span>
          <span className="font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 font-bold">
            {currentItem.y}
          </span>
        </div>

        <input 
          type="range" 
          min="0" 
          max="5" 
          value={sliderIndex} 
          onChange={handleSlide}
          className="w-full accent-sky-500 cursor-pointer" 
        />

        <div className="p-3 rounded-xl bg-slate-900 border text-xs space-y-1 text-slate-200">
          <div className="text-sub text-[11px]">
            <span>{lang === 'ar' ? 'المعالج النموذج:' : 'Chip Sample:'}</span>{' '}
            <span className="font-bold text-white">{currentItem.c}</span>
          </div>
          <div className="text-sub text-[11px]">
            <span>{lang === 'ar' ? 'عدد الترانزستورات:' : 'Transistors:'}</span>{' '}
            <span className="font-mono text-emerald-400 font-bold">{currentItem.t}</span>
          </div>
        </div>

        <div className="text-[11px] text-sub space-y-1">
          <strong className="text-slate-900 dark:text-white block font-bold flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" />
            <span>{lang === 'ar' ? '💡 الحلول الهندسية للالتفاف على حدود مور:' : '💡 Engineering Solutions:'}</span>
          </strong>
          <p>
            {lang === 'ar'
              ? 'الاتجاه نحو المعالجات متعددة الأنوية (Multi-core)، والمعالجة المتوازية، وتسريع الذكاء الاصطناعي (NPUs/GPUs)، والحوسبة الكمومية.'
              : 'Shift to Multi-core architectures, specialized AI accelerators (NPUs/GPUs), and Quantum computing.'}
          </p>
        </div>
      </div>
    </div>
  );
}
