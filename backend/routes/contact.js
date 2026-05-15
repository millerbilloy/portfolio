const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
const db         = require('../db/connection');
require('dotenv').config();

// Configuração do transporter de email
const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST,
  port:   process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false   // ← adicione esta linha
  }
});

// POST /api/contato — recebe mensagem do formulário
router.post('/', async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Validação básica
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ sucesso: false, erro: 'Preencha todos os campos obrigatórios.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ sucesso: false, erro: 'E-mail inválido.' });
  }

  try {
    // Salvar no banco
    await db.query(
      'INSERT INTO mensagens (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)',
      [nome, email, assunto || 'Sem assunto', mensagem]
    );

    // Enviar email de notificação
    await transporter.sendMail({
      from:    `"Portfólio" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_DESTINO,
      subject: `Nova mensagem de ${nome}: ${assunto || 'Sem assunto'}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto || '—'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({ sucesso: true, mensagem: 'Mensagem enviada com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, erro: 'Erro ao enviar mensagem. Tente novamente.' });
  }
});

// GET /api/contato/config — retorna dados de contato públicos
router.get('/config', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT chave, valor FROM configuracoes');
    const config = {};
    rows.forEach(r => { config[r.chave] = r.valor; });
    res.json({ sucesso: true, dados: config });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, erro: 'Erro ao buscar configurações' });
  }
});

module.exports = router;
