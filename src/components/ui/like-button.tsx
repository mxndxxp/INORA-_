"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Link from 'next/link';

type LikeState = "Unliked" | "Saving" | "Liked";

export function LikeButton() {
  const [state, setState] = useState<LikeState>("Unliked");
  const [usedKeyboard, setUsedKeyboard] = useState(false);

  // This effect will toggle the button state for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => prev === "Unliked" ? "Liked" : "Unliked");
    }, 2400);
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className={cn(
        "like-button",
        {
          unliked: state === "Unliked",
          saving: state === "Saving",
          liked: state === "Liked",
        },
        !usedKeyboard && "focus:outline-none"
      )}
      onKeyDown={(e) => {
        if (e.key === "Tab") {
          setUsedKeyboard(true);
        }
      }}
      aria-label="Add to wishlist"
    >
      <span className="like-icon" />
      <span className="like-icon-state" aria-live="polite">
        {state}
      </span>
    </div>
  );
}
