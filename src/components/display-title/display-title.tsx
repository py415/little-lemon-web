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
  const { children, className, ...headingProps } = props;
  // State
  const textClasses = [styles.text, markaziText.className, className].join(" ");

  return (
    <h1 {...headingProps} className={textClasses}>
      {children}
    </h1>
  );
};

export default DisplayTitle;
