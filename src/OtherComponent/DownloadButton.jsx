'use client'
import React, { useState } from 'react';

export default function DownloadButton() {
  const [hoverDemo, setHoverDemo] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);

  return (
    <div>
      {/* DARK BUTTON */}
      <div className=' hidden dark:block' >
      

        {/* Download Button */}
        <a
          href="#"
          onMouseEnter={() => setHoverDownload(true)}
          onMouseLeave={() => setHoverDownload(false)}
          className="relative inline-flex items-center h-[50px] lg:h-16 w-50 lg:w-56 rounded-[20px] overflow-hidden shadow-2xl"
          style={{
            background: hoverDownload 
              ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hoverDownload ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hoverDownload 
              ? '0 20px 60px rgba(240, 147, 251, 0.4)' 
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.3), rgba(245, 87, 108, 0.3))',
              opacity: hoverDownload ? 1 : 0,
              transition: 'opacity 0.6s'
            }}
          />
          
          {/* Icon Circle */}
          <span 
            className="relative z-10 flex items-center justify-center h-10 lg:h-12 w-10 lg:w-12 rounded-full "
            style={{
              marginLeft: hoverDownload ? '140px' : '8px',
              background: hoverDownload 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: hoverDownload ? '#f5576c' : '#ffffff',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          
          {/* Default Title */}
          <span 
            className="absolute font-bold text-[14px] lg:text-lg tracking-wide"
            style={{
              left: hoverDownload ? '30px' : '75px',
              opacity: hoverDownload ? 0 : 1,
              color: '#ffffff',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 10
            }}
          >
            Download CV
          </span>
          
          {/* Hover Title */}
          <span 
            className="absolute font-bold text-[16px] lg:text-lg tracking-wide"
            style={{
              left: hoverDownload ? '30px' : '60px',
              opacity: hoverDownload ? 1 : 0,
              color: '#ffffff',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 10
            }}
          >
            Get Now →
          </span>
        </a>
      </div>
      {/* DARK BUTTON */}

      {/* LIGHT BUTTON */}
       <div className=' dark:hidden' >
      
        {/* Download Button */}
        <a
          href="#"
          onMouseEnter={() => setHoverDownload(true)}
          onMouseLeave={() => setHoverDownload(false)}
          className="relative inline-flex items-center h-[50px] lg:h-16 w-50 lg:w-56 rounded-[20px] overflow-hidden"
          style={{
            background: hoverDownload 
              ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hoverDownload ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hoverDownload 
              ? '0 20px 60px rgba(240, 147, 251, 0.4)' 
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.3), rgba(245, 87, 108, 0.3))',
              opacity: hoverDownload ? 1 : 0,
              transition: 'opacity 0.6s'
            }}
          />
          
          {/* Icon Circle */}
          <span 
            className="relative z-10 flex items-center justify-center h-10 lg:h-12 w-10 lg:w-12 rounded-full "
            style={{
              marginLeft: hoverDownload ? '140px' : '8px',
              background: hoverDownload 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: hoverDownload ? '#f5576c' : '#ffffff',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          
          {/* Default Title */}
          <span 
            className="absolute font-bold text-[14px] lg:text-lg tracking-wide"
            style={{
              left: hoverDownload ? '30px' : '75px',
              opacity: hoverDownload ? 0 : 1,
              color: '#000000',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 10
            }}
          >
            Download CV
          </span>
          
          {/* Hover Title */}
          <span 
            className="absolute font-bold text-[16px] lg:text-lg tracking-wide"
            style={{
              left: hoverDownload ? '30px' : '60px',
              opacity: hoverDownload ? 1 : 0,
              color: '#000000',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 10
            }}
          >
            Get Now →
          </span>
        </a>
      </div>
      {/* LIGHT BUTTON */}

    </div>
  );
}