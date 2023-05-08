import Image from "next/image";
import { FaStar } from "react-icons/fa";
import CardTitle from "../card-title/card-title";
import ParagraphText from "../paragraph-text/paragraph-text";
import styles from "./testimonial-tile.module.scss";

export interface Testimonial {
  name: string;
  image: string;
  review: string;
}

interface TestimonialTileProps {
  testimonial: Testimonial;
}

const TestimonialTile = (props: TestimonialTileProps) => {
  // Props
  const { testimonial } = props;
  // State
  const { name, image, review } = testimonial;

  return (
    <div className={styles.card}>
      <CardTitle>{name}</CardTitle>

      <div className={styles.icons}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CardTitle key={index}>
            <FaStar />
          </CardTitle>
        ))}
      </div>

      <Image
        className={styles.img}
        src={image}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
      />

      <ParagraphText>{review}</ParagraphText>
    </div>
  );
};

export default TestimonialTile;
