'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import posts from '@/data/blog';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function HomeResources() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.08);

  return (
    <section style={{ backgroundColor: '#f5f2ee', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <span className="label-caps block mb-3">Latest Insights</span>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 400,
                color: '#093f4f',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              From the ground in Roatán.
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#093f4f',
              textDecoration: 'none',
              alignSelf: 'flex-end',
            }}
          >
            All articles →
          </Link>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                backgroundColor: '#ffffff',
                padding: '24px 22px',
                textDecoration: 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                transitionDelay: visible ? `${i * 80}ms` : '0ms',
              }}
              className="card-hover group"
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#789ead',
                  backgroundColor: 'rgba(120,158,173,0.12)',
                  padding: '3px 8px',
                  marginBottom: 12,
                }}
              >
                {post.category}
              </span>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#093f4f',
                  marginTop: 0,
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {post.title}
              </h3>
              <p
                style={{ fontSize: 12, color: '#777777', lineHeight: 1.7, marginBottom: 16 }}
                className="line-clamp-2"
              >
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: '#999999' }}>
                <span>{formatDate(post.date)}</span>
                <ArrowRight style={{ width: 13, height: 13, color: '#093f4f' }} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
