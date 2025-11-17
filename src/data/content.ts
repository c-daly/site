export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  resume: string;
  socials: { label: string; url: string }[];
  metrics: { label: string; value: string }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type GithubProfile = {
  username: string;
  note: string;
};

const assetBase = import.meta.env.BASE_URL ?? '/';

export const profile: Profile = {
  name: 'Alex Robbins',
  role: 'Systems engineer · delivery lead',
  tagline: 'Guiding resilient robotics & AI programs from sketchbook to launch.',
  summary:
    'I synthesize research, prototyping, and delivery rituals so emerging-technology teams can move quickly without trading away trust or safety.',
  location: 'Seattle, WA · Remote friendly',
  availability: 'Accepting embedded leadership and advisory projects for Q3 2024.',
  email: 'hello@alexrobbins.com',
  resume: `${assetBase}alex-robbins-resume.pdf`,
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexrobbins' },
    { label: 'GitHub', url: 'https://github.com/alexrobbins' }
  ],
  metrics: [
    { label: 'Products shipped', value: '24' },
    { label: 'Robotics programs led', value: '8' },
    { label: 'Cycle time reduced', value: '35%' }
  ]
};

export const experiences: Experience[] = [
  {
    company: 'Northwind Robotics',
    role: 'Head of Autonomy Delivery',
    period: '2021 — Present',
    location: 'Remote',
    summary: 'Own the roadmap and rituals for a 40-person team shipping human-in-the-loop warehouse automation.',
    highlights: [
      'Directed the rollout of a navigation copilot that reduced exception escalations by 43% across 3 sites.',
      'Introduced reliability reviews, observability dashboards, and pre-flight simulations used by every launch team.',
      'Partnered with customer ops to codify trust metrics and executive briefings adopted company-wide.'
    ]
  },
  {
    company: 'Civic Systems Lab',
    role: 'Principal Systems Engineer',
    period: '2018 — 2021',
    location: 'Seattle, WA',
    summary: 'Built civic tech programs with municipalities focused on climate resilience and equitable transit.',
    highlights: [
      'Coached 18 fellows through discovery sprints that surfaced climate adaptation backlogs for two cities.',
      'Designed secure, open-data workflows that now publish 40+ public datasets with automatic documentation.',
      'Launched a community research residency that paired residents with rapid-response engineering support.'
    ]
  },
  {
    company: 'Aero & Co',
    role: 'Staff Product Engineer',
    period: '2014 — 2018',
    location: 'Portland, OR',
    summary: 'Scaled predictive maintenance tools for industrial fleets and translated R&D into shipping software.',
    highlights: [
      'Delivered a cross-platform diagnostics toolkit adopted by 200+ field technicians in the first quarter.',
      'Led refactors that halved build times and removed 30% of production toil for the platform team.',
      'Negotiated roadmap tradeoffs between exec, legal, and safety teams to keep modernization work funded.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Navigation Copilot',
    description:
      'Bilingual mission briefings for AMR fleets. Surfaces route health, obstacles, and mitigations without needing to scrub logs.',
    stack: ['TypeScript', 'LangGraph', 'ROS 2', 'Supabase'],
    link: 'https://github.com/example/navigation-copilot'
  },
  {
    title: 'Capital Signals Briefing',
    description:
      'Interactive dashboards with AI-generated narratives that help finance leaders pressure-test scenarios in minutes.',
    stack: ['Next.js', 'Remix Charts', 'OpenAI API'],
    link: 'https://github.com/example/capital-signals'
  },
  {
    title: 'Civic Data Commons',
    description:
      'Open-data toolkit that adds policy context, provenance, and ethics notes for municipal data portals.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Terraform'],
    link: 'https://github.com/example/civic-data-commons'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Leadership',
    items: ['Roadmap facilitation', 'Incident playbooks', 'Trusted AI governance', 'Technical recruiting']
  },
  {
    title: 'Systems',
    items: ['ROS 2 & Gazebo', 'Python', 'TypeScript', 'Edge observability', 'CI/CD enablement']
  },
  {
    title: 'Product',
    items: ['Service blueprints', 'User research synthesis', 'Storytelling for execs', 'Outcome-focused analytics']
  }
];

export const githubProfile: GithubProfile = {
  username: 'alexrobbins',
  note: 'Recent repos focus on pairing LLM copilots with robotics ops and civic-tech data portals.'
};
