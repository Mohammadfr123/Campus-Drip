import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#141419",
        "surface-elevated": "#1C1C24",
        border: "#2A2A35",
        foreground: "#F5F5F7",
        muted: "#9CA3AF",
        accent: {
          teal: "#14E0C4",
          violet: "#8B5CF6",
          amber: "#F2B705",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #14E0C4 0%, #8B5CF6 50%, #F2B705 100%)",
        "gradient-glow":
          "radial-gradient(circle at center, rgba(20, 224, 196, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(20, 224, 196, 0.25)",
        "glow-violet": "0 0 30px rgba(139, 92, 246, 0.25)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
