/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'sm': '640px',
        'md': '790px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '2200px',
      }, maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      }
    },
  },
  plugins: [],
};
