/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        StrikeFirstDark: {
          primary: "#d946ef",
          "primary-focus": "#a21caf",
          'primary-content' : '#f0abfc',
          secondary: "#84cc16",
          "secondary-focus": "#4d7c0f",
          'secondary-content' : '#bef264',
          accent: "#3b82f6",
          "accent-focus": "#1d4ed8",
          'accent-content' : '#93c5fd',
          "base-100": "#0f0f0f",
          "base-200": "#272727",
          "base-300": "#c0c0c0",
          "base-content": "#feffff",
        },
      },
      {
        StrikeFirstLight: {
          primary: "#d946ef",
          "primary-focus": "#a21caf",
          'primary-content' : '#f0abfc',
          secondary: "#84cc16",
          "secondary-focus": "#65a30d",
          'secondary-content' : '#bef264',
          accent: "#3b82f6",
          "accent-focus": "#2563eb",
          'accent-content' : '#93c5fd',
          "base-100": "#feffff",
          "base-200": "#eaeaea",
          "base-300": "#5e5e5e",
          "base-content": "#0f0f0f",
        },
      },
    ],
  },
};