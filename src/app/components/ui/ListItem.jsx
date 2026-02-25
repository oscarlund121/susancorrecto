import { FiCheck } from "react-icons/fi";

const ListItem = ({ children, className = "" }) => {
  return (
    <li className={`flex items-start gap-4 ${className}`}>
      <div className="flex-shrink-0 w-6 h-6 rounded-full border-[1.5px] border-white/60 flex items-center justify-center mt-0.5">
        <FiCheck className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-white text-lg font-light leading-relaxed">
        {children}
      </span>
    </li>
  );
};

export default ListItem;