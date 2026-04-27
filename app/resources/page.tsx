import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, ArrowRight, Calculator } from 'lucide-react';
import posts from '@/data/blog';

export const metadata: Metadata = {
  title: 'Real Estate Resources | Roatan Honduras',
  description: "Articles, market insights, and buyer's guides to help you make informed decisions about Roatan, Honduras real estate. Free resources for investors and relocators.",
  alternates: { canonical: 'https://www.tomasfigueroa.com/resources' },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const recentPosts = posts.slice(0, 3);

export default function ResourcesPage() {
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
            Resources
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Articles, market insights, and guides to help you make informed decisions about Roatan real estate.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="section-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 16 }}>
            Everything You Need to Make a Confident Decision
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Roatan is still a market where information is hard to find and easy to get wrong. Most of what&apos;s published online is generic Caribbean content or marketing material from developers — not ground-level analysis from someone actively working the market.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            This resources section is built around one goal: giving you enough context to ask the right questions before you commit to anything.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            The blog covers market trends, neighborhood comparisons, investment logic, and buyer questions I answer every week. The guides walk you through the legal and financial mechanics of buying property in Honduras as a foreigner — step by step, no fluff. The closing cost calculator lets you model your total acquisition cost before you make an offer, so there are no surprises at closing.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, margin: 0 }}>
            Use these tools at whatever stage you&apos;re at — early research, active comparison, or ready to move. And if you want to go beyond what&apos;s published here, a 30-minute call covers more ground than any article.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-4" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { href: '/blog', icon: BookOpen, title: 'Blog', desc: 'Read articles about Roatan real estate, market trends, and lifestyle tips.' },
              { href: '/guides', icon: FileText, title: 'Guides', desc: 'Comprehensive guides to help you navigate buying property in Roatan.' },
              { href: '/calculator', icon: Calculator, title: 'Closing Calculator', desc: 'Estimate your closing costs for a Roatan property purchase instantly.' },
            ].map(({ href, icon: Icon, title, desc }) => (
              <a
                key={href}
                href={href}
                style={{ display: 'block', padding: 28, textDecoration: 'none' }}
                className="card-hover group"
              >
                <div style={{ width: 44, height: 44, backgroundColor: 'rgba(120,158,173,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, transition: 'background-color 0.2s' }}>
                  <Icon style={{ width: 22, height: 22, color: '#093f4f' }} />
                </div>
                <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 20, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 10 }}>{title}</h2>
                <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Latest Content</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 0 }}>Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ display: 'block', backgroundColor: '#ffffff', padding: 20, textDecoration: 'none' }}
                className="card-shadow-hover group"
              >
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead', backgroundColor: 'rgba(120,158,173,0.12)', padding: '3px 8px' }}>{post.category}</span>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, fontWeight: 400, color: '#093f4f', marginTop: 12, marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: 12, color: '#555555', lineHeight: 1.75, marginBottom: 12 }} className="line-clamp-2">{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: '#999999' }}>
                  <span>{formatDate(post.date)}</span>
                  <ArrowRight style={{ width: 13, height: 13, color: '#093f4f' }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#093f4f', textDecoration: 'none' }}>
              View all articles <ArrowRight style={{ width: 13, height: 13 }} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
