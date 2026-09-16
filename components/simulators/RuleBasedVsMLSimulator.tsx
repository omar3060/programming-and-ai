'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

interface EmailSample {
  id: number;
  subjectAr: string;
  subjectEn: string;
  sender: string;
  isRealSpam: boolean;
  ruleBasedResult: 'spam' | 'inbox';
  mlResult: 'spam' | 'inbox';
  mlConfidence: number;
  ruleReasonAr: string;
  ruleReasonEn: string;
  mlReasonAr: string;
  mlReasonEn: string;
}

const sampleEmails: EmailSample[] = [
  {
    id: 1,
    subjectAr: 'عاجل: لقد فزت بـ $10,000 في يانصيب مجاني!',
    subjectEn: 'URGENT: You won $10,000 in free lottery!',
    sender: 'winner@fake-prize-99.com',
    isRealSpam: true,
    ruleBasedResult: 'spam',
    mlResult: 'spam',
    mlConfidence: 99,
    ruleReasonAr: 'احتوت على كلمة مفتاحية "فزت" و "مجاني".',
    ruleReasonEn: 'Triggered keyword rules "won" & "free".',
    mlReasonAr: 'درجة خطورة عالية: عنوان مجاني غير موثوق مع حساب وهمي حديث.',
    mlReasonEn: 'High threat pattern: untrusted domain & suspicious urgency phrasing.',
  },
  {
    id: 2,
    subjectAr: 'تذكير بموعد محاضرة الذكاء الاصطناعي المجانية غداً',
    subjectEn: 'Reminder: Free AI Interactive Lecture Tomorrow',
    sender: 'eng.omar@academy.edu',
    isRealSpam: false,
    ruleBasedResult: 'spam', // FALSE POSITIVE!
    mlResult: 'inbox',
    mlConfidence: 96,
    ruleReasonAr: '❌ خطأ: صنفت كـ Spam لمجرد وجود كلمة "مجانية" رغم أنها من مدرسك!',
    ruleReasonEn: '❌ False Positive: Flagged as Spam due to rigid "Free" rule!',
    mlReasonAr: '✅ صواب: حلل النموذج سياق الرسالة والنطاق التعليمي الموثوق وصنفها رسالة رسمية.',
    mlReasonEn: '✅ Correct: ML analyzed context & trusted instructor domain.',
  },
  {
    id: 3,
    subjectAr: 'مرفق جدول رواتب الموظفين لشهر سبتمبر',
    subjectEn: 'September Employee Salary Sheet Attached',
    sender: 'hr@company-internal.com',
    isRealSpam: false,
    ruleBasedResult: 'inbox',
    mlResult: 'inbox',
    mlConfidence: 98,
    ruleReasonAr: 'لم تطابق قواعد الكلمات المحظورة.',
    ruleReasonEn: 'Matched no blacklisted keywords.',
    mlReasonAr: 'رسالة إدارية رسمية موثوقة من قسم الموارد البشرية.',
    mlReasonEn: 'Legitimate internal HR communication pattern.',
  },
  {
    id: 4,
    subjectAr: 'يرجى مراجعة وتحديث كلمة السر الخاصة بحسابك البنكي',
    subjectEn: 'Please review and update your online banking password',
    sender: 'secure-update@phishing-bank-fake.org',
    isRealSpam: true,
    ruleBasedResult: 'inbox', // FALSE NEGATIVE!
    mlResult: 'spam',
    mlConfidence: 97,
    ruleReasonAr: '❌ خطأ: أفلتت من التصفية لعدم وجود كلمة "ربح" أو "فلوس" في العنوان!',
    ruleReasonEn: '❌ False Negative: Evaded rules because no blacklisted words were used!',
    mlReasonAr: '✅ صواب: كشف خوارزمية التعلم الآلي نمط التصيد والتناقض بين اسم البنك والنطاق المزيف.',
    mlReasonEn: '✅ Correct: ML model caught phishing pattern & mismatched domain header.',
  },
];

export function RuleBasedVsMLSimulator() {
  const { lang, playSfx } = useApp();
  const [approach, setApproach] = useState<'rule' | 'ml'>('ml');
  const [selectedEmailId, setSelectedEmailId] = useState<number>(2);

  const selectedEmail = sampleEmails.find((e) => e.id === selectedEmailId) || sampleEmails[0];

  return (
    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/40 space-y-4 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
            <i className="fa-solid fa-filter"></i>
          </div>
          <div>
            <h4 className="font-black text-xs sm:text-sm text-slate-100 dark:text-white">
              <span className="lang-ar">محاكي مقارنة البرمجة القائمة على القواعد (Rule-Based) مقابل التعلّم الآلي (ML)</span>
              <span className="lang-en">Rule-Based IF-ELSE Rules vs Machine Learning (ML) Spam Simulator</span>
            </h4>
            <p className="text-[11px] text-sub">
              <span className="lang-ar">شاهد الفرق بين التفكير المباشر للقواعد الثابتة والاستنتاج الذكي للأنماط</span>
              <span className="lang-en">See why rigid IF-ELSE rules fail on edge cases while ML adapts to patterns</span>
            </p>
          </div>
        </div>

        {/* Approach Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => { playSfx('click'); setApproach('rule'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              approach === 'rule'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-code"></i>
            <span className="lang-ar">البرمجة بالقواعد (IF-ELSE)</span>
            <span className="lang-en">Rule-Based</span>
          </button>
          <button
            onClick={() => { playSfx('click'); setApproach('ml'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              approach === 'ml'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-brain"></i>
            <span className="lang-ar">التعلّم الآلي (Machine Learning)</span>
            <span className="lang-en">Machine Learning</span>
          </button>
        </div>
      </div>

      {/* Interactive Email Selection List */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-sub block">
          <span className="lang-ar">اختر رسالة بريد إلكتروني لاختبار التصفية:</span>
          <span className="lang-en">Select an Email Sample to Test Filter:</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {sampleEmails.map((email) => (
            <button
              key={email.id}
              onClick={() => { playSfx('click'); setSelectedEmailId(email.id); }}
              className={`p-3 rounded-xl border text-start transition cursor-pointer space-y-1 ${
                selectedEmailId === email.id
                  ? 'border-purple-500 bg-purple-950/30 shadow-md'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between font-bold">
                <span className="truncate text-slate-200 text-[11px] max-w-[200px]">
                  <span className="lang-ar">{email.subjectAr}</span>
                  <span className="lang-en">{email.subjectEn}</span>
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${email.isRealSpam ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {email.isRealSpam ? (lang === 'ar' ? 'رسالة مزيفة' : 'Spam') : (lang === 'ar' ? 'رسالة حقيقية' : 'Legit')}
                </span>
              </div>
              <div className="text-[10px] text-sub font-mono truncate">{email.sender}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Live Classification Result Card */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="space-y-0.5">
            <strong className="text-slate-100 text-xs sm:text-sm block">
              <span className="lang-ar">{selectedEmail.subjectAr}</span>
              <span className="lang-en">{selectedEmail.subjectEn}</span>
            </strong>
            <span className="text-[11px] text-sub font-mono">From: {selectedEmail.sender}</span>
          </div>

          <div className="text-end">
            <span className="text-[10px] text-sub block"><span className="lang-ar">النتيجة الحقيقية:</span><span className="lang-en">Ground Truth:</span></span>
            <span className={`font-bold ${selectedEmail.isRealSpam ? 'text-rose-400' : 'text-emerald-400'}`}>
              {selectedEmail.isRealSpam ? (lang === 'ar' ? '🚫 مزيفة (Spam)' : '🚫 Real Spam') : (lang === 'ar' ? '📥 حقيقية (Inbox)' : '📥 Legitimate')}
            </span>
          </div>
        </div>

        {/* Current Approach Evaluation Box */}
        {approach === 'rule' ? (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1 text-amber-200">
            <div className="flex items-center justify-between font-bold">
              <span>
                <span className="lang-ar">نتيجة البرمجة بالقواعد (IF-ELSE Rules):</span>
                <span className="lang-en">Rule-Based Filter Verdict:</span>{' '}
                <span className={selectedEmail.ruleBasedResult === 'spam' ? 'text-rose-400' : 'text-emerald-400'}>
                  {selectedEmail.ruleBasedResult === 'spam' ? 'Spam' : 'Inbox'}
                </span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-amber-500/40">
                Rigid Keyword Rules
              </span>
            </div>
            <p className="text-[11px] leading-relaxed pt-1">
              <span className="lang-ar">{selectedEmail.ruleReasonAr}</span>
              <span className="lang-en">{selectedEmail.ruleReasonEn}</span>
            </p>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-1 text-purple-200">
            <div className="flex items-center justify-between font-bold">
              <span>
                <span className="lang-ar">نتيجة التعلّم الآلي (Machine Learning Model):</span>
                <span className="lang-en">Machine Learning Verdict:</span>{' '}
                <span className={selectedEmail.mlResult === 'spam' ? 'text-rose-400' : 'text-emerald-400'}>
                  {selectedEmail.mlResult === 'spam' ? 'Spam' : 'Inbox'}
                </span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-purple-500/40 text-emerald-400 font-bold">
                {selectedEmail.mlConfidence}% Confidence Score
              </span>
            </div>
            <p className="text-[11px] leading-relaxed pt-1">
              <span className="lang-ar">{selectedEmail.mlReasonAr}</span>
              <span className="lang-en">{selectedEmail.mlReasonEn}</span>
            </p>
          </div>
        )}
      </div>

      {/* Core Educational Takeaway */}
      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs text-sub leading-relaxed">
        <strong className="text-blue-300 block font-bold">
          <span className="lang-ar">💡 خلاصة الدرس الرسمية (كتاب الوزارة ص 12 - 13):</span>
          <span className="lang-en">💡 Official Pedagogical Takeaway (pp. 12 - 13):</span>
        </strong>
        <p className="text-[11px] pt-0.5">
          <span className="lang-ar">
            في البرمجة القائمة على القواعد، يجب على المهندس كتابة كل قاعدة يدوياً (`IF contains "free" THEN Spam`) وهو أمر مستحيل التغطية لكافة الحالات الفردية. بينما في <strong>التعلّم الآلي (Machine Learning)</strong>، يُعطى النظام ملايين البيانات ليتعلم استنتاج الأنماط المعقدة وتحديد درجة الثقة تلقائياً!
          </span>
          <span className="lang-en">
            In rule-based programming, engineers must manually hardcode every condition (`IF contains "free" THEN Spam`), which fails on complex edge cases. In <strong>Machine Learning</strong>, models analyze patterns from massive datasets to classify & assign confidence probabilities automatically!
          </span>
        </p>
      </div>
    </div>
  );
}
