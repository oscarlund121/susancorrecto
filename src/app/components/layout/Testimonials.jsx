"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
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
    <div>
      <div className="hs">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="item bg-[#FAFCFB] relative p-9 md:p-11 w-[350px] rounded-[32px] "
          >
            {/* Quote icon — small, intentional */}
            <FaQuoteLeft className="text-[#F38A5D] text-lg mb-5" />

            {/* Quote text */}
            <p className="text-gray-800 text-lg font-light leading-[1.7] mb-8">
              {testimonial.quote}
            </p>

            {/* Separator */}
            <div className="border-t border-gray-200 pt-5 mb-5">
              <h5 className="font-semibold text-black text-sm">{testimonial.name}</h5>
              <p className="text-[#F38A5D] text-xs font-medium mt-1">{testimonial.issue}</p>
            </div>

            {/* Read more — subtle text link */}
            <button
              onClick={() => openModal(testimonial)}
              className="group mt-auto flex items-center gap-2 text-sm text-[#367067] hover:text-[#2a5a52] transition-colors cursor-pointer"
            >
              Læs hele oplevelsen
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl p-10 md:p-14 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              ×
            </button>

            {/* Watermark quote */}
            <FaQuoteLeft className="text-[#367067] opacity-10 text-6xl mb-6" />

            {/* Full quote */}
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              {selectedTestimonial.fullQuote}
            </p>

            {/* Author info */}
            <div className="border-t border-gray-100 pt-6">
              <h5 className="font-semibold text-black text-lg">
                {selectedTestimonial.name}
              </h5>
              <p className="text-[#F38A5D] font-medium mt-1">{selectedTestimonial.issue}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
