import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShieldCheck, Microscope, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyIonoraPage() {
    const features = [
        {
          icon: <ShieldCheck className="h-10 w-10 text-primary" />,
          title: 'Trusted Quality & Curation',
          description: 'We don\'t just sell products; we endorse a lifestyle of wellness. Every ionizer on our platform is handpicked and rigorously vetted for performance, durability, and safety. We only partner with reputable brands that meet our high standards, so you can be confident you\'re investing in the best.',
        },
        {
          icon: <Microscope className="h-10 w-10 text-primary" />,
          title: 'Expert Guidance & Education',
          description: 'The world of water ionization can be complex. Our mission is to make it simple. Through our comprehensive Science Hub, detailed product comparisons, and unbiased reviews, we empower you with the knowledge to make an informed decision that’s right for your health goals and budget.',
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: 'Unparalleled Customer Support',
          description: 'Your journey with us doesn’t end at checkout. We provide dedicated, India-based customer support to assist with installation, maintenance, and any questions you have. We\'re your long-term partner in health, ensuring you get the most out of your investment for years to come.',
        },
    ];

    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

    return (
        <div className="bg-background">
            <section className="relative bg-secondary/30 py-24 md:py-32 lg:py-40">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-start space-y-4 text-left">
                            <AnimatedSection>
                                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                    Why Choose Ionora?
                                </h1>
                                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                                    We are more than just a marketplace. We are your trusted partner in the journey towards better health and hydration, specifically for the Indian consumer.
                                </p>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection className="flex justify-center" delay={200}>
                            {heroImage &&
                                <Image
                                    alt="Clean water"
                                    className="rounded-xl shadow-2xl"
                                    height={400}
                                    width={600}
                                    src={heroImage.imageUrl}
                                    data-ai-hint={heroImage.imageHint}
                                />
                            }
                        </AnimatedSection>
                    </div>
                </div>
            </section>
            
            <AnimatedSection className="py-12 md:py-20 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Promise to You</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            At Ionora, we are committed to three core principles that guide everything we do.
                        </p>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:grid-cols-1 lg:max-w-5xl mt-12">
                        {features.map((feature, index) => (
                            <AnimatedSection key={feature.title} className="grid gap-6 md:grid-cols-5 items-center" delay={index * 150}>
                                <div className="flex justify-center md:col-span-1">
                                    <div className="bg-background rounded-full p-5 border shadow-lg">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="text-center md:text-left md:col-span-4">
                                    <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                                    <p className="mt-2 text-muted-foreground text-lg">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-4">
                         <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Ready to Find Your Perfect Ionizer?</h2>
                         <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
                            Let us help you navigate the options and find the best water ionizer for your home and family.
                         </p>
                         <div className="flex justify-center gap-4 pt-4">
                            <Button asChild size="lg">
                                <Link href="/products">Explore All Products</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/compare">Compare Models</Link>
                            </Button>
                         </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
