import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Tomás Figueroa — Licensed Realtor, Keller Williams Roatán',
  description: 'Tomás Figueroa is a licensed real estate agent at Keller Williams Roatán with 20+ years in international sales and 4 years on the ground in the Bay Islands. He helps U.S. buyers choose the right location, project, and strategy in Roatán, Honduras.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/about' },
  openGraph: {
    title: 'About Tomás Figueroa — Licensed Realtor, Keller Williams Roatán',
    description: 'Tomás Figueroa helps U.S. buyers choose the right location, project, and strategy in Roatán, Honduras. Licensed at Keller Williams Roatán with 20+ years in international sales.',
    url: 'https://www.tomasfigueroa.com/about',
    images: [{ url: '/tomas-about.jpg', width: 800, height: 1000, alt: 'Tomás Figueroa — Licensed Realtor, Keller Williams Roatán' }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
