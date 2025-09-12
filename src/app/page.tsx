
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Quote, ShoppingBag, Star, Droplet, Zap, Gauge, GitCompare } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ScienceIcons } from '@/components/science-icons';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { WaterAnimation } from '@/components/water-animation';
import Autoplay from "embla-carousel-autoplay";
import { SlomoRainAnimation } from '@/components/slomo-rain-animation';


export default function Home() {
  const featuredProducts = placeholderData.products.slice(0, 9);
  const brands = placeholderData.brands;
  const testimonials = placeholderData.testimonials;
  const scienceConcepts = placeholderData.scienceConcepts.slice(0, 4);
  const certifications = placeholderData.certifications;
  
  const leftBrands = brands.slice(0, 4);
  const rightBrands = brands.slice(4, 8);
  
  const featuredProductsPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  
  const testimonialsPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [activeImage, setActiveImage] = React.useState<Record<string, string>>({});

  const handleThumbnailHover = (productId: string, imageId: string) => {
    const mainImage = PlaceHolderImages.find((p) => p.id === imageId);
    if(mainImage) {
        setActiveImage(prev => ({ ...prev, [productId]: mainImage.imageUrl }));
    }
  };


  return (
    <div className="flex flex-col min-h-[100dvh]">
       <div className="wave-separator">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 40"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
          <path
            d="M0,20 C100,40 150,0 250,20 C350,40 400,0 500,20 C600,40 650,0 700,20 V40 H0 Z"
            fill="hsl(var(--primary))"
          ></path>
        </svg>
      </div>
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <WaterAnimation />
        {/* Left Floating Brands */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-16 flex-col gap-6 z-30 flex">
          {leftBrands.map((brand, index) => {
            const delay = index * 150;
            return (
              <Link href={`/products?brand=${encodeURIComponent(brand.name)}`} key={brand.id} className="floating-brand-bubble" style={{ animationDelay: `${delay}ms` }}>
                  {brand.logoUrl && (
                    <Image
                      alt={`${brand.name} logo`}
                      src={brand.logoUrl}
                      width={80}
                      height={80}
                      className="object-contain"
                      data-ai-hint={`${brand.name} logo`}
                    />
                  )}
              </Link>
            )
          })}
        </div>

        {/* Right Floating Brands */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 flex-col gap-6 z-30 flex">
          {rightBrands.map((brand, index) => {
            const delay = (index * 150) + 600;
            return (
              <Link href={`/products?brand=${encodeURIComponent(brand.name)}`} key={brand.id} className="floating-brand-bubble" style={{ animationDelay: `${delay}ms` }}>
                  {brand.logoUrl && (
                    <Image
                      alt={`${brand.name} logo`}
                      src={brand.logoUrl}
                      width={80}
                      height={80}
                      className="object-contain"
                      data-ai-hint={`${brand.name} logo`}
                    />
                  )}
              </Link>
            )
          })}
        </div>

        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-8 text-center pt-16 md:pt-24 lg:pt-32">
            <AnimatedSection
              className="flex flex-col justify-center items-center space-y-4"
              animation="animate-scroll-in"
            >
              <div className="space-y-4 animated-wavy-text-container">
                <h1 className="font-cabin-condensed text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4rem] xl:text-[6rem] font-bold uppercase tracking-tight opacity-0">
                  Pure Water, Pure Life.
                  <br />
                  Discover Ionora.
                </h1>
                <h1 className="animated-wavy-text stroked font-cabin-condensed text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4rem] xl:text-[6rem] font-bold uppercase tracking-tight">
                    Pure Water, Pure Life.
                    <br />
                    Discover Ionora.
                </h1>
                <h1 className="animated-wavy-text filled font-cabin-condensed text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4rem] xl:text-[6rem] font-bold uppercase tracking-tight">
                    Pure Water, Pure Life.
                    <br />
                    Discover Ionora.
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  India's premier marketplace for water ionizers. Explore top brands, understand the science, and find the perfect match for your healthy lifestyle.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/20 text-white border-white/50 hover:bg-white/30">
                  <Link href="/science">Learn the Science</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
               <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Products</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Discover Our Top Ionizers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Handpicked for performance, reliability, and cutting-edge features. Start your journey to better hydration here.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative mt-12" delay={200}>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[featuredProductsPlugin.current]}
              onMouseEnter={featuredProductsPlugin.current.stop}
              onMouseLeave={featuredProductsPlugin.current.reset}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {featuredProducts.map((product) => {
                  const productImage = PlaceHolderImages.find((p) => p.id === product.imageId);
                  const mainImageUrl = activeImage[product.id] || (productImage ? productImage.imageUrl : '');

                  return (
                    <CarouselItem key={product.id} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                        <div className="product-card">
                          <div className="product-card-badge">Featured</div>
                          <Link href={`/products/${product.id}`} className="product-card-tilt">
                            <div className="product-card-img">
                              {mainImageUrl && (
                                <Image
                                  alt={product.name}
                                  src={mainImageUrl}
                                  fill
                                  style={{objectFit: 'cover'}}
                                  data-ai-hint={productImage?.imageHint || 'water ionizer'}
                                />
                              )}
                            </div>
                          </Link>
                          <div className="product-card-info">
                            <div className="flex gap-2 mb-2">
                                {product.imageGallery?.slice(0, 4).map((imgId) => {
                                    const thumb = PlaceHolderImages.find(p => p.id === imgId);
                                    if(!thumb) return null;
                                    return (
                                        <div key={imgId} className="w-1/4 h-16 relative rounded-md overflow-hidden border-2 border-transparent hover:border-primary transition-all" onMouseEnter={() => handleThumbnailHover(product.id, imgId)}>
                                            <Image src={thumb.imageUrl} alt={`${product.name} thumbnail`} fill style={{objectFit: 'cover'}} data-ai-hint={thumb.imageHint} />
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="product-card-cat">{product.brand}</div>
                            <h2 className="product-card-title">{product.name}</h2>
                            
                            <div className="grid grid-cols-3 gap-2 text-center my-4">
                                <div className="flex flex-col items-center">
                                    <Zap className="w-6 h-6 text-primary mb-1"/>
                                    <span className="text-xs font-semibold text-muted-foreground">{product.specs.plates} Plates</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Gauge className="w-6 h-6 text-primary mb-1"/>
                                    <span className="text-xs font-semibold text-muted-foreground">{product.specs.orpRange} ORP</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Droplet className="w-6 h-6 text-primary mb-1"/>
                                    <span className="text-xs font-semibold text-muted-foreground">pH {product.specs.phRange}</span>
                                </div>
                            </div>
                            
                            <div className="product-card-bottom">
                              <div className="product-card-price">
                                <span className="product-card-new">
                                  &#8377;{product.price.toLocaleString('en-IN')}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button asChild variant="outline" size="sm">
                                  <Link href="/compare" className="flex items-center gap-1.5">
                                    <GitCompare size={16} />
                                    <span>Compare</span>
                                  </Link>
                                </Button>
                                <button className="product-card-btn">
                                  <ShoppingBag className="product-card-icon" />
                                </button>
                              </div>
                            </div>
                            <div className="product-card-meta">
                              <div className="product-card-rating">
                                <Star fill="#FFD700" stroke="#FFD700" strokeWidth={0.5} width={16} height={16} />
                                <Star fill="#FFD700" stroke="#FFD700" strokeWidth={0.5} width={16} height={16} />
                                <Star fill="#FFD700" stroke="#FFD700" strokeWidth={0.5} width={16} height={16} />
                                <Star fill="#FFD700" stroke="#FFD700" strokeWidth={0.5} width={16} height={16} />
                                <Star fill="#FFD700" stroke="#FFD700" strokeWidth={0.5} width={16} height={16} />
                                <span className="product-card-rcount">45 Reviews</span>
                              </div>
                              <div className="product-card-stock">In Stock</div>
                            </div>
                          </div>
                        </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 h-12 w-12" />
              <CarouselNext className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 h-12 w-12" />
            </Carousel>
          </AnimatedSection>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <AnimatedSection className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The Science Hub</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Understand the Power of Ionization</h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We believe in empowering our customers with knowledge. Dive into the core concepts behind water ionization.
                    </p>
                </AnimatedSection>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 py-12">
                {scienceConcepts.map((concept, index) => {
                    const Icon = ScienceIcons[concept.icon as keyof typeof ScienceIcons];
                    return (
                        <AnimatedSection key={concept.id} className="grid gap-1 text-center" delay={index * 100}>
                            <div className="flex justify-center items-center mb-2">
                                <div className="bg-background rounded-full p-4 border shadow-sm">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">{concept.title}</h3>
                            <p className="text-sm text-muted-foreground">{concept.description}</p>
                        </AnimatedSection>
                    );
                })}
            </div>
            <AnimatedSection className="flex justify-center">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/science">Explore the Science Hub <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </AnimatedSection>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimatedSection className="flex justify-center">
               <Image
                 alt="Why Ionora"
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                 data-ai-hint="water ionizer machine"
                 height="310"
                 src="https://i.postimg.cc/cCf9hWQS/Gemini-Generated-Image-hapcq1hapcq1hapc.png"
                 width="550"
               />
             </AnimatedSection>
            <div className="space-y-4">
              <AnimatedSection>
                <Link href="/why-ionora">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm transition-colors hover:bg-secondary">Why Ionora?</div>
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Your Guide to a Healthier Life</h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choosing a water ionizer is a significant decision. At Ionora, we empower you with knowledge, choice, and support every step of the way.
                </p>
              </AnimatedSection>
              <ul className="grid gap-4">
                <AnimatedSection asChild delay={300}>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Unparalleled Choice</h3>
                      <p className="text-muted-foreground">Access a wide range of top-tier brands and models, all in one place.</p>
                    </div>
                  </li>
                </AnimatedSection>
                <AnimatedSection asChild delay={400}>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Expert Knowledge</h3>
                      <p className="text-muted-foreground">Our Science Hub breaks down complex topics into easy-to-understand guides.</p>
                    </div>
                  </li>
                </AnimatedSection>
                <AnimatedSection asChild delay={500}>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-bold">Side-by-Side Comparison</h3>
                      <p className="text-muted-foreground">Use our powerful tools to compare products and make an informed decision.</p>
                    </div>
                  </li>
                </AnimatedSection>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py20 lg:py-24 relative overflow-hidden bg-black">
        <SlomoRainAnimation />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AnimatedSection className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-white">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real stories from people who have experienced the benefits of ionized water.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="relative mt-12" delay={200}>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[testimonialsPlugin.current]}
              onMouseEnter={testimonialsPlugin.current.stop}
              onMouseLeave={testimonialsPlugin.current.reset}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => {
                  const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                  return (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <div className="testimonial-card-wrapper">
                        <div className="testimonial-card">
                            <span className="testimonial-icon"><Quote className="h-10 w-10" /></span>
                            <p className="testimonial-description">"{testimonial.quote}"</p>
                            <div className="testimonial-content">
                              {avatarImage && 
                                <div className="testimonial-pic-wrapper">
                                  <Image
                                    alt={testimonial.name}
                                    className="rounded-full"
                                    height="80"
                                    src={avatarImage.imageUrl}
                                    width="80"
                                    data-ai-hint={avatarImage.imageHint}
                                  />
                                </div>
                              }
                              <h3 className="testimonial-title !text-white">{testimonial.name}</h3>
                              <span className="testimonial-post !text-white/80">{testimonial.location}</span>
                            </div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            </Carousel>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AnimatedSection className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Quality Assured</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Certifications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are committed to the. The customer support was excellent!highest standards of quality and safety. Our products are backed by leading industry certifications.
              </p>
            </AnimatedSection>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-center gap-8 py-12 sm:grid-cols-3 md:gap-12 lg:grid-cols-4">
            {certifications.map((cert, index) => {
              return (
                <AnimatedSection key={cert.id} className="flex flex-col items-center justify-center gap-2" delay={index * 100}>
                  {(() => {
                    const certImage = PlaceHolderImages.find((p) => p.id === cert.imageId);
                    return (
                      <>
                        {certImage && (
                          <Image
                            alt={cert.title}
                            className="aspect-[4/3] overflow-hidden rounded-lg object-contain"
                            height="120"
                            src={certImage.imageUrl}
                            width="160"
                            data-ai-hint={certImage.imageHint}
                          />
                        )}
                        <p className="text-sm font-medium text-muted-foreground">{cert.title}</p>
                      </>
                    );
                  })()}
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/certifications">View All Certifications <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
}
