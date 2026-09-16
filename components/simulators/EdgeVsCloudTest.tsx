'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { ShieldCheck, AlertOctagon, Car, Cloud, Server } from 'lucide-react';

export function EdgeVsCloudTest() {
  const { lang, playSfx } = useApp();
  const [result, setResult] = useState<'edge' | 'cloud' | null>(null);

  const testEdge = (isEdge: boolean) => {
    if (isEdge) {
      playSfx('success');
      setResult('edge');
    } else {
      playSfx('error');
      setResult('cloud');
    }
  };

  return (
    <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
      <div className="flex items-center justify-between text-xs">
        <strong className="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
          <Car className="w-4 h-4" />
          <span>
            {lang === 'ar'
              ? 'تجرية عملي تفاعلية: الحوسبة الطرفية (Edge) vs السحابية (Cloud) في السيارات'
              : 'Interactive Latency Simulator: Edge vs Cloud in Autonomous Vehicles'}
          </span>
        </strong>
      </div>
      <p className="text-sub text-xs leading-relaxed">
        {lang === 'ar'
          ? 'تخيل سيارة ذاتية القيادة تسير بسرعة 100 كم/س ظهر أمامها عائق مفاجئ! اختر المكان الذي ستعالج فيه الكاميرا البيانات:'
          : 'Imagine an autonomous car cruising at 100km/h encountering a sudden obstacle! Select telemetry processing node:'}
      </p>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <button
          onClick={() => testEdge(true)}
          className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-600 dark:text-emerald-300 font-bold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <Server className="w-5 h-5 text-emerald-500" />
          <span>{lang === 'ar' ? '1. المعالجة الطرفية (Edge)' : '1. Onboard Edge Chip'}</span>
          <span className="text-[10px] text-sub">{lang === 'ar' ? 'زمن الاستجابة: 2 ملي ثانية' : 'Latency: 2ms'}</span>
        </button>

        <button
          onClick={() => testEdge(false)}
          className="p-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-600 dark:text-rose-300 font-bold flex flex-col items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <Cloud className="w-5 h-5 text-rose-500" />
          <span>{lang === 'ar' ? '2. الخادم السحابي (Cloud)' : '2. Remote Cloud Hyperscaler'}</span>
          <span className="text-[10px] text-sub">{lang === 'ar' ? 'زمن الاستجابة: 420 ملي ثانية' : 'Latency: 420ms'}</span>
        </button>
      </div>

      {result === 'edge' && (
        <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500 text-emerald-200 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>{lang === 'ar' ? '✅ نجاح الحوسبة الطرفية (Edge Computing):' : '✅ Edge Computing Success:'}</strong>{' '}
            {lang === 'ar'
              ? 'اتخذ المعالج المدمج داخل السيارة قرار الفرامل في 2 ملي ثانية فقط وتفادى الاصطدام بالعائق محلياً دون أي اعتماد على شبكة الإنترنت الخارجية.'
              : 'Onboard automotive processor actuated brakes in 2ms, safely avoiding collision without internet connection dependence.'}
          </div>
        </div>
      )}

      {result === 'cloud' && (
        <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500 text-rose-200 text-xs leading-relaxed flex items-start gap-2 animate-fadeIn">
          <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong>{lang === 'ar' ? '⚠️ كارثة تأخير السحابة (Cloud Latency):' : '⚠️ Fatal Cloud Latency:'}</strong>{' '}
            {lang === 'ar'
              ? 'استغرق إرسال الفيديو عالي الدقة للسحابة وانتظار رد الخادم 420 ملي ثانية، فقطعت السيارة مسافة 14 متراً إضافياً ووقع حادث تصادم مأساوي!'
              : 'Video transmission round-trip took 420ms; car travelled 14 extra meters and crashed violently!'}
          </div>
        </div>
      )}
    </div>
  );
}
