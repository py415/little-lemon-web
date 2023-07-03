import { NavItem } from "@/components/navigation-item/navigation-item";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : process.env.API_URL;
export const LOGIN_API = `${API_URL}/api/token/`;
export const BOOKING_API = `${API_URL}/api/bookings/`;
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
    title: "Book Table",
    href: "/book-table",
  },
  // {
  //   title: "Order Online",
  //   href: "/",
  // },
];
