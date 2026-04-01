import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '@/components/SEO';
import neighborhoods from '@/data/neighborhoods';

const faqs = [
  {
    q: 'Which Roatan neighborhood is best for vacation rental investment?',
    a: 'West Bay Beach consistently delivers the highest short-term rental yields on Roatan, driven by its world-class beach and proximity to the cruise port. West End is a strong second for budget-conscious travelers. For premium long-term appreciation, Pristine Bay is the top pick.',
  },
  {
    q: 'What is the most affordable neighborhood in Roatan?',
    a: 'Coxen Hole and French Harbour offer the most affordable real estate on the island, with condos starting under $100,000 and homes below $200,000 in some cases. These neighborhoods are popular with buyers who prioritize value and local character over beachfront luxury.',
  },
  {
    q: 'Which neighborhood in Roatan is best for expat living?',
    a: 'West End is widely regarded as the most expat-friendly neighborhood on Roatan. It has a walkable village atmosphere, a well-established community of foreign residents, numerous restaurants and dive shops, and relatively affordable real estate compared to West Bay Beach.',
  },
  {
    q: 'Are there gated communities in Roatan?',
    a: 'Yes — Pristine Bay Resort is the premier master-planned gated community on the island, offering resort-style amenities, 18-hole golf, and branded residences. Sandy Bay and other areas also have smaller gated or managed residential developments with security and shared facilities.',
  },
  {
    q: 'Can I find beachfront property in Roatan under $300,000?',
    a: 'Beachfront properties in Roatan range from around $150,000 for smaller condos in developing areas to several million for luxury oceanfront villas. Entry-level beachfront condos in West End or Sandy Bay can occasionally be found under $300,000, though inventory is limited. West Bay Beach beachfront typically starts above that threshold.',
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

const FAQItem = ({ q, a }: { q: string; a: string }) => {
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

const Neighborhoods = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title="Roatan Neighborhoods Guide | Tomas Figueroa"
        description="Explore Roatan's top neighborhoods — from West Bay Beach luxury condos to the expat-friendly West End village. Compare price ranges, lifestyle, and investment potential for each area."
        url="/neighborhoods"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Neighborhood Guide
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Roatan Neighborhoods
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every neighborhood on Roatan has a distinct character, price range, and lifestyle. Explore
            each area to find the right fit for your goals — whether you're buying, investing, or relocating.
          </p>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                to={`/neighborhoods/${neighborhood.slug}`}
                className="bg-[#f5f5f5] hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#04649b] bg-[#04649b]/10 px-3 py-1 rounded-full mb-3">
                    {neighborhood.vibe}
                  </span>
                  <h2
                    className="text-2xl font-bold text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    {neighborhood.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{neighborhood.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-[#04649b]">Price Range:</span>
                    <span>{neighborhood.priceRange}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {neighborhood.bestFor.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#04649b] font-medium text-sm group-hover:gap-3 transition-all">
                  Explore {neighborhood.name}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="section-container">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4 text-center"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Neighborhood Comparison
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            A quick side-by-side view of every Roatan neighborhood to help you find the right fit.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#04649b] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Neighborhood</th>
                  <th className="text-left px-5 py-4 font-semibold">Price Range</th>
                  <th className="text-left px-5 py-4 font-semibold hidden md:table-cell">Vibe</th>
                  <th className="text-left px-5 py-4 font-semibold hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr
                    key={n.slug}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'}
                  >
                    <td className="px-5 py-4">
                      <Link
                        to={`/neighborhoods/${n.slug}`}
                        className="font-semibold text-[#04649b] hover:underline"
                      >
                        {n.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-gray-700">{n.priceRange}</td>
                    <td className="px-5 py-4 text-gray-600 hidden md:table-cell">{n.vibe}</td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {n.bestFor.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#04649b]/10 text-[#04649b] text-xs px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f5f5]">
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
        <div className="section-container">
          <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-10 text-white text-center">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Not Sure Which Neighborhood Is Right for You?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tomas can help you evaluate each area against your specific goals — whether that's rental
              income, lifestyle, appreciation, or all three.
            </p>
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="inline-block bg-white text-[#04649b] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Call with Tomas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neighborhoods;
