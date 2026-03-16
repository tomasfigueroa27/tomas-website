import { useEffect, useRef, useState } from 'react';
import { MapPin, Home, TrendingUp, Calendar, Phone } from 'lucide-react';

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

  const developments = [
    {
      name: 'Blue Vista',
      description: 'Luxury hillside villas with panoramic ocean views and modern Caribbean architecture.',
      features: ['Ocean views', 'Private pools', 'Modern design'],
      status: 'Now Selling',
    },
    {
      name: 'Pristine Bay',
      description: 'Exclusive golf resort community with luxury homes and world-class amenities.',
      features: ['Golf course', 'Beach club', 'Resort living'],
      status: 'Available',
    },
    {
      name: 'Lawson Rock',
      description: 'Waterfront community offering a blend of luxury and natural beauty.',
      features: ['Marina access', 'Beachfront', 'Gated community'],
      status: 'Available',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
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
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover exclusive pre-construction and newly completed projects. 
            Be the first to own in Roatan's most exciting new communities.
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

      {/* Developments List */}
      <section ref={sectionRef} className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developments.map((dev, index) => (
              <div 
                key={dev.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-[#04649b]/20 to-[#04649b]/10 flex items-center justify-center">
                  <Home className="w-16 h-16 text-[#04649b]/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1d1d1d]" style={{ fontFamily: "'Roboto Slab', serif" }}>
                      {dev.name}
                    </h3>
                    <span className="text-xs bg-[#04649b] text-white px-3 py-1 rounded-full">
                      {dev.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{dev.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dev.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                    target="_blank"
                    rel="noopener"
                    className="block w-full text-center bg-[#04649b] text-white py-3 rounded-lg font-medium hover:bg-[#03527d] transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
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
              Development Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore where our new developments are located across Roatan.
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-[#1d1d1d] rounded-2xl p-12 text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#04649b]" />
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Invest in Roatan's Future
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              New developments offer the best opportunities for appreciation and rental income. 
              Get in early and maximize your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-[#04649b] hover:bg-[#03527d] text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
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
