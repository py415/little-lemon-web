import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  // State
  const NAV_ITEMS: {
    title: string;
    href: string;
  }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Menu",
      href: "/menu",
    },
    {
      title: "Reservations",
      href: "/reservations",
    },
    {
      title: "Order Online",
      href: "/order-online",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  return (
    <Html lang="en">
      <Head />
      <header>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => {
              const { title, href } = item;

              return (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
