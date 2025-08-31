'use client'

const GreenBox = ({text}) => {
  return (
    <div className="bg-[#367067] inline-flex flex-shrink-0 h-9 items-center px-4 rounded-full whitespace-nowrap">
      <h4 className="text-white text-sm font-light leading-none">{text}</h4>
    </div>
  );
}

export default GreenBox;
