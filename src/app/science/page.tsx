
import { ScienceExplanationClient } from './science-explanation-client';
import { AnimatedSection } from '@/components/animated-section';

export default function SciencePage() {
  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Why Water Ionizers?
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Unlock the science behind water ionization. We break down complex topics into simple, understandable explanations. 
              Learn about Electrolysis, ORP, pH, Microclustering, Hydrogen Rich water, Oxidation and Oxidative Stress, and Free Radicals.
              For more information, please refer to <a href="https://www.tyent.co.in/why-water-ionizer" target="_blank" rel="noopener noreferrer" className="text-primary underline">Tyent India</a>.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-6">What is a Water Ionizer?</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                    The electrolyzed water generating device counteracts positive and negative charges in an electrolytic cell and uses a direct current power supply to the electrode to generate electrolyzed water.
                </p>
                <p>
                    When there is a septum (or membrane) between the cathode and anode, or without, and whether or not there is the presence of an electrolyte such as salt determines what kind of electrolyzed water generating device it is. Our company produces an electrolyzed water generating device that creates strong acidic and alkaline water without the use of an electrolyte such as salt.
                </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-6">Ionized(Electrolyzed) water Generating Principle:</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                    In water there is combination of many different elements such as Ca, Mg, Na, K, Cl,S and I. If you ionize this water alkaline ions(minerals such as Ca,Mg,K and Na) will attract to the (-) pole and acidic ions(Cl,S,and P ) will attract to the (+) pole. Also, in the ionization process all the minerals will be in the colloidal state and the water molecule clusters will be broken down in size ( cluster/about 60-70 HZ) which will absorb more readily into the cells of the body facilitating better absorption of minerals as well.
                </p>
                <p>
                    Water always disassembles weakly to hydrogen and hydroxide ions. When water is electrolyzed the hydrogen ion receives an electron from the cathode and become an active hydrogen. As this metal colloid(mineral) adheres to the active hydrogen the active hydrogen becomes stabilized and combines with active oxygen in the body forming water and thus removing the active oxygen from the body.
                </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ScienceExplanationClient />
    </div>
  );
}
