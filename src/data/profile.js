// Personal details and links shared by the Hero, Contact, and Footer sections.

// Resolves a file in public/ against the deploy base path (GitHub Pages serves from
// /MyPortfolio/, Vercel and local dev from /), so asset links work in both places.
export const publicUrl = (path) => `${import.meta.env.BASE_URL}${path}`

// Picks up the CV from src/assets/resume/ at build time. If no PDF is there yet, this is
// empty and every "Resume" button stays hidden — so there's never a broken download link.
const resumeFiles = import.meta.glob('../assets/resume/*.pdf', { eager: true, query: '?url', import: 'default' })

export const profile = {
  name: 'Sahar Fatima Devjani',
  currentRole: { title: 'Software Design Engineer', company: 'Teresol' },
  email: 'sahardevjani635@gmail.com',
  github: 'https://github.com/SaharFatimaDevjani',
  linkedin: 'https://www.linkedin.com/in/saharfatimadevjani/',
  resume: Object.values(resumeFiles)[0] ?? null,
  resumeFileName: 'Sahar_Fatima_Devjani.pdf',
}
