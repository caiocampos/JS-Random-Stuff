import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <link
          rel="icon"
          id="favicon"
          href="%PUBLIC_URL%/favicon-consultoria-de-beleza.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Authentication" />
        <link
          rel="apple-touch-icon"
          id="apple-favicon"
          href="%PUBLIC_URL%/favicon-consultoria-de-beleza.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
