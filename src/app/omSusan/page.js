import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import Image from "next/image";
import Button from "../components/ui/Button";
import ListItem from "../components/ui/ListItem";
import Link from "next/link";

export default function OmSusan() {
  return (
    <div className="relative section min-h-screen pb-16 lg:pb-16 md:pb-8 sm:pb-4">
      {/* Background image */}
      <Image
        src="/img/om-susan.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Navigation on top */}
      <div className="relative mb-16 z-50">
        <Navigation variant="transparent" />
      </div>
      <div>



        <div className=" relative text-white z-20">
          <HeaderSection
            title="Terapi med hjerte og faglighed"
            variant={false}
          />
          <div className="content-max">
            <div className="mb-6 border-b-2  border-white">
              <h3>Min baggrund</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              <div>
                <p>Jeg er uddannet psykoterapeut fra Essentiel Integrativ Essens, Psyke, Krop og Helbredsterapi (EIP) ved Karen Aaes på Essentielt Institut i Aarhus – en uddannelse, der forener psykologiske, kropslige og følelsesmæssige metoder. Essentielt Institut har siden 2004 været godkendt af og medlem af EAIP (European Association for Integrative Psychotherapy), og de metoder, jeg anvender, er anerkendt både i Danmark og internationalt.</p>
                <br />
                <p>Min tilgang er helhedsorienteret og bygger på forståelsen af, at varig forandring skabes gennem et helhjertet nærvær – hvor både krop, sind og følelser får plads. Som Karen Aaes så smukt udtrykker det:</p>
                <br />
                <p>"Vi kan kun skabe varige transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed. Kan vi ikke skabe ændringer ud fra dette, vil vi kun komme frem til midlertidige løsninger. Med andre ord er essensen i terapien at være helhjertet – at have hele hjertet med."</p>
                <br />
                <p>Jeg har mere end 20 års erfaring fra skoleverdenen, hvor jeg har arbejdet med børn, unge og familier. Det har givet mig et dybt indblik i de udfordringer, der kan opstå i hverdagen – både i relationer og i det enkelte menneskes indre liv.</p>
                <p>Her har jeg også opbygget solid erfaring med mentalisering – evnen til at forstå egen og andres adfærd ud fra følelser, tanker og behov.</p>
                <p>Uanset om du kommer med angst, stress, sorg, lavt selvværd, fastlåsthed eller relationelle udfordringer, møder jeg dig med respekt, empati og et åbent sind. Hos mig er rummet trygt, og vi arbejder i dit tempo – med udgangspunkt i det, der er vigtigst for dig.</p>
                <br />
                <p>Mit mål er altid det samme: At hjælpe dig med at slippe det, der holder dig tilbage, og åbne for mere glæde, frihed og lethed i livet.</p>

              </div>
              
              <div>
                <ul className="space-y-6 bg-[#d3d5e9]/20 inline-block px-8 py-10">

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
                    Familie- og parterapi – med fokus på relationer, kommunikation og tryghed.
                  </ListItem>
                  <div className="flex justify-end items-end">
                    <Link href="/kontakt">
                      <Button variant="secondary" className="mt-8">
                        Book en samtale
                      </Button>
                    </Link>
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