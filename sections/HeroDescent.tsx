'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, useMotionValueEvent, motion, type MotionValue } from 'framer-motion';
import { openBriefingModal } from '@/lib/analytics';

// ─── Font aliases (CSS vars injected by layout.tsx) ──────────────────────────
const SERIF = 'var(--font-garamond), Georgia, "Times New Roman", serif';
const SANS  = 'var(--font-inter), Arial, Helvetica, sans-serif';

// ─── Frame sequence ───────────────────────────────────────────────────────────
const TOTAL_FRAMES = 121;

function frameUrl(i: number): string {
  return `/hero/frames/frame_${String(i).padStart(4, '0')}.webp`;
}

// Cover-fit draw in CSS-pixel space.
// ctx must already have ctx.scale(dpr,dpr) applied so that drawImage
// coordinates are in logical CSS px, not physical device px.
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
    desc:  'Everything Americans need before buying — legal framework, process, and due diligence.',
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

// ─── CTA row — used in both surface and underwater stacks ─────────────────────
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
        padding: '16px 18px',
        background: 'rgba(255,255,255,0.09)',
        border: '0.5px solid rgba(255,255,255,0.2)',
        borderRadius: 12,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        textDecoration: 'none',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.09)')}
    >
      <span style={{
        display: 'block',
        fontFamily: SANS,
        fontSize: 9,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: '#789ead',
        marginBottom: 8,
      }}>
        {label}
      </span>
      <h3 style={{
        fontFamily: SERIF,
        fontSize: 17,
        fontWeight: 400,
        color: '#ffffff',
        margin: '0 0 8px',
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

// ─── Static hero (reduced-motion / no-JS fallback) ───────────────────────────
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
  const outerRef          = useRef<HTMLElement>(null);
  const stageRef          = useRef<HTMLDivElement>(null);
  const canvasRef         = useRef<HTMLCanvasElement>(null);
  const debugRef          = useRef<HTMLDivElement>(null);
  const surfaceRef        = useRef<HTMLDivElement>(null);
  const imagesRef         = useRef<HTMLImageElement[]>([]);
  const loadedRef         = useRef<boolean[]>([]);
  const lastDrawnIndexRef = useRef(-1);
  const cssSizeRef        = useRef({ w: 0, h: 0 });

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  // Surface opacity: 1 → 0 over 0.00–0.30; clamped at 0 thereafter (never reverses)
  const surfaceOpacity = useTransform(scrollYProgress, [0, 0.30], [1, 0]);

  // Underwater stack: 0 → 1 over 0.30–0.36; clamped at 1 thereafter
  const underOpacity   = useTransform(scrollYProgress, [0.30, 0.36], [0, 1]);

  // ── Scrim: bottom-weighted, fades in 0.50–0.85 ───────────────────────────
  const scrimOpacity       = useTransform(scrollYProgress, [0.50, 0.85], [0, 1]);

  // ── Underwater buttons: fade in 0.38–0.50 ────────────────────────────────
  const btnOpacity         = useTransform(scrollYProgress, [0.38, 0.50], [0, 1]);

  // ── Cards: fade + rise 0.72–1.0 ──────────────────────────────────────────
  const cardsOpacity       = useTransform(scrollYProgress, [0.72, 1.0], [0, 1]);
  const cardsY             = useTransform(scrollYProgress, [0.72, 1.0], [40, 0]);

  // ── Per-letter fill: 0.40–0.74, 2-slot window per letter ─────────────────
  const PHRASE     = "Let's start here";
  const LETTERS    = PHRASE.split('');
  const FILL_START = 0.40;
  const FILL_END   = 0.74;
  const PER_SLOT   = (FILL_END - FILL_START) / LETTERS.length;

  // ── Canvas sizing — useLayoutEffect fires before paint ───────────────────
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const stage  = stageRef.current;
    if (!canvas || !stage) return;

    const applySize = () => {
      const dpr  = window.devicePixelRatio || 1;
      const w    = stage.clientWidth;
      const h    = stage.clientHeight;
      if (!w || !h) return;

      const physW = Math.round(w * dpr);
      const physH = Math.round(h * dpr);
      if (canvas.width === physW && canvas.height === physH) return;

      cssSizeRef.current = { w, h };
      canvas.width  = physW;
      canvas.height = physH;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const idx = nearestLoaded(Math.max(0, lastDrawnIndexRef.current), loadedRef.current);
      if (idx >= 0) drawFrame(ctx, w, h, imagesRef.current[idx]);
    };

    applySize();
    const ro = new ResizeObserver(applySize);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  // ── Frame preload ─────────────────────────────────────────────────────────
  useEffect(() => {
    const imgs: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, () => new Image());
    const loaded = new Array<boolean>(TOTAL_FRAMES).fill(false);
    imagesRef.current = imgs;
    loadedRef.current = loaded;

    let nLoaded = 0;
    let nFailed = 0;

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
      const frameNum = idx + 1;
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

        if (idx === 0 && lastDrawnIndexRef.current < 0) {
          drawFrame(ctx, w, h, img);
          lastDrawnIndexRef.current = 0;
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

  // ── Scroll → canvas redraw + pointer-events ──────────────────────────────
  // pointer-events is driven via direct DOM ref — never as a string MotionValue,
  // which can corrupt the numeric transform pipeline in Framer Motion 12.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Surface pointer-events: off at 0.30 so underwater buttons are reachable
    if (surfaceRef.current) {
      surfaceRef.current.style.pointerEvents = v >= 0.30 ? 'none' : 'auto';
    }

    const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(v * (TOTAL_FRAMES - 1))));

    if (debugRef.current) {
      debugRef.current.textContent = `scroll ${v.toFixed(3)}  frame ${idx + 1}/${TOTAL_FRAMES}`;
    }

    if (idx === lastDrawnIndexRef.current) return;

    const canvas = canvasRef.current;
    const { w, h } = cssSizeRef.current;
    if (!canvas || !w || !h) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const actual = nearestLoaded(idx, loadedRef.current);
    if (actual < 0) return;
    drawFrame(ctx, w, h, imagesRef.current[actual]);
    lastDrawnIndexRef.current = idx;
  });

  return (
    <section ref={outerRef} style={{ height: '300vh', position: 'relative' }}>

      <div ref={stageRef} style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Poster safety net — visible through transparent canvas until frame 0 loads */}
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

        {/* Canvas — CSS 100%×100%; physical size = CSS × dpr */}
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

        {/* DEBUG — remove once scroll + frames confirmed working */}
        <div
          ref={debugRef}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.65)',
            color: '#fff',
            padding: '5px 10px',
            fontFamily: 'monospace',
            fontSize: 12,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          scroll 0.000  frame 1/121
        </div>

        {/* Scrim: bottom-weighted gradient, fades in 0.50–0.85 */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, rgba(1,64,81,0.65) 100%)',
            opacity: scrimOpacity,
            pointerEvents: 'none',
          }}
        />

        {/* ── SURFACE STACK ────────────────────────────────────────────────── */}
        {/* opacity 1→0 over 0–0.30, clamped at 0; pointer-events via DOM ref */}
        <motion.div
          ref={surfaceRef}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            opacity: surfaceOpacity,
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

        {/* ── UNDERWATER STACK ─────────────────────────────────────────────── */}
        {/* Opacity 0→1 over 0.30–0.36; same left offset as surface stack      */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            opacity: underOpacity,
          }}
        >
          <div className="section-container" style={{ maxWidth: 760 }}>
            {/* Invisible eyebrow spacer — keeps H2 vertically aligned with surface H1 */}
            <span
              aria-hidden="true"
              style={{
                display: 'block',
                fontSize: 10,
                marginBottom: 16,
                visibility: 'hidden',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              Why Roatán, Why Now
            </span>

            {/* "Let's start here" — per-letter fill 0.40–0.74 */}
            <h2 style={{
              fontFamily: SERIF,
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.06,
              margin: '0 0 32px',
              whiteSpace: 'nowrap',
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

            {/* Buttons — fade in 0.38–0.50 */}
            <motion.div style={{ opacity: btnOpacity, marginBottom: 40 }}>
              <CTARow />
            </motion.div>

            {/* Cards — fade + rise 0.72–1.0 */}
            <motion.div style={{ opacity: cardsOpacity, y: cardsY }}>
              <div className="grid sm:grid-cols-3 gap-3">
                {CARDS.map(c => <FrostCard key={c.href} {...c} />)}
              </div>
            </motion.div>
          </div>
        </motion.div>

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
