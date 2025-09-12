
"use client";

import React, { useState, useEffect } from 'react';

export function RaindropAnimation() {
  const [raindrops, setRaindrops] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatedRaindrops = Array.from({ length: 100 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      const splashStyle = {
        animationDelay: `${parseFloat(style.animationDuration) + parseFloat(style.animationDelay)}s`,
      };
      const rippleStyle = {
        animationDelay: `${parseFloat(style.animationDuration) + parseFloat(style.animationDelay)}s`,
      };

      return (
        <div key={i} className="raindrop" style={style}>
          <div className="splash" style={splashStyle}></div>
          <div className="ripple" style={rippleStyle}></div>
        </div>
      );
    });
    setRaindrops(generatedRaindrops);
  }, []);

  return (
    <div className="raindrop-container -z-10" aria-hidden="true">
      {raindrops}
    </div>
  );
}
