import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f2ee', padding: 16, paddingTop: 128 }}>
      <div style={{ backgroundColor: '#ffffff', padding: '40px 48px', maxWidth: 440, width: '100%', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
        <div style={{ width: 64, height: 64, backgroundColor: '#093f4f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg style={{ width: 32, height: 32, color: '#ffffff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 26,
            fontWeight: 400,
            color: '#093f4f',
            marginTop: 0,
            marginBottom: 12,
          }}
        >
          Thank You!
        </h1>
        <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 28 }}>
          You&apos;ve been subscribed to Roatan real estate updates. Check your inbox for confirmation and exclusive listings.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/" className="btn-primary" style={{ justifyContent: 'center', display: 'flex' }}>
            Back to Home
          </Link>
          <a
            href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
            target="_blank"
            rel="noopener"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '12px 28px',
              border: '1px solid #093f4f',
              color: '#093f4f',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#093f4f'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#093f4f'; }}
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}
