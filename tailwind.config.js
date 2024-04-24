/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
            spotlight: "spotlight 2s ease .75s 1 forwards",
            scroll:
                "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
          },
          keyframes: {
            spotlight: {
              "0%": {
                opacity: 0,
                transform: "translate(-72%, -62%) scale(0.5)",
              },
              "100%": {
                opacity: 1,
                transform: "translate(-50%,-40%) scale(1)",
              },
            },
            scroll: {
                to: {
                  transform: "translate(calc(-50% - 0.5rem))",
                },
              },
          },
      },
    },
    plugins: [],
  };
  