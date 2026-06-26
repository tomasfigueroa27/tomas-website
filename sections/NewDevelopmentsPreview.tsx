import Link from 'next/link';

const projects = [
  {
    name: 'Kimpton Grand Roatán',
    type: 'Branded Resort Residences',
    location: 'West Bay Beach',
    status: 'Operating',
    priceFrom: 'From $420,000',
  },
  {
    name: 'Margaritaville Island Reserve',
    type: 'Resort-Branded Condos',
    location: 'West Bay Beach',
    status: 'Delivering 2027',
    priceFrom: 'From $350,000',
  },
  {
    name: 'Pristine Bay New Phase',
    type: 'Gated Community Villas',
    location: 'East End',
    status: 'Pre-Construction',
    priceFrom: 'From $550,000',
  },
];

export default function NewDevelopmentsPreview() {
  return (
    <section
      style={{
        backgroundColor: '#0a1628',
        paddingTop: 64,
        paddingBottom: 64,
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 36 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>New Developments</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            Pre-construction and resort-branded projects.
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, margin: 0 }}>
            The strongest opportunities are in Roatán&apos;s new development pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4" style={{ marginBottom: 28 }}>
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                padding: 24,
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#789ead',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  margin: '0 0 12px',
                }}
              >
                {project.status}
              </p>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: '0 0 6px',
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.4)',
                  margin: '0 0 14px',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
              >
                {project.type} · {project.location}
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#d4e8ed',
                  margin: 0,
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
              >
                {project.priceFrom}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/new-developments"
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#789ead',
            textDecoration: 'none',
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          See all new developments →
        </Link>
      </div>
    </section>
  );
}
