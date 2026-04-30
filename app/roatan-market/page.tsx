import type { Metadata } from 'next';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roatan Real Estate Market 2026',
  description: 'Up-to-date Roatan real estate market data: average prices, rental yields, foreign ownership rules, buying process, and key investment facts for 2026.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/roatan-market' },
};

const stats = [
  { label: 'Average Condo Price', value: '$285,000' },
  { label: 'Average Home Price', value: '$425,000' },
  { label: 'Avg. Rental Yield', value: '6–8%' },
  { label: 'Annual Tourism', value: '1.2M+ Visitors' },
  { label: 'Property Appreciation', value: '5–8% Annually' },
  { label: 'Foreign Ownership', value: '100% Allowed' },
];

const buyingSteps = [
  { step: 1, title: 'Define Your Goals', description: 'Determine whether you are buying for personal use, rental income, long-term appreciation, or relocation. This shapes every subsequent decision about location, property type, and budget.' },
  { step: 2, title: 'Engage a Local Agent', description: 'Work with a licensed local agent who understands the Roatan market. A knowledgeable agent will help you identify suitable properties, evaluate pricing, and navigate the legal process.' },
  { step: 3, title: 'Hire a Honduran Attorney', description: 'A licensed Honduran real estate attorney is required to conduct title searches, draft purchase agreements, and register the transfer with the Public Property Registry. This is not optional — it is essential.' },
  { step: 4, title: 'Due Diligence & Agreement', description: 'Your attorney conducts a title search to confirm clean ownership. Once clear, both parties sign a purchase agreement (promissory contract), typically accompanied by a deposit of 10–20% of the purchase price.' },
  { step: 5, title: 'Closing & Title Transfer', description: 'The final deed (escritura) is executed before a Honduran notary and registered in the Public Property Registry. Upon completion, title transfers to you and you receive the registered deed.' },
];

const marketSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Roatan Real Estate Market Guide 2026', description: 'Comprehensive overview of the Roatan, Honduras real estate market.', author: { '@type': 'Person', name: 'Tomas Figueroa', url: 'https://www.tomasfigueroa.com/about' }, publisher: { '@type': 'Organization', name: 'Tomas Figueroa Real Estate', url: 'https://www.tomasfigueroa.com' }, url: 'https://www.tomasfigueroa.com/roatan-market', datePublished: '2026-04-01', dateModified: '2026-04-01' };
const howToSchema = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Buy Property in Roatan, Honduras', description: 'Step-by-step guide to purchasing real estate in Roatan as a foreign buyer.', totalTime: 'P90D', step: buyingSteps.map((item) => ({ '@type': 'HowToStep', position: item.step, name: item.title, text: item.description })) };

export default function RoatanMarketPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Market Guide 2026</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Roatan Real Estate Market
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            Key data, pricing benchmarks, investment fundamentals, and everything you need to understand the Roatan property market before making a decision.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Overview</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Market Overview</h2>
          <div style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }} className="space-y-4">
            <p>Roatan&apos;s real estate market has matured steadily over the past two decades, evolving from an undiscovered dive destination into a recognized Caribbean investment market. Property values have appreciated consistently, driven by growing international tourism, increasing direct flight connectivity, and a rising pool of foreign buyers seeking alternatives to more expensive Caribbean markets like the Cayman Islands, Turks and Caicos, and Belize.</p>
            <p>The market is characterized by a wide price range — from affordable entry-level homes in Coxen Hole to ultra-luxury oceanfront villas at Pristine Bay. Foreign buyers make up a significant portion of transactions, particularly in the western end of the island, where tourism infrastructure is most developed.</p>
            <p>Unlike some Caribbean markets, Roatan does not impose restrictions on foreign ownership, and the legal framework for property acquisition — while different from North American processes — is well-established and navigable with the right professional guidance.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Key Numbers</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 0 }}>Key Market Statistics</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} style={{ backgroundColor: '#ffffff', padding: 28, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 32, fontWeight: 700, color: '#093f4f', marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: '#63868d', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 11, color: '#999999', marginTop: 20 }}>Market data reflects 2025–2026 averages based on Keller Williams Roatan transaction data and local MLS records.</p>
        </div>
      </section>

      {/* Foreign Ownership */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Legal Framework</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Foreign Ownership in Roatan</h2>
          <div style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }} className="space-y-4">
            <p>Honduras law grants foreigners the same property ownership rights as Honduran citizens. There are no restrictions on the amount of property a foreigner can own, no requirements to use a local partner or intermediary, and no nationality-based exclusions. You can hold title directly in your personal name or through a Honduran corporation.</p>
            <p>This is a significant advantage compared to some other Latin American and Caribbean countries that restrict foreign ownership or require complex corporate structures. In Roatan, the process is direct: find the property, engage an attorney, complete due diligence, and register the deed in your name at the Public Property Registry.</p>
            <p>It is worth noting that purchasing property in Honduras does not automatically confer permanent residency, though there are separate residency programs available for retirees and investors. Tomas can connect you with the right legal resources to explore both the real estate purchase and residency pathways if relocation is part of your plan.</p>
          </div>
        </div>
      </section>

      {/* Buying Steps */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Process</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 0 }}>The Buying Process: 5 Steps</h2>
          </div>
          <div style={{ borderTop: '1px solid #d4e8ed' }}>
            {buyingSteps.map((item) => (
              <div key={item.step} style={{ padding: '24px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 8, marginTop: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="section-container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#555555' }}>Have questions about the buying process or market?{' '}<a href="/faq" style={{ color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}>Browse our full FAQ →</a></p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ backgroundColor: '#093f4f', padding: '40px 32px', textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>Ready to Explore the Roatan Market?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>Tomas can walk you through current listings, neighborhood comparisons, and investment strategy tailored to your specific goals.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Calendar style={{ width: 16, height: 16 }} aria-hidden="true" /> Schedule a Call with Tomas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
