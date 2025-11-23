"use client";

import HeaderSection from "../layout/FrontpageHeaderSection";
import Image from "next/image";

const SectionFive = () => {
  return (
    <div className="relative section  pb-16 ">
      {/* Background image */}
      <Image
        src="/img/wheat-2.jpg"
        alt="Hero background"
        width={1512}
        height={450}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
    


      <div className="relative flex flex-col items-center justify-center z-100 py-32 text-white">
        <blockquote className="text-max text-center">
          “Vi kan kun skabe varige transformationer i os selv, hvis vi gør det
          ud fra ren ubetinget kærlighed. Kan vi ikke skabe ændringer ud fra
          dette, vil vi kun komme frem til midlertidige løsninger. Med andre ord
          er essensen i terapien at være helhjertet – at have hele hjertet med.”
        </blockquote>
        <p>- Karen Aaes</p>
      </div>
    </div>
  );
};

export default SectionFive;
