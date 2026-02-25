import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import CategorySection from "../components/layout/CategorySection";
import Button from "../components/ui/Button";
import ServiceLinks from "../components/ui/ServiceLinks";

export const metadata = {
  title: 'Hjælp',
  description: 'Få hjælp til stress, angst, lavt selvværd, relationer, traumer og kriser. Psykoterapi for unge, studerende, par og familier i Aarhus.',
  keywords: ['hjælp til angst', 'hjælp til stress', 'lavt selvværd terapi', 'relationsudfordringer', 'traumer behandling', 'terapi for unge'],
  openGraph: {
    title: 'Hjælp | Psykoterapeut Susan Albertsen',
    description: 'Få hjælp til stress, angst, lavt selvværd, relationer og traumer hos psykoterapeut Susan Albertsen.',
    url: 'https://www.psykoterapisusan.dk/help',
  },
  twitter: {
    title: 'Hjælp',
    description: 'Få hjælp til stress, angst, lavt selvværd og relationer.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/help',
  },
};

const categories = [
  {
    id: 1,
    title: "Unge & studerende",
    description: "At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål eller lære på, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp. Når du egne evner eller udfordringer i privatlivet skaber uro og usikkerhed, Her får du hjælp til at finde ro, styrke dit selvværd og navigere i de mange krav, du møder.",
    tags: ["Økonomi", "Skolefeber", "Præstationspres", "Lavt selvværd", "Angst eller fobier", "Følelse af at være forkert"]
  },
  {
    id: 2,
    title: "Stress & udmattelse",
    description: "Stress kan snige sig ind i hverdagen og tømme dig for energi. Du kan føle dig fanget i en konstant alarmtilstand, hvor søvn, koncentration og livglæde er svære at finde. Sammen finder vi veje til at skabe balance, genopbygge dit overskud og håndtere de krav, du står overfor – både indre og ydre.",
    tags: ["Arbejdsrelateret stress", "Søvnproblemer", "Udbrændtheds overveiske", "Præstationsangst", "Følelsen af at være overbelastet", "Belastethed"]
  },
  {
    id: 3,
    title: "Følelser & angst",
    description: "Angst og fobier kan begrænse hverdagen og skabe utryghed – herunder panikangst og social angst. Vrede, frustration, tristhed og depressive følelser kan være tegn på indre belastning, ligesom følelsesmæssig ustabilitet kan gøre det svært at finde fodfæste. Sorg og tab kan ramme dybt og påvirke både krop og sind. I terapien er der plads til alle følelser – med fokus på forståelse, regulering og at skabe mere ro og balance.",
    tags: ["Angst & fobier", "Panikangst & sociale angste", "Vrede & frustration", "Tristhed & depression", "Følelsesmæssig ustabilitet", "Sorg & tab"]
  },
  {
    id: 4,
    title: "Selvværd & identitet",
    description: "Mange kæmper med lavt selvværd og manglende selvtillid, en følelse af at være forkert eller ikke god nok. Negative mønstre, stærk selvkritik og perfektionisme kan fylde og skabe usikkerhed i hverdagen. For nogle viser det sig som sensitivitet eller overfølsomhed, for andre som selvtilbagetrækning og tvivl på egne evner. I terapien arbejder vi med at styrke dit selvværd, skabe større selvforståelse og hjælpe dig til at stå mere trygt i dig selv.",
    tags: ["Lavt selvværd & selvtillid", "Følelse af at være forkert", "Negative mønstre", "Sensitivitet & overfølsomhed", "Selvkritik & perfektionisme", "Usikkerhed & selvtræk"]
  },
  {
    id: 5,
    title: "Relationer & familie",
    description: "Familie og relationer er en vigtig del af vores liv. De kan være en stor støtte – men også en kilde til udfordringer og smerte. Når vi ikke føler os hørt, forstået – eller selv har svært ved at forstå den anden – kan det skabe afstand, spændinger og fastlåste mønstre. Uenigheder og følelsesmæssig belastning kan påvirke både den enkelte og fællesskabet. I terapien arbejder vi med at skabe større forståelse, bedre kommunikation og nye måder at være sammen på – med fokus på tryghed, respekt og nærvær.",
    tags: ["Kommunikationsproblemer", "Forældrerådgivning", "Social angst & ensomhed", "Parforhold", "Familiekonflikter & uro i familien"]
  },
  {
    id: 6,
    title: "Traumer & kriser",
    description: "Her tilbydes støtte ved ADHD og andre kognitive og opmærksomhedsmæssige vanskeligheder, hvor hverdagen kan opleves overvældende og uforudsigelig. Der er også mulighed for hjælp i forbindelse med misbrug og afhængighed samt ved akutte kriser og traumatiske oplevelser. Nogle mærker uforklarlige fysiske reaktioner, som kan være kroppens måde at reagere på belastning og svære erfaringer. Samtalerne foregår i et trygt rum med fokus på forståelse, stabilisering og nye veje frem.",
    tags: ["ADHD & neuropsykiatriske udfordringer", "Misbrug & afhængighed", "Chok & akutte kriser", "Uforklarlige fysiske reaktioner", "Traumer"]
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

      <div className="bg-[#F8F8F8] py-12 md:py-16">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="mb-12">
            <ServiceLinks />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {categories.map((category, index) => (
              <CategorySection 
                key={category.id}
                title={category.title}
                description={category.description}
                tags={category.tags}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
          <div className="flex justify-center my-8 md:mt-24">
            <Button variant="primary">Book en samtale</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
