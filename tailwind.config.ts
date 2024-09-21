import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        yekan: ["Yekan", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("https://i.postimg.cc/gr9xmpxf/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("https://i.postimg.cc/SsSxpSjv/circle-star.png")',
        site: 'url("https://i.postimg.cc/Qtfx82Tx/site-bg.png")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
export default config
