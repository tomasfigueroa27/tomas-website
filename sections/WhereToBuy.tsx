import Link from 'next/link';

const nodes = [
  {
    name: 'West Bay',
    subline: 'FOR THE BEACH BUYER',
    body: 'The most recognizable beach on the island and the strongest vacation-rental logic. Premium oceanfront commands the highest $/sqft on Roatán.',
  },
  {
    name: 'West End',
    subline: 'FOR THE WALKABLE BUYER',
    body: 'Walkable village, restaurants, diving, and community. Authentic island character at a lower entry.',
  },
  {
    name: 'Sandy Bay',
    subline: 'FOR THE QUIET BUYER',
    body: 'Quieter residential life near the reef. The emerging luxury tier with panoramic ocean views.',
  },
  {
    name: 'Pristine Bay',
    subline: 'FOR THE RESORT BUYER',
    body: 'Gated resort amenities, golf, and a more controlled environment. The most institutional product on the island.',
  },
  {
    name: 'French Harbour & East',
    subline: 'FOR THE EMERGING BUYER',
    body: 'Emerging value, local infrastructure, and longer-term development exposure. Selective entry.',
  },
];

export default function WhereToBuy() {
  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 64, paddingBottom: 64, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 40 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Where to Buy</span>
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
            Five lifestyle nodes. One island.
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
            Roatán isn&apos;t one market. Each lifestyle node has a distinct character, price range, and future buyer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ marginBottom: 32 }}>
          {nodes.map((node) => (
            <div
              key={node.name}
              style={{
                padding: '28px 24px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#789ead',
                  margin: '0 0 10px',
                }}
              >
                {node.subline}
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
                {node.name}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
                {node.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/where-to-buy-in-roatan"
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#789ead',
            textDecoration: 'none',
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          Explore Where to Buy →
        </Link>
      </div>
    </section>
  );
}
