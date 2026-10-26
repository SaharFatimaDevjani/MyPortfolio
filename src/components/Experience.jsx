import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, HeartHandshake, Languages } from 'lucide-react'
import { experience, volunteering, languages } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './icons/TechIcon'

function Detail({ item }) {
  return (
    <motion.div
      key={item.company}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <h3 className="text-xl font-bold text-ink">
        {item.role} <span className="font-normal text-ink-soft">({item.type})</span>
      </h3>
      <p className="mt-1 font-mono text-xs text-accent">
        {item.period} &middot; {item.location}
      </p>

      <ul className="mt-5 space-y-2.5">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {item.tech.map((t) => (
          <TechIcon key={t} name={t} />
        ))}
      </div>

      {item.projectLink && (
        <a
          href={`#${item.projectLink}`}
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
        >
          View the project built here
          <ArrowUpRight size={13} />
        </a>
      )}
    </motion.div>
  )
}

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="04" label="Experience" title="Where I've worked" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="spotlight mt-10 overflow-hidden rounded-2xl border border-line bg-surface md:flex">
          <div className="flex gap-1 overflow-x-auto border-b border-line p-2 md:w-56 md:shrink-0 md:flex-col md:border-b-0 md:border-r md:p-3">
            {experience.map((item, i) => (
              <button
                key={item.company}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors md:px-3 ${
                  active === i
                    ? 'bg-accent/10 text-accent'
                    : 'text-ink-soft hover:bg-line/40 hover:text-ink'
                }`}
              >
                {item.company}
              </button>
            ))}
          </div>

          <div className="min-w-0 flex-1 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <Detail item={experience[active]} />
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="spotlight rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-soft">
              <HeartHandshake size={14} className="text-accent" aria-hidden="true" />
              Volunteering
            </h3>
            <ul className="mt-4 space-y-4">
              {volunteering.map((v) => (
                <li key={v.organization}>
                  <p className="text-sm font-semibold text-ink">
                    {v.organization} <span className="font-normal text-ink-soft">· {v.role}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="spotlight rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-soft">
              <Languages size={14} className="text-accent" aria-hidden="true" />
              Languages
            </h3>
            <ul className="mt-4 space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-semibold text-ink">{l.name}</span>
                  <span className="text-ink-soft">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
