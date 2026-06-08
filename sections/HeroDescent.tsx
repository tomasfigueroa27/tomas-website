'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'framer-motion';
import { openBriefingModal } from '@/lib/analytics';

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

// ─── CTA row ─────────────────────────────────────────────────────────────────
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

// ─── Frosted-glass card ───────────────────────────────────────────────────────
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

// ─── Static hero ─────────────────────────────────────────────────────────────
// Rendered only for prefers-reduced-motion users. All other viewports,
// including mobile, receive the scroll hero below.
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
        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(155deg, rgba(1,64,81,0.78) 0%, rgba(1,64,81,0.55) 50%, rgba(1,64,81,0.82) 100%)',
        }} />
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
              A simpler, small-island Caribbean lifestyle is becoming easier for U.S. buyers to
              reach, understand, and own. I help you choose the right location, project, and
              strategy — before the best parts of the island become obvious.
            </p>
            <CTARow />
          </div>
        </div>
      </section>

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

// ─── Scroll hero ──────────────────────────────────────────────────────────────
// All viewports (mobile + desktop), no prefers-reduced-motion.
// Drives video.currentTime from scrollYProgress via a lerped rAF loop.
function ScrollHero() {
  const outerRef    = useRef<HTMLElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const posterRef   = useRef<HTMLImageElement>(null);
  const rafRef      = useRef<number | null>(null);
  const lerpedRef   = useRef(0);      // lerped playhead in seconds
  const isReadyRef  = useRef(false);  // true once video is genuinely seekable
  const durationRef = useRef(0);      // cached finite duration

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  // ── Overlay MotionValues ──────────────────────────────────────────────────
  // Headline: opacity 1→0, drift up 0→−40px   (progress 0–0.35)
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const headlineY       = useTransform(scrollYProgress, [0, 0.35], [0, -40]);
  // Scrim: bottom gradient fades in            (progress 0.55–1.0)
  const scrimOpacity    = useTransform(scrollYProgress, [0.55, 1.0], [0, 1]);
  // Cards: rise from +40px                     (progress 0.62–1.0)
  const cardsOpacity    = useTransform(scrollYProgress, [0.62, 1.0], [0, 1]);
  const cardsY          = useTransform(scrollYProgress, [0.62, 1.0], [40, 0]);

  // ── Video setup: readiness, poster crossfade, iOS unlock ─────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // webkit-playsinline for older iOS WebKit (playsInline covers the W3C attribute)
    video.setAttribute('webkit-playsinline', '');

    // Force a fresh load pass; works in tandem with preload="auto"
    video.load();

    // isReady becomes true only when the video is genuinely seekable:
    // readyState ≥ 2 ensures data is available, and we guard against
    // NaN/Infinity duration that Chrome/Safari can briefly report.
    const checkReady = () => {
      const dur = video.duration;
      if (video.readyState >= 2 && isFinite(dur) && dur > 0) {
        isReadyRef.current = true;
        durationRef.current = dur;
      }
    };
    checkReady(); // may already be satisfied for a cached resource
    video.addEventListener('loadedmetadata', checkReady);
    video.addEventListener('canplay', checkReady);
    video.addEventListener('durationchange', checkReady);

    // Poster crossfade — the <img> covers the blank video surface at opacity 1.
    // We fade it to 0 (300ms CSS transition) only after confirming a real frame
    // has been painted, so we never flash a blank canvas underneath.
    //
    // Sequence:
    //   1. 'seeked' fires after the first successful video.currentTime assignment.
    //   2a. If requestVideoFrameCallback is available (Chrome / Safari ≥15.4):
    //       wait one more step for the compositor to actually paint that frame,
    //       then crossfade. Eliminates any risk of fading to a blank frame.
    //   2b. Otherwise 'seeked' is accurate enough — crossfade immediately.
    //
    // On iOS before the gesture unlock, video.currentTime is silently rejected,
    // so 'seeked' won't fire. The poster stays up (correct image) until the first
    // touch, at which point the unlock fires, currentTime starts working, 'seeked'
    // fires, and the crossfade runs.
    let hasFaded = false;
    const doFade = () => {
      if (hasFaded) return;
      hasFaded = true;
      if (posterRef.current) posterRef.current.style.opacity = '0';
    };
    const onFirstSeeked = () => {
      if ('requestVideoFrameCallback' in video) {
        (video as HTMLVideoElement & {
          requestVideoFrameCallback: (cb: () => void) => number;
        }).requestVideoFrameCallback(doFade);
      } else {
        doFade();
      }
    };
    video.addEventListener('seeked', onFirstSeeked, { once: true });

    // iOS gesture unlock — independent of the rAF loop; does NOT gate it.
    // iOS refuses video.currentTime changes until the element is "unlocked" by
    // a user gesture. One play/pause sequence on first touch releases the lock.
    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      video.play().then(() => video.pause()).catch(() => {});
    };
    document.addEventListener('touchstart', unlock, { passive: true });
    document.addEventListener('pointerdown', unlock);

    return () => {
      video.removeEventListener('loadedmetadata', checkReady);
      video.removeEventListener('canplay', checkReady);
      video.removeEventListener('durationchange', checkReady);
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('pointerdown', unlock);
    };
  }, []);

  // ── rAF lerp loop ─────────────────────────────────────────────────────────
  // Starts on mount, runs every frame. The loop itself is never gated — only
  // the currentTime assignment waits for isReadyRef. While !isReady the poster
  // stays visible; once ready, the lerp drives the playhead smoothly.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      if (isReadyRef.current && durationRef.current > 0) {
        const target = Math.max(
          0,
          Math.min(durationRef.current, scrollYProgress.get() * durationRef.current),
        );
        lerpedRef.current += (target - lerpedRef.current) * 0.1;
        video.currentTime = lerpedRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  return (
    // Outer section — 300vh provides the scroll travel distance
    <section ref={outerRef} style={{ height: '300vh', position: 'relative' }}>

      {/* Sticky stage — 100vh canvas; all layers render inside here */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Full-bleed video — muted, playsInline, no autoplay */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
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

        {/* Poster layer — sits above the video in DOM order (no z-index needed).
            Starts at opacity 1; fades to 0 via 300ms CSS transition once the
            first video frame is confirmed painted (see onFirstSeeked above).
            Eliminates the white-flash iOS shows before any frame is rendered. */}
        <img
          ref={posterRef}
          src="/descent-poster.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 300ms ease',
          }}
        />

        {/* ── Scrim: bottom-weighted gradient, fades in over 0.55–1.0 ─────── */}
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

        {/* ── Headline + CTAs: fades/drifts out over 0–0.35 ──────────────── */}
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

        {/* ── Start Here cards: rises from +40px over 0.62–1.0 ────────────── */}
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
// SSR renders StaticHero (no JS, safe default).
// On mount: all viewports upgrade to ScrollHero unless prefers-reduced-motion.
export default function HeroDescent() {
  const [eligible, setEligible] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEligible(!reduced);
    setMounted(true);
  }, []);

  if (!mounted || !eligible) return <StaticHero />;
  return <ScrollHero />;
}
