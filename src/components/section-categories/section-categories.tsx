import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./section-categories.module.scss";

const karla = Karla({ subsets: ["latin"] });

const SectionCategories = (
  props: DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  // Props
  const { children, ...headingProps } = props;

  return (
    <div className={karla.className}>
      <h5 {...headingProps} className={styles.text}>
        {children}
      </h5>
    </div>
  );
};

export default SectionCategories;
