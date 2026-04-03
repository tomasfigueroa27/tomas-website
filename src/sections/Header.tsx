import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavLink {
  label: string;
  action?: () => void;
  href?: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
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
      {/* Top Bar */}
      <div className={`${solidHeader ? 'hidden' : 'block'} bg-[#04649b] text-white py-2`}>
        <div className="section-container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+50488488326" className="flex items-center gap-1 hover:underline" aria-label="Call (504) 8848-8326">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">(504) 8848-8326</span>
            </a>
            <a href="mailto:tomas@kwroatan.com" className="flex items-center gap-1 hover:underline" aria-label="Email tomas@kwroatan.com">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">tomas@kwroatan.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61557310059412" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/roatanbytomas/" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo - DOUBLED SIZE */}
          <a href="/" className="flex items-center">
            <img
              src={solidHeader ? "/logo-blue.webp" : "/logo-white.webp"}
              alt="Tomas Figueroa Real Estate"
              className="h-24 md:h-32 w-auto"
              width="200"
              height="128"
              decoding="async"
            />
          </a>

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
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 font-medium hover:opacity-80 transition-opacity ${
                      solidHeader ? 'text-[#1d1d1d]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
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
              Let's Connect
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
                  <a
                    href={link.href}
                    className="block py-2 text-[#1d1d1d] font-medium"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
              target="_blank"
              rel="noopener"
              className="block w-full text-center bg-[#04649b] text-white py-3 rounded-lg font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
