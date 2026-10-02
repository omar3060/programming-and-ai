'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';
import { CryptoVsAuthLab } from '@/components/simulators/CryptoVsAuthLab';

export function Lesson2_1() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(0, 10);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showPauseThink, setShowPauseThink] = useState(false);
  const [engineerChoice, setEngineerChoice] = useState<'passOnly' | 'passMFA' | null>(null);
  const [showExamAnswer, setShowExamAnswer] = useState(false);

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    playSfx('click');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Lesson Header Banner */}
      <header className="theme-panel border border-rose-500/20 rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden bg-gradient-to-r from-rose-500/10 via-purple-500/5 to-transparent">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500" />
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold border border-rose-500/20">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-1' : 'Unit 2: Cybersecurity • Lesson 2-1'}
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            {lang === 'ar' ? '2-1 تقنيات التشفير والمصادقة' : '2-1 Cryptographic Technologies and Authentication'}
          </h1>
          <p className="text-sub text-xs sm:text-base max-w-3xl leading-relaxed">
            {lang === 'ar'
              ? 'كيف تعمل تقنيات التشفير والمصادقة معاً للحفاظ على أمان الاتصال والخدمات عبر الإنترنت؟'
              : 'How do cryptographic technologies and authentication work together to keep online communication and services secure?'}
          </p>
        </div>
      </header>

      {/* Main Concept Card */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm">💡</span>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'الفكرة الأساسية (Key Fact)' : 'Key Fact'}
          </h2>
        </div>
        <blockquote className="p-3.5 sm:p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-900 dark:text-amber-200 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'يعتمد الاتصال والخدمات الآمنة عبر الإنترنت على الجمع بين التشفير والمصادقة، وليس على تقنية واحدة فقط.'
            : 'Secure online communication and services depend on combining cryptography and authentication — not on any single technology.'}
        </blockquote>
      </section>

      {/* Section 1: How HTTPS Works */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400">
            {lang === 'ar' ? '1. كيف تعمل اتصالات HTTPS' : '1. How HTTPS Communication Works'}
          </h2>
          <span className="text-[11px] font-mono bg-rose-500/10 text-rose-600 dark:text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            HTTPS (HTTP Secure)
          </span>
        </div>

        <div className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed space-y-3">
          <p>
            {lang === 'ar'
              ? 'بروتوكول HTTPS هو بروتوكول HTTP نقل مؤمن عبر اتصال TLS. يوفر TLS سرية البيانات وسامتها أثناء النقل، ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق، وتسمى خطوات إنشاء الاتصال الآمن مصافحة TLS (TLS Handshake).'
              : 'HTTPS (HTTP Secure) is a communication protocol that adds TLS encryption to HTTP. By providing encryption, detection of tampering, and verification of the communication partner, it protects users from threats such as eavesdropping, tampering, and impersonation. The procedure for establishing a secure communication is called the TLS handshake.'}
          </p>
        </div>

        {/* TLS Handshake Stages Table - Perfectly Aligned via text-start */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <table className="w-full text-start text-xs sm:text-sm text-slate-800 dark:text-slate-300">
            <thead className="theme-subpanel text-slate-900 dark:text-slate-200 uppercase text-[11px] sm:text-xs font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4 text-start font-black shrink-0">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[200px]">{lang === 'ar' ? 'ما يحدث (Mechanism)' : 'What Happens'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[160px]">{lang === 'ar' ? 'طريقة التشفير المستخدمة' : 'Cryptographic Method Used'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">① {lang === 'ar' ? 'الاتصال والتحقق' : 'Connection'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'يرسل خادم الويب شهادته الرقمية والمفتاح العام إلى المتصفح. يتحقق المتصفح من أصالة الخادم عبر جهة التصديق (CA).'
                    : 'The web server sends a digital certificate and a public key to the browser. The browser verifies the server\'s authenticity through a certificate authority (CA).'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-600 dark:text-emerald-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">② {lang === 'ar' ? 'تبادل المفتاح' : 'Key Exchange'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'ينشئ المتصفح مفتاحاً مشتركاً (Common key) للاتصال، ويشفره بمفتاح الخادم العام ويرسله. يفك الخادم تشفيره بمفتاحه الخاص للحصول على المفتاح المشترك.'
                    : 'The browser creates a common key for communication, encrypts it with the server\'s public key, and sends it. The server decrypts it with its private key to obtain the common key.'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-600 dark:text-emerald-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">③ {lang === 'ar' ? 'تبادل البيانات' : 'Data Communication'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'يتم تشفير وتداول البيانات بسرعة وكفاءة باستخدام المفتاح المشترك الذي تم تبادله.'
                    : 'Data is encrypted and exchanged using the shared common key.'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-indigo-600 dark:text-indigo-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير المتماثل / بالمفتاح المشترك (Common-key cryptography)' : 'Common-key cryptography'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="p-3.5 sm:p-4 theme-subpanel rounded-xl border-l-4 border-rose-500 text-xs text-slate-700 dark:text-slate-300">
          💡 <strong>{lang === 'ar' ? 'ملاحظة الفكر التكاملي:' : 'Division of Roles:'}</strong>{' '}
          {lang === 'ar'
            ? 'تُستخدم تقنية التشفير بالمفتاح العام "لمشاركة المفاتيح بأمان"، وتُستخدم تقنية التشفير المتماثل "لتبادل البيانات الحجمية بسرعة". يتيح هذا توزيع الأدوار تحقيق كل من الأمان وسرعة الاتصال في وقت واحد.'
            : 'Public-key cryptography is used to "share keys safely," and common-key cryptography is used to "exchange large amounts of data quickly." This division of roles makes it possible to achieve both security and communication speed.'}
        </blockquote>
      </section>

      {/* Interactive CryptoVsAuthLab Simulator */}
      <section>
        <CryptoVsAuthLab />
      </section>

      {/* Section 2: Authentication in Real Services */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400">
            {lang === 'ar' ? '2. استخدام المصادقة في الخدمات الفعلية' : '2. Use of Authentication in Real Services'}
          </h2>
          <span className="text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            HTTPS (HTTP Secure)
          </span>
        </div>

        <div className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed space-y-3">
          <p>
            {lang === 'ar'
              ? 'بروتوكول HTTPS هو بروتوكول HTTP نقل مؤمن عبر اتصال TLS. يوفر TLS سرية البيانات وسامتها أثناء النقل، ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق، وتسمى خطوات إنشاء الاتصال الآمن مصافحة TLS (TLS Handshake).'
              : 'HTTPS (HTTP Secure) is a communication protocol that adds TLS encryption to HTTP. By providing encryption, detection of tampering, and verification of the communication partner, it protects users from threats such as eavesdropping, tampering, and impersonation. The procedure for establishing a secure communication is called the TLS handshake.'}
          </p>
        </div>

        {/* TLS Handshake Stages Table - Perfectly Aligned via text-start */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <table className="w-full text-start text-xs sm:text-sm text-slate-800 dark:text-slate-300">
            <thead className="theme-subpanel text-slate-900 dark:text-slate-200 uppercase text-[11px] sm:text-xs font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4 text-start font-black shrink-0">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[200px]">{lang === 'ar' ? 'ما يحدث (Mechanism)' : 'What Happens'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[160px]">{lang === 'ar' ? 'طريقة التشفير المستخدمة' : 'Cryptographic Method Used'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">① {lang === 'ar' ? 'الاتصال والتحقق' : 'Connection'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'يرسل خادم الويب شهادته الرقمية والمفتاح العام إلى المتصفح. يتحقق المتصفح من أصالة الخادم عبر جهة التصديق (CA).'
                    : 'The web server sends a digital certificate and a public key to the browser. The browser verifies the server\'s authenticity through a certificate authority (CA).'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-600 dark:text-emerald-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">② {lang === 'ar' ? 'تبادل المفتاح' : 'Key Exchange'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'ينشئ المتصفح مفتاحاً مشتركاً (Common key) للاتصال، ويشفره بمفتاح الخادم العام ويرسله. يفك الخادم تشفيره بمفتاحه الخاص للحصول على المفتاح المشترك.'
                    : 'The browser creates a common key for communication, encrypts it with the server\'s public key, and sends it. The server decrypts it with its private key to obtain the common key.'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-600 dark:text-emerald-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 align-top text-start whitespace-nowrap">③ {lang === 'ar' ? 'تبادل البيانات' : 'Data Communication'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">
                  {lang === 'ar'
                    ? 'يتم تشفير وتداول البيانات بسرعة وكفاءة باستخدام المفتاح المشترك الذي تم تبادله.'
                    : 'Data is encrypted and exchanged using the shared common key.'}
                </td>
                <td className="p-3 sm:p-4 font-semibold text-indigo-600 dark:text-indigo-400 align-top text-start">
                  {lang === 'ar' ? 'التشفير المتماثل / بالمفتاح المشترك (Common-key cryptography)' : 'Common-key cryptography'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="p-3.5 sm:p-4 theme-subpanel rounded-xl border-l-4 border-rose-500 text-xs text-slate-700 dark:text-slate-300">
          💡 <strong>{lang === 'ar' ? 'ملاحظة الفكر التكاملي:' : 'Division of Roles:'}</strong>{' '}
          {lang === 'ar'
            ? 'تُستخدم تقنية التشفير بالمفتاح العام "لمشاركة المفاتيح بأمان"، وتُستخدم تقنية التشفير المتماثل "لتبادل البيانات الحجمية بسرعة". يتيح هذا توزيع الأدوار تحقيق كل من الأمان وسرعة الاتصال في وقت واحد.'
            : 'Public-key cryptography is used to "share keys safely," and common-key cryptography is used to "exchange large amounts of data quickly." This division of roles makes it possible to achieve both security and communication speed.'}
        </blockquote>
      </section>

      {/* Interactive CryptoVsAuthLab Simulator */}
      <section>
        <CryptoVsAuthLab />
      </section>

      {/* Section 2: Authentication in Real Services */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400">
            {lang === 'ar' ? '2. استخدام المصادقة في الخدمات الفعلية' : '2. Use of Authentication in Real Services'}
          </h2>
          <span className="text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            Multi-Factor Authentication (MFA / 2FA)
          </span>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'تعتمد العديد من الخدمات على المصادقة متعددة العوامل (MFA)، حيث يتم الجمع بين عاملتين أو أكثر من العوامل الثلاثة (المعرفة، الملكية، والسمات البيومترية). عند استخدام عامل واحد فقط، يمكن للطرف غير المصرح به الوصول إذا تم كسر ذلك العامل. ولكن بالجمع بين عدة عوامل، حتى لو تم تسريب كلمة السر (عامل المعرفة)، فلن يستطيع المخترق الدخول دون امتلاك جهاز الهاتف (عامل الملكية).'
            : 'Many services adopt multi-factor authentication (MFA), in which two or more of the three factors of authentication (knowledge, possession, biometric) are combined. When only one factor is used, an unauthorized party can gain access if that factor is broken. By combining multiple factors, even if one is broken, another can still prevent access.'}
        </p>

        {/* Real Service Authentication Examples Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <table className="w-full text-start text-xs sm:text-sm text-slate-800 dark:text-slate-300">
            <thead className="theme-subpanel text-slate-900 dark:text-slate-200 uppercase text-[11px] sm:text-xs font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4 text-start font-black min-w-[150px]">{lang === 'ar' ? 'الخدمة (Service)' : 'Service'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[200px]">{lang === 'ar' ? 'أمثلة المصادقة المستخدمة' : 'Examples of Authentication Used'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[140px]">{lang === 'ar' ? 'تصنيف العوامل' : 'Factors Category'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-white align-top text-start">{lang === 'ar' ? 'الخدمات المصرفية عبر الإنترنت (Online Banking)' : 'Online banking'}</td>
                <td className="p-3 sm:p-4 align-top text-start">{lang === 'ar' ? 'كلمة المرور + كلمة المرور لمرة واحدة (OTP)' : 'Password + one-time password'}</td>
                <td className="p-3 sm:p-4 font-bold text-xs sm:text-sm text-amber-700 dark:text-amber-400 align-top text-start">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-white align-top text-start">{lang === 'ar' ? 'تسجيل دخول وسائل التواصل (SNS Login)' : 'SNS login'}</td>
                <td className="p-3 sm:p-4 align-top text-start">{lang === 'ar' ? 'كلمة المرور + رمز رسالة SMS' : 'Password + SMS authentication'}</td>
                <td className="p-3 sm:p-4 font-bold text-xs sm:text-sm text-amber-700 dark:text-amber-400 align-top text-start">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-white align-top text-start">{lang === 'ar' ? 'التسوق الإلكتروني (Online Shopping)' : 'Online shopping'}</td>
                <td className="p-3 sm:p-4 align-top text-start">{lang === 'ar' ? 'كلمة المرور + رمز كود 3-D Secure' : 'Password + one-time code from 3-D Secure'}</td>
                <td className="p-3 sm:p-4 font-bold text-xs sm:text-sm text-amber-700 dark:text-amber-400 align-top text-start">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-white align-top text-start">{lang === 'ar' ? 'تسجيل كمبيوتر الشركة (Company Laptop)' : 'Company laptop login'}</td>
                <td className="p-3 sm:p-4 align-top text-start">{lang === 'ar' ? 'البطاقة الذكية + مصادقة بصمة الإصبع' : 'Smart card + fingerprint authentication'}</td>
                <td className="p-3 sm:p-4 font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 align-top text-start">{lang === 'ar' ? 'الملكية + السمات البيومترية' : 'Possession + Biometric'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Combinations of Security Technologies */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400">
            {lang === 'ar' ? '3. تركيبات تقنيات الأمان' : '3. Combinations of Security Technologies'}
          </h2>
          <span className="text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            Layered Protection
          </span>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'لا يتحقق الأمان والخدمات الآمنة عبر الإنترنت من خلال تقنية واحدة، بل من خلال كبس وتجميع عدة تقنيات أمان معاً.'
            : 'Safe communication and services are achieved not by a single technology, but by combining multiple security technologies.'}
        </p>

        {/* 4 Technologies Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-sm sm:text-base mb-1">
              {lang === 'ar' ? '1. التشفير (Encryption)' : '1. Encryption (common/public key)'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يمنع قراءة محتوى الاتصال من قِبل أطراف ثالثة (السرية والخفاء).'
                : 'Prevents communication content from being read by third parties.'}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-sm sm:text-base mb-1">
              {lang === 'ar' ? '2. التوقيع الرقمي (Digital Signature)' : '2. Digital Signature'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يكتشف أي تلاعب بالبيانات أو انتحال شخصية المرسل، ويمنع المرسل من إنكار إرسالها (عدم التنصل Non-repudiation).'
                : 'Detects data tampering or impersonation of the sender, and makes it impossible for the sender to deny having sent the data afterward (non-repudiation).'}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-sm sm:text-base mb-1">
              {lang === 'ar' ? '3. الشهادة الرقمية (Digital Certificate)' : '3. Digital Certificate'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تثبت للمتصفح أن الطرف المقابل والموقع حقيقي وموثوق من جهة تصديق (CA).'
                : 'Verifies that the communication partner is authentic.'}
            </p>
          </div>

          <div className="p-3.5 sm:p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-sm sm:text-base mb-1">
              {lang === 'ar' ? '4. المصادقة متعددة العوامل (MFA)' : '4. Multi-Factor Authentication'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تمنع تسجيل الدخول غير المصرح به حتى عند تسرب كلمة المرور.'
                : 'Prevents unauthorized logins.'}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* UNIFIED TEXTBOOK ENRICHMENT SECTION (ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-1) */}
      {/* ========================================================================= */}
      <section className="theme-panel border border-amber-500/30 p-5 sm:p-8 rounded-3xl space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-amber-500 uppercase font-bold tracking-wider">
              {lang === 'ar' ? 'ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-1' : 'Official Ministry Textbook Activities & Features (Lesson 2-1)'}
            </span>
            <h3 className="text-base sm:text-xl font-black mt-0.5 flex items-center gap-2 text-slate-900 dark:text-white">
              <span>🎓</span>
              {lang === 'ar'
                ? 'أنشطة: توقف وفكر • فكر كمهندس • سياق جديد • نمط الامتحان'
                : 'Activities: Pause & Think • Think as Engineer • New Context • Exam Style'}
            </h3>
          </div>
          <span className="text-xs text-sub font-semibold shrink-0">ص 35 - ص 38</span>
        </div>

        {/* 1. 💡 PAUSE & THINK (توقف وفكر - ص 35 في كتاب الوزارة) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <span>💡</span>
              <span>{lang === 'ar' ? 'توقف وفكر (PAUSE & THINK - كتاب الوزارة ص 35)' : 'PAUSE & THINK (Textbook p. 37)'}</span>
            </span>
          </div>

          <blockquote className="p-3 sm:p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«إذا تسرّبت كلمة المرور، لماذا يمكن لعامِلٍ ثاني يُرسَل إلى هاتفٍ أن يظل يحمي الحساب؟»'
              : '"If a password is leaked, why can a second factor sent to a phone still keep the account safe?"'}
          </blockquote>

          <button
            onClick={() => { playSfx('click'); setShowPauseThink(!showPauseThink); }}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition cursor-pointer shadow flex items-center gap-2"
          >
            <span>{showPauseThink ? '🙈' : '👁️'}</span>
            <span>
              {showPauseThink
                ? (lang === 'ar' ? 'إخفاء الإجابة النموذجية من كتاب الوزارة' : 'Hide Answer')
                : (lang === 'ar' ? 'عرض الإجابة النموذجية من كتاب الوزارة' : 'Show Answer')}
            </span>
          </button>

          {showPauseThink && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed animate-fadeIn space-y-1">
              <strong>{lang === 'ar' ? 'الإجابة النموذجية الحرفية لكتاب الوزارة:' : 'Verbatim Textbook Rationale:'}</strong>
              <p>
                {lang === 'ar'
                  ? 'لأنه حتى لو تم كشف كلمة المرور (عامل المعرفة Knowledge)، فإن تسجيل الدخول يتطلب رمزاً يرسل إلى هاتف المستخدم (عامل الملكية Possession)، والمهاجم البعيد لا يملك جهاز الهاتف المحمول الخاص بالمستخدم، وبالتالي يظل الحساب محمياً من الاختراق.'
                  : 'Because even if an attacker obtains the password (knowledge factor), they do not possess your physical mobile phone (possession factor). Without the physical device, unauthorized login remains blocked.'}
              </p>
            </div>
          )}
        </div>

        {/* 2. ⚙️ THINK AS AN ENGINEER (فكر كمهندس - ص 35 / 39 في كتاب الوزارة) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-indigo-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center gap-1.5">
              <span>⚙️</span>
              <span>{lang === 'ar' ? 'فكّر كمهندس — استقرئ مع صاحبك واتخذ القرار (ص 35)' : 'Think as an Engineer — Investigate & Decide (p. 39)'}</span>
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm leading-relaxed text-indigo-900 dark:text-indigo-200 space-y-1.5">
            <strong>{lang === 'ar' ? 'السيناريو الرسمي من كتاب الوزارة:' : 'Verbatim Textbook Scenario:'}</strong>
            <p className="italic">
              {lang === 'ar'
                ? '«ناقشت للتو في ملاحظة «توقّف وفكّر» استخدام المصادقة متعددة العوامل لحماية الحسابات. اختر مدرسة في مدينتك تبني بوابة جديدة للطلاب للاطلاع على درجاتهم ودفع المصروفات. بصفتك مهندساً سيبرانياً، قرر وأوصِ بالطريقة الأنسب لتسجيل الدخول.»'
                : '"A school in your city is building an online portal where students check grades and pay fees. You must choose how students log in. Recommend the better choice for this service."'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => { playSfx('click'); setEngineerChoice('passOnly'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'passOnly'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-900 dark:text-rose-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-rose-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (أ): كلمة المرور فقط' : 'Option A: Password Only'}</span>
                {engineerChoice === 'passOnly' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'عامل معرفة واحد فقط (Single Knowledge Factor)' : 'Single Knowledge Factor'}
              </p>
            </button>

            <button
              onClick={() => { playSfx('click'); setEngineerChoice('passMFA'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'passMFA'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (ب): كلمة المرور + رمز OTP للهاتف' : 'Option B: Password + SMS OTP'}</span>
                {engineerChoice === 'passMFA' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'مصادقة ثنائية متعددة العوامل (MFA)' : 'Multi-Factor Authentication'}
              </p>
            </button>
          </div>

          {engineerChoice && (
            <div className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn space-y-3 ${
              engineerChoice === 'passMFA'
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-200'
            }`}>
              <h4 className="font-bold flex items-center gap-1.5">
                <span>{engineerChoice === 'passMFA' ? '✅ التوصية والتحليل الهندسي المعياري (كتاب الوزارة):' : '⚠️ خيار غير آمن كلياً:'}</span>
              </h4>
              <p>
                {engineerChoice === 'passMFA'
                  ? (lang === 'ar'
                    ? 'الخيار (ب) هو الأنسب حتماً! لأن دفع المصروفات والاطلاع على الدرجات يتضمن بيانات مالية وشخصية حساسة. كلمة المرور بمفردها غير كافية لأن تسريبها يعرض الحساب للاختراق، بينما إضافة عامل ثاني (رمز OTP مرسل للهاتف) يحمي الحساب كلياً.'
                    : 'Option B is recommended! Because fee payment and student records involve financial and personal data. Adding phone OTP (possession factor) blocks access even if passwords leak.')
                  : (lang === 'ar'
                    ? 'استخدام كلمة السر بمفردها يعرض الطلاب والمدرسة لخطر الاختراق الفوري بمجرد تخمين أو تسريب كلمة السر.'
                    : 'Using password alone leaves student accounts exposed to instant compromise if passwords leak.')}
              </p>

              {/* Stakeholder Analysis Table from p. 37 */}
              <div className="pt-2">
                <h5 className="font-bold text-xs mb-2 text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>📊</span>
                  <span>{lang === 'ar' ? 'جدول تحليل أصحاب المصلحة (كتاب الوزارة ص 37):' : 'Stakeholder Benefit & Drawback Analysis (p. 37):'}</span>
                </h5>
                <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 shadow-sm">
                  <table className="w-full text-start text-xs text-slate-800 dark:text-slate-200">
                    <thead className="bg-slate-100 dark:bg-slate-800 font-bold border-b border-slate-300 dark:border-slate-700">
                      <tr>
                        <th className="p-2.5 text-start">{lang === 'ar' ? 'فئة أصحاب المصلحة' : 'Stakeholder Category'}</th>
                        <th className="p-2.5 text-start font-bold text-emerald-600 dark:text-emerald-400">{lang === 'ar' ? 'ميزة / فائدة واحدة' : 'Single Benefit'}</th>
                        <th className="p-2.5 text-start font-bold text-rose-600 dark:text-rose-400">{lang === 'ar' ? 'عيب / عائق واحد' : 'Single Drawback'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '1. الطالب (Student)' : '1. Student'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'حماية حسابه ودرجاته وبياناته الشخصية من سرقة زملائه أو المخترقين.' : 'Protects personal records and grades from unauthorized access.'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300">{lang === 'ar' ? 'الحاجة لحمل الهاتف الذكي باستمرار وإدخال رمز إضافي في كل مرة.' : 'Must carry a phone and enter an extra code on every login.'}</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '2. المدرسة (School)' : '2. School'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'حماية سمعة المدرسة وتأمين المعاملات المالية ضد الاختراقات والتلاعب.' : 'Safeguards financial payments and preserves institutional reputation.'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300">{lang === 'ar' ? 'زيادة تكاليف إرسال رسائل SMS وتوفير خدمة دعم فني لإعادة تعيين الحسابات.' : 'Higher SMS service costs and support overhead for account resets.'}</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '3. طالب لا يملك هاتفاً (Student w/o phone)' : '3. Student w/o phone'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'إمكانية الاعتماد على مفتاح أمان يدوي (Security Key) أو تطبيق مصادقة على كمبيوتر المدرسة.' : 'Option to rely on a USB security key or school computer auth app.'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300 font-bold">{lang === 'ar' ? 'عدم القدرة على تسجيل الدخول فوراً عبر الهاتف في حالة اشتراط هاتف محمول حصراً.' : 'Cannot log in immediately if mobile SMS is strictly mandatory.'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. 🌍 IN A NEW CONTEXT & REFLECT (في سياق جديد وتحدَّ نفسك - ص 36) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <span>🌍</span>
              <span>{lang === 'ar' ? 'في سياق جديد وتحدَّ نفسك (ص 36)' : 'In a New Context & Reflect Challenge'}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 text-xs">
                <span>🛒</span>
                <span>{lang === 'ar' ? 'في سياق جديد (متجر إلكتروني):' : 'In a New Context (Online Shop):'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'يرغب متجر إلكتروني صغير في تأمين تسجيل دخول العملاء وعملية الدفع. 1) التشفير (HTTPS): يمنع قراءة محتوى الاتصال وبيانات بطاقة الدفع من قبل أطراف ثالثة. 2) الشهادة الرقمية: تساعد متصفح العميل على التحقق من أن الموقع هو المتجر الحقيقي.'
                  : 'An online shop combines HTTPS encryption for communication, digital certificate for identity, MFA for login, and digital signatures for integrity.'}
              </p>
            </div>

            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 text-xs">
                <span>⭐</span>
                <span>{lang === 'ar' ? 'تأمل وتحدَّ نفسك:' : 'Reflect & Challenge:'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'التحدي: هل تضمن تقنيات التشفير والمصادقة خلو المنظومة من التهديدات بالكامل؟ التهديدات البشرية مثل الهندسة الاجتماعية (Social Engineering) أو تصيد العملاء (Phishing) تظل قائمة وتتطلب وعياً مستمراً.'
                  : 'Challenge: Does combining encryption and authentication eliminate all threats? Human threats like Social Engineering still remain and require ongoing user awareness.'}
              </p>
            </div>
          </div>
        </div>

        {/* 4. 📝 6-MARK OFFICIAL EXAM MODEL QUESTION SECTION (نمط الامتحان الوزاري ص 36) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <span>📝</span>
              <span>{lang === 'ar' ? 'سؤال نمط الامتحان الوزاري المعياري (ص 36)' : 'Exam-Style Question [6 Marks]'}</span>
            </span>
            <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[11px] font-bold border border-rose-500/20">
              6 Marks
            </span>
          </div>

          <blockquote className="p-3.5 bg-rose-500/10 border-r-4 border-rose-500 rounded-r-xl text-rose-900 dark:text-rose-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«اشرح لماذا يستعمل بروتوكول HTTPS آليات المفتاح العام للاقتراع/الاتفاق على مفاتيح الجلسة، ثم يستخدم التشفير المتماثل (بالمفتاح المشترك) لحماية بيانات الجلسة؟ [6 درجات] (استعن بـ: الأمان والسرعة).»'
              : '"Explain why HTTPS uses public-key cryptography to share the key but common-key cryptography to exchange the data. [6 Marks] Refer to: security and speed."'}
          </blockquote>

          <button
            onClick={() => { playSfx('click'); setShowExamAnswer(!showExamAnswer); }}
            className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition cursor-pointer shadow flex items-center gap-2"
          >
            <span>{showExamAnswer ? '🙈' : '📜'}</span>
            <span>
              {showExamAnswer
                ? (lang === 'ar' ? 'إخفاء نموذج الإجابة الحرفي (6/6)' : 'Hide Model Answer')
                : (lang === 'ar' ? 'عرض الإجابة النموذجية الحرفية من كتاب الوزارة (6/6)' : 'Show 6/6 Model Answer')}
            </span>
          </button>

          {showExamAnswer && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs sm:text-sm leading-relaxed animate-fadeIn space-y-2 font-mono">
              <div className="text-rose-400 font-bold text-xs">
                {lang === 'ar' ? 'توزيع درجات التصحيح الوزاري المعياري (6/6):' : 'Official Marking Rubric (6/6):'}
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-[11px] sm:text-xs">
                <li>
                  <strong>{lang === 'ar' ? '1. آليات المفتاح العام (3 درجات):' : '1. Public-Key Cryptography (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'تُستخدم في مرحلة مصافحة TLS للتحقق من هوية الخادم وللاتفاق/مشاركة مفاتيح الجلسة السرية بأمان عبر شبكة غير آمنة دون الحاجة لتوزيع مفاتيح سرية مسبقاً.'
                    : 'Used in the handshake phase to safely share secret session keys without prior secret distribution.'}
                </li>
                <li>
                  <strong>{lang === 'ar' ? '2. التشفير المتماثل (3 درجات):' : '2. Common-Key Cryptography (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'يُستخدم بعد إنشاء مفتاح الجلسة لتشفير وتداول بيانات الجلسة الحجمية بسرعة فائقة وكفاءة حسابية عالية بدلاً من التشفير بالمفتاح العام البطيء.'
                    : 'Used for data communication because it provides ultra-high speed and computational efficiency for large data payloads.'}
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Worked Example */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-2.5">
          <span className="p-2 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl font-bold text-sm">✎</span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'مثال محلول من الكتاب المدرسي (Worked Example)' : 'Worked Example'}
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-3.5 sm:p-4 theme-subpanel rounded-xl border space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-xs sm:text-sm">
              {lang === 'ar' ? '(1) طابق بين كل تهديد وتقنية الأمان المناسبة له:' : '(1) Match each threat with the most appropriate security technology:'}
            </h4>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>{lang === 'ar' ? 'أ. منع قراءة محتوى الاتصال من قِبل طرف ثالث' : 'a. Preventing communication content from being read by third parties'} &rarr; <strong>{lang === 'ar' ? 'التشفير (A)' : 'Encryption (A)'}</strong></li>
              <li>{lang === 'ar' ? 'ب. كشف تلاعب البيانات وتأكيد توقيع الرسالة' : 'b. Verifying data has not been altered during communication'} &rarr; <strong>{lang === 'ar' ? 'التوقيع الرقمي (B)' : 'Digital Signature (B)'}</strong></li>
              <li>{lang === 'ar' ? 'ج. التحقق من أن الطرف المقابل في الاتصال حقيقي' : 'c. Verifying that the communication partner is authentic'} &rarr; <strong>{lang === 'ar' ? 'الشهادة الرقمية (C)' : 'Digital Certificate (C)'}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5-Question Quiz Practice Section */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-rose-500/20 text-rose-600 dark:text-rose-400 rounded-xl font-bold text-sm">📝</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-1 (Exam-Style Questions)' : 'Lesson 2-1 Evaluation Quiz'}
            </h2>
          </div>
          <span className="text-xs text-sub font-mono">5 Questions</span>
        </div>

        <div className="space-y-4">
          {quizQuestions.map((q, qIdx) => {
            const selectedOpt = quizAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.a;

            return (
              <div key={qIdx} className="p-4 sm:p-5 theme-subpanel rounded-xl border space-y-2.5">
                <h4 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white">
                  {qIdx + 1}. {q.q[lang]}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.opts[lang].map((opt, oIdx) => {
                    let btnStyle = "theme-panel text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-rose-500";
                    if (isAnswered) {
                      if (oIdx === q.a) {
                        btnStyle = "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500 font-bold";
                      } else if (selectedOpt === oIdx) {
                        btnStyle = "bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectQuiz(qIdx, oIdx)}
                        className={`p-2.5 sm:p-3 rounded-lg border text-start text-xs transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && oIdx === q.a && <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`mt-2.5 p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/40'}`}>
                    <strong>{lang === 'ar' ? 'الشرح بالتفصيل:' : 'Explanation:'}</strong> {q.exp[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ⭐ KEY TAKEAWAY (الخلاصة الذهبية لكتاب الوزارة ص 37) */}
      <section className="theme-panel border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm">⭐</span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'الخلاصة الذهبية لكتاب الوزارة (Key Takeaway)' : 'Key Takeaway'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-semibold">
          {lang === 'ar'
            ? 'تذكر دائماً: يدمج بروتوكول HTTPS بين التشفير بالمفتاح العام (لمشاركة المفتاح بأمان) والتشفير المتماثل (لنقل البيانات بسرعة). وتتحقق حماية الخدمات من خلال تكديس عدة طبقات أمان: التشفير، الشهادات الرقمية، التوقيعات الرقمية، والمصادقة متعددة العوامل.'
            : 'Remember: HTTPS uses public-key cryptography to share a key safely and common-key cryptography to move data quickly. Services stay safe by layering encryption, certificates, signatures, and multi-factor authentication.'}
        </p>
      </section>
    </div>
  );
}
