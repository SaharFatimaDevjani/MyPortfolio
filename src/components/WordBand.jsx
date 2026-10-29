// Big outlined words drifting across the page between sections. Purely decorative,
// so it's hidden from screen readers; it pauses on hover and stops for reduced-motion users.
const WORDS = ['Full-Stack', 'Vue.js', 'MERN', 'Computer Vision', 'Camunda BPMN', 'Spring Boot', 'Django', 'Machine Learning']

export default function WordBand() {
  const row = WORDS.flatMap((w) => [w, '✦'])
  return (
    <div aria-hidden="true" className="group overflow-hidden border-y border-line py-6 sm:py-8">
      <div className="flex w-max animate-marquee-slow items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused] sm:gap-12">
        {[...row, ...row].map((item, i) =>
          item === '✦' ? (
            <span key={i} className="text-lg text-accent sm:text-2xl">
              ✦
            </span>
          ) : (
            <span key={i} className="text-outline text-4xl font-extrabold tracking-tight sm:text-6xl">
              {item}
            </span>
          ),
        )}
      </div>
    </div>
  )
}
