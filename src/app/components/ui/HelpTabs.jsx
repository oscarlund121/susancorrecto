"use client";
import { useState } from "react";
import Image from "next/image";
import CategorySection from "../layout/CategorySection";
import Button from "./Button";

const tabs = [
  { id: "unge", label: "Unge & Studerende" },
  { id: "angst", label: "Angst & følelser" },
  { id: "depression", label: "Depression & sorg" },
  { id: "relationer", label: "Relationer & familieliv" },
];

const categories = [
  {
    id: 1,
    title: "Unge & Studerende",
    description: "At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål eller lære på, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp. Når du egne evner eller udfordringer i privatlivet skaber uro og usikkerhed, Her får du hjælp til at finde ro, styrke dit selvværd og navigere i de mange krav, du møder.",
    tags: ["Økonomi", "Skolefeber", "Præstationspres", "Lavt selvværd", "Angst eller fobier", "Følelse af at være forkert"]
  },
  {
    id: 2,
    title: "Stress & Udmattelse",
    description: "Stress kan snige sig ind i hverdagen og tømme dig for energi. Du kan føle dig fanget i en konstant alarmtilstand, hvor søvn, koncentration og livglæde er svære at finde. Sammen finder vi veje til at skabe balance, genopbygge dit overskud og håndtere de krav, du står overfor – både indre og ydre.",
    tags: ["Arbejdsrelateret stress", "Søvnproblemer", "Udbrændtheds overveiske", "Præstationsangst", "Følelsen af at være overbelastet", "Belastethed"]
  },
  {
    id: 3,
    title: "Følelser & Angst",
    description: "At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål eller lære på, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp. Når du egne evner eller udfordringer i privatlivet skaber uro og usikkerhed, Her får du hjælp til at finde ro, styrke dit selvværd og navigere i de mange krav, du møder.",
    tags: ["Angst & fobier", "Panikangst & sociale angste", "Vrede & frustration", "Tristhed & depression", "Følelsesmæssig ustabilitet", "Sorg & tab"]
  },
  {
    id: 4,
    title: "Selvværd & Identitet",
    description: "Stress kan snige sig ind i hverdagen og tømme dig for energi. Du kan føle dig fanget i en konstant alarmtilstand, hvor søvn, koncentration og livglæde er svære at finde. Sammen finder vi veje til at skabe balance, genopbygge dit overskud og håndtere de krav, du står overfor – både indre og ydre.",
    tags: ["Lavt selvværd & selvtillid", "Følelse af at være forkert", "Negative mønstre", "Sensitivitet & overfølsomhed", "Selvkritik & perfektionisme", "Usikkerhed & selvtræk"]
  },
  {
    id: 5,
    title: "Relationer & Familie",
    description: "At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål eller lære på, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp. Når du egne evner eller udfordringer i privatlivet skaber uro og usikkerhed, Her får du hjælp til at finde ro, styrke dit selvværd og navigere i de mange krav, du møder.",
    tags: ["Kommunikationsproblemer", "Forældreredjetnina", "Social angst & ensomhed", "Skilsmisse & separation", "Parforhold", "Familiekonflikter & uro i familien"]
  },
  {
    id: 6,
    title: "Traumer & Kriser",
    description: "Stress kan snige sig ind i hverdagen og tømme dig for energi. Du kan føle dig fanget i en konstant alarmtilstand, hvor søvn, koncentration og livglæde er svære at finde. Sammen finder vi veje til at skabe balance, genopbygge dit overskud og håndtere de krav, du står overfor – både indre og ydre.",
    tags: ["ADHD & neuropsykiatriske udfordringer", "Misbrug & afhængighed", "Chok & akutte kriser", "Uforklarlige fysiske reaktioner", "Traumer & PTSD"]
  }
];

const AngstContent = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
      <div className="flex justify-center items-center">
        <figure>
          <Image src="/img/heart.jpg" alt="Angst" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
      <div className="flex justify-center items-center order-2 md:order-1">
        <figure>
          <Image src="/img/bee.jpg" alt="Hvordan mærkes angst" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
      <div className="order-1 md:order-2">
        <div className="border-b-1 border-black">
          <h3>Hvordan mærkes angst?</h3>
        </div>
        <div className="w-full max-w-xl mt-6 space-y-4">
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
        <div className="mt-10">
          <div className="border-b-1 border-black">
            <h3>Hvorfor får man angst?</h3>
          </div>
          <div className="w-full max-w-xl mt-6 space-y-4">
            <p>
              Angst har ofte rod i tidligere oplevelser, hvor kroppen har følt sig utryg eller truet. Selvom den oprindelige situation er ovre, kan kroppen reagere på lignende situationer igen – som om faren stadig er til stede. Det sker helt automatisk, og ofte kan man ikke selv huske den oprindelige oplevelse.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
      <div>
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
      <div className="flex justify-center items-center">
        <figure>
          <Image src="/img/meditation.jpg" alt="Behandling af angst" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
    </div>
  </>
);

const DepressionContent = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
      <div className="flex justify-center items-center">
        <figure>
          <Image src="/img/meditation.jpg" alt="Depression" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
      <div className="flex justify-center items-center order-2 md:order-1">
        <figure>
          <Image src="/img/purple-flower.jpg" alt="Sorg" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
      <div className="order-1 md:order-2">
        <div className="border-b-1 border-black">
          <h3>Sorg – en naturlig reaktion på tab</h3>
        </div>
        <div className="w-full max-w-xl mt-6 space-y-4">
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
      <div>
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
      <div className="flex justify-center items-center">
        <figure>
          <Image src="/img/many-flowers.jpg" alt="Terapi for depression og sorg" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
    </div>
  </>
);

const RelationerContent = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="border-b-1 border-black">
          <h3>Jeg tilbyder støtte inden for:</h3>
        </div>
        <div className="w-full max-w-xl mt-6 space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Kommunikationsproblemer</h4>
            <p>Mange familier og par oplever, at det er svært at blive forstået eller at forstå hinanden. Jeg hjælper med at skabe klarhed, øge gensidig forståelse og finde nye måder at kommunikere på, så relationerne kan blive mere trygge og nærværende.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Forældrevejledning</h4>
            <p>Forældreskab kan være udfordrende, og der kan opstå usikkerhed, konflikter eller bekymring for børnene. Jeg støtter forældre i at finde ro, overskud, eftertanke og konkrete redskaber til at navigere i familielivet, samtidig med at relationen til barnet styrkes.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Social angst & ensomhed</h4>
            <p>Følelser af ensomhed eller social angst kan gøre det svært at indgå i relationer. Jeg hjælper dig med at forstå, hvad der ligger bag disse følelser, og støtter dig i at opbygge tryghed, selvtillid og bedre sociale forbindelser.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Familiekonflikter & uro</h4>
            <p>Uenigheder og spændinger i familien kan skabe stress og afstand mellem familiemedlemmer. Jeg hjælper med at håndtere konflikter, forstå dynamikker og skabe mere tryghed og samarbejde i familien.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <figure>
          <Image src="/img/heart.jpg" alt="Relationer og familieliv" width={500} height={300} className="w-[450px] h-auto object-cover" />
        </figure>
      </div>
    </div>
  </>
);

const HelpTabs = () => {
  const [activeTab, setActiveTab] = useState("unge");

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex flex-row flex-wrap gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-5 border-2 border-[#367067] rounded-full transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#367067] text-white"
                : "bg-transparent text-[#367067] hover:bg-[#367067]/10"
            }`}
          >
            <h5 className={activeTab === tab.id ? "text-white" : "text-[#367067]"}>
              {tab.label}
            </h5>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "unge" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <CategorySection
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  tags={category.tags}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "angst" && <AngstContent />}
        {activeTab === "depression" && <DepressionContent />}
        {activeTab === "relationer" && <RelationerContent />}
      </div>

      <div className="flex justify-center my-8">
        <Button variant="secondary">Book en samtale</Button>
      </div>
    </div>
  );
};

export default HelpTabs;
