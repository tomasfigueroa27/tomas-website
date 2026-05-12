'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const colTitleStyle: React.CSSProperties = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 10,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  color: '#789ead',
  marginBottom: 16,
  display: 'block',
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 13,
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  display: 'block',
  marginBottom: 10,
  transition: 'color 0.2s',
};

const socialIcons = [
  {
    href: 'https://www.facebook.com/profile.php?id=61557310059412',
    label: 'Facebook',
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.instagram.com/roatanbytomas/',
    label: 'Instagram',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    href: 'https://www.linkedin.com/in/roatanbytomas/',
    label: 'LinkedIn',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://www.youtube.com/channel/UCfH3CqrQxYKPBlXVzw6Sz_Q',
    label: 'YouTube',
    d: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0a1628' }}>
      <div className="section-container" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <img
              src="/logo-white.webp"
              alt="Tomas Figueroa Real Estate"
              style={{ height: 72, width: 'auto', marginBottom: 16 }}
            />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Strategic real estate guidance in Roatán, Honduras — helping investors and
              relocation buyers make disciplined, informed decisions.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {socialIcons.map(({ href, label, d }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    width: 34,
                    height: 34,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(120,158,173,0.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                >
                  <svg style={{ width: 15, height: 15, fill: 'rgba(255,255,255,0.6)' }} viewBox="0 0 24 24" aria-hidden="true">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span style={colTitleStyle}>Navigation</span>
            {[
              { href: '/', label: 'Home' },
              { href: '/new-developments', label: 'New Developments' },
              { href: '/properties', label: 'Browse MLS' },
              { href: '/where-to-buy-in-roatan', label: 'Where to Buy' },
              { href: '/us-buyers-guide-roatan', label: "Buyer's Guide" },
              { href: '/roatan-market', label: 'Market Guide' },
              { href: '/neighborhoods', label: 'Neighborhoods' },
              { href: '/about', label: 'About' },
              { href: '/resources', label: 'Resources' },
              { href: '/blog', label: 'Blog' },
              { href: '/guides', label: 'Guides' },
              { href: '/calculator', label: 'Closing Calculator' },
              { href: '/faq', label: 'FAQ' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span style={colTitleStyle}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin style={{ width: 14, height: 14, color: '#789ead', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>
                  Lawson Rock, Sandy Bay<br />
                  Roatán, Bay Islands<br />
                  Honduras
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone style={{ width: 14, height: 14, color: '#789ead', flexShrink: 0 }} aria-hidden="true" />
                <a
                  href="tel:+50488483226"
                  style={{ ...linkStyle, margin: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  (504) 8848-3226
                </a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Mail style={{ width: 14, height: 14, color: '#789ead', flexShrink: 0 }} aria-hidden="true" />
                <a
                  href="mailto:tomas@kwroatan.com"
                  style={{ ...linkStyle, margin: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  tomas@kwroatan.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="section-container" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              © {currentYear} Tomas Figueroa Real Estate. All rights reserved.
            </p>
            <img
              src="/kw-logo-white.png"
              alt="Keller Williams Roatan"
              style={{ height: 28, width: 'auto', opacity: 0.3 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
