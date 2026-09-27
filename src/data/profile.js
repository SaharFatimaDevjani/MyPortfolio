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
  // CV lives in public/ so its URL (and the downloaded file) keeps this exact name.
  // To update it, replace public/Sahar_Fatima_Devjani.pdf with the new file.
  resume: publicUrl('Sahar_Fatima_Devjani.pdf'),
  resumeFileName: 'Sahar_Fatima_Devjani.pdf',
}
