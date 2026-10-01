'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function CryptoVsAuthLab() {
  const { lang, playSfx } = useApp();
  const [handshakeStep, setHandshakeStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [packetCount, setPacketCount] = useState<number>(12);
  const [lastDataPacket, setLastDataPacket] = useState<string>('GET /user/profile');
  const [packetDirection, setPacketDirection] = useState<'toServer' | 'toBrowser'>('toServer');

  // MFA Simulator State
  const [usePassword, setUsePassword] = useState(true);
  const [usePhoneOTP, setUsePhoneOTP] = useState(false);
  const [useBiometrics, setUseBiometrics] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [bioScanned, setBioScanned] = useState(false);
  const [loginResult, setLoginResult] = useState<{ success: boolean; msgAr: string; msgEn: string } | null>(null);

  // Auto-play / Video Mode timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setHandshakeStep(prev => {
          if (prev < 3) {
            playSfx('click');
            return prev + 1;
          } else {
            // In step 3 (Rapid data stream), keep animating data packets
            setPacketCount(c => c + 1);
            setPacketDirection(d => d === 'toServer' ? 'toBrowser' : 'toServer');
            return 3;
          }
        });
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playSfx]);

  const toggleAutoPlay = () => {
    playSfx('click');
    if (!isPlaying && handshakeStep === 3) {
      // If at end, restart from step 0
      setHandshakeStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextStep = () => {
    playSfx('click');
    setIsPlaying(false);
    setHandshakeStep(prev => (prev < 3 ? prev + 1 : 0));
  };

  const handlePrevStep = () => {
    playSfx('click');
    setIsPlaying(false);
    setHandshakeStep(prev => (prev > 0 ? prev - 1 : 3));
  };

  const handleSendTestPacket = (customMsg?: string) => {
    playSfx('success');
    if (customMsg) setLastDataPacket(customMsg);
    setPacketCount(c => c + 1);
    setPacketDirection(d => d === 'toServer' ? 'toBrowser' : 'toServer');
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

  const stepsData = [
    {
      step: 0,
      titleAr: "1. إرسال الشهادة والمفتاح العام",
      titleEn: "1. Server Certificate & Public Key",
      badgeAr: "تشفير غير متماثل (بطيء)",
      badgeEn: "Asymmetric (Public Key)",
      badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30",
      descAr: "يرسل خادم الويب شهادته الرقمية (Digital Certificate) والمفتاح العام (Public Key) إلى المتصفح. يتحقق المتصفح من أصالة الخادم عبر جهة التصديق (CA).",
      descEn: "Web server sends its Digital Certificate and Public Key to the browser. The browser verifies the server's authenticity through a Certificate Authority (CA).",
      analogyAr: "مثل إرسال الخادم صندوقاً مفتوحاً مع مفتاح عام للجميع.",
      analogyEn: "Like the server sending an open mailbox with its public key."
    },
    {
      step: 1,
      titleAr: "2. إنشاء وتشفير المفتاح المشترك",
      titleEn: "2. Session Key Encryption",
      badgeAr: "تشفير غير متماثل (بطيء)",
      badgeEn: "Asymmetric (Public Key)",
      badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30",
      descAr: "ينشئ المتصفح مفتاحاً متماثلاً سرّياً (Common Key / Session Key)، ويشفره باستخدام 'المفتاح العام للخادم' ويرسله مشفراً إلى الخادم.",
      descEn: "Browser generates a secret symmetric Common Key, encrypts it using the Server's Public Key, and transmits the ciphered key payload.",
      analogyAr: "المتصفح يضع المفتاح المشترك داخل الصندوق ويقفله بالمفتاح العام للخادم.",
      analogyEn: "The browser places the shared key inside the box and locks it with the Server's Public Key."
    },
    {
      step: 2,
      titleAr: "3. فك التشفير بالمفتاح الخاص وحصول الطرفين على نفس المفتاح",
      titleEn: "3. Private Key Decryption & Shared Secret Established",
      badgeAr: "تطابق المفاتيح (Key Match)",
      badgeEn: "Shared Key Established",
      badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30",
      descAr: "يمتلك الخادم فقط 'المفتاح الخاص السرّي (Private Key)'، فيفك به تشفير الرسالة ويستخرج 'المفتاح المشترك'. الآن أصبح لدى المتصفح والخادم **نفس المفتاح المتماثل بالضبط**!",
      descEn: "Server uses its exclusive Private Key to decrypt the message and retrieve the secret Common Key. Now **both Browser and Server hold the exact same symmetric key**!",
      analogyAr: "الخادم يفتح الصندوق بمفتاحه الخاص الخاص به وحده.",
      analogyEn: "The server unlocks the box using its exclusive Private Key."
    },
    {
      step: 3,
      titleAr: "4. تبادل البيانات المشفّرة بسرعة فائقة (التشفير المتماثل)",
      titleEn: "4. Rapid Symmetric Encrypted Data Stream",
      badgeAr: "تشفير متماثل (سريع جداً ⚡)",
      badgeEn: "Symmetric Encryption (Ultra Fast ⚡)",
      badgeColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
      descAr: "بما أن الطرفين أصبحا يمتلكان نفس المفتاح المتماثل، يتم تشفير وتبادل جميع طلبات الويب والبيانات المباشرة بسرعة كفاءة فائقة (Common-Key Cryptography).",
      descEn: "Since both parties now possess the exact same secret symmetric key, all webpage requests, images, and data payloads are encrypted and exchanged at high speed!",
      analogyAr: "اتصال مشفر فائق السرعة بمفتاح واحد مشترك بين الطرفين!",
      analogyEn: "Ultra-fast encrypted tunnel using a single shared symmetric key!"
    }
  ];

  const currentStepInfo = stepsData[handshakeStep];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dynamic Keyframes for Animated Data & Key Particles */}
      <style>{`
        @keyframes floatRight {
          0% { left: 15%; opacity: 0; transform: translateY(-50%) scale(0.8); }
          20% { opacity: 1; transform: translateY(-50%) scale(1.1); }
          80% { opacity: 1; transform: translateY(-50%) scale(1.1); }
          100% { left: 80%; opacity: 0; transform: translateY(-50%) scale(0.8); }
        }
        @keyframes floatLeft {
          0% { left: 80%; opacity: 0; transform: translateY(-50%) scale(0.8); }
          20% { opacity: 1; transform: translateY(-50%) scale(1.1); }
          80% { opacity: 1; transform: translateY(-50%) scale(1.1); }
          100% { left: 15%; opacity: 0; transform: translateY(-50%) scale(0.8); }
        }
        @keyframes pulseStream {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* 1. TLS HANDSHAKE & SYMMETRIC DATA LAB */}
      <div className="p-6 sm:p-8 rounded-3xl theme-subpanel border border-blue-500/30 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Title & Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl font-bold">
                🔒
              </span>
              <h3 className="font-black text-lg sm:text-xl text-slate-900 dark:text-white">
                {lang === 'ar'
                  ? 'المحاكي التفاعلي لمصافحة HTTPS وتبادل البيانات السريع'
                  : 'Interactive HTTPS TLS Handshake & Rapid Data Stream Simulator'}
              </h3>
            </div>
            <p className="text-xs text-sub leading-relaxed max-w-2xl">
              {lang === 'ar'
                ? 'يوضح هذا المحاكي التكاملي كيف يُستخدم (التشفير بالمفتاح العام) أولاً لمشاركة المفاتيح بأمان، ثم يُستخدم (التشفير المتماثل) لنقل البيانات بسرعة بين المتصفح والخادم.'
                : 'This simulator demonstrates how Public-Key Cryptography is used first to share keys safely, followed by Symmetric Cryptography for rapid data transmission.'}
            </p>
          </div>

          {/* Action Control Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={toggleAutoPlay}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shadow-md ${
                isPlaying
                  ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <span>{isPlaying ? '⏸️' : '▶️'}</span>
              <span>
                {isPlaying
                  ? (lang === 'ar' ? 'إيقاف الأنيميشن التلقائي' : 'Pause Auto Animation')
                  : (lang === 'ar' ? 'تشغيل العرض التلقائي (كفيديو)' : 'Play Full Animation Video')}
              </span>
            </button>

            <div className="flex items-center gap-1 theme-panel p-1 rounded-xl border border-slate-300 dark:border-slate-700">
              <button
                onClick={handlePrevStep}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-500/20 text-xs font-bold transition"
                title={lang === 'ar' ? 'الخطوة السابقة' : 'Previous Step'}
              >
                ◀
              </button>
              <span className="px-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                {handshakeStep + 1} / 4
              </span>
              <button
                onClick={handleNextStep}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-500/20 text-xs font-bold transition"
                title={lang === 'ar' ? 'الخطوة التالية' : 'Next Step'}
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Stepper Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stepsData.map((s) => {
            const isActive = handshakeStep === s.step;
            const isPassed = handshakeStep > s.step;
            return (
              <button
                key={s.step}
                onClick={() => {
                  playSfx('click');
                  setIsPlaying(false);
                  setHandshakeStep(s.step);
                }}
                className={`p-3 rounded-2xl border text-start transition cursor-pointer space-y-1 ${
                  isActive
                    ? 'bg-blue-500/15 border-blue-500 shadow-md ring-2 ring-blue-500/30'
                    : isPassed
                    ? 'bg-slate-500/10 border-slate-300 dark:border-slate-700 opacity-80'
                    : 'theme-panel opacity-50 border-transparent hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className={`font-mono font-black ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-sub'}`}>
                    0{s.step + 1}
                  </span>
                  {isPassed && <span className="text-emerald-500 font-bold text-xs">✓</span>}
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />}
                </div>
                <div className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                  {lang === 'ar' ? s.titleAr : s.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Information Card */}
        <div className="p-4 rounded-2xl theme-panel border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-blue-500">📍</span>
              <span>{lang === 'ar' ? currentStepInfo.titleAr : currentStepInfo.titleEn}</span>
            </h4>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentStepInfo.badgeColor}`}>
              {lang === 'ar' ? currentStepInfo.badgeAr : currentStepInfo.badgeEn}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {lang === 'ar' ? currentStepInfo.descAr : currentStepInfo.descEn}
          </p>
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-300 flex items-center gap-1.5 pt-1">
            <span>💡</span>
            <span>{lang === 'ar' ? currentStepInfo.analogyAr : currentStepInfo.analogyEn}</span>
          </div>
        </div>

        {/* MAIN ANIMATED DIAGRAM CANVAS (Browser ↔ Network Channel ↔ Server) */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 min-h-[340px] flex flex-col justify-between overflow-hidden shadow-inner">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

          {/* Node Diagram Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* LEFT NODE: BROWSER / CLIENT */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-xl space-y-3 text-center relative group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-2xl shadow-inner">
                🌐
              </div>
              <div>
                <h5 className="font-black text-sm text-white">
                  {lang === 'ar' ? 'متصفح المستخدم (Client Browser)' : 'User Browser (Client)'}
                </h5>
                <p className="text-[11px] text-slate-400 font-mono">https://secure-bank.com</p>
              </div>

              {/* Browser Keys Status */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-start">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{lang === 'ar' ? 'المفتاح المشترك:' : 'Shared Key:'}</span>
                  {handshakeStep >= 1 ? (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] border border-emerald-500/30 flex items-center gap-1">
                      <span>🔑</span>
                      <span>K_symmetric_99</span>
                    </span>
                  ) : (
                    <span className="text-slate-600 italic text-[10px]">{lang === 'ar' ? 'غير متوفر بعد' : 'Not created yet'}</span>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{lang === 'ar' ? 'مفتاح الخادم العام:' : 'Server Public Key:'}</span>
                  {handshakeStep >= 0 ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px] border border-amber-500/30">
                      🔓 PubKey_Server
                    </span>
                  ) : (
                    <span className="text-slate-600 italic text-[10px]">{lang === 'ar' ? 'في انتظار استلامه' : 'Waiting for receive'}</span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTER CHANNEL: SECURE TRANSMISSION CANAL */}
            <div className="py-6 md:py-0 flex flex-col items-center justify-center space-y-4 relative min-h-[160px]">
              <div className="w-full h-3 rounded-full bg-slate-800 border border-slate-700 relative overflow-hidden shadow-inner">
                {/* Channel Active Flow Glow */}
                <div
                  className={`h-full transition-all duration-700 ${
                    handshakeStep === 3
                      ? 'bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 animate-pulse'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Status Badge in Center */}
              <div className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-slate-300 shadow-md flex items-center gap-1.5 z-20">
                <span className={handshakeStep === 3 ? 'text-emerald-400 animate-spin' : 'text-amber-400'}>
                  {handshakeStep === 3 ? '⚡' : '🔐'}
                </span>
                <span>
                  {handshakeStep === 3
                    ? (lang === 'ar' ? 'اتصال مشفر متماثل سريع ⚡' : 'Fast Symmetric Encrypted Tunnel ⚡')
                    : (lang === 'ar' ? 'مصافحة TLS (مفتاح عام)' : 'TLS Handshake (Public Key)')}
                </span>
              </div>

              {/* ANIMATED PACKETS MOVING ACROSS CHANNEL */}
              {/* Step 0: Server to Browser (Certificate + Public Key) */}
              {handshakeStep === 0 && (
                <div
                  className="absolute z-30 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-2xl flex items-center gap-2 border border-amber-300"
                  style={{ animation: 'floatLeft 3s infinite ease-in-out' }}
                >
                  <span>📜</span>
                  <span>{lang === 'ar' ? 'شهادة CA + مفتاح عام 🔓' : 'Cert + Public Key 🔓'}</span>
                </div>
              )}

              {/* Step 1: Browser to Server (Encrypted Shared Key) */}
              {handshakeStep === 1 && (
                <div
                  className="absolute z-30 px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-2xl flex items-center gap-2 border border-purple-400"
                  style={{ animation: 'floatRight 3s infinite ease-in-out' }}
                >
                  <span>📦</span>
                  <span>{lang === 'ar' ? 'مفتاح جلسة مشفر 🔑 (PubKey)' : 'Encrypted Session Key 🔑'}</span>
                </div>
              )}

              {/* Step 2: Server Decrypting with Private Key */}
              {handshakeStep === 2 && (
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500 text-purple-200 text-xs text-center font-bold animate-bounce shadow-xl z-30">
                  <span>🔐 {lang === 'ar' ? 'الخادم يفك التشفير بالمفتاح الخاص...' : 'Server decrypting with Private Key...'}</span>
                </div>
              )}

              {/* Step 3: FAST SYMMETRIC STREAMING ANIMATION */}
              {handshakeStep === 3 && (
                <div className="w-full relative h-10 flex items-center justify-center">
                  <div
                    className={`absolute z-30 px-3 py-1 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-1.5 ${
                      packetDirection === 'toServer'
                        ? 'bg-emerald-500 text-slate-950 border border-emerald-300'
                        : 'bg-cyan-500 text-slate-950 border border-cyan-300'
                    }`}
                    style={{
                      animation: `${packetDirection === 'toServer' ? 'floatRight' : 'floatLeft'} 2s infinite linear`
                    }}
                  >
                    <span>⚡</span>
                    <span className="font-mono text-[11px]">{lastDataPacket}</span>
                    <span>🔑</span>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT NODE: WEB SERVER */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-3 text-center relative group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-2xl shadow-inner">
                🖥️
              </div>
              <div>
                <h5 className="font-black text-sm text-white">
                  {lang === 'ar' ? 'خادم الويب (Web Server)' : 'Web Server'}
                </h5>
                <p className="text-[11px] text-slate-400 font-mono">192.168.1.100</p>
              </div>

              {/* Server Keys Status */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-start">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{lang === 'ar' ? 'المفتاح الخاص (سرّي):' : 'Private Key (Secret):'}</span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono font-bold text-[10px] border border-rose-500/30">
                    🔐 PrivKey_Server
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{lang === 'ar' ? 'المفتاح المشترك الاستخراج:' : 'Extracted Shared Key:'}</span>
                  {handshakeStep >= 2 ? (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] border border-emerald-500/30 flex items-center gap-1">
                      <span>🔑</span>
                      <span>K_symmetric_99</span>
                    </span>
                  ) : (
                    <span className="text-slate-600 italic text-[10px]">{lang === 'ar' ? 'ينتظر فك التشفير' : 'Awaiting decryption'}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* BOTH HAVE SAME KEY BADGE (Shown when handshake complete step 2 or 3) */}
          {handshakeStep >= 2 && (
            <div className="relative z-20 mt-6 p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-bold flex flex-wrap items-center justify-between gap-3 shadow-xl animate-fadeIn">
              <div className="flex items-center gap-2">
                <span className="text-lg">✨</span>
                <span>
                  {lang === 'ar'
                    ? 'الآن: الطرفان (المتصفح والخادم) يمتلكان نفس المفتاح المتماثل بالضبط (K_symmetric_99)!'
                    : 'Success: Both Browser and Server now possess the exact same symmetric key (K_symmetric_99)!'}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-black font-mono text-xs">
                Symmetric Secret Key Matched 🔑
              </span>
            </div>
          )}
        </div>

        {/* Step 3 Rapid Data Trigger Panel */}
        {handshakeStep === 3 && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <h5 className="font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <span>⚡</span>
                  <span>
                    {lang === 'ar'
                      ? 'مرحلة نقل البيانات السريعة والتفاعلية (High-Speed Data Stream)'
                      : 'Interactive Rapid Encrypted Data Transmission'}
                  </span>
                </h5>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  {lang === 'ar'
                    ? 'اضغط لإرسال بيانات مشفرة في التو واللحظة لتجربة السرعة العالية للتشفير المتماثل:'
                    : 'Click to simulate instant encrypted payload transmissions using the shared symmetric key:'}
                </p>
              </div>

              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-xl shrink-0">
                {lang === 'ar' ? `حزم البيانات المرسلة: ${packetCount}` : `Total Packets Sent: ${packetCount}`}
              </div>
            </div>

            {/* Test Payloads Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { labelAr: 'طلب صفحة البنك GET /account', labelEn: 'GET /account', payload: 'GET /account (Encrypted)' },
                { labelAr: 'تحويل أموال POST /transfer $500', labelEn: 'POST /transfer $500', payload: 'POST /transfer (Encrypted)' },
                { labelAr: 'استجابة الخادم 200 OK HTML', labelEn: '200 OK HTML', payload: 'HTTP/2 200 OK (Encrypted)' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendTestPacket(item.payload)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5 shadow"
                >
                  <span>✉️</span>
                  <span>{lang === 'ar' ? item.labelAr : item.labelEn}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* INTEGRATED TEXTBOOK SUMMARY CARD: ASYMMETRIC VS SYMMETRIC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-4 rounded-2xl theme-panel border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-300 text-sm">
              <span>🔓🔐</span>
              <span>{lang === 'ar' ? 'التشفير بالمفتاح العام (غير المتماثل)' : 'Public-Key Cryptography (Asymmetric)'}</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
              {lang === 'ar'
                ? 'تُستخدم تقنية التشفير بالمفتاح العام "لمشاركة المفاتيح بأمان" في بداية الاتصال (TLS Handshake). تتميز بالتحقق من الهوية وعدم الحاجة لمفتاح سرّي مسبق، ولكنها بطيئة نسبياً في العمليات الحسابية.'
                : 'Used at connection initiation (TLS Handshake) to safely exchange secret session keys. Provides authentication without prior secret sharing, but is computationally slower.'}
            </p>
            <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px]">
              {lang === 'ar' ? 'الدور: تبادل المفاتيح بأمان 🛡️' : 'Role: Secure Key Exchange 🛡️'}
            </span>
          </div>

          <div className="p-4 rounded-2xl theme-panel border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-300 text-sm">
              <span>🔑🔑</span>
              <span>{lang === 'ar' ? 'التشفير بالمفتاح المشترك (المتماثل)' : 'Common-Key Cryptography (Symmetric)'}</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
              {lang === 'ar'
                ? 'بمجرد حصول الطرفين على نفس المفتاح المشترك، تُستخدم تقنية التشفير المتماثل "لتداول البيانات الحجمية والكبيرة بسرعة فائقة وسلاسة".'
                : 'Once both parties possess the same secret symmetric key, symmetric encryption is used for high-speed, high-volume data transmission.'}
            </p>
            <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
              {lang === 'ar' ? 'الدور: نقل البيانات بسرعة ⚡' : 'Role: High-Speed Data Stream ⚡'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MULTI-FACTOR AUTHENTICATION (MFA) SIMULATOR */}
      <div className="p-5 sm:p-6 rounded-3xl theme-subpanel border border-emerald-500/30 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h4 className="font-black text-sm sm:text-base flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <span>🛡️</span>
            <span>{lang === 'ar' ? 'محاكي المصادقة متعددة العوامل (MFA Interactive Security Lab)' : 'Multi-Factor Authentication (MFA) Interactive Lab'}</span>
          </h4>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          {lang === 'ar'
            ? 'اختر عوامل الأمان المراد تفعيلها لحسابك المصرفي وتفحص قوة الحماية ضد هجمات تسريب كلمات السر:'
            : 'Select security factors to enable on your online account and evaluate resistance against password leaks:'}
        </p>

        {/* Factor Options Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Factor 1: Knowledge */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${usePassword ? 'bg-blue-500/10 border-blue-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <span>🔑</span>
                <span>{lang === 'ar' ? '1. عامل المعرفة (Knowledge)' : '1. Knowledge Factor'}</span>
              </span>
              <input type="checkbox" checked={usePassword} onChange={(e) => setUsePassword(e.target.checked)} className="accent-blue-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub">{lang === 'ar' ? 'شيء تعرفه فقط: كلمة السر أو الـ PIN.' : 'Something you know: Password or PIN.'}</p>
          </label>

          {/* Factor 2: Possession */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${usePhoneOTP ? 'bg-amber-500/10 border-amber-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <span>📱</span>
                <span>{lang === 'ar' ? '2. عامل الملكية (Possession)' : '2. Possession Factor'}</span>
              </span>
              <input type="checkbox" checked={usePhoneOTP} onChange={(e) => setUsePhoneOTP(e.target.checked)} className="accent-amber-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub">{lang === 'ar' ? 'شيء تمتلكه: هاتف يستقبل OTP برمز 8492.' : 'Something you have: Phone receiving OTP (code: 8492).'}</p>
          </label>

          {/* Factor 3: Biometric */}
          <label className={`p-4 rounded-2xl border cursor-pointer transition space-y-1.5 ${useBiometrics ? 'bg-purple-500/10 border-purple-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                <span>👆</span>
                <span>{lang === 'ar' ? '3. عامل بيومتري (Biometric)' : '3. Biometric Factor'}</span>
              </span>
              <input type="checkbox" checked={useBiometrics} onChange={(e) => setUseBiometrics(e.target.checked)} className="accent-purple-500 cursor-pointer" />
            </div>
            <p className="text-[11px] text-sub">{lang === 'ar' ? 'سمة حيوية في جسدك: بصمة الإصبع أو الوجه.' : 'Something you are: Fingerprint or Face ID.'}</p>
          </label>
        </div>

        {/* Input Fields */}
        <div className="p-4 rounded-2xl theme-panel border border-slate-300 dark:border-slate-800 space-y-3 text-xs">
          {usePassword && (
            <div className="space-y-1">
              <label className="text-sub font-bold block">{lang === 'ar' ? 'كلمة السر (عامل المعرفة):' : 'Password (Knowledge Factor):'}</label>
              <input
                type="password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                placeholder={lang === 'ar' ? 'أدخل كلمة السر...' : 'Enter password...'}
                className="w-full p-2.5 rounded-xl theme-subpanel border text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {usePhoneOTP && (
            <div className="space-y-1">
              <label className="text-sub font-bold block">{lang === 'ar' ? 'رمز OTP المرسل لهاتفك (عامل الملكية - اكتب 8492):' : 'SMS OTP (Possession Factor - enter 8492):'}</label>
              <input
                type="text"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                placeholder="8492"
                className="w-full p-2.5 rounded-xl theme-subpanel border font-mono text-amber-600 dark:text-amber-400 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          )}

          {useBiometrics && (
            <div className="flex items-center justify-between p-2.5 rounded-xl theme-subpanel border">
              <span className="text-sub font-bold">{lang === 'ar' ? 'مسح بصمة الأصبع (عامل بيومتري):' : 'Biometric Scan (Fingerprint):'}</span>
              <button
                onClick={() => { playSfx('success'); setBioScanned(true); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${bioScanned ? 'bg-emerald-500 text-slate-950' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
              >
                {bioScanned
                  ? (lang === 'ar' ? '✓ تم المسح بنجاح' : '✓ Scanned Successfully')
                  : (lang === 'ar' ? '👆 اضغط للمسح بالبصمة' : '👆 Click to Scan')}
              </button>
            </div>
          )}

          <button
            onClick={handleTestLogin}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer shadow-md"
          >
            <span>{lang === 'ar' ? 'اختبار تسجيل الدخول والأمان' : 'Test Login & MFA Security'}</span>
          </button>
        </div>

        {loginResult && (
          <div className={`p-4 rounded-2xl text-xs leading-relaxed border animate-fadeIn ${loginResult.success ? 'bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-200' : 'bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-200'}`}>
            <span>{lang === 'ar' ? loginResult.msgAr : loginResult.msgEn}</span>
          </div>
        )}
      </div>
    </div>
  );
}
