/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: 'screen' },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "50%": { opacity: "0.9", transform: "translateY(-1px)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "fade-in-up": "fadeInUp 0.5s forwards",
      },
    },
    transitionTimingFunction: {
      material: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    },
  },
  plugins: [],
};
