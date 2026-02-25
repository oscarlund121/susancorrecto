"use client";
import Image from "next/image";
import Navigation from "../layout/Navigation";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative section h-[95vh] pb-16 lg:pb-16 md:pb-8 sm:pb-4 flex flex-col">
      {/* Background image */}
      <Image
        src="/img/hero-img-new.webp"
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover "
      />

      {/* Dark overlay — gradient from left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />

      {/* Navigation on top */}
      <div className="relative z-50">
        <Navigation variant="transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex items-end md:items-start mt-8 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col text-white text-left">


          {/* H1 — emotionel hook med typografisk rytme */}
          <h1 className="mb-0 text-left [text-shadow:0_2px_20px_rgba(0,0,0,0.3),0_4px_40px_rgba(0,0,0,0.15)] opacity-0 animate-fade-in-up">
            Find indre <span className="text-[#F38A5D]">ro</span> <br />
            og 
            <span className="text-[#F38A5D]"> overskud</span> 
          </h1>

          {/* Subheader — beroligende undertekst */}
          <p className="mt-6 md:mt-8 text-white/80 font-light max-w-md md:max-w-lg text-base md:text-lg leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Jeg støtter dig i at håndtere pres, usikkerhed og fastlåste mønstre
            — så du kan opleve mere glæde og trivsel i hverdagen.
          </p>

          {/* CTA — tydelig handling */}
          <div className="mt-8 md:mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <Button variant="primary" href="/kontakt">
              Book en samtale
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
