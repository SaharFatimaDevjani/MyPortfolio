import { GraduationCap } from 'lucide-react'
import { education, certifications } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="05" title="Education & Certifications" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <GraduationCap size={18} />
          </span>
          <div>
            <h3 className="text-lg font-bold text-ink">{education.degree}</h3>
            <p className="mt-0.5 text-sm text-ink-soft">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-accent">
              {education.period} &middot; {education.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{education.note}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="mt-12 font-mono text-xs uppercase tracking-wider text-ink-soft">
          Certifications &amp; Professional Training
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-accent/50"
            >
              <p className="text-sm font-semibold text-ink">{cert.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-ink-soft">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
