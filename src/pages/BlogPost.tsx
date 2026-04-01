import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import posts, { type ContentBlock } from '@/data/blog';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-[#1d1d1d] mt-10 mb-4"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          key={index}
          className="text-xl font-bold text-[#1d1d1d] mt-8 mb-3"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} className="list-disc list-outside pl-6 mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'facts':
      return (
        <div key={index} className="bg-[#f5f5f5] rounded-2xl p-6 mb-6 space-y-3">
          {block.items.map((fact, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-semibold text-[#04649b] min-w-[120px] shrink-0">
                {fact.label}:
              </span>
              <span className="text-gray-700">{fact.value}</span>
            </div>
          ))}
        </div>
      );
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1d1d1d] mb-4">Post not found</h1>
          <Link to="/blog" className="text-[#04649b] hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={post.image}
      />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-xs font-medium bg-white/20 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" aria-hidden="true" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/80">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Cover image */}
      {post.image && (
        <div className="section-container max-w-3xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl -mt-8 shadow-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      {/* Body */}
      <article className="section-container max-w-3xl py-12">
        {post.body.map((block, i) => renderBlock(block, i))}
      </article>

      {/* CTA */}
      <div className="section-container max-w-3xl">
        <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-8 text-white text-center">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Interested in Roatan Real Estate?
          </h2>
          <p className="text-white/90 mb-6">
            Let's talk about finding the right property for you.
          </p>
          <a
            href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
            target="_blank"
            rel="noopener"
            className="inline-block bg-white text-[#04649b] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
