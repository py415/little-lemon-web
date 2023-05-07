import { Markazi_Text } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./subtitle.module.scss";

const markaziText = Markazi_Text({ subsets: ["latin"] });

const Subtitle = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, ...headingProps } = props;

  return (
    <div className={markaziText.className}>
      <h2 {...headingProps} className={styles.text}>
        {children}
      </h2>
    </div>
  );
};

export default Subtitle;
