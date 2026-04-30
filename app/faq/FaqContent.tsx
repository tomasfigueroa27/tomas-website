'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #e5e7eb', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '18px 24px',
          textAlign: 'left',
          backgroundColor: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f2ee')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
        aria-expanded={open}
      >
        <span style={{ fontWeight: 600, color: '#093f4f', fontSize: 14 }}>{q}</span>
        {open
          ? <ChevronUp style={{ width: 18, height: 18, color: '#093f4f', flexShrink: 0 }} aria-hidden="true" />
          : <ChevronDown style={{ width: 18, height: 18, color: '#093f4f', flexShrink: 0 }} aria-hidden="true" />}
      </button>
      {open && (
        <div style={{ padding: '16px 24px', backgroundColor: '#f5f2ee', fontSize: 14, color: '#555555', lineHeight: 1.75, borderTop: '1px solid #e5e7eb' }}>{a}</div>
      )}
    </div>
  );
};

const themes = [
  {
    id: 'ownership-legal',
    title: 'Foreign Ownership & Legal',
    faqs: [
      { q: 'Can foreigners buy property in Roatán?', a: "Yes. Foreigners can own property in Honduras and hold title directly in their own name. In general, an individual foreign buyer can purchase up to 3,000 square meters (approximately 0.74 acres) in their personal name. For larger parcels or more complex holdings, a Honduran legal structure may be used, depending on the buyer's goals and legal advice." },
      { q: 'Do I need a lawyer to buy property in Honduras?', a: 'Yes — a licensed Honduran attorney is essential for any real estate transaction. Your attorney will conduct the title search, draft and review legal documents, represent you at closing, and register the title transfer with the Public Property Registry. Attempting to purchase without proper legal representation in Honduras carries significant risk.' },
      { q: 'Is title insurance available in Honduras?', a: 'Title insurance is available in Honduras but is not as widely used as in the United States. The primary protection comes from a thorough title search conducted by your Honduran attorney, who will verify that the property has clean title and no encumbrances, liens, or competing claims before the purchase is completed.' },
      { q: 'What taxes apply to property owners in Roatan?', a: 'Property owners in Roatan pay annual municipal property taxes (impuesto sobre bienes inmuebles), which are generally very low compared to North American standards. A transfer tax applies at the time of purchase. Foreign owners are also subject to Honduran income tax on any rental income generated in Honduras, though rates and obligations vary by situation.' },
    ],
  },
  {
    id: 'buying-process',
    title: 'The Buying Process',
    faqs: [
      { q: 'What is the process for buying property in Roatán?', a: 'The process starts with working with a knowledgeable realtor, followed by submitting an offer. Once accepted, a 10% earnest money deposit is typically wired within 7 business days to escrow. Your attorney then conducts due diligence, and closing usually takes place around 30 days later with the deed executed before a Honduran notary.' },
      { q: 'How long does the buying process take in Roatan?', a: 'A typical Roatan property transaction takes 90–180 days from signed agreement to completed title transfer. The process includes a title search by a licensed Honduran attorney, due diligence period, deposit payment, and final closing before a notary.' },
      { q: 'What fees should I expect when buying property in Roatan?', a: 'Closing costs are typically 3–6%, depending on whether the purchase is structured as a direct transfer or a corporate share transfer. This generally includes taxes, legal fees, and registration costs, while agent commissions are paid by the seller.' },
    ],
  },
  {
    id: 'financing',
    title: 'Financing',
    faqs: [
      { q: 'Can I get financing for a new development in Roatán?', a: 'Financing for foreigners is more limited than in other markets, but options are growing. Some developments offer payment plans (typically 30–50% down, with balances spread over 3–5 years), while traditional bank financing in Honduras is generally not available.' },
      { q: 'What is the process for purchasing a pre-construction property?', a: 'Pre-construction purchases typically begin with a reservation deposit to lock in pricing, followed by a purchase agreement and a construction draw schedule. A Honduran attorney should review all documents before you commit. Title is transferred after construction is completed and the property is registered. It is critical to work with reputable developers and have legal representation throughout the process.' },
    ],
  },
  {
    id: 'investment-market',
    title: 'Investment & Market',
    faqs: [
      { q: 'Is Roatán a good real estate investment?', a: 'It depends on your goals. Roatán can deliver strong returns for vacation rentals, steady appreciation over time, or lifestyle value—but the outcome comes down to buying the right property in the right location.' },
      { q: 'What types of properties are available in Roatán?', a: 'Roatán offers a broad range of properties—from simple island homes in secluded locations to beachfront condos, hillside homes, luxury villas, gated communities, private cays, pre-construction opportunities, and properties with stunning ocean views.' },
      { q: 'What is the typical price range for new developments in Roatan?', a: 'New development prices in Roatan vary widely by location and project type. Entry-level units in emerging areas can start around $150,000–$200,000, while luxury units in established communities like Pristine Bay or premium West Bay projects can reach $1 million or more. Pre-construction pricing typically offers a discount relative to completed units.' },
      { q: 'What new developments are currently available in Roatan?', a: 'Roatan has several active new development projects across different price points and locations — from luxury resort-style communities on the west end to emerging residential projects further east. The development landscape changes frequently. Contact Tomas directly for an up-to-date overview of what is available and coming to market.' },
    ],
  },
  {
    id: 'neighborhoods',
    title: 'Neighborhoods',
    faqs: [
      { q: 'What areas of Roatán have the best new developments?', a: "The west side of the island continues to have the highest concentration of new developments, as it's where demand is strongest. That said, we're now seeing new projects expanding across the entire island, all the way to the East End, offering a wider range of opportunities depending on your goals." },
      { q: 'Which Roatan neighborhood is best for vacation rental investment?', a: 'West Bay Beach consistently delivers the highest short-term rental yields on Roatan, driven by its world-class beach and proximity to the cruise port. West End is a strong second for budget-conscious travelers. For premium long-term appreciation, Pristine Bay is the top pick.' },
      { q: 'What is the most affordable neighborhood in Roatan?', a: 'Coxen Hole and French Harbour offer the most affordable real estate on the island, with condos starting under $100,000 and homes below $200,000 in some cases. These neighborhoods are popular with buyers who prioritize value and local character over beachfront luxury.' },
      { q: 'Which neighborhood in Roatan is best for expat living?', a: 'West End is widely regarded as the most expat-friendly neighborhood on Roatan. It has a walkable village atmosphere, a well-established community of foreign residents, numerous restaurants and dive shops, and relatively affordable real estate compared to West Bay Beach.' },
      { q: 'Are there gated communities in Roatan?', a: 'Yes — Pristine Bay Resort is the premier master-planned gated community on the island, offering resort-style amenities, 18-hole golf, and branded residences. Sandy Bay and other areas also have smaller gated or managed residential developments with security and shared facilities.' },
      { q: 'Can I find beachfront property in Roatan under $300,000?', a: 'Beachfront properties in Roatan range from around $150,000 for smaller condos in developing areas to several million for luxury oceanfront villas. Entry-level beachfront condos in West End or Sandy Bay can occasionally be found under $300,000, though inventory is limited. West Bay Beach beachfront typically starts above that threshold.' },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started with Tomas',
    faqs: [
      { q: 'How do I get started with Tomas Figueroa?', a: 'The best first step is a 30-minute strategy call. Tomas will listen to your goals, walk you through current market conditions, step by step process review and explain how to approach finding the right property in Roatan.' },
    ],
  },
];

const allFaqs = themes.flatMap((t) => t.faqs);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.tomasfigueroa.com/faq' },
  ],
};

export default function FaqContent() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Frequently Asked Questions</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Roatan Real Estate FAQ
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560 }}>
            Common questions about buying, investing, and living in Roatan — organized by topic.
          </p>
        </div>
      </section>

      {/* Topic nav */}
      <section style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff', position: 'sticky', top: 72, zIndex: 10 }}>
        <div className="section-container">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {themes.map((theme) => (
              <a
                key={theme.id}
                href={`#${theme.id}`}
                style={{
                  whiteSpace: 'nowrap',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#999999',
                  textDecoration: 'none',
                  flexShrink: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#093f4f')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#999999')}
              >
                {theme.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {themes.map((theme) => (
              <div key={theme.id} id={theme.id}>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#093f4f',
                    marginTop: 0,
                    marginBottom: 16,
                  }}
                >
                  {theme.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {theme.faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <div style={{ backgroundColor: '#093f4f', padding: '40px 32px', textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 10 }}>Still have questions?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24 }}>Schedule a free 30-minute call with Tomas and get straight answers for your specific situation.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Calendar style={{ width: 16, height: 16 }} /> Schedule a Call with Tomas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
