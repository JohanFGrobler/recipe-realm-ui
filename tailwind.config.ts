import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'ptsans': ['PT Sans', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'indieFlower': ['Indie Flower', 'sans-serif']
      },
      colors: {
        'primary': '#439b32',  // Example custom color
      }
    },
  },
  plugins: [
    function({ addComponents }: any) {
      addComponents({
        '.scrollbar-hide': {
          /* Hide scrollbar buttons in Chrome */
          '::-webkit-scrollbar-button': {
            display: 'none',
          },
          '::-webkit-scrollbar': {
            width: '12px',
          },
          '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
            border: '3px solid #f1f1f1',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          }
        }
      });
    }
  ],
};
export default config;
