// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
    },


    extend: {
      colors: {
        primary: "#622BB6",
        yellow: "#FFDE66",
        secondary: "#7239C7",
        black: "#001141",
        grey: "#71787E",
        pink: "#f6f2ff",
        purple: "#491d8b"
      },

      gridTemplateColumns: {
        custom: 'repeat(auto-fit, minmax(12rem, 1fr))',
      },

      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(10rem, 1fr))',
      },

      gridColumn: {
        'minmax-10': 'minmax(10rem, 1fr)',
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
