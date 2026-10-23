// Reverse-chronological — most recent first. `projectLink` is optional: point it at a
// project's `id` from data/projects.js to cross-link the work built during that role.
// Titles, dates and wording match Sahar's CV (public/Sahar_Fatima_Devjani.pdf, Oct 2026).
export const experience = [
  {
    company: 'Teresol',
    role: 'Software Design Engineer',
    type: 'Full-Time',
    period: 'Jun 2026 — Present',
    location: 'Karachi, Pakistan',
    bullets: [
      'Contribute to a production banking application used in a regulated financial environment.',
      'Configure Camunda BPMN forms and process properties for banking business workflows.',
      'Building proficiency in the Vue.js front end; prepare technical documentation and data reports for the team.',
    ],
    tech: ['Vue.js', 'Camunda (BPMN)'],
  },
  {
    company: '10Pearls',
    role: 'MERN Stack Intern',
    type: 'Shine Internship Program · Remote',
    period: 'Jun 2025 — Aug 2025',
    location: 'Remote',
    bullets: [
      'Built a full-stack notes app (React, Node.js, Express, MongoDB) with authentication and rich-text editing as the program’s final project.',
      'Took part in code reviews and SonarQube code-quality checks within the internship programme.',
      'Added global exception handling, structured logging (Pino) and unit tests (Mocha/Chai, Jest).',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'SonarQube', 'Jest'],
    projectLink: '10pearls-mern',
  },
  {
    company: 'Click Chain Academy',
    role: 'AI Product Development Fellow',
    type: 'Fellowship (CodeGirls) · Remote',
    period: 'Apr 2025 — Jun 2025',
    location: 'Remote',
    bullets: [
      "Worked in an Agile team on the academy's Java development project, delivering features in sprints.",
      'Designed product flows in Figma; built chatbot and prediction features with Python and scikit-learn.',
    ],
    tech: ['Java', 'Python', 'scikit-learn', 'Figma'],
  },
  {
    company: 'RobX AI',
    role: 'Frontend Web Development Intern',
    type: 'Internship · Remote',
    period: 'Nov 2024 — Jan 2025',
    location: 'Remote',
    bullets: [
      'Developed responsive websites (Edusity, SnapCheck) with React, Next.js and Tailwind CSS.',
      'Both are live: see Edusity and SnapCheckInternship in the More Projects list.',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    company: 'Devjani Naturals',
    role: 'Web Developer & Social Media Manager',
    type: 'Family Business',
    period: 'Ongoing',
    location: 'Karachi, Pakistan',
    bullets: [
      "Built and maintain the live WordPress site for my family's natural products business, serving real customers.",
      "Manage the brand's social media presence and content alongside the website.",
    ],
    tech: ['WordPress'],
    projectLink: 'devjani-naturals',
  },
]

export const volunteering = [
  {
    organization: 'KPSIAJ Youth Forum, Karachi',
    role: 'Member & Volunteer',
    description:
      'Organising team for youth job fairs, coding competitions and workshops; Connect for Cause team (community cleanliness drives).',
  },
  {
    organization: 'Fatimiyah Girls Guide, Karachi',
    role: 'Volunteer',
    description: 'Attendee management and coordination at community events.',
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Urdu', level: 'Native' },
]
