"use client";
import Image from "next/image";
import Navigation from "../layout/Navigation";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative section min-h-screen pb-16 lg:pb-16 md:pb-8 sm:pb-4">
      {/* Background image */}
      <Image
        src="/img/hero-img.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navigation on top */}
      <div className="relative z-20">
        <Navigation variant="transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex items-start md:items-center sm:justify-left content-max pt-20 md:pt-16 sm:pt-12">
        <div className="text-left text-white ">
          {/* Add your hero content here */}
          <h1 className="mb-4 text-hero-max text-center sm:text-left">
            Terapi der giver dig frihed til at leve fuldt ude
          </h1>
        </div>
      </div>

      <div className="absolute bottom-[-3.5rem] right-0 z-20 bg-[#3670674D]/70 border-t-[#367067] border-t-2 rounded-lg p-6 ">
        {/* Content inside box DOES have max-width constraint */}
        <div className="text-white space-y-4 md:w-xl w-sm pr-12 ">
          <p className="text-sm leading-relaxed">
            At starte eller være i gang med at skulle kan være både spændende og
            frustrerende. Jeg hjælper med at håndtere pres, usikkerhed og
            fastlåsthed, så du kan finde ro, fokus og trivsel i hverdagen.
          </p>
          <div className="pt-2">
            <Button variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
