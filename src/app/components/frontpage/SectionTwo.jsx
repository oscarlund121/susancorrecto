"use client";
import Button from "../ui/Button";
import CheckIcon from "../ui/CheckIcon";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <div className="bg-[#367067] section py-32">
      <div className="content-max">
        <div className=" text-white">
          <h2 className="text-max">
            “Mange af mine klienter beskriver, at de i lang tid har gået med en
            følelse af uro, usikkerhed eller fastlåsthed. Måske genkender du
            noget af dette:”
          </h2>

          {/* Checkmark box */}
          <div className=" text-max  ">
            <ul className="space-y-6 bg-[#d3d5e9]/20 inline-block mt-10 px-8 py-10">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-white text-lg font-light leading-relaxed">
                  Føler du dig fastlåst og uden retning?
                </span>
              </li>

              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-white text-lg font-light leading-relaxed">
                  Har du svært ved at finde ro i kroppen?
                </span>
              </li>

              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-white text-lg font-light leading-relaxed">
                  Er relationer eller studieliv blevet en kamp?
                </span>
              </li>
          {/* Button positioned to the right */}
          <div className="flex mt-8">
            <Link href="/kontakt">
              <Button variant="secondary" />
            </Link>
          </div>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
