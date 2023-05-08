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
  const { children, className, ...headingProps } = props;
  // State
  const textClasses = [styles.text, karla.className, className].join(" ");

  return (
    <h5 {...headingProps} className={textClasses}>
      {children}
    </h5>
  );
};

export default SectionCategories;
