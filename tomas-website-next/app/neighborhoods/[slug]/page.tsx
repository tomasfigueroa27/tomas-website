import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import neighborhoods from '@/data/neighborhoods';

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = neighborhoods.find((n) => n.slug === slug);
  if (!n) return {};
  return {
    title: `${n.name} Real Estate Guide | Roatan | Tomas Figueroa`,
    description: `${n.tagline}. ${n.description[0].slice(0, 120)}...`,
    alternates: { canonical: `https://tomasfigueroa.com/neighborhoods/${n.slug}` },
  };
}

const neighborhoodCoords: Record<string, { lat: number; lng: number }> = {
  'west-bay-beach': { lat: 16.3027, lng: -86.5647 },
  'west-end': { lat: 16.3002, lng: -86.5702 },
  'sandy-bay': { lat: 16.3279, lng: -86.5358 },
  'pristine-bay': { lat: 16.3444, lng: -86.4012 },
  'french-harbour': { lat: 16.3558, lng: -86.4738 },
  'coxen-hole': { lat: 16.3180, lng: -86.5525 },
};

export default async function NeighborhoodDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1d1d1d] mb-4">Neighborhood not found</h1>
          <Link href="/neighborhoods" className="text-[#04649b] hover:underline">← Back to neighborhoods</Link>
        </div>
      </div>
    );
  }

  const coords = neighborhoodCoords[neighborhood.slug];
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${neighborhood.name}, Roatan`,
    description: neighborhood.description[0],
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Roatan, Bay Islands, Honduras' },
    url: `https://tomasfigueroa.com/neighborhoods/${neighborhood.slug}`,
    ...(coords ? { geo: { '@type': 'GeoCoordinates', latitude: coords.lat, longitude: coords.lng } } : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://tomasfigueroa.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: neighborhood.name, item: `https://tomasfigueroa.com/neighborhoods/${neighborhood.slug}` },
    ],
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container">
          <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Neighborhoods
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">{neighborhood.vibe}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>{neighborhood.name}</h1>
          <p className="text-xl text-white/90">{neighborhood.tagline}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-4xl">
          <div className="bg-[#f5f5f5] rounded-2xl p-6 mb-10 space-y-3">
            {neighborhood.facts.map((fact) => (
              <div key={fact.label} className="flex gap-3">
                <span className="font-semibold text-[#04649b] min-w-[140px] shrink-0">{fact.label}:</span>
                <span className="text-gray-700">{fact.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 mb-10">
            {neighborhood.description.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#1d1d1d] mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Best For</h2>
            <div className="flex flex-wrap gap-3">
              {neighborhood.bestFor.map((tag) => (
                <span key={tag} className="bg-[#04649b]/10 text-[#04649b] font-medium px-4 py-2 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Explore More</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/neighborhoods" className="text-[#04649b] font-medium hover:underline text-sm">← All Roatan Neighborhoods</Link>
              <Link href="/roatan-market" className="text-[#04649b] font-medium hover:underline text-sm">View Roatan Market Data →</Link>
              <Link href="/guides" className="text-[#04649b] font-medium hover:underline text-sm">Download the Buyer&apos;s Guide →</Link>
              <Link href="/faq" className="text-[#04649b] font-medium hover:underline text-sm">Browse FAQ →</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Interested in {neighborhood.name}?</h2>
            <p className="text-white/90 mb-6">Tomas can walk you through available listings, price trends, and investment potential in {neighborhood.name} — and help you decide if it aligns with your goals.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-block bg-white text-[#04649b] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Schedule a Call with Tomas</a>
          </div>
        </div>
      </section>
    </div>
  );
}
