import HeroSection from "./components/frontpage/HeroSection";
import SectionThree from "./components/frontpage/SectionThree";
import SectionTwo from "./components/frontpage/SectionTwo";
import SectionFour from "./components/frontpage/SectionFour";
import SectionFive from "./components/frontpage/SectionFive";
import SectionSix from "./components/frontpage/SectionSix";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionFive />
      <SectionSix />
    </div>
  );
}
