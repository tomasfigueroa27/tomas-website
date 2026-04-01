import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, TrendingUp, Calendar, Phone, ChevronDown, ChevronUp } from 'lucide-react';
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

const faqs = [
  {
    q: 'What new developments are currently available in Roatan?',
    a: 'Roatan has several active new development projects across different price points and locations — from luxury resort-style communities on the west end to emerging residential projects further east. The development landscape changes frequently. Contact Tomas directly for an up-to-date overview of what is available and coming to market.',
  },
  {
    q: 'What is the typical price range for new developments in Roatan?',
    a: 'New development prices in Roatan vary widely by location and project type. Entry-level units in emerging areas can start around $150,000–$200,000, while luxury units in established communities like Pristine Bay or premium West Bay projects can reach $1 million or more. Pre-construction pricing typically offers a discount relative to completed units.',
  },
  {
    q: 'Can I get financing for a new development in Roatan?',
    a: 'Developer financing is available on some new development projects, often requiring 20–30% down with the balance paid in installments during construction. Traditional bank financing through Honduran banks is available but less common for foreign buyers. Most international buyers use a combination of personal capital, home equity from their primary residence, or developer payment plans.',
  },
  {
    q: 'What areas of Roatan have the best new developments?',
    a: 'The west end of the island — particularly West Bay Beach and Sandy Bay — continues to see strong new development activity due to its tourism infrastructure and established demand. The east end, including the Pristine Bay corridor, is also seeing significant investment. Emerging areas further east offer more speculative opportunities for buyers willing to take a longer view.',
  },
  {
    q: 'What is the process for purchasing a pre-construction property?',
    a: 'Pre-construction purchases typically begin with a reservation deposit to lock in pricing, followed by a purchase agreement and a construction draw schedule. A Honduran attorney should review all documents before you commit. Title is transferred after construction is completed and the property is registered. It is critical to work with reputable developers and have legal representation throughout the process.',
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

const NewDevelopments = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title="New Developments in Roatan | Pre-Construction Properties"
        description="Explore the latest new real estate developments in Roatan, Honduras. Pre-construction investment opportunities in prime Caribbean beachfront and hillside locations."
        url="/new-developments"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Investment Opportunities
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            New Developments in Roatan
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Roatan is entering a new phase of growth, with residential, hospitality, and mixed-use
            developments reshaping different parts of the island. Explore the map below to see
            where new projects are emerging and how the market is evolving.
          </p>
          <a
            href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-[#04649b] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Private Tour
          </a>
        </div>
      </section>

      {/* Growth Overview Section */}
      <section ref={sectionRef} className="py-20">
        <div className="section-container">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Roatan’s Next Growth Phase
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Roatan is entering what may become its most active development phase yet. As
              infrastructure improves and demand continues to grow, new residential communities,
              resort projects, and mixed-use developments are beginning to reshape the island.
              Understanding where this growth is happening is essential for buyers, investors, and
              relocation clients evaluating long-term opportunity. Explore the map below to see how
              different developments are positioned across Roatan.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-[#f5f5f5] rounded-xl px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#04649b]">
                  Residential Growth
                </p>
              </div>
              <div className="bg-[#f5f5f5] rounded-xl px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#04649b]">
                  Hospitality Expansion
                </p>
              </div>
              <div className="bg-[#f5f5f5] rounded-xl px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#04649b]">
                  Long-Term Opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Explore Development Locations Across Roatan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Use the map below to explore where new communities, resort projects, and emerging
              development zones are taking shape across the island. Not all parts of Roatan are
              developing in the same way, and location, infrastructure, accessibility, and future
              supply all matter.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Roatan New Developments Map"
              />
            </div>
            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/d/u/2/edit?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0&usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-[#04649b] font-medium hover:underline"
              >
                <MapPin className="w-5 h-5" />
                Open Full Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about buying new developments and pre-construction properties in Roatan.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-[#1d1d1d] rounded-2xl p-12 text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#04649b]" />
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Evaluate Roatan’s Development Opportunities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              If you are considering investing, relocating, or positioning yourself ahead of the
              island’s next growth phase, let’s discuss where development is happening and how it
              aligns with your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-[#04649b] hover:bg-[#03527d] text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Strategy Call
              </a>
              <a
                href="tel:+50488488326"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDevelopments;
