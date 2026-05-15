const express = require('express');
const router  = express.Router();
const db      = require('../db/connection');

// GET /api/projetos — lista todos os projetos
router.get('/', async (req, res) => {
  try {
    const { categoria, destaque } = req.query;
    let sql    = 'SELECT * FROM projetos WHERE 1=1';
    const params = [];

    if (categoria) { sql += ' AND categoria = ?'; params.push(categoria); }
    if (destaque)  { sql += ' AND destaque = 1'; }

    sql += ' ORDER BY ordem ASC';

    const [rows] = await db.query(sql, params);
    res.json({ sucesso: true, dados: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, erro: 'Erro ao buscar projetos' });
  }
});

// GET /api/projetos/:id — busca um projeto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projetos WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ sucesso: false, erro: 'Projeto não encontrado' });
    res.json({ sucesso: true, dados: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, erro: 'Erro ao buscar projeto' });
  }
});

module.exports = router;
