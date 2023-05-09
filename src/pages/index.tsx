import AboutSection from "@/sections/about-section/about-section";
import HeroSection from "@/sections/hero-section/hero-section";
import HighlightSection from "@/sections/highlight-section/highlight-section";
import TestimonialsSection from "@/sections/testimonials-section/testimonials-section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Lemon</title>
      </Head>

      <HeroSection />
      <HighlightSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}
