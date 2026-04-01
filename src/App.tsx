import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Properties from './sections/Properties';
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
    <Properties />
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
