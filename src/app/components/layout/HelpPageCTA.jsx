import Button from "../ui/Button";

/**
 * Bottom CTA section shared by all help pages.
 *
 * @param {string} [heading]  – h3 text (default: "Klar til at tage det næste skridt?")
 * @param {string} [text]     – Paragraph below the heading
 * @param {string} [btnText]  – Button label (default: "Book en samtale")
 * @param {string} [btnHref]  – Button link (default: "/kontakt")
 */
const HelpPageCTA = ({
  heading = "Klar til at tage det næste skridt?",
  text = "Du behøver ikke have alle svarene på forhånd. Kontakt mig for en uforpligtende samtale om, hvordan terapi kan hjælpe dig med at finde ro og tryghed igen.",
  btnText = "Book en samtale",
  btnHref = "/kontakt",
}) => {
  return (
    <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-white mb-6">{heading}</h3>
            <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
              {text}
            </p>
            <Button variant="secondary" href={btnHref}>
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPageCTA;
