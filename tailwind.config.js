// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#622BB6",
        yellow: "#FFDE66",
        secondary: "#7239C7",
        black: "#001141",
        grey: "#71787E",
        pink: "#f6f2ff"
      },

      gridTemplateColumns: {
        custom: 'repeat(auto-fit, minmax(12rem, 1fr))',
      },

      maxWidth: {
        'screen': '100vw',
      },

    },
  },
  plugins: [],
}
