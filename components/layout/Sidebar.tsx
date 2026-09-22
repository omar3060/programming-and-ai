'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { LessonViewId } from '@/types';

interface SidebarProps {
  activeView: LessonViewId;
  onNavigate: (viewId: LessonViewId) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ activeView, onNavigate, isOpenMobile, onCloseMobile }: SidebarProps) {
  const { playSfx } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [unit1Open, setUnit1Open] = useState(true);
  const [unit2Open, setUnit2Open] = useState(true);

  const handleNav = (viewId: LessonViewId) => {
    playSfx('click');
    onNavigate(viewId);
    onCloseMobile();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sidebar Backdrop for Mobile */}
      {isOpenMobile && (
        <div
          id="sidebar-backdrop"
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ASIDE SIDEBAR */}
      <aside
        id="app-sidebar"
        className={`w-80 max-w-[85vw] theme-panel border-e flex flex-col shrink-0 h-screen lg:h-[calc(100vh-61px)] overflow-y-auto z-50 ${
          isOpenMobile ? 'open' : ''
        }`}
      >
        {/* Mobile Header with Close Button */}
        <div className="lg:hidden p-3 border-b border-slate-700/50 dark:border-slate-800/80 theme-subpanel flex items-center justify-between">
          <span className="font-bold text-xs text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
            <i className="fa-solid fa-compass"></i>
            <span>قائمة المنهج والتنقل</span>
          </span>
          <button
            onClick={onCloseMobile}
            className="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-500 hover:bg-rose-500/25 flex items-center justify-center text-sm font-bold transition cursor-pointer"
            aria-label="Close Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {/* Teacher Profile Card */}
        <div className="p-4 border-b border-slate-800/80 theme-subpanel">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-500/50 shadow-lg shadow-amber-500/20"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span className="lang-ar">خبير تدريس البرمجة والـ AI</span>
                <span className="lang-en">Curriculum Instructor</span>
              </div>
              <h2 className="font-black text-sm truncate">
                <span className="lang-ar">المهندس عمر محمود</span>
                <span className="lang-en">Eng. Omar Mahmoud</span>
              </h2>
              <div className="flex items-center gap-2.5 mt-0.5 text-[11px] font-mono">
                <a href="tel:01012306019" className="text-sub hover:text-amber-400 flex items-center gap-1 transition">
                  <i className="fa-solid fa-phone text-[10px] text-amber-400"></i>
                  <span>01012306019</span>
                </a>
                <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300 font-sans font-bold flex items-center gap-1 transition">
                  <i className="fa-brands fa-youtube text-xs"></i>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Teacher Contact Action Buttons */}
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-xs">
            <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="py-2 px-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 font-bold flex items-center justify-center gap-1 transition">
              <i className="fa-brands fa-youtube text-sm"></i>
              <span>YouTube</span>
            </a>
            <a href="https://wa.me/201012306019" target="_blank" rel="noreferrer" className="py-2 px-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center gap-1 transition">
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:01012306019" className="py-2 px-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center gap-1 transition">
              <i className="fa-solid fa-phone text-xs"></i>
              <span className="lang-ar">هاتف</span>
              <span className="lang-en">Call</span>
            </a>
          </div>
        </div>

        {/* Search Field */}
        <div className="p-3 border-b border-slate-800/80">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute top-3 rtl:right-3 ltr:left-3 text-sub text-xs"></i>
            <input
              type="text"
              id="lesson-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الدروس والمفاهيم..."
              className="w-full py-2 rtl:pr-8 rtl:pl-3 ltr:pl-8 ltr:pr-3 rounded-xl theme-subpanel border text-xs focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Units & Lessons Tree */}
        <div className="p-3 space-y-4 flex-1">

          {/* UNIT 1 ACCORDION */}
          <div className="space-y-1">
            <button onClick={() => { playSfx('click'); setUnit1Open(!unit1Open); }} className="w-full p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-start flex items-center justify-between font-bold text-xs hover:bg-brand-500/15 transition">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-brand-500 text-white flex items-center justify-center text-xs"><span className="lang-ar">١</span><span className="lang-en">1</span></span>
                <div>
                  <div className="text-[10px] text-brand-400 uppercase tracking-wider font-extrabold">
                    <span className="lang-ar">الوحدة الأولى</span>
                    <span className="lang-en">Unit 1</span>
                  </div>
                  <div className="text-xs font-black">
                    <span className="lang-ar">تكنولوجيا المعلومات والمجتمع</span>
                    <span className="lang-en">IT and Society</span>
                  </div>
                </div>
              </div>
              <i id="unit-1-icon" className={`fa-solid fa-chevron-down text-brand-400 text-xs transition-transform duration-200 ${unit1Open ? '' : '-rotate-90'}`}></i>
            </button>

            {/* Unit 1 Sub-items */}
            {unit1Open && (
              <div id="unit-1-items" className="space-y-1 rtl:pr-2 ltr:pl-2 pt-1">

                {/* Lesson 1-1 */}
                <button
                  id="nav-btn-lesson-1-1"
                  onClick={() => handleNav('lesson-1-1')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-brand-500 transition ${
                    activeView === 'lesson-1-1' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">1-1</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">تطور تكنولوجيا المعلومات</span>
                      <span className="lang-en">Evolution of IT</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">العصور الـ 5، قانون مور، والتقنيات الناشئة</span>
                      <span className="lang-en">5 Eras, Moore's Law & Emerging Tech</span>
                    </div>
                  </div>
                </button>

                {/* Lesson 1-2 */}
                <button
                  id="nav-btn-lesson-1-2"
                  onClick={() => handleNav('lesson-1-2')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-brand-500 transition ${
                    activeView === 'lesson-1-2' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">1-2</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">كيف يعمل الذكاء الاصطناعي؟</span>
                      <span className="lang-en">How AI Works</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">AI، ML، DL، الشبكات العصبية، والهلوسة</span>
                      <span className="lang-en">AI, ML, DL, Neural Nets & Hallucination</span>
                    </div>
                  </div>
                </button>

                {/* Lesson 1-3 */}
                <button
                  id="nav-btn-lesson-1-3"
                  onClick={() => handleNav('lesson-1-3')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-brand-500 transition ${
                    activeView === 'lesson-1-3' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">1-3</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">الذكاء الاصطناعي في الحياة والصناعة</span>
                      <span className="lang-en">AI in Daily Life & Industry</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">الرعاية الصحية، الزراعة، والصيانة التنبؤية</span>
                      <span className="lang-en">Healthcare, Ag & Predictive Maint.</span>
                    </div>
                  </div>
                </button>

                {/* Lesson 1-4 */}
                <button
                  id="nav-btn-lesson-1-4"
                  onClick={() => handleNav('lesson-1-4')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-brand-500 transition ${
                    activeView === 'lesson-1-4' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">1-4</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">القضايا الأخلاقية للذكاء الاصطناعي</span>
                      <span className="lang-en">AI Ethics & Principles</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">التحيز الخوارزمي، المبادئ الـ 4، و XAI</span>
                      <span className="lang-en">Algorithmic Bias, 4 Principles & XAI</span>
                    </div>
                  </div>
                </button>

                {/* Unit 1 Textbook Solutions */}
                <button
                  id="nav-btn-unit-1-solutions"
                  onClick={() => handleNav('unit-1-solutions')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-start flex items-start gap-2.5 text-xs hover:border-amber-400 transition ${
                    activeView === 'unit-1-solutions' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    <i className="fa-solid fa-book-open"></i>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-amber-400 truncate">
                      <span className="lang-ar">حلول تدريبات كتاب الوزارة (وحدة 1)</span>
                      <span className="lang-en">Textbook Exercises Solutions (Unit 1)</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">إجابات نموذجية مع الشرح والتفسير</span>
                      <span className="lang-en">Full Model Solutions with Rationale</span>
                    </div>
                  </div>
                </button>

                {/* Unit 1 Comprehensive Exam */}
                <button
                  id="nav-btn-unit-1-exam"
                  onClick={() => handleNav('unit-1-exam')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 text-start flex items-start gap-2.5 text-xs hover:border-amber-400 transition ${
                    activeView === 'unit-1-exam' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    <i className="fa-solid fa-trophy"></i>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-amber-300 truncate">
                      <span className="lang-ar">الامتحان الشامل للوحدة 1 🏆</span>
                      <span className="lang-en">Unit 1 Exam (25 Questions) 🏆</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">شهادة إتقان معتمدة بدرجة الطالب</span>
                      <span className="lang-en">Certified Mastery with Score</span>
                    </div>
                  </div>
                </button>

              </div>
            )}
          </div>

          {/* UNIT 2 ACCORDION */}
          <div className="space-y-1">
            <button onClick={() => { playSfx('click'); setUnit2Open(!unit2Open); }} className="w-full p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-start flex items-center justify-between font-bold text-xs hover:bg-rose-500/15 transition">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs"><span className="lang-ar">٢</span><span className="lang-en">2</span></span>
                <div>
                  <div className="text-[10px] text-rose-400 uppercase tracking-wider font-extrabold">
                    <span className="lang-ar">الوحدة الثانية</span>
                    <span className="lang-en">Unit 2</span>
                  </div>
                  <div className="text-xs font-black">
                    <span className="lang-ar">الأمن السيبراني (Cybersecurity)</span>
                    <span className="lang-en">Cybersecurity</span>
                  </div>
                </div>
              </div>
              <i id="unit-2-icon" className={`fa-solid fa-chevron-down text-rose-400 text-xs transition-transform duration-200 ${unit2Open ? '' : '-rotate-90'}`}></i>
            </button>

            {/* Unit 2 Sub-items */}
            {unit2Open && (
              <div id="unit-2-items" className="space-y-1 rtl:pr-2 ltr:pl-2 pt-1">

                {/* Lesson 2-1 */}
                <button
                  id="nav-btn-lesson-2-1"
                  onClick={() => handleNav('lesson-2-1')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-rose-500 transition ${
                    activeView === 'lesson-2-1' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">2-1</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">تقنيات التشفير والمصادقة</span>
                      <span className="lang-en">Cryptographic Tech & Auth</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">HTTPS، مصافحة TLS، والمصادقة MFA</span>
                      <span className="lang-en">HTTPS, TLS Handshake & MFA</span>
                    </div>
                  </div>
                </button>

                {/* Lesson 2-2 */}
                <button
                  id="nav-btn-lesson-2-2"
                  onClick={() => handleNav('lesson-2-2')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-rose-500 transition ${
                    activeView === 'lesson-2-2' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">2-2</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">تصميم أمن الشبكات</span>
                      <span className="lang-en">Network Security Design</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">جدار الحماية، VPN، DMZ، و Zero Trust</span>
                      <span className="lang-en">Firewall, VPN, DMZ & Zero Trust</span>
                    </div>
                  </div>
                </button>

                {/* Lesson 2-3 */}
                <button
                  id="nav-btn-lesson-2-3"
                  onClick={() => handleNav('lesson-2-3')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl theme-subpanel border text-start flex items-start gap-2.5 text-xs hover:border-rose-500 transition ${
                    activeView === 'lesson-2-3' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">2-3</span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate">
                      <span className="lang-ar">الاستجابة للحوادث وإدارة المخاطر</span>
                      <span className="lang-en">Incident Response & Risk</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">المراحل الـ 6 والمعادلة: Risk = Impact × Likelihood</span>
                      <span className="lang-en">6 IR Phases & Risk Size formula</span>
                    </div>
                  </div>
                </button>

                {/* Unit 2 Textbook Solutions */}
                <button
                  id="nav-btn-unit-2-solutions"
                  onClick={() => handleNav('unit-2-solutions')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-start flex items-start gap-2.5 text-xs hover:border-rose-400 transition ${
                    activeView === 'unit-2-solutions' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    <i className="fa-solid fa-book-open"></i>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-rose-400 truncate">
                      <span className="lang-ar">حلول تدريبات كتاب الوزارة (وحدة 2)</span>
                      <span className="lang-en">Textbook Exercises Solutions (Unit 2)</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">إجابات نموذجية مع الشرح والتفسير</span>
                      <span className="lang-en">Full Model Solutions with Rationale</span>
                    </div>
                  </div>
                </button>

                {/* Unit 2 Comprehensive Exam */}
                <button
                  id="nav-btn-unit-2-exam"
                  onClick={() => handleNav('unit-2-exam')}
                  className={`nav-lesson-btn w-full p-2.5 rounded-xl bg-gradient-to-r from-rose-500/20 to-amber-500/20 border border-rose-500/40 text-start flex items-start gap-2.5 text-xs hover:border-rose-400 transition ${
                    activeView === 'unit-2-exam' ? 'active-nav' : ''
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    <i className="fa-solid fa-shield-halved"></i>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-rose-300 truncate">
                      <span className="lang-ar">الامتحان الشامل للوحدة 2 🛡️</span>
                      <span className="lang-en">Unit 2 Exam (25 Questions) 🛡️</span>
                    </div>
                    <div className="text-[10px] text-sub truncate">
                      <span className="lang-ar">شهادة إتقان الأمن السيبراني</span>
                      <span className="lang-en">Certified Cybersecurity Mastery</span>
                    </div>
                  </div>
                </button>

              </div>
            )}
          </div>

          {/* Upcoming Units in Roadmap */}
          <div className="pt-2 border-t border-slate-800/80 space-y-1">
            <div className="text-[10px] font-bold text-sub px-2 uppercase tracking-wider">
              <span className="lang-ar">خريطة باقي وحدات المنهج</span>
              <span className="lang-en">Curriculum Roadmap</span>
            </div>

            <div className="p-2.5 rounded-xl theme-subpanel border opacity-60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold"><span className="lang-ar">٣</span><span className="lang-en">3</span></span>
                <span className="text-sub font-semibold">
                  <span className="lang-ar">الوحدة 3: تطبيقات الويب</span>
                  <span className="lang-en">Unit 3: Web Applications</span>
                </span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                <span className="lang-ar">قريباً</span>
                <span className="lang-en">Soon</span>
              </span>
            </div>

            <div className="p-2.5 rounded-xl theme-subpanel border opacity-60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold"><span className="lang-ar">٤</span><span className="lang-en">4</span></span>
                <span className="text-sub font-semibold">
                  <span className="lang-ar">الوحدة 4: تصميم الويب والوسائط المتعددة</span>
                  <span className="lang-en">Unit 4: Web & Media Design</span>
                </span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                <span className="lang-ar">قريباً</span>
                <span className="lang-en">Soon</span>
              </span>
            </div>
          </div>

        </div>

        {/* Aside Footer */}
        <div className="p-3 border-t border-slate-800/80 text-center text-[11px] text-sub">
          <div><span className="lang-ar">منصة المهندس عمر محمود</span><span className="lang-en">Eng. Omar Mahmoud Academy</span></div>
          <div className="flex items-center justify-center gap-3 mt-1 text-xs">
            <a href="tel:01012306019" className="font-mono text-amber-400 font-bold hover:underline flex items-center gap-1">
              <i className="fa-solid fa-phone text-[10px]"></i>
              <span>01012306019</span>
            </a>
            <a href="https://www.youtube.com/@omarmahmoud-p6l" target="_blank" rel="noreferrer" className="text-red-400 font-bold hover:underline flex items-center gap-1">
              <i className="fa-brands fa-youtube text-sm"></i>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
