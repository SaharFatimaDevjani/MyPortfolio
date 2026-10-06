import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import ProjectImage from './visuals/ProjectImage'

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft">
          {t}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ github, demo, demoLabel }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
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
  )
}

// Lead project: the screenshot is shown uncropped inside a browser-window frame on an accent
// backdrop, with the write-up underneath in two columns on wide screens.
function FeaturedCard({ project }) {
  const { id, name, tagline, description, tech, github, demo, demoLabel, image } = project

  return (
    <motion.article
      id={id}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-surface ring-1 ring-accent/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-accent/20 via-accent/5 to-transparent px-5 pt-6 sm:px-12 sm:pt-8">
        {/* faint grid, echoing the hero background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-ink-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-soft) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        <div className="relative mx-auto max-w-3xl translate-y-1 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-ink shadow-lg">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-ink" />
            Featured
          </span>
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-surface shadow-2xl shadow-black/30">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 hidden truncate rounded-md bg-line/50 px-3 py-0.5 font-mono text-[10px] text-ink-soft sm:block">
                {name.toLowerCase()}
              </span>
            </div>
            {/* 2:1 frame suits typical desktop screenshots with almost no crop, and still gives
                the placeholder mockup a size if the screenshot is missing. */}
            <div className="relative aspect-[2/1]">
              <ProjectImage src={image} alt={`${name} preview`} name={name} position="top" />
              {/* light theme-colored veil so the screenshot sits in the page's palette */}
              <div className="pointer-events-none absolute inset-0 bg-bg/5 dark:bg-bg/25 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
        <div>
          <h3 className="text-2xl font-bold text-ink lg:text-3xl">{name}</h3>
          <p className="mt-1.5 font-mono text-xs text-accent">{tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{description}</p>
        </div>
        <div className="flex flex-col gap-6 lg:border-l lg:border-line lg:pl-10">
          <div>
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">Built with</h4>
            <TechList tech={tech} />
          </div>
          <ProjectLinks github={github} demo={demo} demoLabel={demoLabel} />
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectCard({ project }) {
  if (project.featured) return <FeaturedCard project={project} />

  const { id, name, tagline, description, tech, github, demo, demoLabel, image, imagePosition } = project

  return (
    <motion.article
      id={id}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group scroll-mt-24 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
          <ProjectImage src={image} alt={`${name} preview`} name={name} position={imagePosition} />
        </div>
        {/* Uniform color-grade wash so screenshots from very different sites still read as one set.
            The bg-tinted veil follows the theme (dark in dark mode, light in light mode) so bright
            screenshots don't break the page's palette; it lifts on hover to show the real colors. */}
        <div className="pointer-events-none absolute inset-0 bg-bg/10 dark:bg-bg/40 transition-opacity duration-500 group-hover:opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent dark:from-bg/80 dark:via-bg/10" />
        <div className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-ink">{name}</h3>
        <p className="mt-1.5 font-mono text-xs text-accent">{tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
        <div className="mt-4">
          <TechList tech={tech} />
        </div>
        <div className="mt-5">
          <ProjectLinks github={github} demo={demo} demoLabel={demoLabel} />
        </div>
      </div>
    </motion.article>
  )
}
