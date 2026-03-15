import { useEffect, useRef, useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const Properties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showIDX, setShowIDX] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="properties"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white"
    >
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#04649b] font-medium uppercase tracking-wider text-sm">
            Property Listings
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1d] mt-3 mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Search All Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse all available properties in Roatan directly from the MLS. 
            Use the search tools below to filter by price, location, and more.
          </p>
        </div>

        {/* IDX Container */}
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {!showIDX ? (
            <div 
              onClick={() => setShowIDX(true)}
              className="relative bg-gradient-to-br from-[#04649b] to-[#03527d] rounded-2xl p-12 text-center text-white cursor-pointer hover:shadow-2xl transition-all group"
            >
              <div className="absolute inset-0 bg-black/10 rounded-2xl group-hover:bg-black/0 transition-all" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Load MLS Search</h3>
                <p className="text-white/80 mb-6">Click to search all Roatan MLS listings</p>
                <button className="inline-flex items-center gap-2 bg-white text-[#04649b] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
                  Start Searching
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-[#04649b] text-white px-6 py-4 flex justify-between items-center">
                <h3 className="font-medium">Roatan MLS Listings</h3>
                <button 
                  onClick={() => setShowIDX(false)}
                  className="text-white/80 hover:text-white"
                >
                  Close
                </button>
              </div>
              <iframe 
                src="//link.flexmls.com/1tqd8emfew7q,2" 
                frameBorder={0} 
                width="100%" 
                height="850"
                title="Roatan MLS Listings"
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Let's talk about exclusive listings.
          </p>
          <a 
            href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[#04649b] font-medium hover:underline"
          >
            LET'S TALK
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
