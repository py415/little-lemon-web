import Link from "next/link";
import SectionCategories from "../section-categories/section-categories";

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
    <li key={title} className="hover:underline hover:scale-110 transition">
      <Link href={href}>
        <SectionCategories>{title}</SectionCategories>
      </Link>
    </li>
  );
};

export default NavigationItem;
