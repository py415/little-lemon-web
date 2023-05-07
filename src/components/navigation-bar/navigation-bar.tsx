import Image from "next/image";
import NavigationItem, { NavItem } from "../navigation-item/navigation-item";

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
    <nav className="bg-white text-black flex justify-center">
      <ul className="flex gap-8 items-center max-w-[860px] w-full justify-between">
        <li>
          <Image src="/Logo.svg" alt="logo" width={148} height={40} />
        </li>

        <div className="flex gap-8">
          {NAV_ITEMS.map((item) => (
            <NavigationItem key={item.title} item={item} />
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
