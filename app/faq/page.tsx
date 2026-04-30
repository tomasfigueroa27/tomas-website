import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'Roatan Real Estate FAQ',
  description: 'Common questions about buying, investing, and living in Roatan, Honduras — answered by a local expert. Covers legal ownership, the buying process, financing, neighborhoods, and more.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/faq' },
};

export default function FAQPage() {
  return <FaqContent />;
}
