import HeroSection from "@/sections/hero-section/hero-section";
import HighlightSection from "@/sections/highlight-section/highlight-section";
import TestimonialsSection from "@/sections/testimonials-section/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightSection />
      <TestimonialsSection />
    </main>
  );
}
