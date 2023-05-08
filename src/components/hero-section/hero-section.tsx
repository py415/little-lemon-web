import Image from "next/image";
import Button from "../button/button";
import DisplayTitle from "../display-title/display-title";
import LeadText from "../lead-text/lead-text";
import Subtitle from "../subtitle/subtitle";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex justify-center bg-primary-green">
        <div className="flex justify-between w-[860px] py-16">
          <div className="flex flex-col w-[280px] gap-2">
            <DisplayTitle className="text-primary-yellow">
              Little Lemon
            </DisplayTitle>
            <Subtitle>Chicago</Subtitle>
            <LeadText>
              We are family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </LeadText>
            <Button>Reserve a Table</Button>
          </div>

          <div className="h-fit">
            <Image
              className="rounded-2xl shadow"
              src="/restauranfood.jpg"
              alt="hero"
              width={320}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
