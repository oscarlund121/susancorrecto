import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, href, icon: Icon }) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-8 w-full h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      <div>
        <span className="inline-flex w-14 h-14 rounded-xl bg-[#F38A5D] items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-white" />
        </span>

        <h4 className="text-white text-xl font-medium mb-3">{title}</h4>

        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-2 mt-8 text-[#F38A5D] text-sm font-medium">
        <span className="transition-all duration-300 group-hover:mr-1">Læs mere</span>
        <span className="w-6 h-6 rounded-full bg-[#F38A5D] flex items-center justify-center">
          <FaArrowRight className="text-[10px] text-white transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
