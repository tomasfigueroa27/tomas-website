import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import posts from '@/data/blog';
import neighborhoods from '@/data/neighborhoods';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tomasfigueroa.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/properties`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/neighborhoods`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/new-developments`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/roatan-market`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/where-to-buy-in-roatan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/us-buyers-guide-roatan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const neighborhoodRoutes: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${base}/neighborhoods/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...neighborhoodRoutes];
}
