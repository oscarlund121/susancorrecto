"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const variants = {
  orange: {
    wrapper: "bg-[#F38A5D] hover:bg-[#e07a4f] pl-4 pr-1.5 py-1.5 rounded-full border-2 border-[#F38A5D] hover:border-[#e07a4f]",
    text: "text-white",
    circle: "bg-white/20 group-hover/btn:bg-white/30",
    icon: "text-white",
  },
  inverse: {
    wrapper: "",
    text: "text-[#367067] group-hover/btn:text-white",
    circle: "bg-[#367067] group-hover/btn:bg-[#DBE1F8]",
    icon: "text-[#DBE1F8] group-hover/btn:text-[#367067]",
  },
  light: {
    wrapper: "bg-[#367067] hover:bg-[#DBE1F8] pl-3 pr-1.5 py-1 rounded-full",
    text: "text-white group-hover/btn:text-[#367067]",
    circle: "bg-[#DBE1F8] group-hover/btn:bg-[#367067]",
    icon: "text-[#367067] group-hover/btn:text-[#DBE1F8]",
  },
};

const SeeMoreButton = ({ children, variant = "light", href, className = "" }) => {
  const v = variants[variant] || variants.light;

  const content = (
    <>
      {children && (
        <span className={`text-md font-light transition-colors ${v.text}`}>
          {children}
        </span>
      )}
      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300 ${v.circle}`}>
        <FaArrowRight className={`text-xs sm:text-sm transition-colors duration-300 group-hover/btn:animate-[arrow-slide_0.5s_ease-in-out] ${v.icon}`} />
      </span>
    </>
  );

  const classes = `group/btn inline-flex items-center justify-center gap-2 sm:gap-3 transition-all duration-200 ${v.wrapper} ${className}`;

  if (href) return <Link href={href} className={classes}>{content}</Link>;
  return <span className={classes} aria-hidden="true">{content}</span>;
};

export default SeeMoreButton;