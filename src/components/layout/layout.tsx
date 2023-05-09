import { ReactNode } from "react";
import Footer from "../footer/footer";
import NavigationBar from "../navigation-bar/navigation-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  // Props
  const { children } = props;

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
