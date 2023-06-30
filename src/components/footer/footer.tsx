import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import HighlightText from "../highlight-text/highlight-text";
import SectionCategories from "../section-categories/section-categories";
import styles from "./footer.module.scss";

interface FooterLink {
  icon?: IconType;
  name: string;
  href?: string;
}

const Footer = () => {
  // Hooks
  const { user } = useAuth();
  // State
  const navigationLinks: FooterLink[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Menu",
      href: "#highlight",
    },
    {
      name: "My Reservations",
      href: "/my-reservations",
    },
    {
      name: "Book Table",
      href: "/book-table",
    },
    // {
    //   name: "Order Online",
    //   href: "/order-online",
    // },
    {
      name: "Login",
      href: "/login",
    },
  ];
  const socialsLinks: FooterLink[] = [
    {
      icon: FaTiktok,
      name: "TikTok",
      href: "https://www.tiktok.com/",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      href: "https://twitter.com/",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.logo__items__cntr}>
        <div className={styles.logo}>
          <Image
            className={styles.img}
            src="/Logo.svg"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className={styles.category}>
          <SectionCategories>Navigation</SectionCategories>

          <ul className={styles.items}>
            {navigationLinks.map((navLink) => {
              const { name, href } = navLink;

              if (href === "/my-reservations" && !user) return;
              if (href === "/book-table" && !user) return;

              return (
                href && (
                  <li key={name} className={styles.item}>
                    <Link href={href}>
                      <HighlightText>{name}</HighlightText>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        <div className={styles.category}>
          <SectionCategories>Contact</SectionCategories>

          <ul className={styles.items}>
            <li>
              <HighlightText>342 Lemon Grove Ave,</HighlightText>
              <HighlightText>Chicago, IL 60614</HighlightText>
            </li>
            <li>
              <HighlightText>+1 (312) 555-1212</HighlightText>
            </li>
            <li>
              <HighlightText>contact@littlelemon.com</HighlightText>
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <SectionCategories>Socials</SectionCategories>

          <ul className={styles.items}>
            {socialsLinks.map((socialLink) => {
              const { icon, name, href } = socialLink;
              const Icon = icon;

              return (
                Icon &&
                href && (
                  <li key={name} className={styles.icon}>
                    <Link href={href}>
                      <HighlightText>
                        <Icon />
                      </HighlightText>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
