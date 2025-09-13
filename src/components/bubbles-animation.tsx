
"use client";

import React, { useState, useEffect } from 'react';

type BubbleStyle = {
  '--size': string;
  '--position': string;
  '--time': string;
  '--delay': string;
};

export function BubblesAnimation() {
  const [bubbles, setBubbles] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      return Array.from({ length: 25 }).map(() => ({
        '--size': `${2 + Math.random() * 4}rem`,
        '--position': `${-5 + Math.random() * 110}%`,
        '--time': `${2 + Math.random() * 2}s`,
        '--delay': `${-1 * (2 + Math.random() * 2)}s`,
      }));
    };
    setBubbles(generateBubbles());
  }, []);

  return (
    <div className="bubbles-container" aria-hidden="true">
      {bubbles.map((style, i) => (
        <div
          key={i}
          className="bubble"
          style={style as React.CSSProperties}
        />
      ))}
    </div>
  );
}
