import { useState } from 'react';

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const ClosingCalculator = () => {
  const [price, setPrice] = useState('');
  const [structure, setStructure] = useState<'direct' | 'corporate'>('direct');

  const p = parseFloat(price.replace(/,/g, '')) || 0;

  const rows =
    structure === 'direct'
      ? [
          { label: 'Transfer Tax', rate: 0.015, note: '~1.5%' },
          { label: 'Attorney Fees', rate: 0.015, note: '~1–2%' },
          { label: 'Property Registration', rate: 0.005, note: '~0.5%' },
          { label: 'Notary & Admin Fees', rate: 0.005, note: '~0.5%' },
        ]
      : [
          { label: 'Share Transfer Tax', rate: 0.01, note: '~1%' },
          { label: 'Attorney Fees', rate: 0.015, note: '~1–2%' },
          { label: 'Corporate Due Diligence', rate: 0.01, note: '~1%' },
          { label: 'Notary & Admin Fees', rate: 0.005, note: '~0.5%' },
        ];

  const itemized = rows.map((r) => ({ ...r, amount: p * r.rate }));
  const total = itemized.reduce((sum, r) => sum + r.amount, 0);
  const pct = p > 0 ? ((total / p) * 100).toFixed(1) : '0';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-xl mx-auto">
      <h2
        className="text-2xl font-bold text-[#1d1d1d] mb-2"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        Closing Cost Estimator
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Estimate your closing costs for a Roatan property purchase. Agent commissions are paid by the seller.
      </p>

      {/* Purchase Price */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-[#1d1d1d] mb-2">
          Purchase Price (USD)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, '');
              setPrice(raw ? Number(raw).toLocaleString() : '');
            }}
            placeholder="300,000"
            className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#04649b] text-[#1d1d1d] font-medium"
          />
        </div>
      </div>

      {/* Transfer Structure */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1d1d1d] mb-2">
          Transfer Structure
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(['direct', 'corporate'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStructure(s)}
              className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                structure === s
                  ? 'bg-[#04649b] text-white border-[#04649b]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#04649b]'
              }`}
            >
              {s === 'direct' ? 'Direct Title Transfer' : 'Corporate Share Transfer'}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {structure === 'direct'
            ? 'Standard title transfer in your personal name or new corporation.'
            : 'Buying existing shares of a Honduran corporation that holds the property.'}
        </p>
      </div>

      {/* Breakdown */}
      {p > 0 && (
        <div className="bg-[#f5f5f5] rounded-xl p-5 space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Estimated Breakdown</p>
          {itemized.map((r) => (
            <div key={r.label} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">
                {r.label}{' '}
                <span className="text-gray-400 text-xs">({r.note})</span>
              </span>
              <span className="font-medium text-[#1d1d1d]">{fmt(r.amount)}</span>
            </div>
          ))}
          <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
            <span className="font-bold text-[#1d1d1d]">Total Estimated Costs</span>
            <span className="font-bold text-[#04649b] text-lg">{fmt(total)}</span>
          </div>
          <p className="text-xs text-gray-400 text-right">≈ {pct}% of purchase price</p>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4">
        * Estimates only. Actual costs vary by transaction complexity and legal fees. Consult a licensed Honduran attorney for exact figures.
      </p>
    </div>
  );
};

export default ClosingCalculator;
