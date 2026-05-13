'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    num: '01',
    title: 'Improving Air Access',
    body: 'Year-round American Airlines from Miami, United from Houston, Delta from Atlanta, Sun Country from Minneapolis. Air Canada launching nonstop service from Montréal and Toronto in December 2026.',
  },
  {
    num: '02',
    title: 'Branded Hospitality',
    body: "Kimpton Grand Roatán is operating on West Bay. Margaritaville Island Reserve broke ground in 2025 for a 2027 opening. Hotel Roatán Media Luna joined the Meliá portfolio in 2026. Institutional brands don't commit on hope.",
  },
  {
    num: '03',
    title: 'A New Development Cycle',
    body: 'A pipeline of 20+ projects is coming through the island. The question is not whether Roatán will develop — it is which projects preserve the lifestyle and which ones dilute it.',
  },
  {
    num: '04',
    title: 'Growing U.S. Buyer Awareness',
    body: 'Buyers pricing themselves out of Cayman, Turks & Caicos, and Belize are arriving at Roatán. The discovery curve is steepening — and direct-flight access is accelerating it.',
  },
  {
    num: '05',
    title: 'Still Personal. Still Small-Island.',
    body: 'The reef is still right there. Communities still feel personal. Land is still limited. That combination disappears as a market matures — and this one has not matured yet.',
  },
];

export default function WhyNow() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 72, paddingBottom: 72, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Why Now</span>
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
            No longer hidden. Not yet fully discovered.
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
            That middle stage is where opportunity lives.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.num}
              style={{
                padding: '28px 24px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                transitionDelay: visible ? `${i * 80}ms` : '0ms',
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#789ead',
                  margin: '0 0 14px',
                  lineHeight: 1,
                }}
              >
                {card.num}
              </p>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0 0 10px',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
