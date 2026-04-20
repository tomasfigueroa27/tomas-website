'use client';

import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
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
      id="newsletter"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-[#f5f2ee] overflow-hidden"
    >
      <div className="section-container">
        <div
          className={`max-w-xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="label-caps block mb-4">Stay Informed</span>
          <h2
            className="text-3xl md:text-4xl font-normal text-[#093f4f] mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Roatan Real Estate Insights &amp; Opportunities
          </h2>
          <p className="text-[#63868d] mb-10 leading-relaxed">
            Curated market insights, new opportunities, and strategic analysis of Roatan&apos;s evolving
            real estate landscape — designed for investors and buyers who want clarity before making a
            decision.
          </p>

          <form
            name="newsletter"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>Don&apos;t fill this out: <input name="bot-field" /></label>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="name"
                className="flex-1 px-4 py-3.5 border border-[#d4e8ed] rounded-lg bg-white text-[#093f4f] placeholder:text-[#93b3bc] input-focus text-sm"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                className="flex-1 px-4 py-3.5 border border-[#d4e8ed] rounded-lg bg-white text-[#093f4f] placeholder:text-[#93b3bc] input-focus text-sm"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="flex items-start gap-3 text-left">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                required
                className="mt-1 w-4 h-4 accent-[#093f4f] border-[#d4e8ed] rounded"
              />
              <label htmlFor="agreement" className="text-xs text-[#63868d]">
                I consent to receive market updates and real estate insights from{' '}
                <strong className="text-[#093f4f]">Tomas Figueroa</strong>. You may unsubscribe at any time.{' '}
                <a href="#" className="text-[#093f4f] hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#093f4f] hover:bg-[#072f3b] text-white py-4 rounded-lg font-semibold transition-all">
              <span>Receive Market Insights</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
