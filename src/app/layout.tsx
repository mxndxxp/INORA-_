import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ComparisonProvider } from '@/hooks/use-comparison';
import { ComparisonBar } from '@/components/comparison-bar';

export const metadata: Metadata = {
  title: 'IONORA: Water Ionizer Marketplace',
  description: 'India\'s premier trusted online destination for water ionizers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Cabin+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <ComparisonProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ComparisonBar />
          <Toaster />
        </ComparisonProvider>
      </body>
    </html>
  );
}
