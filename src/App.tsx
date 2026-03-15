import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Properties from './sections/Properties';
import Neighborhoods from './sections/Neighborhoods';
import Newsletter from './sections/Newsletter';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Properties />
    <Neighborhoods />
    <Newsletter />
    <CTA />
  </>
);

// Simple About Page
const About = () => (
  <div className="min-h-screen pt-32 pb-20 bg-white">
    <div className="section-container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-8" style={{ fontFamily: "'Roboto Slab', serif" }}>
        About Tomas Figueroa
      </h1>
      <div className="prose prose-lg max-w-none text-gray-600">
        <p className="mb-6">
          With over 20 years of experience in Roatan real estate, I've helped hundreds of clients 
          find their dream properties in this Caribbean paradise. My deep knowledge of the local market, 
          combined with a commitment to exceptional service, makes me your ideal partner for all your 
          real estate needs.
        </p>
        <p className="mb-6">
          Whether you're looking for a vacation home, investment property, or your permanent residence, 
          I provide personalized guidance throughout the entire process. From property search to closing, 
          I'm here to ensure a smooth and successful transaction.
        </p>
        <h2 className="text-2xl font-bold text-[#1d1d1d] mt-10 mb-4">Why Work With Me?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>20+ years of local market expertise</li>
          <li>Personalized, one-on-one service</li>
          <li>Fluent in English and Spanish</li>
          <li>Extensive network of local contacts</li>
          <li>Proven track record of successful transactions</li>
        </ul>
      </div>
    </div>
  </div>
);

// Simple Blog Page
const Blog = () => (
  <div className="min-h-screen pt-32 pb-20 bg-white">
    <div className="section-container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-8" style={{ fontFamily: "'Roboto Slab', serif" }}>
        Real Estate Blog
      </h1>
      <p className="text-gray-600 text-lg">
        Coming soon! Stay tuned for articles about Roatan real estate, market trends, 
        investment opportunities, and lifestyle tips.
      </p>
    </div>
  </div>
);

// Simple Guides Page
const Guides = () => (
  <div className="min-h-screen pt-32 pb-20 bg-white">
    <div className="section-container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-8" style={{ fontFamily: "'Roboto Slab', serif" }}>
        Buyer's Guides
      </h1>
      <p className="text-gray-600 text-lg">
        Coming soon! Comprehensive guides to help you navigate the process of buying 
        property in Roatan, Honduras.
      </p>
    </div>
  </div>
);

// Blue Vista Development Page
const BlueVista = () => (
  <div className="min-h-screen pt-32 pb-20 bg-white">
    <div className="section-container max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-8" style={{ fontFamily: "'Roboto Slab', serif" }}>
        Blue Vista Development
      </h1>
      <img 
        src="/bluevista-hero.webp" 
        alt="Blue Vista" 
        className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
      />
      <div className="prose prose-lg max-w-none text-gray-600">
        <p className="mb-6">
          Blue Vista is an exclusive new development offering stunning ocean views and 
          modern Caribbean living. Located in one of Roatan's most desirable areas, 
          this development features luxury homes designed for comfort and elegance.
        </p>
        <h2 className="text-2xl font-bold text-[#1d1d1d] mt-10 mb-4">Development Features</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Panoramic ocean views</li>
          <li>Modern architectural design</li>
          <li>High-end finishes</li>
          <li>Private community</li>
          <li>Close to beaches and amenities</li>
        </ul>
        <a 
          href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
          target="_blank"
          rel="noopener"
          className="inline-block bg-[#04649b] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#03527d] transition-all mt-6"
        >
          Schedule a Viewing
        </a>
      </div>
    </div>
  </div>
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
          href="/#/"
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
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/blue-vista" element={<BlueVista />} />
            <Route path="/success" element={<FormSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
