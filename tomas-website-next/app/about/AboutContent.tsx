'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Phone, Mail, Calendar, TrendingUp } from 'lucide-react';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://tomasfigueroa.com/#person',
  name: 'Tomas Figueroa',
  jobTitle: 'Licensed Real Estate Agent',
  url: 'https://tomasfigueroa.com',
  image: 'https://tomasfigueroa.com/tomas-about.jpg',
  telephone: '+50488488326',
  email: 'tomas@kwroatan.com',
  knowsAbout: ['Roatan real estate', 'Caribbean property investment', 'Honduras property law'],
  worksFor: { '@type': 'RealEstateAgent', name: 'Keller Williams Roatan', url: 'https://tomasfigueroa.com' },
  sameAs: ['https://www.facebook.com/profile.php?id=61557310059412', 'https://www.instagram.com/roatanbytomas/', 'https://www.linkedin.com/in/roatanbytomas/'],
};

const stats = [
  { number: '20+', label: 'Years of Sales Experience', icon: Award },
  { number: '50+', label: 'Properties Sold', icon: Users },
  { number: '30MM+', label: 'Sales Volume', icon: TrendingUp },
];

const values = [
  { title: 'Positioning Roatan Correctly', description: 'Roatan remains under the radar for many serious investors and relocation buyers.\n\nMy role is to help you evaluate the island in context — alongside other Caribbean markets — based on infrastructure, growth trajectory, regulation, and long-term potential.\n\nBefore choosing a property, the first question is whether Roatan is the right market for you.' },
  { title: 'Goal-Driven Strategy', description: 'Every buyer has a different objective — cash flow, long-term appreciation, lifestyle flexibility, or permanent relocation.\n\nWe define your goal first, then align strategy, location, and timing accordingly.' },
  { title: 'Forward-Looking Market Insight', description: 'Through active involvement with developers, business leaders, and investment groups, we track what is coming — not just what exists today.\n\nUnderstanding how the island will evolve is essential to giving informed, forward-looking advice.' },
  { title: 'Long-Term Perspective', description: 'This is not transactional. I aim to build relationships based on clarity, professionalism, and strategic thinking — so years from now, you feel confident in the decision you made.' },
  { title: 'Professionalism & Continuous Expertise', description: 'Buying property in Roatan is a significant financial decision. We approach it with structure, transparency, and discipline — continuously refining our knowledge through exposure to other markets and emerging trends.' },
];

export default function AboutContent() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tomasfigueroa.com/' }, { '@type': 'ListItem', position: 2, name: 'About', item: 'https://tomasfigueroa.com/about' }] }) }} />

      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">About Me</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Tomas Figueroa</h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">Strategic real estate guidance in Roatan, Honduras. Backed by over 20 years of international business experience, I help investors and high-end buyers evaluate opportunities with clarity and long-term perspective.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white text-[#04649b] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
                  <Calendar className="w-5 h-5" /> Schedule a Call
                </a>
                <a href="tel:+50488488326" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all">
                  <Phone className="w-5 h-5" /> (504) 8848-8326
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/tomas-portrait.jpg" alt="Tomas Figueroa" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-[#f5f5f5]">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <stat.icon className="w-10 h-10 text-[#04649b] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#1d1d1d] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Why Work With Me?</h2>
              <div className="space-y-4 text-gray-600">
                <p>With over 20 years of experience in international sales, business development, and leadership, I bring a strategic and disciplined approach to real estate in Roatan. As a licensed agent with Keller Williams Roatan, I advise buyers, sellers, and developers with clarity, structure, and a long-term perspective.</p>
                <p>For buyers and investors, I focus on aligning property selection with clearly defined objectives — whether that means cash flow, long-term appreciation, lifestyle flexibility, or relocation. Every opportunity is evaluated through market fundamentals, positioning, and future development patterns.</p>
                <p>For sellers and developers, I combine strategic pricing, global exposure, professional marketing, and strong negotiation to maximize positioning and value in Roatan&apos;s evolving market.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>My Approach to Roatan Real Estate</h2>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="bg-[#f5f5f5] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1d1d1d] mb-2">{value.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Services I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive real estate services tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Property Sales', desc: 'Sell your property with strategic marketing and negotiation.' },
              { title: 'Buyer Representation', desc: 'Find the right property with objective guidance and strategic evaluation.' },
              { title: 'Investment Consulting', desc: 'Identify high-quality opportunities through disciplined analysis and forward-looking market insight.' },
              { title: 'Relocation Services', desc: 'Relocate with confidence through structured guidance and local insight.' },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-[#1d1d1d] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="section-container max-w-3xl text-center">
          <p className="text-gray-600">Have questions about buying in Roatan?{' '}<a href="/faq" className="text-[#04649b] font-medium hover:underline">Browse our full FAQ →</a></p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="bg-[#04649b] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Ready to Explore Roatan Real Estate?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Let&apos;s define your objectives and build a strategy aligned with your long-term goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-white text-[#04649b] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all">
                <Calendar className="w-5 h-5" /> Schedule a Call
              </a>
              <a href="mailto:tomas@kwroatan.com" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all">
                <Mail className="w-5 h-5" /> tomas@kwroatan.com
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" /><span>Lawson Rock, Sandy Bay, Roatan, Honduras</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
