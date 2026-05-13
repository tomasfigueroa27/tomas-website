import type { Metadata } from 'next';
import NewDevelopmentsContent from './NewDevelopmentsContent';

export const metadata: Metadata = {
  title: 'New Developments in Roatán — Tomás Figueroa Real Estate',
  description:
    'Active and upcoming real estate developments in Roatán, Honduras — pre-construction oceanfront residences, resort communities, and emerging hillside projects. Evaluated by Tomás Figueroa, Keller Williams Roatán.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/new-developments' },
  openGraph: {
    title: 'New Developments in Roatán — Tomás Figueroa Real Estate',
    description:
      'Active and upcoming real estate developments in Roatán — pre-construction oceanfront residences, resort communities, and emerging hillside projects.',
    url: 'https://www.tomasfigueroa.com/new-developments',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'New Developments in Roatán, Honduras' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'New Developments', item: 'https://www.tomasfigueroa.com/new-developments' },
  ],
};

export default function NewDevelopmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NewDevelopmentsContent />
    </>
  );
}
