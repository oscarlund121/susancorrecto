"use client";
import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

const YoungSection = () => {
  const tags = [
    "Præstationspres",
    "Eksamensangst",
    "Lavt selvværd",
    "Angst eller fobier",
    "Følelse af at være forkert",
  ];

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px] py-12 bg-white rounded-3xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
            {/* Image — left */}
            <FadeIn className=" w-full md:w-2/5 shrink-0">
              <div className=" image-accent-orange relative aspect-[3/4] rounded-2xl overflow-visible">
                <Image
                  src="/img/terapi_unge.webp"
                  alt="Susan i samtale med ung klient"
                  fill
                  className="object-cover relative z-[1] rounded-2xl"
                />
            
              </div>
            </FadeIn>

            {/* Text — right */}
            <FadeIn delay={150} className="w-full md:w-3/5 md:pl-4 ">
              <div>
                <h3 className="text-black text-left mb-6">
                 <span className=""> Få ro til at være dig selv, </span> <br /> <span className=" italic text-[#F38A5D]">også når studiet presser på</span>
                </h3>
              </div>

              <p className="text-black mt-6">
                At være ung eller studerende kan være både spændende og
                overvældende. Du står overfor nye mennesker, nye mål og et
                socialt fællesskab, du skal finde din plads i.
              </p>

              <p className="text-black mt-4">
                Samtidig kan præstationspres, eksamensangst og følelsen af
                kontrol blive en daglig kamp. Jeg tilbyder en fast studierate på
                900 kr., så din økonomi ikke står i vejen for din trivsel.
              </p>

              <div className="flex justify-center md:justify-start mt-8 md:mt-10">
                <Button variant="study" href="/kontakt">
                  Book tid til studiepris
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungSection;
