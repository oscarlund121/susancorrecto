"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import FloatingContactForm from "./FloatingContactForm";

const CollapsibleForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
      {/* Form that opens upward */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden mb-4 w-[90vw] max-w-md ${
          isOpen
            ? "max-h-[700px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FloatingContactForm />
      </div>

      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-[#367067] text-white rounded-full cursor-pointer hover:bg-[#2e6159] transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-4 flex items-center gap-3"
      >
        <span className="text-sm md:text-base font-light">
          {isOpen ? "Luk" : "Skal vi starte en samtale?"}
        </span>
        <span
          className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown className="w-3 h-3 text-white" />
        </span>
      </button>
    </div>
  );
};

export default CollapsibleForm;
