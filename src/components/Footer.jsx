import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/profile'

const SOCIALS = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-soft">
          &copy; {new Date().getFullYear()} {profile.name} &middot; Built with React, Vite &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-1">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
