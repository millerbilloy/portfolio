const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
/*app.use(cors({
  origin: function(origin, callback) {
    const permitidas = [
      'http://localhost:5173',
      'https://portfolio-blond-seven-o0bc0856ag.vercel.app'
    ];
    if (!origin || permitidas.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir imagens dos projetos
app.use('/images', express.static('public/images'));

// Rotas
app.use('/api/projetos', require('./routes/projects'));
app.use('/api/contato',  require('./routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
