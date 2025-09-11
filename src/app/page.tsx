import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Quote } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ScienceIcons } from '@/components/science-icons';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');
  const featuredProducts = placeholderData.products.slice(0, 3);
  const brands = placeholderData.brands;
  const testimonials = placeholderData.testimonials;
  const scienceConcepts = placeholderData.scienceConcepts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <AnimatedSection
              className="flex flex-col justify-center space-y-4"
              animation="animate-scroll-in"
            >
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Pure Water, Pure Life.
                  <br />
                  Discover Ionora.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  India's premier marketplace for water ionizers. Explore top brands, understand the science, and find the perfect match for your healthy lifestyle.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/science">Learn the Science</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection className="flex items-center justify-center" animation="animate-scroll-in" delay={200}>
              {heroImage && (
                <Image
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  data-ai-hint="water glass"
                  height="600"
                  src={heroImage.imageUrl}
                  width="600"
                />
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Trusted by the Best Brands</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've partnered with the leading names in water ionization to bring you a curated selection of the highest quality products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            {brands.map((brand, index) => (
              <div key={brand.id} className="flex justify-center">
                {brand.logoUrl && (
                  <Image
                    alt={brand.name}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    data-ai-hint={`${brand.name} logo`}
                    height="70"
                    src={brand.logoUrl}
                    width="140"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
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
          </div>
        </div>
      </AnimatedSection>
      
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
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredProducts.map((product) => {
              const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
              return (
              <Card key={product.id} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  {productImage && 
                    <Image
                      alt={product.name}
                      className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                      height="250"
                      src={productImage.imageUrl}
                      width="400"
                      data-ai-hint={productImage.imageHint}
                    />
                  }
                  <CardTitle className="pt-4">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold">&#8377;{product.price.toLocaleString('en-IN')}</span>
                    <Button variant="ghost" asChild>
                      <Link href={`/products/${product.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )})}
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real stories from people who have experienced the benefits of ionized water.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
              <Card key={testimonial.id}>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-4">
                    {avatarImage && 
                      <Image
                        alt={testimonial.name}
                        className="rounded-full"
                        height="48"
                        src={avatarImage.imageUrl}
                        width="48"
                        data-ai-hint={avatarImage.imageHint}
                      />
                    }
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
