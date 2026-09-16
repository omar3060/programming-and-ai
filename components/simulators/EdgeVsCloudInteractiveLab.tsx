'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function EdgeVsCloudInteractiveLab() {
  const { lang, playSfx } = useApp();
  const [activeMode, setActiveMode] = useState<'edge' | 'cloud' | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [carPos, setCarPos] = useState<number>(10); // percentage 0-100
  const [statusText, setStatusText] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<'safe' | 'crash' | null>(null);
  const [telemetry, setTelemetry] = useState<{ latency: number; stoppingDist: number; brakingDelay: number } | null>(null);

  const runSimulation = (mode: 'edge' | 'cloud') => {
    if (isRunning) return;
    playSfx('click');
    setActiveMode(mode);
    setIsRunning(true);
    setCarPos(10);
    setStatusText(lang === 'ar' ? 'السيارة تسير بسرعة 90 كم/س...' : 'Vehicle cruising at 90 km/h...');
    setOutcome(null);
    setTelemetry(null);

    const isEdge = mode === 'edge';
    const totalTime = isEdge ? 1800 : 2500;
    const obstacleTriggerPct = 45;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(90, 10 + Math.round((elapsed / totalTime) * 80));
      setCarPos(pct);

      if (pct >= obstacleTriggerPct && !outcome) {
        if (isEdge) {
          // Edge Processing: 2ms instant response
          clearInterval(interval);
          setIsRunning(false);
          setOutcome('safe');
          setCarPos(55); // Stopped safely right before obstacle at 70%
          setTelemetry({ latency: 2, stoppingDist: 14, brakingDelay: 2 });
          setStatusText(
            lang === 'ar'
              ? '⚡ رُصد العائق محلياً (Edge AI) وفرملت السيارة فوراً في 2ms بنجاح تام!'
              : '⚡ Local Edge AI detected obstacle & braked instantly in 2ms safely!'
          );
          playSfx('success');
        } else {
          // Cloud Processing: 400ms delay -> Car keeps moving during latency, crashes at 70%
          setStatusText(
            lang === 'ar'
              ? '📡 جارٍ إرسال الفيديو عبر 4G/5G للسحابة... (زمن تأخير 400ms)'
              : '📡 Transmitting video telemetry to remote Cloud... (400ms latency)'
          );
        }
      }

      if (elapsed >= totalTime && !isEdge) {
        clearInterval(interval);
        setIsRunning(false);
        setOutcome('crash');
        setCarPos(75); // Crashed into obstacle
        setTelemetry({ latency: 412, stoppingDist: 38, brakingDelay: 400 });
        setStatusText(
          lang === 'ar'
            ? '💥 حادث اصطدام! تأخر وصول قرار الفرملة من السحابة بـ 400ms فاصطدمت السيارة بالمانع!'
            : '💥 Fatal Impact! 400ms Cloud roundtrip latency caused impact before braking!'
        );
        playSfx('error');
      }
    }, 40);
  };

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/40 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-car-on"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">محاكي طوارئ القيادة الذاتية: الحوسبة الطرفية (Edge) vs السحابية (Cloud)</span>
              <span className="lang-en">Autonomous Driving Emergency Braking: Edge vs Cloud Simulator</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">اختبر بنفسك لماذا تتطلب أنظمة السلامة الحرجة معالجة محليّة على الجهاز (Edge Computing)</span>
              <span className="lang-en">Test firsthand why critical safety systems strictly mandate on-device Edge AI processing</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mode Selection Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <button
          disabled={isRunning}
          onClick={() => runSimulation('edge')}
          className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1 ${
            activeMode === 'edge'
              ? 'bg-emerald-950/60 border-emerald-500 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 border-slate-800 hover:border-emerald-500/60'
          } ${isRunning ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-between">
            <strong className="text-emerald-400 font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-bolt text-xs"></i>
              <span className="lang-ar">1. معالجة طرفية داخل السيارة (Edge Computing) ✅</span>
              <span className="lang-en">1. On-Board Edge Computing ✅</span>
            </strong>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">2ms Latency</span>
          </div>
          <p className="text-[11px] text-sub">
            <span className="lang-ar">معالج AI داخل السيارة يحلل الفيديو فورياً دون الحاجة لاتصال إنترنت.</span>
            <span className="lang-en">On-board AI chip analyzes sensor feeds instantly in 2ms without cloud dependency.</span>
          </p>
        </button>

        <button
          disabled={isRunning}
          onClick={() => runSimulation('cloud')}
          className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1 ${
            activeMode === 'cloud'
              ? 'bg-rose-950/60 border-rose-500 shadow-md shadow-rose-500/20'
              : 'bg-slate-900 border-slate-800 hover:border-rose-500/60'
          } ${isRunning ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-between">
            <strong className="text-rose-400 font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-cloud-arrow-up text-xs"></i>
              <span className="lang-ar">2. معالجة سحابية عبر الإنترنت (Remote Cloud) ⚠️</span>
              <span className="lang-en">2. Remote Cloud Processing ⚠️</span>
            </strong>
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">400ms Latency</span>
          </div>
          <p className="text-[11px] text-sub">
            <span className="lang-ar">إرسال الفيديو لخادم سحابي بعيد والانتظار لعودة أمر الفرملة (زمن تأخير كبير).</span>
            <span className="lang-en">Video stream is transmitted to remote data center; braking decision returns with latency lag.</span>
          </p>
        </button>
      </div>

      {/* Visual Driving Track Animation Box */}
      <div className="relative w-full h-[140px] sm:h-[160px] rounded-2xl bg-slate-950 border-2 border-slate-800 overflow-hidden p-3 shadow-inner flex flex-col justify-between select-none">
        {/* Track Markings */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-b-2 border-dashed border-slate-700/60 -translate-y-1/2"></div>

        {/* Telemetry Header */}
        <div className="flex items-center justify-between text-[11px] font-mono font-bold z-10">
          <span className="text-slate-400 flex items-center gap-1.5">
            <i className="fa-solid fa-gauge-high text-amber-400"></i>
            <span>SPEED: 90 KM/H</span>
          </span>
          <span className={activeMode === 'edge' ? 'text-emerald-400' : activeMode === 'cloud' ? 'text-rose-400' : 'text-slate-400'}>
            {activeMode ? (activeMode === 'edge' ? 'MODE: EDGE AI (LOCAL 2MS)' : 'MODE: REMOTE CLOUD (400MS)') : 'SELECT MODE TO RUN'}
          </span>
        </div>

        {/* Moving Vehicle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-75 ease-linear z-20"
          style={{ left: `${carPos}%` }}
        >
          <div className="relative flex flex-col items-center">
            <div className={`text-3xl sm:text-4xl filter drop-shadow-md ${outcome === 'crash' ? 'animate-ping text-rose-500' : ''}`}>
              {outcome === 'crash' ? '💥' : '🚘'}
            </div>
            {isRunning && (
              <span className="absolute -top-4 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[9px] font-mono animate-bounce">
                BRAKING...
              </span>
            )}
          </div>
        </div>

        {/* Fixed Obstacle Marker at 70% */}
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-8 h-10 rounded-lg bg-rose-600/80 border-2 border-rose-400 text-white flex items-center justify-center font-bold text-xs shadow-lg animate-pulse">
            🚧
          </div>
          <span className="text-[9px] text-rose-400 font-bold mt-1">عائق مفاجئ</span>
        </div>

        {/* Live Status Message Bar */}
        <div className="z-10 text-[11px] font-bold text-slate-200 truncate bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
          {statusText || (lang === 'ar' ? 'اختر وضع المعالجة أعلاه لبدء اختبار الفرملة الطارئة' : 'Select processing mode above to run braking test')}
        </div>
      </div>

      {/* Telemetry Metrics Box */}
      {telemetry && (
        <div className={`p-4 rounded-xl text-xs space-y-2 border animate-fadeIn ${
          outcome === 'safe' ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
        }`}>
          <div className="grid grid-cols-3 gap-2 text-center font-mono font-bold">
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-sub font-sans"><span className="lang-ar">زمن الاستجابة (Latency)</span><span className="lang-en">Response Latency</span></div>
              <div className={outcome === 'safe' ? 'text-emerald-400 text-sm' : 'text-rose-400 text-sm'}>{telemetry.latency} ms</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-sub font-sans"><span className="lang-ar">تأخير الفرملة</span><span className="lang-en">Braking Delay</span></div>
              <div className={outcome === 'safe' ? 'text-emerald-400 text-sm' : 'text-rose-400 text-sm'}>{telemetry.brakingDelay} ms</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-[10px] text-sub font-sans"><span className="lang-ar">نتيجة السلامة</span><span className="lang-en">Safety Result</span></div>
              <div className={outcome === 'safe' ? 'text-emerald-400 text-sm font-sans' : 'text-rose-400 text-sm font-sans'}>
                {outcome === 'safe' ? (lang === 'ar' ? 'أمان كامل 100%' : '100% Safe') : (lang === 'ar' ? 'اصطدام كارثي' : 'Fatal Crash')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
