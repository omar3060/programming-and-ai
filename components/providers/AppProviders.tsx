'use client';

import React, { createContext, useContext, useState, useEffect, useTransition } from 'react';
import { Language, Theme, LessonViewId } from '@/types';

interface AppContextType {
  lang: Language;
  dir: 'rtl' | 'ltr';
  theme: Theme;
  soundEnabled: boolean;
  activeLesson: LessonViewId;
  isPrintModalOpen: boolean;
  mobileSidebarOpen: boolean;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  toggleSound: () => void;
  playSfx: (type: 'click' | 'success' | 'error') => void;
  setActiveLesson: (view: LessonViewId) => void;
  openPrintModal: () => void;
  closePrintModal: () => void;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeLesson, setActiveLessonState] = useState<LessonViewId>('lesson-1-1');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [, startTransition] = useTransition();

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const setActiveLesson = (view: LessonViewId) => {
    startTransition(() => {
      setActiveLessonState(view);
      setMobileSidebarOpen(false);
    });
  };

  const openPrintModal = () => setIsPrintModalOpen(true);
  const closePrintModal = () => setIsPrintModalOpen(false);
  const toggleMobileSidebar = () => setMobileSidebarOpen(prev => !prev);
  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  // Synchronize HTML attributes on change
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dir);
  }, [lang, dir]);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [theme]);

  const getAudioCtx = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtx) {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      setAudioCtx(ctx);
      return ctx;
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const playSfx = (type: 'click' | 'success' | 'error') => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'click') {
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(160, now + 0.1);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch {
      // Audio playback fallback silence
    }
  };

  const toggleLanguage = () => {
    playSfx('click');
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    playSfx('click');
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) playSfx('click');
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        dir,
        theme,
        soundEnabled,
        activeLesson,
        isPrintModalOpen,
        mobileSidebarOpen,
        toggleLanguage,
        toggleTheme,
        toggleSound,
        playSfx,
        setActiveLesson,
        openPrintModal,
        closePrintModal,
        toggleMobileSidebar,
        closeMobileSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProviders');
  }
  return context;
}

