import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '@/components/SEO';
import neighborhoods, { type NeighborhoodFAQ } from '@/data/neighborhoods';

const FAQItem = ({ faq }: { faq: NeighborhoodFAQ }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f5f5f5] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1d1d1d]">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#04649b] shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#04649b] shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="px-6 py-5 bg-[#f5f5f5] text-gray-700 leading-relaxed border-t border-gray-200">
          {faq.a}
        </div>
      )}
    </div>
  );
};

const NeighborhoodDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1d1d1d] mb-4">Neighborhood not found</h1>
          <Link to="/neighborhoods" className="text-[#04649b] hover:underline">
            ← Back to neighborhoods
          </Link>
        </div>
      </div>
    );
  }

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${neighborhood.name}, Roatan`,
    description: neighborhood.description[0],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Roatan, Bay Islands, Honduras',
    },
    url: `https://tomasfigueroa.com/neighborhoods/${neighborhood.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: neighborhood.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title={`${neighborhood.name} Real Estate Guide | Roatan | Tomas Figueroa`}
        description={`${neighborhood.tagline}. ${neighborhood.description[0].slice(0, 120)}...`}
        url={`/neighborhoods/${neighborhood.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(placeSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container">
          <Link
            to="/neighborhoods"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Neighborhoods
          </Link>
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            {neighborhood.vibe}
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            {neighborhood.name}
          </h1>
          <p className="text-xl text-white/90">{neighborhood.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="section-container max-w-4xl">

          {/* Facts Box */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 mb-10 space-y-3">
            {neighborhood.facts.map((fact) => (
              <div key={fact.label} className="flex gap-3">
                <span className="font-semibold text-[#04649b] min-w-[140px] shrink-0">
                  {fact.label}:
                </span>
                <span className="text-gray-700">{fact.value}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-6 mb-10">
            {neighborhood.description.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* Best For Tags */}
          <div className="mb-12">
            <h2
              className="text-xl font-bold text-[#1d1d1d] mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Best For
            </h2>
            <div className="flex flex-wrap gap-3">
              {neighborhood.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#04649b]/10 text-[#04649b] font-medium px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1d1d1d] mb-6"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {neighborhood.faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-10 pt-8 border-t border-gray-200 mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Explore More
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/neighborhoods" className="text-[#04649b] font-medium hover:underline text-sm">
                ← All Roatan Neighborhoods
              </Link>
              <Link to="/roatan-market" className="text-[#04649b] font-medium hover:underline text-sm">
                View Roatan Market Data →
              </Link>
              <Link to="/guides" className="text-[#04649b] font-medium hover:underline text-sm">
                Download the Buyer's Guide →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-8 text-white text-center">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Interested in {neighborhood.name}?
            </h2>
            <p className="text-white/90 mb-6">
              Tomas can walk you through available listings, price trends, and investment potential
              in {neighborhood.name} — and help you decide if it aligns with your goals.
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

export default NeighborhoodDetail;
