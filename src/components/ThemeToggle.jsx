import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent cursor-pointer"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? 'scale-0 rotate-45 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-45 opacity-0'}`}
      />
    </button>
  )
}
