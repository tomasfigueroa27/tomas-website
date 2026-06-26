'use client';

import Link from 'next/link';
import { BookOpen, FileText, MapPin, TrendingUp } from 'lucide-react';
import { openBriefingModal } from '@/lib/analytics';

const guides = [
  {
    icon: BookOpen,
    title: 'U.S. Buyer Guide',
    description: 'How Americans buy property in Honduras — taxes, closing, and residency.',
    href: '/us-buyers-guide-roatan',
  },
  {
    icon: FileText,
    title: 'Investor Briefing',
    description: 'The six-discipline framework for underwriting a Roatán property.',
    action: openBriefingModal,
  },
  {
    icon: MapPin,
    title: 'Where to Buy',
    description: 'Five lifestyle nodes compared by character, price, and investment logic.',
    href: '/where-to-buy-in-roatan',
  },
  {
    icon: TrendingUp,
    title: 'Market Guide & Data',
    description: 'Market stats, development pipeline, and forward-looking context.',
    href: '/roatan-market',
  },
];

export default function ResourcesStrip() {
  return (
    <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 36 }}>
          <span className="label-caps block mb-4">Buyer Resources</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 400,
              color: '#093f4f',
              marginTop: 0,
              marginBottom: 0,
              lineHeight: 1.2,
            }}
          >
            What every buyer should read first.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guides.map((guide) => {
            const Icon = guide.icon;
            const inner = (
              <>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(9,63,79,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: '#093f4f' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#093f4f',
                    marginBottom: 8,
                    marginTop: 0,
                  }}
                >
                  {guide.title}
                </h3>
                <p style={{ fontSize: 12, color: '#63868d', lineHeight: 1.65, margin: 0 }}>
                  {guide.description}
                </p>
              </>
            );

            if ('href' in guide && guide.href) {
              return (
                <Link
                  key={guide.title}
                  href={guide.href}
                  style={{
                    display: 'block',
                    padding: 24,
                    backgroundColor: '#ffffff',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <button
                key={guide.title}
                onClick={guide.action}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: 24,
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
