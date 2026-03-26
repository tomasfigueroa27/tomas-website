import { HashRouter, Routes, Route } from 'react-router-dom';
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

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <HomeAbout />
    <Properties />
    <Newsletter />
    <CTA />
  </>
);

// Blog Page
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
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/new-developments" element={<NewDevelopments />} />
            <Route path="/success" element={<FormSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
