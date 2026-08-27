// api.js
// Helpers de integração entre o front-end e o back-end local (Express + SQLite).
// Carregado por agendar.html e pre-avaliacao.html.

const API_BASE = 'http://localhost:3000';

// Envia um POST JSON e lança erro com mensagem amigável se a resposta não for 2xx.
async function postJSON(url, payload) {
  const res = await fetch(`${API_BASE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const detalhes = Array.isArray(data.detalhes) ? ` (${data.detalhes.join('; ')})` : '';
    throw new Error(`${data.error || 'Erro inesperado no servidor'}${detalhes}`);
  }

  return data;
}

// Converte um Date em "YYYY-MM-DD" sem deslocamento de fuso horário.
function toISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
