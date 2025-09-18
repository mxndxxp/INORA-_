
"use client";

import { useComparison } from "@/hooks/use-comparison";
import { placeholderData } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export default function ComparePage() {
  const { comparisonList, removeFromComparison } = useComparison();
  const productsToCompare = placeholderData.products.filter(p => comparisonList.includes(p.id));

  const features = [
    { key: "price", name: "Price" },
    { key: "phRange", name: "pH Range" },
    { key: "orpRange", name: "ORP Range" },
    { key: "plates", name: "Plates" },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <AnimatedSection className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold font-headline">Compare Products</h1>
            <p className="max-w-2xl text-muted-foreground">
                Side-by-side comparison of your selected water ionizers. Compare features to find the perfect fit for your needs.
            </p>
        </AnimatedSection>

      {productsToCompare.length > 0 ? (
        <AnimatedSection className="mt-12 overflow-x-auto" delay={200}>
            <Table className="min-w-full border-collapse">
                <thead className="bg-secondary/30">
                    <TableRow>
                        <TableCell className="w-1/4 p-4 font-semibold text-lg border-r">Features</TableCell>
                        {productsToCompare.map(product => {
                            const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
                            return (
                                <TableCell key={product.id} className="w-1/4 p-4 text-center border-r last:border-r-0">
                                    <div className="relative">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute top-0 right-0 h-7 w-7 rounded-full bg-background/50 hover:bg-background/80 z-10"
                                            onClick={() => removeFromComparison(product.id)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                        {productImage && (
                                            <div className="w-full h-48 relative mb-2 rounded-lg overflow-hidden">
                                                <Image
                                                    src={productImage.imageUrl}
                                                    alt={product.name}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    data-ai-hint={productImage.imageHint}
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-bold text-lg font-headline">
                                            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">{product.name}</Link>
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                                    </div>
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </thead>
                <TableBody>
                    {features.map(feature => (
                        <TableRow key={feature.key} className="border-b">
                            <TableCell className="p-4 font-medium border-r">{feature.name}</TableCell>
                            {productsToCompare.map(product => (
                                <TableCell key={product.id} className="p-4 text-center border-r last:border-r-0">
                                    {feature.key === 'price'
                                        ? `₹${product.price.toLocaleString('en-IN')}`
                                        : product.specs[feature.key as keyof typeof product.specs]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    <TableRow>
                         <TableCell className="p-4 font-medium border-r">Description</TableCell>
                         {productsToCompare.map(product => (
                            <TableCell key={product.id} className="p-4 text-center border-r last:border-r-0 text-sm text-muted-foreground">
                                {product.description}
                            </TableCell>
                        ))}
                    </TableRow>
                     <TableRow>
                        <TableCell className="p-4 font-medium border-r"></TableCell>
                         {productsToCompare.map(product => (
                            <TableCell key={product.id} className="p-4 text-center border-r last:border-r-0">
                               <Button>
                                    <ShoppingBag className="mr-2" /> Add to Cart
                                </Button>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </AnimatedSection>
      ) : (
        <AnimatedSection className="text-center py-20" delay={200}>
          <h2 className="text-2xl font-bold font-headline mb-2">Your Comparison List is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Add up to 4 products from our shop to see a side-by-side comparison.
          </p>
          <Button asChild>
            <Link href="/products">Go to Products</Link>
          </Button>
        </AnimatedSection>
      )}
    </div>
  );
}
