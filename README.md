<div align="center">

# 🌿 Consultório Ramos

**Site institucional** moderno e responsivo para a **Dra. Fernanda Ramos** — especialista em **Endocrinologia, Metabologia e Menopausa**.

`HTML5` · `CSS3` · `JavaScript` · `Node.js` · `Express` · `SQLite` · `EmailJS`

</div>

---

## 📑 Sumário

1. [🌟 Sobre o Projeto](#-sobre-o-projeto)
2. [✨ Funcionalidades](#-funcionalidades)
3. [🛠️ Tecnologias](#️-tecnologias)
4. [🗂️ Estrutura de Arquivos](#️-estrutura-de-arquivos)
5. [📄 Páginas](#-páginas)
6. [🎨 Identidade Visual](#-identidade-visual)
7. [✨ Animações e Efeitos](#-animações-e-efeitos)
8. [📱 Responsividade](#-responsividade)
9. [📧 Integração EmailJS](#-integração-emailjs)
10. [⚙️ Backend (API REST)](#️-backend-api-rest)
11. [🔒 Segurança](#-segurança)
12. [🚀 Como Usar](#-como-usar)
13. [👥 Equipe](#-equipe)

---

## 🌟 Sobre o Projeto

Plataforma institucional com foco em **saúde hormonal**, **controle de peso** e **bem-estar**. Une um front-end leve e elegante (HTML, CSS e JavaScript puros, sem frameworks) a um backend opcional em **Node.js + Express + SQLite**, responsável por persistir agendamentos e pré-avaliações.

O design usa uma **paleta pastel** (roxo, verde e azul) e efeitos visuais sofisticados — blobs animados, partículas flutuantes e animações de *scroll reveal* — para transmitir acolhimento e modernidade.

> 💡 **Diferencial:** o front-end funciona de forma **100% independente** (basta abrir o `index.html`). O backend só é necessário para gravar os dados no banco; o envio de e-mails via **EmailJS** acontece direto do navegador.

---

## ✨ Funcionalidades

### 🖥️ Front-end

- 🏠 **Landing page** com hero, cards informativos em *accordion*, depoimentos e CTA.
- 👩‍⚕️ **Página "Sobre"** com bio, especialidades e chamada para agendamento.
- 📅 **Agendamento** com calendário interativo (bloqueia fins de semana e datas passadas), grade de horários e formulário.
- 📋 **Pré-avaliação** em formulário multi-etapas com barra de progresso animada.
- 📧 **Envio de e-mails** de confirmação e de pré-avaliação via EmailJS.
- 📱 **Layout responsivo** com menu hamburger e tipografia fluida.

### ⚙️ Back-end (API)

- 🔌 **REST API** em Express com rotas para agendamentos e pré-avaliações.
- 🗄️ **Persistência** em SQLite com criação automática de tabelas e migração.
- 🛡️ **Segurança**: Helmet, rate limiting, CORS configurável e validação de entrada.
- 📦 **Zero build**: nenhuma etapa de compilação necessária.

---

## 🛠️ Tecnologias

| Camada | Tecnologias |
|---|---|
| **Front-end** | HTML5, CSS3, JavaScript (vanilla), Google Fonts |
| **Back-end** | Node.js, Express, SQLite (`sqlite3`) |
| **Integração** | [EmailJS](https://emailjs.com) (envio de e-mails no cliente) |
| **Segurança** | Helmet, express-rate-limit, CORS |
| **Dev** | Nodemon (auto-reload) |

---

## 🗂️ Estrutura de Arquivos

```
.
├── index.html               # 🏠 Página inicial (landing page)
├── script.js                # ⚡ Scripts compartilhados (hamburger, accordion, scroll reveal)
├── style.css                # 🎨 Estilos globais, navbar, hero e componentes compartilhados
│
├── sobre.html               # 👩‍⚕️ Página "Sobre" — bio da Dra. Fernanda Ramos
├── sobre.css                # 🎨 Estilos específicos da página Sobre
│
├── agendar.html             # 📅 Página de agendamento de consultas
├── agendar.css              # 🎨 Estilos específicos da página Agendar
│
├── pre-avaliacao.html       # 📋 Página de pré-avaliação (formulário multi-etapas)
├── pre-avaliacao.css        # 🎨 Estilos específicos da página Pré-Avaliação
│
├── api.js                   # 🔌 Helpers de integração com o backend (fetch)
│
├── backend/                 # ⚙️ API Node.js + Express + SQLite
│   ├── server.js            #   Rotas REST + middlewares de segurança
│   ├── database.js          #   Conexão e schema do SQLite
│   ├── package.json         #   Dependências e scripts
│   └── database.db          #   Banco local (ignorado pelo Git)
│
└── README.md                # 📖 Documentação do projeto
```

---

## 📄 Páginas

### 🏠 `index.html` — Início

| Seção | Descrição |
|---|---|
| **Navbar** | Navegação fixa com blur, links e botão de agendamento |
| **Hero** | Título, tagline, botões de CTA, trust badges e bloco de estatísticas |
| **Banner Marquee** | Faixa animada com palavras-chave do consultório |
| **Cards Informativos** | 3 cards *accordion* expansíveis com conteúdo educativo |
| **Depoimentos** | 3 cards com avaliações de pacientes |
| **CTA** | Chamada para agendamento com botões de contato |
| **Footer** | Endereço, telefone e direitos autorais |

### 👩‍⚕️ `sobre.html` — Sobre

| Seção | Descrição |
|---|---|
| **Hero** | Badge, título e tagline da especialista |
| **Bio** | Apresentação da Dra. Fernanda Ramos com botão de agendamento |
| **Especialidades** | 3 cards com as áreas de atuação |
| **CTA + Footer** | Chamada para agendamento e rodapé |

### 📅 `agendar.html` — Agendar Consulta

| Seção | Descrição |
|---|---|
| **Hero** | Título e tagline da página |
| **Calendário** | Navegação por mês e seleção de datas disponíveis (bloqueia fins de semana e datas passadas) |
| **Horários** | Grade de slots disponíveis/ocupados para a data selecionada |
| **Formulário** | Nome, telefone, e-mail, tipo de consulta e observações |
| **Resumo** | Exibe data e horário selecionados em tempo real |
| **Modal Sucesso/Erro** | Feedback após o envio via EmailJS |

### 📋 `pre-avaliacao.html` — Pré-Avaliação

Formulário multi-etapas com barra de progresso animada.

| Etapa | Campos |
|---|---|
| **1 — Dados Pessoais** | Nome, data de nascimento, CPF, sexo, telefone, e-mail, peso, altura, convênio |
| **2 — Saúde Geral** | Motivo da consulta, doenças diagnosticadas, alergias, medicamentos, histórico familiar |
| **3 — Estilo de Vida** | Atividade física, alimentação, nível de estresse (slider), sono, tabagismo, observações |

Ao enviar, os dados são persistidos no banco (via API) e um e-mail formatado é disparado para o consultório via **EmailJS**.

---

## 🎨 Identidade Visual

### Paleta de Cores

| Variável | Hex | Uso |
|---|---|---|
| `--purple` | `#795ea0` | Cor primária, botões, destaques |
| `--purple2` | `#c4b3df` | Bordas, elementos secundários |
| `--purple3` | `#ede6f7` | Fundos suaves, badges |
| `--green` | `#9fc392` | Blobs e cards verdes |
| `--blue` | `#74a3b2` | Blobs, cards azuis, gradientes |
| `--dark` | `#1e1b2e` | Textos principais |
| `--gray` | `#6b7280` | Textos secundários |
| `--bg` | `#f4f0fa` | Fundo geral |

### Tipografia

| Fonte | Uso |
|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Títulos, números de destaque, citações |
| [Inter](https://fonts.google.com/specimen/Inter) | Corpo de texto, labels, botões |

Ambas carregadas via **Google Fonts**.

---

## ✨ Animações e Efeitos

- 🫧 **Blobs animados** — formas circulares com `filter: blur` flutuando nos heroes.
- ✨ **Partículas flutuantes** — 8 partículas coloridas subindo em loop.
- 🌈 **Gradiente animado** — texto em destaque com `gradientShift` contínuo.
- 🔵 **Badge dot pulsante** — indicador animado nos badges.
- 👁️ **Scroll Reveal** — seções entram com fade + `translateY` via `IntersectionObserver`.
- 🎞️ **Marquee** — banner com palavras-chave deslizando em loop.
- 🃏 **Hover nos cards** — elevação suave com `translateY` e `box-shadow`.
- 🪜 **Stepper animado** — barra de progresso e dots com transição de estado na pré-avaliação.

---

## 📱 Responsividade

- Hero empilha verticalmente em telas `≤ 768px`.
- Menu de navegação vira **hamburger** no mobile.
- Grid de agendamento passa para **coluna única** no mobile.
- Formulário de pré-avaliação adapta colunas para `1fr` no mobile.
- Tipografia fluida com `clamp()` nos títulos principais.

---

## 📧 Integração EmailJS

As páginas de agendamento e pré-avaliação utilizam o [EmailJS](https://emailjs.com) para envio de e-mails **sem backend**.

| Chave | Valor |
|---|---|
| **Public Key** | `tDOOgh3i3HfAYauD6` |
| **Service ID** | `service_j3r3arh` |
| **Template — Agendar** | `template_bdtsohd` |
| **Template — Pré-Avaliação** | `template_ka5uizn` |

Os templates são configurados no painel do EmailJS; as variáveis `{{variavel}}` estão mapeadas no código de `agendar.html` e `pre-avaliacao.html`.

> ⚠️ A `Public Key` é exposta no front-end por design da plataforma (é uma chave pública). Os IDs de service/template também trafegam no cliente — isso é inerente ao modelo client-side do EmailJS. Para ocultá-los por completo, seria necessário um proxy no backend.

---

## ⚙️ Backend (API REST)

API local em **Node.js + Express + SQLite** que persiste agendamentos e pré-avaliações.

### ▶️ Como rodar

```bash
cd backend
npm install
npm start        # inicia em http://localhost:3000
# ou npm run dev  # reinicia automaticamente a cada alteração
```

### 🔌 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/agendamentos` | Cria um agendamento |
| `GET` | `/api/agendamentos` | Lista agendamentos |
| `POST` | `/api/pre-avaliacao` | Salva uma pré-avaliação |
| `GET` | `/api/pre-avaliacao` | Lista pré-avaliações |

#### Criar agendamento

```bash
curl -X POST http://localhost:3000/api/agendamentos \
  -H "Content-Type: application/json" \
  -d '{
    "nomeCliente": "Maria Silva",
    "servico": "Primeira consulta",
    "data": "2026-09-15",
    "horario": "10:00",
    "email": "maria@email.com",
    "telefone": "(11) 99999-9999",
    "observacoes": "Preferência pelo período da manhã."
  }'
```

**Resposta (`201 Created`):**

```json
{
  "id": 1,
  "nomeCliente": "Maria Silva",
  "servico": "Primeira consulta",
  "data": "2026-09-15",
  "horario": "10:00",
  "email": "maria@email.com",
  "telefone": "(11) 99999-9999",
  "observacoes": "Preferência pelo período da manhã.",
  "criadoEm": "2026-08-27T12:00:00.000Z"
}
```

#### Salvar pré-avaliação

```bash
curl -X POST http://localhost:3000/api/pre-avaliacao \
  -H "Content-Type: application/json" \
  -d '{ "nomeCompleto": "Maria Silva", "motivo": "Consulta de rotina" }'
```

**Resposta (`201 Created`):**

```json
{
  "id": 1,
  "respostas": {
    "nomeCompleto": "Maria Silva",
    "motivo": "Consulta de rotina"
  },
  "criadoEm": "2026-08-27T12:00:00.000Z"
}
```

### 🌍 Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `PORT` | `3000` | Porta em que o servidor escuta |
| `ALLOWED_ORIGINS` | *(vazio)* | Lista de origens CORS permitidas, separadas por vírgula |

---

## 🔒 Segurança

| Medida | Onde | Descrição |
|---|---|---|
| **Helmet** | `server.js` | Headers HTTP de segurança (`X-Content-Type-Options`, `X-Frame-Options`, CSP, etc.) |
| **Rate limiting** | `server.js` | Limite de 100 requisições por IP a cada 15 min nas rotas `/api/*` |
| **CORS configurável** | `server.js` | Allowlist via `ALLOWED_ORIGINS`; sem a variável, permite apenas `localhost`/`file://` |
| **Limite de corpo** | `server.js` | Corpo JSON limitado a 100 KB |
| **Validação de entrada** | `server.js` | Tamanho máximo e formato de data/horário/e-mail validados no servidor |
| **Queries parametrizadas** | `database.js` | Previne injeção de SQL |
| **Escape de saída** | `agendar.html`, `pre-avaliacao.html` | Dados do usuário renderizados via `textContent`/DOM (evita XSS) |

> 🌐 **CORS em produção:** defina a variável de ambiente `ALLOWED_ORIGINS` com os domínios permitidos:
>
> ```bash
> ALLOWED_ORIGINS="https://meudominio.com,https://www.meudominio.com" npm start
> ```

---

## 🚀 Como Usar

O front-end **não requer instalação nem build** — basta abrir o arquivo no navegador.

```bash
# 1. Clone o repositório
git clone https://github.com/andreyabrantes/front-6periodo.git
cd front-6periodo

# 2. (Opcional) Suba o backend para persistência
cd backend && npm install && npm start

# 3. Abra o site no navegador
open index.html
# ou arraste o arquivo para o navegador
```

---

## 👥 Equipe

Projeto acadêmico — Disciplina de **Engenharia de Software**.

| Membro | Matrícula |
|---|---|
| Andrey Campos | 06009553 |
| Gustavo Ramos | 06009333 |
| Cristiano Cordeiro | 06010709 |
| Nathan Salles Ramos | 06009233 |
| Julia Scarpi | 06006846 |

---

<div align="center">

Feito com 💜 para o **Consultório Ramos** · *Endocrinologia, Metabologia e Menopausa*

</div>
