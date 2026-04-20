'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  action?: () => void;
  href?: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Browse MLS', href: '/properties' },
    { label: 'New Developments', href: '/new-developments' },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', action: () => scrollToSection('newsletter') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#093f4f] py-4">
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-white.webp"
              alt="Tomas Figueroa Real Estate"
              className="h-14 md:h-20 w-auto"
              width="200"
              height="128"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label}>
                {'action' in link && link.action ? (
                  <button
                    onClick={link.action}
                    className="text-white/80 hover:text-white font-medium transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className="text-white/80 hover:text-white font-medium transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-white text-[#093f4f] hover:bg-[#d4e8ed] transition-all"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#072f3b] border-t border-white/10">
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {'action' in link && link.action ? (
                  <button
                    onClick={link.action}
                    className="block w-full text-left py-3 text-white/80 hover:text-white font-medium text-sm"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className="block py-3 text-white/80 hover:text-white font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <a
                href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                target="_blank"
                rel="noopener"
                className="block w-full text-center bg-white text-[#093f4f] py-3 rounded-lg font-semibold text-sm"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
