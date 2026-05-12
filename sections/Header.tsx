'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Browse MLS', href: '/properties' },
  { label: 'New Developments', href: '/new-developments' },
  { label: 'Where to Buy', href: '/where-to-buy-in-roatan' },
  { label: "Buyer's Guide", href: '/us-buyers-guide-roatan' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

const navLinkStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 12,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.75)',
  textDecoration: 'none',
  transition: 'color 0.2s',
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToContact = () => {
    const el = document.getElementById('newsletter');
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#093f4f' }}>
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <img
              src="/logo-white.webp"
              alt="Tomas Figueroa Real Estate"
              className="h-14 md:h-16 w-auto"
              width="200"
              height="128"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  ...navLinkStyle,
                  color: pathname === link.href ? '#ffffff' : 'rgba(255,255,255,0.75)',
                }}
                className="hover:!text-white"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToContact}
              style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer' }}
              className="hover:!text-white"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-block',
                padding: '10px 22px',
                backgroundColor: '#789ead',
                color: '#ffffff',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#63868d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#789ead')}
            >
              Let&apos;s Connect
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#072f3b', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '10px 0',
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToContact}
              style={{
                display: 'block',
                padding: '10px 0',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
              }}
            >
              Contact
            </button>
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              style={{
                display: 'block',
                marginTop: 12,
                padding: '12px 20px',
                backgroundColor: '#789ead',
                color: '#ffffff',
                textAlign: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                textDecoration: 'none',
              }}
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
