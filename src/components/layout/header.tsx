
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Droplet, Menu, ShoppingCart, ChevronDown, Heart, GitCompare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MobileMenu } from './mobile-menu';
import { LikeButton } from '../ui/like-button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mainNav } from '@/lib/navigation';
import { HoverDropdownMenu } from '../ui/hover-dropdown-menu';


export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isNavItemActive = (item: (typeof mainNav)[0]) => {
    if (item.children) {
      // Check if any child is active first
      if (item.children.some(child => pathname === child.href)) {
        return true;
      }
      // Fallback to checking if the path starts with the parent href
      return pathname.startsWith(item.href);
    }
    return pathname === item.href;
  };

  return (
    <header className="header-wavy">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between text-black relative z-10">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Droplet className="h-8 w-8 text-black" />
          <span className="text-3xl font-headline font-bold text-black">IONORA</span>
        </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {mainNav.map((item) => {
            const isActive = isNavItemActive(item);
            return item.children ? (
              <HoverDropdownMenu key={item.title} onLinkClick={() => {}}>
                <DropdownMenuTrigger asChild>
                   <Button
                    variant="ghost"
                    className={cn(
                      "flex flex-col items-center h-auto py-2 px-3 group",
                      isActive && "bg-blue-900/10"
                    )}
                  >
                    <span className={cn(
                      'font-bold transition-colors hover:text-black flex items-center gap-1',
                      isActive ? 'text-black' : 'text-black/80'
                    )}>
                      {item.title} <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </span>
                    {isActive && <div className="mt-1 wavy-underline" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3e%3cpath fill='none' stroke='%23000000' stroke-width='1.5' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3e%3c/svg%3e")` }} />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link href={child.href}>{child.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </HoverDropdownMenu>
            ) : (
              <Link key={item.href} href={item.href} className="flex flex-col items-center p-3">
                <span className={cn(
                  'font-bold transition-colors hover:text-black',
                  isActive ? 'text-black' : 'text-black/80'
                )}>
                  {item.title}
                </span>
                {isActive && <div className="mt-1 wavy-underline" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3e%3cpath fill='none' stroke='%23000000' stroke-width='1.5' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3e%3c/svg%3e")` }} />}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-3">
          <Button asChild variant="ghost" size="icon" className="text-black hover:bg-white/10 h-9 w-9">
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-black hover:bg-white/10 h-9 w-9">
             <Link href="/compare">
              <GitCompare className="h-5 w-5" />
              <span className="sr-only">Compare</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-black hover:bg-white/10 cart-button h-9 w-9">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 cart-icon" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black hover:bg-white/10 hover:text-black">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-foreground/95 border-l-0 p-0 w-full max-w-sm">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <MobileMenu navLinks={mainNav} onLinkClick={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

      </div>
      <div className="header-wave-container">
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
