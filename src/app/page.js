import HeroSection from "./components/frontpage/HeroSection";
import SectionThree from "./components/frontpage/SectionThree";
import SectionTwo from "./components/frontpage/SectionTwo";
import SectionFour from "./components/frontpage/SectionFour";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
    </div>
  );
}
