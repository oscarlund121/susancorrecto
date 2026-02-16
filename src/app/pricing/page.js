import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import PriceSection from "../components/layout/PriceSection";
import InfoCard from "../components/layout/InfoCard";

export const metadata = {
  title: 'Priser på Psykoterapi',
  description: 'Se priser på psykoterapi hos Susan Albertsen. Individuel terapi, pakkeforløb, parterapi og familieterapi. Særlige priser for studerende. Book en samtale i dag.',
  keywords: ['psykoterapi priser', 'terapi priser Aarhus', 'parterapi pris', 'familieterapi pris', 'studerende rabat terapi'],
  openGraph: {
    title: 'Priser på Psykoterapi | Susan Albertsen',
    description: 'Se priser på psykoterapi. Individuel terapi, pakkeforløb og særlige priser for studerende.',
    url: 'https://www.psykoterapisusan.dk/pricing',
  },
  twitter: {
    title: 'Priser på Psykoterapi',
    description: 'Se priser på psykoterapi hos Susan Albertsen.',
  },
  alternates: {
    canonical: 'https://www.psykoterapisusan.dk/pricing',
  },
};

const priceData = [
  {
    title: "Individuel terapi",
    items: [
      {
        title: "1:1 session",
        subtitle: "á - 1,5 time",
        price: "1400"
      },
      {
        title: "Studerende",
        subtitle: "á - 1,5 time",
        price: "900"
      }
    ]
  },
  {
    title: "Pakkeforløb",
    items: [
      {
        title: "3 sessioner",
        subtitle: "rabat på 300,-",
        price: "4000"
      },
      {
        title: "5 sessioner",
        subtitle: "rabat på 1000,-",
        price: "6000"
      },
      {
        title: "10 sessioner",
        subtitle: "rabat på 1500,-",
        price: "12500"
      }
    ]
  },
  {
    title: "Par- og familieterapi",
    items: [
      {
        title: "Par-session",
        subtitle: "á - 2 timer",
        price: "1900"
      },
      {
        title: "Familieterapi",
        subtitle: "á - 2 timer",
        price: "6000"
      }
    ]
  }
];

export default function Pricing() {
  return (
    <div className="mb-32">
      <Navigation />
      <div className="bg-[#DBE1F8]/50 md:py-16 py-8">
        <div className="mb-8">
          <HeaderSection
            title="Priser & rabatter"
            text="Hos mig kan du vælge mellem enkeltsessioner eller forløb – alt efter hvad der passer bedst til dig. Jeg tilbyder også særlige priser til studerende."
            variant={false}
            borderColor="black"
          />
        </div>
      </div>
      
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Venstre side - Prisliste */}
            <div className="lg:col-span-2">
              {priceData.map((section, index) => (
                <PriceSection 
                  key={index}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </div>
            
            {/* Højre side - Info kort */}
            <div className="lg:col-span-1 md:mt-12 ">
              <InfoCard />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
