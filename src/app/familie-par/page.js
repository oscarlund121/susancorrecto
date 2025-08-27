import HeaderSection from "@/app/components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Help from "../components/layout/UnderHelp";
import Button from "../components/ui/Button";

const helpAreas = [
  "Placeholder område 1",
  "Placeholder område 2",
  "Placeholder område 3",
  "Placeholder område 4",
  "Placeholder område 5",
  "Placeholder område 6",
  "Placeholder område 7",
  "Placeholder område 8"
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
            title="Familie- og parterapi - placeholder titel"
            text="Placeholder tekst for familie- og parterapi. Denne tekst skal erstattes med den korrekte beskrivelse af terapiformen og dens fordele."
            buttonHref="/kontakt"
            variant="primary"
            borderColor="black"
          />
        </div>
        <div className="content-max px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div>
                <h3>Hvad er Familie- og parterapi?</h3>
                <p className="sm:w-xl w-sm mt-6">
                  Placeholder tekst om familie- og parterapi. Denne beskrivelse skal erstattes med korrekt information om metoden, dens anvendelse og fordele for familier og par.
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
                <div className="border-b-2 border-white pb-8">
                  <h2>Klar til at tage det næste skridt?</h2>
                </div>
                <div className="mt-8">
                  <h3>Sådan forgår et forløb</h3>
                  <div className="sm:w-xl w-sm mb-8 ">
                    <p>
                      Placeholder tekst om hvordan et familie- og parterapi forløb foregår. Denne tekst skal erstattes med korrekt information om processen.
                    </p>
                    <br />
                    <p>
                      Kontakt mig for en uforpligtende samtale om, hvordan familie- og parterapi kan hjælpe jer.
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
