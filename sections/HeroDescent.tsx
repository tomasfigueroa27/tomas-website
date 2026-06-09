'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';
import { openBriefingModal } from '@/lib/analytics';

// ─── Font aliases (CSS vars injected by layout.tsx) ──────────────────────────
const SERIF = 'var(--font-garamond), Georgia, "Times New Roman", serif';
const SANS  = 'var(--font-inter), Arial, Helvetica, sans-serif';

// ─── Frame sequence ───────────────────────────────────────────────────────────
const TOTAL_FRAMES = 121;

// i is 1-indexed (1..121) matching actual filenames frame_0001.webp…frame_0121.webp
function frameUrl(i: number): string {
  return `/hero/frames/frame_${String(i).padStart(4, '0')}.webp`;
}

// Cover-fit draw in CSS-pixel space.
// IMPORTANT: ctx must already have ctx.scale(dpr,dpr) applied so that drawImage
// coordinates are in logical CSS px, not physical device px.
// Guard: no-ops if canvas or image have zero dimensions.
function drawFrame(
  ctx: CanvasRenderingContext2D,
  cssW: number,
  cssH: number,
  img: HTMLImageElement,
): void {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  if (!cssW || !cssH || !iw || !ih) return;
  const scale = Math.max(cssW / iw, cssH / ih);
  const sw = iw * scale;
  const sh = ih * scale;
  ctx.clearRect(0, 0, cssW, cssH);
  ctx.drawImage(img, (cssW - sw) / 2, (cssH - sh) / 2, sw, sh);
}

// Walk outward from `index` to find the nearest frame that has finished loading.
// Returns -1 only if no frames are loaded at all yet.
function nearestLoaded(index: number, loaded: boolean[]): number {
  if (loaded[index]) return index;
  for (let d = 1; d < loaded.length; d++) {
    if (index - d >= 0 && loaded[index - d]) return index - d;
    if (index + d < loaded.length && loaded[index + d]) return index + d;
  }
  return -1;
}

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

// ─── Per-letter color fill ────────────────────────────────────────────────────
function AnimatedLetter({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(255,255,255,0.12)', '#ffffff'],
  );
  if (char === ' ') {
    return <span style={{ display: 'inline-block', width: '0.28em' }} aria-hidden="true" />;
  }
  return <motion.span style={{ color }}>{char}</motion.span>;
}

// ─── Static hero ─────────────────────────────────────────────────────────────
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
          src="/hero/descent-poster.webp"
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
function ScrollHero() {
  const outerRef     = useRef<HTMLElement>(null);
  const stageRef     = useRef<HTMLDivElement>(null);  // sticky container — ResizeObserver target
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const loadedRef    = useRef<boolean[]>([]);
  const rafRef       = useRef<number | null>(null);
  const lerpedRef    = useRef(0);                    // lerped float frame index
  const lastDrawnRef = useRef(-1);                   // actual index last drawn (-1 = none yet)
  const cssSizeRef   = useRef({ w: 0, h: 0 });      // logical CSS-px dimensions

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  // ── Overlay MotionValues (unchanged) ─────────────────────────────────────
  const aboveOpacity     = useTransform(scrollYProgress, [0, 0.30], [1, 0]);
  const aboveY           = useTransform(scrollYProgress, [0, 0.30], [0, -40]);
  const scrimOpacity     = useTransform(scrollYProgress, [0.50, 0.85], [0, 1]);
  const underHeadOpacity = useTransform(scrollYProgress, [0.28, 0.36], [0, 1]);
  const cardsOpacity     = useTransform(scrollYProgress, [0.72, 1.0], [0, 1]);
  const cardsY           = useTransform(scrollYProgress, [0.72, 1.0], [40, 0]);

  const PHRASE     = "Let's start here";
  const LETTERS    = PHRASE.split('');
  const FILL_START = 0.36;
  const FILL_END   = 0.74;
  const PER_SLOT   = (FILL_END - FILL_START) / LETTERS.length;

  // ── Canvas sizing — useLayoutEffect fires before paint ───────────────────
  // Sets physical px = CSS px × dpr, applies ctx.scale(dpr,dpr) so that all
  // subsequent drawImage calls use logical CSS-pixel coordinates.
  // A ResizeObserver on the stage keeps this in sync through orientation changes
  // and browser-chrome show/hide on mobile.
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const stage  = stageRef.current;
    if (!canvas || !stage) return;

    const applySize = () => {
      const dpr  = window.devicePixelRatio || 1;
      const w    = stage.clientWidth;
      const h    = stage.clientHeight;
      if (!w || !h) return;                         // stage not yet laid out — skip

      const physW = Math.round(w * dpr);
      const physH = Math.round(h * dpr);

      // Only reset if dimensions actually changed; avoids clearing canvas on every
      // ResizeObserver callback when nothing moved.
      if (canvas.width === physW && canvas.height === physH) return;

      cssSizeRef.current = { w, h };
      canvas.width  = physW;   // resets canvas state (clears + identity transform)
      canvas.height = physH;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      // canvas.width assignment already reset to identity; re-apply dpr scale
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Redraw current frame immediately so nothing goes blank on resize
      const idx = nearestLoaded(Math.max(0, lastDrawnRef.current), loadedRef.current);
      if (idx >= 0) drawFrame(ctx, w, h, imagesRef.current[idx]);
    };

    applySize();
    const ro = new ResizeObserver(applySize);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  // ── Frame preload with diagnostic logging ────────────────────────────────
  useEffect(() => {
    const imgs: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, () => new Image());
    const loaded = new Array<boolean>(TOTAL_FRAMES).fill(false);
    imagesRef.current = imgs;
    loadedRef.current = loaded;

    let nLoaded = 0;
    let nFailed = 0;

    // Immediate log so we can verify the path without waiting for loads
    console.log(
      '[HeroDescent] Preloading', TOTAL_FRAMES, 'frames.',
      'Frame 1 resolved URL:', new URL(frameUrl(1), window.location.href).href,
    );

    const reportSettled = () => {
      console.log(
        `[HeroDescent] Settled — attempted: ${TOTAL_FRAMES},`,
        `loaded: ${nLoaded}, failed: ${nFailed}`,
      );
    };

    imgs.forEach((img, idx) => {
      const frameNum = idx + 1;  // array is 0-indexed; filenames are 1-indexed
      const src = frameUrl(frameNum);

      img.onload = () => {
        loaded[idx] = true;
        nLoaded++;
        if (nLoaded + nFailed === TOTAL_FRAMES) reportSettled();

        const canvas = canvasRef.current;
        const { w, h } = cssSizeRef.current;
        if (!canvas || !w || !h) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Paint frame 0 the instant it arrives — canvas must never stay blank
        if (idx === 0 && lastDrawnRef.current < 0) {
          drawFrame(ctx, w, h, img);
          lastDrawnRef.current = 0;
          return;
        }

        // If this frame matches the current scrub target, upgrade the draw
        // (covers the case where the user scrolled before this frame finished loading)
        const want = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(lerpedRef.current)));
        if (idx === want && idx !== lastDrawnRef.current) {
          drawFrame(ctx, w, h, img);
          lastDrawnRef.current = idx;
        }
      };

      img.onerror = () => {
        nFailed++;
        console.error('[HeroDescent] Frame failed to load:', src);
        if (nLoaded + nFailed === TOTAL_FRAMES) reportSettled();
      };

      img.src = src;
    });
  }, []);

  // ── rAF scrub loop ────────────────────────────────────────────────────────
  // Maps scrollYProgress → lerped float index → nearest loaded frame.
  // Guards against zero-size canvas. Only redraws when the drawn frame changes.
  useEffect(() => {
    const tick = () => {
      const canvas = canvasRef.current;
      const { w, h } = cssSizeRef.current;
      if (canvas && w && h) {
        const target = scrollYProgress.get() * (TOTAL_FRAMES - 1);
        lerpedRef.current += (target - lerpedRef.current) * 0.1;
        const want = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(lerpedRef.current)));
        const idx  = nearestLoaded(want, loadedRef.current);
        if (idx >= 0 && idx !== lastDrawnRef.current) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            drawFrame(ctx, w, h, imagesRef.current[idx]);
            lastDrawnRef.current = idx;
          }
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
    <section ref={outerRef} style={{ height: '300vh', position: 'relative' }}>

      {/* stageRef lives here so ResizeObserver tracks the sticky container */}
      <div ref={stageRef} style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Poster safety net — CSS background shows through the canvas (which is
            fully transparent until frame 0 is drawn). background-size:cover mirrors
            the canvas cover-fit so there is no visible jump when frame 0 paints. */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero/descent-poster.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Canvas — CSS size always 100%×100%; physical size = CSS × dpr (set above).
            drawImage coordinates are in logical CSS px because ctx.scale(dpr,dpr)
            is applied on every size change. */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />

        {/* ── Scrim: bottom-weighted gradient, fades in 0.50–0.85 ──────────── */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 30%, rgba(1,64,81,0.65) 100%)',
            opacity: scrimOpacity,
            pointerEvents: 'none',
          }}
        />

        {/* ── Surface state: eyebrow + H1 + subhead + CTAs ─────────────────── */}
        {/* Fully faded out (opacity 0) by scrollYProgress 0.30 */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            opacity: aboveOpacity,
            y: aboveY,
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

        {/* ── Underwater state: headline + cards, vertically centered ─────── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          padding: '0 24px',
        }}>

          {/* "Let's start here" — ghost letters fade in 0.28→0.36, fill 0.36→0.74 */}
          <motion.div
            style={{ opacity: underHeadOpacity, textAlign: 'center' }}
            aria-hidden="true"
          >
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(38px, 5.5vw, 72px)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              margin: 0,
            }}>
              {LETTERS.map((char, i) => (
                <AnimatedLetter
                  key={i}
                  char={char}
                  scrollYProgress={scrollYProgress}
                  start={FILL_START + i * PER_SLOT}
                  end={Math.min(FILL_END, FILL_START + (i + 2) * PER_SLOT)}
                />
              ))}
            </h2>
          </motion.div>

          {/* Start Here cards — rise in 0.72→1.0 */}
          <motion.div style={{
            opacity: cardsOpacity,
            y: cardsY,
            width: '100%',
            maxWidth: 920,
          }}>
            <div className="grid sm:grid-cols-3 gap-3">
              {CARDS.map(c => <FrostCard key={c.href} {...c} />)}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// ─── Entry point ──────────────────────────────────────────────────────────────
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
