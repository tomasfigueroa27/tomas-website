import type { Metadata } from 'next';
import ClosingCalculator from '@/components/ClosingCalculator';

export const metadata: Metadata = {
  title: 'Roatan Closing Cost Calculator | Estimate Buying Costs',
  description: 'Estimate your closing costs when buying property in Roatan, Honduras. Calculate transfer taxes, attorney fees, and registration costs for direct or corporate share transfers.',
  alternates: { canonical: 'https://tomasfigueroa.com/calculator' },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 80, backgroundColor: '#ffffff' }}>
      <section style={{ backgroundColor: '#093f4f', color: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Free Tool</span>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Closing Cost Calculator
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto' }}>
            Estimate your total closing costs for a Roatan property purchase in seconds.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="section-container">
          <ClosingCalculator />
        </div>
      </section>
    </div>
  );
}
