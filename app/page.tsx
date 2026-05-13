import type { Metadata } from 'next';
import Hero from '@/sections/Hero';
import StartHere from '@/sections/StartHere';
import LifestyleThesis from '@/sections/LifestyleThesis';
import WhereToBuy from '@/sections/WhereToBuy';
import WhyNow from '@/sections/WhyNow';
import HowToChoose from '@/sections/HowToChoose';
import HomeResources from '@/sections/HomeResources';
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
  name: 'Tomás Figueroa',
  jobTitle: 'Licensed Realtor',
  worksFor: { '@type': 'Organization', name: 'Keller Williams Roatán' },
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488483226',
  email: 'tomas@kwroatan.com',
  sameAs: [
    'https://www.linkedin.com/in/roatanbytomas/',
    'https://www.instagram.com/roatanbytomas/',
    'https://www.facebook.com/profile.php?id=61557310059412',
  ],
  areaServed: 'Roatán, Bay Islands, Honduras',
  knowsAbout: ['Roatán real estate', 'Caribbean property investment', 'Honduras property law', 'Bay Islands real estate'],
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Tomás Figueroa – Keller Williams Roatán',
  url: 'https://www.tomasfigueroa.com',
  telephone: '+50488483226',
  email: 'tomas@kwroatan.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roatán',
    addressRegion: 'Bay Islands',
    addressCountry: 'HN',
  },
  areaServed: 'Roatán, Bay Islands, Honduras',
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

      {/* 1. Hero */}
      <Hero />

      {/* 2. Start Here — three gateway cards */}
      <StartHere />

      {/* 3. Lifestyle thesis */}
      <LifestyleThesis />

      {/* 4. Where to Buy — lifestyle node preview */}
      <WhereToBuy />

      {/* 5. Why Now — five catalyst cards */}
      <WhyNow />

      {/* 6. How Tomás Helps */}
      <HowToChoose />

      {/* 7. Resources & Latest Insights */}
      <HomeResources />

      {/* 9. Final CTA */}
      <CTA />
    </>
  );
}
