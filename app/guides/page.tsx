import type { Metadata } from 'next';
import GuidesContent from './GuidesContent';

export const metadata: Metadata = {
  title: "Roatan Real Estate Buyer's Guide",
  description: "Free buyer's guide to purchasing property in Roatan, Honduras. Covers legal ownership for foreigners, the 5-step purchase process, due diligence, closing timelines, and common mistakes to avoid.",
  alternates: { canonical: 'https://www.tomasfigueroa.com/guides' },
};

export default function GuidesPage() {
  return <GuidesContent />;
}
