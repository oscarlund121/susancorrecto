'use client'

const GreenBox = ({text}) => {
  return (
    <div className="bg-[#367067] inline-block flex-shrink-0 py-2 px-4 rounded-full ">
      <h4 className="text-white text-sm font-light">{text}</h4>
    </div>
  );
}

export default GreenBox;
