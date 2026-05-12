'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const Properties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showIDX, setShowIDX] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" ref={sectionRef} style={{ backgroundColor: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="label-caps block mb-4">Property Listings</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#093f4f',
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            Search All Properties
          </h2>
          <p style={{ fontSize: 14, color: '#555555', maxWidth: 520, margin: '0 auto' }}>Browse all available properties in Roatán directly from the MLS. Use the search tools below to filter by price, location, and more.</p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {!showIDX ? (
            <div
              onClick={() => setShowIDX(true)}
              style={{ backgroundColor: '#093f4f', padding: 48, textAlign: 'center', color: '#ffffff', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0b5068')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#093f4f')}
            >
              <div style={{ width: 72, height: 72, backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Search style={{ width: 36, height: 36 }} />
              </div>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 24, fontWeight: 400, marginBottom: 8, marginTop: 0 }}>Load MLS Search</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>Click to search all Roatan MLS listings</p>
              <span className="btn-accent" style={{ display: 'inline-flex', gap: 8, pointerEvents: 'none' }}>
                Start Searching <ExternalLink style={{ width: 14, height: 14 }} />
              </span>
            </div>
          ) : (
            <div style={{ backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid #d4e8ed' }}>
              <div style={{ backgroundColor: '#093f4f', color: '#ffffff', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Roatan MLS Listings</h3>
                <button onClick={() => setShowIDX(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 12, fontFamily: 'Arial, Helvetica, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >Close</button>
              </div>
              <iframe src="//link.flexmls.com/1tqd8emfew7q,2" frameBorder={0} width="100%" height="850" title="Roatan MLS Listings" className="w-full" />
            </div>
          )}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p style={{ fontSize: 14, color: '#555555', marginBottom: 12 }}>Can&apos;t find what you&apos;re looking for? Let&apos;s talk about exclusive listings.</p>
          <a
            href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
            target="_blank"
            rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#093f4f', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#63868d')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#093f4f')}
          >
            LET&apos;S TALK <ExternalLink style={{ width: 13, height: 13 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
