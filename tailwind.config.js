/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "10px 10px 0px 0px black", // 默认投影
        "card-hover": "20px 20px 0px 0px black", // 
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      fontSize: {
        'preset-3': ['14px', '150%'],
        'preset-1': ['24px', '150%'],
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
