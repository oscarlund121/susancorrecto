"use client";

import HeaderSection from "../layout/FrontpageHeaderSection";
import List from "./List";
import SeeMoreButton from "../ui/SeeMoreButton";
import Image from "next/image";
import Link from "next/link";

const SectionFour = () => {
  return (
    <div className="py-32 bg-white ">
      <HeaderSection
        title="Jeg tilbyder evidensbaseret psykoterapi med fokus på helhedsorienteret behandling og personlig udvikling."
        text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
        
        buttonHref="/kontakt"
        variant="secondary"
      />
      <div className="content-max ">
        <div className="grid px-6 grid-cols-1 md:grid-cols-3 mt-25 items-center gap-8 lg:gap-4">
          <ul className="flex col-span-3 flex-col gap-8 lg:gap-16 ">
            <li className="mt-6">
              <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 border-l-1 flex flex-col justify-between  bg-white text-black hover:bg-[#d3d9e5] transition-colors p-2 lg:p-4 -m-2 lg:-m-4  hover:underline rounded-lg"
              >
                <h3 className="text-left">Essentiel Integrativ Psykoterapi</h3>
                <div className="flex justify-end ">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
           <li className="mt-6">
              <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 border-l-1 flex flex-col justify-between  bg-white text-black hover:bg-[#d3d9e5] transition-colors p-2 lg:p-4 -m-2 lg:-m-4  hover:underline rounded-lg"
              >
                <h3 className="text-left">EMDR <span className="font-extralight italic text-xs sm:text-base">(Eye Movement Desensitization and Reprocessing)</span></h3>

                <div className="flex justify-end ">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
           <li className="mt-6">
              <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 border-l-1 flex flex-col justify-between  bg-white text-black hover:bg-[#d3d9e5] transition-colors p-2 lg:p-4 -m-2 lg:-m-4  hover:underline rounded-lg"
              >
                <h3 className="text-left">Meditation</h3>
                <div className="flex justify-end ">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
           <li className="mt-6">
             <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 border-l-1 flex flex-col justify-between  bg-white text-black hover:bg-[#d3d9e5] transition-colors p-2 lg:p-4 -m-2 lg:-m-4  hover:underline rounded-lg"
              >
                <h3 className="text-left">Familie- & parterapi</h3>
                <div className="flex justify-end ">
                  <SeeMoreButton variant="light" />
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
