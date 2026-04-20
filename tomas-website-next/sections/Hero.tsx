'use client';

import { Search, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const heroStats = [
  { value: '$150K+', label: 'Entry points' },
  { value: '6–8%', label: 'Rental yield' },
  { value: '100%', label: 'Foreign ownership' },
  { value: '20+', label: 'Years experience' },
];

const Hero = () => {
  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="flex flex-col overflow-hidden" style={{ minHeight: '100dvh' }}>

      {/* Main area — flex-1 so stat bar pins to bottom */}
      <div className="relative flex-1 flex flex-col lg:flex-row">

        {/* Background image (full coverage on mobile; left panel on desktop) */}
        <div className="absolute inset-0 lg:inset-auto lg:left-0 lg:top-0 lg:bottom-0 lg:w-[62%] overflow-hidden">
          <img
            src="/hero-bg.webp"
            alt="Roatan beach aerial view"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          {/* Dark overlay for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#093f4f]/55 via-[#093f4f]/35 to-[#093f4f]/75 lg:hidden" />
        </div>

        {/* Mobile content — centered over image */}
        <div className="relative lg:hidden flex-1 flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-10">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 mb-5">
            Roatan, Honduras Real Estate
          </span>
          <h1
            className="text-4xl sm:text-5xl font-normal leading-[1.12] mb-6"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Should You Invest<br />or Move to Roatan?<br />
            <span className="text-[#d4e8ed]">Start With Clarity</span>
          </h1>
          <p className="text-white/75 text-base mb-10 max-w-sm leading-relaxed">
            Strategic real estate guidance for investors and buyers considering property in Roatan, Honduras.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Link
              href="/properties"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-[#093f4f] px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-[#d4e8ed]"
            >
              <Search className="w-4 h-4" /> Browse MLS
            </Link>
            <button
              onClick={scrollToCta}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-white/70 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-white hover:text-[#093f4f]"
            >
              <TrendingUp className="w-4 h-4" /> Sell
            </button>
          </div>
        </div>

        {/* Desktop right content panel — diagonal left edge */}
        <div className="hidden lg:flex ml-auto w-[52%] relative bg-[#f5f2ee] items-center">
          {/* Diagonal connector wedge */}
          <div
            className="absolute right-full top-0 bottom-0 w-32 bg-[#f5f2ee]"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
          <div className="relative z-10 pl-10 xl:pl-16 pr-10 xl:pr-20 pt-28 pb-28 max-w-2xl">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#63868d] mb-6">
              Roatan, Honduras Real Estate
            </span>
            <h1
              className="text-5xl xl:text-[3.5rem] font-normal text-[#093f4f] leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Should You Invest<br />or Move to Roatan?<br />
              <em className="not-italic text-[#63868d]">Start With Clarity</em>
            </h1>
            <p className="text-[#63868d] text-lg leading-relaxed mb-10 max-w-md">
              Strategic real estate guidance for investors and buyers considering property in Roatan, Honduras.
            </p>
            <div className="flex gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-[#093f4f] hover:bg-[#072f3b] text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                <Search className="w-5 h-5" /> Browse MLS
              </Link>
              <button
                onClick={scrollToCta}
                className="inline-flex items-center gap-2 border-2 border-[#093f4f] text-[#093f4f] px-8 py-4 rounded-lg font-semibold hover:bg-[#093f4f] hover:text-white transition-all"
              >
                <TrendingUp className="w-5 h-5" /> Sell
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stat bar — pinned to bottom of hero */}
      <div className="relative z-10 bg-[#093f4f] flex-shrink-0">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {heroStats.map((s) => (
              <div key={s.label} className="px-4 lg:px-8 py-4 lg:py-5">
                <p
                  className="text-xl lg:text-2xl font-bold text-white"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-[#d4e8ed] mt-0.5 uppercase tracking-[0.14em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
