"use client";

import Image from "next/image";
import HeaderSection from "../layout/FrontpageHeaderSection";
import SeeMoreButton from "../ui/SeeMoreButton";
import Link from "next/link";

const SectionSix = () => {
  return (
    <div className="py-32 bg-[#367067]">
      <div className="content-max">
        <div className="grid grid-cols-1 text-max md:grid-cols-3 gap-2">
          <figure className="custom col-span-1 mt-10 md:mt-0 flex flex-col  justify-center items-center w-full order-2 md:order-1">
            <Image
              src="/img/about-front.jpg"
              alt="Om Susan Image"
              width={500}
              height={450}
              className="w-[350px] md:w-[500px] h-auto object-cover"
            />
            <span className="text-white italic font-extralight text-xs mt-2 text-left max-w-[350px] md:max-w-[500px]">
              “Min vision er, sammen med klienten/klienterne at skabe en
              ønsket forandring, med mere glæde, frihed og lethed i livet og
              gøre det ansvarligt, kærligt og anerkendende, med respekt for
              klientens behov”.
            </span>
          </figure>

          <div className="col-span-2 flex flex-col justify-center text-white order-1 md:order-2">
            <div className="border-b-2 border-white mx-6">
              <HeaderSection
                title="Erfaren psykoterapeut i Aarhus "
                variant={false}
              />
            </div>

            <div className="mt-6 px-6">
              <div className="text-max">
                <h3 className="mb-4 ">Om mig</h3>

                <p className="mb-6 w-full md:w-xl">
                  Jeg er uddannet psykoterapeut med 20 års erfaring i at støtte
                  børn, unge, voksne og familier gennem svære perioder. Min
                  tilgang kombinerer EMDR, chokforløsning, mentalisering og
                  meditation – altid med respekt, nærvær og helhedssyn. Hos mig
                  møder du et trygt rum, hvor vi arbejder for at skabe ro,
                  balance og ny energi i dit liv.
                </p>
              </div>

              <div className="flex justify-end">
                <Link href="/om-susan">
                  <SeeMoreButton variant="light">Læs mere</SeeMoreButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
