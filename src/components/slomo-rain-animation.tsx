"use client";

import React from 'react';

export function SlomoRainAnimation() {
  const rains = Array.from({ length: 15 });

  return (
    <div className="slomo-rain-container" aria-hidden="true">
      {rains.map((_, i) => (
        <div className="slomo-rain" key={i}>
          <div className="drop"></div>
          <div className="waves">
            <div></div>
            <div></div>
          </div>
          <div className="splash"></div>
          <div className="particles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

    