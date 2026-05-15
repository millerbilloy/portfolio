import { useState } from 'react';
import { useConfig, enviarMensagem } from '../hooks/useApi';

const s = {
  section: {
    padding: '80px 40px',
    borderTop: '0.5px solid var(--border)',
  },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
  },
  h3: {
    fontSize: '16px', letterSpacing: '1px',
    color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
    marginBottom: '8px',
  },
  p: {
    fontSize: '13px', color: 'var(--text-muted)',
    fontFamily: 'var(--font-body)', lineHeight: 1.7, marginBottom: '28px',
  },
  detalhe: {
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '13px', color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)', marginBottom: '12px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  input: {
    background: 'var(--bg-secondary)', border: '0.5px solid var(--border)',
    color: 'var(--text-primary)', padding: '12px 16px',
    fontSize: '13px', fontFamily: 'var(--font-body)',
    borderRadius: '2px', outline: 'none', width: '100%',
    transition: 'border-color 0.2s',
  },
  btnSubmit: {
    background: 'var(--accent)', border: 'none',
    color: '#0a0a0a', padding: '14px 32px',
    fontSize: '12px', letterSpacing: '1.5px',
    textTransform: 'uppercase', cursor: 'pointer',
    fontFamily: 'var(--font-body)', alignSelf: 'flex-start',
    borderRadius: '2px', transition: 'opacity 0.2s',
  },
};

const campoFocus  = e => e.target.style.borderColor = 'var(--accent)';
const campoBlur   = e => e.target.style.borderColor = 'var(--border)';

export default function Contact() {
  const { config } = useConfig();
  const [form, setForm]     = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState(''); // 'enviando' | 'ok' | 'erro'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.nome || !form.email || !form.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setStatus('enviando');
    try {
      await enviarMensagem(form);
      setStatus('ok');
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch {
      setStatus('erro');
    }
  };

  return (
    <section id="contato" style={s.section}>
      <div style={s.grid}>
        <div>
          <h3 style={s.h3}>Vamos Conversar?</h3>
          <p style={s.p}>Tem um projeto em mente? Estou disponível para novos desafios.</p>
          <div style={s.detalhe}>✉ {config.email || 'mbeco.hl@gmail.com'}</div>
          <div style={s.detalhe}>✆ {config.telefone || '+238 9549337'}</div>
          <div style={s.detalhe}>⌖ {config.localizacao || 'Praia, Cabo Verde'}</div>
        </div>

        <div style={s.form}>
          <div style={s.row}>
            <input style={s.input} placeholder="Nome *" name="nome"
              value={form.nome} onChange={handleChange}
              onFocus={campoFocus} onBlur={campoBlur} />
            <input style={s.input} placeholder="Email *" name="email" type="email"
              value={form.email} onChange={handleChange}
              onFocus={campoFocus} onBlur={campoBlur} />
          </div>
          <input style={s.input} placeholder="Assunto" name="assunto"
            value={form.assunto} onChange={handleChange}
            onFocus={campoFocus} onBlur={campoBlur} />
          <textarea style={{ ...s.input, resize: 'none' }} rows={5}
            placeholder="Mensagem *" name="mensagem"
            value={form.mensagem} onChange={handleChange}
            onFocus={campoFocus} onBlur={campoBlur} />

          {status === 'ok' &&
            <p style={{ color: '#5dca7a', fontSize: '13px', fontFamily: 'sans-serif' }}>
              ✓ Mensagem enviada com sucesso!
            </p>}
          {status === 'erro' &&
            <p style={{ color: '#e24b4a', fontSize: '13px', fontFamily: 'sans-serif' }}>
              ✗ Erro ao enviar. Tente novamente.
            </p>}

          <button style={{ ...s.btnSubmit, opacity: status === 'enviando' ? 0.6 : 1 }}
            onClick={handleSubmit} disabled={status === 'enviando'}>
            {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem →'}
          </button>
        </div>
      </div>
    </section>
  );
}
