import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, ArrowRight, Calculator } from 'lucide-react';
import posts from '@/data/blog';

export const metadata: Metadata = {
  title: 'Real Estate Resources | Roatan Honduras',
  description: 'Articles, market insights, and buyer\'s guides to help you make informed decisions about Roatan, Honduras real estate. Free resources for investors and relocators.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/resources' },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const recentPosts = posts.slice(0, 3);

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f5f2ee]">
      <section className="relative py-20 bg-[#093f4f] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">Knowledge &amp; Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Resources</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Articles, market insights, and guides to help you make informed decisions about Roatan real estate.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { href: '/blog', icon: BookOpen, title: 'Blog', desc: 'Read articles about Roatan real estate, market trends, and lifestyle tips.' },
              { href: '/guides', icon: FileText, title: 'Guides', desc: 'Comprehensive guides to help you navigate buying property in Roatan.' },
              { href: '/calculator', icon: Calculator, title: 'Closing Calculator', desc: 'Estimate your closing costs for a Roatan property purchase instantly.' },
            ].map(({ href, icon: Icon, title, desc }) => (
              <a key={href} href={href} className="group block bg-[#f5f2ee] hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 bg-[#093f4f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#093f4f] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#093f4f] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-[#093f4f] mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{title}</h2>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f2ee]">
        <div className="section-container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093f4f] mb-10 text-center" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#093f4f] bg-[#093f4f]/10 px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="text-lg font-bold text-[#093f4f] mt-4 mb-2 leading-snug" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(post.date)}</span>
                  <ArrowRight className="w-4 h-4 text-[#093f4f] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#093f4f] font-medium hover:underline">
              View all articles <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
