import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import posts from '@/data/blog';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Roatan Honduras',
  description: 'Market trends, investment tips, and lifestyle insights about Roatan, Honduras real estate. Stay informed with the latest news from the Bay Islands property market.',
  alternates: { canonical: 'https://tomasfigueroa.com/blog' },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Knowledge &amp; Insights</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Real Estate Blog
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Market trends, investment tips, and island lifestyle insights to help you make the most of Roatan real estate.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 960 }}>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
                className="card-hover group"
              >
                {post.image && (
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                )}
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead', backgroundColor: 'rgba(120,158,173,0.12)', padding: '4px 10px' }}>
                      <Tag style={{ width: 10, height: 10 }} aria-hidden="true" />
                      {post.category}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#999999' }}>
                      <Calendar style={{ width: 11, height: 11 }} aria-hidden="true" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 18,
                      fontWeight: 400,
                      color: '#093f4f',
                      marginTop: 0,
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>{post.excerpt}</p>
                  <span style={{ display: 'inline-block', marginTop: 14, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#093f4f' }}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
