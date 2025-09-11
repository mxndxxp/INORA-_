import { ScienceExplanationClient } from './science-explanation-client';

export default function SciencePage() {
  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Science Hub
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Unlock the science behind water ionization. We break down complex topics into simple, understandable explanations.
            </p>
          </div>
        </div>
      </section>

      <ScienceExplanationClient />
    </div>
  );
}
