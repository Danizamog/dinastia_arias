import { Link } from 'react-router-dom';

const SUMMARY_CARDS = [
  {
    id: 'gestion-tecnologias',
    title: 'Gestión de Tecnologías',
    description: 'Estrategia operativa, procesos y control en un motor de excelencia.',
    path: '/gestion-tecnologias',
    bgGradient: 'linear-gradient(135deg, #10191a 0%, #1e2d2f 100%)'
  },
  {
    id: 'ciencia-tecnologia',
    title: 'Ciencia e Innovación',
    description: 'Impulsando el desarrollo a través de la investigación y tecnología.',
    path: '/ciencia-tecnologia-innovacion',
    bgGradient: 'linear-gradient(135deg, #162426 0%, #2a3f42 100%)'
  },
  {
    id: 'mision-vision',
    title: 'Misión y Visión',
    description: 'Nuestra razón de ser y hacia dónde nos dirigimos.',
    path: '/mision-vision',
    bgGradient: 'linear-gradient(135deg, #1a2a2c 0%, #30474b 100%)'
  },
  {
    id: 'organizacion',
    title: 'Organización y Equipo',
    description: 'Conoce nuestro organigrama y el equipo detrás de AITECH.',
    path: '/organizacion',
    bgGradient: 'linear-gradient(135deg, #1c2e30 0%, #355054 100%)'
  },
  {
    id: 'mbti',
    title: 'Perfiles MBTI',
    description: 'Análisis de personalidad y sinergia de nuestro equipo de trabajo.',
    path: '/mbti',
    bgGradient: 'linear-gradient(135deg, #1e3234 0%, #3a595e 100%)'
  },
  {
    id: 'scrum',
    title: 'Metodología SCRUM',
    description: 'Cómo aplicamos agilidad para entregar valor continuo.',
    path: '/scrum',
    bgGradient: 'linear-gradient(135deg, #203638 0%, #3f6267 100%)'
  },
  {
    id: 'idef-0',
    title: 'Modelo IDEF-0',
    description: 'Modelado funcional y estructura de nuestros procesos.',
    path: '/idef-0',
    bgGradient: 'linear-gradient(135deg, #223a3d 0%, #446a70 100%)'
  },
  {
    id: 'bpmn',
    title: 'Diagramas BPMN',
    description: 'Gestión de procesos de negocio detallados.',
    path: '/bpmn',
    bgGradient: 'linear-gradient(135deg, #243f41 0%, #4a737a 100%)'
  },
];

export default function HomeSummaryGrid() {
  return (
    <section className="light-section" style={{ padding: '6rem 6%', background: 'var(--color-offwhite)' }}>
      <div className="section-badge" style={{ marginBottom: '2rem' }}>
        <span className="badge-dot" />
        <span>EXPLORA NUESTRAS ÁREAS</span>
      </div>
      <h2 className="section-heading-xl" style={{ marginBottom: '4rem' }}>
        Resumen de Operaciones
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {SUMMARY_CARDS.map(card => (
          <Link 
            to={card.path} 
            key={card.id}
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
            }}
          >
            <div style={{
              height: '180px',
              background: card.bgGradient,
              position: 'relative'
            }} />
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '1rem', fontWeight: '700' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                {card.description}
              </p>
              <div style={{ marginTop: '1.5rem', color: 'var(--color-lime)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explorar <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
