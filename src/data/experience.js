// Reverse-chronological — most recent first. `projectLink` is optional: point it at a
// project's `id` from data/projects.js to cross-link the work built during that role.
// Dates/details verified against LinkedIn (Aug 2026 export).
export const experience = [
  {
    company: 'Teresol',
    role: 'Software Design Engineer',
    type: 'Full-Time',
    period: 'Jun 2026 — Present',
    location: 'Karachi, Pakistan',
    bullets: [
      'Building a production banking application on Vue.js, integrating Camunda-driven BPMN workflows into real business processes rather than prototypes.',
    ],
    tech: ['Vue.js', 'Camunda (BPMN workflows)'],
  },
  {
    company: 'Devjani Naturals',
    role: 'Web Developer & Social Media Manager',
    type: 'Family Business',
    period: 'Ongoing',
    location: 'Karachi, Pakistan',
    bullets: [
      "Built and maintain the WordPress site for my family's natural products business — the only project on this page that's an actual live, production site with real customers.",
      "Manage the brand's social media presence and content alongside the website.",
    ],
    tech: ['WordPress'],
    projectLink: 'devjani-naturals',
  },
  {
    company: '10Pearls',
    role: '10Pearls Shine Intern (MERN)',
    type: 'Internship · Remote',
    period: 'Jun 2025 — Sep 2025',
    location: 'Pakistan',
    bullets: [
      'Built a complete notes application from scratch using Node.js, React.js, and MongoDB, with secure authentication/authorization and rich-text editing.',
      'Ensured code quality through global exception handling, structured logging with Pino, unit testing (Mocha/Chai & Jest), and SonarQube analysis.',
      'Gained hands-on experience with Git version control and real-world Agile workflows under the guidance of industry mentors, as part of the 10Pearls Shine Internship Program.',
    ],
    tech: ['Node.js', 'React.js', 'MongoDB', 'Jest', 'Mocha/Chai', 'SonarQube', 'Git'],
    projectLink: '10pearls-mern',
  },
  {
    company: 'Click Chain Academy',
    role: 'AI Product Development Fellow',
    type: 'Fellowship · Remote',
    period: 'Apr 2025 — Aug 2025',
    location: 'Remote',
    bullets: [
      'Contributed across the stack on real product teams in a collaborative, remote-first environment — UI/UX design, Agile workflows, Test-Driven Development, and pair programming.',
      'Worked with Python, Java, and scikit-learn to build chatbots and prediction systems as part of AI-driven product features.',
      'Practiced epic/user-story creation, sprint forecasting, and retrospectives, bridging theoretical learning with practical product development.',
    ],
    tech: ['Python', 'Java', 'scikit-learn', 'Figma', 'Git'],
  },
  {
    company: 'RobX AI',
    role: 'Web Development Intern',
    type: 'Internship · Remote',
    period: 'Nov 2024 — Jan 2025',
    location: 'Remote',
    bullets: [
      'Contributed to frontend development using React, Next.js, and Tailwind CSS to build responsive UIs.',
      'Worked with the engineering team via Git to maintain code quality and implement modern design components.',
      "Built Edusity and SnapCheckInternship during this time — see the More Projects list below for both.",
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Git'],
  },
]
