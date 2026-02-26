"use client";

import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

const steps = [
  { number: "1", label: "Book tid", desc: "Vælg en tid der passer dig" },
  { number: "2", label: "Afklarende samtale", desc: "Vi taler om dine behov" },
  { number: "3", label: "Vi finder vejen sammen", desc: "I dit tempo, skridt for skridt" },
];

const Filler = ({ title }) => {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="flex flex-col items-center text-center gap-12">

            {/* Headline + CTA */}
            <FadeIn>
              <div className="flex flex-col items-center">
                <h3 className="mb-8 max-w-2xl">{title}</h3>
                <Button variant="primary" href="/kontakt">Book din første samtale</Button>
              </div>
            </FadeIn>

            {/* Micro-timeline */}
            <div className="flex flex-col items-center gap-0">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={200 + i * 150}>
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-10 rounded-full bg-[#367067] text-white flex items-center justify-center text-sm font-semibold">
                      {step.number}
                    </span>
                    <div className="text-center mt-2 mb-2">
                      <p className="font-semibold text-black text-base">{step.label}</p>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[2px] h-8 bg-[#367067]/20" />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Filler;
