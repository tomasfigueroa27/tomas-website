import Link from 'next/link';

export default function HowToChoose() {
  return (
    <section style={{ backgroundColor: '#093f4f', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <span className="label-caps block mb-4" style={{ color: '#789ead' }}>How Tomás Helps</span>
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 400,
            color: '#ffffff',
            marginTop: 0,
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          Start with the lifestyle. Then underwrite the asset.
        </h2>
        <div style={{ maxWidth: 640 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '0 0 12px' }}>
            Every buyer Tomás works with goes through the same framework: location fit, project selection, title clarity, developer vetting, rental realism, and exit strategy.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '0 0 32px' }}>
            The goal is to make sure what you buy today still makes sense five years from now — whether you keep it, rent it, or sell it.
          </p>
          <Link
            href="/about"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#789ead',
              textDecoration: 'none',
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            See how Tomás works →
          </Link>
        </div>
      </div>
    </section>
  );
}
