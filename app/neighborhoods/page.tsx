import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import neighborhoods from '@/data/neighborhoods';
import ScheduleButton from '@/components/ScheduleButton';

export const metadata: Metadata = {
  title: 'Roatan Neighborhoods Guide',
  description: "Explore Roatan's top neighborhoods — from West Bay Beach luxury condos to the expat-friendly West End village. Compare price ranges, lifestyle, and investment potential for each area.",
  alternates: { canonical: 'https://www.tomasfigueroa.com/neighborhoods' },
};

export default function NeighborhoodsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: 'https://www.tomasfigueroa.com/neighborhoods' },
    ],
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Neighborhood Guide</span>
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
            Roatan Neighborhoods
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            Every neighborhood on Roatan has a distinct character, price range, and lifestyle. Explore each area to find the right fit for your goals — whether you&apos;re buying, investing, or relocating.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                style={{ display: 'block', padding: 28, textDecoration: 'none' }}
                className="card-hover group"
              >
                <div style={{ marginBottom: 14 }}>
                  <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead', backgroundColor: 'rgba(120,158,173,0.12)', padding: '4px 10px', marginBottom: 10 }}>{neighborhood.vibe}</span>
                  <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 20, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 6 }}>{neighborhood.name}</h2>
                  <p style={{ fontSize: 13, color: '#63868d', marginTop: 0, marginBottom: 14 }}>{neighborhood.tagline}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555555', marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, color: '#093f4f' }}>Price Range:</span>
                    <span>{neighborhood.priceRange}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                    {neighborhood.bestFor.slice(0, 3).map((tag) => (
                      <span key={tag} style={{ fontSize: 11, backgroundColor: '#ffffff', border: '1px solid #e5e7eb', color: '#555555', padding: '3px 10px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#093f4f' }}>
                  Explore {neighborhood.name}
                  <ArrowRight style={{ width: 13, height: 13 }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="label-caps block mb-4">Quick Comparison</span>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 12 }}>Neighborhood Comparison</h2>
            <p style={{ fontSize: 14, color: '#555555', maxWidth: 480, margin: '0 auto' }}>A quick side-by-side view of every Roatan neighborhood to help you find the right fit.</p>
          </div>
          <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb' }}>
            <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#093f4f', color: '#ffffff' }}>
                  <th style={{ textAlign: 'left', padding: '14px 20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Neighborhood</th>
                  <th style={{ textAlign: 'left', padding: '14px 20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Price Range</th>
                  <th style={{ textAlign: 'left', padding: '14px 20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }} className="hidden md:table-cell">Vibe</th>
                  <th style={{ textAlign: 'left', padding: '14px 20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }} className="hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr key={n.slug} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f5f2ee' }}>
                    <td style={{ padding: '12px 20px' }}>
                      <Link href={`/neighborhoods/${n.slug}`} className="link-underline">{n.name}</Link>
                    </td>
                    <td style={{ padding: '12px 20px', color: '#555555' }}>{n.priceRange}</td>
                    <td style={{ padding: '12px 20px', color: '#555555' }} className="hidden md:table-cell">{n.vibe}</td>
                    <td style={{ padding: '12px 20px' }} className="hidden lg:table-cell">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {n.bestFor.slice(0, 2).map((tag) => (
                          <span key={tag} style={{ backgroundColor: 'rgba(120,158,173,0.12)', color: '#063f4f', fontSize: 11, padding: '2px 8px' }}>{tag}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 32, paddingBottom: 32 }}>
        <div className="section-container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#555555' }}>Have questions about neighborhoods or buying in Roatan?{' '}<Link href="/faq" style={{ color: '#093f4f', fontWeight: 600, textDecoration: 'none' }}>Browse our full FAQ →</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 800 }}>
          <div style={{ backgroundColor: '#093f4f', padding: '40px 32px', textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>Not Sure Which Neighborhood Is Right for You?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>Tomas can help you evaluate each area against your specific goals — whether that&apos;s rental income, lifestyle, appreciation, or all three.</p>
            <ScheduleButton className="btn-accent">
              Schedule a Strategy Call
            </ScheduleButton>
          </div>
        </div>
      </section>
    </div>
  );
}
