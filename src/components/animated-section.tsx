"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animation?: 'animate-scroll-in';
  delay?: number;
}

export const AnimatedSection = ({ children, className, animation, delay = 0, ...props }: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        animation && isVisible ? animation : '',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </section>
  );
};
