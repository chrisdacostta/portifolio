# Christian da Costa — SaaS Implementation & Onboarding Specialist

> **Presença Digital Profissional & Documentação de Projetos**  
> *Transformando necessidades de negócio em implantações SaaS estruturadas, processos eficientes e produtos adotados.*

---

## 📌 Visão Geral

Este repositório contém o código-fonte da aplicação web cinemática de **Christian da Costa**, construída para documentar sua trajetória, racional de processos e cases de implantação de plataformas SaaS.

Diferente de um portfólio comum, o projeto foi desenvolvido com uma **arquitetura de fonte única de verdade (Single Source of Truth)**:
- **No Repositório (GitHub):** Documentos originais em Markdown localizados em `/cases`, `/frameworks` e `/templates` que podem ser lidos diretamente por recrutadores e hiring managers no GitHub.
- **Na Aplicação Web (Netlify):** Interface desenvolvida em React + Vite + TypeScript + Tailwind CSS + Framer Motion, que importa dinamicamente o conteúdo bruto em Markdown e o renderiza com design editorial e animações.

---

## 🛠️ Posicionamento Profissional

- **Eixo Principal:** SaaS Implementation & Customer Onboarding Specialist (~7 anos de experiência).
- **Competências Conectadas:** Implantação de Plataformas SaaS, Discovery de Requisitos, Desenho Operacional (AS-IS / TO-BE), Automações & Integrações (APIs/Webhooks), Gestão de Stakeholders, Handoff e Adoção de Produto.
- **Atuação Internacional:** Projetos com clientes no Brasil, América Latina, Estados Unidos e Europa.
- **Idiomas:** Português (Nativo) | Español (Nativo).

---

## 📁 Arquitetura do Repositório

```text
├── cases/                              # Documentos de cases reais (anonimizados)
│   ├── case-01-implantacao-saas-internacional.md
│   └── case-02-processos-operacionais-automacao.md
│
├── frameworks/                         # Metodologias e guias de implantação
│   ├── saas-implementation-framework.md
│   ├── requirements-discovery-method.md
│   └── customer-onboarding-journey.md
│
├── templates/                          # Modelos operacionais e governança de projetos
│   ├── kickoff-checklist.md
│   ├── weekly-status-report.md
│   ├── risk-impediment-log.md
│   └── go-live-handoff-checklist.md
│
├── src/                                # Aplicação React
│   ├── components/                     # Componentes de UI e Motion (WordsPullUp, ScrollRevealText, etc.)
│   ├── data/                           # Esquemas e metadados (projects.ts, experience.ts, etc.)
│   ├── pages/                          # Rotas (Home.tsx, ProjectDetail.tsx)
│   ├── App.tsx                         # Client-side routing via React Router
│   └── index.css                       # Design System (Almarai, Instrument Serif, noise overlays)
│
├── public/
│   └── _redirects                      # Regra de fallback SPA para o Netlify
│
├── netlify.toml                        # Configuração de build para a Netlify
└── package.json
```

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Passos
```bash
# 1. Clones este repositório
git clone https://github.com/chrisdacostta/portifolio.git

# 2. Acesse o diretório
cd portifolio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Para testar o build de produção
npm run build
```

---

## 🌐 Publicação (Netlify)

O projeto está configurado para deploy contínuo via **GitHub → Netlify**:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **SPA Fallback:** Gerenciado via `public/_redirects`

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/chrisdacostta](https://www.linkedin.com/in/chrisdacostta)
- **E-mail:** `infloworkdigital@gmail.com`
