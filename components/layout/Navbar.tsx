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
    <header className="sticky top-0 z-40 theme-panel border-b backdrop-blur-md bg-opacity-90 px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm transition-all max-w-full overflow-hidden">
      {/* Top Main Row */}
      <div className="flex items-center justify-between gap-2 w-full max-w-full">
        {/* Left Side (RTL Right): Sidebar Toggle & Brain Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <button
            onClick={() => {
              playSfx('click');
              onToggleSidebar();
            }}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl theme-subpanel border border-brand-500/30 flex items-center justify-center text-brand-400 hover:text-white hover:bg-brand-500/20 shrink-0 shadow-sm transition active:scale-95 cursor-pointer"
            aria-label="Toggle Navigation Menu"
            title={lang === 'ar' ? 'فتح قائمة الدروس' : 'Open Menu'}
          >
            <i className="fa-solid fa-bars text-base sm:text-lg"></i>
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/25 shrink-0">
              <i className="fa-solid fa-brain text-sm sm:text-base"></i>
            </div>

            {/* Title & Subtitle for Desktop (visible lg and above: >= 1024px) */}
            <div className="hidden lg:block min-w-0">
              <h1 className="font-black text-xs sm:text-sm lg:text-base leading-tight text-slate-900 dark:text-white truncate">
                <span className="lang-ar">منهج البرمجة والذكاء الاصطناعي ثانيه بكالوريا</span>
                <span className="lang-en">Programming & AI Curriculum 2nd Year</span>
              </h1>
              <p className="text-[10px] sm:text-[11px] text-amber-500 dark:text-amber-400 font-bold leading-tight pt-0.5 truncate">
                <span className="lang-ar">الصف الثاني الثانوي • إشراف م/ عمر محمود (01012306019)</span>
                <span className="lang-en">Grade 11 • Eng. Omar Mahmoud (01012306019)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side (RTL Left): Action Controls Toolbar */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* YouTube Channel Link */}
          <a
            href="https://www.youtube.com/@omarmahmoud-p6l"
            target="_blank"
            rel="noreferrer"
            title="YouTube Channel"
            className="px-2 sm:px-2.5 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-1.5 transition shrink-0"
          >
            <i className="fa-brands fa-youtube text-sm"></i>
            <span className="hidden xl:inline">YouTube</span>
          </a>

          {/* Audio Mute Toggle */}
          <button
            id="sound-btn"
            onClick={toggleSound}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl theme-subpanel border flex items-center justify-center text-sub hover:text-white text-xs transition shrink-0"
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
            className="px-2 sm:px-3 py-1.5 rounded-xl theme-subpanel border flex items-center gap-1 text-xs font-bold hover:border-brand-500 transition shrink-0"
          >
            <i className="fa-solid fa-globe text-brand-400"></i>
            <span id="lang-btn-text">{lang === 'ar' ? 'لغات' : 'عربي'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl theme-subpanel border flex items-center justify-center text-sub hover:text-white text-xs transition shrink-0"
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
            className="px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-brand-500/25 transition shrink-0"
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span className="hidden sm:inline lang-ar">مذكرة مراجعة PDF</span>
            <span className="hidden sm:inline lang-en">Revision Guide PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dedicated Sub-Header Line (Visible < lg, i.e. < 1024px including tablets) */}
      <div className="lg:hidden mt-1.5 pt-1.5 border-t border-slate-700/30 dark:border-slate-800/60 text-center space-y-0.5">
        <h1 className="font-black text-xs sm:text-sm text-slate-900 dark:text-white leading-tight truncate">
          <span className="lang-ar">منهج البرمجة والذكاء الاصطناعي ثانيه بكالوريا</span>
          <span className="lang-en">Programming & AI Curriculum 2nd Year</span>
        </h1>
        <p className="text-[10px] sm:text-[11px] text-amber-500 dark:text-amber-400 font-bold leading-tight truncate">
          <span className="lang-ar">الصف الثاني الثانوي • إشراف م/ عمر محمود (01012306019)</span>
          <span className="lang-en">Grade 11 • Eng. Omar Mahmoud (01012306019)</span>
        </p>
      </div>
    </header>
  );
}

