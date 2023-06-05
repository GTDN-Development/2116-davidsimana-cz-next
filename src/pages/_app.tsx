import LayoutRoot from "@/components/LayoutRoot";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/globals.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

// Swiper css
import "swiper/swiper-bundle.css";

export default function App({ Component, pageProps }: AppProps) {
  // Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });

  return (
    <>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  );
}
