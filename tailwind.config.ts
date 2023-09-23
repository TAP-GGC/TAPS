import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        black: {
          50: '#00000032',
          80: '#000000cc',
          100: '#000'
        },
        white: {
          50: '#ffffff32',
          80: '#ffffffcc',
          100: '#fff',
        },
        gray: {
          50: '#9191914f',
          100: '#C4C4C4',
          200: '#cfcfcf',
        },
        primary: {
          100: '#50AB83',
          200: '#00C17F',
          300: '#009268',
        },
        secondary: {
          100: '#00E87E',
          200: '#00BE67',
          300: '#00543D',
          400: '#003224',
        },
        accent: {
          100: '#C74242',
          200: '#960000',
          300: '#6B0000',
        },
      }, 
    },
  },
  plugins: [],
}
export default config
