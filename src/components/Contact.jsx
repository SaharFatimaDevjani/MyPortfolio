import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const LINKS = [
  { label: 'Email', href: 'mailto:sahardevjani635@gmail.com', icon: Mail, display: 'sahardevjani635@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/SaharFatimaDevjani', icon: GithubIcon, display: 'github.com/SaharFatimaDevjani' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saharfatimadevjani', icon: LinkedinIcon, display: 'linkedin.com/in/saharfatimadevjani' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
        <p className="mt-6 text-lg text-ink-soft">
          Open to new roles and collaborations — feel free to reach out.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {LINKS.map(({ label, href, icon: Icon, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-all hover:border-accent hover:-translate-y-0.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={16} />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {label}
                </span>
                <span className="block text-sm text-ink group-hover:text-accent">{display}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
