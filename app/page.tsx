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
import { TextbookSolutions } from '@/components/practice/TextbookSolutions';
import { Unit1Exam } from '@/components/practice/Unit1Exam';

export default function Home() {
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
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar */}
        <Sidebar
          activeView={activeLesson}
          onNavigate={setActiveLesson}
          isOpenMobile={mobileSidebarOpen}
          onCloseMobile={closeMobileSidebar}
        />

        {/* Scrollable Viewport */}
        <main className="flex-1 h-[calc(100vh-61px)] overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
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

