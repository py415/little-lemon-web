import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../../components/button/button";
import DisplayTitle from "../../components/display-title/display-title";
import LeadText from "../../components/lead-text/lead-text";
import Subtitle from "../../components/subtitle/subtitle";
import styles from "./hero-section.module.scss";

const HeroSection = () => {
  // Props
  const heroImg = "/restauranfood.jpg";
  // Hooks
  const router = useRouter();

  const handleClick = () => router.push("/reservations");

  return (
    <section className={styles.section}>
      <div className={styles.img__labels__cntr}>
        <div className={styles.labels}>
          <DisplayTitle className={styles.title}>Little Lemon</DisplayTitle>
          <Subtitle>Chicago</Subtitle>
          <LeadText>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </LeadText>
          <Button onClick={handleClick}>Reserve a Table</Button>
        </div>

        <Image
          className={styles.img}
          src={heroImg}
          alt="hero"
          width={320}
          height={480}
        />
      </div>
    </section>
  );
};

export default HeroSection;
