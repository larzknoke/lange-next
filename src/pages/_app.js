import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../../public/main.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}
