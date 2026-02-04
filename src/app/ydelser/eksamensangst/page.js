import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

const helpAreas = [
  "Eksamensangst",
  "Præstationsangst",
  "Mundtlige eksaminer",
  "Fremlæggelser",
  "Jobsamtaler",
  "Blackouts ved præstationer"
];

export default function Eksamensangst() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-8">
          <HeaderSection
            title="Eksamens- og præstationsangst"
            text="Når kroppen pludselig tager over med hjertebanken, svedige hænder, kvalme, svimmelhed eller en fornemmelse af at 'lukke ned', kan det være svært at forstå, hvad der sker."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
      </div>

      {/* Når angsten tager styringen sektion */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div>
                <div className="border-b-1 border-black">
                  <h3>Når angsten tager styringen</h3>
                </div>
                <p className="w-full max-w-xl mt-6">
                  Mange oplever, at stemmen svigter, tankerne går i stå, eller at de føler sig helt væk i situationer, hvor de ellers havde forberedt sig godt.
                </p>
                <p className="w-full max-w-xl mt-4">
                  At være nervøs før en eksamen, en præsentation eller en anden præstationssituation er helt normalt. Men for nogle bliver nervøsiteten så voldsom, at den spænder ben i stedet for at hjælpe. Når angsten tager styringen, kan det resultere i præstationer, der slet ikke afspejler ens evner – eller i at man helt undgår situationerne.
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
                  src="/img/meditation.jpg"
                  alt="Eksamensangst"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Hvordan kan terapi hjælpe sektion */}
      <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center order-2 md:order-1">
              <figure className="">
                <Image
                  src="/img/determind.jpg"
                  alt="Behandling af eksamensangst"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
            <div className="order-1 md:order-2">
              <div className="pb-8">
                <div className="mb-6 border-b-2 border-white">
                  <h3>Hvordan kan terapi hjælpe?</h3>
                </div>
                <div className="w-full max-w-xl space-y-4">
                  <p>
                    Med psykoterapi og meditation (indadvendt fokuseret opmærksomhed) er det muligt at arbejde målrettet med eksamens- og præstationsangst. I behandlingen går vi tilbage til de oplevelser, hvor angsten oprindeligt opstod, og som stadig får dit nervesystem til at reagere, som om du er i fare.
                  </p>
                  <p>
                    Selvom situationen i dag er anderledes, genaktiveres den samme kropslige reaktion igen og igen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bryd mønstret sektion */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="pb-8">
                <div className="border-b-1 border-black">
                  <h3>Bryd mønstret</h3>
                </div>
                <div className="w-full max-w-xl mt-6 space-y-4">
                  <p>
                    Psykoterapien og meditationen hjælper dig med at chok-forløse og bryde dette mønster, så kroppen kan falde til ro, og du igen kan føle dig tryg i præstationssituationer.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className="">
                <Image
                  src="/img/heart.jpg"
                  alt="Bryd mønstret"
                  width={500}
                  height={300}
                  className="w-[450px] h-auto object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <CTAContent
        imageSrc="/img/emdr-1.jpg"
      />
    </div>
  );
}