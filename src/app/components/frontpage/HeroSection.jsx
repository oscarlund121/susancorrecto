"use client";
import Image from "next/image";
import Navigation from "../layout/Navigation";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative section min-h-screen pb-16 lg:pb-16 md:pb-8 sm:pb-4">
      {/* Background image */}
      <Image
        src="/img/hero-img.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover object-[72%_center]"
      />

      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Navigation on top */}
      <div className="relative z-50">
        <Navigation variant="transparent" />
      </div>

      {/* Hero content */}
        <div className="relative z-20 flex items-start min-h-[75vh] sm:min-h-[70vh] content-max sm:pt-12">
        <div className=" text-white ">
          {/* Add your hero content here */}
          <h1 className="mb-4 text-hero-max text-left animate-fadeInUp">
            Terapi der giver dig frihed til at leve fuldt ude.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-[-3rem] md:right-0 right-6 md:left-0 left-6 z-20 bg-transparent sm:bg-[#3670674D]/70 sm:border-t-[#367067] border-t-0 mx-6 sm:mx-0 sm:border-t-2 p-6 animate-slideInLeft">
        {/* Content inside box DOES have max-width constraint */}
        <div className="text-white flex flex-col items-center md:items-end "> 
          <div className="md:w-lg lg:w-xl w-sm">
          <p className="md:text-max">
            At starte eller være i gang med at skulle kan være både spændende og
            frustrerende. Jeg hjælper med at håndtere pres, usikkerhed og
            fastlåsthed, så du kan finde ro, fokus og trivsel i hverdagen.
          </p>
          </div>
          <div className="mt-6">
            <Link href="/kontakt">
              <Button variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;