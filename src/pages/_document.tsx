import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  // State
  const ogImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/Logo.svg`;

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        />
        <meta name="og:title" content="Little Lemon" />
        <meta
          name="og:description"
          content="We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        />
        <meta name="og:image" content={ogImageUrl} />
        <Script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
