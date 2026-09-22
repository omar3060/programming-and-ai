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
  | 'unit-2-exam';

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
