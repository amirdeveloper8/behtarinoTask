import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="En">
        <Head>
          <meta
            name="task-behtarino"
            content="Fetch Some Products with Fake Api"
          />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
