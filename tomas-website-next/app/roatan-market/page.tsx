import type { Metadata } from 'next';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roatan Real Estate Market Guide 2026 | Tomas Figueroa',
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
    <div className="min-h-screen pt-24 pb-20 bg-[#f5f2ee]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="relative py-20 bg-[#093f4f] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">Market Guide 2026</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Roatan Real Estate Market</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Key data, pricing benchmarks, investment fundamentals, and everything you need to understand the Roatan property market before making a decision.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093f4f] mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Market Overview</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Roatan&apos;s real estate market has matured steadily over the past two decades, evolving from an undiscovered dive destination into a recognized Caribbean investment market. Property values have appreciated consistently, driven by growing international tourism, increasing direct flight connectivity, and a rising pool of foreign buyers seeking alternatives to more expensive Caribbean markets like the Cayman Islands, Turks and Caicos, and Belize.</p>
            <p>The market is characterized by a wide price range — from affordable entry-level homes in Coxen Hole to ultra-luxury oceanfront villas at Pristine Bay. Foreign buyers make up a significant portion of transactions, particularly in the western end of the island, where tourism infrastructure is most developed.</p>
            <p>Unlike some Caribbean markets, Roatan does not impose restrictions on foreign ownership, and the legal framework for property acquisition — while different from North American processes — is well-established and navigable with the right professional guidance.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f2ee]">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093f4f] mb-10 text-center" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Key Market Statistics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#093f4f] mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">Market data reflects 2025–2026 averages based on Keller Williams Roatan transaction data and local MLS records.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093f4f] mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Foreign Ownership in Roatan</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Honduras law grants foreigners the same property ownership rights as Honduran citizens. There are no restrictions on the amount of property a foreigner can own, no requirements to use a local partner or intermediary, and no nationality-based exclusions. You can hold title directly in your personal name or through a Honduran corporation.</p>
            <p>This is a significant advantage compared to some other Latin American and Caribbean countries that restrict foreign ownership or require complex corporate structures. In Roatan, the process is direct: find the property, engage an attorney, complete due diligence, and register the deed in your name at the Public Property Registry.</p>
            <p>It is worth noting that purchasing property in Honduras does not automatically confer permanent residency, though there are separate residency programs available for retirees and investors. Tomas can connect you with the right legal resources to explore both the real estate purchase and residency pathways if relocation is part of your plan.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f2ee]">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093f4f] mb-10 text-center" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>The Buying Process: 5 Steps</h2>
          <div className="space-y-6">
            {buyingSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#093f4f] text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#093f4f] mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="section-container max-w-4xl text-center">
          <p className="text-gray-600">Have questions about the buying process or market?{' '}<a href="/faq" className="text-[#093f4f] font-medium hover:underline">Browse our full FAQ →</a></p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container max-w-4xl">
          <div className="bg-[#093f4f] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Ready to Explore the Roatan Market?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Tomas can walk you through current listings, neighborhood comparisons, and investment strategy tailored to your specific goals.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white text-[#093f4f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              <Calendar className="w-5 h-5" aria-hidden="true" /> Schedule a Call with Tomas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
