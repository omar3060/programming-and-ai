'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type VisualizationMode = 'heatmap' | 'mosaic' | 'story';
type StoryElement = 'msg' | 'elem' | 'info';

const heatmapRows = [
  { time: '10:00', values: [12, 10, 14, 11, 13, 42, 38] },
  { time: '12:00', values: [45, 42, 46, 44, 55, 95, 88] },
  { time: '14:00', values: [25, 22, 23, 24, 28, 72, 68] },
  { time: '18:00', values: [52, 48, 55, 50, 78, 110, 92] },
  { time: '20:00', values: [18, 15, 20, 17, 45, 68, 35] },
];

const days = [
  { ar: 'الإثنين', en: 'Mon' },
  { ar: 'الثلاثاء', en: 'Tue' },
  { ar: 'الأربعاء', en: 'Wed' },
  { ar: 'الخميس', en: 'Thu' },
  { ar: 'الجمعة', en: 'Fri' },
  { ar: 'السبت', en: 'Sat' },
  { ar: 'الأحد', en: 'Sun' },
];

export function VisualizationStorytellingSimulator() {
  const { playSfx } = useApp();
  const [mode, setMode] = useState<VisualizationMode>('heatmap');
  const [honestScale, setHonestScale] = useState(true);
  const [story, setStory] = useState<Record<StoryElement, boolean>>({ msg: true, elem: true, info: true });
  const activeStoryElements = Object.values(story).filter(Boolean).length;

  const chooseMode = (value: VisualizationMode) => {
    playSfx('click');
    setMode(value);
  };

  const toggleStoryElement = (element: StoryElement) => {
    playSfx('click');
    setStory(current => ({ ...current, [element]: !current[element] }));
  };

  const heatmapCellClass = (value: number) => {
    if (!honestScale) return value > 40 ? 'bg-rose-600 text-white font-black' : 'bg-amber-500/80 text-slate-950 font-bold';
    if (value >= 85) return 'bg-rose-600 text-white font-black';
    if (value >= 60) return 'bg-orange-500 text-white font-bold';
    if (value >= 40) return 'bg-amber-400 text-slate-950 font-bold';
    if (value >= 20) return 'bg-emerald-500/30 text-emerald-200';
    return 'bg-slate-800 text-slate-300';
  };

  return (
    <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-purple-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعمل التفاعلي للدرس 6-3 (كتاب الوزارة ص 44 - 49)</span>
            <span className="lang-en">Interactive Visualization & Data Storytelling Studio</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-wand-magic-sparkles text-purple-400"></i>
            <span className="lang-ar">مختبر الخريطة الحرارية ومخطط المستطيلات وسرد قصص البيانات</span>
            <span className="lang-en">Live Heatmap, Mosaic Plot, Overplotting & Data Storytelling Lab</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => chooseMode('heatmap')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${mode === 'heatmap' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            🔥 <span className="lang-ar">الخريطة الحرارية (Heatmap ص 44)</span><span className="lang-en">Heatmap (p. 50)</span>
          </button>
          <button type="button" onClick={() => chooseMode('mosaic')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${mode === 'mosaic' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            🧩 <span className="lang-ar">مخطط المستطيلات (Mosaic ص 45)</span><span className="lang-en">Mosaic Plot (p. 51)</span>
          </button>
          <button type="button" onClick={() => chooseMode('story')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${mode === 'story' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            📖 <span className="lang-ar">سرد قصص البيانات (Storytelling ص 45)</span><span className="lang-en">Data Storytelling (p. 51)</span>
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        {mode === 'heatmap' && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
              <div className="font-bold text-amber-400">
                <span className="lang-ar">🔥 الشكل 6.3.1 (ص 44): خريطة حرارية لعدد الزوار حسب (اليوم × الساعة)</span>
                <span className="lang-en">🔥 Figure 6.3.1 (p. 50): Customer Visits Heatmap (Day × Time Slot)</span>
              </div>
              <button type="button" onClick={() => { playSfx('click'); setHonestScale(current => !current); }} className={`px-3 py-1 rounded-xl font-bold text-xs transition ${honestScale ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>
                <span className="lang-ar">{honestScale ? '✅ مقياس لوني صادق (يبدأ من 0)' : '⚠️ مقياس مضلل (لا يبدأ من 0 — تحدي ص 49)'}</span>
                <span className="lang-en">{honestScale ? '✅ Honest Scale (Starts at 0)' : '⚠️ Misleading Scale (Non-Zero — p. 56)'}</span>
              </button>
            </div>
            <div className="overflow-x-auto p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <table className="w-full text-center text-xs border-collapse min-w-[480px]">
                <thead>
                  <tr className="text-sub border-b border-slate-800">
                    <th className="p-2"><span className="lang-ar">الوقت / اليوم</span><span className="lang-en">Time / Day</span></th>
                    {days.map(day => <th key={day.en} className="p-2"><span className="lang-ar">{day.ar}</span><span className="lang-en">{day.en}</span></th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 font-mono">
                  {heatmapRows.map(row => (
                    <tr key={row.time}>
                      <td className="p-2 font-bold text-slate-300">{row.time}</td>
                      {row.values.map((value, index) => <td key={`${row.time}-${index}`} className="p-2"><div className={`py-1.5 rounded-lg ${heatmapCellClass(value)}`}>{value}</div></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-200">
              {honestScale ? <>
                <span className="lang-ar">✅ <strong>قراءة الخريطة الحرارية الصادقة (ص 44):</strong> يمثل اللون قيمة ثالثة عددية (عدد العملاء) عبر محورين (اليوم × الساعة). نلاحظ من نظرة واحدة أن عطلة نهاية الأسبوع والساعتين 12:00 و 18:00 هي الأوقات الأكثر ازدحاماً!</span>
                <span className="lang-en">✅ <strong>Honest Heatmap Analysis (p. 50):</strong> Color intensity encodes a 3rd numerical value (customer count) across two axes (day × time). Weekends at 12:00 and 18:00 jump out immediately as peak hours!</span>
              </> : <>
                <span className="lang-ar">🚨 <strong>تحدي المقياس اللوني المضلل (فكر وتحدَّ نفسك ص 49 / p. 56):</strong> عندما لا يبدأ المقياس اللوني من الصفر، تبدو الفروق الصغيرة درامية وكبيرة بشكل خادع! الحل الصادق هو بدء المقياس من الصفر وتوفير مفتاح واضح.</span>
                <span className="lang-en">🚨 <strong>Misleading Color Scale Challenge (p. 56):</strong> When a heatmap’s color scale does not start at zero, small differences look deceptively dramatic! Always anchor the color scale honestly with a clear legend.</span>
              </>}
            </div>
          </>
        )}

        {mode === 'mosaic' && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
              <div className="font-bold text-cyan-400">
                <span className="lang-ar">🧩 الشكل 6.3.2 (ص 45): مخطط المستطيلات (الفسيفساء) لتوزيع (الجنس × المادة المفضلة)</span>
                <span className="lang-en">🧩 Figure 6.3.2 (p. 51): Mosaic Plot of (Gender × Subject Preference)</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400"><span className="lang-ar">المساحة = نسبة التوليفة</span><span className="lang-en">Rectangle Area = Category Proportion</span></span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex gap-2 w-full h-56 font-bold text-center text-xs">
                <div className="w-[60%] flex flex-col gap-1">
                  <div className="text-cyan-400 pb-1 border-b border-slate-700"><span className="lang-ar">ذكور — Male (عرض العمود 60%)</span><span className="lang-en">Male (Column Width: 60%)</span></div>
                  <div style={{ height: '35%' }} className="rounded-lg bg-cyan-600/80 border border-cyan-400 flex items-center justify-center text-white"><span className="lang-ar">الرياضيات (Math): 35%</span><span className="lang-en">Math: 35%</span></div>
                  <div style={{ height: '25%' }} className="rounded-lg bg-emerald-600/80 border border-emerald-400 flex items-center justify-center text-white"><span className="lang-ar">العلوم (Science): 25%</span><span className="lang-en">Science: 25%</span></div>
                  <div style={{ height: '20%' }} className="rounded-lg bg-amber-600/80 border border-amber-400 flex items-center justify-center text-white"><span className="lang-ar">اللغة العربية/اليابانية: 20%</span><span className="lang-en">Language: 20%</span></div>
                  <div style={{ height: '20%' }} className="rounded-lg bg-purple-600/80 border border-purple-400 flex items-center justify-center text-white"><span className="lang-ar">اللغة الإنجليزية (English): 20%</span><span className="lang-en">English: 20%</span></div>
                </div>
                <div className="w-[40%] flex flex-col gap-1">
                  <div className="text-pink-400 pb-1 border-b border-slate-700"><span className="lang-ar">إناث — Female (عرض العمود 40%)</span><span className="lang-en">Female (Column Width: 40%)</span></div>
                  <div style={{ height: '15%' }} className="rounded-lg bg-cyan-600/50 border border-cyan-400/60 flex items-center justify-center text-white text-[11px]"><span className="lang-ar">الرياضيات: 15%</span><span className="lang-en">Math: 15%</span></div>
                  <div style={{ height: '20%' }} className="rounded-lg bg-emerald-600/50 border border-emerald-400/60 flex items-center justify-center text-white text-[11px]"><span className="lang-ar">العلوم: 20%</span><span className="lang-en">Science: 20%</span></div>
                  <div style={{ height: '35%' }} className="rounded-lg bg-amber-600/80 border border-amber-400 flex items-center justify-center text-white"><span className="lang-ar">اللغة العربية/اليابانية: 35%</span><span className="lang-en">Language: 35%</span></div>
                  <div style={{ height: '30%' }} className="rounded-lg bg-purple-600/80 border border-purple-400 flex items-center justify-center text-white"><span className="lang-ar">اللغة الإنجليزية: 30%</span><span className="lang-en">English: 30%</span></div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-200">
              <span className="lang-ar">🧩 <strong>آلية مخطط المستطيلات (ص 45 / p. 51):</strong> يقارن بين <strong>متغيرين فئويين</strong> (الجنس × المادة المفضلة)؛ عرض العمود يمثل نسبة كل جنس (60% ذكور، 40% إناث)، وارتفاع كل مستطيل يمثل نسبة المادة داخل تلك المجموعة، فتظهر الفروق بصرياً كمساحات أوضح بكثير من الجدول المتقاطع!</span>
              <span className="lang-en">🧩 <strong>Mosaic Plot Mechanism (p. 51):</strong> Compares <strong>two categorical variables</strong> (Gender × Subject). Column widths reflect group shares (60% vs 40%) and heights reflect subject shares within each group, turning cross-tabulation proportions into intuitive rectangular areas!</span>
            </div>
          </>
        )}

        {mode === 'story' && (
          <>
            <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800 text-xs">
              {([
                ['msg', '1.', 'توضيح الرسالة', 'Clarify Message', 'bg-emerald-600'],
                ['elem', '2.', 'اختيار العناصر وإبراز المهم', 'Select & Highlight Elements', 'bg-cyan-600'],
                ['info', '3.', 'توفير معلومات داعمة', 'Supporting Info & Labels', 'bg-amber-600'],
              ] as const).map(([key, number, labelAr, labelEn, activeClass]) => (
                <button key={key} type="button" onClick={() => toggleStoryElement(key)} className={`px-3 py-1 rounded-xl font-bold transition ${story[key] ? `${activeClass} text-white` : 'bg-slate-800 text-slate-400'}`}>
                  {number} <span className="lang-ar">{labelAr}</span><span className="lang-en">{labelEn}</span> {story[key] ? '✅' : '❌'}
                </button>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
              <div className={`font-black text-sm ${story.msg ? 'text-emerald-400' : 'text-slate-500'}`}>
                <span className="lang-ar">{story.msg ? '🎯 حقق الفصل (أ) أعلى متوسط درجات في اختبار الرياضيات (88 درجة)' : 'رسم بياني رقم 1'}</span>
                <span className="lang-en">{story.msg ? '🎯 Class A Achieved the Highest Average Math Score (88 Points)' : 'Chart #1'}</span>
              </div>
              {!story.elem && <div className="p-2 rounded bg-pink-500/20 border border-pink-500 text-pink-300 text-[11px]"><span className="lang-ar">🚨 زخارف وعناصر مشتتة غير مرتبطة بالرسالة تطمس الهدف!</span><span className="lang-en">🚨 Unrelated decorative clutter burying the main insight!</span></div>}
              <div className="space-y-2 pt-1">
                {[
                  { ar: 'الفصل أ (Class A)', en: 'Class A', score: 88, target: true },
                  { ar: 'الفصل ب (Class B)', en: 'Class B', score: 72, target: false },
                  { ar: 'الفصل جـ (Class C)', en: 'Class C', score: 75, target: false },
                  { ar: 'الفصل د (Class D)', en: 'Class D', score: 70, target: false },
                ].map((bar, index) => (
                  <div key={bar.en} className="flex items-center gap-3">
                    <span className="w-28 font-bold text-slate-300"><span className="lang-ar">{story.info ? bar.ar : '???'}</span><span className="lang-en">{story.info ? bar.en : '???'}</span></span>
                    <div className="flex-1 bg-slate-950 rounded-lg h-7 overflow-hidden p-0.5 border border-slate-800">
                      <div style={{ width: `${bar.score}%` }} className={`h-full rounded-md flex items-center px-2.5 font-mono text-xs transition-all ${story.elem ? bar.target ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-700 text-slate-300' : ['bg-pink-500 text-white', 'bg-yellow-500 text-slate-950', 'bg-purple-500 text-white', 'bg-blue-500 text-white'][index]}`}>
                        {bar.score}{story.info && <><span className="lang-ar"> درجة (pts)</span><span className="lang-en"> pts</span></>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {story.info ? (
                <div className="text-[11px] text-amber-400 font-mono pt-2 border-t border-slate-800">
                  <span className="lang-ar">المحور الأفقي: الدرجات (من 0 إلى 100 نقطة) • المحور الرأسي: الفصل الدراسي • المصدر: سجلات اختبارات المدرسة 2026</span>
                  <span className="lang-en">Horizontal Axis: Score (0–100 points) • Vertical Axis: Class • Source: School Math Exam Records 2026</span>
                </div>
              ) : (
                <div className="text-[11px] text-rose-400 pt-2 border-t border-slate-800"><span className="lang-ar">⚠️ تم إخفاء تسميات المحاور والوحدات والمصدر! القارئ لا يعرف ماذا تمثل الأرقام.</span><span className="lang-en">⚠️ Axis labels, units, and source hidden! Audience cannot verify what numbers mean.</span></div>
              )}
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-200">
              {activeStoryElements === 3 ? <>
                <span className="lang-ar">✅ <strong>سرد قصص بيانات مكتمل وصادق (3/3 عناصر مفعلة — ص 45):</strong> الرسالة واضحة في جملة واحدة، والعنصر المهم فقط بارز باللون الأخضر مع إبقاء بقية الفصول بألوان هادئة للسياق، والمحاور والوحدات والمصدر موضحة بصدق.</span>
                <span className="lang-en">✅ <strong>Complete & Honest Data Storytelling (3/3 Elements Active — p. 51):</strong> One-sentence message in the title, target class highlighted in color while context bars remain muted, and clear axis labels/units provided.</span>
              </> : <>
                <span className="lang-ar">⚠️ <strong>نقص في عناصر سرد القصة ({activeStoryElements}/3 مفعلة):</strong> جرب تفعيل العناصر الثلاثة معاً لترى كيف يتحول الرسم البياني من أرقام صامتة أو مزدحمة إلى رسالة واضحة وصادقة يفهمها الجمهور فوراً!</span>
                <span className="lang-en">⚠️ <strong>Incomplete Data Story ({activeStoryElements}/3 Active):</strong> Enable all 3 storytelling elements above to turn the chart into a clear, honest message!</span>
              </>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
