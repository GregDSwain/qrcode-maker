import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
      animation: {
        fadeout: 'fadeOut ease-in-out 4s forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '20%': { 
            opacity: '0.5'
          },
          '40%': {
            opacity: '1',
            transform: 'translateY(0%)'
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(0%)'
          },
          '80': { 
            opacity: '0.5'
          },
          '100%': { 
            opacity: '0',
            transform: 'translateY(100%)'
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
