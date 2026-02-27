"use client";
import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import ScrollToButton from "../ui/ScrollToButton";
import { FaCheck } from "react-icons/fa";
import CollapsibleForm from "../ui/CollapsibleForm";

const questions = [
  "Føler du dig fastlåst og uden retning?",
  "Har du svært ved at finde ro i kroppen?",
  "Er relationer eller studieliv blevet en kamp?",
];

const SectionIntro = () => {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="flex flex-col gap-12 lg:gap-20 items-start">
            <FadeIn>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                {/* Text content */}
                <div className="lg:flex-[3]">
                  <h3 className="text-black text-center lg:text-left font-normal leading-[1.25]">
                    &ldquo;Mange af mine klienter beskriver, at de i lang tid har
                    gået med en følelse af uro,{" "}
                    <span className="text-[#F38A5D] italic">usikkerhed</span> eller
                    fastlåsthed.
                  </h3>
                  <h4 className="text-[#367067] mt-6 font-light italic">
                    Måske genkender du noget af dette.
                  </h4>
                  <ul className="space-y-8 mt-8">
                    {questions.map((q, i) => (
                      <FadeIn key={i} delay={300 + i * 200}>
                        <li className="flex items-start gap-4">
                          <span className="w-8 h-8 rounded-full bg-[#F38A5D] flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheck className="w-3.5 h-3.5 text-white" />
                          </span>
                          <span className="text-black text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                            {q}
                          </span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="image-accent-green lg:flex-[2] w-full lg:w-auto">
                  <Image
                    src="/img/smile_session.webp"
                    alt="Terapeutisk samtale"
                    width={500}
                    height={600}
                    className="relative w-full max-h-[500px] rounded-xl object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
