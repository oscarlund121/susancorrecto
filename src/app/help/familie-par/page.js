import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";
import BackToHelp from "../../components/ui/BackToHelp";

export const metadata = {
  title: 'Par- og Familieterapi',
  description: 'Parterapi og familieterapi i Aarhus. Få hjælp til kommunikationsproblemer, konflikter, skilsmisse og forældreskab hos psykoterapeut Susan Albertsen.',
  keywords: ['parterapi Aarhus', 'familieterapi', 'parforhold hjælp', 'kommunikationsproblemer', 'skilsmisse terapi', 'forældreterapi'],
  openGraph: {
    title: 'Par- og Familieterapi | Susan Albertsen',
    description: 'Parterapi og familieterapi i Aarhus. Hjælp til relationer og kommunikation.',
    url: 'https://psykoterapisusan.dk/help/familie-par',
    images: [{ url: '/img/heart.jpg', width: 1200, height: 630, alt: 'Par- og familieterapi' }],
  },
  twitter: {
    title: 'Par- og Familieterapi',
    description: 'Parterapi og familieterapi hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://psykoterapisusan.dk/help/familie-par',
  },
};

const helpAreas = [
  "Konflikter & misforståelser",
  "Fastlåst kommunikation",
  "Skilsmisse, sygdom & tab",
  "Børn & unges trivsel"
];

export default function FamiliePar() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-16">
          <HeaderSection
            title="Relationer & familieliv"
            text="Relationer kan være både kilder til glæde og til udfordringer. Mange oplever konflikter, kommunikationsproblemer eller uro i familien, og det kan være svært at finde ro og forståelse i hverdagen."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>

      <div className="pt-8 md:pt-12">
        <BackToHelp />
      </div>

        <div className="bg-white pb-12 md:pb-24 lg:pb-32 pt-4 md:pt-8">
          <div className="content-max">
            <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div>
                  <div className="border-b-1 border-black">
                    <h3>Jeg tilbyder støtte inden for:</h3>
                  </div>
                  <div className="w-full max-w-xl mt-6 space-y-6">
                    <div>
                      <h5 className="font-semibold mb-2">Kommunikationsproblemer</h5>
                      <p>Mange familier og par oplever, at det er svært at blive forstået eller at forstå hinanden. Jeg hjælper med at skabe klarhed, øge gensidig forståelse og finde nye måder at kommunikere på, så relationerne kan blive mere trygge og nærværende.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Forældrevejledning</h5>
                      <p>Forældreskab kan være udfordrende, og der kan opstå usikkerhed, konflikter eller bekymring for børnene. Jeg støtter forældre i at finde ro, overskud, eftertanke og konkrete redskaber til at navigere i familielivet, samtidig med at relationen til barnet styrkes.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Social angst & ensomhed</h5>
                      <p>Følelser af ensomhed eller social angst kan gøre det svært at indgå i relationer. Jeg hjælper dig med at forstå, hvad der ligger bag disse følelser, og støtter dig i at opbygge tryghed, selvtillid og bedre sociale forbindelser.</p>
                    </div>
                   
                    <div>
                      <h5 className="font-semibold mb-2">Familiekonflikter & uro</h5>
                      <p>Uenigheder og spændinger i familien kan skabe stress og afstand mellem familiemedlemmer. Jeg hjælper med at håndtere konflikter, forstå dynamikker og skabe mere tryghed og samarbejde i familien.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/heart.jpg"
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