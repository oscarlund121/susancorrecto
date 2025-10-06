"use client";

import HeaderSection from "../layout/FrontpageHeaderSection";
import List from "./List";
import SeeMoreButton from "../ui/SeeMoreButton";
import Image from "next/image";
import Link from "next/link";

const SectionFour = () => {
  return (
    <div className="py-32 bg-white ">
      <div className="content-max ">
      <HeaderSection
        title="Jeg tilbyder evidensbaseret psykoterapi med fokus på helhedsorienteret behandling og personlig udvikling."
        text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
        
        buttonHref="/kontakt"
        variant="secondary"
      />
        <div className="grid px-6 grid-cols-1 md:grid-cols-3 mt-25 items-center gap-8 lg:gap-4">
            <ul className="flex col-span-3 flex-col gap-8 lg:gap-16 ">
            <li className="mt-6 group">
              <Link
                href="/ydelser/essentiel-integrativ-psykoterapi"
                className="border-b-2 border-l-1 flex flex-col justify-between bg-white text-[#367067] hover:text-black  transition-colors p-2 lg:p-4 -m-2 lg:-m-4 "
              >
                <h3 className="text-left relative inline-block">
                  Essentiel Integrativ Psykoterapi
                  <span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#367067] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <div className="flex justify-end mt-3">
                  <SeeMoreButton variant="inverse" />
                </div>
              </Link>
            </li>
            <li className="mt-6 group">
              <Link
                href="/ydelser/emdr"
                className="border-b-2 border-l-1 flex flex-col justify-between bg-white text-[#367067] hover:text-black  transition-colors p-2 lg:p-4 -m-2 lg:-m-4 "
              >
                <h3 className="text-left relative inline-block">
                  EMDR <span className="font-extralight italic text-xs sm:text-base">(Eye Movement Desensitization and Reprocessing)</span>
                  <span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#367067] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <div className="flex justify-end mt-3">
                  <SeeMoreButton variant="inverse" />
                </div>
              </Link>
            </li>
            <li className="mt-6 group">
              <Link
                href="/ydelser/meditation"
                className="border-b-2 border-l-1 flex flex-col justify-between bg-white text-[#367067] hover:text-black  transition-colors p-2 lg:p-4 -m-2 lg:-m-4 "
              >
                <h3 className="text-left relative inline-block">
                  Meditation
                  <span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#367067] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <div className="flex justify-end mt-3">
                  <SeeMoreButton variant="inverse" />
                </div>
              </Link>
            </li>
           <li className="mt-6 group">
             <Link
                href="/ydelser/familie-par"
                className="border-b-2 border-l-1 flex flex-col justify-between bg-white text-[#367067] hover:text-black  transition-colors p-2 lg:p-4 -m-2 lg:-m-4 "
              >
                <h3 className="text-left relative inline-block">
                  Familie- & parterapi
                  <span className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#367067] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <div className="flex justify-end mt-3">
                  <SeeMoreButton variant="inverse" />
                </div>
              </Link>
            </li>
          </ul>

      {/*     <figure className="custom order-2 ">
            <Image
              src="/img/determind.jpg"
              alt="Hero background"
              width={315}
              height={450}
              
            />
          </figure> */}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
