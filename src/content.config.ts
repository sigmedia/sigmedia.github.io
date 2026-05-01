import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,markdown}', base: "./src/content/team" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.any().optional(),
    image: image().optional(),
    role: z.string().optional(),
    permalink: z.string().optional(),
    social: z.any().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,markdown}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.any().optional(),
    categories: z.string().optional(),
    tags: z.string().optional(),
  }),
});

const dataset = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,markdown}', base: "./src/content/dataset" }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    license: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,markdown}', base: "./src/content/software" }),
  schema: z.object({
    title: z.string(),
    repository: z.string().url().optional(),
    language: z.string().optional(),
    license: z.string().optional(),
  }),
});

export const collections = { team, posts, dataset, software };
