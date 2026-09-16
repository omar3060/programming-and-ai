'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/components/providers/AppProviders';

interface Task {
  id: number;
  nameAr: string;
  nameEn: string;
  duration: number; // ms
  color: string;
}

const sampleTasks: Task[] = [
  { id: 1, nameAr: 'تشفير بيانات الحزمة', nameEn: 'Data Packet Encryption', duration: 800, color: 'bg-blue-500' },
  { id: 2, nameAr: 'معالجة إطار فيديو 4K', nameEn: '4K Video Frame Processing', duration: 1200, color: 'bg-purple-500' },
  { id: 3, nameAr: 'تدريب مصفوفة أوزان AI', nameEn: 'AI Weight Matrix Training', duration: 1000, color: 'bg-emerald-500' },
  { id: 4, nameAr: 'حساب مسارات الفيزيائيات', nameEn: 'Physics Path Calculations', duration: 900, color: 'bg-amber-500' },
  { id: 5, nameAr: 'فرز 1,000,000 سجل', nameEn: 'Sorting 1,000,000 Records', duration: 1100, color: 'bg-rose-500' },
  { id: 6, nameAr: 'تحليل صورة أشعة سينية', nameEn: 'X-Ray Image Diagnostics', duration: 850, color: 'bg-cyan-500' },
  { id: 7, nameAr: 'رسم ظلال ثلاثية الأبعاد', nameEn: '3D Ray-Tracing Shadows', duration: 950, color: 'bg-indigo-500' },
  { id: 8, nameAr: 'فحص التراكب الكمومي', nameEn: 'Quantum Superposition Scan', duration: 1050, color: 'bg-pink-500' },
];

export function MultiCoreSimulator() {
  const { lang, playSfx } = useApp();
  const [coreCount, setCoreCount] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [activeTaskMap, setActiveTaskMap] = useState<Record<number, number[]>>({});

  const runBenchmark = () => {
    if (isRunning) return;
    playSfx('click');
    setIsRunning(true);
    setProgress(0);
    setExecutionTime(null);

    // Distribute tasks across selected cores
    const coreTasks: Record<number, number[]> = {};
    for (let c = 0; c < coreCount; c++) coreTasks[c] = [];
    sampleTasks.forEach((t, i) => {
      const coreIdx = i % coreCount;
      coreTasks[coreIdx].push(t.id);
    });
    setActiveTaskMap(coreTasks);

    const totalSimDuration = Math.max(1200, Math.round(4000 / coreCount));
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / totalSimDuration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setExecutionTime(totalSimDuration);
        playSfx('success');
      }
    }, 40);
  };

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/40 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-microchip"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">محاكي المعالجة متوازية الأنوية (Multi-Core CPU Benchmark)</span>
              <span className="lang-en">Multi-Core Parallel Processing Simulator</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">شاهد بنفسك كيف تلتف الأنوية المتعددة على حدود قانون مور الفيزيائية بتوزيع المهام</span>
              <span className="lang-en">Observe how multi-core architectures bypass physical limits by parallel task execution</span>
            </p>
          </div>
        </div>
        
        {/* Core selector buttons */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-xs font-bold text-sub me-1">
            <span className="lang-ar">الأنوية:</span>
            <span className="lang-en">Cores:</span>
          </span>
          {[1, 2, 4, 8].map((c) => (
            <button
              key={c}
              disabled={isRunning}
              onClick={() => { playSfx('click'); setCoreCount(c); setProgress(0); setExecutionTime(null); }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                coreCount === c
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {c} {c === 1 ? 'Core' : 'Cores'}
            </button>
          ))}
        </div>
      </div>

      {/* Control & Run Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        <div className="text-xs space-y-0.5 text-center sm:text-start">
          <div className="font-bold text-slate-200">
            <span className="lang-ar">حالة اختبار المعالجة:</span>
            <span className="lang-en">Benchmark Status:</span>{' '}
            <span className={isRunning ? 'text-amber-400 font-bold animate-pulse' : 'text-emerald-400 font-bold'}>
              {isRunning
                ? (lang === 'ar' ? 'جارٍ تنفيذ المهام بالموازاة...' : 'Executing Parallel Tasks...')
                : executionTime
                ? (lang === 'ar' ? `اكتمل الاختبار في ${executionTime}ms!` : `Completed in ${executionTime}ms!`)
                : (lang === 'ar' ? 'جاهز لبدء الاختيار' : 'Ready to Run')}
            </span>
          </div>
          <div className="text-[11px] text-sub">
            <span className="lang-ar">عدد المهام الكلية: 8 مهام حوسبية كثيفة</span>
            <span className="lang-en">Total Workload: 8 Heavy Compute Tasks</span>
          </div>
        </div>

        <button
          disabled={isRunning}
          onClick={runBenchmark}
          className={`px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition cursor-pointer ${
            isRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <i className={`fa-solid ${isRunning ? 'fa-spinner fa-spin' : 'fa-play'}`}></i>
          <span className="lang-ar">تشغيل اختبار المعالجة (Run Benchmark)</span>
          <span className="lang-en">Run Multi-Core Benchmark</span>
        </button>
      </div>

      {/* Visual CPU Cores Display Grid */}
      <div className={`grid gap-3 ${coreCount === 1 ? 'grid-cols-1' : coreCount === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {Array.from({ length: coreCount }).map((_, cIdx) => {
          const coreTasks = activeTaskMap[cIdx] || [];
          return (
            <div
              key={cIdx}
              className={`p-3 rounded-xl border text-xs space-y-2 transition-all ${
                isRunning
                  ? 'border-purple-500/80 bg-purple-950/20 shadow-md shadow-purple-500/10'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-sub border-b border-slate-800/60 pb-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-amber-400 animate-ping' : 'bg-emerald-500'}`}></span>
                  <span>Core {cIdx + 1}</span>
                </span>
                <span className="font-mono text-purple-400">{isRunning ? '100% Load' : 'Idle'}</span>
              </div>

              {/* Progress Bar per Core */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-400 h-full transition-all duration-100 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Task Items inside this Core */}
              <div className="space-y-1 pt-1 min-h-[48px]">
                {coreTasks.length > 0 ? (
                  coreTasks.map((tId) => {
                    const taskObj = sampleTasks.find((t) => t.id === tId);
                    if (!taskObj) return null;
                    return (
                      <div
                        key={tId}
                        className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700/50 text-[10px] flex items-center justify-between font-medium"
                      >
                        <span className="truncate max-w-[110px]">
                          <span className="lang-ar">{taskObj.nameAr}</span>
                          <span className="lang-en">{taskObj.nameEn}</span>
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${taskObj.color}`}></span>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-[10px] text-slate-500 italic block text-center pt-2">
                    <span className="lang-ar">في انتظار التكليف</span>
                    <span className="lang-en">Awaiting Queue</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Analysis Banner */}
      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-sub leading-relaxed space-y-1">
        <strong className="text-purple-300 block font-bold flex items-center gap-1.5">
          <i className="fa-solid fa-lightbulb"></i>
          <span className="lang-ar">💡 لماذا يعتبر تعدد الأنوية (Multi-Core) هو الحل لقانون مور؟</span>
          <span className="lang-en">💡 Why is Multi-Core the Engineering Solution to Moore's Law?</span>
        </strong>
        <p className="text-[11px]">
          <span className="lang-ar">
            عندما تعذر رفع تردد النواة الواحدة (GHz) بسبب الحرارة وتيار التسرب، اتجه المهندسون لوضع 4 أو 8 أو 16 نواة على نفس الشريحة. المعالج أحادي النواة ينفذ المهام الثمانية بالتوالي (واحدة تلو الأخرى)، بينما المعالج سداسي أو ثماني الأنوية يقسم العمل ويعالجه بالتوازي في كسر من الثانية!
          </span>
          <span className="lang-en">
            When boosting single-core clock speeds (GHz) hit physical thermal limits, engineers added multiple independent cores onto a single die. Single-core chips process 8 tasks sequentially (bottlenecked), whereas 8-core processors execute all tasks simultaneously in parallel within a fraction of a second!
          </span>
        </p>
      </div>
    </div>
  );
}
