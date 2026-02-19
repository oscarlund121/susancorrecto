"use client";
import HeaderSection from "../layout/FrontpageHeaderSection";
import Help from "../layout/Help";
import SectionLabel from "../ui/SectionLabel";

const SectionSeven = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px] mb-4 md:mb-10">
          <SectionLabel>Fokusområder</SectionLabel>
        </div>
      </div>
      <HeaderSection
        title="Hjælp til angst, stress, lavt selvværd og relationelle udfordringer."
        text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
        buttonHref="/help"
        buttonText="Læs mere om hjælp"
        variant="secondary"
      />
  
      <div className="md:px-[20px] lg:px-[60px]">
      <div className="flex flex-col ">
        <div className="flex flex-col md:flex-row items-start justify-around gap-1 mt-16">
          <Help
            title="Unge & studerende"
            tags={[
              "Eksamensangst & studieproblemer",
              "Relationer",
              "Økonomi",
              "Gruppedannelser & sociale udfordringer",
              "Overgang til voksenlivet",
              "Identitetsudvikling",
            ]}
            index={0}
          />
          <Help
            title="Stress & udmattelse"
            tags={[
              "Stress & udbrændthed",
              "Søvnproblemer",
              "Tankemylder & negative tankemønstre",
              "Udmattelse",
              "Koncentrationsvanskeligheder",
              "Præstationsangst",
            ]}
            index={1}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-around gap-1 mt-0 md:mt-8">
          <Help
            title="Følelser & angst"
            tags={[
              "Angst & fobier",
              "Panikangst & sociale angste",
              "Vrede & frustration",
              "Tristhed & depression",
              "Følelsesmæssig ustabilitet",
              "Sorg & tab",
            ]}
            index={2}
          />
          <Help
            title="Selvværd & identitet"
            tags={[
              "Lavt selvværd & selvtillid",
              "Følelse af at være forkert",
              "Negative mønstre",
              "Sensitivitet & overfølsomhed",
              "Selvkritik & perfektionisme",
              "Usikkerhed & selvtvivl",
            ]}
            index={3}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-around gap-1 mt-0 md:mt-8">
          <Help
            title="Relationer & familie"
            tags={[
              "Kommunikationsproblemer",
              "Forældrevejledning",
              "Social angst & ensomhed",
              "Familiekonflikter & uro i familien",
            ]}
            index={4}
          />
          <Help
            title="Traumer & kriser"
            tags={[
              "ADHD & neuropsykiatriske udfordringer",
              "Misbrug & afhængighed",
              "Chok & akutte kriser",
              "Uforklarlige fysiske reaktioner",
              "Traumer & PTSD",
            ]}
            index={5}
          />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default SectionSeven;
