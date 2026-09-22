'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function CryptoVsAuthLab() {
  const { playSfx } = useApp();
  const [handshakeStep, setHandshakeStep] = useState(0);

  // MFA Simulator State
  const [usePassword, setUsePassword] = useState(true);
  const [usePhoneOTP, setUsePhoneOTP] = useState(false);
  const [useBiometrics, setUseBiometrics] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [bioScanned, setBioScanned] = useState(false);
  const [loginResult, setLoginResult] = useState<{ success: boolean; msgAr: string; msgEn: string } | null>(null);

  const nextHandshake = () => {
    playSfx('click');
    setHandshakeStep(prev => (prev < 3 ? prev + 1 : 0));
  };

  const handleTestLogin = () => {
    const factorCount = (usePassword ? 1 : 0) + (usePhoneOTP ? 1 : 0) + (useBiometrics ? 1 : 0);

    if (usePassword && !passInput) {
      playSfx('error');
      setLoginResult({
        success: false,
        msgAr: "⚠️ يرجى إدخال كلمة السر!",
        msgEn: "⚠️ Please enter your password!"
      });
      return;
    }

    if (usePhoneOTP && otpInput !== '8492') {
      playSfx('error');
      setLoginResult({
        success: false,
        msgAr: "❌ رمز OTP خاطئ! (جرّب الرمز 8492)",
        msgEn: "❌ Invalid OTP code! (Try code 8492)"
      });
      return;
    }

    if (useBiometrics && !bioScanned) {
      playSfx('error');
      setLoginResult({
        success: false,
        msgAr: "⚠️ يرجى مسح البصمة أولاً!",
        msgEn: "⚠️ Please scan your biometric fingerprint first!"
      });
      return;
    }

    playSfx('success');
    if (factorCount >= 2) {
      setLoginResult({
        success: true,
        msgAr: `✅ تم تسجيل الدخول بنجاح بالمصادقة متعددة العوامل (MFA) بـ ${factorCount} عوامل! حسابك محمي بالكامل.`,
        msgEn: `✅ Successfully authenticated using Multi-Factor Authentication (MFA) with ${factorCount} factors! Account fully secured.`
      });
    } else {
      setLoginResult({
        success: true,
        msgAr: "⚠️ تم تسجيل الدخول بعامل واحد فقط (كلمة السر). إذا تسربت كلمة السر، فسيخترق حسابك بسهولة!",
        msgEn: "⚠️ Logged in with single factor only (Password). If password leaks, your account will be compromised!"
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. TLS HANDSHAKE SIMULATOR */}
      <div className="p-5 sm:p-6 rounded-3xl theme-subpanel border border-blue-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <h4 className="font-black text-sm sm:text-base flex items-center gap-2 text-blue-400">
            <i className="fa-solid fa-lock text-blue-400"></i>
            <span className="lang-ar">محاكي مصافحة HTTPS/TLS (TLS Handshake Interactive Lab)</span>
            <span className="lang-en">HTTPS/TLS Handshake Interactive Simulator</span>
          </h4>
          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-xs font-bold border border-blue-500/30">
            الخطوة {handshakeStep + 1} من 4
          </span>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">شاهد كيف يدمج بروتوكول HTTPS بين <strong>التشفير بالمفتاح العام (مرحلة المصافحة)</strong> لتبادل المفتاح بأمان، و<strong>التشفير المتماثل (مرحلة نقل البيانات)</strong> لتنفيذ نقل البيانات بسرعة عالية:</span>
          <span className="lang-en">See how HTTPS combines <strong>Public-key Cryptography (handshake phase)</strong> to share keys safely, and <strong>Common-key Cryptography (data phase)</strong> for high-speed transmission:</span>
        </p>

        {/* Dynamic Step Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
          {[
            {
              step: 0,
              num: "①",
              titleAr: "1. الاتصال المبدئي والشهادة",
              titleEn: "1. Connection & Certificate",
              descAr: "يرسل الخادم الشهادة الرقمية (Digital Certificate) والمفتاح العام للمتصفح. يتحقق المتصفح من جهة التصديق (CA).",
              descEn: "Server sends Digital Certificate & Public Key. Browser verifies authority with CA.",
              techAr: "تشفير بالمفتاح العام",
              techEn: "Public-key cryptography"
            },
            {
              step: 1,
              num: "②",
              titleAr: "2. إنشاء وتشفير مفتاح الجلسة",
              titleEn: "2. Session Key Generation",
              descAr: "ينشئ المتصفح مفتاحاً مشتركاً (Common Key)، ويشفره بالمفتاح العام للخادم، ويرسله مشفراً إلى الخادم.",
              descEn: "Browser generates Common Key, encrypts it with Server's Public Key, and transmits it safely.",
              techAr: "تشفير بالمفتاح العام",
              techEn: "Public-key cryptography"
            },
            {
              step: 2,
              num: "③",
              titleAr: "3. فك تشفير المفتاح المشترك",
              titleEn: "3. Private Key Decryption",
              descAr: "يمتلك الخادم المفتاح الخاص السرّي (Private Key) فقط، فيفك به التشفير لاستخراج المفتاح المشترك.",
              descEn: "Server uses its exclusive Private Key to decrypt and obtain the shared Common Key.",
              techAr: "تشفير بالمفتاح العام",
              techEn: "Public-key cryptography"
            },
            {
              step: 3,
              num: "④",
              titleAr: "4. تبادل البيانات المشفّرة بسرعة",
              titleEn: "4. Fast Encrypted Data Flow",
              descAr: "يبدأ الطرفان تشفير واستقبال ملايين البيانات فورياً باستخدام المفتاح المشترك (Common Key) بسرعة فائقة.",
              descEn: "Both parties exchange large data payloads rapidly encrypted with the shared Common Key.",
              techAr: "تشفير متماثل بالمفتاح المشترك",
              techEn: "Common-key cryptography"
            }
          ].map((s) => (
            <div
              key={s.step}
              className={`p-3.5 rounded-2xl border transition space-y-1.5 ${
                handshakeStep === s.step
                  ? 'bg-blue-500/15 border-blue-500 text-white font-bold shadow-lg'
                  : 'theme-panel border-slate-800 text-slate-400 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-blue-400 font-bold">{s.num}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                  <span className="lang-ar">{s.techAr}</span>
                  <span className="lang-en">{s.techEn}</span>
                </span>
              </div>
              <strong className="block text-slate-100 text-xs">
                <span className="lang-ar">{s.titleAr}</span>
                <span className="lang-en">{s.titleEn}</span>
              </strong>
              <p className="text-[11px] text-sub leading-normal">
                <span className="lang-ar">{s.descAr}</span>
                <span className="lang-en">{s.descEn}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-1">
          <button
            onClick={nextHandshake}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-md"
          >
            <i className="fa-solid fa-play"></i>
            <span className="lang-ar">
              {handshakeStep === 3 ? 'إعادة بدء شفرة المصافحة' : 'الانتقال للخطوة التالية في المصافحة ➔'}
            </span>
            <span className="lang-en">
              {handshakeStep === 3 ? 'Restart TLS Handshake' : 'Advance to Next Step ➔'}
            </span>
          </button>
        </div>
      </div>

      {/* 2. MULTI-FACTOR AUTHENTICATION (MFA) SIMULATOR */}
      <div className="p-5 sm:p-6 rounded-3xl theme-subpanel border border-emerald-500/30 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-black text-sm sm:text-base flex items-center gap-2 text-emerald-400">
            <i className="fa-solid fa-user-shield text-emerald-400"></i>
            <span className="lang-ar">محاكي المصادقة متعددة العوامل (MFA Interactive Security Lab)</span>
            <span className="lang-en">Multi-Factor Authentication (MFA) Interactive Lab</span>
          </h4>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          <span className="lang-ar">اختر عوامل الأمان المراد تفعيلها لحسابك المصرفي وتفحص قوة الحماية ضد هجمات تسريب كلمات السر:</span>
          <span className="lang-en">Select security factors to enable on your online account and evaluate resistance against password leaks:</span>
        </p>

        {/* Factor Options Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Factor 1: Knowledge */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${usePassword ? 'bg-blue-500/10 border-blue-500' : 'theme-panel border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-400 flex items-center gap-1.5">
                <i className="fa-solid fa-key"></i>
                <span className="lang-ar">1. عامل المعرفة (Knowledge)</span>
                <span className="lang-en">1. Knowledge Factor</span>
              </span>
              <input type="checkbox" checked={usePassword} onChange={(e) => setUsePassword(e.target.checked)} className="accent-blue-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub"><span className="lang-ar">شيء تعرفه فقط: كلمة السر أو الـ PIN.</span><span className="lang-en">Something you know: Password or PIN.</span></p>
          </label>

          {/* Factor 2: Possession */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${usePhoneOTP ? 'bg-amber-500/10 border-amber-500' : 'theme-panel border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <i className="fa-solid fa-mobile-screen"></i>
                <span className="lang-ar">2. عامل الملكية (Possession)</span>
                <span className="lang-en">2. Possession Factor</span>
              </span>
              <input type="checkbox" checked={usePhoneOTP} onChange={(e) => setUsePhoneOTP(e.target.checked)} className="accent-amber-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub"><span className="lang-ar">شيء تمتلكه: هاتف يستقبل OTP برمز 8492.</span><span className="lang-en">Something you have: Phone receiving OTP (code: 8492).</span></p>
          </label>

          {/* Factor 3: Biometric */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${useBiometrics ? 'bg-purple-500/10 border-purple-500' : 'theme-panel border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-400 flex items-center gap-1.5">
                <i className="fa-solid fa-fingerprint"></i>
                <span className="lang-ar">3. عامل بيومتري (Biometric)</span>
                <span className="lang-en">3. Biometric Factor</span>
              </span>
              <input type="checkbox" checked={useBiometrics} onChange={(e) => setUseBiometrics(e.target.checked)} className="accent-purple-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub"><span className="lang-ar">سمة حيوية في جسدك: بصمة الإصبع أو الوجه.</span><span className="lang-en">Something you are: Fingerprint or Face ID.</span></p>
          </label>
        </div>

        {/* Input Fields */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
          {usePassword && (
            <div className="space-y-1">
              <label className="text-sub font-bold block"><span className="lang-ar">كلمة السر (عامل المعرفة):</span><span className="lang-en">Password (Knowledge Factor):</span></label>
              <input
                type="password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                placeholder="أدخل كلمة السر..."
                className="w-full p-2.5 rounded-xl bg-slate-950 border text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {usePhoneOTP && (
            <div className="space-y-1">
              <label className="text-sub font-bold block"><span className="lang-ar">رمز OTP المرسل لهاتفك (عامل الملكية - اكتب 8492):</span><span className="lang-en">SMS OTP (Possession Factor - enter 8492):</span></label>
              <input
                type="text"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                placeholder="8492"
                className="w-full p-2.5 rounded-xl bg-slate-950 border font-mono text-amber-400 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          )}

          {useBiometrics && (
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border">
              <span className="text-sub font-bold"><span className="lang-ar">مسح بصمة الأصبع (عامل بيومتري):</span><span className="lang-en">Biometric Scan (Fingerprint):</span></span>
              <button
                onClick={() => { playSfx('success'); setBioScanned(true); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${bioScanned ? 'bg-emerald-500 text-slate-950' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
              >
                {bioScanned ? '✓ تم المسح بنجاح' : '👆 اضغط للمسح بالبصمة'}
              </button>
            </div>
          )}

          <button
            onClick={handleTestLogin}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer shadow-md"
          >
            <span className="lang-ar">اختبار تسجيل الدخول والأمان</span>
            <span className="lang-en">Test Login & MFA Security</span>
          </button>
        </div>

        {loginResult && (
          <div className={`p-4 rounded-2xl text-xs leading-relaxed border animate-fadeIn ${loginResult.success ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-rose-950/60 border-rose-500 text-rose-200'}`}>
            <span className="lang-ar">{loginResult.msgAr}</span>
            <span className="lang-en">{loginResult.msgEn}</span>
          </div>
        )}
      </div>
    </div>
  );
}
