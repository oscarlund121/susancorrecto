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
    <div className="bg-[#367067] py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left — Headline + CTA */}
            <FadeIn className="flex-1 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-white mb-8 max-w-xl">{title}</h3>
                <Button variant="secondary" href="/kontakt">Book din første samtale</Button>
              </div>
            </FadeIn>

            {/* Right — Micro-timeline */}
            <FadeIn delay={200} className="flex-shrink-0">
              <div className="flex flex-col items-center gap-0 bg-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                {steps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="w-10 h-10 rounded-full bg-white text-[#367067] flex items-center justify-center text-sm font-semibold">
                      {step.number}
                    </span>
                    <div className="text-center mt-2 mb-2">
                      <p className="font-semibold text-white text-base">{step.label}</p>
                      <p className="text-white/60 text-sm mt-1">{step.desc}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[2px] h-8 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Filler;
