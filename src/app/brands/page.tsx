import Image from 'next/image';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export default function BrandsPage() {
  const brands = placeholderData.brands;

  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Brands
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We partner with the world's leading water ionizer brands to bring you the best in quality and innovation.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((brand, index) => {
              const brandImage = PlaceHolderImages.find((p) => p.id === brand.logoId);
              return (
                <AnimatedSection key={brand.id} delay={index * 100}>
                  <Link href={`/products?brand=${encodeURIComponent(brand.name)}`} className="group block h-full">
                    <Card className="flex h-full flex-col items-center justify-between overflow-hidden rounded-lg p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        {brandImage && (
                          <div className="relative mb-6 h-24 w-48">
                            <Image
                              alt={`${brand.name} logo`}
                              className="object-contain"
                              fill
                              src={brandImage.imageUrl}
                              data-ai-hint={`${brand.name} logo`}
                            />
                          </div>
                        )}
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl font-bold">{brand.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                          <p className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
                            View Products <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </p>
                        </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
