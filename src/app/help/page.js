import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import HelpTabs from "../components/ui/HelpTabs";

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

      <div className="bg-white py-12 md:py-12">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <HelpTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
