import React, { DetailedHTMLProps } from "react";
import SectionCategories from "../section-categories/section-categories";

const Button = (
  props: DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  // Props
  const { children } = props;

  return (
    <button className="px-8 py-4 bg-[#F4CE14] text-black rounded-lg hover:opacity-75 transition">
      <SectionCategories>{children}</SectionCategories>
    </button>
  );
};

export default Button;
