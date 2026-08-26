export interface FrameworkStep {
  name: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  risks: string[];
}

export const frameworkSteps: FrameworkStep[] = [
  {
    name: 'Discovery',
    objective: 'Compreender os objetivos estratégicos de negócio do cliente e identificar patrocinadores.',
    activities: [
      'Entrevistas de alinhamento com a liderança do cliente',
      'Mapeamento dos sistemas e processos operacionais vigentes',
      'Definição das expectativas de valor e Time-to-Value'
    ],
    deliverables: [
      'Registro de Stakeholders mapeados',
      'Mapeamento do ecossistema de sistemas legados'
    ],
    risks: [
      'Falta de clareza nos objetivos de negócio a médio e longo prazo'
    ]
  },
  {
    name: 'Kickoff',
    objective: 'Alinhar expectativas de escopo, rituais de governança e canais de comunicação.',
    activities: [
      'Apresentação das equipes e definição da matriz RACI',
      'Apresentação do cronograma macro e principais entregas (Milestones)',
      'Definição das ferramentas de comunicação oficial'
    ],
    deliverables: [
      'Ata de Reunião de Abertura compartilhada',
      'Canal de comunicação oficial do projeto criado'
    ],
    risks: [
      'Ausência dos tomadores de decisão (Sponsors) do cliente na reunião'
    ]
  },
  {
    name: 'Requirements',
    objective: 'Coletar e estruturar em nível técnico e operacional todas as regras de negócio.',
    activities: [
      'Condução de workshops para detalhamento operacional das rotinas',
      'Mapeamento de integrações de dados e cenários de automação',
      'Identificação de campos obrigatórios, fluxos de status e permissões'
    ],
    deliverables: [
      'Documento de Especificação de Requisitos assinado pelas partes'
    ],
    risks: [
      'Subestimar requisitos de privacidade de dados ou regras fiscais complexas'
    ]
  },
  {
    name: 'Planning',
    objective: 'Montar o cronograma detalhado, mapear dependências e definir plano de mitigação de riscos.',
    activities: [
      'Construção do cronograma detalhado (Gantt)',
      'Alocação de prazos e responsáveis técnicos em ambas as equipes',
      'Planejamento preliminar das cargas de migração de dados'
    ],
    deliverables: [
      'Cronograma Gantt de implantação finalizado',
      'Matriz de Riscos de Implantação ativa'
    ],
    risks: [
      'Definição de prazos agressivos sem margem para atrasos técnicos ou de TI'
    ]
  },
  {
    name: 'Configuration',
    objective: 'Configurar e parametrizar a plataforma de acordo com a especificação técnica.',
    activities: [
      'Configuração do ambiente Sandbox e atribuição de perfis de testes',
      'Parametrização de fluxos de trabalho, regras de status e layouts',
      'Implementação inicial de conexões de APIs e Webhooks'
    ],
    deliverables: [
      'Ambiente Sandbox configurado e integrado'
    ],
    risks: [
      'Desenvolver customizações excessivas que gerem complexidade desnecessária'
    ]
  },
  {
    name: 'Validation',
    objective: 'Homologar o sistema parametrizado junto aos usuários operacionais.',
    activities: [
      'Condução dos testes de UAT (User Acceptance Testing) baseados em casos reais',
      'Validação de volume e integridade das integrações de dados',
      'Correção e refinamento de desvios identificados na homologação'
    ],
    deliverables: [
      'Termo de Homologação de Sandbox assinado pelo cliente'
    ],
    risks: [
      'Validação superficial feita apenas por gestores, sem a ponta operacional'
    ]
  },
  {
    name: 'Training',
    objective: 'Capacitar as equipes operacionais e líderes na utilização autônoma da plataforma.',
    activities: [
      'Construção de manuais e vídeos de treinamento contextuais',
      'Ministrar workshops práticos simulados no ambiente de testes',
      'Treinamento e habilitação dos administradores locais do sistema'
    ],
    deliverables: [
      'Playbooks operacionais e gravações dos treinamentos compartilhados'
    ],
    risks: [
      'Sessões de treinamento excessivamente genéricas e distantes da rotina'
    ]
  },
  {
    name: 'Go-live',
    objective: 'Virar a operação oficial do cliente para o ambiente de produção ativo.',
    activities: [
      'Extração, tratamento e importação de carga final de dados de produção',
      'Ativação definitiva de integrações e liberação de acessos aos usuários',
      'Desativação de sistemas legados concorrentes'
    ],
    deliverables: [
      'Plataforma SaaS ativa e em uso real em produção'
    ],
    risks: [
      'Atraso ou corrupção no envio de dados finais de produção pelo cliente'
    ]
  },
  {
    name: 'Hypercare',
    objective: 'Fornecer suporte operacional assistido prioritário pós-lançamento.',
    activities: [
      'Realização de daily check-ins para monitorar as primeiras transações',
      'Monitoramento de logs de APIs e processamento de dados',
      'Resolução expressa de dúvidas de usabilidade ou ajustes de acesso'
    ],
    deliverables: [
      'SLA reduzido de atendimento durante o período de estabilização'
    ],
    risks: [
      'Atrito operacional decorrente de cenários de teste não cobertos na validação'
    ]
  },
  {
    name: 'Handoff',
    objective: 'Transferir a responsabilidade comercial e operacional para o time de CS.',
    activities: [
      'Reunião de handoff de implantação interna com o CSM designado',
      'Apresentação do CSM para o cliente e encerramento de chamados abertos',
      'Transferência do histórico técnico e do termo de aceite de implantação'
    ],
    deliverables: [
      'Termo de Encerramento de Implantação assinado',
      'Ficha técnica do cliente (Ficha de Handoff) aceita pelo time de CS'
    ],
    risks: [
      'Falta de alinhamento de expectativas sobre o suporte contínuo no pós-venda'
    ]
  }
];
