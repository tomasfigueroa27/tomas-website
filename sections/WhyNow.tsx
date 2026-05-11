const cards = [
  {
    num: '01',
    title: 'Improving Air Access',
    body: 'Year-round American Airlines service from Miami, daily Tropic Air from Belize City, and seasonal service from Houston, Dallas-Fort Worth, Atlanta, Denver, Minneapolis, Montreal, Toronto, and Guatemala City.',
  },
  {
    num: '02',
    title: 'Hospitality Validation',
    body: "Kimpton Grand Roatán is operating. Margaritaville Island Reserve broke ground in 2025 for a 2027 opening. International hotel chains don't follow demand — they signal it.",
  },
  {
    num: '03',
    title: 'A New Development Cycle',
    body: "A pipeline of 20+ projects coming through Roatán's next cycle. The question isn't whether Roatán will develop. The question is which projects preserve the lifestyle.",
  },
];

export default function WhyNow() {
  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              style={{
                padding: '32px 28px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#789ead',
                  margin: '0 0 16px',
                  lineHeight: 1,
                }}
              >
                {card.num}
              </p>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0 0 12px',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
