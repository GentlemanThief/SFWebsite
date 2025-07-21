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
          'primary-content': '#f0abfc',
          secondary: "#84cc16",
          "secondary-focus": "#4d7c0f",
          'secondary-content': '#bef264',
          accent: "#3b82f6",
          "accent-focus": "#1d4ed8",
          'accent-content': '#93c5fd',
          "base-100": "#1a1a1a",  // Changed from #0f0f0f - warmer dark grey
          "base-200": "#2d2d2d",  // Slightly lighter than current #272727
          "base-300": "#404040",  // Much darker than current #c0c0c0 for better hierarchy
          "base-content": "#feffff",
        },
      },
      {
        StrikeFirstLight: {
          primary: "#d946ef",
          "primary-focus": "#a21caf",
          'primary-content': '#f0abfc',
          secondary: "#84cc16",
          "secondary-focus": "#65a30d",
          'secondary-content': '#bef264',
          accent: "#3b82f6",
          "accent-focus": "#2563eb",
          'accent-content': '#93c5fd',
          "base-100": "#feffff",
          "base-200": "#eaeaea",
          "base-300": "#5e5e5e",
          "base-content": "#0f0f0f",
        },
      },
      {
        Splatoon: {
          primary: "#fe447d",        // Hot pink ink
          "primary-focus": "#e63366", // Darker pink
          'primary-content': '#ffffff',
          secondary: "#5cd05b",      // Green ink
          "secondary-focus": "#4ba84a", // Darker green
          'secondary-content': '#ffffff',
          accent: "#fedc0c",         // Yellow ink
          "accent-focus": "#d1b60a",  // Darker yellow
          'accent-content': '#000000',
          neutral: "#f78f2e",        // Orange ink
          "neutral-focus": "#d4761f", // Darker orange
          'neutral-content': '#000000',
          "base-100": "#ffffff",     // Clean white background
          "base-200": "#f8f9fa",     // Very light gray for cards
          "base-300": "#e9ecef",     // Light gray for borders
          "base-content": "#212529",  // Dark text for contrast
          info: "#d1f20a",           // Lime ink for info
          success: "#5cd05b",        // Green ink for success
          warning: "#fedc0c",        // Yellow ink for warnings
          error: "#fe447d",          // Pink ink for errors
        },
      },
    ],
  },
};