"use client";

import Image from "next/image";
import HeaderSection from "../layout/FrontpageHeaderSection";
import SeeMoreButton from "../ui/SeeMoreButton";
import { FaGraduationCap } from "react-icons/fa";

const SectionAbout = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 flex flex-col items-center text-black bg-[white]">
      {/* HeaderSection får fuld bredde */}

      <div className="content-max mt-12">
        <div className="grid grid-cols-1 text-max md:grid-cols-2 gap-2 mx-auto">
          <figure className="mt-10 md:mt-0 flex flex-col  justify-center items-center w-full order-2 md:order-1">
            <div className="relative w-[350px] md:w-[500px]">
              <Image
                src="/img/headshot.webp"
                alt="Om Susan Image"
                width={500}
                height={600}
                className="w-full object-cover object-bottom rounded-3xl"
              />

              {/* Stat badge — floating circle */}
            {/*   <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#DBE1F8] ring-2 ring-[#367067] rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-[#F38A5D] leading-none">20+</span>
                <span className="text-[10px] text-[#367067]/80 text-center leading-tight mt-1">års erfaring</span>
              </div>
              <div className="absolute bottom-4 left-4 w-48  h-24 shadow-lg bg-black/40 p-4 rounded-2xl">
                <span className="text-2xl leading-[1.2em] font-bold text-[#F38A5D] ">Specialiseret i <br /> Børn & Unge</span>
              
              </div> */}

             
            </div>

          </figure>

          <div className="flex flex-col justify-center text-black order-1 md:order-2">
           {/*  <div className="mb-6">
              <h5 className="border-l-1 border-white pl-2">Psykoterapeut</h5>
            </div> */}
            <div className="mt-2  rounded-4xl px-8 py-4">
              <div className="md:text-max">
                <h3 className="mb-1 w-full">
                  Susan Albertsen
                </h3>
                <p className="text-sm font-light tracking-wide text-black/70 mb-4">Psykoterapeut</p>
                <div className="w-[70px] h-[2px] bg-[#F38A5D] mb-6"></div>
                <p className="mb-6 mt-2 w-full">
                  Jeg er uddannet psykoterapeut med 20 års erfaring i at støtte
                  børn, unge, voksne og familier gennem svære perioder. Min
                  tilgang kombinerer EMDR, chokforløsning, mentalisering og
                  meditation – altid med respekt, nærvær og helhedssyn. Hos mig
                  møder du et trygt rum, hvor vi arbejder for at skabe ro,
                  balance og ny energi i dit liv.
                </p>

                <p className="italic text-black/80">
                Min vision er, sammen med klienten/klienterne at skabe en
                  ønsket forandring, med mere glæde, frihed og lethed i livet og
                  gøre det ansvarligt, kærligt og anerkendende, med respekt for
                  klientens behov.
                </p>

                <div className="mt-8">
                  <SeeMoreButton variant="light" href="/om-susan">Læs mere</SeeMoreButton>
                </div>
              </div>

             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
