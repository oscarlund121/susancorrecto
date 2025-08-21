import Testimonials from "../layout/Testimonials";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    quote:
      "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde...",
    fullQuote: "Den fulde lange tekst her...",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
  {
    id: 2,
    quote:
      "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde...",
    fullQuote: "Den fulde lange tekst her...",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
  {
    id: 3,
    quote:
      "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde...",
    fullQuote: "Den fulde lange tekst her...",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
  {
    id: 4,
    quote:
      "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde...",
    fullQuote: "Den fulde lange tekst her...",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
  {
    id: 5,
    quote:
      "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde...",
    fullQuote: "Den fulde lange tekst her...",
    name: "Emilie, 26 år",
    issue: "Eksamensangst & livskriser",
  },
];

const SectionEight = () => {
  return (
    <div className="app relative min-h-screen py-32 pb-16">
      {/* Background image */}
      <Image
        src="/img/testi-img.jpg"
        alt="testimonial background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Header - stays in content area */}
      <div className="relative z-20">
        <h2 className="text-white text-center mb-8">Det siger mine klienter:</h2>
      </div>
      
      {/* Testimonials - full width with .full class */}
      <div className="full relative z-20">
        <Testimonials testimonials={testimonialData} />
      </div>
    </div>
  );
};

export default SectionEight;
