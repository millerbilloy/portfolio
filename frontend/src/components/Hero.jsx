const s = {
  section: {
    minHeight: '100vh', display: 'grid',
    gridTemplateColumns: '1fr 1fr', alignItems: 'center',
    padding: '100px 40px 60px', gap: '60px',
  },
  label: {
    fontSize: '12px', letterSpacing: '3px',
    textTransform: 'uppercase', color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)', marginBottom: '12px',
  },
  h1: {
    fontFamily: 'var(--font-display)', fontSize: '72px',
    fontWeight: 700, color: 'var(--accent)', lineHeight: 1,
    marginBottom: '4px',
  },
  h2: {
    fontFamily: 'var(--font-display)', fontSize: '58px',
    fontWeight: 400, color: 'var(--text-primary)',
    lineHeight: 1.05, marginBottom: '24px',
  },
  p: {
    fontSize: '14px', color: 'var(--text-secondary)',
    lineHeight: 1.8, maxWidth: '380px',
    fontFamily: 'var(--font-body)', marginBottom: '40px',
  },
  btns: { display: 'flex', gap: '24px', alignItems: 'center' },
  btnPlay: {
    display: 'flex', alignItems: 'center', gap: '12px',
    color: 'var(--text-secondary)', fontSize: '12px',
    letterSpacing: '1px', cursor: 'pointer', background: 'none', border: 'none',
    fontFamily: 'var(--font-body)', textTransform: 'uppercase',
  },
  playCircle: {
    width: '40px', height: '40px', borderRadius: '50%',
    border: '1px solid var(--border-hover)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', color: 'var(--text-secondary)',
  },
  imgBox: {
    display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
    background: '#111', borderRadius: '8px', height: '500px', overflow: 'hidden',
  },
  techBar: {
    display: 'flex', gap: '40px', justifyContent: 'center',
    alignItems: 'center', padding: '20px 40px', flexWrap: 'wrap',
    borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)',
  },
  techItem: {
    fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px',
    fontFamily: 'var(--font-body)',
  }
};

const TECHS = ['React', 'Node.js', 'MySQL', 'JavaScript', 'CSS/Sass', 'Git'];

export default function Hero() {
  return (
    <>
      <section id="inicio" style={s.section}>
        <div>
          <p style={s.label}>Olá, eu sou</p>
          <h1 style={s.h1}>HÉLDER LOPES</h1>
          <h2 style={s.h2}>
            IT Generalist<br />
            <em>& Jack of all trade</em>
          </h2>
          <p style={s.p}>
            Profissional Generalista de Tecnologias de Informação com experiência em suporte, redes, sistemas, hardware e desenvolvimento.
          </p>
          <div style={s.btns}>
            <a href="#portfolio" className="btn-primary">Ver Portfólio →</a>
            <button style={s.btnPlay}>
              <span style={s.playCircle}>▶</span>
              Ver Apresentação
            </button>
          </div>
        </div>

        <div style={s.imgBox}>
          {/* Substitua pela sua foto */}
          <img
            src="/images/foto-perfil.jpg"
            alt="Foto de perfil"
            style={{ objectPosition: 'top',
                      width: '500px',
                      height: '500px',
                      objectFit: 'cover',
                      alignSelf: 'center'
             }}
            onError={e => {
              e.target.parentElement.innerHTML =
                '<div style="color:#333;font-size:13px;padding:20px;font-family:sans-serif;text-align:center">[ sua foto aqui ]<br><small>Adicione em frontend/public/images/foto-perfil.jpg</small></div>';
            }}
          />
        </div>
      </section>

      <div style={s.techBar}>
        {TECHS.map(t => <span key={t} style={s.techItem}>{t}</span>)}
      </div>
    </>
  );
}
