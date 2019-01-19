import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Lato", "San Francisco", "Helvetica", "sans-serif"],
  headerWeight: 400,
  bodyFontFamily: [
    "Source Sans Pro",
    "San Francisco",
    "Helvetica",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: "Lato",
      styles: ["400"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "700"],
    },
  ],
});

export default typography;
