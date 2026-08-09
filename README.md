# 🌿 Consultório Ramos — Site Institucional

Site institucional do **Consultório Ramos**, especializado em Endocrinologia, Metabologia e Menopausa. Desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks ou dependências externas (exceto EmailJS para envio de e-mails).

---

## 📋 Sobre o Projeto

Site moderno e responsivo com foco em saúde hormonal, controle de peso e bem-estar. O design utiliza uma paleta de cores pastel (roxo, verde e azul) com efeitos visuais sofisticados como blobs animados, partículas flutuantes e animações de scroll reveal.

---

## 🗂️ Estrutura de Arquivos

```
front-6periodo-master/
├── index.html               # Página inicial (landing page)
├── style.css                # Estilos globais, navbar, hero, componentes compartilhados
├── sobre.html               # Página Sobre — bio da Dra. Fernanda Ramos
├── sobre.css                # Estilos específicos da página Sobre
├── agendar.html             # Página de agendamento de consultas
├── agendar.css              # Estilos específicos da página Agendar
├── pre-avaliacao.html       # Página de pré-avaliação de pacientes (formulário multi-etapas)
├── pre-avaliacao.css        # Estilos específicos da página Pré-Avaliação
├── email-template-pre-avaliacao.html  # Template HTML do e-mail de pré-avaliação (EmailJS)
└── README.md                # Documentação do projeto
```

---

## 📄 Páginas

### 🏠 index.html — Início
| Seção | Descrição |
|---|---|
| **Navbar** | Navegação fixa com blur, links e botão de agendamento |
| **Hero** | Título, tagline, botões de CTA, trust badges e bloco de estatísticas |
| **Banner Marquee** | Faixa animada com palavras-chave do consultório |
| **Cards Informativos** | 3 cards accordion expansíveis com conteúdo educativo |
| **Depoimentos** | 3 cards com avaliações de pacientes |
| **CTA** | Chamada para agendamento com botões de contato |
| **Footer** | Endereço, telefone e direitos autorais |

### 👩‍⚕️ sobre.html — Sobre
| Seção | Descrição |
|---|---|
| **Hero** | Badge, título e tagline da especialista |
| **Bio** | Texto de apresentação da Dra. Fernanda Ramos com botão de agendamento |
| **Especialidades** | 3 cards com as áreas de atuação |
| **CTA + Footer** | Chamada para agendamento e rodapé |

### 📅 agendar.html — Agendar Consulta
| Seção | Descrição |
|---|---|
| **Hero** | Título e tagline da página |
| **Calendário** | Navegação por mês, seleção de datas disponíveis (bloqueia fins de semana e datas passadas) |
| **Horários** | Grade de slots disponíveis/ocupados para a data selecionada |
| **Formulário** | Nome, telefone, e-mail, tipo de consulta e observações |
| **Resumo** | Exibe data e horário selecionados em tempo real |
| **Modal Sucesso/Erro** | Feedback após envio via EmailJS |

### 📋 pre-avaliacao.html — Pré-Avaliação
Formulário multi-etapas com barra de progresso animada.

| Etapa | Campos |
|---|---|
| **1 — Dados Pessoais** | Nome, data de nascimento, CPF, sexo, telefone, e-mail, peso, altura, convênio |
| **2 — Saúde Geral** | Motivo da consulta, doenças diagnosticadas, alergias, medicamentos em uso, histórico familiar |
| **3 — Estilo de Vida** | Atividade física, alimentação, nível de estresse (slider), sono, tabagismo, observações finais |

Ao enviar, dispara um e-mail formatado para o consultório via **EmailJS**.

---

## 📧 Integração EmailJS

Ambas as páginas de agendamento e pré-avaliação utilizam [EmailJS](https://emailjs.com) para envio de e-mails sem backend.

| Chave | Valor |
|---|---|
| **Public Key** | `tDOOgh3i3HfAYauD6` |
| **Service ID** | `service_j3r3arh` |
| **Template — Agendar** | `template_bdtsohd` |
| **Template — Pré-Avaliação** | `template_ka5uizn` |

O arquivo `email-template-pre-avaliacao.html` contém o HTML do template de e-mail da pré-avaliação, com todas as variáveis `{{variavel}}` mapeadas.

---

## 🎨 Paleta de Cores

| Variável | Hex | Uso |
|---|---|---|
| `--purple` | `#795ea0` | Cor primária, botões, destaques |
| `--purple2` | `#c4b3df` | Bordas, elementos secundários |
| `--purple3` | `#ede6f7` | Fundos suaves, badges |
| `--green` | `#9fc392` | Blobs, cards verdes |
| `--blue` | `#74a3b2` | Blobs, cards azuis, gradientes |
| `--dark` | `#1e1b2e` | Textos principais |
| `--gray` | `#6b7280` | Textos secundários |
| `--bg` | `#f4f0fa` | Fundo geral |

---

## ✨ Efeitos Visuais

- **Blobs animados** — formas circulares com `filter: blur` flutuando nos heroes
- **Partículas flutuantes** — 8 partículas coloridas subindo em loop
- **Gradiente animado** — texto highlight com `gradientShift` contínuo
- **Badge dot pulsante** — indicador animado nos badges
- **Scroll Reveal** — seções entram com fade + `translateY` via `IntersectionObserver`
- **Marquee** — banner com palavras-chave deslizando em loop
- **Hover nos cards** — elevação suave com `translateY` e `box-shadow`
- **Stepper animado** — barra de progresso e dots com transição de estado na pré-avaliação

---

## 🔠 Tipografia

| Fonte | Uso |
|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Títulos, números de destaque, citações |
| [Inter](https://fonts.google.com/specimen/Inter) | Corpo de texto, labels, botões |

Carregadas via Google Fonts.

---

## 📱 Responsividade

- Hero empilha verticalmente em telas `≤ 768px`
- Menu de navegação vira hamburger no mobile
- Grid de agendamento passa para coluna única no mobile
- Formulário de pré-avaliação adapta colunas para `1fr` no mobile
- Tipografia fluida com `clamp()` nos títulos principais

---

## 🚀 Como Usar

Não requer instalação ou build. Basta abrir qualquer arquivo diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/andreyabrantes/front-6periodo.git

# Abra no navegador
open index.html
# ou arraste o arquivo para o navegador
```
---

## 📄 Membros do Projeto

Projeto acadêmico — Disciplina de **Engenharia de Software**.

| Membro | Matrícula |
|--------|-----------|
| Andrey Campos | 06009553 | 
| Gustavo Ramos | 06009333 | 
| Cristiano Cordeiro | 06010709 | 
| Nathan Salles Ramos | 06009233 |
| Julia Scarpi | 06006846 |

---

