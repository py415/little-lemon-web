import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import HighlightTile, {
  Dish,
} from "@/components/highlight-tile/highlight-tile";
import styles from "./highlight-section.module.scss";

const HighlightSection = () => {
  // State
  const dishes: Dish[] = [
    {
      image: "/greek salad.jpg",
      name: "Greek salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: "/bruchetta.jpg",
      name: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: "/lemon dessert.jpg",
      name: "Lemon Dessert",
      price: 4.99,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header__tiles__cntr}>
        <div className={styles.header}>
          <DisplayTitle>This weeks specials!</DisplayTitle>
          <Button>Online Menu</Button>
        </div>

        <ul className={styles.tiles}>
          {dishes.map((dish) => (
            <HighlightTile key={dish.name} dish={dish} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HighlightSection;
