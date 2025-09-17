
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const hydrogenBenefits = [
    {
        title: "Heart Attacks & Stroke",
        content: "In clinical trials, hydrogen treatment was found to significantly reduce the area of damaged heart muscle after a heart attack. For stroke patients, daily hydrogen inhalation led to a significant reduction in infarct size and faster normalization of damaged tissue, with patients showing better mobility and ability to perform daily activities."
    },
    {
        title: "Brain & Nerve Diseases",
        content: "Recent studies suggest hydrogen may successfully treat Parkinson’s, Alzheimer’s, and ALS. In one trial with Parkinson’s patients, the group with daily hydrogen intake for 48 weeks showed significantly improved symptoms (including reduced tremors and better mood) compared to the control group, which saw symptoms worsen."
    },
    {
        title: "Gut Health",
        content: "Hydrogen has been shown to diminish chronic inflammation that occurs during inflammatory bowel disorders like ulcerative colitis. A study found that symptoms like diarrhea and weight loss were reduced, and hydrogen provided a general cytoprotective (cell-protecting) effect."
    },
    {
        title: "Asthma & Pulmonary Diseases",
        content: "Oxidative stress is a key factor in asthma. By down-regulating inflammation, molecular hydrogen has been shown to reduce lung resistance, decrease mucus formation, and lower inflammatory markers, leading to improved lung function."
    }
];

export default function HydrogenWaterPage() {
    return (
        <div className="bg-background">
            <section className="py-24 md:py-32 lg:py-40">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Molecular Hydrogen: The Ultimate Antioxidant
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Discover the science behind hydrogen-rich water and its therapeutic potential for over 170 disease models and essentially every organ in the human body.
                        </p>
                    </div>
                </div>
            </section>

             <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">What is Hydrogen Water?</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                Hydrogen water is simply water that contains dissolved molecular hydrogen gas (H₂). This gas is a powerful and selective antioxidant, meaning it can neutralize harmful free radicals in the body without affecting the beneficial ones. Because hydrogen is the smallest molecule in the universe, it can easily penetrate cells, mitochondria, and even the blood-brain barrier to deliver its therapeutic benefits where other antioxidants can't reach.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-12 md:py-20 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Therapeutic Potential of Molecular Hydrogen</h2>
                        <p className="mt-2 mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                           Over 1,000 scientific articles have demonstrated the potential benefits of H₂ across numerous human and animal disease models.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {hydrogenBenefits.map((benefit, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                         <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Why MEDISOUL IONIZERS Lead the Industry</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                MEDISOUL IONIZERS are the world’s most advanced hydrogen-rich water ionizers, backed by medical certifications like GMP, KFDA, and ISO 13485. Their technology is designed to help control and improve conditions related to lifestyle diseases, skin health, physical fitness, digestive health, and general wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

        </div>
    );
}
