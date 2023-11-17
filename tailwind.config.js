/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        background: "#FFFFFF",
        textWhite: "#FAFAFA",
        textDarkGray: "#7D8184",
        red: "#DB4444",
        redHover: "#E07575",
        greenColor: "#00FF66",
      },
      fontSize: {
        "48px": "3rem",
        "36px": "2.25rem",
        "24px": "1.5rem",
        "20px": "1.25rem",
        "16px": "1rem",
        "14px": "0.875rem",
        "12px": "0.75rem",
      },
      fontWeight: {
        bold: "700",
        semiBold: "600",
        medium: "500",
        regular: "400",
        light: "300",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "1170": "73.125rem",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1170px",
      },
    },
  },
  plugins: [],
};
