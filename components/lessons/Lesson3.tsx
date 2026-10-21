'use client';
import React from 'react';
import { useApp } from '@/components/providers/AppProviders';
export function Lesson3() {
  const { setActiveLesson, playSfx } = useApp();
  const items = [
    ['lesson-3-1', 'الدرس 3-1: البنية العامة لتطبيقات الويب', 'Lesson 3-1: Web Application Structure'],
    ['lesson-3-2', 'الدرس 3-2: طرق الاتصال في تطبيقات الويب', 'Lesson 3-2: Web Communication'],
    ['lesson-3-3', 'الدرس 3-3: تكنولوجيا الواجهة الأمامية', 'Lesson 3-3: Frontend Technology'],
    ['unit-3-solutions', 'حلول تدريبات وتمارين نهاية دروس الوحدة الثالثة', 'Unit 3 Lesson Exercises and Review Solutions'],
    ['unit-3-exam', 'الامتحان الشامل (25 سؤالاً) 🏆', 'Comprehensive Exam (25 Questions) 🏆'],
  ] as const;
  return <div className="space-y-6 animate-fadeIn"><header className="theme-panel border border-violet-500/30 p-6 sm:p-8 rounded-3xl"><span className="lang-ar text-violet-400 font-bold">الوحدة الثالثة</span><span className="lang-en text-violet-400 font-bold">Unit 3</span><h1 className="text-3xl font-black mt-3"><span className="lang-ar">تطبيقات الويب</span><span className="lang-en">Web Applications</span></h1></header><div className="grid md:grid-cols-2 gap-3">{items.map(([id, ar, en]) => <button key={id} onClick={() => { playSfx('click'); setActiveLesson(id); }} className="theme-panel border p-5 rounded-2xl text-start hover:border-violet-500"><span className="lang-ar">{ar}</span><span className="lang-en">{en}</span></button>)}</div></div>;
}
export default Lesson3;
