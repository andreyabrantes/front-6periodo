# 🌿 Consultório Ramos — Landing Page

Página home institucional do **Consultório Ramos**, especializado em Endocrinologia e Metabologia. Desenvolvida com HTML5, CSS3 e JavaScript vanilla, sem frameworks ou dependências externas.

---

## 📋 Sobre o Projeto

Landing page moderna e responsiva com foco em saúde hormonal, controle de peso e bem-estar. O design utiliza uma paleta de cores pastel (roxo, verde e azul) com efeitos visuais sofisticados como blobs animados, partículas flutuantes e animações de scroll reveal.

---

## 🗂️ Estrutura de Arquivos

```
DEV-FRONT-END/
├── index.html       # Estrutura e conteúdo da página
├── style.css        # Estilos, animações e responsividade
├── script.js        # Accordion, scroll reveal e interações
└── README.md        # Documentação do projeto
```

---

## 📄 Seções da Página

| Seção | Descrição |
|---|---|
| **Navbar** | Navegação fixa com blur, links e botão de agendamento |
| **Hero** | Título principal, tagline, botões de CTA, trust badges e bloco de estatísticas |
| **Banner Marquee** | Faixa animada com palavras-chave do consultório |
| **Cards Informativos** | 3 cards accordion expansíveis com conteúdo educativo |
| **Depoimentos** | 3 cards com avaliações de pacientes |
| **CTA** | Seção de chamada para agendamento com botões de contato |
| **Footer** | Endereço, telefone e direitos autorais |

---

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Roxo | `#795ea0` | Cor primária, botões, destaques |
| Verde | `#9fc392` | Blobs, cards verdes, elementos de saúde |
| Azul | `#74a3b2` | Blobs, cards azuis, gradientes |
| Dark | `#1e1b2e` | Textos principais |
| Gray | `#6b7280` | Textos secundários |
| Background | `#f4f0fa` | Fundo geral da página |

---

## ✨ Efeitos Visuais

- **Blobs animados** — 4 formas circulares com `filter: blur` e animação `blobFloat` flutuando no hero
- **Partículas flutuantes** — 8 partículas coloridas subindo pela tela em loop
- **Gradiente animado** — texto "equilíbrio hormonal" com `gradientShift` contínuo
- **Badge dot pulsante** — indicador animado no badge do hero
- **Scroll Reveal** — seções entram com fade + translateY ao aparecer na viewport via `IntersectionObserver`
- **Marquee** — banner com palavras-chave deslizando horizontalmente em loop
- **Hover nos cards** — elevação suave com `translateY` e `box-shadow`

---

## 🃏 Cards Informativos (Accordion)

Três cards expansíveis com conteúdo educativo sobre endocrinologia:

- **Card 1 — Verde** · O que o endocrinologista faz
- **Card 2 — Roxo** · O que é Menopausa
- **Card 3 — Azul** · Distúrbios Hormonais

**Comportamento:** apenas um card fica aberto por vez. Ao clicar em outro, o anterior fecha automaticamente. Navegação por teclado suportada (`Enter`, `Space` para abrir/fechar, `Escape` para fechar).

---

## ♿ Acessibilidade

- `skip-link` para pular direto ao conteúdo principal
- `aria-expanded` nos cards accordion atualizado dinamicamente via JS
- `aria-hidden="true"` em elementos decorativos (blobs, partículas, emojis, marquee)
- `aria-label` em botões com conteúdo apenas visual
- `role="button"` + `tabindex="0"` nos cards para navegação por teclado
- `<address>` semântico no footer com telefone clicável
- `focus-visible` com outline visível nos cards
- Suporte a `prefers-reduced-motion` — todas as animações são desabilitadas para usuários que preferem menos movimento

---

## 🔠 Tipografia

| Fonte | Uso |
|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Títulos, números de destaque, citações |
| [Inter](https://fonts.google.com/specimen/Inter) | Corpo de texto, labels, botões |

Carregadas via Google Fonts com `preconnect` para melhor performance.

---

## 📱 Responsividade

- Hero empilha verticalmente em telas `≤ 768px`
- Bloco de estatísticas passa para layout horizontal no mobile
- Menu de navegação oculto em mobile
- Tipografia e espaçamentos fluidos com `clamp()` nos títulos e seções principais

---

## 🚀 Como Usar

Não requer instalação ou build. Basta abrir o arquivo diretamente no navegador:

```bash
# Clone o projeto
git clone https://github.com/andreyabrantes/front-6periodo.git
cd front-6periodo/DEV-FRONT-END

# Abra no navegador
open index.html
# ou arraste o arquivo para o navegador
```

---

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, animações, grid, flexbox, backdrop-filter, clamp)
- JavaScript vanilla
  - Accordion com delegação de eventos e suporte a teclado
  - `IntersectionObserver` para scroll reveal (desconecta após animar)
  - `aria-expanded` atualizado dinamicamente
- Google Fonts (Inter + Playfair Display)
