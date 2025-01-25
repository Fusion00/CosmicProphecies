import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-slow': 'rotate 25s linear infinite', // 10s for a slow rotation
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      screens: {
        'xl-custom': '1120px', // Custom breakpoint for 1120px
        'mob-sm': '320px',
        'mob-md': '375px',
        'mob-lg': '425px'
      },
      fontFamily: {
        felix: ['"Felix Titling"', 'serif'], // Add the font name here
        consolas: ['Consolas', 'monospace'], // Consolas (web-safe monospace)
        times: ['"Times New Roman"', 'serif'], // Times New Roman (serif)
        lucida: ['"Lucida Console"', 'monospace'], // Lucida Console (monospace)
        cambria: ['Cambria', 'serif'], // Cambria (serif)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
