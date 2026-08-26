export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    title: 'Implementation',
    items: [
      'SaaS Implementation',
      'Discovery Workshops',
      'Requirements Gathering',
      'Planning & Timeline (Gantt)',
      'Configuration & Sandbox Setup',
      'Validation & UAT Testing',
      'Go-live Execution',
      'Hypercare Support'
    ]
  },
  {
    title: 'Onboarding & Adoption',
    items: [
      'Customer Onboarding Journey',
      'Training Session Design',
      'User Enablement Materials',
      'Product Adoption Tracking',
      'Handoff to CS Management'
    ]
  },
  {
    title: 'Operations',
    items: [
      'Process Mapping (AS-IS / TO-BE)',
      'Operational Flow Design',
      'Continuous Improvement (PDCA)',
      'Workflow Automation',
      'API & Webhook Integrations'
    ]
  },
  {
    title: 'Customer Experience',
    items: [
      'Stakeholder Alignment',
      'Customer Journey Design',
      'Crisis Resolution',
      'Executive Communication',
      'Collaborative Problem Solving'
    ]
  },
  {
    title: 'Product & Tech',
    items: [
      'SaaS Platforms',
      'CRM Configurations',
      'Automation Engines',
      'Operational AI Integrations',
      'Systems Synchronization'
    ]
  }
];
