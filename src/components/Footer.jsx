import { motion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/profile'

const SOCIALS = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-5xl px-6 pb-8 pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
            Code with care · Ship with purpose
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="my-10 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:my-14 sm:text-7xl lg:text-8xl"
        >
          Sahar Fatima
          <br />
          Devjani<span className="text-accent">.</span>
        </motion.p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-ink-soft sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Tailwind CSS
          </p>
          <p>Karachi, PK</p>
        </div>
      </div>
    </footer>
  )
}
