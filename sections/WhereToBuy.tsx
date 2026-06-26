import Link from 'next/link';

const nodes = [
  {
    name: 'West Bay Beach',
    subline: 'FOR THE BEACH BUYER',
    hook: "Roatán's strongest vacation rental logic and highest-demand beachfront.",
    priceTier: '$300K – $2M+',
    href: '/neighborhoods/west-bay-beach',
  },
  {
    name: 'West End',
    subline: 'FOR THE WALKABLE BUYER',
    hook: 'Village lifestyle, world-class diving, authentic expat community.',
    priceTier: '$150K – $600K',
    href: '/neighborhoods/west-end',
  },
  {
    name: 'Sandy Bay',
    subline: 'FOR THE QUIET BUYER',
    hook: 'Quiet residential living near the reef with panoramic ocean views.',
    priceTier: '$200K – $800K',
    href: '/neighborhoods/sandy-bay',
  },
  {
    name: 'Pristine Bay',
    subline: 'FOR THE RESORT BUYER',
    hook: "Gated luxury, golf, marina, and Roatán's most exclusive address.",
    priceTier: '$400K – $3M+',
    href: '/neighborhoods/pristine-bay',
  },
  {
    name: 'French Harbour & East',
    subline: 'FOR THE EMERGING BUYER',
    hook: 'Authentic island life, commercial infrastructure, maximum value.',
    priceTier: '$100K – $400K',
    href: '/neighborhoods/french-harbour',
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
            Each area attracts a different buyer. Know where you fit before you compare listings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ marginBottom: 32 }}>
          {nodes.map((node) => (
            <Link
              key={node.name}
              href={node.href}
              style={{
                display: 'block',
                padding: '24px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(120,158,173,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
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
                  margin: '0 0 10px',
                }}
              >
                {node.name}
              </h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 14px' }}>
                {node.hook}
              </p>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 10,
                  fontWeight: 600,
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  color: '#789ead',
                  backgroundColor: 'rgba(120,158,173,0.12)',
                  padding: '3px 8px',
                  letterSpacing: '0.04em',
                }}
              >
                {node.priceTier}
              </span>
            </Link>
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
