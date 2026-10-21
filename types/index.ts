export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export type LessonViewId = 
  | 'lesson-1-1' 
  | 'lesson-1-2' 
  | 'lesson-1-3' 
  | 'lesson-1-4' 
  | 'unit-1-solutions' 
  | 'unit-1-exam'
  | 'lesson-2-1'
  | 'lesson-2-2'
  | 'lesson-2-3'
  | 'unit-2-solutions'
  | 'unit-2-exam'
  | 'lesson-3-1'
  | 'lesson-3-2'
  | 'lesson-3-3'
  | 'unit-3-overview'
  | 'unit-3-solutions'
  | 'unit-3-exam'
  | 'lesson-4-1'
  | 'lesson-4-2'
  | 'lesson-4-3'
  | 'lesson-4-4'
  | 'unit-4-solutions'
  | 'unit-4-exam'
  | 'lesson-5-1'
  | 'lesson-5-2'
  | 'lesson-5-3'
  | 'unit-5-solutions'
  | 'unit-5-exam'
  | 'lesson-6-1'
  | 'lesson-6-2'
  | 'lesson-6-3'
  | 'unit-6-solutions'
  | 'unit-6-exam'
  | 'lesson-7-1'
  | 'lesson-7-2'
  | 'lesson-7-3'
  | 'unit-7-solutions'
  | 'unit-7-exam';

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface Question {
  lesson: LocalizedText;
  q: LocalizedText;
  opts: {
    ar: string[];
    en: string[];
  };
  a: number; // 0-indexed correct answer
  exp: LocalizedText;
  ref?: LocalizedText;
}

export interface EraItem {
  ar: string;
  en: string;
}

export interface MooreItem {
  y: string;
  c: string;
  t: string;
}

export interface RingItem {
  ar: string;
  en: string;
}

export interface HallucinationItem {
  ar: {
    gen: string;
    truth: string;
  };
  en: {
    gen: string;
    truth: string;
  };
}

export interface SolutionItem {
  id: string;
  num: string;
  title: LocalizedText;
  question: LocalizedText;
  solution: LocalizedText;
  rationale: LocalizedText;
  page: string;
}
