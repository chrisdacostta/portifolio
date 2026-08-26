export interface SoftSkill {
  title: string;
  behavior: string;
  explanation: string;
}

export const softSkills: SoftSkill[] = [
  {
    title: 'Translate Complexity',
    behavior: 'Traduzir complexidade técnica em decisões estratégicas',
    explanation: 'Converto termos técnicos de APIs, integrações e regras de negócio em impactos operacionais claros que usuários e patrocinadores não técnicos compreendem e aprovam com facilidade.'
  },
  {
    title: 'Create Clarity',
    behavior: 'Criar clareza e estrutura em ambientes ambíguos',
    explanation: 'Organizo implantações SaaS complexas dividindo-as em marcos de entrega, dependências e planos de mitigação de riscos nítidos, diminuindo a ansiedade do cliente e gerando segurança.'
  },
  {
    title: 'Work Across Stakeholders',
    behavior: 'Conectar múltiplos times em prol do projeto',
    explanation: 'Atuo como ponte efetiva de comunicação entre o comercial, produto, engenharia do fornecedor e as áreas de negócios, operações e diretoria (C-Level) do cliente.'
  },
  {
    title: 'Learn Quickly',
    behavior: 'Absorver regras de negócios e tecnologias com rapidez',
    explanation: 'Possuo facilidade em me aprofundar na regra operacional de novos setores industriais e na arquitetura funcional de ferramentas SaaS diversas em tempo recorde.'
  },
  {
    title: 'Stay Close to the Customer',
    behavior: 'Identificar atritos de adoção de forma proativa',
    explanation: 'Prefiro acompanhar os testes operacionais (UAT) de perto e analisar o engajamento diário nas primeiras semanas para atuar em gargalos de uso antes que se tornem uma crise.'
  }
];
