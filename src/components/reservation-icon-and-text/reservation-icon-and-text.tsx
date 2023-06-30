import { IconType } from "react-icons";
import CardTitle from "../card-title/card-title";
import HighlightText from "../highlight-text/highlight-text";
import Subtitle from "../subtitle/subtitle";
import styles from "./reservation-icon-and-text.module.scss";

interface ReservationTextProps {
  title: string;
  description: string;
  icon: IconType;
}

const ReservationIconAndText = (props: ReservationTextProps) => {
  // Props
  const { title, description, icon } = props;
  // State
  const Icon = icon;

  return (
    <div>
      <HighlightText>{title}</HighlightText>
      <div className={styles.text__and__icon}>
        <Subtitle>{description}</Subtitle>
        <CardTitle className={styles.icon}>
          <Icon />
        </CardTitle>
      </div>
    </div>
  );
};

export default ReservationIconAndText;
