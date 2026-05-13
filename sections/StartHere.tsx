'use client';

import Link from 'next/link';
import { FileText, Map, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    icon: FileText,
    label: 'For U.S. Buyers',
    title: 'U.S. Buyer Guide',
    desc: 'Legal framework, buying process, due diligence, and rentals — everything Americans need before buying in the Bay Islands.',
    href: '/us-buyers-guide-roatan',
    cta: 'Read the guide →',
  },
  {
    icon: Map,
    label: 'Where to Buy',
    title: 'Five Lifestyle Nodes',
    desc: "Roatán is not one market. Each area has a distinct character, price range, and future buyer. Find where you fit.",
    href: '/where-to-buy-in-roatan',
    cta: 'Explore Where to Buy →',
  },
  {
    icon: Building2,
    label: 'Development Pipeline',
    title: 'New Developments',
    desc: 'Active and upcoming projects across the island — pre-construction oceanfront residences to emerging hillside communities.',
    href: '/new-developments',
    cta: 'Browse projects →',
  },
];

export default function StartHere() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="label-caps block mb-4">Start Here</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(26px, 3vw, 38px)',
              fontWeight: 400,
              color: '#093f4f',
              marginTop: 0,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Start with the right question.
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>
            Before you compare listings, understand the island. Roatán is not one market. It is a collection of lifestyle nodes, project types, and buyer strategies.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3" style={{ border: '1px solid #e5e7eb' }}>
          {cards.map(({ icon: Icon, label, title, desc, href, cta }, i) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'block',
                padding: '28px 24px',
                textDecoration: 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                transitionDelay: visible ? `${i * 100}ms` : '0ms',
              }}
              className="card-hover group start-here-card"
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: 'rgba(120,158,173,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Icon style={{ width: 22, height: 22, color: '#093f4f' }} aria-hidden="true" />
              </div>
              <span
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#789ead',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                {label}
              </span>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#093f4f',
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 20, margin: '0 0 20px' }}>
                {desc}
              </p>
              <span
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#093f4f',
                }}
              >
                {cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
