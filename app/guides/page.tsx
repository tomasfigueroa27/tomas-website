import type { Metadata } from 'next';
import GuidesContent from './GuidesContent';

export const metadata: Metadata = {
  title: "Roatán Real Estate Guide Library — Buyer's Guides, Market Data & Tools",
  description:
    "Six guides covering every stage of buying property in Roatán, Honduras — legal ownership, where to buy, market data, new developments, closing costs, and FAQ. Tomás Figueroa, Keller Williams Roatán.",
  alternates: { canonical: 'https://www.tomasfigueroa.com/guides' },
  openGraph: {
    title: "Roatán Real Estate Guide Library — Buyer's Guides, Market Data & Tools",
    description:
      "Six guides covering every stage of buying property in Roatán — legal ownership, where to buy, market data, new developments, closing costs, and FAQ.",
    url: 'https://www.tomasfigueroa.com/guides',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Roatán Real Estate Guide Library' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.tomasfigueroa.com/guides' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roatán Real Estate Guide Library',
  description: 'Six guides covering every stage of buying property in Roatán, Honduras.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'WebPage',
        name: "U.S. Buyer's Guide to Roatán Real Estate",
        url: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
        description: 'Legal ownership, due diligence, the 5-step purchase process, rentals, and pre-construction basics for American buyers.',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'WebPage',
        name: 'Where to Buy in Roatán',
        url: 'https://www.tomasfigueroa.com/where-to-buy-in-roatan',
        description: 'West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour compared by lifestyle, product type, and buyer fit.',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'WebPage',
        name: 'Roatán Market Guide 2026',
        url: 'https://www.tomasfigueroa.com/roatan-market',
        description: 'Pricing benchmarks, rental yields, days on market, and foreign ownership mechanics for the Roatán market.',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'WebPage',
        name: 'New Developments Guide',
        url: 'https://www.tomasfigueroa.com/new-developments',
        description: 'Developer track records, escrow structures, rental permissions, and exit liquidity for new Roatán projects.',
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
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'WebPage',
        name: 'Roatán Real Estate FAQ',
        url: 'https://www.tomasfigueroa.com/faq',
        description: 'Common questions about foreign ownership rights, title types, financing, and the Honduran notarial system.',
      },
    },
  ],
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <GuidesContent />
    </>
  );
}
