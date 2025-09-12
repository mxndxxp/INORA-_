import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Droplet, Heart, ShoppingCart, GitCompare, X, ChevronDown } from 'lucide-react';
import type { NavItem } from '@/lib/navigation';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type MobileMenuProps = {
  navLinks: NavItem[];
  onLinkClick: () => void;
};

export function MobileMenu({ navLinks, onLinkClick }: MobileMenuProps) {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2" onClick={onLinkClick}>
          <Droplet className="h-7 w-7 text-primary" />
          <span className="text-2xl font-headline font-bold">IONORA</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={onLinkClick} className="hover:bg-white/10">
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <Accordion type="multiple" className="w-full">
            {navLinks.map((link) => (
                link.children ? (
                    <AccordionItem value={link.title} key={link.title} className="border-b-0">
                        <AccordionTrigger className="text-2xl font-semibold py-3 hover:text-primary transition-colors hover:no-underline">
                           {link.title}
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul className="pl-4 border-l-2 border-primary/50">
                             {link.children.map((child) => (
                               <li key={child.href}>
                                 <Link
                                   href={child.href}
                                   className="block text-xl font-semibold py-2 pl-4 hover:text-primary transition-colors"
                                   onClick={onLinkClick}
                                 >
                                   {child.title}
                                 </Link>
                               </li>
                             ))}
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block text-2xl font-semibold py-3 hover:text-primary transition-colors border-b border-white/10"
                        onClick={onLinkClick}
                    >
                        {link.title}
                    </Link>
                )
            ))}
        </Accordion>
      </nav>
      <div className="p-4 border-t border-white/10 mt-auto">
         <div className="flex justify-around items-center">
             <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white flex flex-col h-auto p-2">
                <Link href="/wishlist" onClick={onLinkClick}>
                    <Heart className="h-6 w-6 mb-1" />
                    <span className="text-xs">Wishlist</span>
                </Link>
             </Button>
             <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white flex flex-col h-auto p-2">
                <Link href="/compare" onClick={onLinkClick}>
                    <GitCompare className="h-6 w-6 mb-1" />
                    <span className="text-xs">Compare</span>
                </Link>
             </Button>
             <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white flex flex-col h-auto p-2">
                <Link href="/cart" onClick={onLinkClick}>
                    <ShoppingCart className="h-6 w-6 mb-1" />
                    <span className="text-xs">Cart</span>
                </Link>
             </Button>
         </div>
      </div>
    </div>
  );
}
