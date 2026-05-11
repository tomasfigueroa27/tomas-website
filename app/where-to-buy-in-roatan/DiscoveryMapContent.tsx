'use client';

import { openBriefingModal, trackSchedule, openSavvyCal } from '@/lib/analytics';

export default function DiscoveryMapContent() {
  const handleSchedule = () => {
    trackSchedule();
    openSavvyCal();
  };

  return (
    <>
      {/* ── Hero (compact — map is the showpiece) ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Where to Buy in Roatán</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            One island. Five lifestyles.
          </h1>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              marginTop: 16,
              marginBottom: 0,
              maxWidth: 560,
            }}
          >
            Roatán isn&apos;t one market. Tap any node on the map to explore the lifestyle, the price range, and the buyer it attracts.
          </p>
        </div>
      </section>
    </>
  );
}
