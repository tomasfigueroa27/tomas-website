import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import InvestorBriefingModal from '@/components/InvestorBriefingModal';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';

const GA_ID = 'G-3YVFSNRZJ6';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.tomasfigueroa.com/#person',
      name: 'Tomas Figueroa',
      jobTitle: 'Real Estate Agent',
      url: 'https://www.tomasfigueroa.com',
      image: 'https://www.tomasfigueroa.com/tomas-about.jpg',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61557310059412',
        'https://www.instagram.com/roatanbytomas/',
        'https://www.linkedin.com/in/roatanbytomas/',
      ],
      worksFor: {
        '@type': 'RealEstateAgent',
        name: 'Keller Williams Roatan',
        url: 'https://www.tomasfigueroa.com',
      },
    },
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.tomasfigueroa.com/#business',
      name: 'Tomas Figueroa Real Estate',
      url: 'https://www.tomasfigueroa.com',
      telephone: '+50488483226',
      email: 'tomas@kwroatan.com',
      image: 'https://www.tomasfigueroa.com/logo-white.webp',
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
      '@id': 'https://www.tomasfigueroa.com/#localbusiness',
      name: 'Tomas Figueroa Real Estate',
      description:
        'Licensed real estate agent in Roatan, Honduras specializing in Caribbean property sales, investment properties, and new developments at Keller Williams Roatan.',
      url: 'https://www.tomasfigueroa.com',
      telephone: '+50488483226',
      email: 'tomas@kwroatan.com',
      image: 'https://www.tomasfigueroa.com/logo-white.webp',
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
  metadataBase: new URL('https://www.tomasfigueroa.com'),
  title: {
    default: 'Roatán Real Estate | Tomás Figueroa – Keller Williams Roatán',
    template: '%s | Tomás Figueroa – Keller Williams Roatán',
  },
  description:
    'Buy, sell, or invest in Roatán, Honduras real estate with Tomás Figueroa at Keller Williams Roatán. Expert guidance on Caribbean property, new developments, and investment opportunities in the Bay Islands.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'TF Roatán',
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tomasfigueroa.com',
    siteName: 'Tomas Figueroa – KW Roatan',
    title: 'Roatan Real Estate | Tomas Figueroa – KW Roatan',
    description: 'Strategic real estate guidance for investors and buyers considering property in Roatan, Honduras. Licensed Realtor at Keller Williams Roatan.',
    images: [{ url: 'https://www.tomasfigueroa.com/opengraph.jpg', width: 1200, height: 630, alt: 'Tomas Figueroa – Licensed Realtor, Keller Williams Roatan, Bay Islands Honduras' }],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#093f4f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1256106696544650');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://www.facebook.com/tr?id=1256106696544650&ev=PageView&noscript=1"
          />
        </noscript>
        <Script src="https://embed.savvycal.com/v1/embed.js" strategy="afterInteractive" />
        <ServiceWorkerRegister />
        <Header />
        <main>{children}</main>
        <Footer />
        <InvestorBriefingModal />
      </body>
    </html>
  );
}
