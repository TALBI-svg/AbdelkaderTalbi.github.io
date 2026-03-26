'use server';
/**
 * @fileOverview An AI assistant flow that generates varied and audience-appropriate summary descriptions for projects.
 *
 * - generateProjectDescriptions - A function that handles the project description generation process.
 * - GenerateProjectDescriptionsInput - The input type for the generateProjectDescriptions function.
 * - GenerateProjectDescriptionsOutput - The return type for the generateProjectDescriptions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectDescriptionsInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  techStack: z
    .array(z.string())
    .describe('A list of technologies and frameworks used in the project.'),
  features: z
    .array(z.string())
    .describe('A list of key features and functionalities of the project.'),
  targetAudience: z
    .string()
    .describe(
      'The intended audience for the project description (e.g., recruiters, potential clients, technical managers).'
    ),
  tone: z
    .string()
    .describe(
      'The desired tone for the descriptions (e.g., professional, engaging, concise, innovative).'
    ),
  numDescriptions: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of varied descriptions to generate (1-5).'),
});
export type GenerateProjectDescriptionsInput = z.infer<
  typeof GenerateProjectDescriptionsInputSchema
>;

const GenerateProjectDescriptionsOutputSchema = z.object({
  descriptions: z
    .array(z.string())
    .describe('An array of generated project descriptions.'),
});
export type GenerateProjectDescriptionsOutput = z.infer<
  typeof GenerateProjectDescriptionsOutputSchema
>;

export async function generateProjectDescriptions(
  input: GenerateProjectDescriptionsInput
): Promise<GenerateProjectDescriptionsOutput> {
  return generateProjectDescriptionsFlow(input);
}

const generateProjectDescriptionsPrompt = ai.definePrompt({
  name: 'generateProjectDescriptionsPrompt',
  input: { schema: GenerateProjectDescriptionsInputSchema },
  output: { schema: GenerateProjectDescriptionsOutputSchema },
  prompt: `You are an expert copywriter specializing in creating compelling project descriptions for full-stack developers' portfolios.

Generate {{numDescriptions}} varied and audience-appropriate project descriptions for the following project, formatted as a JSON array of strings. Each description should highlight the key aspects and appeal to the specified audience and tone.

Project Name: {{{projectName}}}

Technology Stack:
{{#each techStack}}- {{{this}}}
{{/each}}

Key Features:
{{#each features}}- {{{this}}}
{{/each}}

Target Audience: {{{targetAudience}}}

Desired Tone: {{{tone}}}`,
});

const generateProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionsFlow',
    inputSchema: GenerateProjectDescriptionsInputSchema,
    outputSchema: GenerateProjectDescriptionsOutputSchema,
  },
  async (input) => {
    const { output } = await generateProjectDescriptionsPrompt(input);
    return output!;
  }
);
