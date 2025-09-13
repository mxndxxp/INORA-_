
"use client";

import type { Brand } from "@/lib/types";
import Link from "next/link";
import React from 'react';

type BrandBubbleProps = {
    brand: Brand;
    style?: React.CSSProperties;
};

export function BrandBubble({ brand, style }: BrandBubbleProps) {
    if (!brand) return null;
    return (
        <Link 
            href={`/products?brand=${encodeURIComponent(brand.name)}`} 
            className="floating-brand-bubble" 
            style={style}
        >
            <span className="relative z-10 text-center font-bold text-sm leading-tight text-white/90">
                {brand.name}
            </span>
        </Link>
    );
}
