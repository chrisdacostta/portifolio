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
  videoUrl?: string; // ASSET TEMPORÁRIO DE REFERÊNCIA (Prisma/MotionSites) - Substituir por mídia própria posteriormente
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'implantacao-saas-internacional',
    slug: 'implantacao-saas-internacional',
    number: '01',
    title: 'Implantação & Onboarding SaaS para Organização Internacional',
    category: 'Implantação / Onboarding / Internacional',
    year: '2025',
    role: 'Implantação & Onboarding SaaS',
    intro: 'Acompanhamento e suporte à jornada de onboarding e implantação de plataforma SaaS para projetos com atuação transfronteiriça (Brasil, América Latina e EUA).',
    content: case1Raw,
    /* ASSET TEMPORÁRIO DE REFERÊNCIA - SUBSTITUIR POSTERIORMENTE */
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'
  },
  {
    id: 'processos-operacionais-automacao',
    slug: 'processos-operacionais-automacao',
    number: '02',
    title: 'Mapeamento de Processos & Fluxos Operacionais (CASE EM CONSTRUÇÃO)',
    category: 'Operações / Processos / Handoff',
    year: '2024',
    role: 'Desenho de Processos & Operações',
    intro: '[CASE EM CONSTRUÇÃO] Estudo de mapeamento de fluxos de trabalho de onboarding (AS-IS / TO-BE) e padronização da passagem de bastão operacional.',
    content: case2Raw,
    /* ASSET TEMPORÁRIO DE REFERÊNCIA - SUBSTITUIR POSTERIORMENTE */
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'
  },
  {
    id: 'onboarding-enterprise-journey',
    slug: 'onboarding-enterprise-journey',
    number: '03',
    title: 'Jornada de Adoção de Produto & Customer Experience',
    category: 'Customer Experience / Adoção / Onboarding',
    year: '2025',
    role: 'Onboarding & Customer Experience',
    intro: '[INFORMAÇÃO PENDENTE DE VALIDAÇÃO] Estruturação de rituais de acompanhamento e habilitação técnica de usuários operacionais em contas corporativas.',
    content: '# Jornada de Adoção & Customer Experience\n\n*Informações detalhadas sobre este projeto estão sob validação técnica e revisão de confidencialidade (CONTENT_PENDING).*',
  }
];
