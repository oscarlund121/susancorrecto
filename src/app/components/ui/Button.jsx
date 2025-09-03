"use client";

/* const Button = ({ children = "Book en samtale", onClick }) => {

    return ( <button 
      onClick={onClick}
      className="bg-[#367067] text-[white] hover:text-[#367067] px-8 py-4 rounded-full text-xl font-light flex items-center gap-3 hover:bg-[#DBE1F8] "
    >
      {children}
      <div className="w-10 h-10 bg-[#DBE1F8] hover:bg-[#367067] hover:text-[#DBE1F8] rounded-full flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  );
   
}
 'use client' */

const Button = ({ children = "Book en samtale", variant = "primary" }) => {
  const isPrimary = variant === "primary";

  return (
    <button
      className={`${
        isPrimary
          ? "bg-[#367067] text-white hover:text-[#367067] hover:bg-[#DBE1F8] "
          : "bg-[#DBE1F8] text-[#367067] hover:text-white hover:bg-[#367067] hover:border-[#DBE1F8]"
      } pl-2 pr-1 py-0.5 sm:pl-4 sm:pr-3 sm:py-1 border-2 border-[#367067] rounded-full text-lg sm:text-xl font-light flex items-center gap-2 sm:gap-3 transition-colors group `}
    >
      {children}
      <div
        className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
          isPrimary
            ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
            : "bg-[#367067] group-hover:bg-[#DBE1F8]"
        }`}
      >
        <svg
          width="12"
          height="12"
          className="sm:w-4 sm:h-4"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2 6H10M10 6L6 2M10 6L6 10"
            stroke={isPrimary ? "#367067" : "#DBE1F8"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              isPrimary
                ? "group-hover:stroke-[#DBE1F8]"
                : "group-hover:stroke-[#367067]"
            }
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
