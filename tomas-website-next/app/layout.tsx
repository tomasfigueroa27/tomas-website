import type { Metadata } from 'next';
import { Roboto, Roboto_Slab } from 'next/font/google';
import './globals.css';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const robotoSlab = Roboto_Slab({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://tomasfigueroa.com/#person',
      name: 'Tomas Figueroa',
      jobTitle: 'Real Estate Agent',
      url: 'https://tomasfigueroa.com',
      image: 'https://tomasfigueroa.com/tomas-about.jpg',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61557310059412',
        'https://www.instagram.com/roatanbytomas/',
        'https://www.linkedin.com/in/roatanbytomas/',
      ],
      worksFor: {
        '@type': 'RealEstateAgent',
        name: 'Keller Williams Roatan',
        url: 'https://tomasfigueroa.com',
      },
    },
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://tomasfigueroa.com/#business',
      name: 'Tomas Figueroa Real Estate',
      url: 'https://tomasfigueroa.com',
      telephone: '+50488488326',
      email: 'tomas@kwroatan.com',
      image: 'https://tomasfigueroa.com/logo-blue.webp',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lawson Rock, Sandy Bay',
        addressLocality: 'Roatan',
        addressRegion: 'Bay Islands',
        addressCountry: 'HN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 16.3279,
        longitude: -86.5358,
      },
      areaServed: { '@type': 'Place', name: 'Roatan, Bay Islands, Honduras' },
      priceRange: '$$',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://tomasfigueroa.com/#localbusiness',
      name: 'Tomas Figueroa Real Estate',
      description:
        'Licensed real estate agent in Roatan, Honduras specializing in Caribbean property sales, investment properties, and new developments at Keller Williams Roatan.',
      url: 'https://tomasfigueroa.com',
      telephone: '+50488488326',
      email: 'tomas@kwroatan.com',
      image: 'https://tomasfigueroa.com/logo-blue.webp',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lawson Rock, Sandy Bay',
        addressLocality: 'Roatan',
        addressRegion: 'Bay Islands',
        addressCountry: 'HN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 16.3279,
        longitude: -86.5358,
      },
      openingHours: 'Mo-Su 08:00-18:00',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Wire Transfer',
      areaServed: { '@type': 'Place', name: 'Roatan, Bay Islands, Honduras' },
      hasMap: 'https://maps.google.com/?q=Roatan,+Bay+Islands,+Honduras',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61557310059412',
        'https://www.instagram.com/roatanbytomas/',
        'https://www.linkedin.com/in/roatanbytomas/',
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tomasfigueroa.com'),
  title: {
    default: 'Roatan Real Estate | Tomas Figueroa – KW Roatan',
    template: '%s | Tomas Figueroa – KW Roatan',
  },
  description:
    'Buy, sell, or invest in Roatan, Honduras real estate with Tomas Figueroa at Keller Williams Roatan. Expert guidance on Caribbean property, new developments, and investment opportunities.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tomasfigueroa.com',
    siteName: 'Tomas Figueroa Real Estate',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
