export type Highlight = {
  title: string;
  description: string;
  metric: string;
};

export type Workstream = {
  title: string;
  summary: string;
  stack: string[];
  status: 'active' | 'pilot' | 'handoff';
  impact: string;
};

export const highlights: Highlight[] = [
  {
    title: 'Multi-agent dispatch spine',
    description: 'Productionized agent orchestration that routes 2K+ fulfillment tasks per day across markets.',
    metric: '98.7% on-time completions'
  },
  {
    title: 'Robotics telemetry fabric',
    description: 'Unified robot ops metrics into a single warehouse dashboard with predictive maintenance alerts.',
    metric: '32% downtime avoided'
  },
  {
    title: 'Trusted AI council',
    description: 'Chaired the policy workstream that now reviews every generative AI launch for privacy risk.',
    metric: '12 approvals shipped'
  }
];

export const workstreams: Workstream[] = [
  {
    title: 'Autonomous floor runner',
    summary: 'Blending LLM planning with a micro-ROS drive stack so floor associates get every pick staged ahead of time.',
    stack: ['ROS 2', 'LLM planner', 'Edge TPU'],
    status: 'active',
    impact: 'Projected 18% faster replenishment across 430 stores.'
  },
  {
    title: 'Capital forecasting copilots',
    summary: 'Pairing treasury analysts with copilots that narrate deltas, risk flags, and supporting evidence in seconds.',
    stack: ['Next.js', 'LangChain', 'Vertex AI'],
    status: 'pilot',
    impact: '4x faster scenario modeling for the finance steering committee.'
  },
  {
    title: 'LLM governance kit',
    summary: 'Packaging prompts, guardrails, and audit metadata so every product org can launch responsibly by default.',
    stack: ['Open Policy Agent', 'Supabase', 'TypeScript'],
    status: 'handoff',
    impact: 'Adopted by 7 product lines after a 6-week residency.'
  }
];

export const metrics = [
  { label: 'initiatives shipped', value: '24' },
  { label: 'teams embedded', value: '11' },
  { label: 'cycle time cut', value: '35%' }
];
