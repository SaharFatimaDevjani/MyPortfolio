import { useState } from 'react'
import ProjectMockup from './ProjectMockup'

// Renders the project's real screenshot (public/projects/<id>.jpg); falls back to a
// generated mockup if that file hasn't been added yet. A shared saturation/contrast
// tweak keeps screenshots from wildly different sites feeling like one consistent set.
export default function ProjectImage({ src, alt, name, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return <ProjectMockup name={name} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover saturate-[0.9] contrast-[1.05] ${className}`}
    />
  )
}
