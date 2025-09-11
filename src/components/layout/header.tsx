'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Droplet, Heart, ShoppingCart, GitCompare, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { MobileMenu } from './mobile-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/why-ionora', label: 'Why Ionora?' },
  { href: '/science', label: 'The Science Hub' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; radius: number; alpha: number; speed: number }[]>([]);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const navElement = canvas.parentElement;
    if(!navElement) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      const rect = navElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setRipples((prevRipples) => {
        const updated = prevRipples
          .map((r) => ({
            ...r,
            radius: r.radius + r.speed,
            alpha: r.alpha - 0.015,
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

  const addRipple = (e: React.MouseEvent<HTMLElement>, strong = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
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
          className="hidden md:flex items-center justify-center relative p-2"
          onMouseMove={(e) => addRipple(e)}
          onClick={(e) => addRipple(e, true)}
        >
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-lighten opacity-70"
          />
          <ul className="flex gap-1 items-center">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-background text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 hover:text-primary-foreground hover:bg-primary/50',
                    pathname === item.href && 'bg-primary/70 text-primary-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
           <div className="hidden md:flex items-center gap-1">
             <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                </Link>
             </Button>
             <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/compare">
                    <GitCompare className="h-5 w-5" />
                    <span className="sr-only">Compare</span>
                </Link>
             </Button>
             <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                </Link>
             </Button>
           </div>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-foreground/95 border-l-0 p-0 w-full max-w-sm">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <MobileMenu navLinks={navLinks} onLinkClick={() => setMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}