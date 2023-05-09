import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import HighlightText from "../highlight-text/highlight-text";
import styles from "./text-field.module.scss";

interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const TextField = (props: TextFieldProps) => {
  // Props
  const { name, label, ...inputProps } = props;

  return (
    <div className={styles.text__field}>
      <label htmlFor={name}>
        <HighlightText>{label}</HighlightText>
      </label>
      <input {...inputProps} name={name} className={styles.input} />
    </div>
  );
};

export default TextField;
