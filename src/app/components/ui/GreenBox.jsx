'use client'

const GreenBox = ({text}) => {
  return (
    <div className="bg-[#367067] flex-shrink-0 p-2 rounded-full block">
      <h4 className="text-white text-sm font-light">{text}</h4>
    </div>
  );
}

export default GreenBox;
