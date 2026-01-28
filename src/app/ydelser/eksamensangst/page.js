import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Button from "../../components/ui/Button";

export default function Eksamensangst() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-16">
          <HeaderSection
            title="Eksamens- og præstationsangst"
            text="Når kroppen pludselig tager over med hjertebanken, svedige hænder, kvalme, svimmelhed eller en fornemmelse af at 'lukke ned', kan det være svært at forstå, hvad der sker."
            buttonHref="/kontakt"
            variant={false}
            borderColor="black"
          />
        </div>
        <div className="bg-white py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div>
                  <div className="border-b-1 border-black mb-6">
                    <h3>Når angsten tager styringen</h3>
                  </div>
                  <div className="sm:w-xl w-sm space-y-4">
                    <p>
                      Mange oplever, at stemmen svigter, tankerne går i stå, eller at de føler sig helt væk i situationer, hvor de ellers havde forberedt sig godt.
                    </p>
                    <p>
                      At være nervøs før en eksamen, en præsentation eller en anden præstationssituation er helt normalt. Men for nogle bliver nervøsiteten så voldsom, at den spænder ben i stedet for at hjælpe. Når angsten tager styringen, kan det resultere i præstationer, der slet ikke afspejler ens evner – eller i at man helt undgår situationerne.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/meditation.jpg"
                    alt="Eksamens- og præstationsangst"
                    width={500}
                    height={300}
                    className="w-[450px] h-auto object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DBE1F8]/30 py-24">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div>
                  <div className="border-b-1 border-black mb-6">
                    <h3>Hvordan kan terapi hjælpe?</h3>
                  </div>
                  <div className="sm:w-xl w-sm space-y-4">
                    <p>
                      Med psykoterapi og meditation (indadvendt fokuseret opmærksomhed) er det muligt at arbejde målrettet med eksamens- og præstationsangst. I behandlingen går vi tilbage til de oplevelser, hvor angsten oprindeligt opstod, og som stadig får dit nervesystem til at reagere, som om du er i fare. Selvom situationen i dag er anderledes, genaktiveres den samme kropslige reaktion igen og igen.
                    </p>
                    <p>
                      Psykoterapien og meditationen hjælper dig med at chok-forløse og bryde dette mønster, så kroppen kan falde til ro, og du igen kan føle dig tryg i præstationssituationer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#367067] py-32 text-white">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/emdr-1.jpg"
                    alt="Resultat af behandling"
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
                    <h3>Hvad kan du forvente?</h3>
                  </div>
                  <div className="sm:w-xl w-sm mb-8 ">
                    <p>
                      Mange oplever øget selvtillid, større ro, klarhed, lethed og bedre fokus – og for de fleste er 1–3 sessioner tilstrækkeligt til at skabe en mærkbar forandring.
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
