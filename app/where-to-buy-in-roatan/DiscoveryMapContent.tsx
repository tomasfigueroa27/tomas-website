'use client';

import { useState, useRef } from 'react';
import { openBriefingModal, trackSchedule, openSavvyCal } from '@/lib/analytics';

// ─── Node definitions (positions match viewBox 0 0 1600 700) ─────────────────

export const NODES = [
  {
    id: 1, num: '01', cx: 150, cy: 520,
    name: 'West Bay', lifestyle: 'Beach Lifestyle',
    ariaLabel: 'Lifestyle Node 01: West Bay - Beach Lifestyle',
    vibe: 'The most recognizable beach on the island. Soft white sand, calm turquoise water, dive operators within walking distance. The strongest vacation-rental logic in Roatán.',
    typicalBuyer: 'Vacation-rental investors, second-home buyers prioritizing beach access',
    priceRange: '$430–$650/sqft premium oceanfront',
    strength: 'Highest nightly rates, strongest demand, most liquid resale market',
    watchout: 'Highest entry price; tightest inventory',
    bestFor: ['Buyers who want the most recognizable beach on Roatán', 'Investors prioritizing short-term rental income', 'Owners who plan to visit frequently'],
    link: '/neighborhoods#west-bay',
  },
  {
    id: 2, num: '02', cx: 170, cy: 300,
    name: 'West End', lifestyle: 'Walkable Village Lifestyle',
    ariaLabel: 'Lifestyle Node 02: West End - Walkable Village Lifestyle',
    vibe: "A walkable village with restaurants, dive shops, bars, and a tight expat community. The most authentic 'island life' experience on Roatán without sacrificing access or amenities.",
    typicalBuyer: 'Lifestyle buyers, divers, remote workers, expats seeking community',
    priceRange: '$350–$500/sqft mid-tier premium',
    strength: 'Community character, daily-life walkability, diving infrastructure',
    watchout: 'Less prime beach; some properties further from shoreline',
    bestFor: ['Buyers who want a daily lifestyle, not just a vacation rental', 'Divers, sailors, and water-sport lifestyle buyers', 'Owners spending 3+ months a year on-island'],
    link: '/neighborhoods#west-end',
  },
  {
    id: 3, num: '03', cx: 420, cy: 280,
    name: 'Sandy Bay', lifestyle: 'Quiet Reef Lifestyle',
    ariaLabel: 'Lifestyle Node 03: Sandy Bay - Quiet Reef Lifestyle',
    vibe: 'Quieter residential life right on the reef. The emerging luxury tier — premium hillside development with panoramic ocean views and slower pace than West Bay or West End.',
    typicalBuyer: 'Retirees, lifestyle buyers prioritizing quiet and views',
    priceRange: '$300–$500/sqft (varies widely with elevation and view)',
    strength: 'Privacy, panoramic views, direct reef access, emerging luxury developments',
    watchout: 'Fewer walkable amenities; car-dependent',
    bestFor: ['Buyers who prioritize quiet over walkability', 'Hillside view buyers, not beach buyers', 'Long-term residents and retirees'],
    link: '/neighborhoods#sandy-bay',
  },
  {
    id: 4, num: '04', cx: 830, cy: 300,
    name: 'Pristine Bay', lifestyle: 'Gated Resort Lifestyle',
    ariaLabel: 'Lifestyle Node 04: Pristine Bay - Gated Resort Lifestyle',
    vibe: 'Gated resort community with golf, marina, beach club, spa, and full property management infrastructure. The most institutional product on the island — controlled environment, predictable amenities, consistent standards.',
    typicalBuyer: 'Resort-style buyers, golfers, buyers prioritizing amenities and turnkey management',
    priceRange: '$400–$700/sqft for villas and condos',
    strength: 'Full amenities, professional management, predictable resale to similar buyers',
    watchout: "Higher HOA; you're buying into a gated environment, not an open village",
    bestFor: ['Buyers who want full amenities + concierge management', 'Golf, marina, and resort-lifestyle owners', 'Investors valuing operational simplicity over upside'],
    link: '/neighborhoods#pristine-bay',
  },
  {
    id: 5, num: '05', cx: 1180, cy: 480,
    name: 'French Harbour & East', lifestyle: 'Emerging Lifestyle',
    ariaLabel: 'Lifestyle Node 05: French Harbour & East - Emerging Lifestyle',
    vibe: 'The emerging half of the island — French Harbour, Oak Ridge, Punta Gorda, and beyond. Lower entry, more authentic local infrastructure, longer-term development exposure. Higher upside potential but selective entry only.',
    typicalBuyer: 'Value buyers, longer-horizon investors, those comfortable with less mature infrastructure',
    priceRange: '$200–$400/sqft (wide variance by exact location)',
    strength: 'Lowest entry, longer-term appreciation potential, authentic local character',
    watchout: 'Less mature tourist infrastructure; rental yields more variable; selective project quality',
    bestFor: ['Value-oriented buyers willing to wait', 'Buyers who want authentic local Roatán, not resort Roatán', 'Investors comfortable with longer hold periods'],
    link: '/neighborhoods#french-harbour',
  },
] as const;

type NodeType = typeof NODES[number];

// ─── SVG Map ──────────────────────────────────────────────────────────────────

function RoatanMap({
  selectedNode,
  hoveredNode,
  onNodeClick,
  onNodeHover,
}: {
  selectedNode: NodeType | null;
  hoveredNode: number | null;
  onNodeClick: (node: NodeType) => void;
  onNodeHover: (id: number | null) => void;
}) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '43.75%', minHeight: 240 }}>
      <svg
        viewBox="0 0 1600 700"
        role="img"
        aria-label="Interactive map of Roatán showing five lifestyle nodes"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id="oceanGrad" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#0b5068" />
            <stop offset="100%" stopColor="#093f4f" />
          </radialGradient>
        </defs>

        {/* Ocean */}
        <rect width="1600" height="700" fill="url(#oceanGrad)" />

        {/* Caribbean Sea label */}
        <text x="900" y="72" textAnchor="middle" fill="#c9a84c" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="600" letterSpacing="3" opacity="0.3">
          CARIBBEAN SEA
        </text>

        {/* Reef line — dashed, north of island, brand signature */}
        <path
          d="M 115,195 C 300,140 510,112 710,108 C 910,104 1090,124 1260,158 C 1385,183 1480,215 1504,232"
          fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeOpacity="0.55" strokeDasharray="10,7"
        />

        {/* Island body */}
        <path
          d="
            M 110,520
            C 72,508 58,474 63,430
            C 68,386 90,335 118,290
            C 146,245 178,213 218,195
            C 258,177 318,163 405,153
            C 492,143 582,147 668,147
            C 754,147 840,149 925,151
            C 1010,153 1090,157 1165,168
            C 1240,179 1318,202 1388,237
            C 1458,272 1518,316 1548,363
            C 1578,410 1562,456 1530,488
            C 1498,520 1448,540 1375,553
            C 1302,566 1210,570 1110,567
            C 1010,564 912,558 815,552
            C 718,546 622,540 528,534
            C 434,528 348,524 268,522
            C 210,521 162,521 110,520 Z
          "
          fill="#f0ebe0" stroke="#c9a84c" strokeWidth="1.5" strokeOpacity="0.5"
        />

        {/* Mountainous spine */}
        <path
          d="M 200,370 C 400,325 650,315 850,320 C 1050,325 1220,345 1400,380"
          fill="none" stroke="#789ead" strokeWidth="48" strokeOpacity="0.09" strokeLinecap="round"
        />

        {/* ROATÁN label on island */}
        <text x="780" y="405" textAnchor="middle" fill="#093f4f" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="600" letterSpacing="3" opacity="0.22">
          ROATÁN
        </text>

        {/* Compass rose */}
        <g opacity="0.65">
          <text x="1520" y="50" textAnchor="middle" fill="#c9a84c" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="700">N</text>
          <line x1="1520" y1="54" x2="1520" y2="88" stroke="#c9a84c" strokeWidth="1.5" />
          <polygon points="1520,54 1515,70 1525,70" fill="#c9a84c" />
          <circle cx="1520" cy="100" r="3" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        </g>

        {/* Node 05 extended-region indicator */}
        <circle cx="1180" cy="480" r="92" fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeOpacity="0.28" strokeDasharray="6,5" />

        {/* Interactive nodes */}
        {NODES.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          const isHovered = hoveredNode === node.id;
          const isActive = isSelected || isHovered;

          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={node.ariaLabel}
              aria-pressed={isSelected}
              onClick={() => onNodeClick(node)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNodeClick(node); } }}
              onMouseEnter={() => onNodeHover(node.id)}
              onMouseLeave={() => onNodeHover(null)}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              {/* Pulse ring (idle state only) */}
              {!isSelected && (
                <circle cx={node.cx} cy={node.cy} r="22" fill="none" stroke="#c9a84c" strokeWidth="1.2">
                  <animate attributeName="r" from="22" to="40" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.55" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Hover/selected glow */}
              {isActive && (
                <circle cx={node.cx} cy={node.cy} r="30" fill="rgba(201,168,76,0.18)" />
              )}

              {/* Focus ring */}
              <circle cx={node.cx} cy={node.cy} r="25" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeOpacity="0" style={{ transition: 'stroke-opacity 0.15s' }}
                className="node-focus-ring"
              />

              {/* Main circle */}
              <circle
                cx={node.cx} cy={node.cy} r="20"
                fill={isSelected ? '#c9a84c' : 'rgba(240,235,224,0.94)'}
                stroke="#c9a84c"
                strokeWidth={isSelected ? 2.5 : 2}
                style={{ transition: 'fill 0.2s, r 0.2s' }}
              />

              {/* Number */}
              <text
                x={node.cx} y={node.cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isSelected ? '#ffffff' : '#093f4f'}
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="10"
                fontWeight="700"
              >
                {node.num}
              </text>

              {/* Invisible touch target — larger hit area for mobile */}
              <circle cx={node.cx} cy={node.cy} r="32" fill="transparent" />
            </g>
          );
        })}

        {/* Desktop-only hover tooltip */}
        {hoveredNode && !selectedNode && (() => {
          const node = NODES.find(n => n.id === hoveredNode);
          if (!node) return null;
          const tx = node.cx > 900 ? node.cx - 140 : node.cx + 32;
          const ty = node.cy - 38;
          return (
            <g>
              <rect x={tx} y={ty} width="128" height="42" rx="3" fill="#0a1628" opacity="0.93" />
              <text x={tx + 64} y={ty + 15} textAnchor="middle" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="700">{node.name}</text>
              <text x={tx + 64} y={ty + 30} textAnchor="middle" fill="#789ead" fontFamily="Arial, Helvetica, sans-serif" fontSize="9">{node.lifestyle}</text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function NodePanel({ node, onSchedule }: { node: NodeType | null; onSchedule: () => void }) {
  if (!node) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '2rem', minHeight: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="7" stroke="#c9a84c" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2" fill="#c9a84c" />
          </svg>
        </div>
        <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 17, color: '#093f4f', margin: 0, lineHeight: 1.4 }}>
          Five lifestyle nodes.<br />One island.
        </p>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#888', marginTop: 12, marginBottom: 0 }}>
          Tap any node on the map to explore the lifestyle, price range, and buyer profile.
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
      {/* Header bar */}
      <div style={{ backgroundColor: '#093f4f', padding: '1.25rem 1.75rem' }}>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>
          {node.num} — {node.lifestyle}
        </span>
        <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 22, fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
          {node.name}
        </h2>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem 1.75rem' }}>
        {/* Vibe */}
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#444', lineHeight: 1.7, marginTop: 0, marginBottom: '1.25rem' }}>
          {node.vibe}
        </p>

        {/* Key details grid */}
        <div style={{ borderTop: '1px solid #f0ede8', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>Price Range</span>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#093f4f', lineHeight: 1.4, display: 'block' }}>{node.priceRange}</span>
          </div>
          <div>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>Typical Buyer</span>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#093f4f', lineHeight: 1.4, display: 'block' }}>{node.typicalBuyer}</span>
          </div>
        </div>

        {/* Strength + Watch out */}
        <div style={{ borderTop: '1px solid #f0ede8', paddingTop: '1.25rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'rgba(9,63,79,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><path d="M1.5 4L3.5 6L6.5 2" stroke="#093f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div>
              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>Strength</span>
              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#444', lineHeight: 1.5 }}>{node.strength}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3" stroke="#c9a84c" strokeWidth="1.2"/><path d="M4 2.5V4.2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/><circle cx="4" cy="5.5" r="0.5" fill="#c9a84c"/></svg>
            </span>
            <div>
              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>Watch Out</span>
              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#444', lineHeight: 1.5 }}>{node.watchout}</span>
            </div>
          </div>
        </div>

        {/* Best For list */}
        <div style={{ borderTop: '1px solid #f0ede8', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Best For</span>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {node.bestFor.map((item, i) => (
              <li key={i} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#444', lineHeight: 1.5, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: '#c9a84c', flexShrink: 0, marginTop: 2 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={onSchedule}
            className="btn-accent"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Discuss {node.name} with Tomás →
          </button>
          <a
            href={node.link}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', textAlign: 'center', textDecoration: 'none', display: 'block', paddingTop: 4 }}
          >
            Read full neighborhood profile →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Comparison table ─────────────────────────────────────────────────────────

const TABLE_COLS = [
  { key: 'name', label: 'Location' },
  { key: 'lifestyle', label: 'Lifestyle' },
  { key: 'priceRange', label: 'Price Range' },
  { key: 'strength', label: 'Key Strength' },
  { key: 'watchout', label: 'Watch Out' },
] as const;

function ComparisonTable({ onNodeSelect, onSchedule }: { onNodeSelect: (node: NodeType) => void; onSchedule: () => void }) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container" style={{ maxWidth: 1200 }}>
        <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Side-by-Side Comparison</span>
        <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: '#093f4f', margin: '0 0 32px' }}>
          All five nodes at a glance
        </h2>

        {/* Desktop table */}
        <div className="hidden lg:block" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #c9a84c' }}>
                {TABLE_COLS.map(col => (
                  <th key={col.key} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {col.label}
                  </th>
                ))}
                <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase' }}></th>
              </tr>
            </thead>
            <tbody>
              {NODES.map((node, i) => (
                <tr
                  key={node.id}
                  style={{ backgroundColor: i % 2 === 0 ? '#f9f7f4' : '#ffffff', borderBottom: '1px solid #ede9e2', cursor: 'pointer' }}
                  onClick={() => { onNodeSelect(node); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <td style={{ padding: '14px 14px', fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, color: '#093f4f', fontSize: 14 }}>
                    <span style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', marginBottom: 2, textTransform: 'uppercase' }}>{node.num}</span>
                    {node.name}
                  </td>
                  <td style={{ padding: '14px 14px', color: '#444', lineHeight: 1.4 }}>{node.lifestyle}</td>
                  <td style={{ padding: '14px 14px', color: '#093f4f', fontWeight: 600, whiteSpace: 'nowrap' }}>{node.priceRange}</td>
                  <td style={{ padding: '14px 14px', color: '#444', lineHeight: 1.5 }}>{node.strength}</td>
                  <td style={{ padding: '14px 14px', color: '#888', lineHeight: 1.5 }}>{node.watchout}</td>
                  <td style={{ padding: '14px 14px', whiteSpace: 'nowrap' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); onNodeSelect(node); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#789ead', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
                    >
                      View detail →
                    </button>
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
                  <span style={{ color: '#c9a84c', fontSize: 18, flexShrink: 0, marginLeft: 12, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 16px 16px', borderTop: '1px solid #f0ede8' }}>
                    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 14 }}>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', marginBottom: 3 }}>Price Range</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#093f4f', fontWeight: 600, margin: 0 }}>{node.priceRange}</dd>
                      </div>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#789ead', textTransform: 'uppercase', marginBottom: 3 }}>Key Strength</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#444', lineHeight: 1.5, margin: 0 }}>{node.strength}</dd>
                      </div>
                      <div>
                        <dt style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: 3 }}>Watch Out</dt>
                        <dd style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.5, margin: 0 }}>{node.watchout}</dd>
                      </div>
                    </dl>
                    <button
                      onClick={() => { onNodeSelect(node); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 0 0', textDecoration: 'underline' }}
                    >
                      View full profile on map →
                    </button>
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
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = (node: NodeType) => {
    setSelectedNode(node);
    if (window.innerWidth < 1024) {
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  };

  const handleSchedule = () => { trackSchedule(); openSavvyCal(); };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Where to Buy in Roatán</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.2, margin: 0 }}>
            One island. Five lifestyles.
          </h1>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginTop: 16, marginBottom: 0, maxWidth: 560 }}>
            Roatán isn&apos;t one market. Tap any node on the map to explore the lifestyle, the price range, and the buyer it attracts.
          </p>
        </div>
      </section>

      {/* ── Map + panel ── */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 40, paddingBottom: 56 }}>
        <div className="section-container" style={{ maxWidth: 1400 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>

            {/* Map column */}
            <div style={{ flex: '1 1 min(100%, 680px)', minWidth: 0 }}>
              <RoatanMap
                selectedNode={selectedNode}
                hoveredNode={hoveredNode}
                onNodeClick={handleNodeClick}
                onNodeHover={setHoveredNode}
              />
            </div>

            {/* Panel column */}
            <div ref={panelRef} style={{ flex: '1 1 300px', minWidth: 280 }}>
              <NodePanel node={selectedNode} onSchedule={handleSchedule} />
            </div>

          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <ComparisonTable onNodeSelect={setSelectedNode} onSchedule={handleSchedule} />

      {/* ── Closing CTA ── */}
      <ClosingCTA onSchedule={handleSchedule} />
    </>
  );
}
