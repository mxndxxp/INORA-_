
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Quote, ShoppingBag, Star } from 'lucide-react';
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
import { RaindropAnimation } from '@/components/raindrop-animation';
import Autoplay from "embla-carousel-autoplay";


export default function Home() {
  const featuredProducts = placeholderData.products.slice(0, 9);
  const brands = placeholderData.brands;
  const testimonials = placeholderData.testimonials;
  const scienceConcepts = placeholderData.scienceConcepts.slice(0, 4);
  
  const leftBrands = brands.slice(0, 4);
  const rightBrands = brands.slice(4, 8);
  
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <WaterAnimation />
        
        {/* Left Floating Brands */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-16 hidden lg:flex flex-col gap-6 z-10">
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
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 hidden lg:flex flex-col gap-6 z-10">
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
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-white shadow-lg">
                  Pure Water, Pure Life.
                  <br />
                  Discover Ionora.
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
               <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Products</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Discover Our Top Ionizers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Handpicked for performance, reliability, and cutting-edge features. Start your journey to better hydration here.
              </p>
            </div>
          </div>
          <div className="relative mt-12">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-full"
            >
              <CarouselContent className="-ml-8">
                {featuredProducts.map((product) => {
                  const productImage = PlaceHolderImages.find((p) => p.id === product.imageId);
                  return (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-8">
                        <div className="product-card">
                          <div className="product-card-badge">Featured</div>
                          <Link href={`/products/${product.id}`} className="product-card-tilt">
                            <div className="product-card-img">
                              {productImage && (
                                <Image
                                  alt={product.name}
                                  src={productImage.imageUrl}
                                  fill
                                  style={{objectFit: 'cover'}}
                                  data-ai-hint={productImage.imageHint}
                                />
                              )}
                            </div>
                          </Link>
                          <div className="product-card-info">
                            <div className="product-card-cat">{product.brand}</div>
                            <h2 className="product-card-title">{product.name}</h2>
                            <p className="product-card-desc">{product.description}</p>
                            <div className="product-card-feats">
                              <span className="product-card-feat">{product.specs.plates} Plates</span>
                              <span className="product-card-feat">pH {product.specs.phRange}</span>
                              <span className="product-card-feat">{product.specs.orpRange} ORP</span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-card-price">
                                <span className="product-card-new">
                                  &#8377;{product.price.toLocaleString('en-IN')}
                                </span>
                              </div>
                              <button className="product-card-btn">
                                <span>Add to Cart</span>
                                <ShoppingBag className="product-card-icon" />
                              </button>
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
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The Science Hub</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Understand the Power of Ionization</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We believe in empowering our customers with knowledge. Dive into the core concepts behind water ionization.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 py-12">
                {scienceConcepts.map((concept) => {
                    const Icon = ScienceIcons[concept.icon as keyof typeof ScienceIcons];
                    return (
                        <div key={concept.id} className="grid gap-1 text-center">
                            <div className="flex justify-center items-center mb-2">
                                <div className="bg-background rounded-full p-4 border shadow-sm">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">{concept.title}</h3>
                            <p className="text-sm text-muted-foreground">{concept.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/science">Explore the Science Hub <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
               <Image
                 alt="Why Ionora"
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                 data-ai-hint="happy family drinking water"
                 height="310"
                 src="https://picsum.photos/seed/ionora-why/550/310"
                 width="550"
               />
             </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Ionora?</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Your Guide to a Healthier Life</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choosing a water ionizer is a significant decision. At Ionora, we empower you with knowledge, choice, and support every step of the way.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Unparalleled Choice</h3>
                    <p className="text-muted-foreground">Access a wide range of top-tier brands and models, all in one place.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Expert Knowledge</h3>
                    <p className="text-muted-foreground">Our Science Hub breaks down complex topics into easy-to-understand guides.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">Side-by-Side Comparison</h3>
                    <p className="text-muted-foreground">Use our powerful tools to compare products and make an informed decision.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py20 lg:py-24 relative overflow-hidden bg-foreground">
        <RaindropAnimation />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-background">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real stories from people who have experienced the benefits of ionized water.
              </p>
            </div>
          </div>
          <div className="relative mt-12">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => {
                  const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                  return (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <div className="h-full p-px rounded-lg bg-gradient-to-b from-white/20 to-transparent">
                        <Card className="h-full bg-background/10 backdrop-blur-md border-white/20 shadow-xl">
                          <CardContent className="p-6 text-center flex flex-col items-center">
                            {avatarImage && 
                              <Image
                                alt={testimonial.name}
                                className="rounded-full border-4 border-white/20 shadow-lg mb-4"
                                height="80"
                                src={avatarImage.imageUrl}
                                width="80"
                                data-ai-hint={avatarImage.imageHint}
                              />
                            }
                            <Quote className="h-8 w-8 text-primary" />
                            <p className="mt-4 text-base text-background/90 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="mt-6">
                              <p className="font-bold text-background text-lg">{testimonial.name}</p>
                              <p className="text-sm text-background/70">{testimonial.location}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
              <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            </Carousel>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
