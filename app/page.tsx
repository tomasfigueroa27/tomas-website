import type { Metadata } from 'next';
import Hero from '@/sections/Hero';
import LifestyleThesis from '@/sections/LifestyleThesis';
import WhyNow from '@/sections/WhyNow';
import StatStrip from '@/sections/StatStrip';
import WhereToBuy from '@/sections/WhereToBuy';
import HowToChoose from '@/sections/HowToChoose';
import ActiveDevelopments from '@/sections/ActiveDevelopments';
import HomeAbout from '@/sections/HomeAbout';
import Newsletter from '@/sections/Newsletter';
import CTA from '@/sections/CTA';

export const metadata: Metadata = {
  title: 'Discover Roatán Before Everybody Does — Tomás Figueroa Real Estate',
  description:
    "Roatán's quietest premium Caribbean market is becoming easier for U.S. buyers to understand. Strategic guidance on lifestyle, location, project selection, and timing — before the best parts of the island become obvious. Tomás Figueroa, Keller Williams Roatán.",
  alternates: {
    canonical: 'https://www.tomasfigueroa.com/',
  },
  openGraph: {
    title: 'Discover Roatán Before Everybody Does — Tomás Figueroa Real Estate',
    description:
      "Roatán's quietest premium Caribbean market is becoming easier for U.S. buyers to understand. Strategic guidance on lifestyle, location, project selection, and timing — before the best parts of the island become obvious. Tomás Figueroa, Keller Williams Roatán.",
    url: 'https://www.tomasfigueroa.com/',
    images: [{ url: '/tomas-about.jpg', width: 800, height: 1000 }],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.tomasfigueroa.com/#person',
  name: 'Tomas Figueroa',
  jobTitle: 'Licensed Realtor',
  worksFor: { '@type': 'Organization', name: 'Keller Williams Roatan' },
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488483226',
  email: 'tomas@kwroatan.com',
  sameAs: [
    'https://www.linkedin.com/in/roatanbytomas/',
    'https://www.instagram.com/roatanbytomas/',
    'https://www.facebook.com/profile.php?id=61557310059412',
  ],
  areaServed: 'Roatan, Bay Islands, Honduras',
  knowsAbout: ['Roatan real estate', 'Caribbean property investment', 'Honduras property law', 'Bay Islands real estate'],
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Tomas Figueroa – KW Roatan',
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488483226',
  email: 'tomas@kwroatan.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roatan',
    addressRegion: 'Bay Islands',
    addressCountry: 'HN',
  },
  areaServed: 'Roatan, Bay Islands, Honduras',
  priceRange: '$150,000 – $2,000,000+',
  sameAs: [
    'https://www.linkedin.com/in/roatanbytomas/',
    'https://www.instagram.com/roatanbytomas/',
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <Hero />
      <LifestyleThesis />
      <WhyNow />
      <StatStrip />
      <WhereToBuy />
      <HowToChoose />
      <ActiveDevelopments />
      <HomeAbout />

      <Newsletter />
      <CTA />
    </>
  );
}
