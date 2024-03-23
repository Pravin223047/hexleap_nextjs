import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#232A3C",
        medium: "bg-slate-200",
      },
    },
    screens: {
      sm: { min: "200px", max: "661px" },

      smm: { min: "", max: "1225px" },

      bg: { min: "", max: "929px" },

      md: { min: "662px", max: "891px" },

      lg: { min: "880px", max: "1350px" },
    },
  },
  plugins: [],
};
export default config;
