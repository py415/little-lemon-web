import DisplayTitle from "@/components/display-title/display-title";
import TestimonialTile, {
  Testimonial,
} from "@/components/testimonial-tile/testimonial-tile";
import styles from "./testimonials-section.module.scss";

const TestimonialsSection = () => {
  // State
  const testimonials: Testimonial[] = [
    {
      name: "Melissa T.",
      image: "/melissa.jpg",
      review:
        '"Cozy atmosphere, loved the modern twist on Mediterranean classics. The lemon hummus is a must-try!"',
    },
    {
      name: "Jeremy M.",
      image: "/jeremy.jpg",
      review:
        "“Exceptional service and authentic cuisine. The chicken shawarma with lemon-garlic aioli was unforgettable.”",
    },
    {
      name: "Sophia J.",
      image: "/sophia.jpg",
      review:
        '"My go-to spot for Mediterranean in Chicago. Stuffed grape leaves and baklava cheesecake are a perfect pair."',
    },
    {
      name: "Nathan K.",
      image: "/nathan.jpg",
      review:
        '"Impressive menu variety, delicious fusion of flavors. Falafel sliders and grilled octopus are outstanding."',
    },
  ];

  return (
    <section id="testimonials" className={styles.section}>
      <DisplayTitle className={styles.title}>Testimonials</DisplayTitle>

      <div className={styles.tiles}>
        {testimonials.map((testimonial) => (
          <TestimonialTile key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
