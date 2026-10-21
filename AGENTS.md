<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🎓 Mega-Prompt: Build a Complete Interactive Bilingual Lesson Unit

> **How to use:** Copy this entire prompt and send it along with the **2 attached textfiles** (Arabic textbook + English textbook). The AI will read the textfiles directly, extract all content, and generate all lesson files.

---

## 📎 ATTACHED FILES (YOU MUST ATTACH THESE)

I have attached **2 textfiles** with this message:
1. **arabic_textbook_extracted.txt** — الكتاب العربي (منهج البرمجة والذكاء الاصطناعي)
2. **english_textbook_extracted.txt** — The English version of the same textbook

**Your first step:** Read only the parts from these textfiles relevant to lessons i gave you in the prompt it self. Identify:
- Every lesson's title, page range, learning objectives
- All definitions and key terms (Arabic + English)
- All tables and diagrams described in text
- Every sidebar activity: ✎ Explore, 💡 Pause & Think, 💡 Think It Through, 📝 Exam-Style, ⚙ Think as an Engineer, 🌍 Apply What You Learned
- All worked examples (✎ Worked Example) and their solutions (✓ Solution)
- All "Try" practice questions and end-of-lesson exercises
- The ⭐ Key Takeaway and ⭐ Reflect & Challenge boxes
- The ❓ Lesson Question — Answered summary

**Use the Arabic textfile** for the Arabic text of each question/definition.
**Use the English textfile** for the English text of each question/definition.
Both textfiles have the same content — one in Arabic, one in English.

---

## 🏗️ PROJECT CONTEXT

You are building lessons for **an interactive bilingual (Arabic/English) educational web app** for Egyptian secondary school students (2nd year). The app teaches **Programming & AI** using the official Ministry of Education textbook.

### Tech Stack
- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Vanilla CSS with a dark-mode-first design system
- **Icons:** Font Awesome 6 (`fa-solid fa-*`)
- **State:** React `useState` / `useRef` (no external state library)
- **Path aliases:** `@/components/...`, `@/data/...`

### File Structure
```
components/
  lessons/
    Lesson{U}_{L}.tsx    ← Main lesson component (U=unit, L=lesson)
  simulators/
    *.tsx                ← Interactive lab/simulator components
  ui/
    InstructorBioCard.tsx
    DownloadEvaluationButton.tsx
  providers/
    AppProviders.tsx      ← exports useApp() with { playSfx }
data/
  examQuestions.ts        ← allExamQuestions array
```

---

## 📐 LESSON COMPONENT TEMPLATE

Every lesson file follows this exact pattern:

```tsx
'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { allExamQuestions } from '@/data/examQuestions';
import { InstructorBioCard } from '@/components/ui/InstructorBioCard';
import { DownloadEvaluationButton } from '@/components/ui/DownloadEvaluationButton';
// Import any simulators needed for this lesson

export function Lesson{U}_{L}() {
  const { playSfx } = useApp();
  const quizQuestions = allExamQuestions.slice(START, END); // 10 questions per lesson

  // State for expandable activity cards
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  // State for flippable flashcards
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  // State for quiz answers
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const handleToggleCard = (id: string) => {
    playSfx('click');
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFlip = (id: string) => {
    playSfx('click');
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuizAnswer = (qIdx: number, oIdx: number, correctAns: number) => {
    if (quizAnswers[qIdx] !== undefined) return;
    playSfx(oIdx === correctAns ? 'correct' : 'wrong');
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div id="view-lesson-{U}-{L}" className="lesson-view space-y-8 animate-fadeIn">
      <InstructorBioCard />

      {/* === SECTION 1: Hero Banner === */}
      {/* === SECTION 2: Textbook Content Panels === */}
      {/* === SECTION 3: Interactive Simulator (if applicable) === */}
      {/* === SECTION 4: Official Textbook Activities === */}
      {/* === SECTION 5: 3D Flashcards === */}
      {/* === SECTION 6: MCQ Quiz === */}
    </div>
  );
}
```

---

## 🌍 BILINGUAL SYSTEM (CRITICAL!)

**Every single text** must have both Arabic and English wrapped like this:

```tsx
<span className="lang-ar">النص العربي هنا</span>
<span className="lang-en">English text here</span>
```

The app toggles `.lang-ar` / `.lang-en` visibility via CSS. **Never** put text without both wrappers.

For **right-to-left** lists use:
```tsx
<ul className="list-disc rtl:pr-4 ltr:pl-4">
```

---

## 📖 LESSON SECTIONS (IN ORDER)

### Section 1: Hero Banner
```tsx
<div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="space-y-2 max-w-3xl">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
          <i className="fa-solid fa-ICON"></i>
          <span className="lang-ar">الدرس X-Y (كتاب الوزارة ص NN - ص MM)</span>
          <span className="lang-en">Lesson X-Y (Textbook pp. NN - MM)</span>
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
          <span className="lang-ar">عنوان مختصر</span>
          <span className="lang-en">Short Topic</span>
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black">
        <span className="lang-ar">عنوان الدرس بالعربي</span>
        <span className="lang-en">Lesson Title in English</span>
      </h2>
      <p className="text-xs sm:text-sm text-sub leading-relaxed">
        <span className="lang-ar">ملخص مختصر...</span>
        <span className="lang-en">Brief summary...</span>
      </p>
    </div>
  </div>
</div>
```

### Section 2: Content Panels (Textbook Knowledge)
Present the **actual textbook content** in organized panels. Keep it **concise** — match what's in the book, don't add extra fluff.

```tsx
<div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
  <h3 className="text-lg font-black flex items-center gap-2">
    <i className="fa-solid fa-ICON text-COLOR"></i>
    <span className="lang-ar">عنوان القسم</span>
    <span className="lang-en">Section Title</span>
  </h3>
  {/* Content: tables, definitions, key terms, etc. */}
</div>
```

**Key Terms** use this pattern:
```tsx
<div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
  <strong className="text-amber-400">
    <span className="lang-ar">المصطلح:</span>
    <span className="lang-en">Term:</span>
  </strong>
  <span className="text-sub">
    <span className="lang-ar">التعريف بالعربي</span>
    <span className="lang-en">Definition in English</span>
  </span>
</div>
```

**Simple Tables** (like the textbook's tables):
```tsx
<div className="overflow-x-auto rounded-2xl border border-slate-800">
  <table className="w-full text-xs min-w-[550px] border-collapse">
    <thead>
      <tr className="bg-slate-900 border-b border-slate-800 text-blue-400 font-bold">
        <th className="p-3">...</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
      {/* rows */}
    </tbody>
  </table>
</div>
```

### Section 3: Interactive Simulators (WHEN NEEDED)
Only add interactivity where the **topic demands it**. Examples:
- **Sorting/filtering data** → Spam filter simulator
- **AI decision visualization** → Neural network canvas
- **Comparing approaches** → Side-by-side interactive comparison
- **Edge vs Cloud** → Latency race simulator
- **Encryption** → Encode/decode lab

Each simulator is a **separate component** in `components/simulators/`. Keep them self-contained with their own state.

> **RULE:** Don't over-engineer. If the textbook content is just definitions and a table, a simple table is fine. Save interactivity for concepts that genuinely benefit from it (like seeing how ML learns vs rule-based, or comparing encryption methods).

### Section 4: Official Textbook Activities (CRITICAL — EXACT MATCH!)
These are the **official Ministry activities** from the textbook. They must be **word-for-word from the book** with bilingual model answers.

**Activity types found in the textbook:**
1. **✎ Explore · In Pairs** (استكشف بالأزواج) — cyan color
2. **💡 Think It Through / Pause & Think** (توقف وفكر) — brand/purple color
3. **📝 Exam-Style Question** (سؤال على نمط الامتحان) — amber color, always shows [marks]
4. **⚙ Think as an Engineer** (فكر كمهندس) — emerald color, 3-step: Investigate → Weigh → Decide

**Activity card pattern:**
```tsx
<div onClick={() => handleToggleCard('UNIQUE_ID')} 
     className="p-5 rounded-2xl theme-subpanel border border-COLOR-500/30 space-y-3 cursor-pointer select-none group hover:border-COLOR-500 transition">
  <div className="flex items-center justify-between">
    <span className="px-3 py-1 rounded-full bg-COLOR-500/20 text-COLOR-400 text-xs font-bold flex items-center gap-1.5">
      <i className="fa-solid fa-ICON"></i>
      <span className="lang-ar">✎ نوع النشاط — كتاب الوزارة ص XX</span>
      <span className="lang-en">✎ Activity Type — Textbook p. XX</span>
    </span>
    <button onClick={(e) => { e.stopPropagation(); handleToggleCard('UNIQUE_ID'); }} 
            className="text-xs font-bold text-COLOR-400 hover:underline flex items-center gap-1 cursor-pointer">
      <span className="lang-ar">{expandedCards['UNIQUE_ID'] ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية'}</span>
      <span className="lang-en">{expandedCards['UNIQUE_ID'] ? 'Hide Answer' : 'Show Model Answer'}</span>
      <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['UNIQUE_ID'] ? 'rotate-180' : ''}`}></i>
    </button>
  </div>
  
  {/* Question text — EXACT from textbook */}
  <p className="text-xs font-bold text-slate-200">
    <span className="lang-ar">نص السؤال بالضبط من الكتاب</span>
    <span className="lang-en">Exact question text from the textbook</span>
  </p>
  
  {/* Expandable model answer */}
  {expandedCards['UNIQUE_ID'] && (
    <div onClick={(e) => e.stopPropagation()} 
         className="p-4 rounded-xl bg-slate-900 border border-COLOR-500/40 text-xs leading-relaxed text-slate-300 space-y-2 animate-fadeIn cursor-auto select-text">
      <strong className="text-COLOR-400 block font-bold">
        <span className="lang-ar">💡 الإجابة النموذجية:</span>
        <span className="lang-en">💡 Model Answer:</span>
      </strong>
      {/* Answer content — bilingual */}
    </div>
  )}
</div>
```

**Color mapping for activities:**
| Activity Type | Color | Icon |
|---|---|---|
| Explore · In Pairs | `cyan` | `fa-people-group` |
| Think It Through | `brand` (or `purple`) | `fa-lightbulb` |
| Pause & Think | `purple` | `fa-brain` |
| Exam-Style | `amber` | `fa-file-pen` |
| Think as an Engineer | `emerald` | `fa-gears` |
| Apply What You Learned | `rose` | `fa-flask` |

### Section 5: 3D Flip Flashcards
4 flashcards per lesson for quick revision:

```tsx
<div className="space-y-3 pt-2">
  <h4 className="font-bold text-sm flex items-center gap-2">
    <i className="fa-solid fa-clone text-emerald-400"></i>
    <span className="lang-ar">بطاقات المراجعة السريعة (المس لقلب البطاقة):</span>
    <span className="lang-en">Flashcards (Tap to flip):</span>
  </h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
    {[
      { id: "fc-1", icon: "🎯", titleAr: "عنوان", titleEn: "Title", color: "brand",
        descAr: "الوصف بالعربي", descEn: "Description in English" },
      // ... 3 more
    ].map((fc) => (
      <div key={fc.id} className={`flip-card ${flippedCards[fc.id] ? 'flipped' : ''}`}
           onClick={() => handleFlip(fc.id)}>
        <div className="flip-card-inner">
          <div className={`flip-card-front rounded-2xl p-4 bg-${fc.color}-500/10 border border-${fc.color}-500/30 flex flex-col items-center justify-center text-center gap-2 cursor-pointer`}>
            <span className="text-3xl">{fc.icon}</span>
            <strong className="text-slate-200">
              <span className="lang-ar">{fc.titleAr}</span>
              <span className="lang-en">{fc.titleEn}</span>
            </strong>
            <span className="text-[10px] text-sub">
              <span className="lang-ar">اضغط للقلب</span>
              <span className="lang-en">Tap to flip</span>
            </span>
          </div>
          <div className={`flip-card-back rounded-2xl p-4 bg-${fc.color}-500/20 border border-${fc.color}-500/40 flex items-center justify-center text-center cursor-pointer`}>
            <p className="text-sub text-xs leading-relaxed">
              <span className="lang-ar">{fc.descAr}</span>
              <span className="lang-en">{fc.descEn}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
```

### Section 6: MCQ Quiz
```tsx
<div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
  <h3 className="text-lg font-black flex items-center gap-2">
    <i className="fa-solid fa-clipboard-check text-brand-400"></i>
    <span className="lang-ar">اختبر فهمك — 10 أسئلة سريعة</span>
    <span className="lang-en">Check Your Understanding — 10 Quick Questions</span>
  </h3>
  <div className="space-y-4">
    {quizQuestions.map((q, qIdx) => (
      <div key={qIdx} className="p-4 rounded-2xl theme-subpanel border space-y-3">
        <p className="text-sm font-bold text-slate-200">
          <span className="text-brand-400 font-mono mr-2">{qIdx + 1}.</span>
          <span className="lang-ar">{q.questionAr}</span>
          <span className="lang-en">{q.questionEn}</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {q.options.map((opt, oIdx) => {
            const answered = quizAnswers[qIdx] !== undefined;
            const isSelected = quizAnswers[qIdx] === oIdx;
            const isCorrect = oIdx === q.correctAnswer;
            return (
              <button key={oIdx}
                onClick={() => handleQuizAnswer(qIdx, oIdx, q.correctAnswer)}
                disabled={answered}
                className={`p-3 rounded-xl text-xs text-left transition border ${
                  answered
                    ? isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : isSelected ? 'bg-rose-500/20 border-rose-500 text-rose-300 line-through'
                    : 'border-slate-800 opacity-50'
                    : 'border-slate-800 hover:border-brand-500 hover:bg-brand-500/5 cursor-pointer'
                }`}>
                <span className="lang-ar">{opt.ar}</span>
                <span className="lang-en">{opt.en}</span>
              </button>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## ⚠️ CRITICAL RULES

1. **READ THE PDFs FIRST:** Before writing any code, read BOTH attached PDFs completely for the specified unit. Extract every activity, definition, key term, and question verbatim.

2. **TEXTBOOK FIRST:** Every question, activity, scenario, and definition must come **directly from the official textbook PDFs**. Never invent questions or scenarios.

3. **KEEP IT CONCISE:** Don't add extra paragraphs or details beyond what the textbook says. Students get overwhelmed by walls of text. Use short bullets and simple tables.

4. **BILINGUAL EVERYTHING:** Every single piece of text needs `<span className="lang-ar">` and `<span className="lang-en">` wrappers. No exceptions. Use the Arabic PDF for Arabic text and the English PDF for English text.

5. **ANSWERS FROM THE TEXTBOOK:** Model answers must reflect what the textbook teaches, not external knowledge. Stay within the textbook scope. If the textbook provides a ✓ Solution, use it.

6. **INTERACTIVITY WHERE IT MAKES SENSE:** Don't force interactivity on every concept. A definition just needs a clean card. Save simulators for concepts that genuinely benefit (sorting, comparing, visualizing processes).

7. **DESIGN CLASSES:**
   - Main panels: `theme-panel border p-6 sm:p-8 rounded-3xl`
   - Sub-panels: `theme-subpanel border`
   - Muted text: `text-sub`
   - Small text: `text-xs`, regular: `text-sm`
   - Animations: `animate-fadeIn`
   - Brand color: `brand-400/500` (custom purple-blue)

8. **PAGE REFERENCES:** Always show which textbook page each section/activity comes from (e.g., `ص 21 / p. 21`).

9. **TEACHER CARD:** The teacher is **المهندس عمر محمود** (Eng. Omar Mahmoud). Image path: `/my%20image.JPG`.

10. **FILE NAMING:** `Lesson{U}_{L}.tsx` where U = unit number, L = lesson number within unit.

11. **EXAM QUESTIONS:** Each lesson uses 10 questions from `allExamQuestions` array. Slice with `.slice(startIdx, startIdx + 10)`.

---

## 📋 YOUR TASK

Read the **2 attached PDF files** and build Unit **[UNIT_NUMBER]**. This unit contains **[N] lessons**.

**For each lesson, generate:**
1. A complete `Lesson{U}_{L}.tsx` file following the template above
2. Any simulator components needed (in `components/simulators/`)
3. The exam questions data to add to `examQuestions.ts`

**Structure each lesson with these sections (in order):**
1. Hero Banner with lesson title, page range, topic badge
2. Textbook content panels (definitions, tables, key terms — concise, from the PDFs!)
3. Interactive simulator (only if the topic needs it)
4. Official textbook activities (EXACT questions from the PDFs with bilingual model answers)
5. 4 flashcards for quick revision
6. 10-question MCQ quiz

**Start by listing what you extracted from each lesson in the PDFs (titles, page ranges, activities found) — then generate the code.**
