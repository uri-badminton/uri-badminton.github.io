import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const optionalDate = z.coerce.date().optional();

const announcements = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/announcements" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    summary: z.string().min(1),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
    expiresAt: optionalDate,
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    youtubeId: z
      .string()
      .regex(/^[A-Za-z0-9_-]{11}$/, "YouTube IDs must be exactly 11 safe characters"),
    summary: z.string().min(1),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    topics: z.array(z.string().min(1)).default([]),
  }),
});

export const collections = { announcements, videos };
