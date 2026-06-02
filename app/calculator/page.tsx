import type { Metadata } from 'next';
import ClosingCalculator from '@/components/ClosingCalculator';

export const metadata: Metadata = {
  title: 'Roatán Closing Cost Calculator — Estimate Your Total Acquisition Cost',
  description: 'Estimate your total closing costs before making an offer on Roatán property. Calculate transfer tax, attorney fees, and registration costs for direct or corporate share purchases. Tomás Figueroa, Roatan Reef.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/calculator' },
  openGraph: {
    title: 'Roatán Closing Cost Calculator — Tomás Figueroa Real Estate',
    description: 'Estimate transfer tax, attorney fees, and registration costs for buying property in Roatán, Honduras — before you make an offer.',
    url: 'https://www.tomasfigueroa.com/calculator',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Roatán Closing Cost Calculator' }],
  },
};

export default function CalculatorPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Closing Cost Calculator', item: 'https://www.tomasfigueroa.com/calculator' },
    ],
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Free Tool</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Closing Cost Calculator
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto' }}>
            Estimate your total closing costs for a Roatán property purchase in seconds.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="section-container">
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 16 }}>
            What This Calculator Does
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Buying property in Roatán involves more than just the listing price. Closing costs in Honduras are real and need to be factored into your budget before you make an offer — not after.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            This calculator estimates your total acquisition cost based on purchase price, purchase structure (asset vs. corporation), legal fees, transfer taxes, and prorated items like HOA dues or property taxes. It covers both buyer and seller cost scenarios.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 10 }}>Key costs to know before you run the numbers:</p>
          <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
            {[
              { label: 'Transfer tax', detail: '3% of the purchase price (applies to asset purchases)' },
              { label: 'Legal fees', detail: 'Typically 2–3% of the purchase price, paid to your Honduran attorney' },
              { label: 'Corporation setup', detail: 'If buying through a new Honduran entity, expect an additional $700–$1,500' },
              { label: 'Property taxes in Roatán', detail: 'Very low — generally 0.3–0.5% of assessed value annually' },
            ].map(({ label, detail }) => (
              <li key={label} style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 8 }}>
                <strong style={{ color: '#093f4f' }}>{label}:</strong> {detail}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Local bank financing is not available for foreign buyers. Most transactions are cash or home-country financed, so knowing your full out-of-pocket number matters from day one.
          </p>
          <p style={{ fontSize: 13, color: '#888888', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
            These are estimates. Always confirm exact costs with a licensed Honduran attorney before closing.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 64 }}>
        <div className="section-container">
          <ClosingCalculator />
        </div>
      </section>
    </div>
  );
}
