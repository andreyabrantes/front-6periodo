// database.js
// Responsável por abrir a conexão e inicializar as tabelas do SQLite.
// Mantido em arquivo separado para manter o server.js focado nas rotas.

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, 'database.db');

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
    process.exit(1);
  }
  console.log(`Banco SQLite conectado: ${DB_PATH}`);
});

// Habilita chaves estrangeiras (prática recomendada, mesmo sem FKs atuais).
db.run('PRAGMA foreign_keys = ON');

// Inicialização das tabelas (idempotente: só cria se não existir).
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS agendamentos (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      nomeCliente TEXT    NOT NULL,
      servico     TEXT    NOT NULL,
      data        TEXT    NOT NULL,
      horario     TEXT    NOT NULL,
      email       TEXT,
      telefone    TEXT,
      observacoes TEXT,
      criadoEm    DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS pre_avaliacoes (
      id       INTEGER PRIMARY KEY AUTOINCREMENT,
      respostas TEXT    NOT NULL,
      criadoEm  DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Migração: adiciona colunas novas em bancos criados com o schema anterior.
migrateAgendamentos();

function migrateAgendamentos() {
  const novasColunas = {
    email: 'TEXT',
    telefone: 'TEXT',
    observacoes: 'TEXT',
  };

  db.all('PRAGMA table_info(agendamentos)', [], (err, colunas) => {
    if (err) {
      return console.error('Erro ao inspecionar agendamentos:', err.message);
    }

    const existentes = new Set((colunas || []).map((c) => c.name));
    for (const [coluna, tipo] of Object.entries(novasColunas)) {
      if (!existentes.has(coluna)) {
        db.run(`ALTER TABLE agendamentos ADD COLUMN ${coluna} ${tipo}`, (e) => {
          if (e) console.error(`Erro ao adicionar coluna ${coluna}:`, e.message);
          else console.log(`Coluna agendamentos.${coluna} adicionada.`);
        });
      }
    }
  });
}

module.exports = db;
