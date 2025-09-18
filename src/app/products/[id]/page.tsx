import { placeholderData } from "@/lib/placeholder-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = placeholderData.products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-xl text-muted-foreground">{product.brand}</p>
        {/* More product details will go here */}
    </div>
  );
}
