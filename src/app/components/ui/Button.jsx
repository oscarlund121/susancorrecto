"use client";

import Link from "next/link";

const Button = ({
  children = "Book en samtale",
  variant = "primary",
  href = "/kontakt",
}) => {
  const isPrimary = variant === "primary";
  const isLight = variant === "light";

  const buttonStyles = isPrimary
    ? "bg-[#367067] text-white hover:text-[#367067] hover:bg-[#DBE1F8] border-[#367067]"
    : isLight
      ? "bg-transparent text-[#DBE1F8] hover:text-[#DBE1F8] border-transparent underline"
      : "bg-[#DBE1F8] text-[#367067] hover:text-white hover:bg-[#367067] hover:border-[#DBE1F8] border-[#367067]";

  const circleStyles = isPrimary
    ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
    : isLight
      ? "bg-[#DBE1F8] group-hover:bg-[#367067]"
      : "bg-[#367067] group-hover:bg-[#DBE1F8]";

  const strokeColor = isPrimary || isLight ? "#367067" : "#DBE1F8";
  const strokeHoverClass =
    isPrimary || isLight
      ? "group-hover:stroke-[#DBE1F8]"
      : "group-hover:stroke-[#367067]";

  return (
    <Link href={href}>
      <button
        className={`${buttonStyles} ${isLight ? "pl-3 pr-1.5 py-1 sm:pl-5 sm:pr-3 sm:py-1.5 text-lg sm:text-lg" : "pl-2 pr-1 py-0.5 sm:pl-4 sm:pr-3 sm:py-1 text-lg sm:text-xl"} border-2 rounded-full font-light flex items-center gap-2 sm:gap-3 transition-colors group`}
      >
        {children}
        <div
          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${circleStyles}`}
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
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={strokeHoverClass}
            />
          </svg>
        </div>
      </button>
    </Link>
  );
};

export default Button;
