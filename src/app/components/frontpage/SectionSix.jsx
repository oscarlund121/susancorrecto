"use client";

import Image from "next/image";
import HeaderSection from "../layout/FrontpageHeaderSection";
import SeeMoreButton from "../ui/SeeMoreButton";
import Link from "next/link";

const SectionSix = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 flex flex-col items-center text-white bg-[#367067]">
      {/* HeaderSection får fuld bredde */}

      <div className="content-max mt-12">
        <div className="grid grid-cols-1 text-max md:grid-cols-2 gap-2 mx-auto">
          <figure className="mt-10 md:mt-0 flex flex-col  justify-center items-center w-full order-2 md:order-1">
            <Image
              src="/img/about-susan-correct.jpg"
              alt="Om Susan Image"
              width={500}
              height={600}
              className="w-[350px] md:w-[500px] aspect-[5/6] object-cover object-bottom"
            />
            <span className="text-white italic font-extralight text-xs mt-2 text-left max-w-[350px] md:max-w-[500px]">
              “Min vision er, sammen med klienten/klienterne at skabe en
              ønsket forandring, med mere glæde, frihed og lethed i livet og
              gøre det ansvarligt, kærligt og anerkendende, med respekt for
              klientens behov”.
            </span>
          </figure>

          <div className=" flex flex-col justify-center  text-white order-1 md:order-2">
            <div className="mb-6">
              <h2>Psykoterapeut med lokation i hjertet Aarhus</h2>
            </div>
            <div className="mt-2 ">
              <div className="md:text-max ">
                <h3 className="mb-4 w-full md:w-xl border-b-2 border-white pb-2">
                  Susan Albertsen
                </h3>

                <p className="mb-6 w-full md:w-xl">
                  Jeg er uddannet psykoterapeut med 20 års erfaring i at støtte
                  børn, unge, voksne og familier gennem svære perioder. Min
                  tilgang kombinerer EMDR, chokforløsning, mentalisering og
                  meditation – altid med respekt, nærvær og helhedssyn. Hos mig
                  møder du et trygt rum, hvor vi arbejder for at skabe ro,
                  balance og ny energi i dit liv.
                </p>
              </div>

              <div className="flex justify-end w-full md:w-xl">
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
