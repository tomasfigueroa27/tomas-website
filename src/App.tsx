import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import FAQPage from './pages/FAQPage';
import CalculatorPage from './pages/CalculatorPage';

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

    {/* Quote Band — full-bleed visual break, no formula */}
    <section className="bg-[#1d1d1d] py-14 md:py-20">
      <div className="section-container max-w-4xl text-center">
        <p
          className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          "Most Caribbean markets are overpriced.{' '}
          <span className="text-[#04649b]">Roatan isn't — yet.</span>"
        </p>
      </div>
    </section>

    {/* Why Roatan — dark, left-aligned, no eyebrow */}
    <section className="bg-[#111] py-20 md:py-28">
      <div className="section-container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + copy */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Why Buyers Choose Roatan
            </h2>
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>Roatán is the largest of Honduras' Bay Islands — a 40-mile island in the western Caribbean, located along the Mesoamerican Barrier Reef. Foreign buyers can acquire property with full ownership rights, making it a straightforward and secure market for international investment, with pricing that remains competitive compared to destinations such as Belize, the Dominican Republic, and Costa Rica.</p>
              <p>Tourism continues to grow consistently year over year, supporting strong demand for both vacation and long-term rentals. The island offers world-class diving, a stable tropical climate, an established expat community, and full English-language infrastructure. It is well connected with direct international flights, with additional routes continuing to be added.</p>
              <p>Together, these factors position Roatán as an increasingly attractive and practical Caribbean destination for both lifestyle buyers and investors.</p>
            </div>
          </div>
          {/* Right: stats as typographic items */}
          <div className="lg:pt-4 space-y-0 divide-y divide-white/10 border-t border-white/10">
            {[
              { stat: '$150K+', label: 'Accessible entry points', sub: 'Well below comparable Caribbean markets' },
              { stat: '6–8%', label: 'Average rental yield', sub: 'In top areas like West Bay Beach' },
              { stat: '100%', label: 'Foreign ownership', sub: 'Same rights as Honduran citizens' },
            ].map((item) => (
              <div key={item.stat} className="py-7 flex items-start gap-6">
                <span
                  className="text-4xl md:text-5xl font-bold text-[#04649b] shrink-0 leading-none"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  {item.stat}
                </span>
                <div>
                  <p className="text-white font-semibold text-lg leading-snug">{item.label}</p>
                  <p className="text-white/50 text-sm mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
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
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
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
