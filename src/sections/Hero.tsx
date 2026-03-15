import { useEffect, useRef, useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        setOffset(scrolled * 0.5);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="/hero-bg.webp"
          alt="Roatan beach aerial view"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Roatan, Honduras Real Estate</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Find Your Dream Property in Roatan
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your trusted partner for buying and selling properties in the Caribbean. 
            20+ years of experience helping clients find their perfect home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('properties')}
              className="flex items-center justify-center gap-2 bg-[#04649b] hover:bg-[#03527d] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all"
            >
              <Search className="w-5 h-5" />
              Buy
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#04649b] px-8 py-4 rounded-lg font-medium text-lg transition-all"
            >
              <TrendingUp className="w-5 h-5" />
              Sell
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
