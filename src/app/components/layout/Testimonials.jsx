"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    // Set CSS variable for total number of testimonials
    const testimonialContainer = document.querySelector(".hs");
    if (testimonialContainer) {
      testimonialContainer.style.setProperty("--total", testimonials.length);
    }
  }, [testimonials]);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="">
      <div className="hs">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="item bg-white/80 backdrop-blur-sm p-6  rounded-lg shadow-sm"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="text-[#367067] text-xl mb-4" />

            {/* Quote text */}
            <p className=" mb-6 ">"{testimonial.quote}"</p>

            {/* Author info */}
            <div className="mb-4">
              <h5 className="font-semibold  text-sm">{testimonial.name}</h5>
              <p className=" text-xs">{testimonial.issue}</p>
            </div>

            {/* Read more button */}
            <button
              onClick={() => openModal(testimonial)}
              className="group flex items-center gap-2 text-white bg-[#367067] hover:text-[#367067] hover:bg-[#DBE1F8] transition-colors px-4 py-2 rounded-full self-end font-light"
            >
              Læs hele oplevelsen
              <div className="w-5 h-5 bg-[#DBE1F8] group-hover:bg-[#367067] rounded-full flex items-center justify-center transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6H10M10 6L6 2M10 6L6 10"
                    stroke="#367067"
                    className="group-hover:stroke-[#DBE1F8]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            {/* Quote icon */}
            <FaQuoteLeft className="text-gray-400 text-2xl mb-6" />

            {/* Full quote */}
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              "{selectedTestimonial.fullQuote}"
            </p>

            {/* Author info */}
            <div>
              <h5 className="font-semibold text-gray-800 text-lg mb-2">
                {selectedTestimonial.name}
              </h5>
              <p className="text-gray-600">{selectedTestimonial.issue}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
