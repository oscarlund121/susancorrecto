"use client";
import Image from "next/image";
import Navigation from "../layout/Navigation";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative section min-h-screen pb-16 lg:pb-16 md:pb-8 sm:pb-4">
      {/* Background image */}
      <Image
        src="/img/hero-img-blue-bright.jpg"
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
        <div className="relative z-20 flex items-start min-h-[75vh] sm:min-h-[70vh] content-max sm:pt-12 pt-0">
        <div className=" text-white ">
          {/* Add your hero content here */}
          <h1 className="mb-0 md:mb-4 text-hero-max text-left animate-fadeInUp">
            Terapi der giver dig frihed til at leve fuldt ud
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-transparent sm:bg-[#3670674D]/70 sm:border-t-[#367067] border-t-0 sm:border-t-2 px-4 py-8 md:py-4 animate-slideInLeft w-full">
        {/* Content inside box DOES have max-width constraint */}
        <div className="text-white flex flex-col items-center md:items-end content-max"> 
          <div className="w-full md:w-lg lg:w-xl">
          <p className="md:text-max">
           At tage skridtet eller være midt i forandring, kan både føles spændende og udfordrende. Jeg støtter dig i at håndtere pres, usikkerhed og fastlåste mønstre, så du kan finde indre ro, fokus og overskud, og opleve mere glæde og trivsel i hverdagen.

          </p>
          </div>
         {/*  <div className="sm:mt-0 my-4">
            <Button variant="secondary" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;