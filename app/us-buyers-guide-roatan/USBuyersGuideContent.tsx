'use client';

import { useState } from 'react';
import { openBriefingModal, trackSchedule, openSavvyCal } from '@/lib/analytics';

const TOC_ITEMS = [
  { id: 'can-americans-buy', label: 'Can Americans buy property in Roatán?' },
  { id: 'where-to-compare', label: 'What areas should U.S. buyers compare first?' },
  { id: 'buying-process', label: 'What is the buying process?' },
  { id: 'legal-due-diligence', label: 'What legal due diligence matters?' },
  { id: 'how-rentals-work', label: 'How do rentals work?' },
  { id: 'pre-construction', label: 'What should I know before buying pre-construction?' },
];

const sectionStyle: React.CSSProperties = {
  marginBottom: 72,
  scrollMarginTop: 96,
};

const h2Style: React.CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 'clamp(20px, 2.5vw, 28px)',
  fontWeight: 400,
  color: '#093f4f',
  marginTop: 0,
  marginBottom: 24,
  paddingBottom: 16,
  borderBottom: '2px solid #d4e8ed',
  lineHeight: 1.25,
};

const h3Style: React.CSSProperties = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: 18,
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
        <div className="section-container" style={{ maxWidth: 1100, paddingTop: 56, paddingBottom: 96 }}>

          {/* Intro */}
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.85,
              maxWidth: 760,
              marginBottom: 52,
            }}
          >
            Roatán is one of the most accessible Caribbean markets for U.S. buyers — but the legal framework, process, and due diligence look different than they do at home. This guide answers the most common questions Americans ask before buying property in the Bay Islands of Honduras.
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
              </div>
            </aside>

            {/* Main content */}
            <main style={{ flex: 1, minWidth: 0 }}>

              {/* Placeholders — filled in subsequent commits */}
              <section id="can-americans-buy" style={sectionStyle}>
                <h2 style={h2Style}>01 — Can Americans buy property in Roatán?</h2>

                <p style={{ ...bodyStyle, fontWeight: 600, fontSize: 16, color: '#093f4f' }}>
                  Yes. Americans can own freehold property in Roatán with the same rights as Honduran citizens.
                </p>

                <p style={bodyStyle}>
                  Roatán sits within the Bay Islands of Honduras, which carry a constitutional designation that allows foreigners to own land within 40 kilometers of the coastline — a key distinction from mainland Honduras, where coastal foreign ownership is restricted. This makes the Bay Islands one of the most straightforward Caribbean markets for U.S. buyers to enter.
                </p>

                <h3 style={h3Style}>Ownership vehicles</h3>

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

                <p style={{ ...bodyStyle, fontStyle: 'italic', color: '#789ead' }}>
                  Get the structure right at entry. Fixing it later is expensive.
                </p>
              </section>

              <section id="where-to-compare" style={sectionStyle}>
                <h2 style={h2Style}>02 — What areas should U.S. buyers compare first?</h2>

                <p style={{ ...bodyStyle, fontWeight: 600, color: '#093f4f' }}>
                  Roatán is not one market. Each lifestyle node attracts a different buyer.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '0 0 28px', border: '1px solid #e8f0f3' }}>
                  {[
                    { area: 'West Bay', desc: 'Premium beach, highest $/sqft, strongest vacation rental logic.' },
                    { area: 'West End', desc: 'Walkable village, restaurants, diving, community character.' },
                    { area: 'Sandy Bay', desc: 'Quieter residential life near the reef; emerging luxury tier.' },
                    { area: 'Pristine Bay', desc: 'Gated resort, golf, controlled environment.' },
                    { area: 'French Harbour & East', desc: 'Emerging value, longer-term development exposure.' },
                  ].map((item, i, arr) => (
                    <div
                      key={item.area}
                      style={{
                        display: 'flex',
                        gap: 16,
                        padding: '14px 20px',
                        borderBottom: i < arr.length - 1 ? '1px solid #e8f0f3' : 'none',
                        alignItems: 'baseline',
                      }}
                    >
                      <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 14, fontWeight: 400, color: '#093f4f', flexShrink: 0, minWidth: 140 }}>
                        {item.area}
                      </span>
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.6 }}>
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>
                  For a deeper look at each area&apos;s character, price range, and future buyer — see{' '}
                  <a href="/neighborhoods" style={{ color: '#789ead', textDecoration: 'underline' }}>Neighborhoods →</a>
                </p>
              </section>

              <section id="buying-process" style={sectionStyle}>
                <h2 style={h2Style}>03 — What is the buying process?</h2>

                <p style={{ ...bodyStyle, fontWeight: 600, color: '#093f4f' }}>
                  A typical Roatán purchase moves through six stages. Standard timeline: 30–60 days from signed intent to registered deed.
                </p>

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
              </section>

              <section id="legal-due-diligence" style={sectionStyle}>
                <h2 style={h2Style}>04 — What legal due diligence matters?</h2>
              </section>

              <section id="how-rentals-work" style={sectionStyle}>
                <h2 style={h2Style}>05 — How do rentals work?</h2>
              </section>

              <section id="pre-construction" style={sectionStyle}>
                <h2 style={h2Style}>06 — What should I know before buying pre-construction?</h2>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
}
