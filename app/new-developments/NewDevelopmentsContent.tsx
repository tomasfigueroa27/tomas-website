'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, TrendingUp, Calendar, Phone } from 'lucide-react';
import { trackSchedule, openSavvyCal } from '@/lib/analytics';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'New Developments', item: 'https://www.tomasfigueroa.com/new-developments' },
  ],
};

export default function NewDevelopmentsContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mapActive, setMapActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Investment Opportunities</span>
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
            New Developments in Roatán
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 28px' }}>
            This page tracks active and upcoming development projects across Roatán — residential communities, resort properties, and mixed-use opportunities at various stages of construction. Browse the map to see where new projects are located, and reach out for pre-construction pricing and developer access.
          </p>
          <button onClick={() => { trackSchedule(); openSavvyCal(); }} className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar style={{ width: 16, height: 16 }} /> Schedule a Private Tour
          </button>
        </div>
      </section>

      {/* Overview */}
      <section ref={sectionRef} style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="label-caps block mb-4">Market Context</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>
              Roatán&apos;s Next Growth Phase
            </h2>
            <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 28 }}>
              Roatán is in the early stages of what may be its most consequential development cycle. Tourism numbers have recovered and continued to climb post-2020. Infrastructure — roads, utilities, and port capacity — has improved meaningfully in the West Bay and Sandy Bay corridors. And international attention from buyers in the US, Canada, and Europe has pushed demand into areas that were largely overlooked five years ago. Developers are responding: new residential communities are moving beyond the traditional West Bay and West End markets, with serious projects now underway in Pristine Bay, French Harbour, and the island&apos;s east end. Mixed-use and hospitality developments are being structured to meet growing rental demand, and pre-construction pricing in several active projects offers a meaningful entry point relative to comparable completed product. For buyers comparing options, understanding what&apos;s actively in the pipeline provides useful context for any decision.
            </p>
            <div className="grid sm:grid-cols-3 gap-3" style={{ maxWidth: 640, margin: '0 auto' }}>
              {['Residential Growth', 'Hospitality Expansion', 'Long-Term Opportunity'].map((label) => (
                <div key={label} style={{ backgroundColor: '#f5f2ee', padding: '16px 20px' }}>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#093f4f', margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Development Map</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 12 }}>Explore Development Locations Across Roatan</h2>
            <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>Use the map below to explore where new communities, resort projects, and emerging development zones are taking shape across the island.</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid #d4e8ed' }}>
            <div style={{ aspectRatio: '16/9', width: '100%', position: 'relative' }}>
              <iframe src="https://www.google.com/maps/d/embed?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0" width="100%" height="100%" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Roatan New Developments Map" />
              {!mapActive && (
                <div
                  onClick={() => setMapActive(true)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                  }}
                  aria-label="Tap to interact with map"
                >
                  <span style={{
                    backgroundColor: 'rgba(9,63,79,0.85)',
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    padding: '10px 18px',
                    letterSpacing: '0.06em',
                    pointerEvents: 'none',
                  }}>
                    Tap to interact with map
                  </span>
                </div>
              )}
            </div>
            <div style={{ padding: 16, textAlign: 'center' }}>
              <a href="https://www.google.com/maps/d/u/2/edit?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0&usp=sharing" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}>
                <MapPin style={{ width: 14, height: 14 }} /> Open Full Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#555555' }}>
            Have questions about new developments or pre-construction in Roatán?{' '}
            <a href="/faq" style={{ color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}>Browse our full FAQ →</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ backgroundColor: '#0a1628', padding: 48, textAlign: 'center', color: '#ffffff' }}>
            <TrendingUp style={{ width: 48, height: 48, margin: '0 auto 20px', color: '#789ead' }} />
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>
              Evaluate Roatán&apos;s Development Opportunities
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 28px' }}>
              If you are considering investing, relocating, or positioning yourself ahead of the island&apos;s next growth phase, let&apos;s discuss where development is happening and how it aligns with your goals.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => { trackSchedule(); openSavvyCal(); }} className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Calendar style={{ width: 16, height: 16 }} /> Schedule a Strategy Call
              </button>
              <a href="tel:+50488483226" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', textDecoration: 'none', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Arial, Helvetica, sans-serif', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              >
                <Phone style={{ width: 16, height: 16 }} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
