// Reverse-chronological — most recent first. `projectLink` is optional: point it at a
// project's `id` from data/projects.js to cross-link the work built during that role.
export const experience = [
  {
    company: 'Teresol',
    role: 'Software Design Engineer',
    type: 'Full-Time',
    period: 'Aug 2025 — Present',
    location: 'Karachi, Pakistan',
    bullets: [
      'Building a production banking application on Vue.js, integrating Camunda-driven BPMN workflows into real business processes rather than prototypes.',
    ],
    tech: ['Vue.js', 'Camunda (BPMN workflows)'],
  },
  {
    company: '10Pearls',
    role: 'MERN Stack Developer Intern',
    type: 'Internship · Remote',
    period: 'Jun 2025 — Aug 2025',
    location: 'Remote',
    bullets: [
      'Built a complete notes application from scratch using Node.js, React.js, and MongoDB, with authentication and rich-text editing.',
      'Implemented structured logging with Pino, global exception handling, and unit tests with Mocha/Chai and Jest.',
      'Integrated SonarQube for code-quality checks and collaborated through Git for version control.',
    ],
    tech: ['Node.js', 'React.js', 'MongoDB', 'Jest', 'Mocha/Chai', 'SonarQube', 'Git'],
    projectLink: '10pearls-mern',
  },
  {
    company: 'Click Chain Academy',
    role: 'AI Product Development Fellow',
    type: 'Fellowship · Remote',
    period: 'May 2025 — Aug 2025',
    location: 'Remote',
    bullets: [
      'Collaborated on team projects using Agile methods to design and build web solutions.',
      'Prototyped frontend flows in Figma and wrote backend logic scripts in Java and Python.',
      'Strengthened teamwork, problem-solving, and Git-based version-control workflows.',
    ],
    tech: ['Figma', 'Java', 'Python', 'Git'],
  },
  {
    company: 'RobX AI',
    role: 'Frontend Intern',
    type: 'Internship · Remote',
    period: 'Oct 2024 — Dec 2024',
    location: 'Remote',
    bullets: [
      'Contributed to frontend development using React, Next.js, and Tailwind CSS to build responsive UIs.',
      'Worked with the engineering team via Git to maintain code quality and implement modern design components.',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Git'],
  },
]
