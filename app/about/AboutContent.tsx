'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Phone, Mail, Calendar, TrendingUp } from 'lucide-react';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.tomasfigueroa.com/#person',
  name: 'Tomas Figueroa',
  jobTitle: 'Licensed Real Estate Agent',
  url: 'https://www.tomasfigueroa.com',
  image: 'https://www.tomasfigueroa.com/tomas-about.jpg',
  telephone: '+50488488326',
  email: 'tomas@kwroatan.com',
  knowsAbout: ['Roatan real estate', 'Caribbean property investment', 'Honduras property law'],
  worksFor: { '@type': 'RealEstateAgent', name: 'Keller Williams Roatan', url: 'https://www.tomasfigueroa.com' },
  sameAs: ['https://www.facebook.com/profile.php?id=61557310059412', 'https://www.instagram.com/roatanbytomas/', 'https://www.linkedin.com/in/roatanbytomas/'],
};

const stats = [
  { number: '20+', label: 'Years of Sales Experience', icon: Award },
  { number: '50+', label: 'Properties Sold', icon: Users },
  { number: '30MM+', label: 'Sales Volume', icon: TrendingUp },
];

const values = [
  { title: 'Positioning Roatan Correctly', description: 'Roatan remains under the radar for many serious investors and relocation buyers.\n\nMy role is to help you evaluate the island in context — alongside other Caribbean markets — based on infrastructure, growth trajectory, regulation, and long-term potential.\n\nBefore choosing a property, the first question is whether Roatan is the right market for you.' },
  { title: 'Goal-Driven Strategy', description: 'Every buyer has a different objective — cash flow, long-term appreciation, lifestyle flexibility, or permanent relocation.\n\nWe define your goal first, then align strategy, location, and timing accordingly.' },
  { title: 'Forward-Looking Market Insight', description: 'Through active involvement with developers, business leaders, and investment groups, we track what is coming — not just what exists today.\n\nUnderstanding how the island will evolve is essential to giving informed, forward-looking advice.' },
  { title: 'Long-Term Perspective', description: 'This is not transactional. I aim to build relationships based on clarity, professionalism, and strategic thinking — so years from now, you feel confident in the decision you made.' },
  { title: 'Professionalism & Continuous Expertise', description: 'Buying property in Roatan is a significant financial decision. We approach it with structure, transparency, and discipline — continuously refining our knowledge through exposure to other markets and emerging trends.' },
];

export default function AboutContent() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' }, { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.tomasfigueroa.com/about' }] }) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-caps block mb-5" style={{ color: '#789ead' }}>About Me</span>
              <h1
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 400,
                  color: '#ffffff',
                  marginTop: 0,
                  marginBottom: 20,
                  lineHeight: 1.15,
                }}
              >
                Tomas Figueroa
              </h1>
              <div style={{ marginBottom: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', display: 'block', marginBottom: 6 }}>The Practice</span>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>Buyer and seller representation, developer partnerships, and investment sourcing across Roatan and the Bay Islands — focused on the premium segment.</p>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', display: 'block', marginBottom: 6 }}>The Background</span>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>20+ years in international sales and business development across Latin America and the Caribbean, including 4 years as a boots-on-ground Realtor on Roatan.</p>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', display: 'block', marginBottom: 6 }}>The Market Thesis</span>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>Roatan is the Caribbean&apos;s last undervalued market. The single biggest catalyst still ahead is expat financing — today virtually every foreign purchase is all-cash, which artificially suppresses demand. When local or international lenders begin offering mortgages to non-residents, the buyer pool expands dramatically and prices reprice fast. The window to buy before that happens is now.</p>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', margin: 0 }}>Last reviewed: May 2026 · Licensed Realtor, Keller Williams Roatan</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Calendar style={{ width: 16, height: 16 }} /> Schedule a Call
                </a>
                <a href="tel:+50488488326" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', textDecoration: 'none', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Arial, Helvetica, sans-serif', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                >
                  <Phone style={{ width: 16, height: 16 }} /> (504) 8848-8326
                </a>
              </div>
            </div>
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src="/tomas-portrait.jpg" alt="Tomas Figueroa licensed Realtor Keller Williams Roatan" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{ backgroundColor: '#ffffff', padding: 32, textAlign: 'center', transition: `all 0.5s ${index * 100}ms` }}
                className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              >
                <stat.icon style={{ width: 36, height: 36, color: '#789ead', margin: '0 auto 16px' }} />
                <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 36, fontWeight: 700, color: '#093f4f', marginBottom: 8 }}>{stat.number}</div>
                <div style={{ fontSize: 13, color: '#63868d' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="label-caps block mb-4">Why Work With Me</span>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}
              >
                Why Work With Me?
              </h2>
              <div style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }} className="space-y-4">
                <p>With over 20 years of experience in international sales, business development, and leadership, I bring a strategic and disciplined approach to real estate in Roatan. As a licensed agent with Keller Williams Roatan, I advise buyers, sellers, and developers with clarity, structure, and a long-term perspective.</p>
                <p>For buyers and investors, I focus on aligning property selection with clearly defined objectives — whether that means cash flow, long-term appreciation, lifestyle flexibility, or relocation. Every opportunity is evaluated through market fundamentals, positioning, and future development patterns.</p>
                <p>For sellers and developers, I combine strategic pricing, global exposure, professional marketing, and strong negotiation to maximize positioning and value in Roatan&apos;s evolving market.</p>
              </div>
            </div>
            <div>
              <span className="label-caps block mb-4">My Approach</span>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}
              >
                My Approach to Roatan Real Estate
              </h2>
              <div style={{ borderTop: '1px solid #e5e7eb' }}>
                {values.map((value) => (
                  <div key={value.title} style={{ padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 8, marginTop: 0 }}>{value.title}</h3>
                    <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0, whiteSpace: 'pre-line' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">What I Offer</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 12 }}>Services I Offer</h2>
            <p style={{ fontSize: 14, color: '#555555', maxWidth: 480, margin: '0 auto' }}>Comprehensive real estate services tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Property Sales', desc: 'Sell your property with strategic marketing and negotiation.' },
              { title: 'Buyer Representation', desc: 'Find the right property with objective guidance and strategic evaluation.' },
              { title: 'Investment Consulting', desc: 'Identify high-quality opportunities through disciplined analysis and forward-looking market insight.' },
              { title: 'Relocation Services', desc: 'Relocate with confidence through structured guidance and local insight.' },
            ].map((service) => (
              <div key={service.title} style={{ backgroundColor: '#ffffff', padding: 24 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 8, marginTop: 0 }}>{service.title}</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#555555' }}>Have questions about buying in Roatan?{' '}
            <a href="/faq" style={{ color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >Browse our full FAQ →</a>
          </p>
        </div>
      </section>

      {/* CTA Block */}
      <section style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ backgroundColor: '#093f4f', padding: 48, textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>Ready to Explore Roatan Real Estate?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 28px' }}>Let&apos;s define your objectives and build a strategy aligned with your long-term goals.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Calendar style={{ width: 16, height: 16 }} /> Schedule a Call
              </a>
              <a href="mailto:tomas@kwroatan.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', textDecoration: 'none', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Arial, Helvetica, sans-serif', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              >
                <Mail style={{ width: 16, height: 16 }} /> tomas@kwroatan.com
              </a>
            </div>
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
              <MapPin style={{ width: 14, height: 14 }} /><span>Lawson Rock, Sandy Bay, Roatan, Honduras</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
