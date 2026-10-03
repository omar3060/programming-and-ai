'use client';

import React, { useState, useEffect, useRef } from 'react';

const feedbackImages = [
  { id: 1, src: '/feedbacks/2.png', label: 'رأي طالب' },
  { id: 2, src: '/feedbacks/3.png', label: 'رأي طالب' },
  { id: 3, src: '/feedbacks/4.jpg', label: 'رأي طالب' },
  { id: 4, src: '/feedbacks/5.jpeg', label: 'رأي طالب' },
  { id: 5, src: '/feedbacks/6.png', label: 'رأي طالب' },
  { id: 6, src: '/feedbacks/9.png', label: 'رأي طالب' },
  { id: 7, src: '/feedbacks/11.png', label: 'رأي طالب' },
  { id: 8, src: '/feedbacks/12.png', label: 'رأي طالب' },
  { id: 9, src: '/feedbacks/13.png', label: 'رأي طالب' },
  { id: 10, src: '/feedbacks/14.png', label: 'رأي طالب' },
  { id: 11, src: '/feedbacks/486167854_1070334761804592_4652937325463459133_n.jpg', label: 'رأي طالب' },
  { id: 12, src: '/feedbacks/486311914_1070171248487610_1562808732957939050_n.jpg', label: 'رأي طالب' },
  { id: 13, src: '/feedbacks/500608976_1122947343210000_4410260446394240556_n.jpg', label: 'رأي طالب' },
  { id: 14, src: '/feedbacks/WhatsApp%20Image%202026-04-30%20at%209.01.52%20PM.jpeg', label: 'رأي طالب' },
  { id: 15, src: '/feedbacks/1.png', label: 'رأي طالب' },
];

export function InstructorBioCard() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Touch Drag State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay 2 seconds timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % feedbackImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % feedbackImages.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + feedbackImages.length) % feedbackImages.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    // Minimum drag threshold: 30px
    if (distance > 30) {
      // Swiped Left (Next in RTL)
      handleNext();
    } else if (distance < -30) {
      // Swiped Right (Prev in RTL)
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div dir="rtl" className="theme-panel border border-amber-500/40 p-4 sm:p-6 lg:p-8 rounded-3xl relative overflow-hidden shadow-xl space-y-6 [font-family:var(--font-cairo),'Cairo',sans-serif] max-w-full">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 border-b border-slate-700/50 dark:border-slate-800/80 pb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative shrink-0">
            <img
              src="/my%20image.JPG"
              alt="البشمهندس عمر محمود"
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-500/60 shadow-lg shadow-amber-500/20"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[11px] sm:text-xs font-black flex items-center gap-1.5">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span>الخبرة العملية والتدريس</span>
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 text-[10px] sm:text-[11px] font-bold">
                عربي ولغات (تجريبي)
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
              نبذة عن البشمهندس عمر محمود
            </h2>
            <p className="text-xs sm:text-sm text-sub font-semibold">
              خبير تدريس مادة البرمجة والذكاء الاصطناعي ومهندس برمجيات محترف
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
          <a
            href="https://wa.me/201012306019"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition"
          >
            <i className="fa-brands fa-whatsapp text-sm sm:text-base"></i>
            <span>واتساب: 01012306019</span>
          </a>
          <a
            href="https://www.youtube.com/@omarmahmoud-p6l"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition"
          >
            <i className="fa-brands fa-youtube text-sm sm:text-base"></i>
            <span>قناة YouTube</span>
          </a>
        </div>
      </div>

      {/* Content Grid: Text + Student Feedbacks Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Text Info Column */}
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl theme-subpanel border border-slate-200 dark:border-slate-800">
              <i className="fa-solid fa-graduation-cap text-amber-500 text-base shrink-0 mt-1.5"></i>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                خريج كلية الحاسبات والمعلومات قسم علوم الحاسوب وخريج معهد تكنولوجيا المعلومات تخصص برمجة تطبيقات ومواقع الويب
              </p>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl theme-subpanel border border-slate-200 dark:border-slate-800">
              <i className="fa-solid fa-chalkboard-user text-blue-500 text-base shrink-0 mt-1.5"></i>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                يعمل كمدرب برمجيات في مديرية القوى العامله بالاسماعيلية
              </p>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl theme-subpanel border border-slate-200 dark:border-slate-800">
              <i className="fa-solid fa-briefcase text-purple-500 text-base shrink-0 mt-1.5"></i>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                ولديه خبرة 4 سنوات في مجال تطوير وبرمجة تطبيقات الويب في مختلف الشركات في مصر والسعودية وحاليا اعمل كمهندس برمجيات عن بعُد في شركة بريطانية
              </p>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl theme-subpanel border border-slate-200 dark:border-slate-800">
              <i className="fa-solid fa-users text-emerald-500 text-base shrink-0 mt-1.5"></i>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                واعمل في مجال تدريس مادة البرمجة والذكاء الاصطناعى لطلاب اولى وثانيه بكالوريا عربي ولغات حصتين اسبوعيا تفاعليه مباشره مع الطلاب باسعار رمزيه مراعاة لأولياء الأمور
              </p>
            </div>
          </div>

          {/* Pricing Badges Box */}
          {/* <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
            <div className="font-bold text-amber-500 dark:text-amber-400 text-xs flex items-center gap-2">
              <i className="fa-solid fa-tags"></i>
              <span>أسعار الاشتراك الشهري للدروس التفاعلية المباشرة (حصتين أسبوعياً):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 font-bold">
              <div className="p-2.5 rounded-xl theme-panel border border-amber-500/40 text-slate-900 dark:text-amber-300 flex items-center justify-between shadow-sm">
                <span>اولى بكالوريا (عربي / لغات):</span>
                <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs shrink-0">150 جنيه شهريا</span>
              </div>
              <div className="p-2.5 rounded-xl theme-panel border border-amber-500/40 text-slate-900 dark:text-amber-300 flex items-center justify-between shadow-sm">
                <span>ثانيه بكالوريا (عربي / لغات):</span>
                <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs shrink-0">250 جنيه شهريا</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Student Feedbacks Slider Side */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3 w-full max-w-md mx-auto">
          {/* Title Header Above Slider */}
          <div className="w-full flex items-center justify-between px-1">
            <span className="text-sm font-black text-amber-500 dark:text-amber-400 flex items-center gap-2">
              <i className="fa-solid fa-comments text-amber-500 animate-pulse"></i>
              <span>آراء طلابنا   </span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[11px] font-mono font-bold">
              {currentIdx + 1} / {feedbackImages.length}
            </span>
          </div>

          {/* Main Slider Card Container */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ WebkitTapHighlightColor: 'transparent' }}
            className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl bg-slate-900 p-2 w-full h-[320px] sm:h-[350px] select-none cursor-default focus:outline-none active:outline-none"
          >
            {/* Image Container (Clean Static without click or hover effects) */}
            <div className="w-full h-full relative overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center pointer-events-none cursor-default select-none">
              <img
                src={feedbackImages[currentIdx].src}
                alt={feedbackImages[currentIdx].label}
                draggable={false}
                className="w-full h-full object-contain object-center rounded-xl pointer-events-none select-none"
              />
            </div>

            {/* Prev / Next Clickable Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40 flex items-center justify-center transition shadow-lg cursor-pointer z-10 pointer-events-auto"
              aria-label="الرأي السابق"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40 flex items-center justify-center transition shadow-lg cursor-pointer z-10 pointer-events-auto"
              aria-label="الرأي التالي"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
          </div>

          {/* Clickable Bullets Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1 max-w-full px-2 z-10">
            {feedbackImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer pointer-events-auto ${currentIdx === idx
                    ? 'w-6 h-2.5 bg-amber-500 shadow-sm shadow-amber-500/50'
                    : 'w-2.5 h-2.5 bg-slate-600 hover:bg-amber-400/60'
                  }`}
                aria-label={`انتقل إلى الرأي رقم ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


