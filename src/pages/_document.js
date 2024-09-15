import ScrollToTop from "../components/ScrollToTop";
import { Html, Head, Main, NextScript } from "next/document";

export default function RootLayout() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <div>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
