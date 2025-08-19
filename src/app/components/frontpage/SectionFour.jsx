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
        buttonText="Kom i kontakt"
        buttonHref="/kontakt"
        variant="primary"
      />
      <div className="content-max ">
        <div className="grid pl-6 grid-cols-2 mt-25 items-center ">
          <ul className="flex flex-col gap-16 ">
            <li>
              <Link
                href="/essentiel-integrativ-psykoterapi"
                className="border-b-2 flex flex-col justify-between  hover:bg-black/5 transition-colors p-4 -m-4 rounded"
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
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-4 -m-4 rounded"
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
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-4 -m-4 rounded"
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
                className="border-b-2 flex flex-col justify-between hover:bg-black/5 transition-colors p-4 -m-4 rounded"
              >
                <h3 className="text-left">Online terapi</h3>
                <div className="flex justify-end">
                  <SeeMoreButton variant="light" />
                </div>
              </Link>
            </li>
          </ul>

          <figure className="custom">
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
