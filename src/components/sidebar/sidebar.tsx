import { NAV_ITEMS } from "@/utils/constants";
import { Drawer } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import NavigationItem from "../navigation-item/navigation-item";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: SidebarProps) => {
  // Props
  const { open, setOpen } = props;

  const handleClose = () => setOpen(false);

  return (
    <Drawer open={open} onClose={handleClose} anchor="left">
      <ul className={styles.items}>
        <li>
          <Image src="/Logo.svg" alt="logo" width={148} height={40} />
        </li>

        {NAV_ITEMS.map((item) => (
          <NavigationItem key={item.title} item={item} />
        ))}
      </ul>
    </Drawer>
  );
};

export default Sidebar;
