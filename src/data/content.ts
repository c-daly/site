export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  socials: { label: string; url: string }[];
  metrics: { label: string; value: string }[];
};

export type Achievement = {
  title: string;
  description: string;
  detail: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export type Interest = {
  title: string;
  description: string;
  examples: string[];
};

export const profile: Profile = {
  name: 'Alex Robbins',
  role: 'Systems engineer & delivery lead',
  tagline: 'I build calm, human-centered products across AI, robotics, and civic tech.',
  summary:
    'I pair messy, high-stakes ideas with rigorous delivery so teams can celebrate launches instead of firefights.',
  location: 'Seattle, WA · Remote friendly',
  availability: 'Accepting embedded leadership and advisory projects for Q3 2024.',
  email: 'hello@alexrobbins.com',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexrobbins' },
    { label: 'GitHub', url: 'https://github.com/alexrobbins' }
  ],
  metrics: [
    { label: 'Products shipped', value: '24' },
    { label: 'Cross-functional teams led', value: '11' },
    { label: 'Cycle time reduced', value: '35%' }
  ]
};

export const achievements: Achievement[] = [
  {
    title: 'Global fulfillment intelligence launch',
    description: 'Directed the rebuild of a logistics control tower that now orchestrates 2K+ daily robot dispatches.',
    detail: 'Blended ROS telemetry, LLM-based exception handling, and human review loops with <2% downtime.'
  },
  {
    title: 'Trusted AI review council',
    description: 'Built the governance program that approves every generative AI experiment across the enterprise.',
    detail: 'Authored policy, scorecards, and red-team drills adopted by legal, product, and public policy groups.'
  },
  {
    title: 'Community research residency',
    description: 'Designed pro-bono civic tech sprints focused on climate adaptation and equitable transit.',
    detail: 'Mentored 18 fellows and shipped tools now used by two municipal innovation offices.'
  }
];

export const projects: Project[] = [
  {
    title: 'Navigation Copilot',
    description:
      'A planning assistant that narrates warehouse robot routes, provides safety context, and flags blockers in plain language.',
    stack: ['TypeScript', 'LangGraph', 'ROS 2', 'Supabase'],
    link: 'https://github.com/example/navigation-copilot'
  },
  {
    title: 'Capital Signals Briefing',
    description:
      'Interactive dashboards plus AI summaries that help finance leaders explore risk scenarios in minutes.',
    stack: ['Next.js', 'Remix Charts', 'OpenAI API'],
    link: 'https://github.com/example/capital-signals'
  },
  {
    title: 'Civic Data Commons',
    description:
      'An open data toolkit that lets local governments publish sensor, mobility, and grant data with built-in context.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Terraform'],
    link: 'https://github.com/example/civic-data-commons'
  }
];

export const interests: Interest[] = [
  {
    title: 'Human-centered autonomy',
    description: 'Pairing robots with frontline experts so automation augments instead of replaces their craft.',
    examples: ['Narrated robot telemetry', 'Shared control interfaces', 'Trust rituals inside ops teams']
  },
  {
    title: 'Responsible AI acceleration',
    description: 'Operationalizing privacy, auditability, and education as part of every build pipeline.',
    examples: ['Lightweight red-teaming', 'Consent-aware data pipelines', 'Playbooks for exec + IC levels']
  },
  {
    title: 'Civic impact & climate resilience',
    description: 'Making the boring-but-critical infra legible to residents, activists, and policymakers.',
    examples: ['Transit reliability dashboards', 'Community climate briefings', 'Grant tracking for grassroots orgs']
  }
];
