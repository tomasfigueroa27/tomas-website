'use client';

import Link from 'next/link';
import { trackSchedule, openSavvyCal, openBriefingModal } from '@/lib/analytics';

const Hero = () => {
  const handleSchedule = () => {
    trackSchedule();
    openSavvyCal();
  };

  return (
    <section id="hero" className="relative w-full flex flex-col" style={{ minHeight: 580 }}>
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt="Roatan beachfront real estate aerial view Bay Islands Honduras"
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
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Why Roatán, Why Now</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(34px, 4vw, 48px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Discover Roatán before everybody does.
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
            A simpler, small-island Caribbean lifestyle is becoming easier for U.S. buyers to reach, understand, and own. I help you choose the right location, project, and strategy — before the best parts of the island become obvious.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={handleSchedule} className="btn-accent">
              Schedule a Strategy Call
            </button>
            <button
              onClick={openBriefingModal}
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
              Download the Investor Briefing
            </button>
            <Link
              href="/where-to-buy-in-roatan"
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: 600 }}
            >
              Explore Where to Buy →
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
