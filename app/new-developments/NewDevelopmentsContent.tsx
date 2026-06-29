'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Calendar } from 'lucide-react';
import { trackSchedule, openSavvyCal } from '@/lib/analytics';

// ─── Evaluation criteria ──────────────────────────────────────────────────────

const CRITERIA = [
  {
    num: '01',
    title: 'Location Logic',
    body: 'Does the site have genuine access, views, or resort infrastructure? Location drives resale — independent of what any developer says about it.',
  },
  {
    num: '02',
    title: 'Developer Track Record',
    body: 'Has the team completed at least one prior project on the island? References from buyers in earlier phases matter more than marketing materials.',
  },
  {
    num: '03',
    title: 'Title and Legal Clarity',
    body: "Clean title at the Registry, no encumbrances, permits fully in hand before launch. Your attorney confirms this — not the developer's sales team.",
  },
  {
    num: '04',
    title: 'Rental Permissions and Management',
    body: 'Are short-term rentals explicitly permitted in writing? Who manages, on what terms, and is there a management exclusivity clause in the contract?',
  },
  {
    num: '05',
    title: 'Construction and Completion Risk',
    body: "Are deposits held in escrow rather than operating accounts? What is the developer's actual delivery track record — not their projected timeline?",
  },
  {
    num: '06',
    title: 'Exit Liquidity',
    body: 'Will a future buyer recognize and want this asset? Location, legal structure, and product quality all determine how liquid the exit will be.',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

interface Project {
  name: string;
  location: string;
  status: string;
  statusActive: boolean;
  productType: string;
  bestFor: string;
  priceFrom: string | null;
  image: string;
  href: string;
  external: boolean;
}

const PROJECTS: Project[] = [
  {
    name: 'The Palm Haus',
    location: 'West Bay – West End Corridor · Roatán',
    status: 'Pre-Construction',
    statusActive: true,
    productType: 'Studio to 2-Bedroom Condominiums',
    bestFor: "Buyers seeking competitive pre-construction entry pricing in Roatán's most active tourism corridor, with resort amenities and a 75/25 rental program.",
    priceFrom: null,
    image: '/neighborhood-westbay.jpg',
    href: '/new-developments/the-palm-haus',
    external: false,
  },
  {
    name: 'Starfish at Latitude 16',
    location: 'West Bay Beach · Roatán',
    status: 'Pre-Sale',
    statusActive: true,
    productType: 'Oceanfront condos and residences',
    bestFor: "Vacation rental investors and beach-lifestyle buyers seeking West Bay's premium rental market.",
    priceFrom: 'From $299,999',
    image: '/neighborhood-westbay.jpg',
    href: 'https://starfishroatan.com',
    external: true,
  },
  {
    name: 'Blue Vista Roatán',
    location: 'Sandy Bay · Hillside · Roatán',
    status: 'Coming Soon',
    statusActive: false,
    productType: 'Premium hillside residences with panoramic ocean views',
    bestFor: 'Buyers prioritizing privacy, views, and quiet residential life near the reef.',
    priceFrom: null,
    image: '/bluevista-hero.webp',
    href: 'https://bluevistaroatan.com',
    external: true,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CriteriaCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div style={{ padding: '28px 24px', backgroundColor: '#ffffff', borderTop: '2px solid #d4e8ed' }}>
      <p style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 26, fontWeight: 700,
        color: '#d4e8ed', margin: '0 0 14px', lineHeight: 1,
      }}>
        {num}
      </p>
      <h3 style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 16, fontWeight: 400,
        color: '#093f4f', margin: '0 0 10px', lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0,
      }}>
        {body}
      </p>
    </div>
  );
}

function ProjectCard({ project, onSchedule }: { project: Project; onSchedule: () => void }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Image */}
      <div style={{ height: 220, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
        {/* Gradient overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 50%)',
        }} />
        {/* Status badge */}
        <span style={{
          position: 'absolute', top: 14, left: 14,
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 9, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.12em',
          backgroundColor: project.statusActive ? '#c9a84c' : '#789ead',
          color: '#ffffff',
          padding: '4px 10px',
        }}>
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 10, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.12em',
          color: '#789ead', display: 'block', marginBottom: 6,
        }}>
          {project.location}
        </span>
        <h3 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 20, fontWeight: 400,
          color: '#ffffff', margin: '0 0 20px', lineHeight: 1.2,
        }}>
          {project.name}
        </h3>

        {/* Structured fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24, flex: 1 }}>
          <div>
            <span style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 4,
            }}>Product Type</span>
            <span style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5,
            }}>{project.productType}</span>
          </div>
          <div>
            <span style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 9, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 4,
            }}>Best For</span>
            <span style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5,
            }}>{project.bestFor}</span>
          </div>
          {project.priceFrom && (
            <div>
              <span style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 9, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 4,
              }}>Entry Price</span>
              <span style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 15, color: '#c9a84c',
              }}>{project.priceFrom}</span>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={onSchedule}
            className="btn-accent"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Request project details →
          </button>
          {project.href && (
            <Link
              href={project.href}
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.45)',
                textAlign: 'center', textDecoration: 'none',
                display: 'block', paddingTop: 2,
              }}
            >
              {project.external ? 'View project site →' : 'View full details →'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Map section (with scroll-trap overlay) ───────────────────────────────────

function DevelopmentMap() {
  const [mapActive, setMapActive] = useState(false);
  return (
    <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container">
        <div style={{ marginBottom: 32 }}>
          <span className="label-caps block mb-4">Development Map</span>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 400,
            color: '#093f4f', margin: 0, lineHeight: 1.2,
          }}>
            Where new projects are taking shape.
          </h2>
        </div>
        <div style={{ backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid #d4e8ed' }}>
          <div style={{ aspectRatio: '16/9', width: '100%', position: 'relative', minHeight: 280 }}>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Roatán New Developments Map"
            />
            {!mapActive && (
              <div
                onClick={() => setMapActive(true)}
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', backgroundColor: 'transparent',
                }}
                aria-label="Tap to interact with map"
              >
                <span style={{
                  backgroundColor: 'rgba(9,63,79,0.85)', color: '#ffffff',
                  fontSize: 12, fontWeight: 600,
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  padding: '10px 18px', letterSpacing: '0.06em',
                  pointerEvents: 'none',
                }}>
                  Tap to interact with map
                </span>
              </div>
            )}
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid #e8f0f3', textAlign: 'right' }}>
            <a
              href="https://www.google.com/maps/d/u/2/edit?mid=1QtqEsBu7GIuoGtg3HNvz4DZYmiNHaY0&usp=sharing"
              target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#789ead', fontWeight: 600, textDecoration: 'none', fontFamily: 'Arial, Helvetica, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              <MapPin style={{ width: 12, height: 12 }} /> View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function NewDevelopmentsContent() {
  const handleSchedule = () => { trackSchedule(); openSavvyCal(); };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 140, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 900 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>New Developments</span>
          <h1 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(30px, 4vw, 50px)',
            fontWeight: 400, color: '#ffffff',
            lineHeight: 1.15, margin: '0 0 20px',
          }}>
            New Developments in Roatán
          </h1>
          <p style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 15, color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75, maxWidth: 680, margin: '0 0 36px',
          }}>
            Track Roatán&apos;s active and upcoming projects, compare emerging lifestyle nodes, and understand which developments deserve serious attention before you commit.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={handleSchedule}
              className="btn-accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Calendar style={{ width: 15, height: 15 }} /> Schedule a Strategy Call
            </button>
            <Link
              href="/us-buyers-guide-roatan"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 12, fontWeight: 600,
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
              }}
            >
              Read the U.S. Buyer&apos;s Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* How I evaluate new projects */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-end" style={{ marginBottom: 48 }}>
            <div>
              <span className="label-caps block mb-4">Evaluation Framework</span>
              <h2 style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 400,
                color: '#093f4f', margin: 0, lineHeight: 1.2,
              }}>
                How I evaluate new projects.
              </h2>
            </div>
            <p style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14, color: '#666666', lineHeight: 1.75,
              margin: 0,
            }}>
              More projects are coming to Roatán. The advantage is knowing which ones preserve the island&apos;s lifestyle while improving product quality, management, and buyer confidence. Every project I recommend goes through the same six tests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#e8f0f3' }}>
            {CRITERIA.map((c) => (
              <CriteriaCard key={c.num} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 48 }}>
            <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Featured Projects</span>
            <h2 style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 400,
              color: '#ffffff', margin: '0 0 12px', lineHeight: 1.2,
            }}>
              Projects that passed the framework.
            </h2>
            <p style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14, color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.75, margin: 0,
            }}>
              Each project below has been reviewed for location, developer quality, legal structure, and rental logic before being listed here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} onSchedule={handleSchedule} />
            ))}
          </div>

          {/* Pipeline teaser */}
          <div style={{
            marginTop: 32,
            border: '1px solid rgba(255,255,255,0.08)',
            padding: 'clamp(20px, 4vw, 32px) clamp(20px, 4vw, 36px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255,255,255,0.02)',
          }}>
            <div>
              <p style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 18, fontWeight: 400,
                color: '#ffffff', margin: '0 0 6px', lineHeight: 1.3,
              }}>
                3+ additional projects currently under review.
              </p>
              <p style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 13, color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.65, margin: 0,
              }}>
                Not every project makes the cut. Schedule a call to discuss what else is in the pipeline.
              </p>
            </div>
            <button
              onClick={handleSchedule}
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                padding: '12px 24px',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff', backgroundColor: 'transparent',
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              Request the full list →
            </button>
          </div>
        </div>
      </section>

      {/* Development map */}
      <DevelopmentMap />

      {/* Closing CTA */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Next Step</span>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400,
            color: '#ffffff', margin: '0 0 16px', lineHeight: 1.25,
          }}>
            Ready to evaluate a specific project?
          </h2>
          <p style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 14, color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, margin: '0 auto 36px',
            maxWidth: 520,
          }}>
            A 20-minute call covers your priorities, budget, and timeline — and maps them to the projects that actually fit. No obligation.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={handleSchedule}
              className="btn-accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Calendar style={{ width: 15, height: 15 }} /> Schedule a Strategy Call
            </button>
            <Link
              href="/where-to-buy-in-roatan"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                padding: '12px 0',
              }}
            >
              Compare lifestyle nodes →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
