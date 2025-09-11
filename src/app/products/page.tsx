"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart, Search } from 'lucide-react';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const brandQuery = searchParams.get('brand');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandQuery ? [brandQuery] : []);
  const [filteredProducts, setFilteredProducts] = useState(placeholderData.products);

  const { minPrice, maxPrice } = useMemo(() => {
    const prices = placeholderData.products.map(p => p.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, []);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [isMounted, setIsMounted] = useState(false);

  const allBrands = useMemo(() => {
    const brands = new Set(placeholderData.products.map(p => p.brand));
    return Array.from(brands);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (brandQuery && !selectedBrands.includes(brandQuery)) {
      setSelectedBrands(prev => [...prev, brandQuery]);
    }
  }, [brandQuery, selectedBrands]);

  useEffect(() => {
    const results = placeholderData.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesBrand && matchesPrice;
    });
    setFilteredProducts(results);
  }, [searchTerm, selectedBrands, priceRange]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value as [number, number]);
  };


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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-xl font-headline font-bold mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-headline font-bold mb-4">Brands</h3>
                  <div className="space-y-3">
                    {allBrands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => handleBrandChange(brand)}
                        />
                        <Label htmlFor={`brand-${brand}`} className="cursor-pointer">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {isMounted && (
                  <div>
                    <h3 className="text-xl font-headline font-bold mb-4">Price Range</h3>
                    <div className="space-y-4">
                       <Slider
                          min={minPrice}
                          max={maxPrice}
                          step={1000}
                          value={priceRange}
                          onValueChange={handlePriceChange}
                          className="w-full"
                        />
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>&#8377;{priceRange[0].toLocaleString('en-IN')}</span>
                        <span>&#8377;{priceRange[1].toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <main className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product) => {
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
                        <CardContent className="p-4 flex flex-col flex-grow">
                          <p className="text-sm text-muted-foreground">{product.brand}</p>
                          <CardTitle className="text-lg font-bold mt-1 mb-2 flex-grow">
                              <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
                          </CardTitle>
                          <div className="flex items-center justify-between mt-auto pt-2">
                            <span className="text-2xl font-bold">&#8377;{product.price.toLocaleString('en-IN')}</span>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <Search className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-bold font-headline">No Products Found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
