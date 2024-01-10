import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'accent-gradient': 'linear-gradient(#FF9209, #FF6C22)',
      },
      colors: {
        primary: {
          DEFAULT: '#FF9209',
          dark: '#FF6C22',
        },
        secondary: {
          DEFAULT: '#FF6C22',
          dark: '#FF9209',
        },
        default: {
          DEFAULT: '#333333',
          dark: '#000000',
        },
        casual:{
          DEFAULT:"#74DC2E",
          dark:"#FB3636",
        }
      }
    },
  },
  plugins: [],
}
export default config
