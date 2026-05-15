-- ============================================
-- PORTFOLIO DATABASE
-- Criado para MySQL 8.0 via Workbench
-- ============================================

CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

-- ============================================
-- TABELA: projetos
-- ============================================
CREATE TABLE IF NOT EXISTS projetos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  titulo      VARCHAR(100)  NOT NULL,
  descricao   TEXT,
  categoria   ENUM('web_design','desenvolvimento','seo') NOT NULL,
  imagem_url  VARCHAR(255),
  link_url    VARCHAR(255),
  destaque    TINYINT(1)   DEFAULT 0,
  ordem       INT          DEFAULT 0,
  criado_em   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABELA: skills
-- ============================================
CREATE TABLE IF NOT EXISTS skills (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  nome      VARCHAR(80) NOT NULL,
  icone     VARCHAR(50),
  nivel     INT DEFAULT 80,
  categoria VARCHAR(50)
);

-- ============================================
-- TABELA: mensagens (formulário de contato)
-- ============================================
CREATE TABLE IF NOT EXISTS mensagens (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  nome       VARCHAR(100) NOT NULL,
  email      VARCHAR(150) NOT NULL,
  assunto    VARCHAR(200),
  mensagem   TEXT         NOT NULL,
  lida       TINYINT(1)  DEFAULT 0,
  criado_em  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABELA: configuracoes (dados do portfólio)
-- ============================================
CREATE TABLE IF NOT EXISTS configuracoes (
  chave  VARCHAR(80)  PRIMARY KEY,
  valor  TEXT
);

-- ============================================
-- DADOS INICIAIS: projetos
-- ============================================
INSERT INTO projetos (titulo, descricao, categoria, imagem_url, link_url, destaque, ordem) VALUES
('HelpDesk IT',     'Sistema de tickets de suporte técnico com React e Node.js', 'desenvolvimento', '/images/projeto1.jpg', '#', 1, 1),
('Dashboard Admin', 'Painel administrativo com gráficos e relatórios',            'web_design',      '/images/projeto2.jpg', '#', 1, 2),
('Landing Page',    'Página de vendas com alta taxa de conversão',                'web_design',      '/images/projeto3.jpg', '#', 0, 3),
('App Mobile Web',  'Aplicação web responsiva para gestão interna',               'desenvolvimento', '/images/projeto4.jpg', '#', 0, 4);

-- ============================================
-- DADOS INICIAIS: skills
-- ============================================
INSERT INTO skills (nome, icone, nivel, categoria) VALUES
('React',       'react',    90, 'frontend'),
('Node.js',     'nodejs',   85, 'backend'),
('MySQL',       'mysql',    80, 'backend'),
('JavaScript',  'js',       90, 'frontend'),
('CSS/SASS',    'css',      85, 'frontend'),
('Git',         'git',      80, 'ferramentas');

-- ============================================
-- DADOS INICIAIS: configuracoes
-- ============================================
INSERT INTO configuracoes (chave, valor) VALUES
('nome',          'Seu Nome'),
('titulo',        'Web Designer & Developer'),
('subtitulo',     'Crio websites elegantes, funcionais e otimizados'),
('email',         'seu@email.com'),
('telefone',      '+XXX XXX XXX XXX'),
('localizacao',   'Sua Cidade, País'),
('linkedin',      'https://linkedin.com/in/seuperfil'),
('github',        'https://github.com/seuperfil'),
('anos_exp',      '6'),
('projetos_total','50'),
('clientes',      '30');
