export default function LifestyleThesis() {
  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 72, paddingBottom: 72 }}>
      <div className="section-container" style={{ maxWidth: 860 }}>
        <span className="label-caps block mb-4" style={{ color: '#789ead' }}>The Thesis</span>
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 400,
            color: '#ffffff',
            marginTop: 0,
            marginBottom: 28,
            lineHeight: 1.2,
          }}
        >
          A Caribbean lifestyle still in early discovery.
        </h2>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }} className="space-y-4">
          <p>
            Roatán still offers something increasingly rare: a simple, small-island Caribbean lifestyle before the best parts of the island become obvious to everyone else.
          </p>
          <p>
            The island is still small. The lifestyle is still quiet. The reef is still right there. The communities still feel personal. Yet the market is changing — airlift is improving, branded hospitality is arriving, and new projects are raising the standard. International buyers are starting to see Roatán as more than a diving destination.
          </p>
        </div>
        <blockquote
          style={{
            margin: '36px 0 0',
            padding: '0 0 0 20px',
            borderLeft: '3px solid #789ead',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontStyle: 'italic',
            color: '#d4e8ed',
            lineHeight: 1.5,
          }}
        >
          &ldquo;That is the opportunity. To discover Roatán before the market becomes easy.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
