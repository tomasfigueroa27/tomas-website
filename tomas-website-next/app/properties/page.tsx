import type { Metadata } from 'next';
import Properties from '@/sections/Properties';

export const metadata: Metadata = {
  title: 'Browse Roatan MLS Listings | Search All Properties',
  description: 'Search all available properties in Roatan, Honduras directly from the MLS. Filter by price, location, and property type to find your ideal Caribbean real estate investment.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/properties' },
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">MLS Listings</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Browse Roatan Properties</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Search all available listings in Roatan directly from the MLS — filter by price, neighborhood, and property type.</p>
        </div>
      </section>

      <Properties />
    </div>
  );
}
