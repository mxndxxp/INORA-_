
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between text-white relative z-10">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Droplet className="h-8 w-8 text-white" />
          <span className="text-3xl font-headline font-bold text-white">IONORA</span>
        </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {mainNav.map((item) => {
            const isActive = isNavItemActive(item);
            return item.children ? (
              <HoverDropdownMenu 
                key={item.title} 
                open={openMenu === item.title}
                onOpenChange={(isOpen) => setOpenMenu(isOpen ? item.title : null)}
              >
                <DropdownMenuTrigger asChild>
                   <Button
                    variant="ghost"
                    className={cn(
                      "flex flex-col items-center h-auto py-2 px-3 group text-white hover:bg-white/10 hover:text-white",
                      isActive && "bg-black/10"
                    )}
                  >
                    <span className={cn(
                      'font-bold transition-colors flex items-center gap-1',
                      isActive ? 'text-white' : 'text-white/80'
                    )}>
                      {item.title} <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </span>
                    {isActive && <div className="mt-1 wavy-underline" />}
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
                  'font-bold transition-colors hover:text-white',
                  isActive ? 'text-white' : 'text-white/80'
                )}>
                  {item.title}
                </span>
                {isActive && <div className="mt-1 wavy-underline" />}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-3">
          <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 h-9 w-9">
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 h-9 w-9">
             <Link href="/compare">
              <GitCompare className="h-5 w-5" />
              <span className="sr-only">Compare</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 cart-button h-9 w-9">
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
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
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
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="hsl(var(--background))"></path>
          </svg>
      </div>
    </header>
  );
}
