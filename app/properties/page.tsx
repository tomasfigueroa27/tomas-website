import type { Metadata } from 'next';
import Properties from '@/sections/Properties';

export const metadata: Metadata = {
  title: 'Roatan MLS Property Listings',
  description: 'Search all available properties in Roatan, Honduras directly from the MLS. Filter by price, location, and property type to find your ideal Caribbean real estate investment.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/properties' },
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>MLS Listings</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Browse Roatan Properties
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Search all available listings in Roatan directly from the MLS — filter by price, neighborhood, and property type.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="section-container">
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 16 }}>
            Roatan Property Listings — Direct from the MLS
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            The listings below pull directly from the Roatan MLS in real time, covering all property types currently available on the island — beachfront condos, hillside homes, oceanview lots, and investment properties across West Bay, West End, Sandy Bay, Pristine Bay, French Harbour, and Coxen Hole.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 10 }}>What you&apos;ll find here:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            {[
              'Condos from $150,000 to $1M+ in established beach communities',
              'Single-family homes ranging from starter properties to luxury oceanfront estates',
              'Raw land and development lots for buyers looking to build',
              'New development units with pre-construction pricing in select communities',
            ].map((item) => (
              <li key={item} style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 8 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Before you browse — know this: Not every property in Roatan is listed here. A meaningful portion of the best deals — distressed sales, off-market opportunities, developer pre-sales, and estate listings — never appear on the public MLS. If you&apos;re serious about finding the right property at the right price, talking to an agent who works the full market matters.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, margin: 0 }}>
            Use the search tools below to filter by price, location, and property type. When something catches your eye — or when you want to know what&apos;s available beyond what&apos;s shown — reach out directly.
          </p>
        </div>
      </section>

      <Properties />
    </div>
  );
}
