const stats = [
  { value: '7%', label: '5-year CAGR of median sold price' },
  { value: '$400K', label: 'Avg home price 2025' },
  { value: '20+', label: 'Years of Sales Experience' },
  { value: '$1B+', label: 'Hospitality pipeline arriving in Roatán' },
];

export default function StatStrip() {
  return (
    <div style={{ backgroundColor: '#093f4f', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '20px 16px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#d4e8ed',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 6,
                  marginBottom: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
