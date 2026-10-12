import { useState } from 'react'
import { Check, GraduationCap, Sparkles } from 'lucide-react'
import { education, certificationGroups, currentlyLearning } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// The first groups are always shown; the rest sit behind "Show all" to keep the section short.
const ALWAYS_VISIBLE_GROUPS = 2
const totalCount = certificationGroups.reduce((n, g) => n + g.items.length, 0)

function CertCard({ cert }) {
  return (
    <div className="h-full rounded-xl border border-line bg-surface px-4 py-3.5 transition-colors hover:border-accent/60">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
        <p className="text-sm font-semibold text-ink">{cert.name}</p>
        {cert.status && (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-medium text-accent">
            {cert.status}
          </span>
        )}
      </div>
      <p className="mt-0.5 font-mono text-[11px] text-ink-soft">{cert.issuer}</p>

      {cert.topics && <p className="mt-2 text-xs leading-relaxed text-ink-soft">{cert.topics}</p>}

      {cert.courses && (
        <div className="mt-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
            {cert.status ? 'Completed courses' : 'Includes'}
          </p>
          <ul className="mt-1.5 space-y-1">
            {cert.courses.map((course) => (
              <li key={course} className="flex items-start gap-2 text-xs leading-relaxed text-ink-soft">
                <Check size={13} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Education() {
  const [showAll, setShowAll] = useState(false)
  const groups = showAll ? certificationGroups : certificationGroups.slice(0, ALWAYS_VISIBLE_GROUPS)

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading index="05" title="Education & Certifications" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <GraduationCap size={18} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-ink">{education.degree}</h3>
            <p className="mt-0.5 text-sm text-ink-soft">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-accent">
              {education.period} &middot; {education.location}
              {education.grade && <> &middot; {education.grade}</>}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{education.note}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
            Certifications &amp; Professional Training
          </h3>
          {currentlyLearning && (
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink-soft">
              <Sparkles size={13} className="text-accent" aria-hidden="true" />
              Currently learning:{' '}
              <span className="font-semibold text-ink">{currentlyLearning.name}</span>
              <span className="hidden sm:inline">({currentlyLearning.issuer})</span>
            </p>
          )}
        </div>

        <div id="certification-groups" className="mt-6 space-y-8">
          {groups.map((group) => (
            <div key={group.category}>
              <h4 className="mb-3 text-sm font-bold text-ink">{group.category}</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((cert) => (
                  <CertCard key={cert.name} cert={cert} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {certificationGroups.length > ALWAYS_VISIBLE_GROUPS && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="certification-groups"
            className="mt-6 rounded font-mono text-xs uppercase tracking-wider text-accent transition-opacity hover:opacity-70"
          >
            {showAll ? 'Show less' : `Show all ${totalCount} certifications`}
          </button>
        )}
      </Reveal>
    </section>
  )
}
