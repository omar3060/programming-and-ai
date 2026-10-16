'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { PrintModal } from '@/components/layout/PrintModal';
import { useApp } from '@/components/providers/AppProviders';

import { Lesson1_1 } from '@/components/lessons/Lesson1_1';
import { Lesson1_2 } from '@/components/lessons/Lesson1_2';
import { Lesson1_3 } from '@/components/lessons/Lesson1_3';
import { Lesson1_4 } from '@/components/lessons/Lesson1_4';
import { Lesson2_1 } from '@/components/lessons/Lesson2_1';
import { Lesson2_2 } from '@/components/lessons/Lesson2_2';
import { Lesson2_3 } from '@/components/lessons/Lesson2_3';
import { TextbookSolutions } from '@/components/practice/TextbookSolutions';
import { TextbookSolutionsUnit2 } from '@/components/practice/TextbookSolutionsUnit2';
import { Unit1Exam } from '@/components/practice/Unit1Exam';
import { Unit2Exam } from '@/components/practice/Unit2Exam';
import { Lesson3_1 } from '@/components/lessons/Lesson3_1';
import { Lesson3_2 } from '@/components/lessons/Lesson3_2';
import { Lesson3_3 } from '@/components/lessons/Lesson3_3';
import { Unit3Exam } from '@/components/practice/Unit3Exam';

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const {
    activeLesson,
    setActiveLesson,
    mobileSidebarOpen,
    toggleMobileSidebar,
    closeMobileSidebar,
    isPrintModalOpen,
    openPrintModal,
    closePrintModal
  } = useApp();

  const renderActiveView = () => {
    if (!mounted) return null;

    switch (activeLesson) {
      case 'lesson-1-1':
        return <Lesson1_1 />;
      case 'lesson-1-2':
        return <Lesson1_2 />;
      case 'lesson-1-3':
        return <Lesson1_3 />;
      case 'lesson-1-4':
        return <Lesson1_4 />;
      case 'unit-1-solutions':
        return <TextbookSolutions />;
      case 'unit-1-exam':
        return <Unit1Exam />;
      case 'lesson-2-1':
        return <Lesson2_1 />;
      case 'lesson-2-2':
        return <Lesson2_2 />;
      case 'lesson-2-3':
        return <Lesson2_3 />;
      case 'unit-2-solutions':
        return <TextbookSolutionsUnit2 />;
      case 'unit-2-exam':
        return <Unit2Exam />;
      case 'lesson-3-1':
        return <Lesson3_1 />;
      case 'lesson-3-2':
        return <Lesson3_2 />;
      case 'lesson-3-3':
        return <Lesson3_3 />;
      case 'unit-3-exam':
        return <Unit3Exam />;
      default:
        return <Lesson1_1 />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col antialiased">
      {/* Navbar Header */}
      <Navbar
        onToggleSidebar={toggleMobileSidebar}
        onOpenPrintModal={openPrintModal}
      />

      {/* Main Container */}
      <div className="flex-1 flex overflow-x-hidden relative max-w-full">
        {/* Sidebar */}
        <Sidebar
          activeView={activeLesson}
          onNavigate={setActiveLesson}
          isOpenMobile={mobileSidebarOpen}
          onCloseMobile={closeMobileSidebar}
        />

        {/* Scrollable Viewport */}
        <main className="flex-1 h-[calc(100vh-61px)] overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-8 space-y-8 max-w-full">
          {renderActiveView()}
        </main>
      </div>

      {/* Revision Guide PDF Print Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={closePrintModal}
      />
    </div>
  );
}
