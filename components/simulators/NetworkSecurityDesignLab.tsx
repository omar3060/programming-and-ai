'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function NetworkSecurityDesignLab() {
  const { playSfx } = useApp();
  const [trafficType, setTrafficType] = useState<'web' | 'ssh' | 'vpn' | 'db'>('web');
  const [targetZone, setTargetZone] = useState<'dmz' | 'internal'>('dmz');
  const [zeroTrustMode, setZeroTrustMode] = useState(true);
  const [verifiedToken, setVerifiedToken] = useState(false);
  const [resultLog, setResultLog] = useState<{ allowed: boolean; textAr: string; textEn: string } | null>(null);

  const trafficOptions = [
    {
      id: 'web' as const,
      icon: '🌐',
      titleAr: 'زائر ويب عادي (HTTP/HTTPS)',
      titleEn: 'Public Web Visitor (HTTP/HTTPS)'
    },
    {
      id: 'vpn' as const,
      icon: '🔒',
      titleAr: 'موظف عمل عن بُعد عبر VPN',
      titleEn: 'Remote Staff via VPN Tunnel'
    },
    {
      id: 'ssh' as const,
      icon: '💻',
      titleAr: 'اتصال تحكم مباشر (SSH)',
      titleEn: 'Direct Terminal (SSH)'
    },
    {
      id: 'db' as const,
      icon: '🗄️',
      titleAr: 'طلب استعلام قاعدة بيانات (SQL)',
      titleEn: 'Direct DB Query (SQL)'
    }
  ];

  const zoneOptions = [
    {
      id: 'dmz' as const,
      icon: '🛡️',
      titleAr: 'المنطقة منزوعة السلاح (DMZ) - خادم الويب',
      titleEn: 'Demilitarized Zone (DMZ) - Web Server'
    },
    {
      id: 'internal' as const,
      icon: '🏢',
      titleAr: 'الشبكة الداخلية (Internal Network) - قاعدة البيانات',
      titleEn: 'Internal Network - Database Server'
    }
  ];

  const handleSimulatePacket = () => {
    playSfx('click');

    // Rule 1: Public Web traffic to DMZ -> ALLOWED
    if (trafficType === 'web' && targetZone === 'dmz') {
      playSfx('success');
      setResultLog({
        allowed: true,
        textAr: "✅ [جدار الحماية Firewall]: مسموح! حركة مرور الويب (HTTP/HTTPS) موجهة بسلام إلى خادم الويب العام داخل المنطقة منزوعة السلاح (DMZ).",
        textEn: "✅ [Firewall]: ALLOWED! Public Web traffic routed safely to public Web Server inside DMZ."
      });
      return;
    }

    // Rule 2: External Direct Database Access -> BLOCKED by Firewall
    if (trafficType === 'db' && targetZone === 'internal') {
      playSfx('error');
      setResultLog({
        allowed: false,
        textAr: "⛔ [جدار الحماية Firewall]: تم المنع! الوصول الخارجي المباشر لقاعدة البيانات الداخلية محظور تماماً بحواعد الأمان لحماية سجلات العملاء.",
        textEn: "⛔ [Firewall]: BLOCKED! Direct external access to internal database is forbidden by firewall rules."
      });
      return;
    }

    // Rule 3: Remote SSH/Internal Access without VPN -> BLOCKED
    if (trafficType === 'ssh' && targetZone === 'internal') {
      playSfx('error');
      setResultLog({
        allowed: false,
        textAr: "⚠️ [جدار الحماية Firewall]: محظور! لا يمكن الاتصال بالشبكة الداخلية من الخارج دون استخدام نفق مشفّر عبر VPN.",
        textEn: "⚠️ [Firewall]: BLOCKED! Cannot connect to internal network from outside without an encrypted VPN tunnel."
      });
      return;
    }

    // Rule 4: VPN Traffic
    if (trafficType === 'vpn') {
      if (zeroTrustMode && !verifiedToken) {
        playSfx('error');
        setResultLog({
          allowed: false,
          textAr: "🛡️ [مفهوم Zero Trust]: تم الحظر! الاتصال نُقل عبر VPN لكن لم يتم التحقق من هوية المستخدم وشريحة الاعتماد (تطبيق مبدأ عدم الثقة المسبقة).",
          textEn: "🛡️ [Zero Trust Concept]: BLOCKED! VPN tunnel established, but identity verification failed. Zero Trust mandates strict re-authentication."
        });
      } else {
        playSfx('success');
        setResultLog({
          allowed: true,
          textAr: "⚡ [VPN + Zero Trust]: مسموح! نفق VPN مشفّر وتم التحقق بنجاح من هوية وصلاحيات الموظف عن بُعد.",
          textEn: "⚡ [VPN + Zero Trust]: ALLOWED! Encrypted VPN tunnel active and identity verified under Zero Trust control."
        });
      }
      return;
    }

    setResultLog({
      allowed: true,
      textAr: "✅ الاتصال مقبول.",
      textEn: "✅ Connection permitted."
    });
  };

  return (
    <div className="p-5 sm:p-6 rounded-3xl theme-panel border border-purple-500/30 space-y-5 text-xs shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <h4 className="font-black text-sm sm:text-base flex items-center gap-2 text-purple-600 dark:text-purple-400">
          <i className="fa-solid fa-network-wired text-purple-600 dark:text-purple-400"></i>
          <span className="lang-ar">محاكي تصميم أمن الشبكات والـ Zero Trust (Topology & Zero Trust Simulator)</span>
          <span className="lang-en">Network Security Design & Zero Trust Simulator</span>
        </h4>
      </div>

      <p className="text-sub leading-relaxed">
        <span className="lang-ar">اختبر أثر جدران الحماية (Firewalls)، والمنطقة منزوعة السلاح (DMZ)، والـ VPN، ومفهوم عدم الثقة المطلق (Zero Trust) في حماية أصول المنشأة:</span>
        <span className="lang-en">Test how Firewalls, DMZs, VPNs, and Zero Trust policies protect internal database assets against remote attacks:</span>
      </p>

      {/* Network Topology Visual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-[11px]">
        <div className="p-3 rounded-2xl theme-subpanel border text-center space-y-1">
          <span className="text-xl block">🌐</span>
          <strong className="text-slate-900 dark:text-white block text-xs">1. الإنترنت العام</strong>
          <span className="text-sub text-[10px]">مستخدمون وموظفون وحركة مرور خارجي</span>
        </div>
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-center space-y-1">
          <span className="text-xl block">🔥</span>
          <strong className="text-amber-600 dark:text-amber-400 block text-xs">2. جدار الحماية (Firewall)</strong>
          <span className="text-sub text-[10px]">فحص القواعد وتوجيه الاتصالات</span>
        </div>
        <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-center space-y-1">
          <span className="text-xl block">🛡️</span>
          <strong className="text-cyan-600 dark:text-cyan-300 block text-xs">3. الـ DMZ العامة</strong>
          <span className="text-sub text-[10px]">خادم الويب والبريد الموجه للخارج</span>
        </div>
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-1">
          <span className="text-xl block">🗄️</span>
          <strong className="text-emerald-600 dark:text-emerald-300 block text-xs">4. الشبكة الداخلية</strong>
          <span className="text-sub text-[10px]">قواعد بيانات سرية وأجهزة الموظفين</span>
        </div>
      </div>

      {/* Custom Control Panel (Zero Native Dropdowns) */}
      <div className="p-4 rounded-2xl theme-subpanel border space-y-4">
        {/* Custom 1: Incoming Traffic Type */}
        <div className="space-y-2">
          <label className="text-sub font-bold block">
            <span className="lang-ar">نوع الاتصال القادم (حدد الخيار):</span>
            <span className="lang-en">Incoming Traffic Type (Select Option):</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {trafficOptions.map((opt) => {
              const isSelected = trafficType === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => { playSfx('click'); setTrafficType(opt.id); }}
                  className={`p-3 rounded-xl border text-right transition flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 font-bold shadow-md'
                      : 'theme-panel text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-purple-400'
                  }`}
                >
                  <span className="text-lg shrink-0">{opt.icon}</span>
                  <span className="text-xs flex-1">
                    <span className="lang-ar">{opt.titleAr}</span>
                    <span className="lang-en">{opt.titleEn}</span>
                  </span>
                  {isSelected && <span className="text-xs font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom 2: Destination Target Zone */}
        <div className="space-y-2">
          <label className="text-sub font-bold block">
            <span className="lang-ar">المنطقة المستهدفة للاتصال (حدد الخيار):</span>
            <span className="lang-en">Destination Target Zone (Select Option):</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {zoneOptions.map((opt) => {
              const isSelected = targetZone === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => { playSfx('click'); setTargetZone(opt.id); }}
                  className={`p-3 rounded-xl border text-right transition flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 font-bold shadow-md'
                      : 'theme-panel text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-purple-400'
                  }`}
                >
                  <span className="text-lg shrink-0">{opt.icon}</span>
                  <span className="text-xs flex-1">
                    <span className="lang-ar">{opt.titleAr}</span>
                    <span className="lang-en">{opt.titleEn}</span>
                  </span>
                  {isSelected && <span className="text-xs font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Zero Trust Policy Switcher */}
        <div className="p-3 rounded-xl theme-panel border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <strong className="text-purple-600 dark:text-purple-300 block">
              <span className="lang-ar">تفعيل سياسة عدم الثقة (Zero Trust Policy):</span>
              <span className="lang-en">Enable Zero Trust Policy:</span>
            </strong>
            <span className="text-[11px] text-sub block">
              <span className="lang-ar">لا تثق بأي اتصال آلياً، وافرض التحقق الصارم من الهوية دائماً.</span>
              <span className="lang-en">Never trust, always verify every access request.</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => { playSfx('click'); setZeroTrustMode(!zeroTrustMode); }}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                zeroTrustMode ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-300 dark:bg-slate-800 text-sub'
              }`}
            >
              {zeroTrustMode ? 'مُفعّل (Zero Trust)' : 'معطّل (النمط القديم)'}
            </button>

            {trafficType === 'vpn' && (
              <button
                onClick={() => { playSfx('click'); setVerifiedToken(!verifiedToken); }}
                className={`px-3.5 py-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                  verifiedToken ? 'bg-emerald-500 text-slate-950 font-black shadow-md' : 'bg-amber-600 text-white'
                }`}
              >
                {verifiedToken ? '✓ هوية مؤكدة' : '🔑 تقديم شريحة الهوية'}
              </button>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSimulatePacket}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer shadow-lg flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-shield-halved text-sm"></i>
          <span className="lang-ar">إرسال الحزمة واختبار فحص أمن الشبكة</span>
          <span className="lang-en">Transmit Packet & Test Inspection Rules</span>
        </button>
      </div>

      {resultLog && (
        <div className={`p-4 rounded-2xl text-xs leading-relaxed border animate-fadeIn ${
          resultLog.allowed
            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-200'
            : 'bg-rose-500/10 border-rose-500/40 text-rose-800 dark:text-rose-200'
        }`}>
          <span className="lang-ar">{resultLog.textAr}</span>
          <span className="lang-en">{resultLog.textEn}</span>
        </div>
      )}
    </div>
  );
}
