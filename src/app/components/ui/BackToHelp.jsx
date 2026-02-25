import Link from "next/link";

const BackToHelp = () => {
  return (
    <Link
      href="/help"
      className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-200"
    >
      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white group-hover:bg-[#F38A5D]/20 transition-all duration-200">
        <svg
          className="w-3 h-3"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10 6H2M2 6L6 2M2 6L6 10"
            className="stroke-[#F38A5D] group-hover:stroke-[#367067] transition-colors"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-lg font-light text-[#F38A5D] group-hover:text-[#367067] group-hover:underline transition-colors">
        Oversigt
      </span>
    </Link>
  );
};

export default BackToHelp;
