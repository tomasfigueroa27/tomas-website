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
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#093f4f]"
    >
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#789ead] mb-6">
              Ready to Sell in Roatan?
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Position Your Property for Maximum Value
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
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
              className="group bg-white/8 hover:bg-white/15 rounded-xl p-6 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-[#789ead]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#d4e8ed]" />
              </div>
              <h3 className="text-base font-semibold mb-1.5">Call Now</h3>
              <p className="text-white/50 text-sm">(504) 8848-8326</p>
            </a>

            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="group bg-white hover:bg-[#f5f2ee] rounded-xl p-6 transition-all text-[#093f4f]"
            >
              <div className="w-12 h-12 bg-[#d4e8ed] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-[#093f4f]" />
              </div>
              <h3 className="text-base font-semibold mb-1.5">Schedule a Call</h3>
              <p className="text-[#63868d] text-sm">Book a consultation</p>
            </a>

            <a
              href="https://wa.me/50488488326"
              target="_blank"
              rel="noopener"
              className="group bg-white/8 hover:bg-white/15 rounded-xl p-6 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-[#789ead]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#d4e8ed]" />
              </div>
              <h3 className="text-base font-semibold mb-1.5">WhatsApp</h3>
              <p className="text-white/50 text-sm">Send a message</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
