import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["WorkSans", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        title: ["BoldGroove", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        primary: {
          DEFAULT: '#FFA89A', 
          dark: '#D97B70',  
        },
        secondary: {
          DEFAULT: '#ABE5BC', 
          dark: '#83C49B',   
        },
        accent: {
          yellow: {
            DEFAULT: '#FFD787', 
            dark: '#D4B464',   
          },
          violet: {
            DEFAULT: '#CFADE8',
            dark: '#A27FB5',   
          },
          orange: {
            DEFAULT: '#FFA776', 
            dark: '#D17A54',   
          },
        },
        neutral: {
          white: '#FFFAF0', 
          gray: '#505050',
          black: '#1E1E1E',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
