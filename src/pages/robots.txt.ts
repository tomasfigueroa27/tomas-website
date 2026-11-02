import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const isStaging = import.meta.env.SITE_MODE === 'staging';

  const content = isStaging
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\nDisallow: /styleguide/\nDisallow: /api/\n\nSitemap: https://www.tomasfigueroa.com/sitemap-index.xml\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
