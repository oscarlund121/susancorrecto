import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Help from "../components/layout/UnderHelp";
import Button from "../components/ui/Button";

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
      <div className="bg-[#DBE1F8] py-32">
        <div className="mb-16">
          <HeaderSection
            title="Få styrke og klarhed gennem Essentiel Integrativ Psykoterapi."
            text="Denne terapiform kombinerer indsigt fra flere metoder for at skabe dybdegående og varige forandringer. Vi arbejder både med tanker, følelser og kropslige reaktioner, så du kan opnå større selvforståelse og handlefrihed."

            buttonHref="/kontakt"
            variant="primary"
            borderColor="black"
          />
        </div>
        <div className="bg-white py-32">
          <div className="content-max px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div>
                  <h3>Hvad er Essentiel Integrativ Psykoterapi?</h3>
                  <p className="sm:w-xl w-sm mt-6">
                    Essentiel Integrativ Psykoterapi er en helhedsorienteret tilgang, hvor vi kombinerer forskellige evidensbaserede metoder. Det betyder, at vi kan arbejde fleksibelt  med det, du har brug for, uanset om det handler om gamle mønstre, nye udfordringer eller akutte livskriser. Målet er at styrke både din indre ro og din evne til at handle på det, der er vigtigt for dig.
                  </p>
                </div>
                <Help
                  title="Hvornår kan metoden hjælpe?"
                  tags={helpAreas}
                />
              </div>
              <figure className="custom">
                <Image
                  src="/img/determind.jpg"
                  alt="Beskrivelse af billedet"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
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
                <div className="border-b-2 border-white pb-8">
                  <h2>Klar til at tage det næste skridt?</h2>
                </div>
                <div className="mt-8">
                  <h3>Sådan forgår et forløb</h3>
                  <div className="sm:w-xl w-sm mb-8 ">
                    <p>
                      Vi starter altid med en indledende samtale, hvor vi afklarer, hvad der fylder mest for dig, og hvordan du ønsker, at dit liv skal se ud fremover. Når du er klar, arbejder vi med EMDR i korte, overskuelige sekvenser. Du styrer selv tempoet, og jeg sørger for, at vi altid vender tilbage til en følelse af ro og tryghed undervejs.
                    </p>
                    <br />
                    <p>
                      Kontakt mig for en uforpligtende samtale om, hvordan EMDR kan hjælpe dig med at give slip på fortiden og finde ro i nuet.
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