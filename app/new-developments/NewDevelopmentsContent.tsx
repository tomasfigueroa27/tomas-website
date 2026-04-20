'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, TrendingUp, Calendar, Phone } from 'lucide-react';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'New Developments', item: 'https://tomasfigueroa.com/new-developments' },
  ],
};

export default function NewDevelopmentsContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
            New Developments in Roatan
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 28px' }}>
            Roatan is entering a new phase of growth, with residential, hospitality, and mixed-use developments reshaping different parts of the island. Explore the map below to see where new projects are emerging and how the market is evolving.
          </p>
          <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar style={{ width: 16, height: 16 }} /> Schedule a Private Tour
          </a>
        </div>
      </section>

      {/* Overview */}
      <section ref={sectionRef} style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="label-caps block mb-4">Market Context</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>
              Roatan&apos;s Next Growth Phase
            </h2>
            <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 28 }}>
              Roatan is entering what may become its most active development phase yet. As infrastructure improves and demand continues to grow, new residential communities, resort projects, and mixed-use developments are beginning to reshape the island. Explore the map below to see how different developments are positioned across Roatan.
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
            <div style={{ aspectRatio: '16/9', width: '100%' }}>
              <iframe src="https://www.google.com/maps/d/embed?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0" width="100%" height="100%" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Roatan New Developments Map" />
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
            Have questions about new developments or pre-construction in Roatan?{' '}
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
              Evaluate Roatan&apos;s Development Opportunities
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 28px' }}>
              If you are considering investing, relocating, or positioning yourself ahead of the island&apos;s next growth phase, let&apos;s discuss where development is happening and how it aligns with your goals.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Calendar style={{ width: 16, height: 16 }} /> Schedule a Strategy Call
              </a>
              <a href="tel:+50488488326" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', textDecoration: 'none', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Arial, Helvetica, sans-serif', transition: 'background-color 0.2s' }}
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
