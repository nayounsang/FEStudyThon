import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./section/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "almost-white": "#fdfdfd",
      },
      keyframes: {
        myPulse: {
          '0%,100%': { backgroundColor:"#d1d5db" },
          '50%': { backgroundColor:"#6b7280" },
        },
      },
      animation: {
        pulse: "myPulse 1.5s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
