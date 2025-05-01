/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': '480px',
        'custom-md': '768px',
        'custom-lg': '1024px',
        // Add your custom breakpoints here
      },
    },
  },
}