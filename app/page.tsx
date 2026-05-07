import type { Metadata } from 'next';
import Hero from '@/sections/Hero';
import HomeAbout from '@/sections/HomeAbout';
import Newsletter from '@/sections/Newsletter';
import CTA from '@/sections/CTA';

export const metadata: Metadata = {
  title: 'Roatan Real Estate | Tomas Figueroa – KW Roatan',
  description:
    'Search Roatan MLS listings, explore neighborhoods, and get expert guidance on buying property in Roatan, Honduras. Tomas Figueroa – Keller Williams Roatan.',
  alternates: {
    canonical: 'https://www.tomasfigueroa.com/',
  },
  openGraph: {
    title: 'Roatan Real Estate | Tomas Figueroa – KW Roatan',
    description:
      'Buy, sell, or invest in Roatan, Honduras real estate with Tomas Figueroa at Keller Williams Roatan.',
    url: 'https://www.tomasfigueroa.com/',
    images: [{ url: '/tomas-about.jpg', width: 800, height: 1000 }],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.tomasfigueroa.com/#person',
  name: 'Tomas Figueroa',
  jobTitle: 'Licensed Realtor',
  worksFor: { '@type': 'Organization', name: 'Keller Williams Roatan' },
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488488326',
  email: 'tomas@kwroatan.com',
  sameAs: [
    'https://www.linkedin.com/in/roatanbytomas/',
    'https://www.instagram.com/roatanbytomas/',
    'https://www.facebook.com/profile.php?id=61557310059412',
  ],
  areaServed: 'Roatan, Bay Islands, Honduras',
  knowsAbout: ['Roatan real estate', 'Caribbean property investment', 'Honduras property law', 'Bay Islands real estate'],
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Tomas Figueroa – KW Roatan',
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488488326',
  email: 'tomas@kwroatan.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roatan',
    addressRegion: 'Bay Islands',
    addressCountry: 'HN',
  },
  areaServed: 'Roatan, Bay Islands, Honduras',
  priceRange: '$150,000 – $2,000,000+',
  sameAs: [
    'https://www.linkedin.com/in/roatanbytomas/',
    'https://www.instagram.com/roatanbytomas/',
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <Hero />
      <HomeAbout />

      {/* Quote Band */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 56, paddingBottom: 56 }}>
        <div className="section-container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            &ldquo;Most Caribbean markets are overpriced.{' '}
            <span style={{ color: '#789ead' }}>Roatan isn&apos;t — yet.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* Why Roatan */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label-caps block mb-5" style={{ color: '#789ead' }}>Market Overview</span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 400,
                  color: '#ffffff',
                  marginTop: 0,
                  marginBottom: 28,
                  lineHeight: 1.2,
                }}
              >
                Why Buyers Choose Roatan
              </h2>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }} className="space-y-4">
                <p>Roatán is the largest of Honduras&apos; Bay Islands — a 40-mile island in the western Caribbean, located along the Mesoamerican Barrier Reef. Foreign buyers can acquire property with full ownership rights, making it a straightforward and secure market for international investment, with pricing that remains competitive compared to destinations such as Belize, the Dominican Republic, and Costa Rica.</p>
                <p>Tourism continues to grow consistently year over year, supporting strong demand for both vacation and long-term rentals. The island offers world-class diving, a stable tropical climate, an established expat community, and full English-language infrastructure. It is well connected with direct international flights, with additional routes continuing to be added.</p>
                <p>Together, these factors position Roatán as an increasingly attractive and practical Caribbean destination for both lifestyle buyers and investors.</p>
              </div>
            </div>

            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { stat: '$150K+', label: 'Accessible entry points', sub: 'Well below comparable Caribbean markets' },
                { stat: '6–8%', label: 'Average rental yield', sub: 'In top areas like West Bay Beach' },
                { stat: '100%', label: 'Foreign ownership', sub: 'Same rights as Honduran citizens' },
              ].map((item, i) => (
                <div key={item.stat} style={{ paddingTop: 24, paddingBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 'clamp(32px, 4vw, 44px)',
                      fontWeight: 700,
                      color: '#789ead',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {item.stat}
                  </span>
                  <div>
                    <p style={{ color: '#ffffff', fontWeight: 600, fontSize: 15, margin: 0, lineHeight: 1.3 }}>{item.label}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4, marginBottom: 0 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
