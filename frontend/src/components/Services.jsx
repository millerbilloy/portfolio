const servicos = [
  {
    icone: '⬛',
    titulo: 'Web Design',
    descricao: 'Criação de interfaces modernas, elegantes e focadas na experiência do usuário.',
  },
  {
    icone: '⟨/⟩',
    titulo: 'Desenvolvimento',
    descricao: 'Desenvolvimento de websites rápidos, responsivos e com as melhores tecnologias.',
  },
  {
    icone: '↗',
    titulo: 'SEO & Performance',
    descricao: 'Otimização para mecanismos de busca e melhor performance para gerar mais resultados.',
  },
];

const s = {
  section: { padding: '80px 40px' },
  title: {
    textAlign: 'center', fontSize: '11px', letterSpacing: '3px',
    textTransform: 'uppercase', color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)', marginBottom: '48px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
  },
  card: {
    background: 'var(--bg-secondary)', border: '0.5px solid var(--border)',
    padding: '32px', borderRadius: '4px', transition: 'border-color 0.3s',
    cursor: 'default',
  },
  icone: { fontSize: '22px', marginBottom: '20px', display: 'block' },
  titulo: {
    fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
    color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
    marginBottom: '12px',
  },
  descricao: {
    fontSize: '13px', color: 'var(--text-muted)',
    lineHeight: 1.8, fontFamily: 'var(--font-body)', marginBottom: '20px',
  },
  link: {
    fontSize: '11px', color: 'var(--accent)', letterSpacing: '1px',
    textTransform: 'uppercase', fontFamily: 'var(--font-body)',
  },
};

export default function Services() {
  return (
    <section id="servicos" style={s.section}>
      <p style={s.title}>O que eu faço</p>
      <div style={s.grid}>
        {servicos.map((sv) => (
          <div key={sv.titulo} style={s.card}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <span style={s.icone}>{sv.icone}</span>
            <p style={s.titulo}>{sv.titulo}</p>
            <p style={s.descricao}>{sv.descricao}</p>
            <span style={s.link}>Saiba mais →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
