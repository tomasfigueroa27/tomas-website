import type { Metadata } from 'next';
import PalmHausContent from './PalmHausContent';

export const metadata: Metadata = {
  title: 'The Palm Haus Roatán — Pre-Construction Condominiums | Tomás Figueroa',
  description:
    'A 12-story condominium development between West Bay and West End, Roatán. Studio to 2-bedroom residences with resort amenities, 8–10% estimated ROI potential, and an owner-friendly 75/25 rental program. Construction begins January 2027.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/new-developments/the-palm-haus' },
  openGraph: {
    title: 'The Palm Haus Roatán — Pre-Construction Condominiums',
    description:
      'Studio to 2-bedroom condominiums between West Bay and West End. Resort amenities, turnkey delivery, 8–10% ROI potential.',
    url: 'https://www.tomasfigueroa.com/new-developments/the-palm-haus',
    images: [{ url: '/neighborhood-westbay.jpg', width: 1200, height: 630, alt: 'The Palm Haus, Roatán Honduras' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'New Developments', item: 'https://www.tomasfigueroa.com/new-developments' },
    { '@type': 'ListItem', position: 3, name: 'The Palm Haus', item: 'https://www.tomasfigueroa.com/new-developments/the-palm-haus' },
  ],
};

export default function PalmHausPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PalmHausContent />
    </>
  );
}
