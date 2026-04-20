'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const credentials = [
  'Licensed at Keller Williams Roatan',
  '20+ Years of International Sales Experience',
  '50+ Properties Sold in Roatan',
  '$30MM+ Career Sales Volume',
];

const HomeAbout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 lg:py-28 bg-white" ref={ref}>
      <div className="section-container">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/tomas-about.jpg"
                alt="Tomas Figueroa – Roatan Real Estate Agent"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#093f4f] rounded-xl shadow-xl px-6 py-4">
              <p
                className="text-3xl font-bold text-white"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                20+
              </p>
              <p className="text-xs text-[#d4e8ed] mt-0.5 uppercase tracking-[0.12em]">Years of Experience</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <span className="label-caps block mb-4">About Me</span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#093f4f] mt-3 mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Your Local Guide to Roatan Real Estate
            </h2>
            <p className="text-[#63868d] text-lg leading-relaxed mb-4">
              I&apos;m Tomas Figueroa, a real estate agent based in Roatan, Honduras with over 20 years of
              experience helping investors and buyers navigate one of the Caribbean&apos;s most exciting
              emerging markets.
            </p>
            <p className="text-[#63868d] text-lg leading-relaxed mb-8">
              My approach is strategic, not transactional — I help you decide whether Roatan is the right
              market for you before ever looking at a single property.
            </p>

            {/* Credentials list with dot markers */}
            <ul className="mb-8 space-y-2.5">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-[#093f4f]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#789ead] flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#093f4f] hover:bg-[#072f3b] text-white px-7 py-4 rounded-lg font-medium text-base transition-all"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
