import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Newsletter from './sections/Newsletter';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import HomeAbout from './sections/HomeAbout';
import About from './pages/About';
import NewDevelopments from './pages/NewDevelopments';
import Resources from './pages/Resources';
import Guides from './pages/Guides';
import SEO from './components/SEO';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Neighborhoods from './pages/Neighborhoods';
import NeighborhoodDetail from './pages/NeighborhoodDetail';
import RoatanMarket from './pages/RoatanMarket';
import PropertiesPage from './pages/PropertiesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
      areaServed: {
        '@type': 'Place',
        name: 'Roatan, Bay Islands, Honduras',
      },
      priceRange: '$$',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://tomasfigueroa.com/#localbusiness',
      name: 'Tomas Figueroa Real Estate',
      description: 'Licensed real estate agent in Roatan, Honduras specializing in Caribbean property sales, investment properties, and new developments at Keller Williams Roatan.',
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
      areaServed: {
        '@type': 'Place',
        name: 'Roatan, Bay Islands, Honduras',
      },
      hasMap: 'https://maps.google.com/?q=Roatan,+Bay+Islands,+Honduras',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61557310059412',
        'https://www.instagram.com/roatanbytomas/',
        'https://www.linkedin.com/in/roatanbytomas/',
      ],
    },
  ],
};

const homeFaqs = [
  {
    q: 'Can foreigners buy property in Roatan?',
    a: 'Yes. Honduras law grants foreigners the same ownership rights as Honduran citizens. You can hold title directly in your name with no restrictions, no local partner required, and no limit on the percentage of the property you can own.',
  },
  {
    q: 'Is Roatan a good real estate investment?',
    a: 'Roatan offers a compelling combination: 100% foreign ownership, 6–8% average rental yields in top areas, 5–8% annual property appreciation, and entry prices well below comparable Caribbean markets. Over 1.2 million tourists visit annually, driving consistent vacation rental demand.',
  },
  {
    q: 'What types of properties are available in Roatan?',
    a: 'You will find beachfront condos, hillside homes, luxury villas, gated community lots, and pre-construction units across different price points and neighborhoods. Entry-level condos start around $150,000, while luxury oceanfront properties reach $3M+.',
  },
  {
    q: 'How long does the buying process take in Roatan?',
    a: 'A typical Roatan property transaction takes 60–120 days from signed agreement to completed title transfer. The process includes a title search by a licensed Honduran attorney, due diligence period, deposit payment, and final closing before a notary.',
  },
  {
    q: 'How do I get started with Tomas Figueroa?',
    a: 'The best first step is a 30-minute strategy call. Tomas will listen to your goals, walk you through current market conditions, and explain how to approach finding the right property in Roatan — at no cost or obligation.',
  },
];

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const HomeFAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f5f5f5] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1d1d1d]">{q}</span>
        <span className={`text-[#04649b] text-xl leading-none shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 py-5 bg-[#f5f5f5] text-gray-700 leading-relaxed border-t border-gray-200">
          {a}
        </div>
      )}
    </div>
  );
};

// Home Page Component
const HomePage = () => (
  <>
    <SEO
      title="Roatan Real Estate | Tomas Figueroa – KW Roatan"
      description="Buy, sell, or invest in Roatan, Honduras real estate with Tomas Figueroa at Keller Williams Roatan. Expert guidance on Caribbean property, new developments, and investment opportunities."
      url="/"
    />
    <Hero />
    <HomeAbout />

    {/* Why Roatan? */}
    <section className="py-20 bg-white">
      <div className="section-container max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-[#04649b] font-medium uppercase tracking-wider text-sm">
            Why Roatan
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mt-3 mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Why Buyers Choose Roatan Real Estate
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed space-y-4 text-left">
            <p>Roatán is the largest of Honduras' Bay Islands — a 40-mile island in the western Caribbean, located along the Mesoamerican Barrier Reef. Foreign buyers can acquire property with full ownership rights, making it a straightforward and secure market for international investment, with pricing that remains competitive compared to destinations such as Belize, the Dominican Republic, and Costa Rica.</p>
            <p>Tourism continues to grow consistently year over year, supporting strong demand for both vacation and long-term rentals. The island offers world-class diving, a stable tropical climate, an established expat community, and full English-language infrastructure. It is well connected with direct international flights, with additional routes continuing to be added.</p>
            <p>Together, these factors position Roatán as an increasingly attractive and practical Caribbean destination for both lifestyle buyers and investors.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { stat: '$150K+', label: 'Entry-level condos', sub: 'Well below comparable Caribbean markets' },
            { stat: '6–8%', label: 'Average rental yield', sub: 'In top areas like West Bay Beach' },
            { stat: '100%', label: 'Foreign ownership', sub: 'Same rights as Honduran citizens' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#f5f5f5] rounded-2xl p-6 text-center">
              <div
                className="text-4xl font-bold text-[#04649b] mb-1"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                {item.stat}
              </div>
              <div className="font-semibold text-[#1d1d1d] mb-1">{item.label}</div>
              <div className="text-gray-500 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Newsletter />
    <section className="py-20 bg-[#f5f5f5]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
      </Helmet>
      <div className="section-container max-w-3xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4 text-center"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          Common Questions About Roatan Real Estate
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Quick answers to what buyers and investors ask most.
        </p>
        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <HomeFAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </>
);

// Form Success Page
const FormSuccess = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-4">
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md text-center">
      <div className="w-20 h-20 bg-[#04649b] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-[#1d1d1d] mb-4" style={{ fontFamily: "'Roboto Slab', serif" }}>
        Thank You!
      </h1>
      <p className="text-gray-600 mb-8">
        You've been subscribed to Roatan real estate updates. Check your inbox for confirmation and exclusive listings.
      </p>
      <div className="space-y-3">
        <a
          href="/"
          className="block w-full bg-[#04649b] text-white py-3 rounded-lg font-medium hover:bg-[#03527d] transition-all"
        >
          Back to Home
        </a>
        <a
          href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
          target="_blank"
          rel="noopener"
          className="block w-full border-2 border-[#04649b] text-[#04649b] py-3 rounded-lg font-medium hover:bg-[#04649b] hover:text-white transition-all"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          </Helmet>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/new-developments" element={<NewDevelopments />} />
              <Route path="/neighborhoods" element={<Neighborhoods />} />
              <Route path="/neighborhoods/:slug" element={<NeighborhoodDetail />} />
              <Route path="/roatan-market" element={<RoatanMarket />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/success" element={<FormSuccess />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
