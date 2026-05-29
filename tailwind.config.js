/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#f5a623",
          hover: "#d98f16",
          dark: "#b0700a",
          light: "#ffcf7d",
        },
        brandDark: {
          DEFAULT: "#0a0a0a",
          card: "#121212",
          cardHover: "#181818",
          border: "#262626",
          muted: "#888888",
        }
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
