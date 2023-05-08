import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./paragraph-text.module.scss";

const karla = Karla({ subsets: ["latin"] });

const ParagraphText = (
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
    <p {...textProps} className={textClasses}>
      {children}
    </p>
  );
};

export default ParagraphText;
