import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reflections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reflections" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    semester: z.number().int().min(1).max(2),
    description: z.string(),
    order: z.number().default(1),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedWorks: z.array(z.string()).optional(),
    relatedPPL: z.array(z.string()).optional(),
  }),
});

export const collections = { reflections };
