import { Markazi_Text } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./display-title.module.scss";

const markaziText = Markazi_Text({ subsets: ["latin"] });

const DisplayTitle = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, ...headingProps } = props;

  return (
    <div className={markaziText.className}>
      <h1 {...headingProps} className={styles.text}>
        {children}
      </h1>
    </div>
  );
};

export default DisplayTitle;
