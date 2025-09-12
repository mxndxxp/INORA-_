'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Droplet, Menu, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MobileMenu } from './mobile-menu';
import { LikeButton } from '../ui/like-button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/why-ionora', label: 'Why Ionora?' },
  { href: '/science', label: 'The Science Hub' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-wavy">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between text-white relative z-10">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          {navLinks.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center">
              <span className={cn(
                'font-bold transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/70'
              )}>
                {item.label}
              </span>
              {pathname === item.href && <div className="mt-1 wavy-underline" />}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-center w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-white" />
            <span className="text-3xl font-headline font-bold text-white">IONORA</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-end gap-2 w-1/3">
           <nav className="flex items-center gap-8">
             {navLinks.slice(3, 5).map((item) => (
                <Link key={item.href} href={item.href} className="flex flex-col items-center">
                  <span className={cn(
                    'font-bold transition-colors hover:text-foreground/80',
                     pathname === item.href ? 'text-foreground' : 'text-foreground/70'
                  )}>
                    {item.label}
                  </span>
                  {pathname === item.href && <div className="mt-1 wavy-underline" />}
                </Link>
              ))}
           </nav>
          <Link href="/wishlist">
            <LikeButton />
          </Link>
          <Button asChild className="metallic-button">
            <Link href="/compare">
              Compare Now
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-primary hover:bg-primary/10 cart-button">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 cart-icon" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex-1">
           <Link href="/" className="flex items-center gap-2 text-white">
            <Droplet className="h-7 w-7" />
            <span className="text-2xl font-headline font-bold">IONORA</span>
          </Link>
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
      <div className="header-wave-container" style={{transform: 'rotate(180deg)'}}>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#89ddff" />
          </g>
          </svg>
      </div>
    </header>
  );
}
