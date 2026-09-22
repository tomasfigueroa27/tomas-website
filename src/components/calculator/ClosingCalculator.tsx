import { useState } from 'react';

/* ── Brand tokens (inline — no CSS vars in React islands) ── */
const RED   = '#ED2127';
const IRON  = '#000000';
const CANVAS = '#FFFFFF';
const PLASTER = '#F7F8F6';
const IRON60 = 'rgba(0,0,0,.60)';
const IRON40 = 'rgba(0,0,0,.40)';
const IRON20 = 'rgba(0,0,0,.20)';
const IRON10 = 'rgba(0,0,0,.10)';

/* ── Helpers ── */
const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const pct = (n: number, total: number) =>
  total > 0 ? ((n / total) * 100).toFixed(1) + '%' : '0%';

const parseMoney = (s: string) => parseFloat(s.replace(/[^0-9.]/g, '')) || 0;

/* ── Icons ── */
const IconX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

/* ── Sub-components ── */
const MoneyInput = ({ label, value, onChange, hint }: {
  label: string; value: string; onChange: (v: string) => void; hint?: string;
}) => (
  <div>
    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: IRON, marginBottom: 4 }}>{label}</label>
    {hint && <p style={{ fontSize: 11, color: IRON40, marginBottom: 4 }}>{hint}</p>}
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: IRON40 }}>$</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^0-9.]/g, '');
          onChange(raw ? Number(raw).toLocaleString('en-US', { maximumFractionDigits: 0 }) : '');
        }}
        placeholder="0"
        style={{
          width: '100%', paddingLeft: 28, paddingRight: 12, paddingTop: 10, paddingBottom: 10,
          border: `1px solid ${IRON20}`, fontSize: 14, outline: 'none', boxSizing: 'border-box',
          fontFamily: 'inherit', color: IRON,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = RED)}
        onBlur={(e) => (e.currentTarget.style.borderColor = IRON20)}
      />
    </div>
  </div>
);

const PctInput = ({ label, value, onChange, hint }: {
  label: string; value: string; onChange: (v: string) => void; hint?: string;
}) => (
  <div>
    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: IRON, marginBottom: 4 }}>{label}</label>
    {hint && <p style={{ fontSize: 11, color: IRON40, marginBottom: 4 }}>{hint}</p>}
    <div style={{ position: 'relative' }}>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step="0.1"
        min="0"
        style={{
          width: '100%', paddingLeft: 12, paddingRight: 28, paddingTop: 10, paddingBottom: 10,
          border: `1px solid ${IRON20}`, fontSize: 14, outline: 'none', boxSizing: 'border-box',
          fontFamily: 'inherit', color: IRON,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = RED)}
        onBlur={(e) => (e.currentTarget.style.borderColor = IRON20)}
      />
      <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: IRON40 }}>%</span>
    </div>
  </div>
);

const MetricCard = ({ label, value, sub, accent }: {
  label: string; value: string; sub?: string; accent?: boolean;
}) => (
  <div style={{ padding: 16, backgroundColor: accent ? RED : PLASTER }}>
    <p style={{
      fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em',
      marginBottom: 4, color: accent ? 'rgba(255,255,255,0.65)' : IRON40,
    }}>{label}</p>
    <p style={{ fontSize: 20, fontWeight: 700, color: accent ? CANVAS : IRON }}>{value}</p>
    {sub && <p style={{ fontSize: 11, marginTop: 2, color: accent ? 'rgba(255,255,255,0.65)' : IRON40 }}>{sub}</p>}
  </div>
);

interface LineItem { label: string; amount: number; isTotal?: boolean; isGreen?: boolean; isRed?: boolean }

const Breakdown = ({ lines }: { lines: LineItem[] }) => (
  <div style={{ backgroundColor: PLASTER, padding: '20px 24px', marginTop: 16 }}>
    <p style={{
      fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.1em', color: IRON40, marginBottom: 12,
    }}>Itemized Breakdown</p>
    {lines.map((l, i) =>
      l.isTotal ? (
        <div key={i} style={{
          borderTop: `1px solid ${IRON20}`, paddingTop: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8,
        }}>
          <span style={{ fontWeight: 700, color: IRON }}>{l.label}</span>
          <span style={{ fontWeight: 700, fontSize: 18, color: l.isGreen ? '#16a34a' : l.isRed ? RED : IRON }}>
            {l.amount < 0 ? '−' : ''}{fmt(Math.abs(l.amount))}
          </span>
        </div>
      ) : (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 14, marginBottom: 8,
        }}>
          <span style={{ color: IRON60 }}>{l.label}</span>
          <span style={{ fontWeight: 500, color: IRON }}>
            {l.amount < 0 ? '−' : ''}{fmt(Math.abs(l.amount))}
          </span>
        </div>
      )
    )}
  </div>
);

/* ── Seller panel ── */
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
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

/* ── Buyer panel ── */
interface ProratedRow { id: number; label: string; fullAmount: string; period: 'annual' | 'monthly' }

const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const calcProration = (fullAmount: number, closingDate: string, period: 'annual' | 'monthly') => {
  if (!closingDate || fullAmount <= 0) return { amount: 0, days: 0, totalDays: period === 'annual' ? 365 : 30 };
  const d = new Date(closingDate + 'T12:00:00');
  if (period === 'annual') {
    const end = new Date(d.getFullYear(), 11, 31);
    const totalDays = isLeapYear(d.getFullYear()) ? 366 : 365;
    const days = Math.round((end.getTime() - d.getTime()) / 86400000) + 1;
    return { amount: (days / totalDays) * fullAmount, days, totalDays };
  }
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  const totalDays = end.getDate();
  const days = totalDays - d.getDate() + 1;
  return { amount: (days / totalDays) * fullAmount, days, totalDays };
};

const BuyerPanel = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [structure, setStructure] = useState<'asset' | 'corp'>('asset');
  const [legalFeesPct, setLegalFeesPct] = useState('2.5');
  const [corpSetup, setCorpSetup] = useState('');
  const [otherCosts, setOtherCosts] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [prorated, setProrated] = useState<ProratedRow[]>([
    { id: 1, label: 'HOA Fees', fullAmount: '2,400', period: 'annual' },
    { id: 2, label: 'Insurance', fullAmount: '1,200', period: 'annual' },
    { id: 3, label: 'Services', fullAmount: '200', period: 'monthly' },
  ]);
  const [nextId, setNextId] = useState(4);

  const pp = parseMoney(purchasePrice);
  const transferTax = structure === 'asset' ? pp * 0.03 : 0;
  const legalFees = pp * (parseFloat(legalFeesPct) / 100 || 0);
  const setup = parseMoney(corpSetup);
  const other = parseMoney(otherCosts);
  const proratedTotal = prorated.reduce((sum, r) =>
    sum + calcProration(parseMoney(r.fullAmount), closingDate, r.period).amount, 0);
  const closingCosts = transferTax + legalFees + setup + other + proratedTotal;
  const totalCashToClose = pp + closingCosts;
  const hasData = pp > 0;

  const addRow = () => {
    setProrated((prev) => [...prev, { id: nextId, label: '', fullAmount: '', period: 'annual' }]);
    setNextId((n) => n + 1);
  };
  const removeRow = (id: number) => setProrated((prev) => prev.filter((r) => r.id !== id));
  const updateRow = (id: number, field: keyof ProratedRow, val: string) =>
    setProrated((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: val } : r)));

  const lines: LineItem[] = [
    { label: 'Purchase Price', amount: pp },
    ...(transferTax > 0
      ? [{ label: 'Transfer Tax (3%)', amount: transferTax }]
      : [{ label: 'Transfer Tax (corporation — 0%)', amount: 0 }]),
    { label: `Legal Fees (${legalFeesPct}%)`, amount: legalFees },
    ...(setup > 0 ? [{ label: 'Corporation Setup', amount: setup }] : []),
    ...(other > 0 ? [{ label: 'Other Closing Costs', amount: other }] : []),
    ...prorated
      .filter((r) => parseMoney(r.fullAmount) > 0)
      .map((r) => {
        const { amount, days, totalDays } = calcProration(parseMoney(r.fullAmount), closingDate, r.period);
        const suffix = closingDate ? ` (${days}/${totalDays} days)` : '';
        return { label: (r.label || 'Prorated Item') + suffix, amount };
      }),
    { label: 'Total Cash to Close', amount: totalCashToClose, isTotal: true, isRed: true },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <MoneyInput label="Purchase Price (USD)" value={purchasePrice} onChange={setPurchasePrice} />
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: IRON, marginBottom: 4 }}>Purchase Structure</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
            {(['asset', 'corp'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStructure(s)}
                style={{
                  padding: '10px 12px',
                  border: `1px solid ${structure === s ? IRON : IRON20}`,
                  backgroundColor: structure === s ? IRON : CANVAS,
                  color: structure === s ? CANVAS : IRON60,
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.2s', fontFamily: 'inherit',
                }}
              >
                {s === 'asset' ? 'Buying the Asset' : 'Buying a Corporation'}
              </button>
            ))}
          </div>
          <span style={{
            display: 'inline-block', fontSize: 11, padding: '3px 10px', fontWeight: 600,
            backgroundColor: structure === 'asset' ? '#fef3c7' : '#dcfce7',
            color: structure === 'asset' ? '#92400e' : '#15803d',
          }}>
            {structure === 'asset' ? '3% transfer tax applies' : 'No transfer tax (shares transfer)'}
          </span>
        </div>
        <PctInput label="Legal Fees %" value={legalFeesPct} onChange={setLegalFeesPct} hint="Typically 2–3%" />
        <MoneyInput label="Corporation Setup Cost (USD)" value={corpSetup} onChange={setCorpSetup} hint="New Honduran corporation" />
        <MoneyInput label="Other Closing Costs (USD)" value={otherCosts} onChange={setOtherCosts} />
      </div>

      <div>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 16, marginBottom: 12, flexWrap: 'wrap',
        }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: IRON }}>Prorated Items</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{
              fontSize: 12, color: IRON40, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap',
            }}>Closing Date</label>
            <input
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
              style={{
                padding: '6px 10px', border: `1px solid ${IRON20}`, fontSize: 13,
                outline: 'none', color: IRON, fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = RED)}
              onBlur={(e) => (e.currentTarget.style.borderColor = IRON20)}
            />
          </div>
        </div>

        {!closingDate && (
          <p style={{ fontSize: 12, color: IRON40, marginBottom: 12, fontStyle: 'italic' }}>
            Set a closing date to auto-calculate each item's prorated amount.
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {prorated.map((row) => {
            const full = parseMoney(row.fullAmount);
            const { amount, days, totalDays } = calcProration(full, closingDate, row.period);
            const rowPct = totalDays > 0 ? ((days / totalDays) * 100).toFixed(1) : '0';
            return (
              <div key={row.id} style={{ border: `1px solid ${IRON10}`, padding: 12 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    value={row.label}
                    onChange={(e) => updateRow(row.id, 'label', e.target.value)}
                    placeholder="Description"
                    style={{
                      flex: 1, minWidth: 80, padding: '7px 10px',
                      border: `1px solid ${IRON20}`, fontSize: 13, outline: 'none',
                      fontFamily: 'inherit', color: IRON,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = RED)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = IRON20)}
                  />
                  <div style={{ display: 'flex', flexShrink: 0 }}>
                    {(['annual', 'monthly'] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => updateRow(row.id, 'period', p)}
                        style={{
                          padding: '7px 10px', fontSize: 11, fontWeight: 600,
                          fontFamily: 'inherit', cursor: 'pointer',
                          border: `1px solid ${IRON20}`,
                          borderRight: p === 'annual' ? 'none' : `1px solid ${IRON20}`,
                          backgroundColor: row.period === p ? IRON : CANVAS,
                          color: row.period === p ? CANVAS : IRON60,
                          transition: 'all 0.15s',
                        }}
                      >
                        {p === 'annual' ? 'Annual' : 'Monthly'}
                      </button>
                    ))}
                  </div>
                  <div style={{ position: 'relative', width: 110, flexShrink: 0 }}>
                    <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: IRON40, fontSize: 13 }}>$</span>
                    <input
                      type="text"
                      value={row.fullAmount}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/[^0-9.]/g, '');
                        updateRow(row.id, 'fullAmount', raw ? Number(raw).toLocaleString('en-US', { maximumFractionDigits: 0 }) : '');
                      }}
                      placeholder="0"
                      style={{
                        width: '100%', paddingLeft: 22, paddingRight: 8, paddingTop: 7, paddingBottom: 7,
                        border: `1px solid ${IRON20}`, fontSize: 13, outline: 'none',
                        boxSizing: 'border-box', fontFamily: 'inherit', color: IRON,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = RED)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = IRON20)}
                    />
                  </div>
                  <button
                    onClick={() => removeRow(row.id)}
                    style={{
                      padding: 6, color: IRON40, background: 'none', border: 'none',
                      cursor: 'pointer', transition: 'color 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = RED)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = IRON40)}
                    aria-label="Remove"
                  >
                    <IconX />
                  </button>
                </div>
                {closingDate && full > 0 && (
                  <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, paddingLeft: 2 }}>
                    <span style={{ color: IRON40 }}>{days} of {totalDays} days ({rowPct}%)</span>
                    <span style={{ color: IRON20 }}>→</span>
                    <span style={{ fontWeight: 700, color: IRON }}>{fmt(amount)}</span>
                    <span style={{ color: IRON40 }}>buyer's share</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={addRow}
          style={{
            marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 13, color: IRON, fontWeight: 600, background: 'none', border: 'none',
            cursor: 'pointer', textDecoration: 'none', fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = RED)}
          onMouseLeave={(e) => (e.currentTarget.style.color = IRON)}
        >
          <IconPlus />
          Add item
        </button>
      </div>

      {hasData && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
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

/* ── Main export ── */
export default function ClosingCalculator() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div style={{
      backgroundColor: CANVAS, border: `1px solid ${IRON10}`,
      padding: 32, maxWidth: 720, margin: '0 auto',
    }}>
      <h2 style={{
        fontFamily: '"Noto Serif", Georgia, serif', fontSize: 24, fontWeight: 400,
        color: IRON, marginTop: 0, marginBottom: 4,
      }}>Closing Cost Estimator</h2>
      <p style={{ fontSize: 14, color: IRON60, marginBottom: 24 }}>
        Live estimates for buyers and sellers in Roatán. Agent commissions are paid by the seller.
      </p>
      <div style={{ display: 'inline-flex', backgroundColor: PLASTER, padding: 4, marginBottom: 32 }}>
        {(['buyer', 'seller'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            style={{
              padding: '8px 24px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s', border: 'none', fontFamily: 'inherit',
              backgroundColor: role === r ? CANVAS : 'transparent',
              color: role === r ? IRON : IRON40,
              boxShadow: role === r ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            {r === 'buyer' ? 'Buyer' : 'Seller'}
          </button>
        ))}
      </div>
      {role === 'buyer' ? <BuyerPanel /> : <SellerPanel />}
      <p style={{ fontSize: 11, color: IRON40, marginTop: 24 }}>
        * Estimates only. Actual costs vary by transaction and legal counsel.
        Consult a licensed Honduran attorney for exact figures.
      </p>
    </div>
  );
}
