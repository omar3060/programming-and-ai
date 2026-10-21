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
import { Lesson3 } from '@/components/lessons/Lesson3';
import { TextbookSolutionsUnit3 } from '@/components/practice/TextbookSolutionsUnit3';
import { Unit3Exam } from '@/components/practice/Unit3Exam';

// Unit 4 components
import { Lesson4_1 } from '@/components/lessons/Lesson4_1';
import { Lesson4_2 } from '@/components/lessons/Lesson4_2';
import { Lesson4_3 } from '@/components/lessons/Lesson4_3';
import { Lesson4_4 } from '@/components/lessons/Lesson4_4';
import { TextbookSolutionsUnit4 } from '@/components/practice/TextbookSolutionsUnit4';
import { Unit4Exam } from '@/components/practice/Unit4Exam';
import { Lesson5_1 } from '@/components/lessons/Lesson5_1';
import { Lesson5_2 } from '@/components/lessons/Lesson5_2';
import { Lesson5_3 } from '@/components/lessons/Lesson5_3';
import { TextbookSolutionsUnit5 } from '@/components/practice/TextbookSolutionsUnit5';
import { Unit5Exam } from '@/components/practice/Unit5Exam';
import { Lesson6_1 } from '@/components/lessons/Lesson6_1';
import { Lesson6_2 } from '@/components/lessons/Lesson6_2';
import { Lesson6_3 } from '@/components/lessons/Lesson6_3';
import { TextbookSolutionsUnit6 } from '@/components/practice/TextbookSolutionsUnit6';
import { Unit6Exam } from '@/components/practice/Unit6Exam';
import { Lesson7_1 } from '@/components/lessons/Lesson7_1';
import { Lesson7_2 } from '@/components/lessons/Lesson7_2';
import { Lesson7_3 } from '@/components/lessons/Lesson7_3';
import { TextbookSolutionsUnit7 } from '@/components/practice/TextbookSolutionsUnit7';
import { Unit7Exam } from '@/components/practice/Unit7Exam';

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
      case 'unit-3-overview':
        return <Lesson3 />;
      case 'unit-3-solutions':
        return <TextbookSolutionsUnit3 />;
      case 'unit-3-exam':
        return <Unit3Exam />;
      case 'lesson-4-1':
        return <Lesson4_1 />;
      case 'lesson-4-2':
        return <Lesson4_2 />;
      case 'lesson-4-3':
        return <Lesson4_3 />;
      case 'lesson-4-4':
        return <Lesson4_4 />;
      case 'unit-4-solutions':
        return <TextbookSolutionsUnit4 />;
      case 'unit-4-exam':
        return <Unit4Exam />;
      case 'lesson-5-1':
        return <Lesson5_1 />;
      case 'lesson-5-2':
        return <Lesson5_2 />;
      case 'lesson-5-3':
        return <Lesson5_3 />;
      case 'unit-5-solutions':
        return <TextbookSolutionsUnit5 />;
      case 'unit-5-exam':
        return <Unit5Exam />;
      case 'lesson-6-1':
        return <Lesson6_1 />;
      case 'lesson-6-2':
        return <Lesson6_2 />;
      case 'lesson-6-3':
        return <Lesson6_3 />;
      case 'unit-6-solutions':
        return <TextbookSolutionsUnit6 />;
      case 'unit-6-exam':
        return <Unit6Exam />;
      case 'lesson-7-1':
        return <Lesson7_1 />;
      case 'lesson-7-2':
        return <Lesson7_2 />;
      case 'lesson-7-3':
        return <Lesson7_3 />;
      case 'unit-7-solutions':
        return <TextbookSolutionsUnit7 />;
      case 'unit-7-exam':
        return <Unit7Exam />;
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
