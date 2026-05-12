'use client';

import { openBriefingModal } from '@/lib/analytics';

const criteria = [
  {
    num: '01',
    title: 'Location Fit',
    body: 'West Bay, select West End, Sandy Bay waterfront, Pristine Bay, and emerging nodes with genuine access, views, or resort logic — matched to your lifestyle and use case.',
  },
  {
    num: '02',
    title: 'Project Selection',
    body: 'Finding the right project type — pre-construction, resale, beachfront, hillside — against your use case, hold period, and exit expectations.',
  },
  {
    num: '03',
    title: 'Title & Legal Clarity',
    body: 'Clean title, clear ownership structure, transparent HOA rules, rental permissions confirmed in writing, and professional closing guidance from an independent Honduran attorney.',
  },
  {
    num: '04',
    title: 'Developer Quality',
    body: 'Vetting the developer behind a project — track record, completed phases, financial structure, delivery timeline, and alignment between what is promised and what gets built.',
  },
  {
    num: '05',
    title: 'Rental Realism',
    body: 'Conservative underwriting that separates gross rental revenue from net owner cash flow — after management fees, HOA, maintenance, vacancy, and seasonal slowdowns.',
  },
  {
    num: '06',
    title: 'Exit Strategy',
    body: 'A future buyer should understand the asset quickly and cleanly. Liquidity depends on location, legal structure, and product quality — all evaluated at entry, not at exit.',
  },
];

export default function HowToChoose() {
  return (
    <section style={{ backgroundColor: '#093f4f', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>How Tomás Helps</span>
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
            Every buyer Tomás works with goes through the same six disciplines:
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
