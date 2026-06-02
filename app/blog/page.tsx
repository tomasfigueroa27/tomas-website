import type { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Real Estate Blog — Roatán Market Reports, Buyer Guides & Neighborhood Insights',
  description: 'Market reports, buyer guides, neighborhood breakdowns, and investment analysis for Roatán, Honduras real estate. Written by Tomás Figueroa, Roatan Reef.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/blog' },
  openGraph: {
    title: 'Real Estate Blog — Roatán Market Reports, Buyer Guides & Neighborhood Insights',
    description: 'Market reports, buyer guides, neighborhood breakdowns, and investment analysis for Roatán, Honduras real estate.',
    url: 'https://www.tomasfigueroa.com/blog',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Roatán Real Estate Blog' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tomasfigueroa.com/blog' },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogContent />
    </>
  );
}
