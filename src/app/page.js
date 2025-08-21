import HeroSection from "./components/frontpage/HeroSection";
import SectionThree from "./components/frontpage/SectionThree";
import Filler from "./components/layout/Filler";
import SectionTwo from "./components/frontpage/SectionTwo";
import SectionFour from "./components/frontpage/SectionFour";
import SectionFive from "./components/frontpage/SectionFive";
import SectionSix from "./components/frontpage/SectionSix";
import SectionSeven from "./components/frontpage/SectionSeven";
import SectionEight from "./components/frontpage/SectionEight";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      {/* <SectionThree /> */}
      <Filler title="Vi finder løsningen sammen, skridt for skridt, i dit tempo." />
      <SectionFour/>
      <SectionFive />
      <SectionSix />
           <Filler title="Jeg hjælper dig med at finde styrke, ro og retning, uanset hvor du står." />

      <SectionSeven />
      <SectionEight />
    </div>
  );
}
