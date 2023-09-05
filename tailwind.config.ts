import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: { '2xs': '.65rem' },
      screens: { xs: '380px', '2xs': '220px' },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
