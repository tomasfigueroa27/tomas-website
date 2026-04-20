import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import posts from '@/data/blog';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Roatan Honduras',
  description: 'Market trends, investment tips, and lifestyle insights about Roatan, Honduras real estate. Stay informed with the latest news from the Bay Islands property market.',
  alternates: { canonical: 'https://www.tomasfigueroa.com/blog' },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f5f2ee]">
      <section className="relative py-20 bg-[#093f4f] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">Knowledge &amp; Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Real Estate Blog</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Market trends, investment tips, and island lifestyle insights to help you make the most of Roatan real estate.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#f5f2ee] hover:bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                {post.image && (
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-xs text-[#093f4f] font-medium bg-[#093f4f]/10 px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#093f4f] mb-3 group-hover:text-[#093f4f] transition-colors" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm font-medium text-[#093f4f] group-hover:underline">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
