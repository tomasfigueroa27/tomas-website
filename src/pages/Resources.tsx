import { BookOpen, FileText } from 'lucide-react';
import SEO from '@/components/SEO';

const Resources = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title="Real Estate Resources | Roatan Honduras"
        description="Articles, market insights, and buyer's guides to help you make informed decisions about Roatan, Honduras real estate. Free resources for investors and relocators."
        url="/resources"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Knowledge &amp; Insights
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Resources
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Articles, market insights, and guides to help you make informed decisions about
            Roatan real estate.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="/blog"
              className="group block bg-[#f5f5f5] hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-12 h-12 bg-[#04649b]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#04649b] transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-[#04649b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h2
                className="text-2xl font-bold text-[#1d1d1d] mb-3"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Blog
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Read articles about Roatan real estate, market trends, and lifestyle tips.
              </p>
            </a>

            <a
              href="/guides"
              className="group block bg-[#f5f5f5] hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-12 h-12 bg-[#04649b]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#04649b] transition-colors duration-300">
                <FileText className="w-6 h-6 text-[#04649b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h2
                className="text-2xl font-bold text-[#1d1d1d] mb-3"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Guides
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive guides to help you navigate buying property in Roatan.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
