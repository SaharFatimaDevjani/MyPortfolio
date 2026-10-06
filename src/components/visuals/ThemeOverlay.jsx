// One shared color grade for every project screenshot, so sites with their own palettes
// (spice reds, bakery browns, gold) all sit inside this portfolio's theme:
//   1. a theme-colored veil (dark in dark mode, light in light mode) to calm bright areas
//   2. an accent "color" blend that pulls every hue toward the site's blue
// Both ease off on hover (the parent needs `group`) so visitors can still see real colors.
export default function ThemeOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-25">
      <div className="absolute inset-0 bg-bg/20 dark:bg-bg/45" />
      <div className="absolute inset-0 bg-accent/25 mix-blend-color" />
    </div>
  )
}
