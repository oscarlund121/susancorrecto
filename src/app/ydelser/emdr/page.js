import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

export const metadata = {
  title: 'EMDR-terapi - Traumebehandling',
  description: 'EMDR-terapi til behandling af traumer og PTSD i Aarhus. WHO-anbefalet metode til chok, ulykker, angst og sorg. Book en tid hos psykoterapeut Susan Albertsen.',
  keywords: ['EMDR terapi', 'EMDR Aarhus', 'traumebehandling', 'PTSD behandling', 'chok behandling', 'WHO anbefalet terapi'],
  openGraph: {
    title: 'EMDR-terapi - Traumebehandling | Susan Albertsen',
    description: 'EMDR-terapi til behandling af traumer og PTSD. WHO-anbefalet metode.',
    url: 'https://www.psykoterapisusan.dk/ydelser/emdr',
    images: [{ url: '/img/emdr-1.webp', width: 1200, height: 630, alt: 'EMDR-terapi hos Susan Albertsen' }],
  },
  twitter: {
    title: 'EMDR-terapi - Traumebehandling',
    description: 'EMDR-terapi til behandling af traumer og PTSD.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/ydelser/emdr',
  },
};

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
      <div className="bg-white py-12 md:py-24 lg:py-32">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Hvad er EMDR-terapi (chok- og traumeforløsning)?</h3>
                </div>
                <p className="w-full max-w-xl mt-6">
                  EMDR er en psykoterapeutisk metode, der hjælper hjernen med at bearbejde traumatiske minder og oplevelser. Under behandlingen følger du terapeutens bevægelser med øjnene, mens du tænker på det belastende emne. Dette stimulerer hjernens naturlige helingsprocesser og reducerer den følelsesmæssige belastning ved mindet.
                </p>
                <a href="#uddybning" className="inline-block mt-4 text-[#4A5568] underline hover:text-[#2D3748] transition-colors">
                  Læs mere om hvordan EMDR-terapi virker →
                </a>
              </div>
              <Help
                title="Hvornår kan metoden hjælpe?"
                tags={helpAreas}
              />
            </div>
           <div className="hidden md:flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/emdr-1.webp"
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
      </div>

      {/* Uddybende sektion */}
      <div id="uddybning" className="bg-[#DBE1F8]/50 py-12 md:py-24 lg:py-32">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="max-w-2xl mx-auto">
              <div className="border-b-1 border-black mb-6">
                <h3>Hvordan chok og traumer påvirker os</h3>
              </div>
              <div className="space-y-6">
                <p>
                  Når vi i livet møder oplevelser, der overvælder os, kan de sætte sig som chok eller traume i kroppen og nervesystemet. Det kan vise sig som indre uro, angst, spændinger eller en følelse af at være ved siden af sig selv. Måske oplever du at være fastlåst eller ude af balance – som om noget stadig holder dig tilbage.
                </p>
                <p>
                  Kroppen husker det, vi har været igennem. Selv når vi forsøger at lægge en oplevelse bag os, kan nervesystemet fortsat reagere, som om situationen stadig er aktuel.
                </p>
                <p>
                  Gennem EMDR-terapi (chok- og traumeforløsning) støttes hjernen og kroppen i nænsomt at bearbejde det, der har sat sig fast. Behandlingen hjælper nervesystemet med at regulere sig selv og vende tilbage til sin naturlige tilstand af ro og balance.
                </p>
                <p>
                  Mange oplever en mærkbar lettelse allerede efter 1.-3. behandlinger. Forløbets varighed afhænger af oplevelsens karakter og dybde samt af, hvordan den har påvirket dig.
                </p>
                <p className="font-medium">
                  Målet er at genskabe følelsen af indre sammenhæng, tryghed og at være hjemme i dig selv igen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTAContent />

    </div>
  );
}
