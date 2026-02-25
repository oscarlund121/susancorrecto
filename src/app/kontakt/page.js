"use client";

import Navigation from '../components/layout/Navigation';
import ContactForm from '../components/ui/ContactForm';
import ContactInfoCards from '../components/ui/ContactInfoCard';
import ScrollToButton from '../components/ui/ScrollToButton';

export default function KontaktPage() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero header — emotionel landing */}
      <div className="bg-[#F8F8F8] pt-12 pb-32 md:pt-20 md:pb-40">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left — headline & intro */}
              <div>
                <div className="flex  mb-4">
                  <p className="text-[#F38A5D] tracking-wide uppercase mb-0">Kontakt</p>

                </div>
                <h2 className="mb-4">Tag det første skridt mod mere ro og overskud</h2>
                <p className="max-w-xl text-gray-600">
                  Udfyld formularen eller kontakt mig direkte, så vender jeg tilbage inden for 24 timer.
                </p>
              </div>

              {/* Right — contact info cards */}
              <div className='flex flex-col gap-6'>
                <ContactInfoCards />
                <div className='flex justify-center'>
                  <ScrollToButton targetId="kontakt-formular">Kontaktformular</ScrollToButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form — floating card overlapping header */}
      <div id="kontakt-formular" className="-mt-24 md:-mt-28 pb-16 md:pb-24 scroll-mt-8">
        <div className="content-max">
          <div className="md:px-[20px] lg:px-[60px]">
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}