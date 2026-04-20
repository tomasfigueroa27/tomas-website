import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import posts, { type ContentBlock } from '@/data/blog';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.tomasfigueroa.com/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, section: post.category, ...(post.image ? { images: [post.image] } : {}) },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#093f4f] mt-10 mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{block.text}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl font-bold text-[#093f4f] mt-8 mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{block.text}</h3>;
    case 'p':
      return <p key={index} className="text-gray-700 leading-relaxed mb-5">{block.text}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-disc list-outside pl-6 mb-5 space-y-2">
          {block.items.map((item, i) => <li key={i} className="text-gray-700 leading-relaxed">{item}</li>)}
        </ul>
      );
    case 'facts':
      return (
        <div key={index} className="bg-[#f5f2ee] rounded-2xl p-6 mb-6 space-y-3">
          {block.items.map((fact, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-semibold text-[#093f4f] min-w-[120px] shrink-0">{fact.label}:</span>
              <span className="text-gray-700">{fact.value}</span>
            </div>
          ))}
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#093f4f] mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#093f4f] hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Tomas Figueroa', url: 'https://www.tomasfigueroa.com/about' },
    publisher: { '@type': 'Organization', name: 'Tomas Figueroa Real Estate', url: 'https://www.tomasfigueroa.com', logo: { '@type': 'ImageObject', url: 'https://www.tomasfigueroa.com/logo-blue.webp' } },
    url: `https://www.tomasfigueroa.com/blog/${post.slug}`,
    ...(post.image ? { image: post.image } : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tomasfigueroa.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.tomasfigueroa.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.tomasfigueroa.com/blog/${post.slug}` },
    ],
  };

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f5f2ee]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative py-16 bg-[#093f4f] text-white">
        <div className="section-container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{post.title}</h1>
        </div>
      </section>

      {post.image && (
        <div className="section-container max-w-3xl">
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl -mt-8 shadow-xl" loading="eager" decoding="async" />
        </div>
      )}

      <article className="section-container max-w-3xl py-12">
        {post.summary && post.summary.length > 0 && (
          <div className="bg-[#f5f2ee] border-l-4 border-[#093f4f] rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-[#093f4f] mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>At a Glance</h2>
            <ul className="space-y-2">
              {post.summary.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#093f4f] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
        {post.body.map((block, i) => renderBlock(block, i))}
      </article>

      {relatedPosts.length > 0 && (
        <div className="section-container max-w-3xl mb-10">
          <h2 className="text-xl font-bold text-[#093f4f] mb-5" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Read Next</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-[#f5f2ee] hover:bg-white rounded-xl p-5 border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#093f4f]">{related.category}</span>
                <h3 className="text-base font-bold text-[#093f4f] mt-2 mb-1 leading-snug group-hover:text-[#093f4f] transition-colors" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>{related.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="section-container max-w-3xl">
        <div className="bg-[#093f4f] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Interested in Roatan Real Estate?</h2>
          <p className="text-white/90 mb-6">Let&apos;s talk about finding the right property for you.</p>
          <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-block bg-white text-[#093f4f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Schedule a Call</a>
        </div>
      </div>
    </div>
  );
}
