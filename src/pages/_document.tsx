import NavigationBar from "@/components/navigation-bar/navigation-bar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Little Lemon</title>
      </Head>
      <header>
        <NavigationBar />
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
