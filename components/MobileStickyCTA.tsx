'use client';

import Link from 'next/link';
import { trackSchedule, openSavvyCal } from '@/lib/analytics';

export default function MobileStickyCTA() {
  return (
    <div
      className="lg:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        backgroundColor: '#093f4f',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        display: 'flex',
        gap: 8,
        alignItems: 'stretch',
        padding: '10px 16px',
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
      }}
    >
      <button
        onClick={() => { trackSchedule(); openSavvyCal(); }}
        style={{
          flex: 1,
          backgroundColor: '#789ead',
          color: '#ffffff',
          border: 'none',
          padding: '13px 12px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          cursor: 'pointer',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        Schedule a Strategy Call
      </button>
      <Link
        href="/us-buyers-guide-roatan"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.75)',
          textDecoration: 'none',
          padding: '13px 14px',
          border: '1px solid rgba(255,255,255,0.25)',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Start Here
      </Link>
    </div>
  );
}
