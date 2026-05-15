import { useState, useEffect } from 'react';

const links = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Contacto',  href: '#contato' },
];

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '0.5px solid var(--border)',
    transition: 'background 0.4s ease',
  },
  logo: {
    fontFamily: 'var(--font-display)', fontSize: '22px',
    fontWeight: 700, letterSpacing: '2px', color: 'var(--text-primary)',
  },
  links: {
    display: 'flex', gap: '32px', listStyle: 'none',
  },
  link: {
    fontSize: '12px', letterSpacing: '0.5px',
    color: 'var(--text-secondary)', transition: 'color 0.2s',
    textDecoration: 'none',
  },
  btn: {
    background: 'transparent', border: '1px solid var(--accent)',
    color: 'var(--accent)', padding: '8px 22px',
    fontSize: '11px', letterSpacing: '1.5px', cursor: 'pointer',
    fontFamily: 'var(--font-body)', textTransform: 'uppercase',
    transition: 'all 0.3s',
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <div style={styles.logo}>HELDER LOPES</div>

      <ul style={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={styles.link}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button style={styles.btn}
        onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#0a0a0a'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
        onClick={() => document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })}>
        Contactar
      </button>
    </nav>
  );
}
