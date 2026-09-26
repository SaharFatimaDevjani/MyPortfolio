// Personal details and links shared by the Hero, Contact, and Footer sections.

// Resolves a file in public/ against the deploy base path (GitHub Pages serves from
// /MyPortfolio/, Vercel and local dev from /), so asset links work in both places.
export const publicUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Sahar Fatima Devjani',
  currentRole: { title: 'Software Design Engineer', company: 'Teresol' },
  email: 'sahardevjani635@gmail.com',
  github: 'https://github.com/SaharFatimaDevjani',
  linkedin: 'https://www.linkedin.com/in/saharfatimadevjani/',
  // RESUME: drop your final PDF at public/resume.pdf, then set this to publicUrl('resume.pdf').
  // While it's null, every "Resume" button on the site stays hidden.
  resume: null,
}
