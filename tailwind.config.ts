import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        qira: {
          ink: "#232120",
          deep: "#64322E",
          brown: "#64322E",
          sand: "#F19E38",
          beige: "#F4EADA",
          cream: "#FAEDE6",
          terracotta: "#865D4B",
          olive: "#456B34",
          herb: "#8DAD73",
          rose: "#A32B38",
          earth: "#DEC9B2",
          grey: "#A2A2A2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-heading)"],
        arabic: ["var(--font-body-ar)"],
      },
      boxShadow: {
        glass: "0 18px 45px var(--glass-shadow)",
        glow: "0 16px 34px rgba(134, 93, 75, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
