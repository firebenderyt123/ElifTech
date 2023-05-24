import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import lightTheme from "../core/themes/light";

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ThemeProvider theme={lightTheme}>
      <ScopedCssBaseline>
        <AnyComponent {...pageProps} />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
