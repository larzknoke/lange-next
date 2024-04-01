import ScrollToTop from "../components/ScrollToTop";
import { Html, Head, Main, NextScript } from "next/document";

export default function RootLayout() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500&display=swap"
        />
      </Head>
      <body>
        <div>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
