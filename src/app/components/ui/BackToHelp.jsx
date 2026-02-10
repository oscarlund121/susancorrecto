import Link from "next/link";

const BackToHelp = () => {
  return (
    <div className="content-max">
      <div className="md:px-[20px] lg:px-[60px]">
        <Link href="/help" className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-200">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#367067] group-hover:bg-[#DBE1F8] flex items-center justify-center transition-all duration-200">
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10 6H2M2 6L6 2M2 6L6 10"
                className="stroke-white group-hover:stroke-[#367067] transition-colors"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm sm:text-lg font-light text-[#367067] group-hover:underline transition-colors">
            Oversigt
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BackToHelp;
