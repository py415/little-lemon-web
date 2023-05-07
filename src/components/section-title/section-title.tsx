import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./section-title.module.scss";

const karla = Karla({ subsets: ["latin"] });

const SectionTitle = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, ...headingProps } = props;

  return (
    <div className={karla.className}>
      <h3 {...headingProps} className={styles.text}>
        {children}
      </h3>
    </div>
  );
};

export default SectionTitle;
