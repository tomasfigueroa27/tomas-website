import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Tomas Figueroa | Roatan Real Estate Agent',
  description: 'Meet Tomas Figueroa, a trusted real estate agent in Roatan, Honduras at Keller Williams. Specializing in helping investors and relocators find the right Caribbean property.',
  alternates: { canonical: 'https://tomasfigueroa.com/about' },
  openGraph: { url: 'https://tomasfigueroa.com/about', images: [{ url: '/tomas-about.jpg' }] },
};

export default function AboutPage() {
  return <AboutContent />;
}
