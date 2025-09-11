import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProductsPage() {
  const products = placeholderData.products;

  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our curated selection of the world's best water ionizers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
              return (
                <Card key={product.id} className="group overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <Link href={`/products/${product.id}`} className="block relative overflow-hidden">
                      {productImage && (
                        <Image
                          alt={product.name}
                          className="aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          height="250"
                          src={productImage.imageUrl}
                          width="400"
                          data-ai-hint={productImage.imageHint}
                        />
                      )}
                    </Link>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <CardTitle className="text-lg font-bold mt-1 mb-2">
                        <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">&#8377;{product.price.toLocaleString('en-IN')}</span>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost" size="icon" className="rounded-full">
                           <Heart className="h-5 w-5" />
                           <span className="sr-only">Add to Wishlist</span>
                        </Button>
                        <Button size="icon" className="rounded-full">
                          <ShoppingCart className="h-5 w-5" />
                          <span className="sr-only">Add to Cart</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
