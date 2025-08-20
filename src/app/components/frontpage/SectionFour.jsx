"use client";

import HeaderSection from "../layout/FrontpageHeaderSection";
import List from "./List";
import SeeMoreButton from "../ui/SeeMoreButton";
import Image from "next/image";
import Link from "next/link";

const SectionFour = () => {
  return (
    <div className="py-32 bg-[#DBE1F8] ">
      <HeaderSection
        title="Jeg tilbyder evidensbaseret psykoterapi med fokus på helhedsorienteret behandling og personlig udvikling."
        text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
        buttonText="Kom i kontakt"
        buttonHref="/kontakt"
        variant="primary"
      />
      <div className="content-max ">
        <div className="grid px-6 grid-cols-1 md:grid-cols-2 mt-25 items-center gap-8 lg:gap-0">
          <ul className="flex span-2 flex-col gap-8 lg:gap-16 order-2 lg:order-1">
            <li>
              <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 flex flex-col justify-between  hover:bg-black/5 transition-colors p-2 lg:p-4 -m-2 lg:-m-4 rounded"
              >
                <h3 className="text-left">Essentiel Integrativ Psykoterapi</h3>
                <div className="flex justify-end">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/kort-terapi"
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-2 lg:p-4 -m-2 lg:-m-4 rounded"
              >
                <h3 className="text-left">Kort terapi</h3>
                <div className="flex justify-end">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/gruppeforloeb"
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-2 lg:p-4 -m-2 lg:-m-4 rounded"
              >
                <h3 className="text-left">Gruppeforløb</h3>
                <div className="flex justify-end">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/online-terapi"
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-2 lg:p-4 -m-2 lg:-m-4 rounded"
              >
                <h3 className="text-left">Online terapi</h3>
                <div className="flex justify-end">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
          </ul>

          <figure className="custom  order-2 ">
            <Image
              src="/img/determind.jpg"
              alt="Hero background"
              width={315}
              height={450}
              
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
