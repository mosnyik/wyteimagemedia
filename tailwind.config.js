/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "FoundersGrotesk-Semibold": ["FoundersGrotesk-Semibold", "sans-serif"],
        "FoundersGroteskXCond-Bold": [
          "FoundersGroteskXCond-Bold",
          "sans-serif",
        ],
        "FoundersGroteskXCond-Lt": ["FoundersGroteskXCond-Lt", "sans-serif"],
        icomoon: ["icomoon", "sans-serif"],
        "NeueMontreal-Regular": ["NeueMontreal-Regular", "sans-serif"],
      },
      keyframes: {
        underlineAnimation2: {
          "0%": {
            transform: "scaleX(1)",
            transformOrigin: "bottom right",
          },
          "50%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom right",
          },
          "51%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom left",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        underlineAnimation2: "underlineAnimation2 0.5s linear 1 ",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(.215,.61,.355,1)",
      },
      colors: {
        gold: "#B39803FF",
        "gold-dark": "#b8860b",
        "gold-light": "#ffed4e",
        "green-accent": "#cdea68",
        "green-accent-dark": "#9bb83f",
        "dark-teal": "#004d43",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
