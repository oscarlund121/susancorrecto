import Button from "../ui/Button";
import Image from "next/image";

const CTAContent = ({
  title = "Klar til at tage det næste skridt?",
  subtitle = "Sådan foregår et forløb",
  description = "Vi starter altid med en indledende samtale, hvor vi afklarer, hvad der fylder mest for dig, og hvordan du ønsker, at dit liv skal se ud fremover. Derefter arbejder vi struktureret med de områder, hvor du ønsker forandring.",
  ctaText = "Kontakt mig for en uforpligtende samtale om, hvordan jeg kan hjælpe dig med at finde ro og balance i dit liv.",
  imageSrc = "/img/determind.webp",
  imageAlt = "Kontakt",
}) => {
  return (
    <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
      <div className="content-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center order-2 md:order-1">
            <figure>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={300}
                className="w-[450px] h-auto object-cover"
              />
            </figure>
          </div>
          <div className="order-1 md:order-2">
            <div className="pb-4 md:pb-8">
              <h2>{title}</h2>
            </div>
            <div className="mt-2 md:mt-8">
              <div className="mb-6 border-b-2 border-white">
                <h3>{subtitle}</h3>
              </div>
              <div className="w-full max-w-xl mb-8">
                <p>{description}</p>
                {ctaText && (
                  <>
                    <br />
                    <p>{ctaText}</p>
                  </>
                )}
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
