import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Small floating "Available for work" pill, bottom-left on larger screens. Links to Contact.
export default function AvailabilityBadge() {
  // Step aside once the footer is on screen so the pill never covers its links.
  const [footerVisible, setFooterVisible] = useState(false)
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const io = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting))
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 12 }}
      animate={footerVisible ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-hidden={footerVisible || undefined}
      tabIndex={footerVisible ? -1 : undefined}
      style={{ pointerEvents: footerVisible ? 'none' : undefined }}
      className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs font-medium text-ink shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:border-accent md:inline-flex"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Available for work
    </motion.a>
  )
}
