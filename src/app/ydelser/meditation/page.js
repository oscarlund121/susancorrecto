import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../../components/layout/Navigation";
import Image from "next/image";
import Help from "../../components/layout/UnderHelp";
import CTAContent from "../../components/layout/CTAContent";

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
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8 ">
        <div className="mb-16">
          <HeaderSection
            title="Find indre ro gennem guidet meditation"
            text="Meditation er et enkelt, men kraftfuldt redskab til at skabe ro, reducere stress og styrke forbindelsen til dig selv. Hos mig får du trygge rammer til at lære teknikker, der kan støtte dig i både hverdag og svære perioder."
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
                  <div className="border-b-1 border-black">
                    <h3>Hvad er meditation?</h3>
                  </div>
                  <p className="sm:w-xl w-sm mt-6">
                    Meditation er en bevidst pause fra hverdagens tempo, hvor du får mulighed for at trække opmærksomheden fra ydre støj og ind i nuet. Vi arbejder med åndedræt, kropsbevisthed og fokuseret opmærksomhed, så du kan opleve større ro, klarhed og tilstedeværelse.
                  </p>
                  <br />
                  <p className="sm:w-xl w-sm">
                    Meditation og dyb afslapning er en måde at koble "hovedet" fra på – at slippe tankemylderet og de konstante mentale forklaringer. Formålet er at komme bag det bevidste sind og arbejde med det ubevidste, hvor alle vores oplevelser og erfaringer er lagret.
                  </p>
                  <br />
                  <p className="sm:w-xl w-sm">
                    At være i denne tilstand betyder at være dybt afslappet, men samtidig opmærksom og til stede. Det er en indadvendt, fokuseret opmærksomhed, som åbner døren til det ubevidste i os selv, så vi kan arbejde med det på en tryg og nærværende måde.
                  </p>
                  <br />
                  <p className="sm:w-xl w-sm">
                    Altid i dit tempo og der hvor du er
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
        <CTAContent />
      </div>
    </div>
  );
}