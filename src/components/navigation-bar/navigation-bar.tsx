import useMediaQuery from "@/hooks/useMediaQuery";
import { NAV_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavigationItem from "../navigation-item/navigation-item";
import Sidebar from "../sidebar/sidebar";
import styles from "./navigation-bar.module.scss";

const NavigationBar = () => {
  // Hooks
  const isMediumScreen = useMediaQuery("md");
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  // State
  const navigationItems =
    router.pathname === "/"
      ? NAV_ITEMS
      : [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "About",
            href: "/",
          },
          {
            title: "Menu",
            href: "/",
          },
          {
            title: "Reservations",
            href: "/reservations",
          },
          {
            title: "Order Online",
            href: "/",
          },
          {
            title: "Login",
            href: "/login",
          },
        ];

  const handleOpen = () => setOpen(true);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__items__cntr}>
        {!isMediumScreen && (
          <a onClick={handleOpen} className={styles.sidebar__icon}>
            <li>
              <FaBars />
            </li>
          </a>
        )}

        <Sidebar open={open} setOpen={setOpen} />

        <Link href="/">
          <li>
            <Image src="/Logo.svg" alt="logo" width={148} height={40} />
          </li>
        </Link>

        {isMediumScreen ? (
          <div className={styles.nav__items}>
            {navigationItems.map((item) => (
              <NavigationItem key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <li className={styles.icon}>
            <FaBars />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
