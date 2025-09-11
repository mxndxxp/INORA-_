"use client";

import React from 'react';

export function RaindropAnimation() {
  return (
    <div className="raindrop-container absolute inset-0 w-full h-full -z-10 overflow-hidden">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="rain">
          <div className="drop" />
          <div className="waves">
            <div />
            <div />
          </div>
          <div className="splash" />
          <div className="particles">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ))}
    </div>
  );
}
