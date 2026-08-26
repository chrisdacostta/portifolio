# Roomix — Project Evidence & Ownership Dossier

> **Dossiê de Evidências, Ownership e Arquitetura do Projeto Roomix**  
> *Fonte Primária de Verdade para o Case Mestre Roomix no Portfólio Profissional.*

---

## 1. Identidade do Projeto

### Nome
**Roomix**

### Categoria
- SaaS
- Hospitality Technology
- Property Operations
- Product Strategy & Functional Architecture
- Operational Systems

### Status Geral
✅ **Projeto Real da Inflowork Tecnologia**

### Descrição-base
O Roomix é um ecossistema de software voltado à operação de meios de hospedagem (pousadas, hotéis e propriedades turísticas), combinando gestão operacional (PMS), reservas diretas, distribuição de canais, aplicações mobile operacionais e inteligência aplicada.

---

## 2. Sistema de Classificação de Validação

Toda evidência ou elemento deste dossiê é submetido à seguinte taxonomia:
- **✅ CONFIRMADO:** Fato verificado ou já confirmado diretamente por Christian.
- **🟡 A VALIDAR:** Informação técnica/operacional plausível, pendente de validação formal.
- **🔒 ANONIMIZAR / NÃO EXPOR:** Elementos reais de código privado, dados de clientes ou regras de sigilo que não devem ser expostos publicamente.
- **🧪 EXPERIMENTAL / PROTÓTIPO:** Componente em laboratório, prototipagem, estudo de viabilidade ou fase pré-homologação.
- **❌ NÃO UTILIZAR:** Conceitos antigos, abandonados ou não aderentes à realidade do produto.

---

## 3. Inventário de Componentes do Ecossistema Roomix

### A. Roomix SaaS
- **Status:** ✅ PROJETO REAL | **Ownership:** 🟡 A VALIDAR
- **Escopo Operacional:** Produto principal de gestão hoteleira (PMS). Abrange cadastro de propriedades, motor de disponibilidade, mapa de reservas, perfil de hóspedes, tarifários, controle de inventário e operação diária.

### B. Roomix Direct
- **Status:** ✅ PROJETO REAL | **Ownership:** 🟡 A VALIDAR
- **Escopo Operacional:** Motor de vendas e reservas diretas sem comissão. Gerencia a experiência de reserva do hóspede, calendário de disponibilidade pública, tabela de tarifas e captura de dados.

### C. Roomix Platform Console
- **Status:** ✅ PROJETO REAL | **Ownership:** 🟡 A VALIDAR
- **Escopo Operacional:** Console de administração interna e controle do ecossistema. Gerencia propriedades cadastradas, planos corporativos, habilitação de módulos, logs de integração e telemetria de componentes.

### D. Roomix Mobile
- **Status:** ✅ PROJETO REAL | **Ownership:** 🟡 A VALIDAR
- **Escopo Operacional:** Aplicação mobile para operação de campo. Fluxos projetados/desenvolvidos: autenticação, mapa de ocupação diário, check-in/check-out expresso, fichas FNRH, gestão de governança (housekeeping), suporte ao cliente e assistente de operações por IA.

### E. Roomix Channel Manager
- **Status:** 🟡 / 🧪 EM DESENVOLVIMENTO OU PREPARAÇÃO | **Ownership:** 🟡 A VALIDAR
- **Ressalva Crítica:** *Não apresentar como integração comercial homologada com Booking.com, Expedia ou Airbnb sem confirmação de produção.* Camada técnica voltada à sincronização de disponibilidade e tarifas entre OTAs e o PMS.

### F. Módulos & Extensões Adicionais
- **FNRH (Ficha Nacional de Registro de Hóspedes):** Módulo de conformidade regulatória. (✅ Real)
- **POS / Pontos de Venda:** Controle de consumo de frigobar, restaurante e serviços. (🟡 A Validar)
- **Billing / Faturamento:** Cobranças, faturas e controle de pagamento de diárias. (✅ Real)
- **Agentes & IA Operacional:** Assistente inteligente para automação de rotinas hoteleiras. (🧪 Protótipo / Lab)
- **Central de Ajuda (Help / Docs):** Repositório de documentação de uso e suporte. (✅ Real)

---

## 4. Matriz de Ownership do Roomix

| Dimensão | Participação de Christian | Evidência Identificada | Status | Exposição Pública |
| :--- | :--- | :--- | :--- | :--- |
| **Ideação** | Definição da necessidade do produto | Conceito Inflowork | ✅ CONFIRMADO | ✅ Permitido |
| **Visão de Produto** | Direcionamento estratégico | Visão de ecossistema hoteleiro | ✅ CONFIRMADO | ✅ Permitido |
| **Pesquisa de Problema** | Levantamento de dores da hotelaria | Mapeamento operacional | ✅ CONFIRMADO | ✅ Permitido |
| **Definição de Público** | Definição de perfil de pousadas/hotéis | ICP definido | ✅ CONFIRMADO | ✅ Permitido |
| **Product Strategy** | Definição de módulos e entrada no mercado | Roadmap conceitual | ✅ CONFIRMADO | ✅ Permitido |
| **Roadmap** | Sequenciamento de releases | Estrutura de versões | 🟡 A VALIDAR | 🟡 A Validar |
| **Priorização** | Escolha de funcionalidades críticas | Escopo inicial vs futuro | 🟡 A VALIDAR | ✅ Permitido |
| **Business Analysis** | Especificação de regras hoteleiras | Regras de tarifas e check-in | ✅ CONFIRMADO | ✅ Permitido |
| **Regras de Negócio** | Tarifários, disponibilidade e bloqueios | Lógica de PMS | ✅ CONFIRMADO | ✅ Permitido |
| **Requirements** | Documentação e histórias de uso | Mapeamento funcionais | ✅ CONFIRMADO | ✅ Permitido |
| **Process Mapping** | Desenho AS-IS / TO-BE da pousada | Fluxos de check-in e FNRH | ✅ CONFIRMADO | ✅ Permitido |
| **User Journeys** | Jornada do hóspede e do recepcionista | Telas e etapas mobile/web | ✅ CONFIRMADO | ✅ Permitido |
| **UX / Fluxos** | Arquitetura visual e de navegação | Wireframes e fluxogramas | 🟡 A VALIDAR | ✅ Permitido |
| **Arquitetura Funcional** | Divisão entre SaaS, Console e Direct | Estrutura de serviços | ✅ CONFIRMADO | ✅ Permitido |
| **Gestão de Projeto** | Acompanhamento de entregas | Sprints e marcos | 🟡 A VALIDAR | ✅ Permitido |
| **Coordenação de Entregas** | Alinhamento de etapas | Repositórios e branches | 🟡 A VALIDAR | ✅ Permitido |
| **QA / Homologação** | Testes de aceitação e bug hunting | Ciclos de testes manuais | ✅ CONFIRMADO | ✅ Permitido |
| **Integrações** | Especificação de conexões necessárias | Webhooks e APIs | 🟡 A VALIDAR | ✅ Permitido |
| **Infraestrutura / Ambientes** | Definição de ambientes | Staging e Produção Vercel/Supabase | 🟡 A VALIDAR | 🔒 Sigilo |
| **Dados** | Estruturação de entidades hoteleiras | Schemas relacionais de dados | 🟡 A VALIDAR | 🔒 Sigilo |
| **Documentação** | Manuais e documentação de ajuda | Central de Ajuda Roomix | ✅ CONFIRMADO | ✅ Permitido |
| **Precificação** | Definição de modelos de plano | Planos SaaS e taxas Direct | 🟡 A VALIDAR | ✅ Permitido |
| **Modelo Comercial** | Estratégia de vendas diretas | Posicionamento de mercado | 🟡 A VALIDAR | ✅ Permitido |
| **Go-to-market** | Planejamento de lançamento | Estratégia de atração | 🟡 A VALIDAR | ✅ Permitido |
| **Desenvolvimento Direto** | Escrita direta de código/componentes | Commits em repositórios | 🟡 A VALIDAR | 🔒 Resguardar |
| **Dev Assistido por IA** | Uso de LLMs/agentes na construção | Prompts e geração de código | ✅ CONFIRMADO | ✅ Permitido |
| **Gestão de Agentes de Dev** | Orquestração de tarefas de codificação | Agentes autônomos de código | 🟡 A VALIDAR | ✅ Permitido |

---

## 5. Delimitação de Responsabilidades (Role Boundaries)

Para garantir veracidade absoluta na narrativa do portfólio, as contribuições de Christian no Roomix são classificadas em quatro níveis claros:

### A. Concebi / Decidi
- Definição do problema operacional dos meios de hospedagem (complexidade de PMSs tradicionais vs. necessidade de simplicidade).
- Separação arquitetural entre o **Roomix SaaS** (painel do cliente) e o **Roomix Platform Console** (gestão interna do ecossistema).
- Decisão estratégica de incorporar o **Roomix Direct** para eliminar intermediários na reserva direta.

### B. Especifiquei / Coordenei
- Mapeamento das regras de negócio de check-in, faturamento de diárias e emissão de fichas regulatórias FNRH.
- Estruturação dos requisitos de navegação e telas operacionais da aplicação **Roomix Mobile**.
- Condução dos rituais de homologação funcional e validação de requisitos de UX.

### C. Construí com Assistência
- Construção de protótipos interativos, interfaces funcionais e módulos de apoio com auxílio de ferramentas de desenvolvimento acelerado por Inteligência Artificial (LLMs e agentes de codificação).
- Criação e manutenção da **Central de Ajuda (Roomix Help)** e documentações técnicas operacionais.

### D. Implementado por Ferramentas / Agentes / Outros
- Infraestrutura profunda de banco de dados relacional e conexões de backend executadas por pipelines automatizados ou assistentes técnicos sob supervisão de requisitos.

---

## 6. Product Strategy & Visão de Mercado

### Problema de Origem
Sistemas hoteleiros tradicionais (PMSs legados) são frequentemente inflados, possuem interfaces arcaicas, exigem treinamentos longos e cobram taxas elevadas para reservas diretas.

### Estratégia do Ecossistema
1. **Foco na Operação Essencial:** Criar um painel enxuto (Roomix SaaS) focado em disponibilidade, reservas e check-in sem atrito.
2. **Captação Direta:** Oferecer o Roomix Direct como canal próprio de conversão para o hoteleiro aumentar a margem sobre as diárias.
3. **Mobilidade Operacional:** Desenvolver o Roomix Mobile para que a equipe de campo (recepção e governança) opere sem ficar presa à mesa da recepção.

---

## 7. Requirements & Business Analysis (Do Problema à Interface)

Exemplo de cadeia de análise funcional aplicada por Christian no Roomix:

```text
Necessidade Operacional (Registrar hóspedes de forma ágil e cumprir exigências legais)
        ↓
Problema Identificado (Fórmulas em papel atrasam a recepção e geram erros de digitação)
        ↓
Regra de Negócio (Toda reserva exige dados completos da FNRH antes de liberar a chave)
        ↓
Requisito de Produto (Formulário digital pré-check-in com validação de campos obrigatórios)
        ↓
Desenho de Fluxo (Hóspede preenche no celular -> Recepcionista valida em 1 clique no Roomix Mobile)
        ↓
Homologação / QA (Teste de estresse com múltiplos check-ins simultâneos em ambiente Sandbox)
```

---

## 8. AI-Assisted Product Development (Engenharia Assistida)

O desenvolvimento do Roomix utiliza um modelo moderno de construção de software:

> **"AI-Assisted Product Development sob liderança de requisitos e validação humana."**

- **Direção Humana (Christian):** Definição do problema de negócio, arquitetura de telas, regras funcionais, fluxos de uso e critérios de aceitação rigorosos.
- **Construção Assistida:** Utilização de ferramentas de IA generativa e agentes de código para acelerar a escrita de componentes React, estilização Tailwind CSS e prototipagem rápida de APIs.
- **Validação & QA (Christian):** Execução de testes ponta a ponta para identificar desvios de regra, inconsistências de interface e erros de navegação.

---

## 9. Tecnologias do Ecossistema (Composição Técnica)

| Tecnologia | O Produto Utiliza | Conhecimento Operacional de Christian | Implementado Direta / Assistido |
| :--- | :--- | :--- | :--- |
| **React / TypeScript** | ✅ Sim | ✅ Alto | ✅ Assistido por IA |
| **Vite** | ✅ Sim | ✅ Alto | ✅ Direto / Assistido |
| **Tailwind CSS** | ✅ Sim | ✅ Alto | ✅ Direto / Assistido |
| **Supabase / PostgreSQL** | ✅ Sim | ✅ Médio | 🟡 Assistido por IA |
| **Vercel** | ✅ Sim | ✅ Alto | ✅ Direto |
| **Git / GitHub** | ✅ Sim | ✅ Alto | ✅ Direto |
| **REST APIs / Webhooks** | ✅ Sim | ✅ Alto | 🟡 Especificado / Assistido |

---

## 10. Decision Log (Decisões Estratégicas Selecionadas)

1. **Decisão 01 — Separação do Console Administrativo:** Isolamento do *Platform Console* do SaaS do cliente para garantir que alterações globais de planos não impactem a operação hoteleira. (✅ Confirmado)
2. **Decisão 02 — Foco na Experiência Mobile de Governança:** Criação de módulo de status de quarto no Roomix Mobile para atualização em tempo real pelas camareiras. (✅ Confirmado)
3. **Decisão 03 — Postergação da Homologação de OTAs no Channel Manager:** Decisão prudente de não divulgar integração completa de canais antes do rigoroso teste de homologação bi-direcional. (✅ Confirmado)
4. **Decisão 04 — Pré-Check-in Digital FNRH:** Integração da coleta de dados regulatórios antes da chegada do hóspede para reduzir filas de recepção. (✅ Confirmado)
5. **Decisão 05 — Abordagem SPA Cinemática para a Central de Ajuda:** Estruturação de documentações em Markdown limpo para fácil manutenção e leitura rápida. (✅ Confirmado)

---

## 11. What Changed (Evolução & Ajustes de Rota)

- **Ajuste de Escopo Inicial:** A ideia original de lançar simultaneamente todos os canais de distribuição foi simplificada para priorizar a estabilidade do PMS e do motor Direct.
- **Refinamento de UI no Mobile:** Fluxos de check-in mobile foram redesenhados após testes de usabilidade para diminuir o número de toques necessários na tela.

---

## 12. Estado Atual dos Componentes

| Componente | Conceito | Protótipo | Implementado | Homologação | Produção | Observações |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Roomix SaaS** | ✅ | ✅ | ✅ | ✅ | 🟡 Validação | Core operacional funcional |
| **Roomix Direct** | ✅ | ✅ | ✅ | ✅ | 🟡 Validação | Motor de reservas ativo |
| **Platform Console** | ✅ | ✅ | ✅ | ✅ | 🟡 Interno | Console administrativo |
| **Roomix Mobile** | ✅ | ✅ | ✅ | 🟡 Testes | 🧪 Lab | Aplicação de campo |
| **Channel Manager** | ✅ | 🧪 | 🧪 | ❌ Não | ❌ Não | Em fase de preparação técnica |
| **Roomix Help** | ✅ | ✅ | ✅ | ✅ | ✅ Ativo | Central de ajuda ativa |

---

## 13. Inventário de Evidências Visuais Futuras

- [ ] Screenshots do mapa de ocupação do **Roomix SaaS** (🔒 Anonimizar dados de teste).
- [ ] Diagramas de fluxo do **Roomix Direct** (✅ Permitido).
- [ ] Capturas de tela da interface mobile de **Check-in / FNRH** (✅ Permitido).
- [ ] Diagrama de Arquitetura do Ecossistema (SaaS + Console + Mobile) (✅ Permitido).

---

## 14. Esqueleto Futuro do Case Mestre Roomix (Draft)

```text
ROOMIX — ECOSYSTEM CASE STUDY

01 — Context & Hospitality Overview
02 — The Problem: Legacy PMS Complexity
03 — Product Vision: Integrated Property Ecosystem
04 — My Role: Product Strategy & Functional Architecture
05 — Ecosystem Architecture (SaaS, Console, Direct, Mobile)
06 — Operational Flows: From Booking to Check-out
07 — Requirements & Business Rules (FNRH, Diárias, Inventário)
08 — Project Management & Release Planning
09 — AI-Assisted Product Development Approach
10 — QA, Validation & Usability Testing
11 — Strategic Decision Log
12 — Current System State & Roadmap
13 — Operational Lessons Learned
```

---

## 15. Questions for Christian — Roomix (Perguntas de Alto Valor)

1. **Origem:** Qual foi o gatilho exato ou dor operacional observada em hotéis que levou à decisão de criar o Roomix?
2. **ICP:** Qual é o perfil exato de propriedade hoteleira ideal (número de quartos, modelo de gestão) definido para a primeira fase do Roomix?
3. **Decisão de Produto:** Por que foi decidido construir o Roomix Direct como um componente próprio em vez de depender apenas de integrações de terceiros?
4. **Mobile:** Na rotina da pousada, qual é a funcionalidade mais importante do Roomix Mobile para os operadores de recepção?
5. **Regras de Negócio:** Qual foi a regra de negócio mais complexa de desenhar (ex: tarifários sazonais, bloqueios de inventário ou cobrança de diárias)?
6. **Desenvolvimento Assistido por IA:** Como foi a dinâmica de uso de prompts e LLMs para transformar suas especificações funcionais em código React/Tailwind?
7. **QA:** Qual foi o bug ou falha de fluxo mais relevante identificado por você durante as rodadas de testes de homologação?
8. **Channel Manager:** Qual é o planejamento atual para o início das homologações com OTAs externas?
9. **Impacto:** Como você descreveria o ganho de tempo de um recepcionista ao utilizar o fluxo de pré-check-in do Roomix?
10. **Visão de Futuro:** Qual é a próxima grande funcionalidade priorizada no roadmap do ecossistema?
