import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

const helpAreas = [
  "Efter chok eller ulykker",
  "Ved vedvarende angst eller fobier",
  "Ved tab og sorg",
  "Efter fysiske eller psykiske overgreb",

];

export default function EMDR() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>


    
      <div className=" bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-8">
          <HeaderSection
            title="EMDR-terapi"
            text="EMDR (Eye Movement Desensitization and Reprocessing) er en evidensbaseret terapiform, der er særligt effektiv til at behandle traumer og post-traumatisk stress. WHO anbefaler EMDR som første behandling af valg ved traumer."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Hvad er EMDR terapi?</h3>
                </div>
                <p className="w-full max-w-xl mt-6">
                  EMDR er en psykoterapeutisk metode, der hjælper hjernen med at bearbejde traumatiske minder og oplevelser. Under behandlingen følger du terapeutens bevægelser med øjnene, mens du tænker på det belastende emne. Dette stimulerer hjernens naturlige helingsprocesser og reducerer den følelsesmæssige belastning ved mindet.
                </p>
              </div>
              <Help
                title="Hvornår kan metoden hjælpe?"
                tags={helpAreas}
              />
            </div>
           <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/emdr-1.jpg"
                  alt="Beskrivelse af billedet"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <CTAContent />

    </div>
  );
}
