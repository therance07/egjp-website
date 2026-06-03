import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E8A020",
          light: "#F5C842",
          dark: "#C4841A",
        },
        dark: {
          DEFAULT: "#1A0F00",
          secondary: "#2C1A00",
          tertiary: "#3D2A00",
        },
        cream: {
          DEFAULT: "#FDFAF3",
          alt: "#F5EDD8",
          dark: "#EDE0C4",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        barlow: ["var(--font-barlow)", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        "gold-gradient": "linear-gradient(135deg, #E8A020 0%, #F5C842 50%, #E8A020 100%)",
        "dark-gradient": "linear-gradient(180deg, #1A0F00 0%, #2C1A00 100%)",
        "cream-gradient": "linear-gradient(180deg, #FDFAF3 0%, #F5EDD8 100%)",
      },
      boxShadow: {
        "gold": "0 4px 30px rgba(232, 160, 32, 0.3)",
        "gold-lg": "0 8px 60px rgba(232, 160, 32, 0.4)",
        "dark": "0 4px 30px rgba(26, 15, 0, 0.4)",
        "card": "0 2px 20px rgba(26, 15, 0, 0.08)",
        "card-hover": "0 8px 40px rgba(26, 15, 0, 0.15)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "clamp(4rem, 10vw, 8rem)",
      },
      borderRadius: {
        "card": "2px",
        "pill": "100px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "elegant": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "pulse-gold": "pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232, 160, 32, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(232, 160, 32, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
