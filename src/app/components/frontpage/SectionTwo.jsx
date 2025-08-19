"use client";
import Button from "../ui/Button";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <div className="bg-[#367067] py-25">
      <div className="content-max text-white">
        <h2 className="text-max">
          “Mange af mine klienter beskriver, at de i lang tid har gået med en
          følelse af uro, usikkerhed eller fastlåsthed. Måske genkender du noget
          af dette:”
        </h2>

        {/* Checkmark box */}
        <div className="bg-[#d3d5e9]/20 p-8 w-sm md:w-lg mt-10 px-5">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="#367067"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-lg font-light leading-relaxed">
                Føler du dig fastlåst og uden retning?
              </span>
            </li>

            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="#367067"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-lg font-light leading-relaxed">
                Har du svært ved at finde ro i kroppen?
              </span>
            </li>

            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="#367067"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-lg font-light leading-relaxed">
                Er relationer eller studieliv blevet en kamp?
              </span>
            </li>
          </ul>
        </div>

        {/* Button positioned to the right */}
        <div className="flex  justify-end">
          <Link href="/contact">
            <Button variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
