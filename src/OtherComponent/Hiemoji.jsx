"use client";

import { useEffect, useState } from "react";

const styles = `

  /* Waving emoji */
  .emoji {
    position: relative;
    z-index: 2;
    line-height: 1;
    display: inline-block;
    transform-origin: 70% 85%;
    animation: wave 1.8s ease-in-out infinite;
    cursor: default;
    user-select: none;
    filter: drop-shadow(0 0 20px rgba(255, 200, 50, 0.4));
  }

  @keyframes wave {
    0%   { transform: rotate(0deg);   }
    10%  { transform: rotate(18deg);  }
    20%  { transform: rotate(-8deg);  }
    30%  { transform: rotate(18deg);  }
    40%  { transform: rotate(-4deg);  }
    50%  { transform: rotate(12deg);  }
    60%  { transform: rotate(0deg);   }
    100% { transform: rotate(0deg);   }
  }

`;

export default function Hiemoji() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{styles}</style>
      
          {/* Emoji with spinning glow ring */}
            <span className="emoji  " role="img" aria-label="waving hand">
              👋
            </span>
     
    </>
  );
}