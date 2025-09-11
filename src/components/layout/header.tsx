'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Droplet } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/why-ionora', label: 'Why Ionora?' },
  { href: '/science', label: 'The Science Hub' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
        if (!navListRef.current) return;
        const rect = navListRef.current.getBoundingClientRect();
        // Use a higher resolution for retina displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
    };

    const animate = () => {
      if (!navListRef.current) return;
      const rect = navListRef.current.getBoundingClientRect();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setRipples((prevRipples) => {
        const updated = prevRipples
          .map((r) => ({
            ...r,
            radius: r.radius + r.speed,
            alpha: r.alpha - 0.015, // Fade faster
          }))
          .filter((r) => r.alpha > 0);

        updated.forEach((r) => {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius);
          gradient.addColorStop(0, `rgba(100, 181, 246, ${r.alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(100, 181, 246, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        return updated;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const addRipple = (x: number, y: number, strong = false) => {
    setRipples((prev) => [
      ...prev,
      {
        x,
        y,
        radius: 0,
        alpha: strong ? 1 : 0.7,
        speed: strong ? 1.2 : 0.6,
      },
    ]);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center h-20 bg-foreground/80 backdrop-blur-md">
      <div className="container flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Droplet className="h-7 w-7 text-primary" />
          <span className="text-2xl font-headline font-bold">IONORA</span>
        </Link>
        <nav 
            className="relative flex items-center justify-center"
            onMouseMove={(e) => {
                if (!navListRef.current) return;
                const rect = navListRef.current.getBoundingClientRect();
                addRipple(e.clientX - rect.left, e.clientY - rect.top);
            }}
            onClick={(e) => {
                if (!navListRef.current) return;
                const rect = navListRef.current.getBoundingClientRect();
                addRipple(e.clientX - rect.left, e.clientY - rect.top, true);
            }}
        >
          <ul ref={navListRef} className="hidden md:flex gap-1 items-center p-2 relative">
             <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-lighten opacity-70"
            />
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-background text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 hover:text-primary-foreground hover:bg-primary/50",
                    pathname === item.href && "bg-primary/70 text-primary-foreground"
                    )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
