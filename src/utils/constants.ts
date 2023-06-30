import { NavItem } from "@/components/navigation-item/navigation-item";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://little-lemon-web.vercel.app";
export const LOGIN_API = `${API_URL}/api/token/`;
export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Menu",
    href: "#highlight",
  },
  {
    title: "Reservations",
    href: "/reservations",
  },
  {
    title: "Order Online",
    href: "/",
  },
];
