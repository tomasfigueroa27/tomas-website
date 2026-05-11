import type { Metadata } from 'next';
import USBuyersGuideContent from './USBuyersGuideContent';

export const metadata: Metadata = {
  title: "U.S. Buyer's Guide to Roatán Real Estate",
  description:
    "Everything Americans need to understand before buying property in Roatán, Honduras — legal framework, buying process, due diligence, rentals, and pre-construction. Tomás Figueroa, Keller Williams Roatán.",
  alternates: {
    canonical: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
  },
  openGraph: {
    title: "U.S. Buyer's Guide to Roatán Real Estate | Tomás Figueroa",
    description:
      "Everything Americans need to understand before buying property in Roatán, Honduras — legal framework, buying process, due diligence, rentals, and pre-construction.",
    url: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: "U.S. Buyer's Guide to Roatán Real Estate" }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: "U.S. Buyer's Guide to Roatán Real Estate",
      item: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
    },
  ],
};

export default function USBuyersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <USBuyersGuideContent />
    </>
  );
}
