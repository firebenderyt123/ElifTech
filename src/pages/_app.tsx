import HeaderBlock from "../containers/Header";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import lightTheme from "../core/themes/light";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <HeaderBlock />
        <Container>
          <AnyComponent {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
