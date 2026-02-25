import Navigation from "../../components/layout/Navigation";
import ServiceHeader from "../../components/layout/ServiceHeader";
import Image from "next/image";
import Button from "../../components/ui/Button";
import ListItem from "../../components/ui/ListItem";
import { PiEyeBold } from "react-icons/pi";

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

export default function EMDR() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <ServiceHeader
        icon={PiEyeBold}
        badge="EMDR-terapi"
        title={<>Chok- & traumeforløsning <span className="italic text-[#F38A5D]">med EMDR</span></>}
        text="EMDR (Eye Movement Desensitization and Reprocessing) er en evidensbaseret terapiform, der er særligt effektiv til at behandle traumer og post-traumatisk stress. WHO anbefaler EMDR som første behandling af valg ved traumer."
      />

      {/* Main content */}
      <div className="bg-white py-12 md:py-16 ">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="mb-6 border-b-2 border-black">
              <h3>Hvad er EMDR-terapi?</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <p>
                  EMDR er en psykoterapeutisk metode, der hjælper hjernen med at bearbejde traumatiske minder og oplevelser. Under behandlingen følger du terapeutens bevægelser med øjnene, mens du tænker på det belastende emne. Dette stimulerer hjernens naturlige helingsprocesser og reducerer den følelsesmæssige belastning ved mindet.
                </p>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Hvordan chok og traumer påvirker os</h5>
                <p>
                  Når vi i livet møder oplevelser, der overvælder os, kan de sætte sig som chok eller traume i kroppen og nervesystemet. Det kan vise sig som indre uro, angst, spændinger eller en følelse af at være ved siden af sig selv.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    "Kroppen husker det, vi har været igennem. Selv når vi forsøger at lægge en oplevelse bag os, kan nervesystemet fortsat reagere, som om situationen stadig er aktuel."
                  </p>
                </blockquote>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Behandlingen i praksis</h5>
                <p>
                  Gennem EMDR-terapi støttes hjernen og kroppen i nænsomt at bearbejde det, der har sat sig fast. Behandlingen hjælper nervesystemet med at regulere sig selv og vende tilbage til sin naturlige tilstand af ro og balance.
                </p>
                <br />
                <p>
                  Mange oplever en mærkbar lettelse allerede efter 1–3 behandlinger. Forløbets varighed afhænger af oplevelsens karakter og dybde samt af, hvordan den har påvirket dig.
                </p>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Målet</h5>
                <p className="font-medium">
                  At genskabe følelsen af indre sammenhæng, tryghed og at være hjemme i dig selv igen.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/emdr-1.webp"
                    alt="EMDR-terapi hos Susan Albertsen"
                    width={500}
                    height={450}
                    className="w-full h-auto object-cover rounded-[32px]"
                  />
                </figure>
                <ul className="space-y-4 bg-[#367067] rounded-[32px] px-8 py-8">
                  <li className="pb-2">
                    <h4 className="text-white font-medium">Hvornår kan EMDR hjælpe?</h4>
                    <div className="w-10 h-[2px] bg-[#F38A5D] rounded-full mt-3"></div>
                  </li>
                  <ListItem>Efter chok eller ulykker</ListItem>
                  <ListItem>Ved vedvarende angst eller fobier</ListItem>
                  <ListItem>Ved tab og sorg</ListItem>
                  <ListItem>Efter fysiske eller psykiske overgreb</ListItem>
                  <ListItem>Ved søvnproblemer og flashbacks</ListItem>
                  <ListItem>Når kroppen husker, hvad sindet har forsøgt at glemme</ListItem>
                  <div className="flex justify-center pt-6">
                    <Button variant="study" href="/kontakt">Book en samtale</Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Bottom CTA */}
      <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-white mb-6">Klar til at tage det næste skridt?</h3>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
                Vi starter altid med en indledende samtale, hvor vi afklarer hvad der fylder mest for dig. Kontakt mig for en uforpligtende samtale om, hvordan EMDR kan hjælpe dig med at finde ro og balance.
              </p>
              <Button variant="secondary" href="/kontakt">Book en samtale</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
