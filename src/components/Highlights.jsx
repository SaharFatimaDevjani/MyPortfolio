import { Award, Briefcase, GraduationCap, Globe } from 'lucide-react'
import Reveal from './Reveal'

// At-a-glance facts under the hero. Every figure here comes from the CV.
const HIGHLIGHTS = [
  { icon: GraduationCap, value: '3.51', label: 'CGPA', detail: 'BS Computer Science, MAJU' },
  { icon: Award, value: 'Grade A', label: 'Final-year project', detail: 'Team lead of 4 · VTry' },
  { icon: Briefcase, value: '3', label: 'Internships', detail: '10Pearls · Click Chain · RobX AI' },
  { icon: Globe, value: 'Live', label: 'In production', detail: 'Banking app & a family business site' },
]

export default function Highlights() {
  return (
    <section id="highlights" aria-label="Highlights" className="mx-auto max-w-5xl px-6 pb-8 pt-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ icon: Icon, value, label, detail }, i) => (
          <Reveal key={label} delay={0.08 * i} className="h-full">
            <div className="spotlight group flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-2xl font-extrabold leading-none tracking-tight text-ink">{value}</p>
                <p className="mt-1.5 text-sm font-semibold text-ink">{label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
