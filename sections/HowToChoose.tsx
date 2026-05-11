'use client';

import { openBriefingModal } from '@/lib/analytics';

const criteria = [
  {
    num: '01',
    title: 'Location',
    body: 'West Bay, select West End, Sandy Bay waterfront, Pristine Bay, and emerging nodes with genuine access, views, or resort logic.',
  },
  {
    num: '02',
    title: 'View & Access',
    body: 'Beachfront, walkable beach access, protected ocean views, marina access, or reef-adjacent lifestyle.',
  },
  {
    num: '03',
    title: 'Legal Clarity',
    body: 'Clean title, clear ownership structure, transparent HOA rules, rental permissions, and professional closing guidance.',
  },
  {
    num: '04',
    title: 'Product Quality',
    body: 'Architecture, finishes, layout, amenities, and maintenance standards that match the future buyer pool.',
  },
  {
    num: '05',
    title: 'Rental Realism',
    body: 'Conservative underwriting that separates gross rental revenue from net owner cash flow.',
  },
  {
    num: '06',
    title: 'Exit Liquidity',
    body: 'A future buyer should understand the asset quickly without needing a complicated explanation.',
  },
];

export default function HowToChoose() {
  return (
    <section style={{ backgroundColor: '#093f4f', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>How to Choose</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Start with the lifestyle. Then underwrite the asset.
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>
            A disciplined buyer should prioritize:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: 48 }}>
          {criteria.map((c) => (
            <div key={c.num}>
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#789ead',
                  margin: '0 0 10px',
                  lineHeight: 1,
                }}
              >
                {c.num}
              </p>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 17,
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0 0 10px',
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={openBriefingModal} className="btn-accent">
            Get the full Investor Briefing →
          </button>
        </div>
      </div>
    </section>
  );
}
