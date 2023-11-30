/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        gray: {
          "100": "#828b88",
          "200": "#0d0f10",
          "300": "#060606",
        },
        silver: {
          "100": "#c3c8cf",
          "200": "#adb7bb",
        },
        mediumspringgreen: "#00e69a",
        black: "#000",
        dimgray: {
          "100": "#586068",
          "200": "#585858",
        },
      },
      spacing: {},
      fontFamily: {
        "work-sans": "'Work Sans'",
        ubuntu: "Ubuntu",
        "share-tech-mono": "'Share Tech Mono'",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
