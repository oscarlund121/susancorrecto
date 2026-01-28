import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Button from "../../components/ui/Button";

export default function AngstOgFolelser() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-16">
          <HeaderSection
            title="Angst og følelser"
            text="Angst kan være ubehagelig og overvældende – men du behøver ikke leve med den alene. Hos mig kan du få professionel hjælp til at forstå og håndtere din angst på en tryg og nænsom måde."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
        
        {/* Angst sektion */}
        <div className="bg-white py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div>
                  <div className="border-b-1 border-black mb-6">
                    <h2>Angst</h2>
                  </div>
                  <div className="sm:w-xl w-sm space-y-4">
                    <p className="font-semibold">Hvad er angst?</p>
                    <p>
                      Angst er kroppens måde at beskytte dig på. Den opstår, når hjernen tror, at der er fare på færde, så kroppen kan reagere hurtigt og passe på dig. Problemet opstår, når kroppen reagerer, selvom der ikke er nogen reel fare. Det kan fx ske i sociale situationer, ved præstationer eller i hverdagsoplevelser, der føles ubehagelige. Denne form for angst kan føles skræmmende og frustrerende, men det er vigtigt at vide, at kroppen blot forsøger at hjælpe dig.
                    </p>
                    
                    <p className="font-semibold mt-6">Hvordan mærkes angst?</p>
                    <p>
                      Angst opleves forskelligt fra person til person. Du kan fx mærke:
                    </p>
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

        {/* Hvorfor og hvordan sektion */}
        <div className="bg-[#DBE1F8]/30 py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center order-2 md:order-1">
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
              <div className="order-1 md:order-2">
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold mb-2">Hvorfor får man angst?</p>
                    <p className="sm:w-xl w-sm">
                      Angst har ofte rod i tidligere oplevelser, hvor kroppen har følt sig utryg eller truet. Selvom den oprindelige situation er ovre, kan kroppen reagere på lignende situationer igen – som om faren stadig er til stede. Det sker helt automatisk, og ofte kan man ikke selv huske den oprindelige oplevelse.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Hvordan kan terapi, chok-forløsning og meditation hjælpe?</p>
                    <p className="sm:w-xl w-sm mb-2">
                      Gennem psykoterapi, chok-forløsning og meditation (indadvendt fokuseret opmærksomhed) kan vi:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 sm:w-xl w-sm">
                      <li>Identificere, hvad der har sat din angst i gang</li>
                      <li>Arbejde med de gamle reaktioner i kroppen</li>
                      <li>Hjælpe dig med at slippe gamle mønstre</li>
                    </ul>
                    <p className="sm:w-xl w-sm mt-2">
                      Når kroppen ikke længere er i konstant alarmberedskab, vil angsten gradvist fylde mindre, og du vil opleve mere ro, lethed, tryghed og kontrol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Depression sektion */}
        <div className="bg-white py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div>
                  <div className="border-b-1 border-black mb-6">
                    <h2>Depression – når livet føles tungt</h2>
                  </div>
                  <div className="sm:w-xl w-sm space-y-4">
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
              </div>
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/determind.jpg"
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

        {/* Sorg sektion */}
        <div className="bg-[#DBE1F8]/30 py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center order-2 md:order-1">
                <figure className="">
                  <Image
                    src="/img/emdr-1.jpg"
                    alt="Sorg"
                    width={500}
                    height={300}
                    className="w-[450px] h-auto object-cover"
                  />
                </figure>
              </div>
              <div className="order-1 md:order-2">
                <div>
                  <div className="border-b-1 border-black mb-6">
                    <h2>Sorg – en naturlig reaktion på tab</h2>
                  </div>
                  <div className="sm:w-xl w-sm space-y-4">
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

        {/* CTA sektion */}
        <div className="bg-[#367067] py-32 text-white">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/heart.jpg"
                    alt="Kontakt"
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
                      Vi starter altid med en indledende samtale, hvor vi afklarer, hvad der fylder mest for dig, og hvordan du ønsker, at dit liv skal se ud fremover. Derefter arbejder vi struktureret med de områder, hvor du ønsker forandring.
                    </p>
                    <br />
                    <p>
                      Kontakt mig for en uforpligtende samtale om, hvordan jeg kan hjælpe dig med at finde ro, lethed og mening i livet igen.
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
    </div>
  );
}
