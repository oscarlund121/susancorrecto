"use client";
import HeaderSection from "../layout/FrontpageHeaderSection";
import Help from "../layout/Help";

const SectionSeven = () => {
  return (
    <div className="pt-32 bg-white">
      <HeaderSection
        title="Hjælp til angst, stress, lavt selvværd og relationelle udfordringer."
        text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
        buttonHref="/kontakt"
        variant="secondary"
      />
      <div className="flex flex-col content-max">
        <div className="flex flex-col md:flex-row items-center justify-around gap-1 px-6 md:px-0 mt-16 ">
          <Help
            title="Unge & Studerende"
            tags={[
              "Eksamensangst & studieproblemer",
              "Relationer",
              "Økonomi",
              "Gruppedannelser & sociale udfordringer",
              "Overgang til voksenlivet",
              "Identitetsudvikling",
            ]}
          />
          <Help
            title="Stress & Udmattelse"
            tags={[
              "Stress & udbrændthed",
              "Søvnproblemer",
              "Tankemylder & negative tankemønstre",
              "Udmattelse",
              "Koncentrationsvanskeligheder",
              "Præstationsangst",
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-1 px-6 md:px-0 mt-16 ">
          <Help
            title="Følelser & Angst"
            tags={[
              "Angst & fobier",
              "Panikangst & sociale angste",
              "Vrede & frustration",
              "Tristhed & depression",
              "Følelsesmæssig ustabilitet",
              "Sorg & tab",
            ]}
          />
          <Help
            title="Selvværd & Identitet"
            tags={[
              "Lavt selvværd & selvtillid",
              "Følelse af at være forkert",
              "Negative mønstre",
              "Sensitivitet & overfølsomhed",
              "Selvkritik & perfektionisme",
              "Usikkerhed & selvtvivl",
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-1 px-6 md:px-0 mt-16  ">
          <Help
            title="Relationer & Familie"
            tags={[
              "Kommunikationsproblemer",
              "Forældrevejledning",
              "Social angst & ensomhed",
              "Skilsmisse & separation",
              "Parforhold",
              "Familiekonflikter & uro i familien",
            ]}
          />
          <Help
            title="Traumer & Kriser"
            tags={[
              "ADHD & neuropsykiatriske udfordringer",
              "Misbrug & afhængighed",
              "Chok & akutte kriser",
              "Uforklarlige fysiske reaktioner",
              "Traumer & PTSD",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
