import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Button from "../components/ui/Button";
import ListItem from "../components/ui/ListItem";

export const metadata = {
  title: 'Om Susan Albertsen',
  description: 'Mød psykoterapeut Susan Albertsen. Uddannet fra Essentiel Integrativ Essens med over 20 års erfaring. Specialiseret i EMDR, integrativ psykoterapi, meditation og familieterapi.',
  keywords: ['Susan Albertsen', 'psykoterapeut Aarhus', 'EMDR terapeut', 'integrativ psykoterapi', 'familieterapi'],
  openGraph: {
    title: 'Om Susan Albertsen | Psykoterapeut i Aarhus',
    description: 'Mød psykoterapeut Susan Albertsen. Uddannet fra Essentiel Integrativ Essens med over 20 års erfaring.',
    url: 'https://www.psykoterapisusan.dk/om-susan',
    images: [{ url: '/img/headshot.webp', width: 1200, height: 630, alt: 'Susan Albertsen - Psykoterapeut' }],
  },
  twitter: {
    title: 'Om Susan Albertsen | Psykoterapeut',
    description: 'Mød psykoterapeut Susan Albertsen med over 20 års erfaring.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/om-susan',
  },
};

export default function OmSusan() {
  return (
    <div>
      {/* Navigation on top */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header — warm off-white with typographic rhythm */}
     {/*  <div className="bg-[#FAFCFB] md:py-16 py-8">
        <div>
          <HeaderSection
            title={<>Terapi med <span className="italic text-[#F38A5D]">hjerte</span> og faglighed</>}
            variant={false}
            borderColor="black"
          />
        </div>
      </div> */}

      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="mb-6 border-b-2 border-black">
              <h3>Min baggrund</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">

              {/* Left column — text with subheaders and pull quote */}
              <div>
                {/* Intro */}
                <p>Jeg er uddannet psykoterapeut fra Essentiel Integrativ Essens, Psyke, Krop og Helbredsterapi (EIP) ved Karen Aaes på Essentielt Institut i Aarhus – en uddannelse, der forener psykologiske, kropslige og følelsesmæssige metoder. Essentielt Institut har siden 2004 været godkendt af og medlem af EAIP (European Association for Integrative Psychotherapy), og de metoder, jeg anvender, er anerkendt både i Danmark og internationalt.</p>

                {/* Subheader — Helhedsorienteret tilgang */}
                <h5 className="text-[#367067] font-semibold mt-8 mb-3">En helhedsorienteret tilgang</h5>
                <p>Min tilgang er helhedsorienteret og bygger på forståelsen af, at varig forandring skabes gennem et helhjertet nærvær – hvor både krop, sind og følelser får plads.</p>

                {/* Pull Quote */}
                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    "Vi kan kun skabe varige transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed. Essensen i terapien er at være helhjertet – at have hele hjertet med."
                  </p>
                  <cite className="block mt-3 text-sm font-light text-black/60 not-italic">— Karen Aaes, Essentielt Institut</cite>
                </blockquote>

                {/* Subheader — Erfaring */}
                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Erfaring fra skoleverdenen</h5>
                <p>Jeg har mere end 20 års erfaring fra skoleverdenen, hvor jeg har arbejdet med børn, unge og familier. Det har givet mig et dybt indblik i de udfordringer, der kan opstå i hverdagen – både i relationer og i det enkelte menneskes indre liv.</p>
                <br />
                <p>Her har jeg også opbygget solid erfaring med mentalisering – evnen til at forstå egen og andres adfærd ud fra følelser, tanker og behov.</p>

                {/* Subheader — Mødet */}
                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Mødet med dig</h5>
                <p>Uanset om du kommer med angst, stress, sorg, lavt selvværd, fastlåsthed eller relationelle udfordringer, møder jeg dig med respekt, empati og et åbent sind. Hos mig er rummet trygt, og vi arbejder i dit tempo – med udgangspunkt i det, der er vigtigst for dig.</p>
                <br />
                <p>Mit mål er altid det samme: At hjælpe dig med at slippe det, der holder dig tilbage, og åbne for mere glæde, frihed og lethed i livet.</p>
              </div>

              {/* Right column — image + method box */}
              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/headshot.webp"
                    alt="Susan Albertsen"
                    width={500}
                    height={450}
                    className="w-full h-auto object-cover rounded-[32px]"
                  />
                </figure>
                <ul className="space-y-4 bg-[#367067] rounded-[32px] px-8 py-8">
                  <ListItem>
                    Chok- og traumeforløsning (EMDR) – anerkendt af WHO som en effektiv metode til at bearbejde traumatiske oplevelser.
                  </ListItem>

                  <ListItem>
                    Essentiel Integrativ Psykoterapi – inspireret af Jung, systemisk tænkning og NLP.
                  </ListItem>

                  <ListItem>
                    Meditation og intuitivt energiarbejde – for at skabe ro, balance og dyb indre forbindelse.
                  </ListItem>

                  <ListItem>
                    Relationer og familieliv
                  </ListItem>

                  <div className="flex justify-center pt-6">
                    <Button variant="study">
                      Book en samtale
                    </Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}