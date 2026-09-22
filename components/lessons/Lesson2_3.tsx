'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { unit2ExamQuestions } from '@/data/unit2ExamQuestions';

import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
import { IncidentRiskLab } from '@/components/simulators/IncidentRiskLab';

export function Lesson2_3() {
  const { lang, playSfx } = useApp();
  const quizQuestions = unit2ExamQuestions.slice(10, 15);

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
      <header className="bg-gradient-to-r from-orange-900 via-slate-900 to-slate-900 border border-orange-800/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500" />
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-bold border border-orange-500/30 mb-3">
              {lang === 'ar' ? 'الوحدة 2: الأمن السيبراني • الدرس 2-3' : 'Unit 2: Cybersecurity • Lesson 2-3'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'ar' ? '2-3 الاستجابة للحوادث وإدارة المخاطر' : '2-3 Incident Response and Risk Management'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {lang === 'ar'
                ? 'عند وقوع حادث أمني، كيف تستجيب المؤسسة بترتيب قياسي، وكيف تحدد أولويات المخاطر للمعالجة أولاً؟'
                : 'When a security incident happens, how should an organization respond in order — and how does it decide which risks to address first?'}
            </p>
          </div>
          <DownloadEvaluationButton pdfUrl="/Unit2_Evaluation_Solutions.pdf" fileName="Unit2_Evaluation_Solutions.pdf" lessonTitle="الدرس 2-3" />
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
            ? 'تتبع الاستجابة للحوادث ست مراحل مرتبة، ويحدد تقييم المخاطر أولوية المخاطر بحسب (حجم الخطر = التأثير × الاحتمالية) — بحيث تتصرف المؤسسة بالترتيب الصحيح وعلى المخاطر الأكثر خطورة أولاً.'
            : 'Incident response follows six ordered stages, and risk assessment prioritizes risks by impact × likelihood — so an organization acts in the right order and on the right risks first.'}
        </blockquote>
      </section>

      {/* Section 1: What is a Security Incident */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-orange-400">
            {lang === 'ar' ? '1. ما هو الحادث الأمني (Security Incident)' : '1. What is a Security Incident'}
          </h2>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {lang === 'ar'
            ? 'الحادث الأمني هو موقف ينجم عنه حدوث ضرر فعلي نتيجة مشكلة في أمن المعلومات.'
            : 'A security incident is a situation in which actual damage occurs due to an information security problem.'}
        </p>

        {/* 3 Common Incident Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-1">
            <h4 className="font-bold text-rose-300 text-sm">
              {lang === 'ar' ? 'تسريب المعلومات (Information Leak)' : 'Information Leak'}
            </h4>
            <p className="text-xs text-slate-300">
              {lang === 'ar' ? 'تسريب معلومات شخصية أو سرية إلى الخارج.' : 'Personal or confidential information is leaked to the outside.'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-1">
            <h4 className="font-bold text-amber-300 text-sm">
              {lang === 'ar' ? 'تعديل البيانات (Data Tampering)' : 'Data Tampering'}
            </h4>
            <p className="text-xs text-slate-300">
              {lang === 'ar' ? 'تغيير بيانات داخل النظام دون تصريح.' : 'Data within a system is altered without authorization.'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-1">
            <h4 className="font-bold text-blue-300 text-sm">
              {lang === 'ar' ? 'تعطل الخدمة (Service Outage)' : 'Service Outage'}
            </h4>
            <p className="text-xs text-slate-300">
              {lang === 'ar' ? 'توقف الخدمة عن العمل نتيجة هجمات على الخادم.' : 'A service becomes unavailable due to attacks on the server.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Flow of 6 Incident Response Stages */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-orange-400">
            {lang === 'ar' ? '2. تسلسل مراحل الاستجابة للحوادث الست (The 6 Stages)' : '2. Flow of Incident Response (6 Ordered Stages)'}
          </h2>
          <span className="text-xs font-mono bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20">
            Strict Ordered Sequence
          </span>
        </div>

        {/* 6 Stages Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/90 text-slate-200 uppercase text-xs font-bold">
              <tr>
                <th className="p-3">{lang === 'ar' ? 'المرحلة' : 'Stage'}</th>
                <th className="p-3">{lang === 'ar' ? 'الوصف والتطبيق العملي' : 'Description & Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/40">
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-slate-300">① {lang === 'ar' ? 'التحضير (Preparation)' : 'Preparation'}</td>
                <td className="p-3">{lang === 'ar' ? 'إعداد إجراءات وهياكل الاستجابة مسبقاً تحسباً للحوادث وتجهيز النسخ الاحتياطية.' : 'Establish response procedures and structures in advance, in preparation for incidents.'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-amber-400">② {lang === 'ar' ? 'الكشف والتحليل (Detection)' : 'Detection'}</td>
                <td className="p-3">{lang === 'ar' ? 'اكتشاف وتأكيد وقوع الحادث الأمني ورصد التنبيهات.' : 'Discover and confirm that an incident has occurred.'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-rose-400">③ {lang === 'ar' ? 'الاحتواء (Containment)' : 'Containment'}</td>
                <td className="p-3">{lang === 'ar' ? 'الحد من نطاق التأثير وعزل الأجهزة المصابة حتى لا ينتشر الضرر لباقي المنظومة.' : 'Limit the scope of impact so that damage does not spread further.'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-purple-400">④ {lang === 'ar' ? 'الاستئصال وإزالة التهديد (Eradication)' : 'Eradication'}</td>
                <td className="p-3">{lang === 'ar' ? 'إزالة السبب الجذري للحادث (مثل حذف البرمجيات الخبيثة، سد الثغرات، وإلغاء الحسابات المخترقة).' : 'Remove the cause of the incident (e.g., remove malware).' }</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-emerald-400">⑤ {lang === 'ar' ? 'الاستعادة (Recovery)' : 'Recovery'}</td>
                <td className="p-3">{lang === 'ar' ? 'إعادة الأنظمة والخدمات إلى حالتها الطبيعية من نسخ احتياطية نظيفة والتحقق من سلامتها.' : 'Return systems and services to their normal state.'}</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition">
                <td className="p-3 font-bold text-blue-400">⑥ {lang === 'ar' ? 'الدروس المستفادة والتحسين (Prevention of Recurrence)' : 'Prevention of Recurrence'}</td>
                <td className="p-3">{lang === 'ar' ? 'تحليل الأسباب واتخاذ تدابير لمنع تكرار نفس الحادث مستقبلاً.' : 'Analyze the cause and take measures so that the same incident does not occur again.'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className="p-4 bg-rose-950/30 border-l-4 border-rose-500 rounded-r-xl text-xs text-rose-200">
          ⚠️ <strong>{lang === 'ar' ? 'تحذير جوهري:' : 'Critical Order Requirement:'}</strong>{' '}
          {lang === 'ar'
            ? 'من الضروري تنفيذ مراحل الاستجابة للحوادث الست بالترتيب. على سبيل المثال، إذا تم إجراء الاستعادة (Recovery) دون استئصال السبب (Eradication)، فستظل البرمجيات الخبيثة نشطة ويتكرر الحادث الأمني فوراً.'
            : 'It is important to proceed through the six stages of incident response in order. For example, if recovery is performed without identifying and eradicating the cause, the same incident will occur again.'}
        </blockquote>
      </section>

      {/* Interactive IncidentRiskLab Simulator */}
      <section>
        <IncidentRiskLab lang={lang} />
      </section>

      {/* Section 3: Risk Assessment (Risk Size = Impact x Likelihood) */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-black text-amber-400">
            {lang === 'ar' ? '3. مفهوم تقييم المخاطر (Risk Assessment)' : '3. Concept of Risk Assessment'}
          </h2>
          <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">
            Risk Size = Impact × Likelihood
          </span>
        </div>

        <div className="p-5 bg-black/40 border border-slate-800 rounded-xl text-center space-y-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold block">
            {lang === 'ar' ? 'المعادلة القياسية لحجم الخطر' : 'Mathematical Formula of Risk Magnitude'}
          </span>
          <p className="text-2xl font-black text-amber-400">
            {lang === 'ar' ? 'حجم الخطر = التأثير (Impact) × الاحتمالية (Likelihood)' : 'Risk Size = Impact × Likelihood'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-amber-300 text-sm mb-1">
              ① {lang === 'ar' ? 'التأثير (Impact)' : 'Impact'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar' ? 'حجم الضرر الفعلي المتوقع وقوعه إذا تحقق الخطر بالفعل.' : 'How much damage occurs if the risk actually materializes.'}
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-xl">
            <h4 className="font-bold text-amber-300 text-sm mb-1">
              ② {lang === 'ar' ? 'الاحتمالية (Likelihood)' : 'Likelihood'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'ar' ? 'نسبة فرصة أو احتمالية وقوع الخطر في المستقبل.' : 'How high the probability is that the risk will actually materialize.'}
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 leading-relaxed">
          📌 <strong>{lang === 'ar' ? 'قاعدة الأولوية القصوى:' : 'Prioritization Rule:'}</strong>{' '}
          {lang === 'ar'
            ? 'المخاطر التي تجمع بين التأثير المرتفع والاحتمالية العالية يجب البدء بمعالجتها وإعطاؤها الأولوية القصوى. ونظراً لصعوبة معالجة كل المخاطر في وقت واحد، فمن المهم وضع الأولويات واتخاذ الإجراءات بشكل منهجي.'
            : 'Risks with both high impact and high likelihood should be addressed first. Since it is difficult to address all risks at the same time, it is important to set priorities and take measures systematically.'}
        </div>
      </section>

      {/* 5-Question Quiz Practice Section */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-orange-500/20 text-orange-400 rounded-xl font-bold">📝</span>
            <h2 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'اختبار وتقييم الدرس 2-3 (Exam-Style Questions)' : 'Lesson 2-3 Evaluation Quiz'}
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
