import DisplayTitle from "@/components/display-title/display-title";
import LeadText from "@/components/lead-text/lead-text";
import Subtitle from "@/components/subtitle/subtitle";
import Image from "next/image";
import styles from "./about-section.module.scss";

const AboutSection = () => {
  // Styles
  const imgAStyles = [styles.img, styles.img__a].join(" ");
  const imgBStyles = [styles.img, styles.img__b].join(" ");

  return (
    <section className={styles.section}>
      <div className={styles.imgs__labels__cntr}>
        <div className={styles.labels}>
          <DisplayTitle>Little Lemon</DisplayTitle>
          <Subtitle>Chicago</Subtitle>
          <LeadText>
            Welcome to Little Lemon, a family-owned Mediterranean gem in the
            heart of Chicago. We blend traditional recipes with modern twists,
            creating a unique and unforgettable dining experience. Our menu
            boasts a diverse range of dishes, from lemon hummus to baklava
            cheesecake, crafted with fresh ingredients and authentic flavors.
            Join us in our warm and inviting atmosphere to indulge in the
            delicious tastes of the Mediterranean.
          </LeadText>
        </div>

        <div className={styles.imgs}>
          <Image
            className={imgAStyles}
            src="/Mario and Adrian A.jpg"
            alt="about"
            width="0"
            height="0"
            sizes="100vw"
          />

          <Image
            className={imgBStyles}
            src="/Mario and Adrian B.jpg"
            alt="about"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
