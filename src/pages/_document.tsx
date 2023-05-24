import { Html, Head, Main, NextScript } from "next/document";
import Container from "@mui/material/Container";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Container>
          <Main />
        </Container>
        <NextScript />
      </body>
    </Html>
  );
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
