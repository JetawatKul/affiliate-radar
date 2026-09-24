import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.enum([
      'start-and-signup',
      'pick-products-and-read-rates',
      'first-content-by-the-rules',
    ]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // draft: true จะไม่แสดงในรายการ, sitemap หรือ build เป็นหน้า production
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
