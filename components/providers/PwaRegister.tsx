'use client';

import React, { useEffect, useState } from 'react';
import { WifiOff, Download, CheckCircle2, X } from 'lucide-react';
import { useApp } from './AppProviders';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PwaRegister() {
  const { lang } = useApp();
  const [isOffline, setIsOffline] = useState(false);
  const [installDeferredPrompt, setInstallDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  useEffect(() => {
    // Service Worker Registration
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('SW Registered successfully:', reg.scope);
          })
          .catch((err) => {
            console.warn('SW Registration failed:', err);
          });
      });
    }

    // Network Online / Offline Detection
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      // PWA Installation prompt listener
      const handleBeforeInstall = (e: Event) => {
        e.preventDefault();
        setInstallDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowInstallBanner(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstall);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!installDeferredPrompt) return;
    await installDeferredPrompt.prompt();
    const choice = await installDeferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setInstalledSuccess(true);
      setTimeout(() => setInstalledSuccess(false), 4000);
    }
    setInstallDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const isAr = lang === 'ar';

  return (
    <>
      {/* Offline Status Badge */}
      {isOffline && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-50 flex items-center gap-3 bg-amber-500/95 text-amber-950 dark:bg-amber-600 dark:text-amber-50 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-amber-400/40 text-sm font-semibold animate-in slide-in-from-bottom-5">
          <WifiOff className="w-5 h-5 shrink-0 animate-pulse text-amber-900 dark:text-amber-200" />
          <div className="flex-1">
            <span>
              {isAr
                ? 'أنت تعمل الآن في وضع الخروج عن الإنترنت (Off-line) — التطبيق والمحاكيات تعمل بكفاءة 100%'
                : 'You are currently offline — App & Simulators are running 100% offline!'}
            </span>
          </div>
        </div>
      )}

      {/* PWA Install Banner */}
      {showInstallBanner && !isOffline && (
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto z-50 max-w-sm bg-slate-900/95 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md border border-slate-700 flex flex-col gap-3 animate-in slide-in-from-bottom-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100">
                  {isAr ? 'تثبيت المنصة على الجهاز' : 'Install App on Device'}
                </h4>
                <p className="text-xs text-slate-300">
                  {isAr ? 'استخدم المنصة والمحاكيات بدون إنترنت في أي وقت!' : 'Access app & labs offline anytime!'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowInstallBanner(false)}
              className="text-slate-400 hover:text-slate-200 p-1 rounded-lg transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 py-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              {isAr ? 'تثبيت الآن' : 'Install Now'}
            </button>
            <button
              onClick={() => setShowInstallBanner(false)}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl transition"
            >
              {isAr ? 'لاحقاً' : 'Later'}
            </button>
          </div>
        </div>
      )}

      {/* Installed Toast Notification */}
      {installedSuccess && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-50 flex items-center gap-3 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
          <span>{isAr ? 'تم تثبيت التطبيق بنجاح! يمكنك فتحه الآن من شاشتك الرئيسية.' : 'App installed successfully!'}</span>
        </div>
      )}
    </>
  );
}
