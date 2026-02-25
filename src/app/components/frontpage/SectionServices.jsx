"use client";

import ServiceItem from "../ui/ServiceItem";
import { FaBrain } from "react-icons/fa6";
import { PiEyeBold } from "react-icons/pi";
import { GiLotus } from "react-icons/gi";
import FadeIn from "../ui/FadeIn";
import Image from "next/image";

const SectionServices = () => {
  return (
    <div className="bg-gradient-to-b from-[white] to-[#367067]">
      <div className="py-16 md:py-24 bg-[#367067] md:mr-28 md:pr-12 md:rounded-r-[200px] ">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <div className="w-full text-white md:px-[20px] lg:px-[60px] ">
                <h2 className="text-white text-center md:text-left mb-6">
                  Jeg tilbyder evidensbaseret psykoterapi med fokus på
                  helhedsorienteret behandling og personlig udvikling
                </h2>
              </div>
            </FadeIn>
            <div className="md:px-[20px] lg:px-[60px]  gap-8 md:gap-16 mt-8 ">
              <ul className="flex  flex-col gap-8 lg:gap-16 ">
                <FadeIn delay={100}>
                  <ServiceItem
                    title="Psykoterapi"
                    href="/ydelser/essentiel-integrativ-psykoterapi"
                    icon={FaBrain}
                  />
                </FadeIn>
                <FadeIn delay={200}>
                  <ServiceItem
                    title="EMDR"
                    href="/ydelser/emdr"
                    subtitle="(Eye Movement Desensitization and Reprocessing)"
                    icon={PiEyeBold}
                  />
                </FadeIn>
                <FadeIn delay={300}>
                  <ServiceItem
                    title="Meditation"
                    href="/ydelser/meditation"
                    icon={GiLotus}
                  />
                </FadeIn>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
