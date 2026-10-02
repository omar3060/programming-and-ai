'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';
import { NetworkSecurityDesignLab } from '@/components/simulators/NetworkSecurityDesignLab';

export function Lesson2_2() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(10, 20);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showPauseThink, setShowPauseThink] = useState(false);
  const [engineerChoice, setEngineerChoice] = useState<'singleFirewall' | 'defenseInDepth' | null>(null);
  const [showExamAnswer, setShowExamAnswer] = useState(false);

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    playSfx('click');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Lesson Header Banner */}
      <header className="theme-panel border border-blue-500/20 rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500" />
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-500/20">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-2' : 'Unit 2: Cybersecurity • Lesson 2-2'}
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            {lang === 'ar' ? '2-2 تصميم أمن الشبكات' : '2-2 Network Security Design'}
          </h1>
          <p className="text-sub text-xs sm:text-base max-w-3xl leading-relaxed">
            {lang === 'ar'
              ? 'كيف يمكن للمؤسسة تصميم شبكتها بحيث يظل النظام محمياً حتى لو تم اختراق أحد خطوط الدفاع؟'
              : 'How can an organization design its network so that, even if one defense is breached, the system stays protected?'}
          </p>
        </div>
      </header>

      {/* Key Fact Card */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm">💡</span>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'الفكرة الأساسية (Key Fact)' : 'Key Fact'}
          </h2>
        </div>
        <blockquote className="p-3.5 sm:p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-900 dark:text-amber-200 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'ينشأ أمان الشبكات القوي من تكديس وتوزيع التدابير على طبقات متعددة — جدار الحماية، VPN، المنطقة منزوعة السلاح DMZ، وحماية الأجهزة الطرفية — ومن التحقق الدائم من كل طلب وصول (Zero Trust)، وليس من حاجز فردي واحد.'
            : 'Strong network security comes from layering measures — firewall, VPN, DMZ, endpoint protection — and from verifying every access (zero trust), not from a single barrier.'}
        </blockquote>
      </section>

      {/* Section 1: Firewalls, VPN, DMZ */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-blue-600 dark:text-blue-400">
            {lang === 'ar' ? '1. مكونات الشبكة الآمنة (Firewall, VPN, DMZ)' : '1. Core Network Security Building Blocks'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-4 theme-subpanel border rounded-xl space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'جدار الحماية' : 'Firewall'}
            </span>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {lang === 'ar' ? 'التحكم في المرور بناءً على قواعد' : 'Traffic Control via Rules'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'نظام يُثبت عند نقطة دخول/خروج الشبكة يسمح بالاتصال أو يمنعه بناءً على قواعد محددة مسبقاً (مثل: السماح بالوصول لخادم الويب ومنع الوصول المباشر لقاعدة البيانات).'
                : 'A system installed at the entry/exit point of a network that allows or denies communication based on rules set in advance.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl space-y-2">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'الشبكة الافتراضية VPN' : 'Virtual Private Network (VPN)'}
            </span>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {lang === 'ar' ? 'نفق مشفر عبر الإنترنت' : 'Encrypted Virtual Tunnel'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'تقنية تُنشئ خطاً خاصاً افتراضياً مشفراً (نفقاً) عبر الإنترنت، مما يتيح الاتصال الآمن بشبكة المؤسسة من مكان بعيد (العمل عن بعد، ربط الفروع)، ويقلل خطر التنصت عبر Wi-Fi العام.'
                : 'A technology that creates an encrypted virtual private line (tunnel) over the Internet, allowing safe connection to a network from a remote location.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl space-y-2">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'المنطقة منزوعة السلاح DMZ' : 'Demilitarized Zone (DMZ)'}
            </span>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {lang === 'ar' ? 'عزل الخوادم العامة' : 'Public Server Isolation Zone'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
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
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-blue-600 dark:text-blue-400">
            {lang === 'ar' ? '2. مفهوم الدفاع العميق (Defense in Depth)' : '2. Defense in Depth (Layered Defense)'}
          </h2>
          <span className="text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/20">
            4 Security Layers
          </span>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'مفهوم الدفاع العميق يعتمد على توزيع وتكديس تدابير أمنية متعددة بحيث إذا اختُرق خط دفاعي واحد، فإن الطبقة التالية تظل تحمي النظام والمؤسسة.'
            : 'Defense in depth is the concept of layering multiple security measures so that, even if one measure is breached, the next can still protect the system.'}
        </p>

        {/* 4 Layers Table - Perfectly Aligned via text-start */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <table className="w-full text-start text-xs sm:text-sm text-slate-800 dark:text-slate-300">
            <thead className="theme-subpanel text-slate-900 dark:text-slate-200 uppercase text-[11px] sm:text-xs font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4 text-start font-black shrink-0">{lang === 'ar' ? 'طبقة الدفاع (Layer)' : 'Defense Layer'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[200px]">{lang === 'ar' ? 'أمثلة الإجراءات المطبقة' : 'Examples of Measures Applied'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-blue-600 dark:text-blue-400 align-top text-start whitespace-nowrap">Layer 1: {lang === 'ar' ? 'مدخل الشبكة (Network Entry)' : 'Network entry'}</td>
                <td className="p-3 sm:p-4 align-top text-start leading-relaxed">{lang === 'ar' ? 'حظر الاتصالات غير المصرح بها باستخدام جدار الحماية (Firewall)' : 'Block unauthorized communication using a firewall'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-cyan-600 dark:text-cyan-400 align-top text-start whitespace-nowrap">Layer 2: {lang === 'ar' ? 'مسار الاتصال (Communication Path)' : 'Communication path'}</td>
                <td className="p-3 sm:p-4 align-top text-start leading-relaxed">{lang === 'ar' ? 'تشفير اتصالات الشبكة والوصول عن بعد باستخدام الـ VPN' : 'Encrypt communication using a VPN'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-indigo-600 dark:text-indigo-400 align-top text-start whitespace-nowrap">Layer 3: {lang === 'ar' ? 'وضع الخوادم (Server Placement)' : 'Server placement'}</td>
                <td className="p-3 sm:p-4 align-top text-start leading-relaxed">{lang === 'ar' ? 'فصل الخوادم الموجهة للجمهور عن الشبكة الداخلية باستخدام المنطقة منزوعة السلاح (DMZ)' : 'Separate public-facing servers from the internal network using a DMZ'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-emerald-600 dark:text-emerald-400 align-top text-start whitespace-nowrap">Layer 4: {lang === 'ar' ? 'الأجهزة الطرفية (Endpoints)' : 'Endpoints'}</td>
                <td className="p-3 sm:p-4 align-top text-start leading-relaxed">{lang === 'ar' ? 'تثبيت برامج مضاد الفيروسات، تحديث أنظمة التشغيل باستمرار، وتشفير القرص' : 'Install antivirus software and keep the OS updated'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Zero Trust Paradigm */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-rose-600 dark:text-rose-400">
            {lang === 'ar' ? '3. مفهوم عدم الثقة (Zero Trust)' : '3. Concept of Zero Trust'}
          </h2>
          <span className="text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            Never Trust, Always Verify
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 theme-subpanel border rounded-xl space-y-2">
            <h4 className="font-bold text-amber-600 dark:text-amber-400 text-xs sm:text-sm uppercase tracking-wider">
              {lang === 'ar' ? 'المحيط التقليدي (Traditional Perimeter)' : 'Traditional Perimeter Model'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'كان يعتمد على فرضية "أن ما داخل شبكة المؤسسة آمن وما خارجها خطر". ولكن مع انتشار الخدمات السحابية والعمل عن بعد، تلاشت الحدود الصلبة بين الداخل والخارج، وأصبح حماية المحيط وحده غير كافٍ.'
                : 'Traditional security protected a perimeter based on "inside is safe, outside is dangerous." Cloud and remote work blurred this line, making perimeter-only designs insufficient.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl space-y-2">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-xs sm:text-sm uppercase tracking-wider">
              {lang === 'ar' ? 'نموذج Zero Trust الحديث' : 'Modern Zero Trust Architecture'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
              {lang === 'ar'
                ? 'مفهوم أمني ينص على "عدم الوثوق بأي اتصال بشكل آلي حتى لو كان قادماً من داخل شبكة المؤسسة، والتحقق منه والترخيص له دائماً في كل طلب".'
                : 'Security concept stating system does not trust any communication, including from within the organization network, and always verifies identity and permissions.'}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* UNIFIED TEXTBOOK ENRICHMENT SECTION (ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-2) */}
      {/* ========================================================================= */}
      <section className="theme-panel border border-blue-500/30 p-5 sm:p-8 rounded-3xl space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-blue-500 uppercase font-bold tracking-wider">
              {lang === 'ar' ? 'ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-2' : 'Official Ministry Textbook Activities & Features (Lesson 2-2)'}
            </span>
            <h3 className="text-base sm:text-xl font-black mt-0.5 flex items-center gap-2 text-slate-900 dark:text-white">
              <span>🎓</span>
              {lang === 'ar'
                ? 'أنشطة: توقف وفكر • فكر كمهندس • سياق جديد • نمط الامتحان'
                : 'Activities: Pause & Think • Think as Engineer • New Context • Exam Style'}
            </h3>
          </div>
          <span className="text-xs text-sub font-semibold shrink-0">ص 41 - ص 44</span>
        </div>

        {/* 1. 💡 PAUSE & THINK (توقف وفكر - ص 41) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <span>💡</span>
              <span>{lang === 'ar' ? 'توقف وفكر (PAUSE & THINK - كتاب الوزارة ص 41)' : 'PAUSE & THINK (Textbook p. 41)'}</span>
            </span>
          </div>

          <blockquote className="p-3 sm:p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«لماذا يُنصح دائماً بوضع خادم الويب العام في المنطقة منزوعة السلاح (DMZ) بدلاً من وضعه مباشرة في الشبكة الداخلية للمؤسسة؟»'
              : '"Why is a public web server placed in a DMZ rather than directly inside the internal network?"'}
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
                  ? 'لأن خادِم الويب هو الأكثر عرضة للهجمات المباشرة من الإنترنت. فإذا تم اختراقه وهو في DMZ، يمنع هذا العزل المهاجم من الوصول إلى قواعد البيانات الحساسة أو الأجهزة الموجودة داخل الشبكة الداخلية، مما يقيد نطاق الضرر.'
                  : 'Because public web servers face direct attack from the internet. By isolating them in a DMZ, an attacker who compromises the web server still cannot reach internal backend databases.'}
              </p>
            </div>
          )}
        </div>

        {/* 2. ⚙️ THINK AS AN ENGINEER (فكر كمهندس - ص 42) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-indigo-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center gap-1.5">
              <span>⚙️</span>
              <span>{lang === 'ar' ? 'فكّر كمهندس — استقرئ مع صاحبك واتخذ القرار (ص 42)' : 'Think as an Engineer — Investigate & Decide (p. 42)'}</span>
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm leading-relaxed text-indigo-900 dark:text-indigo-200 space-y-1.5">
            <strong>{lang === 'ar' ? 'السيناريو الرسمي من كتاب الوزارة:' : 'Verbatim Textbook Scenario:'}</strong>
            <p className="italic">
              {lang === 'ar'
                ? '«شركة ناشئة لديها موقع إلكتروني للعملاء، وموظفون يعملون من المنازل عبر الإنترنت، وقاعدة بيانات عملاء سرية. بصفتك مهندساً سيبرانياً، قرر التصميم الأمني الأنسب لحماية الشركة.»'
                : '"A startup has a web app, remote employees, and a private customer DB. As a cyber engineer, design the security architecture."'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => { playSfx('click'); setEngineerChoice('singleFirewall'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'singleFirewall'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-900 dark:text-rose-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-rose-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (أ): جدار حماية واحد فقط عند المدخل' : 'Option A: Single Entry Firewall'}</span>
                {engineerChoice === 'singleFirewall' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'اعتماد على حاجز فردي محيطي واحد' : 'Single Perimeter Control'}
              </p>
            </button>

            <button
              onClick={() => { playSfx('click'); setEngineerChoice('defenseInDepth'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'defenseInDepth'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (ب): دفاع عميق (Firewall + VPN + DMZ) + Zero Trust' : 'Option B: Defense in Depth + Zero Trust'}</span>
                {engineerChoice === 'defenseInDepth' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'تصميم متعدد الطبقات متكامل' : 'Layered Defense Architecture'}
              </p>
            </button>
          </div>

          {engineerChoice && (
            <div className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn space-y-3 ${
              engineerChoice === 'defenseInDepth'
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-200'
            }`}>
              <h4 className="font-bold flex items-center gap-1.5">
                <span>{engineerChoice === 'defenseInDepth' ? '✅ التوصية والتحليل الهندسي المعياري (كتاب الوزارة):' : '⚠️ خيار غير آمن كلياً:'}</span>
              </h4>
              <p>
                {engineerChoice === 'defenseInDepth'
                  ? (lang === 'ar'
                    ? 'الخيار (ب) هو الأنسب حتماً! لأن الاعتماد على جدار حماية واحد يعرض الشركة للانهيار التام بمجرد اختراقه. بينما تكديس الطبقات (Firewall لضبط المدخل، VPN لتشفير عمل الموظفين عن بعد، DMZ لعزل خادم الويب، وتطبيق Zero Trust) يضمن أنه حتى لو سقطت إحدى الطبقات، تظل بقية الطبقات تحمي قواعد البيانات.'
                    : 'Option B is recommended! Layering entry firewall, remote VPN, web server DMZ, and zero trust ensures that even if one layer fails, subsequent controls protect customer data.')
                  : (lang === 'ar'
                    ? 'الاعتماد على جدار حماية فقط محيطي يترك الشبكة الداخلية والعمل عن بعد مكشوفين بالكامل فور الاختراق.'
                    : 'Relying on a single firewall leaves internal systems and remote workers vulnerable if breached.')}
              </p>

              {/* Stakeholder Analysis Table for Lesson 2-2 */}
              <div className="pt-2">
                <h5 className="font-bold text-xs mb-2 text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>📊</span>
                  <span>{lang === 'ar' ? 'جدول تحليل أصحاب المصلحة (كتاب الوزارة ص 42):' : 'Stakeholder Benefit & Drawback Analysis (p. 42):'}</span>
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
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '1. الموظف عن بعد (Remote Worker)' : '1. Remote Employee'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'الاتصال الآمن المشفر بالشركة من أي مكان عبر الـ VPN دون خوف من التصنت.' : 'Secure, encrypted access to corporate networks via VPN from anywhere.'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300">{lang === 'ar' ? 'بطء سرعة الاتصال أحياناً وتطلب خطوات مصادقة إضافية عند دخول كل خدمة.' : 'Slight connection overhead and repeated zero-trust auth checks.'}</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '2. الشركة الناشئة (Startup)' : '2. Startup Company'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'منع تدمير أو تسريب بيانات العملاء حتى لو اختُرق خادم الويب المفتوح للإنترنت.' : 'Prevents catastrophic data breaches even if public web servers are hit.'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300">{lang === 'ar' ? 'تعقيد تصميم الشبكة وتطلب ميزانية إضافية لإدارة السيرفرات المتعددة.' : 'Complex network configuration and higher infrastructure budget.'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. 🌍 IN A NEW CONTEXT & REFLECT (في سياق جديد وتحدَّ نفسك - ص 43) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <span>🌍</span>
              <span>{lang === 'ar' ? 'في سياق جديد وتحدَّ نفسك (ص 43)' : 'In a New Context & Reflect Challenge'}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 text-xs">
                <span>🏥</span>
                <span>{lang === 'ar' ? 'في سياق جديد (مستشفى إلكتروني):' : 'In a New Context (Smart Hospital):'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'ينقل مستشفى سجلات المرضى إلى السحابة. يُتيح الـ VPN للأطباء الوصول بأمان من المنازل، وتوضع خوادم حجز المواعيد العامة في DMZ، وتطبق طبقة Endpoints على أجهزة الأشعة للحماية من الفيروسات.'
                  : 'A smart hospital relies on VPN for remote doctor access, DMZ for public booking, and endpoint antivirus on medical equipment.'}
              </p>
            </div>

            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 text-xs">
                <span>⭐</span>
                <span>{lang === 'ar' ? 'تأمل وتحدَّ نفسك:' : 'Reflect & Challenge:'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'التحدي: هل يكفي وضع جدار حماية قوي عند مدخل المستشفى لمنع خرق البيانات؟ لا، لأن المخترق قد يدخل عبر بريد الكتروني خبيث لأحد الأجهزة الطرفية، مما يستوجب تطبق الدفاع العميق و Zero Trust.'
                  : 'Challenge: Is a strong perimeter firewall enough for a hospital? No, phishing can breach internal endpoints, requiring Zero Trust.'}
              </p>
            </div>
          </div>
        </div>

        {/* 4. 📝 6-MARK OFFICIAL EXAM MODEL QUESTION SECTION (نمط الامتحان الوزاري ص 43) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <span>📝</span>
              <span>{lang === 'ar' ? 'سؤال نمط الامتحان الوزاري المعياري (ص 43)' : 'Exam-Style Question [6 Marks]'}</span>
            </span>
            <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[11px] font-bold border border-rose-500/20">
              6 Marks
            </span>
          </div>

          <blockquote className="p-3.5 bg-rose-500/10 border-r-4 border-rose-500 rounded-r-xl text-rose-900 dark:text-rose-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«اشرح لماذا يُعد تكديس وتوزيع التدابير الأمنية في طبقات متعددة (مفهوم الدفاع العميق Defense in Depth) أفضل للمؤسسات من الاعتماد على جدار حماية واحد فقط؟ [6 درجات] (استعن بـ: الاختراق والطبقات).»'
              : '"Explain why layering multiple security controls (Defense in Depth) protects organizations better than relying on a single entry firewall alone. [6 Marks]"'}
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
                  <strong>{lang === 'ar' ? '1. عيوب الاعتماد على حاجز واحد (3 درجات):' : '1. Single Firewall Limitations (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'الاعتماد على جدار حماية منفرد يعرض المنظومة كاملة للانهيار الفوري إذا نجح المهاجم في اختراقه أو تجاوز قواعده، حيث تصبح الشبكة الداخلية كلياً مكشوفة.'
                    : 'Relying on a single firewall leaves the entire enterprise vulnerable if that single control is bypassed.'}
                </li>
                <li>
                  <strong>{lang === 'ar' ? '2. مزايا الدفاع العميق المتعدد الطبقات (3 درجات):' : '2. Benefits of Defense in Depth (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'يوزع الأمان على 4 طبقات (المدخل، مسار الاتصال VPN، عزل الخوادم DMZ، والأجهزة الطرفية). فإذا سقطت طبقة، تمنع الطبقة التالية انتشار الضرر وتستمر حماية البيانات الحساسة.'
                    : 'Distributes security across 4 layers (entry, VPN path, DMZ, endpoints), ensuring that if one fails, subsequent layers contain damage.'}
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
              {lang === 'ar' ? '(1) طابق بين كل وصف أمني والمصطلح المناسب له:' : '(1) Match each security description with its exact term:'}
            </h4>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>{lang === 'ar' ? 'أ. إنشاء نفق افتراضي مشفر لنقل البيانات بأمان عبر الإنترنت' : 'a. Creating an encrypted virtual private line over the internet'} &rarr; <strong>VPN (أ)</strong></li>
              <li>{lang === 'ar' ? 'ب. منطقة تُوضع فيها خوادم المواقع العامة بمعزل عن الشبكة الداخلية' : 'b. Zone where public web servers are placed isolated from internal network'} &rarr; <strong>DMZ (ب)</strong></li>
              <li>{lang === 'ar' ? 'ج. نظام يفحص مرور حركة الشبكة ويسمح بها أو يمنعها بناءً على قواعد' : 'c. System filtering network traffic allowing or denying based on rules'} &rarr; <strong>{lang === 'ar' ? 'جدار الحماية Firewall (ج)' : 'Firewall (c)'}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10-Question Quiz Practice Section */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl font-bold text-sm">📝</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-2 (10 أسئلة من كتاب الوزارة)' : 'Lesson 2-2 Evaluation Quiz (10 Textbook Questions)'}
            </h2>
          </div>
          <span className="text-xs text-sub font-mono">10 Questions</span>
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
                    let btnStyle = "theme-panel text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-blue-500";
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

      {/* ⭐ KEY TAKEAWAY (الخلاصة الذهبية لكتاب الوزارة ص 44) */}
      <section className="theme-panel border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl bg-gradient-to-r from-amber-500/10 via-blue-500/5 to-transparent">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm">⭐</span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'الخلاصة الذهبية لكتاب الوزارة (Key Takeaway)' : 'Key Takeaway'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-semibold">
          {lang === 'ar'
            ? 'تذكر دائماً: يبنى أمان الشبكات القوي عبر تكديس الدفاع العميق على 4 طبقات (جدار الحماية، VPN، DMZ، والأجهزة الطرفية)، وتطبيق نموذج Zero Trust (عدم الوثوق بأحد والتحقق الدائم)، مما يحمي المنظومة حتى لو تم اختراق حاجز أمني واحد.'
            : 'Remember: Robust network security combines 4 Defense-in-Depth layers (Firewall, VPN, DMZ, Endpoints) and Zero Trust ("Never trust, always verify"), preventing system compromise even if one defense layer fails.'}
        </p>
      </section>
    </div>
  );
}
