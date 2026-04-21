import type { Metadata } from 'next';
import Properties from '@/sections/Properties';

export const metadata: Metadata = {
  title: 'Browse Roatan MLS Listings | Search All Properties',
  description: 'Search all available properties in Roatan, Honduras directly from the MLS. Filter by price, location, and property type to find your ideal Caribbean real estate investment.',
  alternates: { canonical: 'https://tomasfigueroa.com/properties' },
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

      <Properties />
    </div>
  );
}
