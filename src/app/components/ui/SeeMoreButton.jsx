"use client";

const SeeMoreButton = ({ 
  children = "Læs mere", 
  variant = "light" 
}) => {

  const isLight = variant === "light";

  return (
    <button className={`flex items-center gap-2 sm:gap-3 group-hover:gap-4 transition-all duration-200 ${isLight ? "group-hover:bg-[#DBE1F8]" : "group-hover:bg-[#376067]"} pl-3 pr-2 py-1 rounded-full`}>
      <span
        className={`text-sm sm:text-lg lg:text-xl font-light transition-colors ${
          isLight ? "text-[#DBE1F8] group-hover:text-[#367067] " : "text-[#367067] group-hover:text-white"
        }`}
      >
        {children}
      </span>

      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          isLight
            ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
            : "bg-[#367067] group-hover:bg-[#DBE1F8]"
        }`}
      >
        <svg 
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path
            d="M2 6H10M10 6L6 2M10 6L6 10"
            stroke={isLight ? "#367067" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isLight 
              ? "group-hover:stroke-[#DBE1F8]" 
              : "group-hover:stroke-[#367067]"
            }
          />
        </svg>
      </div>
    </button>
  );
};

export default SeeMoreButton;