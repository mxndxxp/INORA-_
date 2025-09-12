'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Droplet, Twitter, Facebook, Instagram, Linkedin, Send, MapPin, Phone, ArrowUp } from 'lucide-react';
import {useEffect, useState} from "react";
import { AnimatedSection } from '../animated-section';

const footerLinks = {
  company: [
    { href: '/why-ionora', label: 'Why Ionora?' },
    { href: '/blog', label: 'Blog' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/distributors', label: 'Business Opportunity' },
    { href: '/affiliate', label: 'Affiliate Program' },
  ],
  learn: [
    { href: '/science', label: 'Why Water Ionizers?' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/hydrogen-water', label: 'Hydrogen Water' },
    { href: '/compare', label: 'Compare Products' },
    { href: '/certifications', label: 'Certifications' },
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
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);


  return (
      <AnimatedSection asChild>
        <footer id="dk-footer" className="dk-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="dk-footer-box-info">
                  <Link href="/" className="footer-logo">
                      <div className="flex items-center gap-2">
                          <Droplet className="h-10 w-10 text-primary" />
                          <span className="text-4xl font-headline font-bold text-foreground">IONORA</span>
                      </div>
                  </Link>
                  <p className="footer-info-text">
                    India's trusted marketplace for premium water ionizers and wellness products.
                  </p>
                  <div className="footer-social-link">
                    <h3>Follow us</h3>
                    <ul>
                      {socialLinks.map(link => (
                          <li key={link.name}>
                              <a href={link.href}>
                                  <link.icon size={20} />
                              </a>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-us">
                      <div className="contact-icon">
                        <MapPin />
                      </div>
                      <div className="contact-info">
                        <h3>Ionora HQ</h3>
                        <p>123 Wellness Way, Jaipur</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-us contact-us-last">
                      <div className="contact-icon">
                        <Phone />
                      </div>
                      <div className="contact-info">
                        <h3>+91 987 654 3210</h3>
                        <p>Give us a call</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget footer-left-widget">
                      <div className="section-heading">
                        <h3>Useful Links</h3>
                        <span className="animate-border border-black"></span>
                      </div>
                      <div className="flex">
                          <ul>
                            {footerLinks.company.map(link => (
                              <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                          <ul>
                            {footerLinks.learn.map(link => (
                              <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget">
                      <div className="section-heading">
                        <h3>Contact Us</h3>
                        <span className="animate-border border-black"></span>
                      </div>
                      <p>Have a question? Send us a message.</p>
                      <form action="#">
                        <div className="form-row">
                          <div className="col dk-footer-form">
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <button type="submit">
                              <Send />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <span>Copyright © {new Date().getFullYear()}, All Right Reserved IONORA</span>
                </div>
                <div className="col-md-6">
                  <div className="copyright-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isVisible && (
              <div id="back-to-top" className="back-to-top">
                  <button className="btn btn-dark" title="Back to Top" onClick={scrollToTop} style={{display: 'block'}}>
                      <ArrowUp />
                  </button>
              </div>
          )}
        </footer>
      </AnimatedSection>
  );
}
