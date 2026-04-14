import { useState } from 'react';
import { X, Plus } from 'lucide-react';

/* ─── helpers ─────────────────────────────────────────────── */
const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const pct = (n: number, total: number) =>
  total > 0 ? ((n / total) * 100).toFixed(1) + '%' : '0%';

const parseMoney = (s: string) => parseFloat(s.replace(/[^0-9.]/g, '')) || 0;

const MoneyInput = ({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-[#1d1d1d] mb-1">{label}</label>
    {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^0-9.]/g, '');
          onChange(raw ? Number(raw).toLocaleString('en-US', { maximumFractionDigits: 0 }) : '');
        }}
        placeholder="0"
        className="w-full pl-7 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#04649b]"
      />
    </div>
  </div>
);

const PctInput = ({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-[#1d1d1d] mb-1">{label}</label>
    {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step="0.1"
        min="0"
        className="w-full pr-7 pl-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#04649b]"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
    </div>
  </div>
);

const MetricCard = ({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) => (
  <div className={`rounded-xl p-4 ${accent ? 'bg-[#04649b] text-white' : 'bg-[#f5f5f5]'}`}>
    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${accent ? 'text-white/70' : 'text-gray-500'}`}>
      {label}
    </p>
    <p className={`text-xl font-bold ${accent ? 'text-white' : 'text-[#1d1d1d]'}`}>{value}</p>
    {sub && <p className={`text-xs mt-0.5 ${accent ? 'text-white/70' : 'text-gray-400'}`}>{sub}</p>}
  </div>
);

interface LineItem { label: string; amount: number; isTotal?: boolean; isGreen?: boolean; isRed?: boolean }

const Breakdown = ({ lines }: { lines: LineItem[] }) => (
  <div className="bg-[#f5f5f5] rounded-xl p-5 space-y-2 mt-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Itemized Breakdown</p>
    {lines.map((l, i) =>
      l.isTotal ? (
        <div key={i} className="border-t border-gray-300 pt-3 flex justify-between items-center">
          <span className="font-bold text-[#1d1d1d]">{l.label}</span>
          <span className={`font-bold text-lg ${l.isGreen ? 'text-green-600' : l.isRed ? 'text-rose-600' : 'text-[#1d1d1d]'}`}>
            {l.amount < 0 ? '−' : ''}{fmt(Math.abs(l.amount))}
          </span>
        </div>
      ) : (
        <div key={i} className="flex justify-between items-center text-sm">
          <span className="text-gray-600">{l.label}</span>
          <span className={`font-medium ${l.amount < 0 ? 'text-gray-700' : 'text-[#1d1d1d]'}`}>
            {l.amount < 0 ? '−' : ''}{fmt(Math.abs(l.amount))}
          </span>
        </div>
      )
    )}
  </div>
);

/* ─── SELLER ────────────────────────────────────────────────── */
const SellerPanel = () => {
  const [sellingPrice, setSellingPrice] = useState('');
  const [costBasis, setCostBasis] = useState('');
  const [commissionPct, setCommissionPct] = useState('6');
  const [vatBasePct, setVatBasePct] = useState('100');
  const [vatRate, setVatRate] = useState('15');
  const [capGainsRate, setCapGainsRate] = useState('4');
  const [municipalTaxes, setMunicipalTaxes] = useState('');
  const [otherCosts, setOtherCosts] = useState('');

  const sp = parseMoney(sellingPrice);
  const cb = parseMoney(costBasis);
  const commission = sp * (parseFloat(commissionPct) / 100 || 0);
  const vatOnCommission = commission * (parseFloat(vatBasePct) / 100 || 0) * (parseFloat(vatRate) / 100 || 0);
  const netBase = sp - commission - cb;
  const capGainsTax = netBase > 0 ? netBase * (parseFloat(capGainsRate) / 100 || 0) : 0;
  const municipal = parseMoney(municipalTaxes);
  const other = parseMoney(otherCosts);
  const totalDeductions = commission + vatOnCommission + capGainsTax + municipal + other;
  const netProceeds = sp - totalDeductions;
  const hasData = sp > 0;

  const lines: LineItem[] = [
    { label: 'Selling Price', amount: sp },
    { label: `Commission (${commissionPct}%)`, amount: -commission },
    { label: `VAT on Commission (${vatBasePct}% base × ${vatRate}%)`, amount: -vatOnCommission },
    ...(capGainsTax > 0
      ? [{ label: `Capital Gains Tax (${capGainsRate}% on ${fmt(netBase)} net gain)`, amount: -capGainsTax }]
      : [{ label: 'Capital Gains Tax', amount: 0 }]),
    ...(municipal > 0 ? [{ label: 'Municipal Taxes Owed', amount: -municipal }] : []),
    ...(other > 0 ? [{ label: 'Other Costs', amount: -other }] : []),
    { label: 'Net Proceeds to Seller', amount: netProceeds, isTotal: true, isGreen: true },
  ];

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <MoneyInput label="Selling Price (USD)" value={sellingPrice} onChange={setSellingPrice} />
        <MoneyInput label="Total Cost Basis (USD)" value={costBasis} onChange={setCostBasis} hint="Land + improvements + acquisition costs" />
        <PctInput label="Commission %" value={commissionPct} onChange={setCommissionPct} />
        <PctInput label="VAT Base % of Commission" value={vatBasePct} onChange={setVatBasePct} hint="Portion of commission subject to VAT" />
        <PctInput label="VAT Rate %" value={vatRate} onChange={setVatRate} hint="Fixed at 15% in Honduras" />
        <PctInput label="Capital Gains Rate %" value={capGainsRate} onChange={setCapGainsRate} hint="Applied to net gain (price − commission − basis)" />
        <MoneyInput label="Municipal Taxes Owed (USD)" value={municipalTaxes} onChange={setMunicipalTaxes} hint="Unpaid municipal taxes due at closing" />
        <MoneyInput label="Other Costs (USD)" value={otherCosts} onChange={setOtherCosts} hint="Legal, title, surveys, misc" />
      </div>

      {hasData && (
        <>
          <div className="grid grid-cols-3 gap-3 mt-2">
            <MetricCard label="Net Proceeds" value={fmt(netProceeds)} accent />
            <MetricCard label="Total Deductions" value={fmt(totalDeductions)} />
            <MetricCard label="Cost as % of Sale" value={pct(totalDeductions, sp)} />
          </div>
          <Breakdown lines={lines} />
        </>
      )}
    </div>
  );
};

/* ─── BUYER ─────────────────────────────────────────────────── */
interface ProratedRow { id: number; label: string; amount: string }

const BuyerPanel = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [structure, setStructure] = useState<'asset' | 'corp'>('asset');
  const [legalFeesPct, setLegalFeesPct] = useState('2.5');
  const [corpSetup, setCorpSetup] = useState('');
  const [otherCosts, setOtherCosts] = useState('');
  const [prorated, setProrated] = useState<ProratedRow[]>([
    { id: 1, label: 'HOA Fees', amount: '500' },
    { id: 2, label: 'Insurance', amount: '1,200' },
    { id: 3, label: 'Services', amount: '200' },
  ]);
  const [nextId, setNextId] = useState(4);

  const pp = parseMoney(purchasePrice);
  const transferTax = structure === 'asset' ? pp * 0.03 : 0;
  const legalFees = pp * (parseFloat(legalFeesPct) / 100 || 0);
  const setup = parseMoney(corpSetup);
  const other = parseMoney(otherCosts);
  const proratedTotal = prorated.reduce((sum, r) => sum + parseMoney(r.amount), 0);
  const closingCosts = transferTax + legalFees + setup + other + proratedTotal;
  const totalCashToClose = pp + closingCosts;
  const hasData = pp > 0;

  const addRow = () => {
    setProrated((prev) => [...prev, { id: nextId, label: '', amount: '' }]);
    setNextId((n) => n + 1);
  };
  const removeRow = (id: number) => setProrated((prev) => prev.filter((r) => r.id !== id));
  const updateRow = (id: number, field: 'label' | 'amount', val: string) =>
    setProrated((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: val } : r)));

  const lines: LineItem[] = [
    { label: 'Purchase Price', amount: pp },
    ...(transferTax > 0 ? [{ label: 'Transfer Tax (3%)', amount: transferTax }] : [{ label: 'Transfer Tax (corporation — 0%)', amount: 0 }]),
    { label: `Legal Fees (${legalFeesPct}%)`, amount: legalFees },
    ...(setup > 0 ? [{ label: 'Corporation Setup', amount: setup }] : []),
    ...(other > 0 ? [{ label: 'Other Closing Costs', amount: other }] : []),
    ...prorated.filter((r) => parseMoney(r.amount) > 0).map((r) => ({ label: r.label || 'Prorated Item', amount: parseMoney(r.amount) })),
    { label: 'Total Cash to Close', amount: totalCashToClose, isTotal: true, isRed: true },
  ];

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <MoneyInput label="Purchase Price (USD)" value={purchasePrice} onChange={setPurchasePrice} />
        <div>
          <label className="block text-sm font-semibold text-[#1d1d1d] mb-1">Purchase Structure</label>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {(['asset', 'corp'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStructure(s)}
                className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                  structure === s
                    ? 'bg-[#04649b] text-white border-[#04649b]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#04649b]'
                }`}
              >
                {s === 'asset' ? 'Buying the Asset' : 'Buying a Corporation'}
              </button>
            ))}
          </div>
          <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${
            structure === 'asset' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
          }`}>
            {structure === 'asset' ? '3% transfer tax applies' : 'No transfer tax (shares transfer)'}
          </span>
        </div>
        <PctInput label="Legal Fees %" value={legalFeesPct} onChange={setLegalFeesPct} hint="Typically 2–3%" />
        <MoneyInput label="Corporation Setup Cost (USD)" value={corpSetup} onChange={setCorpSetup} hint="New Honduran corporation" />
        <MoneyInput label="Other Closing Costs (USD)" value={otherCosts} onChange={setOtherCosts} />
      </div>

      {/* Prorated Items */}
      <div>
        <label className="block text-sm font-semibold text-[#1d1d1d] mb-3">Prorated Items</label>
        <div className="space-y-2">
          {prorated.map((row) => (
            <div key={row.id} className="flex gap-2 items-center">
              <input
                type="text"
                value={row.label}
                onChange={(e) => updateRow(row.id, 'label', e.target.value)}
                placeholder="Label"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#04649b]"
              />
              <div className="relative w-32 shrink-0">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="text"
                  value={row.amount}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, '');
                    updateRow(row.id, 'amount', raw ? Number(raw).toLocaleString('en-US', { maximumFractionDigits: 0 }) : '');
                  }}
                  placeholder="0"
                  className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#04649b]"
                />
              </div>
              <button
                onClick={() => removeRow(row.id)}
                className="p-2 text-gray-400 hover:text-rose-500 transition-colors"
                aria-label="Remove"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addRow}
          className="mt-3 inline-flex items-center gap-1 text-sm text-[#04649b] font-medium hover:underline"
        >
          <Plus className="w-4 h-4" />
          Add item
        </button>
      </div>

      {hasData && (
        <>
          <div className="grid grid-cols-3 gap-3 mt-2">
            <MetricCard label="Total Cash to Close" value={fmt(totalCashToClose)} accent />
            <MetricCard label="Closing Costs Only" value={fmt(closingCosts)} />
            <MetricCard label="Cost as % of Purchase" value={pct(closingCosts, pp)} />
          </div>
          <Breakdown lines={lines} />
        </>
      )}
    </div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */
const ClosingCalculator = () => {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl mx-auto">
      <h2
        className="text-2xl font-bold text-[#1d1d1d] mb-1"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        Closing Cost Estimator
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Live estimates for buyers and sellers in Roatan. Agent commissions are paid by the seller.
      </p>

      {/* Role toggle */}
      <div className="inline-flex bg-[#f5f5f5] rounded-xl p-1 mb-8">
        {(['buyer', 'seller'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              role === r ? 'bg-white shadow text-[#04649b]' : 'text-gray-500 hover:text-[#1d1d1d]'
            }`}
          >
            {r === 'buyer' ? 'Buyer' : 'Seller'}
          </button>
        ))}
      </div>

      {role === 'buyer' ? <BuyerPanel /> : <SellerPanel />}

      <p className="text-xs text-gray-400 mt-6">
        * Estimates only. Actual costs vary by transaction and legal counsel. Consult a licensed Honduran attorney for exact figures.
      </p>
    </div>
  );
};

export default ClosingCalculator;
