import { Karla } from "next/font/google";
import React, { DetailedHTMLProps } from "react";
import styles from "./lead-text.module.scss";

const karla = Karla({ subsets: ["latin"] });

const LeadText = (
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
    <h4 {...headingProps} className={textClasses}>
      {children}
    </h4>
  );
};

export default LeadText;
