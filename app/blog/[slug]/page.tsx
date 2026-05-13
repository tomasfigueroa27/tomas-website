import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import posts, { type ContentBlock } from '@/data/blog';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.tomasfigueroa.com/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, section: post.category, ...(post.image ? { images: [post.image] } : {}) },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const formatMonthYear = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: '#093f4f', marginTop: 40, marginBottom: 16 }}>
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginTop: 32, marginBottom: 12 }}>
          {block.text}
        </h3>
      );
    case 'p': {
      const pStyle = { fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 20 };
      if (!block.links || block.links.length === 0) {
        return <p key={index} style={pStyle}>{block.text}</p>;
      }
      const parts: React.ReactNode[] = [];
      let remaining = block.text;
      const sorted = [...block.links].sort((a, b) => block.text.indexOf(a.anchor) - block.text.indexOf(b.anchor));
      for (const link of sorted) {
        const idx = remaining.indexOf(link.anchor);
        if (idx === -1) continue;
        if (idx > 0) parts.push(remaining.slice(0, idx));
        parts.push(<a key={link.anchor} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: '#093f4f', textDecoration: 'underline' }}>{link.anchor}</a>);
        remaining = remaining.slice(idx + link.anchor.length);
      }
      if (remaining) parts.push(remaining);
      return <p key={index} style={pStyle}>{parts}</p>;
    }
    case 'ul':
      return (
        <ul key={index} style={{ paddingLeft: 20, marginBottom: 20 }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 8 }}>{item}</li>
          ))}
        </ul>
      );
    case 'facts':
      return (
        <div key={index} style={{ backgroundColor: '#f5f2ee', padding: '20px 24px', marginBottom: 24 }}>
          {block.items.map((fact, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: i < block.items.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
              <span style={{ fontWeight: 600, color: '#093f4f', fontSize: 13, minWidth: 120, flexShrink: 0 }}>{fact.label}:</span>
              <span style={{ fontSize: 13, color: '#555555' }}>{fact.value}</span>
            </div>
          ))}
        </div>
      );
    case 'table':
      return (
        <div key={index} style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ padding: '10px 16px', backgroundColor: '#093f4f', color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? '#f5f2ee' : '#ffffff' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '10px 16px', color: ci === 0 ? '#093f4f' : '#555555', fontWeight: ci === 0 ? 600 : 400, borderBottom: '1px solid #e5e7eb', fontSize: 13, whiteSpace: 'nowrap' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: 128 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 28, fontWeight: 400, color: '#093f4f', marginBottom: 16 }}>Post not found</h1>
          <Link href="/blog" style={{ color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}>← Back to blog</Link>
        </div>
      </div>
    );
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Tomas Figueroa',
      '@id': 'https://www.tomasfigueroa.com/#person',
      url: 'https://www.tomasfigueroa.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tomas Figueroa – KW Roatan',
      url: 'https://www.tomasfigueroa.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tomasfigueroa.com/favicon.ico',
      },
    },
    url: `https://www.tomasfigueroa.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.tomasfigueroa.com/blog/${post.slug}`,
    },
    image: post.image ?? 'https://www.tomasfigueroa.com/opengraph.jpg',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tomasfigueroa.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.tomasfigueroa.com/blog/${post.slug}` },
    ],
  };

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 48, paddingBottom: 48 }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <Link
            href="/blog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, marginBottom: 24 }}
            className="link-dim"
          >
            <ArrowLeft style={{ width: 14, height: 14 }} aria-hidden="true" />
            Back to blog
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: 'rgba(255,255,255,0.15)', padding: '4px 10px', color: '#ffffff' }}>
              <Tag style={{ width: 10, height: 10 }} aria-hidden="true" />
              {post.category}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
              <Calendar style={{ width: 11, height: 11 }} aria-hidden="true" />
              {formatDate(post.date)}
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 400,
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: 10, marginBottom: 0 }}>Published: {formatMonthYear(post.date)} · By Tomas Figueroa, Keller Williams Roatan</p>
        </div>
      </section>

      {post.image && (
        <div className="section-container" style={{ maxWidth: 720 }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: 380, objectFit: 'cover', display: 'block', marginTop: -32, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} loading="eager" decoding="async" />
        </div>
      )}

      <article className="section-container" style={{ maxWidth: 720, paddingTop: 40, paddingBottom: 40 }}>
        {post.summary && post.summary.length > 0 && (
          <div style={{ backgroundColor: '#f5f2ee', borderLeft: '3px solid #093f4f', padding: '20px 24px', marginBottom: 36 }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 12 }}>At a Glance</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {post.summary.map((point, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 8 }}>
                  <span style={{ marginTop: 6, width: 6, height: 6, backgroundColor: '#093f4f', flexShrink: 0, display: 'inline-block' }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
        {post.body.map((block, i) => renderBlock(block, i))}
      </article>

      {relatedPosts.length > 0 && (
        <div className="section-container" style={{ maxWidth: 720, marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', marginBottom: 16 }}>Read Next</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                style={{ display: 'block', padding: 20, textDecoration: 'none' }}
                className="card-hover group"
              >
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead' }}>{related.category}</span>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 15, fontWeight: 400, color: '#093f4f', marginTop: 8, marginBottom: 6, lineHeight: 1.3 }}>{related.title}</h3>
                <p style={{ fontSize: 12, color: '#555555', lineHeight: 1.75, margin: 0 }} className="line-clamp-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="section-container" style={{ maxWidth: 720 }}>
        <div style={{ backgroundColor: '#093f4f', padding: '36px 28px', textAlign: 'center', color: '#ffffff' }}>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 10 }}>Interested in Roatan Real Estate?</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24 }}>Let&apos;s talk about finding the right property for you.</p>
          <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="btn-accent">
            Schedule a Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
}
