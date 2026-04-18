import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-4 pt-32">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md text-center">
        <div className="w-20 h-20 bg-[#04649b] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1d1d1d] mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>
          Thank You!
        </h1>
        <p className="text-gray-600 mb-8">
          You&apos;ve been subscribed to Roatan real estate updates. Check your inbox for confirmation and exclusive listings.
        </p>
        <div className="space-y-3">
          <Link href="/" className="block w-full bg-[#04649b] text-white py-3 rounded-lg font-medium hover:bg-[#03527d] transition-all">
            Back to Home
          </Link>
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
}
