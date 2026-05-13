'use client';

import Link from 'next/link';
import { ArrowRight, Download, Map, FileText } from 'lucide-react';
import { openBriefingModal } from '@/lib/analytics';
import posts from '@/data/blog';

const recentPosts = posts.slice(0, 3);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function HomeResources() {
  return (
    <section style={{ backgroundColor: '#f5f2ee', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>

        <div style={{ marginBottom: 48 }}>
          <span className="label-caps block mb-4">Resources</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 400,
              color: '#093f4f',
              marginTop: 0,
              marginBottom: 0,
              lineHeight: 1.2,
            }}
          >
            Everything you need to start well.
          </h2>
        </div>

        {/* Featured resources */}
        <div className="grid md:grid-cols-3 gap-4" style={{ marginBottom: 48 }}>

          {/* Investor Briefing */}
          <div
            style={{
              backgroundColor: '#093f4f',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: 'rgba(120,158,173,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Download style={{ width: 20, height: 20, color: '#d4e8ed' }} aria-hidden="true" />
            </div>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 9,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#789ead',
                display: 'block',
                marginBottom: 10,
              }}
            >
              Free Download
            </span>
            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 20,
                fontWeight: 400,
                color: '#ffffff',
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              Investor Briefing
            </h3>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                marginBottom: 28,
                flex: 1,
              }}
            >
              The catalysts, market data, active projects, and the questions worth asking before you commit — in one document.
            </p>
            <button
              onClick={openBriefingModal}
              className="btn-accent"
              style={{ alignSelf: 'flex-start' }}
            >
              Download the Investor Briefing
            </button>
          </div>

          {/* U.S. Buyer Guide */}
          <Link
            href="/us-buyers-guide-roatan"
            style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', padding: '36px 28px', textDecoration: 'none' }}
            className="card-hover group"
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: 'rgba(120,158,173,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <FileText style={{ width: 20, height: 20, color: '#093f4f' }} aria-hidden="true" />
            </div>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 9,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#789ead',
                display: 'block',
                marginBottom: 10,
              }}
            >
              For U.S. Buyers
            </span>
            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 20,
                fontWeight: 400,
                color: '#093f4f',
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              U.S. Buyer Guide
            </h3>
            <p
              style={{
                fontSize: 13,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 24,
                flex: 1,
              }}
            >
              Legal framework, buying process, due diligence, and rentals — everything Americans need before committing capital in Roatán.
            </p>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#093f4f',
              }}
            >
              Read the guide →
            </span>
          </Link>

          {/* Where to Buy */}
          <Link
            href="/where-to-buy-in-roatan"
            style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', padding: '36px 28px', textDecoration: 'none' }}
            className="card-hover group"
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: 'rgba(120,158,173,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Map style={{ width: 20, height: 20, color: '#093f4f' }} aria-hidden="true" />
            </div>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 9,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#789ead',
                display: 'block',
                marginBottom: 10,
              }}
            >
              Interactive Map
            </span>
            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 20,
                fontWeight: 400,
                color: '#093f4f',
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              Where to Buy in Roatán
            </h3>
            <p
              style={{
                fontSize: 13,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 24,
                flex: 1,
              }}
            >
              Explore the five lifestyle nodes and understand which area fits your goals — before you start comparing listings.
            </p>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#093f4f',
              }}
            >
              Explore Where to Buy →
            </span>
          </Link>
        </div>

        {/* Latest insights */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 20,
                fontWeight: 400,
                color: '#093f4f',
                margin: 0,
              }}
            >
              Latest Insights
            </h3>
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
              }}
            >
              All articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ display: 'block', backgroundColor: '#ffffff', padding: '24px 20px', textDecoration: 'none' }}
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
                <h4
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
                </h4>
                <p
                  style={{
                    fontSize: 12,
                    color: '#777777',
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
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
      </div>
    </section>
  );
}
