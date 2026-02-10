import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import CategorySection from "../components/layout/CategorySection";
import Button from "../components/ui/Button";

export const metadata = {
  title: 'Hjælp',
  description: 'Få hjælp til stress, angst, lavt selvværd, relationer, traumer og kriser. Psykoterapi for unge, studerende, par og familier i Aarhus.',
  keywords: ['hjælp til angst', 'hjælp til stress', 'lavt selvværd terapi', 'relationsudfordringer', 'traumer behandling', 'terapi for unge'],
  openGraph: {
    title: 'Hjælp | Psykoterapeut Susan Albertsen',
    description: 'Få hjælp til stress, angst, lavt selvværd, relationer og traumer hos psykoterapeut Susan Albertsen.',
    url: 'https://psykoterapisusan.dk/help',
  },
  twitter: {
    title: 'Hjælp',
    description: 'Få hjælp til stress, angst, lavt selvværd og relationer.',
  },
  alternates: {
    canonical: 'https://psykoterapisusan.dk/help',
  },
};

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

export default function Help() {
  return (
    <div>
      <Navigation />
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8">
        <div className="mb-8">
          <HeaderSection
            title="Hvad jeg kan hjælpe dig med"
            text="Vi møder alle livets udfordringer forskelligt. Hos mig får du et trygt rum, hvor vi sammen finder frem til løsninger, der passer til dig – uanset om det handler om angst, stress, lavt selvværd eller svære relationer."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>

      <div className="bg-white py-12 md:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
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
          <div className="flex justify-center my-8">
            <Button variant="secondary">Book en samtale</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
