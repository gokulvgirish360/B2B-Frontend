/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "62.5%", // 62.5% of 16px = 10px
      },
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif'"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "380px", // Custom breakpoint for extra small screens
        sm: "640px", // Tailwind's default small screen breakpoint
        md: "768px", // Tailwind's default medium screen breakpoint
        lg: "1024px", // Tailwind's default large screen breakpoint
        xl: "1280px", // Tailwind's default extra large screen breakpoint
        "2xl": "1536px", // Tailwind's default 2x large screen breakpoint

        // Custom breakpoints
        xxl: "1600px", // Custom breakpoint (extra extra large)
        xxxl: "1920px", // Custom breakpoint for larger screens
      },
    },
    keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 3s linear infinite', // Adjust duration as needed
        'infinite-scroll-partners': 'infinite-scroll 10s linear infinite', // Adjust duration as needed
      },
  },
  plugins: [],
};
