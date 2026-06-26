'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    num: '01',
    title: 'Access Is Opening',
    body: 'United, American, and Air Canada — new nonstop routes keep arriving.',
  },
  {
    num: '02',
    title: 'Branded Hospitality Has Arrived',
    body: "Kimpton is open. Margaritaville breaks ground in 2025. Meliá signed in 2026.",
  },
  {
    num: '03',
    title: 'A New Development Cycle',
    body: '20+ projects in the pipeline — the question is which ones preserve what makes Roatán worth coming to.',
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

        <div ref={ref} className="grid sm:grid-cols-3 gap-4">
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

        <div style={{ marginTop: 32 }}>
          <Link
            href="/blog/roatan-q1-2026-market-report"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#789ead',
              textDecoration: 'none',
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            Read the Q1 2026 market report →
          </Link>
        </div>
      </div>
    </section>
  );
}
