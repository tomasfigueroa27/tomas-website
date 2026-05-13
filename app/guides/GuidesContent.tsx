'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, X, Loader2, Send } from 'lucide-react';

// ─── Guide library data ───────────────────────────────────────────────────────

const GUIDE_CARDS = [
  {
    num: '01',
    title: "U.S. Buyer's Guide to Roatán Real Estate",
    forLabel: 'Americans buying in Roatán for the first time',
    value: 'Legal ownership, due diligence, the 5-step purchase process, rentals, and pre-construction basics.',
    cta: 'Read the Guide',
    href: '/us-buyers-guide-roatan',
  },
  {
    num: '02',
    title: 'Where to Buy in Roatán',
    forLabel: 'Buyers comparing the five main lifestyle areas',
    value: 'West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour — compared by lifestyle, product type, and buyer fit.',
    cta: 'Explore the Map',
    href: '/where-to-buy-in-roatan',
  },
  {
    num: '03',
    title: 'Roatán Market Guide 2026',
    forLabel: 'Investors and researchers tracking market conditions',
    value: 'Pricing benchmarks, rental yields, days on market, and the mechanics of foreign ownership in Honduras.',
    cta: 'Read the Market Guide',
    href: '/roatan-market',
  },
  {
    num: '04',
    title: 'New Developments Guide',
    forLabel: 'Buyers evaluating pre-construction or new projects',
    value: 'How to evaluate developer track records, escrow structures, rental permissions, and exit liquidity before you commit.',
    cta: 'Browse Projects',
    href: '/new-developments',
  },
  {
    num: '05',
    title: 'Closing Cost Calculator',
    forLabel: 'Buyers modeling their total acquisition cost',
    value: 'Estimate transfer tax, attorney fees, and registration costs — before you make an offer, not after.',
    cta: 'Open Calculator',
    href: '/calculator',
  },
  {
    num: '06',
    title: 'Frequently Asked Questions',
    forLabel: 'Anyone with questions about the buying process',
    value: 'Foreign ownership rights, title types, the Honduran notarial system, financing options, and common buyer mistakes.',
    cta: 'Browse the FAQ',
    href: '/faq',
  },
] as const;

// ─── PDF download data ────────────────────────────────────────────────────────

interface PdfGuide {
  id: string;
  title: string;
  description: string;
  file: string;
  cover: string;
}

const PDF_GUIDES: PdfGuide[] = [
  {
    id: 'buyers-guide',
    title: "Buyer's Guide to Roatán Real Estate",
    description: 'Everything you need to know before purchasing property in Roatán — legal process, neighborhood selection, and financing.',
    file: '/guides/buyers-guide.pdf',
    cover: '/guides/buyers-guide-cover.jpg',
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

// ─── Sub-components ───────────────────────────────────────────────────────────

function GuideCard({ card }: { card: typeof GUIDE_CARDS[number] }) {
  return (
    <Link
      href={card.href}
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', backgroundColor: '#ffffff', padding: '28px 32px', borderTop: '2px solid #d4e8ed' }}
      className="card-hover group"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 26, fontWeight: 400, color: '#d4e8ed', lineHeight: 1 }}>
          {card.num}
        </span>
      </div>
      <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 400, color: '#093f4f', margin: '0 0 10px', lineHeight: 1.25 }}>
        {card.title}
      </h2>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 10 }}>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: '#c9a84c', flexShrink: 0 }}>
          For
        </span>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#555', lineHeight: 1.4 }}>
          {card.forLabel}
        </span>
      </div>
      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#777', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>
        {card.value}
      </p>
      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#093f4f' }}>
        {card.cta} →
      </span>
    </Link>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function GuidesContent() {
  const [selected, setSelected] = useState<PdfGuide | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const openModal  = (guide: PdfGuide) => { setSelected(guide); setName(''); setEmail(''); setError(''); };
  const closeModal = () => { setSelected(null); setError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setError('');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'guide-download', name, email, guide: selected.title }),
      });
      window.open(selected.file, '_blank');
      closeModal();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Guide Library</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
            Everything you need to make a confident decision.
          </h1>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: 14, marginBottom: 0, maxWidth: 640 }}>
            Six guides covering every stage of the Roatán buying process — from first research to closing day.
          </p>
        </div>
      </section>

      {/* ── Guide library ── */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 60, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 2, backgroundColor: '#e8e2d9' }}>
            {GUIDE_CARDS.map(card => (
              <GuideCard key={card.num} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PDF Downloads ── */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 60, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <span className="label-caps block mb-2" style={{ color: '#789ead' }}>PDF Downloads</span>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.6, marginTop: 0, marginBottom: 36, maxWidth: 480 }}>
            Free to download. Enter your name and email for instant access.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24, maxWidth: 720 }}>
            {PDF_GUIDES.map(guide => (
              <button
                key={guide.id}
                onClick={() => openModal(guide)}
                style={{ textAlign: 'left', backgroundColor: '#f5f2ee', overflow: 'hidden', border: '1px solid transparent', transition: 'all 0.25s', cursor: 'pointer', padding: 0 }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f5f2ee'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                className="group"
              >
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#e5e7eb' }}>
                  <img
                    src={guide.cover}
                    alt={`${guide.title} cover`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s' }}
                    className="group-hover:scale-105"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
                  <div
                    style={{ position: 'absolute', bottom: 12, right: 12, backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6, transition: 'background-color 0.25s' }}
                    className="group-hover:bg-white"
                  >
                    <Download style={{ width: 12, height: 12, color: '#ffffff' }} className="group-hover:!text-[#093f4f]" />
                    <span style={{ fontSize: 11, color: '#ffffff', fontWeight: 600, fontFamily: 'Arial, Helvetica, sans-serif' }} className="group-hover:!text-[#093f4f]">
                      Free Download
                    </span>
                  </div>
                </div>
                <div style={{ padding: '18px 22px' }}>
                  <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 8 }}>
                    {guide.title}
                  </h3>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.7, margin: 0 }}>
                    {guide.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download modal ── */}
      {selected && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={e => e.target === e.currentTarget && closeModal()}
        >
          <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: 440, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#789ead', margin: '0 0 4px' }}>Free Download</p>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', margin: 0 }}>{selected.title}</h3>
              </div>
              <button
                onClick={closeModal}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', marginLeft: 16, marginTop: 2, padding: 4 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#333')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              name="guide-download"
              data-netlify="true"
              style={{ padding: '20px 24px' }}
            >
              <input type="hidden" name="form-name" value="guide-download" />
              <input type="hidden" name="guide" value={selected.title} />
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#555', marginBottom: 20, marginTop: 0 }}>
                Enter your details below to get instant access to this guide.
              </p>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="guide-name" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#333', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Arial, Helvetica, sans-serif' }}>Full Name</label>
                <input
                  id="guide-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #d4e8ed', outline: 'none', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#333', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#093f4f')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#d4e8ed')}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="guide-email" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#333', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Arial, Helvetica, sans-serif' }}>Email Address</label>
                <input
                  id="guide-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #d4e8ed', outline: 'none', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#333', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#093f4f')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#d4e8ed')}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {error && <p style={{ color: '#dc2626', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, marginBottom: 12 }}>{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', gap: 8, opacity: submitting ? 0.6 : 1 }}
              >
                {submitting
                  ? <Loader2 style={{ width: 18, height: 18 }} className="animate-spin" />
                  : <><Download style={{ width: 15, height: 15 }} /> Download Guide</>
                }
              </button>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#999', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
                By downloading you agree to receive occasional real estate insights from Tomás Figueroa.
                <Send style={{ width: 11, height: 11, display: 'inline', marginLeft: 4, opacity: 0.5 }} />
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
