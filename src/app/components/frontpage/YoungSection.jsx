"use client";
import Button from "../ui/Button";
import SectionLabel from "../ui/SectionLabel";

const YoungSection = () => {
  const tags = ["Præstationspres", "Eksamensangst", "Lavt selvværd", "Angst eller fobier", "Følelse af at være forkert"];

  return (
    <div className="bg-[#DBE1F8] section py-16 md:py-24">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Tekst side */}
            <div>
              <SectionLabel>Særligt til dig</SectionLabel>
              <h2 className="text-[#367067] mb-6">
                Er du ung eller studerende?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At være ung eller studerende kan være både spændende og overvældende. Du står overfor nye mennesker, nye mål, gruppedynamikker og et socialt fællesskab, du skal finde din plads i. Samtidig kan præstationspres, eksamensangst og kontrol blive en kamp.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Her får du hjælp til at finde ro, styrke dit selvværd og navigere i de mange krav, du møder.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-[#367067] text-white px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="primary" href="/help">
                Læs mere om hjælp til unge
              </Button>
            </div>

            {/* Visuel side - dekorativ boks */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-68 h-68 bg-[#367067]/20 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 bg-[#367067]/30 rounded-full flex items-center justify-center">
                    <div className="w-45 h-45 bg-[#367067] rounded-full flex items-center justify-center">
                      <h3 className="text-white text-6xl font-light">18-30</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungSection;
