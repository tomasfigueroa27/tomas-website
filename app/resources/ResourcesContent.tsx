'use client';

import Link from 'next/link';
import { BookOpen, FileText, Calculator, TrendingUp, MapPin } from 'lucide-react';
import posts from '@/data/blog';
import { openBriefingModal } from '@/lib/analytics';

// ─── Data ─────────────────────────────────────────────────────────────────────

const START_HERE = [
  {
    num: '01',
    title: "U.S. Buyer's Guide to Roatán",
    desc: 'Legal ownership, buying process, due diligence, rentals, and pre-construction basics — written for American buyers.',
    cta: 'Read the Guide',
    href: '/us-buyers-guide-roatan' as string | null,
  },
  {
    num: '02',
    title: 'Where to Buy in Roatán',
    desc: 'Five lifestyle nodes compared: West Bay, West End, Sandy Bay, Pristine Bay, and French Harbour & East.',
    cta: 'Explore the Map',
    href: '/where-to-buy-in-roatan' as string | null,
  },
  {
    num: '03',
    title: 'New Developments',
    desc: 'Active and upcoming projects with criteria for evaluating developer track records and pre-construction risk.',
    cta: 'Browse Projects',
    href: '/new-developments' as string | null,
  },
  {
    num: '04',
    title: 'Investor Briefing',
    desc: 'PDF overview of the Roatán investment thesis — market structure, pricing, rental logic, and entry points.',
    cta: 'Download the Investor Briefing',
    href: null,
  },
];

const SECONDARY = [
  { href: '/roatan-market',  icon: TrendingUp, title: 'Market Guide 2026',       desc: 'Pricing benchmarks, rental yields, and investment fundamentals.' },
  { href: '/blog',           icon: BookOpen,   title: 'Blog',                    desc: 'Market reports, buyer guides, and neighborhood analysis.' },
  { href: '/neighborhoods',  icon: MapPin,     title: 'Neighborhood Profiles',   desc: 'Deep-dives on every major area of the island.' },
  { href: '/calculator',     icon: Calculator, title: 'Closing Calculator',      desc: 'Model your total acquisition cost before you make an offer.' },
  { href: '/faq',            icon: FileText,   title: 'FAQ',                     desc: 'Answers to the most common buyer questions about Roatán.' },
];

const CATEGORY_ACCENT: Record<string, string> = {
  'Buying Guide':  '#093f4f',
  'Market Report': '#0a1628',
  'Travel Guide':  '#2d5a6b',
  'About Roatán':  '#1a4a5c',
};

const sortedPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

// ─── Card sub-components ──────────────────────────────────────────────────────

function StartHereCard({ card }: { card: typeof START_HERE[number] }) {
  const inner = (
    <>
      <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 30, fontWeight: 400, color: '#d4e8ed', lineHeight: 1, display: 'block', marginBottom: 18 }}>
        {card.num}
      </span>
      <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(17px, 1.8vw, 21px)', fontWeight: 400, color: '#093f4f', margin: '0 0 10px', lineHeight: 1.25 }}>
        {card.title}
      </h2>
      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#666', lineHeight: 1.75, margin: '0 0 22px', flex: 1 }}>
        {card.desc}
      </p>
      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#093f4f' }}>
        {card.cta} →
      </span>
    </>
  );

  const shared: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '36px 40px',
    backgroundColor: '#ffffff',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
  };

  if (card.href) {
    return (
      <Link href={card.href} style={shared} className="card-hover group">
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={() => openBriefingModal()} style={shared} className="card-hover group">
      {inner}
    </button>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ResourcesContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Resources</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
            Everything you need to buy in Roatán.
          </h1>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: 14, marginBottom: 0, maxWidth: 520 }}>
            Guides, market data, neighborhood profiles, and tools — built for buyers who want to understand the market before they commit.
          </p>
        </div>
      </section>

      {/* ── Start Here ── */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 60, paddingBottom: 56 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <span className="label-caps block mb-5" style={{ color: '#c9a84c' }}>Start Here</span>
          <div className="grid sm:grid-cols-2" style={{ gap: 2, backgroundColor: '#e8e2d9' }}>
            {START_HERE.map(card => (
              <StartHereCard key={card.num} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── All Resources ── */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 52, paddingBottom: 60 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <span className="label-caps block mb-5" style={{ color: '#789ead' }}>All Resources</span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14 }}>
            {SECONDARY.map(({ href, icon: Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 22px', backgroundColor: '#ffffff', textDecoration: 'none' }}
                className="card-hover group"
              >
                <div style={{ width: 36, height: 36, backgroundColor: 'rgba(120,158,173,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon style={{ width: 18, height: 18, color: '#093f4f' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 15, fontWeight: 400, color: '#093f4f', margin: '0 0 5px', lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest from the Blog ── */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 60, paddingBottom: 80 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
            <span className="label-caps" style={{ color: '#789ead' }}>Latest from the Blog</span>
            <Link href="/blog" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#789ead', textDecoration: 'none' }}>
              All articles →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
            {sortedPosts.map(post => {
              const accent = CATEGORY_ACCENT[post.category] ?? '#789ead';
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: 'block', textDecoration: 'none', borderTop: `2px solid ${accent}`, backgroundColor: '#f5f2ee' }}
                  className="card-hover group"
                >
                  <div style={{ padding: '18px 20px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.13em', color: accent }}>
                        {post.category}
                      </span>
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, color: '#bbb' }}>{fmt(post.date)}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 15, fontWeight: 400, color: '#093f4f', margin: '0 0 8px', lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.7, margin: '0 0 14px' }} className="line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#093f4f' }}>
                      Read →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
