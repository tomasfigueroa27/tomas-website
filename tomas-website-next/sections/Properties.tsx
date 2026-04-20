'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

const Properties = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showIDX, setShowIDX] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="relative w-full py-20 lg:py-32 bg-[#f5f2ee]">
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="label-caps block mb-4">Property Listings</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#093f4f] mt-3 mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Search All Properties
          </h2>
          <p className="text-[#63868d] max-w-2xl mx-auto">Browse all available properties in Roatan directly from the MLS. Use the search tools below to filter by price, location, and more.</p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {!showIDX ? (
            <div onClick={() => setShowIDX(true)} className="relative bg-[#093f4f] rounded-2xl p-12 text-center text-white cursor-pointer hover:bg-[#072f3b] transition-all group">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal mb-3" style={{ fontFamily: 'Georgia, serif' }}>Load MLS Search</h3>
                <p className="text-white/60 mb-6">Click to search all Roatan MLS listings</p>
                <button className="inline-flex items-center gap-2 bg-white text-[#093f4f] px-6 py-3 rounded-lg font-medium hover:bg-[#d4e8ed] transition-all">
                  Start Searching <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4e8ed]">
              <div className="bg-[#093f4f] text-white px-6 py-4 flex justify-between items-center">
                <h3 className="font-medium text-sm tracking-wide">Roatan MLS Listings</h3>
                <button onClick={() => setShowIDX(false)} className="text-white/60 hover:text-white text-sm">Close</button>
              </div>
              <iframe src="//link.flexmls.com/1tqd8emfew7q,2" frameBorder={0} width="100%" height="850" title="Roatan MLS Listings" className="w-full" />
            </div>
          )}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#63868d] mb-4">Can&apos;t find what you&apos;re looking for? Let&apos;s talk about exclusive listings.</p>
          <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[#093f4f] font-semibold hover:text-[#63868d] transition-colors text-sm tracking-wide">
            LET&apos;S TALK <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
