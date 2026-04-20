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
      className="relative w-full py-20 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Image Side */}
          <div
            className={`relative h-64 lg:h-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <img
              src="/newsletter-bg.jpg"
              alt="Roatan sunset beach"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">INSIGHTS & OPPORTUNITIES</p>
              <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>
                Roatan Real Estate, Clearly Explained
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div
            className={`bg-white p-8 lg:p-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h3
              className="text-2xl lg:text-3xl font-bold text-[#1d1d1d] mb-4"
              style={{ fontFamily: 'var(--font-roboto-slab), serif' }}
            >
              Roatan Real Estate Insights & Opportunities
            </h3>
            <p className="text-gray-600 mb-8">
              Stay informed with curated market insights, new opportunities, development updates, and
              strategic analysis of Roatan&apos;s evolving real estate landscape.
              Designed for investors and relocation buyers who want clarity before making a decision.
            </p>

            <form
              name="newsletter"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p className="hidden">
                <label>Don&apos;t fill this out: <input name="bot-field" /></label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  required
                  className="mt-1 w-4 h-4 text-[#04649b] border-gray-300 rounded focus:ring-[#04649b]"
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  I consent to receive market updates and real estate insights from{' '}
                  <strong>Tomas Figueroa</strong>. You may unsubscribe at any time.{' '}
                  <a href="#" className="text-[#04649b] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" className="w-full btn-dark justify-center">
                <span>Receive Market Insights</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
