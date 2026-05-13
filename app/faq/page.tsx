import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'Roatán Real Estate FAQ — Common Buyer Questions Answered',
  description: 'Answers to the most common questions about buying, investing, and living in Roatán, Honduras — foreign ownership, the buying process, closing costs, financing, and neighborhood selection. Tomás Figueroa, Keller Williams Roatán.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/faq' },
  openGraph: {
    title: 'Roatán Real Estate FAQ — Common Buyer Questions Answered',
    description: 'Answers to the most common questions about buying, investing, and living in Roatán, Honduras — foreign ownership, the buying process, closing costs, and financing.',
    url: 'https://www.tomasfigueroa.com/faq',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: 'Roatán Real Estate FAQ' }],
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
