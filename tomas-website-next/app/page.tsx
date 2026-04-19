import type { Metadata } from 'next';
import Hero from '@/sections/Hero';
import HomeAbout from '@/sections/HomeAbout';
import Newsletter from '@/sections/Newsletter';
import CTA from '@/sections/CTA';

export const metadata: Metadata = {
  title: 'Roatan Real Estate | Tomas Figueroa – KW Roatan',
  description:
    'Buy, sell, or invest in Roatan, Honduras real estate with Tomas Figueroa at Keller Williams Roatan. Expert guidance on Caribbean property, new developments, and investment opportunities.',
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeAbout />

      {/* Quote Band */}
      <section className="bg-[#1d1d1d] py-14 md:py-20">
        <div className="section-container max-w-4xl text-center">
          <p
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
            style={{ fontFamily: 'var(--font-roboto-slab), serif' }}
          >
            &ldquo;Most Caribbean markets are overpriced.{' '}
            <span className="text-[#04649b]">Roatan isn&apos;t — yet.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* Why Roatan */}
      <section className="bg-[#111] py-20 md:py-28">
        <div className="section-container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading + copy */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-roboto-slab), serif' }}
              >
                Why Buyers Choose Roatan
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p>Roatán is the largest of Honduras&apos; Bay Islands — a 40-mile island in the western Caribbean, located along the Mesoamerican Barrier Reef. Foreign buyers can acquire property with full ownership rights, making it a straightforward and secure market for international investment, with pricing that remains competitive compared to destinations such as Belize, the Dominican Republic, and Costa Rica.</p>
                <p>Tourism continues to grow consistently year over year, supporting strong demand for both vacation and long-term rentals. The island offers world-class diving, a stable tropical climate, an established expat community, and full English-language infrastructure. It is well connected with direct international flights, with additional routes continuing to be added.</p>
                <p>Together, these factors position Roatán as an increasingly attractive and practical Caribbean destination for both lifestyle buyers and investors.</p>
              </div>
            </div>

            {/* Right: stats */}
            <div className="lg:pt-4 space-y-0 divide-y divide-white/10 border-t border-white/10">
              {[
                { stat: '$150K+', label: 'Accessible entry points', sub: 'Well below comparable Caribbean markets' },
                { stat: '6–8%', label: 'Average rental yield', sub: 'In top areas like West Bay Beach' },
                { stat: '100%', label: 'Foreign ownership', sub: 'Same rights as Honduran citizens' },
              ].map((item) => (
                <div key={item.stat} className="py-7 flex items-start gap-6">
                  <span
                    className="text-4xl md:text-5xl font-bold text-[#04649b] shrink-0 leading-none"
                    style={{ fontFamily: 'var(--font-roboto-slab), serif' }}
                  >
                    {item.stat}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-lg leading-snug">{item.label}</p>
                    <p className="text-white/50 text-sm mt-1">{item.sub}</p>
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
