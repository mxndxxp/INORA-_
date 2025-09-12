"use client";

import React, { useState, useRef, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";

interface HoverDropdownMenuProps {
  children: React.ReactNode;
}

export function HoverDropdownMenu({ children }: HoverDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    const trigger = triggerRef.current;
    const content = contentRef.current;

    if (trigger) {
      trigger.addEventListener("mouseenter", handleMouseEnter);
      trigger.addEventListener("mouseleave", handleMouseLeave);
    }
    if (content) {
      content.addEventListener("mouseenter", handleMouseEnter);
      content.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (trigger) {
        trigger.removeEventListener("mouseenter", handleMouseEnter);
        trigger.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (content) {
        content.removeEventListener("mouseenter", handleMouseEnter);
        content.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [triggerRef, contentRef]);

  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuTrigger
  );
  const content = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuContent
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: triggerRef })}
      {content && React.cloneElement(content as React.ReactElement, { ref: contentRef })}
    </DropdownMenu>
  );
}
