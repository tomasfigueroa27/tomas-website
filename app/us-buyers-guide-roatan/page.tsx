import type { Metadata } from 'next';
import USBuyersGuideContent from './USBuyersGuideContent';

export const metadata: Metadata = {
  title: "U.S. Buyer's Guide to Roatán Real Estate",
  description:
    "Everything Americans need to understand before buying property in Roatán, Honduras — legal framework, buying process, due diligence, rentals, and pre-construction. Tomás Figueroa, Roatan Reef.",
  alternates: {
    canonical: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
  },
  openGraph: {
    title: "U.S. Buyer's Guide to Roatán Real Estate | Tomás Figueroa",
    description:
      "Everything Americans need to understand before buying property in Roatán, Honduras — legal framework, buying process, due diligence, rentals, and pre-construction.",
    url: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630, alt: "U.S. Buyer's Guide to Roatán Real Estate" }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: "U.S. Buyer's Guide to Roatán Real Estate",
      item: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can Americans buy property in Roatán, Honduras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Americans can own freehold property in Roatán with the same rights as Honduran citizens. The Bay Islands carry a constitutional designation that allows foreigners to own land within 40 kilometers of the coastline, making it one of the most accessible Caribbean markets for U.S. buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas should U.S. buyers compare when buying in Roatán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five main lifestyle nodes are: West Bay (premium beach, strongest vacation rental logic), West End (walkable village, diving culture), Sandy Bay (quiet hillside, reef access), Pristine Bay (gated resort, golf and marina), and French Harbour & East (emerging value, longer-horizon appreciation). Each area attracts a different buyer profile and price range.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the process for buying property in Roatán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical Roatán purchase moves through six stages: signed letter of intent, independent legal representation, title search and due diligence, purchase agreement (Promesa de Compraventa) with deposit, closing via notarial deed (Escritura Pública), and property registration. Standard timeline is 30–60 days from signed intent to closing, plus 30–60 additional days for title registration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What legal due diligence is required when buying in Roatán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key due diligence items include: confirming clean title at the Public Property Registry, verifying property boundaries match the registered survey, checking for outstanding taxes or municipal fees, reviewing HOA rules and rental permissions, and confirming building permits for existing structures. Budget 30–45 days and use an independent Honduran attorney — not the developer\'s recommended counsel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do vacation rentals work in Roatán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short-term vacation rentals are the dominant income model for Roatán investment properties. West Bay Beach is the strongest rental market, with well-managed units achieving 55–75% occupancy at $150–$350 per night. Underwrite conservatively: management fees run 20–35% of gross revenue, plus cleaning, HOA, maintenance, and seasonal vacancy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I know before buying pre-construction in Roatán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-construction offers entry-price upside but carries execution risk. Verify the developer has completed at least one prior project, confirm deposits are held in escrow, review contract specifications carefully, and budget 6–18 months beyond the published delivery timeline.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "The U.S. Buyer's Guide to Roatán Real Estate",
  description:
    "Everything Americans need to understand before buying property in Roatán, Honduras — legal framework, buying process, due diligence, rentals, and pre-construction. Tomás Figueroa, Roatan Reef.",
  url: 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
  datePublished: '2025-01-01',
  dateModified: '2026-05-12',
  author: {
    '@type': 'Person',
    name: 'Tomás Figueroa',
    url: 'https://www.tomasfigueroa.com/about',
    jobTitle: 'Licensed Realtor',
    worksFor: {
      '@type': 'Organization',
      name: 'Roatan Reef',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tomás Figueroa Real Estate',
    url: 'https://www.tomasfigueroa.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.tomasfigueroa.com/us-buyers-guide-roatan',
  },
};

export default function USBuyersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <USBuyersGuideContent />
    </>
  );
}
