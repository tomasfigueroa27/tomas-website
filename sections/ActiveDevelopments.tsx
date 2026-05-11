import Link from 'next/link';

const projects = [
  {
    name: 'Starfish at Latitude 16',
    location: 'West Bay · Roatán',
    valueProp: 'Pre-sale oceanfront residences, from $299,999. 14–30% below comparable West Bay product.',
    href: 'https://starfishroatan.com',
    image: '/starfsh.jpg',
  },
  {
    name: 'Blue Vista Roatán',
    location: 'Sandy Bay · Roatán',
    valueProp: 'Premium hillside development. Coming soon.',
    href: 'https://bluevistaroatan.com',
    image: '/bluevista-hero.webp',
    disabled: false,
    badge: 'Coming Soon',
  },
  {
    name: 'More Developments',
    location: 'Roatán & beyond',
    valueProp: 'Prospera, AVA at Luna Azul, and additional Caribbean projects.',
    href: null,
    image: null,
    disabled: true,
    badge: 'Coming Soon',
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
            Each project goes through the same discipline: underwriting first, narrative second.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => {
            const cardContent = (
              <>
                {/* Image */}
                <div
                  style={{
                    height: 180,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: project.disabled ? 0.4 : 1 }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(120,158,173,0.15) 0%, rgba(9,63,79,0.3) 100%)',
                      }}
                    >
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'Arial, Helvetica, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Image coming soon
                      </span>
                    </div>
                  )}
                  {project.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        fontSize: 9,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        backgroundColor: '#789ead',
                        color: '#ffffff',
                        padding: '3px 8px',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#789ead', margin: '0 0 8px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {project.location}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 18,
                      fontWeight: 400,
                      color: project.disabled ? 'rgba(255,255,255,0.3)' : '#ffffff',
                      marginTop: 0,
                      marginBottom: 10,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ fontSize: 13, color: project.disabled ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 20px' }}>
                    {project.valueProp}
                  </p>
                  {!project.disabled && (
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
                      Explore →
                    </span>
                  )}
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
              cursor: project.disabled ? 'default' : 'pointer',
              opacity: project.disabled ? 0.6 : 1,
            };

            if (project.href && !project.disabled) {
              return (
                <Link
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={cardStyle}
                  className="card-hover"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={project.name} style={cardStyle}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
