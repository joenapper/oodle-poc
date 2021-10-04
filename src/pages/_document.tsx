import React from "react";

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: typeof React.Component) => (props: unknown) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* font preloading */}
          <link
            rel="preload"
            href="fonts/GT-Walsheim/GT-Walsheim-Regular-Trial.otf"
            as="font"
            crossOrigin=""
          />
          {/* end font preloading */}
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
          <div id="outdated" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
