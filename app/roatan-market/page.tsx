import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roatan Real Estate Market 2026',
  description: 'Up-to-date Roatan real estate market data: average prices, rental yields, foreign ownership rules, buying process, and key investment facts for 2026.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/roatan-market' },
};

const marketSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roatan Real Estate Market Guide 2026',
  description: 'Comprehensive overview of the Roatan, Honduras real estate market.',
  author: { '@type': 'Person', name: 'Tomas Figueroa', url: 'https://www.tomasfigueroa.com/about' },
  publisher: { '@type': 'Organization', name: 'Tomas Figueroa Real Estate', url: 'https://www.tomasfigueroa.com' },
  url: 'https://www.tomasfigueroa.com/roatan-market',
  datePublished: '2026-04-01',
  dateModified: '2026-05-07',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Buy Property in Roatan, Honduras',
  description: 'Step-by-step guide to purchasing real estate in Roatan as a foreign buyer.',
  totalTime: 'P90D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Pre-search', text: 'Define your goals, budget, and criteria before you start looking.' },
    { '@type': 'HowToStep', position: 2, name: 'Engage a qualified real estate agent', text: 'Work with a licensed local agent who understands the Roatan market.' },
    { '@type': 'HowToStep', position: 3, name: 'Search for a property', text: 'Use the Roatan MLS and off-market inventory through your agent.' },
    { '@type': 'HowToStep', position: 4, name: 'Make an offer', text: 'Submit a written offer with price, contingencies, and closing date.' },
    { '@type': 'HowToStep', position: 5, name: 'Engage a Honduran real estate attorney', text: 'A licensed Honduran attorney handles title searches and registration.' },
    { '@type': 'HowToStep', position: 6, name: 'Conduct due diligence', text: 'Title search, survey review, tax verification, and physical inspection.' },
    { '@type': 'HowToStep', position: 7, name: 'Closing and title transfer', text: 'Final deed executed before a Honduran notary and registered with the Public Property Registry.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can foreigners own property in Roatan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Honduras allows foreign ownership of urban residential property in Roatan under Decree 90-90, with a 3,000 square meter per-individual cap.' } },
    { '@type': 'Question', name: 'Do you need to be a resident to buy property in Roatan?', acceptedAnswer: { '@type': 'Answer', text: 'No. Buying property in Roatan does not require Honduran residency, and owning property does not automatically grant residency.' } },
    { '@type': 'Question', name: 'What is the rental yield on a Roatan property?', acceptedAnswer: { '@type': 'Answer', text: 'Well-located Roatan vacation rentals yield 5–8% annually depending on location, property type, and management quality.' } },
    { '@type': 'Question', name: 'Who pays the real estate commission in Roatan?', acceptedAnswer: { '@type': 'Answer', text: 'The seller pays. Standard commission across Roatan Realtors Association member agencies is 10% of the sale price.' } },
    { '@type': 'Question', name: 'How much earnest money do I need to put down?', acceptedAnswer: { '@type': 'Answer', text: 'Standard earnest money on Roatan is 10% of the purchase price, wired within 7–10 business days of acceptance.' } },
    { '@type': 'Question', name: 'How long does a Roatan closing take?', acceptedAnswer: { '@type': 'Answer', text: 'From signed offer to closing: typically 30 days. From closing to fully registered title: an additional 3–4 months.' } },
    { '@type': 'Question', name: 'What are the total closing costs for a buyer?', acceptedAnswer: { '@type': 'Answer', text: 'Buyer closing costs typically run 3–6% of the purchase price, covering transfer tax (1.5%), cadastral certificate (1–2%), registry fees (0.5%), and legal fees (2–3%).' } },
    { '@type': 'Question', name: 'Is the Roatan real estate market safe for foreign buyers?', acceptedAnswer: { '@type': 'Answer', text: 'The legal framework is well-established. Buyers who work with experienced local agents and qualified Honduran attorneys close clean transactions on Roatan every week.' } },
    { '@type': 'Question', name: 'Can I finance a property purchase in Roatan?', acceptedAnswer: { '@type': 'Answer', text: 'Three primary paths: seller financing, home-country financing, and international banks. Honduran banks generally do not lend to non-residents.' } },
  ],
};

const faqs = [
  {
    q: 'Can foreigners own property in Roatan?',
    a: 'Yes. Honduras allows foreign ownership of urban residential property in Roatan under Decree 90-90, with a 3,000 square meter (about 0.74 acre) per-individual cap. Larger holdings or non-urban property are held through a Honduran corporation, which a foreigner can fully control as the registered administrator. There are no nationality-based restrictions and no requirement to use a Honduran citizen as a partner.',
  },
  {
    q: 'Do you need to be a resident to buy property in Roatan?',
    a: 'No. Buying property in Roatan does not require Honduran residency, and owning property does not automatically grant residency. Tourist visas allow stays of up to 90 days at a time. Honduras offers separate residency programs (rentista, pensionado, investor) for buyers planning to relocate.',
  },
  {
    q: 'What is the rental yield on a Roatan property?',
    a: 'Well-located Roatan vacation rentals yield 5–8% annually depending on location, property type, and management quality. West Bay and West End beachfront condos typically perform at the higher end of that range. Inland properties produce lower yields but appreciate at competitive rates given limited beachfront supply.',
  },
  {
    q: 'Who pays the real estate commission in Roatan?',
    a: 'The seller pays. Standard commission across Roatan Realtors Association member agencies is 10% of the sale price, paid by the seller at closing. For the buyer, working with an agent costs nothing out of pocket.',
  },
  {
    q: 'How much earnest money do I need to put down?',
    a: "Standard earnest money on Roatan is 10% of the purchase price, wired to the listing broker's escrow account within 7–10 business days of the seller accepting your offer. This creates a binding contract.",
  },
  {
    q: 'How long does a Roatan closing take?',
    a: 'From signed offer to closing: typically 30 days. From closing to fully registered title at the Registry House: an additional 3–4 months. You take possession at closing — registration is the administrative tail that follows.',
  },
  {
    q: 'What are the total closing costs for a buyer?',
    a: 'Buyer closing costs typically run 3–6% of the purchase price, covering transfer tax (1.5%), cadastral certificate (1–2% plus $50 inspection), registry fees (0.5%), legal fees (2–3%), and miscellaneous items. The seller separately pays the 10% real estate commission.',
  },
  {
    q: 'Is the Roatan real estate market safe for foreign buyers?',
    a: 'The legal framework is well-established and Honduras has had a functioning foreign-ownership regime under Decree 90-90 for over three decades. The risks are not legal — they are informational. Buyers who work with experienced local agents and qualified Honduran attorneys close clean transactions on Roatan every week.',
  },
  {
    q: 'Can I finance a property purchase in Roatan?',
    a: "Three primary paths: seller financing (typically 50% down, 3–5 year repayment at US-like rates, property held in a corporation with 50/50 ownership until paid in full), home-country financing (some North American banks lend on foreign properties, others won't — varies by bank), and international banks offering products similar to seller financing. Honduran banks generally do not lend to non-residents for property purchases.",
  },
];

const thStyle: React.CSSProperties = { padding: '10px 16px', backgroundColor: '#093f4f', color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' };
const tdFirst: React.CSSProperties = { padding: '10px 16px', color: '#093f4f', fontWeight: 600, borderBottom: '1px solid #e5e7eb', fontSize: 13, whiteSpace: 'nowrap' };
const tdRest: React.CSSProperties = { padding: '10px 16px', color: '#555555', fontWeight: 400, borderBottom: '1px solid #e5e7eb', fontSize: 13 };

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'Roatan Real Estate Market', item: 'https://www.tomasfigueroa.com/roatan-market' },
  ],
};

export default function RoatanMarketPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Market Guide 2026</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12, lineHeight: 1.15 }}>
            Roatan Real Estate Market
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto 6px' }}>
            Key data, pricing benchmarks, investment fundamentals, and everything you need to understand the Roatan property market before making a decision.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 32 }}>Updated May 2026 · By Tomas Figueroa, Keller Williams Roatan</p>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', padding: '24px 32px', maxWidth: 720, margin: '0 auto 32px', textAlign: 'left' }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', marginTop: 0, marginBottom: 12 }}>Quick Read</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, margin: 0 }}>
              Roatan&apos;s market sits in a window most Caribbean markets have already closed. Average condo prices are $325,000. Average homes are $397,000. Well-located rentals yield 5–8% annually. Foreign ownership is permitted under Decree 90-90, with property over 3,000 square meters held through a Honduran corporation. The catalysts — Air Canada nonstop service from Montr&eacute;al and Toronto starting winter 2026/27, the Meli&aacute;-affiliated Hotel Roat&aacute;n Media Luna, the Margaritaville all-inclusive opening 2027 — are arriving now, not someday.
            </p>
          </div>
          <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar style={{ width: 16, height: 16 }} aria-hidden="true" /> Schedule a Call with Tomas
          </a>
        </div>
      </section>

      {/* Overview */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Overview</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Market Overview</h2>
          <div style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }} className="space-y-4">
            <p>Roatan&apos;s real estate market has matured steadily over the past two decades, evolving from an undiscovered dive destination into a recognized Caribbean investment market. Property values have appreciated consistently, driven by growing international tourism, increasing direct flight connectivity, and a rising pool of foreign buyers seeking alternatives to dramatically more expensive Caribbean markets like the Cayman Islands and Turks and Caicos.</p>
            <p>The market spans a wide price range — from affordable inland homes in Coxen Hole to premium beachfront properties in West Bay and Pristine Bay. Foreign buyers make up a significant portion of transactions, particularly in the western end of the island where tourism infrastructure is most developed.</p>
            <p>The legal framework for foreign property acquisition is well-established. The transaction process is materially different from North American closings, but it is navigable, and the protections that exist work — when handled by experienced professionals.</p>
          </div>
        </div>
      </section>

      {/* 2026 Catalysts */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">2026 Catalysts</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>What&apos;s Changing in 2026</h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 24 }}>The single biggest signal in Roatan right now is that international institutions are voting with capital. Airlines, hotel brands, and infrastructure operators do not commit to a market on hope. They commit on data. Here is what arrived in the last 12 months:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
            {[
              { company: 'Air Canada', text: 'announced its first-ever nonstop service from Montréal and Toronto to Roatán, launching December 2026 and running through April 2027. This makes Roatan one of the few Caribbean destinations now reachable nonstop from both major Canadian hubs.' },
              { company: 'Hotel Roatán Media Luna', text: 'joined the Meliá portfolio (January 2026), bringing global hospitality network distribution to the island for the first time at scale.' },
              { company: 'Margaritaville Island Reserve Resort Roatán', text: 'by Karisma Hotels & Resorts broke ground in March 2025 and is on track to open in 2027 with 170 all-inclusive rooms.' },
              { company: 'Kimpton Grand Roatán Resort & Spa', text: 'is established and operating on West Bay Beach with 122 rooms, suites, and bungalows.' },
              { company: 'U.S. carrier connectivity', text: 'continues to expand: American (daily Miami), United (near-daily Houston), Delta (Atlanta), Sun Country (Minneapolis), with seasonal routes from Dallas and Denver.' },
            ].map(({ company, text }) => (
              <li key={company} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid #d4e8ed', fontSize: 14, color: '#555555', lineHeight: 1.75 }}>
                <span style={{ marginTop: 9, width: 6, height: 6, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                <span><strong style={{ color: '#093f4f' }}>{company}</strong> {text}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>A market that adds this much branded capacity and direct-flight access in 18 months is a market repricing in real time. The window is open. It will not be open forever.</p>
        </div>
      </section>

      {/* Key Stats Table */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Key Numbers</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 24 }}>Key Market Statistics</h2>
          <div style={{ overflowX: 'auto', marginBottom: 16 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Metric</th>
                  <th style={thStyle}>Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Average condo price', '$325,000'],
                  ['Average home price', '$397,000'],
                  ['Rental yield (well-located vacation rentals)', '5–8% per year'],
                  ['Annual visitors to Honduras', '2.7M+'],
                  ['Property appreciation (CAGR, last 5 years)', '5%'],
                  ['Foreign ownership', 'Permitted'],
                  ['Capital gains tax on resale (Bay Islands)', '4%'],
                  ['Standard real estate commission', '10% (paid by seller)'],
                  ['Buyer closing costs', '3–6% of purchase price'],
                ].map(([metric, value], ri) => (
                  <tr key={metric} style={{ backgroundColor: ri % 2 === 0 ? '#f5f2ee' : '#ffffff' }}>
                    <td style={tdFirst}>{metric}</td>
                    <td style={tdRest}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: '#999999', margin: 0 }}>Source: Keller Williams Roatan transaction data, Roatan MLS, and Instituto Hondureño de Turismo, 2025–2026.</p>
        </div>
      </section>

      {/* Foreign Ownership */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Legal Framework</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Foreign Ownership in Roatan</h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 24 }}>Honduran law allows foreign nationals to purchase property in Roatan. The framework is governed by <strong>Article 107 of the Honduran Constitution</strong> and <strong>Article 5 of Decree 90-1990</strong> (commonly referenced as Decree 90-90), which together create one of the most workable foreign-ownership regimes in Central America.</p>
          <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 14 }}>How It Works in Practice</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
            {[
              "Up to 3,000 square meters (about 0.74 acres) of urban residential land can be held directly in an individual foreigner's name.",
              'Larger holdings, raw land, and tourism or commercial properties are held through a Honduran corporation, which a foreigner can fully control as registered administrator.',
              'Foreigners are limited to one residential property held individually; additional properties go through a corporation.',
              'There is no requirement to use a Honduran citizen as a partner, intermediary, or front for individually held residential property.',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid #d4e8ed', fontSize: 14, color: '#555555', lineHeight: 1.75 }}>
                <span style={{ marginTop: 9, width: 6, height: 6, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 14 }}>What This Means for Buyers</h3>
          <div style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }} className="space-y-4">
            <p>For most foreign buyers — single-family home, condo, or villa for personal use or rental income — direct individual ownership works cleanly. For investors building a portfolio, holding raw land for development, or buying any property over 0.74 acres, the corporation route is the standard path. Both are well-trodden, both close every week on Roatan, and both have protections built in when handled correctly.</p>
            <p>Owning property in Roatan does not automatically grant residency. Honduras offers separate residency programs (rentista, pensionado, investor) for buyers planning to relocate. I&apos;m happy to connect you with the right legal resources to explore the residency pathway alongside the purchase.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Comparison</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Roatan vs Other Caribbean Buyer Markets</h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 24 }}>The case for Roatan is most visible alongside the alternatives. Here is how the structural facts line up:</p>
          <div style={{ overflowX: 'auto', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif' }}>
              <thead>
                <tr>
                  {['Market', 'Foreign Ownership', 'Capital Gains on Resale', 'Annual Property Tax'].map((h) => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Roatan', 'Permitted under Decree 90-90 (corporation route for >3,000 sqm)', '4% (Bay Islands)', 'Very low'],
                  ['Cayman Islands', 'Permitted, no cap', '0%', 'None'],
                  ['Turks & Caicos', 'Permitted, no cap', '0%', 'Low'],
                  ['Belize (Ambergris Caye)', 'Permitted, fee simple', '0%', 'Very low'],
                  ['Costa Rica', 'Permitted', '15%', 'Moderate'],
                ].map((row, ri) => (
                  <tr key={row[0]} style={{ backgroundColor: ri % 2 === 0 ? '#f5f2ee' : '#ffffff' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={ci === 0 ? tdFirst : tdRest}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>Roatan&apos;s tax treatment is competitive across the board. Where it diverges most sharply from Cayman and Turks &amp; Caicos is on <strong>entry-level beachfront pricing</strong>, which is a fraction of those markets — and on the <strong>direction of momentum</strong>, which is accelerating here while those markets are already mature. The investor read on Roatan is positioning before the rest of the market reprices it.</p>
        </div>
      </section>

      {/* Buying Process */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Process</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 0 }}>The Buying Process</h2>
          </div>
          <div style={{ borderTop: '1px solid #d4e8ed' }}>

            {/* Step 1 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>1</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Pre-search</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>Define your goals, your budget, and your criteria before you start looking. Personal use, rental income, long-term appreciation, or relocation — each leads to a different short-list of neighborhoods, property types, and price points. If you&apos;re paying cash, confirm the funds are accessible. If you&apos;re financing, confirm what you actually qualify for, not what you assume you do.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>2</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Engage a Qualified Real Estate Agent</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 14 }}>A great agent in Roatan does six things you cannot replicate from a screen: pre-screens listings against your criteria, opens the door to off-market inventory, schedules and attends showings on your behalf, drafts and negotiates offers, manages the contractual back-and-forth between attorneys, and coordinates the closing.</p>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#093f4f', marginBottom: 10 }}>What to look for:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Member of the Roatan Realtors Association (RRA) — guarantees Standards of Practice and ethics codes',
                    'Time on island — the agents worth working with have watched at least one full real estate cycle here',
                    'Bilingual fluency — most local sellers, the notario, and the Public Property Registry operate in Spanish',
                    'Track record with foreign buyers specifically — domestic and foreign-buyer transactions are not the same animal',
                    'Honest about bad properties, neighborhoods, and developers — an agent who says yes to everything is protecting their commission, not you',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, fontSize: 13, color: '#555555', lineHeight: 1.75 }}>
                      <span style={{ marginTop: 8, width: 5, height: 5, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>3</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Search for a Property</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 10 }}>The Roatan MLS is the foundation. It&apos;s an unusual asset for a Latin American market — collaborative, professionally maintained, and accessible to the public. You can <Link href="/properties" style={{ color: '#093f4f', textDecoration: 'underline' }}>browse current listings here</Link>.</p>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>But the MLS is the floor, not the ceiling. A well-connected agent will surface off-market and pre-listing properties — the genuinely good deals often move before they ever hit a public listing. Showings can be scheduled in person or virtually; second showings on serious candidates are normal and recommended.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>4</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Make an Offer</h3>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#093f4f', marginBottom: 10 }}>Key components of the offer:</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 12 }}>
                  {[
                    { label: 'Offer price', text: '— anchored to comparable transactions, not asking-price psychology' },
                    { label: 'Contingencies', text: '— typically a satisfactory home inspection and (if applicable) financing approval' },
                    { label: 'Closing date', text: '— usually 30 days after a binding contract' },
                    { label: 'Payment terms', text: '— cash, financing, or seller-financing structure' },
                  ].map(({ label, text }) => (
                    <li key={label} style={{ display: 'flex', gap: 10, marginBottom: 6, fontSize: 13, color: '#555555', lineHeight: 1.75 }}>
                      <span style={{ marginTop: 8, width: 5, height: 5, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                      <span><strong style={{ color: '#093f4f' }}>{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}><strong style={{ color: '#093f4f' }}>On acceptance:</strong> Within 7–10 business days you&apos;ll wire a 10% earnest money deposit to the listing broker&apos;s escrow account, creating a binding contract.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>5</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Engage a Honduran Real Estate Attorney</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 12 }}>A Honduran real estate attorney is essential — not optional. They handle:</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 12 }}>
                  {[
                    'Honduran property law and Decree 90-90 compliance',
                    'Foreign ownership requirements',
                    'Honduran corporation formation, if applicable',
                    'Title searches and due diligence',
                    'Document drafting, review, and registration',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, fontSize: 13, color: '#555555', lineHeight: 1.75 }}>
                      <span style={{ marginTop: 8, width: 5, height: 5, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>You choose your lawyer. Your agent can recommend qualified options, but the final decision is yours. Negotiate legal fees directly.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>6</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Conduct Due Diligence</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 12 }}>This is where the protections happen. Your attorney conducts a comprehensive review:</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 12 }}>
                  {[
                    { label: 'Title search', text: " — full review of the property's ownership history, verifying the seller's legal right to sell and checking for any liens, encumbrances, or claims. Your attorney reviews the title chain at least 20 years prior." },
                    { label: 'Survey review', text: " — the seller must provide an updated survey (less than six months old). Your attorney confirms the property's boundaries match the legal description, preventing future disputes." },
                    { label: 'Tax receipts and permits', text: ' — verification that all property taxes are paid and the property complies with local regulations.' },
                    { label: 'Corporation due diligence (if applicable)', text: ' — if the property is held in a corporation, your attorney reviews corporate documents, tax obligations, and any relevant courthouse records.' },
                    { label: 'Physical inspection', text: ' — strongly recommended. A professional inspector identifies issues that may need to be addressed before closing.' },
                  ].map(({ label, text }) => (
                    <li key={label} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#555555', lineHeight: 1.75 }}>
                      <span style={{ marginTop: 8, width: 5, height: 5, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                      <span><strong style={{ color: '#093f4f' }}>{label}</strong>{text}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>Due diligence is your safeguard. This is the stage where working with experienced professionals makes the difference between a clean transaction and an expensive one.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div style={{ padding: '28px 0', borderBottom: '1px solid #d4e8ed', display: 'flex', gap: 20 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, backgroundColor: '#093f4f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700 }}>7</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', marginBottom: 10, marginTop: 0 }}>Closing and Title Transfer</h3>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 12 }}>Closing is conducted before a Honduran public notary, who ensures legal compliance and registers the transfer with the Public Property Registry.</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 12 }}>
                  {[
                    { label: 'Buyer presence', text: ' is required if the notary needs your signature in person or for registered mortgages. Otherwise, registered Power of Attorney can be used.' },
                    { label: 'Seller presence', text: ' is always required, unless a notarized (and if applicable, apostilled) Power of Attorney is in place.' },
                    { label: 'Final wire', text: " of the closing balance goes to your broker's escrow account at least 5 business days before closing." },
                  ].map(({ label, text }) => (
                    <li key={label} style={{ display: 'flex', gap: 10, marginBottom: 6, fontSize: 13, color: '#555555', lineHeight: 1.75 }}>
                      <span style={{ marginTop: 8, width: 5, height: 5, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                      <span><strong style={{ color: '#093f4f' }}>{label}</strong>{text}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>After closing, the deed (<em>escritura p&uacute;blica</em>) is registered at the Registry House — a process that currently takes 3–4 months to fully complete. You receive the registered title once recorded.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Costs */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">Costs</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>Closing Costs Breakdown</h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 24 }}>Total buyer closing costs typically run <strong>3–6% of the purchase price</strong>. A typical breakdown:</p>
          <div style={{ overflowX: 'auto', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Component</th>
                  <th style={thStyle}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transfer tax (Impuesto de Tradición)', '1.5% of property value, paid to SAR'],
                  ['Cadastral certificate', '1–2% (in Bay Islands), plus $50 inspection'],
                  ['Registry fees (stamps, registration)', '0.5%'],
                  ['Legal fees', '2–3% (negotiated directly with attorney)'],
                  ['Other (wire fees, escrow, RTN cards, security, optional corporation setup)', 'Variable'],
                ].map(([component, cost], ri) => (
                  <tr key={component} style={{ backgroundColor: ri % 2 === 0 ? '#f5f2ee' : '#ffffff' }}>
                    <td style={tdFirst}>{component}</td>
                    <td style={tdRest}>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ backgroundColor: '#f5f2ee', padding: '16px 20px' }}>
            <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}><strong style={{ color: '#093f4f' }}>Seller&apos;s expenses:</strong> Capital gains tax (4% in Roatan, 10% on the Honduran mainland), real estate commissions for both agents (10% total), updated cadastral certificate and survey. The buyer pays no real estate commission.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">FAQ</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 0 }}>Frequently Asked Questions</h2>
          <div style={{ borderTop: '1px solid #d4e8ed', marginTop: 24 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ padding: '24px 0', borderBottom: '1px solid #d4e8ed' }}>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 10 }}>{q}</h3>
                <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4">About the Author</span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 20 }}>About the Author</h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75 }}>Tomas Figueroa is a real estate professional with <Link href="/about" style={{ color: '#093f4f', textDecoration: 'underline' }}>Keller Williams Roatan</Link>, Bay Islands, Honduras. He brings 20 years of international sales and business development experience and has spent the last four years working as a boots-on-ground agent on Roatan. His specialty is buyer and seller representation, developer partnerships, and investment deal sourcing for clients in the US, Canada, and globally. Fluent in English and Spanish.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ backgroundColor: '#093f4f', padding: '40px 32px', textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>Ready to Explore the Roatan Market?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 8px' }}>Roatan is the Caribbean&apos;s last undervalued market. The catalysts are arriving. The window is open — but not forever.</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 28px' }}>Schedule a call and I&apos;ll walk you through current listings, neighborhood comparisons, and the investment strategy that fits your specific goals.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <Calendar style={{ width: 16, height: 16 }} aria-hidden="true" /> Schedule a Call with Tomas
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
              {[
                { href: '/properties', label: 'Browse the MLS →' },
                { href: '/new-developments', label: 'New Developments →' },
                { href: '/faq', label: 'Full FAQ →' },
                { href: '/resources', label: "Buyer's Guide →" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="link-dim">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section style={{ paddingBottom: 48 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 11, color: '#999999', lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: '#777777' }}>Sources and methodology:</strong> Data on this page reflects 2025–2026 averages from Keller Williams Roatan transaction records, the Roatan Multiple Listing Service, the Roatan Realtors Association, and the Instituto Hondureño de Turismo. Comparative Caribbean market data sourced from publicly available government and tourism authority publications. Catalyst announcements verified against primary sources (Caribbean Journal, Karisma Hotels &amp; Resorts press releases, Air Canada route announcements, Hospitality Design).
          </p>
        </div>
      </section>
    </div>
  );
}
