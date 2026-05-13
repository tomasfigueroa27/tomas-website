'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import posts, { type BlogPost } from '@/data/blog';
import { openBriefingModal } from '@/lib/analytics';

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTER_CATEGORIES = ['All', 'Buying Guide', 'Market Report', 'Neighborhoods', 'New Developments', 'Lifestyle'];

const CATEGORY_COLOR: Record<string, string> = {
  'Buying Guide':     '#093f4f',
  'Market Report':    '#0a1628',
  'Neighborhoods':    '#1a5c4f',
  'New Developments': '#2d3d6b',
  'Lifestyle':        '#5a3a4f',
  'Travel Guide':     '#2d5a6b',
  'About Roatán':     '#1a4a5c',
};

const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryPill({ label }: { label: string }) {
  const color = CATEGORY_COLOR[label] ?? '#789ead';
  return (
    <span style={{
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 9,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      color,
      backgroundColor: `${color}18`,
      padding: '3px 8px',
      display: 'inline-block',
    }}>
      {label}
    </span>
  );
}

function PostImage({ post, height }: { post: BlogPost; height: number }) {
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={post.title}
        style={{ width: '100%', height, objectFit: 'cover', display: 'block' }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const color = CATEGORY_COLOR[post.category] ?? '#093f4f';
  return (
    <div style={{
      width: '100%',
      height,
      backgroundColor: color,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(255,255,255,0.07) 0%, transparent 55%), radial-gradient(circle at 25% 75%, rgba(255,255,255,0.04) 0%, transparent 50%)',
      }} />
      <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
          {post.category}
        </span>
      </div>
    </div>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none' }} className="card-hover group">
      <div className="grid md:grid-cols-2" style={{ minHeight: 340 }}>
        <PostImage post={post} height={340} />
        <div style={{ padding: 'clamp(28px, 4vw, 48px)', backgroundColor: '#f5f2ee', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <CategoryPill label={post.category} />
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#aaa' }}>{fmt(post.date)}</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 400, color: '#093f4f', margin: '0 0 14px', lineHeight: 1.25 }}>
            {post.title}
          </h2>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#555', lineHeight: 1.8, margin: '0 0 22px' }}>
            {post.excerpt}
          </p>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#093f4f' }}>
            Read article →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ThumbCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', backgroundColor: '#ffffff' }} className="card-hover group">
      <PostImage post={post} height={190} />
      <div style={{ padding: '18px 22px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <CategoryPill label={post.category} />
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, color: '#bbb' }}>{fmt(post.date)}</span>
        </div>
        <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 15, fontWeight: 400, color: '#093f4f', margin: '0 0 8px', lineHeight: 1.3 }}>
          {post.title}
        </h3>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.7, margin: '0 0 14px' }} className="line-clamp-3">
          {post.excerpt}
        </p>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#093f4f' }}>Read →</span>
      </div>
    </Link>
  );
}

function CompactRow({ post, last }: { post: BlogPost; last: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '13px 0', textDecoration: 'none', borderBottom: last ? 'none' : '1px solid #ede9e2', flexWrap: 'wrap' }}
      className="group"
    >
      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#ccc', whiteSpace: 'nowrap', minWidth: 88, flexShrink: 0 }}>
        {fmt(post.date)}
      </span>
      <span style={{ flexShrink: 0 }}><CategoryPill label={post.category} /></span>
      <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 14, color: '#093f4f', lineHeight: 1.35, flex: 1, minWidth: 160 }}
        className="group-hover:underline">
        {post.title}
      </span>
      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: '#789ead', whiteSpace: 'nowrap', flexShrink: 0 }}>Read →</span>
    </Link>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function BlogContent() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() =>
    active === 'All' ? sortedPosts : sortedPosts.filter(p => p.category === active),
    [active],
  );

  const isFiltered = active !== 'All';
  const featured  = isFiltered ? null  : filtered[0]      ?? null;
  const latest    = isFiltered ? filtered : filtered.slice(1, 4);
  const older     = isFiltered ? []    : filtered.slice(4);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 100, paddingBottom: 52 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Knowledge &amp; Insights</span>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
            The Roatán Real Estate Blog
          </h1>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: 14, marginBottom: 0, maxWidth: 660 }}>
            Market reports, buyer guides, neighborhood analysis, and island intelligence — written from the ground in Roatán.
          </p>
        </div>
      </section>

      {/* ── Category filter bar ── */}
      <div style={{ backgroundColor: '#f5f2ee', borderBottom: '1px solid #e8e2d9' }}>
        <div className="section-container" style={{ maxWidth: 1100, paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap', padding: '10px 0' }}>
            {FILTER_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: active === cat ? '#093f4f' : 'transparent',
                  color: active === cat ? '#ffffff' : '#789ead',
                  transition: 'background-color 0.12s, color 0.12s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 52, paddingBottom: 80 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>

          {/* Filtered view — uniform card grid */}
          {isFiltered && (
            filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, color: '#aaa' }}>
                No articles in this category yet.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
                {filtered.map(p => <ThumbCard key={p.slug} post={p} />)}
              </div>
            )
          )}

          {/* Default (All) view — tiered layout */}
          {!isFiltered && (
            <>
              {/* Featured */}
              {featured && (
                <div style={{ marginBottom: 56 }}>
                  <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Featured</span>
                  <FeaturedPost post={featured} />
                </div>
              )}

              {/* Latest 3 */}
              {latest.length > 0 && (
                <div style={{ marginBottom: 52 }}>
                  <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Latest</span>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
                    {latest.map(p => <ThumbCard key={p.slug} post={p} />)}
                  </div>
                </div>
              )}

              {/* Archive — compact list */}
              {older.length > 0 && (
                <div style={{ marginBottom: 52 }}>
                  <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Archive</span>
                  <div>
                    {older.map((p, i) => <CompactRow key={p.slug} post={p} last={i === older.length - 1} />)}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Inline CTA ── */}
          <div style={{ marginTop: 48, backgroundColor: '#f0f8fb', borderLeft: '3px solid #789ead', padding: '20px 28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead' }}>New to Roatán?</span>
              <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 15, color: '#093f4f', margin: '4px 0 0', lineHeight: 1.4 }}>
                Start with the U.S. Buyer Guide and the Where to Buy map.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/us-buyers-guide-roatan"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff', backgroundColor: '#093f4f', padding: '10px 18px', textDecoration: 'none', display: 'inline-block' }}
              >
                U.S. Buyer Guide →
              </Link>
              <Link
                href="/where-to-buy-in-roatan"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#093f4f', border: '1px solid #093f4f', padding: '10px 18px', textDecoration: 'none', display: 'inline-block' }}
              >
                Where to Buy Map →
              </Link>
              <button
                onClick={() => openBriefingModal()}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#789ead', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '10px 0' }}
              >
                Investor Briefing →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
