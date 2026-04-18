'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  action?: () => void;
  href?: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages there's no dark hero, so always use the solid/scrolled style
  const solidHeader = !isHomePage || isScrolled;

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidHeader
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={solidHeader ? '/logo-blue.webp' : '/logo-white.webp'}
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
                    className={`flex items-center gap-1 font-medium hover:opacity-80 transition-opacity ${
                      solidHeader ? 'text-[#1d1d1d]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className={`flex items-center gap-1 font-medium hover:opacity-80 transition-opacity ${
                      solidHeader ? 'text-[#1d1d1d]' : 'text-white'
                    }`}
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
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                solidHeader
                  ? 'bg-[#04649b] text-white hover:bg-[#03527d]'
                  : 'bg-white text-[#04649b] hover:bg-gray-100'
              }`}
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${solidHeader ? 'text-[#1d1d1d]' : 'text-white'}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="section-container py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {'action' in link && link.action ? (
                  <button
                    onClick={link.action}
                    className="block w-full text-left py-2 text-[#1d1d1d] font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className="block py-2 text-[#1d1d1d] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="block w-full text-center bg-[#04649b] text-white py-3 rounded-lg font-medium"
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
