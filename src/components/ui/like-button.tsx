"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

type LikeState = "Unliked" | "Saving" | "Liked";

export function LikeButton() {
  const [state, setState] = useState<LikeState>("Unliked");
  const [usedKeyboard, setUsedKeyboard] = useState(false);

  const updateState = async (to: LikeState) => {
    setState("Saving");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setState(to);
  };

  const handleClick = () => {
    updateState(state === "Unliked" ? "Liked" : "Unliked");
  };

  return (
    <button
      className={cn(
        "like-button",
        {
          unliked: state === "Unliked",
          saving: state === "Saving",
          liked: state === "Liked",
        },
        !usedKeyboard && "focus:outline-none"
      )}
      onClick={handleClick}
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
    </button>
  );
}
