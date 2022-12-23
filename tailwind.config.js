/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-light": "#64748b",
      "gray-100": "#f3f4f6",
      "gray-200": "#e2e8f0",
      "gray-300": "#d1d5db",
      "red-300": "#fca5a5",
      "red-500": "#ef4444",
      "red-600": "#dc2626",
      "sky-50": "#f0f9ff",
      "sky-400": "#38bdf8",
      "sky-100": "#e0f2fe",
      "blue-500": "#3b82f6",
      white: "#ffffff",
    },
    extend: {
      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
