'use server';
/**
 * @fileOverview Flow for generating simplified explanations of scientific concepts related to water ionization.
 *
 * - generateScienceExplanation - A function that generates explanations for given scientific concepts.
 * - GenerateScienceExplanationInput - The input type for the generateScienceExplanation function.
 * - GenerateScienceExplanationOutput - The return type for the generateScienceExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateScienceExplanationInputSchema = z.object({
  concept: z.string().describe('The scientific concept to explain (e.g., electrolysis, ORP, pH).'),
});
export type GenerateScienceExplanationInput = z.infer<typeof GenerateScienceExplanationInputSchema>;

const GenerateScienceExplanationOutputSchema = z.object({
  explanation: z.string().describe('A simplified explanation of the scientific concept.'),
  diagramDataUri: z
    .string()
    .optional()
    .describe(
      'A data URI containing a diagram or illustration of the concept, suitable for display in an img tag.'
    ),
});
export type GenerateScienceExplanationOutput = z.infer<typeof GenerateScienceExplanationOutputSchema>;

export async function generateScienceExplanation(
  input: GenerateScienceExplanationInput
): Promise<GenerateScienceExplanationOutput> {
  return generateScienceExplanationFlow(input);
}

const generateExplanationPrompt = ai.definePrompt({
  name: 'generateExplanationPrompt',
  input: {schema: GenerateScienceExplanationInputSchema},
  output: {schema: GenerateScienceExplanationOutputSchema},
  prompt: `You are an expert science communicator, skilled at explaining complex scientific concepts in a simple and easy-to-understand manner.

  Please provide a clear and concise explanation of the following concept related to water ionization:

  Concept: {{{concept}}}

  In addition to the explanation, suggest whether a simple diagram or illustration would help to further clarify the concept. If so, provide a text prompt suitable for generating such an image using an image generation model.
  The diagramDataUri parameter is optional, only populate it when generating a visual aid would improve the explanation.
  Do not include information or details that are not directly related to water ionization.
  Keep the explanation concise, under 200 words.
  `,
});

const generateScienceExplanationFlow = ai.defineFlow(
  {
    name: 'generateScienceExplanationFlow',
    inputSchema: GenerateScienceExplanationInputSchema,
    outputSchema: GenerateScienceExplanationOutputSchema,
  },
  async input => {
    const {output} = await generateExplanationPrompt(input);
    return output!;
  }
);
