import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import HighlightText from "../highlight-text/highlight-text";
import SectionCategories from "../section-categories/section-categories";

interface FooterLink {
  icon?: IconType;
  name: string;
  href?: string;
}

const Footer = () => {
  // State
  const navigationLinks: FooterLink[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Reservations",
      href: "/reservations",
    },
    {
      name: "Order Online",
      href: "/order-online",
    },
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
    <footer className="bg-primary-green py-8 flex justify-center px-6">
      <div className="flex flex-col gap-16 md:flex-row max-w-[860px] justify-between w-full">
        <div className="bg-white px-4 py-2 rounded-lg h-fit">
          <Image
            className="w-[170px] h-[40px] aspect-square object-cover rounded-2xl"
            src="/Logo.svg"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col gap-4">
          <SectionCategories>Navigation</SectionCategories>

          <ul className="flex flex-col gap-2">
            {navigationLinks.map((navLink) => {
              const { name, href } = navLink;

              return (
                href && (
                  <li
                    key={name}
                    className="hover:underline hover:scale-105 transition"
                  >
                    <Link href={href}>
                      <HighlightText>{name}</HighlightText>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <SectionCategories>Contact</SectionCategories>

          <ul className="flex flex-col gap-2">
            <li>
              <HighlightText>
                342 Lemon Grove Ave, Chicago, IL 60614
              </HighlightText>
            </li>
            <li>
              <HighlightText>+1 (312) 555-1212</HighlightText>
            </li>
            <li>
              <HighlightText>contact@littlelemon.com</HighlightText>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <SectionCategories>Socials</SectionCategories>

          <ul className="flex flex-col gap-4">
            {socialsLinks.map((socialLink) => {
              const { icon, name, href } = socialLink;
              const Icon = icon;

              return (
                Icon &&
                href && (
                  <li key={name} className="hover:scale-110 transition">
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
