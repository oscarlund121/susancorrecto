"use client";
import HeaderSection from "../layout/FrontpageHeaderSection";
import Help from "../layout/Help";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

const SectionHelp = () => {
  return (
    <div id="hjaelp-kategorier" className="py-16 md:py-24 bg-[#367067] md:ml-28 md:pl-12 md:rounded-bl-[100px] rounded-tl-[50px] text-white scroll-mt-8">
      <FadeIn>
        <HeaderSection
          title="Få hjælp til angst, stress, lavt selvværd & relationelle udfordringer."
          text="Psykoterapi handler ikke kun om at fjerne symptomer, men om at styrke dig som menneske. Jeg tilbyder et trygt og respektfuldt rum, hvor du kan udforske dine følelser, bearbejde svære oplevelser og finde nye måder at leve på."
          buttonHref="/help"
          buttonText="Læs mere om hjælp"
          variant={false}
          textAlign="end"
        />
      </FadeIn>

      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
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
              tagVariant="orange"
             iconVariant="featured"
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
              tagVariant="orange"
              iconVariant="featured"
            />
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
              tagVariant="orange"
              iconVariant="featured"
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
              tagVariant="orange"
              iconVariant="featured"
            />
            <Help
              title="Relationer & familie"
              tags={[
                "Kommunikationsproblemer",
                "Forældrevejledning",
                "Social angst & ensomhed",
                "Familiekonflikter & uro i familien",
              ]}
              index={4}
              tagVariant="orange"
              iconVariant="featured"
            />
            <Help
              title="Traumer & kriser"
              tags={[
                "ADHD & neuropsykiatriske udfordringer",
                "Misbrug & afhængighed",
                "Chok & akutte kriser",
                "Uforklarlige fysiske reaktioner",
              ]}
              index={5}
              tagVariant="orange"
              iconVariant="featured"
            />
        </div>
        </div>
        <FadeIn>
          <div className="flex justify-center mt-12">
            <Button variant="study" href="/help">
              Se hvad kan du få hjælp til
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SectionHelp;
