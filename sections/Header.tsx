'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { trackSchedule, openSavvyCal, openBriefingModal } from '@/lib/analytics';

type SubItem = { label: string; href?: string; action?: () => void };
type NavEntry =
  | { type: 'group'; label: string; items: SubItem[] }
  | { type: 'link'; label: string; href: string }
  | { type: 'action'; label: string; action: () => void };

const navConfig: NavEntry[] = [
  {
    type: 'group',
    label: 'Start Here',
    items: [
      { label: 'U.S. Buyer Guide', href: '/us-buyers-guide-roatan' },
      { label: 'Where to Buy in Roatán', href: '/where-to-buy-in-roatan' },
      { label: 'Investor Briefing', action: openBriefingModal },
      { label: 'Market Guide', href: '/roatan-market' },
    ],
  },
  {
    type: 'group',
    label: 'Explore Roatán',
    items: [
      { label: 'Where to Buy in Roatán', href: '/where-to-buy-in-roatan' },
      { label: 'Neighborhoods', href: '/neighborhoods' },
      { label: 'New Developments', href: '/new-developments' },
    ],
  },
  {
    type: 'group',
    label: 'Properties',
    items: [
      { label: 'Browse MLS', href: '/properties' },
      { label: 'New Developments', href: '/new-developments' },
    ],
  },
  {
    type: 'group',
    label: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guides', href: '/guides' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Closing Calculator', href: '/calculator' },
    ],
  },
  { type: 'link', label: 'About', href: '/about' },
  { type: 'action', label: 'Contact', action: openSavvyCal },
];

const SCROLL_THRESHOLD = 60;
const RED = '#ED2127';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Only homepage gets the transparent-at-top treatment
  const isHomepage = pathname === '/';
  const isSolid = !isHomepage || scrolled;

  useEffect(() => {
    if (!isHomepage) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomepage]);

  const handleGroupEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };

  const handleGroupLeave = () => {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);
  };

  const toggleMobileGroup = (label: string) => {
    setOpenMobileGroup((prev) => (prev === label ? null : label));
  };

  // Colors derived from solid/overlay state
  const navTextColor = isSolid ? 'rgba(0,0,0,.65)' : 'rgba(255,255,255,.85)';
  const navTextHover = isSolid ? '#000000' : '#ffffff';
  const hamburgerColor = isSolid ? '#111111' : '#ffffff';
  const logoSrc = isSolid ? '/logo-blue.webp' : '/logo-white.webp';

  const baseLabelStyle: React.CSSProperties = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: navTextColor,
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: isSolid ? '#ffffff' : 'transparent',
        borderBottom: isSolid ? '1px solid rgba(0,0,0,.08)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <img
              src={logoSrc}
              alt="Tomas Figueroa Real Estate"
              className="h-14 md:h-16 w-auto"
              width="200"
              height="128"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navConfig.map((entry) => {
              if (entry.type === 'group') {
                return (
                  <div
                    key={entry.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleGroupEnter(entry.label)}
                    onMouseLeave={handleGroupLeave}
                  >
                    <button
                      style={{
                        ...baseLabelStyle,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = navTextHover)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = navTextColor)}
                      aria-expanded={openGroup === entry.label}
                    >
                      {entry.label}
                      <ChevronDown
                        style={{
                          width: 12,
                          height: 12,
                          transition: 'transform 0.2s',
                          transform: openGroup === entry.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {openGroup === entry.label && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 16px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: 220,
                          backgroundColor: '#111111',
                          borderTop: `2px solid ${RED}`,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                          padding: '8px 0',
                          zIndex: 100,
                        }}
                        onMouseEnter={() => handleGroupEnter(entry.label)}
                        onMouseLeave={handleGroupLeave}
                      >
                        {entry.items.map((item) =>
                          item.href ? (
                            <Link
                              key={item.label}
                              href={item.href}
                              style={{
                                display: 'block',
                                padding: '10px 20px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: 12,
                                color: 'rgba(255,255,255,0.70)',
                                textDecoration: 'none',
                                transition: 'color 0.15s, background-color 0.15s',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(255,255,255,0.70)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                              onClick={() => setOpenGroup(null)}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              key={item.label}
                              onClick={() => { item.action?.(); setOpenGroup(null); }}
                              style={{
                                display: 'block',
                                padding: '10px 20px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: 12,
                                color: 'rgba(255,255,255,0.70)',
                                textDecoration: 'none',
                                transition: 'color 0.15s, background-color 0.15s',
                                width: '100%',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(255,255,255,0.70)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              {item.label}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (entry.type === 'link') {
                const isActive = pathname === entry.href;
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    style={{
                      ...baseLabelStyle,
                      color: isActive ? navTextHover : navTextColor,
                      fontWeight: isActive ? 600 : undefined,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = navTextHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? navTextHover : navTextColor)}
                  >
                    {entry.label}
                  </Link>
                );
              }

              return (
                <button
                  key={entry.label}
                  onClick={entry.action}
                  style={{ ...baseLabelStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = navTextHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = navTextColor)}
                >
                  {entry.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA — always Agency Red */}
          <div className="hidden lg:block">
            <button
              onClick={() => { trackSchedule(); openSavvyCal(); }}
              style={{
                display: 'inline-block',
                padding: '10px 22px',
                backgroundColor: RED,
                color: '#ffffff',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Schedule a Strategy Call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: hamburgerColor }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — always dark, independent of header state */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#111111', borderTop: `2px solid ${RED}` }}>
          <div className="section-container py-4">
            {navConfig.map((entry) => {
              if (entry.type === 'group') {
                const isOpen = openMobileGroup === entry.label;
                return (
                  <div key={entry.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <button
                      onClick={() => toggleMobileGroup(entry.label)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '12px 0',
                        color: 'rgba(255,255,255,0.80)',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontSize: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {entry.label}
                      <ChevronDown
                        style={{
                          width: 14,
                          height: 14,
                          color: 'rgba(255,255,255,0.45)',
                          transition: 'transform 0.2s',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: 8 }}>
                        {entry.items.map((item) =>
                          item.href ? (
                            <Link
                              key={item.label}
                              href={item.href}
                              style={{
                                display: 'block',
                                padding: '9px 16px',
                                color: 'rgba(255,255,255,0.55)',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: 12,
                                textDecoration: 'none',
                              }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              key={item.label}
                              onClick={() => { item.action?.(); setIsMobileMenuOpen(false); }}
                              style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '9px 16px',
                                color: 'rgba(255,255,255,0.55)',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: 12,
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                              }}
                            >
                              {item.label}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (entry.type === 'link') {
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      color: 'rgba(255,255,255,0.80)',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {entry.label}
                  </Link>
                );
              }

              return (
                <button
                  key={entry.label}
                  onClick={() => { entry.action(); setIsMobileMenuOpen(false); }}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: 'rgba(255,255,255,0.80)',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {entry.label}
                </button>
              );
            })}
            <button
              onClick={() => { trackSchedule(); openSavvyCal(); setIsMobileMenuOpen(false); }}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 12,
                padding: '12px 20px',
                backgroundColor: RED,
                color: '#ffffff',
                textAlign: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
