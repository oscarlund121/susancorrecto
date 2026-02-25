import Navigation from "../../components/layout/Navigation";
import ServiceHeader from "../../components/layout/ServiceHeader";
import Image from "next/image";
import Button from "../../components/ui/Button";
import ListItem from "../../components/ui/ListItem";
import { FaBrain } from "react-icons/fa6";

export const metadata = {
  title: 'Psykoterapi',
  description: 'Essentiel Integrativ Psykoterapi kombinerer flere terapeutiske metoder for helhedsorienteret behandling. Få hjælp til angst, stress, traumer og personlig udvikling.',
  keywords: ['integrativ psykoterapi', 'helhedsorienteret terapi', 'psykoterapi Aarhus', 'personlig udvikling', 'krops og sind terapi'],
  openGraph: {
    title: 'Psykoterapi | Susan Albertsen',
    description: 'Helhedsorienteret psykoterapi der kombinerer flere terapeutiske metoder.',
    url: 'https://www.psykoterapisusan.dk/ydelser/essentiel-integrativ-psykoterapi',
    images: [{ url: '/img/bee.webp', width: 1200, height: 630, alt: 'Integrativ psykoterapi' }],
  },
  twitter: {
    title: 'Psykoterapi',
    description: 'Helhedsorienteret psykoterapi hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/ydelser/essentiel-integrativ-psykoterapi',
  },
};

export default function Essentiel() {
  return (
    <div>
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Header */}
      <ServiceHeader
        icon={FaBrain}
        badge="Psykoterapi"
        title={<>Helhedsorienteret <span className="italic text-[#F38A5D]">psykoterapi</span></>}
        text="Psykoterapi kombinerer forskellige krops- og terapeutiske metoder, så behandlingen tilpasses dig og dine behov. Den ser hele mennesket – kroppen, dine tanker og følelser – og arbejder med at skabe indre ro, balance og tryghed."
      />

      {/* Main content */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="mb-6 border-b-2 border-black">
              <h3>Hvad er psykoterapi?</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2 md:pt-4">
              <div>
                <p>
                  Psykoterapien bygger på en helhedsorienteret forståelse af mennesket, hvor flere krops- og psykoterapeutiske tilgange kombineres og understøtter hinanden. Metoderne kan anvendes enkeltvis eller i samspil – altid med udgangspunkt i det, der giver mest mening og værdi for dig.
                </p>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Tilpasset din proces</h5>
                <p>
                  I terapien mærker og vurderer jeg løbende, hvilken tilgang der bedst støtter din proces. Ingen mennesker er ens, og derfor tilpasses forløbet individuelt.
                </p>

                <blockquote className="border-l-4 border-[#F38A5D] pl-6 my-8 py-2">
                  <p className="text-lg md:text-xl italic text-[#367067] leading-relaxed">
                    "Du bærer allerede en indre viden om, hvad der er rigtigt for dig. Sammen skaber vi et rum, hvor du kan udfolde dig autentisk og i dit eget tempo."
                  </p>
                </blockquote>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Du er ekspert på dit eget liv</h5>
                <p>
                  Udgangspunktet for denne form for terapi er, at du er unik og ekspert på dig selv og dit liv. Psykoterapien giver mulighed for at arbejde fleksibelt og målrettet – uanset om det handler om at forløse gamle mønstre, håndtere nye udfordringer eller stå midt i en akut livskrise.
                </p>

                <h5 className="text-[#367067] font-semibold mt-8 mb-3">Målet</h5>
                <p className="font-medium">
                  At styrke din indre ro, øge din selvforståelse og støtte dig i at handle i overensstemmelse med det, der er vigtigt for dig.
                </p>
              </div>

              <div>
                <figure className="mb-8">
                  <Image
                    src="/img/bee.webp"
                    alt="Integrativ psykoterapi hos Susan Albertsen"
                    width={500}
                    height={450}
                    className="w-full h-auto object-cover rounded-[32px]"
                  />
                </figure>
                <ul className="space-y-4 bg-[#367067] rounded-[32px] px-8 py-8">
                  <li className="pb-2">
                    <h4 className="text-white font-medium">Hvornår kan psykoterapi hjælpe?</h4>
                    <div className="w-10 h-[2px] bg-[#F38A5D] rounded-full mt-3"></div>
                  </li>
                  <ListItem>Angst & bekymringer</ListItem>
                  <ListItem>Stress & udbrændthed</ListItem>
                  <ListItem>Relationsudfordringer</ListItem>
                  <ListItem>Selvværd & selvtillid</ListItem>
                  <ListItem>Traumer & kriser</ListItem>
                  <ListItem>Personlig udvikling</ListItem>
                  <ListItem>Livsovergange</ListItem>
                  <ListItem>Sorg & tab</ListItem>
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
                Vi starter altid med en indledende samtale, hvor vi afklarer hvad der fylder mest for dig. Kontakt mig for en uforpligtende samtale om, hvordan psykoterapi kan hjælpe dig med at finde ro og balance.
              </p>
              <Button variant="secondary" href="/kontakt">Book en samtale</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}