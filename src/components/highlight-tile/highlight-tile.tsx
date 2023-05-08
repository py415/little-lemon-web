import Image from "next/image";
import { FaMotorcycle } from "react-icons/fa";
import CardTitle from "../card-title/card-title";
import HighlightText from "../highlight-text/highlight-text";
import ParagraphText from "../paragraph-text/paragraph-text";
import styles from "./highlight-tile.module.scss";

export interface Dish {
  image: string;
  name: string;
  price: number;
  description: string;
}

interface HighlightTileProps {
  dish: Dish;
}

const HighlightTile = (props: HighlightTileProps) => {
  // Props
  const { dish } = props;
  // State
  const { image, name, price, description } = dish;

  return (
    <li className={styles.tile}>
      <Image
        className={styles.img}
        src={image}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
      />

      <div className={styles.card}>
        <div className={styles.header}>
          <CardTitle>{name}</CardTitle>
          <CardTitle className={styles.price}>${price}</CardTitle>
        </div>

        <ParagraphText className={styles.description}>
          {description}
        </ParagraphText>

        <div className={styles.caption}>
          <HighlightText>Order a delivery</HighlightText>
          <HighlightText>
            <FaMotorcycle />
          </HighlightText>
        </div>
      </div>
    </li>
  );
};

export default HighlightTile;
