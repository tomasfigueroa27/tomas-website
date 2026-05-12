'use client';

import { trackSchedule, openSavvyCal } from '@/lib/analytics';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ScheduleButton({ className, style, children }: Props) {
  return (
    <button
      onClick={() => { trackSchedule(); openSavvyCal(); }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
