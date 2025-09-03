"use client";

import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default handling
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 xl:w-xl lg:w-lg   bg-[#367067]/10 p-8 ">
        <div>
          <label htmlFor="name" className="block text-md font-medium text-[#367067] mb-2">
            Navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-1 py-3 border-b border-b-[#367067] focus:outline-none focus:border-b-2 transition-colors"
            placeholder="Dit fulde navn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-medium text-[#367067] mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-1 py-3 border-b border-b-[#367067] focus:outline-none focus:border-b-2 transition-colors"
            placeholder="din@email.dk"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-md font-medium text-[#367067] mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-1 py-3 border-b border-b-[#367067] focus:outline-none focus:border-b-2 transition-colors"
            placeholder="12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-md font-medium text-[#367067] mb-2">
            Besked *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-1 py-3 border-b border-b-[#367067] focus:outline-none focus:border-b-2 transition-colors resize-vertical"
            placeholder="Beskriv gerne hvad du søger hjælp til, eller hvad du gerne vil vide mere om..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#DBE1F8] hover:bg-[#367067] hover:text-[#DBE1F8] text-[#367067] border border-[#367067] hover:border-[#DBE1F8] font-medium py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-101 "
        >
          Send besked
        </button>
      </form>

    
    </div>
  );
};

export default ContactForm;
