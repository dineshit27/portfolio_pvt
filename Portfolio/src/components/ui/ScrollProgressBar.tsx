import React, { useState, useEffect } from 'react';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Container */}
      <div
        id="progressBarContainer"
        className="fixed top-0 right-0 w-[5px] h-full bg-black/5 dark:bg-white/5 backdrop-blur-[2px] z-[9999] pointer-events-none"
      />
      {/* Scroll Progress Bar */}
      <div
        id="progressBar"
        className="fixed top-0 right-0 w-[5px] z-[9999] rounded-b-full transition-all duration-100 ease-out pointer-events-none"
        style={{
          height: `${scrollProgress}%`,
          opacity: scrollProgress > 0 ? Math.min(scrollProgress / 10, 1) : 0, // Fade in quickly as we start scrolling
          background: 'linear-gradient(to bottom, #8b5cf6, #ef4444)', // Modern violet to red gradient
          boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)',
        }}
      />
    </>
  );
}
