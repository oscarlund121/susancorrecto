"use client";

import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/ui/ContactForm';

export default function KontaktPage() {
  const handleFormSubmit = (formData) => {
    // Custom form submission logic
    console.log('Form submitted:', formData);
    // Her kan du tilføje API kald, email sending, etc.
  };

  return (
    <div className=" bg-white ">
      <Navigation />

      <div className="content-max md:py-16 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between py-16">
          <div>
            <div>
              <h2 className="text-4xl md:text-xl mb-8">
                Kontakt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Har du spørgsmål eller ønsker du at booke en samtale?

              </p>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kontakt mig gerne, så vender jeg tilbage hurtigst muligt.
                Send en mail eller læg en besked.
                Du kan også udfylde kontaktformularen. 
              </p>
              <div className='border-b border-b-[#367067] my-6'></div>

              {/* Contact info boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#367067] p-6 rounded-full shadow-md text-center">
                  <h4 className="font-semibold text-white mb-2">E-mail</h4>
                  <p className="text-white">susan@susanterapi.dk</p>
                </div>
                <div className="bg-[#367067] p-6 rounded-full shadow-md text-center">
                  <h4 className="font-semibold text-white mb-2">Telefon</h4>
                  <p className="text-white">+45 12 34 56 78</p>
                </div>
              </div>
               <div className='border-b border-b-[#367067]'></div>
            
            </div>
          </div>



          <div className='flex justify-center'>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>

    </div>
  );
}