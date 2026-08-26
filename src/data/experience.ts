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
    company: 'Inflowork',
    role: 'Implantação & Operações SaaS',
    period: '[PERÍODO A VALIDAR]',
    description: 'Atuação no acompanhamento e gestão de projetos de implantação de plataformas SaaS, onboarding de clientes, alinhamento de requisitos e coordenação de rituais com stakeholders.',
    learnings: 'Conectar com clareza os patrocinadores do projeto e os usuários operacionais desde a fase inicial de descoberta acelera o alinhamento e reduz desvios.',
    projectSlug: 'implantacao-saas-internacional'
  },
  {
    company: '[EMPRESA / PROJETO A VALIDAR]',
    role: 'Mapeamento de Processos & Operações',
    period: '[PERÍODO A VALIDAR]',
    description: '[INFORMAÇÃO PENDENTE DE VALIDAÇÃO] Experiência focada no mapeamento de fluxos de trabalho (AS-IS / TO-BE), identificação de gargalos operacionais e organização da passagem de bastão (handoff).',
    learnings: 'Padronizar e estruturar as regras de negócio de um processo antes de aplicar qualquer automação é fundamental para evitar a duplicação de falhas.',
    projectSlug: 'processos-operacionais-automacao'
  },
  {
    company: '[EMPRESA / PROJETO A VALIDAR]',
    role: 'Relacionamento & Atendimento a Clientes',
    period: '[PERÍODO A VALIDAR]',
    description: '[INFORMAÇÃO PENDENTE DE VALIDAÇÃO] Acompanhamento da jornada do cliente no pós-venda, condução de reuniões de acompanhamento de status e suporte à adoção técnica.',
    learnings: 'Identificar atritos na jornada precocemente e manter canais transparentes de comunicação gera segurança para o cliente.'
  }
];
