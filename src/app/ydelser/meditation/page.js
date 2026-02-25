import Navigation from "../../components/layout/Navigation";
import ServiceHeader from "../../components/layout/ServiceHeader";
import Image from "next/image";
import Button from "../../components/ui/Button";
import ListItem from "../../components/ui/ListItem";
import { GiLotus } from "react-icons/gi";

export const metadata = {
  title: 'Meditation og Dyb Afslapning',
  description: 'Lær meditation og dyb afslapning hos psykoterapeut Susan Albertsen i Aarhus. Reducer stress, skab indre ro og styrk forbindelsen til dig selv.',
  keywords: ['meditation Aarhus', 'dyb afslapning', 'stress reduktion', 'mindfulness terapi', 'meditation terapeut', 'indre ro'],
  openGraph: {
    title: 'Meditation og Dyb Afslapning | Susan Albertsen',
    description: 'Lær meditation og dyb afslapning. Reducer stress og skab indre ro.',
    url: 'https://www.psykoterapisusan.dk/ydelser/meditation',
    images: [{ url: '/img/meditation.webp', width: 1200, height: 630, alt: 'Meditation hos Susan Albertsen' }],
  },
  twitter: {
    title: 'Meditation og Dyb Afslapning',
    description: 'Lær meditation og skab indre ro hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/ydelser/meditation',
  },
};

export default function Meditation() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>
      {/* Header */}
      <ServiceHeader
        icon={GiLotus}
        badge="Meditation"
        title={<>Meditation & dyb <span className="italic text-[#F38A5D]">afslapning</span></>}
        text="Meditation er et enkelt, men kraftfuldt redskab til at skabe ro, reducere stress og styrke forbindelsen til dig selv. Hos mig får du trygge rammer til at lære teknikker, der kan støtte dig i både hverdag og svære perioder."
      />
      {/* Main content */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="mb-6 border-b-2 border-black">
              <h3>Hvad er meditation?</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <p>
                  Meditation er en bevidst pause fra hverdagens tempo, hvor du får mulighed for at trække opmærksomheden fra ydre støj og ind i nuet. Vi arbejder med åndedræt, kropsbevidsthed og fokuseret opmærksomhed, så du kan opleve større ro, klarhed og tilstedeværelse.
                </p>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Bag det bevidste sind</h5>
                <p>
                  Meditation og dyb afslapning er en måde at koble &quot;hovedet&quot; fra på – at slippe tankemylderet og de konstante mentale forklaringer. Formålet er at komme bag det bevidste sind og arbejde med det ubevidste, hvor alle vores oplevelser og erfaringer er lagret.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    &quot;At være dybt afslappet, men samtidig opmærksom og til stede – det er en indadvendt, fokuseret opmærksomhed, som åbner døren til det ubevidste i os selv.&quot;
                  </p>
                </blockquote>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Tryg og nærværende</h5>
                <p>
                  At være i denne tilstand betyder at være dybt afslappet, men samtidig opmærksom og til stede. Det er en indadvendt, fokuseret opmærksomhed, som åbner døren til det ubevidste i os selv, så vi kan arbejde med det på en tryg og nærværende måde.
                </p>

                <p className="font-medium mt-8">
                  Altid i dit tempo og der hvor du er.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/meditation.webp"
                    alt="Meditation og dyb afslapning hos Susan Albertsen"
                    width={500}
                    height={450}
                    className="w-full h-auto object-cover rounded-[32px]"
                  />
                </figure>
                <ul className="space-y-4 bg-[#367067] rounded-[32px] px-8 py-8">
                  <li className="pb-2">
                    <h4 className="text-white font-medium">Hvornår kan meditation hjælpe?</h4>
                    <div className="w-10 h-[2px] bg-[#F38A5D] rounded-full mt-3"></div>
                  </li>
                  <ListItem>Stress & uro</ListItem>
                  <ListItem>Søvnproblemer</ListItem>
                  <ListItem>Manglende fokus</ListItem>
                  <ListItem>Angst & nervøsitet</ListItem>
                  <ListItem>Nærvær & selvforbindelse</ListItem>
                  <div className="flex justify-center pt-6">
                    <Button variant="study" href="/kontakt">Book en samtale</Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#367067] py-16 md:py-24 lg:py-32 text-white">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-white mb-6">Klar til at tage det næste skridt?</h3>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
                Vi starter altid med en indledende samtale, hvor vi afklarer hvad der fylder mest for dig. Kontakt mig for en uforpligtende samtale om, hvordan meditation kan hjælpe dig med at finde ro og balance.
              </p>
              <Button variant="secondary" href="/kontakt">Book en samtale</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}