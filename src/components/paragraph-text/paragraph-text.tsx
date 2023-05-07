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
  const { children, ...textProps } = props;

  return (
    <div className={karla.className}>
      <p {...textProps} className={styles.text}>
        {children}
      </p>
    </div>
  );
};

export default ParagraphText;
