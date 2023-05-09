import Image from "next/image";
import NavigationItem, { NavItem } from "../navigation-item/navigation-item";
import styles from "./navigation-bar.module.scss";

const NavigationBar = () => {
  // Props
  const NAV_ITEMS: NavItem[] = [
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
    <nav className={styles.nav}>
      <ul className={styles.nav__items__cntr}>
        <li>
          <Image src="/Logo.svg" alt="logo" width={148} height={40} />
        </li>

        <div className={styles.nav__items}>
          {NAV_ITEMS.map((item) => (
            <NavigationItem key={item.title} item={item} />
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
