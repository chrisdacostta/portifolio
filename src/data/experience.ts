export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  learnings: string;
  projectSlug?: string;
}

export const experiences: Experience[] = [
  {
    company: 'Inflowork / Projetos SaaS',
    role: 'SaaS Implementation & Onboarding Specialist',
    period: '2023 - Presente',
    description: 'Condução ponta a ponta de projetos de implantação de plataformas SaaS complexas. Responsável por alinhar requisitos de negócios, gerenciar cronogramas, definir integrações operacionais de sistemas e ministrar sessões de habilitação técnica.',
    learnings: 'Conectar com clareza o patrocinador executivo (Sponsor) e a equipe técnica operacional no primeiro workshop de discovery acelera a validação e reduz riscos de atraso no Go-live.',
    projectSlug: 'implantacao-saas-internacional'
  },
  {
    company: 'Operations & Process Design',
    role: 'Process & Customer Operations Specialist',
    period: '2021 - 2023',
    description: 'Mapeamento e otimização de fluxos de trabalho operacionais, automação de tarefas e conexões de APIs entre CRMs e ferramentas de gerenciamento de projetos. Desenho de jornadas de pós-venda corporativas.',
    learnings: 'Mapear rigorosamente os gargalos do estado atual (AS-IS) antes de desenhar qualquer automação é vital para garantir que a tecnologia traga melhoria real e não apenas replicação de erros.',
    projectSlug: 'processos-operacionais-automacao'
  },
  {
    company: 'Customer Relations',
    role: 'Customer Success & Portfolio Manager',
    period: '2019 - 2021',
    description: 'Gestão de contas e carteiras corporativas de clientes nacionais e transfronteiriços. Condução de reuniões de acompanhamento estratégico, mitigação proativa de impedimentos técnicos e acompanhamento de SLAs de atendimento.',
    learnings: 'Mitigar crises ativamente depende de antecipar riscos. Manter canais transparentes de comunicação com stakeholders de tecnologia e negócios gera credibilidade de longo prazo.'
  }
];
