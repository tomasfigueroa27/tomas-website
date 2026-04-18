'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-[#04649b] to-[#03527d]"
    >
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Ready to Sell in Roatan?
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-roboto-slab), serif' }}
            >
              Position Your Property for Maximum Value
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Selling property in Roatan requires more than listing it — it requires
              positioning, strategy, and disciplined execution. I guide you through pricing,
              marketing, and negotiation to ensure your property is presented correctly and
              achieves its full market potential.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="tel:+50488488326"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Now</h3>
              <p className="text-white/80 text-sm">(504) 8848-8326</p>
            </a>

            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="group bg-white hover:bg-gray-100 rounded-xl p-6 transition-all text-[#04649b]"
            >
              <div className="w-14 h-14 bg-[#04649b]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-[#04649b]/80 text-sm">Book a consultation</p>
            </a>

            <a
              href="https://wa.me/50488488326"
              target="_blank"
              rel="noopener"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm">Send a message</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
