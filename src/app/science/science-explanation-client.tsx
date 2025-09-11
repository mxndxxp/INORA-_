"use client";

import { useState, useTransition } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderData } from '@/lib/placeholder-data';
import type { ScienceConcept } from '@/lib/types';
import { ScienceIcons } from '@/components/science-icons';
import { cn } from '@/lib/utils';
import { getScienceExplanation } from '@/app/actions';
import type { GenerateScienceExplanationOutput } from '@/ai/flows/generate-science-explanations';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

export function ScienceExplanationClient() {
  const [selectedConcept, setSelectedConcept] = useState<ScienceConcept | null>(null);
  const [explanation, setExplanation] = useState<GenerateScienceExplanationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleConceptClick = (concept: ScienceConcept) => {
    setSelectedConcept(concept);
    setExplanation(null);
    setError(null);
    startTransition(async () => {
      const result = await getScienceExplanation(concept.concept);
      if ('error' in result) {
        setError(result.error);
      } else {
        setExplanation(result);
      }
    });
  };

  return (
    <section className="py-12 md:py-20 lg:pb-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {placeholderData.scienceConcepts.map((concept) => {
            const Icon = ScienceIcons[concept.icon as keyof typeof ScienceIcons];
            return (
              <Card
                key={concept.id}
                onClick={() => handleConceptClick(concept)}
                className={cn(
                  'cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                  selectedConcept?.id === concept.id && 'ring-2 ring-primary shadow-lg'
                )}
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="bg-secondary/50 rounded-full p-4 border shadow-sm">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">{concept.title}</h3>
                  <p className="text-sm text-muted-foreground">{concept.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 md:mt-20">
          {isPending && (
            <div className="flex flex-col items-center justify-center gap-4 text-center p-8 min-h-[300px]">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <h3 className="text-xl font-semibold">Generating Explanation...</h3>
                <p className="text-muted-foreground">Our AI is crafting a simple explanation for you. Please wait a moment.</p>
            </div>
          )}
          {error && (
             <Alert variant="destructive" className="max-w-3xl mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
             </Alert>
          )}
          {explanation && selectedConcept && (
             <Card className="max-w-4xl mx-auto overflow-hidden animate-in fade-in duration-500">
                <CardContent className="p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-headline">{selectedConcept.title}</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                {explanation.explanation}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            {explanation.diagramDataUri ? (
                                <Image 
                                    src={explanation.diagramDataUri} 
                                    alt={`Diagram for ${selectedConcept.title}`} 
                                    width={500}
                                    height={300}
                                    className="rounded-lg border shadow-sm object-cover"
                                    data-ai-hint="diagram chart"
                                />
                            ) : (
                              <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-secondary/50 rounded-lg border border-dashed">
                                <p className="text-muted-foreground">No diagram available for this concept.</p>
                              </div>
                            )}
                        </div>
                    </div>
                </CardContent>
             </Card>
          )}
          {!isPending && !explanation && !error && (
            <div className="text-center p-8 min-h-[300px] flex items-center justify-center">
                <h3 className="text-xl text-muted-foreground">Select a concept above to learn more about it.</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
