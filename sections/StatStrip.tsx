const stats = [
  { value: '20+ Years', label: 'International sales & advisory experience' },
  { value: '3', label: 'International hotel brands now operating — Kimpton, Margaritaville & Meliá' },
  { value: '49 mi²', label: 'Island scale — limited premium coastal nodes' },
  { value: '5+', label: 'Direct US & Canada nonstop routes year-round' },
];

export default function StatStrip() {
  return (
    <div style={{ backgroundColor: '#093f4f', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                padding: '20px 16px',
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
