'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{ backgroundColor: '#093f4f', paddingTop: 64, paddingBottom: 64 }}
    >
      <div className="section-container">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="label-caps block mb-6" style={{ color: '#789ead' }}>
              Ready to Sell in Roatan?
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 400,
                color: '#ffffff',
                marginTop: 0,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Position Your Property for Maximum Value
            </h2>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                marginBottom: 40,
                maxWidth: 560,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Selling property in Roatan requires more than listing it — it requires
              positioning, strategy, and disciplined execution. I guide you through pricing,
              marketing, and negotiation to ensure your property achieves its full market potential.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="tel:+50488488326"
              style={{
                display: 'block',
                padding: 24,
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)')}
            >
              <div style={{ width: 44, height: 44, backgroundColor: 'rgba(120,158,173,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Phone style={{ width: 18, height: 18, color: '#d4e8ed' }} />
              </div>
              <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#ffffff', marginBottom: 6, marginTop: 0 }}>Call Now</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0 }}>(504) 8848-8326</p>
            </a>

            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                padding: 24,
                backgroundColor: '#ffffff',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f2ee')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              <div style={{ width: 44, height: 44, backgroundColor: '#d4e8ed', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Calendar style={{ width: 18, height: 18, color: '#093f4f' }} />
              </div>
              <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 6, marginTop: 0 }}>Schedule a Call</h3>
              <p style={{ fontSize: 12, color: '#63868d', margin: 0 }}>Book a consultation</p>
            </a>

            <a
              href="https://wa.me/50488488326"
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                padding: 24,
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)')}
            >
              <div style={{ width: 44, height: 44, backgroundColor: 'rgba(120,158,173,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <MessageCircle style={{ width: 18, height: 18, color: '#d4e8ed' }} />
              </div>
              <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#ffffff', marginBottom: 6, marginTop: 0 }}>WhatsApp</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0 }}>Send a message</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
