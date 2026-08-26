# Risk & Impediment Log

Modelo de controle e matriz de mitigação de riscos utilizado para antecipar problemas técnicos e operacionais que possam comprometer o sucesso da implantação.

---

## 1. Matriz de Classificação de Riscos

| Probabilidade \ Impacto | Baixo | Médio | Alto |
| :--- | :--- | :--- | :--- |
| **Alta** | Médio | Alto | Crítico |
| **Média** | Baixo | Médio | Alto |
| **Baixa** | Baixo | Baixo | Médio |

## 2. Registro de Riscos Ativos

### [Risco #1] Ausência de engajamento da equipe operacional nos treinamentos
- **Impacto:** Alto | **Probabilidade:** Média | **Status:** Mitigado
- **Causa:** Equipe operacional sobrecarregada com tarefas diárias fora do projeto.
- **Plano de Mitigação:** Agendar sessões de treinamento curtas (30 min) gravadas e obter o apoio da gerência para liberar a agenda das equipes nos horários selecionados.

### [Risco #2] Atraso na liberação de acessos à API do sistema financeiro legado
- **Impacto:** Alto | **Probabilidade:** Alta | **Status:** Ativo
- **Causa:** TI do cliente possui fluxo de aprovação de segurança da informação rígido.
- **Plano de Mitigação:** Acionar o Sponsor do cliente para priorizar o ticket junto ao time de segurança cibernética interno.

## 3. Histórico de Impedimentos Resolvidos

### [Impedimento #1] Divergência de campos obrigatórios de endereço
- **Impacto:** Alto | **Status:** Resolvido em [DD/MM/AAAA]
- **Solução:** Reunião extraordinária de alinhamento com o time de Produto; decidida a criação de campo de endereço customizado de 2 linhas para acomodar requisitos fiscais locais.
