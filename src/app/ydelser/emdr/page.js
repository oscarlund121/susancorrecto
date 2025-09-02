import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";

const helpAreas = [
  "Efter chok eller ulykker",
  "Ved vedvarende angst eller fobier",
  "Ved tab og sorg",
  "Efter fysiske eller psykiske overgreb",
  "Når gamle oplevelser bliver ved med at påvirke dit liv i nutiden"
];

export default function EMDR() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>



      <div className=" bg-[#D3D9E5] md:py-32 py-16">
        <HeaderSection
          title="Få ro i krop og sind med EMDR-terapi"
          text="EMDR (Eye Movement Desensitization and Reprocessing) er en evidensbaseret terapiform, der er særligt effektiv til at behandle traumer og post-traumatisk stress. WHO anbefaler EMDR som første behandling af valg ved traumer."
          buttonHref="/kontakt"
          variant="primary"
          borderColor="black"
        />
      </div>
      <div className="bg-white py-32">
        <div className="content-max px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Hvad er EMDR terapi?</h3>
                </div>
                <p className="sm:w-xl w-sm mt-6">
                  EMDR er en psykoterapeutisk metode, der hjælper hjernen med at bearbejde traumatiske minder og oplevelser. Under behandlingen følger du terapeutens bevægelser med øjnene, mens du tænker på det belastende emne. Dette stimulerer hjernens naturlige helingsprocesser og reducerer den følelsesmæssige belastning ved mindet.
                </p>
              </div>
              <Help
                title="Hvornår kan metoden hjælpe?"
                tags={helpAreas}
              />
            </div>
            <figure className="custom">
              <Image
                src="/img/determind.jpg"
                alt="Beskrivelse af billedet"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="bg-[#367067] py-32 text-white">
        <div className="content-max px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/determind.jpg"
                  alt="Beskrivelse af billedet"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
            <div>
              <div className="pb-8">
                <h2>Klar til at tage det næste skridt?</h2>
              </div>
              <div className="mt-8">
                <div className="mb-6 border-b-2 border-white">
                  <h3>Sådan forgår et forløb</h3>
                </div>
                <div className="sm:w-xl w-sm mb-8 ">
                  <p>
                    Vi starter altid med en indledende samtale, hvor vi afklarer, hvad der fylder mest for dig, og hvordan du ønsker, at dit liv skal se ud fremover. Når du er klar, arbejder vi med EMDR i korte, overskuelige sekvenser. Du styrer selv tempoet, og jeg sørger for, at vi altid vender tilbage til en følelse af ro og tryghed undervejs.
                  </p>
                  <br />
                  <p>
                    Kontakt mig for en uforpligtende samtale om, hvordan EMDR kan hjælpe dig med at give slip på fortiden og finde ro i nuet.
                  </p>
                </div>
                <Button
                  variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
