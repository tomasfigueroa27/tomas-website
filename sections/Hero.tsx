'use client';

import Link from 'next/link';

const stats = [
  { value: '7%', label: '5-year CAGR of median sold price' },
  { value: '$400K', label: 'Avg home price 2025' },
  { value: '20+', label: 'Years of Sales Experience' },
  { value: '#1', label: 'Bitcoin sale in Roatán' },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full flex flex-col" style={{ minHeight: 580 }}>
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt="Roatan beach aerial view"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(9,63,79,0.87)' }} />
      </div>

      <div
        className="relative z-10 section-container flex-1 flex items-center"
        style={{ paddingTop: 140, paddingBottom: 64 }}
      >
        <div style={{ maxWidth: 620 }}>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(38px, 4vw, 42px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Should You Invest or Move to Roatan? Start With Clarity
          </h1>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              marginTop: 20,
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Strategic real estate guidance for investors and buyers considering property in Roatan, Honduras.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/properties" className="btn-accent">
              Browse MLS
            </Link>
            <button
              onClick={() => scrollToSection('cta')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Sell Property
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative z-10"
        style={{ backgroundColor: 'rgba(9,63,79,0.95)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 16px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#d4e8ed',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: 6,
                    marginBottom: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
