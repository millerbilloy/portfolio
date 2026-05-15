import { useConfig } from '../hooks/useApi';

const s = {
  wrapper: { padding: '0 40px 80px' },
  card: {
    display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '48px',
    background: 'var(--bg-secondary)', border: '0.5px solid var(--border)',
    borderRadius: '8px', padding: '48px',
  },
  imgBox: {
    background: '#1a1a1a', borderRadius: '4px', minHeight: '260px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  },
    foto: {                      // ← adicione isto
    width: '60%',
    height: '60%',
    objectFit: 'cover',
    display: 'block',
  },
  label: {
    fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
    color: 'var(--text-muted)', fontFamily: 'var(--font-body)', marginBottom: '12px',
  },
  h2: {
    fontFamily: 'var(--font-display)', fontSize: '34px',
    color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '20px',
  },
  p: {
    fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8,
    fontFamily: 'var(--font-body)', marginBottom: '32px',
  },
  statsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px',
  },
  statNum: {
    fontFamily: 'var(--font-display)', fontSize: '36px',
    color: 'var(--accent)', fontWeight: 700, lineHeight: 1,
  },
  statLabel: {
    fontSize: '12px', color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)', marginTop: '4px',
  },
};

export default function About() {
  const { config } = useConfig();

  const stats = [
    { num: `${config.anos_exp || 6}+`,         label: 'Anos de experiência' },
    { num: `${config.projetos_total || 20}+`,  label: 'Projetos concluídos' },
    { num: `${config.clientes || 30}+`,        label: 'Clientes satisfeitos' },
    { num: '100%',                              label: 'Dedicação' },
  ];

  return (
    <section id="sobre" style={s.wrapper}>
      <div style={s.card}>
        <div style={s.imgBox}>
          <img
            src="/images/foto-perfil.jpg"
            alt="Sobre mim"
            style={s.foto}   
            onError={e => {
              e.target.parentElement.innerHTML =
                '<span style="color:#333;font-size:12px;font-family:sans-serif">[ foto sobre mim ]</span>';
            }}
          />
        </div>
        <div>
          <p style={s.label}>Sobre Mim</p>
          <h2 style={s.h2}>Transformo ideias em experiências digitais.</h2>
          <p style={s.p}>
            Sou apaixonado por tecnologia e por criar soluções que fazem a diferença.
            Combinando criatividade e código, ajudo marcas a crescerem no ambiente digital.
          </p>
          <a href="#contato" className="btn-primary" style={{ marginBottom: '36px', display: 'inline-flex' }}>
            Sobre Mim
          </a>
          <div style={s.statsGrid}>
            {stats.map(st => (
              <div key={st.label}>
                <div style={s.statNum}>{st.num}</div>
                <div style={s.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
