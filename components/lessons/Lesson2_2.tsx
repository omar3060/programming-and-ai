'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
import { NetworkSecurityDesignLab } from '@/components/simulators/NetworkSecurityDesignLab';

export function Lesson2_2() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(5, 10);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    playSfx('click');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Instructor Bio Card */}
      <InstructorBioCard />

      {/* Lesson Header Banner */}
      <header className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 border border-blue-800/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500" />
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-500/30 mb-3">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-2' : 'Unit 2: Cybersecurity • Lesson 2-2'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'ar' ? '2-2 تصميم أمن الشبكات' : '2-2 Network Security Design'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'كيف يمكن للمؤسسة تصميم شبكتها بحيث يظل النظام محمياً حتى لو تم اختراق أحد خطوط الدفاع؟'
                : 'How can an organization design its network so that, even if one defense is breached, the system stays protected?'}
            </p>
          </div>
          <DownloadEvaluationButton pdfUrl="/Unit2_Evaluation_Solutions.pdf" fileName="Unit2_Evaluation_Solutions.pdf" lessonTitle="الدرس 2-2" />
        </div>
      </header>

      {/* Key Fact Card */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl font-bold">💡</span>
          <h2 className="text-xl font-bold text-white">
            {lang === 'ar' ? 'الفكرة الأساسية (Key Fact)' : 'Key Fact'}
          </h2>
        </div>
        <blockquote className="p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-200 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'ينشأ أمان الشبكات القوي من تكديس وتوزيع التدابير على طبقات متعددة — جدار الحماية، VPN، المنطقة منزوعة السلاح DMZ، وحماية الأجهزة الطرفية — ومن التحقق الدائم من كل طلب وصول (Zero Trust)، وليس من حاجز فردي واحد.'
            : 'Strong network security comes from layering measures — firewall, VPN, DMZ, endpoint protection — and from verifying every access (zero trust), not from a single barrier.'}
        </blockquote>
      </section>

      {/* Section 1: Firewalls, VPN, DMZ */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-blue-400">
            {lang === 'ar' ? '1. مكونات الشبكة الآمنة (Firewall, VPN, DMZ)' : '1. Core Network Security Building Blocks'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'جدار الحماية' : 'Firewall'}
            </span>
            <h4 className="font-bold text-white text-base">
              {lang === 'ar' ? 'التحكم في المرور بناءً على قواعد' : 'Traffic Control via Rules'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'نظام يُثبت عند نقطة دخول/خروج الشبكة يسمح بالاتصال أو يمنعه بناءً على قواعد محددة مسبقاً (مثل: السماح بالوصول لخادم الويب ومنع الوصول المباشر لقاعدة البيانات).'
                : 'A system installed at the entry/exit point of a network that allows or denies communication based on rules set in advance.'}
            </p>
          </div>

          <div className="p-5 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'الشبكة الافتراضية VPN' : 'Virtual Private Network (VPN)'}
            </span>
            <h4 className="font-bold text-white text-base">
              {lang === 'ar' ? 'نفق مشفر عبر الإنترنت' : 'Encrypted Virtual Tunnel'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تقنية تُنشئ خطاً خاصاً افتراضياً مشفراً (نفقاً) عبر الإنترنت، مما يتيح الاتصال الآمن بشبكة المؤسسة من مكان بعيد (العمل عن بعد، ربط الفروع)، ويقلل خطر التنصت عبر Wi-Fi العام.'
                : 'A technology that creates an encrypted virtual private line (tunnel) over the Internet, allowing safe connection to a network from a remote location.'}
            </p>
          </div>

          <div className="p-5 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'المنطقة منزوعة السلاح DMZ' : 'Demilitarized Zone (DMZ)'}
            </span>
            <h4 className="font-bold text-white text-base">
              {lang === 'ar' ? 'عزل الخوادم العامة' : 'Public Server Isolation Zone'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'منطقة تُوضع فيها الخوادم الموجهة للشبكة الخارجية (خوادم الويب والبريد) بمعزل عن الشبكة الداخلية. وبالتالي، حتى لو هوجم خادم الويب، يمنع ذلك انتشار الضرر لقواعد البيانات الداخلية.'
                : 'An area where servers exposed to the external network (web servers, mail servers, etc.) are placed separately from the internal network, preventing internal database breach.'}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive NetworkSecurityDesignLab Simulator */}
      <section>
        <NetworkSecurityDesignLab />
      </section>

      {/* Section 2: Defense in Depth (4 Layers) */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-blue-400">
            {lang === 'ar' ? '2. مفهوم الدفاع العميق (Defense in Depth)' : '2. Defense in Depth (Layered Defense)'}
          </h2>
          <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
            4 Security Layers
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'مفهوم الدفاع العميق يعتمد على توزيع وتكديس تدابير أمنية متعددة بحيث إذا اختُرق خط دفاعي واحد، فإن الطبقة التالية تظل تحمي النظام والمؤسسة.'
            : 'Defense in depth is the concept of layering multiple security measures so that, even if one measure is breached, the next can still protect the system.'}
        </p>

        {/* 4 Layers Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/90 text-slate-200 uppercase text-xs font-bold">
              <tr>
                <th className="p-3">{lang === 'ar' ? 'طبقة الدفاع (Layer)' : 'Defense Layer'}</th>
                <th className="p-3">{lang === 'ar' ? 'أمثلة الإجراءات المطبقة' : 'Examples of Measures Applied'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/40">
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-blue-400">Layer 1: {lang === 'ar' ? 'مدخل الشبكة (Network Entry)' : 'Network entry'}</td>
                <td className="p-3">{lang === 'ar' ? 'حظر الاتصالات غير المصرح بها باستخدام جدار الحماية (Firewall)' : 'Block unauthorized communication using a firewall'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-cyan-400">Layer 2: {lang === 'ar' ? 'مسار الاتصال (Communication Path)' : 'Communication path'}</td>
                <td className="p-3">{lang === 'ar' ? 'تشفير اتصالات الشبكة والوصول عن بعد باستخدام الـ VPN' : 'Encrypt communication using a VPN'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-indigo-400">Layer 3: {lang === 'ar' ? 'وضع الخوادم (Server Placement)' : 'Server placement'}</td>
                <td className="p-3">{lang === 'ar' ? 'فصل الخوادم الموجهة للجمهور عن الشبكة الداخلية باستخدام المنطقة منزوعة السلاح (DMZ)' : 'Separate public-facing servers from the internal network using a DMZ'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-emerald-400">Layer 4: {lang === 'ar' ? 'الأجهزة الطرفية (Endpoints)' : 'Endpoints'}</td>
                <td className="p-3">{lang === 'ar' ? 'تثبيت برامج مضاد الفيروسات، تحديث أنظمة التشغيل باستمرار، وتشفير القرص' : 'Install antivirus software and keep the OS updated'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Zero Trust Paradigm */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-rose-400">
            {lang === 'ar' ? '3. مفهوم عدم الثقة (Zero Trust)' : '3. Concept of Zero Trust'}
          </h2>
          <span className="text-xs font-mono bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full border border-rose-500/20">
            Never Trust, Always Verify
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-2">
            <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider">
              {lang === 'ar' ? 'المحيط التقليدي (Traditional Perimeter)' : 'Traditional Perimeter Model'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'كان يعتمد على فرضية "أن ما داخل شبكة المؤسسة آمن وما خارجها خطر". ولكن مع انتشار الخدمات السحابية والعمل عن بعد، تلاشت الحدود الصلبة بين الداخل والخارج، وأصبح حماية المحيط وحده غير كافٍ.'
                : 'Traditional security protected a perimeter based on "inside is safe, outside is dangerous." Cloud and remote work blurred this line, making perimeter-only designs insufficient.'}
            </p>
          </div>

          <div className="p-4 bg-rose-950/40 border border-rose-800/60 rounded-xl space-y-2">
            <h4 className="font-bold text-rose-300 text-sm uppercase tracking-wider">
              {lang === 'ar' ? 'نموذج Zero Trust الحديث' : 'Modern Zero Trust Architecture'}
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed">
              {lang === 'ar'
                ? 'مفهوم أمني ينص على "عدم الوثوق بأي اتصال بشكل آلي حتى لو كان قادماً من داخل شبكة المؤسسة، والتحقق منه والترخيص له دائماً في كل طلب".'
                : 'Security concept stating system does not trust any communication, including from within the organization network, and always verifies identity and permissions.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5-Question Quiz Practice Section */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-blue-500/20 text-blue-400 rounded-xl font-bold">📝</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-2 (Exam-Style Questions)' : 'Lesson 2-2 Evaluation Quiz'}
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
