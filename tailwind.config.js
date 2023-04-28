/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // add needed colors here
      colors: {
        color1: '#25C06D',
        color2: '#2A3342',
        color3: '#556987',
        color4: '#151618',
        color5: '#737373',
        color6: 'rgba(115, 115, 115, 0.7)',
        color7: '#54595E',
        color8: '#FBFBFB',
        color9: '#CED1D4',
        color10: '#0C1825',
        color11: '#DDDDDD',
        color12: ' rgba(191, 243, 215, 0.3)',
        color13: 'rgba(239, 239, 239, 0.8)',
        color14: 'rgba(255, 255, 255, 0.5)',
      },
      screens: {
        'xxxs': '280px',
         // => @media (min-width: 280px) { ... }
        'ccclx': '360px',
         // => @media (min-width: 360px) { ... }
        'xxs': '320px',
         // => @media (min-width: 320px) { ... }
        'xs': '480px',
         // => @media (min-width: 480px) { ... }
        's': '576px',
         // => @media (min-width: 576px) { ... }
        ...defaultTheme.screens
      },
    },
  },
  plugins: [],
}

