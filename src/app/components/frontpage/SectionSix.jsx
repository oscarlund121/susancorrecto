"use client";

import Image from "next/image";
import HeaderSection from "../layout/FrontpageHeaderSection";

const SectionSix = () => {
  return (
    <div className="py-32 bg-[#367067]">
      <div className="content-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <figure className="custom order-2 md:order-1">
            <Image
              src="/img/about-front.jpg"
              alt="Om Susan Image"
              width={450}
              height={450}
            />
          </figure>
          <div className="flex flex-col justify-top text-white">
            <HeaderSection title="Erfaren psykoterapeut i Aarhus Susan Albertsen"
            variant={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
