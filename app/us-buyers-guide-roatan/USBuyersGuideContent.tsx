'use client';

import { useState } from 'react';
import Link from 'next/link';
import { openBriefingModal, trackSchedule, openSavvyCal } from '@/lib/analytics';

const TOC_ITEMS = [
  { id: 'can-americans-buy', label: 'Can Americans buy in Roatán?' },
  { id: 'where-to-compare', label: 'What areas to compare first?' },
  { id: 'buying-process', label: 'What is the buying process?' },
  { id: 'legal-due-diligence', label: 'What legal due diligence matters?' },
  { id: 'how-rentals-work', label: 'How do rentals work?' },
  { id: 'pre-construction', label: 'What about pre-construction?' },
];

const sectionStyle: React.CSSProperties = {
  marginBottom: 72,
  scrollMarginTop: 96,
};

const h2Style: React.CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(20px, 2.5vw, 26px)',
  fontWeight: 400,
  color: '#093f4f',
  marginTop: 0,
  marginBottom: 20,
  paddingBottom: 16,
  borderBottom: '2px solid #d4e8ed',
  lineHeight: 1.25,
};

const h3Style: React.CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 17,
  fontWeight: 400,
  color: '#093f4f',
  marginTop: 32,
  marginBottom: 12,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 15,
  color: '#444444',
  lineHeight: 1.85,
  margin: '0 0 16px',
};

// Sub-components

function ShortAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: '#f0f8fb',
        borderLeft: '3px solid #789ead',
        padding: '16px 20px',
        marginBottom: 28,
      }}
    >
      <p
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 10,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: '#789ead',
          margin: '0 0 8px',
        }}
      >
        SHORT ANSWER
      </p>
      <p
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 15,
          color: '#093f4f',
          fontWeight: 500,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
          <div
            style={{
              width: 18,
              height: 18,
              backgroundColor: 'rgba(9,63,79,0.08)',
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 2,
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 4L3.5 6L6.5 2" stroke="#093f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14,
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(201,168,76,0.07)',
        borderLeft: '3px solid #c9a84c',
        padding: '14px 18px',
        marginBottom: 24,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
      }}
    >
      <span style={{ color: '#c9a84c', flexShrink: 0, fontSize: 14, lineHeight: 1.7 }}>⚠</span>
      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555', lineHeight: 1.7 }}>
        {children}
      </span>
    </div>
  );
}

interface InlineCTAProps {
  heading: string;
  cta: string;
  onClick?: () => void;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function InlineCTA({ heading, cta, onClick, href, secondaryLabel, secondaryHref }: InlineCTAProps) {
  return (
    <div
      style={{
        backgroundColor: '#093f4f',
        padding: '24px 28px',
        margin: '36px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <p
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 16,
          color: '#ffffff',
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        {heading}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
        {href ? (
          <Link href={href} className="btn-accent">
            {cta}
          </Link>
        ) : onClick ? (
          <button onClick={onClick} className="btn-accent">
            {cta}
          </button>
        ) : null}
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 12,
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
            }}
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function USBuyersGuideContent() {
  const [tocOpen, setTocOpen] = useState(false);

  const handleSchedule = () => {
    trackSchedule();
    openSavvyCal();
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 120, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>For U.S. Buyers</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            The U.S. Buyer&apos;s Guide to Roatán Real Estate.
          </h1>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              marginTop: 20,
              marginBottom: 36,
              maxWidth: 640,
            }}
          >
            Everything Americans need to understand before buying property in the Bay Islands of Honduras — legal framework, buying process, due diligence, rentals, and pre-construction.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={openBriefingModal} className="btn-accent">
              Download the Investor Briefing
            </button>
            <button
              onClick={handleSchedule}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="section-container" style={{ maxWidth: 1200, paddingTop: 56, paddingBottom: 96 }}>

          {/* Intro */}
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.85,
              maxWidth: 760,
              marginBottom: 12,
            }}
          >
            Roatán is one of the most accessible Caribbean markets for U.S. buyers — but the legal framework, process, and due diligence look different than they do at home. This guide answers the most common questions Americans ask before buying property in the Bay Islands of Honduras.
          </p>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 12,
              fontStyle: 'italic',
              color: '#aaaaaa',
              marginBottom: 52,
            }}
          >
            Reviewed May 2026 by Tomás Figueroa, Keller Williams Roatán.
          </p>

          {/* Two-column layout */}
          <div className="lg:flex lg:items-start" style={{ gap: '4rem' }}>

            {/* TOC sidebar */}
            <aside className="lg:w-64 lg:flex-shrink-0 mb-10 lg:mb-0">
              <div className="lg:sticky" style={{ top: 88 }}>

                {/* Mobile toggle */}
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="lg:hidden"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: '1px solid #d4e8ed',
                    padding: '12px 16px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#093f4f',
                    cursor: 'pointer',
                    marginBottom: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  aria-expanded={tocOpen}
                >
                  <span>What&apos;s in this guide</span>
                  <span>{tocOpen ? '↑' : '↓'}</span>
                </button>

                <div className={tocOpen ? 'block' : 'hidden lg:block'}>
                  <p
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#789ead',
                      margin: '0 0 14px',
                    }}
                    className="hidden lg:block"
                  >
                    What&apos;s in this guide
                  </p>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {TOC_ITEMS.map((item, i) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setTocOpen(false)}
                        style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: 13,
                          color: '#555555',
                          textDecoration: 'none',
                          padding: '7px 0 7px 12px',
                          borderLeft: '2px solid transparent',
                          display: 'block',
                          lineHeight: 1.4,
                          transition: 'color 0.15s, border-color 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#093f4f';
                          e.currentTarget.style.borderLeftColor = '#789ead';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#555555';
                          e.currentTarget.style.borderLeftColor = 'transparent';
                        }}
                      >
                        {i + 1}. {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Sidebar CTA card */}
                <div
                  className="hidden lg:block"
                  style={{
                    marginTop: 32,
                    border: '1px solid #d4e8ed',
                    padding: 20,
                    backgroundColor: '#f9fbfc',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 15,
                      color: '#093f4f',
                      margin: '0 0 8px',
                      fontWeight: 400,
                    }}
                  >
                    Questions before you commit?
                  </p>
                  <p
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 13,
                      color: '#666',
                      lineHeight: 1.65,
                      margin: '0 0 16px',
                    }}
                  >
                    A 20-minute call can clarify structure, area fit, and timeline.
                  </p>
                  <button
                    onClick={handleSchedule}
                    style={{
                      width: '100%',
                      backgroundColor: '#093f4f',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 16px',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      cursor: 'pointer',
                    }}
                  >
                    Schedule a Call →
                  </button>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main style={{ flex: 1, minWidth: 0 }}>

              {/* Section 01 */}
              <section id="can-americans-buy" style={sectionStyle}>
                <h2 style={h2Style}>01 — Can Americans buy property in Roatán?</h2>

                <ShortAnswer>
                  Yes. Americans can buy property in Roatán, but they should verify title, understand the ownership structure, and use qualified local legal guidance before signing.
                </ShortAnswer>

                <p style={bodyStyle}>
                  Roatán sits within the Bay Islands of Honduras, which carry a constitutional designation that allows foreigners to own land within 40 kilometers of the coastline — a key distinction from mainland Honduras, where coastal foreign ownership is restricted. Americans can own freehold property in Roatán with the same rights as Honduran citizens, making the Bay Islands one of the most accessible Caribbean markets for U.S. buyers to enter.
                </p>

                <h3 style={h3Style}>Ownership structures</h3>

                <p style={bodyStyle}>
                  Property can be held in three main structures, each with different tax, succession, and exit implications:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '0 0 24px' }}>
                  {[
                    {
                      title: 'Personal name',
                      body: 'Simplest structure. Direct ownership in your individual name. Common for primary residences and straightforward investment properties.',
                    },
                    {
                      title: 'Honduran S.A. de C.V. (corporation)',
                      body: 'A Honduran corporation holds the property. Useful for multiple shareholders, succession planning, and certain tax structures.',
                    },
                    {
                      title: 'Trust (Fideicomiso)',
                      body: 'The property is held in trust by a Honduran bank. Common for more complex estate planning or multi-owner scenarios.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        padding: '16px 20px',
                        borderLeft: '3px solid #d4e8ed',
                        backgroundColor: '#f9fbfc',
                      }}
                    >
                      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, fontWeight: 700, color: '#093f4f', margin: '0 0 6px' }}>
                        {item.title}
                      </p>
                      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                <WarnBox>
                  Get the structure right at entry. Changing ownership structure after closing typically requires a new deed and additional transfer taxes — it is not a free correction.
                </WarnBox>

                <InlineCTA
                  heading="Not sure which structure fits your situation?"
                  cta="Talk through your buying structure"
                  onClick={handleSchedule}
                />
              </section>

              {/* Section 02 */}
              <section id="where-to-compare" style={sectionStyle}>
                <h2 style={h2Style}>02 — What areas should U.S. buyers compare first?</h2>

                <ShortAnswer>
                  Start with West Bay for premium beach and rental logic, West End for walkable lifestyle, Sandy Bay for quiet hillside living, Pristine Bay for gated resort amenities, or French Harbour for emerging value. Each area attracts a different buyer.
                </ShortAnswer>

                <div style={{ overflowX: 'auto', marginBottom: 28 }}>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      border: '1px solid #e8f0f3',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                    }}
                  >
                    <thead>
                      <tr>
                        {['Area', 'Character', 'Best Buyer Fit'].map((col) => (
                          <th
                            key={col}
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.12em',
                              color: '#789ead',
                              padding: '12px 16px',
                              textAlign: 'left',
                              borderBottom: '1px solid #e8f0f3',
                              backgroundColor: '#f9fbfc',
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          area: 'West Bay',
                          character: 'Premium beach, highest $/sqft, strongest vacation rental logic.',
                          fit: 'Investor or vacation buyer',
                        },
                        {
                          area: 'West End',
                          character: 'Walkable village, restaurants, diving, community character.',
                          fit: 'Lifestyle buyer, diver, expat',
                        },
                        {
                          area: 'Sandy Bay',
                          character: 'Quieter hillside, reef access, emerging luxury tier.',
                          fit: 'Retiree, long-term resident',
                        },
                        {
                          area: 'Pristine Bay',
                          character: 'Gated resort, golf, marina, turnkey management.',
                          fit: 'Amenity buyer, golf/marina',
                        },
                        {
                          area: 'French Harbour & East',
                          character: 'Lower entry, local infrastructure, development exposure.',
                          fit: 'Value investor, long horizon',
                        },
                      ].map((row, i) => (
                        <tr
                          key={row.area}
                          style={{ backgroundColor: i % 2 === 0 ? '#f9fbfc' : '#ffffff' }}
                        >
                          <td
                            style={{
                              padding: '12px 16px',
                              fontSize: 14,
                              fontWeight: 600,
                              color: '#093f4f',
                              borderBottom: '1px solid #e8f0f3',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {row.area}
                          </td>
                          <td
                            style={{
                              padding: '12px 16px',
                              fontSize: 14,
                              color: '#555555',
                              lineHeight: 1.6,
                              borderBottom: '1px solid #e8f0f3',
                            }}
                          >
                            {row.character}
                          </td>
                          <td
                            style={{
                              padding: '12px 16px',
                              fontSize: 14,
                              color: '#555555',
                              lineHeight: 1.6,
                              borderBottom: '1px solid #e8f0f3',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {row.fit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InlineCTA
                  heading="Compare all five areas side by side."
                  cta="Explore the lifestyle map"
                  href="/where-to-buy-in-roatan"
                  secondaryLabel="Neighborhood profiles"
                  secondaryHref="/neighborhoods"
                />
              </section>

              {/* Section 03 */}
              <section id="buying-process" style={sectionStyle}>
                <h2 style={h2Style}>03 — What is the buying process?</h2>

                <ShortAnswer>
                  A Roatán purchase moves through six stages — from signed intent to registered deed. Standard timeline is 30–60 days to closing, plus an additional 30–60 days for title registration.
                </ShortAnswer>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '28px 0' }}>
                  {[
                    {
                      step: '01',
                      title: 'Property identification + signed intent',
                      body: 'Identify the property and sign a Letter of Intent or reservation agreement (typically with a small reservation fee). This takes the property off the market while due diligence begins.',
                    },
                    {
                      step: '02',
                      title: 'Independent legal representation',
                      body: "Retain an independent Honduran attorney — not the developer's or seller's representative. Your attorney will conduct a title search, verify there are no liens or encumbrances, and draft or review all agreements before you sign.",
                    },
                    {
                      step: '03',
                      title: 'Title search and due diligence',
                      body: 'The attorney reviews the property at the Public Property Registry (Instituto de la Propiedad). This confirms the chain of title, identifies any liens, confirms the property boundaries match the survey, and verifies there are no outstanding taxes or municipal obligations.',
                    },
                    {
                      step: '04',
                      title: 'Purchase agreement (Promesa de Compraventa)',
                      body: 'Once due diligence clears, buyer and seller sign a bilateral purchase agreement. A deposit — typically 10–20% of the purchase price — is held in escrow by the attorney or notary. This agreement is legally binding on both parties.',
                    },
                    {
                      step: '05',
                      title: 'Closing — notarial deed (Escritura Pública)',
                      body: 'The Escritura Pública is executed before a Honduran notary. Both parties — or their legal representatives via power of attorney — sign the deed. The purchase price, legal description, and terms are all recorded in the public record.',
                    },
                    {
                      step: '06',
                      title: 'Property registration',
                      body: 'The executed deed is registered at the Public Property Registry. Registration completes the legal transfer of title. This step typically takes 30–60 additional days and is handled by your attorney.',
                    },
                  ].map((item, i, arr) => (
                    <div
                      key={item.step}
                      style={{
                        display: 'flex',
                        gap: 20,
                        padding: '24px 0',
                        borderBottom: i < arr.length - 1 ? '1px solid #e8f0f3' : 'none',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: 22,
                          fontWeight: 700,
                          color: '#d4e8ed',
                          flexShrink: 0,
                          lineHeight: 1,
                          paddingTop: 3,
                          minWidth: 32,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, fontWeight: 700, color: '#093f4f', margin: '0 0 6px' }}>
                          {item.title}
                        </p>
                        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
                  Before making an offer, use the{' '}
                  <a href="/calculator" style={{ color: '#789ead', textDecoration: 'underline' }}>closing cost calculator →</a>
                  {' '}to model your total acquisition cost, including transfer tax, legal fees, and registry costs.
                </p>
              </section>

              {/* Section 04 */}
              <section id="legal-due-diligence" style={sectionStyle}>
                <h2 style={h2Style}>04 — What legal due diligence matters?</h2>

                <ShortAnswer>
                  Due diligence in Honduras is more manual than U.S. buyers expect. Budget 30–45 days, use an independent attorney, and verify title, boundaries, taxes, and HOA terms before signing anything.
                </ShortAnswer>

                <h3 style={h3Style}>Title search</h3>
                <p style={bodyStyle}>
                  Your attorney searches the Public Property Registry to confirm that the seller has clean, unencumbered title — meaning no liens, mortgages, or legal disputes attached to the property. The search traces the chain of ownership back far enough to establish a clean history.
                </p>

                <h3 style={h3Style}>What to verify before signing</h3>
                <Checklist
                  items={[
                    'Title is registered in the seller\'s name with no outstanding liens or encumbrances',
                    'Property boundaries match the registered survey (catastro) — confirm physical markers on site',
                    'No outstanding property taxes (impuesto sobre bienes inmuebles) or municipal fees',
                    'HOA fees, rules, and restrictions are disclosed and reviewed in full',
                    'Rental permissions are explicit in the HOA documents (if short-term rentals are planned)',
                    'Environmental or coastal setback restrictions do not limit intended use',
                    'Building permits are in order for all existing structures',
                  ]}
                />

                <WarnBox>
                  Never use the developer&apos;s or seller&apos;s recommended attorney. Your attorney must represent only your interests — they cannot simultaneously represent the other side.
                </WarnBox>

                <h3 style={h3Style}>Choosing your attorney</h3>
                <p style={bodyStyle}>
                  Use an independent attorney — not the developer&apos;s recommended attorney, and not the seller&apos;s. Your attorney&apos;s job is to protect your interests, which means they cannot simultaneously represent the other side. A qualified Honduran real estate attorney typically charges $800–$2,000 for a residential transaction; this cost is non-negotiable and essential.
                </p>

                <h3 style={h3Style}>Power of attorney</h3>
                <p style={bodyStyle}>
                  If you cannot be present in Honduras for closing, your attorney can execute the transaction on your behalf via a notarized and apostilled power of attorney. This is common and routine for U.S. buyers. Your U.S. attorney or notary can assist with the apostille process.
                </p>

                <InlineCTA
                  heading="Want to walk through the due diligence process for a specific property?"
                  cta="Schedule a Strategy Call"
                  onClick={handleSchedule}
                />
              </section>

              {/* Section 05 */}
              <section id="how-rentals-work" style={sectionStyle}>
                <h2 style={h2Style}>05 — How do rentals work?</h2>

                <ShortAnswer>
                  Short-term vacation rentals are viable in West Bay, West End, and select Pristine Bay units. Most buyers overestimate occupancy and underestimate management costs. Net yields after costs are typically lower than gross revenue suggests.
                </ShortAnswer>

                <h3 style={h3Style}>The short-term rental market</h3>
                <p style={bodyStyle}>
                  West Bay Beach is the strongest short-term rental market on the island — high demand, premium nightly rates, and proven guest volume. West End, Sandy Bay, and select Pristine Bay units also generate meaningful short-term income. Properties further east see more limited demand from international renters.
                </p>
                <p style={bodyStyle}>
                  Most Roatán vacation rentals list on VRBO, Airbnb, and direct-booking channels. A well-managed West Bay oceanfront unit typically achieves 55–75% occupancy at $150–$350 per night depending on unit size and finishes.
                </p>

                <h3 style={h3Style}>Underwriting rentals conservatively</h3>
                <Checklist
                  items={[
                    'Use 50–60% occupancy as your baseline, not best-case',
                    'Deduct management fees (25–30%), cleaning costs, HOA fees, and maintenance reserves before calculating net income',
                    'Budget for an annual slow season (typically May–June)',
                    'Account for property tax, income tax, and any HOA rental restrictions',
                    'Confirm management exclusivity clauses are not written into your HOA or purchase agreement',
                  ]}
                />

                <WarnBox>
                  Management fees range from 20–35% of gross rental revenue. The right question is not &ldquo;what can this rent for?&rdquo; but &ldquo;what will I net after all costs in a realistic year?&rdquo;
                </WarnBox>
              </section>

              {/* Section 06 */}
              <section id="pre-construction" style={{ ...sectionStyle, marginBottom: 0 }}>
                <h2 style={h2Style}>06 — What should I know before buying pre-construction?</h2>

                <ShortAnswer>
                  Pre-construction offers real entry-price upside, but carries execution risk. Vet the developer&apos;s track record, confirm deposits are held in escrow, and build 6–18 months of timeline buffer into your planning.
                </ShortAnswer>

                <h3 style={h3Style}>Developer vetting</h3>
                <p style={bodyStyle}>
                  Verify that the developer has completed at least one project on the island. Ask for references from buyers in a previous phase. Review the corporate structure behind the project — is it a registered Honduran entity? Who are the principals? Fly in and walk the site before committing capital.
                </p>

                <h3 style={h3Style}>Contract terms to review</h3>
                <Checklist
                  items={[
                    'Deposit schedule and what triggers each payment milestone',
                    'Whether deposits are held in escrow or in the developer\'s operating account',
                    'Completion guarantee or performance bond',
                    'Defined specifications for finishes and common areas — vague language allows substitution',
                    'Rental management exclusivity clauses — some developers require you to use their management company',
                    'Resale restrictions or right-of-first-refusal during the construction period',
                  ]}
                />

                <WarnBox>
                  Caribbean construction timelines routinely run 6–18 months beyond the published schedule. Build buffer into your financial model. Confirm permits are in hand — not just applied for — before signing.
                </WarnBox>

                <p style={{ ...bodyStyle, fontStyle: 'italic', color: '#789ead' }}>
                  Pre-construction pricing is the reward for accepting execution risk. Make sure the discount is real and the developer has the track record to deliver.
                </p>
              </section>

            </main>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Ready to Go Deeper?</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 16,
              lineHeight: 1.25,
            }}
          >
            Get the full Roatán Investor Briefing.
          </h2>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            The catalysts, the market data, current projects, and the questions worth asking before you commit — in one document.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={openBriefingModal} className="btn-accent">
              Download the Investor Briefing
            </button>
            <button
              onClick={handleSchedule}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 28px',
                background: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
