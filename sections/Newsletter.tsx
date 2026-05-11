'use client';

import { useEffect, useRef, useState } from 'react';

const Newsletter = () => {
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
      id="newsletter"
      ref={sectionRef}
      style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}
    >
      <div className="section-container" style={{ maxWidth: 640, textAlign: 'center' }}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="label-caps block mb-4">Stay Informed</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 28,
              fontWeight: 400,
              color: '#093f4f',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            Roatan Real Estate Insights &amp; Opportunities
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 28 }}>
            Market updates, new developments, and strategic analysis — for investors and buyers who want clarity before committing.
          </p>

          <form
            name="newsletter"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden', opacity: 0 }} aria-hidden="true">
              <label>Do not fill this out
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div style={{ display: 'flex', border: '1px solid #d4e8ed', marginBottom: 12 }}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  padding: '13px 16px',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 13,
                  color: '#333333',
                  backgroundColor: '#ffffff',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '13px 24px',
                  backgroundColor: '#093f4f',
                  color: '#ffffff',
                  border: 'none',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0b5068')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#093f4f')}
              >
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: 11, color: '#999999', lineHeight: 1.6 }}>
              No spam. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
