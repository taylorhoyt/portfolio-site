/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-navy': '#070F2B',
        'theme-dark-blue': '#1B1A55',
        'theme-stone-blue': '#535C91',
        'theme-lavender': '#9290C3',
      },
    },
    screens: {
      'mobile': {'min': '320px', 'max': '719px'},
      'desktop' : {'min': '720px'}
    },
  },
  plugins: [],
}
