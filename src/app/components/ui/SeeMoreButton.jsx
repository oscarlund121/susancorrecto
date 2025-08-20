"use client";

const SeeMoreButton = ({ 
  children = "Læs mere", 
  variant = "light" 
}) => {

  const isLight = variant === "light";

  return (
    <button className="flex items-center gap-2 sm:gap-3 hover:gap-4 transition-all duration-200">
      <span
        className={`text-sm sm:text-lg lg:text-xl font-light transition-colors ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        {children}
      </span>

      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          isLight
            ? "bg-[#DBE1F8] hover:bg-[#367067]"
            : "bg-[#367067] hover:bg-[#DBE1F8]"
        }`}
      >
        <svg 
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path
            d="M2 6H10M10 6L6 2M10 6L6 10"
            stroke={isLight ? "white" : "#367067"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default SeeMoreButton;
