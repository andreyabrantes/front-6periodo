// server.js
// Servidor Express com CORS configurável, segurança (Helmet + rate limit) e rotas REST.

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middlewares ────────────────────────────────────────────────────────────
app.use(helmet());           // headers de segurança padrão (X-Content-Type-Options, etc.)
app.disable('x-powered-by'); // remove o header que expõe o Express

// CORS com allowlist configurável via variável de ambiente ALLOWED_ORIGINS
// (ex.: ALLOWED_ORIGINS="https://meudominio.com,https://www.meudominio.com").
// Sem a variável, usa um fallback seguro para desenvolvimento local
// (localhost/127.0.0.1 e file://, cujo Origin é "null").
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true); // curl/Postman/same-origin
      if (allowedOrigins.length > 0) {
        return callback(null, allowedOrigins.includes(origin));
      }
      const isDevOrigin =
        /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin) || origin === 'null';
      return callback(null, isDevOrigin);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json({ limit: '100kb' })); // limita o tamanho do corpo JSON

// Rate limiting por IP para mitigar abuso/brute force nas rotas da API.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,                 // máximo de 100 requisições por IP na janela
  standardHeaders: true,    // envia headers RateLimit-*
  legacyHeaders: false,     // desativa X-RateLimit-* (deprecated)
  message: { error: 'Muitas requisições. Tente novamente mais tarde.' },
});
app.use('/api/', apiLimiter);

// ── Helpers ────────────────────────────────────────────────────────────────
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// Normaliza strings opcionais: limita o tamanho e converte vazias em null.
function optionalString(value, maxLength) {
  if (typeof value !== 'string') return null;
  const v = value.trim().slice(0, maxLength);
  return v.length > 0 ? v : null;
}

const LIMITS = {
  nomeCliente: 120,
  servico: 60,
  email: 254,
  telefone: 20,
  observacoes: 500,
};

const RE_DATA = /^\d{4}-\d{2}-\d{2}$/;
const RE_HORARIO = /^\d{2}:\d{2}$/;
const RE_EMAIL = /^[^\s@]+@[^\s@]+$/;

function dataPassada(data) {
  const [ano, mes, dia] = data.split('-').map(Number);
  const d = new Date(ano, mes - 1, dia);
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return d < hoje;
}

// ── Agendamentos ───────────────────────────────────────────────────────────

// POST /api/agendamentos — valida e insere um agendamento.
app.post('/api/agendamentos', (req, res) => {
  const body = req.body || {};

  const nomeCliente = isNonEmptyString(body.nomeCliente)
    ? body.nomeCliente.trim().slice(0, LIMITS.nomeCliente)
    : '';
  const servico = isNonEmptyString(body.servico) ? body.servico.trim().slice(0, LIMITS.servico) : '';
  const data = isNonEmptyString(body.data) ? body.data.trim() : '';
  const horario = isNonEmptyString(body.horario) ? body.horario.trim() : '';

  const email = optionalString(body.email, LIMITS.email);
  const telefone = optionalString(body.telefone, LIMITS.telefone);
  const observacoes = optionalString(body.observacoes, LIMITS.observacoes);

  const erros = [];
  if (!nomeCliente) erros.push('nomeCliente é obrigatório');
  if (!servico) erros.push('servico é obrigatório');
  if (!RE_DATA.test(data)) {
    erros.push('data é obrigatória (formato YYYY-MM-DD)');
  } else if (dataPassada(data)) {
    erros.push('data não pode estar no passado');
  }
  if (!RE_HORARIO.test(horario)) erros.push('horario é obrigatório (formato HH:MM)');
  if (email && !RE_EMAIL.test(email)) erros.push('email inválido');

  if (erros.length > 0) {
    return res.status(400).json({ error: 'Validação falhou', detalhes: erros });
  }

  const sql = `
    INSERT INTO agendamentos (nomeCliente, servico, data, horario, email, telefone, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nomeCliente, servico, data, horario, email, telefone, observacoes], function (err) {
    if (err) {
      console.error('Erro ao inserir agendamento:', err.message);
      return res.status(500).json({ error: 'Erro ao salvar agendamento' });
    }

    res.status(201).json({
      id: this.lastID,
      nomeCliente,
      servico,
      data,
      horario,
      email,
      telefone,
      observacoes,
      criadoEm: new Date().toISOString(),
    });
  });
});

// GET /api/agendamentos — lista agendamentos ordenados por data e horário.
app.get('/api/agendamentos', (req, res) => {
  const sql = 'SELECT * FROM agendamentos ORDER BY data ASC, horario ASC';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Erro ao listar agendamentos:', err.message);
      return res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
    res.json(rows);
  });
});

// ── Pré-Avaliação ──────────────────────────────────────────────────────────

// POST /api/pre-avaliacao — recebe o formulário completo e grava como JSON.
app.post('/api/pre-avaliacao', (req, res) => {
  const respostas = req.body;

  if (!respostas || typeof respostas !== 'object' || Array.isArray(respostas) || Object.keys(respostas).length === 0) {
    return res.status(400).json({ error: 'É necessário enviar um objeto JSON com as respostas' });
  }

  // Guarda contra payloads excessivamente largos.
  if (Object.keys(respostas).length > 200) {
    return res.status(400).json({ error: 'Payload inválido: muitos campos' });
  }

  const json = JSON.stringify(respostas);
  const sql = 'INSERT INTO pre_avaliacoes (respostas) VALUES (?)';

  db.run(sql, [json], function (err) {
    if (err) {
      console.error('Erro ao salvar pré-avaliação:', err.message);
      return res.status(500).json({ error: 'Erro ao salvar pré-avaliação' });
    }

    res.status(201).json({
      id: this.lastID,
      respostas,
      criadoEm: new Date().toISOString(),
    });
  });
});

// GET /api/pre-avaliacao — consulta os registros salvos (respostas já convertidas para objeto).
app.get('/api/pre-avaliacao', (req, res) => {
  const sql = 'SELECT * FROM pre_avaliacoes ORDER BY criadoEm DESC, id DESC';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Erro ao listar pré-avaliações:', err.message);
      return res.status(500).json({ error: 'Erro ao listar pré-avaliações' });
    }

    const resultado = rows.map((linha) => {
      let respostas;
      try {
        respostas = JSON.parse(linha.respostas);
      } catch (e) {
        respostas = linha.respostas; // fallback: retorna a string crua se o JSON estiver corrompido
      }
      return { ...linha, respostas };
    });

    res.json(resultado);
  });
});

// ── Disponibilidade ────────────────────────────────────────────────────────

// GET /api/horarios-ocupados — lista os horários já ocupados na data informada.
app.get('/api/horarios-ocupados', (req, res) => {
  const data = typeof req.query.data === 'string' ? req.query.data.trim() : '';

  if (!RE_DATA.test(data)) {
    return res.status(400).json({ error: 'Parâmetro data é obrigatório (formato YYYY-MM-DD)' });
  }

  const sql = 'SELECT DISTINCT horario FROM agendamentos WHERE data = ? ORDER BY horario ASC';

  db.all(sql, [data], (err, rows) => {
    if (err) {
      console.error('Erro ao consultar horários ocupados:', err.message);
      return res.status(500).json({ error: 'Erro ao consultar horários ocupados' });
    }
    res.json({ data, ocupados: rows.map((r) => r.horario) });
  });
});

// ── 404 ────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// ── Inicialização ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
