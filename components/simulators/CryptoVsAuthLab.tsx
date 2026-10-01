'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function CryptoVsAuthLab() {
  const { lang, playSfx } = useApp();

  // -------------------------------------------------------------
  // 1. BASIC ENCRYPTION & DECRYPTION SIMULATOR STATE
  // -------------------------------------------------------------
  const [plainText, setPlainText] = useState<string>('كلمة المرور السرية: BankPass#2026');
  const [secretKey, setSecretKey] = useState<string>('KEY_99_SECURE');
  const [cipherText, setCipherText] = useState<string>('');
  const [restoredText, setRestoredText] = useState<string>('');
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false);
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);

  // XOR/Base64 helper for realistic interactive encryption demo
  const handleEncryptData = () => {
    if (!plainText.trim()) return;
    playSfx('click');
    try {
      // Create a visual ciphertext string using UTF-8 safe encoding
      const encoded = btoa(encodeURIComponent(plainText));
      const scrambled = '🔒' + encoded.split('').reverse().join('');
      setCipherText(scrambled);
      setIsEncrypted(true);
      setIsDecrypted(false);
      setRestoredText('');
    } catch {
      setCipherText('🔒#X89@!' + Math.random().toString(36).substring(2, 10));
      setIsEncrypted(true);
    }
  };

  const handleDecryptData = () => {
    if (!cipherText) return;
    playSfx('success');
    setRestoredText(plainText);
    setIsDecrypted(true);
  };

  // -------------------------------------------------------------
  // 2. TLS HANDSHAKE & RAPID DATA STREAM SIMULATOR STATE
  // -------------------------------------------------------------
  const [handshakeStep, setHandshakeStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [packetCount, setPacketCount] = useState<number>(12);
  const [lastDataPacket, setLastDataPacket] = useState<string>('GET /user/profile');
  const [packetDirection, setPacketDirection] = useState<'toServer' | 'toBrowser'>('toServer');

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
            setPacketCount(c => c + 1);
            setPacketDirection(d => d === 'toServer' ? 'toBrowser' : 'toServer');
            return 3;
          }
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playSfx]);

  const toggleAutoPlay = () => {
    playSfx('click');
    if (!isPlaying && handshakeStep === 3) {
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

  // -------------------------------------------------------------
  // 3. MFA SIMULATOR STATE
  // -------------------------------------------------------------
  const [usePassword, setUsePassword] = useState(true);
  const [usePhoneOTP, setUsePhoneOTP] = useState(false);
  const [useBiometrics, setUseBiometrics] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [bioScanned, setBioScanned] = useState(false);
  const [loginResult, setLoginResult] = useState<{ success: boolean; msgAr: string; msgEn: string } | null>(null);

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
      titleAr: "1. إرسال الشهادة الرقمية والمفتاح العام",
      titleEn: "1. Digital Certificate & Public Key",
      badgeAr: "تشفير غير متماثل (بطيء)",
      badgeEn: "Asymmetric (Public Key)",
      badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30",
      descAr: "يرسل خادم الويب الشهادة الرقمية (Digital Certificate) والمفتاح العام (Public Key) إلى المتصفح للتحقق من هوية الخادم.",
      descEn: "Web server sends its Digital Certificate and Public Key to the browser to verify identity.",
      analogyAr: "مثل إرسال الخادم صندوقاً مفتوحاً مع المفتاح العام للجميع.",
      analogyEn: "Like the server sending an open mailbox with its public key."
    },
    {
      step: 1,
      titleAr: "2. إنشاء وتشفير المفتاح المشترك",
      titleEn: "2. Session Key Encryption",
      badgeAr: "تشفير غير متماثل (بطيء)",
      badgeEn: "Asymmetric (Public Key)",
      badgeColor: "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30",
      descAr: "ينشئ المتصفح مفتاحاً متماثلاً سرّياً (Common Key)، ويشفره باستخدام 'المفتاح العام للخادم' ويرسله إلى الخادم.",
      descEn: "Browser generates a secret symmetric Common Key, encrypts it using the Server's Public Key, and transmits it.",
      analogyAr: "المتصفح يضع المفتاح المشترك داخل الصندوق ويقفله بالمفتاح العام.",
      analogyEn: "The browser places the shared key inside the box and locks it with the Public Key."
    },
    {
      step: 2,
      titleAr: "3. فك التشفير بالمفتاح الخاص وتطابق المفاتيح",
      titleEn: "3. Private Key Decryption & Shared Secret",
      badgeAr: "تطابق المفاتيح (Key Match)",
      badgeEn: "Shared Key Established",
      badgeColor: "bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30",
      descAr: "يمتلك الخادم فقط 'المفتاح الخاص السرّي (Private Key)'، فيفك به تشفير الرسالة. الآن أصبح لدى الطرفين **نفس المفتاح المتماثل بالضبط**!",
      descEn: "Server uses its exclusive Private Key to decrypt. Now **both Browser and Server hold the exact same symmetric key**!",
      analogyAr: "الخادم يفتح الصندوق بمفتاحه الخاص السرّي.",
      analogyEn: "The server unlocks the box using its exclusive Private Key."
    },
    {
      step: 3,
      titleAr: "4. تبادل البيانات المشفّرة بسرعة فائقة (التشفير المتماثل)",
      titleEn: "4. Rapid Symmetric Encrypted Data Stream",
      badgeAr: "تشفير متماثل (سريع ⚡)",
      badgeEn: "Symmetric Encryption (Fast ⚡)",
      badgeColor: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
      descAr: "بما أن الطرفين أصبحا يمتلكان نفس المفتاح المتماثل، يتم تشفير وتبادل البيانات بسرعة كفاءة فائقة (Common-Key Cryptography).",
      descEn: "Since both parties now possess the exact same secret key, all data payloads are encrypted and exchanged at high speed!",
      analogyAr: "اتصال مشفر فائق السرعة بمفتاح واحد مشترك بين الطرفين!",
      analogyEn: "Ultra-fast encrypted tunnel using a single shared symmetric key!"
    }
  ];

  const currentStepInfo = stepsData[handshakeStep];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Dynamic Keyframe Animations for Smooth Flow */}
      <style>{`
        @keyframes floatRightFast {
          0% { left: 18%; opacity: 0; transform: translateY(-50%) scale(0.9); }
          15% { opacity: 1; transform: translateY(-50%) scale(1.05); }
          85% { opacity: 1; transform: translateY(-50%) scale(1.05); }
          100% { left: 78%; opacity: 0; transform: translateY(-50%) scale(0.9); }
        }
        @keyframes floatLeftFast {
          0% { left: 78%; opacity: 0; transform: translateY(-50%) scale(0.9); }
          15% { opacity: 1; transform: translateY(-50%) scale(1.05); }
          85% { opacity: 1; transform: translateY(-50%) scale(1.05); }
          100% { left: 18%; opacity: 0; transform: translateY(-50%) scale(0.9); }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 0. MINI-LAB: BASIC CONCEPT OF ENCRYPTION & DECRYPTION (تفهيم فكرة التشفير) */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg font-bold text-sm">
              🔐
            </span>
            <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
              {lang === 'ar' ? 'أولاً: مفهوم التشفير وفك التشفير الأساسي (Encryption & Decryption)' : 'First: Core Concept of Encryption & Decryption'}
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-[11px] font-bold border border-cyan-500/20">
            {lang === 'ar' ? 'مبدأ العمل الأساسي' : 'Fundamental Principle'}
          </span>
        </div>

        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          {lang === 'ar'
            ? 'التشفير هو تحويل (البيانات المفهومة / النص الأصلي) إلى (بيانات مشفرة غير مفهومة) باستخدام مفتاح، ولا يمكن استرجاع البيانات الأصلية إلا بعملية (فك التشفير) باستخدام المفتاح المناسب.'
            : 'Encryption transforms original readable data into unreadable ciphertext using a key. The original data can only be restored via Decryption using the matching key.'}
        </p>

        {/* Interactive Encryption Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Step A: Plaintext Input */}
          <div className="p-3.5 rounded-xl theme-panel border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
              <span>📄 {lang === 'ar' ? '1. البيانات المفهومة (Plaintext)' : '1. Plaintext'}</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">سليمة</span>
            </div>
            <input
              type="text"
              value={plainText}
              onChange={(e) => {
                setPlainText(e.target.value);
                setIsEncrypted(false);
                setIsDecrypted(false);
              }}
              placeholder={lang === 'ar' ? 'اكتب بيانات للتشفير...' : 'Enter message...'}
              className="w-full p-2 rounded-lg theme-subpanel border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleEncryptData}
              className="w-full py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition cursor-pointer shadow flex items-center justify-center gap-1.5"
            >
              <span>🔒</span>
              <span>{lang === 'ar' ? 'تشفير باستخدام المفتاح ➔' : 'Encrypt with Key ➔'}</span>
            </button>
          </div>

          {/* Step B: Ciphertext Output */}
          <div className="p-3.5 rounded-xl theme-panel border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
              <span>📦 {lang === 'ar' ? '2. النص المشفر (Ciphertext)' : '2. Ciphertext'}</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">غير مفهوم</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 font-mono text-[11px] truncate min-h-[34px] flex items-center">
              {isEncrypted ? cipherText : <span className="text-slate-600 italic">{lang === 'ar' ? 'اضغط زر التشفير...' : 'Awaiting encryption...'}</span>}
            </div>
            <button
              disabled={!isEncrypted}
              onClick={handleDecryptData}
              className={`w-full py-1.5 rounded-lg font-bold text-xs transition flex items-center justify-center gap-1.5 ${
                isEncrypted
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow'
                  : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>🔓</span>
              <span>{lang === 'ar' ? 'فك التشفير بالمفتاح ➔' : 'Decrypt with Key ➔'}</span>
            </button>
          </div>

          {/* Step C: Decrypted Restored Result */}
          <div className="p-3.5 rounded-xl theme-panel border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
              <span>✨ {lang === 'ar' ? '3. البيانات المسترجعة' : '3. Restored Data'}</span>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">مفهومة مجدداً</span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-xs min-h-[34px] flex items-center">
              {isDecrypted ? restoredText : <span className="text-slate-500 italic font-normal">{lang === 'ar' ? 'اضغط زر فك التشفير...' : 'Awaiting decryption...'}</span>}
            </div>
            <div className="text-[10px] text-sub text-center font-mono">
              🔑 {lang === 'ar' ? `المفتاح المستخدم: ${secretKey}` : `Key: ${secretKey}`}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. TLS HANDSHAKE & RAPID SYMMETRIC DATA STREAM SIMULATOR (المحاكي التفاعلي) */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-6 rounded-2xl theme-subpanel border border-blue-500/30 space-y-4 shadow-xl relative overflow-hidden">
        {/* Header Title & Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg font-bold text-sm">
                🛡️
              </span>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                {lang === 'ar'
                  ? 'ثانياً: محاكي مصافحة HTTPS وتبادل البيانات السريع بين المتصفح والخادم'
                  : 'Second: HTTPS TLS Handshake & Rapid Data Stream Simulator'}
              </h3>
            </div>
            <p className="text-xs text-sub leading-relaxed max-w-2xl">
              {lang === 'ar'
                ? 'يوضح كيف يُستخدم التشفير بالمفتاح العام أولاً لتبادل المفتاح بأمان، ثم التشفير المتماثل لنقل البيانات بسرعة.'
                : 'Demonstrates how Public-Key Cryptography is used first to share keys safely, then Symmetric Cryptography for rapid data stream.'}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={toggleAutoPlay}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow ${
                isPlaying
                  ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <span>{isPlaying ? '⏸️' : '▶️'}</span>
              <span>
                {isPlaying
                  ? (lang === 'ar' ? 'إيقاف التلقائي' : 'Pause Auto')
                  : (lang === 'ar' ? 'عرض تلقائي (كفيديو)' : 'Auto Play Video')}
              </span>
            </button>

            <div className="flex items-center gap-1 theme-panel p-1 rounded-lg border border-slate-300 dark:border-slate-700">
              <button
                onClick={handlePrevStep}
                className="px-2 py-1 rounded hover:bg-slate-500/20 text-xs font-bold transition"
                title={lang === 'ar' ? 'الخطوة السابقة' : 'Previous Step'}
              >
                ◀
              </button>
              <span className="px-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                {handshakeStep + 1} / 4
              </span>
              <button
                onClick={handleNextStep}
                className="px-2 py-1 rounded hover:bg-slate-500/20 text-xs font-bold transition"
                title={lang === 'ar' ? 'الخطوة التالية' : 'Next Step'}
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Stepper Buttons */}
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
                className={`p-2.5 rounded-xl border text-start transition cursor-pointer space-y-0.5 ${
                  isActive
                    ? 'bg-blue-500/15 border-blue-500 shadow ring-1 ring-blue-500/40'
                    : isPassed
                    ? 'bg-slate-500/10 border-slate-300 dark:border-slate-700 opacity-80'
                    : 'theme-panel opacity-50 border-transparent hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-[10px]">
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

        {/* Active Step Description Banner */}
        <div className="p-3.5 rounded-xl theme-panel border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-blue-500">📍</span>
              <span>{lang === 'ar' ? currentStepInfo.titleAr : currentStepInfo.titleEn}</span>
            </h4>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${currentStepInfo.badgeColor}`}>
              {lang === 'ar' ? currentStepInfo.badgeAr : currentStepInfo.badgeEn}
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
            {lang === 'ar' ? currentStepInfo.descAr : currentStepInfo.descEn}
          </p>
        </div>

        {/* MAIN COMPACT ANIMATED CANVAS (Browser ↔ Network ↔ Server) */}
        <div className="relative p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 min-h-[220px] flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            
            {/* LEFT NODE: BROWSER */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/40 shadow space-y-2 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xl">
                🌐
              </div>
              <div>
                <h5 className="font-bold text-xs text-white">
                  {lang === 'ar' ? 'متصفح المستخدم' : 'User Browser'}
                </h5>
                <p className="text-[10px] text-slate-400 font-mono">https://bank.com</p>
              </div>

              <div className="pt-1.5 border-t border-slate-800 space-y-1 text-[10px] text-start">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'المفتاح المشترك:' : 'Shared Key:'}</span>
                  {handshakeStep >= 1 ? (
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                      🔑 K_symmetric
                    </span>
                  ) : (
                    <span className="text-slate-600 italic">{lang === 'ar' ? 'غير متوفر' : 'None'}</span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTER CHANNEL: ANIMATED PACKETS */}
            <div className="py-2 md:py-0 flex flex-col items-center justify-center space-y-2 relative min-h-[110px]">
              <div className="w-full h-2.5 rounded-full bg-slate-800 border border-slate-700 relative overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ${
                    handshakeStep === 3
                      ? 'bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 animate-pulse'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                  style={{ width: '100%' }}
                />
              </div>

              {/* Status Badge */}
              <div className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300 shadow flex items-center gap-1">
                <span>{handshakeStep === 3 ? '⚡' : '🔐'}</span>
                <span>
                  {handshakeStep === 3
                    ? (lang === 'ar' ? 'نقل مشفر متماثل سريع ⚡' : 'Fast Symmetric Stream ⚡')
                    : (lang === 'ar' ? 'مصافحة TLS (مفتاح عام)' : 'TLS Handshake')}
                </span>
              </div>

              {/* ANIMATED PACKETS MOVING */}
              {/* Step 0: Server to Browser (Certificate + Public Key) */}
              {handshakeStep === 0 && (
                <div
                  className="absolute z-30 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px] shadow flex items-center gap-1.5 border border-amber-300"
                  style={{ animation: 'floatLeftFast 2.5s infinite ease-in-out' }}
                >
                  <span>📜</span>
                  <span>{lang === 'ar' ? 'الشهادة الرقمية + مفتاح عام 🔓' : 'Digital Cert + Public Key 🔓'}</span>
                </div>
              )}

              {/* Step 1: Browser to Server (Encrypted Shared Key) */}
              {handshakeStep === 1 && (
                <div
                  className="absolute z-30 px-2.5 py-1 rounded-lg bg-purple-600 text-white font-bold text-[11px] shadow flex items-center gap-1.5 border border-purple-400"
                  style={{ animation: 'floatRightFast 2.5s infinite ease-in-out' }}
                >
                  <span>📦</span>
                  <span>{lang === 'ar' ? 'مفتاح جلسة مشفر 🔑' : 'Encrypted Key 🔑'}</span>
                </div>
              )}

              {/* Step 2: Server Decrypting */}
              {handshakeStep === 2 && (
                <div className="p-2 rounded-xl bg-purple-950/90 border border-purple-500 text-purple-200 text-[11px] text-center font-bold animate-bounce shadow">
                  <span>🔐 {lang === 'ar' ? 'الخادم يفك التشفير بالمفتاح الخاص...' : 'Decrypting with Private Key...'}</span>
                </div>
              )}

              {/* Step 3: FAST BIDIRECTIONAL STREAM */}
              {handshakeStep === 3 && (
                <div className="w-full relative h-8 flex items-center justify-center">
                  <div
                    className={`absolute z-30 px-2.5 py-0.5 rounded-lg font-bold text-[11px] shadow flex items-center gap-1 ${
                      packetDirection === 'toServer'
                        ? 'bg-emerald-500 text-slate-950 border border-emerald-300'
                        : 'bg-cyan-500 text-slate-950 border border-cyan-300'
                    }`}
                    style={{
                      animation: `${packetDirection === 'toServer' ? 'floatRightFast' : 'floatLeftFast'} 1.8s infinite linear`
                    }}
                  >
                    <span>⚡</span>
                    <span className="font-mono">{lastDataPacket}</span>
                    <span>🔑</span>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT NODE: WEB SERVER */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow space-y-2 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xl">
                🖥️
              </div>
              <div>
                <h5 className="font-bold text-xs text-white">
                  {lang === 'ar' ? 'خادم الويب' : 'Web Server'}
                </h5>
                <p className="text-[10px] text-slate-400 font-mono">192.168.1.100</p>
              </div>

              <div className="pt-1.5 border-t border-slate-800 space-y-1 text-[10px] text-start">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{lang === 'ar' ? 'المفتاح الخاص:' : 'Private Key:'}</span>
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono font-bold border border-rose-500/30">
                    🔐 PrivKey
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTH HAVE SAME KEY BANNER */}
          {handshakeStep >= 2 && (
            <div className="relative z-20 mt-3 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-bold flex items-center justify-between gap-2 shadow animate-fadeIn">
              <div className="flex items-center gap-1.5">
                <span>✨</span>
                <span>
                  {lang === 'ar'
                    ? 'الطرفان يمتلكان نفس المفتاح المتماثل بالضبط!'
                    : 'Both Browser & Server now hold the exact same symmetric key!'}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black font-mono text-[10px]">
                Key Matched 🔑
              </span>
            </div>
          )}
        </div>

        {/* Step 3 Data Stream Actions */}
        {handshakeStep === 3 && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 animate-fadeIn text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1 text-[11px]">
                <span>⚡</span>
                <span>{lang === 'ar' ? 'إرسال حزم بيانات مسرّعة بالمفتاح المتماثل:' : 'Rapid Data Stream Payload Triggers:'}</span>
              </span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                {lang === 'ar' ? `الحزم المرسلة: ${packetCount}` : `Packets: ${packetCount}`}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { labelAr: 'GET /account', payload: 'GET /account (Encrypted)' },
                { labelAr: 'POST /transfer $500', payload: 'POST /transfer (Encrypted)' },
                { labelAr: '200 OK Response', payload: '200 OK (Encrypted)' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendTestPacket(item.payload)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition cursor-pointer flex items-center gap-1 shadow"
                >
                  <span>✉️</span>
                  <span>{item.labelAr}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. MULTI-FACTOR AUTHENTICATION (MFA) SIMULATOR (محاكي المصادقة) */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
          <h4 className="font-black text-xs sm:text-sm flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span>🛡️</span>
            <span>{lang === 'ar' ? 'ثالثاً: محاكي المصادقة متعددة العوامل (MFA Interactive Security Lab)' : 'Third: Multi-Factor Authentication (MFA) Interactive Lab'}</span>
          </h4>
        </div>

        <p className="text-xs text-sub leading-relaxed">
          {lang === 'ar'
            ? 'اختر عوامل الأمان المراد تفعيلها لحسابك المصرفي وتفحص قوة الحماية ضد هجمات تسريب كلمات السر:'
            : 'Select security factors to enable on your online account and evaluate resistance against password leaks:'}
        </p>

        {/* Factor Options Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          {/* Factor 1: Knowledge */}
          <label className={`p-3 rounded-xl border cursor-pointer transition space-y-1 ${usePassword ? 'bg-blue-500/10 border-blue-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <span>🔑</span>
                <span>{lang === 'ar' ? '1. المعرفة (Knowledge)' : '1. Knowledge'}</span>
              </span>
              <input type="checkbox" checked={usePassword} onChange={(e) => setUsePassword(e.target.checked)} className="accent-blue-500 cursor-pointer" />
            </div>
            <p className="text-[10px] text-sub">{lang === 'ar' ? 'كلمة السر أو الـ PIN.' : 'Password or PIN.'}</p>
          </label>

          {/* Factor 2: Possession */}
          <label className={`p-3 rounded-xl border cursor-pointer transition space-y-1 ${usePhoneOTP ? 'bg-amber-500/10 border-amber-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <span>📱</span>
                <span>{lang === 'ar' ? '2. الملكية (Possession)' : '2. Possession'}</span>
              </span>
              <input type="checkbox" checked={usePhoneOTP} onChange={(e) => setUsePhoneOTP(e.target.checked)} className="accent-amber-500 cursor-pointer" />
            </div>
            <p className="text-[10px] text-sub">{lang === 'ar' ? 'رمز OTP هاتف (8492).' : 'Phone OTP (8492).'}</p>
          </label>

          {/* Factor 3: Biometric */}
          <label className={`p-3 rounded-xl border cursor-pointer transition space-y-1 ${useBiometrics ? 'bg-purple-500/10 border-purple-500' : 'theme-panel border-slate-300 dark:border-slate-800'}`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                <span>👆</span>
                <span>{lang === 'ar' ? '3. بيومتري (Biometric)' : '3. Biometric'}</span>
              </span>
              <input type="checkbox" checked={useBiometrics} onChange={(e) => setUseBiometrics(e.target.checked)} className="accent-purple-500 cursor-pointer" />
            </div>
            <p className="text-[10px] text-sub">{lang === 'ar' ? 'بصمة الإصبع أو الوجه.' : 'Fingerprint or Face ID.'}</p>
          </label>
        </div>

        {/* Inputs */}
        <div className="p-3 rounded-xl theme-panel border border-slate-300 dark:border-slate-800 space-y-2 text-xs">
          {usePassword && (
            <div className="space-y-1">
              <label className="text-sub font-bold block text-[11px]">{lang === 'ar' ? 'كلمة السر:' : 'Password:'}</label>
              <input
                type="password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                placeholder={lang === 'ar' ? 'أدخل كلمة السر...' : 'Enter password...'}
                className="w-full p-2 rounded-lg theme-subpanel border text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {usePhoneOTP && (
            <div className="space-y-1">
              <label className="text-sub font-bold block text-[11px]">{lang === 'ar' ? 'رمز OTP (اكتب 8492):' : 'SMS OTP (enter 8492):'}</label>
              <input
                type="text"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                placeholder="8492"
                className="w-full p-2 rounded-lg theme-subpanel border font-mono text-amber-600 dark:text-amber-400 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          )}

          {useBiometrics && (
            <div className="flex items-center justify-between p-2 rounded-lg theme-subpanel border text-xs">
              <span className="text-sub font-bold text-[11px]">{lang === 'ar' ? 'مسح بصمة الأصبع:' : 'Biometric Scan:'}</span>
              <button
                onClick={() => { playSfx('success'); setBioScanned(true); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${bioScanned ? 'bg-emerald-500 text-slate-950' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
              >
                {bioScanned
                  ? (lang === 'ar' ? '✓ تم المسح' : '✓ Scanned')
                  : (lang === 'ar' ? '👆 اضغط للمسح' : '👆 Click to Scan')}
              </button>
            </div>
          )}

          <button
            onClick={handleTestLogin}
            className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer shadow"
          >
            <span>{lang === 'ar' ? 'اختبار تسجيل الدخول والأمان' : 'Test Login & MFA Security'}</span>
          </button>
        </div>

        {loginResult && (
          <div className={`p-3 rounded-xl text-xs leading-relaxed border animate-fadeIn ${loginResult.success ? 'bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-200' : 'bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-200'}`}>
            <span>{lang === 'ar' ? loginResult.msgAr : loginResult.msgEn}</span>
          </div>
        )}
      </div>
    </div>
  );
}
