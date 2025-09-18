
"use client";

import { useComparison } from "@/hooks/use-comparison";
import { placeholderData } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { X, GitCompare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ComparisonBar() {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();
  const productsToCompare = placeholderData.products.filter(p => comparisonList.includes(p.id));

  if (comparisonList.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background/80 backdrop-blur-lg border-t border-x rounded-t-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-lg hidden sm:block">Compare Products ({comparisonList.length}/4)</h3>
              <div className="flex items-center gap-3">
                {productsToCompare.map(product => {
                    const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
                    return(
                        <div key={product.id} className="relative group">
                            {productImage && (
                                <div className="w-12 h-12 relative rounded-md overflow-hidden">
                                    <Image
                                        src={productImage.imageUrl}
                                        alt={product.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        data-ai-hint={productImage.imageHint}
                                    />
                                </div>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-destructive/80 text-destructive-foreground hover:bg-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeFromComparison(product.id)}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </div>
                    )
                })}
                 {Array.from({ length: 4 - productsToCompare.length }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="w-12 h-12 rounded-md bg-secondary border-2 border-dashed" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild className={cn(comparisonList.length < 2 && "pointer-events-none opacity-50")}>
                <Link href="/compare">
                  <GitCompare className="mr-2 h-4 w-4" /> Compare Now
                </Link>
              </Button>
              <Button variant="outline" onClick={clearComparison}>
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
