export const site = {
  name: 'Defiant Duck',
  origin: 'https://defiantduck.com',
  email: 'chris@cdaly.me',
  description: 'Practical AI consulting and software engineering for small organizations. Find a useful starting point, plan a project, and build from there.',
};

export const contact = (subject = 'A conversation about AI and software') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hi Chris,\n\nHere is what our organization does and where we would like help:\n\n')}`;

export const services = [
  {
    slug: 'ai-opportunity-review',
    name: 'AI Opportunity Review',
    question: 'Where could AI help us?',
    introduction: 'Explore your team’s work, compare useful possibilities, and choose a manageable first step.',
    price: 500,
    proposed: true,
    outcome: 'A prioritized shortlist and a reasoned recommendation for where to begin.',
    deliverables: [
      ['A practical shortlist', 'Up to three opportunities, including where ordinary automation or a process change may be a better fit.'],
      ['A comparison you can use', 'Likely benefits, effort, information needed, and consequences of mistakes for each option.'],
      ['A recommended starting point', 'Why I would start there, what needs checking, and how useful pieces could connect later.'],
    ],
    scope: 'One team or department, with up to three recurring activities to consider.',
    process: 'A preparation questionnaire, a focused working session, a concise written review, and a walkthrough with one clarification round.',
    boundary: 'This review helps you choose an opportunity. Detailed technical planning and implementation are separate engagements.',
    preparation: ['A short description of your organization and the work that takes time or causes friction.', 'The systems you already use, practical constraints, and any AI experiments you have tried.', 'No preferred tool or technical project brief is needed.'],
    example: { title: 'A support team looking for a useful first step', text: 'Compare request summaries, help finding policy information, and draft responses for staff to review. Use the team’s workload and available information to select a bounded trial, then identify what a useful result would look like.' },
    followOn: 'A focused feasibility experiment, a plan for the selected opportunity, or hands-on support for a small pilot.',
    questions: [
      ['Do we need to know which AI tool we want?', 'No. Start with the work and the outcome you want. The review considers tools only in relation to that need.'],
      ['What if AI is not the best answer?', 'The recommendation can be a process change or conventional automation. The purpose is to find a useful improvement.'],
    ],
  },
  {
    slug: 'ai-project-plan',
    name: 'AI Project Plan',
    question: 'We know what we want to build.',
    introduction: 'Turn a defined idea into a practical plan for scope, architecture, integration, and evaluation.',
    price: 750,
    proposed: false,
    outcome: 'A plan you can use to brief a developer or discuss implementation.',
    deliverables: [
      ['A defined first version', 'The workflow, intended users, expected inputs and outputs, and boundaries of the initial implementation.'],
      ['A technical approach', 'Proposed components, data flow, integrations, and the assumptions that need to be tested.'],
      ['A path to delivery', 'Implementation stages, dependencies, human oversight, and criteria for evaluating the individual steps and combined workflow.'],
    ],
    scope: 'One agreed project or bounded workflow. Its smaller component steps belong in the same plan.',
    process: 'A review of supplied context, a focused working session, a written plan, and a walkthrough with one clarification round.',
    boundary: 'We agree the boundaries before starting. Extensive investigation, implementation, and additional workflows are quoted separately.',
    preparation: ['The outcome you want, who will use the result, and the systems it needs to work with.', 'Relevant examples or existing documentation, plus known budget, timing, and data constraints.', 'You can come directly to this service with a defined idea.'],
    example: { title: 'Planning an internal knowledge assistant', text: 'Separate finding relevant material, preparing an answer, and checking that the answer is supported. Define the documents and access boundaries, agree representative questions, and stage the work from a focused trial to an integration.' },
    followOn: 'Prototype development, evaluation tooling, application development, systems integration, and operational handover.',
    questions: [
      ['Do we need an Opportunity Review first?', 'No. If you already have a defined idea, you can come directly to the Project Plan.'],
      ['Can another developer implement the plan?', 'Yes. The written plan is intended to help you brief a developer, take the work forward internally, or discuss implementation with me.'],
    ],
  },
  {
    slug: 'ai-project-review',
    name: 'AI Project Review',
    question: 'Could we get a second opinion?',
    introduction: 'Assess a proposal, prototype, or existing approach and decide what deserves attention next.',
    price: 750,
    proposed: true,
    outcome: 'A prioritized assessment grounded in the material and behavior available to review.',
    deliverables: [
      ['An assessment of the approach', 'How the proposed or existing system fits the intended workflow, available data, and integration constraints.'],
      ['Evidence and open questions', 'What the supplied material and demonstration establish, where claims need checking, and what remains uncertain.'],
      ['Prioritized recommendations', 'What to retain, change, or investigate next, with the reasoning behind each recommendation.'],
    ],
    scope: 'One defined proposal, prototype, or application workflow, assessed against an agreed question.',
    process: 'Review of supplied material and a focused walkthrough, followed by a written assessment, readout, and one clarification round.',
    boundary: 'Deep code investigation, new benchmarks, security or compliance audits, and remediation require a separate scope.',
    preparation: ['The decision you need to make and the proposal, design notes, or demonstration you want reviewed.', 'Representative outputs, known problems, and any existing evaluation or cost information.', 'We check that the available material is enough for a useful review before starting.'],
    example: { title: 'An assistant that gives inconsistent answers', text: 'Examine supplied examples and the workflow around the assistant. Check whether retrieved material supports the answer, distinguish observed behavior from assumptions about the cause, and recommend the next checks in order of importance.' },
    followOn: 'Targeted investigation, evaluation work, reliability or cost improvements, integration changes, and ongoing technical guidance.',
    questions: [
      ['Does the review include fixing the system?', 'The fixed fee covers the agreed assessment and recommendations. Remediation is scoped separately once the work is understood.'],
      ['Can you assess a proposal before anything is built?', 'Yes. The review can examine a defined proposal or design against the question you need to answer. Its conclusions will reflect the evidence available.'],
    ],
  },
];
