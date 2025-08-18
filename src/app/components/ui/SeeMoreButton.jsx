"use client";

const SeeMoreButton = ({ 
  children = "Læs mere", 
  variant = "light" 
}) => {

  const isLight = variant === "light";

  return (
    <button className="flex items-center gap-3">
      <span
        className={`text-xl font-light ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        {children}
      </span>

      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center  ${
          isLight
            ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
            : "bg-[#367067] group-hover:bg-[#DBE1F8]"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
