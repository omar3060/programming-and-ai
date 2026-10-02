'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';
import { IncidentRiskLab } from '@/components/simulators/IncidentRiskLab';

export function Lesson2_3() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(20, 30);

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showPauseThink, setShowPauseThink] = useState(false);
  const [engineerChoice, setEngineerChoice] = useState<'restoreFirst' | 'containFirst' | null>(null);
  const [showExamAnswer, setShowExamAnswer] = useState(false);

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    playSfx('click');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Lesson Header Banner */}
      <header className="theme-panel border border-orange-500/20 rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500" />
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold border border-orange-500/20">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-3' : 'Unit 2: Cybersecurity • Lesson 2-3'}
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            {lang === 'ar' ? '2-3 الاستجابة للحوادث وإدارة المخاطر' : '2-3 Incident Response and Risk Management'}
          </h1>
          <p className="text-sub text-xs sm:text-base max-w-3xl leading-relaxed">
            {lang === 'ar'
              ? 'عند وقوع حادث أمني، كيف تستجيب المؤسسة بترتيب قياسي، وكيف تحدد أولويات المخاطر للمعالجة أولاً؟'
              : 'When a security incident happens, how should an organization respond in order — and how does it decide which risks to address first?'}
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
            ? 'تتبع الاستجابة للحوادث ست مراحل مرتبة، ويحدد تقييم المخاطر أولوية المخاطر بحسب (حجم الخطر = التأثير × الاحتمالية) — بحيث تتصرف المؤسسة بالترتيب الصحيح وعلى المخاطر الأكثر خطورة أولاً.'
            : 'Incident response follows six ordered stages, and risk assessment prioritizes risks by impact × likelihood — so an organization acts in the right order and on the right risks first.'}
        </blockquote>
      </section>

      {/* Section 1: What is a Security Incident */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-orange-600 dark:text-orange-400">
            {lang === 'ar' ? '1. ما هو الحادث الأمني (Security Incident)' : '1. What is a Security Incident'}
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'الحادث الأمني هو موقف ينجم عنه حدوث ضرر فعلي أو تهديد جدي لسرية أو سلامة أو توافر المعلومات نتيجة مشكلة أمنية.'
            : 'A security incident is a situation in which actual damage occurs or serious threat compromises confidentiality, integrity, or availability.'}
        </p>

        {/* 3 Common Incident Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-4 theme-subpanel border rounded-xl space-y-1">
            <h4 className="font-bold text-rose-600 dark:text-rose-300 text-xs sm:text-sm">
              {lang === 'ar' ? 'تسريب المعلومات (Information Leak)' : 'Information Leak'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {lang === 'ar' ? 'تسريب معلومات شخصية أو سرية إلى الخارج.' : 'Personal or confidential information is leaked to the outside.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl space-y-1">
            <h4 className="font-bold text-amber-600 dark:text-amber-300 text-xs sm:text-sm">
              {lang === 'ar' ? 'تعديل البيانات (Data Tampering)' : 'Data Tampering'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {lang === 'ar' ? 'تغيير بيانات داخل النظام دون تصريح (مثل تعديل درجات الطلاب).' : 'Data within a system is altered without authorization.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl space-y-1">
            <h4 className="font-bold text-blue-600 dark:text-blue-300 text-xs sm:text-sm">
              {lang === 'ar' ? 'تعطل الخدمة (Service Outage)' : 'Service Outage'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {lang === 'ar' ? 'توقف الخدمة عن العمل نتيجة هجمات على الخادم.' : 'A service becomes unavailable due to attacks on the server.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Flow of 6 Incident Response Stages */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-orange-600 dark:text-orange-400">
            {lang === 'ar' ? '2. تسلسل مراحل الاستجابة للحوادث الست (The 6 Stages)' : '2. Flow of Incident Response (6 Ordered Stages)'}
          </h2>
          <span className="text-[11px] font-mono bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2.5 py-0.5 rounded-full border border-orange-500/20">
            Strict Ordered Sequence
          </span>
        </div>

        {/* 6 Stages Table - Perfectly Aligned via text-start */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <table className="w-full text-start text-xs sm:text-sm text-slate-800 dark:text-slate-300">
            <thead className="theme-subpanel text-slate-900 dark:text-slate-200 uppercase text-[11px] sm:text-xs font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 sm:p-4 text-start font-black shrink-0">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                <th className="p-3 sm:p-4 text-start font-black min-w-[200px]">{lang === 'ar' ? 'الوصف والتطبيق العملي' : 'Description & Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-slate-900 dark:text-slate-300 text-start align-top whitespace-nowrap">① {lang === 'ar' ? 'التحضير (Preparation)' : 'Preparation'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'إعداد إجراءات وهياكل الاستجابة مسبقاً تحسباً للحوادث وتجهيز النسخ الاحتياطية.' : 'Establish response procedures and structures in advance, in preparation for incidents.'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-amber-600 dark:text-amber-400 text-start align-top whitespace-nowrap">② {lang === 'ar' ? 'الكشف والتحليل (Detection)' : 'Detection'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'اكتشاف وتأكيد وقوع الحادث الأمني ورصد التنبيهات.' : 'Discover and confirm that an incident has occurred.'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-rose-600 dark:text-rose-400 text-start align-top whitespace-nowrap">③ {lang === 'ar' ? 'الاحتواء (Containment)' : 'Containment'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'الحد من نطاق التأثير وعزل الأجهزة المصابة حتى لا ينتشر الضرر لباقي المنظومة.' : 'Limit the scope of impact so that damage does not spread further.'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-purple-600 dark:text-purple-400 text-start align-top whitespace-nowrap">④ {lang === 'ar' ? 'الاستئصال (Eradication)' : 'Eradication'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'إزالة السبب الجذري للحادث (مثل حذف البرمجيات الخبيثة، سد الثغرات، وإلغاء الحسابات المخترقة).' : 'Remove the cause of the incident (e.g., remove malware).' }</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-emerald-600 dark:text-emerald-400 text-start align-top whitespace-nowrap">⑤ {lang === 'ar' ? 'الاستعادة (Recovery)' : 'Recovery'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'إعادة الأنظمة والخدمات إلى حالتها الطبيعية من نسخ احتياطية نظيفة والتحقق من سلامتها.' : 'Return systems and services to their normal state.'}</td>
              </tr>
              <tr className="hover:bg-slate-500/10 transition">
                <td className="p-3 sm:p-4 font-bold text-blue-600 dark:text-blue-400 text-start align-top whitespace-nowrap">⑥ {lang === 'ar' ? 'الدروس المستفادة (Prevention)' : 'Prevention of Recurrence'}</td>
                <td className="p-3 sm:p-4 text-start leading-relaxed align-top">{lang === 'ar' ? 'تحليل الأسباب واتخاذ تدابير لمنع تكرار نفس الحادث مستقبلاً.' : 'Analyze the cause and take measures so that the same incident does not occur again.'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="p-3.5 sm:p-4 bg-rose-500/10 border-l-4 border-rose-500 rounded-r-xl text-xs text-rose-800 dark:text-rose-200">
          ⚠️ <strong>{lang === 'ar' ? 'تحذير جوهري:' : 'Critical Order Requirement:'}</strong>{' '}
          {lang === 'ar'
            ? 'من الضروري تنفيذ مراحل الاستجابة للحوادث الست بالترتيب. على سبيل المثال، إذا تم إجراء الاستعادة (Recovery) دون استئصال السبب (Eradication)، فستظل البرمجيات الخبيثة نشطة ويتكرر الحادث الأمني فوراً.'
            : 'It is important to proceed through the six stages of incident response in order. For example, if recovery is performed without identifying and eradicating the cause, the same incident will occur again.'}
        </blockquote>
      </section>

      {/* Interactive IncidentRiskLab Simulator */}
      <section>
        <IncidentRiskLab />
      </section>

      {/* Section 3: Risk Assessment (Risk Size = Impact x Likelihood) */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-2xl font-black text-amber-600 dark:text-amber-400">
            {lang === 'ar' ? '3. مفهوم تقييم المخاطر (Risk Assessment)' : '3. Concept of Risk Assessment'}
          </h2>
          <span className="text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Risk Size = Impact × Likelihood
          </span>
        </div>

        <div className="p-4 theme-subpanel border rounded-xl text-center space-y-1.5">
          <span className="text-[10px] text-sub uppercase tracking-widest font-bold block">
            {lang === 'ar' ? 'المعادلة القياسية لحجم الخطر' : 'Mathematical Formula of Risk Magnitude'}
          </span>
          <p className="text-lg sm:text-2xl font-black text-amber-600 dark:text-amber-400">
            {lang === 'ar' ? 'حجم الخطر = التأثير (Impact) × الاحتمالية (Likelihood)' : 'Risk Size = Impact × Likelihood'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-amber-600 dark:text-amber-300 text-xs sm:text-sm mb-1">
              ① {lang === 'ar' ? 'التأثير (Impact)' : 'Impact'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar' ? 'حجم الضرر الفعلي المتوقع وقوعه إذا تحقق الخطر بالفعل.' : 'How much damage occurs if the risk actually materializes.'}
            </p>
          </div>

          <div className="p-4 theme-subpanel border rounded-xl">
            <h4 className="font-bold text-amber-600 dark:text-amber-300 text-xs sm:text-sm mb-1">
              ② {lang === 'ar' ? 'الاحتمالية (Likelihood)' : 'Likelihood'}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'ar' ? 'نسبة فرصة أو احتمالية وقوع الخطر في المستقبل.' : 'How high the probability is that the risk will actually materialize.'}
            </p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          📌 <strong>{lang === 'ar' ? 'قاعدة الأولوية القصوى:' : 'Prioritization Rule:'}</strong>{' '}
          {lang === 'ar'
            ? 'المخاطر التي تجمع بين التأثير المرتفع والاحتمالية العالية يجب البدء بمعالجتها وإعطاؤها الأولوية القصوى. ونظراً لصعوبة معالجة كل المخاطر في وقت واحد، فمن المهم وضع الأولويات واتخاذ الإجراءات بشكل منهجي.'
            : 'Risks with both high impact and high likelihood should be addressed first. Since it is difficult to address all risks at the same time, it is important to set priorities and take measures systematically.'}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* UNIFIED TEXTBOOK ENRICHMENT SECTION (ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-3) */}
      {/* ========================================================================= */}
      <section className="theme-panel border border-orange-500/30 p-5 sm:p-8 rounded-3xl space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] text-orange-500 uppercase font-bold tracking-wider">
              {lang === 'ar' ? 'ميزات وأنشطة كتاب الوزارة الرسمية للدرس 2-3' : 'Official Ministry Textbook Activities & Features (Lesson 2-3)'}
            </span>
            <h3 className="text-base sm:text-xl font-black mt-0.5 flex items-center gap-2 text-slate-900 dark:text-white">
              <span>🎓</span>
              {lang === 'ar'
                ? 'أنشطة: توقف وفكر • فكر كمهندس • سياق جديد • نمط الامتحان'
                : 'Activities: Pause & Think • Think as Engineer • New Context • Exam Style'}
            </h3>
          </div>
          <span className="text-xs text-sub font-mono shrink-0">ص 47 - ص 50</span>
        </div>

        {/* 1. 💡 PAUSE & THINK (توقف وفكر - ص 47) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1.5">
              <span>💡</span>
              <span>{lang === 'ar' ? 'توقف وفكر (PAUSE & THINK - كتاب الوزارة ص 47)' : 'PAUSE & THINK (Textbook p. 47)'}</span>
            </span>
          </div>

          <blockquote className="p-3 sm:p-4 bg-amber-500/10 border-r-4 border-amber-500 rounded-r-xl text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«لماذا يجب تنفيذ مرحلة الاحتواء (Containment) ومرحلة الاستئصال (Eradication) قبل البدء بمرحلة الاستعادة (Recovery)؟»'
              : '"Why must Containment and Eradication be performed prior to starting the Recovery phase?"'}
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
                  ? 'لأنه إذا تم إجراء الاستعادة (Recovery) وإعادة تشغيل السيرفرات دون استئصال السبب الجذري (Eradication) وحذف الفيروسات، فستظل البرمجيات الخبيثة نشطة، مما يؤدي فوراً إلى تكرار وقوع الحادث الأمني وإصابة البيانات المسترجعة بالعدوى مجدداً.'
                  : 'Because restoring services while malware remains active triggers immediate re-infection of restored clean backup data.'}
              </p>
            </div>
          )}
        </div>

        {/* 2. ⚙️ THINK AS AN ENGINEER (فكر كمهندس - ص 48) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-indigo-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center gap-1.5">
              <span>⚙️</span>
              <span>{lang === 'ar' ? 'فكّر كمهندس — استقرئ مع صاحبك واتخذ القرار (ص 48)' : 'Think as an Engineer — Investigate & Decide (p. 48)'}</span>
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm leading-relaxed text-indigo-900 dark:text-indigo-200 space-y-1.5">
            <strong>{lang === 'ar' ? 'السيناريو الرسمي من كتاب الوزارة:' : 'Verbatim Textbook Scenario:'}</strong>
            <p className="italic">
              {lang === 'ar'
                ? '«تعرضت مدرسة لهجوم برمجيات فدية (Ransomware) تم من خلاله تشفير ملفات الطلاب والدرجات. بصفتك مهندساً سيبرانياً، حدد الخطوة الأولى الفورية وطبق تقييم المخاطر.»'
                : '"A school suffered a ransomware attack encrypting student files. As a cyber engineer, determine the first action and calculate risk priority."'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => { playSfx('click'); setEngineerChoice('restoreFirst'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'restoreFirst'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-900 dark:text-rose-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-rose-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (أ): استعادة النسخة الاحتياطية فوراً (Recovery)' : 'Option A: Immediate Backup Recovery'}</span>
                {engineerChoice === 'restoreFirst' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'تخطي مرحلتي الاحتواء والاستئصال' : 'Bypassing Containment & Eradication'}
              </p>
            </button>

            <button
              onClick={() => { playSfx('click'); setEngineerChoice('containFirst'); }}
              className={`p-3.5 rounded-xl border text-start transition cursor-pointer space-y-1.5 ${
                engineerChoice === 'containFirst'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                  : 'theme-panel border-slate-300 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-xs sm:text-sm">
                <span>{lang === 'ar' ? 'الخيار (ب): فصل الأجهزة فوراً (Containment) ثم الاستئصال' : 'Option B: Containment First then Eradication'}</span>
                {engineerChoice === 'containFirst' && <span>✓</span>}
              </div>
              <p className="text-sub font-normal text-[11px]">
                {lang === 'ar' ? 'اتباع الترتيب المعياري القياسي' : 'Standard Ordered Incident Sequence'}
              </p>
            </button>
          </div>

          {engineerChoice && (
            <div className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn space-y-3 ${
              engineerChoice === 'containFirst'
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-200'
            }`}>
              <h4 className="font-bold flex items-center gap-1.5">
                <span>{engineerChoice === 'containFirst' ? '✅ التوصية والتحليل الهندسي المعياري (كتاب الوزارة):' : '⚠️ خطأ تسلسلي كارثي:'}</span>
              </h4>
              <p>
                {engineerChoice === 'containFirst'
                  ? (lang === 'ar'
                    ? 'الخيار (ب) هو الأنسب حتماً! يجب أولاً إجراء الاحتواء (فصل الأجهزة الموبوءة عن الشبكة فوراً لمنع تشفير باقي أجهزة المدرسة)، ثم استئصال الفيروس وحذف ثغرة الدخول، ثم استعادة البيانات بأمان من النسخ الاحتياطية.'
                    : 'Option B is required! Containment (isolating infected PCs) freezes ransomware spread, followed by Eradication and safe Recovery.')
                  : (lang === 'ar'
                    ? 'الاستعادة الفورية دون فصل الأجهزة يؤدي إلى تشفير النسخ الاحتياطية المسترجعة فوراً وتدميرها!'
                    : 'Restoring without isolation causes immediate re-encryption of clean backups!')}
              </p>

              {/* Stakeholder Analysis Table for Lesson 2-3 */}
              <div className="pt-2">
                <h5 className="font-bold text-xs mb-2 text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>📊</span>
                  <span>{lang === 'ar' ? 'جدول تحليل أصحاب المصلحة والمخاطر (كتاب الوزارة ص 48):' : 'Stakeholder & Risk Priority Matrix (p. 48):'}</span>
                </h5>
                <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 shadow-sm">
                  <table className="w-full text-start text-xs text-slate-800 dark:text-slate-200">
                    <thead className="bg-slate-100 dark:bg-slate-800 font-bold border-b border-slate-300 dark:border-slate-700">
                      <tr>
                        <th className="p-2.5 text-start">{lang === 'ar' ? 'السيناريو / الخطر' : 'Risk Scenario'}</th>
                        <th className="p-2.5 text-start font-bold text-amber-600 dark:text-amber-400">{lang === 'ar' ? 'التأثير × الاحتمالية' : 'Impact × Likelihood'}</th>
                        <th className="p-2.5 text-start font-bold text-rose-600 dark:text-rose-400">{lang === 'ar' ? 'أولوية المعالجة' : 'Remediation Priority'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '1. هجوم برمجيات الفدية (Ransomware)' : '1. Ransomware Attack'}</td>
                        <td className="p-2.5 text-amber-700 dark:text-amber-300 font-mono font-bold">{lang === 'ar' ? 'تأثير عالي جداً × احتمالية متوسطة' : 'High Impact × Med Likelihood'}</td>
                        <td className="p-2.5 text-rose-700 dark:text-rose-300 font-bold">{lang === 'ar' ? 'أولوية قصوى عاجلة (فورية)' : 'Top Priority (Immediate)'}</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900 dark:text-white">{lang === 'ar' ? '2. انقطاع الكهرباء القصير (Short Power Outage)' : '2. Short Power Outage'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300 font-mono font-bold">{lang === 'ar' ? 'تأثير منخفض × احتمالية متوسطة' : 'Low Impact × Med Likelihood'}</td>
                        <td className="p-2.5 text-emerald-700 dark:text-emerald-300">{lang === 'ar' ? 'أولوية ثانوية (تركيب UPS)' : 'Secondary Priority (UPS Installation)'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. 🌍 IN A NEW CONTEXT & REFLECT (في سياق جديد وتحدَّ نفسك - ص 49) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold flex items-center gap-1.5">
              <span>🌍</span>
              <span>{lang === 'ar' ? 'في سياق جديد وتحدَّ نفسك (ص 49)' : 'In a New Context & Reflect Challenge'}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 text-xs">
                <span>🛒</span>
                <span>{lang === 'ar' ? 'في سياق جديد (متجر إلكتروني):' : 'In a New Context (E-Commerce Store):'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'اكتشف متجر إلكتروني تسريب بيانات العملاء. 1) الاحتواء: إيقاف واجهة المتجر المؤقتة وإلغاء مفاتيح الوصول. 2) الاستئصال: سد الثغرة البرمجية. 3) الاستعادة: تشغيل الموقع النظيف. 4) الدروس المستفادة: توثيق الحادث وتطبيق تقييم المخاطر.'
                  : 'An online store leaks customer data. It contains the leak, eradicates the bug, restores clean data, and logs lessons learned.'}
              </p>
            </div>

            <div className="p-3.5 theme-panel rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 text-xs">
                <span>⭐</span>
                <span>{lang === 'ar' ? 'تأمل وتحدَّ نفسك:' : 'Reflect & Challenge:'}</span>
              </h4>
              <p className="text-sub leading-relaxed text-[11px] sm:text-xs">
                {lang === 'ar'
                  ? 'التحدي: هل يمكن الاستغناء عن المرحلة السادسة (الدروس المستفادة) إذا عاد النظام للعمل بسلاسة؟ لا، لأن عدم تحليل السبب سيؤدي حتماً لتكرار نفس الحادث الأمني.'
                  : 'Challenge: Can we skip Phase 6 (Lessons Learned)? No, failing to analyze root causes leads to repeat security breaches.'}
              </p>
            </div>
          </div>
        </div>

        {/* 4. 📝 6-MARK OFFICIAL EXAM MODEL QUESTION SECTION (نمط الامتحان الوزاري ص 49) */}
        <div className="p-4 sm:p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center gap-1.5">
              <span>📝</span>
              <span>{lang === 'ar' ? 'سؤال نمط الامتحان الوزاري المعياري (ص 49)' : 'Exam-Style Question [6 Marks]'}</span>
            </span>
            <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-[11px] font-bold border border-rose-500/20">
              6 Marks
            </span>
          </div>

          <blockquote className="p-3.5 bg-rose-500/10 border-r-4 border-rose-500 rounded-r-xl text-rose-900 dark:text-rose-200 text-xs sm:text-sm leading-relaxed font-semibold italic">
            {lang === 'ar'
              ? '«اشرح أهمية التسلسل العام لمراحل الاستجابة للحوادث الست (خاصة الاحتواء والاستئصال قبل الاستعادة)، ثم وضح كيف يُحسب حجم الخطر (Risk Size) وكيف يُحدد أولوية المعالجة. [6 درجات]»'
              : '"Explain the importance of 6-stage incident response order (containment/eradication before recovery), and how Risk Size = Impact × Likelihood determines remediation priority. [6 Marks]"'}
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
                  <strong>{lang === 'ar' ? '1. التسلل المعياري للاستجابة (3 درجات):' : '1. Response Order (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'يجب تنفيذ المراحل بالترتيب (تحضير ➔ كشف ➔ احتواء ➔ استئصال ➔ استعادة ➔ دروس مستفادة). فالاستعادة قبل الاستئصال تبقي الفيروس نشطاً وتسبب تكرار الحادث فوراً.'
                    : 'Mandates strict stage order; restoring services before eradication causes immediate re-infection.'}
                </li>
                <li>
                  <strong>{lang === 'ar' ? '2. حساب حجم الخطر والأولويات (3 درجات):' : '2. Risk Size & Priority (3 Marks):'}</strong>{' '}
                  {lang === 'ar'
                    ? 'يُحسب حجم الخطر بالقانون (حجم الخطر = التأثير × الاحتمالية). وتُعطى الأولوية القصوى للمخاطر ذات التأثير العالي والاحتمالية العالية نظراً لصعوبة معالجة كافة المخاطر دفعة واحدة.'
                    : 'Risk Size = Impact × Likelihood; High Impact × High Likelihood risks receive immediate remediation priority.'}
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
              {lang === 'ar' ? '(1) طابق بين كل إجراء ومرحلة الاستجابة المناسبة له:' : '(1) Match each action with its exact incident response phase:'}
            </h4>
            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
              <li>{lang === 'ar' ? 'أ. فصل الحواسيب المصابة بالبرمجيات الخبيثة فوراً عن الشبكة' : 'a. Disconnecting infected PCs from the network immediately'} &rarr; <strong>{lang === 'ar' ? 'الاحتواء (Containment)' : 'Containment'}</strong></li>
              <li>{lang === 'ar' ? 'ب. إزالة البرمجيات الخبيثة وسد الثغرات وإلغاء الحسابات المخترقة' : 'b. Purging malware and patching vulnerabilities'} &rarr; <strong>{lang === 'ar' ? 'الاستئصال (Eradication)' : 'Eradication'}</strong></li>
              <li>{lang === 'ar' ? 'ج. توثيق الأسباب وتحسين التدابير الأمنية لمنع تكرار الحادث' : 'c. Documenting root cause to prevent future recurrence'} &rarr; <strong>{lang === 'ar' ? 'الدروس المستفادة (Prevention of Recurrence)' : 'Prevention of Recurrence'}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10-Question Quiz Practice Section */}
      <section className="theme-panel border rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-xl font-bold text-sm">📝</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-3 (10 أسئلة من كتاب الوزارة)' : 'Lesson 2-3 Evaluation Quiz (10 Textbook Questions)'}
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
                    let btnStyle = "theme-panel text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-orange-500";
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

      {/* ⭐ KEY TAKEAWAY (الخلاصة الذهبية لكتاب الوزارة ص 50) */}
      <section className="theme-panel border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm">⭐</span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'الخلاصة الذهبية لكتاب الوزارة (Key Takeaway)' : 'Key Takeaway'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-semibold">
          {lang === 'ar'
            ? 'تذكر دائماً: تتبع الاستجابة للحوادث ست مراحل مرتبة (تحضير ➔ كشف ➔ احتواء ➔ استئصال ➔ استعادة ➔ دروس مستفادة). ويُحدد تقييم المخاطر أولوية العلاج بالقانون (حجم الخطر = التأثير × الاحتمالية) لمنع تكرار الحوادث الأمنية.'
            : 'Remember: Incident response follows 6 ordered phases (Preparation, Detection, Containment, Eradication, Recovery, Prevention). Risk Size = Impact × Likelihood guides priority remediation to prevent repeat incidents.'}
        </p>
      </section>
    </div>
  );
}
