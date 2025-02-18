/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00d5bb",
          "primary-content": "#00100d",
          "secondary": "#00c400",
          "secondary-content": "#000e00",
          "accent": "#009390",
          "accent-content": "#000807",
          "neutral": "#1f1d18",
          "neutral-content": "#cdcccb",
          "base-100": "#ddffff",
          "base-200": "#c0dede",
          "base-300": "#a4bebe",
          "base-content": "#111616",
          "info": "#00a8cb",
          "info-content": "#000a0f",
          "success": "#00bf4b",
          "success-content": "#000d02",
          "warning": "#ffa400",
          "warning-content": "#160a00",
          "error": "#ff6c9c",
          "error-content": "#160409",
        },
      },
    ],
  },
};
