'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Atom, Binary, RotateCw } from 'lucide-react';

export function QubitWidget() {
  const { lang, playSfx } = useApp();
  const [bitVal, setBitVal] = useState<number>(0);
  const [qubitText, setQubitText] = useState<string>('α|0⟩ + β|1⟩');

  const toggleBit = () => {
    playSfx('click');
    setBitVal(prev => (prev === 0 ? 1 : 0));
  };

  const spinQubit = () => {
    playSfx('click');
    setQubitText('α|0⟩ + β|1⟩');
    setTimeout(() => {
      setQubitText(lang === 'ar' ? '0 و 1 معاً (تراكب كمي)' : '0 & 1 at once (Superposition)');
    }, 400);
  };

  return (
    <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
      <div className="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 text-xs">
        <Atom className="w-4 h-4 text-sky-500" />
        <span>
          {lang === 'ar'
            ? 'تجرية تفاعلية: البت الكلاسيكي (Bit) vs الكيوبت الكمي (Qubit)'
            : 'Interactive Comparison: Classical Bit vs Quantum Qubit'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {/* Classical Bit */}
        <div className="p-3.5 rounded-xl theme-panel border space-y-2 text-center">
          <div className="font-bold text-sub flex items-center justify-center gap-1">
            <Binary className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'البت التقليدي (Classical Bit)' : 'Classical Bit'}</span>
          </div>
          <div className="text-2xl font-mono font-black text-amber-500">{bitVal}</div>
          <button
            onClick={toggleBit}
            className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-[11px] transition cursor-pointer"
          >
            {lang === 'ar' ? 'تبديل الحالة (0 ↔ 1)' : 'Toggle Bit State'}
          </button>
        </div>

        {/* Quantum Qubit */}
        <div className="p-3.5 rounded-xl theme-panel border space-y-2 text-center">
          <div className="font-bold text-sky-600 dark:text-sky-400 flex items-center justify-center gap-1">
            <Atom className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الكيوبت الكمي (Quantum Qubit)' : 'Quantum Qubit'}</span>
          </div>
          <div className="text-sm font-mono font-bold text-emerald-500 min-h-[32px] flex items-center justify-center">
            {qubitText}
          </div>
          <button
            onClick={spinQubit}
            className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] flex items-center justify-center gap-1 mx-auto transition cursor-pointer"
          >
            <RotateCw className="w-3 h-3" />
            <span>{lang === 'ar' ? 'تفعيل التراكب (Superposition)' : 'Activate Superposition'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
