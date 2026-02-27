"use client";

import ServiceCard from "../ui/ServiceCard";
import { FaBrain } from "react-icons/fa6";
import { PiEyeBold } from "react-icons/pi";
import { GiLotus } from "react-icons/gi";
import FadeIn from "../ui/FadeIn";

const SectionServices = () => {
  return (
    <div className="bg-white">
      <div className="py-16 md:py-24 lg:py-32 bg-[#367067] md:mr-28 md:pr-12 md:rounded-r-[200px]">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <FadeIn>
              <div className="text-center mb-14">
                <h3 className="text-white font-light mb-4">
                  Jeg tilbyder evidensbaseret psykoterapi med fokus på
                  helhedsorienteret behandling og personlig udvikling.
                </h3>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={100} className="h-full">
                <ServiceCard
                  title="Psykoterapi"
                  description="Integrativ psykoterapi hvor vi arbejder med hele dig, krop, sind og relationer, for varig forandring."
                  href="/ydelser/essentiel-integrativ-psykoterapi"
                  icon={FaBrain}
                />
              </FadeIn>
              <FadeIn delay={200} className="h-full">
                <ServiceCard
                  title="EMDR"
                  description="Evidensbaseret metode til bearbejdning af traumer, angst og belastende oplevelser gennem øjenbevægelser."
                  href="/ydelser/emdr"
                  icon={PiEyeBold}
                />
              </FadeIn>
              <FadeIn delay={300} className="h-full">
                <ServiceCard
                  title="Meditation"
                  description="Guidede meditationer der styrker din indre ro, nærvær og evne til at håndtere stress i hverdagen."
                  href="/ydelser/meditation"
                  icon={GiLotus}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
