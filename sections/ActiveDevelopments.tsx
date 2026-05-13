import Link from 'next/link';

const projects = [
  {
    name: 'Starfish at Latitude 16',
    location: 'West Bay · Roatán',
    valueProp: 'Pre-sale oceanfront residences from $299,999. West Bay beachfront access, short-term rental permissions, and a verified developer track record.',
    href: 'https://starfishroatan.com',
    image: '/starfsh.jpg',
    external: true,
  },
  {
    name: 'Browse All Projects',
    location: 'Roatán · All Areas',
    valueProp: 'See the full pipeline — active projects, pre-construction, and upcoming opportunities across the island. West Bay, Sandy Bay, Pristine Bay, and emerging nodes.',
    href: '/new-developments',
    image: null,
    external: false,
  },
];

export default function ActiveDevelopments() {
  return (
    <section style={{ backgroundColor: '#0a1628', paddingTop: 64, paddingBottom: 64 }}>
      <div className="section-container" style={{ maxWidth: 1100 }}>
        <div style={{ marginBottom: 40 }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Active Developments</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 400,
              color: '#ffffff',
              marginTop: 0,
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Premium projects, currently selling.
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
            Projects evaluated for title clarity, developer track record, rental permissions, and exit liquidity — before they appear here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => {
            const cardContent = (
              <>
                <div
                  style={{
                    height: 200,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(120,158,173,0.15) 0%, rgba(9,63,79,0.3) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>
                        Full Pipeline →
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ padding: '20px 24px 24px' }}>
                  <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead', margin: '0 0 8px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {project.location}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 18,
                      fontWeight: 400,
                      color: '#ffffff',
                      marginTop: 0,
                      marginBottom: 10,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 20px' }}>
                    {project.valueProp}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#789ead',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                    }}
                  >
                    Review New Developments →
                  </span>
                </div>
              </>
            );

            const cardStyle: React.CSSProperties = {
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              display: 'block',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            };

            if (project.external) {
              return (
                <Link key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" style={cardStyle} className="card-hover">
                  {cardContent}
                </Link>
              );
            }
            return (
              <Link key={project.name} href={project.href} style={cardStyle} className="card-hover">
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
