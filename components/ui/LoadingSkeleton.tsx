'use client';

import React from 'react';

export function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse p-4">
      {/* Hero Banner Skeleton */}
      <div className="h-48 rounded-3xl theme-panel border p-6 space-y-4">
        <div className="h-6 w-1/3 bg-slate-700/50 rounded-lg"></div>
        <div className="h-8 w-2/3 bg-slate-700/50 rounded-xl"></div>
        <div className="h-4 w-full bg-slate-700/40 rounded-md"></div>
        <div className="h-4 w-4/5 bg-slate-700/40 rounded-md"></div>
      </div>

      {/* Grid Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 rounded-2xl theme-subpanel border p-4 space-y-3">
          <div className="h-5 w-1/2 bg-slate-700/50 rounded"></div>
          <div className="h-4 w-full bg-slate-700/40 rounded"></div>
          <div className="h-4 w-3/4 bg-slate-700/40 rounded"></div>
        </div>
        <div className="h-40 rounded-2xl theme-subpanel border p-4 space-y-3">
          <div className="h-5 w-1/2 bg-slate-700/50 rounded"></div>
          <div className="h-4 w-full bg-slate-700/40 rounded"></div>
          <div className="h-4 w-3/4 bg-slate-700/40 rounded"></div>
        </div>
      </div>
    </div>
  );
}
