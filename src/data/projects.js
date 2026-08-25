// Edit this file to add, remove, or reorder projects — the UI just maps over these arrays.
// `image` defaults to GitHub's auto-generated social-preview card for the repo; if a project
// has a real screenshot/GIF, drop it in src/assets/projects/ and point `image` at it instead.

const ogImage = (repo) => `https://opengraph.githubassets.com/1/SaharFatimaDevjani/${repo}`

// Full-detail cards, best to worst. First entry is the featured/lead project.
export const projects = [
  {
    id: 'vtryfyp',
    featured: true,
    name: 'VTryFYP',
    tagline: 'Eyewear e-commerce with real-time, client-side virtual try-on',
    description:
      "My final-year project and flagship build: a full-stack accessories store where customers try on glasses through their webcam before buying — no app install, no server round-trip per frame. The try-on runs entirely client-side on Google's MediaPipe Face Landmarker, tracking facial landmarks in real time and rendering the overlay to canvas every frame, with exponential smoothing to kill jitter and admin-configurable scale/rotation/offset per product for accurate calibration. The admin side includes a live camera preview for tuning overlays, plus full product, category, and order management. Earrings and necklace try-on are scaffolded in the data model as the next feature.",
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Storefront UI', 'MediaPipe', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary'],
    github: 'https://github.com/SaharFatimaDevjani/VTryFYP',
    demo: null,
    image: ogImage('VTryFYP'),
  },
  {
    id: '10pearls-mern',
    name: '10PearlsMERN',
    tagline: 'Self-hosted notes app with WYSIWYG editing and real auth security',
    description:
      "A lightweight Evernote-style notes app built to get the security fundamentals right, not just the CRUD. Users get JWT-authenticated accounts, rich-text note editing, live search, and JSON export/import for backup and migration. Under the hood: Joi request validation, Helmet security headers, HTML sanitization to block XSS from rendered note content, and scope-based access control so one user's notes are never reachable by another. It's also the one project in this list with an actual test suite — Mocha/Chai/Supertest on the API, Jest/RTL on the frontend.",
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Node.js', 'Express 5', 'MongoDB', 'JWT', 'Joi', 'Mocha/Chai'],
    github: 'https://github.com/SaharFatimaDevjani/10PearlsMERN',
    demo: null,
    image: ogImage('10PearlsMERN'),
  },
  {
    id: 'hotel-management-system',
    name: 'Hotel Management System',
    tagline: 'Spring Boot + React booking platform with role-based access',
    description:
      'A full-stack hotel booking system split across a Spring Boot REST API and a React SPA. Customers browse and book rooms with a choice of payment method (cash, balance, or card); admins get a tabbed panel for managing rooms, users, and bookings, plus a walk-in booking flow through a seeded admin account. The backend leans on Spring Security with JWT, Spring Data JPA over MySQL, and a global exception handler for consistent API error responses — my first project pairing React with a Java backend instead of Node.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'MySQL', 'JWT', 'React 19', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/SaharFatimaDevjani/hotelmanagementsystem',
    demo: null,
    image: ogImage('hotelmanagementsystem'),
  },
  {
    id: 'freshbaked',
    name: 'Fresh Baked',
    tagline: 'Bakery storefront with Firebase-backed admin panel — deployed live',
    description:
      "A bakery portfolio site built as a CodeGirls capstone, with an actual admin workflow behind it: Firebase email/password and Google sign-in gate a panel where admins add, edit, and delete products and manage customer testimonials. Customers get category-filtered browsing and a favorites slider. It's one of the few projects here I've actually deployed and kept live.",
    tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'React Router', 'Framer Motion'],
    github: 'https://github.com/SaharFatimaDevjani/freshbaked',
    demo: 'https://lnkd.in/dY4QS27R',
    image: ogImage('freshbaked'),
  },
  {
    id: 'tasty-treats',
    name: 'Tasty Treats',
    tagline: 'Full-stack product catalog with end-to-end CRUD',
    description:
      'A product management site covering the full MERN loop — a React frontend across Home, About, Products, and Contact pages talking to an Express/MongoDB REST API for create, read, update, and delete. Built with form validation on both empty fields and email format, it was where I first wired up a complete client-to-database round trip on my own rather than following a course template.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/SaharFatimaDevjani/MERN_Application',
    demo: null,
    image: ogImage('MERN_Application'),
  },
  {
    id: 'devjanimasala',
    name: 'DevjaniMasala',
    tagline: "Django storefront built for my family's spice business",
    description:
      "A Django-powered product catalog and admin panel built for my family's masala business, with authenticated admin access for managing listings and a template-driven storefront on the customer side. It was structured with future e-commerce features — cart, checkout, payments — in mind, and was my first real project outside the MERN stack, working with Django's ORM and templating instead.",
    tech: ['Python', 'Django', 'SQLite', 'Django Templates'],
    github: 'https://github.com/SaharFatimaDevjani/Devjanimasala',
    demo: null,
    image: ogImage('Devjanimasala'),
  },
  {
    id: 'product-crud',
    name: 'Product CRUD',
    tagline: 'React CRUD dashboard with a single shared add/edit form — deployed live',
    description:
      "A product management dashboard against a mock API, notable mainly for its form design — one form handles both add and edit, branching on whether a product ID is present in the URL rather than duplicating markup. Paired with a dynamic table with inline edit/delete and SweetAlert2 confirmations for a more polished feel than a bare CRUD app usually gets.",
    tech: ['React', 'React Router', 'Axios', 'MockAPI', 'SweetAlert2', 'Vite'],
    github: 'https://github.com/SaharFatimaDevjani/Product_crud',
    demo: 'https://saharfatimadevjani.github.io/Product_crud/',
    image: ogImage('Product_crud'),
  },
]

// Smaller/practice repos — still real, shown as a compact list rather than full cards.
export const otherProjects = [
  {
    id: 'stepup',
    name: 'StepUP',
    tagline: 'Vanilla HTML/CSS/JS tourism site — smooth-scroll & hover animation practice',
    github: 'https://github.com/SaharFatimaDevjani/StepUP',
    demo: 'https://saharfatimadevjani.github.io/StepUP/',
    image: ogImage('StepUP'),
  },
  {
    id: 'jinnahnew',
    name: 'JinnahNew',
    tagline: 'Responsive university landing page — About, Courses, Contact sections',
    github: 'https://github.com/SaharFatimaDevjani/JinnahNew',
    demo: null,
    image: ogImage('JinnahNew'),
  },
  {
    id: 'hgfashion',
    name: 'HGFashion',
    tagline: 'Static HTML/CSS/JS fashion landing page',
    github: 'https://github.com/SaharFatimaDevjani/HGFashion',
    demo: null,
    image: ogImage('HGFashion'),
  },
  {
    id: 'snapcheck-internship',
    name: 'SnapCheckInternship',
    tagline: 'Next.js + Tailwind app built for an internship take-home task',
    github: 'https://github.com/SaharFatimaDevjani/SnapCheckInternship',
    demo: null,
    image: ogImage('SnapCheckInternship'),
  },
  {
    id: 'edusity',
    name: 'Edusity',
    tagline: 'Early-stage React scaffold for an education-platform concept',
    github: 'https://github.com/SaharFatimaDevjani/Edusity',
    demo: null,
    image: ogImage('Edusity'),
  },
  {
    id: 'api-development',
    name: 'APIDevelopment',
    tagline: 'Express + Node.js REST API scaffold — routes/models practice',
    github: 'https://github.com/SaharFatimaDevjani/APIDevelopment',
    demo: null,
    image: ogImage('APIDevelopment'),
  },
  {
    id: 'react-dynamic-table',
    name: 'ReactDynamicTableData',
    tagline: 'React practice building a dynamic data table',
    github: 'https://github.com/SaharFatimaDevjani/ReactDynamicTableData',
    demo: null,
    image: ogImage('ReactDynamicTableData'),
  },
  {
    id: 'dyamin-data-case-conversion',
    name: 'DyaminDataCaseConversion',
    tagline: 'React utility for case-converting structured data',
    github: 'https://github.com/SaharFatimaDevjani/DyaminDataCaseConversion',
    demo: null,
    image: ogImage('DyaminDataCaseConversion'),
  },
  {
    id: 'css-assignment',
    name: 'CSSAssignment',
    tagline: 'Advanced CSS technique coursework',
    github: 'https://github.com/SaharFatimaDevjani/CSSAssignment',
    demo: null,
    image: ogImage('CSSAssignment'),
  },
  {
    id: 'mvc-demo',
    name: 'MVCDemo',
    tagline: 'ASP.NET MVC snack-inventory demo — coursework in the MVC pattern',
    github: 'https://github.com/SaharFatimaDevjani/MVCDemo',
    demo: null,
    image: ogImage('MVCDemo'),
  },
  {
    id: 'devops-assignment',
    name: 'DevopsAssignment',
    tagline: 'CI/CD and tooling coursework assignment',
    github: 'https://github.com/SaharFatimaDevjani/DevopsAssignment',
    demo: null,
    image: ogImage('DevopsAssignment'),
  },
  {
    id: 'mytodo',
    name: 'MyTodO',
    tagline: 'Native Android to-do app',
    tech: ['Kotlin', 'Gradle'],
    github: 'https://github.com/SaharFatimaDevjani/MyTodO',
    demo: null,
    image: ogImage('MyTodO'),
  },
]
