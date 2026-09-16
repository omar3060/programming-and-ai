'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Mail, CheckCircle2, XCircle } from 'lucide-react';

export function SpamFilterSimulator() {
  const { lang, playSfx } = useApp();
  const [ruleRes, setRuleRes] = useState<string | null>(null);
  const [mlRes, setMlRes] = useState<string | null>(null);

  const testSpam = (type: number) => {
    playSfx('click');
    if (type === 1) {
      setRuleRes(
        lang === 'ar'
          ? 'صُنف Spam (طابق كلمة "مجانا")'
          : 'SPAM (matched "free")'
      );
      setMlRes(
        lang === 'ar'
          ? 'صُنف Spam بدقة 99.4%'
          : 'SPAM (99.4% Confidence)'
      );
    } else if (type === 2) {
      setRuleRes(
        lang === 'ar'
          ? 'تسرب لصندوق الوارد! (عجزت القواعد بسبب تباعد الحروف)'
          : 'INBOX LEAK (rules bypassed by spacing)'
      );
      setMlRes(
        lang === 'ar'
          ? 'صُنف Spam بدقة 98.7% (كشف نمط التباعد تلقائياً)'
          : 'SPAM (98.7% Confidence) (pattern detected)'
      );
    } else {
      setRuleRes(
        lang === 'ar'
          ? 'Inbox (بريد تعليمي سليم)'
          : 'INBOX (Valid email)'
      );
      setMlRes(
        lang === 'ar'
          ? 'Inbox بنسبة 99.8%'
          : 'INBOX (99.8% Valid)'
      );
    }
  };

  return (
    <div className="p-4 rounded-2xl theme-subpanel border space-y-3">
      <div className="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 text-xs">
        <Mail className="w-4 h-4 text-sky-500" />
        <span>
          {lang === 'ar'
            ? 'مقارنة تفاعلية: فلتر القواعد المبرمجة صراحة vs فلتر التعلّم الآلي (ML)'
            : 'Interactive Test: Rule-Based Logic vs Machine Learning Pattern Recognition'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => testSpam(1)}
          className="px-3 py-2 rounded-xl theme-panel border hover:border-sky-500 text-start transition cursor-pointer font-bold"
        >
          {lang === 'ar' ? '✉️ رسالة 1: "احصل على هدية مجاناً"' : '✉️ Email 1: "Get free gift now"'}
        </button>
        <button
          onClick={() => testSpam(2)}
          className="px-3 py-2 rounded-xl theme-panel border hover:border-sky-500 text-start transition cursor-pointer font-bold"
        >
          {lang === 'ar' ? '✉️ رسالة 2: "احصل على هـ د يـ ة m-j-a-n-a"' : '✉️ Email 2: "Get f r e e  g i f t"'}
        </button>
        <button
          onClick={() => testSpam(3)}
          className="px-3 py-2 rounded-xl theme-panel border hover:border-sky-500 text-start transition cursor-pointer font-bold"
        >
          {lang === 'ar' ? '✉️ رسالة 3: "جدول المحاضرات الدراسية"' : '✉️ Email 3: "Class Lecture Schedule"'}
        </button>
      </div>

      {(ruleRes || mlRes) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 animate-fadeIn">
          <div className="p-3.5 rounded-xl theme-panel border space-y-1">
            <strong className="text-sub block font-bold">
              {lang === 'ar' ? '1. برمجة القواعد الصريحة (Rule-Based):' : '1. Rule-Based Algorithm:'}
            </strong>
            <div className="text-slate-900 dark:text-slate-200 font-semibold">{ruleRes}</div>
          </div>
          <div className="p-3.5 rounded-xl theme-panel border space-y-1">
            <strong className="text-sky-600 dark:text-sky-400 block font-bold">
              {lang === 'ar' ? '2. نموذج التعلّم الآلي (ML Model):' : '2. Machine Learning Model:'}
            </strong>
            <div className="text-slate-900 dark:text-slate-200 font-semibold">{mlRes}</div>
          </div>
        </div>
      )}
    </div>
  );
}
