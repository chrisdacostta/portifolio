import case1Raw from '../../cases/case-01-implantacao-saas-internacional.md?raw';
import case2Raw from '../../cases/case-02-processos-operacionais-automacao.md?raw';

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role: string;
  intro: string;
  content: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'implantacao-saas-internacional',
    slug: 'implantacao-saas-internacional',
    number: '01',
    title: 'SaaS Enterprise Implementation & Onboarding Across Global Markets',
    category: 'Implementation / Onboarding / International',
    year: '2025',
    role: 'Lead Implementation Specialist',
    intro: 'Condução e estruturação da jornada de onboarding e implantação de plataforma SaaS corporativa integrada em múltiplos países nas Américas (Brasil e EUA).',
    content: case1Raw,
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'
  },
  {
    id: 'processos-operacionais-automacao',
    slug: 'processos-operacionais-automacao',
    number: '02',
    title: 'Operational Design & Process Automation in Onboarding Workflows',
    category: 'Operations / Automation / Integrations',
    year: '2024',
    role: 'Operations & Process Specialist',
    intro: 'Redesenho operacional completo do fluxo de handoff comercial para operações, mitigando erros e atrasos de kickoff através de fluxos de integração automática via APIs.',
    content: case2Raw,
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'
  },
  {
    id: 'onboarding-enterprise-journey',
    slug: 'onboarding-enterprise-journey',
    number: '03',
    title: 'Enterprise Customer Journey & User Adoption Standard',
    category: 'Customer Experience / Adoption / Enablement',
    year: '2025',
    role: 'Onboarding Specialist',
    intro: 'CONTENT_PENDING - Metodologia de ativação e medição de uso de produto para encurtar o tempo de primeira realização de valor (Time-to-Value) em contas estratégicas.',
    content: '# Enterprise Customer Onboarding Journey\n\n*Informações detalhadas sobre este caso de uso estão pendentes de validação de confidencialidade (CONTENT_PENDING).*',
  }
];
