import Navigation from '../components/layout/Navigation';

export const metadata = {
  title: 'Privatlivspolitik',
  description: 'Privatlivspolitik for Psykoterapi Susan Albertsen. Læs om hvordan vi behandler dine personoplysninger.',
};

export default function PrivatlivPage() {
  return (
    <div className="bg-white">
      <Navigation />

      <div className="content-max py-16 md:py-24">
        <div className="md:px-[20px] lg:px-[60px]">
          <div className="text-max mx-auto">
            <h1 className="text-4xl md:text-5xl mb-8">Privatlivspolitik</h1>
            <div className="w-[70px] h-[2px] bg-[#F38A5D] mb-10"></div>

            <div className="space-y-8">
              <section>
                <h4 className="mb-3">1. Dataansvarlig</h4>
                <p>
                  Susan Albertsen, Psykoterapeut<br />
                  Aarhus C, 8000<br />
                  E-mail: kontakt@psykoterapisusan.dk<br />
                  Tlf: +45 25 39 25 39
                </p>
              </section>

              <section>
                <h4 className="mb-3">2. Hvilke oplysninger indsamler vi?</h4>
                <p>
                  Når du udfylder kontaktformularen på vores hjemmeside, indsamler
                  vi dit navn og telefonnummer med det formål at kunne kontakte dig
                  vedrørende terapi. Angiver du at du er studerende, registrerer vi
                  dette for at kunne tilbyde den korrekte prisstruktur.
                </p>
              </section>

              <section>
                <h4 className="mb-3">3. Formål med behandlingen</h4>
                <p>
                  Dine personoplysninger bruges udelukkende til at besvare din
                  henvendelse og koordinere eventuelle terapisamtaler. Vi deler ikke
                  dine oplysninger med tredjeparter.
                </p>
              </section>

              <section>
                <h4 className="mb-3">4. Opbevaring og sletning</h4>
                <p>
                  Data fra kontaktformularen slettes senest 6 måneder efter endt
                  kontakt, medmindre du starter i et terapiforløb. I så fald
                  opbevares relevante oplysninger i henhold til gældende
                  journaliseringspligt.
                </p>
              </section>

              <section>
                <h4 className="mb-3">5. Dine rettigheder</h4>
                <p>
                  Du har ret til at få indsigt i, rette eller slette dine
                  personoplysninger. Kontakt mig på ovenstående e-mail for at gøre
                  brug af dine rettigheder.
                </p>
              </section>

              <section>
                <h4 className="mb-3">6. Sikkerhed</h4>
                <p>
                  Hjemmesiden kører på en sikker HTTPS-forbindelse, så alle data
                  krypteres mellem din browser og vores server.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
