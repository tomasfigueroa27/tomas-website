import type { Metadata } from 'next';
import DiscoveryMapContent from './DiscoveryMapContent';

export const metadata: Metadata = {
  title: 'Where to Buy in Roatán: 5 Lifestyle Nodes — Tomás Figueroa Real Estate',
  description:
    "An interactive map of Roatán's five lifestyle nodes — West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour & East. Compare lifestyles, price ranges, and buyer profiles before you choose. Tomás Figueroa, Roatan Reef.",
  alternates: {
    canonical: 'https://www.tomasfigueroa.com/where-to-buy-in-roatan',
  },
  openGraph: {
    title: 'Where to Buy in Roatán: 5 Lifestyle Nodes — Tomás Figueroa Real Estate',
    description:
      "An interactive map of Roatán's five lifestyle nodes — West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour & East. Compare lifestyles, price ranges, and buyer profiles before you choose.",
    url: 'https://www.tomasfigueroa.com/where-to-buy-in-roatan',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Where to Buy in Roatán — Interactive Lifestyle Map' }],
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
      name: 'Where to Buy in Roatán',
      item: 'https://www.tomasfigueroa.com/where-to-buy-in-roatan',
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roatán Lifestyle Nodes',
  description: "Five lifestyle nodes across Roatán, Bay Islands, Honduras — each with a distinct character, price range, and buyer profile.",
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'TouristAttraction',
        name: 'West Bay — Beach Lifestyle',
        description: 'Premium oceanfront beach with the strongest vacation-rental logic on Roatán. Highest $/sqft.',
        containedInPlace: { '@type': 'Place', name: 'Roatán, Bay Islands, Honduras' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'TouristAttraction',
        name: 'West End — Walkable Village Lifestyle',
        description: 'Walkable village with restaurants, diving, and expat community. Authentic island character.',
        containedInPlace: { '@type': 'Place', name: 'Roatán, Bay Islands, Honduras' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'TouristAttraction',
        name: 'Sandy Bay — Quiet Reef Lifestyle',
        description: 'Quieter residential life near the reef. Emerging luxury tier with panoramic ocean views.',
        containedInPlace: { '@type': 'Place', name: 'Roatán, Bay Islands, Honduras' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'TouristAttraction',
        name: 'Pristine Bay — Gated Resort Lifestyle',
        description: 'Gated resort community with golf, marina, and full property management infrastructure.',
        containedInPlace: { '@type': 'Place', name: 'Roatán, Bay Islands, Honduras' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'TouristAttraction',
        name: 'French Harbour & East — Emerging Lifestyle',
        description: 'Lower entry, authentic local infrastructure, and longer-term development exposure.',
        containedInPlace: { '@type': 'Place', name: 'Roatán, Bay Islands, Honduras' },
      },
    },
  ],
};

export default function WhereToBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <DiscoveryMapContent />
    </>
  );
}
