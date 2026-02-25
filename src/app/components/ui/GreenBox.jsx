'use client'

const GreenBox = ({text, variant = "default"}) => {
  if (variant === "soft") {
    return (
      <div className="inline-flex flex-shrink-0 items-center gap-2 py-1.5 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-[#367067] shrink-0"></span>
        <span className="text-black text-sm leading-none">{text}</span>
      </div>
    );
  }

  if (variant === "orange") {
    return (
      <div className=" inline-flex flex-shrink-0 h-9 items-center gap-2 px-4 ">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F38A5D] shrink-0"></span>
        <p className="text-[white] text-sm font-light leading-none">{text}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#367067] inline-flex flex-shrink-0 h-9 items-center px-4 rounded-full whitespace-nowrap">
      <span className="text-white text-sm font-light leading-none">{text}</span>
    </div>
  );
}

export default GreenBox;
