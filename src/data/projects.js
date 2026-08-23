// Edit this file to add, remove, or reorder projects — the UI just maps over the array.
// `image` is optional: drop a screenshot/GIF at src/assets/projects/<file> and point to it
// (e.g. `image: '/src/assets/projects/vtryfyp.png'`) to replace the generated code-mockup visual.

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
    image: null,
  },
  {
    id: '10pearls-mern',
    featured: false,
    name: '10PearlsMERN',
    tagline: 'Self-hosted notes app with WYSIWYG editing and real auth security',
    description:
      "A lightweight Evernote-style notes app built to get the security fundamentals right, not just the CRUD. Users get JWT-authenticated accounts, rich-text note editing, live search, and JSON export/import for backup and migration. Under the hood: Joi request validation, Helmet security headers, HTML sanitization to block XSS from rendered note content, and scope-based access control so one user's notes are never reachable by another. It's also the one project in this list with an actual test suite — Mocha/Chai/Supertest on the API, Jest/RTL on the frontend.",
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Node.js', 'Express 5', 'MongoDB', 'JWT', 'Joi', 'Mocha/Chai'],
    github: 'https://github.com/SaharFatimaDevjani/10PearlsMERN',
    demo: null,
    image: null,
  },
  {
    id: 'mern-application',
    featured: false,
    name: 'MERN Application',
    tagline: 'Full-stack product catalog with end-to-end CRUD',
    description:
      'A product management site covering the full MERN loop — a React frontend across Home, About, Products, and Contact pages talking to an Express/MongoDB REST API for create, read, update, and delete. Built with form validation on both empty fields and email format, it was where I first wired up a complete client-to-database round trip on my own rather than following a course template.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/SaharFatimaDevjani/MERN_Application',
    demo: null,
    image: null,
  },
  {
    id: 'devjanimasala',
    featured: false,
    name: 'DevjaniMasala',
    tagline: "Django storefront built for my family's spice business",
    description:
      "A Django-powered product catalog and admin panel built for my family's masala business, with authenticated admin access for managing listings and a template-driven storefront on the customer side. It was structured with future e-commerce features — cart, checkout, payments — in mind, and was my first real project outside the MERN stack, working with Django's ORM and templating instead.",
    tech: ['Python', 'Django', 'SQLite', 'Django Templates'],
    github: 'https://github.com/SaharFatimaDevjani/Devjanimasala',
    demo: null,
    image: null,
  },
  {
    id: 'product-crud',
    featured: false,
    name: 'Product CRUD',
    tagline: 'React CRUD dashboard with a single shared add/edit form',
    description:
      "A product management dashboard against a mock API, notable mainly for its form design — one form handles both add and edit, branching on whether a product ID is present in the URL rather than duplicating markup. Paired with a dynamic table with inline edit/delete and SweetAlert2 confirmations for a more polished feel than a bare CRUD app usually gets.",
    tech: ['React', 'React Router', 'Axios', 'MockAPI', 'SweetAlert2', 'Vite'],
    github: 'https://github.com/SaharFatimaDevjani/Product_crud',
    demo: 'https://saharfatimadevjani.github.io/Product_crud/',
    image: null,
  },
  {
    id: 'stepup',
    featured: false,
    name: 'StepUP',
    tagline: 'Vanilla HTML/CSS/JS tourism site',
    description:
      'An early frontend-only practice build — a tourism site with smooth-scroll navigation, hover interactions, and CSS animations, no framework involved. It marks the starting point of the frontend fundamentals everything else here builds on.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/SaharFatimaDevjani/StepUP',
    demo: 'https://saharfatimadevjani.github.io/StepUP/',
    image: null,
  },
]
