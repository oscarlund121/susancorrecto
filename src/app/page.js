import HeroSection from "./components/frontpage/HeroSection";
import Filler from "./components/layout/Filler";
import SectionIntro from "./components/frontpage/SectionIntro";
import SectionServices from "./components/frontpage/SectionServices";
import SectionAbout from "./components/frontpage/SectionAbout";
import SectionHelp from "./components/frontpage/SectionHelp";
import SectionTestimonials from "./components/frontpage/SectionTestimonials";
import YoungSection from "./components/frontpage/YoungSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionIntro />
      <SectionHelp />
 
      <SectionAbout />
      <SectionServices />
      <YoungSection />

      <SectionTestimonials />
      <Filler title="Jeg hjælper dig med at finde styrke, ro og retning, uanset hvor du står." />
    </div>
  );
}
