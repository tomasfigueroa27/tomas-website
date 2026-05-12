import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import neighborhoods from '@/data/neighborhoods';
import ScheduleButton from '@/components/ScheduleButton';

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = neighborhoods.find((n) => n.slug === slug);
  if (!n) return {};
  return {
    title: `${n.name} Real Estate Guide`,
    description: `${n.tagline}. ${n.description[0].slice(0, 120)}...`,
    alternates: { canonical: `https://www.tomasfigueroa.com/neighborhoods/${n.slug}` },
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
      <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: 128 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 28, fontWeight: 400, color: '#093f4f', marginBottom: 16 }}>Neighborhood not found</h1>
          <Link href="/neighborhoods" style={{ color: '#093f4f', textDecoration: 'none', fontWeight: 600 }}>← Back to neighborhoods</Link>
        </div>
      </div>
    );
  }

  const coords = neighborhoodCoords[neighborhood.slug];
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${neighborhood.name}, Roatan`,
    description: `${neighborhood.description[0]} Median sale price: ${neighborhood.marketStats.medianSalePrice}. Rental yield: ${neighborhood.marketStats.rentalYield}.`,
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Roatan, Bay Islands, Honduras' },
    url: `https://www.tomasfigueroa.com/neighborhoods/${neighborhood.slug}`,
    ...(coords ? { geo: { '@type': 'GeoCoordinates', latitude: coords.lat, longitude: coords.lng } } : {}),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Median Sale Price', value: neighborhood.marketStats.medianSalePrice },
      { '@type': 'LocationFeatureSpecification', name: 'Price Range', value: neighborhood.marketStats.priceRange },
      { '@type': 'LocationFeatureSpecification', name: 'Avg Price per Sqft', value: neighborhood.marketStats.avgPricePerSqft },
      { '@type': 'LocationFeatureSpecification', name: 'Typical Days on Market', value: neighborhood.marketStats.daysOnMarket },
      { '@type': 'LocationFeatureSpecification', name: 'YoY Price Trend', value: neighborhood.marketStats.yoyTrend },
      { '@type': 'LocationFeatureSpecification', name: 'Rental Yield', value: neighborhood.marketStats.rentalYield },
      { '@type': 'LocationFeatureSpecification', name: 'Best Buyer Type', value: neighborhood.marketStats.bestBuyerType },
    ],
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: neighborhood.faqSchemaItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://www.tomasfigueroa.com/neighborhoods' },
      { '@type': 'ListItem', position: 3, name: neighborhood.name, item: `https://www.tomasfigueroa.com/neighborhoods/${neighborhood.slug}` },
    ],
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-container">
          <Link
            href="/neighborhoods"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, marginBottom: 28 }}
            className="link-dim"
          >
            <ArrowLeft style={{ width: 14, height: 14 }} aria-hidden="true" />
            All Neighborhoods
          </Link>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>{neighborhood.vibe}</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            {neighborhood.name}
          </h1>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: 8, marginBottom: 12 }}>Last reviewed: May 2026 · {neighborhood.name} Real Estate Guide</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560 }}>{neighborhood.tagline}</p>
        </div>
      </section>

      <section style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          {/* Facts */}
          <div style={{ backgroundColor: '#f5f2ee', padding: '20px 24px', marginBottom: 32 }}>
            {neighborhood.facts.map((fact) => (
              <div key={fact.label} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600, color: '#093f4f', fontSize: 13, minWidth: 140, flexShrink: 0 }}>{fact.label}:</span>
                <span style={{ fontSize: 13, color: '#555555' }}>{fact.value}</span>
              </div>
            ))}
          </div>

          {/* Market Stats */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 16 }}>Market Data</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <thead>
                  <tr>
                    {['Metric', 'Value'].map((h) => (
                      <th key={h} style={{ padding: '10px 16px', backgroundColor: '#093f4f', color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    ['Median Sale Price', neighborhood.marketStats.medianSalePrice],
                    ['Price Range', neighborhood.marketStats.priceRange],
                    ['Avg Price per Sqft', neighborhood.marketStats.avgPricePerSqft],
                    ['Typical Days on Market', neighborhood.marketStats.daysOnMarket],
                    ['YoY Price Trend', neighborhood.marketStats.yoyTrend],
                    ['Rental Yield', neighborhood.marketStats.rentalYield],
                    ['Best Buyer Type', neighborhood.marketStats.bestBuyerType],
                  ] as [string, string][]).map(([metric, value], ri) => (
                    <tr key={metric} style={{ backgroundColor: ri % 2 === 0 ? '#f5f2ee' : '#ffffff' }}>
                      <td style={{ padding: '10px 16px', color: '#093f4f', fontWeight: 600, borderBottom: '1px solid #e5e7eb', fontSize: 13, whiteSpace: 'nowrap' as const }}>{metric}</td>
                      <td style={{ padding: '10px 16px', color: '#555555', borderBottom: '1px solid #e5e7eb', fontSize: 13 }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 11, color: '#999999', marginTop: 10, marginBottom: 0 }}>Source: Keller Williams Roatan transaction data and Roatan MLS, 2025–2026.</p>
          </div>

          {/* Buyer Guide */}
          <div style={{ marginBottom: 32 }}>
            {neighborhood.buyerGuide.map((section) => (
              <div key={section.title} style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 10 }}>{section.title}</h3>
                <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: 32 }}>
            {neighborhood.description.map((para, i) => (
              <p key={i} style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 16 }}>{para}</p>
            ))}
          </div>

          {/* Best For */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 14 }}>Best For</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {neighborhood.bestFor.map((tag) => (
                <span key={tag} style={{ backgroundColor: 'rgba(120,158,173,0.12)', color: '#093f4f', fontWeight: 600, fontSize: 11, padding: '6px 14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Explore More */}
          <div style={{ paddingTop: 28, borderTop: '1px solid #e5e7eb', marginBottom: 40 }}>
            <span className="label-caps block mb-14">Explore More</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 12 }}>
              {[
                { href: '/neighborhoods', label: '← All Roatan Neighborhoods' },
                { href: '/roatan-market', label: 'View Roatan Market Data →' },
                { href: '/guides', label: "Download the Buyer's Guide →" },
                { href: '/faq', label: 'Browse FAQ →' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: 12 }} className="link-underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ backgroundColor: '#093f4f', padding: '36px 28px', textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 10 }}>Interested in {neighborhood.name}?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>
              Tomas can walk you through available listings, price trends, and investment potential in {neighborhood.name} — and help you decide if it aligns with your goals.
            </p>
            <ScheduleButton className="btn-accent">
              Schedule a Strategy Call
            </ScheduleButton>
          </div>
        </div>
      </section>
    </div>
  );
}
