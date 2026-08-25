import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import ProjectImage from './visuals/ProjectImage'

export default function MiniProjectCard({ project }) {
  const { name, tagline, github, demo, image } = project

  return (
    <div className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-3 transition-colors hover:border-accent/50">
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
        <ProjectImage src={image} alt={`${name} preview`} name={name} />
        <div className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold text-ink">{name}</h4>
        <p className="mt-0.5 truncate text-xs text-ink-soft">{tagline}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} on GitHub`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-accent/10 hover:text-accent"
          >
            <GithubIcon size={15} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} live demo`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-accent/10 hover:text-accent"
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </div>
  )
}
