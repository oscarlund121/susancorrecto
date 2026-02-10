import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

export const metadata = {
  title: 'Behandling af Angst og Følelser',
  description: 'Få professionel hjælp til angst, panikangst, social angst og fobier hos psykoterapeut Susan Albertsen i Aarhus. Tryg og nænsom behandling.',
  keywords: ['angst behandling', 'panikangst terapi', 'social angst', 'fobier behandling', 'angst Aarhus', 'klaustrofobi', 'højdeskræk'],
  openGraph: {
    title: 'Behandling af Angst og Følelser | Susan Albertsen',
    description: 'Få professionel hjælp til angst, panikangst og fobier hos psykoterapeut Susan Albertsen.',
    url: 'https://psykoterapisusan.dk/ydelser/angst-og-folelser',
    images: [{ url: '/img/heart.jpg', width: 1200, height: 630, alt: 'Angstbehandling hos Susan Albertsen' }],
  },
  twitter: {
    title: 'Behandling af Angst og Følelser',
    description: 'Professionel hjælp til angst og følelser.',
  },
  alternates: {
    canonical: 'https://psykoterapisusan.dk/ydelser/angst-og-folelser',
  },
};

const helpAreas = [
  "Angst & fobier",
  "Panikangst",
  "Social angst",
  "Klaustrofobi",
  "Højdeskræk",
  "Følelsesmæssig ustabilitet"
];

export default function AngstOgFolelser() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-8">
          <HeaderSection
            title="Angst og følelser"
            text="Angst (eks. panikangst, socialangst og fobier som klaustrofobi eller højdeskræk) kan være ubehagelig og overvældende – men du behøver ikke leve med den alene. Hos mig kan du få professionel hjælp til at forstå og håndtere din angst på en tryg og nænsom måde."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>
      
      {/* Hvad er angst */}
      <div className="bg-white py-12 md:py-24 lg:py-32">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Hvad er angst?</h3>
                </div>
                <div className="w-full max-w-xl mt-6 space-y-4">
                  <p>
                    Angst er kroppens måde at beskytte dig på. Den opstår, når hjernen tror, at der er fare på færde, så kroppen kan reagere hurtigt og passe på dig.
                  </p>
                  <p>
                    Problemet opstår, når kroppen reagerer, selvom der ikke er nogen reel fare. Det kan fx ske i sociale situationer, ved præstationer eller i hverdagsoplevelser, der føles ubehagelige. Denne form for angst kan føles skræmmende og frustrerende, men det er vigtigt at vide, at kroppen blot forsøger at hjælpe dig.
                  </p>
                </div>
              </div>
              <Help
                title="Hvornår kan jeg hjælpe?"
                tags={helpAreas}
              />
            </div>
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/heart.jpg"
                  alt="Angst"
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

      {/* Hvordan mærkes angst + Hvorfor får man angst */}
      <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center order-2 md:order-1">
              <figure className="">
                <Image
                  src="/img/bee.jpg"
                  alt="Hvordan mærkes angst"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
            <div className="order-1 md:order-2">
              <div className="pb-8">
                <div className="mb-6 border-b-2 border-white">
                  <h3>Hvordan mærkes angst?</h3>
                </div>
                <div className="w-full max-w-xl space-y-4">
                  <p>Angst opleves forskelligt fra person til person. Du kan fx mærke:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Hjertebanken eller svedige hænder</li>
                    <li>Spændinger i kroppen eller uro</li>
                    <li>Svimmelhed eller kvalme</li>
                    <li>Følelse af at miste kontrollen</li>
                  </ul>
                  <p>
                    For nogle bliver angsten så ubehagelig, at de begynder at undgå bestemte situationer. Dette kan gøre, at angsten fylder mere og mere i hverdagen.
                  </p>
                </div>
              </div>
              <div className="pb-8">
                <div className="mb-6 border-b-2 border-white">
                  <h3>Hvorfor får man angst?</h3>
                </div>
                <div className="w-full max-w-xl space-y-4">
                  <p>
                    Angst har ofte rod i tidligere oplevelser, hvor kroppen har følt sig utryg eller truet. Selvom den oprindelige situation er ovre, kan kroppen reagere på lignende situationer igen – som om faren stadig er til stede. Det sker helt automatisk, og ofte kan man ikke selv huske den oprindelige oplevelse.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Hvordan kan terapi hjælpe */}
      <div className="bg-white py-12 md:py-24 lg:py-32">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="pb-8">
                <div className="border-b-1 border-black">
                  <h3>Hvordan kan terapi, chok-forløsning og meditation hjælpe?</h3>
                </div>
                <div className="w-full max-w-xl mt-6 space-y-4">
                  <p>
                    Gennem psykoterapi, chok-forløsning og meditation (indadvendt fokuseret opmærksomhed) kan vi:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Identificere, hvad der har sat din angst i gang</li>
                    <li>Arbejde med de gamle reaktioner i kroppen</li>
                    <li>Hjælpe dig med at slippe gamle mønstre</li>
                  </ul>
                  <p>
                    Når kroppen ikke længere er i konstant alarmberedskab, vil angsten gradvist fylde mindre, og du vil opleve mere ro, lethed, tryghed og kontrol.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/meditation.jpg"
                  alt="Behandling af angst"
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

      <CTAContent
      />
    </div>
  );
}