import { Markazi_Text } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./subtitle.module.scss";

const markaziText = Markazi_Text({ weight: "400", subsets: ["latin"] });

const Subtitle = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, className, ...headingProps } = props;
  // State
  const textClasses = [styles.text, markaziText.className, className].join(" ");

  return (
    <h2 {...headingProps} className={textClasses}>
      {children}
    </h2>
  );
};

export default Subtitle;
