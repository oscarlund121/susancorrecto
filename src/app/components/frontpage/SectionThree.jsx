"use client";

import Button from "../ui/Button";

const SectionThree = () => {
  return (
    <div className="bg-[#DBE1F8] py-32">
      <div className="content-max flex flex-col items-center justify-center gap-12">
        <div className="text-center max-w-4xl">
          <h2 className="text-max mb-6">
            Vi finder løsningen sammen, skridt for skridt, i dit tempo.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Psykoterapi er en proces, hvor du er i centrum. Jeg er her for at guide og støtte dig, 
            mens du opdager dine egne ressourcer og styrker. Sammen skaber vi et trygt rum, hvor du 
            kan udforske dine følelser, bearbejde udfordringer og udvikle nye redskaber til at håndtere 
            livets kompleksiteter. Der er intet rush - vi arbejder i det tempo, der føles rigtigt for dig.
          </p>
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
