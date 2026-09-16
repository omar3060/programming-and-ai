'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Network, Play, Sparkles } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  layer: number;
  i: number;
}

interface Pulse {
  l: number;
  f: number;
  t: number;
  prog: number;
  col: string;
}

export function ANNInteractiveCanvas() {
  const { lang, theme, playSfx } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [statusText, setStatusText] = useState<string>(
    lang === 'ar' ? 'جاهز للاختبار. اختر عينة كائن أدناه:' : 'Ready for test. Select a sample below:'
  );
  const [confidenceText, setConfidenceText] = useState<string>('---');

  const annArch = [3, 4, 4, 2];
  const graphRef = useRef<Node[][]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const isRunningRef = useRef<boolean>(false);

  const drawANN = useCallback(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    const annGraph = graphRef.current;

    // 1. Synaptic Connections
    for (let l = 0; l < annGraph.length - 1; l++) {
      annGraph[l].forEach(n1 => {
        annGraph[l + 1].forEach(n2 => {
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = theme === 'dark' ? 'rgba(148, 163, 184, 0.2)' : 'rgba(100, 116, 139, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });
    }

    // 2. Pulses Animation
    pulsesRef.current.forEach(p => {
      if (!annGraph[p.l] || !annGraph[p.l + 1]) return;
      const src = annGraph[p.l][p.f];
      const dst = annGraph[p.l + 1][p.t];
      if (!src || !dst) return;

      const curX = src.x + (dst.x - src.x) * p.prog;
      const curY = src.y + (dst.y - src.y) * p.prog;

      ctx.beginPath();
      ctx.arc(curX, curY, 4, 0, Math.PI * 2);
      ctx.fillStyle = p.col || '#38bdf8';
      ctx.shadowColor = p.col || '#38bdf8';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
      p.prog += 0.05;
    });

    pulsesRef.current = pulsesRef.current.filter(p => p.prog <= 1);

    // 3. Nodes
    annGraph.forEach((layer, lIdx) => {
      layer.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 9, 0, Math.PI * 2);
        if (lIdx === 0) {
          ctx.fillStyle = '#0284c7'; // Input
        } else if (lIdx === annGraph.length - 1) {
          ctx.fillStyle = '#10b981'; // Output
        } else {
          ctx.fillStyle = '#9333ea'; // Hidden
        }
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });

    if (pulsesRef.current.length > 0 || isRunningRef.current) {
      animFrameRef.current = requestAnimationFrame(drawANN);
    }
  }, [theme]);

  const initANN = useCallback(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const w = cvs.width;
    const h = cvs.height;
    const newGraph: Node[][] = [];

    const stepX = w / (annArch.length + 1);
    annArch.forEach((num, lIdx) => {
      const x = stepX * (lIdx + 1);
      const stepY = h / (num + 1);
      const layer: Node[] = [];
      for (let i = 0; i < num; i++) {
        layer.push({ x, y: stepY * (i + 1), layer: lIdx, i });
      }
      newGraph.push(layer);
    });

    graphRef.current = newGraph;
    drawANN();
  }, [drawANN]);

  useEffect(() => {
    initANN();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initANN]);

  const feedNet = (type: 'cat' | 'dog' | 'crop') => {
    playSfx('click');
    isRunningRef.current = true;
    pulsesRef.current = [];

    setStatusText(
      lang === 'ar'
        ? 'جارِ المعالجة وحساب الأوزان (Forward Propagation)...'
        : 'Calculating weights and activations...'
    );
    setConfidenceText('...');

    const annGraph = graphRef.current;

    for (let l = 0; l < annGraph.length - 1; l++) {
      setTimeout(() => {
        for (let f = 0; f < annGraph[l].length; f++) {
          for (let t = 0; t < annGraph[l + 1].length; t++) {
            pulsesRef.current.push({
              l,
              f,
              t,
              prog: 0,
              col: type === 'cat' ? '#38bdf8' : type === 'dog' ? '#c084fc' : '#34d399',
            });
          }
        }
        drawANN();
      }, l * 220);
    }

    setTimeout(() => {
      isRunningRef.current = false;
      playSfx('success');
      if (type === 'cat') {
        setStatusText(lang === 'ar' ? 'تم التصنيف: قطة (Cat) 🐱' : 'Classified: Cat 🐱');
        setConfidenceText('96.8%');
      } else if (type === 'dog') {
        setStatusText(lang === 'ar' ? 'تم التصنيف: كلب (Dog) 🐶' : 'Classified: Dog 🐶');
        setConfidenceText('94.2%');
      } else {
        setStatusText(lang === 'ar' ? 'تم الفحص: محصول زراعي سليم 🌾' : 'Classified: Healthy Crop 🌾');
        setConfidenceText('98.9%');
      }
    }, (annGraph.length - 1) * 220 + 350);
  };

  return (
    <div className="p-4 sm:p-6 rounded-3xl theme-subpanel border space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-700/40 dark:border-slate-800/80 pb-3">
        <div>
          <h4 className="font-black text-sm text-sky-600 dark:text-sky-400 flex items-center gap-2">
            <Network className="w-5 h-5 text-sky-500" />
            <span>
              {lang === 'ar'
                ? 'التشريح البرمجي الكامل للشبكة العصبية الاصطناعية (ANN Canvas Live)'
                : 'Interactive Artificial Neural Network (ANN Canvas Live)'}
            </span>
          </h4>
          <p className="text-[11px] text-sub">
            {lang === 'ar'
              ? 'تسمية صريحة للطبقات: طبقة الإدخال (Input Layer) ➔ الطبقات المخفية (Hidden Layers) ➔ طبقة الإخراج (Output Layer)'
              : 'Explicit layer breakdown: Input Layer ➔ Hidden Layers ➔ Output Layer with Backpropagation Weight Tuning'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => feedNet('cat')}
            className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold flex items-center gap-1 transition cursor-pointer shadow"
          >
            <Play className="w-3 h-3" />
            <span>{lang === 'ar' ? 'صورة قطة 🐱' : 'Cat Image 🐱'}</span>
          </button>
          <button
            onClick={() => feedNet('dog')}
            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center gap-1 transition cursor-pointer shadow"
          >
            <Play className="w-3 h-3" />
            <span>{lang === 'ar' ? 'صورة كلب 🐶' : 'Dog Image 🐶'}</span>
          </button>
          <button
            onClick={() => feedNet('crop')}
            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1 transition cursor-pointer shadow"
          >
            <Play className="w-3 h-3" />
            <span>{lang === 'ar' ? 'أشعة نبات 🌾' : 'Crop Scan 🌾'}</span>
          </button>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={640}
          height={260}
          className="w-full max-w-full h-auto block"
        />
      </div>

      {/* Real-time Status Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl theme-panel border sm:col-span-2 space-y-1">
          <span className="text-sub text-[10px] block font-bold">
            {lang === 'ar' ? 'حالة المعالجة والتنبؤ الحالي:' : 'Live Inference Verdict:'}
          </span>
          <div className="font-bold text-slate-900 dark:text-slate-100">{statusText}</div>
        </div>
        <div className="p-3 rounded-xl theme-panel border space-y-1 text-center">
          <span className="text-sub text-[10px] block font-bold flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{lang === 'ar' ? 'نسبة الثقة (Confidence):' : 'Model Confidence:'}</span>
          </span>
          <div className="font-mono font-black text-emerald-500 text-base">{confidenceText}</div>
        </div>
      </div>
    </div>
  );
}
