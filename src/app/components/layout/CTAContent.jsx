import Button from "../ui/Button";
import Image from "next/image";

const CTAContent = () => {
  return (
    <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
      <div className="content-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:flex justify-center items-center order-2 md:order-1">
            <figure>
              <Image
                src="/img/terapi_unge.webp"
                alt="Kontakt"
                width={500}
                height={300}
                className="w-[450px] h-auto object-cover rounded-2xl"
              />
            </figure>
          </div>
          <div className="order-1 md:order-2">
            <div className="pb-4 md:pb-4">
              <h3 className="border-b-1 border-white md:text-max">Klar til at tage det næste skridt?</h3>
            </div>
            <div>
              <div className="my-2 border-white ">
                <h4>Sådan foregår et forløb</h4>
              </div>
              <div className="w-full max-w-xl mb-8">
                <p>
                  Vi starter altid med en indledende samtale, hvor vi afklarer,
                  hvad der fylder mest for dig, og hvordan du ønsker, at dit liv
                  skal se ud fremover. Derefter arbejder vi struktureret med de
                  områder, hvor du ønsker forandring.
                </p>
                <br />
                <p>
                  Kontakt mig for en uforpligtende samtale om, hvordan jeg kan
                  hjælpe dig med at finde ro og balance i dit liv.
                </p>
              </div>
              <Button variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAContent;
