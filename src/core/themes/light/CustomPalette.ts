import { PaletteOptions } from "@mui/material/styles";

export interface CustomPaletteOptions extends PaletteOptions {
  typography?: {
    fontFamily?: string;
    h1?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
    h2?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
    h3?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
    h4?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
    h5?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
    h6?: {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily?: string;
    };
  };
}
