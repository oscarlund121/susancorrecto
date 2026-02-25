import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import HelpPageHeader from "../../components/layout/HelpPageHeader";
import HelpPageCTA from "../../components/layout/HelpPageCTA";
import HelpGreenBox from "../../components/ui/HelpGreenBox";
import OrangeBulletList from "../../components/ui/OrangeBulletList";
import SerifHeading from "../../components/ui/SerifHeading";

export const metadata = {
  title: 'Eksamens- og Præstationsangst',
  description: 'Slip af med eksamensangst og præstationsangst. Få professionel hjælp til mundtlige eksaminer, fremlæggelser og jobsamtaler hos psykoterapeut Susan Albertsen.',
  keywords: ['eksamensangst', 'præstationsangst', 'nervøsitet eksamen', 'mundtlig eksamen angst', 'fremlæggelse angst', 'blackout eksamen'],
  openGraph: {
    title: 'Eksamens- og Præstationsangst | Susan Albertsen',
    description: 'Slip af med eksamensangst og præstationsangst. Professionel hjælp hos Susan Albertsen.',
    url: 'https://www.psykoterapisusan.dk/help/eksamensangst',
  },
  twitter: {
    title: 'Eksamens- og Præstationsangst',
    description: 'Få hjælp til eksamensangst og præstationsangst.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/help/eksamensangst',
  },
};

export default function Eksamensangst() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <HelpPageHeader
        title="Eksamens- &"
        accentWord="præstationsangst"
        text="Når stemmen svigter, hjertet hamrer og tankerne går i stå – selvom du har forberedt dig. Du behøver ikke leve med det. Sammen finder vi roden til angsten, så du kan præstere frit."
      />

      {/* Hovedindhold */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <div className="mb-6 border-b-2 border-black">
                  <h3>Når angsten tager styringen</h3>
                </div>
                <p>
                  Mange oplever, at <strong>stemmen svigter, tankerne går i stå</strong>, eller at de føler sig helt væk i situationer, hvor de ellers havde forberedt sig godt.
                </p>
                <p className="mt-4">
                  At være nervøs før en eksamen, en præsentation eller en anden præstationssituation er helt normalt. Men for nogle bliver nervøsiteten så voldsom, at den <strong>spænder ben i stedet for at hjælpe</strong>.
                </p>

                <SerifHeading before="Hvordan" accent="mærkes" after="præstationsangst?" />
                <p>
                  Kroppen går i alarmberedskab: hjertebanken, sveddryppende hænder, rysten på stemmen, blackouts. Det sker, fordi hjernen forbinder situationen med fare – selvom den reelle trussel ikke er til stede.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    &quot;Eksamensangst handler sjældent om forberedelse. Den handler om, at kroppen husker en gammel oplevelse af utryghed – og reagerer, som om den sker lige nu.&quot;
                  </p>
                </blockquote>

                <SerifHeading before="Hvorfor" accent="opstår" after="det?" />
                <p>
                  Angsten har ofte rod i tidligere oplevelser, hvor man har følt sig vurderet, utilstrækkelig eller utryg. Selvom den oprindelige situation er overstået, genaktiveres den samme kropslige reaktion – automatisk og ufrivilligt.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/sand.webp"
                    alt="Eksamensangst behandling hos Susan Albertsen"
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
                  title="Hvornår kan metoden hjælpe?"
                  items={[
                    "Eksamensangst",
                    "Præstationsangst",
                    "Mundtlige eksaminer",
                    "Fremlæggelser",
                    "Jobsamtaler",
                    "Blackouts ved præstationer",
                  ]}
                />
              </div>

              <div>
                <div className="border-b-2 border-black mb-6">
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="space-y-6">
                  <p>
                    Med psykoterapi og meditation arbejder vi målrettet med eksamens- og præstationsangst. Sammen kan vi:
                  </p>
                  <OrangeBulletList
                    items={[
                      "Gå tilbage til de oplevelser, der satte angsten i gang",
                      "Chok-forløse og bryde det gamle mønster",
                      "Hjælpe kroppen med at falde til ro i præstationssituationer",
                    ]}
                  />
                  <p>
                    Mange oplever <strong>øget selvtillid, større ro, klarhed og bedre fokus</strong> – og for de fleste er 1–3 sessioner tilstrækkeligt til at skabe en mærkbar forandring.
                  </p>
                  <p className="font-medium">
                    Vi starter der, hvor du er – og arbejder i dit tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HelpPageCTA
        text="Du behøver ikke have alle svarene på forhånd. Kontakt mig for en uforpligtende samtale om, hvordan du kan slippe præstationsangsten og præstere frit igen."
      />
    </div>
  );
}