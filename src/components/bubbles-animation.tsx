
"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export function BubblesAnimation() {
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="bubbles-container" aria-hidden="true">
      {bubbles.map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            '--size': `${2 + Math.random() * 4}rem`,
            '--distance': `${6 + Math.random() * 4}rem`,
            '--position': `${-5 + Math.random() * 110}%`,
            '--time': `${2 + Math.random() * 2}s`,
            '--delay': `${-1 * (2 + Math.random() * 2)}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
