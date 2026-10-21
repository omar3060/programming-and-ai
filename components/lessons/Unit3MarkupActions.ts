import type { MouseEvent } from 'react';
import type { LessonViewId } from '@/types';

const lessonTargets: Record<string, LessonViewId> = {
  'lesson-3-1': 'lesson-3-1',
  'lesson-3-2': 'lesson-3-2',
  'lesson-3-3': 'lesson-3-3',
  'unit-3-solutions': 'unit-3-solutions',
  'unit-3-exam': 'unit-3-exam',
};

export function handleUnit3MarkupClick(
  event: MouseEvent<HTMLElement>,
  setActiveLesson: (lesson: LessonViewId) => void
) {
  if (!(event.target instanceof Element)) return;
  const actionElement = event.target.closest<HTMLElement>('[data-unit3-action]');
  const action = actionElement?.dataset.unit3Action;
  if (!action || !actionElement) return;

  if (action === "this.classList.toggle('flipped')") {
    actionElement.classList.toggle('flipped');
    return;
  }

  const match = action.match(/^(toggleCard|navigateTo)\('([^']+)'\)$/);
  if (!match) return;

  if (match[1] === 'toggleCard') {
    document.getElementById(match[2])?.classList.toggle('hidden');
    return;
  }

  const target = lessonTargets[match[2]];
  if (target) setActiveLesson(target);
}
