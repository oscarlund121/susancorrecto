import HeaderSection from "../components/layout/FrontpageHeaderSection";
import Navigation from "../components/layout/Navigation";
import PriceSection from "../components/layout/PriceSection";
import InfoCard from "../components/layout/InfoCard";

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
      <div className="bg-white content-max md:py-16 py-8">
        <div className="mb-32">
          <HeaderSection
            title="Priser & rabatter"
            text="Hos mig kan du vælge mellem enkeltssessioner eller forløb – alt efter hvad der passer bedst til dig. Jeg tilbyder også særlige priser til studerende."
            variant="primary"
            borderColor="black"
          />
        </div>
        
        <div className="px-6 md:px-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Venstre side - Prisliste */}
            <div className="lg:col-span-2 md:px-16">
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
  );
}
