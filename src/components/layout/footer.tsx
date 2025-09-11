import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Droplet, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/why-ionora', label: 'Why Ionora?' },
    { href: '/blog', label: 'Blog' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/distributors', label: 'Business Opportunity' },
    { href: '/affiliate', label: 'Affiliate Program' },
  ],
  learn: [
    { href: '/science', label: 'Science Hub' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/hydrogen-water', label: 'Hydrogen Water' },
    { href: '/compare', label: 'Compare Products' },
  ],
  support: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/support', label: 'Technical Support' },
    { href: '/faq', label: 'FAQs' },
    { href: '/financing', label: 'Financing' },
  ],
};

const socialLinks = [
  { href: '#', icon: Twitter, name: 'Twitter' },
  { href: '#', icon: Facebook, name: 'Facebook' },
  { href: '#', icon: Instagram, name: 'Instagram' },
  { href: '#', icon: Linkedin, name: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/70 text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Droplet className="h-7 w-7 text-primary" />
              <span className="text-2xl font-headline font-bold">IONORA</span>
            </Link>
            <p className="max-w-xs text-muted-foreground">
              India's trusted marketplace for premium water ionizers and wellness products.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Stay updated</h4>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-background" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
              </form>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} IONORA. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
