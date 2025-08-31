import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import Button from "../../components/ui/Button";

const helpAreas = [
  "Ved tilbagevendende konflikter eller misforståelser",
  "Når kommunikationen føles fastlåst eller fjern", 
  "Ved kriser som skilsmisse, sygdom eller tab",
  "Når børn eller unge i familien trives dårligt"
];

export default function FamiliePar() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation variant="" />
      </div>
      <div className="bg-[#DBE1F8] py-32">
        <div className="mb-16">
          <HeaderSection
            title="Fælles forståelse og nye veje i relationerne"
            text="Familie- og parterapi er en mulighed for at få øje på nye perspektiver, bryde fastlåste mønstre og skabe bedre kommunikation. Vi arbejder i trygge rammer, hvor alle parter bliver hørt og set."
            buttonHref="/kontakt"
            variant="primary"
            borderColor="black"
          />
        </div>
        <div className="content-max px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="mb-6 border-b-2 border-black">
                  <h3>Hvad er familie- og parterapi?</h3>
                </div>
                <p className="sm:w-xl w-sm mt-6">
                  I familie- og parterapi skaber vi et rum, hvor vi kan udforske relationerne mellem jer – hvad enten det er som par, forældre-børn eller hele familien. Terapien giver plads til at forstå hinandens oplevelser, følelser og behov, så I kan finde nye måder at mødes på.
                </p>
                <br />
                <p className="sm:w-xl w-sm">
                  Jeg inddrager metoder fra mentalisering, kommunikationstræning og følelsesregulering, så vi kan arbejde både med forståelse og konkrete redskaber.
                </p>
              </div>
              <Help
                title="Hvornår kan familie- og parterapi hjælpe?"
                tags={helpAreas}
              />
            </div>
            <figure className="custom">
              <Image
                src="/img/determind.jpg"
                alt="Beskrivelse af billedet"
                width={500}
                height={300}
              />
            </figure>
          </div>
        </div>
        <div className="bg-[#367067] py-32 text-white">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <figure className="">
                  <Image
                    src="/img/determind.jpg"
                    alt="Beskrivelse af billedet"
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
                    <h3>Sådan foregår et forløb</h3>
                  </div>
                  <div className="sm:w-xl w-sm mb-8 ">
                    <p>
                      Vi starter med at tale om jeres udfordringer og ønsker. Derefter tilrettelægger vi forløbet, så alle føler sig trygge. Nogle sessioner kan være med hele familien, andre kun med dele af den. Vi arbejder med både forståelse, følelser og praktiske strategier, så I kan tage nye skridt i hverdagen.
                    </p>
                    <br />
                    <p>
                      Kontakt mig for en uforpligtende samtale om, hvordan familie- og parterapi kan hjælpe jer med at finde hinanden igen, styrke jeres relationer og skabe et tryggere fundament for fremtiden.
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
