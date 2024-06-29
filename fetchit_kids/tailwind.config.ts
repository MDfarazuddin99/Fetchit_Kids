import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        ross:{
          DEFAULT: '#b45309',
          light: '#ebb186',
        },
        joey:{
          DEFAULT: '#4ade80',
          light: '#ebb186',
        },
        chandler: {
          DEFAULT: '#818cf8'
        }        
      }
    },
  },
  plugins: [],
};
export default config;
