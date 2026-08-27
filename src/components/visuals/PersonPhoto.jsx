import { useState } from 'react'

// Looks for a real headshot at /headshot.jpg (drop it in the public/ folder — no code
// change needed). Falls back to a styled monogram so the hero still looks intentional
// before a real photo exists.
export default function PersonPhoto({ name, className = '' }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent/25 via-accent-dim/15 to-transparent font-mono text-5xl font-bold text-accent ${className}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src="/headshot.jpg"
      alt={name}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
