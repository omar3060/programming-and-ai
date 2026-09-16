'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function ArVrInteractiveViewer() {
  const { lang, playSfx } = useApp();
  const [mode, setMode] = useState<'ar' | 'vr'>('ar');
  const [arObjects, setArObjects] = useState<{ id: number; labelAr: string; labelEn: string; x: number; y: number; icon: string }[]>([
    { id: 1, labelAr: 'نموذج محرك 3D معزز', labelEn: '3D Augmented Engine Model', x: 25, y: 35, icon: '⚙️' },
    { id: 2, labelAr: 'شاشة معلومات رقمية', labelEn: 'Digital HUD Data Overlay', x: 65, y: 25, icon: '📊' },
  ]);
  const [vrWorld, setVrWorld] = useState<'space' | 'lab'>('space');

  const addArMarker = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode !== 'ar') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    playSfx('click');
    setArObjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        labelAr: 'نقطة تفاعلية AR جديدة',
        labelEn: 'New AR Holographic Marker',
        x,
        y,
        icon: '✨',
      },
    ]);
  };

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-brand-500/40 space-y-4 shadow-lg">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-vr-cardboard"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">محاكي مقارنة الواقع المعزز (AR) والواقع الافتراضي (VR)</span>
              <span className="lang-en">AR vs VR Interactive Comparison Simulator</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">اختر الوضع وجرب كيف يدمج AR العناصر بالواقع بينما يعزلك VR داخل عالم رقمي</span>
              <span className="lang-en">Switch modes to see AR overlaying data vs VR fully immersing into synthetic 3D space</span>
            </p>
          </div>
        </div>

        {/* AR / VR Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => { playSfx('click'); setMode('ar'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mode === 'ar'
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-camera"></i>
            <span className="lang-ar">الواقع المعزز (AR)</span>
            <span className="lang-en">AR Mode</span>
          </button>
          <button
            onClick={() => { playSfx('click'); setMode('vr'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mode === 'vr'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-glasses"></i>
            <span className="lang-ar">الواقع الافتراضي (VR)</span>
            <span className="lang-en">VR Mode</span>
          </button>
        </div>
      </div>

      {/* Interactive Simulation Viewport Canvas */}
      {mode === 'ar' ? (
        /* AR MODE VIEWPORT: Real Camera Room + Digital Overlays */
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-sub">
            <span className="font-bold text-brand-400 flex items-center gap-1.5">
              <i className="fa-solid fa-hand-pointer animate-bounce"></i>
              <span className="lang-ar">انقر في أي مكان داخل الغرفة الحقيقية لإسقاط عنصر رقمي هولوجرامي (AR):</span>
              <span className="lang-en">Click anywhere in the room to drop a 3D AR Hologram Marker:</span>
            </span>
            <span className="font-mono text-[11px] text-amber-400">Markers: {arObjects.length}</span>
          </div>

          <div
            onClick={addArMarker}
            className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border-2 border-brand-500/50 bg-slate-950 cursor-crosshair select-none shadow-inner flex items-center justify-center"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Live Camera Grid & AR HUD Scanner Line */}
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[0.5px]"></div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-600/80 text-white font-mono text-[10px] font-bold flex items-center gap-1.5 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>LIVE AR CAMERA FEED</span>
            </div>

            {/* Dropped AR Hologram Objects */}
            {arObjects.map((obj) => (
              <div
                key={obj.id}
                style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-fadeIn group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/30 border-2 border-brand-400 text-white flex items-center justify-center text-lg shadow-lg shadow-brand-500/40 backdrop-blur-md group-hover:scale-125 transition">
                  {obj.icon}
                </div>
                <div className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 border border-brand-400/60 text-brand-300 font-bold text-[10px] whitespace-nowrap shadow-md">
                  <span className="lang-ar">{obj.labelAr}</span>
                  <span className="lang-en">{obj.labelEn}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-300 font-medium">
            <span className="lang-ar">💡 <strong>خصائص AR (الواقع المعزز):</strong> تظل ترى العالم الواقعي (الغرفة الحقيقية)، بينما يدمج النظام كائنات وبيانات رقمية ثلاثية الأبعاد فوق العالم الفيزيائي!</span>
            <span className="lang-en">💡 <strong>AR Characteristic:</strong> You maintain vision of the real physical room while 3D digital telemetry & objects are superimposed on reality!</span>
          </div>
        </div>
      ) : (
        /* VR MODE VIEWPORT: 100% Immersive Synthetic Digital Environment */
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-sub">
            <span className="font-bold text-purple-400 flex items-center gap-1.5">
              <i className="fa-solid fa-gamepad"></i>
              <span className="lang-ar">أنت الآن داخل خوذة VR (عزْل تام 100% عن العالم الواقعي):</span>
              <span className="lang-en">Inside VR Headset (100% Virtual Isolation from Physical World):</span>
            </span>

            {/* VR Environment Selector */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => { playSfx('click'); setVrWorld('space'); }}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${vrWorld === 'space' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                🚀 Space Station
              </button>
              <button
                onClick={() => { playSfx('click'); setVrWorld('lab'); }}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${vrWorld === 'lab' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                🧪 AI Hologram Lab
              </button>
            </div>
          </div>

          <div
            className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border-2 border-purple-500/50 bg-slate-950 select-none shadow-2xl flex items-center justify-center"
            style={{
              backgroundImage:
                vrWorld === 'space'
                  ? 'radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.4) 0%, rgba(2, 6, 23, 0.95) 100%), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80")'
                  : 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.3) 0%, rgba(2, 6, 23, 0.95) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* VR Headset Viewport Mask Lens Contour */}
            <div className="absolute inset-0 border-[16px] border-slate-950/80 rounded-2xl pointer-events-none"></div>

            {/* Virtual 3D Hands / Controllers overlay */}
            <div className="absolute bottom-3 left-1/4 -translate-x-1/2 text-3xl animate-bounce">🎮</div>
            <div className="absolute bottom-3 right-1/4 translate-x-1/2 text-3xl animate-bounce">🎮</div>

            <div className="z-10 text-center space-y-1.5 p-4 rounded-2xl bg-slate-950/80 border border-purple-500/40 backdrop-blur-md max-w-sm">
              <span className="text-3xl block">🥽</span>
              <strong className="text-purple-300 block text-xs sm:text-sm font-black">
                <span className="lang-ar">بيئة ثلاثية الأبعاد افتراضية بالكامل (100% VR Universe)</span>
                <span className="lang-en">100% Synthetic 3D Virtual Environment</span>
              </strong>
              <p className="text-[11px] text-sub">
                <span className="lang-ar">تم استبدال الحجرة الحقيقية تماماً بـ {vrWorld === 'space' ? 'محطة فضاء كمومية' : 'مختبر ذكاء اصطناعي تفاعلي'}</span>
                <span className="lang-en">Physical world is completely replaced with {vrWorld === 'space' ? 'Quantum Space Station' : 'Interactive AI Laboratory'}</span>
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-medium">
            <span className="lang-ar">💡 <strong>خصائص VR (الواقع الافتراضي):</strong> يتم حجب العالم الفيزيائي بالكامل ويُعزل المستخدم داخل عالم افتراضي مصمم بالكمبيوتر يمكنه التجول والتفاعل فيه!</span>
            <span className="lang-en">💡 <strong>VR Characteristic:</strong> The physical world is completely blocked out, immersing the user in a 100% computer-generated 3D universe!</span>
          </div>
        </div>
      )}
    </div>
  );
}
