
"use client";

import React, { useState, useRef, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";

interface HoverDropdownMenuProps {
  children: React.ReactNode;
  onLinkClick: () => void;
}

export function HoverDropdownMenu({ children, onLinkClick }: HoverDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleOpen = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    if (!isClickOpen) {
        timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }
  };

  const handleClick = () => {
    const wasClickOpen = isClickOpen;
    setIsClickOpen(!wasClickOpen);
    setIsOpen(!wasClickOpen);
  };

  const handleContentClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest('a[href]')) {
        onLinkClick();
        setIsClickOpen(false);
        setIsOpen(false);
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
        setIsClickOpen(false);
    }
    setIsOpen(open);
  }

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
  }, [triggerRef, contentRef, isClickOpen]);

  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuTrigger
  );
  const content = childrenArray.find(
    (child) => (child as React.ReactElement).type === DropdownMenuContent
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: triggerRef, onClick: handleClick, 'aria-expanded': isOpen })}
      {content && React.cloneElement(content as React.ReactElement, { ref: contentRef, onClick: handleContentClick })}
    </DropdownMenu>
  );
}
