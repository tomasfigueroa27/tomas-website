import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import neighborhoods from '@/data/neighborhoods';

export const metadata: Metadata = {
  title: 'Roatan Neighborhoods Guide | Tomas Figueroa',
  description: "Explore Roatan's top neighborhoods — from West Bay Beach luxury condos to the expat-friendly West End village. Compare price ranges, lifestyle, and investment potential for each area.",
  alternates: { canonical: 'https://tomasfigueroa.com/neighborhoods' },
};

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">Neighborhood Guide</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Roatan Neighborhoods</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Every neighborhood on Roatan has a distinct character, price range, and lifestyle. Explore each area to find the right fit for your goals — whether you&apos;re buying, investing, or relocating.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-[#f5f5f5] hover:bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#04649b] bg-[#04649b]/10 px-3 py-1 rounded-full mb-3">{neighborhood.vibe}</span>
                  <h2 className="text-2xl font-bold text-[#1d1d1d] mb-2" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>{neighborhood.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{neighborhood.tagline}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-[#04649b]">Price Range:</span>
                    <span>{neighborhood.priceRange}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {neighborhood.bestFor.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#04649b] font-medium text-sm group-hover:gap-3 transition-all">
                  Explore {neighborhood.name}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-4 text-center" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Neighborhood Comparison</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">A quick side-by-side view of every Roatan neighborhood to help you find the right fit.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#04649b] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Neighborhood</th>
                  <th className="text-left px-5 py-4 font-semibold">Price Range</th>
                  <th className="text-left px-5 py-4 font-semibold hidden md:table-cell">Vibe</th>
                  <th className="text-left px-5 py-4 font-semibold hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr key={n.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'}>
                    <td className="px-5 py-4">
                      <Link href={`/neighborhoods/${n.slug}`} className="font-semibold text-[#04649b] hover:underline">{n.name}</Link>
                    </td>
                    <td className="px-5 py-4 text-gray-700">{n.priceRange}</td>
                    <td className="px-5 py-4 text-gray-600 hidden md:table-cell">{n.vibe}</td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {n.bestFor.slice(0, 2).map((tag) => (
                          <span key={tag} className="bg-[#04649b]/10 text-[#04649b] text-xs px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f5f5f5]">
        <div className="section-container max-w-4xl text-center">
          <p className="text-gray-600">Have questions about neighborhoods or buying in Roatan?{' '}<Link href="/faq" className="text-[#04649b] font-medium hover:underline">Browse our full FAQ →</Link></p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container">
          <div className="bg-gradient-to-r from-[#04649b] to-[#03527d] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Not Sure Which Neighborhood Is Right for You?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Tomas can help you evaluate each area against your specific goals — whether that&apos;s rental income, lifestyle, appreciation, or all three.</p>
            <a href="https://savvycal.com/tomasfigueroa/chat-with-tomas" target="_blank" rel="noopener" className="inline-block bg-white text-[#04649b] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Schedule a Call with Tomas</a>
          </div>
        </div>
      </section>
    </div>
  );
}
