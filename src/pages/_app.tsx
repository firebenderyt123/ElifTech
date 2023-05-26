import HeaderBlock from "../containers/Header";
import { store } from "../core/store";
import lightTheme from "../core/themes/light";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const AnyComponent = Component as any;
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <CssBaseline />
          <HeaderBlock />
          <Container>
            <AnyComponent {...pageProps} />
          </Container>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
