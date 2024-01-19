import { Inter } from "next/font/google";
import type { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <title key={"title"}>Anthony Chablov</title>
        <meta
          name="description"
          key={"description"}
          content="Welcome To My Portfolio Site!"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
