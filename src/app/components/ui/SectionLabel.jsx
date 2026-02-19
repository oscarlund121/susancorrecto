const SectionLabel = ({ children, color = "green" }) => {
  const colorClass = color === "green" 
    ? "text-[#367067] border-[#367067]" 
    : "text-gray-600 border-gray-600";

  return (
    <small className={`${colorClass} font-semibold text-2xl mb-2 border-l-2 pl-3`}>
      {children}
    </small>
  );
};

export default SectionLabel;
