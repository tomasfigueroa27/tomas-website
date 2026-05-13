'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const POINTS = [
  "Airlift is improving, branded hospitality is arriving, and a new development cycle is raising the product standard.",
  "International buyers are starting to see Roatán as more than a diving destination — before the best parts become obvious.",
];

export default function LifestyleThesis() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left: heading + thesis points */}
          <div
            ref={leftRef}
            className="lg:col-span-3"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <span className="label-caps block mb-4" style={{ color: '#789ead' }}>The Thesis</span>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 400,
                color: '#ffffff',
                marginTop: 0,
                marginBottom: 28,
                lineHeight: 1.2,
              }}
            >
              A Caribbean lifestyle still in early discovery.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {POINTS.map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ width: 4, height: 4, backgroundColor: '#789ead', flexShrink: 0, marginTop: 9, display: 'block' }} />
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pull quote panel */}
          <div
            ref={rightRef}
            className="lg:col-span-2"
            style={{
              borderLeft: '3px solid #789ead',
              padding: '32px 28px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            <blockquote
              style={{
                margin: 0,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(19px, 1.8vw, 24px)',
                fontStyle: 'italic',
                color: '#d4e8ed',
                lineHeight: 1.55,
              }}
            >
              &ldquo;That is the opportunity. To discover Roatán before the market becomes easy.&rdquo;
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
