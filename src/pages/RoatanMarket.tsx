import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem = ({ q, a }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f5f5f5] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1d1d1d]">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#04649b] shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#04649b] shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="px-6 py-5 bg-[#f5f5f5] text-gray-700 leading-relaxed border-t border-gray-200">
          {a}
        </div>
      )}
    </div>
  );
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
  {
    step: 1,
    title: 'Define Your Goals',
    description:
      'Determine whether you are buying for personal use, rental income, long-term appreciation, or relocation. This shapes every subsequent decision about location, property type, and budget.',
  },
  {
    step: 2,
    title: 'Engage a Local Agent',
    description:
      'Work with a licensed local agent who understands the Roatan market. A knowledgeable agent will help you identify suitable properties, evaluate pricing, and navigate the legal process.',
  },
  {
    step: 3,
    title: 'Hire a Honduran Attorney',
    description:
      'A licensed Honduran real estate attorney is required to conduct title searches, draft purchase agreements, and register the transfer with the Public Property Registry. This is not optional — it is essential.',
  },
  {
    step: 4,
    title: 'Due Diligence & Agreement',
    description:
      'Your attorney conducts a title search to confirm clean ownership. Once clear, both parties sign a purchase agreement (promissory contract), typically accompanied by a deposit of 10–20% of the purchase price.',
  },
  {
    step: 5,
    title: 'Closing & Title Transfer',
    description:
      'The final deed (escritura) is executed before a Honduran notary and registered in the Public Property Registry. Upon completion, title transfers to you and you receive the registered deed.',
  },
];

const faqs = [
  {
    q: 'Can foreigners own property in Roatan?',
    a: 'Yes — Honduras law allows foreigners to own real property outright with the same rights as Honduran citizens. There are no restrictions on foreign ownership, and you can hold title directly in your name or through a Honduran corporation. Foreign ownership is one of the most attractive features of the Roatan real estate market.',
  },
  {
    q: 'What are closing costs when buying property in Roatan?',
    a: 'Closing costs in Roatan typically run 5–8% of the purchase price. This includes the transfer tax (approximately 1.5%), attorney fees (1–2%), registration fees, and other administrative costs. Buyers should budget for these costs in addition to the purchase price.',
  },
  {
    q: 'How long does the buying process take in Roatan?',
    a: 'A typical real estate transaction in Roatan takes 60–120 days from signed purchase agreement to completed title transfer. The timeline depends on the complexity of the title search, responsiveness of both parties, and the speed of the Public Property Registry. Having an experienced local attorney significantly streamlines the process.',
  },
  {
    q: 'Is title insurance available in Honduras?',
    a: 'Title insurance is available in Honduras but is not as widely used as in the United States. The primary protection comes from a thorough title search conducted by your Honduran attorney, who will verify that the property has clean title and no encumbrances, liens, or competing claims before the purchase is completed.',
  },
  {
    q: 'What taxes apply to property owners in Roatan?',
    a: 'Property owners in Roatan pay annual municipal property taxes (impuesto sobre bienes inmuebles), which are generally very low compared to North American standards. A transfer tax applies at the time of purchase. Foreign owners are also subject to Honduran income tax on any rental income generated in Honduras, though rates and obligations vary by situation.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const marketSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roatan Real Estate Market Guide 2026',
  description:
    'Comprehensive overview of the Roatan, Honduras real estate market — including average prices, rental yields, foreign ownership rules, and the buying process.',
  author: {
    '@type': 'Person',
    name: 'Tomas Figueroa',
    url: 'https://tomasfigueroa.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tomas Figueroa Real Estate',
    url: 'https://tomasfigueroa.com',
  },
  url: 'https://tomasfigueroa.com/roatan-market',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Buy Property in Roatan, Honduras',
  description: 'Step-by-step guide to purchasing real estate in Roatan as a foreign buyer.',
  totalTime: 'P90D',
  step: buyingSteps.map((item) => ({
    '@type': 'HowToStep',
    position: item.step,
    name: item.title,
    text: item.description,
  })),
};

const RoatanMarket = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title="Roatan Real Estate Market Guide 2026 | Tomas Figueroa"
        description="Up-to-date Roatan real estate market data: average prices, rental yields, foreign ownership rules, buying process, and key investment facts for 2026."
        url="/roatan-market"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(marketSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Market Guide 2026
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Roatan Real Estate Market
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Key data, pricing benchmarks, investment fundamentals, and everything you need to understand
            the Roatan property market before making a decision.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Market Overview
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Roatan's real estate market has matured steadily over the past two decades, evolving from
              an undiscovered dive destination into a recognized Caribbean investment market. Property values
              have appreciated consistently, driven by growing international tourism, increasing direct flight
              connectivity, and a rising pool of foreign buyers seeking alternatives to more expensive Caribbean
              markets like the Cayman Islands, Turks and Caicos, and Belize.
            </p>
            <p>
              The market is characterized by a wide price range — from affordable entry-level homes in Coxen
              Hole to ultra-luxury oceanfront villas at Pristine Bay. Foreign buyers make up a significant
              portion of transactions, particularly in the western end of the island, where tourism infrastructure
              is most developed. Vacation rental investment is a key driver, supported by Roatan's status as one
              of the top cruise ship destinations in the western Caribbean.
            </p>
            <p>
              Unlike some Caribbean markets, Roatan does not impose restrictions on foreign ownership, and
              the legal framework for property acquisition — while different from North American processes —
              is well-established and navigable with the right professional guidance. The combination of
              affordability relative to comparable Caribbean islands, 100% foreign ownership rights, and
              consistent tourism demand makes Roatan a compelling market for buyers who have done their homework.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="section-container">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-10 text-center"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Key Market Statistics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="text-3xl font-bold text-[#04649b] mb-2"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Market data reflects 2025–2026 averages based on Keller Williams Roatan transaction data and local MLS records. Prices vary by neighborhood, property type, and condition.
          </p>
        </div>
      </section>

      {/* Foreign Ownership */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Foreign Ownership in Roatan
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Honduras law grants foreigners the same property ownership rights as Honduran citizens. There
              are no restrictions on the amount of property a foreigner can own, no requirements to use a
              local partner or intermediary, and no nationality-based exclusions. You can hold title directly
              in your personal name or through a Honduran corporation.
            </p>
            <p>
              This is a significant advantage compared to some other Latin American and Caribbean countries
              that restrict foreign ownership or require complex corporate structures. In Roatan, the process
              is direct: find the property, engage an attorney, complete due diligence, and register the
              deed in your name at the Public Property Registry.
            </p>
            <p>
              It is worth noting that purchasing property in Honduras does not automatically confer permanent
              residency, though there are separate residency programs available for retirees and investors.
              Tomas can connect you with the right legal resources to explore both the real estate purchase
              and residency pathways if relocation is part of your plan.
            </p>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="section-container max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-10 text-center"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            The Buying Process: 5 Steps
          </h2>
          <div className="space-y-6">
            {buyingSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#04649b] text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-10 text-center"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="section-container max-w-4xl">
          <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-10 text-white text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Ready to Explore the Roatan Market?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tomas can walk you through current listings, neighborhood comparisons, and investment
              strategy tailored to your specific goals.
            </p>
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-[#04649b] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Schedule a Call with Tomas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoatanMarket;
