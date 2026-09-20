'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

interface DownloadEvaluationButtonProps {
  pdfUrl: string;
  fileName: string;
  lessonTitle?: string;
  className?: string;
}

export function DownloadEvaluationButton({
  pdfUrl,
  fileName,
  lessonTitle,
  className = '',
}: DownloadEvaluationButtonProps) {
  const { playSfx } = useApp();

  return (
    <div className={`lang-ar inline-flex items-center relative group ${className}`}>
      {/* Outer looping glow aura */}
      <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-75 blur-[3px] group-hover:opacity-100 transition duration-500 animate-pulse"></span>

      {/* Download Link Button */}
      <a
        href={pdfUrl}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playSfx('click')}
        className="relative px-3.5 py-1 sm:py-1 rounded-full bg-slate-900/90 hover:bg-slate-950 text-emerald-400 dark:text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 text-xs font-black flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        title={lessonTitle ? `تنزيل حل تقييمات ${lessonTitle}` : 'تنزيل حل التقييمات'}
      >
        {/* PDF / Download Animated Icon */}
        <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
          <i className="fa-solid fa-file-pdf text-[11px] group-hover:scale-110 transition-transform"></i>
        </span>

        {/* Button Text */}
        <span className="whitespace-nowrap font-extrabold tracking-wide drop-shadow-sm">
          تنزيل حل التقييمات
        </span>

        {/* Loop Arrow Indicator */}
        <i className="fa-solid fa-circle-arrow-down text-emerald-400 text-xs animate-bounce"></i>

        {/* Floating "جديد" Badge */}
        <span className="absolute -top-2.5 -left-1 px-1.5 py-0.2 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white text-[9px] font-black tracking-tighter uppercase shadow-md shadow-amber-500/40 border border-amber-300/40 flex items-center gap-0.5 animate-subtlePulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          جديد
        </span>
      </a>
    </div>
  );
}
