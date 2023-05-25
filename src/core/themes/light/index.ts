import { CustomPaletteOptions } from "../../interfaces/CustomPalette";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e8ebf2",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2.5rem",
      lineHeight: "3.25rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
    h6: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
      fontFamily: "'Roboto', sans-serif",
    },
  },
  spacing: [
    "0rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "3.5rem",
    "4rem",
    "4.5rem",
    "5rem",
    "5.5rem",
    "6rem",
  ],
} as CustomPaletteOptions);

export default lightTheme;
