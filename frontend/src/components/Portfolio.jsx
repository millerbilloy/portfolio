import { useProjetos } from '../hooks/useApi';

const CATEGORIAS = [
  { valor: '', label: 'Todos' },
  { valor: 'web_design', label: 'Web Design' },
  { valor: 'desenvolvimento', label: 'Desenvolvimento' },
  { valor: 'seo', label: 'SEO' },
];

const s = {
  section: { padding: '0 40px 80px' },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: '12px',
  },
  label: {
    fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
    color: 'var(--text-muted)', fontFamily: 'var(--font-body)',
  },
  verTodos: {
    fontSize: '12px', color: 'var(--accent)',
    fontFamily: 'var(--font-body)', cursor: 'pointer',
  },
  filtros: {
    display: 'flex', gap: '8px', marginBottom: '24px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px',
  },
  card: {
    background: 'var(--bg-card)', borderRadius: '4px',
    overflow: 'hidden', aspectRatio: '16/9',
    position: 'relative', cursor: 'pointer',
    border: '0.5px solid var(--border)', transition: 'border-color 0.3s',
  },
  overlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: '16px 20px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
  },
  titulo: {
    fontSize: '14px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
  },
  catLabel: {
    fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px',
    textTransform: 'uppercase', fontFamily: 'var(--font-body)',
  },
};

function BtnFiltro({ ativo, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: ativo ? 'var(--accent)' : 'transparent',
      border: `1px solid ${ativo ? 'var(--accent)' : 'var(--border-hover)'}`,
      color: ativo ? '#0a0a0a' : 'var(--text-secondary)',
      padding: '6px 16px', fontSize: '11px', letterSpacing: '1px',
      cursor: 'pointer', fontFamily: 'var(--font-body)',
      textTransform: 'uppercase', borderRadius: '2px', transition: 'all 0.2s',
    }}>
      {children}
    </button>
  );
}

import { useState } from 'react';

export default function Portfolio() {
  const [filtro, setFiltro] = useState('');
  const { projetos, carregando } = useProjetos(filtro ? { categoria: filtro } : {});

  return (
    <section id="portfolio" style={s.section}>
      <div style={s.header}>
        <p style={s.label}>Trabalhos Selecionados</p>
        <span style={s.verTodos}>Ver todos os projetos →</span>
      </div>

      <div style={s.filtros}>
        {CATEGORIAS.map(c => (
          <BtnFiltro key={c.valor} ativo={filtro === c.valor} onClick={() => setFiltro(c.valor)}>
            {c.label}
          </BtnFiltro>
        ))}
      </div>

      {carregando ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-body)' }}>
          Carregando projetos...
        </p>
      ) : (
        <div style={s.grid}>
          {projetos.map(p => (
            <div key={p.id} style={s.card}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              {p.imagem_url && (
                <img src={p.imagem_url} alt={p.titulo}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              <div style={s.overlay}>
                <span style={s.titulo}>{p.titulo}</span>
                <span style={s.catLabel}>{p.categoria.replace('_', ' ')}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
