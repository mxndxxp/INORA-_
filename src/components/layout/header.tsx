"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Droplet, Heart, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/why-ionora', label: 'Why Ionora?' },
  { href: '/science', label: 'The Science Hub' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Droplet className="h-7 w-7 text-primary" />
          <span className="text-2xl font-headline font-bold">IONORA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/wishlist">
                    <Heart className="h-6 w-6" />
                    <span className="sr-only">Wishlist</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/cart">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="sr-only">Cart</span>
                </Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/compare">Compare</Link>
            </Button>
            <Button asChild>
                <Link href="/products">Shop All</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline">IONORA</span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex w-full items-center py-2 text-lg font-medium hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Link
                      href="/compare"
                      className="flex w-full items-center py-2 text-lg font-medium hover:text-primary"
                    >
                      Compare
                    </Link>
                </nav>
                 <div className="flex items-center gap-4 pt-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/wishlist">
                            <Heart className="h-6 w-6" />
                            <span className="sr-only">Wishlist</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/cart">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="sr-only">Cart</span>
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
