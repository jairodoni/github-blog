/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'var(--font-nunito)',
      },

      colors: {
        blue: {
          400:  '#3294F8',
        },

        "navy-blue": {
          50:  '#E7EDF4',
          100: '#C4D4E3',
          200: '#AFC2D4',
          300: '#7B96B2',
          400: '#3A536B',
          500: '#1C2F41',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        },
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        'custom': 'repeat(2, 1fr)',
      }
    },
  },
  plugins: [],
}