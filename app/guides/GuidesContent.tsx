'use client';

import { useState } from 'react';
import { Download, X, Loader2, Send } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  file: string;
  cover: string;
}

const guides: Guide[] = [
  {
    id: 'buyers-guide',
    title: "Buyer's Guide to Roatan Real Estate",
    description: 'Everything you need to know before purchasing property in Roatan — from legal process to neighborhood selection and financing.',
    file: '/guides/buyers-guide.pdf',
    cover: '/guides/buyers-guide-cover.jpg',
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.tomasfigueroa.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.tomasfigueroa.com/guides' },
  ],
};

export default function GuidesContent() {
  const [selected, setSelected] = useState<Guide | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const openModal = (guide: Guide) => { setSelected(guide); setName(''); setEmail(''); setError(''); };
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
    <div className="min-h-screen" style={{ paddingTop: 80, paddingBottom: 64, backgroundColor: '#ffffff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Free Resources</span>
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
            Guides
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            In-depth guides to help you make informed decisions about buying property in Roatan. Free to download — just enter your name and email.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="section-container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 16 }}>
            Why These Guides Exist
          </h2>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Buying property in Roatan is not complicated — but it is different from buying in the US, Canada, or Europe. The legal process, the title system, the role of a Honduran attorney, and the way deals are structured are all unique to this market.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            Most buyers come in with questions they don&apos;t know how to ask yet. These guides are designed to close that gap. They cover the full purchasing process from initial research through closing, so you walk into every conversation — with an agent, an attorney, or a developer — already informed.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, marginBottom: 14 }}>
            The Buyer&apos;s Guide is the most comprehensive starting point. It covers legal ownership for foreigners, the 5-step purchase process, what due diligence looks like in Honduras, typical closing timelines, and the most common mistakes buyers make in this market.
          </p>
          <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.85, margin: 0 }}>
            Download it free. No obligation. If you have questions after reading it, I&apos;m here.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: 900, margin: '0 auto' }}>
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => openModal(guide)}
                style={{ textAlign: 'left', backgroundColor: '#f5f2ee', overflow: 'hidden', border: '1px solid transparent', transition: 'all 0.3s', cursor: 'pointer', padding: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f5f2ee'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                className="group"
              >
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#e5e7eb' }}>
                  <img src={guide.cover} alt={`${guide.title} cover`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s' }} className="group-hover:scale-105" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 12, right: 12, backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6, transition: 'background-color 0.3s' }} className="group-hover:bg-white">
                    <Download style={{ width: 12, height: 12, color: '#ffffff' }} className="group-hover:!text-[#093f4f]" />
                    <span style={{ fontSize: 11, color: '#ffffff', fontWeight: 600, fontFamily: 'Arial, Helvetica, sans-serif' }} className="group-hover:!text-[#093f4f]">Free Download</span>
                  </div>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 16, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 8 }}>{guide.title}</h2>
                  <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, margin: 0 }}>{guide.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: 440, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#789ead', margin: '0 0 4px' }}>Free Download</p>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 18, fontWeight: 400, color: '#093f4f', margin: 0 }}>{selected.title}</h3>
              </div>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999999', marginLeft: 16, marginTop: 2, padding: 4 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#333333')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#999999')}
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
              <p style={{ fontSize: 13, color: '#555555', marginBottom: 20, marginTop: 0 }}>Enter your details below to get instant access to this guide.</p>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="guide-name" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#333333', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Full Name</label>
                <input id="guide-name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #d4e8ed', outline: 'none', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#333333', boxSizing: 'border-box' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#093f4f')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#d4e8ed')}
                  placeholder="Enter your name" required />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="guide-email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#333333', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email Address</label>
                <input id="guide-email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid #d4e8ed', outline: 'none', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#333333', boxSizing: 'border-box' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#093f4f')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#d4e8ed')}
                  placeholder="Enter your email" required />
              </div>

              {error && <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12 }}>{error}</p>}

              <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', gap: 8, opacity: submitting ? 0.6 : 1 }}>
                {submitting ? <Loader2 style={{ width: 18, height: 18 }} className="animate-spin" /> : <><Download style={{ width: 15, height: 15 }} /> Download Guide</>}
              </button>

              <p style={{ fontSize: 11, color: '#999999', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
                By downloading you agree to receive occasional real estate insights from Tomas Figueroa.
                <Send style={{ width: 11, height: 11, display: 'inline', marginLeft: 4, opacity: 0.5 }} />
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
