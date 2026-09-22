'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
import { CryptoVsAuthLab } from '@/components/simulators/CryptoVsAuthLab';

export function Lesson2_1() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(0, 5);

  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const toggleCardFlip = (id: string) => {
    playSfx('click');
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCardExpand = (id: string) => {
    playSfx('click');
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    playSfx('click');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Instructor Bio Card */}
      <InstructorBioCard />

      {/* Lesson Header Header Banner */}
      <header className="bg-gradient-to-r from-rose-900 via-slate-900 to-slate-900 border border-rose-800/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500" />
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs font-bold border border-rose-500/30 mb-3">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-1' : 'Unit 2: Cybersecurity • Lesson 2-1'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'ar' ? '2-1 تقنيات التشفير والمصادقة' : '2-1 Cryptographic Technologies and Authentication'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'كيف تعمل تقنيات التشفير والمصادقة معاً للحفاظ على أمان الاتصال والخدمات عبر الإنترنت؟'
                : 'How do cryptographic technologies and authentication work together to keep online communication and services secure?'}
            </p>
          </div>
          <DownloadEvaluationButton pdfUrl="/Unit2_Evaluation_Solutions.pdf" fileName="Unit2_Evaluation_Solutions.pdf" lessonTitle="الدرس 2-1" />
        </div>
      </header>

      {/* Main Concept Card */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl font-bold">💡</span>
          <h2 className="text-xl font-bold text-white">
            {lang === 'ar' ? 'الفكرة الأساسية (Key Fact)' : 'Key Fact'}
          </h2>
        </div>
        <blockquote className="p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-200 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'يعتمد الاتصال والخدمات الآمنة عبر الإنترنت على الجمع بين التشفير والمصادقة، وليس على تقنية واحدة فقط.'
            : 'Secure online communication and services depend on combining cryptography and authentication — not on any single technology.'}
        </blockquote>
      </section>

      {/* Verbatim Point! Section 1: How HTTPS Works */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-rose-400">
            {lang === 'ar' ? '1. كيف تعمل اتصالات HTTPS' : '1. How HTTPS Communication Works'}
          </h2>
          <span className="text-xs font-mono bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full border border-rose-500/20">
            HTTPS (HTTP Secure)
          </span>
        </div>

        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            {lang === 'ar'
              ? 'بروتوكول HTTPS هو بروتوكول HTTP نقل مؤمن عبر اتصال TLS. يوفر TLS سرية البيانات وسامتها أثناء النقل، ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق، وتسمى خطوات إنشاء الاتصال الآمن مصافحة TLS (TLS Handshake).'
              : 'HTTPS (HTTP Secure) is a communication protocol that adds TLS encryption to HTTP. By providing encryption, detection of tampering, and verification of the communication partner, it protects users from threats such as eavesdropping, tampering, and impersonation. The procedure for establishing a secure communication is called the TLS handshake.'}
          </p>
        </div>

        {/* TLS Handshake Stages Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/90 text-slate-200 uppercase text-xs font-bold">
              <tr>
                <th className="p-3">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                <th className="p-3">{lang === 'ar' ? 'ما يحدث (Mechanism)' : 'What Happens'}</th>
                <th className="p-3">{lang === 'ar' ? 'طريقة التشفير المستخدمة' : 'Cryptographic Method Used'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/40">
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-rose-400">① {lang === 'ar' ? 'الاتصال والتحقق' : 'Connection'}</td>
                <td className="p-3">
                  {lang === 'ar'
                    ? 'يرسل خادم الويب شهادته الرقمية والمفتاح العام إلى المتصفح. يتحقق المتصفح من أصالة الخادم عبر جهة التصديق (CA).'
                    : 'The web server sends a digital certificate and a public key to the browser. The browser verifies the server\'s authenticity through a certificate authority (CA).'}
                </td>
                <td className="p-3 font-semibold text-emerald-400">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-rose-400">② {lang === 'ar' ? 'تبادل المفتاح' : 'Key Exchange'}</td>
                <td className="p-3">
                  {lang === 'ar'
                    ? 'ينشئ المتصفح مفتاحاً مشتركاً (Common key) للاتصال، ويشفره بمفتاح الخادم العام ويرسله. يفك الخادم تشفيره بمفتاحه الخاص للحصول على المفتاح المشترك.'
                    : 'The browser creates a common key for communication, encrypts it with the server\'s public key, and sends it. The server decrypts it with its private key to obtain the common key.'}
                </td>
                <td className="p-3 font-semibold text-emerald-400">
                  {lang === 'ar' ? 'التشفير بالمفتاح العام (Public-key cryptography)' : 'Public-key cryptography'}
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-rose-400">③ {lang === 'ar' ? 'تبادل البيانات' : 'Data Communication'}</td>
                <td className="p-3">
                  {lang === 'ar'
                    ? 'يتم تشفير وتداول البيانات بسرعة وكفاءة باستخدام المفتاح المشترك الذي تم تبادله.'
                    : 'Data is encrypted and exchanged using the shared common key.'}
                </td>
                <td className="p-3 font-semibold text-indigo-400">
                  {lang === 'ar' ? 'التشفير المتماثل / بالمفتاح المشترك (Common-key cryptography)' : 'Common-key cryptography'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="p-4 bg-slate-800/60 rounded-xl border-l-4 border-rose-500 text-xs text-slate-300">
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
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-rose-400">
            {lang === 'ar' ? '2. استخدام المصادقة في الخدمات الفعلية' : '2. Use of Authentication in Real Services'}
          </h2>
          <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
            Multi-Factor Authentication (MFA / 2FA)
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'تعتمد العديد من الخدمات على المصادقة متعددة العوامل (MFA)، حيث يتم الجمع بين عاملتين أو أكثر من العوامل الثلاثة (المعرفة، الملكية، والسمات البيومترية). عند استخدام عامل واحد فقط، يمكن للطرف غير المصرح به الوصول إذا تم كسر ذلك العامل. ولكن بالجمع بين عدة عوامل، حتى لو تم تسريب كلمة السر (عامل المعرفة)، فلن يستطيع المخترق الدخول دون امتلاك جهاز الهاتف (عامل الملكية).'
            : 'Many services adopt multi-factor authentication (MFA), in which two or more of the three factors of authentication (knowledge, possession, biometric) are combined. When only one factor is used, an unauthorized party can gain access if that factor is broken. By combining multiple factors, even if one is broken, another can still prevent access.'}
        </p>

        {/* Real Service Authentication Examples Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/90 text-slate-200 uppercase text-xs font-bold">
              <tr>
                <th className="p-3">{lang === 'ar' ? 'الخدمة (Service)' : 'Service'}</th>
                <th className="p-3">{lang === 'ar' ? 'أمثلة المصادقة المستخدمة' : 'Examples of Authentication Used'}</th>
                <th className="p-3">{lang === 'ar' ? 'تصنيف العوامل' : 'Factors Category'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/40">
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-white">{lang === 'ar' ? 'الخدمات المصرفية عبر الإنترنت (Online Banking)' : 'Online banking'}</td>
                <td className="p-3">{lang === 'ar' ? 'كلمة المرور + كلمة المرور لمرة واحدة (OTP)' : 'Password + one-time password'}</td>
                <td className="p-3 font-mono text-xs text-amber-400">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-white">{lang === 'ar' ? 'تسجيل دخول وسائل التواصل (SNS Login)' : 'SNS login'}</td>
                <td className="p-3">{lang === 'ar' ? 'كلمة المرور + رمز رسالة SMS' : 'Password + SMS authentication'}</td>
                <td className="p-3 font-mono text-xs text-amber-400">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-white">{lang === 'ar' ? 'التسوق الإلكتروني (Online Shopping)' : 'Online shopping'}</td>
                <td className="p-3">{lang === 'ar' ? 'كلمة المرور + رمز كود 3-D Secure' : 'Password + one-time code from 3-D Secure'}</td>
                <td className="p-3 font-mono text-xs text-amber-400">{lang === 'ar' ? 'المعرفة + الملكية' : 'Knowledge + Possession'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-white">{lang === 'ar' ? 'تسجيل كمبيوتر الشركة (Company Laptop)' : 'Company laptop login'}</td>
                <td className="p-3">{lang === 'ar' ? 'البطاقة الذكية + مصادقة بصمة الإصبع' : 'Smart card + fingerprint authentication'}</td>
                <td className="p-3 font-mono text-xs text-emerald-400">{lang === 'ar' ? 'الملكية + السمات البيومترية' : 'Possession + Biometric'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Combinations of Security Technologies */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-rose-400">
            {lang === 'ar' ? '3. تركيبات تقنيات الأمان' : '3. Combinations of Security Technologies'}
          </h2>
          <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
            Layered Protection
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'لا يتحقق الأمان والخدمات الآمنة عبر الإنترنت من خلال تقنية واحدة، بل من خلال كبس وتجميع عدة تقنيات أمان معاً.'
            : 'Safe communication and services are achieved not by a single technology, but by combining multiple security technologies.'}
        </p>

        {/* 4 Technologies Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-rose-300 text-base mb-1">
              {lang === 'ar' ? '1. التشفير (Encryption)' : '1. Encryption (common/public key)'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يمنع قراءة محتوى الاتصال من قِبل أطراف ثالثة (السرية والخفاء).'
                : 'Prevents communication content from being read by third parties.'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-rose-300 text-base mb-1">
              {lang === 'ar' ? '2. التوقيع الرقمي (Digital Signature)' : '2. Digital Signature'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يكتشف أي تلاعب بالبيانات أو انتحال شخصية المرسل، ويمنع المرسل من إنكار إرسالها (عدم التنصل Non-repudiation).'
                : 'Detects data tampering or impersonation of the sender, and makes it impossible for the sender to deny having sent the data afterward (non-repudiation).'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-rose-300 text-base mb-1">
              {lang === 'ar' ? '3. الشهادة الرقمية (Digital Certificate)' : '3. Digital Certificate'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تثبت للمتصفح أن الطرف المقابل والموقع حقيقي وموثوق من جهة تصديق (CA).'
                : 'Verifies that the communication partner is authentic.'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-rose-300 text-base mb-1">
              {lang === 'ar' ? '4. المصادقة متعددة العوامل (MFA)' : '4. Multi-Factor Authentication'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تمنع تسجيل الدخول غير المصرح به حتى عند تسرب كلمة المرور.'
                : 'Prevents unauthorized logins.'}
            </p>
          </div>
        </div>
      </section>

      {/* Worked Example (مثال محلول) */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl font-bold">✎</span>
          <h2 className="text-xl font-bold text-white">
            {lang === 'ar' ? 'مثال محلول من الكتاب المدرسي (Worked Example)' : 'Worked Example'}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm">
              {lang === 'ar' ? '(1) طابق بين كل تهديد وتقنية الأمان المناسبة له:' : '(1) Match each threat with the most appropriate security technology:'}
            </h4>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
              <li>{lang === 'ar' ? 'أ. منع قراءة محتوى الاتصال من قِبل طرف ثالث' : 'a. Preventing communication content from being read by third parties'} &rarr; <strong>{lang === 'ar' ? 'التشفير (A)' : 'Encryption (A)'}</strong></li>
              <li>{lang === 'ar' ? 'ب. كشف تلاعب البيانات وتأكيد توقيع الرسالة' : 'b. Verifying data has not been altered during communication'} &rarr; <strong>{lang === 'ar' ? 'التوقيع الرقمي (B)' : 'Digital Signature (B)'}</strong></li>
              <li>{lang === 'ar' ? 'ج. التحقق من أن الطرف المقابل في الاتصال حقيقي' : 'c. Verifying that the communication partner is authentic'} &rarr; <strong>{lang === 'ar' ? 'الشهادة الرقمية (C)' : 'Digital Certificate (C)'}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5-Question Quiz Practice Section */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-rose-500/20 text-rose-400 rounded-xl font-bold">📝</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-1 (Exam-Style Questions)' : 'Lesson 2-1 Evaluation Quiz'}
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">5 Questions</span>
        </div>

        <div className="space-y-6">
          {quizQuestions.map((q, qIdx) => {
            const selectedOpt = quizAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.a;

            return (
              <div key={qIdx} className="p-5 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-3">
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {qIdx + 1}. {q.q[lang]}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {q.opts[lang].map((opt, oIdx) => {
                    let btnStyle = "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700";
                    if (isAnswered) {
                      if (oIdx === q.a) {
                        btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold";
                      } else if (selectedOpt === oIdx) {
                        btnStyle = "bg-rose-500/20 text-rose-300 border-rose-500/60";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectQuiz(qIdx, oIdx)}
                        className={`p-3 rounded-lg border text-right text-xs transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && oIdx === q.a && <span className="text-emerald-400 font-bold">✓</span>}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800' : 'bg-rose-950/40 text-rose-300 border border-rose-800'}`}>
                    <strong>{lang === 'ar' ? 'الشرح بالتفصيل:' : 'Explanation:'}</strong> {q.exp[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
