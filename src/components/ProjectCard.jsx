import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import FeaturedVisual from './visuals/FeaturedVisual'
import ProjectMockup from './visuals/ProjectMockup'

export default function ProjectCard({ project }) {
  const { name, tagline, description, tech, github, demo, image, featured } = project

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group rounded-2xl border border-line bg-surface p-5 shadow-none transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5 sm:p-6 ${
        featured ? 'ring-1 ring-accent/30' : ''
      }`}
    >
      {featured && (
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
          Featured project
        </span>
      )}

      {image ? (
        <img src={image} alt={`${name} screenshot`} className="aspect-video w-full rounded-xl border border-line object-cover" />
      ) : featured ? (
        <FeaturedVisual />
      ) : (
        <ProjectMockup name={name} />
      )}

      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-xl font-bold text-ink">{name}</h3>
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on GitHub`}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <GithubIcon size={17} />
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live demo`}
                className="text-ink-soft transition-colors hover:text-accent"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-1 font-mono text-xs text-accent">{tagline}</p>
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
      </div>
    </motion.article>
  )
}
