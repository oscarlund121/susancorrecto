"use client";
import Button from "../ui/Button";
import CheckIcon from "../ui/CheckIcon";

const SectionTwo = () => {
  return (
    <div className="bg-[#367067] section py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
        <div className=" text-white">
          <h2 >
            “Mange af mine klienter beskriver, at de i lang tid har gået med en
            følelse af uro, usikkerhed eller fastlåsthed. Måske genkender du
            noget af dette:”
          </h2>

          {/* Checkmark box */}
          <div className=" ">
            <ul className="space-y-6 bg-[#d3d5e9]/20 inline-block mt-10 px-8 py-10">
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                  Føler du dig fastlåst og uden retning?
                </span>
              </li>

              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                  Har du svært ved at finde ro i kroppen?
                </span>
              </li>

              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                  Er relationer eller studieliv blevet en kamp?
                </span>
              </li>
          {/* Button positioned to the right */}
          <div className="flex justify-end mt-8">
            <Button variant="light" href="/help">Det kan du få hjælp til</Button>
          </div>
            </ul>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
