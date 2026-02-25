"use client";

import { FaArrowDown } from 'react-icons/fa';

export default function ScrollToButton({ targetId, children }) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      className="group inline-flex items-center gap-2 text-sm font-medium text-[#367067] hover:text-[#2a5a52] transition-colors cursor-pointer"
    >
      {children}
      <span className="w-7 h-7 rounded-full bg-[#367067] flex items-center justify-center overflow-hidden group-hover:bg-[#367067]/70 transition-colors duration-300">
        <FaArrowDown className="w-3 h-3 text-[white] group-hover:animate-[arrow-slide-vertical_0.5s_ease-in-out]" />
      </span>
    </button>
  );
}
