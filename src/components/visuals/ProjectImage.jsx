import { useState } from 'react'
import ProjectMockup from './ProjectMockup'

// Renders the project's real GitHub social-preview image; falls back to a generated
// mockup if the image fails to load (e.g. on a network that blocks githubassets.com).
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
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
