import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const About = () => {
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

  const stats = [
    { number: '20+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Properties Sold', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: Award },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'I believe in honest, transparent communication throughout every transaction.',
    },
    {
      title: 'Expertise',
      description: 'Deep knowledge of the Roatan market helps you make informed decisions.',
    },
    {
      title: 'Dedication',
      description: 'Your goals become my mission. I work tirelessly to exceed expectations.',
    },
    {
      title: 'Personal Service',
      description: 'Every client receives one-on-one attention tailored to their unique needs.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Tomas Figueroa
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Your trusted real estate partner in Roatan, Honduras. With over two decades of experience, 
                I've helped hundreds of clients find their dream properties in this Caribbean paradise.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-white text-[#04649b] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </a>
                <a 
                  href="tel:+50488488326"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  <Phone className="w-5 h-5" />
                  (504) 8848-8326
                </a>
              </div>
            </div>
            {/* Portrait Photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/tomas-portrait.jpg" 
                  alt="Tomas Figueroa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 text-[#04649b] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#1d1d1d] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section ref={sectionRef} className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Why Work With Me?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 20 years of experience in Roatan real estate, I bring unparalleled knowledge 
                  of the local market, neighborhoods, and investment opportunities. My deep understanding 
                  of the island's unique characteristics helps clients make informed decisions.
                </p>
                <p>
                  Whether you're looking for a vacation home, investment property, or your permanent 
                  residence in paradise, I provide personalized guidance throughout the entire process. 
                  From property search to closing, I'm here to ensure a smooth and successful transaction.
                </p>
                <p>
                  Fluent in both English and Spanish, I bridge communication gaps and ensure nothing 
                  is lost in translation. My extensive network of local contacts - from attorneys and 
                  inspectors to contractors and property managers - means you have access to the best 
                  resources on the island.
                </p>
              </div>
            </div>
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-6"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                My Values
              </h2>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="bg-[#f5f5f5] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1d1d1d] mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Services I Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Property Sales', desc: 'Sell your property with expert marketing and negotiation.' },
              { title: 'Buyer Representation', desc: 'Find your dream home with personalized property searches.' },
              { title: 'Investment Consulting', desc: 'Identify high-ROI opportunities in Roatan real estate.' },
              { title: 'Relocation Services', desc: 'Seamless transition to island living.' },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-[#1d1d1d] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-[#04649b] rounded-2xl p-12 text-center text-white">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Let's Work Together
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Ready to find your dream property in Roatan? I'm here to help every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#04649b] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
              <a 
                href="mailto:tomas@kwroatan.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Mail className="w-5 h-5" />
                tomas@kwroatan.com
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>Lawson Rock, Sandy Bay, Roatan, Honduras</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
