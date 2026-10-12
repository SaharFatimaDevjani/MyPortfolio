export const education = {
  degree: 'Bachelor of Computer Science (BSCS)',
  school: 'Muhammad Ali Jinnah University (MAJU)',
  period: 'Feb 2021 — Dec 2025',
  location: 'Karachi, Pakistan',
  grade: 'CGPA 3.5',
  note: 'Funded my own studies by tutoring students and completing several software internships alongside full-time coursework.',
}

// Certifications are grouped by area. An entry with `courses` is a multi-course program:
// its completed courses are listed inside it. `status` marks programs that aren't finished,
// so nothing is presented as a full certificate before it is one.
export const certificationGroups = [
  {
    category: 'Web Development',
    items: [
      {
        name: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta · Coursera',
        status: 'In progress – 4 of 9 courses completed',
        courses: [
          'Introduction to Front-End Development',
          'Programming with JavaScript',
          'Version Control',
          'React Basics',
        ],
      },
      { name: 'Frontend Development', issuer: 'CodeGirls · ConsulNet', topics: 'HTML, CSS, JavaScript, and jQuery' },
      { name: 'WordPress Development', issuer: 'CodeGirls · ConsulNet', topics: 'Building websites with WordPress and plugins' },
      { name: 'Node.js Certificate', issuer: 'MindLuster', topics: 'Node.js fundamentals, modules, and building server-side applications' },
      { name: 'Getting Started with NodeJS', issuer: 'SimpliLearn', topics: 'Node.js basics, npm, and the core runtime modules' },
    ],
  },
  {
    category: 'Programming & Data',
    items: [
      {
        name: 'Google IT Automation with Python Professional Certificate',
        issuer: 'Google · Coursera (via CodeGirls)',
        status: 'In progress',
        courses: ['Crash Course on Python'],
      },
      { name: 'Python Programming', issuer: 'CodeGirls · ConsulNet', topics: 'Python programming, Django, and MySQL' },
      { name: 'Structured Query Language (SQL)', issuer: 'CU Boulder', topics: 'SQL fundamentals, queries, joins, and database design' },
      { name: 'Introduction to Relational Database and SQL', issuer: 'Coursera', topics: 'Relational database concepts, tables and keys, and basic SQL queries' },
    ],
  },
  {
    category: 'Language',
    items: [
      {
        name: 'IELTS Preparation Specialization',
        issuer: 'UC Irvine · Coursera',
        courses: ['IELTS Reading Section Skills Mastery'],
      },
      { name: 'Certificate in Eureka English', issuer: 'Eureka', topics: 'Spoken English, pronunciation, grammar, and accent' },
    ],
  },
  {
    category: 'Entrepreneurship',
    items: [
      { name: 'Certificate in Entrepreneurial Development', issuer: 'Institute of Business Administration (IBA)', topics: 'Entrepreneurship fundamentals and business planning' },
    ],
  },
]

export const currentlyLearning = {
  name: 'Machine Learning Specialization',
  issuer: 'Stanford · DeepLearning.AI · Coursera',
}
