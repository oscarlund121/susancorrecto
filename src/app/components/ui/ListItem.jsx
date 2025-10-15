import { FaCheck } from "react-icons/fa";

const ListItem = ({ children, className = "" }) => {
  return (
    <li className={`flex items-start gap-4 ${className}`}>
      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
        <FaCheck className="w-3.5 h-3.5 text-[#367067]" />
      </div>
      <span className="text-white text-lg font-light leading-relaxed">
        {children}
      </span>
    </li>
  );
};

export default ListItem;