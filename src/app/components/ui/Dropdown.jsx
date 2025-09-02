"use client";

import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="flex justify-center px-16 py-6 rounded-full  bg-[#367067] gap-8 mb-8">
      <Link
        href="/emdr"
        className="text-white font-light text-lg hover:text-[#D3D9E5] transition-all duration-300 relative group"
      >
        EMDR Terapi
        <span className="absolute left-0 bottom-[-4px]  w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <Link
        href="/essentiel-integrativ-psykoterapi"
        className="text-white font-light text-lg hover:text-[#D3D9E5] transition-all duration-300 relative group"
      >
        Essentiel Integrativ Psykoterapi
        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <Link
        href="/meditation"
        className="text-white font-light text-lg hover:text-[#D3D9E5] transition-all duration-300 relative group"
      >
        Meditation
        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <Link
        href="/familie-par"
        className="text-white font-light text-lg hover:text-[#D3D9E5] transition-all duration-300 relative group"
      >
        Familie- og parterapi
        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  );
};

export default Dropdown;