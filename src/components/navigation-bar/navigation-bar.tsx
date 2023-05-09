import useMediaQuery from "@/hooks/useMediaQuery";
import { NAV_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavigationItem from "../navigation-item/navigation-item";
import Sidebar from "../sidebar/sidebar";
import styles from "./navigation-bar.module.scss";

const NavigationBar = () => {
  // Hooks
  const isMediumScreen = useMediaQuery("md");
  const [open, setOpen] = useState<boolean>(false);

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
            {NAV_ITEMS.map((item) => (
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
