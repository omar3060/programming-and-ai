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
    <div className="p-5 sm:p-6 rounded-3xl theme-subpanel border border-purple-500/30 space-y-5 text-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <h4 className="font-black text-sm sm:text-base flex items-center gap-2 text-purple-400">
          <i className="fa-solid fa-network-wired text-purple-400"></i>
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
        <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
          <span className="text-xl block">🌐</span>
          <strong className="text-white block text-xs">1. الإنترنت العام</strong>
          <span className="text-sub text-[10px]">مستخدمون وموظفون وحركة مرور خارجي</span>
        </div>
        <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-center space-y-1">
          <span className="text-xl block">🔥</span>
          <strong className="text-amber-400 block text-xs">2. جدار الحماية (Firewall)</strong>
          <span className="text-sub text-[10px]">فحص القواعد وتوجيه الاتصالات</span>
        </div>
        <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-center space-y-1">
          <span className="text-xl block">🛡️</span>
          <strong className="text-cyan-300 block text-xs">3. الـ DMZ العامة</strong>
          <span className="text-sub text-[10px]">خادم الويب والبريد الموجه للخارج</span>
        </div>
        <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-1">
          <span className="text-xl block">🗄️</span>
          <strong className="text-emerald-300 block text-xs">4. الشبكة الداخلية</strong>
          <span className="text-sub text-[10px]">قواعد بيانات سرية وأجهزة الموظفين</span>
        </div>
      </div>

      {/* Control Panel */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sub font-bold block"><span className="lang-ar">نوع الاتصال القادم:</span><span className="lang-en">Incoming Traffic Type:</span></label>
            <select
              value={trafficType}
              onChange={(e) => setTrafficType(e.target.value as any)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border text-xs focus:outline-none focus:border-purple-500"
            >
              <option value="web">زائر ويب عادي (HTTP/HTTPS)</option>
              <option value="vpn">موظف عمل عن بُعد عبر نفق VPN</option>
              <option value="ssh">اتصال تحكم مباشر (SSH)</option>
              <option value="db">طلب استعلام مباشر لقاعدة البيانات (SQL)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sub font-bold block"><span className="lang-ar">المنطقة المستهدفة:</span><span className="lang-en">Destination Target Zone:</span></label>
            <select
              value={targetZone}
              onChange={(e) => setTargetZone(e.target.value as any)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border text-xs focus:outline-none focus:border-purple-500"
            >
              <option value="dmz">المنطقة منزوعة السلاح (DMZ) - خادم الويب</option>
              <option value="internal">الشبكة الداخلية (Internal Network) - قاعدة البيانات</option>
            </select>
          </div>
        </div>

        {/* Zero Trust Options */}
        <div className="p-3 rounded-xl bg-slate-950 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <strong className="text-purple-300 block"><span className="lang-ar">تفعيل سياسة عدم الثقة (Zero Trust Policy):</span><span className="lang-en">Enable Zero Trust Policy:</span></strong>
            <span className="text-[11px] text-sub block"><span className="lang-ar">لا تثق بأي اتصال آلياً، وافرض التحقق الصارم من الهوية دائماً.</span><span className="lang-en">Never trust, always verify every access request.</span></span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { playSfx('click'); setZeroTrustMode(!zeroTrustMode); }}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${zeroTrustMode ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              {zeroTrustMode ? 'مُفعّل (Zero Trust)' : 'معطّل (النمط القديم)'}
            </button>
            {trafficType === 'vpn' && (
              <button
                onClick={() => { playSfx('click'); setVerifiedToken(!verifiedToken); }}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${verifiedToken ? 'bg-emerald-500 text-slate-950' : 'bg-amber-600 text-white'}`}
              >
                {verifiedToken ? '✓ هوية مؤكدة' : '🔑 تقديم شريحة الهوية'}
              </button>
            )}
          </div>
        </div>

        <button
          onClick={handleSimulatePacket}
          className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition cursor-pointer shadow-md"
        >
          <span className="lang-ar">إرسال الحزمة واختبار فحص أمن الشبكة</span>
          <span className="lang-en">Transmit Packet & Test Inspection Rules</span>
        </button>
      </div>

      {resultLog && (
        <div className={`p-4 rounded-2xl text-xs leading-relaxed border animate-fadeIn ${resultLog.allowed ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-rose-950/60 border-rose-500 text-rose-200'}`}>
          <span className="lang-ar">{resultLog.textAr}</span>
          <span className="lang-en">{resultLog.textEn}</span>
        </div>
      )}
    </div>
  );
}
