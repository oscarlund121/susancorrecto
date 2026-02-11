import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";
import BackToHelp from "../../components/ui/BackToHelp";

export const metadata = {
  title: 'Behandling af Depression og Sorg',
  description: 'Få professionel hjælp til depression, sorg og tab hos psykoterapeut Susan Albertsen i Aarhus. Tryg og nænsom behandling i dit tempo.',
  keywords: ['depression behandling', 'sorg terapi', 'tab terapi', 'depression Aarhus', 'sorgbearbejdning', 'psykoterapi depression'],
  openGraph: {
    title: 'Behandling af Depression og Sorg | Susan Albertsen',
    description: 'Få professionel hjælp til depression, sorg og tab hos psykoterapeut Susan Albertsen.',
    url: 'https://psykoterapisusan.dk/help/depression-og-sorg',
    images: [{ url: '/img/purple-flower.jpg', width: 1200, height: 630, alt: 'Behandling af depression og sorg hos Susan Albertsen' }],
  },
  twitter: {
    title: 'Behandling af Depression og Sorg',
    description: 'Professionel hjælp til depression, sorg og tab.',
  },
  alternates: {
    canonical: 'https://psykoterapisusan.dk/help/depression-og-sorg',
  },
};

const helpAreas = [
  "Depression & tristhed",
  "Sorg & tab",
  "Livskriser",
  "Udmattelse & stress",
  "Tomhed & meningsløshed",
  "Uforløste følelser"
];

export default function DepressionOgSorg() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-8">
          <HeaderSection
            title="Depression & sorg"
            text="Depression og sorg kan føles overvældende og ensomt – men du behøver ikke bære det alene. Hos mig kan du få professionel hjælp til at forstå og bearbejde dine følelser i et trygt og nænsomt rum."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>

      <div className="pt-8 md:pt-12">
        <BackToHelp />
      </div>
      
      {/* Depression sektion */}
      <div className="bg-white pb-12 md:pb-24 lg:pb-32 pt-4 md:pt-8">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Depression – når livet føles tungt</h3>
                </div>
                <div className="w-full max-w-xl mt-6 space-y-4">
                  <p>
                    Der kan være mange grunde til, at man oplever depression. Det kan være, at man over længere tid har været presset på flere områder af livet, eller at man gentagne gange har ladet sig blive overhørt eller ikke fået sagt fra, så de uforløste følelser hober sig op. Ofte bærer man også rundt på gamle oplevelser eller traumer, som har sat sig dybe spor, og som psyken til sidst ikke kan ignorere.
                  </p>
                  <p>
                    Depression kan vise sig som tristhed, tomhed, manglende energi, tab af interesse for ting man ellers holder af, søvn- eller appetitforstyrrelser og negative tankemønstre. For nogle kan det føles, som om livet har mistet mening, og dagene kører af sted uden retning eller glæde.
                  </p>
                  <p>
                    Jeg støtter dig i at forstå, hvad der ligger bag de depressive følelser, og hjælper dig med at bearbejde uforløste oplevelser. Sammen finder vi små, konkrete skridt mod mere overskud, indre ro og mening i hverdagen – altid i dit tempo og der, hvor du er.
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
                  src="/img/meditation.jpg"
                  alt="Depression"
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

      {/* Sorg sektion */}
      <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center order-2 md:order-1">
              <figure className="">
                <Image
                  src="/img/purple-flower.jpg"
                  alt="Sorg"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
            <div className="order-1 md:order-2">
              <div className="pb-8">
                <div className="mb-6 border-b-2 border-white">
                  <h3>Sorg – en naturlig reaktion på tab</h3>
                </div>
                <div className="w-full max-w-xl space-y-4">
                  <p>
                    Sorg er en naturlig og nødvendig reaktion, når vi mister noget eller nogen, der har betydning i vores liv. Det kan være tab af en elsket, et forhold, et job, helbred eller en vigtig livssituation.
                  </p>
                  <p>
                    Men sorg kan også opstå efter andre typer af tab: en skilsmisse, et nært venskab, dit barn flytter hjemmefra, tab af egen identitet, tab af job eller ændringer i helbredet i forbindelse med sygdom.
                  </p>
                  <p>
                    Fælles for alle disse tab er, at noget i dit liv aldrig bliver det samme igen. Sorg kan vise sig på mange måder: tristhed, tomhed, savn, vrede, skyldfølelse, fysisk udmattelse eller søvn- og appetitforstyrrelser. Det er normalt, at sorgen kommer i bølger, med både stærke følelser og perioder med tomhed eller apati.
                  </p>
                  <p>
                    Jeg tilbyder støtte til at navigere i sorgen, bearbejde følelserne og finde måder at leve videre på, uden at miste kontakten til det, du har mistet. Sammen skaber vi et trygt rum, hvor du kan mærke, udtrykke og forstå dine følelser.
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
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="w-full max-w-xl mt-6 space-y-4">
                  <p>
                    Gennem psykoterapi, chok-forløsning og meditation arbejder vi med de underliggende årsager til depression og sorg. Sammen kan vi:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Forstå og bearbejde uforløste følelser og oplevelser</li>
                    <li>Genskabe kontakten til dig selv og dine behov</li>
                    <li>Finde små, konkrete skridt mod mere overskud og mening</li>
                  </ul>
                  <p>
                    Du behøver ikke have alle svarene på forhånd. Vi starter der, hvor du er – og arbejder i dit tempo mod mere indre ro, lethed og livskvalitet.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/many-flowers.jpg"
                  alt="Terapi for depression og sorg"
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
