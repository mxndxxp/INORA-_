'use client';

import React, { useState } from 'react';
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-wavy">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <svg
          className="sea"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="800" y1="900" x2="800" y2="0">
              <stop offset="0" style={{ stopColor: '#0071BC' }} />
              <stop offset="1" style={{ stopColor: '#0000FF' }} />
            </linearGradient>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="800" y1="900" x2="800" y2="0">
              <stop offset="0" style={{ stopColor: '#29ABE2' }} />
              <stop offset="1" style={{ stopColor: '#0000FF' }} />
            </linearGradient>
          </defs>
          <g>
            <path
              className="wave-path-dark"
              d="M1600,300c-200,0-200-150-400-150S800,300,600,300S200,150,0,150v750h1600V300z"
            />
          </g>
          <g>
            <path
              className="wave-path-light"
              d="M1600,450c-200,0-200-150-400-150S800,450,600,450S200,300,0,300v600h1600V450z"
            />
          </g>
          <g>
            <path
              className="wave-path-white"
              d="M-200,450c200,0,200,30,400,30s200-30,400-30s200,30,400,30s200-30,400-30s200,30,400,30v450H-200V450z"
            />
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between text-white relative z-10">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          {navLinks.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center">
              <span className={cn(
                'font-medium transition-colors hover:text-white/80',
                pathname === item.href ? 'text-white' : 'text-gray-200'
              )}>
                {item.label}
              </span>
              {pathname === item.href && <div className="mt-1 wavy-underline" />}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex justify-center w-1/3">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Droplet className="h-8 w-8" />
            <span className="text-3xl font-headline font-bold">IONORA</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-end gap-1 w-1/3">
           <nav className="flex items-center gap-8">
             {navLinks.slice(3, 5).map((item) => (
                <Link key={item.href} href={item.href} className="flex flex-col items-center">
                  <span className={cn(
                    'font-medium transition-colors hover:text-white/80',
                     pathname === item.href ? 'text-white' : 'text-gray-200'
                  )}>
                    {item.label}
                  </span>
                  {pathname === item.href && <div className="mt-1 wavy-underline" />}
                </Link>
              ))}
           </nav>
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
      <div className="header-wave-border"></div>
    </header>
  );
}
