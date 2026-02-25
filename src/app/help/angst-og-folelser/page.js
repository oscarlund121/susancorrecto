import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import HelpPageHeader from "../../components/layout/HelpPageHeader";
import HelpPageCTA from "../../components/layout/HelpPageCTA";
import HelpGreenBox from "../../components/ui/HelpGreenBox";
import OrangeBulletList from "../../components/ui/OrangeBulletList";
import SerifHeading from "../../components/ui/SerifHeading";

export const metadata = {
  title: 'Behandling af Angst og Følelser',
  description: 'Få professionel hjælp til angst, panikangst, social angst og fobier hos psykoterapeut Susan Albertsen i Aarhus. Tryg og nænsom behandling.',
  keywords: ['angst behandling', 'panikangst terapi', 'social angst', 'fobier behandling', 'angst Aarhus', 'klaustrofobi', 'højdeskræk'],
  openGraph: {
    title: 'Behandling af Angst og Følelser | Susan Albertsen',
    description: 'Få professionel hjælp til angst, panikangst og fobier hos psykoterapeut Susan Albertsen.',
    url: 'https://www.psykoterapisusan.dk/help/angst-og-folelser',
    images: [{ url: '/img/heart.webp', width: 1200, height: 630, alt: 'Angstbehandling hos Susan Albertsen' }],
  },
  twitter: {
    title: 'Behandling af Angst og Følelser',
    description: 'Professionel hjælp til angst og følelser.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/help/angst-og-folelser',
  },
};

export default function AngstOgFolelser() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <HelpPageHeader
        title="Angst &"
        accentWord="følelser"
        text="Angst (eks. panikangst, socialangst og fobier som klaustrofobi eller højdeskræk) kan være ubehagelig og overvældende – men du behøver ikke leve med den alene. Hos mig kan du få professionel hjælp til at forstå og håndtere din angst på en tryg og nænsom måde."
      />

      {/* Hovedindhold */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
            <div className="mb-6 border-b-2 border-black">
              <h3>Hvad er angst?</h3>
            </div>
                <p>
                  Angst er kroppens måde at beskytte dig på. Den opstår, når hjernen tror, at der er fare på færde, så kroppen kan reagere hurtigt og passe på dig.
                </p>
                <p className="mt-4">
                  Problemet opstår, når kroppen reagerer, selvom der ikke er nogen reel fare. Det kan fx ske i sociale situationer, ved præstationer eller i hverdagsoplevelser, der føles ubehagelige. Denne form for angst kan føles skræmmende og frustrerende, men det er vigtigt at vide, at kroppen blot forsøger at hjælpe dig.
                </p>

                <SerifHeading before="Hvordan" accent="mærkes" after="angst?" />
                <p>
                  Angst opleves forskelligt fra person til person. Du kan fx mærke hjertebanken, svedige hænder, spændinger i kroppen, svimmelhed eller en følelse af at miste kontrollen.
                </p>
                <p className="mt-4">
                  For nogle bliver angsten så ubehagelig, at de begynder at undgå bestemte situationer. Dette kan gøre, at angsten fylder mere og mere i hverdagen.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    &quot;Angst har ofte rod i tidligere oplevelser, hvor kroppen har følt sig utryg eller truet. Selvom den oprindelige situation er ovre, kan kroppen reagere, som om faren stadig er til stede.&quot;
                  </p>
                </blockquote>

                <SerifHeading before="Hvorfor" accent="får" after="man angst?" />
                <p>
                  Angst har ofte rod i tidligere oplevelser, hvor kroppen har følt sig utryg eller truet. Selvom den oprindelige situation er ovre, kan kroppen reagere på lignende situationer igen – som om faren stadig er til stede. Det sker helt automatisk, og ofte kan man ikke selv huske den oprindelige oplevelse.
                </p>
                
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/wheat.webp"
                    alt="Angstbehandling hos Susan Albertsen"
                    width={500}
                    height={450}
                    className="w-full h-auto object-cover rounded-[32px]"
                  />
                </figure>
              </div>
            </div>

            {/* Terapi + grøn boks — centreret */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mt-20">
              <div>
                <HelpGreenBox
                  title="Hvornår kan jeg hjælpe?"
                  items={[
                    "Angst & fobier",
                    "Panikangst",
                    "Social angst",
                    "Klaustrofobi",
                    "Højdeskræk",
                    "Følelsesmæssig ustabilitet",
                  ]}
                />
              </div>

              <div>
                <div className="border-b-2 border-black mb-6">
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="space-y-6">
                  <p>
                    Gennem psykoterapi, chok-forløsning og meditation (indadvendt fokuseret opmærksomhed) kan vi:
                  </p>
                  <OrangeBulletList
                    items={[
                      "Identificere, hvad der har sat din angst i gang",
                      "Arbejde med de gamle reaktioner i kroppen",
                      "Hjælpe dig med at slippe gamle mønstre",
                    ]}
                  />
                  <p>
                    Når kroppen ikke længere er i konstant alarmberedskab, vil angsten gradvist fylde mindre, og du vil opleve mere ro, lethed, tryghed og kontrol.
                  </p>
                  <p className="font-medium">
                    Vi starter altid der, hvor du er – og arbejder i dit tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HelpPageCTA />
    </div>
  );
}