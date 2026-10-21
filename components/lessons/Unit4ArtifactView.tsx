'use client';

import React, { useEffect, useRef } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import type { LessonViewId } from '@/types';
import { mountUnit4ArtifactRuntime } from '@/components/lessons/unit4ArtifactRuntime';

interface Unit4ArtifactViewProps {
  viewId: LessonViewId;
  rootId?: string;
  rootClass?: string;
  children?: React.ReactNode;
}

interface Unit4RuntimeWindow extends Window {
  toggleSound?: () => void;
  toggleLanguage?: () => void;
  toggleTheme?: () => void;
  toggleSidebar?: () => void;
  toggleUnit?: (unitId: string) => void;
  toggleCard?: (id: string) => void;
  navigateTo?: (viewId: string) => void;
  runMediaScenario?: (scenario: string) => void;
  toggleMediaChannel?: (channel: string) => void;
  openPrintModal?: () => void;
  closePrintModal?: () => void;
  setDesignMode?: (mode: string) => void;
  toggleCrapPrinciple?: (principle: string) => void;
  loadAnalyticsCase?: (caseName: string) => void;
  updateAnalyticsDashboard?: () => void;
  runAbExperiment?: (mode: string, silent?: boolean) => void;
  nextUExamQuestion?: () => void;
  restartUExam?: () => void;
}

function dispatchArtifactAction(action: string, element: HTMLElement) {
  if (action === "this.classList.toggle('flipped')") {
    element.classList.toggle('flipped');
    return;
  }
  if (action === 'window.print()') {
    window.print();
    return;
  }

  const match = action.match(/^([A-Za-z_$][\w$]*)\((?:'([^']*)')?\)$/);
  if (!match) return;

  const [, name, argument] = match;
  const runtime = window as Unit4RuntimeWindow;
  switch (name) {
    case 'toggleSound':
      runtime.toggleSound?.();
      break;
    case 'toggleLanguage':
      runtime.toggleLanguage?.();
      break;
    case 'toggleTheme':
      runtime.toggleTheme?.();
      break;
    case 'toggleSidebar':
      runtime.toggleSidebar?.();
      break;
    case 'toggleUnit':
      if (argument) runtime.toggleUnit?.(argument);
      break;
    case 'toggleCard':
      if (argument) runtime.toggleCard?.(argument);
      break;
    case 'navigateTo':
      if (argument) runtime.navigateTo?.(argument);
      break;
    case 'runMediaScenario':
      if (argument) runtime.runMediaScenario?.(argument);
      break;
    case 'toggleMediaChannel':
      if (argument) runtime.toggleMediaChannel?.(argument);
      break;
    case 'openPrintModal':
      runtime.openPrintModal?.();
      break;
    case 'closePrintModal':
      runtime.closePrintModal?.();
      break;
    case 'setDesignMode':
      if (argument) runtime.setDesignMode?.(argument);
      break;
    case 'toggleCrapPrinciple':
      if (argument) runtime.toggleCrapPrinciple?.(argument);
      break;
    case 'loadAnalyticsCase':
      if (argument) runtime.loadAnalyticsCase?.(argument);
      break;
    case 'updateAnalyticsDashboard':
      runtime.updateAnalyticsDashboard?.();
      break;
    case 'runAbExperiment':
      if (argument) runtime.runAbExperiment?.(argument);
      break;
    case 'nextUExamQuestion':
      runtime.nextUExamQuestion?.();
      break;
    case 'restartUExam':
      runtime.restartUExam?.();
      break;
  }
}

export function Unit4ArtifactView({
  viewId,
  rootId,
  rootClass,
  children,
}: Unit4ArtifactViewProps) {
  const { playSfx, setActiveLesson } = useApp();
  const playSfxRef = useRef(playSfx);
  const setActiveLessonRef = useRef(setActiveLesson);

  useEffect(() => {
    playSfxRef.current = playSfx;
    setActiveLessonRef.current = setActiveLesson;
  });

  useEffect(() => {
    const navigate = (nextView: string) => {
      const target = unit4Views[nextView];
      if (!target) return;
      playSfxRef.current('click');
      setActiveLessonRef.current(target);
    };

    return mountUnit4ArtifactRuntime(
      (type: 'click' | 'success' | 'error') => playSfxRef.current(type),
      navigate,
      viewId
    );
  }, [viewId]);

  const handleArtifactEvent = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return;
    const actionElement = event.target.closest<HTMLElement>('[data-unit4-action]');
    if (!actionElement || !event.currentTarget.contains(actionElement)) return;
    if (actionElement.dataset.unit4Event !== event.type) return;
    dispatchArtifactAction(actionElement.dataset.unit4Action ?? '', actionElement);
  };

  return (
    <div
      id={rootId}
      className={rootClass}
      onClick={handleArtifactEvent}
      onInput={handleArtifactEvent}
    >
      {children}
    </div>
  );
}

const unit4Views: Partial<Record<string, LessonViewId>> = {
  'lesson-4-1': 'lesson-4-1',
  'lesson-4-2': 'lesson-4-2',
  'lesson-4-3': 'lesson-4-3',
  'lesson-4-4': 'lesson-4-4',
  'unit-4-solutions': 'unit-4-solutions',
  'unit-4-exam': 'unit-4-exam',
};
