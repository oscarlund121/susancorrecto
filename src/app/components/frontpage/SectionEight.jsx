import Testimonials from "../layout/Testimonials";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    quote:
      "Med Susans ro og varme når hun udfører sin terapi kan jeg klart anbefale Susan.",
    fullQuote: "Da jeg over en længer periode havde været meget træt og uoplagt, oplevede jeg efter en terapi med Susan, at energien kom tilbage og min træthed forsvandt. Da jeg længe har haft et ønske om at stoppe med rygning, kontaktede jeg igen Susan, for at se om det var noget hun kunne hjælpe med. Efter en terapi gik der et stykke tid, hvorefter min trang til rygning gradvis blev mindre og mindre, og blev stille og rolig mere klar til at stoppe rygning som jeg har gjort i ca. 43 år. Nu har jeg ikke røget de sidste 7 måneder, hvilket jeg er Susan dybt taknemlig for. Med Susans ro og varme når hun udfører sin terapi kan jeg klart anbefale Susan.",
    name: "Carlo, Region Syddanmark",
    issue: "Træthed & rygestop",
  },
  {
    id: 2,
    quote:
      "Susan har været enormt lyttende, men også meget nærværende i alle samtaler. Som terapeut er Susan varm, kærlig, dygtig, nysgerrig og åben.",
    fullQuote: "Da jeg startede i terapi hos Susan, var det også min første gang i terapi nogensinde. Jeg stod et sted i mit liv, hvor det føltes som om livet ramlede sammen omkring mig og jeg følte mig alene og vidste ikke længere hvordan jeg skulle komme ovenpå igen. Terapien blev for mig et sted hvor der var plads til at snakke om alt - uden den mindste form for fordømmelse. Susan har været enormt lyttende, men også meget nærværende i alle samtaler og griber alt hvad jeg siger med det samme. Som terapeut er Susan varm, kærlig, dygtig, nysgerrig, åben og man føler sig virkelig tryg i hendes nærvær. Personligt har jeg sat rigtig meget pris på, at Susan ikke blot lytter - men bruger en stor del af tiden på at forklare mig hvad mine følelser/tanker/oplevelser kan betyde og hvorfor jeg måske reagerer som jeg gør i bestemte situationer. Alle mine tanker og ord blev taget kærligt imod, og sammen fandt vi frem til kernen i mange nuværende følelser, som har rødder i oplevelser langt tilbage i mit liv. Men der blev også sorteret i følelserne, så vi sammen kom nærmere hvad problemet egentlig var og hvad der kunne sorteres fra og dermed parkeres, så de ikke længere krævede min opmærksomhed. For mig personligt fungerede det værktøj, at parkere sine tanker i et parkeringshus rigtig godt. Jeg blev opmærksom på hvad jeg bruger min energi på, og det har været en enormt lærerig proces. Det var svært i starten - og er det stadig til tider - men Susan var god til at komme med konkrete metaforer for, hvordan man kunne styre sin bevidsthed over tankerne. Dette har hjulpet mig enormt meget, da jeg stod overfor to reeksamener i sommeren 2025, og de negative tanker og frygten for eksamen tog overhånd. Konkret hjalp Susan mig også med, at man ikke behøver at være en der har eksamensangst - det kan man gøre noget ved. Og selvom de to reeksamener jeg lige har været oppe i, er noget af det sværeste mentalt jeg har skullet igennem i mit liv, så har jeg aldrig været så rolig og haft så godt styr på mig selv og min krop op til og under en eksamen. Susan havde rådet mig til at skrive 5-10 sætninger ned på et papir, som lå foran mig til hele eksamen og mindede mig om alle de positive tanker. Konkrete vejrtrækningsøvelser, meditation og viljen til ikke at lade negative tanker og panik overtage var grunden til, at jeg klarede mig så godt igennem eksamenerne. Og noget jeg vil tage med mig i mange situationer fremover i livet. Jeg kunne ikke have gjort det uden Susans hjælp og hun har mine varmeste anbefalinger.",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
  {
    id: 3,
    quote:
      "Hun er både den rareste og mest professionelle person jeg længe har oplevet, man føler sig i rigtig trykke hænder hos Susan.",
    fullQuote: "Jeg er blevet hjulpet af Susan af flere omgange med forskellige ting jeg går og døjer med, og jeg kan virkelig anbefale det. Jeg er nu sluppet af med alle de dårlige tanker jeg gik og havde før hen og hviler nu mere i mig selv. Hun er både den rareste og mest professionelle person jeg længe har oplevet, man føler sig i rigtig trykke hænder hos Susan.",
    name: "Steffen, 30 år",
    issue: "Personlig udvikling",
  },
  {
    id: 4,
    quote:
      "Jeg kan ikke forklarer hvad det er Susan kan , men hun er med sin varme og dejlige udstråling en terapeut man føler sig tryg ved",
    fullQuote: "Jeg har haft den glæde at stifte bekendtskab med Essens terapi gennem Susan Albertsen. jeg har haft psoriasis siden jeg var 14 år gammel , jeg er i dag 57 år og har kæmpet hele mit liv med de gener det giver at have psoriasis Jeg har forsøgt rigtig mange ting for at slippe af med denne hudsygdom, har været ved Dødehavet 3 gange på ophold, smurt mig med alverdens cremer , spist og drukket mange mærkelige ting - men intet har hjulpet. Jeg kom i terapi hos Susan og da vi fandt frem til hvilke CHOK det var skyld i at jeg som 14 årige fik psoriasis, og fik det bearbejdet gik der ikke lang tid før jeg var fri for denne sygdom. Jeg er blevet hjulpet med mange ting gennem denne enestående terapi form. Vi komme alle ud for sorg/bekymringer og disse ting lagres i kroppen og vi reagerer alle forskelligt på disse hændelser - men med Essens terapi kan man få løst op for disse CHOK. Jeg kan ikke forklarer hvad det er Susan kan , men hun er med sin varme og dejlige udstråling en terapeut man føler sig tryg ved Hun har en fantastisk evne til at guide en gennem terapien. Og man har let ved at åbne sig for hende Jeg kan kun varmt anbefale Susan hvis du vil have bearbejdet ting der kan gøre livet svært for dig.",
    name: "Birthe, 57 år",
    issue: "Psoriasis & hudsygdom",
  },
  {
    id: 5,
    quote:
      "Det er så svært at forklare, hvordan terapien er, men det giver SÅ MEGET mening, når Susan fortæller om tankerne bag. Psyke og fysik hænger sammen.",
    fullQuote: "Susan er utrolig meget tillidsvækkende. Føler sig lethed i kroppen efter besøg hos Susan. Susan har fjernet et chok fra min 5 årige datter, som ikke turde bevæge sig alene rundt i huset. Min teenagerdatter går også hos Susan en gang imellem, bare for at lufte ud i systemet. Det er så svært at forklare, hvordan terapien er, men det giver SÅ MEGET mening, når Susan fortæller om tankerne bag. Psyke og fysik hænger sammen. Susan mærker én og man skal ikke fortælle ret meget førend at hun griber den og selv finder ind til kernen.",
    name: "Dorte, Region Midtjylland",
    issue: "Familie & chokbehandling",
  },
];

const SectionEight = () => {
  return (
    <div className="app relative min-h-screen py-16 md:py-24 lg:py-32">
      {/* Background image */}
      <Image
        src="/img/many-flowers.jpg"
        alt="testimonial background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Header - stays in content area */}
      <h2 className="relative z-20 text-white text-center mb-4">
        Det siger mine klienter:
      </h2>

      {/* Testimonials - full width with .full class */}
      <div className="full relative z-20">
        <Testimonials testimonials={testimonialData} />
      </div>
    </div>
  );
};

export default SectionEight;
