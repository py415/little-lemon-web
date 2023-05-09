import Link from "next/link";
import SectionCategories from "../section-categories/section-categories";
import styles from "./navigation-item.module.scss";

export interface NavItem {
  title: string;
  href: string;
}

interface NavigationItemProps {
  item: NavItem;
}

const NavigationItem = (props: NavigationItemProps) => {
  // Props
  const { item } = props;
  // State
  const { title, href } = item;

  return (
    <li key={title} className={styles.item}>
      <Link href={href}>
        <SectionCategories>{title}</SectionCategories>
      </Link>
    </li>
  );
};

export default NavigationItem;
