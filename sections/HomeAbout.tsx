'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HomeAbout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white" style={{ paddingTop: 64, paddingBottom: 64 }} ref={ref}>
      <div className="section-container">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
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
            <div
              style={{
                position: 'absolute',
                bottom: -24,
                right: -16,
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                padding: '16px 24px',
              }}
            >
              <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 32, fontWeight: 700, color: '#093f4f', margin: 0, lineHeight: 1 }}>20+</p>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#63868d', marginTop: 4, marginBottom: 0 }}>Years of Experience</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <span className="label-caps block mb-4">About Me</span>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 400,
                color: '#093f4f',
                marginTop: 0,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Who is Tomas Figueroa?
            </h2>
            <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 16 }}>
              Licensed Realtor at Keller Williams Roatan. 20+ years of international sales experience, 4 years on the ground in Roatan — working with US, Canadian, and global buyers in the premium segment.
            </p>
            <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 16 }}>
              My read on this market: Roatan is the Caribbean&apos;s last undervalued destination. The catalyst that changes everything is still ahead — when financing for foreign buyers arrives, the buyer pool expands overnight and early owners benefit most.
            </p>
            <p style={{ fontSize: 12, color: '#999999', fontStyle: 'italic', marginBottom: 28 }}>
              Last reviewed: May 2026 · Licensed Realtor, Keller Williams Roatan, Bay Islands, Honduras.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
