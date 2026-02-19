"use client";
import Button from "../ui/Button";
import HeaderSection from "../layout/FrontpageHeaderSection";

const YoungSection = () => {
  const tags = [
    "Præstationspres",
    "Eksamensangst",
    "Lavt selvværd",
    "Angst eller fobier",
    "Følelse af at være forkert",
  ];

  return (
    <div className="bg-[#367067] py-16 md:py-24 lg:py-32">
     {/*  <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px] mb-4 md:mb-10">
          <SectionLabel color="white">Særligt til dig</SectionLabel>
        </div>
      </div> */}
      <HeaderSection
        title={
          <span>
            Er du ung <br /> eller studerende?
          </span>
        }
        text="At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp."
        variant={false}
        borderColor="white"
      />

      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="flex flex-wrap  gap-2 mt-8 md:mt-12">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-start mt-8 md:mt-12">
            <Button variant="secondary" href="/help">
              Det kan du få hjælp til
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungSection;
