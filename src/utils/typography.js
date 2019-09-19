import Typography from "typography";

const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1,
  googleFonts: [
    {
      name: 'Cutive Mono',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: [
    "Cutive Mono",
    "monospace",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Cutive Mono", "monospace"],
})

export default typography