"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children = "Book en samtale",
  variant = "primary",
  href = "/kontakt",
}) => {
  const isPrimary = variant === "primary";
  const isLight = variant === "light";
  const isStudy = variant === "study";

  const buttonStyles = isPrimary
    ? "bg-[#367067] text-white hover:text-[#367067] hover:bg-[#DBE1F8] border-[#367067]"
    : isLight
      ? "bg-transparent text-[#DBE1F8] hover:text-[#DBE1F8] border-transparent  hover:underline "
      : isStudy
        ? "bg-[#F38A5D] text-white hover:bg-[#e07a4f] border-[#F38A5D] hover:border-[#e07a4f]"
        : "bg-[#DBE1F8] text-[#367067] hover:text-white hover:bg-[#367067] hover:border-[#DBE1F8] border-[#367067]";

  const circleStyles = isPrimary
    ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
    : isLight
      ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
      : isStudy
        ? "bg-white/20 group-hover:bg-white/30"
        : "bg-[#367067] group-hover:bg-[#DBE1F8]";

  const iconColor = isPrimary || isLight
    ? "text-[#367067] group-hover:text-[#DBE1F8]"
    : isStudy
      ? "text-white group-hover:text-white"
      : "text-[#DBE1F8] group-hover:text-[#367067]";

  return (
    <Link href={href}>
      <button
        className={`${buttonStyles} ${isLight ? "pl-3 pr-1.5 py-2 sm:pl-5 sm:pr-3 sm:py-2.5 text-lg sm:text-lg" : isStudy ? "pl-5 pr-2 py-2 sm:pl-8 sm:pr-3 sm:py-2.5 text-base sm:text-lg" : "pl-2 pr-1 py-1.5 sm:pl-4 sm:pr-3 sm:py-2 text-lg sm:text-xl"} border-2 rounded-full font-normal flex items-center gap-2 sm:gap-3 transition-colors group`}
      >
        {children}
        <div
          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center overflow-hidden ${circleStyles} transition-colors duration-300`}
        >
          <FaArrowRight className={`text-xs sm:text-sm ${iconColor} transition-colors duration-300 group-hover:animate-[arrow-slide_0.5s_ease-in-out]`} />
        </div>
      </button>
    </Link>
  );
};

export default Button;
