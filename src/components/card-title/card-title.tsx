import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./card-title.module.scss";

const karla = Karla({ subsets: ["latin"] });

const CardTitle = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, ...headingProps } = props;

  return (
    <div className={karla.className}>
      <h4 {...headingProps} className={styles.text}>
        {children}
      </h4>
    </div>
  );
};

export default CardTitle;
