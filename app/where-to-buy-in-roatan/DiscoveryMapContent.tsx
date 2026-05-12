'use client';

import { useState } from 'react';
import Link from 'next/link';
import { openBriefingModal, trackSchedule, openSavvyCal } from '@/lib/analytics';

// ─── Node definitions ─────────────────────────────────────────────────────────

export const NODES = [
  {
    id: 1, num: '01', cx: 150, cy: 520,
    name: 'West Bay', lifestyle: 'Beach Lifestyle',
    ariaLabel: 'Lifestyle Node 01: West Bay — Beach Lifestyle',
    bestFor: 'Beach lifestyle, premium vacation rental logic, and recognizable resale.',
    buyerProfile: 'U.S. buyer who wants the easiest lifestyle and rental story.',
    typicalProduct: 'Beach condos, resort residences, and ocean-view homes.',
    watchout: 'Higher entry price, tighter inventory, and more competition.',
    priceRange: '$430–$650/sqft premium oceanfront',
    neighborhoodSlug: 'west-bay-beach',
  },
  {
    id: 2, num: '02', cx: 170, cy: 300,
    name: 'West End', lifestyle: 'Walkable Village Lifestyle',
    ariaLabel: 'Lifestyle Node 02: West End — Walkable Village Lifestyle',
    bestFor: 'Walkable island lifestyle, diving culture, and authentic daily expat life.',
    buyerProfile: 'Lifestyle buyer or diver who wants community over resort amenities.',
    typicalProduct: 'Condos, small villas, and mixed-use commercial properties.',
    watchout: 'Less prime beach; some properties are further from the waterfront.',
    priceRange: '$350–$500/sqft mid-tier premium',
    neighborhoodSlug: 'west-end',
  },
  {
    id: 3, num: '03', cx: 420, cy: 280,
    name: 'Sandy Bay', lifestyle: 'Quiet Reef Lifestyle',
    ariaLabel: 'Lifestyle Node 03: Sandy Bay — Quiet Reef Lifestyle',
    bestFor: 'Quiet hillside living with reef access and panoramic ocean views.',
    buyerProfile: 'Retiree or long-term resident who prioritizes privacy over walkability.',
    typicalProduct: 'Hillside homes, view condos, and emerging luxury developments.',
    watchout: 'Car-dependent; fewer walkable amenities than West End or West Bay.',
    priceRange: '$300–$500/sqft (varies with elevation and view)',
    neighborhoodSlug: 'sandy-bay',
  },
  {
    id: 4, num: '04', cx: 830, cy: 300,
    name: 'Pristine Bay', lifestyle: 'Gated Resort Lifestyle',
    ariaLabel: 'Lifestyle Node 04: Pristine Bay — Gated Resort Lifestyle',
    bestFor: 'Gated resort amenities, turnkey management, and golf or marina lifestyle.',
    buyerProfile: 'Buyer who values predictable infrastructure and operational simplicity.',
    typicalProduct: 'Resort villas, managed condos, and marina residences.',
    watchout: 'Higher HOA costs; gated environment limits the open island experience.',
    priceRange: '$400–$700/sqft for villas and condos',
    neighborhoodSlug: 'pristine-bay',
  },
  {
    id: 5, num: '05', cx: 1180, cy: 480,
    name: 'French Harbour & East', lifestyle: 'Emerging Lifestyle',
    ariaLabel: 'Lifestyle Node 05: French Harbour & East — Emerging Lifestyle',
    bestFor: 'Lower entry price, authentic local character, and longer-horizon appreciation.',
    buyerProfile: 'Value investor comfortable with less mature tourist infrastructure.',
    typicalProduct: 'Land, homes, and early-stage projects with development upside.',
    watchout: 'Rental yields more variable; selective project quality; longer hold required.',
    priceRange: '$200–$400/sqft (wide variance by exact location)',
    neighborhoodSlug: 'french-harbour',
  },
] as const;

type NodeType = typeof NODES[number];

// ─── Comparison matrix ────────────────────────────────────────────────────────

// ─── Comparison matrix ────────────────────────────────────────────────────────

function ComparisonMatrix({ onSchedule }: { onSchedule: () => void }) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container" style={{ maxWidth: 1200 }}>
        <span className="label-caps block mb-4">Compare All Five</span>
        <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: '#093f4f', margin: '0 0 32px', lineHeight: 1.2 }}>
          Pick your lifestyle. Then pick your property.
        </h2>

        {/* Desktop table */}
        <div className="hidden lg:block" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #c9a84c' }}>
                {(['Location', 'Lifestyle', 'Best For', 'Typical Product', 'Watch Out'] as const).map(label => (
                  <th key={label} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NODES.map((node, i) => (
                <tr
                  key={node.id}
                  style={{ backgroundColor: i % 2 === 0 ? '#f9f7f4' : '#ffffff', borderBottom: '1px solid #ede9e2' }}
                >
                  <td style={{ padding: '14px 14px', fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, color: '#093f4f', fontSize: 14, whiteSpace: 'nowrap' }}>
                    <span style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', marginBottom: 2, textTransform: 'uppercase' }}>{node.num}</span>
                    {node.name}
                  </td>
                  <td style={{ padding: '14px 14px', color: '#444', lineHeight: 1.4 }}>{node.lifestyle}</td>
                  <td style={{ padding: '14px 14px', color: '#444', lineHeight: 1.5 }}>{node.bestFor}</td>
                  <td style={{ padding: '14px 14px', color: '#444', lineHeight: 1.5 }}>{node.typicalProduct}</td>
                  <td style={{ padding: '14px 14px', color: '#888', lineHeight: 1.5 }}>{node.watchout}</td>
                  <td style={{ padding: '14px 14px', whiteSpace: 'nowrap' }}>
                    <Link
                      href={`/neighborhoods/${node.neighborhoodSlug}`}
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#789ead', textDecoration: 'underline' }}
                    >
                      Full profile →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NODES.map((node) => {
            const isOpen = expandedRow === node.id;
            return (
              <div key={node.id} style={{ border: '1px solid #ede9e2', backgroundColor: '#ffffff', overflow: 'hidden' }}>
                <button
                  onClick={() => setExpandedRow(isOpen ? null : node.id)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}
                >
                  <span>
                    <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', display: 'block', marginBottom: 2, textTransform: 'uppercase' }}>{node.num}</span>
                    <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, color: '#093f4f' }}>{node.name}</span>
                    <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#789ead', display: 'block' }}>{node.lifestyle}</span>
                  </span>
                  <span style={{ color: '#c9a84c', fontSize: 18, flexShrink: 0, marginLeft: 12, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 16px 16px', borderTop: '1px solid #f0ede8' }}>
                    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 14 }}>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', marginBottom: 3 }}>Best For</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#444', lineHeight: 1.5, margin: 0 }}>{node.bestFor}</dd>
                      </div>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', marginBottom: 3 }}>Typical Product</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#444', lineHeight: 1.5, margin: 0 }}>{node.typicalProduct}</dd>
                      </div>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: 3 }}>Watch Out</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.5, margin: 0 }}>{node.watchout}</dd>
                      </div>
                    </dl>
                    <div style={{ marginTop: 14 }}>
                      <Link
                        href={`/neighborhoods/${node.neighborhoodSlug}`}
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#093f4f', textDecoration: 'underline' }}
                      >
                        Neighborhood profile →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────

function ClosingCTA({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section style={{ backgroundColor: '#093f4f', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 720, textAlign: 'center' }}>
        <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Next Step</span>
        <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: '#ffffff', margin: '0 0 20px', lineHeight: 1.3 }}>
          Want to walk through your options live?
        </h2>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginTop: 0, marginBottom: 36, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Every buyer&apos;s situation is different — budget, lifestyle intent, hold period, and risk appetite all shape which node makes sense. A 20-minute call covers your priorities and maps them to specific projects.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <button onClick={onSchedule} className="btn-accent">
            Schedule a Call with Tomás →
          </button>
          <button
            onClick={() => openBriefingModal()}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 22px', cursor: 'pointer', letterSpacing: '0.04em' }}
          >
            Download the Investor Briefing
          </button>
        </div>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, marginTop: 40, marginBottom: 0 }}>
          Price ranges shown are indicative and based on publicly available market data as of early 2026. All figures are USD. Individual project pricing and availability subject to change. This page is for informational purposes only and does not constitute investment advice.
        </p>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function DiscoveryMapContent() {
  const handleSchedule = () => { trackSchedule(); openSavvyCal(); };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Where to Buy in Roatán</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.15, margin: 0 }}>
            One island. Five lifestyles.
          </h1>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: 16, marginBottom: 0, maxWidth: 580 }}>
            Roatán is not one market. Compare the island by lifestyle, location, product type, and buyer fit before you choose a property.
          </p>
        </div>
      </section>

      {/* ── Comparison matrix ── */}
      <ComparisonMatrix onSchedule={handleSchedule} />

      {/* ── Closing CTA ── */}
      <ClosingCTA onSchedule={handleSchedule} />
    </>
  );
}
