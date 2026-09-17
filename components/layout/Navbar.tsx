'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

interface NavbarProps {
  onToggleSidebar: () => void;
  onOpenPrintModal: () => void;
}

export function Navbar({ onToggleSidebar, onOpenPrintModal }: NavbarProps) {
  const { lang, theme, soundEnabled, toggleLanguage, toggleTheme, toggleSound, playSfx } = useApp();

  return (
    <header className="sticky top-0 z-40 theme-panel border-b backdrop-blur-md bg-opacity-90 px-3 sm:px-4 py-2.5 shadow-sm transition-all">
      {/* Top Main Row */}
      <div className="flex items-center justify-between gap-2 w-full">
        {/* Left Side (RTL Right): Sidebar Toggle & Brain Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              playSfx('click');
              onToggleSidebar();
            }}
            className="lg:hidden w-9 h-9 rounded-xl theme-subpanel border flex items-center justify-center text-slate-300 hover:text-white shrink-0"
            aria-label="Toggle Menu"
          >
            <i className="fa-solid fa-bars text-base"></i>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                draggable={false}
                className="w-9 h-9 rounded-xl object-cover border-2 border-amber-500/60 shadow-md shadow-amber-500/20 pointer-events-none select-none"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>

            {/* Desktop Title & Subtitle */}
            <div className="hidden md:block">
              <h1 className="font-black text-sm sm:text-base leading-tight text-slate-900 dark:text-white">
                <span className="lang-ar">منهج البرمجة والذكاء الاصطناعي ثانيه بكالوريا</span>
                <span className="lang-en">Programming & AI Curriculum 2nd Year</span>
              </h1>
              <p className="text-[11px] text-amber-500 dark:text-amber-400 font-bold leading-tight pt-0.5">
                <span className="lang-ar">الصف الثاني الثانوي • إشراف م/ عمر محمود (01012306019)</span>
                <span className="lang-en">Grade 11 • Eng. Omar Mahmoud (01012306019)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (RTL Left): Action Controls Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* YouTube Channel Link */}
          <a
            href="https://www.youtube.com/@omarmahmoud-p6l"
            target="_blank"
            rel="noreferrer"
            title="YouTube Channel"
            className="px-2.5 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <i className="fa-brands fa-youtube text-sm"></i>
            <span className="hidden sm:inline">YouTube</span>
          </a>

          {/* Audio Mute Toggle */}
          <button
            id="sound-btn"
            onClick={toggleSound}
            className="w-9 h-9 rounded-xl theme-subpanel border flex items-center justify-center text-sub hover:text-white text-xs transition"
            title="Sound Effects"
          >
            <i
              id="sound-icon"
              className={`fa-solid ${soundEnabled ? 'fa-volume-high text-brand-400' : 'fa-volume-xmark text-slate-500'}`}
            ></i>
          </button>

          {/* Language Toggle */}
          <button
            id="lang-toggle-btn"
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-xl theme-subpanel border flex items-center gap-1.5 text-xs font-bold hover:border-brand-500 transition"
          >
            <i className="fa-solid fa-globe text-brand-400"></i>
            <span id="lang-btn-text">{lang === 'ar' ? 'لغات' : 'عربي'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl theme-subpanel border flex items-center justify-center text-sub hover:text-white text-xs transition"
          >
            <i
              id="theme-icon"
              className={`fa-solid ${theme === 'dark' ? 'fa-moon text-amber-400' : 'fa-sun text-amber-500'}`}
            ></i>
          </button>

          {/* Print Summary */}
          <button
            onClick={() => {
              playSfx('click');
              onOpenPrintModal();
            }}
            className="hidden sm:flex px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold items-center gap-1.5 shadow-md shadow-brand-500/25 transition"
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span className="lang-ar">مذكرة مراجعة PDF</span>
            <span className="lang-en">Revision Guide PDF</span>
          </button>
        </div>
      </div>

      {/* Mobile Dedicated Line Break Row (Visible < md) */}
      <div className="md:hidden mt-2 pt-2 border-t border-slate-700/30 dark:border-slate-800/60 text-center space-y-0.5">
        <h1 className="font-black text-xs sm:text-sm text-slate-900 dark:text-white leading-tight">
          <span className="lang-ar">منهج البرمجة والذكاء الاصطناعي ثانيه بكالوريا</span>
          <span className="lang-en">Programming & AI Curriculum 2nd Year</span>
        </h1>
        <p className="text-[11px] text-amber-500 dark:text-amber-400 font-bold leading-tight">
          <span className="lang-ar">الصف الثاني الثانوي • إشراف م/ عمر محمود (01012306019)</span>
          <span className="lang-en">Grade 11 • Eng. Omar Mahmoud (01012306019)</span>
        </p>
      </div>
    </header>
  );
}

