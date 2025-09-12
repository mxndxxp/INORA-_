
"use client";

import React, { useState, useRef, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";

interface HoverDropdownMenuProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HoverDropdownMenu({ children, open, onOpenChange }: HoverDropdownMenuProps) {
  const [isHovering, setIsHovering] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleOpen = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setIsHovering(true);
  };

  const handleClose = () => {
    timeoutId = setTimeout(() => {
        setIsHovering(false);
    }, 300);
  };

  const handleClick = () => {
    onOpenChange(!open);
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    if (isHovering || isOpen) {
        onOpenChange(true);
    } else {
        onOpenChange(false);
    }
  }

  useEffect(() => {
    handleOpenChange(open);
  }, [isHovering]);

  useEffect(() => {
    const trigger = triggerRef.current;
    const content = contentRef.current;

    if (trigger) {
      trigger.addEventListener("mouseenter", handleOpen);
      trigger.addEventListener("mouseleave", handleClose);
    }
    if (content) {
      content.addEventListener("mouseenter", handleOpen);
      content.addEventListener("mouseleave", handleClose);
    }

    return () => {
      if (trigger) {
        trigger.removeEventListener("mouseenter", handleOpen);
        trigger.removeEventListener("mouseleave", handleClose);
      }
      if (content) {
        content.removeEventListener("mouseenter", handleOpen);
        content.removeEventListener("mouseleave", handleClose);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef, contentRef]);

  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuTrigger
  );
  const content = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuContent
  );

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: triggerRef, onClick: handleClick, 'aria-expanded': open })}
      {content && React.cloneElement(content as React.ReactElement, { ref: contentRef })}
    </DropdownMenu>
  );
}
