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
  const { children, className, ...headingProps } = props;
  // State
  const textClasses = [styles.text, karla.className, className].join(" ");

  return (
    <h3 {...headingProps} className={textClasses}>
      {children}
    </h3>
  );
};

export default SectionTitle;
