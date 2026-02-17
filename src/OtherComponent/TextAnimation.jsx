'use client'
import React, { useState, useEffect } from 'react';

export default function TextAnimation() {
  const titles = [
    'Web Developer',
    'Web Designer',
    'UI/UX Designer',
    'Freelancer'
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing animation
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting animation
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, titles]);

  return (
    <div className=" flex items-start justify-start relative mt-[-20px] lg:mt-0 ">
      
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main text container */}
        <div className="relative flex items-center justify-center ">
          {/* Glow behind text */}
          
          
          {/* Animated text */}
          <h1 className="text-[40px] lg:text-6xl font-black text-[#FF014F] whitespace-nowrap">
            {displayText}
            <span className="animate-pulse text-gray-600 dark:text-amber-50 ">|</span>
          </h1>
        </div>

        {/* Progress indicators */}
        <div className="flex gap-3 justify-center items-center">
          {titles.map((_, index) => (
            <div
              key={index}
              className="relative"
            >
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}