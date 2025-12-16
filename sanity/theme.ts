import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--brand-teal': '#2E5C6E',
  '--brand-orange': '#E08A66',
  '--brand-purple': '#866690',
  '--brand-red': '#db4437',
  '--brand-yellow': '#f4b400',
  '--brand-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  /* Brand Primary Colors (用於按鈕、選取狀態) */
  '--brand-primary': props['--brand-teal'],
  '--default-button-primary-color': props['--brand-teal'],
  '--focus-color': props['--brand-orange'],

  /* Component Colors */
  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* State Colors (狀態燈號) */
  '--state-info-color': props['--brand-teal'],
  '--state-success-color': props['--brand-green'],
  '--state-warning-color': props['--brand-yellow'],
  '--state-danger-color': props['--brand-red'],

  /* Navbar (頂部導覽列) */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],
})
