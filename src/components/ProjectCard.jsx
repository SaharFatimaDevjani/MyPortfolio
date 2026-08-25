import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import ProjectImage from './visuals/ProjectImage'

export default function ProjectCard({ project }) {
  const { id, name, tagline, description, tech, github, demo, demoLabel, image, featured } = project

  return (
    <motion.article
      id={id}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group scroll-mt-24 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10 ${
        featured ? 'ring-1 ring-accent/40 lg:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-video lg:aspect-auto lg:w-[46%]' : 'aspect-video'}`}>
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
          <ProjectImage src={image} alt={`${name} preview`} name={name} />
        </div>
        {/* Uniform color-grade wash so screenshots from very different sites still read as one set */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-bg/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-overlay" />

        {featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-ink shadow-lg">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-ink" />
            Featured
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-8 lg:justify-center' : ''}`}>
        <h3 className={`font-bold text-ink ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{name}</h3>
        <p className="mt-1.5 font-mono text-xs text-accent">{tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={15} />
              View Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform hover:scale-105 active:scale-95"
            >
              {demoLabel || 'Live Demo'}
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
