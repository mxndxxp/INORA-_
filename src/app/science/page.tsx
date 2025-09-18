
import { ScienceExplanationClient } from './science-explanation-client';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function SciencePage() {
  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Science of Water Ionization
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Unlock the science behind water ionization. We break down complex topics into simple, understandable explanations to empower your health decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection className="space-y-4">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">What is a Water Ionizer?</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                    A water ionizer is an appliance that uses electrolysis to raise the pH level of drinking water, separating the incoming water stream into alkaline and acidic components. The alkaline water is intended for drinking and cooking, while the acidic water has various uses for cleaning and skincare. Water ionizers have been used in Japan and other parts of Asia for over 40 years and are certified by the Korean and Japanese Ministries of Health as approved medical devices.
                </p>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" delay={150}>
                <h3 className="text-2xl font-headline font-bold">How It Works: A Two-Step Process</h3>
                <Card>
                    <CardContent className="p-6 grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h4 className="font-bold text-xl">1. Filtration</h4>
                            <p className="text-muted-foreground">
                                Incoming tap water first passes through advanced multi-stage filters. These are designed to remove a wide range of impurities like chlorine, sediment, heavy metals, and volatile organic compounds. Some systems, like those from LIFE IONIZERS, incorporate Vitamin C ceramic to effectively neutralize chlorine.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-xl">2. Electrolysis</h4>
                            <p className="text-muted-foreground">
                                The filtered water then flows into a chamber containing electrically charged plates (typically platinum-coated titanium). This process separates the water into alkaline water (rich in OH⁻ ions) and acidic water (rich in H⁺ ions), and significantly alters the oxidation-reduction potential (ORP), making the alkaline water a powerful antioxidant.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" delay={300}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Understanding pH and ORP</h2>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-xl mb-2">The pH Scale: A Measure of Acidity/Alkalinity</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            The pH scale, ranging from 0 to 14, measures the concentration of hydrogen ions (H+) in a substance. A pH of 7 is neutral. Anything below 7 is acidic, and anything above 7 is alkaline. Each whole number on the scale represents a tenfold difference. For example, water at pH 8 has ten times more alkaline hydroxyl ions (OH-) than hydrogen ions (H+). This property is key to understanding how alkaline water can help balance the body's acidity.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2">ORP: The Antioxidant Power</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            ORP (Oxidation-Reduction Potential) measures water's ability to act as an antioxidant. Measured in millivolts (mV), a negative ORP indicates antioxidant potential (the ability to donate electrons), while a positive ORP indicates oxidative potential (the tendency to take electrons). Ionized alkaline water is characterized by its negative ORP (e.g., -200mV to -800mV), making it a powerful agent in neutralizing damaging free radicals in the body.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="space-y-4" delay={450}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Free Radicals, Oxidation, and Your Health</h2>
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-xl mb-2">What is Oxidation?</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Oxidation is a chemical reaction involving the loss of electrons. It's the same process that causes an apple to turn brown or metal to rust. In the body, this process is driven by unstable molecules called free radicals.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">What are Free Radicals?</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Free radicals are highly reactive atoms with an unpaired electron. To become stable, they aggressively steal electrons from other molecules in your body, such as DNA, proteins, and cell membranes. This theft causes a chain reaction of cellular damage. While the body produces some free radicals naturally, modern life exposes us to an excess from pollution, poor diet, stress, and toxins.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Oxidative Stress: The Imbalance</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                           Oxidative stress occurs when there's an overload of free radicals and not enough antioxidants to neutralize them. This chronic imbalance is a key factor in the aging process and contributes to a wide range of health issues, including heart disease, diabetes, and neurodegenerative conditions.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-4" delay={600}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">The Power of Antioxidants & Micro-Clustering</h2>
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-xl mb-2">Antioxidants: The Body's Defense</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                           Antioxidants are molecules that can safely donate an electron to a free radical, neutralizing it and stopping the chain of cellular damage. Ionized alkaline water is a potent source of antioxidants, primarily in the form of molecular hydrogen (H₂). This helps your body combat oxidative stress and protect itself from damage.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2">Micro-Clustering: Superior Hydration</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                           The electrolysis process restructures water into smaller molecular clusters. While tap water molecules cluster in large groups (around 140 Hz), ionized water forms "micro-clusters" (around 60-70 Hz). This smaller size allows the water to permeate your cells more easily, leading to superior hydration, more efficient nutrient delivery, and more effective flushing of cellular waste.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      <ScienceExplanationClient />
    </div>
  );
}
