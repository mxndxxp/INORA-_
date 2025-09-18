
"use client";

import { placeholderData } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function AffiliateDashboardPageClient({ affiliateId }: { affiliateId: string }) {
  const { toast } = useToast();
  const products = placeholderData.products;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Your affiliate link is ready to be shared.",
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Could not copy the link to your clipboard.",
      });
    });
  };

  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-headline">Your Affiliate Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Welcome, <span className="font-semibold text-primary">{affiliateId}</span>!
        </p>
        <p className="max-w-3xl">
          Here are your unique affiliate links. Share these links to earn a commission on every sale you refer. Start sharing and earning today!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Product Links</CardTitle>
          <CardDescription>
            Copy the links below and share them on your blog, social media, or website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Your Affiliate Link</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                const affiliateLink = `https://ionora.com/products/${product.id}?ref=${affiliateId}`;
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <Input type="text" readOnly value={affiliateLink} className="bg-muted"/>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="icon" onClick={() => copyToClipboard(affiliateLink)}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy link</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


export default async function AffiliateDashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AffiliateDashboardPageClient affiliateId={id} />;
}
