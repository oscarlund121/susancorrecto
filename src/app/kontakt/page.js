"use client";

import Navigation from '../components/layout/Navigation';
import HeaderSection from '../components/layout/FrontpageHeaderSection';
import ContactForm from '../components/ui/ContactForm';

// Metadata skal eksporteres fra en separat fil for client components
// Se kontakt/layout.js for metadata

export default function KontaktPage() {
  const handleFormSubmit = (formData) => {
    // Custom form submission logic
    console.log('Form submitted:', formData);
    // Her kan du tilføje API kald, email sending, etc.
  };

  return (
    <div className="bg-white">
      <Navigation />

      <div className="bg-[#DBE1F8]/50 md:py-16 py-8">
        <div className="mb-8">
          <HeaderSection
            title="Kontakt"
            text="Har du spørgsmål eller ønsker du at booke en samtale? Kontakt mig gerne, så vender jeg tilbage hurtigst muligt."
            variant={false}
            borderColor="black"
          />
        </div>
      </div>

      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between">
            <div>
              <div className="mb-6 border-b-2 border-black">
                <h3>Kontaktoplysninger</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Send en mail eller læg en besked.
              </p>

              {/* Contact info boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-black mb-2">E-mail</h4>
                  <p className="text-black">kontakt@psykoterapisusan.dk</p>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-black mb-2">Telefon</h4>
                  <p className="text-black">+45 25 39 25 39</p>
                </div>
              </div>
            </div>

            {/* Kontaktformular - gemmes til senere
            <div className="flex justify-center">
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}