import React, { DetailedHTMLProps } from "react";
import SectionCategories from "../section-categories/section-categories";
import styles from "./button.module.scss";

const Button = (
  props: DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  // Props
  const { children, className, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={[styles.btn, className].join(" ")}>
      <SectionCategories>{children}</SectionCategories>
    </button>
  );
};

export default Button;
