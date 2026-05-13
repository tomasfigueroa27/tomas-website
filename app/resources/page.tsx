import type { Metadata } from 'next';
import ResourcesContent from './ResourcesContent';

export const metadata: Metadata = {
  title: 'Roatán Real Estate Resources — Guides, Market Data & Tools',
  description:
    "Buyer's guides, market data, neighborhood profiles, closing calculator, and blog — everything you need to make a confident decision about Roatán, Honduras real estate.",
  alternates: { canonical: 'https://www.tomasfigueroa.com/resources' },
  openGraph: {
    title: 'Roatán Real Estate Resources — Guides, Market Data & Tools',
    description:
      "Buyer's guides, market data, neighborhood profiles, and tools for Roatán, Honduras real estate.",
    url: 'https://www.tomasfigueroa.com/resources',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Roatán Real Estate Resources' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.tomasfigueroa.com/resources' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roatán Real Estate Resources',
  description: 'Guides, tools, and market data for buying property in Roatán, Honduras.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'WebPage',
        name: "U.S. Buyer's Guide to Roatán Real Estate",
        url: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
        description: 'Legal ownership, buying process, due diligence, rentals, and pre-construction basics for American buyers.',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'WebPage',
        name: 'Where to Buy in Roatán',
        url: 'https://www.tomasfigueroa.com/where-to-buy-in-roatan',
        description: 'Comparison of five lifestyle nodes in Roatán: West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour.',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'WebPage',
        name: 'New Developments in Roatán',
        url: 'https://www.tomasfigueroa.com/new-developments',
        description: 'Active and upcoming real estate projects in Roatán with project evaluation criteria.',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'WebPage',
        name: 'Roatán Market Guide 2026',
        url: 'https://www.tomasfigueroa.com/roatan-market',
        description: 'Pricing benchmarks, rental yields, and investment fundamentals for the Roatán market.',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'WebPage',
        name: 'Roatán Closing Cost Calculator',
        url: 'https://www.tomasfigueroa.com/calculator',
        description: 'Estimate transfer tax, attorney fees, and registration costs for a Roatán property purchase.',
      },
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <ResourcesContent />
    </>
  );
}
