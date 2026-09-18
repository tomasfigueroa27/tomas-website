import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Development status ──────────────────────────────────────
const developmentStatus = z.enum([
  'coming-soon',
  'pre-sale',
  'under-construction',
  'delivered',
]);

// ── Shared SEO ──────────────────────────────────────────────
const seo = z.object({
  title: z.string().max(60),
  description: z.string().max(155),
});

// ── Developments ────────────────────────────────────────────
const developments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/developments' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: developmentStatus,
    area: z.string(),
    developer: z.string().optional(),
    developerWebsite: z.string().url().optional(),
    location: z.object({
      address: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
      mapEmbed: z.string().optional(),
    }).optional(),
    unitTypes: z.array(z.string()).optional(),
    bedsRange: z.tuple([z.number(), z.number()]).optional(),
    sqmRange: z.tuple([z.number(), z.number()]).optional(),
    sqftRange: z.tuple([z.number(), z.number()]).optional(),
    totalUnits: z.number().optional(),
    priceFrom: z.number().optional(),
    priceTo: z.number().optional(),
    depositPct: z.number().optional(),
    paymentSchedule: z.string().optional(),
    constructionStatus: z.string().optional(),
    estimatedCompletion: z.string().optional(),
    hoaMonthly: z.number().optional(),
    rentalProgram: z.boolean().optional(),
    rentalProgramDetails: z.string().optional(),
    titleStructure: z.string().optional(),
    amenities: z.array(z.string()).optional(),
    architect: z.string().optional(),
    heroImage: z.string(),
    gallery: z.array(z.string()).optional(),
    videoUrl: z.string().url().optional(),
    brochureUrl: z.string().url().optional(),
    lastUpdated: z.coerce.date(),
    seo,
  }),
});

// ── Neighborhoods ────────────────────────────────────────────
const neighborhoods = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/neighborhoods' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().max(350),
    suitedFor: z.array(z.string()),
    priceRanges: z.array(z.object({
      type: z.string(),
      from: z.number(),
      to: z.number(),
    })).optional(),
    heroImage: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    lastUpdated: z.coerce.date(),
    seo,
  }),
});

// ── Guides ──────────────────────────────────────────────────
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    section: z.enum(['buy', 'journal', 'living']),
    tldr: z.string().max(400),
    lastUpdated: z.coerce.date(),
    reviewedBy: z.string().optional(),
    relatedSlugs: z.array(z.string()).min(3),
    heroImage: z.string().optional(),
    seo,
  }),
});

// ── Market Reports ──────────────────────────────────────────
const marketReports = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/market-reports' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    period: z.string(),
    publishDate: z.coerce.date(),
    kpis: z.array(z.object({
      label: z.string(),
      value: z.string(),
      unit: z.string().optional(),
    })),
    heroImage: z.string().optional(),
    seo,
  }),
});

// ── Videos ──────────────────────────────────────────────────
const videos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    youtubeId: z.string(),
    thumbnailUrl: z.string(),
    duration: z.string(),
    publishDate: z.coerce.date(),
    seo,
  }),
});

// ── Testimonials ────────────────────────────────────────────
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml}', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    permissionOnFile: z.boolean(),
    text: z.string(),
    date: z.coerce.date(),
    source: z.enum(['Google', 'Direct', 'Zillow', 'Other']),
    rating: z.number().min(1).max(5).optional(),
  }),
});

// ── FAQs ────────────────────────────────────────────────────
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml}', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    relatedGuide: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  developments,
  neighborhoods,
  guides,
  'market-reports': marketReports,
  videos,
  testimonials,
  faqs,
};
