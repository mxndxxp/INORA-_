
"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Search, Droplet, Zap, Gauge, Star, Heart, GitCompare } from 'lucide-react';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useSearchParams } from 'next/navigation';
import { useComparison } from '@/hooks/use-comparison';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const brandQuery = searchParams.get('brand');
  const { comparisonList, addToComparison, removeFromComparison } = useComparison();
  const { toast } = useToast();

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

  const selectedBrandDetails = useMemo(() => {
    if (selectedBrands.length === 1) {
      return placeholderData.brands.find(b => b.name === selectedBrands[0]);
    }
    return null;
  }, [selectedBrands]);


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

  const handleCompareClick = (productId: string) => {
    const isAdded = comparisonList.includes(productId);
    if (isAdded) {
      removeFromComparison(productId);
      toast({
        title: "Removed from Compare",
        description: "Product removed from your comparison list.",
      });
    } else {
      if (comparisonList.length >= 4) {
        toast({
          variant: "destructive",
          title: "Comparison Limit Reached",
          description: "You can only compare up to 4 products at a time.",
        });
      } else {
        addToComparison(productId);
        toast({
          title: "Added to Compare",
          description: "Product added to your comparison list.",
        });
      }
    }
  };


  return (
    <div className="bg-background">
      <section 
        className="py-24 md:py-32 lg:py-40"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)) 20px, hsl(var(--background)) 20px, hsl(var(--background)) 40px)`
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Products
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
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
              {selectedBrandDetails && (
                <div className="mb-8 p-6 bg-secondary/50 rounded-lg">
                  <h2 className="text-2xl font-bold font-headline mb-2">About {selectedBrandDetails.name}</h2>
                  <p className="text-muted-foreground">{selectedBrandDetails.description}</p>
                </div>
              )}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product) => {
                    const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
                    const isAddedToCompare = comparisonList.includes(product.id);
                    return (
                        <div key={product.id} className="product-card">
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
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className={cn("flex items-center gap-1.5", isAddedToCompare && "border-primary text-primary")}
                                    onClick={() => handleCompareClick(product.id)}
                                >
                                  <GitCompare size={16} />
                                  <span>{isAddedToCompare ? 'Added' : 'Compare'}</span>
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
