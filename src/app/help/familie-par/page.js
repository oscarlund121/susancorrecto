import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import HelpPageHeader from "../../components/layout/HelpPageHeader";
import HelpPageCTA from "../../components/layout/HelpPageCTA";
import HelpGreenBox from "../../components/ui/HelpGreenBox";
import OrangeBulletList from "../../components/ui/OrangeBulletList";
import SerifHeading from "../../components/ui/SerifHeading";

export const metadata = {
  title: 'Par- og Familieterapi',
  description: 'Parterapi og familieterapi i Aarhus. Få hjælp til kommunikationsproblemer, konflikter, skilsmisse og forældreskab hos psykoterapeut Susan Albertsen.',
  keywords: ['parterapi Aarhus', 'familieterapi', 'parforhold hjælp', 'kommunikationsproblemer', 'skilsmisse terapi', 'forældreterapi'],
  openGraph: {
    title: 'Par- og Familieterapi | Susan Albertsen',
    description: 'Parterapi og familieterapi i Aarhus. Hjælp til relationer og kommunikation.',
    url: 'https://www.psykoterapisusan.dk/help/familie-par',
    images: [{ url: '/img/heart.webp', width: 1200, height: 630, alt: 'Par- og familieterapi' }],
  },
  twitter: {
    title: 'Par- og Familieterapi',
    description: 'Parterapi og familieterapi hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/help/familie-par',
  },
};

export default function FamiliePar() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <HelpPageHeader
        title="Relationer &"
        accentWord="familieliv"
        text="Relationer kan være både kilder til glæde og til udfordringer. Mange oplever konflikter, kommunikationsproblemer eller uro i familien, og det kan være svært at finde ro og forståelse i hverdagen."
      />

      {/* Hovedindhold */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <div className="mb-6 border-b-2 border-black">
                  <h3>Jeg tilbyder støtte inden for:</h3>
                </div>

                <SerifHeading accent="Kommunikationsproblemer" />
                <p>
                  Mange familier og par oplever, at det er svært at blive forstået eller at forstå hinanden. Jeg hjælper med at skabe klarhed, øge gensidig forståelse og finde nye måder at kommunikere på, så relationerne kan blive mere trygge og nærværende.
                </p>

                <SerifHeading accent="Forældrevejledning" />
                <p>
                  Forældreskab kan være udfordrende, og der kan opstå usikkerhed, konflikter eller bekymring for børnene. Jeg støtter forældre i at finde ro, overskud, eftertanke og konkrete redskaber til at navigere i familielivet.
                </p>

                <SerifHeading before="Social angst &" accent="ensomhed" />
                <p>
                  Følelser af ensomhed eller social angst kan gøre det svært at indgå i relationer. Jeg hjælper dig med at forstå, hvad der ligger bag disse følelser, og støtter dig i at opbygge tryghed, selvtillid og bedre sociale forbindelser.
                </p>

                <SerifHeading before="Familiekonflikter &" accent="uro" />
                <p>
                  Uenigheder og spændinger i familien kan skabe stress og afstand mellem familiemedlemmer. Jeg hjælper med at håndtere konflikter, forstå dynamikker og skabe mere tryghed og samarbejde i familien.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/heart.webp"
                    alt="Par- og familieterapi hos Susan Albertsen"
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
                    "Konflikter & misforståelser",
                    "Fastlåst kommunikation",
                    "Skilsmisse, sygdom & tab",
                    "Børn & unges trivsel",
                  ]}
                />
              </div>

              <div>
                <div className="border-b-2 border-black mb-6">
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="space-y-6">
                  <p>
                    Gennem psykoterapi kan vi arbejde med de mønstre og dynamikker, der skaber uro i jeres relationer. Sammen kan vi:
                  </p>
                  <OrangeBulletList
                    items={[
                      "Forstå de underliggende følelser bag konflikterne",
                      "Skabe nye, tryggere måder at kommunikere på",
                      "Styrke nærværet og tilliden i jeres relation",
                    ]}
                  />
                  <p>
                    Vi starter altid der, hvor I er – og arbejder i jeres tempo mod mere forståelse, nærhed og ro i hverdagen.
                  </p>
                  <p className="font-medium">
                    Det kræver mod at bede om hjælp – og det er et godt første skridt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HelpPageCTA
        text="Du behøver ikke have alle svarene på forhånd. Kontakt mig for en uforpligtende samtale om, hvordan terapi kan hjælpe jer med at finde nærvær og forståelse igen."
      />
    </div>
  );
}