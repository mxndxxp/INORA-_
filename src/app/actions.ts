"use server";

import { generateScienceExplanation, GenerateScienceExplanationOutput } from "@/ai/flows/generate-science-explanations";

export async function getScienceExplanation(concept: string): Promise<GenerateScienceExplanationOutput | { error: string }> {
  try {
    const result = await generateScienceExplanation({ concept });
    return result;
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate explanation. Please try again." };
  }
}
