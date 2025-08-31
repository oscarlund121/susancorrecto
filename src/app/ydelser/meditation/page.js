import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import Button from "../../components/ui/Button";

const helpAreas = [
  "Når stress og uro fylder for meget",
  "Ved søvnproblemer", 
  "Når du har svært ved at finde fokus",
  "Ved angst eller nervøsitet",
  "Når du ønsker at styrke dit nærvær og din selvforbindelse"
];

export default function Meditation() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="bg-[#DBE1F8] py-32">
        <div className="mb-16">
          <HeaderSection
            title="Find indre ro gennem guidet meditation"
            text="Meditation er et enkelt, men kraftfuldt redskab til at skabe ro, reducere stress og styrke forbindelsen til dig selv. Hos mig får du trygge rammer til at lære teknikker, der kan støtte dig i både hverdag og svære perioder."
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
                  <div className="border-b-1 border-black">
                    <h3>Hvad er meditation?</h3>
                  </div>
                  <p className="sm:w-xl w-sm mt-6">
                    Meditation er en bevidst pause fra hverdagens tempo, hvor du får mulighed for at trække opmærksomheden fra ydre støj og ind i nuet. Vi arbejder med åndedræt, kropsbevisthed og fokuseret opmærksomhed, så du kan opleve større ro, klarhed og tilstedeværelse.
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
                <div className="pb-8">
                  <h2>Klar til at tage det næste skridt?</h2>
                </div>
                <div className="mt-8">
                  <div className="mb-6 border-b-2 border-white">
                    <h3>Sådan forgår et forløb</h3>
                  </div>
                  <div className="sm:w-xl w-sm mb-8 ">
                    <p>
                      Vi starter altid med en indledende samtale, hvor vi afklarer, hvad der fylder mest for dig, og hvordan du ønsker, at dit liv skal se ud fremover. Derefter guider jeg dig gennem forskellige meditationsøvelser, der kan hjælpe dig med at finde ro og styrke din indre balance.
                    </p>
                    <br />
                    <p>
                      Kontakt mig for en uforpligtende samtale om, hvordan meditation kan støtte dig i at skabe mere ro og nærvær i dit liv.
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