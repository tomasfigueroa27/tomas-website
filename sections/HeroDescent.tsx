'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import { openBriefingModal } from '@/lib/analytics';

// TEST — REVERT LATER: set to true to force scroll-scrub on all viewports
// (bypasses the ≥768px + prefers-reduced-motion gate). Flip back to false when done.
const FORCE_SCRUB_ON_MOBILE = true;

// ─── Font aliases (CSS vars injected by layout.tsx) ──────────────────────────
const SERIF = 'var(--font-garamond), Georgia, "Times New Roman", serif';
const SANS  = 'var(--font-inter), Arial, Helvetica, sans-serif';

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    label: 'For U.S. Buyers',
    title: 'U.S. Buyer Guide',
    desc:  'Everything Americans need before buying — legal framework, buying process, and due diligence.',
    href:  '/us-buyers-guide-roatan',
  },
  {
    label: 'Where to Buy',
    title: 'Where to Buy in Roatán',
    desc:  'Five distinct areas. Find the one that fits your lifestyle, budget, and goals.',
    href:  '/where-to-buy-in-roatan',
  },
  {
    label: 'New Developments',
    title: 'New Developments',
    desc:  'Active projects evaluated for location, developer quality, and rental logic.',
    href:  '/new-developments',
  },
] as const;

// ─── CTA row (shared between static and desktop) ─────────────────────────────
function CTARow() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Link href="/properties" className="btn-accent">Browse MLS</Link>
      <button
        onClick={openBriefingModal}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '12px 28px',
          background: 'transparent',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.4)',
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          cursor: 'pointer',
          fontFamily: SANS,
        }}
      >
        Download the Investor Briefing
      </button>
    </div>
  );
}

// ─── Frosted-glass Start Here card ───────────────────────────────────────────
function FrostCard({ label, title, desc, href }: (typeof CARDS)[number]) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        padding: '22px 20px',
        background: 'rgba(1,64,81,0.52)',
        border: '1px solid rgba(255,255,255,0.13)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        textDecoration: 'none',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(1,64,81,0.72)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(1,64,81,0.52)')}
    >
      <span style={{
        display: 'block',
        fontFamily: SANS,
        fontSize: 9,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: '#789ead',
        marginBottom: 10,
      }}>
        {label}
      </span>
      <h3 style={{
        fontFamily: SERIF,
        fontSize: 17,
        fontWeight: 400,
        color: '#ffffff',
        margin: '0 0 10px',
        lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: SANS,
        fontSize: 12,
        color: 'rgba(255,255,255,0.62)',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {desc}
      </p>
    </Link>
  );
}

// ─── Static hero: poster image + headline + cards in document flow ─────────
// Used for: mobile viewports (<768px) and prefers-reduced-motion.
function StaticHero() {
  return (
    <>
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Poster image */}
        <img
          src="/descent-poster.webp"
          alt="Aerial view of Roatán, Bay Islands, Honduras"
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Darkening overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(155deg, rgba(1,64,81,0.78) 0%, rgba(1,64,81,0.55) 50%, rgba(1,64,81,0.82) 100%)',
        }} />

        {/* Headline content */}
        <div
          className="relative z-10 section-container flex-1 flex flex-col justify-center"
          style={{ paddingTop: 140, paddingBottom: 64 }}
        >
          <div style={{ maxWidth: 660 }}>
            <span style={{
              display: 'block',
              fontFamily: SANS,
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#789ead',
              marginBottom: 16,
            }}>
              Why Roatán, Why Now
            </span>
            <h1 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(34px, 4.5vw, 58px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.1,
              margin: '0 0 20px',
            }}>
              Discover Roatán<br />before everybody does.
            </h1>
            <p style={{
              fontFamily: SANS,
              fontSize: 14,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              margin: '0 0 32px',
              maxWidth: 540,
            }}>
              A simpler, small-island Caribbean lifestyle is becoming easier for U.S. buyers to reach,
              understand, and own. I help you choose the right location, project, and strategy —
              before the best parts of the island become obvious.
            </p>
            <CTARow />
          </div>
        </div>
      </section>

      {/* Start Here cards below the fold in normal document flow */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 40, paddingBottom: 40 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid sm:grid-cols-3 gap-3">
            {CARDS.map(c => <FrostCard key={c.href} {...c} />)}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Desktop scroll hero ──────────────────────────────────────────────────────
// Drives video.currentTime via a lerped rAF loop, scroll progress from Framer Motion.
// Only mounted when: window.innerWidth ≥ 768 AND !prefers-reduced-motion
// (or when FORCE_SCRUB_ON_MOBILE overrides both).
function DesktopScrollHero() {
  const outerRef   = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const rafRef     = useRef<number | null>(null);
  const lerpedRef  = useRef(0);      // lerped playhead (seconds)
  const canSeekRef = useRef(false);  // gates seeking until loadedmetadata/readyState≥2

  // TEST — REVERT LATER: ref for debug overlay DOM node (updated directly to avoid re-renders)
  const debugRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  // ── Headline block: opacity 1→0, drift up 0→-40px  (progress 0–0.35) ──────
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const headlineY       = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  // ── Scrim: bottom-weighted gradient fades in          (progress 0.55–1.0) ──
  const scrimOpacity = useTransform(scrollYProgress, [0.55, 1.0], [0, 1]);

  // ── Start Here cards: rise from +40px                (progress 0.62–1.0) ──
  const cardsOpacity = useTransform(scrollYProgress, [0.62, 1.0], [0, 1]);
  const cardsY       = useTransform(scrollYProgress, [0.62, 1.0], [40, 0]);

  // TEST — REVERT LATER: webkit-playsinline + iOS gesture unlock (independent of rAF loop)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // TEST — REVERT LATER: set webkit-playsinline for older iOS WebKit builds
    // (playsInline in JSX sets the W3C attribute; this covers the legacy webkit prefix)
    video.setAttribute('webkit-playsinline', '');

    // TEST — REVERT LATER: iOS silently refuses currentTime changes until the video has
    // been "unlocked" by a user gesture. One play/pause on first touch releases the lock.
    // This listener is COMPLETELY INDEPENDENT of the rAF loop — it does NOT gate it.
    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      video.play().then(() => video.pause()).catch(() => {});
    };
    document.addEventListener('touchstart', unlock, { passive: true });
    document.addEventListener('pointerdown', unlock);

    return () => {
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('pointerdown', unlock);
    };
  }, []);

  // ── rAF lerp loop: drives video playhead ─────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => { canSeekRef.current = true; };
    if (video.readyState >= 2) {
      markReady();
    } else {
      video.addEventListener('loadedmetadata', markReady, { once: true });
    }

    const tick = () => {
      if (canSeekRef.current && video.duration > 0) {
        const target = Math.max(
          0,
          Math.min(video.duration, scrollYProgress.get() * video.duration),
        );
        lerpedRef.current += (target - lerpedRef.current) * 0.1;
        video.currentTime = lerpedRef.current;

        // TEST — REVERT LATER: write debug values directly to DOM node (no re-render)
        if (FORCE_SCRUB_ON_MOBILE && debugRef.current) {
          debugRef.current.textContent =
            `prog ${scrollYProgress.get().toFixed(2)}  ·  target ${target.toFixed(2)}s  ·  actual ${video.currentTime.toFixed(2)}s`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  return (
    // Outer scroll section — 300vh gives the scroll distance
    <section ref={outerRef} style={{ height: '300vh', position: 'relative' }}>

      {/* Sticky stage — the fixed 100vh canvas everything renders into */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Full-bleed scrubbed video — no autoplay, playhead driven by scroll */}
        {/* TEST — REVERT LATER: added webkit-playsinline (set via setAttribute in useEffect) */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/descent-poster.webp"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src="/descent.mp4" type="video/mp4" />
        </video>

        {/* TEST — REVERT LATER: debug overlay — live scroll/seek values */}
        {FORCE_SCRUB_ON_MOBILE && (
          <div
            ref={debugRef}
            style={{
              position: 'fixed',
              top: 12,
              right: 12,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.72)',
              color: '#00ff88',
              fontFamily: 'monospace',
              fontSize: 11,
              lineHeight: 1.4,
              padding: '6px 10px',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              borderRadius: 3,
            }}
          >
            waiting for seek…
          </div>
        )}

        {/* ── Scrim ──────────────────────────────────────────────────────────
            Bottom-weighted gradient, fades in over progress 0.55–1.0.
            Keeps Start Here cards legible against the reef footage.          */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 30%, rgba(1,64,81,0.55) 100%)',
            opacity: scrimOpacity,
            pointerEvents: 'none',
          }}
        />

        {/* ── Headline block ─────────────────────────────────────────────────
            Eyebrow + h1 + subhead + CTAs.
            Fades out and drifts up over progress 0–0.35.                     */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            opacity: headlineOpacity,
            y: headlineY,
          }}
        >
          <div className="section-container" style={{ maxWidth: 760 }}>
            <span style={{
              display: 'block',
              fontFamily: SANS,
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#789ead',
              marginBottom: 16,
            }}>
              Why Roatán, Why Now
            </span>
            <h1 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.06,
              margin: '0 0 24px',
            }}>
              Discover Roatán<br />before everybody does.
            </h1>
            <p style={{
              fontFamily: SANS,
              fontSize: 15,
              color: 'rgba(255,255,255,0.70)',
              lineHeight: 1.75,
              margin: '0 0 36px',
              maxWidth: 560,
            }}>
              A simpler, small-island Caribbean lifestyle is becoming easier for U.S. buyers to
              reach, understand, and own. I help you choose the right location, project, and
              strategy — before the best parts of the island become obvious.
            </p>
            <CTARow />
          </div>
        </motion.div>

        {/* ── Start Here cards ───────────────────────────────────────────────
            Frosted-glass row pinned to the bottom of the sticky stage.
            Rises from +40px into position over progress 0.62–1.0.            */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            opacity: cardsOpacity,
            y: cardsY,
          }}
        >
          <div className="section-container" style={{ maxWidth: 1100, paddingBottom: 52 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {CARDS.map(c => <FrostCard key={c.href} {...c} />)}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Entry point ──────────────────────────────────────────────────────────────
// SSR always renders StaticHero (safe default).
// After mount, upgrades to DesktopScrollHero if: viewport ≥ 768px AND
// the user has not enabled prefers-reduced-motion.
// TEST — REVERT LATER: FORCE_SCRUB_ON_MOBILE skips both checks when true.
export default function HeroDescent() {
  const [eligible, setEligible] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    // TEST — REVERT LATER: bypasses viewport + reduced-motion gate entirely
    if (FORCE_SCRUB_ON_MOBILE) {
      setEligible(true);
      setMounted(true);
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEligible(!reduced && window.innerWidth >= 768);
    setMounted(true);
  }, []);

  if (!mounted || !eligible) return <StaticHero />;
  return <DesktopScrollHero />;
}
