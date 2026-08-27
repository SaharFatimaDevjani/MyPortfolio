// Edit this file to add, remove, or reorder projects — the UI just maps over these arrays.
// IMAGES: to show a real screenshot for a project, save it as
//   public/projects/<id>.jpg
// (matching the `id` below, e.g. public/projects/vtryfyp.jpg) — no code change needed.
// Until that file exists, the card automatically falls back to a generated placeholder.

const localImage = (id) => `/projects/${id}.jpg`

// Full-detail cards, best to worst. First entry is the featured/lead project.
// Order below reflects Sahar's own ranking (Aug 2026) — see README "Project story notes"
// for the two open questions (Product CRUD placement, and thin-README projects pending detail).
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
    image: localImage('vtryfyp'),
  },
  {
    id: 'devjani-naturals',
    name: 'Devjani Naturals',
    tagline: "Live WordPress site for my family's natural products business",
    description:
      "The actual production website for my family's natural products business — built on WordPress and still live today. I don't just maintain the site: I run the brand's social media alongside it, so this is ongoing, real-world responsibility rather than a one-off build. It's the project on this page with genuine business impact and real users, not a course exercise.",
    tech: ['WordPress'],
    github: null,
    demo: 'https://devjaninaturals.com',
    demoLabel: 'Visit Site',
    image: localImage('devjani-naturals'),
  },
  {
    id: 'freshbaked',
    name: 'Fresh Baked',
    tagline: 'Bakery storefront with Firebase-backed admin panel — deployed live',
    description:
      "A bakery portfolio site built as a CodeGirls capstone, with an actual admin workflow behind it: Firebase email/password and Google sign-in gate a panel where admins add, edit, and delete products and manage customer testimonials. Customers get category-filtered browsing and a favorites slider. It's one of the few projects here I've actually deployed and kept live.",
    tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'React Router', 'Framer Motion'],
    github: 'https://github.com/SaharFatimaDevjani/freshbaked',
    demo: 'https://freshbaked.vercel.app/',
    image: localImage('freshbaked'),
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
    image: localImage('10pearls-mern'),
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
    image: localImage('tasty-treats'),
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
    image: localImage('hotel-management-system'),
  },
  {
    id: 'devjanimasala',
    name: 'DevjaniMasala',
    tagline: "Django coursework storefront for my family's spice business",
    description:
      "A separate, earlier Django-powered product catalog and admin panel — same family business as Devjani Naturals in concept, but a different build (this one was a course project, not the live site). Authenticated admin access for managing listings, a template-driven storefront on the customer side, and structured with future e-commerce features — cart, checkout, payments — in mind. It was my first real project outside the MERN stack, working with Django's ORM and templating instead.",
    tech: ['Python', 'Django', 'SQLite', 'Django Templates'],
    github: 'https://github.com/SaharFatimaDevjani/Devjanimasala',
    demo: null,
    image: localImage('devjanimasala'),
  },
  {
    id: 'stepup',
    name: 'StepUP',
    tagline: 'Vanilla HTML/CSS/JS tourism site — smooth-scroll & hover animation practice, deployed live',
    description:
      'A tourism/travel site built during a Frontend Development course — no framework, just HTML, CSS, and JavaScript, with smooth-scroll navigation, hover-driven interactions, and CSS animations throughout. It marks the starting point of the frontend fundamentals everything else here builds on, and it was deliberate practice in attention to detail and UX polish rather than functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/SaharFatimaDevjani/StepUP',
    demo: 'https://saharfatimadevjani.github.io/StepUP/',
    image: localImage('stepup'),
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
    image: localImage('product-crud'),
  },
]

// Smaller/practice repos — still real, shown as a compact list rather than full cards.
// edusity, snapcheck-internship, jinnahnew, and css-assignment are placed first per Sahar's
// requested order, but stay in this compact tier (not full cards) until their descriptions
// below are confirmed with her — see README "Project story notes".
export const otherProjects = [
  {
    id: 'edusity',
    name: 'Edusity',
    tagline: 'Early-stage React scaffold for an education-platform concept',
    github: 'https://github.com/SaharFatimaDevjani/Edusity',
    demo: null,
    image: localImage('edusity'),
  },
  {
    id: 'snapcheck-internship',
    name: 'SnapCheckInternship',
    tagline: 'Next.js + Tailwind app built for an internship take-home task',
    github: 'https://github.com/SaharFatimaDevjani/SnapCheckInternship',
    demo: null,
    image: localImage('snapcheck-internship'),
  },
  {
    id: 'jinnahnew',
    name: 'JinnahNew',
    tagline: 'Responsive university landing page — About, Courses, Contact sections',
    github: 'https://github.com/SaharFatimaDevjani/JinnahNew',
    demo: null,
    image: localImage('jinnahnew'),
  },
  {
    id: 'css-assignment',
    name: 'CSSAssignment',
    tagline: 'Advanced CSS technique coursework',
    github: 'https://github.com/SaharFatimaDevjani/CSSAssignment',
    demo: null,
    image: localImage('css-assignment'),
  },
  {
    id: 'hgfashion',
    name: 'HGFashion',
    tagline: 'Static HTML/CSS/JS fashion landing page',
    github: 'https://github.com/SaharFatimaDevjani/HGFashion',
    demo: null,
    image: localImage('hgfashion'),
  },
  {
    id: 'api-development',
    name: 'APIDevelopment',
    tagline: 'Express + Node.js REST API scaffold — routes/models practice',
    github: 'https://github.com/SaharFatimaDevjani/APIDevelopment',
    demo: null,
    image: localImage('api-development'),
  },
  {
    id: 'react-dynamic-table',
    name: 'ReactDynamicTableData',
    tagline: 'React practice building a dynamic data table',
    github: 'https://github.com/SaharFatimaDevjani/ReactDynamicTableData',
    demo: null,
    image: localImage('react-dynamic-table'),
  },
  {
    id: 'dyamin-data-case-conversion',
    name: 'DyaminDataCaseConversion',
    tagline: 'React utility for case-converting structured data',
    github: 'https://github.com/SaharFatimaDevjani/DyaminDataCaseConversion',
    demo: null,
    image: localImage('dyamin-data-case-conversion'),
  },
  {
    id: 'mvc-demo',
    name: 'MVCDemo',
    tagline: 'ASP.NET MVC snack-inventory demo — coursework in the MVC pattern',
    github: 'https://github.com/SaharFatimaDevjani/MVCDemo',
    demo: null,
    image: localImage('mvc-demo'),
  },
  {
    id: 'devops-assignment',
    name: 'DevopsAssignment',
    tagline: 'CI/CD and tooling coursework assignment',
    github: 'https://github.com/SaharFatimaDevjani/DevopsAssignment',
    demo: null,
    image: localImage('devops-assignment'),
  },
  {
    id: 'mytodo',
    name: 'MyTodO',
    tagline: 'Native Android to-do app',
    tech: ['Kotlin', 'Gradle'],
    github: 'https://github.com/SaharFatimaDevjani/MyTodO',
    demo: null,
    image: localImage('mytodo'),
  },
]
