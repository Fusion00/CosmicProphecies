import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl-custom': '1120px', // Custom breakpoint for 1120px
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
