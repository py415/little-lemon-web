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
  const { children, ...textProps } = props;

  return (
    <div className={karla.className}>
      <h5 {...textProps} className={styles.text}>
        {children}
      </h5>
    </div>
  );
};

export default HighlightText;
