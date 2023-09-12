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
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          100: '#EBEBEB',
          200: '#C4C4C4',
        },
        primary: {
          100: '#50AB83',
          200: '#00C17F',
          300: '#009268',
        },
        secondary: {
          100: '#00E87E',
          200: '#00BE67',
          300: '#003224',
        },
        accent: {
          100: '#C74242',
          200: '#960000',
          300: '#6B0000',
        },
      }, 
      extend: {
        spacing: {
          px: '1px',
          0: '0',
          0.5: '0.125rem',
          1: '0.25rem',
          1.5: '0.375rem',
          2: '0.5rem',
          2.5: '0.625rem',
          3: '0.75rem',
          3.5: '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          9: '2.25rem',
          10: '2.5rem',
          11: '2.75rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          52: '13rem',
          56: '14rem',
          60: '15rem',
          64: '16rem',
          72: '18rem',
          80: '20rem',
          96: '24rem',
        },
        margin: {
          page: '',
          nav: '',
          footer: ''  
        },
        fontSize: {

        },
        borderRadius: {  
          'none': '0',
          'sm': '.125rem',
          DEFAULT: '.25rem',
          'lg': '.5rem',
          'full': '9999px',
        }
      }
    },
  },
  plugins: [],
}
export default config
