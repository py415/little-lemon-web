import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./highlight-text.module.scss";

const karla = Karla({ subsets: ["latin"] });

const HighlightText = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, className, ...textProps } = props;
  // State
  const textClasses = [styles.text, karla.className, className].join(" ");

  return (
    <h5 {...textProps} className={textClasses}>
      {children}
    </h5>
  );
};

export default HighlightText;
