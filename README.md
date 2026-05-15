# Portfólio Pessoal
**Stack:** React + Node.js + MySQL

---

## Pré-requisitos
- Node.js 18+
- MySQL 8.0 (via Workbench)
- npm ou yarn

---

## 1. Banco de Dados (MySQL Workbench)

1. Abra o **MySQL Workbench**
2. Conecte ao seu servidor local
3. Abra o arquivo `database/portfolio.sql`
4. Execute com **Ctrl+Shift+Enter**

---

## 2. Backend (Node.js + Express)

```bash
cd backend
npm install
```

Edite o arquivo `.env` com suas credenciais:
```
DB_PASSWORD=sua_senha_mysql
EMAIL_USER=seu@gmail.com
EMAIL_PASS=sua_app_password_gmail
```

> Para o Gmail, gere uma **App Password** em: myaccount.google.com > Segurança > Senhas de app

Inicie o servidor:
```bash
npm run dev     # desenvolvimento (com nodemon)
npm start       # produção
```

Servidor rodando em: **http://localhost:3001**

---

## 3. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend rodando em: **http://localhost:5173**

---

## 4. Personalização

### Dados pessoais
No MySQL Workbench, edite a tabela `configuracoes`:
```sql
USE portfolio_db;
UPDATE configuracoes SET valor = 'Seu Nome Real'      WHERE chave = 'nome';
UPDATE configuracoes SET valor = 'seu@email.com'      WHERE chave = 'email';
UPDATE configuracoes SET valor = '+238 XXX XXXX'      WHERE chave = 'telefone';
UPDATE configuracoes SET valor = 'Santa Maria, Sal'   WHERE chave = 'localizacao';
```

### Fotos
Adicione suas imagens em `frontend/public/images/`:
- `foto-perfil.jpg` — foto principal do hero
- `sobre-foto.jpg`  — foto da seção sobre
- `projeto1.jpg`, `projeto2.jpg`... — imagens dos projetos

### Projetos
```sql
INSERT INTO projetos (titulo, descricao, categoria, imagem_url, link_url, destaque, ordem)
VALUES ('Nome do Projeto', 'Descrição', 'desenvolvimento', '/images/projeto5.jpg', 'https://link.com', 1, 5);
```

### Seu nome no Navbar e Footer
Edite `frontend/src/components/Navbar.jsx` linha 39 e `frontend/src/App.jsx` linha 17.

---

## Estrutura de Pastas

```
portfolio/
├── frontend/
│   ├── public/images/        ← suas fotos aqui
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── Services.jsx
│       │   ├── Portfolio.jsx
│       │   ├── About.jsx
│       │   └── Contact.jsx
│       ├── hooks/useApi.js
│       ├── styles/global.css
│       └── App.jsx
├── backend/
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   ├── db/connection.js
│   ├── server.js
│   └── .env
└── database/
    └── portfolio.sql
```

---

## APIs disponíveis

| Método | Endpoint                    | Descrição                  |
|--------|-----------------------------|----------------------------|
| GET    | /api/projetos               | Lista todos os projetos     |
| GET    | /api/projetos?categoria=... | Filtra por categoria        |
| GET    | /api/projetos/:id           | Busca um projeto            |
| POST   | /api/contato                | Envia mensagem de contato   |
| GET    | /api/contato/config         | Retorna dados de contato    |
| GET    | /api/health                 | Verifica se o servidor está ok |
