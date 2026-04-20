import type { Metadata } from 'next';
import ClosingCalculator from '@/components/ClosingCalculator';

export const metadata: Metadata = {
  title: 'Roatan Closing Cost Calculator | Estimate Buying Costs',
  description: 'Estimate your closing costs when buying property in Roatan, Honduras. Calculate transfer taxes, attorney fees, and registration costs for direct or corporate share transfers.',
  alternates: { canonical: 'https://tomasfigueroa.com/calculator' },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">Free Tool</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-roboto-slab), serif' }}>Closing Cost Calculator</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">Estimate your total closing costs for a Roatan property purchase in seconds.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <ClosingCalculator />
        </div>
      </section>
    </div>
  );
}
