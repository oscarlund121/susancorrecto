import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

export const metadata = {
  title: 'Psykoterapi',
  description: 'Essentiel Integrativ Psykoterapi kombinerer flere terapeutiske metoder for helhedsorienteret behandling. Få hjælp til angst, stress, traumer og personlig udvikling.',
  keywords: ['integrativ psykoterapi', 'helhedsorienteret terapi', 'psykoterapi Aarhus', 'personlig udvikling', 'krops og sind terapi'],
  openGraph: {
    title: 'Psykoterapi | Susan Albertsen',
    description: 'Helhedsorienteret psykoterapi der kombinerer flere terapeutiske metoder.',
    url: 'https://psykoterapisusan.dk/ydelser/essentiel-integrativ-psykoterapi',
    images: [{ url: '/img/bee.jpg', width: 1200, height: 630, alt: 'Integrativ psykoterapi' }],
  },
  twitter: {
    title: 'Psykoterapi',
    description: 'Helhedsorienteret psykoterapi hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://psykoterapisusan.dk/ydelser/essentiel-integrativ-psykoterapi',
  },
};

const helpAreas = [
  "Angst & bekymringer",
  "Stress & udbrændthed",
  "Relationsudfordringer",
  "Selvværd & selvtillid",
  "Traumer & kriser",
  "Personlig udvikling",
  "Livsovergange",
  "Sorg & tab"
];

export default function Essentiel() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-8">
          <HeaderSection
            title="Psykoterapi"
            text="Psykoterapi kombinerer forskellige krops- og terapeutiske metoder, så behandlingen tilpasses dig og dine behov. Den ser hele mennesket –  kroppen, dine tanker og følelser – og arbejder med at skabe indre ro, balance og tryghed."

            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>
      <div className="bg-white py-12 md:py-24 lg:py-32">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Hvad er Essentiel Integrativ Psykoterapi?</h3>
                </div>
                <p className="w-full max-w-xl mt-6">
                  Essentiel Integrativ Psykoterapi er en helhedsorienteret tilgang, hvor vi kombinerer forskellige evidensbaserede metoder. Det betyder, at vi kan arbejde fleksibelt  med det, du har brug for, uanset om det handler om gamle mønstre, nye udfordringer eller akutte livskriser. Målet er at styrke både din indre ro og din evne til at handle på det, der er vigtigt for dig.
                </p>
              </div>
              <Help
                title="Hvornår kan metoden hjælpe?"
                tags={helpAreas}
              />
            </div>
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/bee.jpg"
                  alt="Beskrivelse af billedet"
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
      <CTAContent />
    </div>
  );
}