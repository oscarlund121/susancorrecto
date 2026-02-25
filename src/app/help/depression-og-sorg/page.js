import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import HelpPageHeader from "../../components/layout/HelpPageHeader";
import HelpPageCTA from "../../components/layout/HelpPageCTA";
import HelpGreenBox from "../../components/ui/HelpGreenBox";
import OrangeBulletList from "../../components/ui/OrangeBulletList";
import SerifHeading from "../../components/ui/SerifHeading";

export const metadata = {
  title: 'Behandling af Depression og Sorg',
  description: 'Få professionel hjælp til depression, sorg og tab hos psykoterapeut Susan Albertsen i Aarhus. Tryg og nænsom behandling i dit tempo.',
  keywords: ['depression behandling', 'sorg terapi', 'tab terapi', 'depression Aarhus', 'sorgbearbejdning', 'psykoterapi depression'],
  openGraph: {
    title: 'Behandling af Depression og Sorg | Susan Albertsen',
    description: 'Få professionel hjælp til depression, sorg og tab hos psykoterapeut Susan Albertsen.',
    url: 'https://www.psykoterapisusan.dk/help/depression-og-sorg',
    images: [{ url: '/img/purple-flower.webp', width: 1200, height: 630, alt: 'Behandling af depression og sorg hos Susan Albertsen' }],
  },
  twitter: {
    title: 'Behandling af Depression og Sorg',
    description: 'Professionel hjælp til depression, sorg og tab.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/help/depression-og-sorg',
  },
};

export default function DepressionOgSorg() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <HelpPageHeader
        title="Depression &"
        accentWord="sorg"
        text="Depression og sorg kan føles overvældende og ensomt – men du behøver ikke bære det alene. Hos mig kan du få professionel hjælp til at forstå og bearbejde dine følelser i et trygt og nænsomt rum."
      />

      {/* Hovedindhold */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <div className="mb-6 border-b-2 border-black">
                  <h3>Depression – når livet føles tungt</h3>
                </div>
                <p>
                  Der kan være mange grunde til, at man oplever depression. Det kan være, at man over længere tid har været presset på flere områder af livet, eller at man gentagne gange har ladet sig blive overhørt eller ikke fået sagt fra, så de uforløste følelser hober sig op.
                </p>
                <p className="mt-4">
                  Depression kan vise sig som tristhed, tomhed, manglende energi, tab af interesse for ting man ellers holder af, søvn- eller appetitforstyrrelser og negative tankemønstre. For nogle kan det føles, som om livet har mistet mening.
                </p>

                <SerifHeading before="Hvordan" accent="mærkes" after="depression?" />
                <p>
                  Mange oplever vedvarende tristhed, tomhed eller en følelse af at være afkoblet fra sig selv og andre. Der kan være søvnforstyrrelser, appetitændringer, koncentrationsbesvær og en dyb træthed, som hvile ikke kan løsne op for.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    &quot;Depression har ofte rod i uforløste oplevelser, som psyken til sidst ikke kan bære alene. Når følelserne får plads, kan kroppen og sindet begynde at finde tilbage til balance.&quot;
                  </p>
                </blockquote>

                <SerifHeading before="Hvad er" accent="sorg" after="?" />
                <p>
                  Sorg er en naturlig og nødvendig reaktion, når vi mister noget eller nogen, der har betydning i vores liv. Det kan være tab af en elsket, et forhold, et job, helbred eller en vigtig livssituation. Sorg kan også opstå efter en skilsmisse, et nært venskab der ender, eller ændringer i helbredet.
                </p>
                <p className="mt-4">
                  Fælles for alle disse tab er, at noget i dit liv aldrig bliver det samme igen. Sorgen kommer i bølger – med både stærke følelser og perioder med tomhed eller apati.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/purple-flower.webp"
                    alt="Depression og sorg behandling hos Susan Albertsen"
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
                    "Depression & tristhed",
                    "Sorg & tab",
                    "Livskriser",
                    "Udmattelse & stress",
                    "Tomhed & meningsløshed",
                    "Uforløste følelser",
                  ]}
                />
              </div>

              <div>
                <div className="border-b-2 border-black mb-6">
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="space-y-6">
                  <p>
                    Gennem psykoterapi, chok-forløsning og meditation arbejder vi med de underliggende årsager til depression og sorg. Sammen kan vi:
                  </p>
                  <OrangeBulletList
                    items={[
                      "Forstå og bearbejde uforløste følelser og oplevelser",
                      "Genskabe kontakten til dig selv og dine behov",
                      "Finde små, konkrete skridt mod mere overskud og mening",
                    ]}
                  />
                  <p>
                    Du behøver ikke have alle svarene på forhånd. Vi starter der, hvor du er – og arbejder i dit tempo mod mere indre ro, lethed og livskvalitet.
                  </p>
                  <p className="font-medium">
                    Jeg støtter dig i at finde vejen – i dit eget tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HelpPageCTA
        text="Du behøver ikke have alle svarene på forhånd. Kontakt mig for en uforpligtende samtale om, hvordan terapi kan hjælpe dig med at finde ro og mening igen."
      />
    </div>
  );
}
