import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceItem = ({ title, href, subtitle, icon: Icon }) => {
  return (
    <li className="mt-6">
      <Link
        href={href}
        className="group/card rounded-4xl flex flex-col justify-between bg-[#F38A5D] text-white md:text-white/65 hover:text-white transition-colors p-2 lg:p-4 -m-2 lg:-m-4"
      >
        <div className="flex items-center gap-4 pl-4">
          {Icon && (
            <span className="w-12 h-12 rounded-full bg-[#F38A5D] border-2 border-[#367067] flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-[#367067]" />
            </span>
          )}

          <div className="relative">
            <h3 className="text-left">
              {title}
              {subtitle && (
                <span className="font-extralight italic text-xs sm:text-base ml-1">
                  {subtitle}
                </span>
              )}
            </h3>
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#367067] transition-all duration-300 group-hover/card:w-full" />
          </div>
        </div>
        <div className="flex justify-end mt-3 pr-4">
          <span className="inline-flex items-center justify-center gap-2 sm:gap-3">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300 bg-[#367067] group-hover/card:bg-[#DBE1F8]">
              <FaArrowRight className="text-xs sm:text-sm transition-colors duration-300 text-[#DBE1F8] group-hover/card:text-[#367067] group-hover/card:animate-[arrow-slide_0.5s_ease-in-out]" />
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ServiceItem;
