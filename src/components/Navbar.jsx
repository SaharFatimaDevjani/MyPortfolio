import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['top', ...LINKS.map((l) => l.href.slice(1))]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-line bg-surface/80 shadow-lg shadow-black/5 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          sahar<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={link.href}
                  className={`relative z-10 block px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive ? 'text-accent' : 'text-ink-soft hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="text-ink md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute inset-x-4 top-16 flex flex-col gap-1 rounded-2xl border border-line bg-surface p-3 shadow-xl md:hidden"
        >
          {LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-mono text-sm uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-accent/10 text-accent' : 'text-ink-soft hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </motion.ul>
      )}
    </header>
  )
}
