import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C1171D',
          dark: '#9a1217',
          light: '#d63d43',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          dark: '#000000',
          light: '#333333',
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
